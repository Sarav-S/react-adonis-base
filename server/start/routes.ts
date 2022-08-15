import Route from '@ioc:Adonis/Core/Route'
import AuthRequest from 'App/Validators/AuthRequest';

Route.get('/', async () => {
    return { hello: 'world' }
})

Route.post('login', 'AuthController.login')
    .validate(AuthRequest);

Route.get('authenticate', 'AuthController.authenticate');
Route.group(() => {
    Route.post('logout', 'AuthController.logout');
    Route.get('dashboard', 'HomeController.dashboard');
}).middleware('auth')

