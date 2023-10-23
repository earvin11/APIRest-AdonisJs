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
        };
    };
    public index = async ({ response }: HttpContext) => {
        try {
            const products = await this.productUseCases.getAllProducts();
            response.ok(products);
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Talk to administrator' });
        };
    };
    public show = async ({ request, response }: HttpContext) => {
        try {
            const product = await this.productUseCases.getProductById(request.params().id);
            if(!product) return response.notFound({ message: 'Product not found' });
            response.ok(product);
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Talk to administrator' });
        };
    };
    public update = async ({ request, response }: HttpContext) => {
        const { id } = request.params();
        const { name, category, quantity } = request.body();
        try {
            const productUpdated = await this.productUseCases.updateProduct(id, { name, category, quantity });
            if(!productUpdated) return response.notFound({ message: 'Product not found' });
            response.ok(productUpdated);
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Talk to amdinistrator' });
        };
    };
    public destroy = async ({ request, response }: HttpContext) => {
        try {
            const productDeleted = await this.productUseCases.deleteProduct(request.params().id);
            if(!productDeleted) return response.notFound({ message: 'Product not found' });
            response.noContent();
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Talk to administrator' });
        };
    };
};