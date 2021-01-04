import {Mongo} from 'meteor/mongo';

export let Bookmarks = new Mongo.Collection<Bookmark>('bookmarks');