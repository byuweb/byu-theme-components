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
