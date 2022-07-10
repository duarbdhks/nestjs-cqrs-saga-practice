import { IDragonId } from '@server/modules/hero/interface/hero.dto'
import { transformInt } from '@shared/transformer'
import { Transform } from 'class-transformer'
import { IsDefined, IsInt } from 'class-validator'

export class KillDragonDTO implements Readonly<IDragonId> {
  @IsDefined()
  @IsInt()
  @Transform(transformInt, { toClassOnly: true })
  dragon_id: number
}
