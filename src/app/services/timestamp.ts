import { Injectable } from '@angular/core';
import { Simplr, Action } from 'ngrx-store-simplr';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/zip';

import { AppState } from '../store/models';
import { NictService } from './nict';
import * as timestamp from '../store/actions/timestamp';


const localTimestampResolver: (data: number) => timestamp.Resolver =
  (newTimestamp) => (state) => {
    const local = newTimestamp;
    return { ...state, local };
  };

const serverTimestampResolver: (flag: boolean) => (data: number) => timestamp.Resolver =
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
    return this.simplr
      .dispatch('timestamp', this.nict.requestLocalTimestamp().map(localTimestampResolver))
      .map(result => result.action);
  }

  getServerTimestamp(timelag: boolean = false): Observable<Action> {
    return this.simplr
      .dispatch('timestamp', this.nict.requestServerTimestamp().map(serverTimestampResolver(timelag)))
      .map(result => result.action);
  }

  getBothTimestamp(): Observable<Action[]> {
    return Observable.zip(
      this.getLocalTimestamp(),
      this.getServerTimestamp(true)
    );
  }
}
