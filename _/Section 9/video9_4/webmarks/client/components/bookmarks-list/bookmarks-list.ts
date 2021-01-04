import 'reflect-metadata';
import {Component} from '@angular/core';
import {Bookmarks} from '../../../collections/bookmarks';
import {Mongo} from 'meteor/mongo';

@Component({
    selector: 'bookmarks-list',
    templateUrl: '/client/components/bookmarks-list/bookmarks-list.html'
})

export class BookmarksList {
    bookmarks: Mongo.Cursor<Object>;
    
    constructor(){
        this.bookmarks = Bookmarks.find();
    }
}
