'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    /******/return __webpack_require__(__webpack_require__.s = 14);
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
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__template_ejs_html__ = __webpack_require__(9);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__template_ejs_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_ejs_html__);

    var BYUHeader = function (_HTMLElement) {
        _inherits(BYUHeader, _HTMLElement);

        function BYUHeader() {
            _classCallCheck(this, BYUHeader);

            var _this = _possibleConstructorReturn(this, (BYUHeader.__proto__ || Object.getPrototypeOf(BYUHeader)).call(this));

            var shadowRoot = _this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = __WEBPACK_IMPORTED_MODULE_0__template_ejs_html__({ mobile: false });
            return _this;
        }

        return BYUHeader;
    }(HTMLElement);

    window.customElements.define('byu-header', BYUHeader);
    window.BYUHeader = BYUHeader;

    /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__template_html__ = __webpack_require__(10);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_html__);

    var BYUMenu = function (_HTMLElement2) {
        _inherits(BYUMenu, _HTMLElement2);

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

            // always call super first
            var _this2 = _possibleConstructorReturn(this, (BYUMenu.__proto__ || Object.getPrototypeOf(BYUMenu)).call(this));

            var shadowRoot = _this2.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = __WEBPACK_IMPORTED_MODULE_0__template_html__;
            return _this2;
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
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__template_html__ = __webpack_require__(11);
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

    var ByuSearch = function (_HTMLElement3) {
        _inherits(ByuSearch, _HTMLElement3);

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

            // always call super first

            var _this3 = _possibleConstructorReturn(this, (ByuSearch.__proto__ || Object.getPrototypeOf(ByuSearch)).call(this));

            var shadowRoot = _this3.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = __WEBPACK_IMPORTED_MODULE_0__template_html__;
            return _this3;
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
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__template_html__ = __webpack_require__(12);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_html__);
    /**
     * Created by ThatJoeMoore on 11/7/16.
     */

    var ByuUserLogin = function (_HTMLElement4) {
        _inherits(ByuUserLogin, _HTMLElement4);

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

            var _this4 = _possibleConstructorReturn(this, (ByuUserLogin.__proto__ || Object.getPrototypeOf(ByuUserLogin)).call(this));

            var shadowRoot = _this4.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = __WEBPACK_IMPORTED_MODULE_0__template_html__;
            //Hack to make sure that the proper login URL gets set in our template.
            _this4.loginUrl = _this4.loginUrl;
            return _this4;
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
                var _this5 = this;

                this._setUrlFromLightDom();
                var slot = this.shadowRoot.querySelector('#delegate');
                slot.addEventListener('slotchange', function (e) {
                    _this5._setUrlFromLightDom();
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
/* 5 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(0)();
    // imports


    // module
    exports.push([module.i, "/*Variables*/\n.byu-header {\n  font-family: \"Vitesee Book\";\n  font-size: 18px; }\n  .byu-header > div > * {\n    margin-right: 16px; }\n  .byu-header button {\n    background-color: #767676;\n    color: #ffffff;\n    border: none;\n    display: inline-block;\n    cursor: pointer; }\n    .byu-header button.nav-expand {\n      background-color: transparent; }\n      .byu-header button.nav-expand span.fa {\n        font-size: 20px; }\n  .byu-header .byu-header-primary {\n    background-color: #002e5d;\n    color: #ffffff;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 16px;\n    flex: 1;\n    height: 55px; }\n    .byu-header .byu-header-primary .byu-header-title, .byu-header .byu-header-primary #title::slotted(*) {\n      white-space: nowrap;\n      overflow: hidden;\n      -ms-text-overflow: ellipsis;\n      text-overflow: ellipsis;\n      flex: 1;\n      font-family: \"Vitesse A\", \"Vitesse B\", Georgia, serif !important;\n      font-size: 22px; }\n  .byu-header .byu-header-user button {\n    background-color: transparent;\n    position: relative; }\n    .byu-header .byu-header-user button .icon {\n      width: 20px;\n      height: 20px;\n      font-size: 20px;\n      vertical-align: middle; }\n    .byu-header .byu-header-user button .label {\n      font-family: \"Gotham A\", \"Gotham B\", Helvetica, sans-serif;\n      font-weight: 400;\n      font-size: 13px;\n      text-transform: uppercase; }\n  .byu-header .byu-header-search #search-input {\n    font-family: \"Gotham A\", \"Gotham B\", Helvetica, sans-serif;\n    font-weight: 400;\n    font-size: 13px;\n    color: #002e5d; }\n    .byu-header .byu-header-search #search-input::-webkit-input-placeholder {\n      color: #c5c5c5;\n      opacity: 1; }\n    .byu-header .byu-header-search #search-input::-ms-input-placeholder {\n      color: #c5c5c5;\n      opacity: 1; }\n    .byu-header .byu-header-search #search-input::-moz-placeholder {\n      color: #c5c5c5;\n      opacity: 1; }\n  .byu-header .byu-logo {\n    height: 48px;\n    width: 92px; }\n\n/* FULL SIZE */\n@media (min-width: 1024px) {\n  .byu-header {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center; }\n    .byu-header.no-nav {\n      height: 48px; }\n    .byu-header .nav-expand {\n      display: none; }\n    .byu-header .byu-header-secondary {\n      background-color: #002e5d;\n      color: #ffffff;\n      display: flex;\n      flex-direction: row;\n      flex-wrap: nowrap;\n      justify-content: space-between;\n      align-items: center;\n      height: 55px; }\n      .byu-header .byu-header-secondary .byu-header-search {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: nowrap;\n        justify-content: space-between;\n        align-items: center; }\n        .byu-header .byu-header-secondary .byu-header-search input {\n          border: 1px solid #002e5d;\n          border-right: none;\n          height: 20px;\n          padding: 4px 6px;\n          flex: 1;\n          width: 217px;\n          box-sizing: content-box; }\n        .byu-header .byu-header-secondary .byu-header-search button {\n          height: 28px;\n          width: 30px;\n          text-align: center; }\n      .byu-header .byu-header-secondary .byu-header-menu-button {\n        display: none; } }\n\n/* TABLET SIZE */\n@media (max-width: 1023px) {\n  .byu-header .byu-header-secondary {\n    background-color: initial;\n    color: #ffffff;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: center; }\n    .byu-header .byu-header-secondary > div {\n      margin-right: 0;\n      height: auto; }\n    .byu-header .byu-header-secondary button {\n      border-left: 1px solid #ffffff; }\n      .byu-header .byu-header-secondary button > span {\n        font-size: 17px;\n        line-height: 12px; }\n    .byu-header .byu-header-secondary .byu-header-user {\n      display: none; }\n    .byu-header .byu-header-secondary .byu-header-search {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: nowrap;\n      justify-content: space-between;\n      align-items: center;\n      flex: 1; }\n      .byu-header .byu-header-secondary .byu-header-search input {\n        flex: 1;\n        height: 35px;\n        padding-left: 16px;\n        box-sizing: border-box; }\n      .byu-header .byu-header-secondary .byu-header-search button {\n        border-left: none;\n        width: 50px; }\n    .byu-header .byu-header-secondary .byu-header-user .label {\n      display: none; }\n    .byu-header .byu-header-secondary .byu-header-user .icon {\n      top: 50%;\n      left: 50%;\n      margin-top: -13px;\n      margin-left: -13px; } }\n\n/* PHONE SIZE */\n", ""]);

    // exports


    /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(0)();
    // imports


    // module
    exports.push([module.i, "/*Variables*/\n:host {\n  display: block;\n  width: 100%;\n  height: auto;\n  background: #ffffff;\n  opacity: 0.88;\n  border-bottom: 1px solid #ccc; }\n\n:host([collapsed]) .navbar-collapse {\n  height: 0; }\n\n.outer-nav {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0; }\n\n.inner-nav {\n  width: 100%;\n  display: table; }\n\n.navbar-collapse {\n  /* change height to be dynamic */\n  padding: 0 15px;\n  overflow: hidden;\n  margin: 0 -15px;\n  -webkit-box-shadow: 0px 2px 21px -4px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0px 2px 21px -4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 2px 21px -4px rgba(0, 0, 0, 0.2);\n  -webkit-transition-timing-function: ease;\n  -o-transition-timing-function: ease;\n  transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n  -o-transition-duration: .35s;\n  transition-duration: .35s;\n  -webkit-transition-property: height;\n  -o-transition-property: height;\n  transition-property: height; }\n\n.secondary-nav {\n  padding-left: 0;\n  margin: 0 -15px; }\n\n.secondary-nav > a {\n  font-family: \"Gotham A\", \"Gotham B\", Helvetica, sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  color: #002e5d;\n  text-transform: uppercase;\n  box-sizing: border-box;\n  position: relative;\n  display: block;\n  padding: 18px 30px;\n  line-height: 12px;\n  text-decoration: none; }\n\n.secondary-nav > a:hover {\n  background-color: #f6f6f6;\n  cursor: pointer; }\n\n::slotted(*) {\n  display: table;\n  width: 16.66%; }\n\n::slotted(*.selected) {\n  background: #e6e6e6 !important; }\n\n.extra-links, ::slotted(*) {\n  font-family: \"Gotham A\", \"Gotham B\", Helvetica, sans-serif !important;\n  font-size: 13px !important;\n  font-weight: 400 !important;\n  color: #002e5d !important;\n  height: 35px !important;\n  display: table-cell;\n  text-transform: uppercase !important;\n  text-decoration: none !important;\n  vertical-align: middle !important;\n  text-align: center !important;\n  padding: 0 6px !important; }\n\n.extra-links:hover, ::slotted(*:hover) {\n  background-color: #c5c5c5 !important; }\n\n.extra-links {\n  display: none;\n  cursor: pointer; }\n  .extra-links .extra-links-dropdown {\n    display: none;\n    position: absolute;\n    background-color: white;\n    z-index: 10;\n    min-width: 115px;\n    margin-top: 10px; }\n    .extra-links .extra-links-dropdown ul {\n      list-style-type: none;\n      padding: 0; }\n  .extra-links:hover .extra-links-dropdown {\n    display: block; }\n\n@media (min-width: 1024px) {\n  /* Hide any menu elements not in the first six. We'll use javascript to duplicate them and \n    stick them in a separate dropdown that gets hidden for mobile views */\n  ::slotted(*:nth-child(n+7)) {\n    display: none; } }\n\n@media (max-width: 1023px) {\n  nav.outer-nav {\n    display: none; } }\n", ""]);

    // exports


    /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(0)();
    // imports


    // module
    exports.push([module.i, ":host {\n  display: inline-block; }\n\n.sr-only {\n  display: none; }\n\nbutton {\n  background-color: var(--byu-search-color, #767676);\n  border: 1px solid var(--byu-search-color, #767676);\n  color: #FFF;\n  padding-left: 10px;\n  padding-right: 10px; }\n\nform {\n  display: flex;\n  align-items: stretch;\n  align-content: center; }\n\nform #search-container {\n  flex: 1; }\n\nform #search-container input,\n::slotted(input) {\n  padding: 5px 10px;\n  border: 1px solid var(--byu-search-color, #767676);\n  border-right: none; }\n\n@media (max-width: 1023px) {\n  :host {\n    width: 100%;\n    height: 35px; }\n  form #search-container input,\n  ::slotted(input) {\n    padding: 5px 10px;\n    border: 1px solid var(--byu-search-color, #767676);\n    border-right: none;\n    width: 100%;\n    height: 35px; } }\n", ""]);

    // exports


    /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__(0)();
    // imports


    // module
    exports.push([module.i, ":host {\n  color: white;\n  font-size: 13px;\n  font-family: \"Gotham Book\", sans-serif;\n  text-transform: uppercase;\n  contain: content;\n  /* New CSS feature that gives us a performance win */ }\n\n.link {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n  text-decoration: none;\n  color: white; }\n\n.icon {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid white;\n  padding: 4px;\n  display: inline-block;\n  margin: 0 8px; }\n\n#delegate::slotted(*) {\n  display: none; }\n", ""]);

    // exports


    /***/
},
/* 9 */
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
        __append(__webpack_require__(5));
        __append('</style><div id="header" class="byu-header"><div class="byu-header-primary">\n<img class="byu-logo" alt="BYU" src="');
        __append(__webpack_require__(13));
        __append('"><div class="byu-header-title">\n<slot id="title" name="title"></slot>\n</div>\n');
        if (locals.mobile) {
            __append('<button type="button" class="nav-expand" aria-label="Open or close menu" onclick="this.parentElement.parentElement.querySelector(\'#navbarMenu\').assignedNodes()[0].collapsed = !this.parentElement.parentElement.querySelector(\'#navbarMenu\').assignedNodes()[0].collapsed">\n<span class="fa fa-bars"></span>\n</button>\n');
        }
        __append('</div><div id="secondary" class="byu-header-secondary"><div class="byu-header-user">\n<button type="button">\n<span class="icon">\n<span class="fa fa-user-circle-o"></span>\n</span>\n<span class="label">Sign in</span>\n</button>\n</div><div class="byu-header-search">\n<slot id="search" name="search"></slot>\n</div><div id="menuTemplate" class="byu-header-menu-button"></div></div><slot id="navbarMenu" name="nav"></slot></div>');
        return __output.join("");
    };

    /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>\n    " + __webpack_require__(6) + "\n</style>\n<link type=\"text/css\" rel=\"stylesheet\" href=\"https://cloud.typography.com/75214/6517752/css/fonts.css\" media=\"all\" />\n\n<nav class=\"outer-nav\">\n    <div class=\"inner-nav\">\n        <slot id=\"slot\"></slot>\n        <div class=\"extra-links\" id=\"extraLinks\">\n            More\n            <div class=\"extra-links-dropdown\">\n                <ul id=\"extraLinksDropdown\"></ul>\n            </div>\n        </div>\n    </div>\n</nav>\n<div class=\"navbar-collapse\">\n    <nav class=\"secondary-nav\"></nav>\n</div>\n<div id=\"stylePlaceHolder\"></div>";

    /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<!--\n  ~  @license\n  ~    Copyright 2016 Brigham Young University\n  ~\n  ~    Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~    you may not use this file except in compliance with the License.\n  ~    You may obtain a copy of the License at\n  ~\n  ~        http://www.apache.org/licenses/LICENSE-2.0\n  ~\n  ~    Unless required by applicable law or agreed to in writing, software\n  ~    distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~    See the License for the specific language governing permissions and\n  ~    limitations under the License.\n  -->\n\n<link rel=\"stylesheet\" href=\"../../bower_components/font-awesome/css/font-awesome.min.css\">\n<style>\n  " + __webpack_require__(7) + "\n</style>\n\n<form>\n  <div id='search-container'>\n    <slot id='search' name='search'><input type=\"search\" placeholder=\"Search\"></slot>\n  </div>\n  <button id='submit-button' type='submit'>\n    <span class='fa fa-search' aria-hidden='true'></span>\n    <div class='sr-only'>Run Search</div>\n  </button>\n</form>";

    /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

    module.exports = "<style>\n    " + __webpack_require__(8) + "\n</style>\n<div>\n    <a class=\"link\">\n        <span class=\"text\">Sign In</span>\n        <!--<img class=\"icon\" src=\"../img/user.svg\">-->\n    </a>\n    <slot id=\"delegate\" style=\"display: none;\" hidden></slot>\n</div>\n";

    /***/
},
/* 13 */
/***/function (module, exports) {

    module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzkuNyA0MC4zIj48cGF0aCBkPSJNMTYuNiAxNi4xVjkuNGMwLS41LS4xLS45LS4xLS45cy41LjEuOS4xaDVjMy44IDAgNi4xLjYgNi4xIDQuMSAwIDIuMy0xLjQgNC4zLTUuOSA0LjNoLTZ2LS45em0wIDE1LjN2LTcuN2MwLS41LS4xLS45LS4xLS45cy41LjEuOS4xaDQuM2MzLjQgMCA3LjUgMCA3LjUgNC43IDAgMy41LTMgNC43LTcgNC43aC00LjhjLS41IDAtLjkuMS0uOS4xcy4xLS41LjEtMXpNNC40IDQuNXYzMi4xYzAgMSAuMSAxLjQtLjcgMS45LS43LjQtMS40LjUtMi42LjctLjEgMC0uMS41IDAgLjVoMjZjMTEgMCAxNS42LTQuMyAxNS42LTExLjEgMC01LTIuMy04LjEtNy05LjItLjEgMC0uMS0uMSAwLS4xIDIuOS0uOSA1LjctMy4xIDUuNy04LjMgMC03LjEtNC44LTkuNS0xNS4yLTkuNWgtMjVjLS4yLS4xLS4yLjMtLjEuNCAxLjIuMiAxLjkuMyAyLjYuNy44LjUuNy44LjcgMS45em0xMzAuOSAwYzAtMS0uMS0xLjQuNy0xLjkuNy0uNCAxLjUtLjUgMi43LS43LjEgMCAuMS0uNSAwLS41aC0xOS4yYy0uMSAwLS4xLjQgMCAuNSAxLjIuMiAxLjguMyAyLjUuNy43LjUuNy44LjcgMS45djE5LjNjMCA0LjQtMi41IDcuOC03LjUgNy44cy03LjUtMy40LTcuNS03LjhWNC41YzAtMS0uMS0xLjQuNy0xLjkuNy0uNCAxLjMtLjYgMi41LS43LjEgMCAuMS0uNSAwLS41SDkyLjhjLS4xIDAtLjEuNSAwIC41LjcgMCAxLjEuMSAxLjUuNC42LjUuNyAxLjEuNyAyLjJ2MTljMCA5LjEgNSAxNi45IDIwLjIgMTYuOXMyMC4yLTcuOCAyMC4yLTE2Ljl2LTE5em0tNTggMzUuMmMuMSAwIC4xLS40IDAtLjUtMS4yLS4yLTEuOS0uMy0yLjctLjctLjctLjUtLjctLjgtLjctMS45VjI0LjRMODcuMiA0LjdjLjctMS4xIDEuMi0xLjYgMS44LTIuMS4xLS4xLjMtLjIuNS0uMy41LS4zLjctLjQgMS40LS40LjEgMCAuMi0uNSAwLS41SDczYy0uMSAwLS4xLjUgMCAuNS45IDAgMS45IDAgMS44IDEuMy0uMSAxLjItNS4zIDguNy03LjEgMTEuNS0uMy40LS41LjgtLjYgMS4zLS4xLS41LS40LTEtLjYtMS4zLTIuNi0zLjgtNi45LTEwLTcuMS0xMS41LS4xLTEuMy45LTEuMyAxLjgtMS4zLjEgMCAuMi0uNSAwLS41SDQyLjRjLS4xIDAtLjEuNCAwIC41LjguMSAxLjIgMCAyLjIuNS4xLjEuNC4yLjUuMy42LjUgMSAxIDEuNyAyTDYwIDI0LjN2MTIuM2MwIDEgLjEgMS40LS43IDEuOS0uNy40LTEuNS41LTIuNy43LS4xIDAtLjEuNSAwIC41aDIwLjd6IiBmaWxsPSIjRkZGIi8+PC9zdmc+";

    /***/
},
/* 14 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_header_script_js__ = __webpack_require__(1);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__byu_menu_script_js__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__byu_search_script_js__ = __webpack_require__(3);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__byu_user_login_script_js__ = __webpack_require__(4);
    /**
     * Created by ThatJoeMoore on 2/18/17
     */

    /***/
}]);
//# sourceMappingURL=components.js.map
//# sourceMappingURL=components.es5.js.map
