import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class MinutelyService {
  private readonly logger = new Logger(MinutelyService.name);

  @Cron('* * * * *')
  handleCron() {
    this.logger.log('Minutely cron job executed');
  }
}