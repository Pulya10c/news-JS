import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INews, ISource } from '../../types';

class App {
    public controller = new AppController();
    public view = new AppView();

    async start() {
        document.querySelector('.sources')?.addEventListener('click', async (e) => {
            const data: INews = await this.controller.getNews(e);
            this.view.drawNews(data);
        });
        const data: ISource = await this.controller.getSources();
        this.view.drawSources(data);
    }
}

export default App;
