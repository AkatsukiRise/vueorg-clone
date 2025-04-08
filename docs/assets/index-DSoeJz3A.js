(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();class r extends HTMLElement{constructor(){super(),this.innerHTML=`
        <header>
            <div class="header">
                <div class="header-left">
                    <div class="header-logo">
                        <img src="./public/assets/icons/logo-vue.svg" alt="logo">
                        <span>Vue.js</span>
                    </div>
                    <button class="search-button">
                        <img class="search-button-pic" src="./public/assets/icons/header-search.svg" alt="search">
                        <span class="search-text">Search</span>
                        <div class="search-btn-shirtcut">⌘ K</div>
                    </button>
                </div>
                <button class="menu-toggle-button"><img src="./public/assets/icons/menu-btn.svg" alt="menu"></button>
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
                    <button class="menu-dots-btn"><img class="dots-bnt-img" src="../../public/assets/icons/header-menu-dots.svg"> </button>
                </div>
            </div>
      </header>
      
        `}}customElements.define("header-section",r);class c extends HTMLElement{constructor(){super(),this.innerHTML=`
        <section class="hero">
            <h1>The <span class="highlight">Progressive</span> <br> JavaScript Framework</h1>
            <p class="hero-text">An approachable, performant and versatile framework for building web user interfaces.</p>
            <div class="hero-buttons">
                <button class="btn btn-green">
                    <img src="../../public/assets/icons/whyVue-btn.svg" alt="play button icon">
                    Why Vue
                </button>
                <button class="btn btn-icon-right">
                    Get Started
                    <img src="../../public/assets/icons/getStarted-btn.svg" alt="get started button icon" class="btn-icon-arrow">
                </button>
                <button class="btn">Install</button>
                <button class="btn btn-gradient">Get Security Updates for Vue2
                <img src="../../public/assets/icons/link-btn.svg" alt="link icon" class="btn-icon-link">
                </button>
            </div>
        </section>
        `}}customElements.define("hero-section",c);const l=[{title:"Approachable",description:"Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation."},{title:"Performant",description:"Truly reactive, compiler-optimized rendering system that rarely requires manual optimization."},{title:"Versatile",description:"A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework."}],u=["BIT","Vue Mastery","Vue School","Vehikl","Vuejs Amsterdam","Storyblok","Chrome","Herodevs","JavaScript","Become a sponsor"],d=["BIT","Vue Mastery","Vue School","Vehikl","Vuejs Amsterdam","Storyblok","Chrome","Herodevs","JavaScript","Become a sponsor","Chrome","Herodevs","JavaScript","Become a sponsor","Chrome","Herodevs","JavaScript","Become a sponsor"],p=[{title:"Docs",links:["Guide","Tutorial","Examples","Quick Start","Glossary","Error Reference","Vue 2 Docs","Migration from Vue 2"]},{title:"About",links:["FAQ","Team","Releases","Community Guide","Code of Conduct","Privacy Policy","The Documentary"]},{title:"Experts",links:["Partners","Developers"]},{title:"Resources",links:["Partners","Developers","Themes","UI Components","Certification","Jobs","T-Shirt Shop"]},{title:"Official Libraries",links:["Vue Router","Pinia","Tooling Guide"]},{title:"Video Courses",links:["Vue Mastery","Vue School"]},{title:"Help",links:["Discord Chat","GitHub Discussions","DEV Community"]},{title:"News",links:["Blog","Twitter","Events","Newsletters"]}];class m extends HTMLElement{constructor(){super(),this.innerHTML=`
        <section class="special-sponsor">
            <span class="text text-container-left">
            Special Sponsor
            </span>
            <a href="https://www.monterail.com/services/vue-js-development?+utm_source=sponsorship&utm_medium=logo&utm_campaign=Vue">
               <img class="image-container" src="../../public/assets/icons/monterail.png" alt="Image">
            </a>
            <span class="text text-container-right">
            Official Vue & Nuxt Partner
            </span>
        </section>
        <section class="char-container">
        ${l.map(s=>`
            <div class="char-item">
                <h3>${s.title}</h3>
                <p class="char-p">${s.description}</p>
            </div>
        `).join("")}
        </section>
        `}}customElements.define("special-sponsor",m);class h extends HTMLElement{constructor(){super();const s=u.map(o=>`<div class="table-cell"><a href="#">${o}</a></div>`).join(""),n=d.map(o=>`<div class="table-cell"><a href="#">${o}</a></div>`).join("");this.innerHTML=`
        <section class="table-container">
            <h3>Platinum Sponsors</h3>
            <div class="table-1">
                ${s}
            </div>
            <h3>Gold Sponsors</h3>
            <div class="table-2">
                ${n}
            </div>
        </section>
        `}}customElements.define("sponsors-section",h);class b extends HTMLElement{constructor(){super();let s="";p.forEach(n=>{let o=n.links.map(e=>`<li><a href="#">${e}</a></li>`).join("");console.log(o),s+=`
            <div class="category">
                <h4>${n.title}</h4>
                <ul>
                    ${o}
                </ul>
            </div>
            `}),this.innerHTML=`
        <nav class="map">
            <div class="map-links">
                ${s}
            </div>
        </nav>
        `}}customElements.define("site-map",b);class v extends HTMLElement{constructor(){super(),this.innerHTML=`
        <footer class="footer">
            <div class="footer-content">
                <p>Released under the <a class="footer-link" href="https://opensource.org/license/MIT">MIT License</a>.</p>
                <p>Copyright © 2014-2025 Evan You</p>
            </div>
        </footer>
        `}}customElements.define("footer-section",v);document.querySelector("#app").innerHTML=`
  <header-section></header-section>
  <hero-section></hero-section>
  <special-sponsor></special-sponsor>
  <sponsors-section></sponsors-section>
  <site-map></site-map>
  <footer-section></footer-section>
`;
