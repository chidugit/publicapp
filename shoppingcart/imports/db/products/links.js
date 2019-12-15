//import {Categories, Products} from "../index"
import {Mongo} from "meteor/mongo";
import Products from "./collection";
import Categories from "../categories/collection";

Products.addLinks({
    productsCategory:{
        type: "one",
        collection: "Categories",
        field: "category"
    }
});