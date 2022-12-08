import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PaginationParam {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {

    const { skip, limit } = request.qs();

    if(!skip) {
      return response.status(400).json({
        ok: false,
        msg: 'Skip is required'
      });
    }

    if(!limit) {
      return response.status(400).json({
        ok: false,
        msg: 'Limiti is required'
      });
    }

    await next()
  }
}
