import { html, customElement, LitElement } from 'lit-element'
import style from './byu-menu.scss'

@customElement('byu-menu')
export class BYUMenu extends LitElement {

  static styles = style

  render () {
    return html`
    <nav class="byu-menu">
      <button class="byu-header-menu-button" aria-expanded="false">
        <span class="sr-only">Menu</span>
      </button>
    </nav>
    `
  }

}
