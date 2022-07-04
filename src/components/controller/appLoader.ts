import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '8b1dcdcc26854ffa8a395b1a94a92a25', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
