import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, provide} from '@angular/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {BookmarksList} from './components/bookmarks-list/bookmarks-list';
import {BookmarkForm} from './components/bookmark-form/bookmark-form';
import {BookmarkDetails} from './components/bookmark-details/bookmark-details';
import {Bookmarks} from '../collections/bookmarks';
import {APP_BASE_HREF} from '@angular/common';
import {Mongo} from 'meteor/mongo';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';

@Component({
    selector: 'app',
    templateUrl: '/client/app.html',
    directives: [ROUTER_DIRECTIVES, BookmarksList, BookmarkForm]
})

@RouteConfig([
    {path: '/', as: 'BookmarksList', component: BookmarksList},
    {path: '/bookmark/:bookmarkId', as: 'BookmarkDetails', component: BookmarkDetails}
])

class Webmarks {}

bootstrap(Webmarks, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'})]);
