import { LitElement, html, customElement, property } from 'lit-element';
import style from './byu-menu.scss';

@customElement('byu-menu')
export class BYUMenu extends LitElement {

    static styles = style;
    render() {
        return html`

    <nav class="byu-site-navigation">
        <slot></slot>
    </nav>

    `;
    }
}
