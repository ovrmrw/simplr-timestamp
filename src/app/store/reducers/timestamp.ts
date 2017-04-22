import { ActionReducer } from '@ngrx/store';

import { TimestampState } from '../models';
import * as timestamp from '../actions/timestamp';

export const timestampReducer: ActionReducer<TimestampState> =
  (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
