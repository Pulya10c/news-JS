import { IRespParams, IRequestOptions } from '../../types';

class Loader {
    constructor(public baseLink: string, public options: { apiKey: string; options?: IRequestOptions }) {}

    getResp<T>({ endpoint, options = {} }: IRespParams): Promise<T | undefined> {
        return this.load<T>('GET', endpoint, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: IRequestOptions = {}, endpoint: string): URL {
        const params = { ...this.options, ...options };
        const urlOptions: URLSearchParams = new URLSearchParams();

        for (const [key, value] of Object.entries(params)) {
            urlOptions.append(key, value.toString());
        }

        const url: URL = new URL(`${this.baseLink}${endpoint}`);

        url.search = urlOptions.toString();
        return url;
    }

    async load<T>(method: string, endpoint: string, options: IRequestOptions = {}): Promise<T | undefined> {
        try {
            let res = await fetch(this.makeUrl(options, endpoint), { method });
            res = this.errorHandler(res);
            return await res.json();
        } catch (err) {
            console.error(err);
        }
    }
}

export default Loader;
