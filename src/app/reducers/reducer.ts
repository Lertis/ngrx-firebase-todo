
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ActionTypes } from '../actions/actions';
import { Todo } from '../model/order';

export interface AppState {
    orders: OrdersState;
  }
  
  export interface OrdersState {
      allOrdersLoaded: boolean;
      data: Todo[] | null;
  }
  
  const intialState = {
    allOrdersLoaded: false,
    data: null
  }

  
export function ordersReducer(state = intialState, action) {
    switch(action.type) {
        case ActionTypes.LoadOrders:
        return {
          allOrdersLoaded: true,
          data: action.payload
        };
      default:
        return state;
    }
  }
  
  const getOrders = createFeatureSelector<AppState, OrdersState>('orders');
  
  export const getAllOrders = createSelector(getOrders, state => state.data);
  export const getAllOrdersLoaded = createSelector(getOrders, state => state.allOrdersLoaded);