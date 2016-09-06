import {Component, OnInit, Input, HostListener, HostBinding, EventEmitter, Output} from '@angular/core';
import { Spell } from '../../../shared/spell/spell';

@Component({
  moduleId: module.id,
  selector: 'spell-box',
  templateUrl: 'spell-box.component.html',
  styleUrls: ['spell-box.component.css']
})
export class SpellBoxComponent implements OnInit {

  @HostBinding('class.active')
  get active() { return this.spell.active; };
  @Output()
  private spellClicked : EventEmitter<Spell> = new EventEmitter();
  @Input()
  private spell:Spell;
  @HostListener('click', [])
  private onClickListener = this.onClick;

  public ngOnInit() {
  }

  private onClick():void{
    this.spellClicked.emit(this.spell);
    console.info(this.spell.name + " clicked");
  }
}
