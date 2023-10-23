import { ProductEntity, UpdateProductDto } from './product.entity';

export interface ProductRepository {
    createProduct(product: ProductEntity): Promise<ProductEntity>;
    getAllProducts(): Promise<ProductEntity[]>;
    getProductById(id: string): Promise<ProductEntity | null>;
    updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<ProductEntity | null>;
    deleteProduct(id: string): Promise<boolean>;
};