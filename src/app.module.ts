import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OrganisationModule } from './organisation/organisation.module';
import { ActivityModule } from './activity/activity.module';
import { DbModule } from './db/db.module';
import { SessionModule } from './session/session.module';
import { TokenModule } from './token/token.module';
import { ContactModule } from './contact/contact.module';
import { SessionMiddleware } from './middlewares/session.middleware';
import { AdminMiddleware } from './middlewares/admin.middleware';
import { BranchModule } from './branch/branch.module';
import { NoteModule } from './note/note.module';
import { ScheduleModule } from './schedule/schedule.module';
import { RegionModule } from './region/region.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    UserModule,
    OrganisationModule,
    ActivityModule,
    DbModule,
    SessionModule,
    TokenModule,
    ContactModule,
    BranchModule,
    NoteModule,
    RegionModule,
    ScheduleModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SessionMiddleware)
      .forRoutes(
        { path: '', method: RequestMethod.GET },
        { path: 'organisation/{*splat}', method: RequestMethod.ALL },
        { path: 'tags/{*splat}', method: RequestMethod.ALL },
        { path: 'branch/{*splat}', method: RequestMethod.ALL },
        { path: 'contact/{*splat}', method: RequestMethod.ALL },
        { path: 'activity/{*splat}', method: RequestMethod.ALL },
        { path: 'note/{*splat}', method: RequestMethod.ALL },
        { path: 'region/{*splat}', method: RequestMethod.ALL },
        { path: 'schedule/{*splat}', method: RequestMethod.ALL },
        { path: 'team/{*splat}', method: RequestMethod.GET },
      );
    consumer
      .apply(AdminMiddleware)
      .forRoutes(
        { path: 'organisation', method: RequestMethod.POST },
        { path: 'organisation', method: RequestMethod.PUT },
        { path: 'organisation/{*splat}', method: RequestMethod.DELETE },
        { path: 'tags', method: RequestMethod.POST },
        { path: 'tags/{*splat}', method: RequestMethod.PATCH },
        { path: 'tags/{*splat}', method: RequestMethod.DELETE },
        { path: 'region/{*splat}', method: RequestMethod.ALL },
        { path: 'schedule/{*splat}', method: RequestMethod.ALL },
        { path: 'team/{*splat}', method: RequestMethod.GET },
      );
  }
}
