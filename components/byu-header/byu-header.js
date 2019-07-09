import { html, customElement, LitElement } from 'lit-element'
import style from './byu-header.scss'

@customElement('byu-header')
export class BYUHeader extends LitElement {

  static styles = style

  render () {
    return html`
    <header class="byu-header">
      
    </header>
    `
  }
}
