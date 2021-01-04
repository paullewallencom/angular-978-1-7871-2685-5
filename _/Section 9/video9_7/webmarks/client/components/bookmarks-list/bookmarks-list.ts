import 'reflect-metadata';
import {Component} from '@angular/core';
import {Bookmarks} from '../../../collections/bookmarks';
import {Mongo} from 'meteor/mongo';
import {RouterLink} from '@angular/router-deprecated';

@Component({
    selector: 'bookmarks-list',
    templateUrl: '/client/components/bookmarks-list/bookmarks-list.html',
    directives: [RouterLink]
})

export class BookmarksList {
    bookmarks: Mongo.Cursor<Bookmark>;
    
    constructor(){
        this.bookmarks = Bookmarks.find();
    }
    
    removeBookmark(bookmark){
        Bookmarks.remove(bookmark._id);
    }
}
