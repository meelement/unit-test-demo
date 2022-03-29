import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class GetAppConfigResult {

    @Field()
    Id?: string;

    @Field()
    ForceUpdateVersionAndroid?: number;

    @Field()
    ForceUpdateVersionIOS?: number;

    @Field()
    LatestVersionAndroid?: number;

    @Field()
    CountDownTime?: number;

    @Field()
    LatestVersionIOS?: number;

    @Field()
    SystemTime?: number;

    @Field()
    VideoLimitedTime?: number;

    @Field()
    MaintenanceFlagIOS?: number;

    @Field()
    MaintenanceFlagAndroid?: number;

}