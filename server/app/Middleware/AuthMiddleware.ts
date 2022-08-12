import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthMiddleware {
    public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
        try {
            await auth.use('api').authenticate()
        } catch (exception) {
            return response.unauthorized({ message: 'Token not found' });
        }

        await next()
    }
}
