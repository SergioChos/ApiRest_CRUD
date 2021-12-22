const {Schema,model} = require('mongoose');

const categorySchema = Schema({
    nameCategory: {
        type: String,
        trim:true,
        required: [true, 'Provide the category name'],
        unique: true
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Provide a description'],
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = model('Category', categorySchema);