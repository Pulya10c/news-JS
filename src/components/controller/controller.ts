import AppLoader from './appLoader';

export type Source = {
    "id": string;
    "name": string;
    "description": string;
    "url": string;
    "category": string;
    "language": string;
    "country": string;
}


export type NewsType ={
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
    source: Pick<Source, 'id' | 'name'>
}
export type SourcesResponse = {
    status: string;
    sources: Source[]
}

export type NewsResponse = {
    articles: NewsType[],
    status: string;
    totalResults: number;
}

class AppController extends AppLoader {
    getSources(callback:(data: SourcesResponse)=>void) {
        super.getResp<SourcesResponse>(
            {
                endpoint: 'sources',
            },
            callback
            );
            
    }

    getNews(e:MouseEvent, callback:(data: NewsResponse)=>void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;
        
        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = (e.target as HTMLElement).getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<NewsResponse>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = (target.parentNode as HTMLElement);
        }
    }
}

export default AppController;