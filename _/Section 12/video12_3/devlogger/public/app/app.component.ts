import { Component } from '@angular/core';
import {LogsComponent} from './components/logs/logs.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [LogsComponent]
})

export class AppComponent { }
