import { RoleUseCases } from '../application/role.use-cases';
import { RoleMongoRepository } from './repositories/role.mongo-repository';
import { RolePostgreRepository } from './repositories/role.postgre-repository';
import { RoleController } from './role.controller';

export const rolePostgreRepository =  new RolePostgreRepository()
export const roleMongoRepository = new RoleMongoRepository();
export const roleUseCases = new RoleUseCases(
    // roleMongoRepository
    rolePostgreRepository
)
export const roleController = new RoleController(roleUseCases);
