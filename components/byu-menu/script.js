"use strict";
import * as template from "./template.html";

class BYUMenu extends HTMLElement {

    get showMore () {
        return hasClass(this.shadowRoot.querySelector('.byu-menu-more-menu'));
    }

    set showMore (show) {
        const el = this.shadowRoot.querySelector('.byu-menu-more-menu');
        if (show && !hasClass(el, 'byu-menu-more-expanded')) enableHideClick(this);
        toggleClass(el, 'byu-menu-more-expanded', show);
    }

    constructor() {
        super(); // always call super first
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = template;
    }

    connectedCallback() {
        const component = this;

        updateMoreMenuState(this);
        addSlotListeners(this);

        // when the more button is clicked then show the more menu
        this.shadowRoot.querySelector('.byu-menu-more').addEventListener('click', function() {
            component.showMore = true;
        });

    }


}

function addSlotListeners(component) {
    component.shadowRoot.querySelector('slot')
        .addEventListener('slotchange', e => updateMoreMenuState(component));
}

function enableHideClick(component) {
    const fn = function() {
        if (component.showMore) component.showMore = false;
        document.removeEventListener('click', fn);
    };
    setTimeout(function() {
        document.addEventListener('click', fn);
    });
}

function updateMoreMenuState(component) {
    const children = component.children;
    const length = component.children.length;
    const hasOverflow = length > 6;
    const innerNav = component.shadowRoot.querySelector('.inner-nav');

    if (innerNav) toggleClass(innerNav, 'byu-menu-more-visible', hasOverflow);

    if (hasOverflow) {
        for (let i = 5; i < length; i++) {
            children[i].setAttribute('slot', 'more');
        }
    } else if (length === 6) {
        children[5].setAttribute('slot', '');
    }
}

function hasClass(el, className) {
    const classes = el.className.split(/ +/);
    return classes.indexOf(className) !== -1;
}

function toggleClass(el, className, value) {
    const classes = el.className.split(/ +/);
    const index = classes.indexOf(className);
    const exists = index !== -1;
    const setTo = arguments.length > 2 ? arguments[2] : !exists;
    if (setTo && !exists) {
        classes.push(className);
    } else if (!setTo && exists) {
        classes.splice(index, 1);
    }
    el.className = classes.join(' ');
}

window.customElements.define('byu-menu', BYUMenu);
window.BYUMenu = BYUMenu;
