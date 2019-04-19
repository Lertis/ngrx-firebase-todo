import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './model/order';
import { AngularFirestore } from 'angularfire2/firestore';
import { UUID } from 'angular2-uuid';
 
@Injectable()
export class TodoService {

  constructor(private afs: AngularFirestore, private uuid: UUID) {

  }

  dataFireStore() {
    return this.afs.collection('testAFS').valueChanges();
  }

  addTodo(todoText) {
    let uuid =  UUID.UUID()
    const objTODO: Todo = {
      id: uuid,
      text: todoText,
      completed: false
    };

    this.afs.collection('testAFS').doc(uuid).set(objTODO)
  }

  updateTodo(todo: Todo, newText: string, newCompleted: boolean) {
    
    let referenceTodo = this.afs.collection('testAFS').doc(todo.id).ref;

    this.afs.firestore.runTransaction((transAction) => {
      return transAction.get(referenceTodo)
      .then((success) => {
        let dataSnapShot = success.data() as Todo;
        if(newText) {
          dataSnapShot.text = newText;
        }

        if(newCompleted) {
          dataSnapShot.completed = true;
        } 

        if (!newCompleted) {
          dataSnapShot.completed = false;
        }
       
        transAction.update(referenceTodo, dataSnapShot);
      })
      .catch((error) => {
        console.log('i got error when transaction...', error);
      })
    })
    .then(() => {
      console.log('Transaction successfully committed!');
    })
    .catch((error) => {
      console.log('i got error when transaction...', error);
    })
  }

  deleteTodo(todo: Todo) {
    this.afs.collection('testAFS').doc(todo.id).delete();
  }
}