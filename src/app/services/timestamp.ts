import { Injectable } from '@angular/core';
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

  async getLocalTimestamp() {
    const result = await this.simplr
      .dispatch('timestamp', this.nict.requestLocalTimestamp().map(local => ({ local })))
      .toPromise();
    return result.action;
  }

  async getServerTimestamp(timelag: boolean = false) {
    const result = await this.simplr
      .dispatch('timestamp', this.nict.requestServerTimestamp().map(serverTimestampResolver(timelag)))
      .toPromise();
    return result.action;
  }

  async getBothTimestamp(timelag: boolean = false) {
    const action1 = await this.getLocalTimestamp();
    const action2 = await this.getServerTimestamp(timelag);
    return [action1, action2];
  }
}
