import './news.css';
import { INewsData } from '../../../types';

class News {
    draw(data: INewsData[]) {
        const news = data.length >= 10 ? data.slice(0, 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        const newsWrapper = document.querySelector('.news');

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            const photo = newsClone.querySelector('.news__meta-photo') as HTMLImageElement;
            const author = newsClone.querySelector('.news__meta-author');
            const date = newsClone.querySelector('.news__meta-date');
            const title = newsClone.querySelector('.news__description-title');
            const source = newsClone.querySelector('.news__description-source');
            const content = newsClone.querySelector('.news__description-content');

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

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

            newsClone.querySelector('.news__read-more a')?.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        if (newsWrapper) {
            newsWrapper.innerHTML = '';
        }

        newsWrapper?.appendChild(fragment);
    }
}

export default News;
