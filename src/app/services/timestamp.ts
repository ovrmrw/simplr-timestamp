import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Simplr } from 'ngrx-store-simplr';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AppState } from '../store/models';
import { NictService } from './nict';
import * as timestamp from '../store/actions/timestamp';


const localTimestampResolver: (data: number) => timestamp.Resolver =
  (newTimestamp) => {
    const local = newTimestamp;
    return { local };
  };

const serverTimestampResolver: (flag: boolean) => (data: number) => timestamp.Resolver =
  (withTimelag) => (newTimestamp) => (state) => {
    const server = newTimestamp;
    const timelag = withTimelag ? newTimestamp - state.local : state.timelag;
    return { server, timelag };
  };


@Injectable()
export class TimestampService {
  constructor(
    private simplr: Simplr<AppState>,
    private nict: NictService,
  ) { }

  getLocalTimestamp(): Promise<Action> {
    return this.simplr
      .dispatch('timestamp', this.nict.requestLocalTimestamp().map(local => ({ local })))
      .toPromise()
      .then(result => result.action);
  }

  getServerTimestamp(timelag: boolean = false): Promise<Action> {
    return this.simplr
      .dispatch('timestamp', this.nict.requestServerTimestamp().map(serverTimestampResolver(timelag)))
      .toPromise()
      .then(result => result.action);
  }

  getBothTimestamp(): Promise<Action[]> {
    return Promise.all([
      this.getLocalTimestamp(),
      this.getServerTimestamp(true)
    ]);
  }
}
