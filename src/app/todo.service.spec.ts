import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { UUID } from 'angular2-uuid';
import { AngularFirestore } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { TodoComponent } from './todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/effects';
import { ordersReducer } from './reducers/reducer';
import { configFirebase, routes } from './app.module';
import { AngularFireModule } from '@angular/fire';
import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

describe('TodosService', () => {
    let service: TodoService;

    beforeEach(() =>  {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                TodoComponent,
                TodoUpdateComponent
            ],
            imports: [
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
        });

        service = TestBed.get(TodoService);
    });

    it('should be created', () => {
        const service: TodoService = TestBed.get(TodoService);
        expect(service).toBeTruthy();
    });
});
