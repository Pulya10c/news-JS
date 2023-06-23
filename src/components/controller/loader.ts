type RequestParams = {
  endpoint: string;
  options?: { [key: string]: string };
};

class Loader {
  baseLink = '';
  options = {};

  constructor(baseLink: string, options: { [key: string]: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp<TResponse>(
    params: RequestParams,
    callback = (data: TResponse): void => {
      console.error('No callback for GET response');
      console.log(data);
    }
  ): void {
    this.load('GET', params.endpoint, callback, params.options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: { [key: string]: string }, endpoint: string): URL {
    const urlOptions = { ...this.options, ...options };
    console.log(urlOptions);
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return new URL(url.slice(0, -1));
  }

  load<TResponse>(
    method: string,
    endpoint: string,
    callback: (data: TResponse) => void,
    options: { [key: string]: string } = {}
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response) => res.json())
      .then((data: TResponse) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
