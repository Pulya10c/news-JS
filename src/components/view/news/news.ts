import { NewsType } from './../../controller/controller';
import './news.css';

class News {
    draw(data: NewsType[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (newsClone !== null) {
                const newsItem = newsClone.querySelector('.news__item')
                if (newsItem) {
                    if (idx % 2) newsItem.classList.add('alt');
                }
                const newsPhoto = newsClone.querySelector('.news__meta-photo') as HTMLMetaElement;
                if (newsPhoto) {
                    newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'
                        })`;
                }
                const newsAuthor = newsClone.querySelector('.news__meta-author')
                if (newsAuthor) {
                    newsAuthor.textContent = item.author || item.source.name;
                }
                const newsDate = newsClone.querySelector('.news__meta-date')
                if (newsDate) {
                    newsDate.textContent = item.publishedAt
                        .slice(0, 10)
                        .split('-')
                        .reverse()
                        .join('-');
                }
                const newsDescriptionTitle = newsClone.querySelector('.news__description-title')
                if (newsDescriptionTitle) {
                    newsDescriptionTitle.textContent = item.title;
                }
                const newsDescriptionSource = newsClone.querySelector('.news__description-source')
                if (newsDescriptionSource) {
                    newsDescriptionSource.textContent = item.source.name;
                }
                const newsDescriptionContent = newsClone.querySelector('.news__description-content')
                if (newsDescriptionContent) {
                    newsDescriptionContent.textContent = item.description;
                }
                const newsReadMore = newsClone.querySelector('.news__read-more a')
                if (newsReadMore) {
                    newsReadMore.setAttribute('href', item.url);
                }
            }
            fragment.append(newsClone);
        });

        const appendNews = document.querySelector('.news')
        if (appendNews) {
            appendNews.innerHTML = '';
            appendNews.appendChild(fragment);
        }
    }
}

export default News;