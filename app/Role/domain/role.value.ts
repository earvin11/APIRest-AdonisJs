import { GenerateUuid } from 'App/Shared/adapters/uuid.adapter';
import { RoleEntity } from './role.entity';

export class Role implements RoleEntity {
    public id: string;
    public name: string;
    public status: boolean;

    constructor(role: RoleEntity) {
        this.name = role.name;
        this.status = true;
        this.id = new GenerateUuid().uuid;
    };
};