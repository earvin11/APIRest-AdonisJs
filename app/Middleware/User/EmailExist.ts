import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import User from '../../../api/User/User';

export default class EmailExist {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    const { email } = request.body();

    const emailExists = await User.findOne({ email });

    if( emailExists ) {
      return response.status(400).json({
        ok: false,
        msg: 'There is already a user with that email'
      });
    }

    await next()
  }
}
