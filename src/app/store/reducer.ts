import { combineReducers } from '@ngrx/store';
import { Wrapper } from 'ngrx-store-simplr';

import { AppState } from './models';

const wrapper = new Wrapper<AppState>();


const finalReducer = combineReducers({
  timestamp: wrapper.createWrappedReducer('timestamp')
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
