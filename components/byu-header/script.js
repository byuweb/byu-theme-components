(function (template) {
    'use strict';

    class BYUHeader extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
        }

    }

    window.customElements.define('byu-header', BYUHeader);
    window.BYUHeader = BYUHeader;

})(/* FUSE */);