import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ProductRequest {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
   
    const productSchema = schema.create({
      name: schema.string(),
      price: schema.number(),
      category: schema.string()
    });
  
    try {
      const payload = await request.validate({
        schema: productSchema
      });

      await next();

    } catch (error) {
      response.badRequest(error.messages);
    }

  }
}
