import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers/reducer';
import { LoadTodoRequested } from './actions/actions';
import { MetaTagsService } from './services/meta-tags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'initial-state-ngrx';

  constructor(
    private store: Store<AppState>,
    private metaTags: MetaTagsService) {
    
  }
  
  ngOnInit() {
    this.store.dispatch(new LoadTodoRequested());
    this.metaTags.addMetaTags();
  }
}