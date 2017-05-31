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

import template from "./byu-search.html";
import * as util from "byu-web-component-utils";

const CLASS_SELECTED_INPUT = '__byu-search-selected-input';

const ATTR_OLD_SEARCH_HANDLER = 'onsearch';
const ATTR_SEARCH_HANDLER = 'onbyusearch';
const ATTR_SEARCH_INPUT_SELECTOR = 'search-input-selector';
const ATTR_ACTION = 'action';
const ATTR_ACTION_TARGET = 'action-target';

const ACTION_SUBMIT_FORM = 'submit-form';
const ACTION_CLICK = 'click';
const ACTION_NAVIGATE = 'navigate';

const DEFAULT_ACTION_TARGET_SUBMIT_FORM = 'form';
const DEFAULT_ACTION_TARGET_CLICK = 'button, input[type="submit"], input[type="button"]';

const EVENT_TYPE = 'byu-search';

const DEFAULT_ACTION_TARGET = {
    //If you're not familiar with this syntax (computed property names), see https://github.com/lukehoban/es6features#enhanced-object-literals
    [ACTION_SUBMIT_FORM]: DEFAULT_ACTION_TARGET_SUBMIT_FORM,
    [ACTION_CLICK]: DEFAULT_ACTION_TARGET_CLICK
};

const DEFAULT_SEARCH_INPUT_SELECTOR = 'input[type="search"], input[type="text"]';

class ByuSearch extends HTMLElement {

    constructor() {
        super(); // always call super first
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        util.applyTemplate(this, 'byu-search', template, () => {
            this._initialized = true;

            this._input = lookupAndConfigureInputElement(this, this.searchInputSelector);

            setupButtonSearchDispatcher(this);
            setupSearchListeners(this);

            setupSlotListener(this);
        });
    }

    disconnectedCallback() {
        if (this._input) {
            teardownInputElement(this, this._input);
        }

        teardownSearchListeners(this);

    }

    search() {
        let el = this._input;
        if (!el) {
            throw new Error(`Unable to perform search; no search element matching the selector '${this.searchInputSelector}' can be found!`);
        }
        let value = el.value;
        if (!value) return;

        let event = util.createEvent(EVENT_TYPE, {search: value});

        let cancelled = !this.dispatchEvent(event);
        if (cancelled) return;

        if (this.action) {
            runPredefinedAction(this, value);
        }
    }

    static get observedAttributes() {
        return [ATTR_SEARCH_INPUT_SELECTOR];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (!this._initialized) return;
        switch (attr) {
            case ATTR_SEARCH_INPUT_SELECTOR:
                if (this._input) {
                    teardownInputElement(this, this._input);
                }

                this._input = lookupAndConfigureInputElement(this, newValue);

                return;
            //All other attrs are lazily looked up, as needed.
        }
    }

    get onbyusearch() {
        return this.getAttribute(ATTR_SEARCH_HANDLER);
    }

    set onbyusearch(value) {
        this.setAttribute(ATTR_SEARCH_HANDLER, value);
    }

    get onsearch() {
        return this.getAttribute(ATTR_OLD_SEARCH_HANDLER);
    }

    set onsearch(value) {
        this.setAttribute(ATTR_OLD_SEARCH_HANDLER, value);
    }

    set searchInputSelector(value) {
        this.setAttribute(ATTR_SEARCH_INPUT_SELECTOR, value);
    }

    get searchInputSelector() {
        return this.getAttribute(ATTR_SEARCH_INPUT_SELECTOR) || DEFAULT_SEARCH_INPUT_SELECTOR;
    }

    set action(value) {
        this.setAttribute(ATTR_ACTION, value);
    }

    get action() {
        //Defaults to null
        return this.getAttribute(ATTR_ACTION);
    }

    set actionTarget(value) {
        this.setAttribute(ATTR_ACTION_TARGET, value);
    }

    get actionTarget() {
        //Default depends on action target value
        return this.getAttribute(ATTR_ACTION_TARGET) || defaultActionTarget(this.action);
    }

    get _searchSlot() {
        return this.shadowRoot.querySelector('#search');
    }

}

window.customElements.define('byu-search', ByuSearch);
window.ByuSearch = ByuSearch;

function setupSlotListener(search) {
    search._searchSlot.addEventListener('slotchange', e => {
        handleSlotChange(search, e);
    });
}

function handleSlotChange(search, event) {
    let oldInput = search._input;
    let newInput = lookupSearchInput(search);

    if (oldInput === newInput) return;

    search._input = newInput;

    if (oldInput) {
        teardownInputElement(search, oldInput);
    }
    if (newInput) {
        setupInputElement(search, newInput);
    } else {
        console.error(`[byu-search] WARNING! Unable to find a search input element using the selector '${search.searchInputSelector}' on `, search);
    }
}

function lookupSearchInput(search, selector) {
    return util.querySelectorSlot(search._searchSlot, selector)
}

