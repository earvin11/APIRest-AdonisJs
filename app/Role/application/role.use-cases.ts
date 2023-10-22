import { Role } from '../domain/role.value';
import { RoleRepository } from '../domain/role.repository';
import { RoleEntity } from '../domain/role.entity';

export class RoleUseCases {
    constructor(
        private readonly roleRepository: RoleRepository,
    ) {}

    public createRole = async (role: RoleEntity) => {
        const newRole = new Role(role);
        const roleCreated = await this.roleRepository.createRole(newRole);
        return roleCreated;
    }

    public getAllRoles = async () => {
        const roles = await this.roleRepository.getAllRoles();
        return roles;
    }
}