import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { Hero } from '@server/modules/hero/models/hero.model'
import { GetHeroesQuery } from '@server/modules/hero/queries/impl'
import { HeroRepository } from '@server/modules/hero/repository/hero.repository'
import * as clc from 'cli-color'

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
  constructor(
    private readonly repository: HeroRepository,
  ) {}

  async execute(query: GetHeroesQuery): Promise<Hero[]> {
    console.log(clc.yellowBright(`Async GetHeroesQuery`), query)
    return this.repository.getHeroes()
  }
}
