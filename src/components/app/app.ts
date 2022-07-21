import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const element = document.querySelector('.sources') as Element;
        element.addEventListener('click', (e: Event) => {
            const event = (event: Event) => this.controller.getNews(event, (data) => this.view.drawNews(data));
            event(e);
            (document.querySelector('.news') as HTMLElement).scrollIntoView({ behavior: 'smooth' });
        });
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
