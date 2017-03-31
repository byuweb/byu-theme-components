;

(function () {
    'use strict';

    var _typeof = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    /******/(function (modules) {
        // webpackBootstrap
        /******/ // The module cache
        /******/var installedModules = {};
        /******/
        /******/ // The require function
        /******/function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/if (installedModules[moduleId])
                /******/return installedModules[moduleId].exports;
            /******/
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
        /******/return __webpack_require__(__webpack_require__.s = 10);
        /******/
    })(
    /************************************************************************/
    /******/[
    /* 0 */
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
    /* 1 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(12);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "applyTemplate", function () {
            return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"];
        });
        /**
         * Created by ThatJoeMoore on 2/14/17
         */

        /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

        "use strict";

        var template = __webpack_require__(26);
        var util = __webpack_require__(1);

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
                    util.applyTemplate(this, 'byu-footer-action-button', template);
                }
            }]);

            return BYUFooterActionButton;
        }(HTMLElement);

        window.customElements.define('byu-footer-action-button', BYUFooterActionButton);
        window.BYUFooterActionButton = BYUFooterActionButton;

        /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

        "use strict";

        var template = __webpack_require__(27);
        var util = __webpack_require__(1);

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
                    util.applyTemplate(this, 'byu-footer-column', template);
                }
            }]);

            return BYUFooterColumn;
        }(HTMLElement);

        window.customElements.define('byu-footer-column', BYUFooterColumn);
        window.BYUFooterColumn = BYUFooterColumn;

        /***/
    },
    /* 4 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__template_html__ = __webpack_require__(28);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_html__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);

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
                    var _this4 = this;

                    __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["applyTemplate"](this, 'byu-footer', __WEBPACK_IMPORTED_MODULE_0__template_html__, function () {
                        // always show the current year in the copyright message
                        var currentYear = _this4.shadowRoot.querySelector("#currentYear");
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
    /* 5 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__template_ejs_html__ = __webpack_require__(24);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__template_ejs_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_ejs_html__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_deep_equal__ = __webpack_require__(21);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_deep_equal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_deep_equal__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2_byu_web_component_utils__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__icons_transformicons__ = __webpack_require__(11);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__icons_transformicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__icons_transformicons__);

        var ATTR_MOBILE_MAX_WIDTH = 'mobile-max-width';
        var ATTR_MOBILE_VIEW = 'mobile-view';
        var ATTR_MENU_OPEN = 'menu-open';

        var DEFAULT_MOBILE_WIDTH = '1024px';

        var BYUHeader = function (_HTMLElement4) {
            _inherits(BYUHeader, _HTMLElement4);

            function BYUHeader() {
                _classCallCheck(this, BYUHeader);

                var _this5 = _possibleConstructorReturn(this, (BYUHeader.__proto__ || Object.getPrototypeOf(BYUHeader)).call(this));

                _this5.attachShadow({ mode: 'open' });
                return _this5;
            }

            _createClass(BYUHeader, [{
                key: '_render',
                value: function _render() {
                    var _this6 = this;

                    var state = {
                        mobile: this.inMobileView
                    };
                    if (!__WEBPACK_IMPORTED_MODULE_1_deep_equal__(state, this._renderState)) {
                        __WEBPACK_IMPORTED_MODULE_2_byu_web_component_utils__["applyTemplate"](this, 'byu-header', __WEBPACK_IMPORTED_MODULE_0__template_ejs_html__(state), function () {
                            _this6._renderState = state;
                            _this6._addSlotListeners();
                            _this6._notifyChildrenOfMobileState();
                            _this6._addButtonListeners();
                        });
                    }
                }
            }, {
                key: '_addButtonListeners',
                value: function _addButtonListeners() {
                    var _this7 = this;

                    if (!this.inMobileView) {
                        this.menuOpen = false;
                        return;
                    }
                    var menuButton = this.shadowRoot.querySelector('.mobile-menu-button');
                    menuButton.addEventListener('click', function () {
                        return _this7._toggleMenu();
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
                    var _this8 = this;

                    this._findAllSlots().forEach(function (each) {
                        each.addEventListener('slotchange', function (event) {
                            _this8._notifyChildrenOfMobileState();
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
                key: 'mobileMediaQuery',
                get: function get() {
                    return '(max-width: ' + this.mobileMaxWidth + ')';
                }
            }], [{
                key: 'observedAttributes',
                get: function get() {
                    return [ATTR_MOBILE_MAX_WIDTH, ATTR_MOBILE_VIEW, ATTR_MENU_OPEN];
                }
            }]);

            return BYUHeader;
        }(HTMLElement);

        window.customElements.define('byu-header', BYUHeader);
        window.BYUHeader = BYUHeader;

        /***/
    },
    /* 6 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__template_html__ = __webpack_require__(29);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_html__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);

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

                var _this9 = _possibleConstructorReturn(this, (BYUMenu.__proto__ || Object.getPrototypeOf(BYUMenu)).call(this));

                // always call super first
                _this9.attachShadow({ mode: 'open' });
                return _this9;
            }

            _createClass(BYUMenu, [{
                key: 'connectedCallback',
                value: function connectedCallback() {
                    var _this10 = this;

                    var component = this;

                    __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["applyTemplate"](this, 'byu-menu', __WEBPACK_IMPORTED_MODULE_0__template_html__, function () {
                        updateMoreMenuState(_this10);
                        addSlotListeners(_this10);

                        // when the more button is clicked then show the more menu
                        _this10.shadowRoot.querySelector('.byu-menu-more').addEventListener('click', function () {
                            component.showMore = true;
                        });
                    });
                }
            }]);

            return BYUMenu;
        }(HTMLElement);

        function addSlotListeners(component) {
            component.shadowRoot.querySelector('slot').addEventListener('slotchange', function (e) {
                return updateMoreMenuState(component);
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
            var children = component.children;
            var length = component.children.length;
            var hasOverflow = length > 6;
            var nav = component.shadowRoot.querySelector('.outer-nav');

            if (nav) toggleClass(nav, 'byu-menu-more-visible', hasOverflow);

            if (hasOverflow) {
                for (var i = 5; i < length; i++) {
                    children[i].setAttribute('slot', 'more');
                }
            } else if (length === 6) {
                children[5].setAttribute('slot', '');
            }
        }

        window.customElements.define('byu-menu', BYUMenu);
        window.BYUMenu = BYUMenu;

        /***/
    },
    /* 7 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__template_html__ = __webpack_require__(30);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_html__);
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

        var store = new WeakMap();

        var ByuSearch = function (_HTMLElement6) {
            _inherits(ByuSearch, _HTMLElement6);

            _createClass(ByuSearch, [{
                key: 'attributeChangedCallback',
                value: function attributeChangedCallback(name, oldValue, newValue) {
                    switch (name) {
                        case 'placeholder':
                            this.shadowRoot.querySelector('input').setAttribute('placeholder', newValue);
                            break;
                        case 'value':
                            store.set(this, getInputValue(this));
                            break;
                    }
                }
            }], [{
                key: 'observedAttributes',
                get: function get() {
                    return ['placeholder', 'value'];
                }
            }]);

            function ByuSearch() {
                _classCallCheck(this, ByuSearch);

                var _this11 = _possibleConstructorReturn(this, (ByuSearch.__proto__ || Object.getPrototypeOf(ByuSearch)).call(this));

                // always call super first

                var shadowRoot = _this11.attachShadow({ mode: 'open' });
                shadowRoot.innerHTML = __WEBPACK_IMPORTED_MODULE_0__template_html__;
                return _this11;
            }

            _createClass(ByuSearch, [{
                key: 'connectedCallback',
                value: function connectedCallback() {
                    var input = getInputElement(this, true);
                    if (input) input.addEventListener('input', inputHandler);

                    if (this.hasAttribute('value')) this.value = this.getAttribute('value');
                }
            }, {
                key: 'disconnectedCallback',
                value: function disconnectedCallback() {
                    var input = getInputElement(this, true);
                    if (input) input.removeEventListener('input', inputHandler);
                }
            }, {
                key: 'search',
                value: function search() {
                    if (this.hasAttribute('onsearch')) evalInContext.call(this, this.getAttribute('onsearch'));

                    // if (this.hasAttribute('action')) {
                    //     var form = this.shadowRoot.querySelector('form');
                    //     var value = this.value;
                    //     var action = this.getAttribute('action').toString().replace(/\$1/g, value);
                    //     form.setAttribute('action', action);
                    //     form.setAttribute('method', this.hasAttribute('method')
                    //         ? this.getAttribute('method')
                    //         : 'GET');
                    //     if (this.hasAttribute('target')) form.setAttribute('target', this.getAttribute('target'));
                    //     form.submit();
                    // }
                }
            }, {
                key: 'value',
                get: function get() {
                    return store.get(this);
                },
                set: function set(value) {
                    store.set(this, '' + value);
                    var input = getInputElement(this, true);
                    if (input) input.value = value;
                    return this;
                }
            }]);

            return ByuSearch;
        }(HTMLElement);

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
            console.log(el.tagName);
            console.log(el.parentNode);
            while (!(el.tagName === 'byu-search')) {
                el = el.host ? el.host : el.parentNode;
            }return el;
        }

        function inputHandler(e) {
            var el = e.target;
            if (el) {
                var component = el.tagName === 'byu-search' ? el : getParentComponent(el);
                component.value = e.target.value;
            }
        }

        function searchHandler(e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                this.parentNode.host.search();
            }
        }

        function formSubmitHandler(e) {
            if (e) e.preventDefault();
            this.parentNode.host.search();
        }

        window.customElements.define('byu-search', ByuSearch);
        window.ByuSearch = ByuSearch;

        /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

        "use strict";

        var template = __webpack_require__(31);
        var util = __webpack_require__(1);

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

                    util.applyTemplate(this, 'byu-social-media-links', template, function () {
                        var idArr = ['facebook', 'instagram', 'twitter', 'googleplus', 'linkedin', 'youtube'];
                        var classArr = ['fa-facebook', 'fa-instagram', 'fa-twitter', 'fa-google-plus', 'fa-linkedin', 'fa-youtube-play'];

                        for (var i = 0; i < idArr.length; i++) {
                            var slotId = _this13.shadowRoot.querySelector("#" + idArr[i]);
                            var link = slotId.assignedNodes();

                            if (link.length > 0) {
                                link[0].classList.add("fa");
                                link[0].classList.add(classArr[i]);
                            }
                        }
                    });
                }
            }]);

            return BYUSocialMediaLinks;
        }(HTMLElement);

        window.customElements.define('byu-social-media-links', BYUSocialMediaLinks);
        window.BYUSocialMediaLinks = BYUSocialMediaLinks;

        /***/
    },
    /* 9 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__template_html__ = __webpack_require__(32);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_html__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(1);
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

                    __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["applyTemplate"](this, 'byu-user-info', __WEBPACK_IMPORTED_MODULE_0__template_html__, function () {
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
    /* 10 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_header_script_js__ = __webpack_require__(5);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__byu_menu_script_js__ = __webpack_require__(6);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__byu_search_script_js__ = __webpack_require__(7);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__byu_user_info_script_js__ = __webpack_require__(9);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__byu_footer_script_js__ = __webpack_require__(4);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__byu_footer_column_script_js__ = __webpack_require__(3);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__byu_footer_column_script_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__byu_footer_column_script_js__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__byu_footer_action_button_script_js__ = __webpack_require__(2);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__byu_footer_action_button_script_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__byu_footer_action_button_script_js__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__byu_social_media_links_script_js__ = __webpack_require__(8);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__byu_social_media_links_script_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__byu_social_media_links_script_js__);
        /**
         * Created by ThatJoeMoore on 2/18/17
         */

        /*
         * Header Bits
         */

        /*
         * Footer Bits
         */

        /***/
    },
    /* 11 */
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
    /* 12 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(25);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hash_sum__);
        /* harmony export (immutable) */__webpack_exports__["a"] = applyTemplate;
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
    /* 13 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, ":host{background-color:#767676;font-family:Vitesse A,Vitesse B,Georgia,serif;font-size:20px!important;color:#fff;display:inline-block;text-align:center;line-height:2.2em;height:45px;width:auto;min-width:125px;margin:10px 0 20px;-webkit-box-shadow:0 3px 5px 0 rgba(0,0,0,.35);-moz-box-shadow:0 3px 5px 0 rgba(0,0,0,.35);box-shadow:0 3px 5px 0 rgba(0,0,0,.35)}.wrapper ::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;font-weight:500!important;color:#fff!important;display:inline-block!important;position:relative!important;height:100%!important;width:100%!important;margin:0 20px!important;left:-20px!important;cursor:pointer!important;vertical-align:middle!important}.wrapper ::slotted(a){text-decoration:none!important}", ""]);

        // exports


        /***/
    },
    /* 14 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, ":host{padding:0 15px}.header{width:100%}.header ::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;text-transform:uppercase!important;color:#002e5d!important;font-size:20px!important;border-bottom:1px solid #c5c5c5!important;padding-bottom:3px!important;white-space:nowrap!important;font-weight:500!important;width:100%;display:inline-block}.content ::slotted(:not(byu-footer-action-button)){font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-size:13px;font-weight:500;color:#767676!important;position:relative;top:-11px;line-height:1.42857143}.content ::slotted(a){line-height:35px;text-decoration:none!important;outline:none!important}.content ::slotted(a:hover){cursor:pointer;color:#002e5d!important}", ""]);

        // exports


        /***/
    },
    /* 15 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, ".blue-footer{background-color:#002e5d;text-align:center;font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:400;font-size:12px;color:#fff;height:80px;display:table;width:100%}.blue-footer a{text-decoration:none;color:#fff}.blue-footer a:hover{color:#fff}.inner-wrapper{display:table-cell;vertical-align:middle}.university-logo{width:450px;max-width:100vw;box-sizing:border-box;margin-bottom:-10px}.secondary-footer{height:auto;background-color:#e5e5e5;text-align:center}.secondary-footer ::slotted(*){display:inline-block;text-align:left;vertical-align:top}@media (max-width:767px){.secondary-footer ::slotted(*){width:80%}.secondary-footer ::slotted(:last-child){padding-bottom:30px}.secondary-footer ::slotted(:first-child){padding-top:10px}}@media (min-width:768px) and (max-width:1199px){.secondary-footer ::slotted(*){width:40%}.secondary-footer ::slotted(:nth-child(n+3)){padding-bottom:30px}.secondary-footer ::slotted(:nth-child(-n+2)){padding-top:10px}}@media (min-width:1200px){.secondary-footer ::slotted(*){width:20%;padding-top:10px;padding-bottom:30px}}", ""]);

        // exports


        /***/
    },
    /* 16 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, ".tcon{appearance:none;border:none;cursor:pointer;display:flex;justify-content:center;align-items:center;height:20px;transition:.15s;user-select:none;width:17px;background:transparent;outline:none;-webkit-tap-highlight-color:transparent;padding:0!important}.tcon>*{display:block}.tcon:focus,.tcon:hover{outline:none}.tcon::-moz-focus-inner{border:0}.tcon-menu__lines{width:20px;position:relative}.tcon-menu__lines,.tcon-menu__lines:after,.tcon-menu__lines:before{display:inline-block;border-radius:1px;height:2px;transition:.15s;background:#fff}.tcon-menu__lines:after,.tcon-menu__lines:before{width:20px;content:\"\";position:absolute;left:0;transform-origin:1.42857px center;width:100%}.tcon-menu__lines:before{top:5px}.tcon-menu__lines:after{top:-5px}.tcon-transform .tcon-menu__lines{transform:scale3d(.8,.8,.8)}.tcon-menu--xbutterfly{width:auto}.tcon-menu--xbutterfly .tcon-menu__lines:after,.tcon-menu--xbutterfly .tcon-menu__lines:before{transform-origin:50% 50%;transition:top .3s ease .6s,transform .3s ease}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines{background:transparent}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:after,.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:before{top:0;transition:top .3s ease,transform .3s ease .5s;width:20px}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:before{transform:rotate(45deg)}.tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines:after{transform:rotate(-45deg)}.tcon-visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.tcon-visuallyhidden:active,.tcon-visuallyhidden:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.byu-header-actions ::slotted(*){text-decoration:none!important;font-size:13px!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;text-transform:uppercase!important;color:#fff!important;margin-left:4px;margin-right:4px}.byu-header-root{font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-size:18px}.byu-header-root .byu-logo{margin-right:16px}.byu-header-root button{background-color:#767676;color:#fff;border:none;cursor:pointer}.byu-header-root .byu-header-primary{background-color:#002e5d;color:#fff;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:0 16px;flex:1;min-height:55px}.byu-header-root .byu-header-primary #site-title::slotted(*),.byu-header-root .byu-header-primary .byu-header-title{overflow:hidden;-ms-text-overflow:ellipsis;text-overflow:ellipsis;flex:1;font-family:Vitesse A,Vitesse B,Georgia,serif!important;font-size:22px;color:#fff!important}.byu-header-root .byu-header-primary #site-title::slotted(*) a,.byu-header-root .byu-header-primary .byu-header-title a{color:#fff!important}.byu-header-root .byu-header-primary .byu-header-user button{background-color:transparent;position:relative}.byu-header-root .byu-header-primary .byu-header-user button .icon{width:20px;height:20px;font-size:20px;vertical-align:middle}.byu-header-root .byu-header-primary .byu-header-user button .label{font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:500;font-size:13px;text-transform:uppercase}.byu-header-root .byu-header-primary .byu-header-search #search-input{font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:500;font-size:13px;color:#002e5d}.byu-header-root .byu-header-primary .byu-header-search #search-input::-webkit-input-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-header-search #search-input::-ms-input-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-header-search #search-input::-moz-placeholder{color:#c5c5c5;opacity:1}.byu-header-root .byu-header-primary .byu-logo{height:30px}#mobileMenu{max-height:0;transition:.5s cubic-bezier(.4,0,.2,1);overflow:hidden}:host([mobile-view]) .byu-header-primary{align-items:flex-start;padding-top:12.5px;padding-bottom:12.5px;min-height:30px}:host([mobile-view]) .byu-header-actions ::slotted(*){text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;height:35px!important;display:inline-block;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;display:block;box-sizing:border-box;padding:18px 33px!important;line-height:12px;text-align:left!important;height:auto!important;background-color:#c5c5c5;color:#002e5d!important;border-top:1px solid #767676}:host([mobile-view]) .byu-header-actions ::slotted(*):hover{background:#c5c5c5!important}:host([mobile-view]) .byu-header-actions ::slotted(*).selected{background:#e5e5e5!important}:host([mobile-view]) .byu-header-actions ::slotted(*).long-link{max-width:300px;flex:2;padding:0 12px!important}:host([mobile-view]) .byu-header-actions ::slotted(*).extra-long-link{max-width:400px;flex:3;padding:0 12px!important}:host([mobile-view])>div>:not(.byu-logo){margin-right:0}:host([mobile-view]) #site-title::slotted(*),:host([mobile-view]) .byu-header-title{font-size:16px!important;align-items:flex-start}:host([mobile-view]) button.mobile-menu-button{background-color:transparent;font-size:20px}:host(:not([mobile-view])) .byu-header-root{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:center}:host(:not([mobile-view])) .byu-header-root.no-nav{height:48px}:host(:not([mobile-view])) .byu-header-root .nav-expand{display:none}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary{background-color:#002e5d;color:#fff;height:55px;padding-right:16px}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary,:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search input{border:1px solid #002e5d;border-right:none;height:20px;padding:4px 6px;flex:1;width:217px;box-sizing:content-box}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-search button{height:28px;width:30px;text-align:center}:host(:not([mobile-view])) .byu-header-root .byu-header-secondary .byu-header-menu-button{display:none}", ""]);

        // exports


        /***/
    },
    /* 17 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, ":host{display:block;width:100%;height:auto;background:#fff;border-bottom:1px solid #ccc}:host(.transparent){opacity:.88}.outer-nav{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;padding:0;height:35px;position:relative}.slot-container ::slotted(*){text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;flex:1;max-width:200px}.slot-container ::slotted(*):hover{background:#c5c5c5!important}.slot-container ::slotted(*).selected{background:#e5e5e5!important}.slot-container ::slotted(*).long-link{max-width:300px;flex:2;padding:0 12px!important}.slot-container ::slotted(*).extra-long-link{max-width:400px;flex:3;padding:0 12px!important}.slot-container ::slotted(:hover){background:#c5c5c5!important}.slot-container ::slotted(.selected){background:#e5e5e5!important}.slot-container ::slotted(.long-link){max-width:300px;flex:2;padding:0 12px!important}.slot-container ::slotted(.extra-long-link){max-width:400px;flex:3;padding:0 12px!important}.byu-menu-more-menu{display:none;position:relative;height:35px;width:16.66%;max-width:200px}.byu-menu-more-menu .byu-menu-more{text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;position:relative;flex:1;max-width:200px;display:block}.byu-menu-more-menu .byu-menu-more:hover{background:#c5c5c5!important}.byu-menu-more-menu .byu-menu-more.selected{background:#e5e5e5!important}.byu-menu-more-menu .byu-menu-more.long-link{max-width:300px;flex:2;padding:0 12px!important}.byu-menu-more-menu .byu-menu-more.extra-long-link{max-width:400px;flex:3;padding:0 12px!important}.byu-menu-more-menu .byu-menu-more svg{fill:#002e5d}.byu-menu-more-menu .byu-menu-more-items{display:none;position:absolute;top:35px;left:0;right:0;z-index:2;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.75)}.byu-menu-more-menu .byu-menu-more-items ::slotted(*){width:100%;text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;box-sizing:border-box;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;display:block;text-align:left!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*):hover{background:#c5c5c5!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*).selected{background:#e5e5e5!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*).long-link{max-width:300px;flex:2;padding:0 12px!important}.byu-menu-more-menu .byu-menu-more-items ::slotted(*).extra-long-link{max-width:400px;flex:3;padding:0 12px!important}.byu-menu-more-visible .byu-menu-more-menu{display:block}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded{background:#e5e5e5;box-shadow:0 0 2px 0 rgba(0,0,0,.75)}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-more-items{display:block}.byu-menu-more-visible .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-fixed-overlay{position:fixed;top:0;bottom:0;left:0;right:0;z-index:1}:host(.mobile-view) .outer-nav{display:block;height:auto}:host(.mobile-view) .byu-menu-more{display:none!important}:host(.mobile-view) .slot-container ::slotted(*){display:block!important;text-align:left!important;padding:15px 30px!important;height:auto!important;width:100%;position:static;box-sizing:border-box;max-width:100%}:host(.mobile-view) .slot-container ::slotted(*).byu-menu-more-menu{padding:0!important}:host(.mobile-view) .byu-menu-more-menu{display:block;width:100%;box-shadow:none;position:static;height:auto;max-width:100%}:host(.mobile-view) .byu-menu-more-menu .byu-menu-more-items{display:block;box-shadow:none;padding:0}:host(.mobile-view) .byu-menu-more-menu .byu-menu-more-items ::slotted(*){display:block!important;text-align:left!important;padding:15px 30px!important;height:auto!important;width:100%;position:static;box-sizing:border-box}:host(.mobile-view) .byu-menu-more-menu.byu-menu-more-expanded{box-shadow:none}:host(.mobile-view) .byu-menu-more-menu.byu-menu-more-expanded .byu-menu-fixed-overlay{display:none!important}:host(.mobile-view) .byu-menu-more-items{position:static}", ""]);

        // exports


        /***/
    },
    /* 18 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, ":host{display:inline-block}#search-icon{width:1em;height:1em}button{background-color:var(--byu-search-color,#767676);border:1px solid var(--byu-search-color,#767676);color:#fff;width:30px}#search-form{display:flex;align-items:stretch;align-content:center}#search-form #search-container{flex:1}#search-form #search-container input,::slotted(input){padding:5px 10px;border:none}:host(.mobile-view){width:100%;height:35px}:host(.mobile-view) #search-form #search-container input,:host(.mobile-view) ::slotted(input){padding:5px 10px;width:100%;height:35px;border:none;border-bottom:1px solid #c5c5c5}:host(.mobile-view) #search-button{width:53px;padding:0 16px}:host(.mobile-view) #search-icon{width:20px;height:20px}", ""]);

        // exports


        /***/
    },
    /* 19 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, ".slot-wrapper ::slotted(.fa),.slot-wrapper ::slotted(a){text-decoration:none!important}.slot-wrapper ::slotted(.fa){color:#002e5d!important;font-size:25px!important;line-height:40px!important;border:1px solid #fff!important;width:40px!important;height:40px!important;text-align:center!important;border-radius:20px!important;margin:0 5px 5px 0!important;cursor:pointer}.slot-wrapper ::slotted(.fa:hover){background-color:#fff!important}", ""]);

        // exports


        /***/
    },
    /* 20 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, "img{height:20px;width:20px;margin:5px}.slot-wrapper ::slotted(*){text-decoration:none!important;font-size:13px!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;text-transform:uppercase!important;color:#fff!important}.has-user,.no-user{display:flex;flex-direction:row;align-items:center}:host(:not([mobile-view])){color:#fff}:host(:not([mobile-view])) .mobile{display:none}:host(:not([mobile-view])) .slot-wrapper ::slotted(a:hover){text-decoration:underline!important}:host(:not([mobile-view])) .has-user .name ::slotted(*){color:#c3ddf9!important;text-transform:uppercase!important;width:130px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host(:not([mobile-view])) img{margin:7px}:host([mobile-view]){text-decoration:none!important;font-size:13px!important;text-transform:uppercase!important;color:#fff!important;font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-weight:500!important;color:#002e5d!important;height:35px!important;display:inline-block;text-align:center!important;padding:0 6px!important;line-height:35px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;display:block;box-sizing:border-box;padding:18px 33px!important;line-height:12px;text-align:left!important;height:auto!important;padding-left:0!important;border-bottom:1px solid #c5c5c5}:host([mobile-view]):hover{background:#c5c5c5!important}:host([mobile-view]).selected{background:#e5e5e5!important}:host([mobile-view]).long-link{max-width:300px;flex:2;padding:0 12px!important}:host([mobile-view]).extra-long-link{max-width:400px;flex:3;padding:0 12px!important}:host([mobile-view]) .not-mobile{display:none}:host([mobile-view]) .has-user .name{order:2;flex:1}:host([mobile-view]) .has-user img{order:1;margin:7px}:host([mobile-view]) .has-user .logout{order:3}:host([mobile-view]) .slot-wrapper ::slotted(*){color:#002e5d!important}:host(:not([has-user])) .has-user,:host([has-user]) .no-user{display:none}", ""]);

        // exports


        /***/
    },
    /* 21 */
    /***/function (module, exports, __webpack_require__) {

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
    /* 22 */
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
    /* 23 */
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
    /* 24 */
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
            __append(__webpack_require__(16));
            __append('</style><div id="header" class="byu-header-root"><div class="byu-header-primary">\n<img class="byu-logo" alt="BYU" src="');
            __append(__webpack_require__(34));
            __append('"><div class="byu-header-title">\n<slot id="site-title" name="site-title"></slot>\n</div>\n');
            if (locals.mobile) {
                __append('<!--<button type="button" class="mobile-menu-button" aria-label="Open or close menu">-->\n<!--<img style="width: 1em; height: 1em;" src="');
                __append(__webpack_require__(35));
                __append('" alt="Menu">-->\n<!--</button>-->\n<button type="button" class="mobile-menu-button tcon tcon-menu--xbutterfly" aria-label="toggle menu">\n<span class="tcon-menu__lines" aria-hidden="true"></span>\n<span class="tcon-visuallyhidden">toggle menu</span>\n</button>\n');
            }
            __append('</div><div id="secondary" class="byu-header-secondary">\n');
            if (!locals.mobile) {
                __append('<div class="byu-header-actions">\n<slot id="actions" name="actions"></slot>\n</div>\n<div class="byu-header-user">\n<slot id="user" name="user"></slot>\n</div>\n');
            }
            __append('<div class="byu-header-search">\n<slot id="search" name="search"></slot>\n</div></div>');
            if (locals.mobile) {
                __append('<div id="mobileMenu">\n<slot id="signin" name="user"></slot>\n<slot id="navbarMenu" name="nav"></slot>\n<div class="byu-header-actions">\n<slot id="actions" name="actions"></slot>\n</div>\n</div>\n');
            } else {
                __append('<slot id="navbarMenu" name="nav"></slot>\n');
            }
            __append("</div>");
            return __output.join("");
        };

        /***/
    },
    /* 25 */
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
    /* 26 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>" + __webpack_require__(13) + "</style> <div class=\"wrapper\"> <slot name=\"actiontext\"></slot> </div>";

        /***/
    },
    /* 27 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>" + __webpack_require__(14) + "</style> <h2 class=\"header\"> <slot name=\"header\"></slot> </h2> <div class=\"content\"> <slot></slot> </div>";

        /***/
    },
    /* 28 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>" + __webpack_require__(15) + "</style> <div class=\"secondary-footer\"> <slot id=\"slot\"> </slot> </div> <div class=\"blue-footer\"> <div class=\"inner-wrapper\"> <a href=\"https://home.byu.edu/home/\" target=\"_blank\"><img src=\"" + __webpack_require__(33) + "\" alt=\"Brigham Young University\" class=\"university-logo\"></a> <div class=\"copyright-contact\">&copy; <span id=\"currentYear\"></span> All Rights Reserved | Provo, UT 84602, USA | <a href=\"tel:18014224636\">801-422-4636</a></div> </div> </div>";

        /***/
    },
    /* 29 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>" + __webpack_require__(17) + "</style> <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\"> <nav class=\"outer-nav slot-container\"> <slot class=\"byu-menu-items\"></slot> <div class=\"byu-menu-more-menu\"> <a href=\"javascript: void 0\" class=\"byu-menu-more\"> More <svg width=\"13\" height=\"13\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z\"/></svg> </a> <div class=\"byu-menu-more-items slot-container\"> <slot name=\"more\"></slot> </div> </div> </nav>";

        /***/
    },
    /* 30 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>" + __webpack_require__(18) + "</style> <div id=\"search-form\"> <div id=\"search-container\"> <slot id=\"search\"><input type=\"search\" placeholder=\"search\" onkeypress=\"searchHandler(event)\"></slot> </div> <button id=\"search-button\" type=\"submit\"> <img id=\"search-icon\" src=\"" + __webpack_require__(36) + "\" alt=\"Run Search\"> </button> </div>";

        /***/
    },
    /* 31 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>" + __webpack_require__(19) + "</style> <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\"> <div class=\"slot-wrapper\"> <slot id=\"facebook\" name=\"facebook\"></slot> <slot id=\"instagram\" name=\"instagram\"></slot> <slot id=\"twitter\" name=\"twitter\"></slot> <slot id=\"googleplus\" name=\"googleplus\"></slot> <slot id=\"linkedin\" name=\"linkedin\"></slot> <slot id=\"youtube\" name=\"youtube\"></slot> </div>";

        /***/
    },
    /* 32 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>" + __webpack_require__(20) + "</style> <div class=\"byu-user-wrapper\"> <div class=\"no-user slot-wrapper\"> <img class=\"not-mobile\" src=\"" + __webpack_require__(40) + "\"> <img class=\"mobile\" src=\"" + __webpack_require__(39) + "\"> <span class=\"text slot-wrapper\"> <slot name=\"login\">Sign In</slot> </span> </div> <div class=\"has-user\"> <span class=\"name slot-wrapper\"> <slot name=\"user-name\" id=\"user-name\"></slot> </span> <img class=\"not-mobile\" src=\"" + __webpack_require__(38) + "\"> <img class=\"mobile\" src=\"" + __webpack_require__(37) + "\"> <a class=\"logout slot-wrapper\"> <slot name=\"logout\">Sign Out</slot> </a> </div> </div>";

        /***/
    },
    /* 33 */
    /***/function (module, exports) {

        module.exports = "data:image/svg+xml,%3Csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1223.9 108.2'%3E%3Cstyle%3E.st0%7Bfill:%23fff%7D%3C/style%3E%3Cpath class='st0' d='M53.1 72.9c-2.7 0-4.1-.1-6.3-.1-2.3 0-5 .1-7.8.1-.2 0-.2-.6.1-.6 2.5-.2 3.8-.4 4.6-.9.8-.4 1.3-1.8 1.3-14v-9c0-12.1-.5-13.5-1.3-14-.7-.4-2.1-.6-4.6-.9-.2-.1-.2-.6-.1-.6 2.8 0 5.5.1 7.8.1s3.6-.1 6.3-.1c8.2 0 11.7 4.9 11.7 8.7 0 3.8-2.6 6.9-6.5 8.9C64.9 52 68.5 55.8 68.5 61c0 6.1-4.6 11.9-15.4 11.9zM53 34.3c-2 0-3.8.2-3.9.5-.2.2-.4 2.8-.4 10.1 0 3.6.1 5.4.2 5.5.2.2 1.8.4 4.2.4 4.9 0 7.4-3.1 7.4-7.8-.1-6-4.1-8.7-7.5-8.7zM52.4 52c-2 0-3.4.1-3.5.2-.1.1-.2 1.5-.2 8.7 0 6.1.3 9.1.7 9.6.4.6 2.8 1.1 5.5 1.1 5 0 9.1-3.3 9.1-9C64 56.1 59 52 52.4 52zm69.5 20.8c-3.8 0-5.5-.5-7.9-2.1-3.1-2.2-6.5-6.8-11.4-15.2-3.1.1-5.6.1-8-.1v2c0 12.1.6 13.5 1.4 14 .8.4 2.6.6 5.3.9.3.1.3.6.1.6H85.3c-.2 0-.2-.6.1-.6 2.4-.2 3.5-.4 4.2-.9.7-.4 1.3-1.8 1.3-14v-9c0-12.1-.6-13.5-1.3-14-.7-.4-1.8-.6-4.2-.9-.2-.1-.2-.6-.1-.6 2.7 0 5.2.1 7.5.1s4.7-.1 7.4-.1c9.2 0 13.1 5.1 13.1 9.8 0 4.9-3.1 8.7-7.4 11.3 8.2 12.3 13.3 17.6 17.6 17.6.6 0 1.4 0 1.8-.1.2 0 .2.7.1.7-1.2.5-2.1.6-3.5.6zm-21.8-38.3c-2.1 0-4.7.3-4.9.6-.2.4-.7 4.6-.7 13.5 0 3.7.1 4.9.4 5.1.5.4 2.9.7 5.8.7 5 0 8.1-4.4 8.1-9.2 0-5.9-2.9-10.7-8.7-10.7zm34.5 38.4c-.2 0-.2-.6.1-.6 2.4-.2 3.9-.4 4.7-.9.8-.4 1.3-1.8 1.3-14v-9c0-12.1-.5-13.5-1.3-14-.7-.4-2.3-.6-4.7-.9-.3-.1-.3-.6-.1-.6h16c.2 0 .2.6-.1.6-2.4.2-4 .4-4.7.9-.7.4-1.3 1.8-1.3 14v9c0 12.1.6 13.5 1.3 14 .7.4 2.3.6 4.7.9.2.1.2.6.1.6h-16zm71-18.3c-2.4.3-3.2.4-3.9.9-.5.4-.9 1.6-.7 13.8v.6c-3.4 2-8.1 3.4-13.2 3.4-11.7 0-21.3-8.9-21.3-19.8 0-10.5 7.4-20.8 21.1-20.8 6.5 0 10.1 2.2 12.2 1.7.3-.1.4.1.4.2.1 2.2.3 5.5.3 8.9 0 .3-.7.3-.7-.1-.2-1.7-1.1-3.7-2.4-4.9-2.2-2.1-6.3-4.3-10.5-4.3-11.1 0-16 8.8-16 17.5 0 10.3 7.3 19.8 19 19.8 2.7 0 5.5-.6 7.3-1.4-.1-12.9-.4-14.3-.9-14.5-.7-.4-2.3-.6-4.7-.9-.3 0-.3-.6-.1-.6h14.3c0-.1.1.5-.2.5zm44.1 18.3c-.2 0-.2-.6.1-.6 2.4-.2 3.4-.4 4.2-.9.7-.4 1.3-1.8 1.3-14v-4.1h-23.9v4.1c0 12.1.5 13.5 1.3 14 .7.4 1.8.6 4.2.9.2.1.2.6.1.6h-14.9c-.2 0-.2-.6.1-.6 2.4-.2 3.5-.4 4.2-.9.7-.4 1.3-1.8 1.3-14v-9c0-12.1-.6-13.5-1.3-14-.7-.4-1.8-.6-4.2-.9-.2-.1-.2-.6-.1-.6H237c.2 0 .2.6-.1.6-2.4.2-3.4.4-4.2.9-.8.4-1.3 1.8-1.3 14v3.3h23.9v-3.3c0-12.1-.6-13.5-1.3-14-.8-.4-1.8-.6-4.2-.9-.2-.1-.2-.6-.1-.6h14.9c.2 0 .2.6-.1.6-2.4.2-3.4.4-4.2.9-.7.4-1.3 1.8-1.3 14v9c0 12.1.6 13.5 1.3 14 .8.4 1.8.6 4.2.9.2.1.2.6.1.6h-14.9zm52.1 0c-.2 0-.2-.6 0-.6 1.9-.2 3.4-.2 3.4-1.2s-1.2-4.4-4.9-13.7l-.1-.2h-12.5l-.1.2c-3.1 8.3-4.2 12.1-4.2 13.3 0 1.1 1.4 1.2 3.9 1.5.2.1.2.6 0 .6h-11.6c-.2 0-.3-.6 0-.6 1.8-.2 3-.4 3.9-1 .6-.4 1.7-1.7 6.1-13.8l3.3-9c1.9-5.2 3.9-10.5 5.4-15.3.2-.4.7-.4.8 0 1.8 5.4 3.4 9.7 5.7 15.3l3.4 9c4.8 12.1 5.6 13.4 6.5 14 1 .6 2 .7 3.7.9.2.1.2.6 0 .6h-12.7zM294 40.1l-5.7 15.7h11.4L294 40.1zm69.3 32.8c-.2 0-.3-.6 0-.6 1.7-.2 3-.2 3.6-.7.6-.4 1-2-.4-14.1L365.1 43 351 73.1c-.1.1-.4.2-.6-.1l-15.2-29.8-1 13.9c-1.1 12.4-.3 13.8.4 14.3.6.5 2.3.6 3.9.8.2.1.2.6 0 .6h-13c-.2 0-.1-.6.1-.6 2.5-.2 3.8-.4 4.5-1 .5-.4 1.3-1.7 2.2-13.8l.6-9c.3-5.2.7-10.5.8-15.3.1-.3.7-.4.8-.1l17.3 34.2 16-34.2c.1-.2.7-.2.7.1.3 5.4.6 9.7 1.2 15.3l.9 9c1.4 12.1 1.7 13.5 2.6 14 .8.4 1.8.6 4.3.9.2.1.4.6.2.6h-14.4zm83.9-38.7c-.6.3-1.4 1.2-5.8 8.6l-3.3 5.5c-1.5 2.4-3 4.8-4.3 7.1v2c0 12.2.6 13.6 1.3 14 .7.4 2.3.6 4.7.9.2.1.2.6.1.6h-16c-.2 0-.2-.6.1-.6 2.4-.2 4-.4 4.7-.9.7-.4 1.3-1.8 1.3-14v-1.8c-1.4-2.4-2.7-4.7-4.4-7.4l-3.4-5.5c-4.7-7.4-5.2-8.4-6-8.7-1-.4-1.9-.4-3.6-.5-.3 0-.2-.6 0-.6h13.2c.2 0 .2.6 0 .6-1.4.1-3 .1-3.4.4-.5.3 0 1.3 4.5 9.4l6.1 10.3 6.8-11.3c4.4-6.9 4.2-7.9 3.8-8.2-.5-.2-2.2-.4-3.8-.5-.2 0-.2-.6 0-.6h11.7c.2 0 .2.6 0 .6-2.1.1-3.4.2-4.3.6zm34.5 39.1c-11.3 0-20-8.7-20-19.8 0-10.6 8.4-20.8 20.9-20.8 11.3 0 20 8.7 20 19.8 0 10.6-8.3 20.8-20.9 20.8zm-.3-38.9c-11 0-15.3 9.3-15.3 17.3 0 10 7 19.9 16.8 19.9 10.9 0 15.2-9.3 15.2-17.3.1-10-6.9-19.9-16.7-19.9zm73.6.3c-.5.4-1 1.7-1 13.8v10.3c0 7.4-5.5 14.5-15.2 14.5-9.6 0-15.4-6.3-15.4-14.3V48.5c0-12.1-.6-13.5-1.3-14-.7-.4-1.8-.6-4.2-.9-.2-.1-.2-.6-.1-.6H533c.2 0 .2.6-.1.6-2.4.2-3.7.4-4.4.9-.8.4-1.3 1.8-1.3 14v9.3c0 7.6 4.9 13 13 13 7.6 0 11.6-5.5 11.6-12.4v-10c0-12.1-.6-13.3-1-13.8-.7-.6-2.2-.8-4.6-1-.3-.1-.2-.6 0-.6h13.1c.2 0 .2.6 0 .6-2.4.3-3.6.5-4.3 1.1zm59.1.3c-.5.5-1.2 1.4-1.1 13.5l.1 9c.1 5.2 0 10.6.3 15.4.1.3-.7.4-1 .1l-30.5-32.5.2 17c.1 11.2.9 12.9 1.7 13.6.6.4 2.8 1 4.5 1 .2 0 .2.8 0 .8h-14.1c-.2 0-.2-.7 0-.8 2.5-.2 3.9-.6 4.5-1.2.5-.5 1.2-1.4 1-13.5l-.1-9c-.1-5.2-.1-10.6-.4-15.4 0-.3.9-.4 1.1-.1l30.6 32.7-.2-17.2c-.1-12.1-1-13-1.7-13.6-.7-.6-2.3-.9-4.9-1-.2-.1-.2-.8 0-.8h14.3c.2 0 .2.7 0 .8-2.4.3-3.6.7-4.3 1.2zm60.3 19.6c-2.4.3-3.2.4-3.9.9-.5.4-.9 1.6-.7 13.8v.6c-3.4 2-8.1 3.4-13.2 3.4-11.7 0-21.3-8.9-21.3-19.8 0-10.5 7.4-20.8 21.1-20.8 6.5 0 10.1 2.2 12.2 1.7.3-.1.4.1.4.2.1 2.2.3 5.5.3 8.9 0 .3-.7.3-.7-.1-.2-1.7-1.1-3.7-2.4-4.9-2.2-2.1-6.3-4.3-10.5-4.3-11.1 0-16 8.8-16 17.5 0 10.3 7.3 19.8 19 19.8 2.7 0 5.5-.6 7.3-1.4-.1-12.9-.4-14.3-.9-14.5-.7-.4-2.3-.6-4.7-.9-.3 0-.3-.6-.1-.6h14.3c0-.1.1.5-.2.5zm78-19.9c-.5.4-1 1.7-1 13.8v10.3c0 7.4-5.5 14.5-15.2 14.5-9.6 0-15.4-6.3-15.4-14.3V48.5c0-12.1-.6-13.5-1.3-14-.7-.4-1.8-.6-4.2-.9-.2-.1-.2-.6-.1-.6h15.2c.2 0 .2.6-.1.6-2.4.2-3.7.4-4.4.9-.8.4-1.3 1.8-1.3 14v9.3c0 7.6 4.9 13 13 13 7.6 0 11.6-5.5 11.6-12.4v-10c0-12.1-.6-13.3-1-13.8-.7-.6-2.2-.8-4.6-1-.3-.1-.2-.6 0-.6h13.1c.2 0 .2.6 0 .6-2.4.3-3.6.5-4.3 1.1zm59.1.3c-.5.5-1.2 1.4-1.1 13.5l.1 9c.1 5.2 0 10.6.3 15.4.1.3-.7.4-1 .1l-30.5-32.5.2 17c.1 11.2.9 12.9 1.7 13.6.6.4 2.8 1 4.5 1 .2 0 .2.8 0 .8h-14.1c-.2 0-.2-.7 0-.8 2.5-.2 3.9-.6 4.5-1.2.5-.5 1.2-1.4 1-13.5l-.1-9c-.1-5.2-.1-10.6-.4-15.4 0-.3.9-.4 1.1-.1l30.6 32.7-.2-17.2c-.1-12.1-1-13-1.7-13.6-.7-.6-2.3-.9-4.9-1-.2-.1-.2-.8 0-.8h14.3c.2 0 .2.7 0 .8-2.4.3-3.6.7-4.3 1.2zm22.1 37.9c-.2 0-.2-.6.1-.6 2.4-.2 3.9-.4 4.7-.9.8-.4 1.3-1.8 1.3-14v-9c0-12.1-.5-13.5-1.3-14-.7-.4-2.3-.6-4.7-.9-.3-.1-.3-.6-.1-.6h16c.2 0 .2.6-.1.6-2.4.2-4 .4-4.7.9-.7.4-1.3 1.8-1.3 14v9c0 12.1.6 13.5 1.3 14 .7.4 2.3.6 4.7.9.2.1.2.6.1.6h-16zm68-38.2c-.6.5-1.7 1.7-6.6 13.8l-3.6 9c-2 5.2-4.2 10.5-5.8 15.3-.2.4-1.4.4-1.5 0-1.9-5.3-3.6-9.7-5.8-15.3l-3.6-9c-4.5-10.8-5.6-13.2-6.6-13.8-1-.6-2.2-.8-4.1-1-.2-.1-.2-.6 0-.6h13.8c.2 0 .3.6 0 .6-2.3.2-3.8.7-3.8 1.7 0 1.1 1 3.9 4.8 13.2l7 18.4 7.3-18.4c3.3-8.4 4.2-11.5 4.2-12.8 0-1.1-1.4-1.8-4-2-.2-.1-.2-.6 0-.6h11.9c.2 0 .3.6 0 .6-1.8.1-2.8.3-3.6.9zm43.5 37.5c-.3.4-2.2.7-4.7.7-3.7 0-5.6-.2-10.8-.2-3.9 0-5.9.1-10.3.1-.2 0-.2-.6.1-.6 2.4-.2 3.8-.4 4.6-.9.8-.4 1.3-1.8 1.3-14v-9c0-12.1-.5-13.5-1.3-14-.7-.4-2.2-.6-4.6-.9-.2-.1-.2-.6-.1-.6 4.8.1 11.9.1 15.9.1 5.2 0 7.1-.1 9-.3.2 0 .4.1.4.2-.2 2.2-.3 4.6-.7 7.9-.1.2-.7.2-.7-.2 0-1.6-.1-3.1-1-4.1-1-1.1-2.9-2-7.3-2-2.4 0-5 0-5.6.1-.2.6-.2 3.6-.2 7.4V51h5.4c5.8 0 6.6-.9 7-3.1 0-.2.7-.2.7 0-.1 1.7-.3 7.2-.3 8.9 0 .2-.7.2-.7-.1 0-1.2-.3-2.4-.9-3-.6-.6-1.5-1.2-5.8-1.2h-5.4v4.4c0 7.9.4 12.3 1 12.9.5.6 2.8.8 6.3.8 3.9 0 6-1.1 7.1-2.3.9-.9 1.5-2.5 2-4.4.1-.4.7-.1.7.2-.4 4.6-1 8-1.1 8.1zm55.7.6c-3.8 0-5.5-.5-7.9-2.1-3.1-2.2-6.5-6.8-11.4-15.2-3.1.1-5.6.1-8-.1v2c0 12.1.6 13.5 1.4 14 .8.4 2.6.6 5.3.9.3.1.3.6.1.6h-16.1c-.2 0-.2-.6.1-.6 2.4-.2 3.5-.4 4.2-.9.7-.4 1.3-1.8 1.3-14v-9c0-12.1-.6-13.5-1.3-14-.7-.4-1.8-.6-4.2-.9-.2-.1-.2-.6-.1-.6 2.7 0 5.2.1 7.5.1s4.7-.1 7.4-.1c9.2 0 13.1 5.1 13.1 9.8 0 4.9-3.1 8.7-7.4 11.3 8.2 12.3 13.3 17.6 17.6 17.6.6 0 1.4 0 1.8-.1.2 0 .2.7.1.7-1.2.5-2.1.6-3.5.6zM979 34.5c-2.1 0-4.7.3-4.9.6-.2.4-.7 4.6-.7 13.5 0 3.7.1 4.9.4 5.1.5.4 2.9.7 5.8.7 5 0 8.1-4.4 8.1-9.2 0-5.9-2.9-10.7-8.7-10.7zm44.8 38.7c-6.2 0-9.4-3.4-9.5-3.6-.1-.2-.4-5.4 0-8.5-.1-.3.7-.3.7.1.1 2.3 1 4.8 1.8 6.1 1.8 2.7 4.2 4.4 7.8 4.4 4.8 0 7.7-3.4 7.7-7.9 0-9.2-16.3-10.7-16.3-20.8 0-6.3 4.9-10.3 10.6-10.3 4.7 0 5.5 1.7 7.7 1.1.2-.1.4.1.4.2 0 2.2.1 5 0 8.3-.1.2-.7.2-.7-.1-.1-2-.9-4.4-2.1-5.7-1.4-1.5-3.4-2.4-5.6-2.4-3.9 0-6.8 2.9-6.8 6.7 0 7.7 17 10.9 17 20.9-.1 7.6-6.6 11.5-12.7 11.5zm31.6-.3c-.2 0-.2-.6.1-.6 2.4-.2 3.9-.4 4.7-.9.8-.4 1.3-1.8 1.3-14v-9c0-12.1-.5-13.5-1.3-14-.7-.4-2.3-.6-4.7-.9-.3-.1-.3-.6-.1-.6h16c.2 0 .2.6-.1.6-2.4.2-4 .4-4.7.9-.7.4-1.3 1.8-1.3 14v9c0 12.1.6 13.5 1.3 14 .7.4 2.3.6 4.7.9.2.1.2.6.1.6h-16zm68.3-31.3c-.1.2-.7.2-.7-.1 0-1.5-.3-3.9-1.2-4.7-1.1-1.2-4.1-1.8-10.6-1.8-1.4 0-2.2 0-2.8.1-.2.6-.2 3.6-.2 7.4v15c0 12.1.6 13.5 1.3 14 .7.4 2.3.6 4.7.9.2.1.2.6.1.6h-16c-.2 0-.2-.6.1-.6 2.4-.2 3.9-.4 4.7-.9.7-.4 1.3-1.8 1.3-14v-15c0-3.9-.1-6.8-.2-7.4-.6-.1-1.7-.1-3.1-.1-6.3 0-9.2.6-10.7 1.8-.9.9-1.5 3.4-1.8 4.9 0 .3-.7.1-.7-.1.4-3.1.7-6.5.9-8.6 0-.1.1-.2.4-.2 2.2.4 6.5.7 17.2.7 14.7 0 16.4-.4 17.5-.8.2-.1.4.1.4.2-.1 2.2-.2 5.5-.6 8.7zm49.1-7.4c-.6.3-1.4 1.2-5.8 8.6l-3.3 5.5c-1.5 2.4-3 4.8-4.3 7.1v2c0 12.2.6 13.6 1.3 14 .7.4 2.3.6 4.7.9.2.1.2.6.1.6h-16c-.2 0-.2-.6.1-.6 2.4-.2 4-.4 4.7-.9.7-.4 1.3-1.8 1.3-14v-1.8c-1.4-2.4-2.7-4.7-4.4-7.4l-3.4-5.5c-4.7-7.4-5.2-8.4-6-8.7-1-.4-1.9-.4-3.6-.5-.3 0-.2-.6 0-.6h13.2c.2 0 .2.6 0 .6-1.4.1-3 .1-3.4.4-.5.3 0 1.3 4.5 9.4l6.1 10.3 6.8-11.3c4.4-6.9 4.2-7.9 3.8-8.2-.5-.2-2.2-.4-3.8-.5-.2 0-.2-.6 0-.6h11.7c.2 0 .2.6 0 .6-2.1.1-3.3.2-4.3.6z'/%3E%3C/svg%3E";

        /***/
    },
    /* 34 */
    /***/function (module, exports) {

        module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 139.7 40.3'%3E%3Cpath d='M16.6 16.1V9.4c0-.5-.1-.9-.1-.9s.5.1.9.1h5c3.8 0 6.1.6 6.1 4.1 0 2.3-1.4 4.3-5.9 4.3h-6v-.9zm0 15.3v-7.7c0-.5-.1-.9-.1-.9s.5.1.9.1h4.3c3.4 0 7.5 0 7.5 4.7 0 3.5-3 4.7-7 4.7h-4.8c-.5 0-.9.1-.9.1s.1-.5.1-1zM4.4 4.5v32.1c0 1 .1 1.4-.7 1.9-.7.4-1.4.5-2.6.7-.1 0-.1.5 0 .5h26c11 0 15.6-4.3 15.6-11.1 0-5-2.3-8.1-7-9.2-.1 0-.1-.1 0-.1 2.9-.9 5.7-3.1 5.7-8.3 0-7.1-4.8-9.5-15.2-9.5h-25c-.2-.1-.2.3-.1.4 1.2.2 1.9.3 2.6.7.8.5.7.8.7 1.9zm130.9 0c0-1-.1-1.4.7-1.9.7-.4 1.5-.5 2.7-.7.1 0 .1-.5 0-.5h-19.2c-.1 0-.1.4 0 .5 1.2.2 1.8.3 2.5.7.7.5.7.8.7 1.9v19.3c0 4.4-2.5 7.8-7.5 7.8s-7.5-3.4-7.5-7.8V4.5c0-1-.1-1.4.7-1.9.7-.4 1.3-.6 2.5-.7.1 0 .1-.5 0-.5H92.8c-.1 0-.1.5 0 .5.7 0 1.1.1 1.5.4.6.5.7 1.1.7 2.2v19c0 9.1 5 16.9 20.2 16.9s20.2-7.8 20.2-16.9v-19zm-58 35.2c.1 0 .1-.4 0-.5-1.2-.2-1.9-.3-2.7-.7-.7-.5-.7-.8-.7-1.9V24.4L87.2 4.7c.7-1.1 1.2-1.6 1.8-2.1.1-.1.3-.2.5-.3.5-.3.7-.4 1.4-.4.1 0 .2-.5 0-.5H73c-.1 0-.1.5 0 .5.9 0 1.9 0 1.8 1.3-.1 1.2-5.3 8.7-7.1 11.5-.3.4-.5.8-.6 1.3-.1-.5-.4-1-.6-1.3-2.6-3.8-6.9-10-7.1-11.5-.1-1.3.9-1.3 1.8-1.3.1 0 .2-.5 0-.5H42.4c-.1 0-.1.4 0 .5.8.1 1.2 0 2.2.5.1.1.4.2.5.3.6.5 1 1 1.7 2L60 24.3v12.3c0 1 .1 1.4-.7 1.9-.7.4-1.5.5-2.7.7-.1 0-.1.5 0 .5h20.7z' fill='%23FFF'/%3E%3C/svg%3E";

        /***/
    },
    /* 35 */
    /***/function (module, exports) {

        module.exports = "data:image/svg+xml,%3Csvg width='1792' height='1792' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1664 1344v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V832q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V320q0-26 19-45t45-19h1408q26 0 45 19t19 45z' fill='%23fff'/%3E%3C/svg%3E";

        /***/
    },
    /* 36 */
    /***/function (module, exports) {

        module.exports = "data:image/svg+xml,%3Csvg width='1792' height='1792' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1216 832q0-185-131.5-316.5T768 384 451.5 515.5 320 832t131.5 316.5T768 1280t316.5-131.5T1216 832zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225T64 832t55.5-273.5 150-225 225-150T768 128t273.5 55.5 225 150 150 225T1472 832q0 220-124 399l343 343q37 37 37 90z' fill='%23fff'/%3E%3C/svg%3E";

        /***/
    },
    /* 37 */
    /***/function (module, exports) {

        module.exports = "data:image/svg+xml,%3Csvg height='1000' width='1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23002e5d' d='M849.9 747.2q-12.3-86.5-48.8-143.7t-103-66.1q-37.4 41.3-89 64.4T500 625t-109.1-23.2-89-64.4q-66.4 8.9-103 66.1t-48.8 143.7q59.2 83.7 151.2 132.5T500 928.6t198.7-48.9 151.2-132.5zM714.3 357.1q0-88.7-62.8-151.5T500 142.9t-151.5 62.7-62.8 151.5 62.8 151.5T500 571.4t151.5-62.8 62.8-151.5zM1000 500q0 101.6-39.6 193.9T854.1 853.5 694.8 960.4 500 1000q-101.6 0-194.2-39.6T146.2 853.8 39.6 694.2 0 500t39.6-194.2 106.6-159.6T305.8 39.6 500 0t194.2 39.6 159.6 106.6 106.6 159.6T1000 500z'/%3E%3C/svg%3E";

        /***/
    },
    /* 38 */
    /***/function (module, exports) {

        module.exports = "data:image/svg+xml,%3Csvg height='1000' width='1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23FFF' d='M849.9 747.2q-12.3-86.5-48.8-143.7t-103-66.1q-37.4 41.3-89 64.4T500 625t-109.1-23.2-89-64.4q-66.4 8.9-103 66.1t-48.8 143.7q59.2 83.7 151.2 132.5T500 928.6t198.7-48.9 151.2-132.5zM714.3 357.1q0-88.7-62.8-151.5T500 142.9t-151.5 62.7-62.8 151.5 62.8 151.5T500 571.4t151.5-62.8 62.8-151.5zM1000 500q0 101.6-39.6 193.9T854.1 853.5 694.8 960.4 500 1000q-101.6 0-194.2-39.6T146.2 853.8 39.6 694.2 0 500t39.6-194.2 106.6-159.6T305.8 39.6 500 0t194.2 39.6 159.6 106.6 106.6 159.6T1000 500z'/%3E%3C/svg%3E";

        /***/
    },
    /* 39 */
    /***/function (module, exports) {

        module.exports = "data:image/svg+xml,%3Csvg height='1000' width='1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23002e5d' d='M500 0q101.6 0 194.2 39.6t159.6 106.6 106.6 159.6T1000 500q0 101-39.3 193.6T854.4 853.2 694.8 960.1 500 1000t-194.8-39.6-159.3-106.9T39.6 693.9 0 500t39.6-194.2 106.6-159.6T305.8 39.6 500 0zm345.4 753.9q83.2-114.4 83.2-253.9 0-87.1-34.1-166.3T803 197t-136.7-91.5T500 71.4t-166.3 34.1T197 197t-91.5 136.7T71.4 500q0 139.5 83.2 253.9 36.8-182.5 170.7-182.5 73.1 71.5 174.7 71.5t174.7-71.5q133.9 0 170.7 182.5zm-131.1-361q0-88.8-62.8-151.5T500 178.6t-151.5 62.8-62.8 151.5 62.8 151.5T500 607.1t151.5-62.7 62.8-151.5z'/%3E%3C/svg%3E";

        /***/
    },
    /* 40 */
    /***/function (module, exports) {

        module.exports = "data:image/svg+xml,%3Csvg height='1000' width='1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23FFF' d='M500 0q101.6 0 194.2 39.6t159.6 106.6 106.6 159.6T1000 500q0 101-39.3 193.6T854.4 853.2 694.8 960.1 500 1000t-194.8-39.6-159.3-106.9T39.6 693.9 0 500t39.6-194.2 106.6-159.6T305.8 39.6 500 0zm345.4 753.9q83.2-114.4 83.2-253.9 0-87.1-34.1-166.3T803 197t-136.7-91.5T500 71.4t-166.3 34.1T197 197t-91.5 136.7T71.4 500q0 139.5 83.2 253.9 36.8-182.5 170.7-182.5 73.1 71.5 174.7 71.5t174.7-71.5q133.9 0 170.7 182.5zm-131.1-361q0-88.8-62.8-151.5T500 178.6t-151.5 62.8-62.8 151.5 62.8 151.5T500 607.1t151.5-62.7 62.8-151.5z'/%3E%3C/svg%3E";

        /***/
    }]);
})();
//# sourceMappingURL=components-compat.js.map
