import { categories } from '@/data/categories';
import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { SvgChevron } from '@assets/chevron.component';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-carousel-categories',
  standalone: true,
  imports: [CategoryComponent, SvgChevron, CommonModule],
  templateUrl: './carousel-categories.component.html',
})
export class CarouselCategoriesComponent implements OnInit {
  slides: (typeof categories)[] = [categories];
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

  divideArrayByWindowSize() {
    if (window.innerWidth > 1280) {
      this.slides = this.divideArrayIntoGroups(categories, 5);
    }

    if (window.innerWidth < 1280) {
      this.slides = this.divideArrayIntoGroups(categories, 4);
    }

    if (window.innerWidth < 1024) {
      this.slides = this.divideArrayIntoGroups(categories, 3);
    }

    if (window.innerWidth < 640) {
      this.slides = this.divideArrayIntoGroups(categories, 2);
    }
  }

  divideArrayIntoGroups(
    raw: typeof categories,
    groupSize: number,
  ): (typeof categories)[] {
    const result = [];
    for (let i = 0; i < raw.length; i += groupSize) {
      result.push(raw.slice(i, i + groupSize));
    }
    return result;
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
