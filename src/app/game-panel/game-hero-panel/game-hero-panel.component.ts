import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../shared/hero/hero.service';
import { Hero } from '../../shared/hero';
import { HealthBarComponent } from '../shared/health-bar/health-bar.component';

@Component({
  moduleId: module.id,
  selector: 'game-hero-panel',
  templateUrl: 'game-hero-panel.component.html',
  styleUrls: ['game-hero-panel.component.css'],
  providers: [ HeroService, HealthBarComponent ],
  directives: [HealthBarComponent]
})
export class GameHeroPanelComponent implements OnInit {

  heroes:Hero[]

  constructor(private heroService:HeroService) {}

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

}
