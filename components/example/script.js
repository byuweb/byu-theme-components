(function (template) {
    'use strict';

    class MyComponent extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
        }

    }

    window.customElements.define('my-component', MyComponent);

})(/* FUSE */);