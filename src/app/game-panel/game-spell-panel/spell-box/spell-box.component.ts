import {Component, OnInit, Input} from '@angular/core';
import { Spell } from '../../../shared/spell/spell';

@Component({
  moduleId: module.id,
  selector: 'spell-box',
  templateUrl: 'spell-box.component.html',
  styleUrls: ['spell-box.component.css']
})
export class SpellBoxComponent implements OnInit {

  @Input() private spell:Spell;

  ngOnInit() {

  }
}
