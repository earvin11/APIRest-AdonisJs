import { GenerateUuid } from 'App/Shared/adapters/uuid.adapter';
import { CategoryEntity } from './category.entity';

export class Category implements CategoryEntity {
    public id: string;
    public name: string;
    public status: boolean;

    constructor(category: CategoryEntity) {
        this.id = new GenerateUuid().uuid;
        this.name = category.name;
        this.status = true;
    };
};