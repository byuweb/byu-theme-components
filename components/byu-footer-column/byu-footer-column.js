'use strict';

import template from './byu-footer-column.html';
import * as util from "byu-web-component-utils";

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
