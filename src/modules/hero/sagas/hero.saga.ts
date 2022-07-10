import { Injectable } from '@nestjs/common'
import { ICommand, ofType, Saga } from '@nestjs/cqrs'
import { DropItemCommand } from '@server/modules/hero/commands/impl'
import { HeroKilledDragonEvent } from '@server/modules/hero/events/impl'
import { delay, map, Observable } from 'rxjs'
import * as clc from 'cli-color'

const itemId = 1

@Injectable()
export class HeroSaga {
  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(HeroKilledDragonEvent),
        delay(1000),
        map(event => {
          console.log(clc.redBright(`Inside [HeroSaga] Saga`))
          return new DropItemCommand(event.hero_id, itemId)
        })
      )
  }
}
