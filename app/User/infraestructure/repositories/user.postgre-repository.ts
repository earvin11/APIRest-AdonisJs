import Hash from '@ioc:Adonis/Core/Hash';
import { UpdateUserDto, UserEntity, UserLogged } from '../../domain/entities/user.entity';
import { UserRepostory } from '../../domain/user.repository';
import UserModelPg from '../models/user.postgre-model';
import { generateJWT } from 'App/Shared/adapters/jwt.adapter';

export class UserPostgreRepository implements UserRepostory {
    public createUser = async (user: UserEntity): Promise<UserEntity> => {
        try {
            const hashedPassword = await Hash.make(user.password);
            const newUser = new UserModelPg();
            await newUser
                .fill({...user, password: hashedPassword})
                .save();
            return newUser;
        } catch (error) {
            throw error;
        };
    };
    public getAllUsers = async (): Promise<UserEntity[]> => {
        try {
            const users = await UserModelPg.all();
            return users;
        } catch (error) {
            throw error;
        };
    };
    public getUserById = async (id: string): Promise<UserEntity  | null> => {
        try {
            const user = await UserModelPg.find(id);
            return user;
        } catch (error) {
            throw error;
        };
    };
    public updateUser = async (id: string, updateUserDto: UpdateUserDto): Promise<UserEntity  | null> => {
        try {
            const user = await UserModelPg.findOrFail(id);
            return await user
                .merge(updateUserDto)
                .save()
        } catch (error) {
            throw error;
        };
    };
    public deleteUser = async (id: string): Promise<UserEntity  | null> => {
        try {
            const user = await UserModelPg.findOrFail(id);
            user.status = false;
            return await user.save();
        } catch (error) {
            throw error;
        };
    };
    //AUTH
    public loginUser = async (loginDto: Pick<UserEntity, 'email' | 'password'>): Promise<UserLogged | null> => {
        try {
            const user = await UserModelPg.findBy( 'email', `${loginDto.email}` );
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
        };
    }
};