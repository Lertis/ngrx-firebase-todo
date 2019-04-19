import { Action } from '@ngrx/store';
import { Todo } from '../model/order';

export enum ActionTypes {
    LoadOrdersRequested = '[Orders API] Load Orders Requested',
    LoadOrders = '[Orders API] Load Orders'
  }
  
  export class LoadOrdersRequested implements Action {
    readonly type = ActionTypes.LoadOrdersRequested;
  };
  
  export class LoadOrders implements Action {
    readonly type = ActionTypes.LoadOrders;
    constructor(public payload: Todo[]) {}
  }
  
  export type OrderActions = LoadOrdersRequested | LoadOrders;