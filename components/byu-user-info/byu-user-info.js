/**
 * Created by ThatJoeMoore on 11/7/16.
 */
"use strict";

import * as template from "./template.html";
import * as util from 'byu-web-component-utils';

class ByuUserInfo extends HTMLElement {

    constructor() {
        super();

        let shadowRoot = this.attachShadow({mode: 'open'});
       
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
         util.applyTemplate(this, 'byu-user-info', template, () => {
            this._addSlotListeners();
            this._addAriaAttributes();
         });       
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

