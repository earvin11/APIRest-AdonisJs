import { CategoryEntity } from '../domain/category.entity';
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
     const categories = await this.categoryRepository.getAllCategories();
     return categories;   
    }
};