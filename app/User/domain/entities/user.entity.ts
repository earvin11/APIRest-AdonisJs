export interface UserEntity {
    id?: string;
    userName: string;
    name: string;
    email: string;
    password: string;
    img?: string;
    role: TypeUser;
    status?: boolean;
};

export type UpdateUserDto = Pick<UserEntity, 'password' |'role' | 'name'>;

export enum TypeUser {
    ADMIN = 'ADMIN',
    USER  = 'USER'
};

export interface UserLogged {
    token: string;
    user: UserEntity
};