import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RoutingModule } from './routing.module';

import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DicegameComponent } from './dicegame/dicegame.component';
import { DashboardComponent } from './dicegame/dashboard/dashboard.component';
import { DicegameService } from './dicegame/dashboard/dicegame.service';
import { AppMaterialModule } from './app-material/app-material.module';
import { WinnerDialogComponent } from './dicegame/winner-dialog/winner-dialog.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DicegameComponent,
    DashboardComponent,
    WinnerDialogComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    ReactiveFormsModule, 
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule

  ],
  providers: [DicegameService],
  entryComponents: [WinnerDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
