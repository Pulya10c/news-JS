import News from './news/news';
import Sources from './sources/sources';
import { NewsItem, SourceItem, dataResponse } from '../types'

export class AppView {
	public news: News;
	public sources: Sources;

	constructor() {
		this.news = new News();
		this.sources = new Sources();
	}

	public drawNews(data: dataResponse) {
		const values: NewsItem[] = data?.articles ? data?.articles : [];
		this.news.draw(values);
	}

	public drawSources(data: dataResponse) {
		const values: SourceItem[] = data?.sources ? data?.sources : [];
		this.sources.draw(values);
	}
}

export default AppView;