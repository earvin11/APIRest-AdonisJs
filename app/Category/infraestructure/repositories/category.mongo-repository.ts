import { CategoryEntity, UpdateCategoryDto } from 'App/Category/domain/category.entity';
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
    };
    public getCategoryById = async (id: string): Promise<CategoryEntity | null> => {
        try {
            const category = await CategoryModel.findOne({ id });
            return category;
        } catch (error) {
            throw error;
        }
    };
    public updateCategory = async (id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity | null> => {
        try {
            const categoryUpdated = await CategoryModel.findOneAndUpdate({id}, updateCategoryDto);
            return categoryUpdated;
        } catch (error) {
            throw error;
        }
    };
    public deleteCategory = async (id: string): Promise<boolean> => {
        try {
            const categoryDeleted = await CategoryModel.findOneAndUpdate({ id }, { status: false });
            return Boolean(categoryDeleted);
        } catch (error) {
            throw error;
        }
    };
};