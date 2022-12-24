import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CategoryRequest {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
   
    const categorySchema = schema.create({
      name: schema.string(),
    });
  
    try {
      const payload = await request.validate({
        schema: categorySchema
      });

      await next();

    } catch (error) {
      response.badRequest(error.messages);
    }

  }
}
