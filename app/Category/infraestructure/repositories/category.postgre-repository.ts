import { CategoryEntity, UpdateCategoryDto } from 'App/Category/domain/category.entity';
import { CategoryRepository } from '../../domain/category.repository';
import CategoryPgModel from '../models/category.postgre-model';

export class CategoryPostgreRepository implements CategoryRepository {
    public createCategory = async (category: CategoryEntity): Promise<CategoryEntity> => {
        try {
            const newCategory = new CategoryPgModel();
            return await newCategory
                .fill(category)
                .save();
        } catch (error) {
            throw error;
        }
    };
    public getAllCategories = async (): Promise<CategoryEntity[]> => {
        try {
            const categories = await CategoryPgModel.all();
            return categories;
        } catch (error) {
            throw error;
        }
    };
    public getCategoryById = async (id: string): Promise<CategoryEntity | null> => {
        try {
            const category = await CategoryPgModel.findOrFail(id);
            return category;
        } catch (error) {
            throw error;
        }
    };
    public updateCategory = async (id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity | null> => {
        try {
            const categoryUpdated = await CategoryPgModel.findOrFail(id);
            return await categoryUpdated
                .merge(updateCategoryDto)
                .save()
        } catch (error) {
            throw error;
        }
    };
    public deleteCategory = async (id: string): Promise<boolean> => {
        try {
            const categoryDeleted = await CategoryPgModel.findOrFail(id);
            categoryDeleted.status = false
            return Boolean(categoryDeleted);
        } catch (error) {
            throw error;
        }
    };
};