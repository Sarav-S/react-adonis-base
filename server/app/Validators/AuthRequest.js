class AuthRequest {
    rules(ctx) {
        return {
            email: 'required|email',
            password: 'required'
        };
    }

    customMessages(ctx) {
        return [];
    }
}

module.exports = AuthRequest;
