'use strict'

import { html, css, customElement, LitElement, unsafeCSS, property } from 'lit-element'
import style from './byu-header.sass'

const JS_INIT_CLASS = 'js-enabled'
const EXPANDED_ATTR = 'aria-expanded'
const MENU_OPEN_CLASS = 'menu-open'
const SITE_NAV_CLASS = 'byu-site-navigation'
const SITE_ACTION_CLASS = 'byu-action-id-search'

@customElement('byu-header')
export class BYUHeader extends LitElement {

  firstUpdated (_changedProperties) {
    const headerEls = this.shadowRoot.querySelectorAll('.byu-header')
    Array.prototype.forEach.call(headerEls, (el) => {
      this._enableMobileMenu(el)
    })
  }

  _enableMobileMenu (headerEl) {
    headerEl.hasNav = headerEl.getElementsByClassName(SITE_NAV_CLASS).length > 0
    headerEl.hasActions = headerEl.getElementsByClassName(SITE_ACTION_CLASS).length > 0

    const showMenuButton = headerEl.hasNav || headerEl.hasActions

    if (showMenuButton) {
      headerEl.classList.add(JS_INIT_CLASS)
      this._initMenuButton(headerEl)

      headerEl.navEl = headerEl.getElementsByClassName(SITE_NAV_CLASS)[0]
      headerEl.actionsEl = headerEl.getElementsByClassName(SITE_ACTION_CLASS)[0]
    }
  }

  _initMenuButton (headerEl) {
    const menuButton = headerEl.getElementsByClassName('byu-menu-button')[0]

    menuButton.addEventListener('click', (e) => {
      this._clickMenuButton(e.target, headerEl)
    })
  }

  _clickMenuButton (btn, headerEl) {
    const open = btn.getAttribute(EXPANDED_ATTR) !== 'false'
    const opening = false

    // Open
    if (!open && !opening) {
      this._openMenu(btn, headerEl)
    }

    // Close
    else {
      this._closeMenu(btn, headerEl)
    }
  }

  _openMenu (btn, headerEl) {
    // Set the open/closed attribute on the button
    btn.setAttribute(EXPANDED_ATTR, true)

    const hasMenuOpenClass = headerEl.getElementsByClassName(MENU_OPEN_CLASS).length > 0
    if (!hasMenuOpenClass) {
      headerEl.classList.add(MENU_OPEN_CLASS)
    }
  }

  _closeMenu (btn, headerEl) {

    // Set the open/closed attribute on the button
    btn.setAttribute(EXPANDED_ATTR, false)

    // Set the open/closed attribute on the header
    headerEl.classList.remove(MENU_OPEN_CLASS)
  }

  // Attach styles to component
  static get styles () {
    return css`${unsafeCSS(style)}`
  }

  // Render the component
  render () {
    return html`
<header role="banner" class="byu-header">
    <div class="byu-site-banner">
        <a class="byu-link" href="https://byu.edu">
            <span class="visually-hidden">BYU</span>
        </a>
        <div class="byu-titles">
            <slot name="breadcrumbs" class="byu-site-breadcrumbs"></slot>
            <slot id="byu-titles-slot" name="site-title"></slot>
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
    <slot name="nav" class="byu-site-navigation"></slot>
</header>
    `
  }
}
