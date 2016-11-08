/**
 * Created by ThatJoeMoore on 11/7/16.
 */


class ByuUserLogin extends HTMLElement {

    set loginUrl(value) {
        let link = this.shadowRoot.querySelector('.link');

        if (value) {
            this.setAttribute('login-url', value);
            if (link) {
                link.setAttribute('href', value);
            }
        } else {
            this.removeAttribute('login-url');
            if (link) {
                link.removeAttribute('href');
            }
        }
    }

    get loginUrl() {
        return this.getAttribute('login-url');
    }

    constructor() {
        super();

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = this.template();
    }

    static get observedAttributes() {
        return ['login-url'];
    }

    attributeChangedCallback(attr, oldval, newval) {
        switch (attr) {
            case 'login-url':
                this.loginUrl = newval;
                break;
        }
    }

    template() {
        return `
<style>
    :host {
        color: white;
        font-size: 13px;
        font-family: "Gotham Book", sans-serif;
        text-transform: uppercase;
        contain: content;/* New CSS feature that gives us a performance win */
    }
    .link {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        color: white;
    }
    .icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        box-sizing: border-box;
        border: 1px solid white;
        padding: 4px;
        display: inline-block;
        margin-left: 4px;
    }
    #delegate::slotted(*) {
        display: none;
    }
</style>
<div>
    <a class="link" href="${this.loginUrl||'#'}">
        <span class="text">Sign In</span>
        <img class="icon" src="../img/user.svg">
    </a>
    <slot id="delegate" style="display: none;" hidden></slot>
</div>
`;
    }

    connectedCallback() {
        this._addSlotListeners();
        this._addAriaAttributes();
    }

    _addSlotListeners() {
        this._setUrlFromLightDom();
        const slot = this.shadowRoot.querySelector('#delegate');
        slot.addEventListener('slotchange', e => {
            this._setUrlFromLightDom();
        });
    }

    _addAriaAttributes() {
        this.setAttribute('role', 'button');
    }

    _setUrlFromLightDom() {
        let slot = this.shadowRoot.querySelector('#delegate');
        let nodes = slot.assignedNodes().filter(node => node instanceof HTMLAnchorElement);
        if (!nodes.length) {
            return;
        }
        let link = nodes[0];
        if (link.href) {
            console.log('setting login url from', link);
            this.loginUrl = link.href;
        }
    }

}


window.customElements.define('byu-user-login', ByuUserLogin);
