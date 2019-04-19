import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { OrdersService } from './orders.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from 'angularfire2/firestore';
import { ordersReducer } from './reducers/reducer';
import { AppEffects } from './effects/effects';
import { TodoComponent } from './todo/todo.component';

import { MatInputModule } from '@angular/material/input';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UUID } from 'angular2-uuid';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { FlexLayoutModule } from "@angular/flex-layout";
const routes = [
  {
    path: '',
    component: TodoComponent
  }
]

export const configFirebase = {
  apiKey: "AIzaSyCrRD8b-aacGU8yRJArjr69OMpzVKZ2FBE",
  authDomain: "lions-a.firebaseapp.com",
  databaseURL: "https://lions-a.firebaseio.com",
  projectId: "lions-a",
  storageBucket: "lions-a.appspot.com",
  messagingSenderId: "1050725409718"
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot({ orders: ordersReducer }),
    EffectsModule.forRoot([AppEffects]),
    RouterModule.forRoot(routes),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    AngularFireModule.initializeApp(configFirebase),
    FlexLayoutModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  entryComponents: [TodoUpdateComponent],
  declarations: [ AppComponent, TodoComponent, TodoUpdateComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    AppEffects,
    OrdersService,
    AngularFirestore,
    UUID
  ]
})
export class AppModule { }
