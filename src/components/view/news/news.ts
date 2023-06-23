import './news.css';

export type PieceOfNewsType = {
  source: {
    name: string;
    id: string | null;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

class News {
  draw(data: Array<PieceOfNewsType>): void {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item, idx) => {
      const newsCloneTempl = newsItemTemp.content.cloneNode(true) as HTMLElement;

      if (newsCloneTempl) {
        const newsItem = newsCloneTempl.querySelector('.news__item') as HTMLElement;
        if (newsItem && idx % 2) {
          newsItem.classList.add('alt');
        }

        const newsMetaPhoto = newsCloneTempl.querySelector('.news__meta-photo') as HTMLElement;
        if (newsMetaPhoto) {
          newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
        }
        const newsMetaAuthor = newsCloneTempl.querySelector('.news__meta-author') as HTMLElement;
        if (newsMetaAuthor) newsMetaAuthor.textContent = item.author || item.source.name;

        const newsMetaDate = newsCloneTempl.querySelector('.news__meta-date') as HTMLElement;
        if (newsMetaDate) newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

        const newsDescriptionTitle = newsCloneTempl.querySelector('.news__description-title') as HTMLElement;
        if (newsDescriptionTitle) newsDescriptionTitle.textContent = item.title;
        const newsDescriptionSource = newsCloneTempl.querySelector('.news__description-source') as HTMLElement;
        if (newsDescriptionSource) newsDescriptionSource.textContent = item.source.name;
        const newsDescriptionContent = newsCloneTempl.querySelector('.news__description-content') as HTMLElement;
        if (newsDescriptionContent) newsDescriptionContent.textContent = item.description;
        const newsReadMore = newsCloneTempl.querySelector('.news__read-more a') as HTMLElement;
        if (newsReadMore) newsReadMore.setAttribute('href', item.url);

        fragment.append(newsCloneTempl);
      }
    });

    const newsElement = document.querySelector('.news') as HTMLElement;
    if (newsElement) {
      newsElement.innerHTML = '';
      newsElement.appendChild(fragment);
    }
  }
}

export default News;
