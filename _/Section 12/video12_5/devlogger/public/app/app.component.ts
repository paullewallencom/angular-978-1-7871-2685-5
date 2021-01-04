import { Component } from '@angular/core';
import {LogsComponent} from './components/logs/logs.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {FeathersService} from './services/feathers.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [LogsComponent],
  providers: [FeathersService, HTTP_PROVIDERS]
})

export class AppComponent { }
