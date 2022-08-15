export default class AuthController {
    async login({ auth, data, response }) {
        const { email, password } = data;

        try {
            const result = await auth.use('api').attempt(email, password)
            return response
                .send({
                    data: {
                        email: result.user.email,
                        token: result.token
                    }
                });
        } catch {
            return response
                .unauthorized({
                    errors: {
                        email: 'Invalid Email / Password'
                    }
                });
        }
    }

    async authenticate({ auth, response }) {
        try {
            const user = await auth.use('api').authenticate();
            return response
                .send({
                    data: {
                        email: user.email,
                    }
                });
        } catch (exception) {
            return response.unauthorized({ message: 'Token not found' });
        }
    }

    async logout({ auth, response }) {
        try {
            await auth.use('api').revoke()
            return response
                .send({ message: 'User token revoked successfully.' });
        } catch (exception) {
            return response.unauthorized({ message: 'Token not found' });
        }
    }
}
