class HeroSection extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <section class="hero">
            <h1>The <span class="highlight">Progressive</span> <br> JavaScript Framework</h1>
            <p class="hero-text">An approachable, performant and versatile framework for building web user interfaces.</p>
            <div class="hero-buttons">
                <button class="btn btn-green">
                    <svg class="icon-play" aria-labelledby="simpleicons-play-icon" role="img" viewBox="0 0 100 125" fill="#FFFFFF" data-v-bf2d099b=""><title id="simpleicons-play-icon" lang="en" data-v-bf2d099b="">Play icon</title><path d="M50,3.8C24.5,3.8,3.8,24.5,3.8,50S24.5,96.2,50,96.2S96.2,75.5,96.2,50S75.5,3.8,50,3.8z M71.2,53.3l-30.8,18  c-0.6,0.4-1.3,0.5-1.9,0.5c-0.6,0-1.3-0.1-1.9-0.5c-1.2-0.6-1.9-1.9-1.9-3.3V32c0-1.4,0.8-2.7,1.9-3.3c1.2-0.6,2.7-0.6,3.8,0  l30.8,18c1.2,0.6,1.9,1.9,1.9,3.3S72.3,52.7,71.2,53.3z" data-v-bf2d099b=""></path></svg>
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