import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GameInitializer, GameTypes } from '../../types/game';

@Component({
  selector: 'app-price-btn-sm',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './price-btn-sm.component.html',
})
export class PriceBtnSmComponent implements OnInit {
  @Input() data: GameTypes = GameInitializer;
  discountValue: number = 0;

  ngOnInit(): void {
    this.discountValue = this.calculateDiscount(
      this.data.full_price,
      this.data.current_price
    );
  }

  calculateDiscount(originalPrice: number, discountedPrice: number): number {
    const discount = originalPrice - discountedPrice;
    return Math.floor(discount);
  }
}
