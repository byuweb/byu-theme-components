import { LitElement, html, customElement, css, unsafeCSS } from 'lit-element'
import style from './byu-social-media-links.sass'

@customElement('byu-social-media-links')
export class BYUSocialMediaLinks extends LitElement {

  static get styles () {
    return css`${unsafeCSS(style)}`
  }

  render () {
    return html`
    <div class="slot-wrapper">
        <slot id="social-main"></slot>
        <!--These others are deprecated, and are here for backwards-compatibility-->
        <slot id="social-deprecated-facebook" name="facebook"></slot>
        <slot id="social-deprecated-twitter" name="twitter"></slot>
        <slot id="social-deprecated-instagram" name="instagram"></slot>
        <slot id="social-deprecated-youtube" name="youtube"></slot>
        <slot id="social-deprecated-pinterest" name="pinterest"></slot>
        <slot id="social-deprecated-googleplus" name="googleplus"></slot>
        <slot id="social-deprecated-linkedin" name="linkedin"></slot>
        <slot id="social-deprecated-rss" name="rss"></slot>
        <slot id="social-deprecated-snapchat" name="snapchat"></slot>
    </div>
    `
  }
}
