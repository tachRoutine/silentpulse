import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DailyModule } from './crons/daily/daily.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot(), DailyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
