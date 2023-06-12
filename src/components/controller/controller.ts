import AppLoader from './appLoader';
import { INews, ISource } from '../../types';

class AppController extends AppLoader {
    getSources(): Promise<ISource | undefined> {
        return super.getResp<ISource>({
            endpoint: 'sources',
        });
    }

    getNews(e: Event): Promise<INews | undefined> | undefined {
        let target = e.target as Element;
        const newsContainer = e.currentTarget as Element;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');

                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId || '');
                    return super.getResp<INews>({
                        endpoint: 'everything',
                        options: {
                            sources: sourceId || '',
                        },
                    });
                }
            }
            if (target.parentElement) {
                target = target.parentElement;
            }
        }
    }
}

export default AppController;
