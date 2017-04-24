import { combineReducers } from '@ngrx/store';
import { Wrapper } from 'ngrx-store-simplr';

import { AppState } from './models';

const wrapper = new Wrapper<AppState>();


// const finalReducer = combineReducers({
//   timestamp: wrapper.createWrappedReducer('timestamp')
// });

// export function reducer(state, action) {
//   return finalReducer(state, action);
// }

const wrappedReducers = wrapper.mergeReducersIntoWrappedReducers({
  timestamp: null, // if you have the reducer for timestamp key, set here instead of null.
});

const rootReducer = combineReducers(wrappedReducers);

export function reducer(state, action) { // workaround for AoT build
  return rootReducer(state, action);
}

export const initialState: AppState = {
  timestamp: {
    local: 0,
    server: 0,
    timelag: 0,
  }
};
