import { html, customElement, LitElement } from 'lit-element'
import style from './byu-header.scss'

@customElement('byu-header')
export class BYUHeader extends LitElement {

  static styles = style

  render () {
    return html`
    <header class="byu-header">
      <div class="byu-header-logo">
        <a href="https://www.byu.edu/" target="_blank">
          <img src="https://cdn.byu.edu/shared-icons/latest/logos/monogram-white.svg" alt="BYU Logo" class="byu-logo" width="188" height="66">
        </a>
      </div>
      <div class="byu-header-titles">
        <div class="byu-header-title">
          <a href="/" class="byu-site-title">
            <slot name="site-title"></slot>
          </a>
        </div>
      </div>
    </header>
    `
  }
}
