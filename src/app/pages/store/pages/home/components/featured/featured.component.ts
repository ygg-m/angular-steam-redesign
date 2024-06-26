import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { SvgChevron } from '@assets/chevron.component';
import { gamesArray } from '@data/games';
import { GameTypes } from '@type/game';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [GameComponent, SvgChevron, CommonModule],
  templateUrl: './featured.component.html',
})
export class FeaturedComponent implements OnDestroy {
  @Input() slides: GameTypes[] = gamesArray;
  currentSlideIndex = 0;
  fadeIn: boolean = false;
  private slideInterval: any;
  interval: any;
  interval_time: number = 5;
  timer: number = 5;
  progress: number = 100;
  isPaused: boolean = false;

  constructor() {
    this.startCountdown();
  }

  startCountdown(): void {
    this.interval = setInterval(() => {
      if (!this.isPaused) {
        this.timer -= 0.1;
        this.progress = Math.trunc(
          100 - (this.timer / this.interval_time) * 100,
        );

        if (this.timer <= 0) {
          this.changeSlide('next');
        }
      }
    }, 100);
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }

  pauseCountdown(): void {
    this.isPaused = !this.isPaused;
  }

  changeSlide(prop: 'next' | 'prev' | number): void {
    switch (prop) {
      case 'next':
        this.currentSlideIndex =
          (this.currentSlideIndex + 1) % this.slides.length;
        break;
      case 'prev':
        this.currentSlideIndex =
          (this.currentSlideIndex - 1 + this.slides.length) %
          this.slides.length;
        break;
      default:
        this.currentSlideIndex = prop;
    }

    this.fadeIn = true;
    this.timer = this.interval_time;
    this.progress = 0;

    setTimeout(() => {
      this.fadeIn = false;
    }, 250);
  }
}
