import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/order';
import { Store } from '@ngrx/store';
import { AppState, getAllOrders } from '../reducers/reducer';
import { AngularFirestore } from 'angularfire2/firestore';
import { MatDialog } from '@angular/material/dialog';
import { TodoUpdateComponent } from '../todo-update/todo-update.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  todos$: Observable<Todo[]>;
  todoText: string;

  constructor(
    private store: Store<AppState>,
    private todoService: TodoService,
    private afs: AngularFirestore,
    private dialog: MatDialog) {
    this.todos$ = this.store.select(getAllOrders);
  }

  ngOnInit() {
  }

  add() {
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
  }

  update(todo: Todo) {
    this.dialog.open(TodoUpdateComponent, {
      width: '40%',
      height: '15%',
      data: todo
    })
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  checkedCheckBox($event, todo: Todo) {
    console.log('todo:', todo)
    if (!todo.completed) {
      this.todoService.updateTodo(todo, null, true);
    } else {
      this.todoService.updateTodo(todo, null, false);
    }
  }
}