import { LitElement, html, customElement, css, unsafeCSS } from 'lit-element'
import style from './byu-social-media-links.sass'

@customElement('byu-social-media-links')
export class BYUSocialMediaLinks extends LitElement {

  firstUpdated (_changedProperties) {
    this.classList.add('byu-component-rendered')
  }

  static get styles () {
    return css`${unsafeCSS(style)}`
  }

  render () {
    return html`
    <div class="slot-wrapper">
        <slot id="social-main"></slot>
    </div>
    `
  }
}
