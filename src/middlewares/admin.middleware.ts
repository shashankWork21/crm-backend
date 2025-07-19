import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { SessionMiddleware } from './session.middleware';
import { SessionService } from 'src/session/session.service';
import { Role } from 'prisma-client';

@Injectable()
export class AdminMiddleware extends SessionMiddleware {
  constructor(sessionService: SessionService) {
    super(sessionService);
  }

  async use(req: Request, res: Response, next: NextFunction) {
    await super.use(req, res, () => {});

    if (req['user']?.role !== Role.ADMIN) {
      throw new ForbiddenException('Admin access required');
    }

    next();
  }
}
