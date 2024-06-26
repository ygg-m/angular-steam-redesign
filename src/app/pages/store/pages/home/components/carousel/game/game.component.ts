import { Component, Input } from '@angular/core';
import { SvgWindows8 } from '@assets/windows8.component';
import { PriceBtnSmComponent } from '@components/price-btn-sm/price-btn-sm.component';
import { WishlistBtnComponent } from '@components/wishlist-btn/wishlist-btn.component';
import { GameInitializer, GameTypes } from '@type/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [SvgWindows8, PriceBtnSmComponent, WishlistBtnComponent],
  templateUrl: './game.component.html',
})
export class GameComponent {
  @Input() data: GameTypes = GameInitializer;
  @Input() buyButton: boolean = false;
  mainImageUrl: string = this.data.web_assets.capsule_616x353;

  ngOnInit(): void {
    this.mainImageUrl = this.data.web_assets.capsule_616x353;
  }
}
