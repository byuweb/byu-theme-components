'use strict';
const template = require('./template.html');
const util = require('byu-web-component-utils');

class BYUSocialMediaLinks extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        util.applyTemplate(this, 'byu-social-media-links', template, () => {
            var idArr = ['facebook', 'twitter', 'instagram', 'youtube', 'pinterest', 'google-plus', 'linkedin', 'rss', 'snapchat'];
            var classArr = ['fa-facebook-official', 'fa-twitter', 'fa-instagram', 'fa-youtube-play', 'fa-pinterest', 'fa-google-plus-official', 'fa-linkedin', 'fa-rss-square', 'fa-snapchat'];

            for (var i = 0; i < idArr.length; i++) {
                const slotId = this.shadowRoot.querySelector("#" + idArr[i]);
                var link = slotId.assignedNodes();

                if (link.length > 0) {
                    link[0].classList.add("fa");
                    link[0].classList.add(classArr[i]);
                }
            }

        });
    }
}

window.customElements.define('byu-social-media-links', BYUSocialMediaLinks);
window.BYUSocialMediaLinks = BYUSocialMediaLinks;
