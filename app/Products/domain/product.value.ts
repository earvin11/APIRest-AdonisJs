import { GenerateUuid } from 'App/Shared/adapters/uuid.adapter';
import { ProductEntity } from './product.entity';

export class Product implements ProductEntity {
    id?: string;
    name: string;
    category: string;
    isAvailable: boolean;
    quantity: number;

    constructor(product: ProductEntity) {
        this.id = new GenerateUuid().uuid;
        this.name = product.name;
        this.category = product.category;
        this.isAvailable = true;
        this.quantity = product.quantity;
    }
};