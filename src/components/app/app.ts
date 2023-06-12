import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsItem, SourceItem, dataResponse } from '../types'

class App {
	public controller: AppController
	public view: AppView

	constructor() {
		this.controller = new AppController();
		this.view = new AppView();
	}

	start() {
		const sources = document.querySelector('.sources') as HTMLElement
		if (sources !== null) {
			sources.addEventListener('click', (e: MouseEvent) => this.controller.getNews(e, (data: dataResponse) => this.view.drawNews(data)));
			this.controller.getSources((data: dataResponse) => this.view.drawSources(data));
		}
	}
}

export default App;
