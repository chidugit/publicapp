import SimpleSchema from "simpl-schema"

export default new SimpleSchema({
        category: {type: String},
        categoryDescription: {type: String},
        isActive: {type: Boolean},
        taxCode: {type: String},
        vat: {type: Number}
    }
);

