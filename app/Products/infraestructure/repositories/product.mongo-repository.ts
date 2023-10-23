import { ProductEntity, UpdateProductDto } from 'App/Products/domain/product.entity';
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
    public getProductById = async (id: string): Promise<ProductEntity | null> => {
        try {
            const product = await ProductModel.findOne({ id });
            return product;
        } catch (error) {
            throw error;
        }
    };
    public updateProduct = async (id: string, updateProductDto: UpdateProductDto): Promise<ProductEntity | null> => {
        try {
            const productUpdated = await ProductModel.findOneAndUpdate({ id }, updateProductDto);
            return productUpdated;
        } catch (error) {
            throw error;
        }
    };
    public deleteProduct = async (id: string): Promise<boolean> => {
        throw new Error('Method not implemented');
    };
};