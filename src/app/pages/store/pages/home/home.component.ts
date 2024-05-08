import { Component } from '@angular/core';
import { FeaturedComponent } from './components/featured/featured.component';
import { HeroComponent } from './components/hero/hero.component';
import { SpecialOfferComponent } from './components/special-offer/special-offer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturedComponent, SpecialOfferComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
