import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Hash from '@ioc:Adonis/Core/Hash';
import User from './User';

export default class UsersController {

    async index({ request, response }: HttpContextContract) {

        const { skip, limit } = request.qs();

        try {
            const [ total, users ] = await Promise.all([
                User.countDocuments({ status: true }),
                User.find({ status: true })
                    .skip(Number(skip))
                    .limit(Number(limit))
            ]);

            response.status(200).json({
                ok: true,
                total,
                users
            });
            
        } catch (error) {
            console.log(error)
            response.status(500).json({
                ok: false,
                msg: 'Talk to administrator'
            });
        }

    }

    async show({ request, response }: HttpContextContract) {

        const { id } = request.params();

        try {

            const user = await User.findById( id );

            response.status(200).json({
                ok: true,
                user
            });

        } catch (error) {
            console.log(error)
            response.status(500).json({
                ok: false,
                msg: 'Talk to administrator'
            });
        }
        
    }

    async store({ request, response }: HttpContextContract) {

        const { userName, name, email, password, role } = request.body();
        
        const hashedPassword = await Hash.make(password);

        const user = new User({ userName, name, email, password: hashedPassword, role });


        try {
            await user.save();

            response.status(201).json({
                ok: true,
                user
            });
        } catch (error) {
            console.log(error)
            response.status(500).json({
                ok: false,
                msg: 'Talk to administrator'
            });
        }
        
    }

    async update({ request, response }: HttpContextContract) {

        const { id } = request.params();

        const { _id, password, email, ...rest } = request.body();
    
        //TODO: validar contra la base de datos
    
        //Si viene el password, quiere actualizar la contraseña
        // if( password ){
        //     //Encriptar la nueva contraseña
        //     const salt = bcrypt.genSaltSync();
        //     rest.password = bcrypt.hashSync( password, salt );
        // }

        const user = await User.findByIdAndUpdate( id, rest );
    
        response.status(200).json({
            ok: true,
            user
        });
        
    }

    async destroy({ request, response }: HttpContextContract) {

        const { id } = request.params();

        try {
            const user = await User.findByIdAndUpdate( id, { status: false } );

            response.status(204);
        } catch (error) {
            console.log(error)
            response.status(500).json({
                ok: false,
                msg: 'Talk to administrator'
            });
        }
        
    }

}
