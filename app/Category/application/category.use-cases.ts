import { CategoryEntity, UpdateCategoryDto } from '../domain/category.entity';
import { CategoryRepository } from '../domain/category.repository';
import { Category } from '../domain/category.value';

export class CategoryUseCases {
    constructor(
        private readonly categoryRepository: CategoryRepository,
    ) {};

    public createCategory = async (category: CategoryEntity) => {
        const newCategory = new Category(category);
        const categoryCreated = await this.categoryRepository.createCategory(newCategory);
        return categoryCreated;
    };
    public getAllCategories = async () => {
        try {
            const categories = await this.categoryRepository.getAllCategories();
            return categories;   
        } catch (error) {
            throw error;
        };
    };
    public getCategoryById = async (id: string) => {
        try {
            const category = await this.categoryRepository.getCategoryById(id);
            return category;
        } catch (error) {
            throw error;
        };
    };
    public updateCategory = async (id: string, updateCategoryDto: UpdateCategoryDto) => {
        try {
            const categoryUpdated = await this.categoryRepository.updateCategory(id, updateCategoryDto)
            return categoryUpdated;
        } catch (error) {
            throw error;
        };
    };
    public deleteCategory = async (id: string) => {
        try {
            const categoryDeleted = await this.categoryRepository.deleteCategory(id);
            return categoryDeleted;
        } catch (error) {
            throw error;
        };
    };
};