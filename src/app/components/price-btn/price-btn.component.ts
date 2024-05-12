import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GameInitializer, GameTypes } from '../../types/game';

@Component({
  selector: 'app-price-btn',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './price-btn.component.html',
})
export class PriceBtnComponent implements OnChanges {
  @Input() data: GameTypes = GameInitializer;
  @Input() fullPrice: number = 0;
  @Input() currentPrice: number = 0;
  discountValue: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.discountValue = this.calculateDiscount();
    }
  }

  calculateDiscount(): number {
    const discount =
      ((this.data.full_price - this.data.current_price) /
        this.data.full_price) *
      100;
    return Math.floor(discount);
  }
}
