import { ProductEntity } from 'App/Products/domain/product.entity';
import { ProductRepository } from 'App/Products/domain/product.repository';
import ProductModel from '../models/product.mongo-model';

export class ProductMongoRepository implements ProductRepository {
    public createProduct = async (product: ProductEntity): Promise<ProductEntity> => {
        try {
            const newProduct = await ProductModel.create(product);
            return newProduct;
        } catch (error) {
            throw error;
        }
    };
    public getAllProducts = async (): Promise<ProductEntity[]> => {
        try {
            const products = await ProductModel.find();
            return products;
        } catch (error) {
            throw error;
        }
    };
};