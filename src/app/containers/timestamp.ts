import { Component, OnInit } from '@angular/core';
import { State } from '@ngrx/store';

import { AppState } from '../store/models';
import { TimestampService } from '../services/timestamp';


@Component({
  selector: 'app-timestamp-container',
  template: `
    <button (click)="localTimestamp()">local timestamp</button>
    <button (click)="serverTimestamp()">server timestamp</button>
    <button (click)="bothTimestamp()">both timestamp</button>
    <pre>{{ state$ | async | json }}</pre>
  `
})
export class TimestampContainerComponent {
  constructor(
    public state$: State<AppState>,
    private service: TimestampService,
  ) { }

  localTimestamp() {
    this.service.getLocalTimestamp();
  }

  serverTimestamp() {
    this.service.getServerTimestamp();
  }

  bothTimestamp() {
    this.service.getBothTimestamp();
  }
}
