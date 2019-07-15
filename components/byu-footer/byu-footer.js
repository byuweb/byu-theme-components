'use strict'

import { html, css, customElement, LitElement, unsafeCSS } from 'lit-element'
import style from './byu-footer.sass'

@customElement('byu-footer')
export class BYUFooter extends LitElement {

  static get styles () {
    return css`${unsafeCSS(style)}`
  }

  render () {
    return html`
    `
  }
}
