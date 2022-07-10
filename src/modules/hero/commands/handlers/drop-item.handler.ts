import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs'
import { DropItemCommand } from '@server/modules/hero/commands/impl'
import { HeroRepository } from '@server/modules/hero/repository/hero.repository'
import * as clc from 'cli-color'

@CommandHandler(DropItemCommand)
export class DropItemHandler implements ICommandHandler<DropItemCommand> {
  constructor(
    private readonly repository: HeroRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DropItemCommand): Promise<void> {
    console.log(clc.yellowBright('Async Drop Item Command...'), command)

    const { item_id, hero_id } = command
    const hero = await this.repository.getHero({ hero_id })
    const heroEvent = this.publisher.mergeObjectContext(hero)
    heroEvent.addItem({ item_id })
    heroEvent.commit()
  }
}
