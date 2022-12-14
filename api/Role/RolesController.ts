import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Role from './Role';

export default class RolesController {
    
    public async index({ response }: HttpContextContract) {

        try {

            const roles = await Role.find({ status: true });

            response.status(200).json({
                ok: true,
                roles
            });
            
        } catch (error) {
            console.log(error);
            response.status(500).json({
                ok: true,
                msg: 'Talk to administrator'
            });
        }

    }

    public async show({ request, response }: HttpContextContract) {

        const { id } = request.params();

        try {

            const role = await Role.findById(id);

            if(!role || !role.status) {
                response.status(400).json({
                    ok: true,
                    msg: 'Role not found'
                });
                return;
            }

            response.status(200).json({
                ok: true,
                role
            })
            
        } catch (error) {
            console.log(error);
            response.status(500).json({
                ok: true,
                msg: 'Talk to administrator'
            });
        }

    }

    public async store({ request, response }: HttpContextContract) {

        const { name } = request.body();

        try {

            const roleExists = await Role.findOne({ name });

            if(roleExists) {
                response.status(400).json({
                    ok: false,
                    msg: `Role with name already exists ${name}`
                });
                return;
            }

            const role = new Role({name});

            await role.save();

            response.status(201).json({
                ok: true,
                role
            });
            
        } catch (error) {
            console.log(error);
            response.status(500).json({
                ok: true,
                msg: 'Talk to administrator'
            });
        }

    }

    public async update({ request, response }: HttpContextContract) {

        const { id } = request.params();
        const { name } = request.body();

        try {

            const role = await Role.findByIdAndUpdate(id, { name }, {new: true});

            response.status(200).json({
                ok: true,
                role
            });
            
        } catch (error) {
            console.log(error);
            response.status(500).json({
                ok: true,
                msg: 'Talk to administrator'
            });
        }

    }

    public async destroy({ request, response }: HttpContextContract) {

        const { id } = request.params();

        try {

            const role = await Role.findByIdAndUpdate(id, { status: false }, {new: true});

            response.status(200).json({
                ok: true,
                role
            });
            
        } catch (error) {
            console.log(error);
            response.status(500).json({
                ok: true,
                msg: 'Talk to administrator'
            });
        }

    }

}
