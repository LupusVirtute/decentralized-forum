import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Data {
  @Field(() => String)
  message: string
}
