import i18next from "i18next";

class HeroSection extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <section class="hero">
            <h1>The <span class="highlight">${i18next.t('heroTitle.part1')}</span> <br> ${i18next.t('heroTitle.part2')}</h1>
            <p class="hero-text">${i18next.t('heroText')}</p>
            <div class="hero-buttons">
                <button class="btn btn-green">
                    <img src="./assets/icons/whyVue-btn.svg" alt="play button icon">
                    ${i18next.t('whyVue')}
                </button>
                <button class="btn btn-icon-right">
                    ${i18next.t('getStarted')}
                    <img src="./assets/icons/getStarted-btn.svg" alt="get started button icon" class="btn-icon-arrow">
                </button>
                <button class="btn">${i18next.t('install')}</button>
                <button class="btn btn-gradient">
                    ${i18next.t('getSecurityUpdates')}
                    <img src="./assets/icons/link-btn.svg" alt="link icon" class="btn-icon-link">
                </button>
            </div>
        </section>
        `

        i18next.on('languageChanged', () => {
            this.updateText();
        });
    }

    updateText() {
        this.querySelector('.highlight').textContent = i18next.t('heroTitle.part1');
        this.querySelector('h1').innerHTML = `The <span class="highlight">${i18next.t('heroTitle.part1')}</span> <br> ${i18next.t('heroTitle.part2')}`;
        this.querySelector('.hero-text').textContent = i18next.t('heroText');
        this.querySelectorAll('.hero-buttons button')[0].textContent = i18next.t('whyVue');
        this.querySelectorAll('.hero-buttons button')[1].textContent = i18next.t('getStarted');
        this.querySelectorAll('.hero-buttons button')[2].textContent = i18next.t('install');
        this.querySelectorAll('.hero-buttons button')[3].textContent = i18next.t('getSecurityUpdates');
    }
}

customElements.define("hero-section", HeroSection);