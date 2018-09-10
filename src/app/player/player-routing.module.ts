import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerRankingComponent } from './player-ranking/player-ranking.component';

const routes: Routes = [
  { path: 'player/rank', component: PlayerRankingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
