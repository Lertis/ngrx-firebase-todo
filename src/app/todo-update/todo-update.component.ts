import { Component, OnInit, Inject } from '@angular/core';
import { OrdersService } from '../orders.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../model/order';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.scss']
})
export class TodoUpdateComponent implements OnInit {
  newTodoText: string;
  constructor(private orderService: OrdersService, private dialogRef: MatDialogRef<TodoUpdateComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Todo) { }

  ngOnInit() {
  }

  success() {
    this.orderService.updateTodo(this.data, this.newTodoText, null);
    this.dialogRef.close();
  }

  decline() {
    this.dialogRef.close();
  }

}
