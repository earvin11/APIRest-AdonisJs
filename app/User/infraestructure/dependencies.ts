import { UserUseCases } from '../application/user.use-cases';
import { UserController } from './user.controller';
import { UserMongoRepository } from './repositories/user.mongo-repository';
import { UserPostgreRepository } from './repositories/user.postgre-repository';

export const userPostgreRepostiroy = new UserPostgreRepository();
export const userMongoRepository = new UserMongoRepository();

export const userUseCases = new UserUseCases(
    // userMongoRepository
    userPostgreRepostiroy
);
export const userController = new UserController(
    userUseCases
);