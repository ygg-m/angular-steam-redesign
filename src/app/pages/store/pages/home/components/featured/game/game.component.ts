import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SvgAdd } from '@assets/add.component';
import { SvgWindows8 } from '@assets/windows8.component';
import { PriceBtnComponent } from '@components/price-btn/price-btn.component';
import { WishlistBtnComponent } from '@components/wishlist-btn/wishlist-btn.component';
import { TruncatePipe } from '@pipes/truncate.pipe';
import { GameInitializer, GameTypes } from '@type/game';
import { SshotComponent } from '../sshot/sshot.component';
import { TagBtnComponent } from '../tag-btn/tag-btn.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    SvgAdd,
    SvgWindows8,
    TagBtnComponent,
    SshotComponent,
    WishlistBtnComponent,
    CommonModule,
    TruncatePipe,
    PriceBtnComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './game.component.html',
})
export class GameComponent implements OnInit {
  @Input() data: GameTypes = GameInitializer;
  mainImageUrl: string = this.data.web_assets.capsule_616x353;
  tagSlices: number = 3;

  ngOnInit(): void {
    this.mainImageUrl = this.data.web_assets.capsule_616x353;
  }

  setMainImage(url: string): void {
    this.mainImageUrl = url;
  }

  resetMainImage(): void {
    this.mainImageUrl = this.data.web_assets.capsule_616x353;
  }

  getClassForIndex(index: number): String {
    if (index == 0) return 'pr-1 pb-1';
    if (index == 1) return 'pl-1 pb-1';
    if (index == 2) return 'pr-1 pt-1';
    if (index == 3) return 'pl-1 pt-1';
    else return '';
  }
}
