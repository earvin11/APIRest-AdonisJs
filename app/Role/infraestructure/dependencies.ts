import { RoleUseCases } from '../application/role.use-cases';
import { RoleMongoRepository } from './repositories/role.mongo-repository';
import { RoleController } from './role.controller';

export const roleMongoRepository = new RoleMongoRepository();
export const roleUseCases = new RoleUseCases(
    roleMongoRepository
)
export const roleController = new RoleController(roleUseCases);
