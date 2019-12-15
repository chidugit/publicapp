import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import ProductSchema from "./schema"

const Products = new Mongo.Collection("products");
//Products.insert({foo: "bar"}); //inserting some dummy date before attaching schema
Products.attachSchema(ProductSchema);
Products.attachBehaviour("timestampable");

export default Products;