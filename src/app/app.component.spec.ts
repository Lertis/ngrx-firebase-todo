import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { ordersReducer } from './reducers/reducer';
import { AppEffects } from './effects/effects';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireModule } from '@angular/fire';
import { configFirebase, routes } from './app.module';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AngularFirestore } from 'angularfire2/firestore';
import { UUID } from 'angular2-uuid';
import { TodoService } from './todo.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoComponent,
        TodoUpdateComponent
      ],
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
        UUID
      ] 
    }).compileComponents()
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'initial-state-ngrx'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('initial-state-ngrx');
  });
});
