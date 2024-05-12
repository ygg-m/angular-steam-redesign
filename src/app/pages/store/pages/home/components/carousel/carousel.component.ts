import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgChevron } from '@assets/chevron.component';
import { gamesArray } from '@data/games';
import { GameTypes } from '@type/game';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [SvgChevron, GameComponent, CommonModule],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  @Input() title: string = '';
  @Input() slides: GameTypes[] = gamesArray;
  @Input() buyButton: boolean = false;
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

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }

  changeSlide(prop: 'next' | 'prev' | number): void {
    switch (prop) {
      case 'next':
        this.nextSlide();
        break;
      case 'prev':
        this.prevSlide();
        break;
      default:
        this.jumpToSlide(prop);
    }
  }

  nextSlide() {
    this.leftSlideIndex = (this.leftSlideIndex + 1) % this.slides.length;
    this.midSlideIndex = (this.midSlideIndex + 1) % this.slides.length;
    this.rightSlideIndex = (this.rightSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.leftSlideIndex =
      (this.leftSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.midSlideIndex =
      (this.midSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.rightSlideIndex =
      (this.rightSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  jumpToSlide(id: number) {
    this.leftSlideIndex = (id - 1 + this.slides.length) % this.slides.length;
    this.midSlideIndex = id;
    this.rightSlideIndex = (id + 1) % this.slides.length;
  }
}
