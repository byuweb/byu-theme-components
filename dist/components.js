/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_matchesSelector__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"]; });
/* unused harmony reexport matchesSelector */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__["a"]; });
/**
 * Created by ThatJoeMoore on 2/14/17
 */










/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matchesSelector;
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


function matchesSelector(el, selector) {
    let proto = Element.prototype;
    let actual =
        proto.matches ||
        proto.matchesSelector ||
        proto.mozMatchesSelector ||
        proto.msMatchesSelector ||
        proto.oMatchesSelector ||
        proto.webkitMatchesSelector ||
        function (s) {
            let doc = this.document || this.ownerDocument;
            return doc.querySelectorAll(s).indexOf(this) !== -1;
        };

    return actual.call(el, selector);
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);






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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);





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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_footer_html__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_footer_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_footer_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);





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
        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](component, 'byu-footer', __WEBPACK_IMPORTED_MODULE_0__byu_footer_html___default.a, () => {
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


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_deep_equal__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_deep_equal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_deep_equal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_byu_web_component_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icons_transformicons__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icons_transformicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__icons_transformicons__);








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
        if (!__WEBPACK_IMPORTED_MODULE_1_deep_equal__(state, this._renderState)) {
            __WEBPACK_IMPORTED_MODULE_2_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-header', __WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html__(state), () => {
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
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__icons_transformicons__["transform"])(this.shadowRoot.querySelector('.mobile-menu-button'));
        } else {
            menu.style.maxHeight = null;
            this.classList.remove('byu-header-menu-open');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__icons_transformicons__["revert"])(this.shadowRoot.querySelector('.mobile-menu-button'));
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


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_menu_html__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_menu_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_menu_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__active_styles_scss__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__active_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__active_styles_scss__);





const ATTR_ACTIVE_SELECTOR = "active-selector";
const DEFAULT_ACTIVE_SELECTOR = ".active";
class BYUMenu extends HTMLElement {

    get activeSelector() {
        return this.getAttribute(ATTR_ACTIVE_SELECTOR) || DEFAULT_ACTIVE_SELECTOR;
    }

    set activeSelector(val) {
        if (val) {
            this.setAttribute(ATTR_ACTIVE_SELECTOR, val);
        } else {
            this.setAttribute(ATTR_ACTIVE_SELECTOR, DEFAULT_ACTIVE_SELECTOR);
        }
    }

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
        render(this, true);
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
            case ATTR_ACTIVE_SELECTOR:
               render(this, false);
               return;
        }
    }

    static get observedAttributes() {
        return [ATTR_ACTIVE_SELECTOR];
    }

    get _menuSlot() {
        return this.shadowRoot.querySelector('#byu-menu-items');
    }

    get _menuMoreSlot() {
        return this.shadowRoot.querySelector('#byu-menu-more-slot');
    }
}

function render(component, force) {
    let activeSelector = component.activeSelector;
    if (!force && activeSelector === component._renderedActiveSelector) {
        return;
    }

    let css = __WEBPACK_IMPORTED_MODULE_2__active_styles_scss___default.a.toString().replace('__byu-menu-active-placeholder__', activeSelector);
    let tmpl = `<style>${css}</style>${__WEBPACK_IMPORTED_MODULE_0__byu_menu_html___default.a}`;

    __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](component, 'byu-menu', tmpl, () => {
        component._renderedActiveSelector = activeSelector;
        updateMenuItemsLayout(component);
        addSlotListeners(component);
        // when the more button is clicked then show the more menu
        component.shadowRoot.querySelector('.byu-menu-more').addEventListener('click', function () {
            component.showMore = true;
        });
    });
}

