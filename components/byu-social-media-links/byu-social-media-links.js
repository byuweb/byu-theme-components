(function (template) {
    'use strict';

    class BYUSocialMediaLinks extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = template;
        }

        connectedCallback() {}
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
  margin: 0 5px 5px 0 !important; }

::slotted(.fa:hover) {
  background-color: #fff !important; }
</style>

<slot id="facebook" name="facebook"></slot>
<slot id="instagram" name="instagram"></slot>
<slot id="twitter" name="twitter"></slot>
<slot id="googleplus" name="googleplus"></slot>
<slot id="linkedin" name="linkedin"></slot>
<slot id="youtube" name="youtube"></slot>`);