import { LitElement, html, customElement, property } from 'lit-element';
import style from './byu-header.scss';

@customElement('byu-header')
export class BYUHeader extends LitElement {

  @property()
  foo = 'header property';

  static styles = style;
  render(){
    return html`
        <header role="banner" class="byu-header">
    <div class="byu-site-banner">

        <a class="byu-link" href="https://byu.edu">
            <span class="visually-hidden">BYU</span>
        </a>

        <div class="byu-titles">

            <h1 class="byu-site-title">
                <a href="/">Mission &amp; Aims</a>
            </h1>

            <button class="byu-menu-button" aria-expanded="false">Menu</button>

        </div>

        <div class="byu-action-id-search">

        </div>
    </div>

</header>

    `;
  }
}
