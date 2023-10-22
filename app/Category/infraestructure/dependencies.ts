import { CategoryUseCases } from '../application/category.use-cases';
import { CategoryController } from './category.controller';
import { CategoryMongoRepository } from './repositories/category.mongo-repository';

export const categoryMongoRepository = new CategoryMongoRepository();
export const categoryUseCases = new CategoryUseCases(
    categoryMongoRepository
);
export const categoryController = new CategoryController(categoryUseCases);