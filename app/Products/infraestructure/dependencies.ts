import { ProductUseCases } from '../application/product.use-cases';
import { ProductController } from './product.controller';
import { ProductMongoRepository } from './repositories/product.mongo-repository';

export const productMongoRepository = new ProductMongoRepository();
export const productUseCases = new ProductUseCases(
    productMongoRepository
)
export const productController = new ProductController(productUseCases);