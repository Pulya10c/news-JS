import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '5a2826d4cf5445309d48572fb3253348', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
