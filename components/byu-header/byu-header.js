import { html, css, customElement, LitElement, unsafeCSS } from 'lit-element'
import style from './byu-header.sass'

@customElement('byu-header')
export class BYUHeader extends LitElement {

  static get styles () {
    return css`${unsafeCSS(style)}`
  }

  render () {
    return html`
<header role="banner" class="byu-header">
    <div class="byu-site-banner">
        <a class="byu-link" href="https://byu.edu">
            <span class="visually-hidden">BYU</span>
        </a>
        <div class="byu-titles">
            <nav class="byu-breadcrumb">
                <slot name="breadcrumb"></slot>
            </nav>
            <h1 class="byu-site-title">
                <a href="/">
                    <slot name="site-title"></slot>
                </a>
            </h1>
            <h2 class="byu-site-subtitle">
                <slot name="site-subtitle"></slot>
            </h2>
            <button class="byu-menu-button" aria-expanded="false">Menu</button>
        </div>
        <div class="byu-action-id-search">
            <div class="byu-action-btn">
                <slot name="actions"></slot>
            </div>
            <slot name="search"></slot>
            <slot name="user"></slot>
        </div>
    </div>
</header>
    `
  }
}
