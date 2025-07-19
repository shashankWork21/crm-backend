import { Body, Controller, Delete, Post, Res } from '@nestjs/common';
import { SessionService } from './session.service';
import { Response } from 'express';

@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('validate')
  async validateSession(
    @Body() data: { sessionToken: string },
    @Res() response: Response,
  ) {
    const { sessionToken } = data;
    try {
      const result = await this.sessionService.validateSession(sessionToken);
      response.cookie('sessionToken', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 4 * 60 * 60 * 1000, // 4 hours
        sameSite: 'lax',
      });
      return response.status(200).json({
        message: 'Session validated successfully',
        user: result.user,
        session: result.session,
      });
    } catch (error) {
      throw new Error('Invalid session token');
    }
  }

  @Delete()
  async deleteExpiredSessions() {
    try {
      await this.sessionService.deleteExpiredSessions();
      return { message: 'Sessions deleted successfully' };
    } catch (error) {
      throw new Error('Invalid session token');
    }
  }
}
