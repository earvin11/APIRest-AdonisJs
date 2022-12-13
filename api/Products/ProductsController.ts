import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from './Product';

export default class ProductsController {

    public async index({ request, response }: HttpContextContract) {

        const { skip, limit } = request.qs();

        try {

            const [ total, products ] = await Promise.all([
                Product.countDocuments({ status: true }),
                Product.find({ status: true })
                    .populate('category', 'name')
                    .skip(Number(skip))
                    .limit(Number(limit))
            ]);

            response.status(200).json({
                ok: true,
                total,
                products
            });
            
        } catch (error) {
            console.log(error);
            response.status(500).json({
                ok: false,
                msg: 'Talk to administrator'
            });
        }
    }

    public async show({ request, response }: HttpContextContract) {

        const { id } = request.params();

        try {

            const product = await Product.findById(id)
                                .populate('category', 'name');

            if(!product) {
                response.status(404).json({
                    ok: false,
                    msg: 'Product not found'
                });
                return;
            }

            if(!product.status) {
                response.status(400).json({
                    ok: false,
                    msg: 'Product is disabled'
                });
                return;
            }

            response.status(200).json({
                ok: true,
                product
            });
            
        } catch (error) {
            console.log(error);
            response.status(500).json({
                ok: false,
                msg: 'Talk to administrator'
            });
        }
    }

    public async store({ request, response }: HttpContextContract) {

        const { name, price, category, description, img } = request.body();

        try {

            const data = {
                name: name.toUpperCase(),
                price,
                category,
                description,
                img
            }

            const product = new Product(data);

            await product.save();

            response.status(201).json({
                ok: true,
                product
            });
            
        } catch (error) {
            console.log(error);
            response.status(500).json({
                ok: false,
                msg: 'Talk to administrator'
            });
        }

    }

    public async update({ request, response }: HttpContextContract) {

        const { id } = request.params();
        const { status, ...data } = request.body();

        try {
            
            const product = await Product.findById(id);

            if(!product || !product.status) {
                response.status(404).json({
                    ok: false,
                    msg: 'Product not found'
                });
                return;
            }

            if( data.name ) {
                data.name = data.name.toUpperCase();
            }

            const productUpdated = await Product.findByIdAndUpdate(id, data, {new: true});

            response.status(200).json({
                ok: true,
                productUpdated
            });

        } catch (error) {
            console.log(error);
            response.status(500).json({
                ok: false,
                msg: 'Talk to administrator'
            });
        }
    }

    public async destroy({ request, response }: HttpContextContract) {

        const { id } = request.params();

        try {

            const prodctDeleted = await Product.findByIdAndUpdate(id, {status: false}, {new: true});

            response.status(200).json({
                ok: true,
                prodctDeleted
            });
            
        } catch (error) {
            console.log(error);
            response.status(500).json({
                ok: false,
                msg: 'Talk to administrator'
            });
        }

    }
}
