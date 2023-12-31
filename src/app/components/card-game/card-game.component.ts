import { Component } from '@angular/core';
import { Game } from 'src/app/interfaces/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css'],
})
export class CardGameComponent {
  games: Game[] = [];
  constructor(private gameService: GameService) {
    this.gameService.getGames().subscribe((data) => {
      this.games = data;
      this.games = this.games.filter((game) => game.genre == 'Card');
    });
  }
}
