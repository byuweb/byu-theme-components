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
        /******/return __webpack_require__(__webpack_require__.s = 31);
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
    /***/function (module, exports, __webpack_require__) {

        "use strict";

        var template = __webpack_require__(21);

        var BYUFooterActionButton = function (_HTMLElement) {
            _inherits(BYUFooterActionButton, _HTMLElement);

            function BYUFooterActionButton() {
                _classCallCheck(this, BYUFooterActionButton);

                var _this = _possibleConstructorReturn(this, (BYUFooterActionButton.__proto__ || Object.getPrototypeOf(BYUFooterActionButton)).call(this));

                var shadowRoot = _this.attachShadow({ mode: 'open' });
                shadowRoot.innerHTML = template;
                return _this;
            }

            _createClass(BYUFooterActionButton, [{
                key: 'connectedCallback',
                value: function connectedCallback() {}
            }]);

            return BYUFooterActionButton;
        }(HTMLElement);

        window.customElements.define('byu-footer-action-button', BYUFooterActionButton);
        window.BYUFooterActionButton = BYUFooterActionButton;

        /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

        "use strict";

        var template = __webpack_require__(22);

        var BYUFooterColumn = function (_HTMLElement2) {
            _inherits(BYUFooterColumn, _HTMLElement2);

            function BYUFooterColumn() {
                _classCallCheck(this, BYUFooterColumn);

                var _this2 = _possibleConstructorReturn(this, (BYUFooterColumn.__proto__ || Object.getPrototypeOf(BYUFooterColumn)).call(this));

                var shadowRoot = _this2.attachShadow({ mode: 'open' });
                shadowRoot.innerHTML = template;
                return _this2;
            }

            _createClass(BYUFooterColumn, [{
                key: 'connectedCallback',
                value: function connectedCallback() {}
            }]);

            return BYUFooterColumn;
        }(HTMLElement);

        window.customElements.define('byu-footer-column', BYUFooterColumn);
        window.BYUFooterColumn = BYUFooterColumn;

        /***/
    },
    /* 3 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__template_html__ = __webpack_require__(23);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_html__);

        var BYUFooter = function (_HTMLElement3) {
            _inherits(BYUFooter, _HTMLElement3);

            function BYUFooter() {
                _classCallCheck(this, BYUFooter);

                var _this3 = _possibleConstructorReturn(this, (BYUFooter.__proto__ || Object.getPrototypeOf(BYUFooter)).call(this));

                var shadowRoot = _this3.attachShadow({ mode: 'open' });
                shadowRoot.innerHTML = __WEBPACK_IMPORTED_MODULE_0__template_html__;
                return _this3;
            }

            _createClass(BYUFooter, [{
                key: 'connectedCallback',
                value: function connectedCallback() {
                    // always show the current year in the copyright message
                    var currentYear = this.shadowRoot.querySelector("#currentYear");
                    currentYear.innerHTML = new Date().getFullYear();
                }
            }]);

            return BYUFooter;
        }(HTMLElement);

        window.customElements.define('byu-footer', BYUFooter);
        window.BYUFooter = BYUFooter;

        /***/
    },
    /* 4 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__template_ejs_html__ = __webpack_require__(20);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__template_ejs_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_ejs_html__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_deep_equal__ = __webpack_require__(17);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_deep_equal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_deep_equal__);

        var ATTR_MOBILE_MAX_WIDTH = 'mobile-max-width';
        var ATTR_IN_MOBILE_VIEW = 'in-mobile-view';

        var DEFAULT_MOBILE_WIDTH = '640px';

        var BYUHeader = function (_HTMLElement4) {
            _inherits(BYUHeader, _HTMLElement4);

            function BYUHeader() {
                _classCallCheck(this, BYUHeader);

                var _this4 = _possibleConstructorReturn(this, (BYUHeader.__proto__ || Object.getPrototypeOf(BYUHeader)).call(this));

                _this4._shadowRoot = _this4.attachShadow({ mode: 'open' });
                return _this4;
            }

            _createClass(BYUHeader, [{
                key: '_render',
                value: function _render() {
                    var state = {
                        mobile: this.inMobileView
                    };
                    if (!__WEBPACK_IMPORTED_MODULE_1_deep_equal__(state, this._renderState)) {
                        this._shadowRoot.innerHTML = __WEBPACK_IMPORTED_MODULE_0__template_ejs_html__(state);
                        this._renderState = state;

                        this._addSlotListeners();
                        this._notifyChildrenOfMobileState();
                    }
                }
            }, {
                key: '_addSlotListeners',
                value: function _addSlotListeners() {
                    var _this5 = this;

                    this._findAllSlots().forEach(function (each) {
                        each.addEventListener('slotchange', function (event) {
                            _this5._notifyChildrenOfMobileState();
                        });
                    });
                }
            }, {
                key: '_notifyChildrenOfMobileState',
                value: function _notifyChildrenOfMobileState() {
                    var kids = this._findAllDistributedChildren();
                    if (this.inMobileView) {
                        kids.forEach(function (each) {
                            each.setAttribute(ATTR_IN_MOBILE_VIEW, '');
                            each.classList.add(ATTR_IN_MOBILE_VIEW);
                        });
                    } else {
                        kids.forEach(function (each) {
                            each.removeAttribute(ATTR_IN_MOBILE_VIEW);
                            each.classList.remove(ATTR_IN_MOBILE_VIEW);
                        });
                    }
                }
            }, {
                key: '_findAllSlots',
                value: function _findAllSlots() {
                    var slots = this._shadowRoot.querySelectorAll('slot');
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
                        case ATTR_IN_MOBILE_VIEW:
                            this._render();
                            return;
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
                    return this.hasAttribute(ATTR_IN_MOBILE_VIEW);
                },
                set: function set(val) {
                    console.log('set inMobileView', val);
                    if (val) {
                        this.setAttribute(ATTR_IN_MOBILE_VIEW, '');
                    } else {
                        this.removeAttribute(ATTR_IN_MOBILE_VIEW);
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
                    return [ATTR_MOBILE_MAX_WIDTH, ATTR_IN_MOBILE_VIEW];
                }
            }]);

            return BYUHeader;
        }(HTMLElement);

        window.customElements.define('byu-header', BYUHeader);
        window.BYUHeader = BYUHeader;

        /***/
    },
    /* 5 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__template_html__ = __webpack_require__(24);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_html__);

        var BYUMenu = function (_HTMLElement5) {
            _inherits(BYUMenu, _HTMLElement5);

            _createClass(BYUMenu, [{
                key: 'collapsed',
                get: function get() {
                    return this.hasAttribute('collapsed');
                },
                set: function set(val) {
                    if (val) this.setAttribute('collapsed', '');else this.removeAttribute('collapsed');
                }
            }], [{
                key: 'observedAttributes',
                get: function get() {
                    return ['collapsed'];
                }
            }]);

            function BYUMenu() {
                _classCallCheck(this, BYUMenu);

                var _this6 = _possibleConstructorReturn(this, (BYUMenu.__proto__ || Object.getPrototypeOf(BYUMenu)).call(this));

                // always call super first
                var shadowRoot = _this6.attachShadow({ mode: 'open' });
                shadowRoot.innerHTML = __WEBPACK_IMPORTED_MODULE_0__template_html__;
                return _this6;
            }

            _createClass(BYUMenu, [{
                key: 'attributeChangedCallback',
                value: function attributeChangedCallback(name, oldValue, newValue) {}
            }, {
                key: 'connectedCallback',
                value: function connectedCallback() {
                    // if there are more than 6 links add the extras to a "more" dropdown
                    var slot = this.shadowRoot.querySelector("#slot");

                    var allLinks = slot.assignedNodes().filter(function (element) {
                        return element instanceof HTMLElement;
                    });

                    // create the secondary nav links
                    for (var i = 0; i < allLinks.length; i++) {
                        var cln = allLinks[i].cloneNode(true);
                        this.shadowRoot.querySelector('.secondary-nav').appendChild(cln);
                    }

                    // calculate the height of the mobile dropdown
                    var h = allLinks.length * 48;

                    if (allLinks.length > 6) {

                        // create the "extra links" dropdown
                        var extraLinks = this.shadowRoot.querySelector('#extraLinks');
                        extraLinks.style.display = "table-cell";

                        allLinks = allLinks.slice(5);
                        var dropdown = extraLinks.querySelector("#extraLinksDropdown");
                        for (var i = 0; i < allLinks.length; i++) {
                            var listItem = document.createElement("li");
                            listItem.appendChild(allLinks[i]);
                            dropdown.appendChild(listItem);
                        }
                    }

                    //dynamically set the height of the mobile dropdown based on the number of links
                    var styleSheet = this.shadowRoot.querySelector("#stylePlaceHolder");
                    styleSheet.innerHTML = "<style>.navbar-collapse { height: " + h + "px }</style>";
                }
            }]);

            return BYUMenu;
        }(HTMLElement);

        window.customElements.define('byu-menu', BYUMenu);
        window.BYUMenu = BYUMenu;

        /***/
    },
    /* 6 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__template_html__ = __webpack_require__(25);
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

                var _this7 = _possibleConstructorReturn(this, (ByuSearch.__proto__ || Object.getPrototypeOf(ByuSearch)).call(this));

                // always call super first

                var shadowRoot = _this7.attachShadow({ mode: 'open' });
                shadowRoot.innerHTML = __WEBPACK_IMPORTED_MODULE_0__template_html__;
                return _this7;
            }

            _createClass(ByuSearch, [{
                key: 'connectedCallback',
                value: function connectedCallback() {
                    var input = getInputElement(this, true);
                    if (input) input.addEventListener('input', inputHandler);

                    this.shadowRoot.querySelector('form').addEventListener('submit', formSubmitHandler);

                    if (this.hasAttribute('value')) this.value = this.getAttribute('value');
                }
            }, {
                key: 'disconnectedCallback',
                value: function disconnectedCallback() {
                    var input = getInputElement(this, true);
                    if (input) input.removeEventListener('input', inputHandler);

                    this.shadowRoot.querySelector('form').removeEventListener('submit', formSubmitHandler);
                }
            }, {
                key: 'search',
                value: function search() {
                    if (this.hasAttribute('onsearch')) evalInContext.call(this, this.getAttribute('onsearch'));

                    if (this.hasAttribute('action')) {
                        var form = this.shadowRoot.querySelector('form');
                        var value = this.value;
                        var action = this.getAttribute('action').toString().replace(/\$1/g, value);
                        form.setAttribute('action', action);
                        form.setAttribute('method', this.hasAttribute('method') ? this.getAttribute('method') : 'GET');
                        if (this.hasAttribute('target')) form.setAttribute('target', this.getAttribute('target'));
                        form.submit();
                    }
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
            while (!(el instanceof ByuSearch)) {
                el = el.host ? el.host : el.parentNode;
            }return el;
        }

        function inputHandler(e) {
            var el = e.target;
            var component = el.tagName === 'byu-search' ? el : getParentComponent(el);
            component.value = e.target.value;
        }

        function formSubmitHandler(e) {
            if (e) e.preventDefault();
            this.parentNode.host.search();
        }

        window.customElements.define('byu-search', ByuSearch);
        window.ByuSearch = ByuSearch;

        /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

        "use strict";

        var template = __webpack_require__(26);

        var BYUSocialMediaLinks = function (_HTMLElement7) {
            _inherits(BYUSocialMediaLinks, _HTMLElement7);

            function BYUSocialMediaLinks() {
                _classCallCheck(this, BYUSocialMediaLinks);

                var _this8 = _possibleConstructorReturn(this, (BYUSocialMediaLinks.__proto__ || Object.getPrototypeOf(BYUSocialMediaLinks)).call(this));

                var shadowRoot = _this8.attachShadow({ mode: 'open' });
                shadowRoot.innerHTML = template;
                return _this8;
            }

            _createClass(BYUSocialMediaLinks, [{
                key: 'connectedCallback',
                value: function connectedCallback() {
                    var idArr = ['facebook', 'instagram', 'twitter', 'googleplus', 'linkedin', 'youtube'];
                    var classArr = ['fa-facebook', 'fa-instagram', 'fa-twitter', 'fa-google-plus', 'fa-linkedin', 'fa-youtube-play'];

                    for (var i = 0; i < idArr.length; i++) {
                        var slotId = this.shadowRoot.querySelector("#" + idArr[i]);
                        var link = slotId.assignedNodes();

                        if (link.length > 0) {
                            link[0].classList.add("fa");
                            link[0].classList.add(classArr[i]);
                        }
                    }
                }
            }]);

            return BYUSocialMediaLinks;
        }(HTMLElement);

        window.customElements.define('byu-social-media-links', BYUSocialMediaLinks);
        window.BYUSocialMediaLinks = BYUSocialMediaLinks;

        /***/
    },
    /* 8 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__template_html__ = __webpack_require__(27);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_html__);
        /**
         * Created by ThatJoeMoore on 11/7/16.
         */

        var ByuUserLogin = function (_HTMLElement8) {
            _inherits(ByuUserLogin, _HTMLElement8);

            _createClass(ByuUserLogin, [{
                key: 'loginUrl',
                set: function set(value) {
                    var link = this.shadowRoot.querySelector('.link');

                    if (value) {
                        this.setAttribute('login-url', value);
                        if (link) {
                            link.setAttribute('href', value);
                        }
                    } else {
                        this.removeAttribute('login-url');
                        if (link) {
                            link.removeAttribute('href');
                        }
                    }
                },
                get: function get() {
                    return this.getAttribute('login-url');
                }
            }]);

            function ByuUserLogin() {
                _classCallCheck(this, ByuUserLogin);

                var _this9 = _possibleConstructorReturn(this, (ByuUserLogin.__proto__ || Object.getPrototypeOf(ByuUserLogin)).call(this));

                var shadowRoot = _this9.attachShadow({ mode: 'open' });
                shadowRoot.innerHTML = __WEBPACK_IMPORTED_MODULE_0__template_html__;
                //Hack to make sure that the proper login URL gets set in our template.
                _this9.loginUrl = _this9.loginUrl;
                return _this9;
            }

            _createClass(ByuUserLogin, [{
                key: 'attributeChangedCallback',
                value: function attributeChangedCallback(attr, oldval, newval) {
                    switch (attr) {
                        case 'login-url':
                            this.loginUrl = newval;
                            break;
                    }
                }
            }, {
                key: 'connectedCallback',
                value: function connectedCallback() {
                    this._addSlotListeners();
                    this._addAriaAttributes();
                }
            }, {
                key: '_addSlotListeners',
                value: function _addSlotListeners() {
                    var _this10 = this;

                    this._setUrlFromLightDom();
                    var slot = this.shadowRoot.querySelector('#delegate');
                    slot.addEventListener('slotchange', function (e) {
                        _this10._setUrlFromLightDom();
                    });
                }
            }, {
                key: '_addAriaAttributes',
                value: function _addAriaAttributes() {
                    this.setAttribute('role', 'button');
                }
            }, {
                key: '_setUrlFromLightDom',
                value: function _setUrlFromLightDom() {
                    var slot = this.shadowRoot.querySelector('#delegate');
                    var nodes = slot.assignedNodes().filter(function (node) {
                        return node instanceof HTMLAnchorElement;
                    });
                    if (!nodes.length) {
                        return;
                    }
                    var link = nodes[0];
                    if (link.href) {
                        console.log('setting login url from', link);
                        this.loginUrl = link.href;
                    }
                }
            }], [{
                key: 'observedAttributes',
                get: function get() {
                    return ['login-url'];
                }
            }]);

            return ByuUserLogin;
        }(HTMLElement);

        window.customElements.define('byu-user-login', ByuUserLogin);
        window.ByuUserLogin = ByuUserLogin;

        /***/
    },
    /* 9 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, ":host{background-color:#767676;font-family:Vitesse A,Vitesse B,Georgia,serif;font-size:20px!important;color:#fff;text-align:center;line-height:2.2em;height:45px;width:auto;min-width:125px;margin:10px 0 20px;-webkit-box-shadow:0 3px 5px 0 rgba(0,0,0,.35);-moz-box-shadow:0 3px 5px 0 rgba(0,0,0,.35);box-shadow:0 3px 5px 0 rgba(0,0,0,.35)}::slotted(*),:host{display:inline-block}::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;font-weight:400!important;color:#fff!important;position:relative;height:100%;width:100%;margin:0 20px;left:-20px;cursor:pointer;vertical-align:middle!important}::slotted(a){text-decoration:none!important}", ""]);

        // exports


        /***/
    },
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, ":host{padding:0 15px}.header{width:100%}.header ::slotted(*){font-family:Vitesse A,Vitesse B,Georgia,serif!important;text-transform:uppercase!important;color:#002e5d!important;font-size:20px!important;border-bottom:1px solid #c5c5c5!important;padding-bottom:3px!important;white-space:nowrap!important;font-weight:400!important;width:100%;display:inline-block}.content ::slotted(:not(byu-footer-action-button)){font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-size:13px;font-weight:400;color:#767676!important;position:relative;top:-11px;line-height:1.42857143}#defaultContent::slotted(a){line-height:35px;text-decoration:none!important;outline:none!important}#defaultContent::slotted(a:hover){cursor:pointer;color:#002e5d!important}", ""]);

        // exports


        /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, ".blue-footer{background-color:#002e5d;text-align:center;font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:400;font-size:12px;color:#fff;height:80px;display:table;width:100%}.inner-wrapper{display:table-cell;vertical-align:middle}.university-logo{width:380px;height:33.6px}.secondary-footer{height:auto;background-color:#e6e6e6;text-align:center}.secondary-footer ::slotted(*){display:inline-block;text-align:left;vertical-align:top}@media (max-width:767px){.secondary-footer ::slotted(*){width:80%}.secondary-footer ::slotted(:last-child){padding-bottom:30px}.secondary-footer ::slotted(:first-child){padding-top:10px}}@media (min-width:768px) and (max-width:1199px){.secondary-footer ::slotted(*){width:40%}.secondary-footer ::slotted(:nth-child(n+3)){padding-bottom:30px}.secondary-footer ::slotted(:nth-child(-n+2)){padding-top:10px}}@media (min-width:1200px){.secondary-footer ::slotted(*){width:20%;padding-top:10px;padding-bottom:30px}}", ""]);

        // exports


        /***/
    },
    /* 12 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, ".byu-header{font-family:Vitesee Book;font-size:18px}.byu-header>div>*{margin-right:16px}.byu-header button{background-color:#767676;color:#fff;border:none;display:inline-block;cursor:pointer}.byu-header button.nav-expand{background-color:transparent}.byu-header button.nav-expand span.fa{font-size:20px}.byu-header .byu-header-primary{background-color:#002e5d;color:#fff;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding-left:16px;flex:1;height:55px}.byu-header .byu-header-primary #title::slotted(*),.byu-header .byu-header-primary .byu-header-title{white-space:nowrap;overflow:hidden;-ms-text-overflow:ellipsis;text-overflow:ellipsis;flex:1;font-family:Vitesse A,Vitesse B,Georgia,serif!important;font-size:22px}.byu-header .byu-header-user button{background-color:transparent;position:relative}.byu-header .byu-header-user button .icon{width:20px;height:20px;font-size:20px;vertical-align:middle}.byu-header .byu-header-user button .label{font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:400;font-size:13px;text-transform:uppercase}.byu-header .byu-header-search #search-input{font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:400;font-size:13px;color:#002e5d}.byu-header .byu-header-search #search-input::-webkit-input-placeholder{color:#c5c5c5;opacity:1}.byu-header .byu-header-search #search-input::-ms-input-placeholder{color:#c5c5c5;opacity:1}.byu-header .byu-header-search #search-input::-moz-placeholder{color:#c5c5c5;opacity:1}.byu-header .byu-logo{height:48px;width:92px}@media (min-width:1024px){.byu-header{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:center}.byu-header.no-nav{height:48px}.byu-header .nav-expand{display:none}.byu-header .byu-header-secondary{background-color:#002e5d;color:#fff;height:55px}.byu-header .byu-header-secondary,.byu-header .byu-header-secondary .byu-header-search{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center}.byu-header .byu-header-secondary .byu-header-search input{border:1px solid #002e5d;border-right:none;height:20px;padding:4px 6px;flex:1;width:217px;box-sizing:content-box}.byu-header .byu-header-secondary .byu-header-search button{height:28px;width:30px;text-align:center}.byu-header .byu-header-secondary .byu-header-menu-button{display:none}}@media (max-width:1023px){.byu-header .byu-header-secondary{background-color:initial;color:#fff;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center}.byu-header .byu-header-secondary>div{margin-right:0;height:auto}.byu-header .byu-header-secondary button{border-left:1px solid #fff}.byu-header .byu-header-secondary button>span{font-size:17px;line-height:12px}.byu-header .byu-header-secondary .byu-header-user{display:none}.byu-header .byu-header-secondary .byu-header-search{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;flex:1}.byu-header .byu-header-secondary .byu-header-search input{flex:1;height:35px;padding-left:16px;box-sizing:border-box}.byu-header .byu-header-secondary .byu-header-search button{border-left:none;width:50px}.byu-header .byu-header-secondary .byu-header-user .label{display:none}.byu-header .byu-header-secondary .byu-header-user .icon{top:50%;left:50%;margin-top:-13px;margin-left:-13px}}", ""]);

        // exports


        /***/
    },
    /* 13 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, ":host{display:block;width:100%;height:auto;background:#fff;opacity:.88;border-bottom:1px solid #ccc}:host([collapsed]) .navbar-collapse{height:0}.outer-nav{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;justify-content:flex-start;padding:0}.inner-nav{width:100%;display:table}.navbar-collapse{padding:0 15px;overflow:hidden;margin:0 -15px;-webkit-box-shadow:0 2px 21px -4px rgba(0,0,0,.2);-moz-box-shadow:0 2px 21px -4px rgba(0,0,0,.2);box-shadow:0 2px 21px -4px rgba(0,0,0,.2);-webkit-transition-timing-function:ease;-o-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.35s;-o-transition-duration:.35s;transition-duration:.35s;-webkit-transition-property:height;-o-transition-property:height;transition-property:height}.secondary-nav{padding-left:0;margin:0 -15px}.secondary-nav>a{font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-size:13px;font-weight:400;color:#002e5d;text-transform:uppercase;box-sizing:border-box;position:relative;display:block;padding:18px 30px;line-height:12px;text-decoration:none}.secondary-nav>a:hover{background-color:#f6f6f6;cursor:pointer}::slotted(*){display:table;width:16.66%}::slotted(.selected){background:#e6e6e6!important}.extra-links,::slotted(*){font-family:Gotham A,Gotham B,Helvetica,sans-serif!important;font-size:13px!important;font-weight:400!important;color:#002e5d!important;height:35px!important;display:table-cell;text-transform:uppercase!important;text-decoration:none!important;vertical-align:middle!important;text-align:center!important;padding:0 6px!important}.extra-links:hover,::slotted(:hover){background-color:#c5c5c5!important}.extra-links{display:none;cursor:pointer}.extra-links .extra-links-dropdown{display:none;position:absolute;background-color:#fff;z-index:10;min-width:115px;margin-top:10px}.extra-links .extra-links-dropdown ul{list-style-type:none;padding:0}.extra-links:hover .extra-links-dropdown{display:block}@media (min-width:1024px){::slotted(:nth-child(n+7)){display:none}}@media (max-width:1023px){nav.outer-nav{display:none}}", ""]);

        // exports


        /***/
    },
    /* 14 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, ":host{display:inline-block}.sr-only{display:none}button{background-color:var(--byu-search-color,#767676);border:1px solid var(--byu-search-color,#767676);color:#fff;padding-left:10px;padding-right:10px}form{display:flex;align-items:stretch;align-content:center}form #search-container{flex:1}::slotted(input),form #search-container input{padding:5px 10px;border:1px solid var(--byu-search-color,#767676);border-right:none}@media (max-width:1023px){:host{width:100%;height:35px}::slotted(input),form #search-container input{padding:5px 10px;border:1px solid var(--byu-search-color,#767676);border-right:none;width:100%;height:35px}}", ""]);

        // exports


        /***/
    },
    /* 15 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, "::slotted(.fa),::slotted(a){text-decoration:none!important}::slotted(.fa){color:#002e5d!important;font-size:25px!important;line-height:40px!important;border:1px solid #fff!important;width:40px!important;height:40px!important;text-align:center!important;border-radius:20px!important;margin:0 5px 5px 0!important;cursor:pointer}::slotted(.fa:hover){background-color:#fff!important}", ""]);

        // exports


        /***/
    },
    /* 16 */
    /***/function (module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(0)();
        // imports


        // module
        exports.push([module.i, ":host{color:#fff;font-size:13px;font-family:Gotham Book,sans-serif;text-transform:uppercase;contain:content}.link{display:flex;flex-direction:row;align-items:center;cursor:pointer;text-decoration:none;color:#fff}.icon{width:24px;height:24px;border-radius:50%;box-sizing:border-box;border:1px solid #fff;padding:4px;display:inline-block;margin:0 8px}#delegate::slotted(*){display:none}", ""]);

        // exports


        /***/
    },
    /* 17 */
    /***/function (module, exports, __webpack_require__) {

        var pSlice = Array.prototype.slice;
        var objectKeys = __webpack_require__(19);
        var isArguments = __webpack_require__(18);

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
    /* 18 */
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
    /* 19 */
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
    /* 20 */
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
            __append(__webpack_require__(12));
            __append('</style><div id="header" class="byu-header"><div class="byu-header-primary">\n<img class="byu-logo" alt="BYU" src="');
            __append(__webpack_require__(29));
            __append('"><div class="byu-header-title">\n<slot id="title" name="title"></slot>\n</div>\n');
            if (locals.mobile) {
                __append('<button type="button" class="nav-expand" aria-label="Open or close menu" onclick="this.parentElement.parentElement.querySelector(\'#navbarMenu\').assignedNodes()[0].collapsed = !this.parentElement.parentElement.querySelector(\'#navbarMenu\').assignedNodes()[0].collapsed">\n<img style="width: 1em; height: 1em" src="');
                __append(__webpack_require__(30));
                __append('" alt="Menu">\n</button>\n');
            }
            __append('</div><div id="secondary" class="byu-header-secondary">');
            if (!locals.mobile) {
                __append('<div class="byu-header-actions">\n<slot id="actions" name="actions"></slot>\n</div>\n<div class="byu-header-user">\n<slot id="user" name="user"></slot>\n</div>\n<div class="byu-header-search">\n<slot id="search" name="search"></slot>\n</div>\n');
            }
            __append("</div>");
            if (locals.mobile) {
                __append('<div id="mobileMenu">\n<slot id="signin" name="user"></slot>\n<slot id="navbarMenu" name="nav"></slot>\n<slot id="actions" name="actions"></slot>\n</div>\n');
            } else {
                __append('<slot id="navbarMenu" name="nav"></slot>\n');
            }
            __append("</div>");
            return __output.join("");
        };

        /***/
    },
    /* 21 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>\n    " + __webpack_require__(9) + "\n</style>\n<slot name=\"actiontext\"></slot>";

        /***/
    },
    /* 22 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>\n    " + __webpack_require__(10) + "\n</style>\n<link rel=\"stylesheet\" href=\"../../bower_components/font-awesome/css/font-awesome.min.css\">\n<h2 class=\"header\">\n    <slot name=\"header\"></slot>\n</h2>\n<div class=\"content\">\n    <slot id=\"defaultContent\"></slot>\n</div>";

        /***/
    },
    /* 23 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>\n    " + __webpack_require__(11) + "\n</style>\n<div class=\"secondary-footer\">\n    <slot class=\"column\" name=\"col1\"></slot>\n    <slot class=\"column\" name=\"col2\"></slot>\n    <slot class=\"column\" name=\"col3\"></slot>\n    <slot class=\"column\" name=\"col4\"></slot>\n</div>\n<div class=\"blue-footer\">\n    <div class=\"inner-wrapper\">\n        <img src=\"" + __webpack_require__(28) + "\"\n             alt=\"Brigham Young University\"\n            class=\"university-logo\">\n        <div class=\"copyright-contact\">&copy;\n            <span id=\"currentYear\"></span> All Rights Reserved | Provo, UT 84602, USA | 801.422.4636</div>\n    </div>\n</div>";

        /***/
    },
    /* 24 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>\n    " + __webpack_require__(13) + "\n</style>\n<link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\" />\n\n<nav class=\"outer-nav\">\n    <div class=\"inner-nav\">\n        <slot id=\"slot\"></slot>\n        <div class=\"extra-links\" id=\"extraLinks\">\n            More\n            <div class=\"extra-links-dropdown\">\n                <ul id=\"extraLinksDropdown\"></ul>\n            </div>\n        </div>\n    </div>\n</nav>\n<div class=\"navbar-collapse\">\n    <nav class=\"secondary-nav\"></nav>\n</div>\n<div id=\"stylePlaceHolder\"></div>";

        /***/
    },
    /* 25 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<!--\n  ~  @license\n  ~    Copyright 2016 Brigham Young University\n  ~\n  ~    Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~    you may not use this file except in compliance with the License.\n  ~    You may obtain a copy of the License at\n  ~\n  ~        http://www.apache.org/licenses/LICENSE-2.0\n  ~\n  ~    Unless required by applicable law or agreed to in writing, software\n  ~    distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~    See the License for the specific language governing permissions and\n  ~    limitations under the License.\n  -->\n\n<link rel=\"stylesheet\" href=\"../../bower_components/font-awesome/css/font-awesome.min.css\">\n<style>\n  " + __webpack_require__(14) + "\n</style>\n\n<form>\n  <div id='search-container'>\n    <slot id='search' name='search'><input type=\"search\" placeholder=\"Search\"></slot>\n  </div>\n  <button id='submit-button' type='submit'>\n    <span class='fa fa-search' aria-hidden='true'></span>\n    <div class='sr-only'>Run Search</div>\n  </button>\n</form>";

        /***/
    },
    /* 26 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>\n    " + __webpack_require__(15) + "\n</style>\n<slot id=\"facebook\" name=\"facebook\"></slot>\n<slot id=\"instagram\" name=\"instagram\"></slot>\n<slot id=\"twitter\" name=\"twitter\"></slot>\n<slot id=\"googleplus\" name=\"googleplus\"></slot>\n<slot id=\"linkedin\" name=\"linkedin\"></slot>\n<slot id=\"youtube\" name=\"youtube\"></slot>";

        /***/
    },
    /* 27 */
    /***/function (module, exports, __webpack_require__) {

        module.exports = "<style>\n    " + __webpack_require__(16) + "\n</style>\n<div>\n    <a class=\"link\">\n        <span class=\"text\">Sign In</span>\n        <!--<img class=\"icon\" src=\"../img/user.svg\">-->\n    </a>\n    <slot id=\"delegate\" style=\"display: none;\" hidden></slot>\n</div>\n";

        /***/
    },
    /* 28 */
    /***/function (module, exports) {

        module.exports = "data:image/svg+xml,%3Csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1223.9 108.2'%3E%3Cstyle%3E.st0%7Bfill:%23fff%7D%3C/style%3E%3Cpath class='st0' d='M53.1 72.9c-2.7 0-4.1-.1-6.3-.1-2.3 0-5 .1-7.8.1-.2 0-.2-.6.1-.6 2.5-.2 3.8-.4 4.6-.9.8-.4 1.3-1.8 1.3-14v-9c0-12.1-.5-13.5-1.3-14-.7-.4-2.1-.6-4.6-.9-.2-.1-.2-.6-.1-.6 2.8 0 5.5.1 7.8.1s3.6-.1 6.3-.1c8.2 0 11.7 4.9 11.7 8.7 0 3.8-2.6 6.9-6.5 8.9C64.9 52 68.5 55.8 68.5 61c0 6.1-4.6 11.9-15.4 11.9zM53 34.3c-2 0-3.8.2-3.9.5-.2.2-.4 2.8-.4 10.1 0 3.6.1 5.4.2 5.5.2.2 1.8.4 4.2.4 4.9 0 7.4-3.1 7.4-7.8-.1-6-4.1-8.7-7.5-8.7zM52.4 52c-2 0-3.4.1-3.5.2-.1.1-.2 1.5-.2 8.7 0 6.1.3 9.1.7 9.6.4.6 2.8 1.1 5.5 1.1 5 0 9.1-3.3 9.1-9C64 56.1 59 52 52.4 52zm69.5 20.8c-3.8 0-5.5-.5-7.9-2.1-3.1-2.2-6.5-6.8-11.4-15.2-3.1.1-5.6.1-8-.1v2c0 12.1.6 13.5 1.4 14 .8.4 2.6.6 5.3.9.3.1.3.6.1.6H85.3c-.2 0-.2-.6.1-.6 2.4-.2 3.5-.4 4.2-.9.7-.4 1.3-1.8 1.3-14v-9c0-12.1-.6-13.5-1.3-14-.7-.4-1.8-.6-4.2-.9-.2-.1-.2-.6-.1-.6 2.7 0 5.2.1 7.5.1s4.7-.1 7.4-.1c9.2 0 13.1 5.1 13.1 9.8 0 4.9-3.1 8.7-7.4 11.3 8.2 12.3 13.3 17.6 17.6 17.6.6 0 1.4 0 1.8-.1.2 0 .2.7.1.7-1.2.5-2.1.6-3.5.6zm-21.8-38.3c-2.1 0-4.7.3-4.9.6-.2.4-.7 4.6-.7 13.5 0 3.7.1 4.9.4 5.1.5.4 2.9.7 5.8.7 5 0 8.1-4.4 8.1-9.2 0-5.9-2.9-10.7-8.7-10.7zm34.5 38.4c-.2 0-.2-.6.1-.6 2.4-.2 3.9-.4 4.7-.9.8-.4 1.3-1.8 1.3-14v-9c0-12.1-.5-13.5-1.3-14-.7-.4-2.3-.6-4.7-.9-.3-.1-.3-.6-.1-.6h16c.2 0 .2.6-.1.6-2.4.2-4 .4-4.7.9-.7.4-1.3 1.8-1.3 14v9c0 12.1.6 13.5 1.3 14 .7.4 2.3.6 4.7.9.2.1.2.6.1.6h-16zm71-18.3c-2.4.3-3.2.4-3.9.9-.5.4-.9 1.6-.7 13.8v.6c-3.4 2-8.1 3.4-13.2 3.4-11.7 0-21.3-8.9-21.3-19.8 0-10.5 7.4-20.8 21.1-20.8 6.5 0 10.1 2.2 12.2 1.7.3-.1.4.1.4.2.1 2.2.3 5.5.3 8.9 0 .3-.7.3-.7-.1-.2-1.7-1.1-3.7-2.4-4.9-2.2-2.1-6.3-4.3-10.5-4.3-11.1 0-16 8.8-16 17.5 0 10.3 7.3 19.8 19 19.8 2.7 0 5.5-.6 7.3-1.4-.1-12.9-.4-14.3-.9-14.5-.7-.4-2.3-.6-4.7-.9-.3 0-.3-.6-.1-.6h14.3c0-.1.1.5-.2.5zm44.1 18.3c-.2 0-.2-.6.1-.6 2.4-.2 3.4-.4 4.2-.9.7-.4 1.3-1.8 1.3-14v-4.1h-23.9v4.1c0 12.1.5 13.5 1.3 14 .7.4 1.8.6 4.2.9.2.1.2.6.1.6h-14.9c-.2 0-.2-.6.1-.6 2.4-.2 3.5-.4 4.2-.9.7-.4 1.3-1.8 1.3-14v-9c0-12.1-.6-13.5-1.3-14-.7-.4-1.8-.6-4.2-.9-.2-.1-.2-.6-.1-.6H237c.2 0 .2.6-.1.6-2.4.2-3.4.4-4.2.9-.8.4-1.3 1.8-1.3 14v3.3h23.9v-3.3c0-12.1-.6-13.5-1.3-14-.8-.4-1.8-.6-4.2-.9-.2-.1-.2-.6-.1-.6h14.9c.2 0 .2.6-.1.6-2.4.2-3.4.4-4.2.9-.7.4-1.3 1.8-1.3 14v9c0 12.1.6 13.5 1.3 14 .8.4 1.8.6 4.2.9.2.1.2.6.1.6h-14.9zm52.1 0c-.2 0-.2-.6 0-.6 1.9-.2 3.4-.2 3.4-1.2s-1.2-4.4-4.9-13.7l-.1-.2h-12.5l-.1.2c-3.1 8.3-4.2 12.1-4.2 13.3 0 1.1 1.4 1.2 3.9 1.5.2.1.2.6 0 .6h-11.6c-.2 0-.3-.6 0-.6 1.8-.2 3-.4 3.9-1 .6-.4 1.7-1.7 6.1-13.8l3.3-9c1.9-5.2 3.9-10.5 5.4-15.3.2-.4.7-.4.8 0 1.8 5.4 3.4 9.7 5.7 15.3l3.4 9c4.8 12.1 5.6 13.4 6.5 14 1 .6 2 .7 3.7.9.2.1.2.6 0 .6h-12.7zM294 40.1l-5.7 15.7h11.4L294 40.1zm69.3 32.8c-.2 0-.3-.6 0-.6 1.7-.2 3-.2 3.6-.7.6-.4 1-2-.4-14.1L365.1 43 351 73.1c-.1.1-.4.2-.6-.1l-15.2-29.8-1 13.9c-1.1 12.4-.3 13.8.4 14.3.6.5 2.3.6 3.9.8.2.1.2.6 0 .6h-13c-.2 0-.1-.6.1-.6 2.5-.2 3.8-.4 4.5-1 .5-.4 1.3-1.7 2.2-13.8l.6-9c.3-5.2.7-10.5.8-15.3.1-.3.7-.4.8-.1l17.3 34.2 16-34.2c.1-.2.7-.2.7.1.3 5.4.6 9.7 1.2 15.3l.9 9c1.4 12.1 1.7 13.5 2.6 14 .8.4 1.8.6 4.3.9.2.1.4.6.2.6h-14.4zm83.9-38.7c-.6.3-1.4 1.2-5.8 8.6l-3.3 5.5c-1.5 2.4-3 4.8-4.3 7.1v2c0 12.2.6 13.6 1.3 14 .7.4 2.3.6 4.7.9.2.1.2.6.1.6h-16c-.2 0-.2-.6.1-.6 2.4-.2 4-.4 4.7-.9.7-.4 1.3-1.8 1.3-14v-1.8c-1.4-2.4-2.7-4.7-4.4-7.4l-3.4-5.5c-4.7-7.4-5.2-8.4-6-8.7-1-.4-1.9-.4-3.6-.5-.3 0-.2-.6 0-.6h13.2c.2 0 .2.6 0 .6-1.4.1-3 .1-3.4.4-.5.3 0 1.3 4.5 9.4l6.1 10.3 6.8-11.3c4.4-6.9 4.2-7.9 3.8-8.2-.5-.2-2.2-.4-3.8-.5-.2 0-.2-.6 0-.6h11.7c.2 0 .2.6 0 .6-2.1.1-3.4.2-4.3.6zm34.5 39.1c-11.3 0-20-8.7-20-19.8 0-10.6 8.4-20.8 20.9-20.8 11.3 0 20 8.7 20 19.8 0 10.6-8.3 20.8-20.9 20.8zm-.3-38.9c-11 0-15.3 9.3-15.3 17.3 0 10 7 19.9 16.8 19.9 10.9 0 15.2-9.3 15.2-17.3.1-10-6.9-19.9-16.7-19.9zm73.6.3c-.5.4-1 1.7-1 13.8v10.3c0 7.4-5.5 14.5-15.2 14.5-9.6 0-15.4-6.3-15.4-14.3V48.5c0-12.1-.6-13.5-1.3-14-.7-.4-1.8-.6-4.2-.9-.2-.1-.2-.6-.1-.6H533c.2 0 .2.6-.1.6-2.4.2-3.7.4-4.4.9-.8.4-1.3 1.8-1.3 14v9.3c0 7.6 4.9 13 13 13 7.6 0 11.6-5.5 11.6-12.4v-10c0-12.1-.6-13.3-1-13.8-.7-.6-2.2-.8-4.6-1-.3-.1-.2-.6 0-.6h13.1c.2 0 .2.6 0 .6-2.4.3-3.6.5-4.3 1.1zm59.1.3c-.5.5-1.2 1.4-1.1 13.5l.1 9c.1 5.2 0 10.6.3 15.4.1.3-.7.4-1 .1l-30.5-32.5.2 17c.1 11.2.9 12.9 1.7 13.6.6.4 2.8 1 4.5 1 .2 0 .2.8 0 .8h-14.1c-.2 0-.2-.7 0-.8 2.5-.2 3.9-.6 4.5-1.2.5-.5 1.2-1.4 1-13.5l-.1-9c-.1-5.2-.1-10.6-.4-15.4 0-.3.9-.4 1.1-.1l30.6 32.7-.2-17.2c-.1-12.1-1-13-1.7-13.6-.7-.6-2.3-.9-4.9-1-.2-.1-.2-.8 0-.8h14.3c.2 0 .2.7 0 .8-2.4.3-3.6.7-4.3 1.2zm60.3 19.6c-2.4.3-3.2.4-3.9.9-.5.4-.9 1.6-.7 13.8v.6c-3.4 2-8.1 3.4-13.2 3.4-11.7 0-21.3-8.9-21.3-19.8 0-10.5 7.4-20.8 21.1-20.8 6.5 0 10.1 2.2 12.2 1.7.3-.1.4.1.4.2.1 2.2.3 5.5.3 8.9 0 .3-.7.3-.7-.1-.2-1.7-1.1-3.7-2.4-4.9-2.2-2.1-6.3-4.3-10.5-4.3-11.1 0-16 8.8-16 17.5 0 10.3 7.3 19.8 19 19.8 2.7 0 5.5-.6 7.3-1.4-.1-12.9-.4-14.3-.9-14.5-.7-.4-2.3-.6-4.7-.9-.3 0-.3-.6-.1-.6h14.3c0-.1.1.5-.2.5zm78-19.9c-.5.4-1 1.7-1 13.8v10.3c0 7.4-5.5 14.5-15.2 14.5-9.6 0-15.4-6.3-15.4-14.3V48.5c0-12.1-.6-13.5-1.3-14-.7-.4-1.8-.6-4.2-.9-.2-.1-.2-.6-.1-.6h15.2c.2 0 .2.6-.1.6-2.4.2-3.7.4-4.4.9-.8.4-1.3 1.8-1.3 14v9.3c0 7.6 4.9 13 13 13 7.6 0 11.6-5.5 11.6-12.4v-10c0-12.1-.6-13.3-1-13.8-.7-.6-2.2-.8-4.6-1-.3-.1-.2-.6 0-.6h13.1c.2 0 .2.6 0 .6-2.4.3-3.6.5-4.3 1.1zm59.1.3c-.5.5-1.2 1.4-1.1 13.5l.1 9c.1 5.2 0 10.6.3 15.4.1.3-.7.4-1 .1l-30.5-32.5.2 17c.1 11.2.9 12.9 1.7 13.6.6.4 2.8 1 4.5 1 .2 0 .2.8 0 .8h-14.1c-.2 0-.2-.7 0-.8 2.5-.2 3.9-.6 4.5-1.2.5-.5 1.2-1.4 1-13.5l-.1-9c-.1-5.2-.1-10.6-.4-15.4 0-.3.9-.4 1.1-.1l30.6 32.7-.2-17.2c-.1-12.1-1-13-1.7-13.6-.7-.6-2.3-.9-4.9-1-.2-.1-.2-.8 0-.8h14.3c.2 0 .2.7 0 .8-2.4.3-3.6.7-4.3 1.2zm22.1 37.9c-.2 0-.2-.6.1-.6 2.4-.2 3.9-.4 4.7-.9.8-.4 1.3-1.8 1.3-14v-9c0-12.1-.5-13.5-1.3-14-.7-.4-2.3-.6-4.7-.9-.3-.1-.3-.6-.1-.6h16c.2 0 .2.6-.1.6-2.4.2-4 .4-4.7.9-.7.4-1.3 1.8-1.3 14v9c0 12.1.6 13.5 1.3 14 .7.4 2.3.6 4.7.9.2.1.2.6.1.6h-16zm68-38.2c-.6.5-1.7 1.7-6.6 13.8l-3.6 9c-2 5.2-4.2 10.5-5.8 15.3-.2.4-1.4.4-1.5 0-1.9-5.3-3.6-9.7-5.8-15.3l-3.6-9c-4.5-10.8-5.6-13.2-6.6-13.8-1-.6-2.2-.8-4.1-1-.2-.1-.2-.6 0-.6h13.8c.2 0 .3.6 0 .6-2.3.2-3.8.7-3.8 1.7 0 1.1 1 3.9 4.8 13.2l7 18.4 7.3-18.4c3.3-8.4 4.2-11.5 4.2-12.8 0-1.1-1.4-1.8-4-2-.2-.1-.2-.6 0-.6h11.9c.2 0 .3.6 0 .6-1.8.1-2.8.3-3.6.9zm43.5 37.5c-.3.4-2.2.7-4.7.7-3.7 0-5.6-.2-10.8-.2-3.9 0-5.9.1-10.3.1-.2 0-.2-.6.1-.6 2.4-.2 3.8-.4 4.6-.9.8-.4 1.3-1.8 1.3-14v-9c0-12.1-.5-13.5-1.3-14-.7-.4-2.2-.6-4.6-.9-.2-.1-.2-.6-.1-.6 4.8.1 11.9.1 15.9.1 5.2 0 7.1-.1 9-.3.2 0 .4.1.4.2-.2 2.2-.3 4.6-.7 7.9-.1.2-.7.2-.7-.2 0-1.6-.1-3.1-1-4.1-1-1.1-2.9-2-7.3-2-2.4 0-5 0-5.6.1-.2.6-.2 3.6-.2 7.4V51h5.4c5.8 0 6.6-.9 7-3.1 0-.2.7-.2.7 0-.1 1.7-.3 7.2-.3 8.9 0 .2-.7.2-.7-.1 0-1.2-.3-2.4-.9-3-.6-.6-1.5-1.2-5.8-1.2h-5.4v4.4c0 7.9.4 12.3 1 12.9.5.6 2.8.8 6.3.8 3.9 0 6-1.1 7.1-2.3.9-.9 1.5-2.5 2-4.4.1-.4.7-.1.7.2-.4 4.6-1 8-1.1 8.1zm55.7.6c-3.8 0-5.5-.5-7.9-2.1-3.1-2.2-6.5-6.8-11.4-15.2-3.1.1-5.6.1-8-.1v2c0 12.1.6 13.5 1.4 14 .8.4 2.6.6 5.3.9.3.1.3.6.1.6h-16.1c-.2 0-.2-.6.1-.6 2.4-.2 3.5-.4 4.2-.9.7-.4 1.3-1.8 1.3-14v-9c0-12.1-.6-13.5-1.3-14-.7-.4-1.8-.6-4.2-.9-.2-.1-.2-.6-.1-.6 2.7 0 5.2.1 7.5.1s4.7-.1 7.4-.1c9.2 0 13.1 5.1 13.1 9.8 0 4.9-3.1 8.7-7.4 11.3 8.2 12.3 13.3 17.6 17.6 17.6.6 0 1.4 0 1.8-.1.2 0 .2.7.1.7-1.2.5-2.1.6-3.5.6zM979 34.5c-2.1 0-4.7.3-4.9.6-.2.4-.7 4.6-.7 13.5 0 3.7.1 4.9.4 5.1.5.4 2.9.7 5.8.7 5 0 8.1-4.4 8.1-9.2 0-5.9-2.9-10.7-8.7-10.7zm44.8 38.7c-6.2 0-9.4-3.4-9.5-3.6-.1-.2-.4-5.4 0-8.5-.1-.3.7-.3.7.1.1 2.3 1 4.8 1.8 6.1 1.8 2.7 4.2 4.4 7.8 4.4 4.8 0 7.7-3.4 7.7-7.9 0-9.2-16.3-10.7-16.3-20.8 0-6.3 4.9-10.3 10.6-10.3 4.7 0 5.5 1.7 7.7 1.1.2-.1.4.1.4.2 0 2.2.1 5 0 8.3-.1.2-.7.2-.7-.1-.1-2-.9-4.4-2.1-5.7-1.4-1.5-3.4-2.4-5.6-2.4-3.9 0-6.8 2.9-6.8 6.7 0 7.7 17 10.9 17 20.9-.1 7.6-6.6 11.5-12.7 11.5zm31.6-.3c-.2 0-.2-.6.1-.6 2.4-.2 3.9-.4 4.7-.9.8-.4 1.3-1.8 1.3-14v-9c0-12.1-.5-13.5-1.3-14-.7-.4-2.3-.6-4.7-.9-.3-.1-.3-.6-.1-.6h16c.2 0 .2.6-.1.6-2.4.2-4 .4-4.7.9-.7.4-1.3 1.8-1.3 14v9c0 12.1.6 13.5 1.3 14 .7.4 2.3.6 4.7.9.2.1.2.6.1.6h-16zm68.3-31.3c-.1.2-.7.2-.7-.1 0-1.5-.3-3.9-1.2-4.7-1.1-1.2-4.1-1.8-10.6-1.8-1.4 0-2.2 0-2.8.1-.2.6-.2 3.6-.2 7.4v15c0 12.1.6 13.5 1.3 14 .7.4 2.3.6 4.7.9.2.1.2.6.1.6h-16c-.2 0-.2-.6.1-.6 2.4-.2 3.9-.4 4.7-.9.7-.4 1.3-1.8 1.3-14v-15c0-3.9-.1-6.8-.2-7.4-.6-.1-1.7-.1-3.1-.1-6.3 0-9.2.6-10.7 1.8-.9.9-1.5 3.4-1.8 4.9 0 .3-.7.1-.7-.1.4-3.1.7-6.5.9-8.6 0-.1.1-.2.4-.2 2.2.4 6.5.7 17.2.7 14.7 0 16.4-.4 17.5-.8.2-.1.4.1.4.2-.1 2.2-.2 5.5-.6 8.7zm49.1-7.4c-.6.3-1.4 1.2-5.8 8.6l-3.3 5.5c-1.5 2.4-3 4.8-4.3 7.1v2c0 12.2.6 13.6 1.3 14 .7.4 2.3.6 4.7.9.2.1.2.6.1.6h-16c-.2 0-.2-.6.1-.6 2.4-.2 4-.4 4.7-.9.7-.4 1.3-1.8 1.3-14v-1.8c-1.4-2.4-2.7-4.7-4.4-7.4l-3.4-5.5c-4.7-7.4-5.2-8.4-6-8.7-1-.4-1.9-.4-3.6-.5-.3 0-.2-.6 0-.6h13.2c.2 0 .2.6 0 .6-1.4.1-3 .1-3.4.4-.5.3 0 1.3 4.5 9.4l6.1 10.3 6.8-11.3c4.4-6.9 4.2-7.9 3.8-8.2-.5-.2-2.2-.4-3.8-.5-.2 0-.2-.6 0-.6h11.7c.2 0 .2.6 0 .6-2.1.1-3.3.2-4.3.6z'/%3E%3C/svg%3E";

        /***/
    },
    /* 29 */
    /***/function (module, exports) {

        module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 139.7 40.3'%3E%3Cpath d='M16.6 16.1V9.4c0-.5-.1-.9-.1-.9s.5.1.9.1h5c3.8 0 6.1.6 6.1 4.1 0 2.3-1.4 4.3-5.9 4.3h-6v-.9zm0 15.3v-7.7c0-.5-.1-.9-.1-.9s.5.1.9.1h4.3c3.4 0 7.5 0 7.5 4.7 0 3.5-3 4.7-7 4.7h-4.8c-.5 0-.9.1-.9.1s.1-.5.1-1zM4.4 4.5v32.1c0 1 .1 1.4-.7 1.9-.7.4-1.4.5-2.6.7-.1 0-.1.5 0 .5h26c11 0 15.6-4.3 15.6-11.1 0-5-2.3-8.1-7-9.2-.1 0-.1-.1 0-.1 2.9-.9 5.7-3.1 5.7-8.3 0-7.1-4.8-9.5-15.2-9.5h-25c-.2-.1-.2.3-.1.4 1.2.2 1.9.3 2.6.7.8.5.7.8.7 1.9zm130.9 0c0-1-.1-1.4.7-1.9.7-.4 1.5-.5 2.7-.7.1 0 .1-.5 0-.5h-19.2c-.1 0-.1.4 0 .5 1.2.2 1.8.3 2.5.7.7.5.7.8.7 1.9v19.3c0 4.4-2.5 7.8-7.5 7.8s-7.5-3.4-7.5-7.8V4.5c0-1-.1-1.4.7-1.9.7-.4 1.3-.6 2.5-.7.1 0 .1-.5 0-.5H92.8c-.1 0-.1.5 0 .5.7 0 1.1.1 1.5.4.6.5.7 1.1.7 2.2v19c0 9.1 5 16.9 20.2 16.9s20.2-7.8 20.2-16.9v-19zm-58 35.2c.1 0 .1-.4 0-.5-1.2-.2-1.9-.3-2.7-.7-.7-.5-.7-.8-.7-1.9V24.4L87.2 4.7c.7-1.1 1.2-1.6 1.8-2.1.1-.1.3-.2.5-.3.5-.3.7-.4 1.4-.4.1 0 .2-.5 0-.5H73c-.1 0-.1.5 0 .5.9 0 1.9 0 1.8 1.3-.1 1.2-5.3 8.7-7.1 11.5-.3.4-.5.8-.6 1.3-.1-.5-.4-1-.6-1.3-2.6-3.8-6.9-10-7.1-11.5-.1-1.3.9-1.3 1.8-1.3.1 0 .2-.5 0-.5H42.4c-.1 0-.1.4 0 .5.8.1 1.2 0 2.2.5.1.1.4.2.5.3.6.5 1 1 1.7 2L60 24.3v12.3c0 1 .1 1.4-.7 1.9-.7.4-1.5.5-2.7.7-.1 0-.1.5 0 .5h20.7z' fill='%23FFF'/%3E%3C/svg%3E";

        /***/
    },
    /* 30 */
    /***/function (module, exports) {

        module.exports = "data:image/svg+xml,%3Csvg width='1792' height='1792' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1664 1344v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V832q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V320q0-26 19-45t45-19h1408q26 0 45 19t19 45z' fill='%23fff'/%3E%3C/svg%3E";

        /***/
    },
    /* 31 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_header_script_js__ = __webpack_require__(4);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__byu_menu_script_js__ = __webpack_require__(5);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__byu_search_script_js__ = __webpack_require__(6);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__byu_user_login_script_js__ = __webpack_require__(8);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__byu_footer_script_js__ = __webpack_require__(3);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__byu_footer_column_script__ = __webpack_require__(2);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__byu_footer_column_script___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__byu_footer_column_script__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__byu_footer_action_button_script__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__byu_footer_action_button_script___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__byu_footer_action_button_script__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__byu_social_media_links_script__ = __webpack_require__(7);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__byu_social_media_links_script___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__byu_social_media_links_script__);
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
    }]);
})();
//# sourceMappingURL=components.es5.js.map
