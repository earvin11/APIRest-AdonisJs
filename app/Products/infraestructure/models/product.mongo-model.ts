import { ProductEntity } from 'App/Products/domain/product.entity';
import { Schema, model } from 'mongoose';

const ProductSchema = new Schema<ProductEntity>({
    id: String,
    name: {type: String, unique: true},
    category: String,
    isAvaliable: { type: Boolean, default: true },
    quantity: { type: Number, default: 0 }
}, { versionKey: false, timestamps: true });

const ProductModel = model('product', ProductSchema);
export default ProductModel;