import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputModule } from '@angular/material/input';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule, MatDialog } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { TodoComponent } from './todo.component';
import { Todo } from '../model/order';
import { UUID } from 'angular2-uuid';
import { AngularFirestore } from 'angularfire2/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { todosReducer } from '../reducers/reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../effects/effects';
import { RouterModule } from '@angular/router';
import { routes, configFirebase } from '../app.module';
import { AngularFireModule } from '@angular/fire';
import { of } from 'rxjs';
import { TodoService } from '../todo.service';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let dialogService: MatDialog;
  let todoService: TodoService;
  let afs: AngularFirestore;
  let uuid: UUID;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      imports:[
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        StoreModule.forRoot({ todo: todosReducer }),
        EffectsModule.forRoot([AppEffects]),
        RouterModule.forRoot(routes),
        AngularFireModule.initializeApp(configFirebase),
        MatInputModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatCheckboxModule
      ],
      providers: [
        TodoService,
        AngularFirestore,
        UUID
      ]
    })
    .compileComponents();

    dialogService = TestBed.get(MatDialog);
    spyOn(dialogService, 'open').and.returnValue({
      afterClosed: () => {
        return of(true);
      },
      close: () => {}
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    todoService = new TodoService(afs, uuid);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open todo update dialog', () => {
    const app: TodoComponent = fixture.debugElement.componentInstance;
    const todo = new Todo(1, 'test');
    app.update(todo);
    expect(dialogService.open).toHaveBeenCalled();
  });

});
