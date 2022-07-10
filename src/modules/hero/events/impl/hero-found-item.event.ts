export class HeroFoundItemEvent {
  constructor(
    public readonly hero_id: number,
    public readonly item_id: number,
  ) {}
}
