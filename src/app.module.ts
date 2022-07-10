import { Module } from '@nestjs/common';
import { HeroModule } from '@server/modules/hero/hero.module'

@Module({
  imports: [HeroModule],
})
export class AppModule {
}
