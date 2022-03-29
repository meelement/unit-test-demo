import { Module } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { Logger } from './logger.service';

@Module({
  providers: [Logger, ConfigService],
  exports: [Logger],
})
export class LoggerModule {}