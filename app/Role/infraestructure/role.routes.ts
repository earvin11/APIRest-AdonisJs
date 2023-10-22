import Route from '@ioc:Adonis/Core/Route';
import { roleController } from './dependencies';


const RoleRoutes = async () => {
    Route.post('/', roleController.store);
    Route.get('/', roleController.index);
};

export default RoleRoutes;