import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { Data} from '../../types';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (document
            .querySelector('.sources') as HTMLDivElement)
            .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data: Data) => this.view.drawSources(data));
    }
}

export default App;
