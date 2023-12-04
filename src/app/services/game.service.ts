import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}
  getGames(): Observable<Game[]> {
    let headers = new HttpHeaders()
      .set(
        'X-RapidApi-Key',
        '9564b3a6d7mshed815e12b4fe0dfp1b293ejsn534f8e2442be'
      )
      .set('X-RapidApi-Host', 'free-to-play-games-database.p.rapidapi.com');
    return this.http.get<Game[]>(
      'https://free-to-play-games-database.p.rapidapi.com/api/games',
      { headers }
    );
  }
}
