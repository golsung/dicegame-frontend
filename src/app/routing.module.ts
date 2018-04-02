import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { DicegameComponent } from './dicegame/dicegame.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent
  },
  {
    path: 'start',
    component: DicegameComponent
  },
  {
    path: 'score',
    component: ScoreComponent
  },
  {
    path: '**',
    component: NavComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
