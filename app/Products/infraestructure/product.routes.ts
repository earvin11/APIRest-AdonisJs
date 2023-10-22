import Route from '@ioc:Adonis/Core/Route';
import { productController } from './dependencies';

const ProductRoutes = async () => {
    Route.post('/', productController.store);
    Route.get('/', productController.index);
};

export default ProductRoutes;