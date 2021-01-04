import 'reflect-metadata';
import {Component, NgZone} from '@angular/core';
import {Bookmarks} from '../../../collections/bookmarks';
import {Mongo} from 'meteor/mongo';
import {RouteParams} from '@angular/router-deprecated';
import {Tracker} from 'meteor/tracker';
import {Meteor} from 'meteor/meteor';

@Component({
    selector: 'bookmark-details',
    templateUrl: '/client/components/bookmark-details/bookmark-details.html'
})

export class BookmarkDetails {
    bookmark: Bookmark;
    isOwner = false;
    
    constructor(params: RouteParams, ngZone: NgZone){
        var bookmarkId = params.get('bookmarkId');
        
        var current = Bookmarks.findOne(bookmarkId);
        if(current.owner == Meteor.userId()){
            this.isOwner = true;
        }
        
        Tracker.autorun(() => {
            ngZone.run(() => {
               this.bookmark = Bookmarks.findOne(bookmarkId);  
            });
        });
    }
    
    updateBookmark(bookmark){
        if(Meteor.userId()){
            Bookmarks.update(bookmark._id, {
                $set: {
                    title: bookmark.title,
                    url: bookmark.url,
                    category: bookmark.category
                }
            });
        } else {
            alert('Please log in to update');
        }
        
    }
}
