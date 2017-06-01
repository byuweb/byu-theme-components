'use strict';

import * as templateFn from "./byu-header.ejs.html";

import * as equal from "deep-equal";
import * as util from "byu-web-component-utils";
import {revert as revertIcon, transform as transformIcon} from "./icons/transformicons";

const ATTR_MOBILE_MAX_WIDTH = 'mobile-max-width';
const ATTR_MOBILE_VIEW = 'mobile-view';
const ATTR_MENU_OPEN = 'menu-open';
const ATTR_NO_MENU = 'no-menu';
const ATTR_HOME_URL = 'home-url';

const DEFAULT_MOBILE_WIDTH = '1023px';
const DEFAULT_HOME_URL = 'https://byu.edu/';

class BYUHeader extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    _render() {
        let state = {
            mobile: this.inMobileView
        };
        if (!equal(state, this._renderState)) {
            util.applyTemplate(this, 'byu-header', templateFn(state), () => {
                this._renderState = state;
                this._addSlotListeners();
                this._notifyChildrenOfMobileState();
                this._addButtonListeners();
                this._checkIfMenuIsNeeded();
                this._checkIfFullWidth();
                this._checkIfLinked();
            });
        }
    }

    _checkIfMenuIsNeeded() {
        // check whether to show the mobile menu button
        let userSlot = this.shadowRoot.querySelector("#user");
        let hasUserInfo = userSlot.assignedNodes().length !== 0;

        let menuSlot = this.shadowRoot.querySelector("#navbarMenu");
        let hasMenu = menuSlot.assignedNodes().length !== 0;

        let actionSlot = this.shadowRoot.querySelector('#actions');
        let hasActions = actionSlot.assignedNodes().length !== 0;

        this.noMenu = !(hasUserInfo || hasMenu || hasActions);

        if (menuSlot.assignedNodes().length < 4) {
            this.setAttribute('left-align', '');
        }
    }

    _checkIfFullWidth() {
        var menuSlot = this.shadowRoot.querySelector('#navbarMenu');
        if (menuSlot.assignedNodes().length > 0)
        {
            var menu = menuSlot.assignedNodes()[0];
            if (this.hasAttribute('full-width')) {
                menu.setAttribute('full-width', '');
            } else {
                menu.removeAttribute('full-width');
            }
        }
    }

    _checkIfLinked() {
        if (this.hasAttribute(ATTR_HOME_URL)) {
            this._applyHomeUrl(this.getAttribute(ATTR_HOME_URL));
        } else {
            this.setAttribute(ATTR_HOME_URL, DEFAULT_HOME_URL);
            this._applyHomeUrl(this.getAttribute(ATTR_HOME_URL));
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
                this._checkIfMenuIsNeeded();
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
        let slots = this.shadowRoot.querySelectorAll('slot');
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
        return [ATTR_MOBILE_MAX_WIDTH, ATTR_MOBILE_VIEW, ATTR_MENU_OPEN, ATTR_HOME_URL];
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
            case ATTR_HOME_URL:
                this._applyHomeUrl(newValue);
                return;
        }
    }

    _applyMenuOpen() {
        let menu = this.shadowRoot.querySelector('#mobileMenu');
        if (!menu) return;
        if (this.menuOpen) {
            menu.style.maxHeight = menu.scrollHeight + 'px';
            transformIcon(this.shadowRoot.querySelector('.mobile-menu-button'));
        } else {
            menu.style.maxHeight = null;
            revertIcon(this.shadowRoot.querySelector('.mobile-menu-button'));
        }
    }

    _applyHomeUrl(url) {
        this.homeUrl = url;
        let aTag = this.shadowRoot.querySelector('#home-url');
        aTag.setAttribute('href', this.homeUrl);
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

    get noMenu() {
        return this.hasAttribute(ATTR_NO_MENU);
    }

    set noMenu(val) {
        if (val) {
            this.setAttribute(ATTR_NO_MENU, '');
        } else {
            this.removeAttribute(ATTR_NO_MENU);
        }
    }

    get homeUrl() {
        return this.getAttribute(ATTR_HOME_URL);
    }

    set homeUrl(val) {
        if (val) {
            this.setAttribute(ATTR_HOME_URL, val);
        } else {
            this.setAttribute(ATTR_HOME_URL, DEFAULT_HOME_URL);
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
