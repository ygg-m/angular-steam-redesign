import { gamesArray } from '@/data/games';
import { newsTypes } from '@/data/news';
import { GameInitializer, GameTypes } from '@/types/game';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent implements OnInit {
  @Input() data: newsTypes = {
    title: '',
    description: '',
    gameId: 0,
  };
  game: GameTypes = GameInitializer;
  cover?: string = '';

  ngOnInit(): void {
    this.game = gamesArray.find((e) => e.app_ID === this.data.gameId)!;

    this.cover = this.data.image
      ? this.data.image
      : this.game.web_assets.capsule_616x353;
  }
}
