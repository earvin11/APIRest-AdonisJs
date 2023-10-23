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
    public show = async ({ request, response }: HttpContext) => {
        try {
            const category = await this.categoryRepository.getCategoryById(request.params().id);
            if(!category) return response.notFound({ message: 'category not found' });
            response.ok(category);
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Talk to administrator' });
        };
    };
    public update = async ({ request, response }: HttpContext) => {
        const { id } = request.params();
        const { name } = request.body();
        try {
            const categoryUpdated = await this.categoryRepository.updateCategory(id, { name });
            if(!categoryUpdated) return response.notFound({ message: 'category not found' });
            response.ok(categoryUpdated);
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Talk to amdinistrator' });
        };
    };
    public destroy = async ({ request, response }: HttpContext) => {
        try {
            const categoryDeleted = await this.categoryRepository.deleteCategory(request.params().id);
            if(!categoryDeleted) return response.notFound({ message: 'category not found' });
            response.noContent();
        } catch (error) {
            console.log(error);
            response.internalServerError({ message: 'Talk to administrator' });
        };
    };
};