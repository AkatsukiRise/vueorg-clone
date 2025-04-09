import {
    siteMapCategories
} from '../../data.js';
import i18next from 'i18next';

class SiteMap extends HTMLElement {
    constructor() {
        super();
        this.render();

        i18next.on('languageChanged', () => {
            this.updateText();
        });
    }

    render() {
        let allLinks = '';

        siteMapCategories.forEach(category => {
            const categoryKey = category.id;
            let categoryLinks = category.links.map(link => {
                return `<li><a href="#">${i18next.t(`siteMap.${categoryKey}.${link.key}`)}</a></li>`;
            }).join('');

            allLinks += `
            <div class="category">
                <h4>${i18next.t(`siteMap.${categoryKey}.title`)}</h4>
                <ul>
                    ${categoryLinks}
                </ul>
            </div>
            `;
        });

        this.innerHTML = `
        <nav class="map">
            <div class="map-links">
                ${allLinks}
            </div>
        </nav>
        `;
    }

    updateText() {
        const categories = this.querySelectorAll('.category')

        siteMapCategories.forEach((category, index) => {
            const categoryKey = category.id
            categories[index].querySelector('h4').textContent = i18next.t(`siteMap.${categoryKey}.title`);

            const links = categories[index].querySelectorAll('li a');
            category.links.forEach((link, linkIndex) => {
                links[linkIndex].textContent = i18next.t(`siteMap.${categoryKey}.${link.key}`);
            });
        });
    }
}

customElements.define("site-map", SiteMap);