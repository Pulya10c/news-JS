import AppLoader from './appLoader';
import { NewsType } from '../view/news/news';
import { SourcesType } from '../view/sources/sources';

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
    console.log('getNews');
    console.log(e.target);
    //console.log(e.target?.classlist);
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    if (target && newsContainer) {
      const sourceId = target.getAttribute('data-source-id');

      const allSourcesElements = document.querySelectorAll('source__item');
      allSourcesElements.forEach((sourceElement) => {
        const sourceElementId = sourceElement.getAttribute('data-source') as string;
        if (sourceElementId !== sourceId) {
          console.log(`sourceId = ${sourceId}, sourceElementId = ${sourceElementId}`);
          sourceElement.classList.remove('source__item_selected');
        } else {
          console.log(`sourceId = ${sourceId}, sourceElementId = ${sourceElementId}`);
          sourceElement.classList.add('source__item_selected');
        }
      });

      while (target !== newsContainer) {
        if (target.classList.contains('source__item')) {
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
