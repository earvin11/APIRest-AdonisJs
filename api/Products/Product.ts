import { Schema, model } from 'mongoose';


const ProductSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Product name is required']
    },
    status: {
        type: Boolean,
        default: true
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: [ true, 'Product category is required' ]
    },
    description: {
        type: String
    },
    available: {
        type: Boolean,
        default: true
    },
    img: {
        type: String
    }

});


export default model('Product', ProductSchema);