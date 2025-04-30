import {
    characteristics
} from "../../data.js";
import i18next from "i18next";

class SpecialSponsor extends HTMLElement {
    constructor() {
        super();
        this.render();

        i18next.on('languageChanged', () => {
            this.updateText();
        });
    }

    render() {
        this.innerHTML = `
        <section class="special-sponsor">
            <span class="text text-container-left">
                ${i18next.t('specialSponsor')}
            </span>
            <a href="https://www.monterail.com/services/vue-js-development?+utm_source=sponsorship&utm_medium=logo&utm_campaign=Vue">
               <img class="image-container" src="https://automation.vuejs.org/images/monterail.svg" alt="Image">
            </a>
            <span class="text text-container-right">
                ${i18next.t('officialPartner')}
            </span>
        </section>
        <section class="char-container">
            ${characteristics.map(char => `
                <div class="char-item">
                    <h3>${i18next.t(`characteristics.${char.id}.title`)}</h3>
                    <p class="char-p">${i18next.t(`characteristics.${char.id}.description`)}</p>
                </div>
            `).join('')}
        </section>
        `;
    }

    updateText() {

        const charItems = this.querySelectorAll('.char-item');
        characteristics.forEach((char, index) => {
            charItems[index].querySelector('h3').textContent = i18next.t(`characteristics.${char.id}.title`);
            charItems[index].querySelector('p').textContent = i18next.t(`characteristics.${char.id}.description`);
        });
    }
}

customElements.define("special-sponsor", SpecialSponsor);