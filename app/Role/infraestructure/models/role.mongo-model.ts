import { RoleEntity } from 'App/Role/domain/role.entity';
import { Schema, model } from 'mongoose';

const RoleSchema = new Schema<RoleEntity>({
    id: { type: String, require: true },
    name: { type: String, unique: true },
    status: { type: Boolean, default: true }
}, { versionKey: false, timestamps: true });

const RoleModel = model('role', RoleSchema);
export default RoleModel;