import { UserEntity } from '../../domain/entities/user.entity';
import { UserRepostory } from '../../domain/user.repository';
import UserModelPg from '../models/user.postgre-model';

export class UserPostgreRepository implements UserRepostory {
    public createUser = async (user: UserEntity): Promise<UserEntity> => {
        try {
            const newUser = new UserModelPg()
            await newUser
                .fill(user)
                .save();
            return newUser;
        } catch (error) {
            throw error;
        }
    };
    public getAllUsers = (): Promise<UserEntity[]> => {
        throw  new Error('Method not implemented.');
    };
    public getUserById = (id: string): Promise<UserEntity  | null> => {
        throw new Error('Method not implemented.');
    };
    public updateUser = (id: string): Promise<UserEntity  | null> => {
        throw new Error('Method not implemented.');
    };
    public deleteUser = (id: string): Promise<UserEntity  | null> => {
        throw new Error('Method not implemented.');
    };

};