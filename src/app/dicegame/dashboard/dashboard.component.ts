import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DicegameService } from './dicegame.service';
import { GameStatus } from './game-status';
import { WinningStatus } from './winning-status.enum';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Score } from '../score';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  curCellPos2: number = 0;
  curCellPos1: number = 0;
  pos1: number;
  rollInterval1: any;
  rollInterval2: any;

  @Input('player') _playerName: string;
  @Output() onGameFinished: EventEmitter<string> = new EventEmitter();


  ranNum1;
  ranNum2;
  ranNum3;
  playerDice: string;
  alphaDice: string;
  canPlay: boolean;
  canStop: boolean;
  curGameStatus: WinningStatus;
  winner: string;
  score: Score;


  constructor(private diceGameService: DicegameService) { }

  ngOnInit() {
    this.ranNum1 = Math.floor( 1 + Math.random() * 6 );
    this.playerDice=`assets/diceimages/dice${this.ranNum1}.png`;
    this.ranNum2 = Math.floor( 1 + Math.random() * 6 );
    this.alphaDice=`assets/diceimages/dice${this.ranNum2}.png`;
    this.canPlay=true;
    this.canStop = false;
  }

  roll() {
    this.canPlay=false;
    this.canStop = true;
    this.rollInterval1=setInterval(()=>{
              this.ranNum1 = Math.floor( 1 + Math.random() * 6 );
              this.playerDice=`assets/diceimages/dice${this.ranNum1}.png`;
    },50);
  
  }

  rollStop() {
    this.canPlay=false;
    this.canStop = false;
    clearInterval(this.rollInterval1);
    this.rollInterval2=setInterval(()=>{
          this.ranNum2 = Math.floor( 1 + Math.random() * 6 );
          this.alphaDice=`assets/diceimages/dice${this.ranNum2}.png`;
    },50);

    this.ranNum3 = Math.floor( 5 + Math.random() * 6 )*1000;
    setTimeout(() => clearInterval(this.rollInterval2), this.ranNum3);

    setTimeout(() => {
          
          this.diceGameService.getGameStatus(this.ranNum1, this.ranNum2)
                .subscribe(gameStatus =>  {
                  this.curCellPos1 = gameStatus.curCell1;
                  this.curCellPos2 = gameStatus.curCell2;
                  this.canPlay = true;
                  this.curGameStatus = gameStatus.ws;
              
                  if ((this.curGameStatus as string)  !== WinningStatus[WinningStatus.NotYet]) {
                    if ((this.curGameStatus as string)  === WinningStatus[WinningStatus.Player])
                        this.onGameFinished.emit(this._playerName);
                    else this.onGameFinished.emit('alphaDice');
                  } 
                })
        } , this.ranNum3+2000);
}

}
