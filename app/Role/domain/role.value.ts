import { RoleEntity } from './role.entity';

export class Role implements RoleEntity {
    public name: string;
    public status: boolean;

    constructor(role: RoleEntity) {
        this.name = role.name;
        this.status = true;
    };
};