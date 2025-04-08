import {
    characteristics
} from "../../data.js";
class SpecialSponsor extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <section class="special-sponsor">
            <span class="text text-container-left">
            Special Sponsor
            </span>
            <a href="https://www.monterail.com/services/vue-js-development?+utm_source=sponsorship&utm_medium=logo&utm_campaign=Vue">
               <img class="image-container" src="./assets/icons/monterail.png" alt="Image">
            </a>
            <span class="text text-container-right">
            Official Vue & Nuxt Partner
            </span>
        </section>
        <section class="char-container">
        ${characteristics.map(char => `
            <div class="char-item">
                <h3>${char.title}</h3>
                <p class="char-p">${char.description}</p>
            </div>
        `).join('')}
        </section>
        `
    }
}
customElements.define("special-sponsor", SpecialSponsor)