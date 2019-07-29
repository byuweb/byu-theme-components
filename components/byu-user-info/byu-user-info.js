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

import { html, css, customElement, LitElement, unsafeCSS } from 'lit-element'
import style from './byu-user-info.sass'

@customElement('byu-user-info')
export class BYUUserInfo extends LitElement {
  firstUpdated (_changedProperties) {
    const userSlot = this.shadowRoot.querySelector('#user-name')
    const logoutSlot = this.shadowRoot.querySelector('#logout')
    const loginSlot = this.shadowRoot.querySelector('#login')
    if (userSlot.assignedNodes().length === 0 || userSlot.assignedNodes()[0].innerHTML === '') {
      userSlot.classList.add('hidden')
      logoutSlot.assignedNodes()[0].classList.add('hidden')
    } else {
      loginSlot.assignedNodes()[0].classList.add('hidden')
    }
    this.classList.add('byu-component-rendered')
  }

  static get styles () {
    return css`${unsafeCSS(style)}`
  }

  render () {
    return html`
<div class="byu-id">
    <slot name="user-name" id="user-name"></slot>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentcolor" d="M50 95c-26 0-34-18-34-18 3-12 8-18 17-18 5 5 10 7 17 7s12-2 17-7c9 0 14 6 17 18 0 0-7 18-34 18z"/><circle cx="50" cy="50" r="45" fill="none" stroke="currentcolor" stroke-width="10"/><circle fill="currentcolor" cx="50" cy="40" r="20"/></svg>
    <slot name="logout" id="logout"></slot>
    <slot name="login" id="login"></slot>
</div>
    `
  }
}
