/**
 *  @license
 *    Copyright 2016 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
'use strict';

import * as template from './template.html';
import * as util from 'byu-web-component-utils';

const ATTR_SEARCH_HANDLER = 'onsearch';

class ByuSearch extends HTMLElement {

    static get observedAttributes() {
        return [ATTR_SEARCH_HANDLER];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
            case ATTR_SEARCH_HANDLER:
                this.searchHandler = newValue;
                return;
        }
    }

    constructor() {
        super(); // always call super first
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {

        const component = this;

        util.applyTemplate(this, 'byu-search', template, () => {

            var input = this.getInputElement(this, true);
            if (input) {
                input.addEventListener('input', this.inputHandler);
                input.addEventListener('keypress', function (e) {
                    if (e.keyCode === 13) {
                        e.preventDefault();
                        component.search(component);
                    }
                }, false);
            }

            if (this.hasAttribute('onsearch')) this.searchHandler = this.getAttribute('onsearch');
            this.shadowRoot.querySelector('#search-button').addEventListener('click', function () {
                component.search(component);
            });
        });
    }

    disconnectedCallback() {
        var input = this.getInputElement(this, true);
        if (input) {
            input.removeEventListener('input', this.inputHandler);
            input.removeEventListener('keypress', this.searchHandler);
        }
    }

    search(component) {
        if (component.hasAttribute('onsearch'))
            component.evalInContext(component.getAttribute('onsearch'), component.getInputValue(component));
    }

    evalInContext(fnString, value) {
        return eval(fnString + "('" + value + "')");
    }

    getInputValue(component) {
        var input = this.getInputElement(component, true);
        return input ? input.value : '';
    }

    getInputElement(component, flatten) {
        var elements = component.shadowRoot.querySelector("#search").assignedNodes({ flatten: flatten });
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].tagName === 'INPUT') return elements[i];
        }
        return null;
    }

    inputHandler(e) {
        var el = e.target;
        if (el) {
            var component = this;
            component.value = e.target.value;
        }
    }
}

window.customElements.define('byu-search', ByuSearch);
window.ByuSearch = ByuSearch;