function addSlotListeners(component) {
    component.shadowRoot.querySelector('slot')
        .addEventListener('slotchange', e => {
            //Run on microtask timing to let polyfilled shadow DOM changes to propagate
            setTimeout(function() {
              updateMenuItemsLayout(component);
            });
        });
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

function updateMenuItemsLayout(component) {
    const links = component.children;
    const length = links.length;
    const hasOverflow = length > 6;
    const limit = hasOverflow ? 5 : 6;

    for (let index = 0; index < length; index++) {
        const link = links[index];
        link.setAttribute('slot', index < limit ? '' : 'more');
    }

    const nav = component.shadowRoot.querySelector('.outer-nav');
    if (nav) toggleClass(nav, 'byu-menu-more-visible', hasOverflow);

    if (length < 4) {
        component.setAttribute('left-align', '');
    } else {
        component.removeAttribute('left-align');
    }
}

window.customElements.define('byu-menu', BYUMenu);
window.BYUMenu = BYUMenu;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_search_html__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_search_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_search_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);
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
        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-search', __WEBPACK_IMPORTED_MODULE_0__byu_search_html___default.a, () => {
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

        let event = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["b" /* createEvent */](EVENT_TYPE, {search: value});

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
    let newInput = lookupSearchInput(search, search.searchInputSelector);

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
    return __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["c" /* querySelectorSlot */](search._searchSlot, selector)
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

    let form = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["c" /* querySelectorSlot */](search._searchSlot, target);

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

    let button = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["c" /* querySelectorSlot */](search._searchSlot, target);

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



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);




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
    'snapchat': 'Snapchat',
    'podcast': 'Podcast'
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_user_info_html__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_user_info_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_user_info_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);
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
/* 11 */
/***/ (function(module, exports) {

module.exports = {
	"name": "byuweb-components",
	"version": "1.3.2",
	"description": "Components to be used for byu web pages and applications.",
	"main": "",
	"scripts": {
		"build": "gulp build",
		"serve": "gulp watch",
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"private": true,
	"author": "",
	"license": "Apache-2.0",
	"dependencies": {
		"byu-web-component-utils": "^0.4.2",
		"deep-equal": "^1.0.1",
		"sass-loader": "^6.0.6"
	},
	"devDependencies": {
		"browser-sync": "^2.26.0",
		"byu-web-component-build": "^0.2.3",
		"git-revision-webpack-plugin": "^2.5.1",
		"gulp": "^3.9.1",
		"gulp-rename": "^1.2.2"
	}
};

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_header_byu_header_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__byu_menu_byu_menu_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__byu_search_byu_search_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__byu_user_info_byu_user_info_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__byu_footer_byu_footer_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__byu_footer_column_byu_footer_column_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__byu_footer_action_button_byu_footer_action_button_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__byu_social_media_links_byu_social_media_links_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__package_json__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__package_json__);
/**
 * Created by ThatJoeMoore on 2/18/17
 */


/*
 * Header Bits
 */





/*
 * Footer Bits
 */








console.log(`--------------- Starting byu-theme-components ${__WEBPACK_IMPORTED_MODULE_8__package_json__["version"]} ---------------`);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createEvent;
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


function createEvent(name, detail) {
    if (typeof window.CustomEvent === 'function') {
        return new CustomEvent(name, {detail, cancelable: true, bubbles: true})
    }
    let evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, true, true, detail);
    return evt;
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = querySelectorSlot;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__ = __webpack_require__(2);
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




function querySelectorSlot(slot, selector) {
    let roots = slot.assignedNodes({flatten: true})
        .filter(n => n.nodeType === Node.ELEMENT_NODE);

    for (let i = 0, len = roots.length; i < len; i++) {
        let each = roots[i];
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__["a" /* default */])(each, selector)) {
            return each;
        }
        let child = each.querySelector(selector);
        if (child) {
            return child;
        }
    }
    return null;
}



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyTemplate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hash_sum__);
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

    if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ":host{background-color:#32538d;font-family:HCo Ringside Narrow SSm,Arial,sans-serif;font-size:13px!important;color:#fff;display:inline-block;text-align:center;line-height:15px;padding:10px 0;width:auto;min-width:125px;margin:20px 0;-webkit-box-shadow:0 3px 5px 0 hsla(0,0%,8%,.35);-moz-box-shadow:0 3px 5px 0 hsla(0,0%,8%,.35);box-shadow:0 3px 5px 0 hsla(0,0%,8%,.35);letter-spacing:.5px}@media (max-width:1024px){:host{padding:6.5px 0;font-size:11px;line-height:13px}}.wrapper ::slotted(*){font-family:HCo Ringside Narrow SSm,Arial,sans-serif!important;font-weight:400!important;color:#fff!important;display:inline-block!important;position:relative!important;width:100%!important;margin:0 20px!important;left:-20px!important;cursor:pointer!important;vertical-align:middle!important;height:15px!important}.wrapper ::slotted(a){text-decoration:none!important}", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".header{width:100%;margin:0 0 8px}.header ::slotted(*){font-family:HCo Ringside Narrow SSm,Arial,sans-serif!important;text-transform:uppercase!important;color:#002e5d!important;font-size:14px!important;line-height:17px!important;border-bottom:1px solid #c5c5c5!important;padding-bottom:3px!important;font-weight:500!important;width:100%;display:inline-block;max-width:230px}.header ::slotted(br){display:none}.content ::slotted(*){max-width:100%}.content ::slotted(:not(byu-footer-action-button)){font-family:HCo Ringside Narrow SSm,Arial,sans-serif!important;font-size:14px!important;line-height:16px!important;font-weight:400!important;color:#141414!important;display:block;margin:0}.content ::slotted(a){text-decoration:none!important;outline:none!important;color:#0057b8!important;font-size:14px;height:35px}.content ::slotted(a:hover){color:#002e5d!important}.content>a{text-decoration:none!important;outline:none!important;color:#0057b8!important;font-size:14px;height:35px}.content>a:hover{color:#002e5d!important}@media (max-width:1024px){.content ::slotted(:not(byu-footer-action-button)),.header ::slotted(*){font-size:12px!important}.header ::slotted(*){max-width:230px}}", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".university-footer{background-color:#002e5d;text-align:center;font-family:HCo Ringside Narrow SSm,Arial,sans-serif;font-weight:400;font-size:14px;line-height:14px;color:#fff!important;width:100%;padding:21px 0;display:flex;justify-content:center;align-items:center;flex-direction:column}.university-footer a{color:#fff!important;text-decoration:none}.university-footer a:hover{text-decoration:underline}.university-logo-wrapper{max-width:1200px;width:100%;padding:0 8px;box-sizing:border-box}.university-logo{max-width:100%;width:280px;height:40px;margin:-10px 0}@media (min-width:1024px){.university-logo{width:390px}}.university-info{display:flex;flex-direction:column;align-items:center;letter-spacing:-.6px;text-transform:uppercase}.university-info>:not(:first-of-type){margin-top:.25em}@media (min-width:425px){.university-info{flex-direction:row}.university-info>:not(:first-of-type){margin-top:0}.university-info>:not(:first-of-type):before{display:inline-block;color:#fff!important;content:\"|\";text-align:center;width:1em}}.site-footer-wrapper{background-color:#ededed}.site-footer{margin:0 auto;height:auto;box-sizing:border-box;padding:0 8px 50px;display:flex;flex-direction:column;flex-wrap:wrap}.site-footer ::slotted(*){flex-grow:1;margin:16px 8px 0}.site-footer ::slotted(.double-wide){flex-grow:2}.site-footer ::slotted(.triple-wide){flex-grow:3}@media (max-width:600px){.site-footer{padding-right:25px;padding-left:25px}}.university-footer{font-size:9px;line-height:9px}@media (min-width:600px){.site-footer{flex-direction:row}.site-footer ::slotted(*){width:calc(50% - 16px)}.site-footer ::slotted(.double-wide),.site-footer ::slotted(.triple-wide){width:calc(100% - 16px)}}@media (min-width:1024px){.site-footer{flex-wrap:nowrap;justify-content:center;padding:0}.site-footer ::slotted(*){width:calc(20% - 16px);margin:33px 8px 40px;max-width:calc(30% - 16px)}.site-footer ::slotted(.double-wide){width:calc(40% - 16px);max-width:calc(60% - 16px)}.site-footer ::slotted(.triple-wide){width:calc(60% - 16px);max-width:calc(100% - 30% - 16px)}.university-footer{font-size:11px;line-height:11px}.university-info{padding-top:3px;letter-spacing:0}}:host([full-width]) ::slotted(:first-child){margin-left:0}:host([full-width]) ::slotted(:last-child){margin-right:0}", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".tcon{appearance:none;border:none;cursor:pointer;display:flex;justify-content:center;align-items:center;height:24px;transition:.15s;user-select:none;width:17px;background:transparent;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;padding:0!important}.tcon>*{display:block}.tcon:focus,.tcon:hover{outline:none}.tcon::-moz-focus-inner{border:0}.tcon-menu__lines{width:24px;position:relative}.tcon-menu__lines,.tcon-menu__lines:after,.tcon-menu__lines:before{display:inline-block;border-radius:1px;height:3px;transition:.15s;background:#fff}.tcon-menu__lines:after,.tcon-menu__lines:before{width:24px;content:\"\";position:absolute;left:0;transform-origin:1.71429px center;width:100%}.tcon-menu__lines:before{top:6px}.tcon-menu__lines:after{top:-6px}.tcon-transform .tcon-menu__lines{transform:scale3d(.8,.8,.8)}.tcon-menu--xbutterfly{width:auto}.tcon-menu--xbutterfly .tcon-menu__lines:after,.tcon-menu--xbutterfly .tcon-menu__lines:before{transform-origin:50% 50%;transition:top .3s ease .6s,transform .3s ease}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines{background:transparent}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:after,.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:before{top:0;transition:top .3s ease,transform .3s ease .5s;width:24px}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:before{transform:rotate(45deg)}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:after{transform:rotate(-45deg)}.tcon-visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.tcon-visuallyhidden:active,.tcon-visuallyhidden:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}:host{box-shadow:0 0 10px rgba(0,0,0,.16);display:block}:host .menu-ie11-outdated button{position:absolute;top:10px;right:10px;border:none;width:20px;line-height:20px;font-size:30px;padding:0;font-weight:700;background:none;cursor:pointer;overflow:hidden}.byu-header-actions{display:flex;align-items:center;margin-right:22px}.byu-header-actions ::slotted(*){background-color:#32538d;height:29px;font-weight:400;font-size:11px;padding:0 24px;color:#fff;display:flex;align-items:center;justify-content:center;text-decoration:none;text-transform:uppercase;margin-left:10px}.byu-header-actions ::slotted(*),.byu-header-root{font-family:HCo Ringside Narrow SSm,Arial,sans-serif}.byu-header-root{width:100%;font-size:18px}.byu-header-root .byu-header-content{display:flex;justify-content:center;flex:1;flex-basis:100%;box-sizing:border-box}.byu-header-root img.byu-logo{margin:18px 8px 19px 0}.byu-header-root button{background-color:#666;color:#fff;border:none;cursor:pointer}.byu-header-root .byu-header-primary{background-color:#002e5d;color:#fff;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:flex-start;flex:1;min-height:58px;box-sizing:border-box;padding-left:16px}.byu-header-root .byu-header-primary .byu-header-title{overflow:hidden;-ms-text-overflow:ellipsis;text-overflow:ellipsis;flex:1;display:flex;display:grid;flex-direction:column;font-size:24px!important;font-family:HCo Ringside Narrow SSm,Arial,sans-serif!important;color:#fff!important;text-decoration:none;padding-top:13px;padding-bottom:13px}.byu-header-root .byu-header-primary .byu-header-title ::slotted(*){font-family:HCo Ringside Narrow SSm,Arial,sans-serif!important;font-weight:400;font-size:24px!important;line-height:normal!important;grid-row:1;margin-top:0;margin-bottom:0}.byu-header-root .byu-header-primary .byu-header-title ::slotted(.subtitle){font-size:13px!important;line-height:13px!important;font-style:italic;grid-row:2}.byu-header-root .byu-header-primary .byu-header-user button{background-color:transparent;position:relative}.byu-header-root .byu-header-primary .byu-header-user button .icon{width:20px;height:20px;font-size:20px;vertical-align:middle}.byu-header-root .byu-header-primary .byu-header-user button .label{font-family:HCo Ringside Narrow SSm,Arial,sans-serif;font-weight:400;font-size:13px;text-transform:uppercase}.byu-header-root .byu-header-primary .byu-header-search #search-input{font-family:HCo Ringside Narrow SSm,Arial,sans-serif;font-weight:400;font-size:13px;color:#002e5d}.byu-header-root .byu-header-primary .byu-header-search #search-input::-webkit-input-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-header-search #search-input::-ms-input-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-header-search #search-input::-moz-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-logo,.byu-header-root .byu-header-primary .byu-logo-link{height:19px}.menu-outer-wrapper{background-color:#fff}.menu-inner-wrapper{margin:0 auto;padding:0 16px;box-sizing:border-box}.menu-ie11-outdated{position:relative;box-sizing:border-box;background:#fcc014;width:1200px;max-width:100%;margin:0 auto;padding:15px 60px;transition:opacity .5s ease-in-out,margin-top .2s ease-in-out .3s}.menu-ie11-outdated.ie11-outdated-hidden{opacity:0;z-index:-1}.menu-ie11-outdated .menu-ie11-outdated-label{font-family:HCo Ringside Narrow SSm,Arial,sans-serif;font-weight:400;font-size:22px;text-align:center;color:#000}.menu-ie11-outdated .menu-ie11-outdated-button{position:absolute;top:10px;right:10px;border:none;width:20px;line-height:20px;font-size:30px;padding:0;font-weight:700;background:none;cursor:pointer;overflow:hidden}:host(.menu-transparent) .menu-outer-wrapper{background:hsla(0,0%,100%,.88)}:host(.below-max-width) .menu-inner-wrapper{padding:0}#mobileMenu{max-height:0;transition:max-height .5s cubic-bezier(.4,0,.2,1);will-change:max-height;border-bottom:.2px solid #c5c5c5;overflow:hidden}:host([mobile-view]) .byu-header-root .byu-header-content{display:block;margin:0;padding:0;background-color:#fff}:host([mobile-view]) .byu-header-root .byu-logo{height:13px!important;display:block}:host([mobile-view]) .byu-header-root .byu-logo.byu-logo-image{margin:16px 8px 19px 0}:host([mobile-view]) .byu-header-root .byu-header-primary{min-height:45px;padding-right:16px!important}:host([mobile-view]) .byu-header-root .byu-header-actions{width:100%;display:flex;flex-direction:row;flex-wrap:wrap}:host([mobile-view]) .byu-header-root .byu-header-actions ::slotted(*){margin:25px 0 45px 25px;min-width:55px}:host([mobile-view]) .byu-header-root>div>:not(.byu-logo){margin-right:0}:host([mobile-view]) .byu-header-root .byu-header-primary .byu-header-title{align-items:flex-start;align-self:center;font-size:17.5px!important;padding-bottom:12px;padding-top:12px}:host([mobile-view]) .byu-header-root .byu-header-primary .byu-header-title ::slotted(*){font-size:17.5px!important;font-weight:400}:host([mobile-view]) .byu-header-root .byu-header-primary .byu-header-title ::slotted(.subtitle){font-size:12px!important;line-height:14px!important}:host([mobile-view]) .byu-header-root button.mobile-menu-button{background-color:transparent;margin-top:10.5px;margin-bottom:10.5px;margin-left:10.5px}:host([no-menu]) .mobile-menu-button{display:none}:host([mobile-view]) .byu-header-search{max-height:35px;transition:max-height .5s cubic-bezier(.4,0,.2,1),transform .5s cubic-bezier(.4,0,.2,1);will-change:max-height,transform;overflow:hidden;transform:scale(1);transform-origin:top}:host(.byu-header-menu-open[mobile-view]) .byu-header-search{max-height:0;transform:scaleY(0)}:host(:not([mobile-view])) .byu-header-root{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;background-color:#002e5d}:host(:not([mobile-view])) .byu-header-root.no-nav{height:48px}:host(:not([mobile-view])) .byu-header-root .nav-expand{display:none}:host(:not([mobile-view])) .byu-header-root .byu-header-actions ::slotted(:hover){color:#002e5d;background-color:#ededed}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary{background-color:#002e5d;color:#fff;height:58px;padding-right:16px}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary,:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search input{border:1px solid #002e5d;border-right:none;height:20px;padding:4px 6px;flex:1;width:217px;box-sizing:content-box}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search button{height:28px;width:30px;text-align:center}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-menu-button{display:none}:host([full-width]) .byu-header-content{max-width:100%!important}:host([full-width]) .menu-inner-wrapper{max-width:100%!important;padding:0}", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".slot-container ::slotted(__byu-menu-active-placeholder__){background:#ededed!important}", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ":host{display:flex;justify-content:center;width:100%;height:auto}.outer-nav{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;box-sizing:border-box;height:35px;position:relative;flex:1;flex-basis:100%}.slot-container ::slotted(.active),.slot-container ::slotted(.selected){background:#ededed!important}.slot-container ::slotted(*){text-decoration:none!important;font-size:14px!important;font-family:HCo Ringside Narrow SSm,Arial,sans-serif!important;font-weight:400!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;letter-spacing:.3px;flex:1;flex-basis:auto;text-transform:uppercase}.slot-container ::slotted(*):hover{background:#32538d!important;color:#fff!important}.slot-container ::slotted(*).active,.slot-container ::slotted(*).selected{background:#ededed!important}.slot-container ::slotted(.active:hover),.slot-container ::slotted(:hover){background:#32538d!important;color:#fff!important}.byu-menu-more-menu{display:none;position:relative;height:35px;width:16.66%;overflow:visible!important;padding:0!important}.byu-menu-more-menu .byu-menu-more{text-decoration:none!important;font-size:14px!important;font-family:HCo Ringside Narrow SSm,Arial,sans-serif!important;font-weight:400!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;text-transform:uppercase;letter-spacing:.3px;position:relative;flex:1;display:block}.byu-menu-more-menu .byu-menu-more:hover{background:#32538d!important;color:#fff!important}.byu-menu-more-menu .byu-menu-more.active,.byu-menu-more-menu .byu-menu-more.selected{background:#ededed!important}.byu-menu-more-menu .byu-menu-more .more-open-button{background-image:url(\"https://cdn.byu.edu/shared-icons/latest/fontawesome/arrow-navy.svg\");height:4px;width:7px;display:inline-block;background-size:100%;margin-bottom:2px;margin-left:4px}.byu-menu-more-menu .byu-menu-more:hover .more-open-button{background-image:url(\"https://cdn.byu.edu/shared-icons/latest/fontawesome/arrow-white.svg\")}.byu-menu-more-menu .byu-menu-more-items{display:none;position:absolute;top:35px;right:0;min-width:100%;max-width:250px;z-index:2;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.75)}.byu-menu-more-menu .byu-menu-more-items ::slotted(*){width:100%;text-decoration:none!important;font-size:14px!important;font-family:HCo Ringside Narrow SSm,Arial,sans-serif!important;font-weight:400!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;text-transform:uppercase;letter-spacing:.3px;display:block;text-align:left!important;padding-left:12px!important;padding-right:12px!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*):hover{background:#32538d!important;color:#fff!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*).active,.byu-menu-more-menu .byu-menu-more-items ::slotted(*).selected{background:#ededed!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(:hover){color:#fff!important}@-moz-document url-prefix(){.byu-menu-more-menu{width:auto}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.byu-menu-more-menu{width:auto}}@supports (-ms-ime-align:auto){.byu-menu-more-menu{width:auto}}.byu-menu-more-visible .byu-menu-more-menu{display:block}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded{background:#ededed;box-shadow:0 0 2px 0 rgba(0,0,0,.75)}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-more-items{display:block}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-fixed-overlay{position:fixed;top:0;bottom:0;left:0;right:0;z-index:1}:host(.mobile-view) .outer-nav{display:block;height:auto}:host(.mobile-view) .byu-menu-more{display:none!important}:host(.mobile-view) .slot-container ::slotted(*){display:block!important;text-align:left!important;padding:18px 18px 18px 25px!important;height:auto!important;width:100%;max-width:100%;position:static;box-sizing:border-box;line-height:12px!important;font-size:12px!important}:host(.mobile-view) .slot-container ::slotted(*).byu-menu-more-menu{padding:0!important}:host(.mobile-view) .byu-menu-more-menu{display:block;width:100%;box-shadow:none;position:static;height:auto}:host(.mobile-view) .byu-menu-more-menu .byu-menu-more-items{display:block;box-shadow:none;padding:0;position:static!important}:host(.mobile-view) .byu-menu-more-menu .byu-menu-more-items ::slotted(*){display:block!important;text-align:left!important;padding:18px 25px!important;height:auto!important;width:100%;position:static;box-sizing:border-box;line-height:12px!important}:host(.mobile-view) .byu-menu-more-menu.byu-menu-more-expanded{box-shadow:none}:host(.mobile-view) .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-fixed-overlay{display:none!important}:host([left-align]) .outer-nav ::slotted(*){min-width:200px;flex:0;padding:0 16px;flex-basis:auto}", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ":host{margin-left:29px}#search-icon{width:17px;height:17px;display:flex}button{background-color:#ededed;border:1px solid #ededed;color:#fff;width:41px;height:27px;display:flex;justify-content:center;align-items:center;box-sizing:border-box;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;z-index:1}#search-form{display:flex;align-items:stretch;align-content:center;width:216px}#search-form #search-container{flex:1}#search-form #search-container input{padding:5px 10px;border:none;height:27px!important;-webkit-appearance:none;border-radius:0;margin:0;box-sizing:border-box;font-family:HCo Ringside Narrow SSm,Arial,sans-serif!important;font-size:12px!important;font-weight:500!important;color:#002e5d!important;width:100%}#search-form #search-container input::placeholder{color:#666!important;opacity:1}#search-form #search-container input::-webkit-input-placeholder{color:#666!important;opacity:1}#search-form #search-container input:-ms-input-placeholder{color:#666!important;opacity:1}#search-form #search-container ::slotted(input){padding:5px 10px;border:none;height:27px!important;-webkit-appearance:none;border-radius:0;margin:0;box-sizing:border-box;font-family:HCo Ringside Narrow SSm,Arial,sans-serif!important;font-size:12px!important;font-weight:500!important;color:#002e5d!important;width:100%}#search-form #search-container ::slotted(input::placeholder){color:#666!important;opacity:1}#search-form #search-container ::slotted(input:-ms-input-placeholder),#search-form #search-container ::slotted(input::-ms-input-placeholder){color:#666!important;opacity:1}#search-form #search-container ::slotted(input::-webkit-input-placeholder){color:#666!important;opacity:1}:host(.mobile-view){width:100%;height:35px;margin:0}:host(.mobile-view) #search-form{width:auto}:host(.mobile-view) #search-form #search-container ::slotted(input),:host(.mobile-view) #search-form #search-container input{padding-left:16px;width:100%;height:35px!important;border-bottom:1px solid #c5c5c5}:host(.mobile-view) #search-button{width:53px;height:35px;padding:0 16px;border-bottom:1px solid #c5c5c5}:host(.mobile-view) #search-icon{width:20px;height:20px;padding-bottom:6.5px;padding-top:6.5px}", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".slot-wrapper{display:flex;flex-direction:row}.slot-wrapper ::slotted(*){height:28px;width:28px;display:block;color:transparent!important;overflow:hidden;background-size:contain;background-repeat:no-repeat;background-clip:content-box;background-position:50%;margin:8px 8px 8px 0!important}.slot-wrapper ::slotted(.facebook),.slot-wrapper ::slotted([slot=facebook]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/fa.svg\")}.slot-wrapper ::slotted(.twitter),.slot-wrapper ::slotted([slot=twitter]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/tw.svg\")}.slot-wrapper ::slotted(.instagram),.slot-wrapper ::slotted([slot=instagram]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/in.svg\")}.slot-wrapper ::slotted(.youtube),.slot-wrapper ::slotted([slot=youtube]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/yo.svg\")}.slot-wrapper ::slotted(.pinterest),.slot-wrapper ::slotted([slot=pinterest]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/pi.svg\")}.slot-wrapper ::slotted(.google-plus),.slot-wrapper ::slotted(.googleplus),.slot-wrapper ::slotted(.gplus),.slot-wrapper ::slotted([slot=google-plus]),.slot-wrapper ::slotted([slot=googleplus]),.slot-wrapper ::slotted([slot=gplus]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/gp.svg\")}.slot-wrapper ::slotted(.linkedin),.slot-wrapper ::slotted([slot=linkedin]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/li.svg\")}.slot-wrapper ::slotted(.rss),.slot-wrapper ::slotted([slot=rss]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/rs.svg\")}.slot-wrapper ::slotted(.snapchat),.slot-wrapper ::slotted([slot=snapchat]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/sn.svg\")}.slot-wrapper ::slotted(.podcast){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/po.svg\")}", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".slot-wrapper ::slotted(*){text-decoration:none!important;font-size:11px!important;font-family:HCo Ringside Narrow SSm,Arial,sans-serif!important;font-weight:400!important;text-transform:uppercase!important;color:#fff!important;letter-spacing:.5px}.has-user,.no-user{display:flex;flex-direction:row;align-items:center}.user-info-image{height:14px;width:14px;margin:5px 11px 5px 5px;background-size:contain}:host(:not([mobile-view])){color:#d8d8d8}:host(:not([mobile-view])) .mobile{display:none}:host(:not([mobile-view])) .slot-wrapper{display:flex;align-items:center}:host(:not([mobile-view])) .slot-wrapper ::slotted(a:hover){text-decoration:underline!important}:host(:not([mobile-view])) .has-user .name ::slotted(*){color:#d8d8d8!important;text-transform:uppercase!important;max-width:130px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-left:7px}:host(:not([mobile-view])) .user-info-image{margin:7px;background-image:url(\"https://cdn.byu.edu/shared-icons/latest/fontawesome/user-circle-o-white.svg\")}:host([mobile-view]){text-decoration:none!important;font-size:14px!important;font-family:HCo Ringside Narrow SSm,Arial,sans-serif!important;font-weight:400!important;color:#002e5d!important;height:35px!important;display:inline-block;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;text-transform:uppercase;letter-spacing:.3px;display:block;box-sizing:border-box;padding:18px 33px!important;line-height:12px;text-align:left!important;height:auto!important;padding:10px 14px 10px 25px!important;background-color:#ededed!important;line-height:12px!important}:host([mobile-view]):hover{background:#32538d!important;color:#fff!important}:host([mobile-view]).active,:host([mobile-view]).selected{background:#ededed!important}:host([mobile-view]) .not-mobile{display:none}:host([mobile-view]) .slot-wrapper ::slotted(*){color:#002e5d!important;font-size:10px}:host([mobile-view]) .has-user .logout{order:3}:host([mobile-view]) .has-user .logout ::slotted(*){color:#666!important}:host([mobile-view]) .has-user .name{order:2;flex:1}:host([mobile-view]) .has-user .name ::slotted(*){text-transform:uppercase!important}:host([mobile-view]) .user-info-image{background-image:url(\"https://cdn.byu.edu/shared-icons/latest/fontawesome/user-circle-o-navy.svg\");margin-left:0}:host(:not([has-user])) .has-user,:host([has-user]) .no-user{display:none}", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(28);
