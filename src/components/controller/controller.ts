import AppLoader from './appLoader';
import { PieceOfNewsType } from '../view/news/news';
import { SourceType } from '../view/sources/sources';

export type NewsType = {
  status: string;
  totalResults: number;
  articles: Array<PieceOfNewsType>;
};

export type SourcesType = {
  status: string;
  sources: Array<SourceType>;
};

class AppController extends AppLoader {
  getSources(callback: (data: SourcesType) => void): void {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: (data: NewsType) => void): void {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    if (target && newsContainer) {
      while (target !== newsContainer) {
        if (target.classList.contains('source__item')) {
          const sourceId = target.getAttribute('data-source-id');
          if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
            newsContainer.setAttribute('data-source', sourceId);
            super.getResp(
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
        target = target.parentElement as HTMLElement;
      }
    }
  }
}

export default AppController;
