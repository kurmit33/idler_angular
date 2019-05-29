import { Action } from '@ngrx/store';
import { ActionTypes } from './sell.actions';

export const initialState = 0;

export function sellReducer (state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Zero:
      return 0;
    case ActionTypes.Reset:
      return state + 1;

    default:
      return state;
  }
}
