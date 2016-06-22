export class Hero {
  private id: number;
  private name: string;
  private maxHp: number;
  private currHp: number;
  private damage: number;

  public constructor(id:number, name:string, currHp:number, maxHp:number, damage:number){
    this.id = id;
    this.name = name;
    this.maxHp = maxHp;
    this.currHp = currHp;
    this.damage = damage;
  }

  public doDamage(amount:number): number{
    this.currHp -= amount;
    return this.currHp;
  }

  public doHeal(amount:number): number{
    this.currHp += amount;
    return this.currHp;
  }
}