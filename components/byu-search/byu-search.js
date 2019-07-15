'use strict'

import { html, css, customElement, LitElement, unsafeCSS, property } from 'lit-element'
import style from './byu-search.sass'
import * as util from 'byu-web-component-utils'

const CLASS_SELECTED_INPUT = '__byu-search-selected-input'

const ACTION_SUBMIT_FORM = 'submit-form'
const ACTION_CLICK = 'click'
const ACTION_NAVIGATE = 'navigate'

const DEFAULT_ACTION_TARGET_SUBMIT_FORM = 'form';
const DEFAULT_ACTION_TARGET_CLICK = 'button, input[type="submit"], input[type="button"]';
const DEFAULT_SEARCH_INPUT_SELECTOR = 'input[type="search"], input[type="text"]'
const DEFAULT_PLACEHOLDER = 'Search'
const DEFAULT_ACTION_TARGET = {
  [ACTION_SUBMIT_FORM]: DEFAULT_ACTION_TARGET_SUBMIT_FORM,
  [ACTION_CLICK]: DEFAULT_ACTION_TARGET_CLICK
};

const EVENT_TYPE = 'byu-search'

@customElement('byu-search')
export class BYUSearch extends LitElement {
  @property({ type: String }) placeholder = 'Search'
  @property({ type: String }) searchInputSelector = DEFAULT_SEARCH_INPUT_SELECTOR
  @property({ type: String }) action = null
  @property({ type: String }) actionTarget = null
  @property({ type: String }) onbyusearch = null

  get _searchSlot() {
    return this.shadowRoot.querySelector('#search');
  }

  firstUpdated (_changedProperties) {
    const searchElSlot = this.shadowRoot.querySelector('#search')
    if (searchElSlot.assignedNodes().length > 0) {
      this.shadowRoot.querySelector('#byu-site-search-label').remove()
      this.shadowRoot.querySelector('#byu-site-search').remove()
    }

    this._input = this._lookupAndConfigureInputElement(this, this.searchInputSelector)
    this._hideExtraElements() // Hide extra inputs and buttons
    if (this.actionTarget === null) {
      this.actionTarget = this._defaultActionTarget(this.action)
    }
    this._setupSearchListeners(this)
  }

  search () {
    let el = this._input
    if (!el) {
      throw new Error(`Unable to perform search; no search element matching the selector '${this.searchInputSelector}' can be found!`)
    }
    let value = el.value
    if (!value) return

    let event = new CustomEvent(EVENT_TYPE, {
      detail: {
        search: value
      },
      bubbles: true,
      composed: true
    })

    let cancelled = !this.dispatchEvent(event)
    if (cancelled) return

    if (this.action) {
      this._runPredefinedAction(this, value)
    }
  }

  _setupSearchListeners(search) {
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
  }

  _runPredefinedAction (search, value) {
    let action = search.action

    switch (action) {
      case ACTION_SUBMIT_FORM:
        this._runSubmitFormAction(search, value)
        break
      case ACTION_CLICK:
        this._runClickAction(search, value)
        break
      case ACTION_NAVIGATE:
        this._runNavigateAction(search, value)
        break
      default:
        throw new Error(`Invalid value for action: '${action}'`)
    }
  }

  _runSubmitFormAction (search, value) {
    let target = search.actionTarget

    let form = util.querySelectorSlot(search._searchSlot, target)

    if (!form) {
      throw new Error(`Unable to find target for 'submit-form' action using selector '${target}'`)
    }

    if (!(form instanceof HTMLFormElement)) {
      throw new Error(`Element found by selector '${target}' must be a <form>, but was '${form.localName}'`)
    }

    form.submit()
  }

  _runClickAction (search, value) {
    let target = search.actionTarget

    let button = util.querySelectorSlot(search._searchSlot, target)

    if (!button) {
      throw new Error(`Unable to find target for 'click' action using selector '${target}'`)
    }

    button.click()
  }

  _runNavigateAction (search, value) {
    let target = search.actionTarget

    if (!target) {
      throw new Error('When using action="navigate", you must specify an action-target')
    }

    if (target.indexOf('${search}')) {
      console.warn(`[byu-search] WARNING: Using action="navigate" with a target that does not contain \${search} will not include the search terms in the URL.`, search)
    }

    window.location.assign(target.replace('${search}', window.encodeURIComponent(value)))
  }

  _lookupAndConfigureInputElement (search, selector) {
    let input = this.querySelector(selector) || this.shadowRoot.querySelector(selector)

    if (input) {
      this._setupInputElement(search, input)
    } else {
      console.error(`[byu-search] WARNING! Unable to find a search input element using the selector '${selector}' on `, search)
    }

    return input
  }

  _hideExtraElements () {
    const inputs = this.querySelectorAll(DEFAULT_SEARCH_INPUT_SELECTOR + ', button')
    inputs.forEach((el) => {
      if (!el.classList.contains(CLASS_SELECTED_INPUT)) {
        el.classList.add('hidden')
      }
    })
  }

  _setupInputElement (search, input) {
    this._applyStyleHelpers(search, input)
    this._applyA11yHelpers(search, input)
    this._setupEnterKeySearchDispatcher(search, input)
  }

  _setupEnterKeySearchDispatcher (search, input) {
    let keypress = input.__byu_search_keyObserver = function (e) {
      if (e.key === 'Enter') {
        search.search()
      }
    }
    input.addEventListener('keypress', keypress, false)
  }

  _applyStyleHelpers (search, input) {
    input.classList.add(CLASS_SELECTED_INPUT)
  }

  // For Accessibility, it's good for us to have a title and placeholder set. So, if there isn't one, we'll set it.
  _applyA11yHelpers (search, input) {
    if (input.title && input.placeholder) return

    let helped = []

    if (!input.placeholder) {
      input.placeholder = search.placeholder || input.title || DEFAULT_PLACEHOLDER
      helped.push('placeholder')
    }
    if (!input.title) {
      input.title = input.placeholder || search.placeholder || DEFAULT_PLACEHOLDER
      helped.push('title')
    }

    input.__byu_search_a11yHelpersApplied = helped
  }

  _defaultActionTarget(action) {
    if (!action) return null;
    return DEFAULT_ACTION_TARGET[action];
  }

  /* --- RENDER COMPONENT --- */

  static get styles () {
    return css`${unsafeCSS(style)}`
  }

  render () {
    return html`
<div id="search-form">
    <div class="byu-search">
        <slot id="search">
            <label class="byu-search-label" for="site-search" id="byu-site-search-label">Search</label>
            <input type="text" id="byu-site-search" name="q" aria-label="Site search" placeholder="${this.placeholder}">
        </slot>
        <button class="byu-search-btn" @click="${this.search}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <style>.st{stroke-width:10;fill:none;stroke:currentColor;stroke-linecap:round;}</style>
                <circle class="st" cx="45.5" cy="45.5" r="24.5"/><path class="st" d="M63 63l16 16"/>
            </svg>
        </button>
    </div>
</div>
    `
  }
}
