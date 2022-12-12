import News from './news/news';
import Sources from './sources/sources';
import { NewsType,  Data  } from '../../types';
// import { INewsData } from './src/index';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }
   
    drawNews(data: NewsType) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: Data) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
