import Route from '@ioc:Adonis/Core/Route';
import AuthController from './AuthController';


const AuthRoutes = async() => {
    const controller = new AuthController();
    //Routes
    Route.post('/login', (ctx) => controller.login(ctx));
}

export default AuthRoutes;