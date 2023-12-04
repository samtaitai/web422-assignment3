import { Component } from '@angular/core';
import { Game } from 'src/app/interfaces/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  games: Game[] = [];
  unfilteredList: Game[] = [];
  searchResult: Game[] = [];

  constructor(private gameService: GameService) {
    this.gameService.getGames().subscribe((data) => {
      this.games = data;
    });
  }
}
