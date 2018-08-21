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
//
/*
 @license
 This file contains code from https://github.com/JamesMGreene/currentExecutingScript, which is licensed
 under the following license and demarcated with BEGIN:currentExecutingScript and END:currentExecutingScript:

 The MIT License (MIT)

 Copyright (c) 2014-2015 James M. Greene

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
//
"use strict";
(function (opts) {
    var byu = window.byu = window.byu || {};
    var comps = byu.webCommunityComponents = window.byu.webCommunityComponents || {};
    var loading = comps.resourceLoading = comps.resourceLoading || {};

    var bundleToLoad = canDoEs6() ? opts.bundle : opts.compatBundle;

    if (needsPolyfills()) {
        ensureLoaded(opts.polyfills, function () {
            ensureLoaded(bundleToLoad);
        });
    } else {
        ensureLoaded(bundleToLoad);
    }

    function ensureLoaded(script, callback) {
        var resolved = resolveUrl(script);
        var cb = callback || function () {
            };
        var status = loading[resolved];
        if (status === 'done') {
            cb();
        } else if (!status) {
            loading[resolved] = createLoader(resolved, function () {
                loading[script] = 'done';
                cb();
            });
        } else if (status instanceof HTMLScriptElement) {
            status.addEventListener('load', function () {
                cb();
            });
        }
    }

    function createLoader(script, cb) {
        var scr = document.createElement('script');
        scr.src = script;
        scr.async = true;
        scr.onload = cb;
        document.head.appendChild(scr);
        return scr;
    }

    function canDoEs6() {
        //Template strings are a good stand-in for class syntax detection
        if (!String.raw) return false;

        //And, we'll fall back to hacky IE detection, just in case.
        var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
        return !isIE11;
    }

    function needsPolyfills() {
        var forcePolyfills = comps.forcePolyfills;
        var needsPolyfills;

        //This is here because if we have multiple component bundles on the page and one of them has already loaded the
        //  polyfills, we would erroneously detect that we don't need to load them and load the native ES6 code instead
        //  (which could cause problems).  So, we set 'needsPolyfills' to tell ourselves to ignore the feature detection.
        if (!('needsPolyfills' in comps)) {
            var shadow = !!HTMLElement.prototype.attachShadow;
            var customElements = 'customElements' in window;
            needsPolyfills = comps.needsPolyfills = !shadow || !customElements;
        }
        return needsPolyfills || forcePolyfills;
    }

    function resolveUrl(url) {
//
        var ABSOLUTE_URL_PATTERN = /^https?:\/\/|^\/\//i;
        if (ABSOLUTE_URL_PATTERN.test(url)) {
            return url;
        } else {
            return scriptBaseUrl() + '/' + url;
        }
//
    }

//
    function scriptBaseUrl() {
        var current = currentScriptUrl();
        return current.substring(0, current.lastIndexOf('/'));
    }

    function currentScriptUrl() {
        var stack;
        try {
            throw new Error();
        } catch (e) {
            stack = e.stack;
        }
        return getScriptUrlFromStack(stack);
    }

    //BEGIN:currentExecutingScript
    function getScriptUrlFromStack(stack, skipStackDepth) {
        var matches, remainingStack,
            url = null,
            ignoreMessage = typeof skipStackDepth === "number";
        skipStackDepth = ignoreMessage ? Math.round(skipStackDepth) : 0;
        if (typeof stack === "string" && stack) {
            if (ignoreMessage) {
                matches = stack.match(/(data:text\/javascript(?:;[^,]+)?,.+?|(?:|blob:)(?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
            }
            else {
                matches = stack.match(/^(?:|[^:@]*@|.+\)@(?=data:text\/javascript|blob|http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)(data:text\/javascript(?:;[^,]+)?,.+?|(?:|blob:)(?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
                if (!(matches && matches[1])) {
                    matches = stack.match(/\)@(data:text\/javascript(?:;[^,]+)?,.+?|(?:|blob:)(?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
                }
            }
            if (matches && matches[1]) {
                if (skipStackDepth > 0) {
                    remainingStack = stack.slice(stack.indexOf(matches[0]) + matches[0].length);
                    url = getScriptUrlFromStack(remainingStack, (skipStackDepth - 1));
                }
                else {
                    url = matches[1];
                }
            }
        }
        return url;
    }
    //END:currentExecutingScript
//
})({
    polyfills: 'https://cdn.byu.edu/web-component-polyfills/latest/web-component-polyfills.min.js',
    bundle: 'components.min.js',
    compatBundle: 'components-compat.min.js'
});