var isArguments = __webpack_require__(27);

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
/* 27 */
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
/* 28 */
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
/* 29 */
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
    __append(__webpack_require__(20));
    __append('</style><div id="header" class="byu-header-root">\n<div class="byu-header-content needs-width-setting stretches">\n<div class="byu-header-primary">\n<a class="byu-logo byu-logo-link" id="home-url" name="home-url" href="">\n<img class="byu-logo byu-logo-image" alt="BYU" src="https://cdn.byu.edu/shared-icons/latest/logos/monogram-white.svg">\n</a><div class="byu-header-title">\n<slot id="site-title" name="site-title"></slot>\n</div>\n');
    if (locals.mobile) {
        __append('<button type="button" class="mobile-menu-button tcon tcon-menu--xbutterfly" aria-label="toggle menu">\n<span class="tcon-menu__lines" aria-hidden="true"></span>\n<span class="tcon-visuallyhidden">toggle menu</span>\n</button>\n');
    }
    __append("</div>");
    if (locals.mobile) {
        __append('<div id="mobileMenu">\n<slot id="user" name="user"></slot>\n<slot id="navbarMenu" name="nav"></slot>\n<div class="byu-header-actions">\n<slot id="actions" name="actions"></slot>\n</div>\n</div>\n');
    }
    __append('<div id="secondary" class="byu-header-secondary">\n');
    if (!locals.mobile) {
        __append('<div class="byu-header-actions">\n<slot id="actions" name="actions"></slot>\n</div>\n<div class="byu-header-user">\n<slot id="user" name="user"></slot>\n</div>\n');
    }
    __append('<div class="byu-header-search">\n<slot id="search" name="search"></slot>\n</div></div>\n</div>\n</div>\n');
    if (!locals.mobile) {
        __append('<div class="menu-outer-wrapper">\n<div class="menu-inner-wrapper slot-wrapper needs-width-setting">\n<slot id="navbarMenu" name="nav"></slot>\n</div>\n</div>\n');
    }
    return __output.join("");
}

