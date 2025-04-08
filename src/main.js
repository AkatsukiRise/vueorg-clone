import "../components/header/Header.js";
import "../components/main-section/HeroSection.js";
import "../components/main-section/SpecialSponsor.js";
import "../components/main-section/SponsorsSection.js";
import "../components/main-section/SiteMap.js";
import "../components/footer/Footer.js";


document.querySelector("#app").innerHTML = `
  <header-section></header-section>
  <hero-section></hero-section>
  <special-sponsor></special-sponsor>
  <sponsors-section></sponsors-section>
  <site-map></site-map>
  <footer-section></footer-section>
`