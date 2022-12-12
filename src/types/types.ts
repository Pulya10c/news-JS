export interface Source {
  id: string;
  name: string;
}

export type Options= {
  endpoint?: string,
  category?: string,
}

export interface Article {
  source: Source;
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface getRespParam {
  endpoint: string;
  options: {};
}

export type Res = {
  ok: boolean;
  status: number;
  statusText: string;
}