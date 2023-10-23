export interface ProductEntity {
    id?: string;
    name: string;
    category: string;
    isAvaliable?: boolean;
    quantity: number;
};

export type UpdateProductDto = Pick<ProductEntity, 'category' | 'name' | 'quantity'>;