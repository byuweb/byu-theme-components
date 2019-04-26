import { LitElement, html, customElement, property } from 'lit-element';
import style from './byu-footer.scss';

@customElement('byu-footer')
export class BYUFooter extends LitElement {

  @property()
  foo = 'footer property';

  static styles = style;

  render(){
    return html`
        <p>${this.foo}</p>
    `;
  }
}