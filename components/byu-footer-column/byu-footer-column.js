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

})(`<style>.footer-column {
  padding: 0 15px; }

<<<<<<< HEAD
::slotted(*) {
=======
.header {
  width: 100%;
  -webkit-margin-after: 0.53em; }

.header ::slotted(*) {
>>>>>>> d54dff86595f16c1161e5a560a012f29b309d14e
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

.content ::slotted(*) {
  font-family: "Gotham A", "Gotham B", Helvetica, sans-serif !important;
  font-size: 13px !important;
  font-weight: 400 !important;
  color: #767676 !important;
  text-decoration: none !important;
  outline: none !important;
  line-height: 2.8em !important; }
</style>

<div class="footer-column">
    <h2 class="header">
        <slot id="headertext" name="header"></slot>
    </h2>
    <div class="content">
        <slot name="content"></slot>
    </div>
</div>`);