function lookupAndConfigureInputElement(search, selector) {
    let input = lookupSearchInput(search, selector);

    if (input) {
        setupInputElement(search, input);
    } else {
        console.error(`[byu-search] WARNING! Unable to find a search input element using the selector '${selector}' on `, search);
    }
    return input;
}

function setupInputElement(search, input) {
    applyStyleHelpers(search, input);
    applyA11yHelpers(search, input);
    setupEnterKeySearchDispatcher(search, input);
}

function teardownInputElement(search, input) {
    removeStyleHelpers(search, input);
    removeA11yHelpers(search, input);
    teardownEnterKeySearchDispatcher(search, input)
}

function runPredefinedAction(search, value) {
    let action = search.action;

    switch (action) {
        case ACTION_SUBMIT_FORM:
            runSubmitFormAction(search, value);
            break;
        case ACTION_CLICK:
            runClickAction(search, value);
            break;
        case ACTION_NAVIGATE:
            runNavigateAction(search, value);
            break;
        default:
            throw new Error(`Invalid value for ${ATTR_ACTION}: '${action}'`);
    }
}

function runSubmitFormAction(search, value) {
    let target = search.actionTarget;

    let form = util.querySelectorSlot(search._searchSlot, target);

    if (!form) {
        throw new Error(`Unable to find target for 'submit-form' action using selector '${target}'`);
    }

    if (!(form instanceof HTMLFormElement)) {
        throw new Error(`Element found by selector '${target}' must be a <form>, but was '${form.localName}'`);
    }

    form.submit();
}

function runClickAction(search, value) {
    let target = search.actionTarget;

    let button = util.querySelectorSlot(search._searchSlot, target);

    if (!button) {
        throw new Error(`Unable to find target for 'click' action using selector '${target}'`);
    }

    button.click();
}

function runNavigateAction(search, value) {
    let target = search.actionTarget;

    if (!target) {
        throw new Error('When using action="navigate", you must specify an action-target');
    }

    if (target.indexOf('${search}')) {
        console.warn(`[byu-search] WARNING: Using action="navigate" with a target that does not contain \${search} will not include the search terms in the URL.`, search);
    }

    window.location.assign(target.replace('${search}', window.encodeURIComponent(value)));
}

function applyStyleHelpers(search, input) {
    input.classList.add(CLASS_SELECTED_INPUT);
}

function removeStyleHelpers(search, input) {
    input.classList.remove(CLASS_SELECTED_INPUT);
}

// For Accessibility, it's good for us to have a title and placeholder set. So, if there isn't one, we'll set it.
function applyA11yHelpers(search, input) {
    if (input.title && input.placeholder) return;

    let helped = [];

    if (!input.title && !input.placeholder) {
        input.title = input.placeholder = 'Search';
        helped.push('title', 'placeholder');
    } else if (input.title) {
        input.placeholder = input.title;
        helped.push('placeholder');
    } else {
        input.title = input.placeholder;
        helped.push('title');
    }

    input.__byu_search_a11yHelpersApplied = helped;
}

function removeA11yHelpers(search, input) {
    let helpers = input.__byu_search_a11yHelpersApplied;
    if (!helpers) return;

    if (helpers.includes('title')) {
        input.title = null;
    }
    if (helpers.includes('placeholder')) {
        input.placeholder = null;
    }
    delete input.__byu_search_a11yHelpersApplied;
}

function setupButtonSearchDispatcher(search) {
    search.shadowRoot.querySelector('#search-button')
        .addEventListener('click', function () {
            search.search();
        });
}

function setupEnterKeySearchDispatcher(search, input) {
    let keypress = input.__byu_search_keyObserver = function (e) {
        if (e.keyCode === 13) {
            search.search();
        }
    };
    input.addEventListener('keypress', keypress, false);
}

function teardownEnterKeySearchDispatcher(search, input) {
    let keypress = input.__byu_search_keyObserver;
    if (keypress) input.removeEventListener('keypress', keypress, false);
}

function setupSearchListeners(search) {
    let handler = search.__onbyusearchHandler = function (event) {
        let name = search.onbyusearch;
        if (!name) return;
        let handler = window[name];
        if (!handler) {
            throw new Error(`Unable to find a global function named '${name}'`);
        }
        handler.call(search, event);
    };

    search.addEventListener(EVENT_TYPE, handler, false);

    let legacyHandler = search.__onsearchLegacyHandler = function (event) {
        let name = search.onsearch;
        if (!name) return;

        let handler = window[name];
        if (!handler) {
            throw new Error(`Unable to find a global function named '${name}'`);
        }
        handler.call(search, event.detail.search, event);
    };

    search.addEventListener(EVENT_TYPE, legacyHandler, false);
}

function teardownSearchListeners(search) {
    if (search.__onbyusearchHandler) {
        search.removeEventListener(EVENT_TYPE, search.__onbyusearchHandler, false);
    }
    if (search.__onsearchLegacyHandler) {
        search.removeEventListener(EVENT_TYPE, search.__onsearchLegacyHandler, false);
    }
}

function defaultActionTarget(action) {
    if (!action) return null;
    return DEFAULT_ACTION_TARGET[action];
}

