import { RoleEntity } from 'App/Role/domain/role.entity';
import { RoleRepository } from 'App/Role/domain/role.repository';
import RoleModelPg from '../models/role.postgre-model';

export class RolePostgreRepository implements RoleRepository {
    public createRole = async (role: RoleEntity): Promise<RoleEntity> => {
       try {
        const newRole = new RoleModelPg();
        await newRole
            .fill(role)
            .save()
        return newRole;
       } catch (error) {
        throw error;
       } 
    };
    public getAllRoles = async (): Promise<RoleEntity[]> => {
        try {
            const roles = await RoleModelPg.all();
            return roles;
        } catch (error) {
            throw error;
        }
    };
};