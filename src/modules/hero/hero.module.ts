import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { HeroCommandHandlers } from '@server/modules/hero/commands/handlers'
import { HeroEventHandlers } from '@server/modules/hero/events/handlers'
import { HeroController } from '@server/modules/hero/hero.controller'
import { HeroQueryHandlers } from '@server/modules/hero/queries/handlers'
import { HeroRepository } from '@server/modules/hero/repository/hero.repository'
import { HeroSaga } from '@server/modules/hero/sagas/hero.saga'

@Module({
  imports: [CqrsModule],
  controllers: [HeroController],
  providers: [
    HeroRepository,
    ...HeroQueryHandlers,
    ...HeroCommandHandlers,
    ...HeroEventHandlers,
    HeroSaga,
  ],
})
export class HeroModule {
}
