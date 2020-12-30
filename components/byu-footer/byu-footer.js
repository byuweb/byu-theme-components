/*
 *    Copyright 2019 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

// ESLint is disabled for this file because of the complicated SVG in the footer

import { LitElement, html, customElement, css, unsafeCSS } from 'lit-element'
import style from './byu-footer.sass';

@customElement('byu-footer')
export class BYUFooter extends LitElement {

  firstUpdated (_changedProperties) {
    this.classList.add('byu-component-rendered')
  }

  static get styles () {
    return css`${unsafeCSS(style)}`
  }

  render() {
    let date = new Date();
    return html`
    <div class="site-footer-wrapper">
        <div class="site-footer">
            <slot id="slot"></slot>
        </div>
    </div>
    <div class="university-footer">
        <div class="university-footer-gte-1440">
            <div class="university-logo-wrapper">
                <div class="university-logo">
                    <span class="info-text">Brigham Young University</span>
                </div>
                <div class="university-info">
                    <span class="info-text">Provo, UT 84602, USA</span>
                    <span class="info-text"><a class="contact-phone" href="tel:18014224636">801-422-4636</a></span>
                    <span class="info-text">${date.getFullYear()} &copy;<span id="currentYear"></span> All Rights Reserved</span>
                </div>
                <div class="privacy-notice">
                    <span class="info-text"><a href="http://www.byu.edu/privacy" target="_blank">Privacy Notice</a></span>
                </div>
            </div>
        </div>
        <div class="university-footer-lt-1440">
            <div class="university-logo">
              <span class="info-text">Brigham Young University</span>
            </div>
            <div class="university-info">
                <span class="info-text">Provo, UT 84602, USA</span>
                <span class="info-text"><a class="contact-phone" href="tel:18014224636">801-422-4636</a></span>
                <span class="info-text">${date.getFullYear()} &copy;<span id="currentYear"></span> All Rights Reserved</span>
            </div>
        </div>
    </div>
    `;
  }
}
