import {Categories, Products} from  "../index"

Categories.addLinks({
   categoryProducts: {
        collection:"Products",
       inversedBy: "productsCategory"
   }
});