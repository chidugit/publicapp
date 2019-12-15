import {getProductsCategory} from "/imports/db/queries"

getProductsCategory.expose({
    firewall(userId, params) {
        // you can manipulate params object here
        if (isAllowed(userId)) {
            // you can throw exceptions if he's not allowed access to this query
        }
        // the firewall can either: throw exception or modify params
    }
});