import { AggregateRoot } from '@nestjs/cqrs'
import { HeroFoundItemEvent, HeroKilledDragonEvent } from '@server/modules/hero/events/impl'
import { IDragonId, IItemId } from '@server/modules/hero/interface/hero.dto'

export class Hero extends AggregateRoot {
  constructor(
    private readonly hero_id: number
  ) {
    super()
  }

  killEnemy(options: IDragonId) {
    console.log('killEnemy Logic', options)

    const { dragon_id } = options
    this.apply(new HeroKilledDragonEvent(this.hero_id, dragon_id))
  }

  addItem(options: IItemId) {
    console.log('addItem Logic', options)

    const { item_id } = options
    this.apply(new HeroFoundItemEvent(this.hero_id, item_id))
  }
}
