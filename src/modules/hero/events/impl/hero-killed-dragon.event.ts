export class HeroKilledDragonEvent {
  constructor(
    public readonly hero_id: number,
    public readonly dragon_id: number,
  ) {}
}
