import { Schema, model } from 'mongoose';
import { UserEntity } from '../../domain/entities/user.entity';


const UserSchema = new Schema<UserEntity>({
    userName: String,
    name: String,
    email: { type: String, unique: true },
    password: String,
    img: String,
    role: String,
    status: { type: Boolean, default: true }
}, { versionKey: false, timestamps: true });

const UserModel = model('user', UserSchema);
export default UserModel;