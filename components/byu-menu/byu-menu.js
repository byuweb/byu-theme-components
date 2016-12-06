(function () { // limit scope

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

            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = this.template();

            // TODO: update styles to match latest design specs
            // TODO: add a gray line under the menu
            // TODO: at some point it will need to interact with the other components (when responsive it needs to shrink if they click on search)
        }

        attributeChangedCallback(name, oldValue, newValue) {
            // We don't need to toggle a css class anymore. Using :host([collapsed]) instead
            //utilities.toggleClass(this.shadowRoot.querySelector('.secondaryNav'), 'collapsed');                
        }

        connectedCallback() {
             // if there are more than 6 links add the extras to a "more" dropdown
            const slot = this.shadowRoot.querySelector("#slot");
            console.log(slot);
            var allLinks = slot.assignedNodes().filter(function (element) { return element instanceof HTMLElement });
            if (allLinks.length > 6) {
                // create the secondary nav links
                for (var i = 0; i < allLinks.length; i++) {
                    this.shadowRoot.querySelector('.secondaryNav').appendChild(allLinks[i]);
                }

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
        }

        template() {
            return `
                <style type="text/css">
                    :host {
                        display: block;
                        width: 100%;
                        height: auto;
                        background: #ffffff;

                        position: relative;
                    }

                    :host([collapsed]) .navbar-collapse {
                        height: 0;
                    }

                    .outerNav {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        justify-content: space-between;
                        align-items: center;
                        justify-content: flex-start;
                        margin: 0 16px;
                        padding: 0;
                    }

                    .innerNav {
                        width: 100%;
                        display:table;
                    }

                    .navbar-collapse {
                        height: 241px;
                        padding: 0 15px;
                        overflow: hidden;
                        border-top: 1px solid transparent;
                        -webkit-overflow-scrolling: touch;
                        margin: 0 -15px;
                        font-family: "Gotham Book";

                        -webkit-box-shadow: 0px 2px 21px -4px rgba(0,0,0,0.2);
                        -moz-box-shadow: 0px 2px 21px -4px rgba(0,0,0,0.2);
                        box-shadow: 0px 2px 21px -4px rgba(0,0,0,0.2);

                        -webkit-transition: all 250ms cubic-bezier(0.850, 0.345, 0.125, 0.690); 
                        -moz-transition: all 250ms cubic-bezier(0.850, 0.345, 0.125, 0.690); 
                        -o-transition: all 250ms cubic-bezier(0.850, 0.345, 0.125, 0.690); 
                        transition: all 250ms cubic-bezier(0.850, 0.345, 0.125, 0.690);

                        -webkit-transition-timing-function: cubic-bezier(0.850, 0.345, 0.125, 0.690); 
                        -moz-transition-timing-function: cubic-bezier(0.850, 0.345, 0.125, 0.690); 
                        -o-transition-timing-function: cubic-bezier(0.850, 0.345, 0.125, 0.690); 
                        transition-timing-function: cubic-bezier(0.850, 0.345, 0.125, 0.690);
                    }

                    .nav {
                        padding-left: 0;
                        margin: 0 -15px;
                        list-style: none;
                    }

                    .nav > a {
                        box-sizing: border-box;
                        position: relative;
                        display: block;
                        padding: 18px 30px;
                        line-height: 12px;
                        text-decoration: none;
                        color: #444;
                    }

                    .nav > a:hover {
                        background-color: #f6f6f6;
                        cursor: pointer;
                    }

                    ::slotted(*) {
                        display: table;
                        width: 16.66%;
                    }

                    ::slotted(*.selected) {
                        background: #e5e5e5;
                    }

                    .extraLinks, ::slotted(*) {
                        font-family: "Gotham Book";
                        font-size: 13px;
                        color: #002e5d;
                        height: 32px;
                        display: table-cell;
                        text-transform: uppercase;
                        text-decoration: none;
                        vertical-align: middle;
                        text-align: center;
                        padding: 0 6px;
                    }

                    .extraLinks:hover, ::slotted(*:hover) {
                        background: #e5e5e5;
                    }

                    @media (min-width: 1024px) {
                        /* Hide any menu elements not in the first six. We'll use javascript to duplicate them and 
                        stick them in a separate dropdown that gets hidden for mobile views */
                        ::slotted(*:nth-child(n+7)) { 
                            display: none;
                        }
                    }

                    @media (max-width: 1023px) {
                        nav.outerNav {
                            display: none;
                        }
                    }
                </style>
                <nav class="outerNav">
                    <div class="innerNav">
                        <slot id="slot"></slot>
                        <div class="extraLinks" id="extraLinks" style="display: none">
                            More
                            <ul style="display: none" id="extraLinksDropdown"></ul>
                        </div>
                    </div>
                </nav>

                <div class="navbar-collapse">
                    <nav class="nav secondaryNav">

                    </nav>
                </div>
                `;
        }

    }


    window.customElements.define('byu-menu', BYUMenu);

})();

