import i18next from "i18next";

class HeroSection extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <section class="hero">
            <h1>
                The <span class="highlight">${i18next.t('heroTitle.part1')}</span><br>
                <span class="hero-title-part2">${i18next.t('heroTitle.part2')}</span>
            </h1>
            <p class="hero-text">${i18next.t('heroText')}</p>
            <div class="hero-buttons">
                <button class="btn btn-green">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                            <path d="M11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11C1 16.523 5.477 21 11 21Z"
                                fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                            <path d="M9 11V7.53601L12 9.26801L15 11L12 12.732L9 14.464V11Z"
                                fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <rect x="-1" y="-1" width="24" height="24" fill="currentColor"/>
                        </g>
                    </svg>
                    <span class="btn-text">${i18next.t('whyVue')}</span>
                </button>
                <button class="btn btn-icon-right">
                    <span class="btn-text">${i18next.t('getStarted')}</span>
                    <img src="./assets/icons/getStarted-btn.svg" alt="get started button icon" class="btn-icon-arrow">
                </button>
                <button class="btn">
                    <span class="btn-text">${i18next.t('install')}</span>
                </button>
                <button class="btn btn-gradient">
                    <span class="btn-text">${i18next.t('getSecurityUpdates')}</span>
                    <img src="./assets/icons/link-btn.svg" alt="link icon" class="btn-icon-link">
                </button>
            </div>
        </section>
        `

        i18next.on('languageChanged', () => {
            this.updateText()
        });
    }

    updateText() {
        this.querySelector('.highlight').textContent = i18next.t('heroTitle.part1')
        this.querySelector('.hero-title-part2').textContent = i18next.t('heroTitle.part2')
        this.querySelector('.hero-text').textContent = i18next.t('heroText')
        this.querySelector('.btn-green .btn-text').textContent = i18next.t('whyVue')
        this.querySelectorAll('.btn-icon-right .btn-text')[0].textContent = i18next.t('getStarted')
        this.querySelectorAll('.hero-buttons .btn')[2].querySelector('.btn-text').textContent = i18next.t('install')
        this.querySelectorAll('.btn-gradient .btn-text')[0].textContent = i18next.t('getSecurityUpdates')
    }
}

customElements.define("hero-section", HeroSection)