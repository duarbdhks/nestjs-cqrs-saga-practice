import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { HeroKilledDragonEvent } from '@server/modules/hero/events/impl'
import * as clc from 'cli-color'

@EventsHandler(HeroKilledDragonEvent)
export class HeroKilledDragonHandler implements IEventHandler<HeroKilledDragonEvent> {
  handle(event: HeroKilledDragonEvent): void {
    console.log(clc.greenBright('HeroKilledDragonEvent...'), event)
  }
}
