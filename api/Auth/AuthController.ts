import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash';
import User from '../User/User';
import { generarJWT } from './helpers/generateJWT';

export default class AuthController {

    public async login({ request, response }: HttpContextContract) {

        const { userName, password } = request.body();

        try {

            const user = await User.findOne({ userName });

            if( !user || !user.status ) {
                response.status(400).json({
                    ok: false,
                    msg: 'User not found'
                });
                return;
            }

            if(await Hash.verify(user.password, password)) {
                response.status(400).json({
                    ok: false,
                    msg: 'Password incorrect'
                });
            }

            const token = await generarJWT(user._id,  user.userName);

            response.status(200).json({
                ok: true,
                token,
                user
            });

            
        } catch (error) {
            console.log(error);
            response.status(500).json({
                ok: false,
                msg: 'Talk to administrator'
            });
        }

    }

}
