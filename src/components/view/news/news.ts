import './news.css';
import { Element, NewsItem } from '../../types'

class News {
	draw(data: NewsItem[]): void {
		const news: NewsItem[] = data.length >= 10 ? data.filter((_item: NewsItem, idx: number) => idx < 10) : data;

		const fragment: DocumentFragment = document.createDocumentFragment();
		const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

		if (newsItemTemp) {
			news.forEach((item: NewsItem, idx: number) => {
				const newsClone: DocumentFragment = newsItemTemp.content.cloneNode(true) as DocumentFragment;

				if (idx % 2) {
					const newsItem: Element = newsClone.querySelector('.news__item');
					if (newsItem) {
						newsItem.classList.add('alt');
					}
				}

				const newsMetaPhoto: Element = newsClone.querySelector('.news__meta-photo');
				if (newsMetaPhoto) {
					newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
				}

				const newsMetaAuthor: Element = newsClone.querySelector('.news__meta-author');
				if (newsMetaAuthor) {
					newsMetaAuthor.textContent = item.author || item.source.name;
				}

				const newsMetaDate: Element = newsClone.querySelector('.news__meta-date');
				if (newsMetaDate) {
					newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
				}

				const newsDescriptionTitle: Element = newsClone.querySelector('.news__description-title');
				if (newsDescriptionTitle) {
					newsDescriptionTitle.textContent = item.title;
				}

				const newsDescriptionSource: Element = newsClone.querySelector('.news__description-source');
				if (newsDescriptionSource) {
					newsDescriptionSource.textContent = item.source.name;
				}

				const newsDescriptionContent: Element = newsClone.querySelector('.news__description-content');
				if (newsDescriptionContent) {
					newsDescriptionContent.textContent = item.description;
				}

				const newsReadMoreLink: Element = newsClone.querySelector('.news__read-more a');
				if (newsReadMoreLink) {
					newsReadMoreLink.setAttribute('href', item.url);
				}

				fragment.append(newsClone);
			});
		}

		const newsContainer: Element = document.querySelector('.news');
		if (newsContainer) {
			newsContainer.innerHTML = '';
			newsContainer.appendChild(fragment);
		}
	}
}

export default News;