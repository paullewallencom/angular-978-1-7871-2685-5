import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from '@angular/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {BookmarksList} from './components/bookmarks-list/bookmarks-list';
import {Bookmarks} from '../collections/bookmarks';
import {Mongo} from 'meteor/mongo';

@Component({
    selector: 'app',
    templateUrl: '/client/app.html',
    directives: [BookmarksList]
})

class Webmarks {}

bootstrap(Webmarks);
