import { Schema, model } from 'mongoose';


const RoleSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Role name is required'],
        unique: true
    },
    status: {
        type: Boolean,
        default: true
    }

});

export default model('Role', RoleSchema);