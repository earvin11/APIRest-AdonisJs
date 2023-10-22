import { HttpContext } from '@adonisjs/core/build/standalone';
import { ProductUseCases } from '../application/product.use-cases';

export class ProductController {
    constructor(
        private readonly productUseCases: ProductUseCases
    ) {}

    public store = async ({ request, response }: HttpContext) => {
        try {

            const {
                name,
                category,
                isAvaliable,
                quantity = 0
            } = request.body();

            const newProduct = await this.productUseCases.createProduct({ name, category, isAvaliable, quantity });
            response.created(newProduct);
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Talk to administrator' });
        }
    }
    public index = async ({ response }: HttpContext) => {
        try {
            const products = await this.productUseCases.getAllProducts();
            response.ok(products);
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Talk to administrator' });
        }
    }
};