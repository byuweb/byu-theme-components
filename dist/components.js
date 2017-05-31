/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"]; });
/**
 * Created by ThatJoeMoore on 2/14/17
 */







/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);






class BYUFooterActionButton extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-footer-action-button', __WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html___default.a);
    }
}

window.customElements.define('byu-footer-action-button', BYUFooterActionButton);
window.BYUFooterActionButton = BYUFooterActionButton;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);





class BYUFooterColumn extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-footer-column', __WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html___default.a);
    }
}

window.customElements.define('byu-footer-column', BYUFooterColumn);
window.BYUFooterColumn = BYUFooterColumn;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_footer_html__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_footer_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_footer_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);





class BYUFooter extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        const component = this;
        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](component, 'byu-footer', __WEBPACK_IMPORTED_MODULE_0__byu_footer_html___default.a, () => {
            // always show the current year in the copyright message
            var currentYear = component.shadowRoot.querySelector("#currentYear");
            currentYear.innerHTML = new Date().getFullYear();
        });
    }
}

window.customElements.define('byu-footer', BYUFooter);
window.BYUFooter = BYUFooter;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_deep_equal__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_deep_equal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_deep_equal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_byu_web_component_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icons_transformicons__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icons_transformicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__icons_transformicons__);








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
        if (!__WEBPACK_IMPORTED_MODULE_1_deep_equal__(state, this._renderState)) {
            __WEBPACK_IMPORTED_MODULE_2_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-header', __WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html__(state), () => {
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
                this._applyHomeUrl();
                return;
        }
    }

    _applyMenuOpen() {
        let menu = this.shadowRoot.querySelector('#mobileMenu');
        if (!menu) return;
        if (this.menuOpen) {
            menu.style.maxHeight = menu.scrollHeight + 'px';
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__icons_transformicons__["transform"])(this.shadowRoot.querySelector('.mobile-menu-button'));
        } else {
            menu.style.maxHeight = null;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__icons_transformicons__["revert"])(this.shadowRoot.querySelector('.mobile-menu-button'));
        }
    }

    _applyHomeUrl(url) {
        this.homeUrl = url;
        let aTag = this.shadowRoot.querySelector('#homeUrl');
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
        return this.hasAttribute(ATTR_HOME_URL);
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


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_menu_html__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_menu_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_menu_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);




class BYUMenu extends HTMLElement {

    get showMore() {
        return isShowingMoreMenu(this);
    }

    set showMore(show) {
        const el = this.shadowRoot.querySelector('.byu-menu-more-menu');
        if (show && !isShowingMoreMenu(this)) enableHideClick(this);
        toggleClass(el, 'byu-menu-more-expanded', show);
    }

    constructor() {
        super(); // always call super first
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const component = this;

        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-menu', __WEBPACK_IMPORTED_MODULE_0__byu_menu_html___default.a, () => {
            updateMoreMenuState(this);
            addSlotListeners(this);

            // when the more button is clicked then show the more menu
            this.shadowRoot.querySelector('.byu-menu-more').addEventListener('click', function () {
                component.showMore = true;
            });
        });
    }
}

function addSlotListeners(component) {
    component.shadowRoot.querySelector('slot')
        .addEventListener('slotchange', e => updateMoreMenuState(component));
}

function enableHideClick(component) {

    const fn = function () {
        document.removeEventListener('click', fn);
        component.showMore = false;
    };

    setTimeout(function () {
        document.addEventListener('click', fn);
    });
}

function hasClass(el, className) {
    const classes = el.className.split(/ +/);
    return classes.indexOf(className) !== -1;
}

function isShowingMoreMenu(component) {
    return hasClass(component.shadowRoot.querySelector('.byu-menu-more-menu'), 'byu-menu-more-expanded');
}

function toggleClass(el, className, value) {
    const classes = el.className.split(/ +/);
    const index = classes.indexOf(className);
    const exists = index !== -1;
    const setTo = arguments.length > 2 ? arguments[2] : !exists;
    if (setTo && !exists) {
        classes.push(className);
    } else if (!setTo && exists) {
        classes.splice(index, 1);
    }
    el.className = classes.join(' ');
}

function updateMoreMenuState(component) {
    const children = component.children;
    const length = component.children.length;
    const hasOverflow = length > 6;
    const nav = component.shadowRoot.querySelector('.outer-nav');

    if (nav) toggleClass(nav, 'byu-menu-more-visible', hasOverflow);

    if (hasOverflow) {
        for (let i = 5; i < length; i++) {
            children[i].setAttribute('slot', 'more');
        }
    } else if (length === 6) {
        children[5].setAttribute('slot', '');
    }

    if (length < 4) {
        component.setAttribute('left-align', '');
    }
}

window.customElements.define('byu-menu', BYUMenu);
window.BYUMenu = BYUMenu;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_search_html__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_search_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_search_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);
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

        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-search', __WEBPACK_IMPORTED_MODULE_0__byu_search_html___default.a, () => {

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
        if (component.hasAttribute('onsearch')) {
            component.runCallback(component.getAttribute('onsearch'), component.getInputValue(component));
        }
    }

    runCallback(fnString, value) {
        let func = window[fnString];
        if (!func) {
            console.error("Cannot find search callback function", fnString);
            return;
        }
        return func.call(this, value);
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

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);




