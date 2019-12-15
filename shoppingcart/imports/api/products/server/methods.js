import {Meteor} from "meteor/meteor";
import ProductService from "./services/service"
//import query
import {getProductsCategory} from "/imports/db/queries";

Meteor.methods({
    'products.getProductsCategory'(isVisible) {
        return ProductService.getProducts(isVisible)
    }
});