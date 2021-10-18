import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'b514e755bee248ed8992d4034d670433', // получите свой ключ, не используйте мой
        });
    }
}

export default AppLoader;
