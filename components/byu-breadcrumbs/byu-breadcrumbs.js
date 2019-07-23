'use strict'

import { html, css, customElement, LitElement, unsafeCSS } from 'lit-element'
import style from './byu-breadcrumbs.sass'

@customElement('byu-breadcrumbs')
export class BYUBreadcrumbs extends LitElement {

  firstUpdated (_changedProperties) {
    this.classList.add('byu-component-rendered')
  }

  static get styles () {
    return css`${unsafeCSS(style)}`
  }

  render () {
    return html`
<nav class="byu-breadcrumbs-el">
    <slot class="byu-breadcrumbs-items"></slot>
</nav>
    `
  }
}
