import { Spell } from './spell';

export var MOCK_SPELLS:Spell[] = [
    { id:1, name:"Heal", targetTypes:["single"], power:100, cost:50, active: false },
    { id:2, name:"Quick Heal", targetTypes:["single"], power:50, cost:50, active: false },
    { id:3, name:"Renew", targetTypes:["single recurring"], power:20, cost:50, active: false },
    { id:4, name:"Group Heal", targetTypes:["group"], power:50, cost:50, active: false }
];
