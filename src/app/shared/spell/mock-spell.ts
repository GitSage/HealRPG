import { Spell } from './spell';

export var SPELLS:Spell[] = [
    { id:1, name:"Heal", targetTypes:["single"], power:100, cost:50 },
    { id:2, name:"Quick Heal", targetTypes:["single"], power:50, cost:50 },
    { id:3, name:"Renew", targetTypes:["single recurring"], power:20, cost:50 },
    { id:4, name:"Group Heal", targetTypes:["group"], power:50, cost:50 }
]