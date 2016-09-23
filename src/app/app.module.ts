import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GamePanelComponent } from './game-panel/game-panel.component'
import { GameHeroPanelComponent } from './game-panel/game-hero-panel/game-hero-panel.component'
import { GameSpellPanelComponent } from './game-panel/game-spell-panel/game-spell-panel.component'
import { HealthBarComponent } from './game-panel/shared/health-bar/health-bar.component'
import { SpellBoxComponent } from './game-panel/game-spell-panel/spell-box/spell-box.component'

@NgModule({
  declarations: [
    AppComponent,
    GamePanelComponent,
    GameHeroPanelComponent,
    GameSpellPanelComponent,
    HealthBarComponent,
    SpellBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
