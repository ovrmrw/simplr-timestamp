import { Injectable } from '@angular/core';
import { Simplr } from 'ngrx-store-simplr';
import { AppState } from '../store/models';
import { NictService } from './nict';
import * as timestamp from '../store/actions/timestamp';


const localTimestampResolver: timestamp.Resolver =
  (state) => {
    const local = new Date().getTime();
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
    private nictService: NictService,
  ) { }

  async getLocalTimestamp() {
    const result = await this.simplr
      .dispatch('timestamp', localTimestampResolver)
      .toPromise();
    return result.action;
  }

  async getServerTimestamp(timelag: boolean = false) {
    const result = await this.simplr
      .dispatch('timestamp', this.nictService
        .requestServerTimestamp()
        .map(serverTimestampResolver(timelag))
      )
      .toPromise();
    return result.action;
  }
}
