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

'use strict'

import { html, css, customElement, LitElement, unsafeCSS, property } from 'lit-element'
import style from './byu-menu.sass'

const ACTIVE_MENU_ATTR = 'active'

@customElement('byu-menu')
export class BYUMenu extends LitElement {
  @property ({ type: String, attribute: 'active-selector' }) activeSelector = ''

  firstUpdated (_changedProperties) {
    if (this.activeSelector !== '') {
      this._updateActiveSelector(this)
    }
    this.classList.add('byu-component-rendered')
  }

  _updateActiveSelector(menu) {
    const el = menu.querySelector(this.activeSelector)
    el.classList.add(ACTIVE_MENU_ATTR)
  }

  static get styles () {
    return css`${unsafeCSS(style)}`
  }

  render () {
    return html`
<nav class="byu-menu-el">
    <slot class="byu-menu-items"></slot>
</nav>
    `
  }
}
