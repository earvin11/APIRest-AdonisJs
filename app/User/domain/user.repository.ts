import { UpdateUserDto, UserEntity } from './entities/user.entity';

export interface UserRepostory {
    createUser(user: UserEntity): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
    getUserById(id: string): Promise<UserEntity | null>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity |null>;
    deleteUser(id: string): Promise<UserEntity | null>;
};