(function (template) {
    'use strict';

    class BYUFooterColumn extends HTMLElement {

        static get observedAttributes() {
            return['column-header'];
        }

        get columnHeader() {
            return this.hasAttribute('column-header');
        }

        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = template;
        }

        connectedCallback() {
            if (this.columnHeader)
                this.shadowRoot.querySelector('#header').innerText = this.getAttribute('column-header');
        }
    }

    window.customElements.define('byu-footer-column', BYUFooterColumn);
    window.BYUFooterColumn = BYUFooterColumn;

})(`<style>:host {
  color: purple !important; }

.column {
  padding: 0 15px; }
  .column h2 {
    font-family: "Vitesse A", "Vitesse B", Georgia, serif;
    text-transform: uppercase;
    color: #002e5d;
    font-size: 20px;
    border-bottom: 1px solid #c5c5c5;
    padding-bottom: 10px;
    white-space: nowrap;
    font-weight: 400; }

::slotted(*), .content * {
  font-family: "Gotham A", "Gotham B", Helvetica, sans-serif !important;
  font-size: 13px !important;
  font-weight: 400 !important;
  color: #767676 !important;
  text-decoration: none !important;
  outline: none !important; }

::slotted(a):hover, .content a:hover {
  color: #002e5d !important;
  cursor: pointer !important; }
</style>

<div class="column">
    <h2 id="header"></h2>
    <div class="content">
        <slot name="content"></slot>
    </div>
</div>`);