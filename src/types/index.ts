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