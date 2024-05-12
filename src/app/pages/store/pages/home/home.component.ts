import { Component, OnInit } from '@angular/core';
import { gamesArray } from '@data/games';
import { GameTypes } from '@type/game';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturedComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  featuredSlides: GameTypes[] = gamesArray;
  specialOfferSlides: GameTypes[] = gamesArray;
  freeToPlaySlides: GameTypes[] = gamesArray;
  recentlyUpdatedSlides: GameTypes[] = gamesArray;
  newTrendingSlides: GameTypes[] = gamesArray;
  topSellersSlides: GameTypes[] = gamesArray;
  underFiveSlides: GameTypes[] = gamesArray;
  streamingNow: GameTypes[] = gamesArray;

  ngOnInit(): void {
    this.filterFeaturedSlides();
    this.filterSpecialOffers();
    this.filterFreeToPlay();
    this.filterNewTrending();
    this.filterUnderFive();
  }

  filterFeaturedSlides() {
    const max = gamesArray.length;
    const random = Math.floor(Math.random() * max) - max;
    const randomMax = random + 5;
    this.featuredSlides = gamesArray.slice(random, randomMax);
  }

  filterSpecialOffers() {
    this.specialOfferSlides = gamesArray.filter(
      (e) => e.current_price !== e.full_price,
    );
  }

  filterFreeToPlay() {
    this.freeToPlaySlides = gamesArray.filter((e) => e.current_price === 0);
  }

  filterNewTrending() {
    this.newTrendingSlides = gamesArray.filter((e) => e).slice(3, 8);
  }

  filterUnderFive() {
    this.underFiveSlides = gamesArray.filter(
      (e) => e.current_price < 5.0 && e.current_price !== 0,
    );
  }
}
