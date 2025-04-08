class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <header>
            <div class="header-desktop">
                <div class="header-logo">
                    <img src="./assets/icons/logo-vue.svg" alt="logo">
                    <span>Vue.js</span>
                </div>
                <button class="search-button">
                    <img class="search-button-pic" src="./assets/icons/header-search.svg" alt="search">
                    <span class="search-text">Search</span>
                    <div class="search-btn-shirtcut">⌘ K</div>
                </button>
                <button class="menu-toggle-button">
                    <img src="./assets/icons/menu-btn.svg" alt="menu">
                </button>
    
                <nav class="header-navigation">
                    <ul class="nav-menu">
                        <li class="dropdown">
                            <a href="#">Docs</a>
                            <img class="nav-icon" src="./assets/icons/header-nav-arrow.svg" alt="Arrow">
                            <ul class="dropdown-menu">
                                <li><a href="#">Guide</a></li>
                                <li><a href="#">Tutorial</a></li>
                                <li><a href="#">Examples</a></li>
                                <li><a href="#">Quick start</a></li>
                                <li><a href="#">Glossary</a></li>
                                <li><a href="#">Error reference</a></li>
                                <li><a href="#">Vue 2 docs</a></li>
                                <li><a href="#">Migration from Vue 2</a></li>
                            </ul>
                        </li>
                        <li><a href="#">API</a></li>
                        <li><a href="#">Playground</a></li>
                        <li class="dropdown">
                            <a href="#">Ecosystem</a>
                            <img class="nav-icon" src="./assets/icons/header-nav-arrow.svg" alt="Arrow">
                            <ul class="dropdown-menu">
                                <li><strong>RESOURCES</strong></li>
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Developers</a></li>
                                <li><a href="#">Themes</a></li>
                                <li><a href="#">UI components</a></li>
                                <li><a href="#">Certification</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">T-Shirt shop</a></li>

                                <li><strong>OFFICIAL LIBRARIES</strong></li>
                                <li><a href="#">Vue Router</a></li>
                                <li><a href="#">Pinia</a></li>
                                <li><a href="#">Tooling Guide</a></li>

                                <li><strong>VIDEO COURSES</strong></li>
                                <li><a href="#">Vue Mastery</a></li>
                                <li><a href="#">Vue School</a></li>

                                <li><strong>HELP</strong></li>
                                <li><a href="#">Discord chat</a></li>
                                <li><a href="#">GitHub discussions</a></li>
                                <li><a href="#">DEV community</a></li>

                                <li><strong>NEWS</strong></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Newsletters</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#">About</a>
                            <img class="nav-icon" src="./assets/icons/header-nav-arrow.svg" alt="Arrow">
                            <ul class="dropdown-menu">
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Releases</a></li>
                                <li><a href="#">Community guide</a></li>
                                <li><a href="#">Code of conduct</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">The documentary</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Sponsor</a></li>
                        <li class="dropdown">
                            <a href="#">Experts</a>
                            <span class="new-p">NEW</span>
                            <img class="nav-icon" src="./assets/icons/header-nav-arrow.svg" alt="Arrow">
                            <ul class="dropdown-menu">
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Developers</a></li>
                            </ul>
                        </li>
                    </ul>
    
                    <div class="dropdown">
                        <button class="header-translation-btn">
                            <img src="./assets/icons/header-translate.svg" alt="translate">
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#">Italiano</a>
                                <img src="./assets/icons/header-github.svg" alt="github">
                            </li>
                            <li>
                                <a href="#">English</a>
                                <img src="./assets/icons/header-github.svg" alt="github">
                            </li>
                            <li>Help us translate!</li>
                        </ul>
                    </div>
    
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <div class="buttons">
                        <button class="header-btns">
                            <img src="./assets/icons/header-github.svg" alt="github">
                        </button>
                        <button class="header-btns">
                            <img src="./assets/icons/header-twitter.svg" alt="twitter">
                        </button>
                        <button class="header-btns">
                            <img src="./assets/icons/header-discord.svg" alt="discord">
                        </button>
                    </div>
                    <button class="menu-dots-btn">
                        <img src="./assets/icons/header-menu-dots.svg" alt="menu dots">
                    </button>
                </nav>
            </div>
    
            <div class="popup-menu">
                <div class="popup-content">
                    <nav>
                        <ul class="nav-menu">
                            <li class="dropdown">
                                <div class="dropdown-header">
                                    <a href="#" class="list-border">Docs</a>
                                    <button class="popup-open-menu">&times;</button>
                                </div>
                                <ul class="popup-dropdown-menu">
                                    <li><a href="#">Guide</a></li>
                                    <li><a href="#">Tutorial</a></li>
                                    <li><a href="#">Examples</a></li>
                                    <li><a href="#">Quick start</a></li>
                                    <li><a href="#">Glossary</a></li>
                                    <li><a href="#">Error reference</a></li>
                                    <li><a href="#">Vue 2 docs</a></li>
                                    <li><a href="#">Migration from Vue 2</a></li>
                                </ul>
                            </li>
    
                            <li><a href="#" class="list-border">API</a></li>
                            <li><a href="#" class="list-border">Playground</a></li>
    
                            <li class="dropdown">
                                <div class="dropdown-header">
                                    <a href="#" class="list-border">Ecosystem</a>
                                    <button class="popup-open-menu">&times;</button>
                                </div>
                                <ul class="popup-dropdown-menu">
                                    <li><strong>RESOURCES</strong></li>
                                    <li><a href="#">Partners</a></li>
                                    <li><a href="#">Developers</a></li>
                                    <li><a href="#">Themes</a></li>
                                    <li><a href="#">UI components</a></li>
                                    <li><a href="#">Certification</a></li>
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">T-Shirt shop</a></li>

                                    <li><strong>OFFICIAL LIBRARIES</strong></li>
                                    <li><a href="#">Vue Router</a></li>
                                    <li><a href="#">Pinia</a></li>
                                    <li><a href="#">Tooling Guide</a></li>

                                    <li><strong>VIDEO COURSES</strong></li>
                                    <li><a href="#">Vue Mastery</a></li>
                                    <li><a href="#">Vue School</a></li>

                                    <li><strong>HELP</strong></li>
                                    <li><a href="#">Discord chat</a></li>
                                    <li><a href="#">GitHub discussions</a></li>
                                    <li><a href="#">DEV community</a></li>

                                    <li><strong>NEWS</strong></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">Newsletters</a></li>
                                </ul>
                            </li>
    
                            <li class="dropdown">
                                <div class="dropdown-header">
                                    <a href="#" class="list-border">About</a>
                                    <button class="popup-open-menu">&times;</button>
                                </div>
                                <ul class="popup-dropdown-menu">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Releases</a></li>
                                    <li><a href="#">Community guide</a></li>
                                    <li><a href="#">Code of conduct</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                    <li><a href="#">The documentary</a></li>
                                </ul>
                            </li>
    
                            <li><a href="#" class="list-border">Sponsor</a></li>
    
                            <li class="dropdown">
                                <div class="dropdown-header">
                                    <a href="#" class="list-border">Experts</a>
                                    <button class="popup-open-menu">&times;</button>
                                </div>
                                <ul class="popup-dropdown-menu">
                                    <li><a href="#">Partners</a></li>
                                    <li><a href="#">Developers</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div class="popup-bg">
                        <span>Translations</span>
                        <ul class="translation-list">
                            <li>
                                <a href="#">Italiano</a>
                                <img src="./assets/icons/header-github.svg" alt="github">
                            </li>
                            <li>
                                <a href="#">English</a>
                                <img src="./assets/icons/header-github.svg" alt="github">
                            </li>
                        </ul>
                        <span>Help us translate!</span>
                    </div>
                    <div class="slider-block popup-bg">
                        <span>Appearance</span>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="header-buttons-sm">
                        <button class="header-btns">
                            <img src="./assets/icons/header-github.svg" alt="github">
                        </button>
                        <button class="header-btns">
                            <img src="./assets/icons/header-twitter.svg" alt="twitter">
                        </button>
                        <button class="header-btns">
                            <img src="./assets/icons/header-discord.svg" alt="discord">
                        </button>
                    </div>
                </div>
            </div>
        </header>
        `
        document.addEventListener('DOMContentLoaded', function () {
            const burgerButton = document.querySelector('.menu-toggle-button')
            const popupMenu = document.querySelector('.popup-menu')

            burgerButton.addEventListener('click', () => {
                popupMenu.classList.toggle('open')

                if (popupMenu.classList.contains('open')) {
                    document.body.classList.add('no-scroll')
                } else {
                    document.body.classList.remove('no-scroll')
                }
            })
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.addEventListener('click', (event) => {
                    const menu = dropdown.querySelector('.popup-dropdown-menu')
                    menu.classList.toggle('active')
                })
            })
        })
    }
}

customElements.define("header-section", Header)