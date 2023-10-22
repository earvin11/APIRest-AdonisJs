export interface UserEntity {
    userName: string;
    name: string;
    email: string;
    password: string;
    img?: string;
    role: string;
    status?: boolean;
};

export type UpdateUserDto = Pick<UserEntity, 'password' |'role' | 'name'>;