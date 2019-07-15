import { LitElement, html, customElement, css, unsafeCSS } from 'lit-element'
import style from './byu-footer-column.sass'

@customElement('byu-footer-column')
export class BYUFooterColumn extends LitElement {

  static get styles () {
    return css`${unsafeCSS(style)}`
  }

  render () {
    return html`
    <h2 class="column-title">
        <slot name="header"></slot>
    </h2>
    <div class="content">
        <slot></slot>
    </div>
    `
  }
}
