import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { HeroFoundItemEvent } from '@server/modules/hero/events/impl'
import * as clc from 'cli-color'

@EventsHandler(HeroFoundItemEvent)
export class HeroFoundItemHandler implements IEventHandler<HeroFoundItemEvent> {
  handle(event: HeroFoundItemEvent): void {
    console.log(clc.yellowBright('Async HeroFoundItemEvent...'), event)
  }
}
