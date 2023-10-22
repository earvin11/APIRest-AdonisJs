import { ProductEntity } from './product.entity';

export interface ProductRepository {
    createProduct(product: ProductEntity): Promise<ProductEntity>;
    getAllProducts(): Promise<ProductEntity[]>;
}