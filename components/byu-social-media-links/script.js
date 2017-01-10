(function (template) {
    'use strict';

    class BYUSocialMediaLinks extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = template;
        }

        connectedCallback() {}
    }

    window.customElements.define('byu-social-media-links', BYUSocialMediaLinks);
    window.BYUSocialMediaLinks = BYUSocialMediaLinks;

})(/* FUSE */);