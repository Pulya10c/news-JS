import './sources.css';

interface SourceItem {
	name: string;
	id: string;
}

type Element = HTMLElement | null;

class Sources {
	draw(data: SourceItem[]) {
		const fragment: DocumentFragment = document.createDocumentFragment();
		const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

		data.forEach((item) => {
			const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

			const itemNameSource: Element = sourceClone.querySelector('.source__item-name');
			if (itemNameSource) {
				itemNameSource.textContent = item.name;
			}
			const itemSource: Element = sourceClone.querySelector('.source__item');
			if (itemSource) {
				itemSource.setAttribute('data-source-id', item.id);
			}

			fragment.append(sourceClone);
		});

		const sources: HTMLElement = document.querySelector('.sources') as HTMLElement;
		if (sources) {
			sources.append(fragment);
		}
	}
}

export default Sources;