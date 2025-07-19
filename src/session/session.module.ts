import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { DbModule } from 'src/db/db.module';
import { DbService } from 'src/db/db.service';
import { TokenModule } from 'src/token/token.module';
import { TokenService } from 'src/token/token.service';
import { SessionController } from './session.controller';

@Module({
  imports: [DbModule, TokenModule],
  controllers: [SessionController],
  providers: [SessionService, DbService, TokenService],
  exports: [SessionService],
})
export class SessionModule {}
