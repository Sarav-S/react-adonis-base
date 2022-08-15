import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import Validator from 'validatorjs';

export default class AppProvider {
    constructor(protected app: ApplicationContract) { }

    public register() {
        // Register your own bindings
    }

    public async boot() {
        // IoC container is ready
        const Route = this.app.container.use('Adonis/Core/Route')

        const that = this;
        Route.Route.macro('validate', function (FormRequest) {
            this.middleware(async (ctx, next) => {
                const FormClass = new FormRequest();
                const rules = FormClass.rules(ctx);
                const customMessages = FormClass.customMessages(ctx);

                const errors = that.validate(ctx, rules, customMessages);
                if (Object.keys(errors).length) {
                    const validationErrors = {};
                    for (let key in errors.errors) {
                        validationErrors[key] = errors.errors[key].pop();
                    }

                    return ctx.response.notAcceptable({ errors: validationErrors });
                }

                await next();
            })

            return this
        })
    }

    public async ready() {
        // App is ready
    }

    public async shutdown() {
        // Cleanup, since app is going down
    }

    public validate(ctx, rules, customMessages) {
        const validation = new Validator(
            ctx.request.all(),
            rules,
            customMessages
        );

        if (validation.fails()) {
            return validation.errors;
        }

        const params = ctx.request.all();
        const validatedData = {};
        const validatedKeys = Object.keys(params);
        for (let key in params) {
            if (validatedKeys.indexOf(key) !== -1) {
                validatedData[key] = params[key];
            }
        }

        ctx.data = validatedData;

        return [];
    }
}
