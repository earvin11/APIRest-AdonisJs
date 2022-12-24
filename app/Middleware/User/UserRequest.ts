import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UserRequest {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
     /**
   * Step 1 - Define schema
   */

    const userSchema = schema.create({
      name: schema.string(),
      email: schema.string([
        rules.email()
      ]),
      password: schema.string([
        rules.minLength(4)
      ]),
      role: schema.string(),
    });
  
    try {
      /**
       * Step 2 - Validate request body against
       *          the schema
       */
      const payload = await request.validate({
        schema: userSchema
      });

      await next();

    } catch (error) {
      /**
       * Step 3 - Handle errors
       */
      response.badRequest(error.messages);
    }

  }
}
