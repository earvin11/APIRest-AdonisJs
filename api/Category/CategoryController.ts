import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from './Category';

export default class CategoriesController {

    async index({ request, response }: HttpContextContract) {

        const { skip, limit } = request.qs();

        try {

            const [ total, categories ] = await Promise.all([

                Category.countDocuments(),
                Category.find({ status: true })
                    .skip( Number( skip ))
                    .limit( Number( limit ))
                
            ]);

            response.status(200).json({
                ok: true,
                total,
                categories
            });
            
        } catch (error) {
            console.log(error);
            response.status(500).json({
                ok: false,
                msg: 'Talk to administrator'
            });
        }
    }

    async show({ request, response }: HttpContextContract) {

        const { id } = request.params();

        try {
            
            const category = await Category.findById( id );

            if( !category ) {
                response.status(404).json({
                    ok: false,
                    msg: 'Category not found'
                });
                return;
            }

            if( !category.status ) {
                response.status(404).json({
                    ok: false,
                    msg: 'Category is disabled'
                });
                return;
            }

            response.status(200).json({
                ok: true,
                category
            });

        } catch (error) {
            console.log(error);
            response.status(500).json({
                ok: false,
                msg: 'Talk to administrator'
            });
        }
    }

    async store({ request, response }: HttpContextContract) {

        const name = request.body().name.toUpperCase();

        try {
            
            const categoryDb = await Category.findOne({ name });
    
            if( categoryDb ) {
                response.status(400).json({
                    ok: false,
                    msg: `Category ${ categoryDb.name } already exists`
                });
                return;
            }
    
            const category = new Category({ name });
    
            await category.save();
    
            response.status(201).json({
                ok: true,
                category
            });

        } catch (error) {
            response.status(500).json({
                ok: false,
                msg: 'Talk to administrator'
            });
        }
    }

    async update({ request, response }: HttpContextContract) {

        const { id } = request.params();
        const { name } = request.body();

        try {

            const category = await Category.findById( id );

            if( !category ) {
                response.status(404).json({
                    ok: false,
                    msg: 'Category not found'
                });
                return;
            }

            if( !category.status ) {
                response.status(404).json({
                    ok: false,
                    msg: 'Category is disabled'
                });
                return;
            }

            const data = {
                name: name.toUpperCase()
            }

            const categoryUdpated = await Category.findByIdAndUpdate( id, data, { new: true });

            response.status(200).json({
                ok: true,
                categoryUdpated
            });
            
        } catch (error) {
            response.status(500).json({
                ok: false,
                msg: 'Talk to administrator'
            });
        }
    }

    async destroy({ request, response }: HttpContextContract) {

        const { id } = request.params();

        try {

            const category = await Category.findById( id );

            if( !category ) {
                response.status(404).json({
                    ok: false,
                    msg: 'Category not found'
                });
                return;
            }

            const categoryDeleted = await Category.findByIdAndUpdate( id, { status: false }, { new: true });

            response.status(200).json({
                ok: true,
                categoryDeleted
            });
            
        } catch (error) {
            response.status(500).json({
                ok: false,
                msg: 'Talk to administrator'
            });
        }        

    }

}