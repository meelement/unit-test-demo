import { ObjectType, Field } from '@nestjs/graphql'
import {MProvince} from "../../modules/location/province.entity";
import {MDistrict} from "../../modules/location/district.entity";
import {MWard} from "../../modules/location/ward.entity";
import {UserBank} from "../../modules/user-account/user.bank.entity";
import {BaseEntity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserProfile} from "../../modules/user-account/user.profile.entity";

@ObjectType()
export class MutationResult {
    @Field()
    StatusCode?: number;

    @Field({ nullable: true })
    Message?: string;

    @Field({ nullable: true })
    UserStatus?: string;

    @Field({ nullable: true })
    Id?: string;

    @Field({ nullable: true })
    isDenied?: boolean;


    @Field({ nullable: true })
    Reason?: string;

    @Field({ nullable: true })
    UserName?: string;

    @Field({ nullable: true })
    FullName?: string;

    @Field({ nullable: true })
    UserId?: string;

    @Field({ nullable: true })
    LoanStatus?: string;

    @Field({ nullable: true })
    LoanId?: string;

}

@ObjectType()
export class Province {
    @Field({ nullable: true })
    province_id: number | null;

    @Field({ nullable: true })
    province_name: string | null;
}

@ObjectType()
export class District {
    @Field({ nullable: true })
    district_id: number | null;

    @Field({ nullable: true })
    district_name: string | null;
}

@ObjectType()
export class Ward {
    @Field({ nullable: true })
    ward_id: number | null;

    @Field({ nullable: true })
    ward_name: string | null;
}

@ObjectType()
export class UserInfoResponseV2 {
    @Field()
    Status?: string;

    @Field({ nullable: true })
    UserName?: string;


    @Field({ nullable: true })
    CustomerId?: string;

    @Field({ nullable: true })
    FullName?: string;

    @Field({ nullable: true })
    CCCD?: string;

    @Field({ nullable: true })
    DateCCCD?: string;

    @Field({ nullable: true })
    FaceImageUrl?: string;

    @Field({ nullable: true })
    FrontCCCDImageUrl?: string;

    @Field({ nullable: true })
    BackCCCDImageUrl?: string;

    @Field({ nullable: true })
    Reference_1?: string;


    @Field({ nullable: true })
    Reference_2?: string;

    @Field({ nullable: true })
    NameReference_1?: string;

    @Field({ nullable: true })
    NameReference_2?: string;

    @Field({ nullable: true })
    PhoneNumber_1?: string;

    @Field({ nullable: true })
    PhoneNumber_2?: string;

    @Field({ nullable: true })
    BankAccountNumber?: string;

    @Field({ nullable: true })
    BankName?: string;

    @Field({ nullable: true })
    BankHolder?: string;

    @Field({ nullable: true })
    DisbursementType?: number;

    @Field({ nullable: true })
    Address?: string;

    @Field({ nullable: true })
    Province?: Province;

    @Field({ nullable: true })
    District?: District;

    @Field({ nullable: true })
    Ward?: Ward;

    @Field({ nullable: true })
    UserBank?: UserBank;

}

@ObjectType()
export class UserInfoResponse {
    @Field()
    Status?: string;

    @Field({ nullable: true })
    UserName?: string;


    @Field({ nullable: true })
    CustomerId?: string;

    @Field({ nullable: true })
    FullName?: string;

    @Field({ nullable: true })
    CCCD?: string;

    @Field({ nullable: true })
    DateCCCD?: string;

    @Field({ nullable: true })
    FaceImageUrl?: string;

    @Field({ nullable: true })
    FrontCCCDImageUrl?: string;

    @Field({ nullable: true })
    BackCCCDImageUrl?: string;

    @Field({ nullable: true })
    Reference_1?: string;


    @Field({ nullable: true })
    Reference_2?: string;

    @Field({ nullable: true })
    NameReference_1?: string;

    @Field({ nullable: true })
    NameReference_2?: string;

