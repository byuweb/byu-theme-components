'use strict';

import * as templateFn from "./byu-header.ejs.html";

import * as equal from "deep-equal";
import * as util from "byu-web-component-utils";
import { revert as revertIcon, transform as transformIcon } from "./icons/transformicons";

const ATTR_MOBILE_MAX_WIDTH = 'mobile-max-width';
const ATTR_FULL_WIDTH = 'full-width';
const ATTR_CONSTRAIN_TOP_BAR = 'constrain-top-bar';
const ATTR_MAX_WIDTH = 'max-width';
const ATTR_MOBILE_VIEW = 'mobile-view';
const ATTR_MENU_OPEN = 'menu-open';
const ATTR_MENU_KEEP_OPEN = 'menu-keep-open';
const ATTR_NO_MENU = 'no-menu';
const ATTR_HOME_URL = 'home-url';

const DEFAULT_MOBILE_WIDTH = '1023px';
const DEFAULT_MAX_WIDTH = '1200px';
const DEFAULT_HOME_URL = 'https://byu.edu/';

class BYUHeader extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    _render() {
        let state = {
            mobile: this.inMobileView,
        };
        if (!equal(state, this._renderState)) {
            util.applyTemplate(this, 'byu-header', templateFn(state), () => {
                this._renderState = state;
                this._addSlotListeners();
                this._notifyChildrenOfMobileState();
                this._addButtonListeners();
                this._checkIfMenuIsNeeded();
                this._applyHomeUrl();
                this._applyMaxWidth();
                this._applyMenuTransparencyListeners();
            });
        }
    }

    _canDoEs6() {
        //Template strings are a good stand-in for class syntax detection
        if (!String.raw) return false;

        //And, we'll fall back to hacky IE detection, just in case.
        var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
        return !isIE11;
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
        else {
            this.removeAttribute('left-align');
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
                this._applyMenuTransparencyListeners();
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

    _showOutdatedBrowserMessage(show) {
        const header = this;
        let container = header.shadowRoot.querySelector('.menu-ie11-outdated');
        if (!container && show) {
            container = document.createElement('div');
            container.className = 'menu-ie11-outdated ie11-outdated-hidden';
            container.innerHTML = '<div class="menu-ie11-outdated-label">' +
                '  You are using an out-dated browser. BYU support for this browser is ending. Please <a href="http://webcommunity.byu.edu/supported-browsers" target="_blank">download a new browser</a>.' +
                '</div>';

            const closeButton = document.createElement('button');
            closeButton.innerHTML = '&times;'
            closeButton.addEventListener('click', function() {
                document.cookie = 'ie11outdated=true; max-age=3600'
                header._showOutdatedBrowserMessage(false)
            });
            container.appendChild(closeButton);

            header.shadowRoot.appendChild(container);
            container.style.marginTop = '-' + container.offsetHeight + 'px';
        }
        if (container) {
            const classes = container.className.split(/ +/);
            const index = classes.indexOf('ie11-outdated-hidden');
            if (!show && index === -1) {
                container.style.marginTop = '-' + container.offsetHeight + 'px';
                classes.push('ie11-outdated-hidden');
            } else if (show && index !== -1) {
                container.style.marginTop = '0';
                classes.splice(index, 1);
            }
            container.className = classes.join(' ');
        }
    }

    connectedCallback() {

        //This is a hack to ensure that the right defaults get applied.
        this.mobileMaxWidth = this.mobileMaxWidth;
        this._applyMobileWidth();
        this._render();
        this.maxWidth = this.maxWidth;

        const header = this;
        setTimeout(function() {
            const menu = header.shadowRoot.querySelector('#mobileMenu');
            if (menu) menu.addEventListener('click', function openMenuClickHandler() {
                console.log(menu.innerHTML);
                if (header.hasAttribute(ATTR_MOBILE_VIEW) && header.hasAttribute(ATTR_MENU_OPEN) && !header.hasAttribute(ATTR_MENU_KEEP_OPEN)) {
                    header.removeAttribute(ATTR_MENU_OPEN);
                }
            });

            // detect whether to show ie 11 outdated message
            if (!header._canDoEs6() && document.cookie.replace(/(?:(?:^|.*;\s*)ie11outdated\s*=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
                header._showOutdatedBrowserMessage(true);
            }
        }, 0);
    }

    static get observedAttributes() {
        return [ATTR_MOBILE_MAX_WIDTH, ATTR_MOBILE_VIEW, ATTR_MENU_OPEN, ATTR_HOME_URL, ATTR_MAX_WIDTH, ATTR_CONSTRAIN_TOP_BAR];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
            case ATTR_MOBILE_MAX_WIDTH:
                this._applyMobileWidth();
                return;
            case ATTR_CONSTRAIN_TOP_BAR:
            case ATTR_MAX_WIDTH:
                this._applyMaxWidth();
                return;
            case ATTR_MOBILE_VIEW:
                this._render();
                return;
            case ATTR_MENU_OPEN:
                this._applyMenuOpen();
                return;
            case ATTR_HOME_URL:
                this._applyHomeUrl();
                return;
        }
    }

    _applyMenuOpen() {
        let menu = this.shadowRoot.querySelector('#mobileMenu');
        if (!menu) return;
        if (this.menuOpen) {
            menu.style.maxHeight = menu.scrollHeight + 'px';
            this.classList.add('byu-header-menu-open');
            transformIcon(this.shadowRoot.querySelector('.mobile-menu-button'));
        } else {
            menu.style.maxHeight = null;
            this.classList.remove('byu-header-menu-open');
            revertIcon(this.shadowRoot.querySelector('.mobile-menu-button'));
        }
    }

    _applyHomeUrl() {
        let aTag = this.shadowRoot.querySelector('#home-url');
        if (aTag) {//Filter out cases where we haven't fully initialized yet
            aTag.setAttribute('href', this.homeUrl);
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

    get maxWidth() {
        return this.getAttribute(ATTR_MAX_WIDTH) || DEFAULT_MAX_WIDTH;
    }

    set maxWidth(val) {
        if (val) {
            this.setAttribute(ATTR_MAX_WIDTH, val);
        } else {
            this.setAttribute(ATTR_MAX_WIDTH, DEFAULT_MAX_WIDTH);
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

    get keepMenuOpen() {
        return this.hasAttribute(ATTR_MENU_KEEP_OPEN);
    }

    set keepMenuOpen(val) {
        if (val) {
            this.setAttribute(ATTR_MENU_KEEP_OPEN, '');
        } else {
            this.removeAttribute(ATTR_MENU_KEEP_OPEN);
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
        return this.getAttribute(ATTR_HOME_URL) || DEFAULT_HOME_URL;
    }

    set homeUrl(val) {
        this.setAttribute(ATTR_HOME_URL, val);
    }

    get constrainTopBar() {
        return this.hasAttribute(ATTR_CONSTRAIN_TOP_BAR);
    }

    set constrainTopBar(value) {
        if (value) {
            this.setAttribute(ATTR_CONSTRAIN_TOP_BAR, '');
        } else {
            this.removeAttribute(ATTR_CONSTRAIN_TOP_BAR);
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

    _applyMaxWidth() {
        if (!this.inMobileView) {
            let constrain = this.constrainTopBar;
            let maxWidth = this.maxWidth;
            let needsWidthSetting = this.shadowRoot.querySelectorAll('.needs-width-setting');
            needsWidthSetting.forEach(element => {
               if (element.classList.contains('stretches') && !constrain) {
                   element.style.maxWidth = null;
                   return;
               }
               element.style.maxWidth = maxWidth;
            });
        }
        let desiredQuery = this.maxWidthMediaQuery;
        let q = this._maxWidthQuery;
        if (q) {
            if (q.media === desiredQuery) {
                //Nothing has changed, bail!
                return;
            } else {
                q.removeListener(this._maxWidthQueryListener);
                this._maxWidthQuery = null;
            }
        }
        this._maxWidthQuery = q = window.matchMedia(desiredQuery);
        this._maxWidthQueryListener = this._handleMaxWidthChange.bind(this);

        q.addListener(this._maxWidthQueryListener);
        this._maxWidthQueryListener(q);
    }

    _handleMaxWidthChange(mql) {
        if (mql.matches) {
            this.classList.add('below-max-width');
        }
        else {
            this.classList.remove('below-max-width');
        }
    }

    get maxWidthMediaQuery() {
        return `(max-width: ${this.maxWidth})`;
    }

    _applyMenuTransparencyListeners() {
        let navSlot = this.shadowRoot.querySelector('#navbarMenu');
        let assigned = navSlot.assignedNodes().filter(n => n.nodeType === Node.ELEMENT_NODE);
        if (assigned.length === 0) {
            this._applyMenuTransparency(null);
            return
        }
        let menu = assigned[0];
        if (!menu.__byu_header_transparency_listener) {
            let obs = new MutationObserver((e) => {
                this._applyMenuTransparency(menu);
            });
            //noinspection JSCheckFunctionSignatures
            obs.observe(menu, {attributes: true, attributeFilter: ['class']});
            menu.__byu_header_transparency_listener = obs;
        }
        this._applyMenuTransparency(menu);
    }

    _applyMenuTransparency(element) {
        let transparent = element && element.classList.contains('transparent');
        if (transparent) {
            //Can't use .toggle thanks to IE 11. Thanks, IE!
            this.classList.add('menu-transparent');
        } else {
            this.classList.remove('menu-transparent');
        }
    }

}

window.customElements.define('byu-header', BYUHeader);
window.BYUHeader = BYUHeader;
