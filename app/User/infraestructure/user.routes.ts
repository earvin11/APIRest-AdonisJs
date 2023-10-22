import Route from '@ioc:Adonis/Core/Route';
import { userController } from './dependencies';

const UserRoutes = async() => {
    Route.post('/', userController.store)
        .middleware(['userRequest', 'emailExists']);
    Route.get('/', userController.index);
    Route.get('/:id', userController.show);
    Route.patch('/:id', userController.update);
    Route.delete(':id', userController.destroy);
};

export default UserRoutes;