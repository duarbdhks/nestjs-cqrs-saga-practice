import { HeroFoundItemHandler } from '@server/modules/hero/events/handlers/hero-found-item.handler'
import { HeroKilledDragonHandler } from '@server/modules/hero/events/handlers/hero-killed-dragon.handler'

export const HeroEventHandlers = [HeroKilledDragonHandler, HeroFoundItemHandler]
