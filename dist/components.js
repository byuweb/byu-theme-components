(function (template) {
    'use strict';

    class BYUFooterActionButton extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = template;
        }

        connectedCallback() {}
    }

    window.customElements.define('byu-footer-action-button', BYUFooterActionButton);
    window.BYUFooterActionButton = BYUFooterActionButton;

})(`<style>:host {
  background-color: #767676;
  font-family: "Vitesse A", "Vitesse B", Georgia, serif;
  font-size: 20px !important;
  color: #fff;
  display: inline-block;
  text-align: center;
  line-height: 2.2em;
  height: 45px;
  width: auto;
  min-width: 125px;
  margin: 10px 0 20px 0;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.35); }

::slotted(*) {
  font-family: "Vitesse A", "Vitesse B", Georgia, serif !important;
  font-weight: 400 !important;
  color: #fff !important;
  display: inline-block;
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 20px;
  left: -20px;
  cursor: pointer;
  vertical-align: middle !important; }

::slotted(a) {
  text-decoration: none !important; }
</style>
<slot name="actiontext"></slot>`);
(function (template) {
    'use strict';

    class BYUFooterColumn extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = template;
        }

        connectedCallback() {}
    }

    window.customElements.define('byu-footer-column', BYUFooterColumn);
    window.BYUFooterColumn = BYUFooterColumn;

})(`<style>:host {
  padding: 0 15px; }

.header {
  width: 100%; }

.header ::slotted(*) {
  font-family: "Vitesse A", "Vitesse B", Georgia, serif !important;
  text-transform: uppercase !important;
  color: #002e5d !important;
  font-size: 20px !important;
  border-bottom: 1px solid #c5c5c5 !important;
  padding-bottom: 3px !important;
  white-space: nowrap !important;
  font-weight: 400 !important;
  width: 100%;
  display: inline-block; }

.content ::slotted(:not(byu-footer-action-button)) {
  font-family: "Gotham A", "Gotham B", Helvetica, sans-serif !important;
  font-size: 13px;
  font-weight: 400;
  color: #767676 !important;
  position: relative;
  top: -11px;
  line-height: 1.42857143; }

#defaultContent::slotted(a) {
  line-height: 35px;
  text-decoration: none !important;
  outline: none !important; }

#defaultContent::slotted(a:hover) {
  cursor: pointer;
  color: #002e5d !important; }
</style>
<link rel="stylesheet" href="../../bower_components/font-awesome/css/font-awesome.min.css">
<h2 class="header">
    <slot name="header"></slot>
</h2>
<div class="content">
    <slot id="defaultContent"></slot>
</div>`);
(function (template) {
    'use strict';

    class BYUFooter extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = template;
        }

        connectedCallback() {

            // always show the current year in the copyright message
            var currentYear = this.shadowRoot.querySelector("#currentYear");
            currentYear.innerHTML = new Date().getFullYear();
        }
    }

    window.customElements.define('byu-footer', BYUFooter);
    window.BYUFooter = BYUFooter;

})(`<style>.blue-footer {
  background-color: #002e5d;
  text-align: center;
  font-family: "Gotham A", "Gotham B", Helvetica, sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: white;
  height: 80px;
  display: table;
  width: 100%; }

.inner-wrapper {
  display: table-cell;
  vertical-align: middle; }

.university-logo {
  width: 380px;
  height: 33.6px; }

.secondary-footer {
  height: auto;
  background-color: #e6e6e6;
  text-align: center; }

.secondary-footer ::slotted(*) {
  display: inline-block;
  text-align: left;
  vertical-align: top; }

@media (max-width: 767px) {
  .secondary-footer ::slotted(*) {
    width: 80%; }
  .secondary-footer ::slotted(*:last-child) {
    padding-bottom: 30px; }
  .secondary-footer ::slotted(*:first-child) {
    padding-top: 10px; } }

@media (min-width: 768px) and (max-width: 1199px) {
  .secondary-footer ::slotted(*) {
    width: 40%; }
  .secondary-footer ::slotted(*:nth-child(n+3)) {
    padding-bottom: 30px; }
  .secondary-footer ::slotted(*:nth-child(-n+2)) {
    padding-top: 10px; } }

@media (min-width: 1200px) {
  .secondary-footer ::slotted(*) {
    width: 20%;
    padding-top: 10px;
    padding-bottom: 30px; } }
</style>
<div class="secondary-footer">
    <slot class="column" name="col1"></slot>
    <slot class="column" name="col2"></slot>
    <slot class="column" name="col3"></slot>
    <slot class="column" name="col4"></slot>
</div>
<div class="blue-footer">
    <div class="inner-wrapper">
        <img src="data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2019.2.1%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20viewBox%3D%220%200%201223.9%20108.2%22%20style%3D%22enable-background%3Anew%200%200%201223.9%20108.2%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0D%0A%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0D%0A%3C%2Fstyle%3E%0D%0A%3Cg%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M53.1%2C72.9c-2.7%2C0-4.1-0.1-6.3-0.1c-2.3%2C0-5%2C0.1-7.8%2C0.1c-0.2%2C0-0.2-0.6%2C0.1-0.6c2.5-0.2%2C3.8-0.4%2C4.6-0.9%0D%0A%09%09c0.8-0.4%2C1.3-1.8%2C1.3-14v-9c0-12.1-0.5-13.5-1.3-14c-0.7-0.4-2.1-0.6-4.6-0.9c-0.2-0.1-0.2-0.6-0.1-0.6c2.8%2C0%2C5.5%2C0.1%2C7.8%2C0.1%0D%0A%09%09c2.3%2C0%2C3.6-0.1%2C6.3-0.1c8.2%2C0%2C11.7%2C4.9%2C11.7%2C8.7c0%2C3.8-2.6%2C6.9-6.5%2C8.9c6.6%2C1.5%2C10.2%2C5.3%2C10.2%2C10.5C68.5%2C67.1%2C63.9%2C72.9%2C53.1%2C72.9z%0D%0A%09%09%20M53%2C34.3c-2%2C0-3.8%2C0.2-3.9%2C0.5c-0.2%2C0.2-0.4%2C2.8-0.4%2C10.1c0%2C3.6%2C0.1%2C5.4%2C0.2%2C5.5c0.2%2C0.2%2C1.8%2C0.4%2C4.2%2C0.4c4.9%2C0%2C7.4-3.1%2C7.4-7.8%0D%0A%09%09C60.4%2C37%2C56.4%2C34.3%2C53%2C34.3z%20M52.4%2C52c-2%2C0-3.4%2C0.1-3.5%2C0.2c-0.1%2C0.1-0.2%2C1.5-0.2%2C8.7c0%2C6.1%2C0.3%2C9.1%2C0.7%2C9.6%0D%0A%09%09c0.4%2C0.6%2C2.8%2C1.1%2C5.5%2C1.1c5%2C0%2C9.1-3.3%2C9.1-9C64%2C56.1%2C59%2C52%2C52.4%2C52z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M121.9%2C72.8c-3.8%2C0-5.5-0.5-7.9-2.1c-3.1-2.2-6.5-6.8-11.4-15.2c-3.1%2C0.1-5.6%2C0.1-8-0.1v2%0D%0A%09%09c0%2C12.1%2C0.6%2C13.5%2C1.4%2C14c0.8%2C0.4%2C2.6%2C0.6%2C5.3%2C0.9c0.3%2C0.1%2C0.3%2C0.6%2C0.1%2C0.6c-3%2C0-13.2%2C0-16.1%2C0c-0.2%2C0-0.2-0.6%2C0.1-0.6%0D%0A%09%09c2.4-0.2%2C3.5-0.4%2C4.2-0.9c0.7-0.4%2C1.3-1.8%2C1.3-14v-9c0-12.1-0.6-13.5-1.3-14c-0.7-0.4-1.8-0.6-4.2-0.9c-0.2-0.1-0.2-0.6-0.1-0.6%0D%0A%09%09c2.7%2C0%2C5.2%2C0.1%2C7.5%2C0.1c2.3%2C0%2C4.7-0.1%2C7.4-0.1c9.2%2C0%2C13.1%2C5.1%2C13.1%2C9.8c0%2C4.9-3.1%2C8.7-7.4%2C11.3c8.2%2C12.3%2C13.3%2C17.6%2C17.6%2C17.6%0D%0A%09%09c0.6%2C0%2C1.4%2C0%2C1.8-0.1c0.2%2C0%2C0.2%2C0.7%2C0.1%2C0.7C124.2%2C72.7%2C123.3%2C72.8%2C121.9%2C72.8z%20M100.1%2C34.5c-2.1%2C0-4.7%2C0.3-4.9%2C0.6%0D%0A%09%09c-0.2%2C0.4-0.7%2C4.6-0.7%2C13.5c0%2C3.7%2C0.1%2C4.9%2C0.4%2C5.1c0.5%2C0.4%2C2.9%2C0.7%2C5.8%2C0.7c5%2C0%2C8.1-4.4%2C8.1-9.2C108.8%2C39.3%2C105.9%2C34.5%2C100.1%2C34.5z%0D%0A%09%09%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M134.6%2C72.9c-0.2%2C0-0.2-0.6%2C0.1-0.6c2.4-0.2%2C3.9-0.4%2C4.7-0.9c0.8-0.4%2C1.3-1.8%2C1.3-14v-9%0D%0A%09%09c0-12.1-0.5-13.5-1.3-14c-0.7-0.4-2.3-0.6-4.7-0.9c-0.3-0.1-0.3-0.6-0.1-0.6c3%2C0%2C13.1%2C0%2C16%2C0c0.2%2C0%2C0.2%2C0.6-0.1%2C0.6%0D%0A%09%09c-2.4%2C0.2-4%2C0.4-4.7%2C0.9c-0.7%2C0.4-1.3%2C1.8-1.3%2C14v9c0%2C12.1%2C0.6%2C13.5%2C1.3%2C14c0.7%2C0.4%2C2.3%2C0.6%2C4.7%2C0.9c0.2%2C0.1%2C0.2%2C0.6%2C0.1%2C0.6%0D%0A%09%09C147.7%2C72.9%2C137.6%2C72.9%2C134.6%2C72.9z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M205.6%2C54.6c-2.4%2C0.3-3.2%2C0.4-3.9%2C0.9c-0.5%2C0.4-0.9%2C1.6-0.7%2C13.8v0.6c-3.4%2C2-8.1%2C3.4-13.2%2C3.4%0D%0A%09%09c-11.7%2C0-21.3-8.9-21.3-19.8c0-10.5%2C7.4-20.8%2C21.1-20.8c6.5%2C0%2C10.1%2C2.2%2C12.2%2C1.7c0.3-0.1%2C0.4%2C0.1%2C0.4%2C0.2c0.1%2C2.2%2C0.3%2C5.5%2C0.3%2C8.9%0D%0A%09%09c0%2C0.3-0.7%2C0.3-0.7-0.1c-0.2-1.7-1.1-3.7-2.4-4.9c-2.2-2.1-6.3-4.3-10.5-4.3c-11.1%2C0-16%2C8.8-16%2C17.5c0%2C10.3%2C7.3%2C19.8%2C19%2C19.8%0D%0A%09%09c2.7%2C0%2C5.5-0.6%2C7.3-1.4c-0.1-12.9-0.4-14.3-0.9-14.5c-0.7-0.4-2.3-0.6-4.7-0.9c-0.3%2C0-0.3-0.6-0.1-0.6c3%2C0%2C11.4%2C0%2C14.3%2C0%0D%0A%09%09C205.8%2C54%2C205.9%2C54.6%2C205.6%2C54.6z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M249.7%2C72.9c-0.2%2C0-0.2-0.6%2C0.1-0.6c2.4-0.2%2C3.4-0.4%2C4.2-0.9c0.7-0.4%2C1.3-1.8%2C1.3-14v-4.1h-23.9v4.1%0D%0A%09%09c0%2C12.1%2C0.5%2C13.5%2C1.3%2C14c0.7%2C0.4%2C1.8%2C0.6%2C4.2%2C0.9c0.2%2C0.1%2C0.2%2C0.6%2C0.1%2C0.6c-2.9%2C0-12.1%2C0-14.9%2C0c-0.2%2C0-0.2-0.6%2C0.1-0.6%0D%0A%09%09c2.4-0.2%2C3.5-0.4%2C4.2-0.9c0.7-0.4%2C1.3-1.8%2C1.3-14v-9c0-12.1-0.6-13.5-1.3-14c-0.7-0.4-1.8-0.6-4.2-0.9c-0.2-0.1-0.2-0.6-0.1-0.6%0D%0A%09%09c2.9%2C0%2C12.1%2C0%2C14.9%2C0c0.2%2C0%2C0.2%2C0.6-0.1%2C0.6c-2.4%2C0.2-3.4%2C0.4-4.2%2C0.9c-0.8%2C0.4-1.3%2C1.8-1.3%2C14v3.3h23.9v-3.3%0D%0A%09%09c0-12.1-0.6-13.5-1.3-14c-0.8-0.4-1.8-0.6-4.2-0.9c-0.2-0.1-0.2-0.6-0.1-0.6c2.9%2C0%2C12.1%2C0%2C14.9%2C0c0.2%2C0%2C0.2%2C0.6-0.1%2C0.6%0D%0A%09%09c-2.4%2C0.2-3.4%2C0.4-4.2%2C0.9c-0.7%2C0.4-1.3%2C1.8-1.3%2C14v9c0%2C12.1%2C0.6%2C13.5%2C1.3%2C14c0.8%2C0.4%2C1.8%2C0.6%2C4.2%2C0.9c0.2%2C0.1%2C0.2%2C0.6%2C0.1%2C0.6%0D%0A%09%09C261.7%2C72.9%2C252.6%2C72.9%2C249.7%2C72.9z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M301.8%2C72.9c-0.2%2C0-0.2-0.6%2C0-0.6c1.9-0.2%2C3.4-0.2%2C3.4-1.2c0-1-1.2-4.4-4.9-13.7l-0.1-0.2h-12.5l-0.1%2C0.2%0D%0A%09%09c-3.1%2C8.3-4.2%2C12.1-4.2%2C13.3c0%2C1.1%2C1.4%2C1.2%2C3.9%2C1.5c0.2%2C0.1%2C0.2%2C0.6%2C0%2C0.6c-1.8%2C0-8.7%2C0-11.6%2C0c-0.2%2C0-0.3-0.6%2C0-0.6%0D%0A%09%09c1.8-0.2%2C3-0.4%2C3.9-1c0.6-0.4%2C1.7-1.7%2C6.1-13.8l3.3-9c1.9-5.2%2C3.9-10.5%2C5.4-15.3c0.2-0.4%2C0.7-0.4%2C0.8%2C0c1.8%2C5.4%2C3.4%2C9.7%2C5.7%2C15.3%0D%0A%09%09l3.4%2C9c4.8%2C12.1%2C5.6%2C13.4%2C6.5%2C14c1%2C0.6%2C2%2C0.7%2C3.7%2C0.9c0.2%2C0.1%2C0.2%2C0.6%2C0%2C0.6C311.7%2C72.9%2C304.7%2C72.9%2C301.8%2C72.9z%20M294%2C40.1%0D%0A%09%09l-5.7%2C15.7h11.4L294%2C40.1z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M363.3%2C72.9c-0.2%2C0-0.3-0.6%2C0-0.6c1.7-0.2%2C3-0.2%2C3.6-0.7c0.6-0.4%2C1-2-0.4-14.1L365.1%2C43L351%2C73.1%0D%0A%09%09c-0.1%2C0.1-0.4%2C0.2-0.6-0.1l-15.2-29.8l-1%2C13.9c-1.1%2C12.4-0.3%2C13.8%2C0.4%2C14.3c0.6%2C0.5%2C2.3%2C0.6%2C3.9%2C0.8c0.2%2C0.1%2C0.2%2C0.6%2C0%2C0.6%0D%0A%09%09c-3%2C0-10%2C0-13%2C0c-0.2%2C0-0.1-0.6%2C0.1-0.6c2.5-0.2%2C3.8-0.4%2C4.5-1c0.5-0.4%2C1.3-1.7%2C2.2-13.8l0.6-9c0.3-5.2%2C0.7-10.5%2C0.8-15.3%0D%0A%09%09c0.1-0.3%2C0.7-0.4%2C0.8-0.1l17.3%2C34.2l16-34.2c0.1-0.2%2C0.7-0.2%2C0.7%2C0.1c0.3%2C5.4%2C0.6%2C9.7%2C1.2%2C15.3l0.9%2C9c1.4%2C12.1%2C1.7%2C13.5%2C2.6%2C14%0D%0A%09%09c0.8%2C0.4%2C1.8%2C0.6%2C4.3%2C0.9c0.2%2C0.1%2C0.4%2C0.6%2C0.2%2C0.6C374.7%2C72.9%2C366.1%2C72.9%2C363.3%2C72.9z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M447.2%2C34.2c-0.6%2C0.3-1.4%2C1.2-5.8%2C8.6l-3.3%2C5.5c-1.5%2C2.4-3%2C4.8-4.3%2C7.1v2c0%2C12.2%2C0.6%2C13.6%2C1.3%2C14%0D%0A%09%09c0.7%2C0.4%2C2.3%2C0.6%2C4.7%2C0.9c0.2%2C0.1%2C0.2%2C0.6%2C0.1%2C0.6c-2.9%2C0-13.1%2C0-16%2C0c-0.2%2C0-0.2-0.6%2C0.1-0.6c2.4-0.2%2C4-0.4%2C4.7-0.9%0D%0A%09%09c0.7-0.4%2C1.3-1.8%2C1.3-14v-1.8c-1.4-2.4-2.7-4.7-4.4-7.4l-3.4-5.5c-4.7-7.4-5.2-8.4-6-8.7c-1-0.4-1.9-0.4-3.6-0.5%0D%0A%09%09c-0.3%2C0-0.2-0.6%2C0-0.6c2.9%2C0%2C10.2%2C0%2C13.2%2C0c0.2%2C0%2C0.2%2C0.6%2C0%2C0.6c-1.4%2C0.1-3%2C0.1-3.4%2C0.4c-0.5%2C0.3%2C0%2C1.3%2C4.5%2C9.4l6.1%2C10.3l6.8-11.3%0D%0A%09%09c4.4-6.9%2C4.2-7.9%2C3.8-8.2c-0.5-0.2-2.2-0.4-3.8-0.5c-0.2%2C0-0.2-0.6%2C0-0.6c1.8%2C0%2C8.7%2C0%2C11.7%2C0c0.2%2C0%2C0.2%2C0.6%2C0%2C0.6%0D%0A%09%09C449.4%2C33.7%2C448.1%2C33.8%2C447.2%2C34.2z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M481.7%2C73.3c-11.3%2C0-20-8.7-20-19.8c0-10.6%2C8.4-20.8%2C20.9-20.8c11.3%2C0%2C20%2C8.7%2C20%2C19.8%0D%0A%09%09C502.6%2C63.1%2C494.3%2C73.3%2C481.7%2C73.3z%20M481.4%2C34.4c-11%2C0-15.3%2C9.3-15.3%2C17.3c0%2C10%2C7%2C19.9%2C16.8%2C19.9c10.9%2C0%2C15.2-9.3%2C15.2-17.3%0D%0A%09%09C498.2%2C44.3%2C491.2%2C34.4%2C481.4%2C34.4z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M555%2C34.7c-0.5%2C0.4-1%2C1.7-1%2C13.8v10.3c0%2C7.4-5.5%2C14.5-15.2%2C14.5c-9.6%2C0-15.4-6.3-15.4-14.3V48.5%0D%0A%09%09c0-12.1-0.6-13.5-1.3-14c-0.7-0.4-1.8-0.6-4.2-0.9c-0.2-0.1-0.2-0.6-0.1-0.6c3%2C0%2C12.4%2C0%2C15.2%2C0c0.2%2C0%2C0.2%2C0.6-0.1%2C0.6%0D%0A%09%09c-2.4%2C0.2-3.7%2C0.4-4.4%2C0.9c-0.8%2C0.4-1.3%2C1.8-1.3%2C14v9.3c0%2C7.6%2C4.9%2C13%2C13%2C13c7.6%2C0%2C11.6-5.5%2C11.6-12.4v-10c0-12.1-0.6-13.3-1-13.8%0D%0A%09%09c-0.7-0.6-2.2-0.8-4.6-1c-0.3-0.1-0.2-0.6%2C0-0.6c2.9%2C0%2C10.2%2C0%2C13.1%2C0c0.2%2C0%2C0.2%2C0.6%2C0%2C0.6C556.9%2C33.9%2C555.7%2C34.1%2C555%2C34.7z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M614.1%2C35c-0.5%2C0.5-1.2%2C1.4-1.1%2C13.5l0.1%2C9c0.1%2C5.2%2C0%2C10.6%2C0.3%2C15.4c0.1%2C0.3-0.7%2C0.4-1%2C0.1l-30.5-32.5l0.2%2C17%0D%0A%09%09c0.1%2C11.2%2C0.9%2C12.9%2C1.7%2C13.6c0.6%2C0.4%2C2.8%2C1%2C4.5%2C1c0.2%2C0%2C0.2%2C0.8%2C0%2C0.8c-3.2%2C0-11.3%2C0-14.1%2C0c-0.2%2C0-0.2-0.7%2C0-0.8%0D%0A%09%09c2.5-0.2%2C3.9-0.6%2C4.5-1.2c0.5-0.5%2C1.2-1.4%2C1-13.5l-0.1-9c-0.1-5.2-0.1-10.6-0.4-15.4c0-0.3%2C0.9-0.4%2C1.1-0.1l30.6%2C32.7l-0.2-17.2%0D%0A%09%09c-0.1-12.1-1-13-1.7-13.6c-0.7-0.6-2.3-0.9-4.9-1c-0.2-0.1-0.2-0.8%2C0-0.8c3%2C0%2C11.4%2C0%2C14.3%2C0c0.2%2C0%2C0.2%2C0.7%2C0%2C0.8%0D%0A%09%09C616%2C34.1%2C614.8%2C34.5%2C614.1%2C35z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M674.4%2C54.6c-2.4%2C0.3-3.2%2C0.4-3.9%2C0.9c-0.5%2C0.4-0.9%2C1.6-0.7%2C13.8v0.6c-3.4%2C2-8.1%2C3.4-13.2%2C3.4%0D%0A%09%09c-11.7%2C0-21.3-8.9-21.3-19.8c0-10.5%2C7.4-20.8%2C21.1-20.8c6.5%2C0%2C10.1%2C2.2%2C12.2%2C1.7c0.3-0.1%2C0.4%2C0.1%2C0.4%2C0.2c0.1%2C2.2%2C0.3%2C5.5%2C0.3%2C8.9%0D%0A%09%09c0%2C0.3-0.7%2C0.3-0.7-0.1c-0.2-1.7-1.1-3.7-2.4-4.9c-2.2-2.1-6.3-4.3-10.5-4.3c-11.1%2C0-16%2C8.8-16%2C17.5c0%2C10.3%2C7.3%2C19.8%2C19%2C19.8%0D%0A%09%09c2.7%2C0%2C5.5-0.6%2C7.3-1.4c-0.1-12.9-0.4-14.3-0.9-14.5c-0.7-0.4-2.3-0.6-4.7-0.9c-0.3%2C0-0.3-0.6-0.1-0.6c3%2C0%2C11.4%2C0%2C14.3%2C0%0D%0A%09%09C674.6%2C54%2C674.7%2C54.6%2C674.4%2C54.6z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M752.4%2C34.7c-0.5%2C0.4-1%2C1.7-1%2C13.8v10.3c0%2C7.4-5.5%2C14.5-15.2%2C14.5c-9.6%2C0-15.4-6.3-15.4-14.3V48.5%0D%0A%09%09c0-12.1-0.6-13.5-1.3-14c-0.7-0.4-1.8-0.6-4.2-0.9c-0.2-0.1-0.2-0.6-0.1-0.6c3%2C0%2C12.4%2C0%2C15.2%2C0c0.2%2C0%2C0.2%2C0.6-0.1%2C0.6%0D%0A%09%09c-2.4%2C0.2-3.7%2C0.4-4.4%2C0.9c-0.8%2C0.4-1.3%2C1.8-1.3%2C14v9.3c0%2C7.6%2C4.9%2C13%2C13%2C13c7.6%2C0%2C11.6-5.5%2C11.6-12.4v-10c0-12.1-0.6-13.3-1-13.8%0D%0A%09%09c-0.7-0.6-2.2-0.8-4.6-1c-0.3-0.1-0.2-0.6%2C0-0.6c2.9%2C0%2C10.2%2C0%2C13.1%2C0c0.2%2C0%2C0.2%2C0.6%2C0%2C0.6C754.3%2C33.9%2C753.1%2C34.1%2C752.4%2C34.7z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M811.5%2C35c-0.5%2C0.5-1.2%2C1.4-1.1%2C13.5l0.1%2C9c0.1%2C5.2%2C0%2C10.6%2C0.3%2C15.4c0.1%2C0.3-0.7%2C0.4-1%2C0.1l-30.5-32.5l0.2%2C17%0D%0A%09%09c0.1%2C11.2%2C0.9%2C12.9%2C1.7%2C13.6c0.6%2C0.4%2C2.8%2C1%2C4.5%2C1c0.2%2C0%2C0.2%2C0.8%2C0%2C0.8c-3.2%2C0-11.3%2C0-14.1%2C0c-0.2%2C0-0.2-0.7%2C0-0.8%0D%0A%09%09c2.5-0.2%2C3.9-0.6%2C4.5-1.2c0.5-0.5%2C1.2-1.4%2C1-13.5l-0.1-9c-0.1-5.2-0.1-10.6-0.4-15.4c0-0.3%2C0.9-0.4%2C1.1-0.1l30.6%2C32.7l-0.2-17.2%0D%0A%09%09c-0.1-12.1-1-13-1.7-13.6c-0.7-0.6-2.3-0.9-4.9-1c-0.2-0.1-0.2-0.8%2C0-0.8c3%2C0%2C11.4%2C0%2C14.3%2C0c0.2%2C0%2C0.2%2C0.7%2C0%2C0.8%0D%0A%09%09C813.4%2C34.1%2C812.2%2C34.5%2C811.5%2C35z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M833.6%2C72.9c-0.2%2C0-0.2-0.6%2C0.1-0.6c2.4-0.2%2C3.9-0.4%2C4.7-0.9c0.8-0.4%2C1.3-1.8%2C1.3-14v-9%0D%0A%09%09c0-12.1-0.5-13.5-1.3-14c-0.7-0.4-2.3-0.6-4.7-0.9c-0.3-0.1-0.3-0.6-0.1-0.6c3%2C0%2C13.1%2C0%2C16%2C0c0.2%2C0%2C0.2%2C0.6-0.1%2C0.6%0D%0A%09%09c-2.4%2C0.2-4%2C0.4-4.7%2C0.9c-0.7%2C0.4-1.3%2C1.8-1.3%2C14v9c0%2C12.1%2C0.6%2C13.5%2C1.3%2C14c0.7%2C0.4%2C2.3%2C0.6%2C4.7%2C0.9c0.2%2C0.1%2C0.2%2C0.6%2C0.1%2C0.6%0D%0A%09%09C846.7%2C72.9%2C836.5%2C72.9%2C833.6%2C72.9z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M901.6%2C34.7c-0.6%2C0.5-1.7%2C1.7-6.6%2C13.8l-3.6%2C9c-2%2C5.2-4.2%2C10.5-5.8%2C15.3c-0.2%2C0.4-1.4%2C0.4-1.5%2C0%0D%0A%09%09c-1.9-5.3-3.6-9.7-5.8-15.3l-3.6-9c-4.5-10.8-5.6-13.2-6.6-13.8c-1-0.6-2.2-0.8-4.1-1c-0.2-0.1-0.2-0.6%2C0-0.6c2.5%2C0%2C10.9%2C0%2C13.8%2C0%0D%0A%09%09c0.2%2C0%2C0.3%2C0.6%2C0%2C0.6c-2.3%2C0.2-3.8%2C0.7-3.8%2C1.7c0%2C1.1%2C1%2C3.9%2C4.8%2C13.2l7%2C18.4l7.3-18.4c3.3-8.4%2C4.2-11.5%2C4.2-12.8c0-1.1-1.4-1.8-4-2%0D%0A%09%09c-0.2-0.1-0.2-0.6%2C0-0.6c1.8%2C0%2C9.7%2C0%2C11.9%2C0c0.2%2C0%2C0.3%2C0.6%2C0%2C0.6C903.4%2C33.9%2C902.4%2C34.1%2C901.6%2C34.7z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M945.1%2C72.2c-0.3%2C0.4-2.2%2C0.7-4.7%2C0.7c-3.7%2C0-5.6-0.2-10.8-0.2c-3.9%2C0-5.9%2C0.1-10.3%2C0.1%0D%0A%09%09c-0.2%2C0-0.2-0.6%2C0.1-0.6c2.4-0.2%2C3.8-0.4%2C4.6-0.9c0.8-0.4%2C1.3-1.8%2C1.3-14v-9c0-12.1-0.5-13.5-1.3-14c-0.7-0.4-2.2-0.6-4.6-0.9%0D%0A%09%09c-0.2-0.1-0.2-0.6-0.1-0.6c4.8%2C0.1%2C11.9%2C0.1%2C15.9%2C0.1c5.2%2C0%2C7.1-0.1%2C9-0.3c0.2%2C0%2C0.4%2C0.1%2C0.4%2C0.2c-0.2%2C2.2-0.3%2C4.6-0.7%2C7.9%0D%0A%09%09c-0.1%2C0.2-0.7%2C0.2-0.7-0.2c0-1.6-0.1-3.1-1-4.1c-1-1.1-2.9-2-7.3-2c-2.4%2C0-5%2C0-5.6%2C0.1c-0.2%2C0.6-0.2%2C3.6-0.2%2C7.4v9.1h5.4%0D%0A%09%09c5.8%2C0%2C6.6-0.9%2C7-3.1c0-0.2%2C0.7-0.2%2C0.7%2C0c-0.1%2C1.7-0.3%2C7.2-0.3%2C8.9c0%2C0.2-0.7%2C0.2-0.7-0.1c0-1.2-0.3-2.4-0.9-3%0D%0A%09%09c-0.6-0.6-1.5-1.2-5.8-1.2h-5.4v4.4c0%2C7.9%2C0.4%2C12.3%2C1%2C12.9c0.5%2C0.6%2C2.8%2C0.8%2C6.3%2C0.8c3.9%2C0%2C6-1.1%2C7.1-2.3c0.9-0.9%2C1.5-2.5%2C2-4.4%0D%0A%09%09c0.1-0.4%2C0.7-0.1%2C0.7%2C0.2C945.8%2C68.7%2C945.2%2C72.1%2C945.1%2C72.2z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M1000.8%2C72.8c-3.8%2C0-5.5-0.5-7.9-2.1c-3.1-2.2-6.5-6.8-11.4-15.2c-3.1%2C0.1-5.6%2C0.1-8-0.1v2%0D%0A%09%09c0%2C12.1%2C0.6%2C13.5%2C1.4%2C14c0.8%2C0.4%2C2.6%2C0.6%2C5.3%2C0.9c0.3%2C0.1%2C0.3%2C0.6%2C0.1%2C0.6c-3%2C0-13.2%2C0-16.1%2C0c-0.2%2C0-0.2-0.6%2C0.1-0.6%0D%0A%09%09c2.4-0.2%2C3.5-0.4%2C4.2-0.9c0.7-0.4%2C1.3-1.8%2C1.3-14v-9c0-12.1-0.6-13.5-1.3-14c-0.7-0.4-1.8-0.6-4.2-0.9c-0.2-0.1-0.2-0.6-0.1-0.6%0D%0A%09%09c2.7%2C0%2C5.2%2C0.1%2C7.5%2C0.1c2.3%2C0%2C4.7-0.1%2C7.4-0.1c9.2%2C0%2C13.1%2C5.1%2C13.1%2C9.8c0%2C4.9-3.1%2C8.7-7.4%2C11.3c8.2%2C12.3%2C13.3%2C17.6%2C17.6%2C17.6%0D%0A%09%09c0.6%2C0%2C1.4%2C0%2C1.8-0.1c0.2%2C0%2C0.2%2C0.7%2C0.1%2C0.7C1003.1%2C72.7%2C1002.2%2C72.8%2C1000.8%2C72.8z%20M979%2C34.5c-2.1%2C0-4.7%2C0.3-4.9%2C0.6%0D%0A%09%09c-0.2%2C0.4-0.7%2C4.6-0.7%2C13.5c0%2C3.7%2C0.1%2C4.9%2C0.4%2C5.1c0.5%2C0.4%2C2.9%2C0.7%2C5.8%2C0.7c5%2C0%2C8.1-4.4%2C8.1-9.2C987.7%2C39.3%2C984.8%2C34.5%2C979%2C34.5z%22%0D%0A%09%09%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M1023.8%2C73.2c-6.2%2C0-9.4-3.4-9.5-3.6c-0.1-0.2-0.4-5.4%2C0-8.5c-0.1-0.3%2C0.7-0.3%2C0.7%2C0.1c0.1%2C2.3%2C1%2C4.8%2C1.8%2C6.1%0D%0A%09%09c1.8%2C2.7%2C4.2%2C4.4%2C7.8%2C4.4c4.8%2C0%2C7.7-3.4%2C7.7-7.9c0-9.2-16.3-10.7-16.3-20.8c0-6.3%2C4.9-10.3%2C10.6-10.3c4.7%2C0%2C5.5%2C1.7%2C7.7%2C1.1%0D%0A%09%09c0.2-0.1%2C0.4%2C0.1%2C0.4%2C0.2c0%2C2.2%2C0.1%2C5%2C0%2C8.3c-0.1%2C0.2-0.7%2C0.2-0.7-0.1c-0.1-2-0.9-4.4-2.1-5.7c-1.4-1.5-3.4-2.4-5.6-2.4%0D%0A%09%09c-3.9%2C0-6.8%2C2.9-6.8%2C6.7c0%2C7.7%2C17%2C10.9%2C17%2C20.9C1036.4%2C69.3%2C1029.9%2C73.2%2C1023.8%2C73.2z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M1055.4%2C72.9c-0.2%2C0-0.2-0.6%2C0.1-0.6c2.4-0.2%2C3.9-0.4%2C4.7-0.9c0.8-0.4%2C1.3-1.8%2C1.3-14v-9%0D%0A%09%09c0-12.1-0.5-13.5-1.3-14c-0.7-0.4-2.3-0.6-4.7-0.9c-0.3-0.1-0.3-0.6-0.1-0.6c3%2C0%2C13.1%2C0%2C16%2C0c0.2%2C0%2C0.2%2C0.6-0.1%2C0.6%0D%0A%09%09c-2.4%2C0.2-4%2C0.4-4.7%2C0.9c-0.7%2C0.4-1.3%2C1.8-1.3%2C14v9c0%2C12.1%2C0.6%2C13.5%2C1.3%2C14c0.7%2C0.4%2C2.3%2C0.6%2C4.7%2C0.9c0.2%2C0.1%2C0.2%2C0.6%2C0.1%2C0.6%0D%0A%09%09C1068.5%2C72.9%2C1058.3%2C72.9%2C1055.4%2C72.9z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M1123.7%2C41.6c-0.1%2C0.2-0.7%2C0.2-0.7-0.1c0-1.5-0.3-3.9-1.2-4.7c-1.1-1.2-4.1-1.8-10.6-1.8c-1.4%2C0-2.2%2C0-2.8%2C0.1%0D%0A%09%09c-0.2%2C0.6-0.2%2C3.6-0.2%2C7.4v15c0%2C12.1%2C0.6%2C13.5%2C1.3%2C14c0.7%2C0.4%2C2.3%2C0.6%2C4.7%2C0.9c0.2%2C0.1%2C0.2%2C0.6%2C0.1%2C0.6c-3%2C0-13%2C0-16%2C0%0D%0A%09%09c-0.2%2C0-0.2-0.6%2C0.1-0.6c2.4-0.2%2C3.9-0.4%2C4.7-0.9c0.7-0.4%2C1.3-1.8%2C1.3-14v-15c0-3.9-0.1-6.8-0.2-7.4c-0.6-0.1-1.7-0.1-3.1-0.1%0D%0A%09%09c-6.3%2C0-9.2%2C0.6-10.7%2C1.8c-0.9%2C0.9-1.5%2C3.4-1.8%2C4.9c0%2C0.3-0.7%2C0.1-0.7-0.1c0.4-3.1%2C0.7-6.5%2C0.9-8.6c0-0.1%2C0.1-0.2%2C0.4-0.2%0D%0A%09%09c2.2%2C0.4%2C6.5%2C0.7%2C17.2%2C0.7c14.7%2C0%2C16.4-0.4%2C17.5-0.8c0.2-0.1%2C0.4%2C0.1%2C0.4%2C0.2C1124.2%2C35.1%2C1124.1%2C38.4%2C1123.7%2C41.6z%22%2F%3E%0D%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M1172.8%2C34.2c-0.6%2C0.3-1.4%2C1.2-5.8%2C8.6l-3.3%2C5.5c-1.5%2C2.4-3%2C4.8-4.3%2C7.1v2c0%2C12.2%2C0.6%2C13.6%2C1.3%2C14%0D%0A%09%09c0.7%2C0.4%2C2.3%2C0.6%2C4.7%2C0.9c0.2%2C0.1%2C0.2%2C0.6%2C0.1%2C0.6c-2.9%2C0-13.1%2C0-16%2C0c-0.2%2C0-0.2-0.6%2C0.1-0.6c2.4-0.2%2C4-0.4%2C4.7-0.9%0D%0A%09%09c0.7-0.4%2C1.3-1.8%2C1.3-14v-1.8c-1.4-2.4-2.7-4.7-4.4-7.4l-3.4-5.5c-4.7-7.4-5.2-8.4-6-8.7c-1-0.4-1.9-0.4-3.6-0.5%0D%0A%09%09c-0.3%2C0-0.2-0.6%2C0-0.6c2.9%2C0%2C10.2%2C0%2C13.2%2C0c0.2%2C0%2C0.2%2C0.6%2C0%2C0.6c-1.4%2C0.1-3%2C0.1-3.4%2C0.4c-0.5%2C0.3%2C0%2C1.3%2C4.5%2C9.4l6.1%2C10.3l6.8-11.3%0D%0A%09%09c4.4-6.9%2C4.2-7.9%2C3.8-8.2c-0.5-0.2-2.2-0.4-3.8-0.5c-0.2%2C0-0.2-0.6%2C0-0.6c1.8%2C0%2C8.7%2C0%2C11.7%2C0c0.2%2C0%2C0.2%2C0.6%2C0%2C0.6%0D%0A%09%09C1175%2C33.7%2C1173.8%2C33.8%2C1172.8%2C34.2z%22%2F%3E%0D%0A%3C%2Fg%3E%0D%0A%3C%2Fsvg%3E%0D%0A"
            class="university-logo">
        <div class="copyright-contact">&copy;
            <span id="currentYear"></span> All Rights Reserved | Provo, UT 84602, USA | 801.422.4636</div>
    </div>
</div>`);
(function (template) { // limit scope

    class BYUMenu extends HTMLElement {

        static get observedAttributes() {
            return ['collapsed'];
        }

        get collapsed() {
            return this.hasAttribute('collapsed');
        }

        set collapsed(val) {
            if (val)
                this.setAttribute('collapsed', '');
            else
                this.removeAttribute('collapsed');
        }

        constructor() {
            super(); // always call super first
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
        }

        attributeChangedCallback(name, oldValue, newValue) {
        }

        connectedCallback() {
            // if there are more than 6 links add the extras to a "more" dropdown
            const slot = this.shadowRoot.querySelector("#slot");

            var allLinks = slot.assignedNodes().filter(function (element) { return element instanceof HTMLElement });
            
            
            // create the secondary nav links
            for (var i = 0; i < allLinks.length; i++) {
                var cln = allLinks[i].cloneNode(true);
                this.shadowRoot.querySelector('.secondary-nav').appendChild(cln);
            }

            // calculate the height of the mobile dropdown
            var h = allLinks.length * 48;
            
            if (allLinks.length > 6) {

                // create the "extra links" dropdown
                var extraLinks = this.shadowRoot.querySelector('#extraLinks');
                extraLinks.style.display = "table-cell";

                allLinks = allLinks.slice(5);
                var dropdown = extraLinks.querySelector("#extraLinksDropdown")
                for (var i = 0; i < allLinks.length; i++) {
                    var listItem = document.createElement("li");
                    listItem.appendChild(allLinks[i]);
                    dropdown.appendChild(listItem);
                }
            }

            //dynamically set the height of the mobile dropdown based on the number of links
            var styleSheet = this.shadowRoot.querySelector("#stylePlaceHolder");
            styleSheet.innerHTML = "<style>.navbar-collapse { height: " + h + "px }</style>";
        }
    }

    window.customElements.define('byu-menu', BYUMenu);
    window.BYUMenu = BYUMenu;

})(`<style>
    /*Variables*/
:host {
  display: block;
  width: 100%;
  height: auto;
  background: #ffffff;
  opacity: 0.88;
  border-bottom: 1px solid #ccc; }

:host([collapsed]) .navbar-collapse {
  height: 0; }

.outer-nav {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  justify-content: flex-start;
  padding: 0; }

.inner-nav {
  width: 100%;
  display: table; }

.navbar-collapse {
  /* change height to be dynamic */
  padding: 0 15px;
  overflow: hidden;
  margin: 0 -15px;
  -webkit-box-shadow: 0px 2px 21px -4px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 2px 21px -4px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 21px -4px rgba(0, 0, 0, 0.2);
  -webkit-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;
  -webkit-transition-duration: .35s;
  -o-transition-duration: .35s;
  transition-duration: .35s;
  -webkit-transition-property: height;
  -o-transition-property: height;
  transition-property: height; }

.secondary-nav {
  padding-left: 0;
  margin: 0 -15px; }

.secondary-nav > a {
  font-family: "Gotham A", "Gotham B", Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #002e5d;
  text-transform: uppercase;
  box-sizing: border-box;
  position: relative;
  display: block;
  padding: 18px 30px;
  line-height: 12px;
  text-decoration: none; }

.secondary-nav > a:hover {
  background-color: #f6f6f6;
  cursor: pointer; }

::slotted(*) {
  display: table;
  width: 16.66%; }

::slotted(*.selected) {
  background: #e6e6e6 !important; }

.extra-links, ::slotted(*) {
  font-family: "Gotham A", "Gotham B", Helvetica, sans-serif !important;
  font-size: 13px !important;
  font-weight: 400 !important;
  color: #002e5d !important;
  height: 35px !important;
  display: table-cell;
  text-transform: uppercase !important;
  text-decoration: none !important;
  vertical-align: middle !important;
  text-align: center !important;
  padding: 0 6px !important; }

.extra-links:hover, ::slotted(*:hover) {
  background-color: #c5c5c5 !important; }

.extra-links {
  display: none;
  cursor: pointer; }
  .extra-links .extra-links-dropdown {
    display: none;
    position: absolute;
    background-color: white;
    z-index: 10;
    min-width: 115px;
    margin-top: 10px; }
    .extra-links .extra-links-dropdown ul {
      list-style-type: none;
      padding: 0; }
  .extra-links:hover .extra-links-dropdown {
    display: block; }

@media (min-width: 1024px) {
  /* Hide any menu elements not in the first six. We'll use javascript to duplicate them and 
    stick them in a separate dropdown that gets hidden for mobile views */
  ::slotted(*:nth-child(n+7)) {
    display: none; } }

@media (max-width: 1023px) {
  nav.outer-nav {
    display: none; } }

</style>
<link type="text/css" rel="stylesheet" href="https://cloud.typography.com/75214/6517752/css/fonts.css" media="all" />

<nav class="outer-nav">
    <div class="inner-nav">
        <slot id="slot"></slot>
        <div class="extra-links" id="extraLinks">
            More
            <div class="extra-links-dropdown">
                <ul id="extraLinksDropdown"></ul>
            </div>
        </div>
    </div>
</nav>
<div class="navbar-collapse">
    <nav class="secondary-nav"></nav>
</div>
<div id="stylePlaceHolder"></div>`);
(function (template) {
    'use strict';

    class BYUHeader extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
        }

    }

    window.customElements.define('byu-header', BYUHeader);
    window.BYUHeader = BYUHeader;

})(`<style>
    /*Variables*/
.byu-header {
  font-family: "Vitesee Book";
  font-size: 18px; }
  .byu-header > div > * {
    margin-right: 16px; }
  .byu-header button {
    background-color: #767676;
    color: #ffffff;
    border: none;
    display: inline-block;
    cursor: pointer; }
    .byu-header button.nav-expand {
      background-color: transparent; }
      .byu-header button.nav-expand span.fa {
        font-size: 20px; }
  .byu-header .byu-header-primary {
    background-color: #002e5d;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    flex: 1;
    height: 55px; }
    .byu-header .byu-header-primary .byu-header-title, .byu-header .byu-header-primary #title::slotted(*) {
      white-space: nowrap;
      overflow: hidden;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      flex: 1;
      font-family: "Vitesse A", "Vitesse B", Georgia, serif !important;
      font-size: 22px; }
  .byu-header .byu-header-user button {
    background-color: transparent;
    position: relative; }
    .byu-header .byu-header-user button .icon {
      width: 20px;
      height: 20px;
      font-size: 20px;
      vertical-align: middle; }
    .byu-header .byu-header-user button .label {
      font-family: "Gotham A", "Gotham B", Helvetica, sans-serif;
      font-weight: 400;
      font-size: 13px;
      text-transform: uppercase; }
  .byu-header .byu-header-search #search-input {
    font-family: "Gotham A", "Gotham B", Helvetica, sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: #002e5d; }
    .byu-header .byu-header-search #search-input::-webkit-input-placeholder {
      color: #c5c5c5;
      opacity: 1; }
    .byu-header .byu-header-search #search-input::-ms-input-placeholder {
      color: #c5c5c5;
      opacity: 1; }
    .byu-header .byu-header-search #search-input::-moz-placeholder {
      color: #c5c5c5;
      opacity: 1; }
  .byu-header .byu-logo {
    height: 48px;
    width: 92px; }

/* FULL SIZE */
@media (min-width: 1024px) {
  .byu-header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center; }
    .byu-header.no-nav {
      height: 48px; }
    .byu-header .nav-expand {
      display: none; }
    .byu-header .byu-header-secondary {
      background-color: #002e5d;
      color: #ffffff;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      height: 55px; }
      .byu-header .byu-header-secondary .byu-header-search {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center; }
        .byu-header .byu-header-secondary .byu-header-search input {
          border: 1px solid #002e5d;
          border-right: none;
          height: 20px;
          padding: 4px 6px;
          flex: 1;
          width: 217px;
          box-sizing: content-box; }
        .byu-header .byu-header-secondary .byu-header-search button {
          height: 28px;
          width: 30px;
          text-align: center; }
      .byu-header .byu-header-secondary .byu-header-menu-button {
        display: none; } }

/* TABLET SIZE */
@media (max-width: 1023px) {
  .byu-header .byu-header-secondary {
    background-color: initial;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center; }
    .byu-header .byu-header-secondary > div {
      margin-right: 0;
      height: auto; }
    .byu-header .byu-header-secondary button {
      border-left: 1px solid #ffffff; }
      .byu-header .byu-header-secondary button > span {
        font-size: 17px;
        line-height: 12px; }
    .byu-header .byu-header-secondary .byu-header-user {
      display: none; }
    .byu-header .byu-header-secondary .byu-header-search {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      flex: 1; }
      .byu-header .byu-header-secondary .byu-header-search input {
        flex: 1;
        height: 35px;
        padding-left: 16px;
        box-sizing: border-box; }
      .byu-header .byu-header-secondary .byu-header-search button {
        border-left: none;
        width: 50px; }
    .byu-header .byu-header-secondary .byu-header-user .label {
      display: none; }
    .byu-header .byu-header-secondary .byu-header-user .icon {
      top: 50%;
      left: 50%;
      margin-top: -13px;
      margin-left: -13px; } }

/* PHONE SIZE */

</style>

<link rel="stylesheet" href="../../bower_components/font-awesome/css/font-awesome.min.css">
<link type="text/css" rel="stylesheet" href="https://cloud.typography.com/75214/6517752/css/fonts.css" media="all" />

<div id="header" class="byu-header">

    <div class="byu-header-primary">
        <img class="byu-logo"" alt="byu.svg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMzkuNyA0MC4zIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMzkuNyA0MC4zIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNi42LDE2LjFjMC0wLjQsMC00LjgsMC02LjdjMC0wLjUtMC4xLTAuOS0wLjEtMC45czAuNSwwLjEsMC45LDAuMWMwLjUsMCw1LDAsNSwwYzMuOCwwLDYuMSwwLjYsNi4xLDQuMQ0KCQljMCwyLjMtMS40LDQuMy01LjksNC4zYzAsMC00LjcsMC01LjIsMEMxNywxNywxNi42LDE3LDE2LjYsMTdTMTYuNiwxNi42LDE2LjYsMTYuMXogTTE2LjYsMzEuNGMwLTAuMSwwLTUuNiwwLTcuNw0KCQljMC0wLjUtMC4xLTAuOS0wLjEtMC45czAuNSwwLjEsMC45LDAuMWMwLjUsMCw0LjMsMCw0LjMsMGMzLjQsMCw3LjUsMCw3LjUsNC43YzAsMy41LTMsNC43LTcsNC43YzAsMC00LjcsMC00LjgsMA0KCQljLTAuNSwwLTAuOSwwLjEtMC45LDAuMVMxNi42LDMxLjksMTYuNiwzMS40eiBNNC40LDQuNWwwLDMyLjFjMCwxLDAuMSwxLjQtMC43LDEuOUMzLDM4LjksMi4zLDM5LDEuMSwzOS4yYzAsMCwwLDAsMCwwDQoJCWMtMC4xLDAtMC4xLDAuNSwwLDAuNWMwLjEsMCwyNiwwLDI2LDBjMTEsMCwxNS42LTQuMywxNS42LTExLjFjMC01LTIuMy04LjEtNy05LjJjLTAuMSwwLTAuMS0wLjEsMC0wLjFjMi45LTAuOSw1LjctMy4xLDUuNy04LjMNCgkJYzAtNy4xLTQuOC05LjUtMTUuMi05LjVoLTI1QzEsMS40LDEsMS44LDEuMSwxLjljMCwwLDAsMCwwLDBDMi4zLDIuMSwzLDIuMiwzLjcsMi42QzQuNSwzLjEsNC40LDMuNCw0LjQsNC41eiIvPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMzUuMyw0LjVjMC0xLTAuMS0xLjQsMC43LTEuOWMwLjctMC40LDEuNS0wLjUsMi43LTAuN2MwLDAsMCwwLDAsMGMwLjEsMCwwLjEtMC41LDAtMC41bC0xOS4yLDANCgkJYy0wLjEsMC0wLjEsMC40LDAsMC41YzAsMCwwLDAsMCwwYzEuMiwwLjIsMS44LDAuMywyLjUsMC43YzAuNywwLjUsMC43LDAuOCwwLjcsMS45djE5LjNjMCw0LjQtMi41LDcuOC03LjUsNy44DQoJCWMtNSwwLTcuNS0zLjQtNy41LTcuOGwwLTE5LjNjMC0xLTAuMS0xLjQsMC43LTEuOWMwLjctMC40LDEuMy0wLjYsMi41LTAuN2MwLDAsMCwwLDAsMGMwLjEsMCwwLjEtMC41LDAtMC41bC0xOC4xLDANCgkJYy0wLjEsMC0wLjEsMC41LDAsMC41YzAsMCwwLDAsMCwwYzAuNywwLDEuMSwwLjEsMS41LDAuNGMwLjYsMC41LDAuNywxLjEsMC43LDIuMmwwLDE5YzAsOS4xLDUsMTYuOSwyMC4yLDE2LjkNCgkJYzE1LjIsMCwyMC4yLTcuOCwyMC4yLTE2LjlWNC41eiIvPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik03Ny4zLDM5LjdjMC4xLDAsMC4xLTAuNCwwLTAuNWMwLDAsMCwwLDAsMGMtMS4yLTAuMi0xLjktMC4zLTIuNy0wLjdjLTAuNy0wLjUtMC43LTAuOC0wLjctMS45VjI0LjQNCgkJTDg3LjIsNC43YzAuNy0xLjEsMS4yLTEuNiwxLjgtMi4xYzAuMS0wLjEsMC4zLTAuMiwwLjUtMC4zQzkwLDIsOTAuMiwxLjksOTAuOSwxLjljMCwwLDAsMCwwLDBjMC4xLDAsMC4yLTAuNSwwLTAuNWwtMTcuOSwwDQoJCWMtMC4xLDAtMC4xLDAuNSwwLDAuNWMwLDAsMCwwLDAsMGMwLjksMCwxLjksMCwxLjgsMS4zYy0wLjEsMS4yLTUuMyw4LjctNy4xLDExLjVjLTAuMywwLjQtMC41LDAuOC0wLjYsMS4zDQoJCWMtMC4xLTAuNS0wLjQtMS0wLjYtMS4zYy0yLjYtMy44LTYuOS0xMC03LjEtMTEuNWMtMC4xLTEuMywwLjktMS4zLDEuOC0xLjNjMCwwLDAsMCwwLDBjMC4xLDAsMC4yLTAuNSwwLTAuNWwtMTguOCwwDQoJCWMtMC4xLDAtMC4xLDAuNCwwLDAuNWMwLDAsMCwwLDAsMGMwLjgsMC4xLDEuMiwwLDIuMiwwLjVjMC4xLDAuMSwwLjQsMC4yLDAuNSwwLjNjMC42LDAuNSwxLDEsMS43LDJsMTMuMiwxOS42bDAsMTIuMw0KCQljMCwxLDAuMSwxLjQtMC43LDEuOWMtMC43LDAuNC0xLjUsMC41LTIuNywwLjdjMCwwLDAsMCwwLDBjLTAuMSwwLTAuMSwwLjUsMCwwLjVMNzcuMywzOS43eiIvPg0KPC9nPg0KPC9zdmc+DQo="
        />

        <div class="byu-header-title">
            <slot id="title" name="title"></slot>
        </div>
        <button type="button" class="nav-expand" aria-label="Open or close menu" onclick="this.parentElement.parentElement.querySelector('#navbarMenu').assignedNodes()[0].collapsed = !this.parentElement.parentElement.querySelector('#navbarMenu').assignedNodes()[0].collapsed">
            <span class="fa fa-bars"></span>
         </button>
    </div>

    <div id="secondary" class="byu-header-secondary">

        <div class="byu-header-user">
            <button type="button">
                <span class="icon"> 
                    <span class="fa fa-user-circle-o"></span>
                </span>
                <span class="label">Sign in</span>
           </button>
        </div>

        <div class="byu-header-search">
            <slot id="search" name="search"></slot>
        </div>

        <div id="menuTemplate" class="byu-header-menu-button">

        </div>

    </div>

    <slot id="navbarMenu" name="nav">

    </slot>

</div>`);
/**
 *  @license
 *    Copyright 2016 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
(function (template) {
    'use strict';

    var store = new WeakMap();

    class ByuSearch extends HTMLElement {

        static get observedAttributes() {
            return ['placeholder', 'value'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'placeholder':
                    this.shadowRoot.querySelector('input').setAttribute('placeholder', newValue);
                    break;
                case 'value':
                    store.set(this, getInputValue(this));
                    break;
            }
        }

        constructor() {
            super(); // always call super first

            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
        }

        connectedCallback() {
            var input = getInputElement(this, true);
            if (input) input.addEventListener('input', inputHandler);

            this.shadowRoot.querySelector('form')
                .addEventListener('submit', formSubmitHandler);

            if (this.hasAttribute('value')) this.value = this.getAttribute('value');
        }

        disconnectedCallback() {
            var input = getInputElement(this, true);
            if (input) input.removeEventListener('input', inputHandler);

            this.shadowRoot.querySelector('form')
                .removeEventListener('submit', formSubmitHandler);
        }

        get value() {
            return store.get(this);
        }

        set value(value) {
            store.set(this, '' + value);
            var input = getInputElement(this, true);
            if (input) input.value = value;
            return this;
        }

        search() {
            if (this.hasAttribute('onsearch')) evalInContext.call(this, this.getAttribute('onsearch'));

            if (this.hasAttribute('action')) {
                var form = this.shadowRoot.querySelector('form');
                var value = this.value;
                var action = this.getAttribute('action').toString().replace(/\$1/g, value);
                form.setAttribute('action', action);
                form.setAttribute('method', this.hasAttribute('method')
                    ? this.getAttribute('method')
                    : 'GET');
                if (this.hasAttribute('target')) form.setAttribute('target', this.getAttribute('target'));
                form.submit();
            }
        }

    }

    function evalInContext(string) {
        return eval(string);
    }

    function getInputValue(component) {
        var input = getInputElement(component, true);
        return input ? input.value : '';
    }

    function getInputElement(component, flatten) {
        var elements = component.shadowRoot.querySelector("#search").assignedNodes({ flatten: flatten });
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].tagName === 'INPUT') return elements[i];
        }
        return null;
    }

    function getParentComponent(el) {
        while (!(el instanceof ByuSearch)) el = el.host ? el.host : el.parentNode;
        return el;
    }

    function inputHandler(e) {
        var el = e.target;
        var component = el.tagName === 'byu-search' ? el : getParentComponent(el);
        component.value = e.target.value;
    }

    function formSubmitHandler(e) {
        if (e) e.preventDefault();
        this.parentNode.host.search();
    }

    window.customElements.define('byu-search', ByuSearch);
    window.ByuSearch = ByuSearch;

})(`<!--
  ~  @license
  ~    Copyright 2016 Brigham Young University
  ~
  ~    Licensed under the Apache License, Version 2.0 (the "License");
  ~    you may not use this file except in compliance with the License.
  ~    You may obtain a copy of the License at
  ~
  ~        http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~    Unless required by applicable law or agreed to in writing, software
  ~    distributed under the License is distributed on an "AS IS" BASIS,
  ~    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~    See the License for the specific language governing permissions and
  ~    limitations under the License.
  -->

<link rel="stylesheet" href="../../bower_components/font-awesome/css/font-awesome.min.css">
<style>
  :host {
  display: inline-block; }

.sr-only {
  display: none; }

button {
  background-color: var(--byu-search-color, #767676);
  border: 1px solid var(--byu-search-color, #767676);
  color: #FFF;
  padding-left: 10px;
  padding-right: 10px; }

form {
  display: flex;
  align-items: stretch;
  align-content: center; }

form #search-container {
  flex: 1; }

form #search-container input,
::slotted(input) {
  padding: 5px 10px;
  border: 1px solid var(--byu-search-color, #767676);
  border-right: none; }

@media (max-width: 1023px) {
  :host {
    width: 100%;
    height: 35px; }
  form #search-container input,
  ::slotted(input) {
    padding: 5px 10px;
    border: 1px solid var(--byu-search-color, #767676);
    border-right: none;
    width: 100%;
    height: 35px; } }

</style>

<form>
  <div id='search-container'>
    <slot id='search' name='search'><input type="search" placeholder="Search"></slot>
  </div>
  <button id='submit-button' type='submit'>
    <span class='fa fa-search' aria-hidden='true'></span>
    <div class='sr-only'>Run Search</div>
  </button>
</form>`);
(function (template) {
    'use strict';

    class BYUSocialMediaLinks extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = template;
        }

        connectedCallback() {
            var idArr = ['facebook', 'instagram', 'twitter', 'googleplus', 'linkedin', 'youtube'];
            var classArr = ['fa-facebook', 'fa-instagram', 'fa-twitter', 'fa-google-plus', 'fa-linkedin', 'fa-youtube-play'];

            for (var i = 0; i < idArr.length; i++) {
                const slotId = this.shadowRoot.querySelector("#" + idArr[i]);
                var link = slotId.assignedNodes();

                if (link.length > 0) {
                    link[0].classList.add("fa");
                    link[0].classList.add(classArr[i]);
                }
            }

        }
    }

    window.customElements.define('byu-social-media-links', BYUSocialMediaLinks);
    window.BYUSocialMediaLinks = BYUSocialMediaLinks;

})(`<style>::slotted(a) {
  text-decoration: none !important; }

::slotted(.fa) {
  text-decoration: none !important;
  color: #002e5d !important;
  font-size: 25px !important;
  line-height: 40px !important;
  border: 1px solid #fff !important;
  width: 40px !important;
  height: 40px !important;
  text-align: center !important;
  border-radius: 20px !important;
  margin: 0 5px 5px 0 !important;
  cursor: pointer; }

::slotted(.fa:hover) {
  background-color: #fff !important; }
</style>
<slot id="facebook" name="facebook"></slot>
<slot id="instagram" name="instagram"></slot>
<slot id="twitter" name="twitter"></slot>
<slot id="googleplus" name="googleplus"></slot>
<slot id="linkedin" name="linkedin"></slot>
<slot id="youtube" name="youtube"></slot>`);
/**
 * Created by ThatJoeMoore on 11/7/16.
 */

