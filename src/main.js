import "../components/header/Header.js";
import "../components/footer/Footer.js"


const app = document.querySelector("#app")

if (window.location.pathname.includes("api.html")) {
  import("../components/main-section/api.js")
  app.innerHTML = `
    <header-section></header-section>
    <api-section></api-section> 
    <footer-section></footer-section>
  `
} else {
  import("../components/main-section/HeroSection.js")
  import("../components/main-section/SpecialSponsor.js")
  import("../components/main-section/SponsorsSection.js")
  import("../components/main-section/SiteMap.js")

  app.innerHTML = `
    <header-section></header-section>
    <hero-section></hero-section>
    <special-sponsor></special-sponsor>
    <sponsors-section></sponsors-section>
    <site-map></site-map>
    <footer-section></footer-section>
  `
}