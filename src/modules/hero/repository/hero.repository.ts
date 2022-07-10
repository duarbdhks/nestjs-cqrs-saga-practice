import { Injectable } from '@nestjs/common'
import { IHeroId } from '@server/modules/hero/interface/hero.dto'
import { Hero } from '@server/modules/hero/models/hero.model'

const [heroUser1, heroUser2] = [new Hero(1), new Hero(2)]

@Injectable()
export class HeroRepository {
  async getHero(options: IHeroId): Promise<Hero> {
    const { hero_id } = options
    if (hero_id === 2) return heroUser2
    return heroUser1
  }

  async getHeroes(): Promise<Hero[]> {
    return [heroUser1, heroUser2]
  }
}
