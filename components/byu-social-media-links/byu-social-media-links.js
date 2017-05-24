'use strict';
import template from "./byu-social-media-links.html";
import * as util from "byu-web-component-utils";

const SOCIAL_NAMES = {
    'facebook': 'Facebook',
    'twitter': 'Twitter',
    'instagram': 'Instagram',
    'youtube': 'YouTube',
    'pinterest': 'Pinterest',
    'google-plus': 'Google+',
    'googleplus': 'Google+',
    'gplus': 'Google+',
    'linkedin': 'LinkedIn',
    'rss': 'RSS',
    'snapchat': 'Snapchat'
};

const SOCIAL_IDS = Object.getOwnPropertyNames(SOCIAL_NAMES);

class BYUSocialMediaLinks extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        util.applyTemplate(this, 'byu-social-media-links', template, () => {
            let main = this.shadowRoot.querySelector('#social-main');
            applyTitleToChildren(main);

            SOCIAL_IDS.forEach(id => {
                const slot = this.shadowRoot.querySelector('#social-deprecated-' + id);
                if (!slot) return;

                applyTitleToChildren(slot);
                //We're still supporting the old way, but it's deprecated and people should move on.
                if (slot.assignedNodes().length > 0) {
                    console.log(`[WARNING] byu-social-media-links: deprecated usage of slot="${id}". Replace with class="${id}":`, this);
                }
            });
        });
    }
}

window.customElements.define('byu-social-media-links', BYUSocialMediaLinks);
window.BYUSocialMediaLinks = BYUSocialMediaLinks;

function applyTitleToChildren(slotElement) {
    let kids = slotElement.assignedNodes();
    kids.filter(k => k instanceof HTMLElement)
    //Only grab the ones that don't already have a title
        .filter(k => !k.title)
        .forEach(kid => {
            let kind = detectSocialKind(kid);
            if (!kind) {
                return;
            }
            //The spaces are a hack to avoid triggering adblockplus.
            kid.title = ' ' + SOCIAL_NAMES[kind] + ' ';
        });
}

function detectSocialKind(element) {
    if (element.hasAttribute('slot')) return element.getAttribute('slot');
    for (let i = 0; i < SOCIAL_IDS.length; i++) {
        let id = SOCIAL_IDS[i];
        if (element.classList.contains(id)) {
            return id;
        }
    }
    return null;
}
