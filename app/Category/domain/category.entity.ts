export interface CategoryEntity {
    id?: string;
    name: string;
    status?: boolean;
};

export type UpdateCategoryDto = Pick<CategoryEntity, 'name'>;