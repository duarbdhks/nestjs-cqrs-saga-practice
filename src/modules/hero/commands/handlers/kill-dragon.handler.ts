import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs'
import { KillDragonCommand } from '@server/modules/hero/commands/impl'
import { Hero } from '@server/modules/hero/models/hero.model'
import { HeroRepository } from '@server/modules/hero/repository/hero.repository'
import * as clc from 'cli-color'

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  constructor(
    private readonly repository: HeroRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: KillDragonCommand) {
    console.log(clc.greenBright('KillDragonCommand...'), command)

    const { dragon_id, hero_id } = command
    const hero = await this.repository.getHero({ hero_id })
    const heroEvent = this.publisher.mergeObjectContext<Hero>(hero)
    heroEvent.killEnemy({ dragon_id })
    heroEvent.commit()
  }
}
