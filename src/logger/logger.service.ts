import { Injectable, LoggerService } from '@nestjs/common';
import { writeFile } from 'fs';
import { join } from 'path';
import { Configuration } from '../config/config.keys';
import { ConfigService } from '../config/config.service';

@Injectable()
export class Logger implements LoggerService {
  constructor(
    private readonly configService: ConfigService,

  ) {}

  async log(message: string) {
    const logMessage = `[${new Date().toISOString()}] INFO: ${message}\n`;

    if (this.configService.get(Configuration.WRITE_LOGS_TO_FILE) === 'true') {
      await this.writeToFile(logMessage, join(this.configService.get(Configuration.LOGDIR), 'info.log'));
    }
  }

  async error(message: string) {
    const errorMessage = `[${new Date().toISOString()}] ERROR: ${message}\n`;

    if (this.configService.get(Configuration.WRITE_LOGS_TO_FILE) === 'true') {
      await this.writeToFile(errorMessage, join(this.configService.get(Configuration.LOGDIR), 'error.log'));
    }
  }

  async warn(message: string) {
    await this.log(message);
  }

  async debug(message: string) {
    await this.log(message);
  }

  async verbose(message: string) {
    await this.log(message);
  }

  async writeToFile(message: string, filePath: string): Promise<void> {
    writeFile(
      filePath,
      message,
      {
        flag: 'a',
      },
      (err) => {
        if (err) {
          console.log(err);
        }
      },
    );
  }
}