import Products from "../collection";

export default Products.createQuery("getProductsCategory", {
    $filter({filters, params}) {
        filters.isVisible = params.visible;
    },
    product: 1,
    categoryId: 1,
    urls: 1,
    categoryDescription: 1,
    isActive: 1,
    vat: 1
});