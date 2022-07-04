interface DataNews {
  status: string;
  totalResults: number;
  articles: Array<Text>;
}

interface DataSource{
  status?: string;
  sources: Array<Article>;
}

type Text = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string, name: string };
  title: string;
  url: string;
  urlToImage: string;
};

type Article = {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
};
interface GetResp {
  endpoint: string;
  options?: TypeGetResp;
}

interface Result {
  ok: boolean;
  status: number;
  statusText: string | undefined;
  json(): void;
}

type TypeCallback<T> = (data?: T) => void;

type TypeGetResp = {
  sources: string | null | number;
};

export {
  DataNews, DataSource, Text, Article, GetResp, Result, TypeCallback, TypeGetResp,
};
