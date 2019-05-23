import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {

  constructor(private meta: Meta, private title: Title) { }

  addMetaTags() {
    this.title.setTitle('Angular universal ngrx firebase todo list');

    this.meta.updateTag({ name: 'application-name', content: 'Angular universal ngrx firebase todo list' });
    this.meta.updateTag({ name: 'node-version', content: '8.12.0' })
    this.meta.updateTag({ name: 'angular-version', content: '7.1.4' })
    this.meta.updateTag({ name: 'ngrx-store-version', content: '7.4.0' })
    this.meta.updateTag({ name: 'ngrx-effects-version', content: '7.4.0' })

    const keywords: MetaDefinition = {
      name: "technologies",
      content: "angular7, firebase, angular universal, ngrx"
    }

    this.meta.addTag(keywords);
  }
}
