import './sources.css';

class Sources {
  draw(data: [{ name: string; id: string }]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemplate = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
    if (sourceItemTemplate) {
      data.forEach((item) => {
        const sourceClone = sourceItemTemplate.content.cloneNode(true) as HTMLElement;
        if (sourceClone) {
          const itemNameElement = sourceClone.querySelector('.source__item-name') as HTMLElement;
          if (itemNameElement) itemNameElement.textContent = item.name;
          const sourceItemElement = sourceClone.querySelector('.source__item') as HTMLElement;
          if (sourceItemElement) sourceItemElement.setAttribute('data-source-id', item.id);
          fragment.append(sourceClone);
        }
      });
      const sourcesElement = document.querySelector('.sources') as HTMLElement;
      if (sourcesElement) sourcesElement.append(fragment);
    }
  }
}

export default Sources;
