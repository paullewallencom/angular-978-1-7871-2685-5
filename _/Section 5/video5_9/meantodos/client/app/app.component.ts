import { Component } from '@angular/core';
import {TodosComponent} from './components/todos.component';
import {TodoService} from './services/todo.service';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [HTTP_PROVIDERS, TodoService],
  directives: [TodosComponent]
})

export class AppComponent { }