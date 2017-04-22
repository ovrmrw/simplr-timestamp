import { combineReducers } from '@ngrx/store';
import { Wrapper } from 'ngrx-store-simplr';

import { AppState } from './models';
import { timestampReducer } from './reducers/timestamp';

const wrapper = new Wrapper<AppState>();


const finalReducer = combineReducers({
  timestamp: wrapper.wrapReducerForSimplr('timestamp', timestampReducer)
});

export function reducer(state, action) {
  return finalReducer(state, action);
}

export const initialState: AppState = {
  timestamp: {
    local: 0,
    server: 0,
    timelag: 0,
  }
};
