import Hash from '@ioc:Adonis/Core/Hash';
import { UpdateUserDto, UserEntity, UserLogged } from '../../domain/entities/user.entity';
import { UserRepostory } from '../../domain/user.repository';
import UserModel from '../models/user.mongo-model';
import { generateJWT } from 'App/Shared/adapters/jwt.adapter';

export class UserMongoRepository implements UserRepostory {

    public createUser = async (user: UserEntity): Promise<UserEntity> => {
        try {
            const passwordHashed = await Hash.make(user.password);
            const newUser = await UserModel.create({ ...user, password: passwordHashed });
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
    //AUTH
    public loginUser = async (loginDto: Pick<UserEntity, 'email' | 'password'>): Promise<UserLogged | null> => {
        try {
            const user = await UserModel.findOne({ email: loginDto.email });
            const passwordVerify = await Hash.verify(user!.password, loginDto.password)
            console.log({ passwordVerify });
            if(user && (await Hash.verify(user.password, loginDto.password))) {
                const token = await generateJWT(user.id, user.userName);
                return {
                    token,
                    user
                };
            };
            return null;
        } catch (error) {
            throw error;
        }
    }
};