import { UpdateUserDto, UserEntity } from '../domain/entities/user.entity';
import { UserRepostory } from '../domain/user.repository';
import { User } from '../domain/user.value';

export class UserUseCases {
    constructor (
        private readonly userRepository: UserRepostory,
    ) {};

    public createUser = async(user: UserEntity) => {
        const newUser = new User(user);
        const userCreated = await this.userRepository.createUser(newUser);
        return userCreated;
    };
    public getAllUsers = async() => {
        const users = await this.userRepository.getAllUsers();
        return users;
    };
    public getUserById = async(id: string) => {
        const user = await this.userRepository.getUserById(id);
        return user;

    };
    public updateUser = async(id: string, updateUserDto: UpdateUserDto) => {
        const user = await this.userRepository.updateUser(id, updateUserDto);
        return user;
    };
    public deleteUser = async(id: string) => {
        const user = await this.userRepository.deleteUser(id);
        return user;
    };
    // AUTH
    public loginUser = async(loginDto: Pick<UserEntity, 'email' | 'password'>) => {
        const user = await this.userRepository.loginUser(loginDto);
        return user;
    }
};