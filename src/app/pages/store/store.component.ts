import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { gamesArray } from '../../data/games';
import { GameTypes } from '../../types/game';
import { NavibarComponent } from './components/navibar/navibar.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [NavbarComponent, NavibarComponent, CommonModule, RouterOutlet],
  templateUrl: './store.component.html',
})
export class StoreComponent {
  featuredSlides: GameTypes[] = [...gamesArray];
}
