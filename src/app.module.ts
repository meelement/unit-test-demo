import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user-account/user.module';
import { AuthModule } from './modules/user-auth/auth.module';
import { GraphqlModule } from './graphql/graphql.module';
import { LoanCreditModule } from './modules/loan-credit/loan.credit.module';
import { LoanAppConfigModule } from './modules/app-config/app.config.module';
import { UserInfoModule } from './modules/user-info/user.info.module';
import { LoanContractModule } from './modules/loan-contract/loancontract.module';
import { GetDataModule } from './modules/get-data/getdata.module';
import { FcmModule } from 'nestjs-fcm';
import * as path from 'path';
import { NotificationModule } from './modules/notification/notification.module';
import { LocationModule } from './modules/location/location.module';
import { RabbitqmModule } from './modules/rabbitmq/rabbitmq.module';
import { AIModule } from './modules/ai-service/ai.service.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    FcmModule.forRoot({
      firebaseSpecsPath: path.join(__dirname, '../serviceAccountFirebase.json'),
    }),
    ConfigModule,
    DatabaseModule,
    UserModule,
    LoanCreditModule,
    AuthModule,
    LoanAppConfigModule,
    GraphqlModule,
    UserInfoModule,
    LoanContractModule,
    GetDataModule,
    NotificationModule,
    LocationModule,
    RabbitqmModule,
    AIModule
  ],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.API_PORT);
  }
}