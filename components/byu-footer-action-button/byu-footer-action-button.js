import { LitElement, html, customElement, property } from 'lit-element'
import style from './byu-footer-action-button.scss'

@customElement('byu-footer-action-button')
export class BYUFooterActionButton extends LitElement {

  static styles = style

  render () {
    return html`
    <div class="wrapper">
      <slot name="actiontext"></slot>
    </div>
    `
  }
}
