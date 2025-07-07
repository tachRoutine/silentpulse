import { Module } from '@nestjs/common';
import { MinutelyService } from './minutely.service';

@Module({
  providers: [MinutelyService],
})
export class MinutelyModule {}
