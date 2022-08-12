
export default class AuthController {
    async login ({ auth, data, response}) {
        const { email, password } = data;

        try {
            const token = await auth.use('api').attempt(email, password)
            return response
                .header('token', token.token)
                .send({ message: 'Logged in successfully' });
        } catch {
            return response
                .unauthorized('Invalid email/password');
        }
    }
}
