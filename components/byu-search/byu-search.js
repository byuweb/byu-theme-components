import { html, css, customElement, LitElement, unsafeCSS } from 'lit-element'
import style from './byu-search.sass'

@customElement('byu-search')
export class BYUSearch extends LitElement {

  static get styles () {
    return css`${unsafeCSS(style)}`
  }

  // TODO: Implement BYU Search features

  render () {
    return html`
<form class="byu-search" action="/">
    <label class="byu-search-label" for="site-search">Search</label>
    <input type="search" id="byu-site-search" name="q" aria-label="Site search" placeholder="Search">
    <button class="byu-search-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <style>.st{stroke-width:10;fill:none;stroke:currentColor;stroke-linecap:round;}</style>
            <circle class="st" cx="45.5" cy="45.5" r="24.5"/><path class="st" d="M63 63l16 16"/>
        </svg>
    </button>
</form>
    `
  }
}
