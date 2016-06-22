import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'health-bar',
  templateUrl: 'health-bar.component.html',
  styleUrls: ['health-bar.component.css']
})
export class HealthBarComponent implements OnInit {

  @Input() name:string;
  @Input() maxHp:number;
  @Input() currHp:number;

  constructor() {}

  ngOnInit() {
  }

  getWidth(){
    var widthStyle = this.currHp / this.maxHp * 100 + "%";
    console.log("Width of " + name + ": " + widthStyle);
    return widthStyle;
  }

}
