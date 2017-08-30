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
const ATTR_STRETCH_TOP_BAR = 'stretch-top-bar';
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
        }, 0);
    }

    static get observedAttributes() {
        return [ATTR_MOBILE_MAX_WIDTH, ATTR_MOBILE_VIEW, ATTR_MENU_OPEN, ATTR_HOME_URL, ATTR_MAX_WIDTH, ATTR_STRETCH_TOP_BAR];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
            case ATTR_MOBILE_MAX_WIDTH:
                this._applyMobileWidth();
                return;
            case ATTR_STRETCH_TOP_BAR:
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

    get stretchTopBar() {
        return this.hasAttribute(ATTR_STRETCH_TOP_BAR);
    }

    set stretchTopBar(value) {
        if (value) {
            this.setAttribute(ATTR_STRETCH_TOP_BAR, '');
        } else {
            this.removeAttribute(ATTR_STRETCH_TOP_BAR);
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
            let stretch = this.stretchTopBar;
            let maxWidth = this.maxWidth;
            let needsWidthSetting = this.shadowRoot.querySelectorAll('.needs-width-setting');
            needsWidthSetting.forEach(element => {
               if (element.classList.contains('stretches') && stretch) {
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
        updateMoreMenuState(component);
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
            setTimeout(() => function() {
                updateMoreMenuState(component);
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

function updateMoreMenuState(component) {
    var children = component.shadowRoot.querySelector('.byu-menu-items').assignedNodes();
    var moreChildren = component.shadowRoot.querySelector('.byu-menu-more-slot').assignedNodes();
    var filteredChildren = children.filter(function (node) { return node instanceof HTMLElement });
    var filteredMoreChildren = moreChildren.filter(function (node) { return node instanceof HTMLElement });
    const length = filteredChildren.length + filteredMoreChildren.length;
    const hasOverflow = length > 6;
    const nav = component.shadowRoot.querySelector('.outer-nav');

    if (nav) toggleClass(nav, 'byu-menu-more-visible', hasOverflow);

    if (hasOverflow) {
        for (let i = 5; i < filteredChildren.length; i++) {
            filteredChildren[i].setAttribute('slot', 'more');
        }
    } else if (length === 6) {
        filteredChildren[5].setAttribute('slot', '');
    }

    if (length < 4) {
        console.log(length);
        component.setAttribute('left-align', '');
    }
    else {
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
	"version": "1.2.0",
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
		"browser-sync": "^2.18.6",
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
exports.push([module.i, ":host{background-color:#666;font-family:Vitesse A,Vitesse B,Georgia,serif;font-size:20px!important;color:#fff;display:inline-block;text-align:center;line-height:2.1em;height:45px;width:auto;min-width:125px;margin:10px 0 20px;-webkit-box-shadow:0 3px 5px 0 rgba(0,0,0,.35);-moz-box-shadow:0 3px 5px 0 rgba(0,0,0,.35);box-shadow:0 3px 5px 0 rgba(0,0,0,.35)}.wrapper ::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;font-weight:400!important;color:#fff!important;display:inline-block!important;position:relative!important;height:100%!important;width:100%!important;margin:0 20px!important;left:-20px!important;cursor:pointer!important;vertical-align:middle!important}.wrapper ::slotted(a){text-decoration:none!important}", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".header{width:100%;margin:0 0 8px}.header ::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;text-transform:uppercase!important;color:#002e5d!important;font-size:20px!important;border-bottom:1px solid #c5c5c5!important;padding-bottom:3px!important;font-weight:400!important;width:100%;display:inline-block}.header ::slotted(br){display:none}.content ::slotted(:not(byu-footer-action-button)){font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-size:14px!important;font-weight:400!important;color:#666!important;display:block;padding:11px 0}.content ::slotted(*){margin:0}.content ::slotted(a){text-decoration:none!important;outline:none!important;color:#666;font-size:14px}.content ::slotted(a:hover){cursor:pointer;color:#002e5d!important;font-size:14px}.content a{text-decoration:none!important;outline:none!important;color:#666;font-size:14px}.content a:hover{cursor:pointer;color:#002e5d!important;font-size:14px}", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".university-footer{background-color:#002e5d;text-align:center;font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:400;font-size:12px;color:#fff;width:100%;padding:21px 0;display:flex;justify-content:center;align-items:center;flex-direction:column}.university-footer a{color:#fff;text-decoration:none}.university-footer a:hover{text-decoration:underline}.university-logo-wrapper{max-width:1200px;width:100%;padding:0 8px;box-sizing:border-box}.university-logo{max-width:100%;width:450px;height:40px;margin:-10px 0}.university-info{display:flex;flex-direction:column;align-items:center}.university-info>:not(:first-of-type){margin-top:.25em}@media (min-width:425px){.university-info{flex-direction:row}.university-info>:not(:first-of-type){margin-top:0}.university-info>:not(:first-of-type):before{display:inline-block;color:#fff;content:\"|\";text-align:center;width:1em}}.site-footer-wrapper{background-color:#e5e5e5}.site-footer{margin:0 auto;height:auto;box-sizing:border-box;padding:0 8px;display:flex;flex-direction:column;flex-wrap:wrap}.site-footer ::slotted(*){flex-grow:1;margin:16px 8px 0}.site-footer ::slotted(.double-wide){flex-grow:2}.site-footer ::slotted(.triple-wide){flex-grow:3}@media (min-width:600px){.site-footer{flex-direction:row}.site-footer ::slotted(*){width:calc(50% - 16px)}.site-footer ::slotted(.double-wide),.site-footer ::slotted(.triple-wide){width:calc(100% - 16px)}}@media (min-width:1024px){.site-footer{flex-wrap:nowrap;justify-content:center}.site-footer ::slotted(*){width:calc(20% - 16px);margin:30px 8px 40px;max-width:calc(30% - 16px)}.site-footer ::slotted(.double-wide){width:calc(40% - 16px);max-width:calc(60% - 16px)}.site-footer ::slotted(.triple-wide){width:calc(60% - 16px);max-width:calc(100% - 30% - 16px)}.site-footer ::slotted(:first-child){margin-left:0}.site-footer ::slotted(:last-child){margin-right:0}}", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".tcon{appearance:none;border:none;cursor:pointer;display:flex;justify-content:center;align-items:center;height:24px;transition:.15s;user-select:none;width:17px;background:transparent;outline:none;-webkit-tap-highlight-color:transparent;padding:0!important}.tcon>*{display:block}.tcon:focus,.tcon:hover{outline:none}.tcon::-moz-focus-inner{border:0}.tcon-menu__lines{width:24px;position:relative}.tcon-menu__lines,.tcon-menu__lines:after,.tcon-menu__lines:before{display:inline-block;border-radius:1px;height:3px;transition:.15s;background:#fff}.tcon-menu__lines:after,.tcon-menu__lines:before{width:24px;content:\"\";position:absolute;left:0;transform-origin:1.71429px center;width:100%}.tcon-menu__lines:before{top:6px}.tcon-menu__lines:after{top:-6px}.tcon-transform .tcon-menu__lines{transform:scale3d(.8,.8,.8)}.tcon-menu--xbutterfly{width:auto}.tcon-menu--xbutterfly .tcon-menu__lines:after,.tcon-menu--xbutterfly .tcon-menu__lines:before{transform-origin:50% 50%;transition:top .3s ease .6s,transform .3s ease}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines{background:transparent}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:after,.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:before{top:0;transition:top .3s ease,transform .3s ease .5s;width:24px}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:before{transform:rotate(45deg)}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:after{transform:rotate(-45deg)}.tcon-visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.tcon-visuallyhidden:active,.tcon-visuallyhidden:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.byu-header-actions{display:flex;align-items:center;height:34px}.byu-header-actions ::slotted(*){text-decoration:none!important;font-size:13px!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;text-transform:uppercase!important;color:#fff!important}.byu-header-root{width:100%;font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-size:18px}.byu-header-root .byu-header-content{display:flex;justify-content:center;flex:1;flex-basis:100%;box-sizing:border-box}.byu-header-root img.byu-logo{margin-right:16px}.byu-header-root button{background-color:#666;color:#fff;border:none;cursor:pointer}.byu-header-root .byu-header-primary{background-color:#002e5d;color:#fff;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;flex:1;min-height:55px;box-sizing:border-box;padding-left:16px}.byu-header-root .byu-header-primary .byu-header-title{overflow:hidden;-ms-text-overflow:ellipsis;text-overflow:ellipsis;flex:1;display:flex;flex-direction:column;font-size:22px;font-family:Vitesse A,Vitesse B,Georgia,serif!important;color:#fff!important;text-decoration:none}.byu-header-root .byu-header-primary .byu-header-title ::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;font-weight:400;font-size:22px;line-height:normal}.byu-header-root .byu-header-primary .byu-header-title ::slotted(.subtitle){font-size:14px;line-height:14px;margin:0;margin-top:-1px;margin-bottom:3px}.byu-header-root .byu-header-primary .byu-header-title ::slotted(.subtitle:first-child){font-size:14px;line-height:14px;margin-bottom:-1px;margin-top:2px}.byu-header-root .byu-header-primary .byu-header-user button{background-color:transparent;position:relative}.byu-header-root .byu-header-primary .byu-header-user button .icon{width:20px;height:20px;font-size:20px;vertical-align:middle}.byu-header-root .byu-header-primary .byu-header-user button .label{font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:500;font-size:13px;text-transform:uppercase}.byu-header-root .byu-header-primary .byu-header-search #search-input{font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:500;font-size:13px;color:#002e5d}.byu-header-root .byu-header-primary .byu-header-search #search-input::-webkit-input-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-header-search #search-input::-ms-input-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-header-search #search-input::-moz-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-logo,.byu-header-root .byu-header-primary .byu-logo-link{height:34px}.menu-outer-wrapper{border-bottom:1px solid #ccc;background-color:#fff}.menu-inner-wrapper{margin:0 auto;padding:0 16px;box-sizing:border-box}:host(.menu-transparent) .menu-outer-wrapper{opacity:.88}:host(.below-max-width) .menu-inner-wrapper{padding:0}#mobileMenu{max-height:0;transition:max-height .5s cubic-bezier(.4,0,.2,1);will-change:max-height;overflow:hidden}:host([mobile-view]) .byu-header-root .byu-header-content{display:block;margin:0;padding:0}:host([mobile-view]) .byu-header-root .byu-logo{align-self:flex-start}:host([mobile-view]) .byu-header-root .byu-header-primary{padding-top:10.5px;padding-bottom:10.5px;min-height:34px;padding-right:16px!important;align-items:baseline}:host([mobile-view]) .byu-header-root .byu-header-actions{text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;height:35px!important;display:inline-block;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;display:block;box-sizing:border-box;padding:18px 33px!important;line-height:12px;text-align:left!important;height:auto!important;padding:0!important;background-color:#e6e6e6;color:#002e5d!important;border-top:1px solid #c5c5c5;width:100%;display:flex;flex-direction:column;align-items:flex-start;line-height:12px!important}:host([mobile-view]) .byu-header-root .byu-header-actions:hover{background:#c5c5c5!important}:host([mobile-view]) .byu-header-root .byu-header-actions.active,:host([mobile-view]) .byu-header-root .byu-header-actions.selected{background:#e5e5e5!important}:host([mobile-view]) .byu-header-root #actions a{color:#002e5d!important;font-weight:500!important}:host([mobile-view]) .byu-header-root #actions p{margin:0!important}:host([mobile-view]) .byu-header-root .byu-header-actions ::slotted(*){color:#002e5d!important;padding:18px 50px!important}:host([mobile-view]) .byu-header-root>div>:not(.byu-logo){margin-right:0}:host([mobile-view]) .byu-header-root .byu-header-title{align-items:flex-start;align-self:center;font-size:16px!important}:host([mobile-view]) .byu-header-root .byu-header-title ::slotted(*){font-size:16px!important}:host([mobile-view]) .byu-header-root .byu-header-title ::slotted(.subtitle){font-size:12px!important;margin-top:3px}:host([mobile-view]) .byu-header-root .byu-header-title ::slotted(.subtitle:first-child){margin-top:0!important;margin-bottom:4px}:host([mobile-view]) .byu-header-root button.mobile-menu-button{background-color:transparent;margin-top:5px;margin-bottom:5px;margin-left:5px}:host([no-menu]) .mobile-menu-button{display:none}:host([mobile-view]) .byu-header-search{max-height:35px;transition:max-height .5s cubic-bezier(.4,0,.2,1),transform .5s cubic-bezier(.4,0,.2,1);will-change:max-height,transform;overflow:hidden;transform:scale(1);transform-origin:top}:host(.byu-header-menu-open[mobile-view]) .byu-header-search{max-height:0;transform:scaleY(0)}:host(:not([mobile-view])) .byu-header-root{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;background-color:#002e5d}:host(:not([mobile-view])) .byu-header-root .byu-header-actions ::slotted(*){margin-left:4px;margin-right:4px}:host(:not([mobile-view])) .byu-header-root .byu-header-actions a{color:#fff!important}:host(:not([mobile-view])) .byu-header-root.no-nav{height:48px}:host(:not([mobile-view])) .byu-header-root .nav-expand{display:none}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary{background-color:#002e5d;color:#fff;height:55px;padding-right:16px}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary,:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search input{border:1px solid #002e5d;border-right:none;height:20px;padding:4px 6px;flex:1;width:217px;box-sizing:content-box}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search button{height:28px;width:30px;text-align:center}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-menu-button{display:none}:host([full-width]) .byu-header-content{max-width:100%!important}:host([full-width]) .menu-inner-wrapper{max-width:100%!important;padding:0}", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".slot-container ::slotted(__byu-menu-active-placeholder__){background:#e5e5e5!important}", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ":host{display:flex;justify-content:center;width:100%;height:auto;background:#fff}:host(.transparent){opacity:.88}.outer-nav{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;box-sizing:border-box;height:35px;position:relative;flex:1;flex-basis:100%}.slot-container ::slotted(*){text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;flex:1;flex-basis:auto}.slot-container ::slotted(*):hover{background:#c5c5c5!important}.slot-container ::slotted(*).active,.slot-container ::slotted(*).selected{background:#e5e5e5!important}.slot-container ::slotted(:hover){background:#c5c5c5!important}.slot-container ::slotted(.active),.slot-container ::slotted(.selected){background:#e5e5e5!important}.byu-menu-more-menu{display:none;position:relative;height:35px;width:16.66%;overflow:visible!important;padding:0!important}.byu-menu-more-menu .byu-menu-more{text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;position:relative;flex:1;display:block}.byu-menu-more-menu .byu-menu-more:hover{background:#c5c5c5!important}.byu-menu-more-menu .byu-menu-more.active,.byu-menu-more-menu .byu-menu-more.selected{background:#e5e5e5!important}.byu-menu-more-menu .byu-menu-more .more-open-button{background-image:url(\"https://cdn.byu.edu/shared-icons/latest/fontawesome/down-open-navy.svg\");height:13px;width:13px;display:inline-block;background-size:100%}.byu-menu-more-menu .byu-menu-more-items{display:none;position:absolute;top:35px;right:0;min-width:100%;max-width:250px;z-index:2;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.75)}.byu-menu-more-menu .byu-menu-more-items ::slotted(*){width:100%;text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;display:block;text-align:left!important;padding-left:12px!important;padding-right:12px!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*):hover{background:#c5c5c5!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*).active,.byu-menu-more-menu .byu-menu-more-items ::slotted(*).selected{background:#e5e5e5!important}.byu-menu-more-visible .byu-menu-more-menu{display:block}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded{background:#e5e5e5;box-shadow:0 0 2px 0 rgba(0,0,0,.75)}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-more-items{display:block}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-fixed-overlay{position:fixed;top:0;bottom:0;left:0;right:0;z-index:1}:host(.mobile-view) .outer-nav{display:block;height:auto}:host(.mobile-view) .byu-menu-more{display:none!important}:host(.mobile-view) .slot-container ::slotted(*){display:block!important;text-align:left!important;padding:18px 18px 18px 50px!important;height:auto!important;width:100%;max-width:100%;position:static;box-sizing:border-box;line-height:12px!important}:host(.mobile-view) .slot-container ::slotted(*).byu-menu-more-menu{padding:0!important}:host(.mobile-view) .byu-menu-more-menu{display:block;width:100%;box-shadow:none;position:static;height:auto}:host(.mobile-view) .byu-menu-more-menu .byu-menu-more-items{display:block;box-shadow:none;padding:0;position:static!important}:host(.mobile-view) .byu-menu-more-menu .byu-menu-more-items ::slotted(*){display:block!important;text-align:left!important;padding:18px 50px!important;height:auto!important;width:100%;position:static;box-sizing:border-box;line-height:12px!important}:host(.mobile-view) .byu-menu-more-menu.byu-menu-more-expanded{box-shadow:none}:host(.mobile-view) .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-fixed-overlay{display:none!important}:host([left-align]) .outer-nav ::slotted(*){min-width:200px;flex:0;padding:0 16px;flex-basis:auto}", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ":host{margin-left:20px}#search-icon{width:17px;height:17px}button{background-color:var(--byu-search-color,#666);border:1px solid var(--byu-search-color,#666);color:#fff;width:30px;height:30px;display:flex;align-items:center;box-sizing:border-box}#search-form{display:flex;align-items:stretch;align-content:center;width:216px}#search-form #search-container{flex:1}#search-form #search-container input{padding:5px 10px;border:none;height:30px;-webkit-appearance:none;border-radius:0;margin:0;box-sizing:border-box;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-size:13px!important;font-weight:500!important;color:#002e5d!important;width:100%}#search-form #search-container input::placeholder{color:#666}#search-form #search-container input::-webkit-input-placeholder{color:#666}#search-form #search-container input:-ms-input-placeholder,#search-form #search-container input::-ms-input-placeholder{color:#666}#search-form #search-container ::slotted(input){padding:5px 10px;border:none;height:30px;-webkit-appearance:none;border-radius:0;margin:0;box-sizing:border-box;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-size:13px!important;font-weight:500!important;color:#002e5d!important;width:100%}#search-form #search-container ::slotted(input::placeholder){color:#666}#search-form #search-container ::slotted(input:-ms-input-placeholder),#search-form #search-container ::slotted(input::-ms-input-placeholder){color:#666}#search-form #search-container ::slotted(input::-webkit-input-placeholder){color:#666}:host(.mobile-view){width:100%;height:35px;margin:0}:host(.mobile-view) #search-form{width:auto}:host(.mobile-view) #search-form #search-container ::slotted(input),:host(.mobile-view) #search-form #search-container input{padding-left:16px;width:100%;height:35px;border-bottom:1px solid #c5c5c5}:host(.mobile-view) #search-button{width:53px;height:35px;padding:0 16px}:host(.mobile-view) #search-icon{width:20px;height:20px}", ""]);

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
exports.push([module.i, ".slot-wrapper ::slotted(*){text-decoration:none!important;font-size:13px!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;text-transform:uppercase!important;color:#fff!important}.has-user,.no-user{display:flex;flex-direction:row;align-items:center}.user-info-image{height:20px;width:20px;margin:5px;margin-right:11px;background-size:contain}:host(:not([mobile-view])){color:#fff}:host(:not([mobile-view])) .mobile{display:none}:host(:not([mobile-view])) .slot-wrapper{display:flex;align-items:center}:host(:not([mobile-view])) .slot-wrapper ::slotted(a:hover){text-decoration:underline!important}:host(:not([mobile-view])) .has-user .name ::slotted(*){color:#c3ddf9!important;text-transform:uppercase!important;max-width:130px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host(:not([mobile-view])) .user-info-image{margin:7px;background-image:url(\"https://cdn.byu.edu/shared-icons/latest/fontawesome/user-circle-o-white.svg\")}:host([mobile-view]){text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;display:block;box-sizing:border-box;padding:18px 33px!important;line-height:12px;text-align:left!important;height:auto!important;border-bottom:1px solid #c5c5c5;padding:10px 14px!important;background-color:#fff!important;line-height:12px!important}:host([mobile-view]):hover{background:#c5c5c5!important}:host([mobile-view]).active,:host([mobile-view]).selected{background:#e5e5e5!important}:host([mobile-view]) .not-mobile{display:none}:host([mobile-view]) .slot-wrapper ::slotted(*){color:#002e5d!important}:host([mobile-view]) .has-user .logout{order:3}:host([mobile-view]) .has-user .name{order:2;flex:1}:host([mobile-view]) .has-user .name ::slotted(*){text-transform:capitalize!important;color:#0057b8!important}:host([mobile-view]) .user-info-image{background-image:url(\"https://cdn.byu.edu/shared-icons/latest/fontawesome/user-circle-o-navy.svg\")}:host(:not([has-user])) .has-user,:host([has-user]) .no-user{display:none}", ""]);

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
    __append('</style><div id="header" class="byu-header-root"><div class="byu-header-content needs-width-setting stretches">\n<div class="byu-header-primary">\n<a class="byu-logo" id="home-url" name="home-url" href="">\n<img class="byu-logo" alt="BYU" src="https://cdn.byu.edu/shared-icons/latest/logos/monogram-white.svg">\n</a><div class="byu-header-title">\n<slot id="site-title" name="site-title"></slot>\n</div>\n');
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

module.exports = "<style>" + __webpack_require__(19) + "</style> <div class=\"site-footer-wrapper\"> <div class=\"site-footer needs-width-setting\"> <slot id=\"slot\"></slot> </div> </div> <div class=\"university-footer\"> <div class=\"university-logo-wrapper needs-width-setting\"> <a href=\"https://home.byu.edu/home/\" target=\"_blank\"> <img src=\"https://cdn.byu.edu/shared-icons/latest/logos/word-mark-wide-white.svg\" alt=\"Brigham Young University\" class=\"university-logo\"></a> </div> <div class=\"university-info needs-width-setting\"> <span class=\"info-text\">&copy;<span id=\"currentYear\"></span> All Rights Reserved</span> <span class=\"info-text\">Provo, UT 84602, USA</span> <span class=\"info-text\"><a class=\"contact-phone\" href=\"tel:18014224636\">801-422-4636</a></span> </div> </div>";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(22) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <nav class=\"outer-nav slot-container needs-width-setting\"> <slot class=\"byu-menu-items\" id=\"byu-menu-items\"></slot> <div class=\"byu-menu-more-menu\"> <a href=\"javascript: void 0\" class=\"byu-menu-more\"> More <div class=\"more-open-button\" aria-label=\"More\"> </div> </a> <div class=\"byu-menu-more-items slot-container\"> <slot class=\"byu-menu-more-slot\" id=\"byu-menu-more-slot\" name=\"more\"></slot> </div> </div> </nav>";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(23) + "</style> <div id=\"search-form\"> <div id=\"search-container\"> <slot id=\"search\"><input type=\"search\" placeholder=\"Search\"></slot> </div> <button id=\"search-button\" type=\"submit\"> <img id=\"search-icon\" src=\"https://cdn.byu.edu/shared-icons/latest/fontawesome/search-white.svg\" alt=\"Run Search\"> </button> </div>";

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