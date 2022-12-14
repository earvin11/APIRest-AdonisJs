import Route from '@ioc:Adonis/Core/Route';
import ProductsController from './ProductsController';


const ProductsRoutes = async() => {
    const controller = new ProductsController();
    // Routes
    Route.get('/', (ctx) => controller.index(ctx));
    Route.get('/:id', (ctx) => controller.show(ctx));
    Route.post('/', (ctx) => controller.store(ctx)).middleware(['productRequest']);
    Route.put('/:id', (ctx) => controller.update(ctx));
    Route.delete('/:id', (ctx) => controller.destroy(ctx));
}

export default ProductsRoutes;