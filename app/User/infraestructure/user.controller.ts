import { HttpContext } from '@adonisjs/core/build/standalone';
import Hash from '@ioc:Adonis/Core/Hash'
import { UserUseCases } from '../application/user.use-cases';
// import Database from '@ioc:Adonis/Lucid/Database';

export class UserController {
    constructor(
        private readonly userUseCases: UserUseCases
    ) {}

    public store = async({ request, response }: HttpContext) => {
        try {
            const {
                userName,
                name,
                email,
                password,
                img,
                role
            } = request.body();

            const hashedPassword = await Hash.make(password);

            const newUser = await this.userUseCases.createUser({
                userName,
                name,
                email,
                password: hashedPassword,
                img,
                role
            });
            response.created(newUser);
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Talk to administrator' });
        }
    }

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
    }

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
    }

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
    }

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
    }

};