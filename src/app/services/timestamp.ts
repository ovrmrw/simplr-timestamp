import { Injectable } from '@angular/core';
import { Simplr, Action } from 'ngrx-store-simplr';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

import { AppState } from '../store/models';
import { NictService } from './nict';
import * as timestamp from '../store/actions/timestamp';


const localTimestampResolver: (effect: number) => timestamp.Resolver =
  (newTimestamp) => (state) => {
    const local = newTimestamp;
    return { ...state, local };
  };

const serverTimestampResolver: (flag: boolean) => (effect: number) => timestamp.Resolver =
  (withTimelag) => (newTimestamp) => (state) => {
    const server = newTimestamp;
    const timelag = withTimelag ? newTimestamp - state.local : state.timelag;
    return { ...state, server, timelag };
  };


@Injectable()
export class TimestampService {
  constructor(
    private simplr: Simplr<AppState>,
    private nict: NictService,
  ) { }

  getLocalTimestamp(): Observable<Action> {
    const timestamp: number = this.nict.requestLocalTimestamp();
    return this.simplr
      .dispatch('timestamp', localTimestampResolver(timestamp))
      .map(result => result.action);
  }

  getServerTimestamp(timelag: boolean = false): Observable<Action> {
    const timestamp$: Observable<number> = this.nict.requestServerTimestamp();
    return this.simplr
      .dispatch('timestamp', timestamp$.map(serverTimestampResolver(timelag)))
      .map(result => result.action);
  }

  getBothTimestamp(): Observable<Action[]> {
    return Observable.forkJoin([ // Observable.forkJoin() is the Observable version of Promise.all()
      this.getLocalTimestamp(),
      this.getServerTimestamp(true),
    ]);
  }
}
