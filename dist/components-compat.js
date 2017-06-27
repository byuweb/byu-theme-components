;(function() {
"use strict";

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // identity function for calling harmony imports with the correct context
    /******/__webpack_require__.i = function (value) {
        return value;
    };
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 13);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(16);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__lib_matchesSelector__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__ = __webpack_require__(15);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__ = __webpack_require__(14);
    /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
        return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"];
    });
    /* unused harmony reexport matchesSelector */
    /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
        return __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__["a"];
    });
    /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__["a"];
    });
    /**
     * Created by ThatJoeMoore on 2/14/17
     */

    /***/
},
/* 1 */
/***/function (module, exports) {

    /*
    	MIT License http://www.opensource.org/licenses/mit-license.php
    	Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    module.exports = function () {
        var list = [];

        // return the list of modules as css string
        list.toString = function toString() {
            var result = [];
            for (var i = 0; i < this.length; i++) {
                var item = this[i];
                if (item[2]) {
                    result.push("@media " + item[2] + "{" + item[1] + "}");
                } else {
                    result.push(item[1]);
                }
            }
            return result.join("");
        };

        // import a list of modules into the list
        list.i = function (modules, mediaQuery) {
            if (typeof modules === "string") modules = [[null, modules, ""]];
            var alreadyImportedModules = {};
            for (var i = 0; i < this.length; i++) {
                var id = this[i][0];
                if (typeof id === "number") alreadyImportedModules[id] = true;
            }
            for (i = 0; i < modules.length; i++) {
                var item = modules[i];
                // skip already imported module
                // this implementation is not 100% perfect for weird media query combinations
                //  when a module is imported multiple times with different media queries.
                //  I hope this will never occur (Hey this way we have smaller bundles)
                if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                    if (mediaQuery && !item[2]) {
                        item[2] = mediaQuery;
                    } else if (mediaQuery) {
                        item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                    }
                    list.push(item);
                }
            }
        };
        return list;
    };

    /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = matchesSelector;
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
        var proto = Element.prototype;
        var actual = proto.matches || proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector || function (s) {
            var doc = this.document || this.ownerDocument;
            return doc.querySelectorAll(s).indexOf(this) !== -1;
        };

        return actual.call(el, selector);
    }

    /***/
},
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html__ = __webpack_require__(30);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);

    var BYUFooterActionButton = function (_HTMLElement) {
        _inherits(BYUFooterActionButton, _HTMLElement);

        function BYUFooterActionButton() {
            _classCallCheck(this, BYUFooterActionButton);

            var _this = _possibleConstructorReturn(this, (BYUFooterActionButton.__proto__ || Object.getPrototypeOf(BYUFooterActionButton)).call(this));

            _this.attachShadow({ mode: 'open' });
            return _this;
        }

        _createClass(BYUFooterActionButton, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-footer-action-button', __WEBPACK_IMPORTED_MODULE_0__byu_footer_action_button_html___default.a);
            }
        }]);

        return BYUFooterActionButton;
    }(HTMLElement);

    window.customElements.define('byu-footer-action-button', BYUFooterActionButton);
    window.BYUFooterActionButton = BYUFooterActionButton;

    /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html__ = __webpack_require__(31);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);

    var BYUFooterColumn = function (_HTMLElement2) {
        _inherits(BYUFooterColumn, _HTMLElement2);

        function BYUFooterColumn() {
            _classCallCheck(this, BYUFooterColumn);

            var _this2 = _possibleConstructorReturn(this, (BYUFooterColumn.__proto__ || Object.getPrototypeOf(BYUFooterColumn)).call(this));

            _this2.attachShadow({ mode: 'open' });
            return _this2;
        }

        _createClass(BYUFooterColumn, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-footer-column', __WEBPACK_IMPORTED_MODULE_0__byu_footer_column_html___default.a);
            }
        }]);

        return BYUFooterColumn;
    }(HTMLElement);

    window.customElements.define('byu-footer-column', BYUFooterColumn);
    window.BYUFooterColumn = BYUFooterColumn;

    /***/
},
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_footer_html__ = __webpack_require__(32);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_footer_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_footer_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);

    var BYUFooter = function (_HTMLElement3) {
        _inherits(BYUFooter, _HTMLElement3);

        function BYUFooter() {
            _classCallCheck(this, BYUFooter);

            var _this3 = _possibleConstructorReturn(this, (BYUFooter.__proto__ || Object.getPrototypeOf(BYUFooter)).call(this));

            _this3.attachShadow({ mode: 'open' });
            return _this3;
        }

        _createClass(BYUFooter, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                var component = this;
                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](component, 'byu-footer', __WEBPACK_IMPORTED_MODULE_0__byu_footer_html___default.a, function () {
                    // always show the current year in the copyright message
                    var currentYear = component.shadowRoot.querySelector("#currentYear");
                    currentYear.innerHTML = new Date().getFullYear();
                });
            }
        }]);

        return BYUFooter;
    }(HTMLElement);

    window.customElements.define('byu-footer', BYUFooter);
    window.BYUFooter = BYUFooter;

    /***/
},
/* 6 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html__ = __webpack_require__(28);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_deep_equal__ = __webpack_require__(25);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_deep_equal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_deep_equal__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2_byu_web_component_utils__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__icons_transformicons__ = __webpack_require__(12);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__icons_transformicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__icons_transformicons__);

    var ATTR_MOBILE_MAX_WIDTH = 'mobile-max-width';
    var ATTR_MOBILE_VIEW = 'mobile-view';
    var ATTR_MENU_OPEN = 'menu-open';
    var ATTR_MENU_KEEP_OPEN = 'menu-keep-open';
    var ATTR_NO_MENU = 'no-menu';
    var ATTR_HOME_URL = 'home-url';

    var DEFAULT_MOBILE_WIDTH = '1023px';
    var DEFAULT_HOME_URL = 'https://byu.edu/';

    var BYUHeader = function (_HTMLElement4) {
        _inherits(BYUHeader, _HTMLElement4);

        function BYUHeader() {
            _classCallCheck(this, BYUHeader);

            var _this4 = _possibleConstructorReturn(this, (BYUHeader.__proto__ || Object.getPrototypeOf(BYUHeader)).call(this));

            _this4.attachShadow({ mode: 'open' });
            return _this4;
        }

        _createClass(BYUHeader, [{
            key: '_render',
            value: function _render() {
                var _this5 = this;

                var state = {
                    mobile: this.inMobileView
                };
                if (!__WEBPACK_IMPORTED_MODULE_1_deep_equal__(state, this._renderState)) {
                    __WEBPACK_IMPORTED_MODULE_2_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-header', __WEBPACK_IMPORTED_MODULE_0__byu_header_ejs_html__(state), function () {
                        _this5._renderState = state;
                        _this5._addSlotListeners();
                        _this5._notifyChildrenOfMobileState();
                        _this5._addButtonListeners();
                        _this5._checkIfMenuIsNeeded();
                        _this5._checkIfFullWidth();
                        _this5._applyHomeUrl();
                    });
                }
            }
        }, {
            key: '_checkIfMenuIsNeeded',
            value: function _checkIfMenuIsNeeded() {
                // check whether to show the mobile menu button
                var userSlot = this.shadowRoot.querySelector("#user");
                var hasUserInfo = userSlot.assignedNodes().length !== 0;

                var menuSlot = this.shadowRoot.querySelector("#navbarMenu");
                var hasMenu = menuSlot.assignedNodes().length !== 0;

                var actionSlot = this.shadowRoot.querySelector('#actions');
                var hasActions = actionSlot.assignedNodes().length !== 0;

                this.noMenu = !(hasUserInfo || hasMenu || hasActions);

                if (menuSlot.assignedNodes().length < 4) {
                    this.setAttribute('left-align', '');
                } else {
                    this.removeAttribute('left-align');
                }
            }
        }, {
            key: '_checkIfFullWidth',
            value: function _checkIfFullWidth() {
                var menuSlot = this.shadowRoot.querySelector('#navbarMenu');
                if (menuSlot.assignedNodes().length > 0) {
                    var menu = menuSlot.assignedNodes()[0];
                    if (this.hasAttribute('full-width')) {
                        menu.setAttribute('full-width', '');
                    } else {
                        menu.removeAttribute('full-width');
                    }
                }
            }
        }, {
            key: '_addButtonListeners',
            value: function _addButtonListeners() {
                var _this6 = this;

                if (!this.inMobileView) {
                    this.menuOpen = false;
                    return;
                }
                var menuButton = this.shadowRoot.querySelector('.mobile-menu-button');
                menuButton.addEventListener('click', function () {
                    return _this6._toggleMenu();
                });
            }
        }, {
            key: '_toggleMenu',
            value: function _toggleMenu() {
                this.menuOpen = !this.menuOpen;
            }
        }, {
            key: '_addSlotListeners',
            value: function _addSlotListeners() {
                var _this7 = this;

                this._findAllSlots().forEach(function (each) {
                    each.addEventListener('slotchange', function (event) {
                        _this7._notifyChildrenOfMobileState();
                        _this7._checkIfMenuIsNeeded();
                    });
                });
            }
        }, {
            key: '_notifyChildrenOfMobileState',
            value: function _notifyChildrenOfMobileState() {
                var kids = this._findAllDistributedChildren();
                if (this.inMobileView) {
                    kids.forEach(function (each) {
                        each.setAttribute(ATTR_MOBILE_VIEW, '');
                        each.classList.add(ATTR_MOBILE_VIEW);
                    });
                } else {
                    kids.forEach(function (each) {
                        each.removeAttribute(ATTR_MOBILE_VIEW);
                        each.classList.remove(ATTR_MOBILE_VIEW);
                    });
                }
            }
        }, {
            key: '_findAllSlots',
            value: function _findAllSlots() {
                var slots = this.shadowRoot.querySelectorAll('slot');
                var arr = [];
                for (var i = 0; i < slots.length; ++i) {
                    arr.push(slots[i]);
                }
                return arr;
            }
        }, {
            key: '_findAllDistributedChildren',
            value: function _findAllDistributedChildren() {
                return this._findAllSlots().map(function (s) {
                    return s.assignedNodes().filter(function (n) {
                        return n instanceof HTMLElement;
                    });
                }).reduce(function (agg, each) {
                    return agg.concat(each);
                }, []);
            }
        }, {
            key: 'connectedCallback',
            value: function connectedCallback() {
                //This is a hack to ensure that the right defaults get applied.
                this.mobileMaxWidth = this.mobileMaxWidth;
                this._applyMobileWidth();
                this._render();

                var header = this;
                setTimeout(function () {
                    var menu = header.shadowRoot.querySelector('#mobileMenu');
                    if (menu) menu.addEventListener('click', function openMenuClickHandler() {
                        console.log(menu.innerHTML);
                        if (header.hasAttribute(ATTR_MOBILE_VIEW) && header.hasAttribute(ATTR_MENU_OPEN) && !header.hasAttribute(ATTR_MENU_KEEP_OPEN)) {
                            header.removeAttribute(ATTR_MENU_OPEN);
                        }
                    });
                }, 0);
            }
        }, {
            key: 'attributeChangedCallback',
            value: function attributeChangedCallback(attr, oldValue, newValue) {
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
        }, {
            key: '_applyMenuOpen',
            value: function _applyMenuOpen() {
                var menu = this.shadowRoot.querySelector('#mobileMenu');
                if (!menu) return;
                if (this.menuOpen) {
                    menu.style.maxHeight = menu.scrollHeight + 'px';
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__icons_transformicons__["transform"])(this.shadowRoot.querySelector('.mobile-menu-button'));
                } else {
                    menu.style.maxHeight = null;
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__icons_transformicons__["revert"])(this.shadowRoot.querySelector('.mobile-menu-button'));
                }
            }
        }, {
            key: '_applyHomeUrl',
            value: function _applyHomeUrl() {
                var aTag = this.shadowRoot.querySelector('#home-url');
                if (aTag) {
                    //Filter out cases where we haven't fully initialized yet
                    aTag.setAttribute('href', this.homeUrl);
                }
            }
        }, {
            key: '_applyMobileWidth',
            value: function _applyMobileWidth() {
                var desiredQuery = this.mobileMediaQuery;
                var q = this._mobileQuery;
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
        }, {
            key: '_handleMobileChange',
            value: function _handleMobileChange(mql) {
                this.inMobileView = mql.matches;
            }
        }, {
            key: 'mobileMaxWidth',
            get: function get() {
                return this.getAttribute(ATTR_MOBILE_MAX_WIDTH);
            },
            set: function set(val) {
                if (val) {
                    this.setAttribute(ATTR_MOBILE_MAX_WIDTH, val);
                } else {
                    this.setAttribute(ATTR_MOBILE_MAX_WIDTH, DEFAULT_MOBILE_WIDTH);
                }
            }
        }, {
            key: 'inMobileView',
            get: function get() {
                return this.hasAttribute(ATTR_MOBILE_VIEW);
            },
            set: function set(val) {
                if (val) {
                    this.setAttribute(ATTR_MOBILE_VIEW, '');
                } else {
                    this.removeAttribute(ATTR_MOBILE_VIEW);
                }
            }
        }, {
            key: 'menuOpen',
            get: function get() {
                return this.hasAttribute(ATTR_MENU_OPEN);
            },
            set: function set(val) {
                if (val) {
                    this.setAttribute(ATTR_MENU_OPEN, '');
                } else {
                    this.removeAttribute(ATTR_MENU_OPEN);
                }
            }
        }, {
            key: 'keepMenuOpen',
            get: function get() {
                return this.hasAttribute(ATTR_MENU_KEEP_OPEN);
            },
            set: function set(val) {
                if (val) {
                    this.setAttribute(ATTR_MENU_KEEP_OPEN, '');
                } else {
                    this.removeAttribute(ATTR_MENU_KEEP_OPEN);
                }
            }
        }, {
            key: 'noMenu',
            get: function get() {
                return this.hasAttribute(ATTR_NO_MENU);
            },
            set: function set(val) {
                if (val) {
                    this.setAttribute(ATTR_NO_MENU, '');
                } else {
                    this.removeAttribute(ATTR_NO_MENU);
                }
            }
        }, {
            key: 'homeUrl',
            get: function get() {
                return this.getAttribute(ATTR_HOME_URL) || DEFAULT_HOME_URL;
            },
            set: function set(val) {
                this.setAttribute(ATTR_HOME_URL, val);
            }
        }, {
            key: 'mobileMediaQuery',
            get: function get() {
                return '(max-width: ' + this.mobileMaxWidth + ')';
            }
        }], [{
            key: 'observedAttributes',
            get: function get() {
                return [ATTR_MOBILE_MAX_WIDTH, ATTR_MOBILE_VIEW, ATTR_MENU_OPEN, ATTR_HOME_URL];
            }
        }]);

        return BYUHeader;
    }(HTMLElement);

    window.customElements.define('byu-header', BYUHeader);
    window.BYUHeader = BYUHeader;

    /***/
},
/* 7 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_menu_html__ = __webpack_require__(33);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_menu_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_menu_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);

    var BYUMenu = function (_HTMLElement5) {
        _inherits(BYUMenu, _HTMLElement5);

        _createClass(BYUMenu, [{
            key: 'showMore',
            get: function get() {
                return isShowingMoreMenu(this);
            },
            set: function set(show) {
                var el = this.shadowRoot.querySelector('.byu-menu-more-menu');
                if (show && !isShowingMoreMenu(this)) enableHideClick(this);
                toggleClass(el, 'byu-menu-more-expanded', show);
            }
        }]);

        function BYUMenu() {
            _classCallCheck(this, BYUMenu);

            // always call super first
            var _this8 = _possibleConstructorReturn(this, (BYUMenu.__proto__ || Object.getPrototypeOf(BYUMenu)).call(this));

            _this8.attachShadow({ mode: 'open' });
            return _this8;
        }

        _createClass(BYUMenu, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this9 = this;

                var component = this;

                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-menu', __WEBPACK_IMPORTED_MODULE_0__byu_menu_html___default.a, function () {
                    updateMoreMenuState(_this9);
                    addSlotListeners(_this9);

                    // when the more button is clicked then show the more menu
                    _this9.shadowRoot.querySelector('.byu-menu-more').addEventListener('click', function () {
                        component.showMore = true;
                    });
                });
            }
        }]);

        return BYUMenu;
    }(HTMLElement);

    function addSlotListeners(component) {
        component.shadowRoot.querySelector('slot').addEventListener('slotchange', function (e) {
            //Run on microtask timing to let polyfilled shadow DOM changes to propagate
            setTimeout(function () {
                return updateMoreMenuState(component);
            });
        });
    }

    function enableHideClick(component) {

        var fn = function fn() {
            document.removeEventListener('click', fn);
            component.showMore = false;
        };

        setTimeout(function () {
            document.addEventListener('click', fn);
        });
    }

    function hasClass(el, className) {
        var classes = el.className.split(/ +/);
        return classes.indexOf(className) !== -1;
    }

    function isShowingMoreMenu(component) {
        return hasClass(component.shadowRoot.querySelector('.byu-menu-more-menu'), 'byu-menu-more-expanded');
    }

    function toggleClass(el, className, value) {
        var classes = el.className.split(/ +/);
        var index = classes.indexOf(className);
        var exists = index !== -1;
        var setTo = arguments.length > 2 ? arguments[2] : !exists;
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
        var filteredChildren = children.filter(function (node) {
            return node instanceof HTMLElement;
        });
        var filteredMoreChildren = moreChildren.filter(function (node) {
            return node instanceof HTMLElement;
        });
        var length = filteredChildren.length + filteredMoreChildren.length;
        var hasOverflow = length > 6;
        var nav = component.shadowRoot.querySelector('.outer-nav');

        if (nav) toggleClass(nav, 'byu-menu-more-visible', hasOverflow);

        if (hasOverflow) {
            for (var i = 5; i < filteredChildren.length; i++) {
                filteredChildren[i].setAttribute('slot', 'more');
            }
        } else if (length === 6) {
            filteredChildren[5].setAttribute('slot', '');
        }

        if (length < 4) {
            component.setAttribute('left-align', '');
        } else {
            component.removeAttribute('left-align');
        }
    }

    window.customElements.define('byu-menu', BYUMenu);
    window.BYUMenu = BYUMenu;

    /***/
},
/* 8 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */

    var _DEFAULT_ACTION_TARGE;

    var __WEBPACK_IMPORTED_MODULE_0__byu_search_html__ = __webpack_require__(34);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_search_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_search_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);
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

    var CLASS_SELECTED_INPUT = '__byu-search-selected-input';

    var ATTR_OLD_SEARCH_HANDLER = 'onsearch';
    var ATTR_SEARCH_HANDLER = 'onbyusearch';
    var ATTR_SEARCH_INPUT_SELECTOR = 'search-input-selector';
    var ATTR_ACTION = 'action';
    var ATTR_ACTION_TARGET = 'action-target';

    var ACTION_SUBMIT_FORM = 'submit-form';
    var ACTION_CLICK = 'click';
    var ACTION_NAVIGATE = 'navigate';

    var DEFAULT_ACTION_TARGET_SUBMIT_FORM = 'form';
    var DEFAULT_ACTION_TARGET_CLICK = 'button, input[type="submit"], input[type="button"]';

    var EVENT_TYPE = 'byu-search';

    var DEFAULT_ACTION_TARGET = (_DEFAULT_ACTION_TARGE = {}, _defineProperty(_DEFAULT_ACTION_TARGE, ACTION_SUBMIT_FORM, DEFAULT_ACTION_TARGET_SUBMIT_FORM), _defineProperty(_DEFAULT_ACTION_TARGE, ACTION_CLICK, DEFAULT_ACTION_TARGET_CLICK), _DEFAULT_ACTION_TARGE);

    var DEFAULT_SEARCH_INPUT_SELECTOR = 'input[type="search"], input[type="text"]';

    var ByuSearch = function (_HTMLElement6) {
        _inherits(ByuSearch, _HTMLElement6);

        function ByuSearch() {
            _classCallCheck(this, ByuSearch);

            // always call super first
            var _this10 = _possibleConstructorReturn(this, (ByuSearch.__proto__ || Object.getPrototypeOf(ByuSearch)).call(this));

            _this10.attachShadow({ mode: 'open' });
            return _this10;
        }

        _createClass(ByuSearch, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this11 = this;

                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-search', __WEBPACK_IMPORTED_MODULE_0__byu_search_html___default.a, function () {
                    _this11._initialized = true;

                    _this11._input = lookupAndConfigureInputElement(_this11, _this11.searchInputSelector);

                    setupButtonSearchDispatcher(_this11);
                    setupSearchListeners(_this11);

                    setupSlotListener(_this11);
                });
            }
        }, {
            key: 'disconnectedCallback',
            value: function disconnectedCallback() {
                if (this._input) {
                    teardownInputElement(this, this._input);
                }

                teardownSearchListeners(this);
            }
        }, {
            key: 'search',
            value: function search() {
                var el = this._input;
                if (!el) {
                    throw new Error('Unable to perform search; no search element matching the selector \'' + this.searchInputSelector + '\' can be found!');
                }
                var value = el.value;
                if (!value) return;

                var event = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["b" /* createEvent */](EVENT_TYPE, { search: value });

                var cancelled = !this.dispatchEvent(event);
                if (cancelled) return;

                if (this.action) {
                    runPredefinedAction(this, value);
                }
            }
        }, {
            key: 'attributeChangedCallback',
            value: function attributeChangedCallback(attr, oldValue, newValue) {
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
        }, {
            key: 'onbyusearch',
            get: function get() {
                return this.getAttribute(ATTR_SEARCH_HANDLER);
            },
            set: function set(value) {
                this.setAttribute(ATTR_SEARCH_HANDLER, value);
            }
        }, {
            key: 'onsearch',
            get: function get() {
                return this.getAttribute(ATTR_OLD_SEARCH_HANDLER);
            },
            set: function set(value) {
                this.setAttribute(ATTR_OLD_SEARCH_HANDLER, value);
            }
        }, {
            key: 'searchInputSelector',
            set: function set(value) {
                this.setAttribute(ATTR_SEARCH_INPUT_SELECTOR, value);
            },
            get: function get() {
                return this.getAttribute(ATTR_SEARCH_INPUT_SELECTOR) || DEFAULT_SEARCH_INPUT_SELECTOR;
            }
        }, {
            key: 'action',
            set: function set(value) {
                this.setAttribute(ATTR_ACTION, value);
            },
            get: function get() {
                //Defaults to null
                return this.getAttribute(ATTR_ACTION);
            }
        }, {
            key: 'actionTarget',
            set: function set(value) {
                this.setAttribute(ATTR_ACTION_TARGET, value);
            },
            get: function get() {
                //Default depends on action target value
                return this.getAttribute(ATTR_ACTION_TARGET) || defaultActionTarget(this.action);
            }
        }, {
            key: '_searchSlot',
            get: function get() {
                return this.shadowRoot.querySelector('#search');
            }
        }], [{
            key: 'observedAttributes',
            get: function get() {
                return [ATTR_SEARCH_INPUT_SELECTOR];
            }
        }]);

        return ByuSearch;
    }(HTMLElement);

    window.customElements.define('byu-search', ByuSearch);
    window.ByuSearch = ByuSearch;

    function setupSlotListener(search) {
        search._searchSlot.addEventListener('slotchange', function (e) {
            handleSlotChange(search, e);
        });
    }

    function handleSlotChange(search, event) {
        var oldInput = search._input;
        var newInput = lookupSearchInput(search);

        if (oldInput === newInput) return;

        search._input = newInput;

        if (oldInput) {
            teardownInputElement(search, oldInput);
        }
        if (newInput) {
            setupInputElement(search, newInput);
        } else {
            console.error('[byu-search] WARNING! Unable to find a search input element using the selector \'' + search.searchInputSelector + '\' on ', search);
        }
    }

    function lookupSearchInput(search, selector) {
        return __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["c" /* querySelectorSlot */](search._searchSlot, selector);
    }

    function lookupAndConfigureInputElement(search, selector) {
        var input = lookupSearchInput(search, selector);

        if (input) {
            setupInputElement(search, input);
        } else {
            console.error('[byu-search] WARNING! Unable to find a search input element using the selector \'' + selector + '\' on ', search);
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
        teardownEnterKeySearchDispatcher(search, input);
    }

    function runPredefinedAction(search, value) {
        var action = search.action;

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
                throw new Error('Invalid value for ' + ATTR_ACTION + ': \'' + action + '\'');
        }
    }

    function runSubmitFormAction(search, value) {
        var target = search.actionTarget;

        var form = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["c" /* querySelectorSlot */](search._searchSlot, target);

        if (!form) {
            throw new Error('Unable to find target for \'submit-form\' action using selector \'' + target + '\'');
        }

        if (!(form instanceof HTMLFormElement)) {
            throw new Error('Element found by selector \'' + target + '\' must be a <form>, but was \'' + form.localName + '\'');
        }

        form.submit();
    }

    function runClickAction(search, value) {
        var target = search.actionTarget;

        var button = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["c" /* querySelectorSlot */](search._searchSlot, target);

        if (!button) {
            throw new Error('Unable to find target for \'click\' action using selector \'' + target + '\'');
        }

        button.click();
    }

    function runNavigateAction(search, value) {
        var target = search.actionTarget;

        if (!target) {
            throw new Error('When using action="navigate", you must specify an action-target');
        }

        if (target.indexOf('${search}')) {
            console.warn('[byu-search] WARNING: Using action="navigate" with a target that does not contain ${search} will not include the search terms in the URL.', search);
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

        var helped = [];

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
        var helpers = input.__byu_search_a11yHelpersApplied;
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
        search.shadowRoot.querySelector('#search-button').addEventListener('click', function () {
            search.search();
        });
    }

    function setupEnterKeySearchDispatcher(search, input) {
        var keypress = input.__byu_search_keyObserver = function (e) {
            if (e.keyCode === 13) {
                search.search();
            }
        };
        input.addEventListener('keypress', keypress, false);
    }

    function teardownEnterKeySearchDispatcher(search, input) {
        var keypress = input.__byu_search_keyObserver;
        if (keypress) input.removeEventListener('keypress', keypress, false);
    }

    function setupSearchListeners(search) {
        var handler = search.__onbyusearchHandler = function (event) {
            var name = search.onbyusearch;
            if (!name) return;
            var handler = window[name];
            if (!handler) {
                throw new Error('Unable to find a global function named \'' + name + '\'');
            }
            handler.call(search, event);
        };

        search.addEventListener(EVENT_TYPE, handler, false);

        var legacyHandler = search.__onsearchLegacyHandler = function (event) {
            var name = search.onsearch;
            if (!name) return;

            var handler = window[name];
            if (!handler) {
                throw new Error('Unable to find a global function named \'' + name + '\'');
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

    /***/
},
/* 9 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html__ = __webpack_require__(35);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);

    var SOCIAL_NAMES = {
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

    var SOCIAL_IDS = Object.getOwnPropertyNames(SOCIAL_NAMES);

    var BYUSocialMediaLinks = function (_HTMLElement7) {
        _inherits(BYUSocialMediaLinks, _HTMLElement7);

        function BYUSocialMediaLinks() {
            _classCallCheck(this, BYUSocialMediaLinks);

            var _this12 = _possibleConstructorReturn(this, (BYUSocialMediaLinks.__proto__ || Object.getPrototypeOf(BYUSocialMediaLinks)).call(this));

            _this12.attachShadow({ mode: 'open' });
            return _this12;
        }

        _createClass(BYUSocialMediaLinks, [{
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this13 = this;

                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-social-media-links', __WEBPACK_IMPORTED_MODULE_0__byu_social_media_links_html___default.a, function () {
                    var main = _this13.shadowRoot.querySelector('#social-main');
                    applyTitleToChildren(main);

                    SOCIAL_IDS.forEach(function (id) {
                        var slot = _this13.shadowRoot.querySelector('#social-deprecated-' + id);
                        if (!slot) return;

                        applyTitleToChildren(slot);
                        //We're still supporting the old way, but it's deprecated and people should move on.
                        if (slot.assignedNodes().length > 0) {
                            console.log('[WARNING] byu-social-media-links: deprecated usage of slot="' + id + '". Replace with class="' + id + '":', _this13);
                        }
                    });
                });
            }
        }]);

        return BYUSocialMediaLinks;
    }(HTMLElement);

    window.customElements.define('byu-social-media-links', BYUSocialMediaLinks);
    window.BYUSocialMediaLinks = BYUSocialMediaLinks;

    function applyTitleToChildren(slotElement) {
        var kids = slotElement.assignedNodes();
        kids.filter(function (k) {
            return k instanceof HTMLElement;
        })
        //Only grab the ones that don't already have a title
        .filter(function (k) {
            return !k.title;
        }).forEach(function (kid) {
            var kind = detectSocialKind(kid);
            if (!kind) {
                return;
            }
            //The spaces are a hack to avoid triggering adblockplus.
            kid.title = ' ' + SOCIAL_NAMES[kind] + ' ';
        });
    }

    function detectSocialKind(element) {
        if (element.hasAttribute('slot')) return element.getAttribute('slot');
        for (var i = 0; i < SOCIAL_IDS.length; i++) {
            var id = SOCIAL_IDS[i];
            if (element.classList.contains(id)) {
                return id;
            }
        }
        return null;
    }

    /***/
},
/* 10 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__byu_user_info_html__ = __webpack_require__(36);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_user_info_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_user_info_html__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);
    /**
     * Created by ThatJoeMoore on 11/7/16.
     */

    var ByuUserInfo = function (_HTMLElement8) {
        _inherits(ByuUserInfo, _HTMLElement8);

        function ByuUserInfo() {
            _classCallCheck(this, ByuUserInfo);

            var _this14 = _possibleConstructorReturn(this, (ByuUserInfo.__proto__ || Object.getPrototypeOf(ByuUserInfo)).call(this));

            var shadowRoot = _this14.attachShadow({ mode: 'open' });

            return _this14;
        }

        _createClass(ByuUserInfo, [{
            key: 'attributeChangedCallback',
            value: function attributeChangedCallback(attr, oldval, newval) {
                // switch (attr) {
                //     case 'login-url':
                //         this.loginUrl = newval;
                //         break;
                // }
            }
        }, {
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this15 = this;

                __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-user-info', __WEBPACK_IMPORTED_MODULE_0__byu_user_info_html___default.a, function () {
                    _this15._addSlotListeners();
                    _this15._addAriaAttributes();
                });
            }
        }, {
            key: '_addSlotListeners',
            value: function _addSlotListeners() {
                var _this16 = this;

                this._setHasUser();
                var userSlot = this.shadowRoot.querySelector('#user-name');
                userSlot.addEventListener('slotchange', function (e) {
                    _this16._setHasUser();
                });
            }
        }, {
            key: '_setHasUser',
            value: function _setHasUser() {
                var userSlot = this.shadowRoot.querySelector('#user-name');
                if (userSlot.assignedNodes().length > 0) {
                    this.setAttribute('has-user', '');
                } else {
                    this.removeAttribute('has-user');
                }
            }
        }, {
            key: '_addAriaAttributes',
            value: function _addAriaAttributes() {
                this.setAttribute('role', 'button');
            }
        }], [{
            key: 'observedAttributes',
            get: function get() {
                // return ['login-url'];
            }
        }]);

        return ByuUserInfo;
    }(HTMLElement);

    window.customElements.define('byu-user-info', ByuUserInfo);
    window.ByuUserInfo = ByuUserInfo;

    /***/
},
/* 11 */
/***/function (module, exports) {

    module.exports = {
        "name": "byuweb-components",
        "version": "1.0.3",
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
            "byu-web-component-utils": "^0.4.0",
            "deep-equal": "^1.0.1"
        },
        "devDependencies": {
            "browser-sync": "^2.18.6",
            "byu-web-component-build": "^0.2.3",
            "git-revision-webpack-plugin": "^2.5.1",
            "gulp": "^3.9.1",
            "gulp-rename": "^1.2.2"
        }
    };

    /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__; /**
                                                                       * Created by ThatJoeMoore on 2/24/17
                                                                       */

    (function (root, factory) {
        if (true) {
            // AMD module
            !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
            // CommonJS-like environment (i.e. Node)
            module.exports = factory();
        } else {
            // Browser global
            root.transformicons = factory();
        }
    })(this || window, function () {

        // ####################
        // MODULE TRANSFORMICON
        // ####################
        'use strict';

        var tcon = {},
            // static class
        _transformClass = 'tcon-transform',


        // const
        DEFAULT_EVENTS = {
            transform: ['click'],
            revert: ['click']
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
        var getElementList = function getElementList(elements) {
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
        var getEventList = function getEventList(events) {
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
        var setListeners = function setListeners(elements, events, remove) {
            var method = (remove ? 'remove' : 'add') + 'EventListener',
                elementList = getElementList(elements),
                currentElement = elementList.length,
                eventLists = {};

            // get events or use defaults
            for (var prop in DEFAULT_EVENTS) {
                eventLists[prop] = events && events[prop] ? getEventList(events[prop]) : DEFAULT_EVENTS[prop];
            }

            // add or remove all events for all occasions to all elements
            while (currentElement--) {
                for (var occasion in eventLists) {
                    var currentEvent = eventLists[occasion].length;
                    while (currentEvent--) {
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
        var handleEvent = function handleEvent(event) {
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
            getElementList(elements).forEach(function (element) {
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
            getElementList(elements).forEach(function (element) {
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
            getElementList(elements).forEach(function (element) {
                tcon[element.classList.contains(_transformClass) ? 'revert' : 'transform'](element);
            });
            return tcon;
        };

        return tcon;
    });

    /***/
},
/* 13 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_header_byu_header_js__ = __webpack_require__(6);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__byu_menu_byu_menu_js__ = __webpack_require__(7);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__byu_search_byu_search_js__ = __webpack_require__(8);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__byu_user_info_byu_user_info_js__ = __webpack_require__(10);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__byu_footer_byu_footer_js__ = __webpack_require__(5);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__byu_footer_column_byu_footer_column_js__ = __webpack_require__(4);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__byu_footer_action_button_byu_footer_action_button_js__ = __webpack_require__(3);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__byu_social_media_links_byu_social_media_links_js__ = __webpack_require__(9);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__package_json__ = __webpack_require__(11);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__package_json__);
    /**
     * Created by ThatJoeMoore on 2/18/17
     */

    /*
     * Header Bits
     */

    /*
     * Footer Bits
     */

    console.log('--------------- Starting byu-theme-components ' + __WEBPACK_IMPORTED_MODULE_8__package_json__["version"] + ' ---------------');

    /***/
},
/* 14 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = createEvent;
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
            return new CustomEvent(name, { detail: detail, cancelable: true, bubbles: true });
        }
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(name, true, true, detail);
        return evt;
    }

    /***/
},
/* 15 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = querySelectorSlot;
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__ = __webpack_require__(2);
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
        var roots = slot.assignedNodes({ flatten: true }).filter(function (n) {
            return n.nodeType === Node.ELEMENT_NODE;
        });

        for (var i = 0, len = roots.length; i < len; i++) {
            var each = roots[i];
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__["a" /* default */])(each, selector)) {
                return each;
            }
            var child = each.querySelector(selector);
            if (child) {
                return child;
            }
        }
        return null;
    }

    /***/
},
/* 16 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (immutable) */
    __webpack_exports__["a"] = applyTemplate;
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(29);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hash_sum__);
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

    var TEMPLATE_RENDERED_CLASS = 'byu-component-rendered';

    function applyTemplate(element, elementName, template, callback) {
        var sum = __WEBPACK_IMPORTED_MODULE_0_hash_sum___default()(template);

        var elSettings = element.__byu_webCommunity_components = element.__byu_webCommunity_components || {};
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
        var templateId = '__byu-custom-element-template_' + elementName + '_' + sum;
        var templateElement = document.head.querySelector('template#' + templateId);
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
        var imported = document.importNode(templateElement.content, true);
        var shadow = element.shadowRoot;
        //It'd be nice if we could just diff the DOM and replace what changed between templates, but that might lead to
        // event listeners getting applied twice.  Easier to just clear out the shadow DOM and replace it.
        while (shadow.firstChild) {
            shadow.removeChild(shadow.firstChild);
        }
        shadow.appendChild(imported);
        setTimeout(function () {
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

    /***/
},
/* 17 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(1)();
    // imports


    // module
    exports.push([module.i, ":host{background-color:#666;font-family:Vitesse A,Vitesse B,Georgia,serif;font-size:20px!important;color:#fff;display:inline-block;text-align:center;line-height:2.1em;height:45px;width:auto;min-width:125px;margin:10px 0 20px;-webkit-box-shadow:0 3px 5px 0 rgba(0,0,0,.35);-moz-box-shadow:0 3px 5px 0 rgba(0,0,0,.35);box-shadow:0 3px 5px 0 rgba(0,0,0,.35)}.wrapper ::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;font-weight:400!important;color:#fff!important;display:inline-block!important;position:relative!important;height:100%!important;width:100%!important;margin:0 20px!important;left:-20px!important;cursor:pointer!important;vertical-align:middle!important}.wrapper ::slotted(a){text-decoration:none!important}", ""]);

    // exports


    /***/
},
/* 18 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(1)();
    // imports


    // module
    exports.push([module.i, ":host{padding:0 15px;box-sizing:border-box;float:left}.header{width:100%}.header ::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;text-transform:uppercase!important;color:#002e5d!important;font-size:20px!important;border-bottom:1px solid #c5c5c5!important;padding-bottom:3px!important;white-space:nowrap!important;font-weight:400!important;width:100%;display:inline-block}.content ::slotted(:not(byu-footer-action-button)){font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-size:13px!important;font-weight:400!important;color:#666!important;position:relative;top:-11px;line-height:1.42857143}.content ::slotted(a){line-height:35px;text-decoration:none!important;outline:none!important}.content ::slotted(a:hover){cursor:pointer;color:#002e5d!important}", ""]);

    // exports


    /***/
},
/* 19 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(1)();
    // imports


    // module
    exports.push([module.i, ".blue-footer{background-color:#002e5d;text-align:center;font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:400;font-size:12px;color:#fff;height:80px;width:100%;display:flex;justify-content:center;align-items:center}.blue-footer a{text-decoration:none;color:#fff}.blue-footer a:hover{color:#fff}.footer-text{white-space:nowrap}.inner-wrapper{max-width:1200px;margin-top:-10px}.university-logo{width:450px;max-width:100vw;box-sizing:border-box;margin-bottom:-10px;height:40px}.secondary-footer{height:auto;background-color:#e5e5e5;text-align:center;display:flex;justify-content:center;flex:1}.secondary-footer-content ::slotted(*){display:inline-block;text-align:left;vertical-align:top}.secondary-footer-content{width:1200px!important;padding:0 16px;box-sizing:border-box}:host([full-width]) .inner-wrapper{max-width:100%}:host([full-width]) .secondary-footer-content{width:100%}@media (max-width:767px){.secondary-footer-content ::slotted(*){width:100%}.secondary-footer-content ::slotted(:last-child){padding-bottom:30px}.secondary-footer-content ::slotted(:first-child){padding-top:10px}.secondary-footer-content ::slotted(*){padding-left:0!important;padding-right:0!important}}@media (min-width:768px) and (max-width:1199px){.secondary-footer-content ::slotted(*){width:50%}.secondary-footer-content ::slotted(:nth-child(n+3)){padding-bottom:30px}.secondary-footer-content ::slotted(:nth-child(-n+2)){padding-top:10px}.secondary-footer-content ::slotted(:nth-child(odd)){padding-left:0!important}.secondary-footer-content ::slotted(:nth-child(2n)){padding-right:0!important}}@media (min-width:1200px){.secondary-footer-content ::slotted(*){width:25%;padding-top:10px;padding-bottom:30px}.secondary-footer-content ::slotted(:first-child){padding-left:0!important}.secondary-footer-content ::slotted(:last-child){padding-right:0!important}}", ""]);

    // exports


    /***/
},
/* 20 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(1)();
    // imports


    // module
    exports.push([module.i, ".tcon{appearance:none;border:none;cursor:pointer;display:flex;justify-content:center;align-items:center;height:24px;transition:.15s;user-select:none;width:17px;background:transparent;outline:none;-webkit-tap-highlight-color:transparent;padding:0!important}.tcon>*{display:block}.tcon:focus,.tcon:hover{outline:none}.tcon::-moz-focus-inner{border:0}.tcon-menu__lines{width:24px;position:relative}.tcon-menu__lines,.tcon-menu__lines:after,.tcon-menu__lines:before{display:inline-block;border-radius:1px;height:3px;transition:.15s;background:#fff}.tcon-menu__lines:after,.tcon-menu__lines:before{width:24px;content:\"\";position:absolute;left:0;transform-origin:1.71429px center;width:100%}.tcon-menu__lines:before{top:6px}.tcon-menu__lines:after{top:-6px}.tcon-transform .tcon-menu__lines{transform:scale3d(.8,.8,.8)}.tcon-menu--xbutterfly{width:auto}.tcon-menu--xbutterfly .tcon-menu__lines:after,.tcon-menu--xbutterfly .tcon-menu__lines:before{transform-origin:50% 50%;transition:top .3s ease .6s,transform .3s ease}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines{background:transparent}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:after,.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:before{top:0;transition:top .3s ease,transform .3s ease .5s;width:24px}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:before{transform:rotate(45deg)}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:after{transform:rotate(-45deg)}.tcon-visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.tcon-visuallyhidden:active,.tcon-visuallyhidden:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.byu-header-actions{display:flex;align-items:center;height:34px}.byu-header-actions ::slotted(*){text-decoration:none!important;font-size:13px!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;text-transform:uppercase!important;color:#fff!important}.byu-header-root{background-color:#002e5d;width:100%;font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-size:18px}.byu-header-root .byu-header-content{max-width:1200px;display:flex;justify-content:center;flex:1;flex-basis:100%;padding:0 16px;box-sizing:border-box}.byu-header-root img.byu-logo{margin-right:16px}.byu-header-root button{background-color:#666;color:#fff;border:none;cursor:pointer}.byu-header-root .byu-header-primary{background-color:#002e5d;color:#fff;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;flex:1;min-height:55px;box-sizing:border-box}.byu-header-root .byu-header-primary .byu-header-title{overflow:hidden;-ms-text-overflow:ellipsis;text-overflow:ellipsis;flex:1;display:flex;flex-direction:column;font-size:22px;font-family:Vitesse A,Vitesse B,Georgia,serif!important;color:#fff!important;text-decoration:none}.byu-header-root .byu-header-primary .byu-header-title ::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;font-weight:400;font-size:22px;line-height:normal}.byu-header-root .byu-header-primary .byu-header-title ::slotted(.subtitle){font-size:14px;line-height:14px;margin:0;margin-top:-1px;margin-bottom:3px}.byu-header-root .byu-header-primary .byu-header-title ::slotted(.subtitle:first-child){font-size:14px;line-height:14px;margin-bottom:-1px;margin-top:2px}.byu-header-root .byu-header-primary .byu-header-user button{background-color:transparent;position:relative}.byu-header-root .byu-header-primary .byu-header-user button .icon{width:20px;height:20px;font-size:20px;vertical-align:middle}.byu-header-root .byu-header-primary .byu-header-user button .label{font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:500;font-size:13px;text-transform:uppercase}.byu-header-root .byu-header-primary .byu-header-search #search-input{font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:500;font-size:13px;color:#002e5d}.byu-header-root .byu-header-primary .byu-header-search #search-input::-webkit-input-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-header-search #search-input::-ms-input-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-header-search #search-input::-moz-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-logo,.byu-header-root .byu-header-primary .byu-logo-link{height:34px}@media screen and (max-width:1200px){.byu-header-root .byu-header-content{padding:0;margin:0 16px;box-sizing:border-box}}#mobileMenu{max-height:0;transition:.5s cubic-bezier(.4,0,.2,1);overflow:hidden}:host([mobile-view]) .byu-header-root .byu-header-content{display:block;margin:0}:host([mobile-view]) .byu-header-root .byu-logo{align-self:flex-start}:host([mobile-view]) .byu-header-root .byu-header-primary{margin-left:16px;padding-top:10.5px;padding-bottom:10.5px;min-height:34px;padding-right:14px!important;align-items:baseline}:host([mobile-view]) .byu-header-root .byu-header-actions{text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;height:35px!important;display:inline-block;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;display:block;box-sizing:border-box;padding:18px 33px!important;line-height:12px;text-align:left!important;height:auto!important;padding:0!important;background-color:#e6e6e6;color:#002e5d!important;border-top:1px solid #c5c5c5;width:100%;display:flex;flex-direction:column;align-items:flex-start;line-height:12px!important}:host([mobile-view]) .byu-header-root .byu-header-actions:hover{background:#c5c5c5!important}:host([mobile-view]) .byu-header-root .byu-header-actions.active,:host([mobile-view]) .byu-header-root .byu-header-actions.selected{background:#e5e5e5!important}:host([mobile-view]) .byu-header-root .byu-header-actions.long-link{max-width:300px;flex:2}:host([mobile-view]) .byu-header-root .byu-header-actions.extra-long-link{max-width:400px;flex:3}:host([mobile-view]) .byu-header-root #actions a{color:#002e5d!important;font-weight:500!important}:host([mobile-view]) .byu-header-root #actions p{margin:0!important}:host([mobile-view]) .byu-header-root .byu-header-actions ::slotted(*){color:#002e5d!important;padding:18px 50px!important}:host([mobile-view]) .byu-header-root>div>:not(.byu-logo){margin-right:0}:host([mobile-view]) .byu-header-root .byu-header-title{align-items:flex-start;align-self:center;font-size:16px!important}:host([mobile-view]) .byu-header-root .byu-header-title ::slotted(*){font-size:16px!important}:host([mobile-view]) .byu-header-root .byu-header-title ::slotted(.subtitle){font-size:12px!important;margin-top:3px}:host([mobile-view]) .byu-header-root .byu-header-title ::slotted(.subtitle:first-child){margin-top:0!important;margin-bottom:4px}:host([mobile-view]) .byu-header-root button.mobile-menu-button{background-color:transparent;margin-top:5px;margin-bottom:5px}:host([no-menu]) .mobile-menu-button{display:none}:host(:not([mobile-view])) .byu-header-root{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center}:host(:not([mobile-view])) .byu-header-root .byu-header-actions ::slotted(*){margin-left:4px;margin-right:4px}:host(:not([mobile-view])) .byu-header-root .byu-header-actions a{color:#fff!important}:host(:not([mobile-view])) .byu-header-root.no-nav{height:48px}:host(:not([mobile-view])) .byu-header-root .nav-expand{display:none}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary{background-color:#002e5d;color:#fff;height:55px}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary,:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search input{border:1px solid #002e5d;border-right:none;height:20px;padding:4px 6px;flex:1;width:217px;box-sizing:content-box}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search button{height:28px;width:30px;text-align:center}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-menu-button{display:none}:host([full-width]) .byu-header-content{max-width:100%!important}", ""]);

    // exports


    /***/
},
/* 21 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(1)();
    // imports


    // module
    exports.push([module.i, ":host{display:flex;justify-content:center;width:100%;height:auto;background:#fff;border-bottom:1px solid #ccc}:host(.transparent){opacity:.88}.outer-nav{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;padding:0 16px;box-sizing:border-box;height:35px;position:relative;max-width:1200px;flex:1;flex-basis:100%}@media screen and (max-width:1200px){.outer-nav{padding:0}}.slot-container ::slotted(*){text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;flex:1}.slot-container ::slotted(*):hover{background:#c5c5c5!important}.slot-container ::slotted(*).active,.slot-container ::slotted(*).selected{background:#e5e5e5!important}.slot-container ::slotted(*).long-link{max-width:300px;flex:2}.slot-container ::slotted(*).extra-long-link{max-width:400px;flex:3}.slot-container ::slotted(:hover){background:#c5c5c5!important}.slot-container ::slotted(.active),.slot-container ::slotted(.selected){background:#e5e5e5!important}.slot-container ::slotted(.long-link){max-width:300px;flex:2}.slot-container ::slotted(.extra-long-link){max-width:400px;flex:3}.byu-menu-more-menu{display:none;position:relative;height:35px;width:16.66%;overflow:visible!important}.byu-menu-more-menu .byu-menu-more{text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;position:relative;flex:1;display:block}.byu-menu-more-menu .byu-menu-more:hover{background:#c5c5c5!important}.byu-menu-more-menu .byu-menu-more.active,.byu-menu-more-menu .byu-menu-more.selected{background:#e5e5e5!important}.byu-menu-more-menu .byu-menu-more.long-link{max-width:300px;flex:2}.byu-menu-more-menu .byu-menu-more.extra-long-link{max-width:400px;flex:3}.byu-menu-more-menu .byu-menu-more .more-open-button{height:13px;width:13px;transition:transform .5s ease;transform:rotate(0);transform-origin:center}.byu-menu-more-menu .byu-menu-more-items{display:none;position:absolute;top:35px;right:0;min-width:100%;max-width:250px;z-index:2;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.75)}.byu-menu-more-menu .byu-menu-more-items ::slotted(*){width:100%;text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;display:block;text-align:left!important;padding-left:12px!important;padding-right:12px!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*):hover{background:#c5c5c5!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*).active,.byu-menu-more-menu .byu-menu-more-items ::slotted(*).selected{background:#e5e5e5!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*).long-link{max-width:300px;flex:2}.byu-menu-more-menu .byu-menu-more-items ::slotted(*).extra-long-link{max-width:400px;flex:3}.byu-menu-more-visible .byu-menu-more-menu{display:block}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded{background:#e5e5e5;box-shadow:0 0 2px 0 rgba(0,0,0,.75)}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-more-items{display:block}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-fixed-overlay{position:fixed;top:0;bottom:0;left:0;right:0;z-index:1}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded .more-open-button{transform:rotate(180deg)}:host(.mobile-view) .outer-nav{display:block;height:auto}:host(.mobile-view) .byu-menu-more{display:none!important}:host(.mobile-view) .slot-container ::slotted(*){display:block!important;text-align:left!important;padding:18px 18px 18px 50px!important;height:auto!important;width:100%;position:static;box-sizing:border-box;line-height:12px!important}:host(.mobile-view) .slot-container ::slotted(*).byu-menu-more-menu{padding:0!important}:host(.mobile-view) .byu-menu-more-menu{display:block;width:100%;box-shadow:none;position:static;height:auto}:host(.mobile-view) .byu-menu-more-menu .byu-menu-more-items{display:block;box-shadow:none;padding:0;position:static!important}:host(.mobile-view) .byu-menu-more-menu .byu-menu-more-items ::slotted(*){display:block!important;text-align:left!important;padding:18px 50px!important;height:auto!important;width:100%;position:static;box-sizing:border-box;line-height:12px!important}:host(.mobile-view) .byu-menu-more-menu.byu-menu-more-expanded{box-shadow:none}:host(.mobile-view) .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-fixed-overlay{display:none!important}:host([left-align]) .outer-nav ::slotted(*){min-width:200px;flex:0;padding:0 16px}:host([full-width]) .outer-nav{max-width:100%}", ""]);

    // exports


    /***/
},
/* 22 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(1)();
    // imports


    // module
    exports.push([module.i, ":host{margin-left:20px}#search-icon{width:17px;height:17px}button{background-color:var(--byu-search-color,#666);border:1px solid var(--byu-search-color,#666);color:#fff;width:30px;height:30px;display:flex;align-items:center;box-sizing:border-box}#search-form{display:flex;align-items:stretch;align-content:center;width:216px}#search-form #search-container{flex:1}#search-form #search-container input{padding:5px 10px;border:none;height:30px;-webkit-appearance:none;border-radius:0;margin:0;box-sizing:border-box;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-size:13px!important;font-weight:500!important;color:#002e5d!important;width:100%}#search-form #search-container input::placeholder{color:#666}#search-form #search-container input::-webkit-input-placeholder{color:#666}#search-form #search-container input:-ms-input-placeholder,#search-form #search-container input::-ms-input-placeholder{color:#666}#search-form #search-container ::slotted(input){padding:5px 10px;border:none;height:30px;-webkit-appearance:none;border-radius:0;margin:0;box-sizing:border-box;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-size:13px!important;font-weight:500!important;color:#002e5d!important;width:100%}#search-form #search-container ::slotted(input::placeholder){color:#666}#search-form #search-container ::slotted(input:-ms-input-placeholder),#search-form #search-container ::slotted(input::-ms-input-placeholder){color:#666}#search-form #search-container ::slotted(input::-webkit-input-placeholder){color:#666}:host(.mobile-view){width:100%;height:35px;margin:0}:host(.mobile-view) #search-form{width:auto}:host(.mobile-view) #search-form #search-container ::slotted(input),:host(.mobile-view) #search-form #search-container input{padding-left:16px;width:100%;height:35px;border-bottom:1px solid #c5c5c5}:host(.mobile-view) #search-button{width:53px;height:35px;padding:0 16px}:host(.mobile-view) #search-icon{width:20px;height:20px}", ""]);

    // exports


    /***/
},
/* 23 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(1)();
    // imports


    // module
    exports.push([module.i, ".slot-wrapper{display:flex;flex-direction:row}.slot-wrapper ::slotted(*){height:28px;width:28px;display:block;color:transparent!important;overflow:hidden;background-size:contain;background-repeat:no-repeat;background-clip:content-box;background-position:50%;margin:10px 15px 10px 0!important}.slot-wrapper ::slotted(.facebook),.slot-wrapper ::slotted([slot=facebook]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/fa.svg\")}.slot-wrapper ::slotted(.twitter),.slot-wrapper ::slotted([slot=twitter]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/tw.svg\")}.slot-wrapper ::slotted(.instagram),.slot-wrapper ::slotted([slot=instagram]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/in.svg\")}.slot-wrapper ::slotted(.youtube),.slot-wrapper ::slotted([slot=youtube]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/yo.svg\")}.slot-wrapper ::slotted(.pinterest),.slot-wrapper ::slotted([slot=pinterest]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/pi.svg\")}.slot-wrapper ::slotted(.google-plus),.slot-wrapper ::slotted(.googleplus),.slot-wrapper ::slotted(.gplus),.slot-wrapper ::slotted([slot=google-plus]),.slot-wrapper ::slotted([slot=googleplus]),.slot-wrapper ::slotted([slot=gplus]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/gp.svg\")}.slot-wrapper ::slotted(.linkedin),.slot-wrapper ::slotted([slot=linkedin]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/li.svg\")}.slot-wrapper ::slotted(.rss),.slot-wrapper ::slotted([slot=rss]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/rs.svg\")}.slot-wrapper ::slotted(.snapchat),.slot-wrapper ::slotted([slot=snapchat]){background-image:url(\"https://cdn.byu.edu/shared-icons/latest/social/obfuscated/sn.svg\")}", ""]);

    // exports


    /***/
},
/* 24 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(1)();
    // imports


    // module
    exports.push([module.i, ".slot-wrapper ::slotted(*){text-decoration:none!important;font-size:13px!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;text-transform:uppercase!important;color:#fff!important}.has-user,.no-user{display:flex;flex-direction:row;align-items:center}.user-info-image{height:20px;width:20px;margin:5px;margin-right:11px;background-size:contain}:host(:not([mobile-view])){color:#fff}:host(:not([mobile-view])) .mobile{display:none}:host(:not([mobile-view])) .slot-wrapper{display:flex;align-items:center}:host(:not([mobile-view])) .slot-wrapper ::slotted(a:hover){text-decoration:underline!important}:host(:not([mobile-view])) .has-user .name ::slotted(*){color:#c3ddf9!important;text-transform:uppercase!important;max-width:130px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host(:not([mobile-view])) .user-info-image{margin:7px;background-image:url(\"https://cdn.byu.edu/shared-icons/latest/fontawesome/user-circle-o-white.svg\")}:host([mobile-view]){text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;transition:background .3s;display:block;box-sizing:border-box;padding:18px 33px!important;line-height:12px;text-align:left!important;height:auto!important;border-bottom:1px solid #c5c5c5;padding:10px 14px!important;background-color:#fff!important;line-height:12px!important}:host([mobile-view]):hover{background:#c5c5c5!important}:host([mobile-view]).active,:host([mobile-view]).selected{background:#e5e5e5!important}:host([mobile-view]).long-link{max-width:300px;flex:2}:host([mobile-view]).extra-long-link{max-width:400px;flex:3}:host([mobile-view]) .not-mobile{display:none}:host([mobile-view]) .slot-wrapper ::slotted(*){color:#002e5d!important}:host([mobile-view]) .has-user .logout{order:3}:host([mobile-view]) .has-user .name{order:2;flex:1}:host([mobile-view]) .has-user .name ::slotted(*){text-transform:capitalize!important;color:#0057b8!important}:host([mobile-view]) .user-info-image{background-image:url(\"https://cdn.byu.edu/shared-icons/latest/fontawesome/user-circle-o-navy.svg\")}:host(:not([has-user])) .has-user,:host([has-user]) .no-user{display:none}", ""]);

    // exports


    /***/
},
/* 25 */
/***/function (module, exports, __webpack_require__) {

    var pSlice = Array.prototype.slice;
    var objectKeys = __webpack_require__(27);
    var isArguments = __webpack_require__(26);

    var deepEqual = module.exports = function (actual, expected, opts) {
        if (!opts) opts = {};
        // 7.1. All identical values are equivalent, as determined by ===.
        if (actual === expected) {
            return true;
        } else if (actual instanceof Date && expected instanceof Date) {
            return actual.getTime() === expected.getTime();

            // 7.3. Other pairs that do not both pass typeof value == 'object',
            // equivalence is determined by ==.
        } else if (!actual || !expected || (typeof actual === 'undefined' ? 'undefined' : _typeof(actual)) != 'object' && (typeof expected === 'undefined' ? 'undefined' : _typeof(expected)) != 'object') {
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
    };

    function isUndefinedOrNull(value) {
        return value === null || value === undefined;
    }

    function isBuffer(x) {
        if (!x || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object' || typeof x.length !== 'number') return false;
        if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
            return false;
        }
        if (x.length > 0 && typeof x[0] !== 'number') return false;
        return true;
    }

    function objEquiv(a, b, opts) {
        var i, key;
        if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) return false;
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
        } catch (e) {
            //happens when one is a string literal and the other isn't
            return false;
        }
        // having the same number of owned properties (keys incorporates
        // hasOwnProperty)
        if (ka.length != kb.length) return false;
        //the same set of keys (although not necessarily the same order),
        ka.sort();
        kb.sort();
        //~~~cheap key test
        for (i = ka.length - 1; i >= 0; i--) {
            if (ka[i] != kb[i]) return false;
        }
        //equivalent values for every corresponding key, and
        //~~~possibly expensive deep test
        for (i = ka.length - 1; i >= 0; i--) {
            key = ka[i];
            if (!deepEqual(a[key], b[key], opts)) return false;
        }
        return (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === (typeof b === 'undefined' ? 'undefined' : _typeof(b));
    }

    /***/
},
/* 26 */
/***/function (module, exports) {

    var supportsArgumentsClass = function () {
        return Object.prototype.toString.call(arguments);
    }() == '[object Arguments]';

    exports = module.exports = supportsArgumentsClass ? supported : unsupported;

    exports.supported = supported;
    function supported(object) {
        return Object.prototype.toString.call(object) == '[object Arguments]';
    };

    exports.unsupported = unsupported;
    function unsupported(object) {
        return object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) == 'object' && typeof object.length == 'number' && Object.prototype.hasOwnProperty.call(object, 'callee') && !Object.prototype.propertyIsEnumerable.call(object, 'callee') || false;
    };

    /***/
},
/* 27 */
/***/function (module, exports) {

    exports = module.exports = typeof Object.keys === 'function' ? Object.keys : shim;

    exports.shim = shim;
    function shim(obj) {
        var keys = [];
        for (var key in obj) {
            keys.push(key);
        }return keys;
    }

    /***/
},
/* 28 */
/***/function (module, exports, __webpack_require__) {

    module.exports = function anonymous(locals, escapeFn, include, rethrow) {
        "use strict";

        escapeFn = escapeFn || function (markup) {
            return markup == undefined ? "" : String(markup).replace(_MATCH_HTML, encode_char);
        };
        var _ENCODE_HTML_RULES = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&#34;",
            "'": "&#39;"
        },
            _MATCH_HTML = /[&<>'"]/g;
        function encode_char(c) {
            return _ENCODE_HTML_RULES[c] || c;
        }
        var __output = [],
            __append = __output.push.bind(__output);
        __append("<style>\n");
        __append(__webpack_require__(20));
        __append('</style>\n<div id="header" class="byu-header-root">\n<div class="byu-header-content">\n<div class="byu-header-primary">\n<a class="byu-logo" id="home-url" name="home-url" href="" target="_blank">\n<img class="byu-logo" alt="BYU" src="https://cdn.byu.edu/shared-icons/latest/logos/monogram-white.svg">\n</a>\n<div class="byu-header-title">\n<slot id="site-title" name="site-title"></slot>\n</div>\n');
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
    };

    /***/
},
/* 29 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    function pad(hash, len) {
        while (hash.length < len) {
            hash = '0' + hash;
        }
        return hash;
    }

    function fold(hash, text) {
        var i;
        var chr;
        var len;
        if (text.length === 0) {
            return hash;
        }
        for (i = 0, len = text.length; i < len; i++) {
            chr = text.charCodeAt(i);
            hash = (hash << 5) - hash + chr;
            hash |= 0;
        }
        return hash < 0 ? hash * -2 : hash;
    }

    function foldObject(hash, o, seen) {
        return Object.keys(o).sort().reduce(foldKey, hash);
        function foldKey(hash, key) {
            return foldValue(hash, o[key], key, seen);
        }
    }

    function foldValue(input, value, key, seen) {
        var hash = fold(fold(fold(input, key), toString(value)), typeof value === 'undefined' ? 'undefined' : _typeof(value));
        if (value === null) {
            return fold(hash, 'null');
        }
        if (value === undefined) {
            return fold(hash, 'undefined');
        }
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
            if (seen.indexOf(value) !== -1) {
                return fold(hash, '[Circular]' + key);
            }
            seen.push(value);
            return foldObject(hash, value, seen);
        }
        return fold(hash, value.toString());
    }

    function toString(o) {
        return Object.prototype.toString.call(o);
    }

    function sum(o) {
        return pad(foldValue(0, o, '', []).toString(16), 8);
    }

    module.exports = sum;

    /***/
},
/* 30 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(17) + "</style> <div class=\"wrapper\"> <slot name=\"actiontext\"></slot> </div>";

    /***/
},
/* 31 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(18) + "</style> <h2 class=\"header\"> <slot name=\"header\"></slot> </h2> <div class=\"content\"> <slot></slot> </div>";

    /***/
},
/* 32 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(19) + "</style> <div class=\"secondary-footer\"> <div class=\"secondary-footer-content\"> <slot id=\"slot\"></slot> </div> </div> <div class=\"blue-footer\"> <div class=\"inner-wrapper\"> <a href=\"https://home.byu.edu/home/\" target=\"_blank\"><img src=\"https://cdn.byu.edu/shared-icons/latest/logos/word-mark-wide-white.svg\" alt=\"Brigham Young University\" class=\"university-logo\"></a> <div class=\"copyright-contact\"> <span class=\"footer-text\">&copy;<span id=\"currentYear\"></span> All Rights Reserved</span> | <span class=\"footer-text\">Provo, UT 84602, USA</span> | <span class=\"footer-text\"><a class=\"contact-phone\" href=\"tel:18014224636\">801-422-4636</a></span> </div> </div> </div>";

    /***/
},
/* 33 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(21) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <nav class=\"outer-nav slot-container\"> <slot class=\"byu-menu-items\"></slot> <div class=\"byu-menu-more-menu\"> <a href=\"javascript: void 0\" class=\"byu-menu-more\"> More <img class=\"more-open-button\" src=\"https://cdn.byu.edu/shared-icons/latest/fontawesome/down-open-navy.svg\" alt=\"Open\"> </a> <div class=\"byu-menu-more-items slot-container\"> <slot class=\"byu-menu-more-slot\" name=\"more\"></slot> </div> </div> </nav>";

    /***/
},
/* 34 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(22) + "</style> <div id=\"search-form\"> <div id=\"search-container\"> <slot id=\"search\"><input type=\"search\" placeholder=\"Search\"></slot> </div> <button id=\"search-button\" type=\"submit\"> <img id=\"search-icon\" src=\"https://cdn.byu.edu/shared-icons/latest/fontawesome/search-white.svg\" alt=\"Run Search\"> </button> </div>";

    /***/
},
/* 35 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(23) + "</style> <div class=\"slot-wrapper\"> <slot id=\"social-main\"></slot> <slot id=\"social-deprecated-facebook\" name=\"facebook\"></slot> <slot id=\"social-deprecated-twitter\" name=\"twitter\"></slot> <slot id=\"social-deprecated-instagram\" name=\"instagram\"></slot> <slot id=\"social-deprecated-youtube\" name=\"youtube\"></slot> <slot id=\"social-deprecated-pinterest\" name=\"pinterest\"></slot> <slot id=\"social-deprecated-googleplus\" name=\"googleplus\"></slot> <slot id=\"social-deprecated-linkedin\" name=\"linkedin\"></slot> <slot id=\"social-deprecated-rss\" name=\"rss\"></slot> <slot id=\"social-deprecated-snapchat\" name=\"snapchat\"></slot> </div>";

    /***/
},
/* 36 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>" + __webpack_require__(24) + "</style> <div class=\"byu-user-wrapper\"> <div class=\"no-user slot-wrapper\"> <div class=\"user-info-image\"> </div> <span class=\"text slot-wrapper\"> <slot name=\"login\">Sign In</slot> </span> </div> <div class=\"has-user\"> <span class=\"name slot-wrapper\"> <slot name=\"user-name\" id=\"user-name\"></slot> </span> <div class=\"user-info-image\"> </div> <span class=\"logout slot-wrapper\"> <slot name=\"logout\">Sign Out</slot> </span> </div> </div>";

    /***/
}]);
}());

//# sourceMappingURL=components-compat.js.map
