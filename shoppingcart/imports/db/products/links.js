import {Categories, Products} from  "../index"

Products.addLinks({
    productsCategory:{
        type: "one",
        collection: "Categories",
        field: "category"
    }
});