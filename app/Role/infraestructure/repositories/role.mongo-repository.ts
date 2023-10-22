import { RoleEntity } from 'App/Role/domain/role.entity';
import { RoleRepository } from 'App/Role/domain/role.repository';
import RoleModel from '../models/role.mongo-model';

export class RoleMongoRepository implements RoleRepository {
    public createRole = async (rol: RoleEntity): Promise<RoleEntity> => {
        try {
            const newRole = await RoleModel.create(rol);
            return newRole; 
        } catch (error) {
            throw error;
        }
    }
    public getAllRoles = async (): Promise<RoleEntity[]> => {
        try {
            const roles = await RoleModel.find();
            return roles;
        } catch (error) {
            throw error;
        }
    }
};