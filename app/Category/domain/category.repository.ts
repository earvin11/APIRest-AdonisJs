import { CategoryEntity } from './category.entity';

export interface CategoryRepository {
    createCategory(category: CategoryEntity): Promise<CategoryEntity>;
    getAllCategories(): Promise<CategoryEntity[]>;
};