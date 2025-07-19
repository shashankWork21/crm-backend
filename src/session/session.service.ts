import * as jwt from 'jsonwebtoken';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Session, User } from 'prisma-client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class SessionService {
  constructor(private readonly db: DbService) {}

  private get sessionSecret(): string {
    const secret = process.env.SESSION_SECRET;
    if (!secret) {
      throw new Error('SESSION_SECRET environment variable is not defined');
    }
    return secret;
  }

  async createSession(user: User) {
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 4 * 60 * 60 * 1000); // 4 hours from now
    const session = await this.db.session.create({
      data: {
        userId: user.id,
        expiresAt,
      },
    });

    const sessionToken = jwt.sign(
      { sessionId: session.id },
      this.sessionSecret,
      { expiresIn: '4h' },
    );
    return sessionToken;
  }

  async validateSession(
    sessionToken: string,
  ): Promise<{ user: Partial<User>; session: Partial<Session> }> {
    try {
      const decoded = jwt.verify(sessionToken, this.sessionSecret) as {
        sessionId: string;
      };
      const sessionId = decoded.sessionId;

      const session = await this.db.session.findUnique({
        where: { id: sessionId },
        include: { user: true },
      });

      if (!session) {
        throw new UnauthorizedException('Session not found');
      }

      if (session.expiresAt < new Date()) {
        await this.db.session.delete({
          where: { id: sessionId },
        });
        throw new UnauthorizedException('Session expired');
      }

      return { user: session.user, session };
    } catch (error) {
      console.log('Error validating session:', error);
      throw new UnauthorizedException('Invalid session token');
    }
  }

  async deleteSessionFromToken(sessionToken: string): Promise<void> {
    try {
      const decoded = jwt.verify(sessionToken, this.sessionSecret) as {
        sessionId: string;
      };
      const sessionId = decoded.sessionId;

      await this.db.session.delete({
        where: { id: sessionId },
      });
    } catch (error) {
      console.log('Error deleting session:', error);
      throw new Error('Invalid session token');
    }
  }

  async deleteExpiredSessions(): Promise<void> {
    const now = new Date();
    await this.db.session.deleteMany({
      where: {
        expiresAt: {
          lt: now,
        },
      },
    });
  }
}
