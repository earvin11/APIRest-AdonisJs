import { CategoryEntity } from 'App/Category/domain/category.entity';
import { CategoryRepository } from '../../domain/category.repository';
import CategoryModel from '../models/category.mongo-model';

export class CategoryMongoRepository implements CategoryRepository {
    public createCategory = async (category: CategoryEntity): Promise<CategoryEntity> => {
        try {
            const newCategory = await CategoryModel.create(category);
            return newCategory;
        } catch (error) {
            throw error;
        }
    };
    public getAllCategories = async (): Promise<CategoryEntity[]> => {
        try {
            const categories = await CategoryModel.find();
            return categories;
        } catch (error) {
            throw error;
        }
    }
};