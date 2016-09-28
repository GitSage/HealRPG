export class Spell {
    id: number;
    name: string;
    targetTypes: string[];
    power: number;
    cost: number;
    cooldownPercentage: number;
    active: boolean;

  constructor(id:number,
              name:string,
              targetTypes:string[],
              power:number,
              cost:number,
              active:boolean){
    this.id = id;
    this.name = name;
    this.targetTypes = targetTypes;
    this.power = power;
    this.cost = cost;
    this.cooldownPercentage = 0;
    this.active = active;
  }
}
