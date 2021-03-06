import {Mongo} from 'meteor/mongo';

import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export let Bookmarks = new Mongo.Collection<Bookmark>('bookmarks');

Bookmarks.allow({
    insert: function(){
        let user = Meteor.user();
        return !!user;
    },
     update: function(){
        let user = Meteor.user();
        return !!user;
    },
     remove: function(){
        let user = Meteor.user();
        return !!user;
    }
});