import { CategoryEntity } from 'App/Category/domain/category.entity';
import { Schema, model } from 'mongoose';

const CategorySchema = new Schema<CategoryEntity>({
    id: String,
    name: { type: String, unique: true },
    status: Boolean
},{ timestamps: true, versionKey: false });

const CategoryModel = model('category', CategorySchema);
export default CategoryModel;