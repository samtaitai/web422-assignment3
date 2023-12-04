import { Pipe, PipeTransform } from '@angular/core';
import { Game } from 'src/app/interfaces/game';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(games: Game[], searchText: string): Game[] {
    if (!games || !searchText) {
      return games;
    }
    return games.filter((game: Game) => {
      return game.title.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}
