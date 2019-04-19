import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUpdateComponent } from './todo-update.component';

import { MatInputModule } from '@angular/material/input';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AngularFirestore } from 'angularfire2/firestore';
import { UUID } from 'angular2-uuid';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { ordersReducer } from '../reducers/reducer';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { routes, configFirebase } from '../app.module';
import { AngularFireModule } from '@angular/fire';
import { AppEffects } from '../effects/effects';
import { TodoComponent } from '../todo/todo.component';
import { TodoService } from '../todo.service';

describe('TodoUpdateComponent', () => {
  let component: TodoUpdateComponent;
  let fixture: ComponentFixture<TodoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoUpdateComponent,  TodoComponent ],
      imports:[
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        StoreModule.forRoot({ orders: ordersReducer }),
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
        UUID,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
