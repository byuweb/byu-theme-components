'use strict';

import * as templateFn from  './template.ejs.html';

class BYUHeader extends HTMLElement {

    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = templateFn({mobile: false});
    }

}

window.customElements.define('byu-header', BYUHeader);
window.BYUHeader = BYUHeader;

