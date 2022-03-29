import * as fs from 'fs';
import { parse } from 'dotenv';

/**
 * ConfigService
 */
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const isDevelopmentEnv = process.env.NODE_ENV.trim() === 'development';
    if (isDevelopmentEnv) {
      const envFilePath = __dirname + '/../../.env';
      const existsPath = fs.existsSync(envFilePath);

      if (!existsPath) {
        console.log('.env file does not exist');
        process.exit(0);
      }

      this.envConfig = parse(fs.readFileSync(envFilePath));
    } else {
      const envFilePath = __dirname + '/../../.env.production';
      const existsPath = fs.existsSync(envFilePath);

      if (!existsPath) {
        console.log('.env file does not exist');
        process.exit(0);
      }

      this.envConfig = parse(fs.readFileSync(envFilePath));

      // this.envConfig = {
      //   // DB
      //   DB_TYPE: process.env.DB_TYPE,
      //   DB_HOST: process.env.DB_HOST,        
      //   DB_PORT: process.env.DB_PORT,
      //   DB_USERNAME: process.env.DB_USERNAME,
      //   DB_PASSWORD: process.env.DB_PASSWORD,
      //   DB_NAME: process.env.DB_NAME,
      //   // API
      //   API_PORT: process.env.API_PORT,
      //   API_KEY: process.env.API_KEY,
      //   API_SECRET: process.env.API_SECRET,
      //   // JWT
      //   JWT_SECRET: process.env.JWT_SECRET,
      //   JWT_SECRET_CUSTOMER: process.env.JWT_SECRET_CUSTOMER,
      // };
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
