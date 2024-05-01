import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { games } from '../../Data/games';
import { GameTypes } from '../../types/game';
import { FeaturedComponent } from './components/featured/featured.component';
import { GameComponent } from './components/featured/game/game.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavibarComponent } from './components/navibar/navibar.component';
import { SpecialOfferComponent } from './components/special-offer/special-offer.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    NavbarComponent,
    NavibarComponent,
    GameComponent,
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './store.component.html',
})
export class StoreComponent {
  featuredSlides: GameTypes[] = [...games];
}
