import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', // для корректной работы деплоя на gh-pages замените этот url на https://nodenews.herokuapp.com/ 
        {
            apiKey: '', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
