import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchAddComponent } from './match-add/match-add.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchEditComponent } from './match-edit/match-edit.component';

const routes: Routes = [
  { path: 'match/add', component: MatchAddComponent },
  { path: 'match/edit', component: MatchEditComponent },
  { path: 'match/list', component: MatchListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
