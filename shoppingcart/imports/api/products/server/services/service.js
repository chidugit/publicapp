//import query
import {getProductsCategory} from "/imports/db/queries";

class ProductService {
    static getProducts(isVisible) {
        return getProductsCategory.clone({
            isVisible
        }).fetch()
    }
}

export default ProductService;