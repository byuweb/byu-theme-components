/**
 * Created by ThatJoeMoore on 11/7/16.
 */


class ByuUserMenu extends HTMLElement {

    set logoutUrl(value) {
        let link = this.shadowRoot.querySelector('.logout-link');

        if (value) {
            this.setAttribute('logout-url', value);
            if (link) {
                link.setAttribute('href', value);
            }
        } else {
            this.removeAttribute('logout-url');
            if (link) {
                link.removeAttribute('href');
            }
        }
    }

    get logoutUrl() {
        return this.getAttribute('logout-url') || "https://cas.byu.edu/cas/logout";
    }

    set name(value) {
        if (value) {
            this.setAttribute('name', value);
        } else {
            this.removeAttribute('name');
        }
    }

    get name() {
        var attr = this.getAttribute('name');
        return attr || 'User Menu';
    }

    constructor() {
        super();

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = this.template();
    }

    static get observedAttributes() {
        return ['logout-url', 'name'];
    }

    attributeChangedCallback(attr, oldval, newval) {
        switch (attr) {
            case 'login-url':
                this.loginUrl = newval;
                break;
            case 'name':
                this.name = newval;
                break;
        }
    }

    template() {
        return `
<style>
    :host {
        position: relative;
        color: white;
        font-size: 13px;
        font-family: "Gotham Book", sans-serif;
    }
    #button {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        color: white;
        padding: 8px;
        text-transform: uppercase;
        user-select: none;
    }
    .icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        box-sizing: border-box;
        border: 1px solid white;
        padding: 4px;
        display: inline-block;
        margin: 0 8px;
    }
    #delegate::slotted(*) {
        display: none;
    }
    #dropdown {
        top: 100%;
        right: 0;
        z-index: 100;
        position: absolute;
        display: none;
        background-color: white;
        padding: 1.5em;
        min-width: 100%;
        box-sizing: border-box;
        font-size: 16px;
        border: 1px solid #002e5d;
        border-top-width: 0;
        margin-right: -1px;
        /*-webkit-box-shadow: 0 0 7px 0 rgba(0,0,0,0.75);*/
        /*-moz-box-shadow: 0 0 7px 0 rgba(0,0,0,0.75);*/
        /*box-shadow: 0 0 7px 0 rgba(0,0,0,0.75);*/
    }
    
    :host-context([open]) #button { 
        background-color: white;
        color: #002e5d;
        z-index: 101;
    }
    
    :host-context([open]) #dropdown {
        display: block;
    }
    
    :host-context([open]) .icon {
        border-color: #002e5d;
    }
    
    #dropdown>a {
        color: #002e5d;
        text-decoration: none;
        display: block;
        padding: 0.5em 1.5em;
        border-top: 1px solid #e5e5e5;
        font-weight: lighter;
        white-space: nowrap;
    }
    #dropdown>a:hover {
        color: white;
        /*font-weight: normal;*/
        background-color: #002e5d;
    }
    #dropdown>a:last-child {
        border-bottom: 1px solid #e5e5e5;
    }
    
    #dropdown ::slotted(a) {
        color: #002e5d;
        text-decoration: none;
        display: block;
        padding: 0.5em 1.5em;
        border-top: 1px solid #e5e5e5;
        font-weight: lighter;
        white-space: nowrap;
    }
    #dropdown ::slotted(a:hover) {
        color: white;
        /*font-weight: normal;*/
        background-color: #002e5d;
    }
</style>
<div id="button" role="button">
    <span class="text">Account</span>
    <img class="icon" src="../img/user.svg">
</div>
<div id="dropdown">
    <a href="https://my.byu.edu">MyBYU</a>
    <a href="https://link.byu.edu/PERSUMM">Profile</a>
    <a href="https://link.byu.edu/CESAUTH">Change Password</a>
    <slot id="menu" name="menu"></slot>
    <a href="${this.logoutUrl}">Sign Out</a>
</div>
<slot id="signout-delegate" style="display: none;" hidden></slot>
`;
        //<a class="link" ${this.loginUrl?'href="'+this.loginUrl:''}">
        //</a>
    }

    connectedCallback() {
        this._addClickListeners();
        this._addSlotListeners();
        this._addAriaAttributes();
    }

    _addClickListeners() {
        this.shadowRoot.querySelector('#button').addEventListener('click', e => {
            this._toggleMenu();
        });
    }

    _toggleMenu() {
        this.open = !this.open;
    }

    set open(val) {
        if (val) {
            this.setAttribute('open', '');
        } else {
            this.removeAttribute('open');
        }
    }

    get open() {
        return this.hasAttribute('open');
    }

    _addSlotListeners() {
        this._setUrlFromLightDom();
        const slot = this.shadowRoot.querySelector('#signout-delegate');
        slot.addEventListener('slotchange', e => {
            this._setUrlFromLightDom();
        });
    }

    _addAriaAttributes() {
        this.setAttribute('role', 'button');
    }

    _setUrlFromLightDom() {
        let slot = this.shadowRoot.querySelector('#signout-delegate');
        let nodes = slot.assignedNodes().filter(node => node instanceof HTMLAnchorElement);
        if (!nodes.length) {
            return;
        }
        let link = nodes[0];
        if (link.href) {
            this.logoutUrl = link.href;
        }
    }

}


window.customElements.define('byu-user-menu', ByuUserMenu);
