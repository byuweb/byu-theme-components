'use strict';
const template = require('./template.html');

class BYUFooterColumn extends HTMLElement {

    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = template;
    }

    connectedCallback() {
    }
}

window.customElements.define('byu-footer-column', BYUFooterColumn);
window.BYUFooterColumn = BYUFooterColumn;
