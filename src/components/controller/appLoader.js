import Loader from './loader.js';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'abf0432f07594bf18c94c89641b3f229', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
