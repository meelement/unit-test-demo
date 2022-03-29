import { GraphQLModule } from '@nestjs/graphql';
import { LoanCreditModule } from '../modules/loan-credit/loan.credit.module';
import { getCustomError } from '../shared/error/http.error';
import { UserModule } from '../modules/user-account/user.module';
import { AuthModule } from '../modules/user-auth/auth.module';
import { LoanAppConfigModule } from '../modules/app-config/app.config.module';
import { UserInfoModule } from '../modules/user-info/user.info.module';
import { LoanContractModule } from '../modules/loan-contract/loancontract.module';
import { GetDataModule } from '../modules/get-data/getdata.module';
import { NotificationModule } from '../modules/notification/notification.module'; 
import { LocationModule } from '../modules/location/location.module';
export const graphQLProvider = [
  GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
      include: [
        AuthModule,
        UserModule,
        LoanCreditModule,
        LoanAppConfigModule,
        UserInfoModule,
        LoanContractModule,
        GetDataModule,
        NotificationModule,
        LocationModule
      ],
  })
]