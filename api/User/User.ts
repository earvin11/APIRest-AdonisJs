import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    userName: {
        type: String,
        required: [ true, 'UserName is required' ],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    img: {
        type: String,
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: [ true, 'User role is required' ]
    },
    status: {
        type: Boolean,
        default: true
    },
});

export default model('User', UserSchema);