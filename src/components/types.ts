type Callback<T> = (data: T) => void
type Element = HTMLElement | null

interface NewsItem {
	urlToImage: string;
	author: string;
	source: {
		name: string
	};
	name: number; //
	publishedAt: string;
	title: string;
	description: string;
	url: string
}

interface SourceItem {
	name: string;
	id: string;
}
interface dataResponse {
	articles: NewsItem[];
	sources: SourceItem[];
}


interface loaderOptions {
	[index: string]: string | null
}

interface GetRespObj {
	endpoint: string;
	options?: loaderOptions;
}

interface ResponseObj {
	ok: boolean;
	status: number;
	statusText: string;
	json(): Promise<string>
}




export { Element, Callback, NewsItem, SourceItem, dataResponse, loaderOptions, GetRespObj, ResponseObj }