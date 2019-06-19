import { LitElement, html, customElement, property } from 'lit-element'
import style from './byu-footer-column.scss'

@customElement('byu-footer-column')
export class BYUFooterColumn extends LitElement {

  static styles = style

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
