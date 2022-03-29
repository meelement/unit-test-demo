import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class NotificationResult {

    @Field((_type) => [String], { nullable: true })
    Bold?: string[];

    @Field()
    Id?: number;


    @Field({ nullable: true })
    NotifyContent?: string;

    @Field({ nullable: true })
    NotifyTitle?: string;

    @Field({ nullable: true })
    NotifyType?: string;

    @Field({ nullable: true })
    UserId?: string;

    @Field({ nullable: true })
    Status?: boolean;

    @Field({ nullable: true })
    LoanId?: string;

    @Field({ nullable: true })
    CreatedAt?: string;

}