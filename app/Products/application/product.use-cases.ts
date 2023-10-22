import { ProductEntity } from '../domain/product.entity';
import { ProductRepository } from '../domain/product.repository';
import { Product } from '../domain/product.value';

export class ProductUseCases {
    constructor(
        private readonly productRepository: ProductRepository,
    ) {}

    public createProduct = async (product: ProductEntity) => {
        const newProduct = new Product(product);
        const productCreated = await this.productRepository.createProduct(newProduct);
        return productCreated;
    };
    public getAllProducts = async () => {
        const products = await this.productRepository.getAllProducts();
        return products;
    };
};