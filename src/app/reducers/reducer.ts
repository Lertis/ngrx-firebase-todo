
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ActionTypes } from '../actions/actions';
import { Todo } from '../model/order';

export interface AppState {
    todo: TodosState;
  }
  
  export interface TodosState {
      allTodosLoaded: boolean;
      data: Todo[] | null;
  }
  
  const intialState = {
    allTodosLoaded: false,
    data: null
  }

  
export function todosReducer(state = intialState, action) {
    switch(action.type) {
        case ActionTypes.LoadTodos:
        return {
          allTodosLoaded: true,
          data: action.payload
        };
      default:
        return state;
    }
  }
  
  const getTodos = createFeatureSelector<AppState, TodosState>('todo');
  
  export const getAllTodos = createSelector(getTodos, state => state.data);
  export const getAllTodosLoaded = createSelector(getTodos, state => state.allTodosLoaded);