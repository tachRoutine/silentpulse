import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class MinutelyService {
  private readonly logger = new Logger(MinutelyService.name);

  @Cron(CronExpression.EVERY_MINUTE)
  handleCron() {
    this.logger.log('Minutely cron job executed');
  }
}
