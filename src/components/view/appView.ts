import News from './news/news';
import Sources from './sources/sources';
import {
  DataNews, DataSource,
} from '../options';

export class AppView {
  news: News;

  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: DataNews): void {
    const articlesValues = data?.articles ? data?.articles : [];
    this.news.draw(articlesValues);
  }

  drawSources(data: DataSource): void {
    const sourcesValues = data?.sources ? data?.sources : [];

    this.sources.draw(sourcesValues);
  }
}
