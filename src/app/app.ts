import { Component } from '@angular/core';
import { ChampionListComponent } from './champion-list/champion-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChampionListComponent],
  template: `
    <h1 style="padding:20px">League of Legends Champions</h1>
    <app-champion-list></app-champion-list>
  `
})
export class AppComponent {}
