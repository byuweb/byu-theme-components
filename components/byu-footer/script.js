'use strict';

import * as template from './template.html';

class BYUFooter extends HTMLElement {

    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = template;
    }

    connectedCallback() {
        // always show the current year in the copyright message
        var currentYear = this.shadowRoot.querySelector("#currentYear");
        currentYear.innerHTML = new Date().getFullYear();
    }
}

window.customElements.define('byu-footer', BYUFooter);
window.BYUFooter = BYUFooter;
