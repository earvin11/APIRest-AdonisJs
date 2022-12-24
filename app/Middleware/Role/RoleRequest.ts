import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class RoleRequest {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
   
    const roleSchema = schema.create({
      name: schema.string(),
    });
  
    try {
      const payload = await request.validate({
        schema: roleSchema
      });

      await next();

    } catch (error) {
      response.badRequest(error.messages);
    }

  }
}
