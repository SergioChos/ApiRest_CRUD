const {Schema,model} = require('mongoose');

const productSchema = Schema({
    nameProduct: {
        type: String,
        trim:true,
        required: [true, 'Provide a name product'],
    },
    descriptionProduct: {
        type: String,
        trim: true,
        required: [true, 'Provide a description'],
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
});

module.exports = model('Product', productSchema);