'use strict';

import * as template from './template.html';
import * as util from 'byu-web-component-utils';

class BYUFooter extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        const component = this;
        util.applyTemplate(component, 'byu-footer', template, () => {
            // always show the current year in the copyright message
            var currentYear = component.shadowRoot.querySelector("#currentYear");
            currentYear.innerHTML = new Date().getFullYear();
        });

        if (component.children.length < 4) {
            //this.setAttribute('left-align', '');
        }
    }
}

window.customElements.define('byu-footer', BYUFooter);
window.BYUFooter = BYUFooter;
