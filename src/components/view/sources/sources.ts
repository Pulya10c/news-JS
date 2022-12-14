import { Source } from './../../controller/controller';
import './sources.css';

type CountCountry = Record<Source["country"], Source[]>

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLMetaElement;
        // new menu
        const countCountry = data.reduce((acc: CountCountry, item) => {
            const { country } = item
            acc[country] = (acc[country] || []).concat(item)
            return acc;
        }, {});

        Object.entries(countCountry).forEach(([key, value]) => {
            const sourceClone = (sourceItemTemp.content as unknown as HTMLElement).cloneNode(true) as HTMLElement;
            if (sourceClone !== null) {
                const country = sourceClone.querySelector('.source__item-name')
                if (country) {
                    country.textContent = `${key.toUpperCase()} - ${value.length}`
                }
            }
            const dropdown = this.createDropdown(value)
            sourceClone.querySelector('.source__item')?.append(dropdown)
            fragment.append(sourceClone)
        })

        const sources = document.querySelector('.sources')
        if (sources) {
            sources.append(fragment);
            const burgerMenu = this.createBurger()
            burgerMenu.append(sources)
            document.querySelector('main')?.append(burgerMenu)
        }
       
    }

    createListItem({ name, id }: Source) {
        const container = document.createElement('div')
        container.classList.add('dropdown__item')
        container.setAttribute('data-source-id', id)
        container.innerHTML = name
        return container
    }

    createDropdown(sources: Source[]) {
        const dropdown = document.createElement('div')
        dropdown.classList.add('dropdown')
        const dropdownContentWrapper = document.createElement('div')
        dropdownContentWrapper.classList.add('dropdown-content')
        const dropdownItems = sources.map(this.createListItem)
        dropdownContentWrapper.append(...dropdownItems)
        dropdown.append(dropdownContentWrapper)
        return dropdown
    }

    createBurger() {
        const menuBtn = document.querySelector('.menu-btn') as HTMLElement;
        const burger = document.createElement('div')
        burger.classList.add('menu-burger')
        menuBtn.addEventListener('click', function () {
            burger.classList.toggle('active');
            menuBtn.classList.toggle('active')
            
        });
        burger.addEventListener('click' , (e) => {
                if ((e?.target as HTMLElement).matches('.dropdown__item')) {
                    burger.classList.remove('active');
                    menuBtn.classList.remove('active')  
                }
        })
        return burger;
    }
}


export default Sources;