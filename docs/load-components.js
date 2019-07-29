/*
 *    Copyright 2019 Brigham Young University
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
"use strict";

/**
 * This isn't how you would typically load up the components, but it helps the developers in their local testing.
 *
 * In reality, you should just add the following lines to your <head>:
 *
 * <link rel="stylesheet" href="https://cdn.byu.edu/byu-theme-components/latest/byu-theme-components.min.css">
 * <script async src="https://cdn.byu.edu/byu-theme-components/latest/byu-theme-components.min.js"></script>
 *
 */

//Grab components JS and CSS. If running locally, grab it from /dist
(function () {
  var root = 'https://cdn.byu.edu/byu-theme-components/';
  var min = true;

  var storedVersion = window.sessionStorage.getItem('version');

  // allow user to set a version or branch in the querystring
  var version = getParameterByName('version');
  if (!version) {
    version = storedVersion || 'latest';
  }

  var branch = getParameterByName('branch');
  if (branch) {
    version = 'experimental/' + branch;
  }
  window.sessionStorage.setItem('version', version);
  root = root + version;

  var isLocalhost = checkIfLocalhost();

  // allow testing other branches from localhost
  if (version !== 'latest')
    isLocalhost = false;

  var isForced = window.location.search && window.location.search.indexOf('load-local=true') >= 0;

  if (isLocalhost || isForced) {
    min = false;
    root = '/dist'
  }

  var scriptPath = url(root, 'byu-theme-components', min, 'js');
  var stylePath = url(root, 'byu-theme-components', min, 'css');

  var style = document.createElement('link');
  style.href = stylePath;
  style.rel = 'stylesheet';
  document.head.appendChild(style);

  var script = document.createElement('script');
  script.async = true;
  script.src = scriptPath;
  document.head.appendChild(script);

  function url(base, file, min, extension) {
    var u = base + '/' + file;
    if (min) {
      u += '.min';
    }
    u += '.' + extension;
    return u;
  }

  function checkIfLocalhost() {
    var host = window.location.hostname;
    if (host === 'localhost') return true;

    return /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(host);
  }

  // used to get values from the querystring, taken from an answer on StackOverflow.com
  // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }


})();
