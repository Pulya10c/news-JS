import News from './news/news';
import Sources from './sources/sources';
import { ISource, INews, INewsData, ISourceData } from '../../types';

export class AppView {
    public news: News = new News();
    public sources: Sources = new Sources();

    drawNews(data: INews | undefined): void {
        const values: INewsData[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ISource | undefined): void {
        const values: ISourceData[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
