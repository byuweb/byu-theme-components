(function (template) {
    'use strict';

    class ByuTopBar extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
        }

    }

    window.customElements.define('byu-top-bar', ByuTopBar);
    window.ByuTopBar = ByuTopBar;

})(/* FUSE */);