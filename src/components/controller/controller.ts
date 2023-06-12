import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources() {
        return super.getResp({
            endpoint: 'sources',
        });
    }

    getNews(e: Event) {
        let target = e.target as Element;
        const newsContainer = e.currentTarget as Element;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId || '');
                    return super.getResp({
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
