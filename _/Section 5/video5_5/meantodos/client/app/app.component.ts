import { Component } from '@angular/core';
import {TodosComponent} from './components/todos.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [TodosComponent]
})

export class AppComponent { }