import Route from '@ioc:Adonis/Core/Route';
import UsersController from './UsersController';


const UsersRoutes = async() => {
    const controller = new UsersController();
    Route.get('/', (ctx) => controller.index(ctx));
    Route.get('/:id', (ctx) => controller.show(ctx));
    Route.post('/', (ctx) => controller.store(ctx)).middleware(['userRequest', 'emailExists']);
    Route.put('/:id', (ctx) => controller.update(ctx));
    Route.delete('/:id', (ctx) => controller.destroy(ctx));
}

export default UsersRoutes;

