import Route from '@ioc:Adonis/Core/Route';
import { categoryController } from './dependencies';

const CategoryRoutes = async () => {
    Route.post('/', categoryController.store);
    Route.get('/', categoryController.index);
};

export default CategoryRoutes;