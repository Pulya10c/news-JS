import Loader from './loader';

abstract class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '39677ee50f8d48878660241e6dd2bc87',
        });
    }
}

export default AppLoader;
