import "../src/components/header/Header.js";
import "../src/components/main-section/HeroSection.js";
import "../src/components/main-section/SpecialSponsor.js";
import "../src/components/main-section/SponsorsSection.js";
import "../src/components/main-section/SiteMap.js";
import "../src/components/footer/Footer.js";


document.querySelector("#app").innerHTML = `
  <header-section></header-section>
  <hero-section></hero-section>
  <special-sponsor></special-sponsor>
  <sponsors-section></sponsors-section>
  <site-map></site-map>
  <footer-section></footer-section>
`