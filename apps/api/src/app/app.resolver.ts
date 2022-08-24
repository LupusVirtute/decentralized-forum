import { Query, Resolver } from '@nestjs/graphql'

import { AppService } from './app.service'
import { Data } from './data.dto'

@Resolver(() => Data)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  hello() {
    return this.appService.getData().message
  }
}
