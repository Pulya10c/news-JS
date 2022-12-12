export type Sorce = {
    length: number
    id: string,
    name: string,
    description: string,
    url: string,
    category: symbol,
    language: string,
    country: string
}

export type Data = {
    status: string,
    sources: Sorce[]
}
export type NewsSorceType = {
    source: {
        id: string | null;
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
}

export type NewsType = {
    status: string,
    totalResults: number,
    articles: NewsSorceType[]
}