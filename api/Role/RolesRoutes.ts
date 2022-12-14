import Route from '@ioc:Adonis/Core/Route';
import RolesController from './RolesController';


const RolesRoutes = async() => {
    const controller = new RolesController();
    //Routes
    Route.get('/', (ctx) => controller.index(ctx));
    Route.get('/:id', (ctx) => controller.show(ctx));
    Route.post('/', (ctx) => controller.store(ctx));
    Route.put('/:id', (ctx) => controller.update(ctx));
    Route.delete('/:id', (ctx) => controller.destroy(ctx));
}

export default RolesRoutes;