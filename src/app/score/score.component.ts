import { Component, OnInit } from '@angular/core';
import { DicegameService } from '../dicegame/dashboard/dicegame.service';
import { Score } from '../dicegame/score';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  playerName: string = null;
  score: Score;

  constructor(private diceGameService: DicegameService) { }

  ngOnInit() {
 
  }

  showScore(name) {
    this.playerName = name;
    this.diceGameService.getScore(this.playerName).
    subscribe(
      res => this.score = res, 
      error=>{ alert("No Such Name Exists"); this.playerName = null});
  }

}