const SOCIAL_NAMES = {
    'facebook': 'Facebook',
    'twitter': 'Twitter',
    'instagram': 'Instagram',
    'youtube': 'YouTube',
    'pinterest': 'Pinterest',
    'google-plus': 'Google+',
    'googleplus': 'Google+',
    'gplus': 'Google+',
    'linkedin': 'LinkedIn',
    'rss': 'RSS',
    'snapchat': 'Snapchat'
};

const SOCIAL_IDS = Object.getOwnPropertyNames(SOCIAL_NAMES);

class BYUSocialMediaLinks extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-social-media-links', __WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html___default.a, () => {
            let main = this.shadowRoot.querySelector('#social-main');
            applyTitleToChildren(main);

            SOCIAL_IDS.forEach(id => {
                const slot = this.shadowRoot.querySelector('#social-deprecated-' + id);
                if (!slot) return;

                applyTitleToChildren(slot);
                //We're still supporting the old way, but it's deprecated and people should move on.
                if (slot.assignedNodes().length > 0) {
                    console.log(`[WARNING] byu-social-media-links: deprecated usage of slot="${id}". Replace with class="${id}":`, this);
                }
            });
        });
    }
}

window.customElements.define('byu-social-media-links', BYUSocialMediaLinks);
window.BYUSocialMediaLinks = BYUSocialMediaLinks;

function applyTitleToChildren(slotElement) {
    let kids = slotElement.assignedNodes();
    kids.filter(k => k instanceof HTMLElement)
    //Only grab the ones that don't already have a title
        .filter(k => !k.title)
        .forEach(kid => {
            let kind = detectSocialKind(kid);
            if (!kind) {
                return;
            }
            //The spaces are a hack to avoid triggering adblockplus.
            kid.title = ' ' + SOCIAL_NAMES[kind] + ' ';
        });
}

function detectSocialKind(element) {
    if (element.hasAttribute('slot')) return element.getAttribute('slot');
    for (let i = 0; i < SOCIAL_IDS.length; i++) {
        let id = SOCIAL_IDS[i];
        if (element.classList.contains(id)) {
            return id;
        }
    }
    return null;
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_user_info_html__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_user_info_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_user_info_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);
/**
 * Created by ThatJoeMoore on 11/7/16.
 */





class ByuUserInfo extends HTMLElement {

    constructor() {
        super();

        let shadowRoot = this.attachShadow({mode: 'open'});
       
    }


    static get observedAttributes() {
        // return ['login-url'];
    }

    attributeChangedCallback(attr, oldval, newval) {
        // switch (attr) {
        //     case 'login-url':
        //         this.loginUrl = newval;
        //         break;
        // }
    }

    connectedCallback() {
         __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-user-info', __WEBPACK_IMPORTED_MODULE_0__byu_user_info_html___default.a, () => {
            this._addSlotListeners();
            this._addAriaAttributes();
         });       
    }

    _addSlotListeners() {

        this._setHasUser();
        const userSlot = this.shadowRoot.querySelector('#user-name');
        userSlot.addEventListener('slotchange', e => {
            this._setHasUser();
        });
    }

    _setHasUser() {
        const userSlot = this.shadowRoot.querySelector('#user-name');
        if (userSlot.assignedNodes().length > 0) {
            this.setAttribute('has-user', '');
        }
        else {
            this.removeAttribute('has-user');
        }
    }

    _addAriaAttributes() {
        this.setAttribute('role', 'button');
    }

}

window.customElements.define('byu-user-info', ByuUserInfo);
window.ByuUserInfo = ByuUserInfo;



/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by ThatJoeMoore on 2/24/17
 */


