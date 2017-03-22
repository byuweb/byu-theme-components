'use strict';

import * as templateFn from "./template.ejs.html";

import * as equal from "deep-equal";
import {transform as transformIcon, revert as revertIcon} from "./icons/transformicons";

const ATTR_MOBILE_MAX_WIDTH = 'mobile-max-width';
const ATTR_MOBILE_VIEW = 'mobile-view';
const ATTR_MENU_OPEN = 'menu-open';

const DEFAULT_MOBILE_WIDTH = '1024px';

class BYUHeader extends HTMLElement {

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
    }

    _render() {
        let state = {
            mobile: this.inMobileView
        };
        if (!equal(state, this._renderState)) {
            this._shadowRoot.innerHTML = templateFn(state);
            this._renderState = state;

            this._addSlotListeners();
            this._notifyChildrenOfMobileState();
            this._addButtonListeners();
        }
    }

    _addButtonListeners() {
        if (!this.inMobileView) {
            this.menuOpen = false;
            return;
        }
        let menuButton = this.shadowRoot.querySelector('.mobile-menu-button');
        menuButton.addEventListener('click', () => this._toggleMenu())
    }

    _toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    _addSlotListeners() {
        this._findAllSlots().forEach(each => {
            each.addEventListener('slotchange', event => {
                this._notifyChildrenOfMobileState();
            });
        })
    }

    _notifyChildrenOfMobileState() {
        let kids = this._findAllDistributedChildren();
        if (this.inMobileView) {
            kids.forEach(each => {
                each.setAttribute(ATTR_MOBILE_VIEW, '');
                each.classList.add(ATTR_MOBILE_VIEW);
            });
        } else {
            kids.forEach(each => {
                each.removeAttribute(ATTR_MOBILE_VIEW);
                each.classList.remove(ATTR_MOBILE_VIEW);
            });
        }
    }

    _findAllSlots() {
        let slots = this._shadowRoot.querySelectorAll('slot');
        let arr = [];
        for (let i = 0; i < slots.length; ++i) {
            arr.push(slots[i]);
        }
        return arr;
    }

    _findAllDistributedChildren() {
        return this._findAllSlots().map(s => s.assignedNodes().filter(n => n instanceof HTMLElement))
            .reduce((agg, each) => agg.concat(each), []);
    }

    connectedCallback() {
        //This is a hack to ensure that the right defaults get applied.
        this.mobileMaxWidth = this.mobileMaxWidth;
        this._applyMobileWidth();
        this._render();
    }

    static get observedAttributes() {
        return [ATTR_MOBILE_MAX_WIDTH, ATTR_MOBILE_VIEW, ATTR_MENU_OPEN];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
            case ATTR_MOBILE_MAX_WIDTH:
                this._applyMobileWidth();
                return;
            case ATTR_MOBILE_VIEW:
                this._render();
                return;
            case ATTR_MENU_OPEN:
                this._applyMenuOpen();
                return;
        }
    }

    _applyMenuOpen() {
        let menu = this.shadowRoot.getElementById('mobileMenu');
        if (!menu) return;
        if (this.menuOpen) {
            menu.style.maxHeight = menu.scrollHeight + 'px';
            transformIcon(this.shadowRoot.querySelector('.mobile-menu-button'));
        } else {
            menu.style.maxHeight = null;
            revertIcon(this.shadowRoot.querySelector('.mobile-menu-button'));
        }
    }

    get mobileMaxWidth() {
        return this.getAttribute(ATTR_MOBILE_MAX_WIDTH);
    }

    set mobileMaxWidth(val) {
        if (val) {
            this.setAttribute(ATTR_MOBILE_MAX_WIDTH, val);
        } else {
            this.setAttribute(ATTR_MOBILE_MAX_WIDTH, DEFAULT_MOBILE_WIDTH);
        }
    }

    get inMobileView() {
        return this.hasAttribute(ATTR_MOBILE_VIEW);
    }

    set inMobileView(val) {
        if (val) {
            this.setAttribute(ATTR_MOBILE_VIEW, '');
        } else {
            this.removeAttribute(ATTR_MOBILE_VIEW);
        }
    }

    get menuOpen() {
        return this.hasAttribute(ATTR_MENU_OPEN);
    }

    set menuOpen(val) {
        if (val) {
            this.setAttribute(ATTR_MENU_OPEN, '');
        } else {
            this.removeAttribute(ATTR_MENU_OPEN);
        }
    }

    _applyMobileWidth() {
        let desiredQuery = this.mobileMediaQuery;
        let q = this._mobileQuery;
        if (q) {
            if (q.media === desiredQuery) {
                //Nothing has changed, bail!
                return;
            } else {
                q.removeListener(this._mobileQueryListener);
                this._mobileQuery = null;
            }
        }
        this._mobileQuery = q = window.matchMedia(desiredQuery);
        this._mobileQueryListener = this._handleMobileChange.bind(this);

        q.addListener(this._mobileQueryListener);
        this._mobileQueryListener(q);
    }

    _handleMobileChange(mql) {
        this.inMobileView = mql.matches;
    }

    get mobileMediaQuery() {
        return `(max-width: ${this.mobileMaxWidth})`;
    }

}

window.customElements.define('byu-header', BYUHeader);
window.BYUHeader = BYUHeader;

