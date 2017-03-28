'use strict';

const template = require('./template.html');
const util = require('byu-web-component-utils');

class BYUFooterActionButton extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        util.applyTemplate(this, 'byu-footer-action-button', template);
    }
}

window.customElements.define('byu-footer-action-button', BYUFooterActionButton);
window.BYUFooterActionButton = BYUFooterActionButton;