(function (root, factory) {
    if (true) {
        // AMD module
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        // CommonJS-like environment (i.e. Node)
        module.exports = factory();
    } else {
        // Browser global
        root.transformicons = factory();
    }
}(this || window, function () {

    // ####################
    // MODULE TRANSFORMICON
    // ####################
    'use strict';

    var
        tcon = {}, // static class
        _transformClass = 'tcon-transform',

        // const
        DEFAULT_EVENTS = {
            transform : ['click'],
            revert : ['click']
        };

    // ##############
    // private methods
    // ##############

    /**
     * Normalize a selector string, a single DOM element or an array of elements into an array of DOM elements.
     * @private
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements
     * @returns {array} Array of DOM elements
     */
    var getElementList = function (elements) {
        if (typeof elements === 'string') {
            return Array.prototype.slice.call(document.querySelectorAll(elements));
        } else if (typeof elements === 'undefined' || elements instanceof Array) {
            return elements;
        } else {
            return [elements];
        }
    };

    /**
     * Normalize a string with eventnames separated by spaces or an array of eventnames into an array of eventnames.
     * @private
     *
     * @param {(string|array)} elements - String with eventnames separated by spaces or array of eventnames
     * @returns {array} Array of eventnames
     */
    var getEventList = function (events) {
        if (typeof events === 'string') {
            return events.toLowerCase().split(' ');
        } else {
            return events;
        }
    };

    /**
     * Attach or remove transformicon events to one or more elements.
     * @private
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
     * @param {object} [events] - An Object containing one or more special event definitions
     * @param {boolean} [remove=false] - Defines wether the listeners should be added (default) or removed.
     */
    var setListeners = function (elements, events, remove) {
        var
            method = (remove ? 'remove' : 'add') + 'EventListener',
            elementList = getElementList(elements),
            currentElement = elementList.length,
            eventLists = {};

        // get events or use defaults
        for (var prop in DEFAULT_EVENTS) {
            eventLists[prop] = (events && events[prop]) ? getEventList(events[prop]) : DEFAULT_EVENTS[prop];
        }

        // add or remove all events for all occasions to all elements
        while(currentElement--) {
            for (var occasion in eventLists) {
                var currentEvent = eventLists[occasion].length;
                while(currentEvent--) {
                    elementList[currentElement][method](eventLists[occasion][currentEvent], handleEvent);
                }
            }
        }
    };

    /**
     * Event handler for transform events.
     * @private
     *
     * @param {object} event - event object
     */
    var handleEvent = function (event) {
        tcon.toggle(event.currentTarget);
    };

    // ##############
    // public methods
    // ##############

    /**
     * Add transformicon behavior to one or more elements.
     * @public
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
     * @param {object} [events] - An Object containing one or more special event definitions
     * @param {(string|array)} [events.transform] - One or more events that trigger the transform. Can be an Array or string with events seperated by space.
     * @param {(string|array)} [events.revert] - One or more events that trigger the reversion. Can be an Array or string with events seperated by space.
     * @returns {transformicon} transformicon instance for chaining
     */
    tcon.add = function (elements, events) {
        setListeners(elements, events);
        return tcon;
    };

    /**
     * Remove transformicon behavior from one or more elements.
     * @public
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
     * @param {object} [events] - An Object containing one or more special event definitions
     * @param {(string|array)} [events.transform] - One or more events that trigger the transform. Can be an Array or string with events seperated by space.
     * @param {(string|array)} [events.revert] - One or more events that trigger the reversion. Can be an Array or string with events seperated by space.
     * @returns {transformicon} transformicon instance for chaining
     */
    tcon.remove = function (elements, events) {
        setListeners(elements, events, true);
        return tcon;
    };

    /**
     * Put one or more elements in the transformed state.
     * @public
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be transformed
     * @returns {transformicon} transformicon instance for chaining
     */
    tcon.transform = function (elements) {
        getElementList(elements).forEach(function(element) {
            element.classList.add(_transformClass);
        });
        return tcon;
    };

    /**
     * Revert one or more elements to the original state.
     * @public
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be reverted
     * @returns {transformicon} transformicon instance for chaining
     */
    tcon.revert = function (elements) {
        getElementList(elements).forEach(function(element) {
            element.classList.remove(_transformClass);
        });
        return tcon;
    };

    /**
     * Toggles one or more elements between transformed and original state.
     * @public
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
     * @returns {transformicon} transformicon instance for chaining
     */
    tcon.toggle = function (elements) {
        getElementList(elements).forEach(function(element) {
            tcon[element.classList.contains(_transformClass) ? 'revert' : 'transform'](element);
        });
        return tcon;
    };

    return tcon;
}));

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_header_byu_header_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__byu_menu_byu_menu_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__byu_search_byu_search_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__byu_user_info_byu_user_info_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__byu_footer_byu_footer_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__byu_footer_column_byu_footer_column_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__byu_footer_action_button_byu_footer_action_button_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__byu_social_media_links_byu_social_media_links_js__ = __webpack_require__(8);
/**
 * Created by ThatJoeMoore on 2/18/17
 */


/*
 * Header Bits
 */





/*
 * Footer Bits
 */








/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hash_sum__);
/* harmony export (immutable) */ __webpack_exports__["a"] = applyTemplate;
/*
 *  @license
 *    Copyright 2017 Brigham Young University
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
 */




const TEMPLATE_RENDERED_CLASS = 'byu-component-rendered';

function applyTemplate(element, elementName, template, callback) {
    let sum = __WEBPACK_IMPORTED_MODULE_0_hash_sum___default()(template);

    let elSettings = element.__byu_webCommunity_components = element.__byu_webCommunity_components || {};
    if (elSettings.templateHash === sum) {
        //Nothing has changed in the element.  Don't replace the DOM, don't fire the callback.
        return;
    }
    elSettings.templateHash = sum;

    if (window.ShadyCSS) {
        applyTemplateShady(element, elementName, template, callback, sum);
    } else {
        applyTemplateNative(element, template, callback);
    }
}

function applyTemplateShady(element, elementName, template, callback, sum) {
    let templateId = '__byu-custom-element-template_' + elementName + '_' + sum;
    let templateElement = document.head.querySelector('template#' + templateId);
    if (!templateElement) {
        templateElement = document.createElement('template');
        templateElement.id = templateId;
        templateElement.innerHTML = template;
        document.head.appendChild(templateElement);
        ShadyCSS.prepareTemplate(templateElement, elementName);
    }
    if (ShadyCSS.styleElement) {
        ShadyCSS.styleElement(element);
    } else if (ShadyCSS.applyStyle) {
        ShadyCSS.applyStyle(element);
    } else {
        throw new Error('ShadyCSS is not properly defined: no styleElement or applyStyle!');
    }
    let imported = document.importNode(templateElement.content, true);
    let shadow = element.shadowRoot;
    //It'd be nice if we could just diff the DOM and replace what changed between templates, but that might lead to
    // event listeners getting applied twice.  Easier to just clear out the shadow DOM and replace it.
    while (shadow.firstChild) {
        shadow.removeChild(shadow.firstChild);
    }
    shadow.appendChild(imported);
    setTimeout(function() {
        runAfterStamping(element, callback);
    });
}

function applyTemplateNative(element, template, callback) {
    element.shadowRoot.innerHTML = template;
    runAfterStamping(element, callback);
}

