export interface Source {
    id: string,
    name: string,
    description: string,
    url: string,
    category: string,
    language: string,
    country: string
}

export interface TopHeadlines {
    author: string | null,
    content: string | null,
    description: string | null,
    publishedAt: string,
    source: {
        id: string | null,
        name: string | null,
    },
    title: string | null,
    url: string,
    urlToImage: string | null
}

export interface DrawNews {
    articles: TopHeadlines[],
    status: string,
    totalResult: number
}

export interface Data {
    status: string;
    totalResults: number;
    articles: NewsInterface[];
}

export interface DrawSources {
    sources: Source[],
    status: string
}

export interface Options {
   [key: string]: string
}

export interface Callback<T> {
    (data: T): void;
}

export interface ResponseObj {
    status: string;
    sources: Source[];
}
export interface Data {
    status: string;
    totalResults: number;
    articles: NewsInterface[];
}
export interface NewsInterface {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}