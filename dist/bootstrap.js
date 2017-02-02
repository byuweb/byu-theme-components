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
"use strict";
(function (opts) {
    var byu = window.byu = window.byu || {};
    var comps = byu.webCommunityComponents = byu.webCommunityComponents || {};
    //You can set window.byu.webCommunityComponents.forcePolyfills to true to always use polyfills.
    var forcePolyfills = comps.forcePolyfills;
    //This is here because if we have multiple component bundles on the page and one of them has already loaded the
    //  polyfills, we would erroneously detect that we don't need to load them and load the native ES6 code instead
    //  (which could cause problems).  So, we set 'needsPolyfills' to tell ourselves to ignore the feature detection.
    var needsPolyfills;
    if (!('needsPolyfills' in comps)) {
        var shadow = !!HTMLElement.prototype.attachShadow;
        var customElements = 'customElements' in window;
        needsPolyfills = comps.needsPolyfills = !shadow || !customElements;
    }
    if (needsPolyfills || forcePolyfills) {
        load(opts.polyfills);
    } else {
        load(opts.noPolyfills);
    }
    function load(script) {
        var baseUrl = scriptBaseUrl();
        var url = baseUrl + '/' + script;
        console.log(url);
        var main = document.createElement('script');
        main.src = url;
        main.async = true;
        document.head.appendChild(main);
    }

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
})({
    noPolyfills: 'components.js',
    polyfills: 'components-and-polyfills.es5.min.js'
});