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

var store = new WeakMap();

class ByuSearch extends HTMLElement {

    get value() {
        return store.get(this);
    }

    set value(value) {
        store.set(this, '' + value);
        var input = this.getInputElement(this, true);
        if (input) input.value = value;
        return this;
    }

    static get observedAttributes() {
        return ['placeholder', 'value'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'placeholder':
                this.shadowRoot.querySelector('input').setAttribute('placeholder', newValue);
                break;
            case 'value':
                store.set(this, this.getInputValue(this));
                break;
        }
    }

    constructor() {
        super(); // always call super first

        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = template;
    }

    connectedCallback() {
        var component = this;
        var input = this.getInputElement(this, true);
        if (input) {
            input.addEventListener('input', this.inputHandler);
            input.addEventListener('keypress', function (e) {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    component.search();
                }
            }, false);
        }

        if (this.hasAttribute('value')) this.value = this.getAttribute('value');
    }

    disconnectedCallback() {
        var input = this.getInputElement(this, true);
        if (input) {
            input.removeEventListener('input', this.inputHandler);
            input.removeEventListener('keypress', this.searchHandler);
        }
    }

    search() {
        if (this.hasAttribute('onsearch')) this.evalInContext.call(this, this.getAttribute('onsearch'));
    }

    evalInContext(string) {
        return eval(string);
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

    getParentComponent(el) {
        console.log(el.tagName);
        console.log(el.parentNode);
        while (!(el.tagName.toUpperCase() === 'BYU-SEARCH')) el = el.host ? el.host : el.parentNode;
        return el;
    }

    inputHandler(e) {
        var el = e.target;
        console.log(e.target.value);
        if (el) {
            var component = this;
            component.value = e.target.value;
        }
    }

    formSubmitHandler(e) {
        if (e) e.preventDefault();
        this.parentNode.host.search();
    }
}

window.customElements.define('byu-search', ByuSearch);
window.ByuSearch = ByuSearch;