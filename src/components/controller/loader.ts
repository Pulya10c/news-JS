import {
  GetResp, Result, TypeGetResp, TypeCallback,
} from '../options';

class Loader {
  baseLink: string;

  options: { apiKey: string };

  constructor(baseLink: string, options: { apiKey: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options }: GetResp,
    callback = (): void => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(result: Result): Result {
    if (!result.ok) {
      if (result.status === 401 || result.status === 404) {
        console.log(
          `Sorry, but there is ${result.status} error: ${result.statusText}`,
        );
      }
      throw Error(result.statusText);
    }

    return result;
  }

  makeUrl(options: TypeGetResp | undefined, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: TypeCallback<Response>, options: TypeGetResp | undefined): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data as unknown as Response))
      .catch((err) => console.error(err));
  }
}

export default Loader;
