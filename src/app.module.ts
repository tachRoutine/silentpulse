import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DailyModule } from './crons/daily/daily.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MinutelyModule } from './crons/minutely/minutely.module';

@Module({
  imports: [ScheduleModule.forRoot(), DailyModule, MinutelyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
