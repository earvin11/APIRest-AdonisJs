import { HttpContext } from '@adonisjs/core/build/standalone';
import { UserUseCases } from '../application/user.use-cases';

export class UserController {
    constructor(
        private readonly userUseCases: UserUseCases
    ) {};

    public store = async({ request, response }: HttpContext) => {
        const {
            userName,
            name,
            email,
            password,
            img,
            role
        } = request.body();

        try {
            const newUser = await this.userUseCases.createUser({
                userName,
                name,
                email,
                password,
                img,
                role
            });
            response.created(newUser);
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Talk to administrator' });
        }
    };
    public index = async({ response }: HttpContext) => {
        try {
            const users = await this.userUseCases.getAllUsers();
            response.ok({
                users
            });      
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Talk to administrator' });
        }
    };
    public show = async({ request, response }: HttpContext) => {
        try {
            const { id } = request.params();
            const user = await this.userUseCases.getUserById(id);

            if(!user) return response.notFound({ message: 'user not found' });
            response.ok(user);
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Internal server error' });
        }
    };
    public update = async({ request, response }: HttpContext) => {
        try {
            const { id } = request.params();
            const {
                name,
                password,
                role
            } = request.body();

            const userUpdated = await this.userUseCases.updateUser(id, { name, password, role });
            if(!userUpdated) return response.notFound({ message: 'user not found' });

            response.ok(userUpdated);
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Internal server error' });
        }
    };
    public destroy = async({ request, response }: HttpContext) => {
        try {
            const id = request.params().id;
            const userDeleted = await this.userUseCases.deleteUser(id);
            if(!userDeleted) return response.notFound({ message: 'user not found' });

            response.noContent();
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Internal server error' });
        }
    };
    //AUTH
    public login = async({ request, response }: HttpContext) => {
        const { email, password } = request.body();
        try {
            const login = await this.userUseCases.loginUser({ email, password });
            if(!login) return response.unauthorized('Unauthorized');

            response.ok(login);
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Talk to administrator' });
        }
    };
};