import { DrawNews, DrawSources } from '../../types/index'
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News
    sources: Sources
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DrawNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DrawSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
