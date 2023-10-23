import { ProductEntity, UpdateProductDto } from '../domain/product.entity';
import { ProductRepository } from '../domain/product.repository';
import { Product } from '../domain/product.value';

export class ProductUseCases {
    constructor(
        private readonly productRepository: ProductRepository,
    ) {}

    public createProduct = async (product: ProductEntity) => {
        try {
            const newProduct = new Product(product);
            const productCreated = await this.productRepository.createProduct(newProduct);
            return productCreated;
        } catch (error) {
            throw error;
        };
    };
    public getAllProducts = async () => {
        try {
            const products = await this.productRepository.getAllProducts();
            return products;
        } catch (error) {
            throw error;
        };
    };
    public getProductById = async (id: string) => {
        try {
            const product = await this.productRepository.getProductById(id);
            return product;
        } catch (error) {
            throw error;
        }
    };
    public updateProduct = async (id: string, updateProductDto: UpdateProductDto) => {
        try {
            const productUpdated = await this.productRepository.updateProduct(id, updateProductDto);
            return productUpdated;
        } catch (error) {
            throw error;
        };
    };
    public deleteProduct = async (id: string) => {
        try {
            const productDeleted = await this.productRepository.deleteProduct(id);
            return productDeleted;
        } catch (error) {
            
        };
    };
};