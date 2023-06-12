interface loaderOptions {
	[index: string]: string | null
}

interface GetRespObj {
	endpoint: string;
	options?: loaderOptions;
}

interface ResponseTest {
	ok: boolean;
	status: number;
	statusText: string;
	json(): Promise<string>
}

class Loader {
	private baseLink: string;
	private options: loaderOptions;

	constructor(baseLink: string, options: loaderOptions) {
		this.baseLink = baseLink;
		this.options = options;
	}

	getResp({ endpoint, options = {} }: GetRespObj, callback = (): void => { console.error('No callback for GET response') }) {
		this.load('GET', endpoint, callback, options);
	}

	errorHandler(res: ResponseTest) {
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

	load(method: string, endpoint: string, callback: { (arg0: string): void; }, options = {}) {
		fetch(this.makeUrl(options, endpoint), { method })
			.then(this.errorHandler)
			.then((res) => res.json())
			.then((data) => callback(data))
			.catch((err) => console.error(err));
	}
}

export default Loader;
