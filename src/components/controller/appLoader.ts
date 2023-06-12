import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'e5df1697aa2a4970846d1689e64c8846', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
