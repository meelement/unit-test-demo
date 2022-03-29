import { ObjectType, Field } from '@nestjs/graphql'
import { MutationResult } from './result.interface'

@ObjectType()
export class UserLoginResponse extends MutationResult {
    @Field({ nullable: true })
    Token?: string;
} 

@ObjectType()
export class IPasswordResponse {

    @Field({ nullable: true })
    Message?: string;
} 