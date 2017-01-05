(function (template) {
    'use strict';

    class BYUFooterColumn extends HTMLElement {

        static get observedAttributes() {
            return['column-header'];
        }

        get columnHeader() {
            return this.hasAttribute('column-header');
        }

        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = template;
        }

        connectedCallback() {
            if (this.columnHeader)
                this.shadowRoot.querySelector('#header').innerText = this.getAttribute('column-header');
        }
    }

    window.customElements.define('byu-footer-column', BYUFooterColumn);
    window.BYUFooterColumn = BYUFooterColumn;

})(/* FUSE */);