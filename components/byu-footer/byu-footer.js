'use strict';

import template from './byu-footer.html';
import * as util from 'byu-web-component-utils';

const ATTR_FULL_WIDTH = 'full-width';
const ATTR_MAX_WIDTH = 'max-width';
const DEFAULT_MAX_WIDTH = '1200px';

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

            var header = document.querySelector('byu-header');
            var observer = new MutationObserver(function (mutations) {
                component.updateWithHeaderAttributes(header);
            });

            // configuration of the observer:
            var config = { attributes: true };
            observer.observe(header, config);
            component.updateWithHeaderAttributes(header); // run it once to get the initial values
        });
    }

    updateWithHeaderAttributes(header) {
       
        // check the header for full-width or max-width attributes
        if (header.hasAttribute(ATTR_FULL_WIDTH)) {
            this.setAttribute(ATTR_FULL_WIDTH, '');
        }
        else
        {
            this.removeAttribute(ATTR_FULL_WIDTH);
        }

        var w = DEFAULT_MAX_WIDTH;
        if (header.hasAttribute(ATTR_MAX_WIDTH)) {
            w = header.getAttribute(ATTR_MAX_WIDTH);
        }
        this.setAttribute(ATTR_MAX_WIDTH, w);
        
        var needsWidthSetting = this.shadowRoot.querySelectorAll('.needs-width-setting');
        for (var i = 0; i < needsWidthSetting.length; i++)
        {
            needsWidthSetting[i].style.maxWidth = w;
            needsWidthSetting[i].style.maxWidth = w;
        }
    }
}

window.customElements.define('byu-footer', BYUFooter);
window.BYUFooter = BYUFooter;
