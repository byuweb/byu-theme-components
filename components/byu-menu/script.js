import * as template from "./template.html";

class BYUMenu extends HTMLElement {

    constructor() {
        super(); // always call super first
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = template;
    }

    connectedCallback() {
        this._maybeAddMoreMenu();
        this._addSlotListeners();
    }

    _maybeAddMoreMenu() {
        // if there are more than 6 links add the extras to a "more" dropdown
        const slot = this.shadowRoot.querySelector("#slot");

        let allLinks = slot.assignedNodes().filter(function (element) {
            return element instanceof HTMLElement
        });

        if (allLinks.length > 6) {
            this.setAttribute('has-extra-links', '');

            let extras = allLinks.slice(5);
            let dropdown = this.shadowRoot.getElementById("extraLinksDropdown");
            for (let i = 0; i < extras.length; i++) {
                let listItem = document.createElement("li");
                //listItem.appendChild(extras[i]);
                listItem.appendChild(extras[i].cloneNode());
                dropdown.appendChild(listItem);
            } 
        } else {
            this.removeAttribute('has-extra-links');
        }
    }

    _addSlotListeners() {
        this.shadowRoot.getElementById('slot')
            .addEventListener('slotchange', e => this._maybeAddMoreMenu())
    }
}

window.customElements.define('byu-menu', BYUMenu);
window.BYUMenu = BYUMenu;

