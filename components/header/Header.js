class Header extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <header>
            <div class="header">
                <div class="header-left">
                    <div class="header-logo">
                        <img src="../../public/assets/icons/logo-vue.svg" alt="logo">
                        <span>Vue.js</span>
                    </div>
                    <button class="search-button">
                        <img class="search-button-pic" src="../../public/assets/icons/header-search.svg" alt="search">
                        Search
                        <div class="search-btn-shirtcut">⌘ K</div>
                    </button>
                </div>
                <button class="menu-toggle-button"><img src="../../public/assets/icons/menu-btn.svg" alt="menu"></button>
                <div class="navigation">
                    <nav>
                        <ul class="nav-menu">
                            <li>
                                <a href="#">Docs</a>
                                <img class="nav-icon" src="../../public/assets/icons/header-nav-arrow.svg" alt="Arrow">
                            </li>
                            <li><a href="#">API</a></li>
                            <li><a href="#">Playground</a></li>
                            <li>
                                <a href="#">Ecosystem</a>
                                <img class="nav-icon" src="../../public/assets/icons/header-nav-arrow.svg" alt="Arrow">
                            </li>
                            <li><a href="#">About</a></li>
                            <li>
                                <a href="#">Sponsor</a>
                            </li>
                            <li>
                                <a href="#">Experts</a>
                                <div class="new-p">NEW</div>
                                <img class="nav-icon" src="../../public/assets/icons/header-nav-arrow.svg" alt="Arrow">
                            </li>
                        </ul>
                    </nav>
                    
                    <button class="header-translation-btn">
                        <img src="../../public/assets/icons/header-translate.svg" alt="translate">
                    </button>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <div class="buttons">
                        <button class="header-btns"> <img src="../../public/assets/icons/header-github.svg" alt="github"></button>
                        <button class="header-btns"> <img src="../../public/assets/icons/header-twitter.svg" alt="twitter"></button>
                        <button class="header-btns"> <img src="../../public/assets/icons/header-discord.svg" alt="discord"></button>
                    </div>
                    <div class="menu-dots">...</div>
                </div>
            </div>
      </header>
      
        `
    }
}
customElements.define("header-section", Header)