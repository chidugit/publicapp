import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import categorySchema from "./schema";

const Categories = new Mongo.Collection("categories");
Categories.attachSchema(categorySchema);
Categories.attachBehaviour("timestampable");

export default Categories;

//add hooks - if you want to do something before or after insert, update etc
// meteor add matb33:collection-hooks
// emit an event from hook and handle this in api