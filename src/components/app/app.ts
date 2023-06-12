import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INews, ISource } from '../../types';

class App {
    private controller: AppController = new AppController();
    private view: AppView = new AppView();

    async start(): Promise<void> {
        document.querySelector('.sources')?.addEventListener(
            'click',
            async (e: Event): Promise<void> => {
                const data: INews | undefined = await this.controller.getNews(e);

                if (data) {
                    this.view.drawNews(data);
                }
            }
        );
        const data: ISource | undefined = await this.controller.getSources();

        if (data) {
            this.view.drawSources(data);
        }
    }
}

export default App;
