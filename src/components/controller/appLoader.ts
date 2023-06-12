import Loader from './loader';

class AppLoader extends Loader {
	constructor() {
		super('https://newsapi.org/v2/', {
			apiKey: 'dbe919d6d3b34179a7243b5e2ca7c07c',
		});
	}
}

export default AppLoader;
