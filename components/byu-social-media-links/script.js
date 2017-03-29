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
            var idArr = ['facebook', 'instagram', 'twitter', 'googleplus', 'linkedin', 'youtube'];
            var classArr = ['fa-facebook', 'fa-instagram', 'fa-twitter', 'fa-google-plus', 'fa-linkedin', 'fa-youtube-play'];

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
