(function (template) {
    'use strict';

    class BYUFooterColumn extends HTMLElement {

        // static get observedAttributes() {
        //     return['column-header'];
        // }

        // get columnHeader() {
        //     return this.hasAttribute('column-header');
        // }

        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = template;
        }

        connectedCallback() {
            // if (this.columnHeader)
            //     this.shadowRoot.querySelector('#header').innerText = this.getAttribute('column-header');
        }
    }

    window.customElements.define('byu-footer-column', BYUFooterColumn);
    window.BYUFooterColumn = BYUFooterColumn;

})(`<style>:host {
  color: purple !important; }

.column {
  padding: 0 15px; }

::slotted(*) #headertext {
  font-family: "Vitesse A", "Vitesse B", Georgia, serif !important;
  text-transform: uppercase !important;
  color: #002e5d !important;
  font-size: 20px !important;
  border-bottom: 1px solid #c5c5c5 !important;
  padding-bottom: 10px !important;
  white-space: nowrap !important;
  font-weight: 400 !important; }
</style>

<div class="column">
    <h2 class="header">
        <slot id="headertext" name="header"></slot>
    </h2>
    <div class="content">
        <slot name="content"></slot>
    </div>
</div>`);