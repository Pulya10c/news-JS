import './sources.css';
import { Article } from '../../options';

class Sources {
  draw(data: Article[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item: Article) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;

      const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
      sourceItemName.textContent = item.name;

      const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
      sourceItem.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources')?.append(fragment);
  }
}

export default Sources;
