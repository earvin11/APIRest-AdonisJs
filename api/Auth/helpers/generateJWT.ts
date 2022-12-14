import jwt from 'jsonwebtoken';
import Env from '@ioc:Adonis/Core/Env';

export const generarJWT = (id: string, userName: string) => {

    return new Promise( (resolve, reject) => {

        const payload = { id, userName };

        jwt.sign( payload, Env.get('APP_KEY'), {
            expiresIn: '4h'
        }, ( err, token ) => {
            if(err) {
                console.log(err);
                reject('No se pudo generar el token');
            }else{
                resolve( token );
            }
        });
    });
}