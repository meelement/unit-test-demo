import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class ResultLoanCurrent {
  @Field({ nullable: true })
  LoanId?: string

  @Field({ nullable: true })
  LoanContractId?: string

  @Field({ nullable: true })
  LoanStatus?: string;
 
  @Field({ nullable: true })
  LoanAmount?: number;

  @Field({ nullable: true })
  LoanDuration?: number;

  @Field({ nullable: true })
  DurationCallTime?: string;

  @Field({ nullable: true })
  PaymentDate?: string;

  @Field({ nullable: true })
  LoanStartDate?: string;

  @Field({ nullable: true })
  ContractUrl?: string;

  @Field({ nullable: true })
  LoanRemainDate?: number;

  @Field({ nullable: true })
  LoanInterestRate?: number;
  
  @Field({ nullable: true })
  Refund?: number;

  @Field({ nullable: true })
  ServiceFee?: number;

  @Field({ nullable: true })
  ProfileStatus?: string;

  @Field({ nullable: true })
  RenewCount?: number;

  @Field({ nullable: true })
  OverdueInterest?: number;

  @Field({ nullable: true })
  PunishAmount?: number;

}


@ObjectType()
export class ResultgetLoanCredit {
  @Field({ nullable: true })
  LoanAmountMax?: number

  @Field({ nullable: true })
  LoanAmountMin?: number

  @Field({ nullable: true })
  LoanInterestRate?: number;

  @Field({ nullable: true })
  VndcPortalServiceRate?: number;
 
  @Field({ nullable: true })
  VndcServiceRate?: number;

  @Field({ nullable: true })
  VndcDataProcessingServiceRate?: number;

  @Field({ nullable: true })
  VndcInformationServiceRate?: number;

  @Field({ nullable: true })
  LoanDuration?: number;

  @Field({ nullable: true })
  IsDenied?: boolean;

  @Field({ nullable: true })
  StatusReject?: string;

  @Field({ nullable: true })
  ProfileStatus?: string;

}