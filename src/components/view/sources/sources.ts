import './sources.css';
import { Source } from '../appView';

export type DrawSourcesFunction = (data: Array<Source>) => void;
class Sources {
    draw: DrawSourcesFunction = (data) => {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourceElement = document.querySelector('.sources') as Element;
        sourceElement.append(fragment);
    };
}

export default Sources;
