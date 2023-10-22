import { UpdateUserDto, UserEntity } from '../../domain/entities/user.entity';
import { UserRepostory } from '../../domain/user.repository';
import UserModel from '../models/user.mongo-model';

export class UserMongoRepository implements UserRepostory {

    public createUser = async (user: UserEntity): Promise<UserEntity> => {
        try {
            const newUser = await UserModel.create(user);
            return newUser;
        } catch (error) {
            throw error;
        }
    };
    public getAllUsers = async (): Promise<UserEntity[]> => {
        try {
            const users = await UserModel.find();
            return users;
        } catch (error) {
            throw error;
        }
    };
    public getUserById = async (id: string): Promise<UserEntity | null> => {
        try {
            const user = await UserModel.findOne({ id });
            return user;
        } catch (error) {
            throw error;
        }
    };
    public updateUser = async (id: string, updateUserDto: UpdateUserDto): Promise<UserEntity | null> => {
        try {
            const userUpdated = await UserModel.findOneAndUpdate({ id }, updateUserDto);
            return userUpdated;
        } catch (error) {
            throw error;
        }
    };
    public deleteUser = async (id: string): Promise<UserEntity | null> => {
        try {
            const user = await UserModel.findOneAndUpdate({ id }, { status: false }, { new: true });
            return user;
        } catch (error) {
            throw error;
        }
    };

};