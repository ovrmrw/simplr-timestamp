import { Injectable } from '@angular/core';
import { Simplr, Action } from 'ngrx-store-simplr';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

import { AppState } from '../store/models';
import { NictService } from './nict';
import * as timestamp from '../store/actions/timestamp';


const localTimestampResolver: (data: number) => timestamp.Resolver =
  (newLocalTimestamp) => (timestamp) => {
    const local = newLocalTimestamp;
    return { ...timestamp, local };
  };

const serverTimestampResolver: (flag: boolean) => (data: number) => timestamp.Resolver =
  (withTimelag) => (newServerTimestamp) => (timestamp) => {
    const server = newServerTimestamp;
    const timelag = withTimelag ? newServerTimestamp - timestamp.local : timestamp.timelag;
    return { ...timestamp, server, timelag };
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