    @Field({ nullable: true })
    PhoneNumber_1?: string;

    @Field({ nullable: true })
    PhoneNumber_2?: string;

    @Field({ nullable: true })
    BankAccountNumber?: string;

    @Field({ nullable: true })
    BankName?: string;

    @Field({ nullable: true })
    BankHolder?: string;

    @Field({ nullable: true })
    DisbursementType?: number;

    @Field({ nullable: true })
    Address?: string;

    @Field({ nullable: true })
    Province?: string;

    @Field({ nullable: true })
    District?: string;

    @Field({ nullable: true })
    Ward?: string;

}

@ObjectType()
export class UploadS3Response {
  @Field({ nullable: true })
  Message?: string

  @Field({ nullable: true })
  CCCD?: string

  @Field({ nullable: true })
  DateCCCD?: string

  @Field({ nullable: true })
  ImageUrl?: string

  @Field({ nullable: true })
  Type?: string

}


@ObjectType()
export class TermContentResponse {
  @Field({ nullable: true })
  Terms?: string
  
  @Field({ nullable: true })
  ContentTerms?: string

  @Field({ nullable: true })
  Status?: string

}

@ObjectType()
export class LoanPayment {
  @Field({ nullable: true })
  Name?: string
  
  @Field({ nullable: true })
  BankAccountNumber?: string

  @Field({ nullable: true })
  BankSml?: string

  @Field({ nullable: true })
  BankName?: string

  @Field({ nullable: true })
  CustomerId?: string

  @Field({ nullable: true })
  FullName?: string

  @Field({ nullable: true })
  LoanContractId?: string

}


@ObjectType()
export class ReNewPayment {
  @Field({ nullable: true })
  Name?: string
  
  @Field({ nullable: true })
  BankAccountNumber?: string

  @Field({ nullable: true })
  BankSml?: string

  @Field({ nullable: true })
  BankName?: string 

  @Field({ nullable: true })
  BankHolder?: string 

  @Field({ nullable: true })
  TransferContent?: string

  @Field({ nullable: true })
  FullName?: string

  @Field({ nullable: true })
  LoanContractId?: string

  @Field({ nullable: true })
  NeedPayMoney?: number

  @Field({ nullable: true })
  DepositMoney?: number 

  @Field({ nullable: true })
  NextLoanEndDate?: string 

  @Field({ nullable: true })
  LoanDuration?: number 

  @Field({ nullable: true })
  WalletAmount?: number 

  @Field({ nullable: true })
  isRequestingForExtension?: boolean 
}

@ObjectType()
export class UploadSubmitResponse {
  @Field({ nullable: true })
  Message?: string

  @Field({ nullable: true })
  UserStatus?: string
}


@ObjectType()
export class CheckAge {
  @Field({ nullable: true })
  Message?: string

  @Field({ nullable: true })
  Age?: string
}


@ObjectType()
export class RequestReNewResponse {
  @Field({ nullable: true })
  Message?: string
}


@ObjectType()
export class CallTimeResponse {
  @Field({ nullable: true })
  Message?: string
}


@ObjectType()
export class AppConfigResponse {
  @Field({ nullable: true })
  ForceUpdateVersionAndroid?: string

  @Field({ nullable: true })
  ForceUpdateVersionIOS?: string


  @Field({ nullable: true })
  LatestVersionAndroid?: string


  @Field({ nullable: true })
  LatestVersionIOS?: string


  @Field({ nullable: true })
  CountDownTime?: string

  @Field({ nullable: true })
  VideoLimitedTime?: string


  @Field({ nullable: true })
  MaintenanceFlagAndroid?: string

  @Field({ nullable: true })
  MaintenanceFlagIOS?: string

  @Field({nullable: true })
  SystemTime?: number
}

@ObjectType()
export class PushnotiResponse {
  @Field({ nullable: true })
  Message?: string
}


@ObjectType()
export class CountNotifyUnRead {
  @Field({ nullable: true })
  Unread?: number
}