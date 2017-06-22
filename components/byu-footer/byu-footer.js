'use strict';

import template from './byu-footer.html';
import * as util from 'byu-web-component-utils';

class BYUFooter extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const component = this;
        util.applyTemplate(component, 'byu-footer', template, () => {
            // always show the current year in the copyright message
            var currentYear = component.shadowRoot.querySelector("#currentYear");
            currentYear.innerHTML = new Date().getFullYear();

            // check the header for full-width or max-width attributes
            var header = document.querySelector('byu-header');
            if (header.hasAttribute('full-width')) {
                this.setAttribute('full-width', '');
            }
            else if (header.hasAttribute('max-width') && !this.hasAttribute('max-width')) {
                var w = header.getAttribute('max-width');
                this.setAttribute('max-width', w);
            }
            // if the header has a max-width attribute, or if the footer
            // has it, then apply the max width. Otherwise default to 1200px
            var w = "1200px";
            if (this.hasAttribute('max-width')) {
                w = this.getAttribute('max-width');
            }
            var innerWrapper = this.shadowRoot.querySelector('.inner-wrapper');
            var secondaryFooterContent = this.shadowRoot.querySelector('.secondary-footer-content');

            innerWrapper.style.maxWidth = w;
            innerWrapper.style.width = w;
            secondaryFooterContent.style.maxWidth = w;
            secondaryFooterContent.style.width = w;
        });
    }
}

window.customElements.define('byu-footer', BYUFooter);
window.BYUFooter = BYUFooter;
