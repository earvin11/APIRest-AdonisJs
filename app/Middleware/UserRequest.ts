import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserRequest {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const { name, email, password, role } = request.body();

    if(!name){
      return response.status(400).json({
        ok: false,
        msg: 'name is required'
      });
    }

    if(!email){
      return response.status(400).json({
        ok: false,
        msg: 'email is required'
      });
    }

    if(!password){
      return response.status(400).json({
        ok: false,
        msg: 'password is required'
      });
    }

    if(!role){
      return response.status(400).json({
        ok: false,
        msg: 'role is required'
      });
    }

    await next()
  }
}
