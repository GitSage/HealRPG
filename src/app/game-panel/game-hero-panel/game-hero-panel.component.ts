import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../shared/hero/hero.service';
import { Hero } from '../../shared/hero';
import { HealthBarComponent } from '../shared/health-bar/health-bar.component';

@Component({
  selector: 'game-hero-panel',
  templateUrl: 'game-hero-panel.component.html',
  styleUrls: ['game-hero-panel.component.css'],
  providers: [ HeroService, HealthBarComponent ],
})
export class GameHeroPanelComponent implements OnInit {

  private heroes:Hero[];

  constructor(private heroService:HeroService) {}

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

}
