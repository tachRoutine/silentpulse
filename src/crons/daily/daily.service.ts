import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class DailyService {
  private readonly logger = new Logger(DailyService.name);

  handleCron() {
    this.logger.log('Daily cron job executed');
    // Add your daily task logic here
  }

  handleCronWithError() {
    this.logger.log('Daily cron job with error executed');
    // Simulate an error
    throw new Error('Simulated error in daily cron job');
  }
}
