import { RoleEntity } from './role.entity';

export interface RoleRepository {
    createRole(rol: RoleEntity): Promise<RoleEntity>;
    getAllRoles(): Promise<RoleEntity[]>;
};