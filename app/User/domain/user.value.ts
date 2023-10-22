import { UserEntity } from './entities/user.entity';

export class User implements UserEntity {
    public userName: string;
    public name: string;
    public email: string;
    public password: string;
    public img?: string | undefined;
    public role: string;
    public status?: boolean | undefined;

    constructor(user: UserEntity) {
        this.userName = user.userName;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.img = user.img;
        this.role = user.role;
        this.status = true
    }
};