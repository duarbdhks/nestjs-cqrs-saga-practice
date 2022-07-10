import { DropItemHandler } from '@server/modules/hero/commands/handlers/drop-item.handler'
import { KillDragonHandler } from './kill-dragon.handler'

export const HeroCommandHandlers = [KillDragonHandler, DropItemHandler]
