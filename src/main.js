const app = document.querySelector("#app")

import "../components/header/Header.js";


if (window.location.pathname.includes("playground.html")) {
  import("../components/main-section/Playground.js")
  app.innerHTML = `
    <header-section></header-section>
    <playground-section></playground-section> 
    <footer-section></footer-section>
  `
} else {
  import("../components/main-section/HeroSection.js")
  import("../components/main-section/SpecialSponsor.js")
  import("../components/main-section/SponsorsSection.js")
  import("../components/main-section/SiteMap.js")
  import("../components/footer/Footer.js");


  app.innerHTML = `
    <header-section></header-section>
    <hero-section></hero-section>
    <special-sponsor></special-sponsor>
    <sponsors-section></sponsors-section>
    <site-map></site-map>
    <footer-section></footer-section>
  `
}