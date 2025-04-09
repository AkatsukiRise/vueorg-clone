import {
    platinumSponsors,
    goldSponsors
} from "../../data.js";

class Sponsors extends HTMLElement {
    constructor() {
        super()
        const platinumSponsorsTable = platinumSponsors.map(sponsor =>
            `<div class="table-cell"><a href="#">${sponsor}</a></div>`
        ).join('')
        const goldSponsorsTable = goldSponsors.map(sponsor =>
            `<div class="table-cell"><a href="#">${sponsor}</a></div>`
        ).join('')

        this.innerHTML = `
        <section class="table-container">
            <h3>Platinum Sponsors</h3>
            <div class="table-1">
                ${platinumSponsorsTable}
            </div>
            <h3>Gold Sponsors</h3>
            <div class="table-2">
                ${goldSponsorsTable}
            </div>
        </section>
        `
    }


}
customElements.define("sponsors-section", Sponsors)