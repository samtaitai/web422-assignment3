import { Component, Input } from '@angular/core';
import { Game } from 'src/app/interfaces/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-shooter-game',
  templateUrl: './shooter-game.component.html',
  styleUrls: ['./shooter-game.component.css'],
})
export class ShooterGameComponent {
  games: Game[] = [];

  constructor(private gameService: GameService) {
    this.gameService.getGames().subscribe((data) => {
      this.games = data;
      this.games = this.games.filter((game) => game.genre == 'Shooter');
    });
  }
  performSearch(text: string) {
    if (!text) {
      return;
    }
    this.games = this.games.filter((game) =>
      game?.title.toLowerCase().includes(text.toLowerCase())
    );
  }
}
