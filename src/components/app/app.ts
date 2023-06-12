import AppController from '../controller/controller';
import { AppView } from '../view/appView';

interface NewsItem {
	urlToImage: string;
	author: string;
	source: {
		name: string
	};
	name: number; //
	publishedAt: string;
	title: string;
	description: string;
	url: string
}

interface SourceItem {
	name: string;
	id: string;
}
interface Test {
	articles: NewsItem[];
	sources: SourceItem[];
}



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
			sources.addEventListener('click', (e: MouseEvent) => this.controller.getNews(e, (data: Test) => this.view.drawNews(data)));
			this.controller.getSources((data: Test) => this.view.drawSources(data));
		}



	}
}

export default App;
