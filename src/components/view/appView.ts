import News from './news/news';
import Sources from './sources/sources';
import { ISource, INews } from '../../types';

export class AppView {
    public news = new News();
    public sources = new Sources();

    drawNews(data: INews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ISource) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
