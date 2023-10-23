import { ProductUseCases } from '../application/product.use-cases';
import { ProductController } from './product.controller';
import { ProductMongoRepository } from './repositories/product.mongo-repository';
import { ProductPostgreRepository } from './repositories/product.postgre-repository';

export const productMongoRepository = new ProductMongoRepository();
export const productPostgreRepository = new ProductPostgreRepository();
export const productUseCases = new ProductUseCases(
    // productMongoRepository
    productPostgreRepository
)
export const productController = new ProductController(productUseCases);