(function (template) {
    class ByuUserLogin extends HTMLElement {

        set loginUrl(value) {
            let link = this.shadowRoot.querySelector('.link');

            if (value) {
                this.setAttribute('login-url', value);
                if (link) {
                    link.setAttribute('href', value);
                }
            } else {
                this.removeAttribute('login-url');
                if (link) {
                    link.removeAttribute('href');
                }
            }
        }

        get loginUrl() {
            return this.getAttribute('login-url');
        }

        constructor() {
            super();

            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
            //Hack to make sure that the proper login URL gets set in our template.
            this.loginUrl = this.loginUrl;
        }

        static get observedAttributes() {
            return ['login-url'];
        }

        attributeChangedCallback(attr, oldval, newval) {
            switch (attr) {
                case 'login-url':
                    this.loginUrl = newval;
                    break;
            }
        }

        connectedCallback() {
            this._addSlotListeners();
            this._addAriaAttributes();
        }

        _addSlotListeners() {
            this._setUrlFromLightDom();
            const slot = this.shadowRoot.querySelector('#delegate');
            slot.addEventListener('slotchange', e => {
                this._setUrlFromLightDom();
            });
        }

        _addAriaAttributes() {
            this.setAttribute('role', 'button');
        }

        _setUrlFromLightDom() {
            let slot = this.shadowRoot.querySelector('#delegate');
            let nodes = slot.assignedNodes().filter(node => node instanceof HTMLAnchorElement);
            if (!nodes.length) {
                return;
            }
            let link = nodes[0];
            if (link.href) {
                console.log('setting login url from', link);
                this.loginUrl = link.href;
            }
        }

    }

    window.customElements.define('byu-user-login', ByuUserLogin);
    window.ByuUserLogin = ByuUserLogin;

})(`<style>
    /* FUSE */
</style>
<div>
    <a class="link">
        <span class="text">Sign In</span>
        <img class="icon" src="../img/user.svg">
    </a>
    <slot id="delegate" style="display: none;" hidden></slot>
</div>
`);

(function(a){'use strict';class b extends HTMLElement{constructor(){super();let c=this.attachShadow({mode:'open'});c.innerHTML=a}}window.customElements.define('my-component',b),window.MyComponent=b})(`<style>/* FUSE */</style><div>My Custom Web Component</div>`);