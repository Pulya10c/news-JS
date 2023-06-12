import { Callback, loaderOptions, GetRespObj, ResponseObj } from '../types'

class Loader {
	private baseLink: string;
	private options: loaderOptions;

	constructor(baseLink: string, options: loaderOptions) {
		this.baseLink = baseLink;
		this.options = options;
	}

	getResp<T>({ endpoint, options = {} }: GetRespObj, callback: Callback<T> = () => { console.error('No callback for GET response') }) {
		this.load('GET', endpoint, callback, options);
	}

	errorHandler(res: ResponseObj) {
		if (!res.ok) {
			if (res.status === 401 || res.status === 404)
				console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
			throw Error(res.statusText);
		}

		return res;
	}

	makeUrl(options: loaderOptions, endpoint: string) {
		const urlOptions = { ...this.options, ...options };
		let url = `${this.baseLink}${endpoint}?`;

		Object.keys(urlOptions).forEach((key) => {
			url += `${key}=${urlOptions[key]}&`;
		});

		return url.slice(0, -1);
	}

	load<T>(method: string, endpoint: string, callback: Callback<T>, options = {}) {
		fetch(this.makeUrl(options, endpoint), { method })
			.then(this.errorHandler)
			.then((res) => res.json() as T)
			.then((data) => callback(data))
			.catch((err) => console.error(err));
	}
}

export default Loader;
