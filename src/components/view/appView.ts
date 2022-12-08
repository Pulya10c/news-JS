import { Data, NewsItem, SourceItem } from '../app/interfaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: Data): void {
        const values: Readonly<NewsItem[]> = data.articles ? data.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: Data): void {
        const values: Readonly<SourceItem[]> = data.sources ? data.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
