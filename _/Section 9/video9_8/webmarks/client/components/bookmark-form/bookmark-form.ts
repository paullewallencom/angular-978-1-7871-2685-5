import 'reflect-metadata';
import {Component} from '@angular/core';
import {Bookmarks} from '../../../collections/bookmarks';
import {Mongo} from 'meteor/mongo';
import {FormBuilder, ControlGroup, Validators} from '@angular/common';
import {Meteor} from 'meteor/meteor';

@Component({
    selector: 'bookmark-form',
    templateUrl: '/client/components/bookmark-form/bookmark-form.html'
})

export class BookmarkForm {
    bookmarkForm: ControlGroup;
    
    constructor(){
        let fb = new FormBuilder();
        
        this.bookmarkForm = fb.group({
            title: ['', Validators.required],
            url: ['', Validators.required],
            category: ['', Validators.required]
        });
    }
    
    addBookmark(bookmark){
        if(this.bookmarkForm.valid){
            if(Meteor.userId()){
                Bookmarks.insert({
                    title: bookmark.title,
                    url: bookmark.url,
                    category: bookmark.category,
                    owner: Meteor.userId()
                });   
                (<Control>this.bookmarkForm.controls['title'].updateValue(''));
                (<Control>this.bookmarkForm.controls['url'].updateValue(''));
                (<Control>this.bookmarkForm.controls['category'].updateValue(''));  
            } else {
                alert('Please log in to add a bookmark');
            }
              
    }
    }
}
