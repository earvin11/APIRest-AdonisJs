import { RoleEntity } from './role.entity';

export interface RoleRepository {
    createRole(role: RoleEntity): Promise<RoleEntity>;
    getAllRoles(): Promise<RoleEntity[]>;
};