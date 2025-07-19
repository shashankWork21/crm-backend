import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { SessionService } from 'src/session/session.service';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  constructor(private readonly sessionService: SessionService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers.cookie;
      const token = authHeader?.split('=')[1];
      if (!token) {
        throw new UnauthorizedException('No session token provided');
      }

      const { user, session } =
        await this.sessionService.validateSession(token);
      req['user'] = user;
      req['session'] = session;

      next();
    } catch (error) {
      console.log('Session middleware error:', error.message);
      throw new UnauthorizedException('Invalid or expired session');
    }
  }
}
