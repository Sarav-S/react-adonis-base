export default class HomeController {
    dashboard ({ response }) {
        return response.ok({ message: 'Welcome home.' });
    }
}
