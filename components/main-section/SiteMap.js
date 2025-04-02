import {
    siteMapCategories
} from '../../data.js'

class SiteMap extends HTMLElement {
    constructor() {
        super()

        let allLinks = ''

        siteMapCategories.forEach(category => {
            let categoryLinks = category.links.map(link => `<li><a href="#">${link}</a></li>`).join('');
            allLinks += `
            <div class="category">
                <h4>${category.title}</h4>
                <ul>
                    ${categoryLinks}
                </ul>
            </div>
            `
        })

        this.innerHTML = `
        <nav class="map">
            <div class="map-links">
                ${allLinks}
            </div>
        </nav>
        `;
    }
}
//{
//     title: "Docs",
//     links: [
//         "Guide",
//         "Tutorial",
//         "Examples",
//         "Quick Start",
//         "Glossary",
//         "Error Reference",
//         "Vue 2 Docs",
//         "Migration from Vue 2"
//     ]
// }
customElements.define("site-map", SiteMap)