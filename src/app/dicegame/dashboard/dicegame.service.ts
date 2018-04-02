import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { GameStatus } from './game-status';
import { WinningStatus } from './winning-status.enum';
import { Observable } from 'rxjs/Observable';
import { Score } from '../score';

@Injectable()
export class DicegameService {

ata: GameStatus;

  gameUrl = "http://localhost:8080/dicegame/";
  savegameUrl = "http://localhost:8080/dicegame/save";
  scoreUrl = "http://localhost:8080/dicegame/getScore";


  constructor(private http:Http) { }

  getGameStatus(player, alphaDice): Observable<GameStatus>{
    let cpParams = new URLSearchParams();
    
    cpParams.set('dice1', player);		
    cpParams.set('dice2', alphaDice);	
 
	  let options = new RequestOptions({ params: cpParams });

    return this.http.get(this.gameUrl, options)
              .map(res => res.json() as GameStatus )
              .catch(this.handleError);   
  }

  save(name: string): Observable<Score> {
    let cpParams = new URLSearchParams();
    
    cpParams.set('name', name);		
 
	  let options = new RequestOptions({ params: cpParams });

    return this.http.get(this.savegameUrl, options)
              .map(res => res.json() as Score )
              .catch(this.handleError);   
  }

  getScore(name: string): Observable<Score> {
    let cpParams = new URLSearchParams();
    
    cpParams.set('name', name);		
 
	  let options = new RequestOptions({ params: cpParams });

    return this.http.get(this.scoreUrl, options)
              .map(res => res.json() as Score )
              .catch(this.handleError);   
  }

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }

}
