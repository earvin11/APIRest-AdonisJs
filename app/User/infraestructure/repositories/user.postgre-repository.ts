import { UpdateUserDto, UserEntity } from '../../domain/entities/user.entity';
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
    public getAllUsers = async (): Promise<UserEntity[]> => {
        try {
            const users = await UserModelPg.all();
            return users;
        } catch (error) {
            throw error;
        }
    };
    public getUserById = async (id: string): Promise<UserEntity  | null> => {
        try {
            const user = await UserModelPg.find(id);
            return user;
        } catch (error) {
            throw error;
        }
    };
    public updateUser = async (id: string, updateUserDto: UpdateUserDto): Promise<UserEntity  | null> => {
        try {
            const user = await UserModelPg.findOrFail(id);
            return await user
                .merge(updateUserDto)
                .save()
        } catch (error) {
            throw error;
        }
    };
    public deleteUser = async (id: string): Promise<UserEntity  | null> => {
        try {
            const user = await UserModelPg.findOrFail(id);
            user.status = false;
            return await user.save();
        } catch (error) {
            throw error;
        }
    };

};