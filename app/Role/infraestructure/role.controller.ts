import { HttpContext } from '@adonisjs/core/build/standalone';
import { RoleRepository } from '../domain/role.repository';


export class RoleController {
    constructor(
        private readonly roleRepository: RoleRepository,
    ) {};

    public store = async ({ request, response }: HttpContext) => {
        try {
            const { name } = request.body();
            const newRole = await this.roleRepository.createRole({ name });
            response.created(newRole);
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Talk to administrator' });
        }
    };
    public index = async ({ response }: HttpContext) => {
        try {
            const roles = await this.roleRepository.getAllRoles();
            response.ok({ roles });
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Talk to administrator' })
        }
    };
};