import './news.css';
import { INewsData } from '../../../types';

enum Selectors {
    ItemTemp = '#newsItemTemp',
    News = '.news',
    Item = '.news__item',
    MetaPhoto = '.news__meta-photo',
    MetaAuthor = '.news__meta-author',
    MetaDate = '.news__meta-date',
    DescriptionTitle = '.news__description-title',
    DescriptionSource = '.news__description-source',
    DescriptionContent = '.news__description-content',
    ReadMore = '.news__read-more a',
}

class News {
    draw(data: INewsData[]): void {
        const news: readonly INewsData[] = data.length >= 10 ? data.slice(0, 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector(
            Selectors.ItemTemp
        ) as HTMLTemplateElement;
        const newsWrapper: Element | null = document.querySelector(Selectors.News);

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp?.content.cloneNode(true) as HTMLElement;

            const photo: HTMLImageElement | null = newsClone.querySelector(Selectors.MetaPhoto);
            const author: Element | null = newsClone.querySelector(Selectors.MetaAuthor);
            const date: Element | null = newsClone.querySelector(Selectors.MetaDate);
            const title: Element | null = newsClone.querySelector(Selectors.DescriptionTitle);
            const source: Element | null = newsClone.querySelector(Selectors.DescriptionSource);
            const content: Element | null = newsClone.querySelector(Selectors.DescriptionContent);

            if (idx % 2) newsClone.querySelector(Selectors.Item)?.classList.add('alt');

            if (photo) {
                photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            if (author) {
                author.textContent = item.author || item.source.name;
            }

            if (date) {
                date.textContent = item.publishedAt.toString().slice(0, 10).split('-').reverse().join('-');
            }

            if (title) {
                title.textContent = item.title;
            }

            if (source) {
                source.textContent = item.source.name;
            }

            if (content) {
                content.textContent = item.content;
            }

            newsClone.querySelector(Selectors.ReadMore)?.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        if (newsWrapper) {
            newsWrapper.innerHTML = '';
        }

        newsWrapper?.appendChild(fragment);
    }
}

export default News;
