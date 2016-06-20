import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'health-bar',
  templateUrl: 'health-bar.component.html',
  styleUrls: ['health-bar.component.css']
})
export class HealthBarComponent implements OnInit {

  @Input() maxHp:Number;
  @Input() currHp:Number;

  constructor() {}

  ngOnInit() {
  }

}
