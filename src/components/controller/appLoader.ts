import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'bfe4940cab0e490fad59ded3408dc652', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
