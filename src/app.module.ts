import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DailyModule } from './crons/daily/daily.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MinutelyModule } from './crons/minutely/minutely.module';
import { EmailModule } from './core/email/email.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    DailyModule,
    MinutelyModule,
    EmailModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
