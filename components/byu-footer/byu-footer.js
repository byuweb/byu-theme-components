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
        <div class="university-logo-wrapper">
            <a href="https://home.byu.edu/home/" target="_blank">
                <svg class="university-logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 389.8 14" style="enable-background:new 0 0 389.8 14;" xml:space="preserve">
                    <style type="text/css">
                        .st0{fill:#FFFFFF;}
                    </style>
                    <g>
                        <path class="st0" d="M5.9,0.3c2.5,0,3.9,1.2,3.9,3.2v0.6c0,1.6-0.8,2.4-2.2,2.8v0.1C9.1,7.3,10,8.2,10,9.7v0.7
                            c0,2.1-1.4,3.3-3.9,3.3H0V0.3H5.9z M2.8,5.9h2.6c1,0,1.6-0.5,1.6-1.4V3.9c0-0.8-0.6-1.3-1.6-1.3H2.8V5.9z M2.8,11.4h2.8
                            c1,0,1.6-0.5,1.6-1.4V9.4c0-0.9-0.6-1.4-1.7-1.4H2.8V11.4z"/>
                        <path class="st0" d="M20.6,13.7h-2.9V0.3h5.8c2.8,0,4.3,1.4,4.3,3.7v1c0,1.7-0.9,2.9-2.4,3.4l2.9,5.2h-3.1l-2.6-4.9h-1.9V13.7z
                            M20.6,6.6H23c1.4,0,2-0.6,2-1.6V4.2c0-1-0.6-1.6-2-1.6h-2.4V6.6z"/>
                        <path class="st0" d="M38.6,0.3v13.4h-2.9V0.3H38.6z"/>
                        <path class="st0" d="M57,4.4v0.5h-2.8V4.7c0-1.4-0.7-2.2-2.3-2.2c-1.7,0-2.7,1.2-2.7,3.1v3c0,1.9,1,3.1,2.6,3.1
                            c1.5,0,2.5-1,2.5-2.4V8.6h-2.4v-2h5.2v7.1h-1.3l-0.4-2c-0.7,1.2-1.8,2.3-4,2.3c-3,0-5-2.1-5-5.4v-3c0-3.3,2.1-5.5,5.6-5.5
                            C55.2,0,57,1.7,57,4.4z"/>
                        <path class="st0" d="M68,0.3v5.3h4.7V0.3h2.9v13.4h-2.9V8.2H68v5.5h-2.9V0.3H68z"/>
                        <path class="st0" d="M91.2,11.2h-4.8l-0.8,2.5h-2.8l4.4-13.5h3.3l4.4,13.5h-3L91.2,11.2z M87.1,8.9h3.4l-1.7-5.5h0L87.1,8.9z"/>
                        <path class="st0" d="M106.2,0.3l3.1,9.2h0l3-9.2h4.1v13.4h-2.7V3.6h0l-3.3,10.1h-2.2l-3.4-10.1h0v10.1h-2.6V0.3H106.2z"/>
                        <path class="st0" d="M135.3,0.3l2.8,5.7l2.8-5.7h3.1l-4.4,8.3v5.1h-2.9V8.6l-4.4-8.3H135.3z"/>
                        <path class="st0" d="M161.6,5.7v2.6c0,3.7-2.2,5.7-5.6,5.7c-3.5,0-5.6-1.9-5.6-5.7V5.7c0-3.7,2.2-5.7,5.6-5.7
                            C159.4,0,161.6,1.9,161.6,5.7z M153.3,5.6v2.8c0,2.2,1,3.1,2.7,3.1c1.7,0,2.7-1,2.7-3.1V5.6c0-2.2-1-3.1-2.7-3.1
                            C154.3,2.5,153.3,3.4,153.3,5.6z"/>
                        <path class="st0" d="M172.1,0.3v8.6c0,1.7,0.8,2.6,2.4,2.6s2.4-0.9,2.4-2.6V0.3h2.8v8.5c0,3.3-1.7,5.2-5.2,5.2
                            c-3.5,0-5.2-1.9-5.2-5.2V0.3H172.1z"/>
                        <path class="st0" d="M190.4,0.3l5.1,8.6h0l0-8.6h2.6v13.4h-2.8L190.1,5h0l0,8.7h-2.6V0.3H190.4z"/>
                        <path class="st0" d="M216.6,4.4v0.5h-2.8V4.7c0-1.4-0.7-2.2-2.3-2.2c-1.7,0-2.7,1.2-2.7,3.1v3c0,1.9,1,3.1,2.6,3.1
                            c1.5,0,2.5-1,2.5-2.4V8.6h-2.4v-2h5.2v7.1h-1.3l-0.4-2c-0.7,1.2-1.8,2.3-4,2.3c-3,0-5-2.1-5-5.4v-3c0-3.3,2.1-5.5,5.6-5.5
                            C214.8,0,216.6,1.7,216.6,4.4z"/>
                        <path class="st0" d="M236.2,0.3v8.6c0,1.7,0.8,2.6,2.4,2.6c1.5,0,2.4-0.9,2.4-2.6V0.3h2.8v8.5c0,3.3-1.7,5.2-5.2,5.2
                            c-3.5,0-5.2-1.9-5.2-5.2V0.3H236.2z"/>
                        <path class="st0" d="M254.5,0.3l5.1,8.6h0l0-8.6h2.6v13.4h-2.8L254.2,5h0l0,8.7h-2.6V0.3H254.5z"/>
                        <path class="st0" d="M273.5,0.3v13.4h-2.9V0.3H273.5z"/>
                        <path class="st0" d="M284,0.3l2.9,9.5h0l2.9-9.5h3l-4.5,13.5h-2.9l-4.5-13.5H284z"/>
                        <path class="st0" d="M309.1,0.3v2.5h-6.3v3h4.9v2.3h-4.9v3.2h6.4v2.5h-9.2V0.3H309.1z"/>
                        <path class="st0" d="M319.1,13.7h-2.9V0.3h5.8c2.8,0,4.3,1.4,4.3,3.7v1c0,1.7-0.9,2.9-2.4,3.4l2.9,5.2h-3.1l-2.6-4.9h-1.9V13.7z
                            M319.1,6.6h2.3c1.4,0,2.1-0.6,2.1-1.6V4.2c0-1-0.6-1.6-2-1.6h-2.4V6.6z"/>
                        <path class="st0" d="M343.8,4.1v0.4h-2.9V4.2c0-1-0.7-1.8-2.3-1.8c-1.3,0-2,0.6-2,1.4c0,1,0.7,1.3,2.9,2c3.4,0.9,4.4,1.9,4.4,4.1
                            c0,2.5-2.1,4-5.2,4c-3.6,0-5.2-1.6-5.2-4.1V9.2h2.9v0.4c0,1.2,0.8,2,2.5,2c1.4,0,2.2-0.5,2.2-1.5c0-1.1-0.5-1.3-3-2.1
                            c-3.2-0.8-4.3-1.8-4.3-4.1c0-2.3,1.9-3.9,5-3.9C342.2,0.1,343.8,1.7,343.8,4.1z"/>
                        <path class="st0" d="M354.5,0.3v13.4h-2.9V0.3H354.5z"/>
                        <path class="st0" d="M372,0.3v2.5h-3.8v10.9h-2.9V2.8h-3.8V0.3H372z"/>
                        <path class="st0" d="M381.2,0.3L384,6l2.8-5.7h3.1l-4.4,8.3v5.1h-2.9V8.6l-4.4-8.3H381.2z"/>
                    </g>
                    </svg>
            </a>
        </div>
        <div class="university-info">
            <span class="info-text">Provo, UT 84602, USA</span>
            <span class="info-text"><a class="contact-phone" href="tel:18014224636">801-422-4636</a></span>
            <span class="info-text">${date.getFullYear()} &copy;<span id="currentYear"></span> All Rights Reserved</span>
            
        </div>
    </div>
    `;
  }
}
