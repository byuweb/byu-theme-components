(function () { // limit scope

    class BYUMenu extends HTMLElement {

        constructor() {
            super(); // always call super first

            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = this.template();

            // TODO: update styles to match latest design specs
            // TODO: add a gray line under the menu
            // TODO: at some point it will need to interact with the other components (when responsive it needs to shrink if they click on search)
        }

        connectedCallback() {
             // if there are more than 6 links add the extras to a "more" dropdown
            const slot = this.shadowRoot.querySelector("#slot");
            console.log(slot);
            var allLinks = slot.assignedNodes().filter(function (element) { return element instanceof HTMLElement });
            if (allLinks.length > 6)
            {
                // Since we want this one to show when there are 6 or less we need to manually switch it off instead
                // of using nth-child like we do for the others 
                allLinks[5].style.display = "none";
                
                // create the "extra links" dropdown
                var extraLinks = this.shadowRoot.querySelector('#extraLinks');
                extraLinks.style.display = "table-cell";
                
                allLinks = allLinks.slice(5);
                var dropdown = extraLinks.querySelector("#extraLinksDropdown")
				for (var i = 0; i < allLinks.length; i++)
                {
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
        height: 32px;
        background: #ffffff;
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
<div class="secondaryNav">Links go here</div>
`;
        }

    }


    window.customElements.define('byu-menu', BYUMenu);

})();

