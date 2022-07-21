import News from './news/news';
import Sources from './sources/sources';

export type Article = {
    author: string;
    content: string;
    description: string;
    source: { id: string; name: string };
    title: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
};
export type NewsData = {
    status: string;
    totalResults: number;
    articles: Array<Article>;
};

export type Source = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};

export type NewsSources = {
    status: string;
    sources: Array<Source>;
};

export interface drawNewsFunction {
    (data?: NewsData): void;
}
export interface drawSourcesFunction {
    (data?: NewsSources): void;
}

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews: drawNewsFunction = (data) => {
        const values: Article[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    };

    drawSources: drawSourcesFunction = (data) => {
        const values: Array<Source> | [] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    };
}

export default AppView;
