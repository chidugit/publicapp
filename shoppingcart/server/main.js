// This is where you import everything you need on server to start
import {Meteor} from "meteor/meteor";
import { Mongo } from 'meteor/mongo';
//chidus import
import "/imports/startup/server";

/*
function insertLink(title, url) {
    Links.insert({title, url, createdAt: new Date()});
}

Meteor.startup(() => {
    // If the Links collection is empty, add some data.
    if (Links.find().count() === 0) {
        insertLink(
            'Do the Tutorial',
            'https://www.meteor.com/tutorials/react/creating-an-app'
        );
        insertLink(
            'Follow the Guide',
            'http://guide.meteor.com'
        );
        insertLink(
            'Read the Docs',
            'https://docs.meteor.com'
        );
        insertLink(
            'Discussions',
            'https://forums.meteor.com'
        );
    }
});
*/