function runAfterStamping(element, callback) {
    element.classList.add(TEMPLATE_RENDERED_CLASS);
    if (callback) {
        callback();
    }
}



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ":host{background-color:#666;font-family:Vitesse A,Vitesse B,Georgia,serif;font-size:20px!important;color:#fff;display:inline-block;text-align:center;line-height:2.1em;height:45px;width:auto;min-width:125px;margin:10px 0 20px;-webkit-box-shadow:0 3px 5px 0 rgba(0,0,0,.35);-moz-box-shadow:0 3px 5px 0 rgba(0,0,0,.35);box-shadow:0 3px 5px 0 rgba(0,0,0,.35)}.wrapper ::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;font-weight:400!important;color:#fff!important;display:inline-block!important;position:relative!important;height:100%!important;width:100%!important;margin:0 20px!important;left:-20px!important;cursor:pointer!important;vertical-align:middle!important}.wrapper ::slotted(a){text-decoration:none!important}", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ":host{padding:0 15px;box-sizing:border-box;float:left}.header{width:100%}.header ::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;text-transform:uppercase!important;color:#002e5d!important;font-size:20px!important;border-bottom:1px solid #c5c5c5!important;padding-bottom:3px!important;white-space:nowrap!important;font-weight:400!important;width:100%;display:inline-block}.content ::slotted(:not(byu-footer-action-button)){font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-size:13px!important;font-weight:400!important;color:#666!important;position:relative;top:-11px;line-height:1.42857143}.content ::slotted(a){line-height:35px;text-decoration:none!important;outline:none!important}.content ::slotted(a:hover){cursor:pointer;color:#002e5d!important}", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".blue-footer{background-color:#002e5d;text-align:center;font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:400;font-size:12px;color:#fff;height:80px;width:100%;display:flex;justify-content:center;align-items:center}.blue-footer a{text-decoration:none;color:#fff}.blue-footer a:hover{color:#fff}.inner-wrapper{max-width:1200px;margin-top:-10px}.university-logo{width:450px;max-width:100vw;box-sizing:border-box;margin-bottom:-10px;height:40px}.secondary-footer{height:auto;background-color:#e5e5e5;text-align:center;display:flex;justify-content:center;flex:1}.secondary-footer-content ::slotted(*){display:inline-block;text-align:left;vertical-align:top}.secondary-footer-content{width:1200px!important;margin:0 15px}:host([full-width]) .inner-wrapper{max-width:100%}:host([full-width]) .secondary-footer-content{width:100%}@media (max-width:767px){.secondary-footer-content ::slotted(*){width:100%}.secondary-footer-content ::slotted(:last-child){padding-bottom:30px}.secondary-footer-content ::slotted(:first-child){padding-top:10px}.secondary-footer-content ::slotted(*){padding-left:0!important;padding-right:0!important}}@media (min-width:768px) and (max-width:1199px){.secondary-footer-content ::slotted(*){width:50%}.secondary-footer-content ::slotted(:nth-child(n+3)){padding-bottom:30px}.secondary-footer-content ::slotted(:nth-child(-n+2)){padding-top:10px}.secondary-footer-content ::slotted(:nth-child(odd)){padding-left:0!important}.secondary-footer-content ::slotted(:nth-child(2n)){padding-right:0!important}}@media (min-width:1200px){.secondary-footer-content ::slotted(*){width:25%;padding-top:10px;padding-bottom:30px}.secondary-footer-content ::slotted(:first-child){padding-left:0!important}.secondary-footer-content ::slotted(:last-child){padding-right:0!important}}", ""]);

// exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".tcon{appearance:none;border:none;cursor:pointer;display:flex;justify-content:center;align-items:center;height:24px;transition:.15s;user-select:none;width:17px;background:transparent;outline:none;-webkit-tap-highlight-color:transparent;padding:0!important}.tcon>*{display:block}.tcon:focus,.tcon:hover{outline:none}.tcon::-moz-focus-inner{border:0}.tcon-menu__lines{width:24px;position:relative}.tcon-menu__lines,.tcon-menu__lines:after,.tcon-menu__lines:before{display:inline-block;border-radius:1px;height:3px;transition:.15s;background:#fff}.tcon-menu__lines:after,.tcon-menu__lines:before{width:24px;content:\"\";position:absolute;left:0;transform-origin:1.71429px center;width:100%}.tcon-menu__lines:before{top:6px}.tcon-menu__lines:after{top:-6px}.tcon-transform .tcon-menu__lines{transform:scale3d(.8,.8,.8)}.tcon-menu--xbutterfly{width:auto}.tcon-menu--xbutterfly .tcon-menu__lines:after,.tcon-menu--xbutterfly .tcon-menu__lines:before{transform-origin:50% 50%;transition:top .3s ease .6s,transform .3s ease}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines{background:transparent}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:after,.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:before{top:0;transition:top .3s ease,transform .3s ease .5s;width:24px}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:before{transform:rotate(45deg)}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:after{transform:rotate(-45deg)}.tcon-visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.tcon-visuallyhidden:active,.tcon-visuallyhidden:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.byu-header-actions{display:flex;align-items:center;height:34px}.byu-header-actions ::slotted(*){text-decoration:none!important;font-size:13px!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;text-transform:uppercase!important;color:#fff!important}.byu-header-root{background-color:#002e5d;width:100%;font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-size:18px}.byu-header-root .byu-header-content{max-width:1200px;display:flex;justify-content:center;flex:1;flex-basis:100%;margin:0 16px;box-sizing:border-box}.byu-header-root .byu-logo{margin-right:16px}.byu-header-root button{background-color:#666;color:#fff;border:none;cursor:pointer}.byu-header-root .byu-header-primary{background-color:#002e5d;color:#fff;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;flex:1;min-height:55px;box-sizing:border-box}.byu-header-root .byu-header-primary .byu-header-title{overflow:hidden;-ms-text-overflow:ellipsis;text-overflow:ellipsis;flex:1;display:flex;flex-direction:column;font-family:Vitesse A,Vitesse B,Georgia,serif!important;font-size:22px;color:#fff!important}.byu-header-root .byu-header-primary .byu-header-title a{color:#fff!important}.byu-header-root .byu-header-primary .byu-header-title ::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;font-weight:400;font-size:22px;line-height:normal}.byu-header-root .byu-header-primary .byu-header-title ::slotted(.subtitle){font-size:14px;line-height:14px;margin:0;margin-top:-1px;margin-bottom:3px}.byu-header-root .byu-header-primary .byu-header-title ::slotted(.subtitle:first-child){font-size:14px;line-height:14px;margin-bottom:-1px;margin-top:2px}.byu-header-root .byu-header-primary .byu-header-user button{background-color:transparent;position:relative}.byu-header-root .byu-header-primary .byu-header-user button .icon{width:20px;height:20px;font-size:20px;vertical-align:middle}.byu-header-root .byu-header-primary .byu-header-user button .label{font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:500;font-size:13px;text-transform:uppercase}.byu-header-root .byu-header-primary .byu-header-search #search-input{font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:500;font-size:13px;color:#002e5d}.byu-header-root .byu-header-primary .byu-header-search #search-input::-webkit-input-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-header-search #search-input::-ms-input-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-header-search #search-input::-moz-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-logo{height:34px}#mobileMenu{max-height:0;transition:.5s cubic-bezier(.4,0,.2,1);overflow:hidden}:host([mobile-view]) .byu-header-root .byu-header-content{display:block;margin:0}:host([mobile-view]) .byu-header-root .byu-logo{align-self:flex-start}:host([mobile-view]) .byu-header-root .byu-header-primary{margin-left:16px;padding-top:10.5px;padding-bottom:10.5px;min-height:34px;padding-right:14px!important;align-items:baseline}:host([mobile-view]) .byu-header-root .byu-header-actions{text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;height:35px!important;display:inline-block;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;display:block;box-sizing:border-box;padding:18px 33px!important;line-height:12px;text-align:left!important;height:auto!important;padding:0!important;background-color:#e6e6e6;color:#002e5d!important;border-top:1px solid #c5c5c5;width:100%;display:flex;flex-direction:column;align-items:flex-start;line-height:12px!important}:host([mobile-view]) .byu-header-root .byu-header-actions:hover{background:#c5c5c5!important}:host([mobile-view]) .byu-header-root .byu-header-actions.active,:host([mobile-view]) .byu-header-root .byu-header-actions.selected{background:#e5e5e5!important}:host([mobile-view]) .byu-header-root .byu-header-actions.long-link{max-width:300px;flex:2;padding:0 12px!important}:host([mobile-view]) .byu-header-root .byu-header-actions.extra-long-link{max-width:400px;flex:3;padding:0 12px!important}:host([mobile-view]) .byu-header-root #actions a{color:#002e5d!important;font-weight:500!important}:host([mobile-view]) .byu-header-root #actions p{margin:0!important}:host([mobile-view]) .byu-header-root .byu-header-actions ::slotted(*){color:#002e5d!important;padding:18px 50px!important}:host([mobile-view]) .byu-header-root>div>:not(.byu-logo){margin-right:0}:host([mobile-view]) .byu-header-root .byu-header-title{align-items:flex-start;align-self:center;font-size:16px!important}:host([mobile-view]) .byu-header-root .byu-header-title ::slotted(*){font-size:16px!important}:host([mobile-view]) .byu-header-root .byu-header-title ::slotted(.subtitle){font-size:12px!important;margin-top:3px}:host([mobile-view]) .byu-header-root .byu-header-title ::slotted(.subtitle:first-child){margin-top:0!important;margin-bottom:4px}:host([mobile-view]) .byu-header-root button.mobile-menu-button{background-color:transparent;margin-top:5px;margin-bottom:5px}:host([no-menu]) .mobile-menu-button{display:none}:host(:not([mobile-view])) .byu-header-root{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center}:host(:not([mobile-view])) .byu-header-root .byu-header-actions ::slotted(*){margin-left:4px;margin-right:4px}:host(:not([mobile-view])) .byu-header-root .byu-header-actions a{color:#fff!important}:host(:not([mobile-view])) .byu-header-root.no-nav{height:48px}:host(:not([mobile-view])) .byu-header-root .nav-expand{display:none}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary{background-color:#002e5d;color:#fff;height:55px}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary,:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search input{border:1px solid #002e5d;border-right:none;height:20px;padding:4px 6px;flex:1;width:217px;box-sizing:content-box}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search button{height:28px;width:30px;text-align:center}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-menu-button{display:none}:host([full-width]) .byu-header-content{max-width:100%!important}", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ":host{display:flex;justify-content:center;width:100%;height:auto;background:#fff;border-bottom:1px solid #ccc}:host(.transparent){opacity:.88}.outer-nav{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;padding:0;height:35px;position:relative;max-width:1200px;flex:1;flex-basis:100%}.slot-container ::slotted(*){text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;flex:1}.slot-container ::slotted(*):hover{background:#c5c5c5!important}.slot-container ::slotted(*).active,.slot-container ::slotted(*).selected{background:#e5e5e5!important}.slot-container ::slotted(*).long-link{max-width:300px;flex:2;padding:0 12px!important}.slot-container ::slotted(*).extra-long-link{max-width:400px;flex:3;padding:0 12px!important}.slot-container ::slotted(:hover){background:#c5c5c5!important}.slot-container ::slotted(.active),.slot-container ::slotted(.selected){background:#e5e5e5!important}.slot-container ::slotted(.long-link){max-width:300px;flex:2;padding:0 12px!important}.slot-container ::slotted(.extra-long-link){max-width:400px;flex:3;padding:0 12px!important}.byu-menu-more-menu{display:none;position:relative;height:35px;width:16.66%;overflow:visible!important}.byu-menu-more-menu .byu-menu-more{text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;position:relative;flex:1;display:block}.byu-menu-more-menu .byu-menu-more:hover{background:#c5c5c5!important}.byu-menu-more-menu .byu-menu-more.active,.byu-menu-more-menu .byu-menu-more.selected{background:#e5e5e5!important}.byu-menu-more-menu .byu-menu-more.long-link{max-width:300px;flex:2;padding:0 12px!important}.byu-menu-more-menu .byu-menu-more.extra-long-link{max-width:400px;flex:3;padding:0 12px!important}.byu-menu-more-menu .byu-menu-more .more-open-button{height:13px;width:13px;transition:transform .5s ease;transform:rotate(0);transform-origin:center}.byu-menu-more-menu .byu-menu-more-items{display:none;position:absolute;top:35px;right:0;min-width:100%;max-width:250px;z-index:2;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.75)}.byu-menu-more-menu .byu-menu-more-items ::slotted(*){width:100%;text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;display:block;text-align:left!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*):hover{background:#c5c5c5!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*).active,.byu-menu-more-menu .byu-menu-more-items ::slotted(*).selected{background:#e5e5e5!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*).long-link{max-width:300px;flex:2;padding:0 12px!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*).extra-long-link{max-width:400px;flex:3;padding:0 12px!important}.byu-menu-more-visible .byu-menu-more-menu{display:block}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded{background:#e5e5e5;box-shadow:0 0 2px 0 rgba(0,0,0,.75)}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-more-items{display:block}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-fixed-overlay{position:fixed;top:0;bottom:0;left:0;right:0;z-index:1}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded .more-open-button{transform:rotate(180deg)}:host(.mobile-view) .outer-nav{display:block;height:auto}:host(.mobile-view) .byu-menu-more{display:none!important}:host(.mobile-view) .slot-container ::slotted(*){display:block!important;text-align:left!important;padding:18px 18px 18px 50px!important;height:auto!important;width:100%;position:static;box-sizing:border-box;line-height:12px!important}:host(.mobile-view) .slot-container ::slotted(*).byu-menu-more-menu{padding:0!important}:host(.mobile-view) .byu-menu-more-menu{display:block;width:100%;box-shadow:none;position:static;height:auto}:host(.mobile-view) .byu-menu-more-menu .byu-menu-more-items{display:block;box-shadow:none;padding:0;position:static!important}:host(.mobile-view) .byu-menu-more-menu .byu-menu-more-items ::slotted(*){display:block!important;text-align:left!important;padding:18px 50px!important;height:auto!important;width:100%;position:static;box-sizing:border-box;line-height:12px!important}:host(.mobile-view) .byu-menu-more-menu.byu-menu-more-expanded{box-shadow:none}:host(.mobile-view) .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-fixed-overlay{display:none!important}:host([left-align]) .outer-nav ::slotted(*){min-width:200px;flex:initial;padding:0 16px}:host([full-width]) .outer-nav{max-width:100%}", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ":host{margin-left:20px}#search-icon{width:17px;height:17px}button{background-color:var(--byu-search-color,#666);border:1px solid var(--byu-search-color,#666);color:#fff;width:30px;height:30px;display:flex;align-items:center;box-sizing:border-box}#search-form{display:flex;align-items:stretch;align-content:center}#search-form #search-container{flex:1}#search-form #search-container ::slotted(input),#search-form #search-container input{padding:5px 10px;border:none;height:30px;-webkit-appearance:none;border-radius:0;margin:0;box-sizing:border-box;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-size:13px!important;font-weight:500!important;color:#002e5d!important}:host(.mobile-view){width:100%;height:35px;margin:0}:host(.mobile-view) #search-form #search-container ::slotted(input),:host(.mobile-view) #search-form #search-container input{padding:5px 10px;border:none;height:30px;-webkit-appearance:none;border-radius:0;margin:0;box-sizing:border-box;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-size:13px!important;font-weight:500!important;color:#002e5d!important;width:100%;height:35px;border-bottom:1px solid #c5c5c5}:host(.mobile-view) #search-button{width:53px;height:35px;padding:0 16px}:host(.mobile-view) #search-icon{width:20px;height:20px}", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".slot-wrapper{display:flex;flex-direction:row}.slot-wrapper ::slotted(*){height:28px;width:28px;display:block;color:transparent!important;overflow:hidden;background-size:contain;background-repeat:no-repeat;background-clip:content-box;background-position:50%;margin:10px 15px 10px 0!important}.slot-wrapper ::slotted(.facebook),.slot-wrapper ::slotted([slot=facebook]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/fa.svg\")}.slot-wrapper ::slotted(.twitter),.slot-wrapper ::slotted([slot=twitter]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/tw.svg\")}.slot-wrapper ::slotted(.instagram),.slot-wrapper ::slotted([slot=instagram]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/in.svg\")}.slot-wrapper ::slotted(.youtube),.slot-wrapper ::slotted([slot=youtube]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/yo.svg\")}.slot-wrapper ::slotted(.pinterest),.slot-wrapper ::slotted([slot=pinterest]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/pi.svg\")}.slot-wrapper ::slotted(.google-plus),.slot-wrapper ::slotted(.googleplus),.slot-wrapper ::slotted(.gplus),.slot-wrapper ::slotted([slot=google-plus]),.slot-wrapper ::slotted([slot=googleplus]),.slot-wrapper ::slotted([slot=gplus]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/gp.svg\")}.slot-wrapper ::slotted(.linkedin),.slot-wrapper ::slotted([slot=linkedin]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/li.svg\")}.slot-wrapper ::slotted(.rss),.slot-wrapper ::slotted([slot=rss]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/rs.svg\")}.slot-wrapper ::slotted(.snapchat),.slot-wrapper ::slotted([slot=snapchat]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/sn.svg\")}", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "img{height:20px;margin:5px}.slot-wrapper ::slotted(*){text-decoration:none!important;font-size:13px!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;text-transform:uppercase!important;color:#fff!important}.has-user,.no-user{display:flex;flex-direction:row;align-items:center}:host(:not([mobile-view])){color:#fff}:host(:not([mobile-view])) .mobile{display:none}:host(:not([mobile-view])) .slot-wrapper{display:flex;align-items:center}:host(:not([mobile-view])) .slot-wrapper ::slotted(a:hover){text-decoration:underline!important}:host(:not([mobile-view])) .has-user .name ::slotted(*){color:#c3ddf9!important;text-transform:uppercase!important;max-width:130px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host(:not([mobile-view])) img{margin:7px}:host([mobile-view]){text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;display:block;box-sizing:border-box;padding:18px 33px!important;line-height:12px;text-align:left!important;height:auto!important;border-bottom:1px solid #c5c5c5;padding:10px 14px!important;background-color:#fff!important;line-height:12px!important}:host([mobile-view]):hover{background:#c5c5c5!important}:host([mobile-view]).active,:host([mobile-view]).selected{background:#e5e5e5!important}:host([mobile-view]).long-link{max-width:300px;flex:2;padding:0 12px!important}:host([mobile-view]).extra-long-link{max-width:400px;flex:3;padding:0 12px!important}:host([mobile-view]) .not-mobile{display:none}:host([mobile-view]) .has-user img{order:1;margin:0!important;padding:0 14px 0 0!important}:host([mobile-view]) .has-user .logout{order:3}:host([mobile-view]) .has-user .name{order:2;flex:1}:host([mobile-view]) .has-user .name ::slotted(*){text-transform:capitalize!important;color:#0057b8!important}:host([mobile-view]) .no-user img{margin:0!important;padding:0 14px 0 0!important}:host([mobile-view]) .slot-wrapper ::slotted(*){color:#002e5d!important}:host(:not([has-user])) .has-user,:host([has-user]) .no-user{display:none}", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(23);
var isArguments = __webpack_require__(22);

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function anonymous(locals, escapeFn, include, rethrow) {
    "use strict";
    escapeFn = escapeFn || function(markup) {
        return markup == undefined ? "" : String(markup).replace(_MATCH_HTML, encode_char);
    };
    var _ENCODE_HTML_RULES = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&#34;",
        "'": "&#39;"
    }, _MATCH_HTML = /[&<>'"]/g;
    function encode_char(c) {
        return _ENCODE_HTML_RULES[c] || c;
    }
    var __output = [], __append = __output.push.bind(__output);
    __append("<style>\n");
    __append(__webpack_require__(16));
    __append('</style>\n<div id="header" class="byu-header-root">\n<div class="byu-header-content">\n<div class="byu-header-primary">\n<a id="home-url" name="home-url" href="https://byu.edu/" target="_blank">\n<img class="byu-logo" alt="BYU" src="https://cdn.byu.edu/shared-icons/latest/logos/monogram-white.svg">\n</a>\n<div class="byu-header-title">\n<slot id="site-title" name="site-title"></slot>\n</div>\n');
    if (locals.mobile) {
        __append('<button type="button" class="mobile-menu-button tcon tcon-menu--xbutterfly" aria-label="toggle menu">\n<span class="tcon-menu__lines" aria-hidden="true"></span>\n<span class="tcon-visuallyhidden">toggle menu</span>\n</button>\n');
    }
    __append('</div>\n<div id="secondary" class="byu-header-secondary">\n');
    if (!locals.mobile) {
        __append('<div class="byu-header-actions">\n<slot id="actions" name="actions"></slot>\n</div>\n<div class="byu-header-user">\n<slot id="user" name="user"></slot>\n</div>\n');
    }
    __append('<div class="byu-header-search">\n<slot id="search" name="search"></slot>\n</div>\n</div>\n</div>\n');
    if (locals.mobile) {
        __append('<div id="mobileMenu">\n<slot id="user" name="user"></slot>\n<slot id="navbarMenu" name="nav"></slot>\n<div class="byu-header-actions">\n<slot id="actions" name="actions"></slot>\n</div>\n</div>\n');
    } else {
        __append('<slot id="navbarMenu" name="nav"></slot>\n');
    }
    __append("</div>");
    return __output.join("");
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function pad (hash, len) {
  while (hash.length < len) {
    hash = '0' + hash;
  }
  return hash;
}

function fold (hash, text) {
  var i;
  var chr;
  var len;
  if (text.length === 0) {
    return hash;
  }
  for (i = 0, len = text.length; i < len; i++) {
    chr = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash < 0 ? hash * -2 : hash;
}

function foldObject (hash, o, seen) {
  return Object.keys(o).sort().reduce(foldKey, hash);
  function foldKey (hash, key) {
    return foldValue(hash, o[key], key, seen);
  }
}

function foldValue (input, value, key, seen) {
  var hash = fold(fold(fold(input, key), toString(value)), typeof value);
  if (value === null) {
    return fold(hash, 'null');
  }
  if (value === undefined) {
    return fold(hash, 'undefined');
  }
  if (typeof value === 'object') {
    if (seen.indexOf(value) !== -1) {
      return fold(hash, '[Circular]' + key);
    }
    seen.push(value);
    return foldObject(hash, value, seen);
  }
  return fold(hash, value.toString());
}

function toString (o) {
  return Object.prototype.toString.call(o);
}

function sum (o) {
  return pad(foldValue(0, o, '', []).toString(16), 8);
}

module.exports = sum;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(13) + "</style> <div class=\"wrapper\"> <slot name=\"actiontext\"></slot> </div>";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(14) + "</style> <h2 class=\"header\"> <slot name=\"header\"></slot> </h2> <div class=\"content\"> <slot></slot> </div>";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(15) + "</style> <div class=\"secondary-footer\"> <div class=\"secondary-footer-content\"> <slot id=\"slot\"></slot> </div> </div> <div class=\"blue-footer\"> <div class=\"inner-wrapper\"> <a href=\"https://home.byu.edu/home/\" target=\"_blank\"><img src=\"https://cdn.byu.edu/shared-icons/latest/logos/word-mark-wide-white.svg\" alt=\"Brigham Young University\" class=\"university-logo\"></a> <div class=\"copyright-contact\">&copy; <span id=\"currentYear\"></span> All Rights Reserved | Provo, UT 84602, USA | <a href=\"tel:18014224636\">801-422-4636</a></div> </div> </div>";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(17) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <nav class=\"outer-nav slot-container\"> <slot class=\"byu-menu-items\"></slot> <div class=\"byu-menu-more-menu\"> <a href=\"javascript: void 0\" class=\"byu-menu-more\"> More <img class=\"more-open-button\" src=\"https://cdn.byu.edu/shared-icons/latest/fontawesome/down-open-navy.svg\" alt=\"Open\"> </a> <div class=\"byu-menu-more-items slot-container\"> <slot name=\"more\"></slot> </div> </div> </nav>";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(18) + "</style> <div id=\"search-form\"> <div id=\"search-container\"> <slot id=\"search\"><input type=\"search\" placeholder=\"Search\"></slot> </div> <button id=\"search-button\" type=\"submit\"> <img id=\"search-icon\" src=\"https://cdn.byu.edu/shared-icons/latest/fontawesome/search-white.svg\" alt=\"Run Search\"> </button> </div>";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(19) + "</style> <div class=\"slot-wrapper\"> <slot id=\"social-main\"></slot> <slot id=\"social-deprecated-facebook\" name=\"facebook\"></slot> <slot id=\"social-deprecated-twitter\" name=\"twitter\"></slot> <slot id=\"social-deprecated-instagram\" name=\"instagram\"></slot> <slot id=\"social-deprecated-youtube\" name=\"youtube\"></slot> <slot id=\"social-deprecated-pinterest\" name=\"pinterest\"></slot> <slot id=\"social-deprecated-googleplus\" name=\"googleplus\"></slot> <slot id=\"social-deprecated-linkedin\" name=\"linkedin\"></slot> <slot id=\"social-deprecated-rss\" name=\"rss\"></slot> <slot id=\"social-deprecated-snapchat\" name=\"snapchat\"></slot> </div>";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(20) + "</style> <div class=\"byu-user-wrapper\"> <div class=\"no-user slot-wrapper\"> <img class=\"not-mobile\" height=\"20px\" src=\"https://cdn.byu.edu/shared-icons/latest/fontawesome/user-circle-o-white.svg\"> <img class=\"mobile\" height=\"20px\" src=\"https://cdn.byu.edu/shared-icons/latest/fontawesome/user-circle-o-navy.svg\"> <span class=\"text slot-wrapper\"> <slot name=\"login\">Sign In</slot> </span> </div> <div class=\"has-user\"> <span class=\"name slot-wrapper\"> <slot name=\"user-name\" id=\"user-name\"></slot> </span> <img class=\"not-mobile\" height=\"20px\" src=\"https://cdn.byu.edu/shared-icons/latest/fontawesome/user-circle-white.svg\"> <img class=\"mobile\" height=\"20px\" src=\"https://cdn.byu.edu/shared-icons/latest/fontawesome/user-circle-navy.svg\"> <span class=\"logout slot-wrapper\"> <slot name=\"logout\">Sign Out</slot> </span> </div> </div>";

/***/ })
/******/ ]);
//# sourceMappingURL=components.js.map