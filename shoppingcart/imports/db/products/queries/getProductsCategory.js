import Products from "../collection";

export default Posts.createQuery("getProductCategory", {
    $filter({filters, params}) {
        filters.product = params.product;
        if (filters.isVisible) {
            filters.isVisible = params.visible;
        }
    },
    product: 1,
    categoryId: 1,
    urls: 1,
    categoryDescription: 1,
    isActive: 1,
    vat: 1
});