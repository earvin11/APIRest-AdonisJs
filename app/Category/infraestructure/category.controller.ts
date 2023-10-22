import { HttpContext } from '@adonisjs/core/build/standalone';
import { CategoryRepository } from '../domain/category.repository';

export class CategoryController {
    constructor(
        private readonly categoryRepository: CategoryRepository
    ) {}

        public store = async ({ request, response }: HttpContext) => {
            try {
                const {
                    name
                } = request.body();

                const newCategory = await this.categoryRepository.createCategory({ name });
                response.created(newCategory);
            } catch (error) {
                console.log(error);
                response.internalServerError({ message: 'Talk to administrator' });
            }
        };
        public index = async ({ response }: HttpContext) => {
            try {
                const categories = await this.categoryRepository.getAllCategories();
                response.ok({ categories });
            } catch (error) {
                console.log(error);
                response.internalServerError({ message: 'Talk to administrator' });
            }
        };
};