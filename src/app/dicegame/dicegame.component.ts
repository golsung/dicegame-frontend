import { Component, OnInit } from '@angular/core';

import { DicegameService } from './dashboard/dicegame.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { WinnerDialogComponent } from './winner-dialog/winner-dialog.component';
import { Score } from './score';

@Component({
  selector: 'app-dicegame',
  templateUrl: './dicegame.component.html',
  styleUrls: ['./dicegame.component.css']
})
export class DicegameComponent implements OnInit {

  score:Score;
  enteredPlayerName: string;
  dialogRef: MatDialogRef<WinnerDialogComponent>;
  
  constructor( private diceGameService: DicegameService, private dialog: MatDialog) { }

  ngOnInit() {}

  startGame(name: string) {
    this.enteredPlayerName = name;
  }

  openDialog(name) {
    
    this.diceGameService.save(this.enteredPlayerName).subscribe(
        res => {
                this.score = res;  
                this.enteredPlayerName = null;
        });
    this.dialogRef = this.dialog.open(WinnerDialogComponent, {
      data: {
        winner: name
      }
    });

  }
}
