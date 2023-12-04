import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CardGameComponent } from './components/card-game/card-game.component';
import { ShooterGameComponent } from './components/shooter-game/shooter-game.component';
import { StrategyGameComponent } from './components/strategy-game/strategy-game.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'shooter-game',
    component: ShooterGameComponent,
  },
  {
    path: 'card-game',
    component: CardGameComponent,
  },
  {
    path: 'strategy-game',
    component: StrategyGameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
