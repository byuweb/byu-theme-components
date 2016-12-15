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
(function (template) {
    'use strict';

    var store = new WeakMap();

    class ByuSearch extends HTMLElement {

        static get observedAttributes() {
            return ['placeholder', 'value'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'placeholder':
                    this.shadowRoot.querySelector('input').setAttribute('placeholder', newValue);
                    break;
                case 'value':
                    store.set(this, getInputValue(this));
                    break;
            }
        }

        constructor() {
            super(); // always call super first

            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
        }

        connectedCallback() {
            var input = getInputElement(this, true);
            if (input) input.addEventListener('input', inputHandler);

            this.shadowRoot.querySelector('form')
                .addEventListener('submit', formSubmitHandler);

            if (this.hasAttribute('value')) this.value = this.getAttribute('value');
        }

        disconnectedCallback() {
            var input = getInputElement(this, true);
            if (input) input.removeEventListener('input', inputHandler);

            this.shadowRoot.querySelector('form')
                .removeEventListener('submit', formSubmitHandler);
        }

        get value() {
            return store.get(this);
        }

        set value(value) {
            store.set(this, '' + value);
            var input = getInputElement(this, true);
            if (input) input.value = value;
            return this;
        }

        search() {
            if (this.hasAttribute('onsearch')) evalInContext.call(this, this.getAttribute('onsearch'));

            if (this.hasAttribute('action')) {
                var form = this.shadowRoot.querySelector('form');
                var value = this.value;
                var action = this.getAttribute('action').toString().replace(/\$1/g, value);
                form.setAttribute('action', action);
                form.setAttribute('method', this.hasAttribute('method')
                    ? this.getAttribute('method')
                    : 'GET');
                if (this.hasAttribute('target')) form.setAttribute('target', this.getAttribute('target'));
                form.submit();
            }
        }

    }

    function evalInContext(string) {
        return eval(string);
    }

    function getInputValue(component) {
        var input = getInputElement(component, true);
        return input ? input.value : '';
    }

    function getInputElement(component, flatten) {
        var elements = component.shadowRoot.querySelector("#search").assignedNodes({ flatten: flatten });
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].tagName === 'INPUT') return elements[i];
        }
        return null;
    }

    function getParentComponent(el) {
        while (!(el instanceof ByuSearch)) el = el.host ? el.host : el.parentNode;
        return el;
    }

    function inputHandler(e) {
        var el = e.target;
        var component = el.tagName === 'byu-search' ? el : getParentComponent(el);
        component.value = e.target.value;
    }

    function formSubmitHandler(e) {
        if (e) e.preventDefault();
        this.parentNode.host.search();
    }

    window.customElements.define('byu-search', ByuSearch);
    window.ByuSearch = ByuSearch;

})(/* FUSE */);