/**
 * Created by ThatJoeMoore on 11/7/16.
 */

(function (template) {
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
            shadowRoot.innerHTML = template;
            //Hack to make sure that the proper login URL gets set in our template.
            this.loginUrl = this.loginUrl;
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
    window.ByuUserLogin = ByuUserLogin;

})(`<style>
    /* FUSE */
</style>
<div>
    <a class="link">
        <span class="text">Sign In</span>
        <img class="icon" src="../img/user.svg">
    </a>
    <slot id="delegate" style="display: none;" hidden></slot>
</div>
`);
