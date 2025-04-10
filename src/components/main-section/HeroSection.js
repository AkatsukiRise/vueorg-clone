class HeroSection extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <section class="hero">
            <h1>The <span class="highlight">Progressive</span> <br> JavaScript Framework</h1>
            <p class="hero-text">An approachable, performant and versatile framework for building web user interfaces.</p>
            <div class="hero-buttons">
                <button class="btn btn-green">
                    <img src="./assets/icons/whyVue-btn.svg" alt="play button icon">
                    Why Vue
                </button>
                <button class="btn btn-icon-right">
                    Get Started
                    <img src="./assets/icons/getStarted-btn.svg" alt="get started button icon" class="btn-icon-arrow">
                </button>
                <button class="btn">Install</button>
                <button class="btn btn-gradient">Get Security Updates for Vue2
                <img src="./assets/icons/link-btn.svg" alt="link icon" class="btn-icon-link">
                </button>
            </div>
        </section>
        `
    }
}
customElements.define("hero-section", HeroSection)