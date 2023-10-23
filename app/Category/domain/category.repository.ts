import { CategoryEntity, UpdateCategoryDto } from './category.entity';

export interface CategoryRepository {
    createCategory(category: CategoryEntity): Promise<CategoryEntity>;
    getAllCategories(): Promise<CategoryEntity[]>;
    getCategoryById(id: string): Promise<CategoryEntity | null>;
    updateCategory(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity | null>;
    deleteCategory(id: string): Promise<boolean>;
};