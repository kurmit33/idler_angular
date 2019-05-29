import { Action } from '@ngrx/store';

export enum ActionTypes {
  Reset = '[Sell Component] Reset',
  Zero = '[Sell Component] Zero',
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}

export class Zero implements Action {
  readonly type = ActionTypes.Zero;
}
