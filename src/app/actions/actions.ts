import { Action } from '@ngrx/store';
import { Todo } from '../model/order';

export enum ActionTypes {
    LoadTodoRequested = 'Load Todo Requested',
    LoadTodos = 'Load Todos',
    AddTodo = 'Add Todo',
    UpdateTodo = 'Update Todo',
    DeleteTodo = 'Delete Todo'
  }
  
  export class LoadTodoRequested implements Action {
    readonly type = ActionTypes.LoadTodoRequested;
  };
  
  export class LoadTodos implements Action {
    readonly type = ActionTypes.LoadTodos;
    constructor(public payload: Todo[]) {}
  }

  export class AddTodo implements Action {
    readonly type = ActionTypes.AddTodo;
    constructor(public payload: Todo[]) {}
  }

  export class UpdateTodo implements Action {
    readonly type = ActionTypes.UpdateTodo;
    constructor(public payload: Todo[]) {}
  }

  export class DeleteTodo implements Action {
    readonly type = ActionTypes.DeleteTodo;
    constructor(public payload: Todo[]) {}
  }
  
  export type OrderActions = LoadTodoRequested | LoadTodos | AddTodo | UpdateTodo | DeleteTodo;