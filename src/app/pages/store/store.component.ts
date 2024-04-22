import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { StoreFeaturedComponent } from './components/store-featured/store-featured.component';
import { StoreHeroComponent } from './components/store-hero/store-hero.component';
import { StoreNavibarComponent } from './components/store-navibar/store-navibar.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    NavbarComponent,
    StoreNavibarComponent,
    StoreHeroComponent,
    StoreFeaturedComponent,
  ],
  templateUrl: './store.component.html',
})
export class StoreComponent {}
