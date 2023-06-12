import News from './news/news';
import Sources from './sources/sources.js';

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

export class AppView {
	public news: News;
	public sources: Sources;

	constructor() {
		this.news = new News();
		this.sources = new Sources();
	}

	public drawNews(data: Test) {
		const values: NewsItem[] = data?.articles ? data?.articles : [];
		this.news.draw(values);
	}

	public drawSources(data: Test) {
		const values: SourceItem[] = data?.sources ? data?.sources : [];
		this.sources.draw(values);
	}
}

export default AppView;