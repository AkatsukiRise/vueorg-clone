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
                            <li><a href="#">Playground</a></li>
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
                        <img src="./assets/icons/header-translate.svg" alt="translate">
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


    }
}
customElements.define("header-section", Header)