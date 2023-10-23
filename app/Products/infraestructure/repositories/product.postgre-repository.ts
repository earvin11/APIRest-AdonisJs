import { ProductEntity, UpdateProductDto } from 'App/Products/domain/product.entity';
import { ProductRepository } from 'App/Products/domain/product.repository';
import ProductPgModel from '../models/product.postgre-model';

export class ProductPostgreRepository implements ProductRepository {
    public createProduct = async (product: ProductEntity): Promise<ProductEntity> => {
        try {
            const newProduct = new ProductPgModel()
            return await newProduct.fill(product).save();
        } catch (error) {
            throw error;
        }
    };
    public getAllProducts = async (): Promise<ProductEntity[]> => {
        try {
            const products = await ProductPgModel.all();
            return products;
        } catch (error) {
            throw error;
        }
    };
    public getProductById = async (id: string): Promise<ProductEntity | null> => {
        try {
            const product = await ProductPgModel.findOrFail(id);
            return product;
        } catch (error) {
            throw error;
        }
    };
    public updateProduct = async (id: string, updateProductDto: UpdateProductDto): Promise<ProductEntity | null> => {
        try {
            const productUpdated = await ProductPgModel.findOrFail(id);
            return await productUpdated.merge(updateProductDto).save();
        } catch (error) {
            throw error;
        }
    };
    public deleteProduct = async (id: string): Promise<boolean> => {
        throw new Error('Method not implemented');
    };
};