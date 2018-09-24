import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { MatchRoutingModule } from './match-routing.module';
import { MatchAddComponent } from './match-add/match-add.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchItemComponent } from './match-item/match-item.component';
import { MatchEditComponent } from './match-edit/match-edit.component';
import { MatchService } from './match.service';

@NgModule({
  imports: [
    CommonModule,
    MatchRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    MatchService
  ],
  declarations: [MatchAddComponent, MatchListComponent, MatchItemComponent, MatchEditComponent]
})
export class MatchModule { }
