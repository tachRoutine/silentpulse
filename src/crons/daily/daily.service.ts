import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class DailyService {
  private readonly logger = new Logger(DailyService.name);

  @Cron('0 0 * * *')
  handleCron() {
    this.logger.log('Daily cron job executed');
  }

  handleCronWithError() {
    this.logger.log('Daily cron job with error executed');
    // Simulates an error
    throw new Error('Simulated error in daily cron job');
  }

  private sendEmailNotification() {
    // Logic to send email notification
    this.logger.log('Email notification sent');
  }
}
