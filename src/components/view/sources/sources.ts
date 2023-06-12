import './sources.css';
import { ISourceData } from '../../../types';

enum Selectors {
    Item = '.source__item',
    ItemTemp = '#sourceItemTemp',
    ItemName = '.source__item-name',
    DataId = 'data-source-id',
    Sources = '.sources',
}

class Sources {
    draw(data: ISourceData[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector(
            Selectors.ItemTemp
        ) as HTMLTemplateElement;

        if (!sourceItemTemp) {
            throw new Error('Template element not found');
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            const name: HTMLElement | null = sourceClone.querySelector(Selectors.ItemName);

            if (name) {
                name.textContent = item.name;
            }

            sourceClone.querySelector(Selectors.Item)?.setAttribute(Selectors.DataId, item.id);

            fragment.append(sourceClone);
        });

        document.querySelector(Selectors.Sources)?.append(fragment);
    }
}

export default Sources;
