export interface ISourceData {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface INewsData {
    author: string;
    content: string;
    description: string;
    publishedAt: Date;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface ISource {
    status: string;
    sources: ISourceData[];
}

export interface INews {
    status: string;
    totalResults: number;
    articles: INewsData[];
}

export interface IRespParams {
    endpoint: string;
    options?: { sources?: string };
}
