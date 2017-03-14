/**
 * Created by ThatJoeMoore on 11/7/16.
 */
"use strict";

import * as template from "./template.html";

class ByuUserInfo extends HTMLElement {

    constructor() {
        super();

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = template;  
    }


    static get observedAttributes() {
        // return ['login-url'];
    }

    attributeChangedCallback(attr, oldval, newval) {
        // switch (attr) {
        //     case 'login-url':
        //         this.loginUrl = newval;
        //         break;
        // }
    }

    connectedCallback() {
        this._addSlotListeners();
        this._addAriaAttributes();
    }

    _addSlotListeners() {

        this._setHasUser();
        const userSlot = this.shadowRoot.querySelector('#user-name');
        userSlot.addEventListener('slotchange', e => {
            this._setHasUser();
        });
    }

    _setHasUser() {
        const userSlot = this.shadowRoot.querySelector('#user-name');
        if (userSlot.assignedNodes().length > 0) {
            this.setAttribute('has-user', '');
            console.log('here');
        }
        else {
            this.removeAttribute('has-user');
        }
    }

    _addAriaAttributes() {
        this.setAttribute('role', 'button');
    }

}

window.customElements.define('byu-user-info', ByuUserInfo);
window.ByuUserInfo = ByuUserInfo;

