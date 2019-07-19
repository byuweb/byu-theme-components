'use strict'

import load from '@byuweb/web-components-loader'
import { version } from '../package.json'

console.log(`--------------- Starting byu-theme-components ${version} ---------------`);
load('components.min.js', 'https://cdn.byu.edu/web-component-polyfills-v2/experimental/master')
