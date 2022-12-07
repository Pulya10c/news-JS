export interface Data {
    sources: SourceItem[];
    articles: NewsItem[];
}

export interface NewsItem {
    author: string;
    source: { name: string };
    publishedAt: string;
    title: string;
    description: string;
    url: string;
    urlToImage: () => string;
}

export interface SourceItem {
    name: string;
    id: string;
}

export interface Options {
    sources: string;
    apiKey: string;
}
