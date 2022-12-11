import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'cf8961f092204bd1ade66b82bff2aa47', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
