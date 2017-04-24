import { combineReducers } from '@ngrx/store';
import { Wrapper } from 'ngrx-store-simplr';

import { AppState } from './models';

const wrapper = new Wrapper<AppState>();


const wrappedReducers = wrapper.mergeReducersIntoWrappedReducers({
  timestamp: null, // if you have a reducer for this key, set it here instead of null.
});

const rootReducer = combineReducers(wrappedReducers);

export function reducer(state, action) { // workaround for AoT compile
  return rootReducer(state, action);
}

export const initialState: AppState = {
  timestamp: {
    local: 0,
    server: 0,
    timelag: 0,
  }
};
