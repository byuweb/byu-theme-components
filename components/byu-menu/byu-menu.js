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
            // We don't need to toggle a css class anymore. Using :host([collapsed]) instead
            //utilities.toggleClass(this.shadowRoot.querySelector('.secondaryNav'), 'collapsed');                
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

                // Since we want this one to show when there are 6 or less we need to manually switch it off instead
                // of using nth-child like we do for the others 
                allLinks[5].style.display = "none";

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

})(`<style>
    :host {
  display: block;
  width: 100%;
  height: auto;
  background: #ffffff; }

:host([collapsed]) .navbar-collapse {
  height: 0; }

.outer-nav {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  justify-content: flex-start;
  margin: 0 16px;
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
  font-family: 'Gotham';
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
  background: #e5e5e5; }

.extra-links, ::slotted(*) {
  font-family: "Gotham Book";
  font-size: 13px;
  color: #002e5d;
  height: 32px;
  display: table-cell;
  text-transform: uppercase;
  text-decoration: none;
  vertical-align: middle;
  text-align: center;
  padding: 0 6px; }

.extra-links:hover, ::slotted(*:hover) {
  background: #e5e5e5; }

@media (min-width: 1024px) {
  /* Hide any menu elements not in the first six. We'll use javascript to duplicate them and 
    stick them in a separate dropdown that gets hidden for mobile views */
  ::slotted(*:nth-child(n+7)) {
    display: none; } }

@media (max-width: 1023px) {
  nav.outer-nav {
    display: none; } }

</style>
<nav class="outer-nav">
    <div class="inner-nav">
        <slot id="slot"></slot>
        <div class="extra-links" id="extraLinks" style="display: none">
            More
            <ul style="display: none" id="extraLinksDropdown"></ul>
        </div>
    </div>
</nav>
<div class="navbar-collapse">
    <nav class="secondary-nav"></nav>
</div>
<div id="stylePlaceHolder"></div>`);