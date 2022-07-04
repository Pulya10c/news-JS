import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '9590a60f07fd4ac1ba071384b88dbe16',
    });
  }
}

export default AppLoader;
