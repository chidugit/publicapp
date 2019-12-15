import {Meteor} from "meteor/meteor";
import ProductSchema from "./schema"
const Products = new Mongo.Collection("products");
Products.attachSchema(ProductSchema);
Products.attachBehaviour("timestampable");

export default Products;