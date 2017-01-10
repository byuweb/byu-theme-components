(function (template) {
    'use strict';

    class BYUFooterActionButton extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = template;
        }

        connectedCallback() {}
    }

    window.customElements.define('byu-footer-action-button', BYUFooterActionButton);
    window.BYUFooterActionButton = BYUFooterActionButton;

})(/* FUSE */);