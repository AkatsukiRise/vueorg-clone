import i18next from "i18next";
class Header extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <header>
            <div class="header">
                <div class="header-left">
                    <div class="header-logo">
                        <img src="./assets/icons/logo-vue.svg" alt="logo">
                        <span>Vue.js</span>
                    </div>
                    <button class="search-button">
                        <img class="search-button-pic" src="./assets/icons/header-search.svg" alt="search">
                        <span class="search-text">Search</span>
                        <div class="search-btn-shortcut">⌘ K</div>
                    </button>
                </div>
                <button class="menu-toggle-button"><img src="./assets/icons/menu-btn.svg" alt="menu"></button>
                <div class="navigation">
                    <nav>
                        <ul class="nav-menu">
                            <li>
                                <a href="#">Docs</a>
                                <img class="nav-icon" src="./assets/icons/header-nav-arrow.svg" alt="Arrow">
                            </li>
                            <li><a href="#">API</a></li>
                            <li><a href="playground.html">Playground</a></li>
                            <li>
                                <a href="#">Ecosystem</a>
                                <img class="nav-icon" src="./assets/icons/header-nav-arrow.svg" alt="Arrow">
                            </li>
                            <li><a href="#">About</a></li>
                            <li>
                                <a href="#">Sponsor</a>
                            </li>
                            <li>
                                <a href="#">Experts</a>
                                <div class="new-p">NEW</div>
                                <img class="nav-icon" src="./assets/icons/header-nav-arrow.svg" alt="Arrow">
                            </li>
                        </ul>
                    </nav>
                    
                    <button class="header-translation-btn">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.515 17.23L13.873 6.23H14.896L19.254 17.23H18.173L16.983 14.18H11.785L10.596 17.23H9.515ZM1.635 14.346L0.927 13.638L5.823 8.722C5.25233 8.13867 4.68467 7.42067 4.12 6.568C3.55533 5.71533 3.137 4.936 2.865 4.23H3.945C4.189 4.79 4.558 5.43333 5.052 6.16C5.54533 6.88733 6.03833 7.50567 6.531 8.015C7.401 7.131 8.17367 6.16133 8.849 5.106C9.52367 4.05 9.97233 3.09133 10.195 2.23H0V1.23H6.115V0H7.115V1.23H13.231V2.23H11.234C10.9353 3.27667 10.4263 4.39133 9.707 5.574C8.98767 6.75733 8.16467 7.81067 7.238 8.734L9.773 11.338L9.388 12.368L6.531 9.436L1.635 14.346ZM12.123 13.276H16.646L14.384 7.465L12.123 13.276Z" fill="currentColor"/>
                        </svg>
                    </button>
                    <select id="theme-select">
                        <option id="theme-system" value="system">System</option>
                        <option id="theme-light" value="light">Light</option>
                        <option id="theme-dark" value="dark">Dark</option>
                    </select>
                    <div class="buttons">
                        <button class="header-btns"> <img src="./assets/icons/header-github.svg" alt="github"></button>
                        <button class="header-btns"> <img src="./assets/icons/header-twitter.svg" alt="twitter"></button>
                        <button class="header-btns"> <img src="./assets/icons/header-discord.svg" alt="discord"></button>
                    </div>
                    <button class="menu-dots-btn"><img class="dots-bnt-img" src="./assets/icons/header-menu-dots.svg"> </button>
                </div>
            </div>
      </header>
      
        `

        document.addEventListener("DOMContentLoaded", () => {
            const themeSelect = document.querySelector('header-section select#theme-select');
            const savedTheme = localStorage.getItem('preferred-theme');
            if (savedTheme) {
                themeSelect.value = savedTheme;
            }

            themeSelect.addEventListener('change', () => {
                localStorage.setItem('preferred-theme', themeSelect.value);
            });
        })
        document.querySelector('.header-translation-btn').addEventListener('click', () => {
            let newLang = i18next.language === 'en' ? 'it' : 'en'
            i18next.changeLanguage(newLang)
            this.updateSearchText()
            this.updateNavMenu();
        })
    }
    updateSearchText() {
        this.querySelector('.search-text').textContent = i18next.t('searchText');
    }

    updateNavMenu() {
        const navItems = this.querySelectorAll('.nav-menu li a');
        navItems[0].textContent = i18next.t('nav.docs');
        navItems[1].textContent = i18next.t('nav.api');
        navItems[2].textContent = i18next.t('nav.playground');
        navItems[3].textContent = i18next.t('nav.ecosystem');
        navItems[4].textContent = i18next.t('nav.about');
        navItems[5].textContent = i18next.t('nav.sponsor');
        navItems[6].textContent = i18next.t('nav.experts');

    }
}
customElements.define("header-section", Header)