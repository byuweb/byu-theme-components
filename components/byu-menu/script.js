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
    window.BYUMenu = BYUMenu;

})(/* FUSE */);