/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(17) + "</style> <div class=\"wrapper\"> <slot name=\"actiontext\"></slot> </div>";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(18) + "</style> <h2 class=\"header\"> <slot name=\"header\"></slot> </h2> <div class=\"content\"> <slot></slot> </div>";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(19) + "</style> <div class=\"site-footer-wrapper\"> <div class=\"site-footer needs-width-setting\"> <slot id=\"slot\"></slot> </div> </div> <div class=\"university-footer\"> <div class=\"university-logo-wrapper needs-width-setting\"> <a href=\"https://home.byu.edu/home/\" target=\"_blank\"> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 390 13.719\" class=\"university-logo\"> <defs> <style>.cls-1 {\n                            fill: none;\n                        }\n\n                        .cls-2 {\n                            clip-path: url(#clip-path);\n                        }\n\n                        .cls-3 {\n                            fill: url(#pattern);\n                        }</style> <clipPath id=\"clip-path\"> <rect id=\"Rectangle_92\" data-name=\"Rectangle 92\" class=\"cls-1\" width=\"390\" height=\"13.719\"/> </clipPath> <pattern id=\"pattern\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" viewBox=\"0 0 1971 70\"> <image width=\"1971\" height=\"70\" xlink:href=\"data:image/png;base64,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\"/> </pattern> </defs> <g id=\"Symbol_14_1\" data-name=\"Symbol 14 – 1\" transform=\"translate(-536 -576)\"> <g id=\"Group_82\" data-name=\"Group 82\" transform=\"translate(536 576)\"> <g id=\"Group_81\" data-name=\"Group 81\" class=\"cls-2\"> <rect id=\"Rectangle_91\" data-name=\"Rectangle 91\" class=\"cls-3\" width=\"390\" height=\"13.719\"/> </g> </g> </g> </svg></a> </div> <div class=\"university-info needs-width-setting\"> <span class=\"info-text\">Provo, UT 84602, USA</span> <span class=\"info-text\"><a class=\"contact-phone\" href=\"tel:18014224636\">801-422-4636</a></span> <span class=\"info-text\">&copy;&nbsp;<span id=\"currentYear\"></span> All Rights Reserved</span> </div> </div>";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(22) + "</style> <nav class=\"outer-nav slot-container needs-width-setting\"> <slot class=\"byu-menu-items\" id=\"byu-menu-items\"></slot> <div class=\"byu-menu-more-menu\"> <a href=\"javascript: void 0\" class=\"byu-menu-more\"> More <div class=\"more-open-button\" aria-label=\"More\"> </div> </a> <div class=\"byu-menu-more-items slot-container\"> <slot class=\"byu-menu-more-slot\" id=\"byu-menu-more-slot\" name=\"more\"></slot> </div> </div> </nav>";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(23) + "</style> <div id=\"search-form\"> <div id=\"search-container\"> <slot id=\"search\"><input type=\"search\" placeholder=\"Search\"></slot> </div> <button id=\"search-button\" type=\"submit\"> <img id=\"search-icon\" src=\"https://cdn.byu.edu/shared-icons/latest/fontawesome/search-navy.svg\" alt=\"Run Search\"> </button> </div>";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(24) + "</style> <div class=\"slot-wrapper\"> <slot id=\"social-main\"></slot> <slot id=\"social-deprecated-facebook\" name=\"facebook\"></slot> <slot id=\"social-deprecated-twitter\" name=\"twitter\"></slot> <slot id=\"social-deprecated-instagram\" name=\"instagram\"></slot> <slot id=\"social-deprecated-youtube\" name=\"youtube\"></slot> <slot id=\"social-deprecated-pinterest\" name=\"pinterest\"></slot> <slot id=\"social-deprecated-googleplus\" name=\"googleplus\"></slot> <slot id=\"social-deprecated-linkedin\" name=\"linkedin\"></slot> <slot id=\"social-deprecated-rss\" name=\"rss\"></slot> <slot id=\"social-deprecated-snapchat\" name=\"snapchat\"></slot> </div>";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(25) + "</style> <div class=\"byu-user-wrapper\"> <div class=\"no-user slot-wrapper\"> <div class=\"user-info-image\" aria-label=\"User Icon\"> </div> <span class=\"text slot-wrapper\"> <slot name=\"login\">Sign In</slot> </span> </div> <div class=\"has-user\"> <span class=\"name slot-wrapper\"> <slot name=\"user-name\" id=\"user-name\"></slot> </span> <div class=\"user-info-image\" aria-label=\"User Icon\"> </div> <span class=\"logout slot-wrapper\"> <slot name=\"logout\">Sign Out</slot> </span> </div> </div>";

/***/ })
/******/ ]);
//# sourceMappingURL=components.js.map