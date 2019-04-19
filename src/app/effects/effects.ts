import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { withLatestFrom, exhaustMap, filter, map } from 'rxjs/operators';
import { ActionTypes, LoadTodos, LoadTodoRequested, } from '../actions/actions';
import { getAllTodosLoaded, AppState } from '../reducers/reducer';
import { Todo } from '../model/order';
import { TodoService } from '../todo.service';


@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private todoService: TodoService
  ) { }

  @Effect() load$ = this.actions$.pipe(
    ofType<LoadTodoRequested>(ActionTypes.LoadTodoRequested),
    withLatestFrom(this.store.select(getAllTodosLoaded)),
    filter(([_, loaded]) => !loaded),
    exhaustMap(() => this.todoService.dataFireStore().pipe(
      map((result: Todo[] ) => new LoadTodos(result))
    ))
  )

}

