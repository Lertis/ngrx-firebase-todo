import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers/reducer';
import { LoadOrdersRequested } from './actions/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<AppState>) {}
  
  ngOnInit() {
    this.store.dispatch(new LoadOrdersRequested());
  }
}