import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers/reducer';
import { LoadTodoRequested } from './actions/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'initial-state-ngrx';

  constructor(private store: Store<AppState>) {}
  
  ngOnInit() {
    this.store.dispatch(new LoadTodoRequested());
  }
}