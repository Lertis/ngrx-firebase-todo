import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../model/order';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.scss']
})
export class TodoUpdateComponent implements OnInit {
  newTodoText: string;
  constructor(private todoService: TodoService, private dialogRef: MatDialogRef<TodoUpdateComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Todo) {
    this.newTodoText = data.text;
  }

  ngOnInit() {
  }

  success() {
    this.todoService.updateTodo(this.data, this.newTodoText, this.data.completed);
    this.dialogRef.close();
  }

  decline() {
    this.dialogRef.close();
  }

}
