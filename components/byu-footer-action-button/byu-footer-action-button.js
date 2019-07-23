import { LitElement, html, customElement, css, unsafeCSS } from 'lit-element'
import style from './byu-footer-action-button.sass'

@customElement('byu-footer-action-button')
export class BYUFooterActionButton extends LitElement {

  firstUpdated (_changedProperties) {
    this.classList.add('byu-component-rendered')
  }

  static get styles () {
    return css`${unsafeCSS(style)}`
  }

  render () {
    return html`
    <div class="wrapper">
      <slot name="actiontext"></slot>
    </div>
    `
  }
}
