import { Controller, Get, Body, Param, Post } from '@nestjs/common'
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { KillDragonCommand } from '@server/modules/hero/commands/impl'
import { KillDragonDTO } from '@server/modules/hero/dto/kill-dragon.dto'
import { IHeroId } from '@server/modules/hero/interface/hero.dto'
import { Hero } from '@server/modules/hero/models/hero.model'
import { GetHeroesQuery } from '@server/modules/hero/queries/impl'

@Controller('heroes')
export class HeroController {
  constructor(
    private readonly commandsBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('/:hero_id/kill-dragon')
  killDragon(
    @Param() param: IHeroId,
    @Body() body: KillDragonDTO,
  ): Promise<void> {
    const { hero_id } = param
    const { dragon_id } = body
    return this.commandsBus.execute(new KillDragonCommand(hero_id, dragon_id))
  }

  @Get('/')
  getHeroes(): Promise<Hero[]> {
    return this.queryBus.execute(new GetHeroesQuery())
  }
}
