import { IRespParams } from '../../types';

class Loader {
    constructor(public baseLink: string, public options: { apiKey: string }) {}

    getResp({ endpoint, options = {} }: IRespParams) {
        return this.load('GET', endpoint, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: { sources?: string }, endpoint: string) {
        const urlOptions = new URLSearchParams({ ...this.options, ...options });
        const url = new URL(`${this.baseLink}${endpoint}`);

        url.search = urlOptions.toString();
        return url;
    }

    async load(method: string, endpoint: string, options = {}) {
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
