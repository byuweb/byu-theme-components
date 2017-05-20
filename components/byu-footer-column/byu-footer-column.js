'use strict';
const template = require('./byu-footer-column.html');
const util = require('byu-web-component-utils');

class BYUFooterColumn extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        util.applyTemplate(this, 'byu-footer-column', template);
    }
}

window.customElements.define('byu-footer-column', BYUFooterColumn);
window.BYUFooterColumn = BYUFooterColumn;
