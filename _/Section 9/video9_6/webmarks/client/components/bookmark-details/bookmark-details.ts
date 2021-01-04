import 'reflect-metadata';
import {Component, NgZone} from '@angular/core';
import {Bookmarks} from '../../../collections/bookmarks';
import {Mongo} from 'meteor/mongo';
import {RouteParams} from '@angular/router-deprecated';
import {Tracker} from 'meteor/tracker';

@Component({
    selector: 'bookmark-details',
    templateUrl: '/client/components/bookmark-details/bookmark-details.html'
})

export class BookmarkDetails {
    bookmark: Object;
    
    constructor(params: RouteParams, ngZone: NgZone){
        var bookmarkId = params.get('bookmarkId');
        
        Tracker.autorun(() => {
            ngZone.run(() => {
               this.bookmark = Bookmarks.findOne(bookmarkId);  
            });
        });
    }
}
