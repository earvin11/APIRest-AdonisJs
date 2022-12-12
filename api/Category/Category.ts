import { Schema, model } from 'mongoose';


const CategorySchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },

    status: {
        type: Boolean,
        default: true
    }

});


export default model('Categry', CategorySchema);