import i18next from "i18next";
import "../components/header/Header.js";
import "../components/main-section/HeroSection.js";
import "../components/main-section/SpecialSponsor.js";
import "../components/main-section/SponsorsSection.js";
import "../components/main-section/SiteMap.js";
import "../components/footer/Footer.js";

// i18n.js

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        searchText: "Search",
        nav: {
          docs: "Docs",
          api: "API",
          playground: "Playground",
          ecosystem: "Ecosystem",
          about: "About",
          sponsor: "Sponsor",
          experts: "Experts"
        },

        heroTitle: {
          part1: "Progressive",
          part2: "JavaScript Framework"
        },
        heroText: "An approachable, performant and versatile framework for building web user interfaces.",
        whyVue: "Why Vue",
        getStarted: "Get Started",
        install: "Install",
        getSecurityUpdates: "Get Security Updates for Vue2",

        specialSponsor: "Special Sponsor",
        officialPartner: "Official Vue & Nuxt Partner",
        characteristics: {
          accessible: {
            title: "Accessible",
            description: "Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation."
          },
          performant: {
            title: "Performant",
            description: "Truly reactive, compiler-optimized rendering system that rarely requires manual optimization."
          },
          versatile: {
            title: "Versatile",
            description: "A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework."
          }
        },

        siteMap: {
          docs: {
            title: "Docs",
            guide: "Guide",
            tutorial: "Tutorial",
            examples: "Examples",
            quick_start: "Quick Start",
            glossary: "Glossary",
            error_reference: "Error Reference",
            vue_2_docs: "Vue 2 Docs",
            migration_from_vue_2: "Migration from Vue 2"
          },
          about: {
            title: "About",
            faq: "FAQ",
            team: "Team",
            releases: "Releases",
            community_guide: "Community Guide",
            code_of_conduct: "Code of Conduct",
            privacy_policy: "Privacy Policy",
            the_documentary: "The Documentary"
          },
          experts: {
            title: "Experts",
            partners: "Partners",
            developers: "Developers"
          },
          resources: {
            title: "Resources",
            partners: "Partners",
            developers: "Developers",
            themes: "Themes",
            ui_components: "UI Components",
            certification: "Certification",
            jobs: "Jobs",
            t_shirt_shop: "T-Shirt Shop"
          },
          officiallibraries: {
            title: "Official Libraries",
            vue_router: "Vue Router",
            pinia: "Pinia",
            tooling_guide: "Tooling Guide"
          },
          videocourses: {
            title: "Video Courses",
            vue_mastery: "Vue Mastery",
            vue_school: "Vue School"
          },
          help: {
            title: "Help",
            discord_chat: "Discord Chat",
            github_discussions: "GitHub Discussions",
            dev_community: "DEV Community"
          },
          news: {
            title: "News",
            blog: "Blog",
            twitter: "Twitter",
            events: "Events",
            newsletters: "Newsletters"
          }
        }
      }
    },
    it: {
      translation: {
        searchText: "Cerca",
        nav: {
          docs: "Documentazione",
          api: "API",
          playground: "Playground",
          ecosystem: "Ecosistema",
          about: "About",
          sponsor: "Sponsor",
          experts: "Esperti"
        },

        heroTitle: {
          part1: "Progressivo",
          part2: "Framework JavaScript"
        },
        heroText: "Un framework accessibile, performante e versatile per costruire interfacce utente web.",
        whyVue: "Perché Vue",
        getStarted: "Inizia",
        install: "Installa",
        getSecurityUpdates: "Ottieni aggiornamenti di sicurezza per Vue2",

        specialSponsor: "Sponsor Speciale",
        officialPartner: "Partner Ufficiale Vue & Nuxt",
        characteristics: {
          accessible: {
            title: "Accessibile",
            description: "Si basa sui migliori standard HTML, CSS e JavaScript con una API intuitiva e una documentazione eccellente a livello mondiale."
          },
          performant: {
            title: "Performante",
            description: "Un sistema di rendering veramente reattivo, ottimizzato per la compilazione che raramente richiede interventi manuali."
          },
          versatile: {
            title: "Versatile",
            description: "Un ricco ecosistema utilizzabile in maniera incrementale, espandibile da una libreria a un framework completo di ogni funzionalità."
          }
        },

        siteMap: {
          docs: {
            title: "Documentazione",
            guide: "Guida",
            tutorial: "Tutorial",
            examples: "Esempi",
            quick_start: "Guida Rapida",
            glossary: "Glossario",
            error_reference: "Riferimento Errori",
            vue_2_docs: "Documentazione Vue 2",
            migration_from_vue_2: "Migrazione da Vue 2"
          },
          about: {
            title: "Informazioni",
            faq: "FAQ",
            team: "Team",
            releases: "Release",
            community_guide: "Guida Comunità",
            code_of_conduct: "Codice di Condotta",
            privacy_policy: "Privacy Policy",
            the_documentary: "Il Documentario"
          },
          experts: {
            title: "Esperti",
            partners: "Partner",
            developers: "Sviluppatori"
          },
          resources: {
            title: "Risorse",
            partners: "Partner",
            developers: "Sviluppatori",
            themes: "Temi",
            ui_components: "Componenti UI",
            certification: "Certificazione",
            jobs: "Lavori",
            t_shirt_shop: "Negozio Magliette"
          },
          officiallibraries: {
            title: "Librerie Ufficiali",
            vue_router: "Vue Router",
            pinia: "Pinia",
            tooling_guide: "Guida Strumenti"
          },
          videocourses: {
            title: "Corsi Video",
            vue_mastery: "Vue Mastery",
            vue_school: "Vue School"
          },
          help: {
            title: "Aiuto",
            discord_chat: "Chat Discord",
            github_discussions: "Discussioni GitHub",
            dev_community: "Community DEV"
          },
          news: {
            title: "Notizie",
            blog: "Blog",
            twitter: "Twitter",
            events: "Eventi",
            newsletters: "Newsletter"
          }
        }
      }
    }
  }
});




document.querySelector("#app").innerHTML = `
  <header-section></header-section>
  <hero-section></hero-section>
  <special-sponsor></special-sponsor>
  <sponsors-section></sponsors-section>
  <site-map></site-map>
  <footer-section></footer-section>
`;