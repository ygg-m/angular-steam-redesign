import { news, newsTypes } from '@/data/news';
import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { SvgChevron } from '@assets/chevron.component';
import { NewComponent } from './new/new.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [SvgChevron, NewComponent, CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent implements OnInit {
  slides: newsTypes[][] = [news];
  slideIndex: number = 0;

  fadeIn: boolean = false;
  jumpIndex: number = 1;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.divideArrayByWindowSize();
  }

  ngOnInit(): void {
    this.divideArrayByWindowSize();
  }
  divideArrayByWindowSize() {
    if (window.innerWidth > 1280) {
      this.slides = this.divideArrayIntoGroups(news, 4);
    }

    if (window.innerWidth < 1280) {
      this.slides = this.divideArrayIntoGroups(news, 4);
    }

    if (window.innerWidth < 1024) {
      this.slides = this.divideArrayIntoGroups(news, 3);
    }

    if (window.innerWidth < 640) {
      this.slides = this.divideArrayIntoGroups(news, 2);
    }
  }

  divideArrayIntoGroups(raw: newsTypes[], groupSize: number): newsTypes[][] {
    const result = [];
    for (let i = 0; i < raw.length; i += groupSize) {
      result.push(raw.slice(i, i + groupSize));
    }
    return result;
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
    this.slideIndex = (this.slideIndex + this.jumpIndex) % this.slides.length;
  }

  prevSlide() {
    this.slideIndex =
      (this.slideIndex - this.jumpIndex + this.slides.length) %
      this.slides.length;
  }

  jumpToSlide(id: number) {
    this.slideIndex = id;
  }
}
