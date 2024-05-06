import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgChevron } from '../../../../../assets/chevron.component';
import { games } from '../../../../Data/games';
import { GameTypes } from '../../../../types/game';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'app-special-offer',
  standalone: true,
  imports: [SvgChevron, GameComponent, CommonModule],
  templateUrl: './special-offer.component.html',
})
export class SpecialOfferComponent {
  slides: GameTypes[] = games;
  leftSlideIndex = 0;
  midSlideIndex = 1;
  rightSlideIndex = 2;
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
        this.leftSlideIndex = (this.leftSlideIndex + 1) % this.slides.length;
        this.midSlideIndex = (this.midSlideIndex + 1) % this.slides.length;
        this.rightSlideIndex = (this.rightSlideIndex + 1) % this.slides.length;
        break;
      case 'prev':
        this.leftSlideIndex =
          (this.leftSlideIndex - 1 + this.slides.length) % this.slides.length;
        this.midSlideIndex =
          (this.midSlideIndex - 1 + this.slides.length) % this.slides.length;
        this.rightSlideIndex =
          (this.rightSlideIndex - 1 + this.slides.length) % this.slides.length;
        break;
      default:
        this.leftSlideIndex =
          (prop - 1 + this.slides.length) % this.slides.length;
        this.midSlideIndex = prop;
        this.rightSlideIndex = (prop + 1) % this.slides.length;
    }

    this.fadeIn = true;
    this.timer = this.interval_time;
    this.progress = 0;

    setTimeout(() => {
      this.fadeIn = false;
    }, 250);
  }
}
