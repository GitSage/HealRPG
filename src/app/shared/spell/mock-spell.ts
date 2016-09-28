import { Spell } from './spell';

export var MOCK_SPELLS:Spell[] = [
  new Spell(1, "Heal", ["single"], 100, 50, true),
  new Spell(2, "Quick Heal", ["single"], 50, 50, false),
  new Spell(3, "Renew", ["single recurring"], 20, 50, false),
  new Spell(4, "Group Heal", ["group"], 50, 50, false)
];
