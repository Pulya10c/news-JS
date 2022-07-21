import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'bf881aac686b4a8badfd4e7d53eedc9f', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
