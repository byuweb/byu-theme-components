'use strict';

import * as template from './template.html';
import * as util from 'byu-web-component-utils';

class BYUFooter extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        util.applyTemplate(this, 'byu-footer', template, () => {
            // always show the current year in the copyright message
            var currentYear = this.shadowRoot.querySelector("#currentYear");
            currentYear.innerHTML = new Date().getFullYear();
        });
    }
}

window.customElements.define('byu-footer', BYUFooter);
window.BYUFooter = BYUFooter;
