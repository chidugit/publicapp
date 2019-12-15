import SimpleSchema from "simpl-schema"

const ImageSizes = new SimpleSchema({
    large: {
        type: String,
        label: "Large",
        optional: true
    },
    medium: {
        type: String,
        label: "Medium",
        optional: true
    },
    original: {
        type: String,
        label: "Original",
        optional: true
    },
    small: {
        type: String,
        label: "Small",
        optional: true
    },
    thumbnail: {
        type: String,
        label: "Thumbnail",
        optional: true
    }
});

export default new SimpleSchema({
    product: {type: String, label: "Product"},
    barcode: {type: String, label: "Barcode", optional: true},
    categoryId: {type: String, label: "Category"},
    isVisible: {
        type: Boolean,
        defaultValue: true
    },
    minOrderQuantity: {
        label: "Minimum order quantity",
        type: SimpleSchema.Integer,
        optional: true
    },
    "sku": {
        label: "SKU",
        type: String,
        optional: true
    },
    urls: {
        type: ImageSizes
    }
})