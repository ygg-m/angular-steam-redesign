import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgFavoriteBorder } from '../../../assets/favorite-border.component';
import { SvgFavorite } from '../../../assets/favorite.component';

@Component({
  selector: 'app-wishlist-btn',
  standalone: true,
  imports: [SvgFavorite, SvgFavoriteBorder, CommonModule],
  templateUrl: './wishlist-btn.component.html',
})
export class WishlistBtnComponent {
  @Input() icon: boolean = false;
  fillIcon: boolean = false;

  toggleIcon(value: boolean): void {
    this.fillIcon = value;
  }
}
