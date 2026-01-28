!function(){"use strict";function e(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const t=window,n=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),s=new WeakMap;let i=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(n&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&s.set(t,e))}return e}toString(){return this.cssText}};const o=(e,...t)=>{const n=1===e.length?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1],e[0]);return new i(n,e,r)},a=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new i("string"==typeof e?e:e+"",void 0,r))(t)})(e):e;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var l;const c=window,h=c.trustedTypes,p=h?h.emptyScript:"",u=c.reactiveElementPolyfillSupport,d={toAttribute(e,t){switch(t){case Boolean:e=e?p:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},m=(e,t)=>t!==e&&(t==t||e==e),f={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:m},g="finalized";let b=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);void 0!==r&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=f){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||f}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Ep(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,n;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const r=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{n?e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):r.forEach(n=>{const r=document.createElement("style"),s=t.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=n.cssText,e.appendChild(r)})})(r,this.constructor.elementStyles),r}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=f){var r;const s=this.constructor._$Ep(e,n);if(void 0!==s&&!0===n.reflect){const i=(void 0!==(null===(r=n.converter)||void 0===r?void 0:r.toAttribute)?n.converter:d).toAttribute(t,n.type);this._$El=e,null==i?this.removeAttribute(s):this.setAttribute(s,i),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,s=r._$Ev.get(e);if(void 0!==s&&this._$El!==s){const e=r.getPropertyOptions(s),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(n=e.converter)||void 0===n?void 0:n.fromAttribute)?e.converter:d;this._$El=s,this[s]=i.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((e,t)=>this[t]=e),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(n)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach((e,t)=>this._$EO(t,this[t],e)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var v;b[g]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:b}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const y=window,k=y.trustedTypes,x=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,_="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,w="?"+$,A=`<${w}>`,S=document,E=()=>S.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,C=Array.isArray,N="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,O=/>/g,P=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,I=/"/g,M=/^(?:script|style|textarea|title)$/i,D=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),U=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),B=new WeakMap,j=S.createTreeWalker(S,129,null,!1);function F(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(t):t}const q=(e,t)=>{const n=e.length-1,r=[];let s,i=2===t?"<svg>":"",o=R;for(let t=0;t<n;t++){const n=e[t];let a,l,c=-1,h=0;for(;h<n.length&&(o.lastIndex=h,l=o.exec(n),null!==l);)h=o.lastIndex,o===R?"!--"===l[1]?o=z:void 0!==l[1]?o=O:void 0!==l[2]?(M.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=P):void 0!==l[3]&&(o=P):o===P?">"===l[0]?(o=null!=s?s:R,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?P:'"'===l[3]?I:L):o===I||o===L?o=P:o===z||o===O?o=R:(o=P,s=void 0);const p=o===P&&e[t+1].startsWith("/>")?" ":"";i+=o===R?n+A:c>=0?(r.push(a),n.slice(0,c)+_+n.slice(c)+$+p):n+$+(-2===c?(r.push(void 0),t):p)}return[F(e,i+(e[n]||"<?>")+(2===t?"</svg>":"")),r]};class K{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,i=0;const o=e.length-1,a=this.parts,[l,c]=q(e,t);if(this.el=K.createElement(l,n),j.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=j.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes()){const e=[];for(const t of r.getAttributeNames())if(t.endsWith(_)||t.startsWith($)){const n=c[i++];if(e.push(t),void 0!==n){const e=r.getAttribute(n.toLowerCase()+_).split($),t=/([.?@])?(.*)/.exec(n);a.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?Q:"?"===t[1]?Y:"@"===t[1]?J:V})}else a.push({type:6,index:s})}for(const t of e)r.removeAttribute(t)}if(M.test(r.tagName)){const e=r.textContent.split($),t=e.length-1;if(t>0){r.textContent=k?k.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],E()),j.nextNode(),a.push({type:2,index:++s});r.append(e[t],E())}}}else if(8===r.nodeType)if(r.data===w)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=r.data.indexOf($,e+1));)a.push({type:7,index:s}),e+=$.length-1}s++}}static createElement(e,t){const n=S.createElement("template");return n.innerHTML=e,n}}function W(e,t,n=e,r){var s,i,o,a;if(t===U)return t;let l=void 0!==r?null===(s=n._$Co)||void 0===s?void 0:s[r]:n._$Cl;const c=T(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,n,r)),void 0!==r?(null!==(o=(a=n)._$Co)&&void 0!==o?o:a._$Co=[])[r]=l:n._$Cl=l),void 0!==l&&(t=W(e,l._$AS(e,t.values),l,r)),t}class Z{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:S).importNode(n,!0);j.currentNode=s;let i=j.nextNode(),o=0,a=0,l=r[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new G(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new ee(i,this,e)),this._$AV.push(t),l=r[++a]}o!==(null==l?void 0:l.index)&&(i=j.nextNode(),o++)}return j.currentNode=S,s}v(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class G{constructor(e,t,n,r){var s;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),T(e)?e===H||null==e||""===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==U&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>C(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==H&&T(this._$AH)?this._$AA.nextSibling.data=e:this.$(S.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,s="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=K.createElement(F(r.h,r.h[0]),this.options)),r);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.v(n);else{const e=new Z(s,this),t=e.u(this.options);e.v(n),this.$(t),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return void 0===t&&B.set(e.strings,t=new K(e)),t}T(e){C(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new G(this.k(E()),this.k(E()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class V{constructor(e,t,n,r,s){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let i=!1;if(void 0===s)e=W(this,e,t,0),i=!T(e)||e!==this._$AH&&e!==U,i&&(this._$AH=e);else{const r=e;let o,a;for(e=s[0],o=0;o<s.length-1;o++)a=W(this,r[n+o],t,o),a===U&&(a=this._$AH[o]),i||(i=!T(a)||a!==this._$AH[o]),a===H?e=H:e!==H&&(e+=(null!=a?a:"")+s[o+1]),this._$AH[o]=a}i&&!r&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Q extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}}const X=k?k.emptyScript:"";class Y extends V{constructor(){super(...arguments),this.type=4}j(e){e&&e!==H?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class J extends V{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=W(this,e,t,0))&&void 0!==n?n:H)===U)return;const r=this._$AH,s=e===H&&r!==H||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==H&&(r===H||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class ee{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}}const te={I:G},ne=y.litHtmlPolyfillSupport;null==ne||ne(K,G),(null!==(v=y.litHtmlVersions)&&void 0!==v?v:y.litHtmlVersions=[]).push("2.8.0");const re=(e,t,n)=>{var r,s;const i=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:t;let o=i._$litPart$;if(void 0===o){const e=null!==(s=null==n?void 0:n.renderBefore)&&void 0!==s?s:null;i._$litPart$=o=new G(t.insertBefore(E(),e),e,void 0,null!=n?n:{})}return o._$AI(e),o
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */};var se,ie;let oe=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=re(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return U}};oe.finalized=!0,oe._$litElement$=!0,null===(se=globalThis.litElementHydrateSupport)||void 0===se||se.call(globalThis,{LitElement:oe});const ae=globalThis.litElementPolyfillSupport;null==ae||ae({LitElement:oe}),(null!==(ie=globalThis.litElementVersions)&&void 0!==ie?ie:globalThis.litElementVersions=[]).push("3.3.3");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const le=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function ce(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):le(e,t)}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const he=2,pe=e=>(...t)=>({_$litDirective$:e,values:t});let ue=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const{I:de}=te,me=(e,t)=>void 0!==(null==e?void 0:e._$litType$),fe=()=>document.createComment(""),ge=(e,t,n)=>{var r;const s=e._$AA.parentNode,i=e._$AB;if(void 0===n){const t=s.insertBefore(fe(),i),r=s.insertBefore(fe(),i);n=new de(t,r,e,e.options)}else{const t=n._$AB.nextSibling,o=n._$AM,a=o!==e;if(a){let t;null===(r=n._$AQ)||void 0===r||r.call(n,e),n._$AM=e,void 0!==n._$AP&&(t=e._$AU)!==o._$AU&&n._$AP(t)}if(t!==i||a){let e=n._$AA;for(;e!==t;){const t=e.nextSibling;s.insertBefore(e,i),e=t}}}return n},be={},ve=(e,t=be)=>e._$AH=t,ye=e=>e._$AH,ke=e=>(e=>{var t;return null!=(null===(t=null==e?void 0:e._$litType$)||void 0===t?void 0:t.h)})(e)?e._$litType$.h:e.strings,xe=pe(class extends ue{constructor(e){super(e),this.tt=new WeakMap}render(e){return[e]}update(e,[t]){const n=me(this.et)?ke(this.et):null,r=me(t)?ke(t):null;if(null!==n&&(null===r||n!==r)){const t=ye(e).pop();let r=this.tt.get(n);if(void 0===r){const e=document.createDocumentFragment();r=re(H,e),r.setConnected(!1),this.tt.set(n,r)}ve(r,[t]),ge(r,0,t)}if(null!==r){if(null===n||n!==r){const t=this.tt.get(r);if(void 0!==t){const n=ye(t).pop();(e=>{e._$AR()})(e),ge(e,0,n),ve(e,[n])}}this.et=t}else this.et=void 0;return this.render(t)}}),_e=(e,t)=>{var n,r;const s=e._$AN;if(void 0===s)return!1;for(const e of s)null===(r=(n=e)._$AO)||void 0===r||r.call(n,t,!1),_e(e,t);return!0},$e=e=>{let t,n;do{if(void 0===(t=e._$AM))break;n=t._$AN,n.delete(e),e=t}while(0===(null==n?void 0:n.size))},we=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(void 0===n)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ee(t)}};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function Ae(e){void 0!==this._$AN?($e(this),this._$AM=e,we(this)):this._$AM=e}function Se(e,t=!1,n=0){const r=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)_e(r[e],!1),$e(r[e]);else null!=r&&(_e(r,!1),$e(r));else _e(this,e)}const Ee=e=>{var t,n,r,s;e.type==he&&(null!==(t=(r=e)._$AP)&&void 0!==t||(r._$AP=Se),null!==(n=(s=e)._$AQ)&&void 0!==n||(s._$AQ=Ae))};let Te=class extends ue{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),we(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?null===(n=this.reconnected)||void 0===n||n.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),t&&(_e(this,e),$e(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class Ce{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class Ne{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise(e=>this.Z=e))}resume(){var e;null===(e=this.Z)||void 0===e||e.call(this),this.Y=this.Z=void 0}}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const Re=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,ze=1073741823;const Oe=pe(class extends Te{constructor(){super(...arguments),this._$C_t=ze,this._$Cwt=[],this._$Cq=new Ce(this),this._$CK=new Ne}render(...e){var t;return null!==(t=e.find(e=>!Re(e)))&&void 0!==t?t:U}update(e,t){const n=this._$Cwt;let r=n.length;this._$Cwt=t;const s=this._$Cq,i=this._$CK;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$C_t);e++){const o=t[e];if(!Re(o))return this._$C_t=e,o;e<r&&o===n[e]||(this._$C_t=ze,r=0,Promise.resolve(o).then(async e=>{for(;i.get();)await i.get();const t=s.deref();if(void 0!==t){const n=t._$Cwt.indexOf(o);n>-1&&n<t._$C_t&&(t._$C_t=n,t.setValue(e))}}))}return U}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}});
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class Pe extends ue{constructor(e){if(super(e),this.et=H,e.type!==he)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===H||null==e)return this.ft=void 0,this.et=e;if(e===U)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Pe.directiveName="unsafeHTML",Pe.resultType=1;const Le=pe(Pe);function Ie(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Me={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const De=/[&<>"']/,Ue=new RegExp(De.source,"g"),He=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Be=new RegExp(He.source,"g"),je={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Fe=e=>je[e];function qe(e,t){if(t){if(De.test(e))return e.replace(Ue,Fe)}else if(He.test(e))return e.replace(Be,Fe);return e}const Ke=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function We(e){return e.replace(Ke,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const Ze=/(^|[^\[])\^/g;function Ge(e,t){e="string"==typeof e?e:e.source,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(Ze,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n}const Ve=/[^\w:]/g,Qe=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Xe(e,t,n){if(e){let e;try{e=decodeURIComponent(We(n)).replace(Ve,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!Qe.test(n)&&(n=function(e,t){Ye[" "+e]||(Je.test(e)?Ye[" "+e]=e+"/":Ye[" "+e]=st(e,"/",!0));e=Ye[" "+e];const n=-1===e.indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(et,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(tt,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}const Ye={},Je=/^[^:]+:\/*[^/]*$/,et=/^([^:]+:)[\s\S]*$/,tt=/^([^:]+:\/*[^/]*)[\s\S]*$/;const nt={exec:function(){}};function rt(e,t){const n=e.replace(/\|/g,(e,t,n)=>{let r=!1,s=t;for(;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"}).split(/ \|/);let r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function st(e,t,n){const r=e.length;if(0===r)return"";let s=0;for(;s<r;){const i=e.charAt(r-s-1);if(i!==t||n){if(i===t||!n)break;s++}else s++}return e.slice(0,r-s)}function it(e,t){if(t<1)return"";let n="";for(;t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}function ot(e,t,n,r){const s=t.href,i=t.title?qe(t.title):null,o=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){r.state.inLink=!0;const e={type:"link",raw:n,href:s,title:i,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,e}return{type:"image",raw:n,href:s,title:i,text:qe(o)}}class at{constructor(e){this.options=e||Me}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:st(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t){const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const r=n[1];return t.split("\n").map(e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return n.length>=r.length?e.slice(r.length):e}).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=st(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,""),n=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(e);return this.lexer.state.top=n,{type:"blockquote",raw:t[0],tokens:r,text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,r,s,i,o,a,l,c,h,p,u,d,m=t[1].trim();const f=m.length>1,g={type:"list",raw:"",ordered:f,start:f?+m.slice(0,-1):"",loose:!1,items:[]};m=f?`\\d{1,9}\\${m.slice(-1)}`:`\\${m}`,this.options.pedantic&&(m=f?m:"[*+-]");const b=new RegExp(`^( {0,3}${m})((?:[\t ][^\\n]*)?(?:\\n|$))`);for(;e&&(d=!1,t=b.exec(e))&&!this.rules.block.hr.test(e);){if(n=t[0],e=e.substring(n.length),c=t[2].split("\n",1)[0].replace(/^\t+/,e=>" ".repeat(3*e.length)),h=e.split("\n",1)[0],this.options.pedantic?(i=2,u=c.trimLeft()):(i=t[2].search(/[^ ]/),i=i>4?1:i,u=c.slice(i),i+=t[1].length),a=!1,!c&&/^ *$/.test(h)&&(n+=h+"\n",e=e.substring(h.length+1),d=!0),!d){const t=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),r=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),s=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),o=new RegExp(`^ {0,${Math.min(3,i-1)}}#`);for(;e&&(p=e.split("\n",1)[0],h=p,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!s.test(h))&&!o.test(h)&&!t.test(h)&&!r.test(e);){if(h.search(/[^ ]/)>=i||!h.trim())u+="\n"+h.slice(i);else{if(a)break;if(c.search(/[^ ]/)>=4)break;if(s.test(c))break;if(o.test(c))break;if(r.test(c))break;u+="\n"+h}a||h.trim()||(a=!0),n+=p+"\n",e=e.substring(p.length+1),c=h.slice(i)}}g.loose||(l?g.loose=!0:/\n *\n *$/.test(n)&&(l=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(u),r&&(s="[ ] "!==r[0],u=u.replace(/^\[[ xX]\] +/,""))),g.items.push({type:"list_item",raw:n,task:!!r,checked:s,loose:!1,text:u}),g.raw+=n}g.items[g.items.length-1].raw=n.trimRight(),g.items[g.items.length-1].text=u.trimRight(),g.raw=g.raw.trimRight();const v=g.items.length;for(o=0;o<v;o++)if(this.lexer.state.top=!1,g.items[o].tokens=this.lexer.blockTokens(g.items[o].text,[]),!g.loose){const e=g.items[o].tokens.filter(e=>"space"===e.type),t=e.length>0&&e.some(e=>/\n.*\n/.test(e.raw));g.loose=t}if(g.loose)for(o=0;o<v;o++)g.items[o].loose=!0;return g}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};if(this.options.sanitize){const n=this.options.sanitizer?this.options.sanitizer(t[0]):qe(t[0]);e.type="paragraph",e.text=n,e.tokens=this.lexer.inline(n)}return e}}def(e){const t=this.rules.block.def.exec(e);if(t){const e=t[1].toLowerCase().replace(/\s+/g," "),n=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:n,title:r}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:rt(t[1]).map(e=>({text:e})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,r,s,i,o=e.align.length;for(n=0;n<o;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(o=e.rows.length,n=0;n<o;n++)e.rows[n]=rt(e.rows[n],e.header.length).map(e=>({text:e}));for(o=e.header.length,r=0;r<o;r++)e.header[r].tokens=this.lexer.inline(e.header[r].text);for(o=e.rows.length,r=0;r<o;r++)for(i=e.rows[r],s=0;s<i.length;s++)i[s].tokens=this.lexer.inline(i[s].text);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:qe(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):qe(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=st(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,s=0;for(;s<n;s++)if("\\"===e[s])s++;else if(e[s]===t[0])r++;else if(e[s]===t[1]&&(r--,r<0))return s;return-1}(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),ot(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return ot(n,e,n[0],this.lexer)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r)return;if(r[3]&&n.match(/[\p{L}\p{N}]/u))return;const s=r[1]||r[2]||"";if(!s||s&&(""===n||this.rules.inline.punctuation.exec(n))){const n=r[0].length-1;let s,i,o=n,a=0;const l="*"===r[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+n);null!=(r=l.exec(t));){if(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!s)continue;if(i=s.length,r[3]||r[4]){o+=i;continue}if((r[5]||r[6])&&n%3&&!((n+i)%3)){a+=i;continue}if(o-=i,o>0)continue;i=Math.min(i,i+o+a);const t=e.slice(0,n+r.index+(r[0].length-s.length)+i);if(Math.min(n,i)%2){const e=t.slice(1,-1);return{type:"em",raw:t,text:e,tokens:this.lexer.inlineTokens(e)}}const l=t.slice(2,-2);return{type:"strong",raw:t,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=qe(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let e,r;return"@"===n[2]?(e=qe(this.options.mangle?t(n[1]):n[1]),r="mailto:"+e):(e=qe(n[1]),r=e),{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if("@"===n[2])e=qe(this.options.mangle?t(n[0]):n[0]),r="mailto:"+e;else{let t;do{t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(t!==n[0]);e=qe(n[0]),r="www."===n[1]?"http://"+n[0]:n[0]}return{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):qe(n[0]):n[0]:qe(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:e}}}}const lt={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:nt,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};lt.def=Ge(lt.def).replace("label",lt._label).replace("title",lt._title).getRegex(),lt.bullet=/(?:[*+-]|\d{1,9}[.)])/,lt.listItemStart=Ge(/^( *)(bull) */).replace("bull",lt.bullet).getRegex(),lt.list=Ge(lt.list).replace(/bull/g,lt.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+lt.def.source+")").getRegex(),lt._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",lt._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,lt.html=Ge(lt.html,"i").replace("comment",lt._comment).replace("tag",lt._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),lt.paragraph=Ge(lt._paragraph).replace("hr",lt.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",lt._tag).getRegex(),lt.blockquote=Ge(lt.blockquote).replace("paragraph",lt.paragraph).getRegex(),lt.normal={...lt},lt.gfm={...lt.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},lt.gfm.table=Ge(lt.gfm.table).replace("hr",lt.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",lt._tag).getRegex(),lt.gfm.paragraph=Ge(lt._paragraph).replace("hr",lt.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",lt.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",lt._tag).getRegex(),lt.pedantic={...lt.normal,html:Ge("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",lt._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:nt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ge(lt.normal._paragraph).replace("hr",lt.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",lt.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const ct={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:nt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:nt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function ht(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function pt(e){let t,n,r="";const s=e.length;for(t=0;t<s;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}ct._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",ct.punctuation=Ge(ct.punctuation).replace(/punctuation/g,ct._punctuation).getRegex(),ct.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,ct.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,ct._comment=Ge(lt._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),ct.emStrong.lDelim=Ge(ct.emStrong.lDelim).replace(/punct/g,ct._punctuation).getRegex(),ct.emStrong.rDelimAst=Ge(ct.emStrong.rDelimAst,"g").replace(/punct/g,ct._punctuation).getRegex(),ct.emStrong.rDelimUnd=Ge(ct.emStrong.rDelimUnd,"g").replace(/punct/g,ct._punctuation).getRegex(),ct._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,ct._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,ct._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,ct.autolink=Ge(ct.autolink).replace("scheme",ct._scheme).replace("email",ct._email).getRegex(),ct._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,ct.tag=Ge(ct.tag).replace("comment",ct._comment).replace("attribute",ct._attribute).getRegex(),ct._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ct._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,ct._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,ct.link=Ge(ct.link).replace("label",ct._label).replace("href",ct._href).replace("title",ct._title).getRegex(),ct.reflink=Ge(ct.reflink).replace("label",ct._label).replace("ref",lt._label).getRegex(),ct.nolink=Ge(ct.nolink).replace("ref",lt._label).getRegex(),ct.reflinkSearch=Ge(ct.reflinkSearch,"g").replace("reflink",ct.reflink).replace("nolink",ct.nolink).getRegex(),ct.normal={...ct},ct.pedantic={...ct.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Ge(/^!?\[(label)\]\((.*?)\)/).replace("label",ct._label).getRegex(),reflink:Ge(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ct._label).getRegex()},ct.gfm={...ct.normal,escape:Ge(ct.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},ct.gfm.url=Ge(ct.gfm.url,"i").replace("email",ct.gfm._extended_email).getRegex(),ct.breaks={...ct.gfm,br:Ge(ct.br).replace("{2,}","*").getRegex(),text:Ge(ct.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class ut{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Me,this.options.tokenizer=this.options.tokenizer||new at,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:lt.normal,inline:ct.normal};this.options.pedantic?(t.block=lt.pedantic,t.inline=ct.pedantic):this.options.gfm&&(t.block=lt.gfm,this.options.breaks?t.inline=ct.breaks:t.inline=ct.gfm),this.tokenizer.rules=t}static get rules(){return{block:lt,inline:ct}}static lex(e,t){return new ut(t).lex(e)}static lexInline(e,t){return new ut(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let n,r,s,i;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,(e,t,n)=>t+"    ".repeat(n.length));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0))))if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),1===n.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(n);else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?t.push(n):(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.list(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.def(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(r.raw+="\n"+n.raw,r.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),t.push(n);else{if(s=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startBlock.forEach(function(e){r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s)))r=t[t.length-1],i&&"paragraph"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),i=s.length!==e.length,e=e.substring(n.raw.length);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,r,s,i,o,a,l=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,i.index)+"["+it("a",i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(i=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,i.index)+"["+it("a",i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(i=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,i.index+i[0].length-2)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(o||(a=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0))))if(n=this.tokenizer.escape(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.tag(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.link(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.emStrong(e,l,a))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.codespan(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.br(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.del(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.autolink(e,pt))e=e.substring(n.raw.length),t.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(e,pt))){if(s=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startInline.forEach(function(e){r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(n=this.tokenizer.inlineText(s,ht))e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(a=n.raw.slice(-1)),o=!0,r=t[t.length-1],r&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(n.raw.length),t.push(n);return t}}let dt=class{constructor(e){this.options=e||Me}code(e,t,n){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,r);null!=t&&t!==e&&(n=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",r?'<pre><code class="'+this.options.langPrefix+qe(r)+'">'+(n?e:qe(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:qe(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e){return e}heading(e,t,n,r){if(this.options.headerIds){return`<h${t} id="${this.options.headerPrefix+r.slug(n)}">${e}</h${t}>\n`}return`<h${t}>${e}</h${t}>\n`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e){return`<li>${e}</li>\n`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>\n`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(null===(e=Xe(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<a href="'+e+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){if(null===(e=Xe(this.options.sanitize,this.options.baseUrl,e)))return n;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${t}"`),r+=this.options.xhtml?"/>":">",r}text(e){return e}};class mt{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class ft{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,r=0;if(this.seen.hasOwnProperty(n)){r=this.seen[e];do{r++,n=e+"-"+r}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=r,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class gt{constructor(e){this.options=e||Me,this.options.renderer=this.options.renderer||new dt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new mt,this.slugger=new ft}static parse(e,t){return new gt(t).parse(e)}static parseInline(e,t){return new gt(t).parseInline(e)}parse(e,t=!0){let n,r,s,i,o,a,l,c,h,p,u,d,m,f,g,b,v,y,k,x="";const _=e.length;for(n=0;n<_;n++)if(p=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(k=this.options.extensions.renderers[p.type].call({parser:this},p),!1!==k||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type)))x+=k||"";else switch(p.type){case"space":continue;case"hr":x+=this.renderer.hr();continue;case"heading":x+=this.renderer.heading(this.parseInline(p.tokens),p.depth,We(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue;case"code":x+=this.renderer.code(p.text,p.lang,p.escaped);continue;case"table":for(c="",l="",i=p.header.length,r=0;r<i;r++)l+=this.renderer.tablecell(this.parseInline(p.header[r].tokens),{header:!0,align:p.align[r]});for(c+=this.renderer.tablerow(l),h="",i=p.rows.length,r=0;r<i;r++){for(a=p.rows[r],l="",o=a.length,s=0;s<o;s++)l+=this.renderer.tablecell(this.parseInline(a[s].tokens),{header:!1,align:p.align[s]});h+=this.renderer.tablerow(l)}x+=this.renderer.table(c,h);continue;case"blockquote":h=this.parse(p.tokens),x+=this.renderer.blockquote(h);continue;case"list":for(u=p.ordered,d=p.start,m=p.loose,i=p.items.length,h="",r=0;r<i;r++)g=p.items[r],b=g.checked,v=g.task,f="",g.task&&(y=this.renderer.checkbox(b),m?g.tokens.length>0&&"paragraph"===g.tokens[0].type?(g.tokens[0].text=y+" "+g.tokens[0].text,g.tokens[0].tokens&&g.tokens[0].tokens.length>0&&"text"===g.tokens[0].tokens[0].type&&(g.tokens[0].tokens[0].text=y+" "+g.tokens[0].tokens[0].text)):g.tokens.unshift({type:"text",text:y}):f+=y),f+=this.parse(g.tokens,m),h+=this.renderer.listitem(f,v,b);x+=this.renderer.list(h,u,d);continue;case"html":x+=this.renderer.html(p.text);continue;case"paragraph":x+=this.renderer.paragraph(this.parseInline(p.tokens));continue;case"text":for(h=p.tokens?this.parseInline(p.tokens):p.text;n+1<_&&"text"===e[n+1].type;)p=e[++n],h+="\n"+(p.tokens?this.parseInline(p.tokens):p.text);x+=t?this.renderer.paragraph(h):h;continue;default:{const e='Token with "'+p.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return x}parseInline(e,t){t=t||this.renderer;let n,r,s,i="";const o=e.length;for(n=0;n<o;n++)if(r=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(s=this.options.extensions.renderers[r.type].call({parser:this},r),!1!==s||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)))i+=s||"";else switch(r.type){case"escape":case"text":i+=t.text(r.text);break;case"html":i+=t.html(r.text);break;case"link":i+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case"image":i+=t.image(r.href,r.title,r.text);break;case"strong":i+=t.strong(this.parseInline(r.tokens,t));break;case"em":i+=t.em(this.parseInline(r.tokens,t));break;case"codespan":i+=t.codespan(r.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(r.tokens,t));break;default:{const e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return i}}class bt{constructor(e){this.options=e||Me}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(e){return e}postprocess(e){return e}}function vt(e,t){return(n,r,s)=>{"function"==typeof r&&(s=r,r=null);const i={...r},o=function(e,t,n){return r=>{if(r.message+="\nPlease report this to https://github.com/markedjs/marked.",e){const e="<p>An error occurred:</p><pre>"+qe(r.message+"",!0)+"</pre>";return t?Promise.resolve(e):n?void n(null,e):e}if(t)return Promise.reject(r);if(!n)throw r;n(r)}}((r={...yt.defaults,...i}).silent,r.async,s);if(null==n)return o(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof n)return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}(r),r.hooks&&(r.hooks.options=r),s){const i=r.highlight;let a;try{r.hooks&&(n=r.hooks.preprocess(n)),a=e(n,r)}catch(e){return o(e)}const l=function(e){let n;if(!e)try{r.walkTokens&&yt.walkTokens(a,r.walkTokens),n=t(a,r),r.hooks&&(n=r.hooks.postprocess(n))}catch(t){e=t}return r.highlight=i,e?o(e):s(null,n)};if(!i||i.length<3)return l();if(delete r.highlight,!a.length)return l();let c=0;return yt.walkTokens(a,function(e){"code"===e.type&&(c++,setTimeout(()=>{i(e.text,e.lang,function(t,n){if(t)return l(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),c--,0===c&&l()})},0))}),void(0===c&&l())}if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then(t=>e(t,r)).then(e=>r.walkTokens?Promise.all(yt.walkTokens(e,r.walkTokens)).then(()=>e):e).then(e=>t(e,r)).then(e=>r.hooks?r.hooks.postprocess(e):e).catch(o);try{r.hooks&&(n=r.hooks.preprocess(n));const s=e(n,r);r.walkTokens&&yt.walkTokens(s,r.walkTokens);let i=t(s,r);return r.hooks&&(i=r.hooks.postprocess(i)),i}catch(e){return o(e)}}}function yt(e,t,n){return vt(ut.lex,gt.parse)(e,t,n)}
/*! @license DOMPurify 2.5.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.8/LICENSE */
function kt(e){return kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kt(e)}function xt(e,t){return xt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},xt(e,t)}function _t(e,t,n){return _t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var s=new(Function.bind.apply(e,r));return n&&xt(s,n.prototype),s},_t.apply(null,arguments)}function $t(e){return function(e){if(Array.isArray(e))return wt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return wt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wt(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function wt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}yt.options=yt.setOptions=function(e){var t;return yt.defaults={...yt.defaults,...e},t=yt.defaults,Me=t,yt},yt.getDefaults=Ie,yt.defaults=Me,yt.use=function(...e){const t=yt.defaults.extensions||{renderers:{},childTokens:{}};e.forEach(e=>{const n={...e};if(n.async=yt.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const n=t.renderers[e.name];t.renderers[e.name]=n?function(...t){let r=e.renderer.apply(this,t);return!1===r&&(r=n.apply(this,t)),r}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");t[e.level]?t[e.level].unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){const t=yt.defaults.renderer||new dt;for(const n in e.renderer){const r=t[n];t[n]=(...s)=>{let i=e.renderer[n].apply(t,s);return!1===i&&(i=r.apply(t,s)),i}}n.renderer=t}if(e.tokenizer){const t=yt.defaults.tokenizer||new at;for(const n in e.tokenizer){const r=t[n];t[n]=(...s)=>{let i=e.tokenizer[n].apply(t,s);return!1===i&&(i=r.apply(t,s)),i}}n.tokenizer=t}if(e.hooks){const t=yt.defaults.hooks||new bt;for(const n in e.hooks){const r=t[n];bt.passThroughHooks.has(n)?t[n]=s=>{if(yt.defaults.async)return Promise.resolve(e.hooks[n].call(t,s)).then(e=>r.call(t,e));const i=e.hooks[n].call(t,s);return r.call(t,i)}:t[n]=(...s)=>{let i=e.hooks[n].apply(t,s);return!1===i&&(i=r.apply(t,s)),i}}n.hooks=t}if(e.walkTokens){const t=yt.defaults.walkTokens;n.walkTokens=function(n){let r=[];return r.push(e.walkTokens.call(this,n)),t&&(r=r.concat(t.call(this,n))),r}}yt.setOptions(n)})},yt.walkTokens=function(e,t){let n=[];for(const r of e)switch(n=n.concat(t.call(yt,r)),r.type){case"table":for(const e of r.header)n=n.concat(yt.walkTokens(e.tokens,t));for(const e of r.rows)for(const r of e)n=n.concat(yt.walkTokens(r.tokens,t));break;case"list":n=n.concat(yt.walkTokens(r.items,t));break;default:yt.defaults.extensions&&yt.defaults.extensions.childTokens&&yt.defaults.extensions.childTokens[r.type]?yt.defaults.extensions.childTokens[r.type].forEach(function(e){n=n.concat(yt.walkTokens(r[e],t))}):r.tokens&&(n=n.concat(yt.walkTokens(r.tokens,t)))}return n},yt.parseInline=vt(ut.lexInline,gt.parseInline),yt.Parser=gt,yt.parser=gt.parse,yt.Renderer=dt,yt.TextRenderer=mt,yt.Lexer=ut,yt.lexer=ut.lex,yt.Tokenizer=at,yt.Slugger=ft,yt.Hooks=bt,yt.parse=yt,yt.options,yt.setOptions,yt.use,yt.walkTokens,yt.parseInline;var At=Object.hasOwnProperty,St=Object.setPrototypeOf,Et=Object.isFrozen,Tt=Object.getPrototypeOf,Ct=Object.getOwnPropertyDescriptor,Nt=Object.freeze,Rt=Object.seal,zt=Object.create,Ot="undefined"!=typeof Reflect&&Reflect,Pt=Ot.apply,Lt=Ot.construct;Pt||(Pt=function(e,t,n){return e.apply(t,n)}),Nt||(Nt=function(e){return e}),Rt||(Rt=function(e){return e}),Lt||(Lt=function(e,t){return _t(e,$t(t))});var It,Mt=Gt(Array.prototype.forEach),Dt=Gt(Array.prototype.pop),Ut=Gt(Array.prototype.push),Ht=Gt(String.prototype.toLowerCase),Bt=Gt(String.prototype.toString),jt=Gt(String.prototype.match),Ft=Gt(String.prototype.replace),qt=Gt(String.prototype.indexOf),Kt=Gt(String.prototype.trim),Wt=Gt(RegExp.prototype.test),Zt=(It=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Lt(It,t)});function Gt(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return Pt(e,t,r)}}function Vt(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:Ht,St&&St(e,null);for(var s=t.length;s--;){var i=t[s];if("string"==typeof i){var o=n(i);o!==i&&(Et(t)||(t[s]=o),i=o)}e[i]=!0}return e}function Qt(e){var t,n=zt(null);for(t in e)!0===Pt(At,e,[t])&&(n[t]=e[t]);return n}function Xt(e,t){for(;null!==e;){var n=Ct(e,t);if(n){if(n.get)return Gt(n.get);if("function"==typeof n.value)return Gt(n.value)}e=Tt(e)}return function(e){return console.warn("fallback value for",e),null}}var Yt=Nt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Jt=Nt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),en=Nt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),tn=Nt(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),nn=Nt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),rn=Nt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),sn=Nt(["#text"]),on=Nt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),an=Nt(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ln=Nt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),cn=Nt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),hn=Rt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),pn=Rt(/<%[\w\W]*|[\w\W]*%>/gm),un=Rt(/\${[\w\W]*}/gm),dn=Rt(/^data-[\-\w.\u00B7-\uFFFF]+$/),mn=Rt(/^aria-[\-\w]+$/),fn=Rt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),gn=Rt(/^(?:\w+script|data):/i),bn=Rt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),vn=Rt(/^html$/i),yn=Rt(/^[a-z][.\w]*(-[.\w]+)+$/i),kn=function(){return"undefined"==typeof window?null:window};var xn=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kn(),n=function(t){return e(t)};if(n.version="2.5.8",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,s=t.document,i=t.DocumentFragment,o=t.HTMLTemplateElement,a=t.Node,l=t.Element,c=t.NodeFilter,h=t.NamedNodeMap,p=void 0===h?t.NamedNodeMap||t.MozNamedAttrMap:h,u=t.HTMLFormElement,d=t.DOMParser,m=t.trustedTypes,f=l.prototype,g=Xt(f,"cloneNode"),b=Xt(f,"nextSibling"),v=Xt(f,"childNodes"),y=Xt(f,"parentNode");if("function"==typeof o){var k=s.createElement("template");k.content&&k.content.ownerDocument&&(s=k.content.ownerDocument)}var x=function(e,t){if("object"!==kt(e)||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var s="dompurify"+(n?"#"+n:"");try{return e.createPolicy(s,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+s+" could not be created."),null}}(m,r),_=x?x.createHTML(""):"",$=s,w=$.implementation,A=$.createNodeIterator,S=$.createDocumentFragment,E=$.getElementsByTagName,T=r.importNode,C={};try{C=Qt(s).documentMode?s.documentMode:{}}catch(e){}var N={};n.isSupported="function"==typeof y&&w&&void 0!==w.createHTMLDocument&&9!==C;var R,z,O=hn,P=pn,L=un,I=dn,M=mn,D=gn,U=bn,H=yn,B=fn,j=null,F=Vt({},[].concat($t(Yt),$t(Jt),$t(en),$t(nn),$t(sn))),q=null,K=Vt({},[].concat($t(on),$t(an),$t(ln),$t(cn))),W=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Z=null,G=null,V=!0,Q=!0,X=!1,Y=!0,J=!1,ee=!0,te=!1,ne=!1,re=!1,se=!1,ie=!1,oe=!1,ae=!0,le=!1,ce=!0,he=!1,pe={},ue=null,de=Vt({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),me=null,fe=Vt({},["audio","video","img","source","image","track"]),ge=null,be=Vt({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ve="http://www.w3.org/1998/Math/MathML",ye="http://www.w3.org/2000/svg",ke="http://www.w3.org/1999/xhtml",xe=ke,_e=!1,$e=null,we=Vt({},[ve,ye,ke],Bt),Ae=["application/xhtml+xml","text/html"],Se=null,Ee=s.createElement("form"),Te=function(e){return e instanceof RegExp||e instanceof Function},Ce=function(e){Se&&Se===e||(e&&"object"===kt(e)||(e={}),e=Qt(e),R=R=-1===Ae.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,z="application/xhtml+xml"===R?Bt:Ht,j="ALLOWED_TAGS"in e?Vt({},e.ALLOWED_TAGS,z):F,q="ALLOWED_ATTR"in e?Vt({},e.ALLOWED_ATTR,z):K,$e="ALLOWED_NAMESPACES"in e?Vt({},e.ALLOWED_NAMESPACES,Bt):we,ge="ADD_URI_SAFE_ATTR"in e?Vt(Qt(be),e.ADD_URI_SAFE_ATTR,z):be,me="ADD_DATA_URI_TAGS"in e?Vt(Qt(fe),e.ADD_DATA_URI_TAGS,z):fe,ue="FORBID_CONTENTS"in e?Vt({},e.FORBID_CONTENTS,z):de,Z="FORBID_TAGS"in e?Vt({},e.FORBID_TAGS,z):{},G="FORBID_ATTR"in e?Vt({},e.FORBID_ATTR,z):{},pe="USE_PROFILES"in e&&e.USE_PROFILES,V=!1!==e.ALLOW_ARIA_ATTR,Q=!1!==e.ALLOW_DATA_ATTR,X=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Y=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,J=e.SAFE_FOR_TEMPLATES||!1,ee=!1!==e.SAFE_FOR_XML,te=e.WHOLE_DOCUMENT||!1,se=e.RETURN_DOM||!1,ie=e.RETURN_DOM_FRAGMENT||!1,oe=e.RETURN_TRUSTED_TYPE||!1,re=e.FORCE_BODY||!1,ae=!1!==e.SANITIZE_DOM,le=e.SANITIZE_NAMED_PROPS||!1,ce=!1!==e.KEEP_CONTENT,he=e.IN_PLACE||!1,B=e.ALLOWED_URI_REGEXP||B,xe=e.NAMESPACE||ke,W=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Te(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(W.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Te(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(W.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(W.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),J&&(Q=!1),ie&&(se=!0),pe&&(j=Vt({},$t(sn)),q=[],!0===pe.html&&(Vt(j,Yt),Vt(q,on)),!0===pe.svg&&(Vt(j,Jt),Vt(q,an),Vt(q,cn)),!0===pe.svgFilters&&(Vt(j,en),Vt(q,an),Vt(q,cn)),!0===pe.mathMl&&(Vt(j,nn),Vt(q,ln),Vt(q,cn))),e.ADD_TAGS&&(j===F&&(j=Qt(j)),Vt(j,e.ADD_TAGS,z)),e.ADD_ATTR&&(q===K&&(q=Qt(q)),Vt(q,e.ADD_ATTR,z)),e.ADD_URI_SAFE_ATTR&&Vt(ge,e.ADD_URI_SAFE_ATTR,z),e.FORBID_CONTENTS&&(ue===de&&(ue=Qt(ue)),Vt(ue,e.FORBID_CONTENTS,z)),ce&&(j["#text"]=!0),te&&Vt(j,["html","head","body"]),j.table&&(Vt(j,["tbody"]),delete Z.tbody),Nt&&Nt(e),Se=e)},Ne=Vt({},["mi","mo","mn","ms","mtext"]),Re=Vt({},["annotation-xml"]),ze=Vt({},["title","style","font","a","script"]),Oe=Vt({},Jt);Vt(Oe,en),Vt(Oe,tn);var Pe=Vt({},nn);Vt(Pe,rn);var Le=function(e){Ut(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=_}catch(t){e.remove()}}},Ie=function(e,t){try{Ut(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){Ut(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!q[e])if(se||ie)try{Le(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Me=function(e){var t,n;if(re)e="<remove></remove>"+e;else{var r=jt(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===R&&xe===ke&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=x?x.createHTML(e):e;if(xe===ke)try{t=(new d).parseFromString(i,R)}catch(e){}if(!t||!t.documentElement){t=w.createDocument(xe,"template",null);try{t.documentElement.innerHTML=_e?_:i}catch(e){}}var o=t.body||t.documentElement;return e&&n&&o.insertBefore(s.createTextNode(n),o.childNodes[0]||null),xe===ke?E.call(t,te?"html":"body")[0]:te?t.documentElement:o},De=function(e){return A.call(e.ownerDocument||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null,!1)},Ue=function(e){return e instanceof u&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof p)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},He=function(e){return"object"===kt(a)?e instanceof a:e&&"object"===kt(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Be=function(e,t,r){N[e]&&Mt(N[e],function(e){e.call(n,t,r,Se)})},je=function(e){var t;if(Be("beforeSanitizeElements",e,null),Ue(e))return Le(e),!0;if(Wt(/[\u0080-\uFFFF]/,e.nodeName))return Le(e),!0;var r=z(e.nodeName);if(Be("uponSanitizeElement",e,{tagName:r,allowedTags:j}),e.hasChildNodes()&&!He(e.firstElementChild)&&(!He(e.content)||!He(e.content.firstElementChild))&&Wt(/<[/\w]/g,e.innerHTML)&&Wt(/<[/\w]/g,e.textContent))return Le(e),!0;if("select"===r&&Wt(/<template/i,e.innerHTML))return Le(e),!0;if(7===e.nodeType)return Le(e),!0;if(ee&&8===e.nodeType&&Wt(/<[/\w]/g,e.data))return Le(e),!0;if(!j[r]||Z[r]){if(!Z[r]&&qe(r)){if(W.tagNameCheck instanceof RegExp&&Wt(W.tagNameCheck,r))return!1;if(W.tagNameCheck instanceof Function&&W.tagNameCheck(r))return!1}if(ce&&!ue[r]){var s=y(e)||e.parentNode,i=v(e)||e.childNodes;if(i&&s)for(var o=i.length-1;o>=0;--o){var a=g(i[o],!0);a.__removalCount=(e.__removalCount||0)+1,s.insertBefore(a,b(e))}}return Le(e),!0}return e instanceof l&&!function(e){var t=y(e);t&&t.tagName||(t={namespaceURI:xe,tagName:"template"});var n=Ht(e.tagName),r=Ht(t.tagName);return!!$e[e.namespaceURI]&&(e.namespaceURI===ye?t.namespaceURI===ke?"svg"===n:t.namespaceURI===ve?"svg"===n&&("annotation-xml"===r||Ne[r]):Boolean(Oe[n]):e.namespaceURI===ve?t.namespaceURI===ke?"math"===n:t.namespaceURI===ye?"math"===n&&Re[r]:Boolean(Pe[n]):e.namespaceURI===ke?!(t.namespaceURI===ye&&!Re[r])&&!(t.namespaceURI===ve&&!Ne[r])&&!Pe[n]&&(ze[n]||!Oe[n]):!("application/xhtml+xml"!==R||!$e[e.namespaceURI]))}(e)?(Le(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!Wt(/<\/no(script|embed|frames)/i,e.innerHTML)?(J&&3===e.nodeType&&(t=e.textContent,t=Ft(t,O," "),t=Ft(t,P," "),t=Ft(t,L," "),e.textContent!==t&&(Ut(n.removed,{element:e.cloneNode()}),e.textContent=t)),Be("afterSanitizeElements",e,null),!1):(Le(e),!0)},Fe=function(e,t,n){if(ae&&("id"===t||"name"===t)&&(n in s||n in Ee))return!1;if(Q&&!G[t]&&Wt(I,t));else if(V&&Wt(M,t));else if(!q[t]||G[t]){if(!(qe(e)&&(W.tagNameCheck instanceof RegExp&&Wt(W.tagNameCheck,e)||W.tagNameCheck instanceof Function&&W.tagNameCheck(e))&&(W.attributeNameCheck instanceof RegExp&&Wt(W.attributeNameCheck,t)||W.attributeNameCheck instanceof Function&&W.attributeNameCheck(t))||"is"===t&&W.allowCustomizedBuiltInElements&&(W.tagNameCheck instanceof RegExp&&Wt(W.tagNameCheck,n)||W.tagNameCheck instanceof Function&&W.tagNameCheck(n))))return!1}else if(ge[t]);else if(Wt(B,Ft(n,U,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==qt(n,"data:")||!me[e]){if(X&&!Wt(D,Ft(n,U,"")));else if(n)return!1}else;return!0},qe=function(e){return"annotation-xml"!==e&&jt(e,H)},Ke=function(e){var t,r,s,i;Be("beforeSanitizeAttributes",e,null);var o=e.attributes;if(o&&!Ue(e)){var a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:q};for(i=o.length;i--;){var l=t=o[i],c=l.name,h=l.namespaceURI;if(r="value"===c?t.value:Kt(t.value),s=z(c),a.attrName=s,a.attrValue=r,a.keepAttr=!0,a.forceKeepAttr=void 0,Be("uponSanitizeAttribute",e,a),r=a.attrValue,!a.forceKeepAttr&&(Ie(c,e),a.keepAttr))if(Y||!Wt(/\/>/i,r)){J&&(r=Ft(r,O," "),r=Ft(r,P," "),r=Ft(r,L," "));var p=z(e.nodeName);if(Fe(p,s,r))if(!le||"id"!==s&&"name"!==s||(Ie(c,e),r="user-content-"+r),ee&&Wt(/((--!?|])>)|<\/(style|title)/i,r))Ie(c,e);else{if(x&&"object"===kt(m)&&"function"==typeof m.getAttributeType)if(h);else switch(m.getAttributeType(p,s)){case"TrustedHTML":r=x.createHTML(r);break;case"TrustedScriptURL":r=x.createScriptURL(r)}try{h?e.setAttributeNS(h,c,r):e.setAttribute(c,r),Ue(e)?Le(e):Dt(n.removed)}catch(e){}}}else Ie(c,e)}Be("afterSanitizeAttributes",e,null)}},We=function e(t){var n,r=De(t);for(Be("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Be("uponSanitizeShadowNode",n,null),je(n),Ke(n),n.content instanceof i&&e(n.content);Be("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){var s,o,l,c,h,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((_e=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!He(e)){if("function"!=typeof e.toString)throw Zt("toString is not a function");if("string"!=typeof(e=e.toString()))throw Zt("dirty is not a string, aborting")}if(!n.isSupported){if("object"===kt(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(He(e))return t.toStaticHTML(e.outerHTML)}return e}if(ne||Ce(p),n.removed=[],"string"==typeof e&&(he=!1),he){if(e.nodeName){var u=z(e.nodeName);if(!j[u]||Z[u])throw Zt("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof a)1===(o=(s=Me("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===o.nodeName||"HTML"===o.nodeName?s=o:s.appendChild(o);else{if(!se&&!J&&!te&&-1===e.indexOf("<"))return x&&oe?x.createHTML(e):e;if(!(s=Me(e)))return se?null:oe?_:""}s&&re&&Le(s.firstChild);for(var d=De(he?e:s);l=d.nextNode();)3===l.nodeType&&l===c||(je(l),Ke(l),l.content instanceof i&&We(l.content),c=l);if(c=null,he)return e;if(se){if(ie)for(h=S.call(s.ownerDocument);s.firstChild;)h.appendChild(s.firstChild);else h=s;return(q.shadowroot||q.shadowrootmod)&&(h=T.call(r,h,!0)),h}var m=te?s.outerHTML:s.innerHTML;return te&&j["!doctype"]&&s.ownerDocument&&s.ownerDocument.doctype&&s.ownerDocument.doctype.name&&Wt(vn,s.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+s.ownerDocument.doctype.name+">\n"+m),J&&(m=Ft(m,O," "),m=Ft(m,P," "),m=Ft(m,L," ")),x&&oe?x.createHTML(m):m},n.setConfig=function(e){Ce(e),ne=!0},n.clearConfig=function(){Se=null,ne=!1},n.isValidAttribute=function(e,t,n){Se||Ce({});var r=z(e),s=z(t);return Fe(r,s,n)},n.addHook=function(e,t){"function"==typeof t&&(N[e]=N[e]||[],Ut(N[e],t))},n.removeHook=function(e){if(N[e])return Dt(N[e])},n.removeHooks=function(e){N[e]&&(N[e]=[])},n.removeAllHooks=function(){N={}},n}();yt.setOptions({headerIds:!1});const _n=e=>D`
    ${e?Le(xn.sanitize(yt(e)).replace(/<(h[1-6]|a|p|ul|ol|li|pre|code|strong|em|blockquote|del)(\s+href="[^"]+")*>/g,'<$1 part="md-$1"$2>')):H}
  `;function $n(e){return!!e&&Array.isArray(e.modules)&&e.modules.some(e=>e.exports?.some(e=>"custom-element-definition"===e.kind)||e.declarations?.some(e=>e.customElement))}const wn=e=>"custom-element-definition"===e.kind,An=e=>"field"===e.kind&&!("private"===e.privacy||"protected"===e.privacy);function Sn(e){return(e.modules??[]).flatMap(e=>e.exports?.filter(wn)??[])}const En=[],Tn=(e,t)=>{En[e]=t},Cn=Object.freeze({HOST:"host",KNOB:"knob",SLOT:"slot",PREFIX:"prefix",SUFFIX:"suffix",WRAPPER:"wrapper"}),Nn=e=>e instanceof HTMLTemplateElement,Rn=(e,t)=>n=>{const{element:r,target:s}=n.dataset;return r===e&&s===t},zn=e=>Nn(e)?e.content.firstElementChild:null,On=(e,t,n)=>En[e].find(Rn(t,n)),Pn=(e,t,n)=>En[e].some(Rn(t,n)),Ln=e=>"string"==typeof e&&e.startsWith("'")&&e.endsWith("'")?e.slice(1,e.length-1):e,In=(e,t="content")=>(e=>e[0].toUpperCase()+e.slice(1))(""===e?t:e),Mn=D`
  <div part="warning">No custom elements found in the JSON file.</div>
`,Dn=t=>{class n extends t{constructor(){super(...arguments),this.jsonFetched=Promise.resolve(null)}willUpdate(){const{src:e}=this;this.manifest?$n(this.manifest)?(this.lastSrc=void 0,this.jsonFetched=Promise.resolve(this.manifest)):console.error("No custom elements found in the `manifest` object."):e&&this.lastSrc!==e&&(this.lastSrc=e,this.jsonFetched=async function(e){try{const t=await fetch(e),n=await t.json();if($n(n))return n;throw new Error(`No element definitions found at ${e}`)}catch(e){return console.error(e),null}}(e))}}return e([ce()],n.prototype,"src",void 0),e([ce({attribute:!1})],n.prototype,"manifest",void 0),e([ce()],n.prototype,"selected",void 0),n};let Un=0;customElements.define("api-viewer-panel",class extends oe{static get styles(){return o`
      :host {
        display: block;
        box-sizing: border-box;
        width: 100%;
        overflow: hidden;
      }

      :host([hidden]) {
        display: none !important;
      }
    `}render(){return D`<slot></slot>`}firstUpdated(){this.setAttribute("role","tabpanel"),this.id||(this.id="api-viewer-panel-"+Un++)}});let Hn=0;class Bn extends oe{constructor(){super(...arguments),this.selected=!1,this.heading="",this.active=!1,this._mousedown=!1}static get styles(){return o`
      :host {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        box-sizing: border-box;
        position: relative;
        max-width: 150px;
        overflow: hidden;
        min-height: 3rem;
        padding: 0 1rem;
        color: var(--ave-tab-color);
        font-size: 0.875rem;
        line-height: 1.2;
        font-weight: 500;
        text-transform: uppercase;
        outline: none;
        cursor: pointer;
        -webkit-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: var(--ave-tab-indicator-size);
        background-color: var(--ave-primary-color);
        opacity: 0;
      }

      :host([selected]) {
        color: var(--ave-tab-selected-color, var(--ave-primary-color));
      }

      :host([selected])::before {
        opacity: 1;
      }

      :host::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: var(--ave-primary-color);
        opacity: 0;
        transition: opacity 0.1s linear;
      }

      :host(:hover)::after {
        opacity: 0.08;
      }

      :host([focus-ring])::after {
        opacity: 0.12;
      }

      :host([active])::after {
        opacity: 0.16;
      }

      @media (max-width: 600px) {
        :host {
          justify-content: center;
          text-align: center;
        }

        :host::before {
          top: auto;
          right: 0;
          width: 100%;
          height: var(--ave-tab-indicator-size);
        }
      }
    `}render(){return D`${this.heading}`}firstUpdated(){this.setAttribute("role","tab"),this.id||(this.id="api-viewer-tab-"+Hn++),this.addEventListener("focus",()=>this._setFocused(!0),!0),this.addEventListener("blur",()=>{this._setFocused(!1),this._setActive(!1)},!0),this.addEventListener("mousedown",()=>{this._setActive(this._mousedown=!0);const e=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e)})}updated(e){e.has("selected")&&(this.setAttribute("aria-selected",String(this.selected)),this.setAttribute("tabindex",this.selected?"0":"-1"))}_setActive(e){this.toggleAttribute("active",e)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&!this._mousedown)}}e([ce({type:Boolean,reflect:!0})],Bn.prototype,"selected",void 0),e([ce()],Bn.prototype,"heading",void 0),e([ce({type:Boolean})],Bn.prototype,"active",void 0),customElements.define("api-viewer-tab",Bn);const jn=40,Fn=37,qn=39,Kn=38,Wn=36,Zn=35;customElements.define("api-viewer-tabs",class extends oe{constructor(){super(...arguments),this._boundSlotChange=this._onSlotChange.bind(this)}static get styles(){return o`
      :host {
        display: flex;
        border-bottom-left-radius: var(--ave-border-radius);
        overflow: hidden;
      }

      .tabs {
        display: block;
      }

      @media (max-width: 600px) {
        :host {
          flex-direction: column;
        }

        .tabs {
          flex-grow: 1;
          display: flex;
          align-self: stretch;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
      }
    `}render(){return D`
      <div class="tabs">
        <slot name="tab"></slot>
      </div>
      <slot name="panel"></slot>
    `}firstUpdated(){this.setAttribute("role","tablist"),this.addEventListener("keydown",this._onKeyDown),this.addEventListener("click",this._onClick);const[e,t]=Array.from(this.renderRoot.querySelectorAll("slot"));e&&t&&(e.addEventListener("slotchange",this._boundSlotChange),t.addEventListener("slotchange",this._boundSlotChange)),Promise.all([...this._allTabs(),...this._allPanels()].map(e=>e.updateComplete)).then(()=>{this._linkPanels()})}_onSlotChange(){this._linkPanels()}_linkPanels(){const e=this._allTabs();e.forEach(e=>{const t=e.nextElementSibling;e.setAttribute("aria-controls",t.id),t.setAttribute("aria-labelledby",e.id)});const t=e.find(e=>e.selected)||e[0];this._selectTab(t)}_allPanels(){return Array.from(this.querySelectorAll("api-viewer-panel"))}_allTabs(){return Array.from(this.querySelectorAll("api-viewer-tab"))}_getAvailableIndex(e,t){const n=this._allTabs(),r=n.length;for(let s=0;"number"==typeof e&&s<r;s++,e+=t||1){e<0?e=r-1:e>=r&&(e=0);if(!n[e].hasAttribute("hidden"))return e}return-1}_panelForTab(e){const t=e.getAttribute("aria-controls");return this.querySelector(`#${t}`)}_prevTab(){const e=this._allTabs(),t=this._getAvailableIndex(e.findIndex(e=>e.selected)-1,-1);return e[(t+e.length)%e.length]}_firstTab(){return this._allTabs()[0]}_lastTab(){const e=this._allTabs();return e[e.length-1]}_nextTab(){const e=this._allTabs(),t=this._getAvailableIndex(e.findIndex(e=>e.selected)+1,1);return e[t%e.length]}reset(){const e=this._allTabs(),t=this._allPanels();e.forEach(e=>{e.selected=!1}),t.forEach(e=>{e.hidden=!0})}selectFirst(){const e=this._allTabs(),t=this._getAvailableIndex(0,1);this._selectTab(e[t%e.length])}_selectTab(e){this.reset();const t=this._panelForTab(e);t&&(e.selected=!0,t.hidden=!1)}_onKeyDown(e){const{target:t}=e;if(!1===(t&&t instanceof Bn))return;if(e.altKey)return;let n;switch(e.keyCode){case Fn:case Kn:n=this._prevTab();break;case qn:case jn:n=this._nextTab();break;case Wn:n=this._firstTab();break;case Zn:n=this._lastTab();break;default:return}e.preventDefault(),this._selectTab(n),n.focus()}_onClick(e){const{target:t}=e;t&&t instanceof Bn&&(this._selectTab(t),t.focus())}});const Gn=(e,t,n,r,s,i)=>D`
    <div part="docs-item">
      <div part="docs-row">
        <div part="docs-column" class="column-name-${e}">
          <div part="docs-label">Name</div>
          <div part="docs-value" class="accent">${t}</div>
        </div>
        ${void 0===i?H:D`
              <div part="docs-column">
                <div part="docs-label">Attribute</div>
                <div part="docs-value">${i}</div>
              </div>
            `}
        ${void 0===r&&void 0===s?H:D`
              <div part="docs-column" class="column-type">
                <div part="docs-label">Type</div>
                <div part="docs-value">
                  ${r||(Number.isNaN(Number(s))?typeof s:"number")}
                  ${void 0===s?H:D` = <span class="accent">${s}</span> `}
                </div>
              </div>
            `}
      </div>
      <div ?hidden=${void 0===n}>
        <div part="docs-label">Description</div>
        <div part="docs-markdown">${_n(n)}</div>
      </div>
    </div>
  `,Vn=(e,t,n)=>{const r=0===t.length;return D`
    <api-viewer-tab
      heading=${e}
      slot="tab"
      part="tab"
      ?hidden=${r}
    ></api-viewer-tab>
    <api-viewer-panel slot="panel" part="tab-panel" ?hidden=${r}>
      ${n}
    </api-viewer-panel>
  `};class Qn extends oe{constructor(){super(...arguments),this.name="",this.props=[],this.attrs=[],this.slots=[],this.events=[],this.cssParts=[],this.cssProps=[]}createRenderRoot(){return this}render(){const{slots:e,props:t,attrs:n,events:r,cssParts:s,cssProps:i}=this,o=[t,n,e,r,i,s].every(e=>0===e.length),a=(n||[]).filter(e=>!t.some(t=>t.name===e.fieldName));return o?D`
          <div part="warning">
            The element &lt;${this.name}&gt; does not provide any documented
            API.
          </div>
        `:D`
          <api-viewer-tabs>
            ${Vn("Properties",t,D`
                ${t.map(e=>{const{name:t,description:r,type:s}=e,i=(n||[]).find(e=>e.fieldName===t);return Gn("prop",t,r,s?.text,e.default,i?.name)})}
              `)}
            ${Vn("Attributes",a,D`
                ${a.map(({name:e,description:t,type:n})=>Gn("attr",e,t,n?.text))}
              `)}
            ${Vn("Slots",e,D`
                ${e.map(({name:e,description:t})=>Gn("slot",e,t))}
              `)}
            ${Vn("Events",r,D`
                ${r.map(({name:e,description:t})=>Gn("event",e,t))}
              `)}
            ${Vn("CSS Custom Properties",i,D`
                ${i.map(e=>{const{name:t,description:n}=e;return Gn("css",t,n,"",Ln(e.default))})}
              `)}
            ${Vn("CSS Shadow Parts",s,D`
                ${s.map(({name:e,description:t})=>Gn("part",e,t))}
              `)}
          </api-viewer-tabs>
        `}updated(e){if(e.has("name")&&e.get("name")){const e=this.renderRoot.querySelector("api-viewer-tabs");e&&e.selectFirst()}}}e([ce()],Qn.prototype,"name",void 0),e([ce({attribute:!1})],Qn.prototype,"props",void 0),e([ce({attribute:!1})],Qn.prototype,"attrs",void 0),e([ce({attribute:!1})],Qn.prototype,"slots",void 0),e([ce({attribute:!1})],Qn.prototype,"events",void 0),e([ce({attribute:!1})],Qn.prototype,"cssParts",void 0),e([ce({attribute:!1})],Qn.prototype,"cssProps",void 0),customElements.define("api-viewer-docs",Qn);class Xn{constructor(e,t,n){this._log=[],(this.host=e).addController(this),n.forEach(({name:e})=>{t.addEventListener(e,n=>{const r="-changed";if(e.endsWith(r)){const{knob:n}=this.host.getKnob(e.replace(r,""));n&&this.host.syncKnob(t,n)}this.log=[...this.log,n]})})}get log(){return this._log}set log(e){this._log=e,this.host.isConnected&&this.host.requestUpdate()}clear(){this.log=[]}hostDisconnected(){this.clear()}}class Yn{constructor(e,t,n,r){this._slots=[],(this.host=e).addController(this),this.el=n,this.enabled=!Pn(t,n.localName,Cn.SLOT),this.slots=r.sort((e,t)=>""===e.name?1:""===t.name?-1:e.name.localeCompare(t.name)).map(e=>({...e,content:In(e.name)}))}get slots(){return this._slots}set slots(e){this._slots=e,this.enabled&&this.el.isConnected&&e&&e.length&&(this.el.innerHTML="",e.forEach(e=>{let t;const{name:n,content:r}=e;n?(t=document.createElement("div"),t.setAttribute("slot",n),t.textContent=r):t=document.createTextNode(r),this.el.appendChild(t)})),this.host.requestUpdate()}hostDisconnected(){this.slots=[]}setValue(e,t){this.slots=this.slots.map(n=>n.name===e?{...n,content:t}:n)}}class Jn{constructor(e,t,n){if(this._css=[],(this.host=e).addController(this),this.el=t,n.length){const e=getComputedStyle(t);this.css=n.map(t=>{let n=t.default?Ln(t.default):e.getPropertyValue(t.name);const r=t;return n&&(n=n.trim(),r.default=n,r.value=n),r})}}get css(){return this._css}set css(e){this._css=e,e.length&&e.forEach(e=>{const{name:t,value:n}=e;n&&(n===e.default?this.el.style.removeProperty(t):this.el.style.setProperty(t,n))}),this.host.isConnected&&this.host.requestUpdate()}hostDisconnected(){this.css=[]}setValue(e,t){this.css=this.css.map(n=>n.name===e?{...n,value:t}:n)}}const er=e=>D`
    ${e.map(e=>D`
        <p part="event-record">
          event:
          ${e.type}.${null==e.detail?H:(e=>{const t=e,n="undefined";return"value"in e&&void 0===e.value&&(t.value=n),` detail: ${JSON.stringify(e).replace(`"${n}"`,n)}`})(e.detail)}
        </p>
      `)}
  `;var tr={text:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},join:function(e){return e.join("")},wrap:function(e,t){return'<span class="'+e+'">'+t+"</span>"}},nr=function(){return nr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},nr.apply(this,arguments)};
/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */function rr(e){return e&&e.source||e}var sr={exec:function(){return null}};function ir(e,t,n){return new RegExp(rr(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}function or(e){var t=[];var n=[];function r(e){if(e.variants&&e.variants.length){for(var t=0,r=n;t<r.length;t++){var s=r[t],i=s[0],o=s[1];if(e===i)return o}var a=e.variants.map(function(t){return nr({},e,{variants:void 0},t)});return n.push([e,a]),a}}var s=function n(s,i,o){var a=function(e){for(var n=0,r=t;n<r.length;n++){var s=r[n],i=s[0],o=s[1];if(e===i)return o}}(s);if(a)return a;var l,c={lexemesRe:ir(e,s.lexemes||/\w+/,!0),relevance:null==s.relevance?1:s.relevance,contains:[],terminators:sr,subLanguage:null==s.subLanguage?void 0:"string"==typeof s.subLanguage?[s.subLanguage]:s.subLanguage};t.push([s,c]),s.className&&(c.className=s.className),s.illegal&&(c.illegalRe=ir(e,s.illegal));for(var h=0,p=["endsParent","endsWithParent","skip","excludeBegin","excludeEnd","returnBegin","returnEnd"];h<p.length;h++){var u=p[h];s[u]&&(c[u]=!0)}if(i){var d=s.beginKeywords?"\\b("+s.beginKeywords.split(/\s+/).join("|")+")\\b":s.begin||/\B|\b/;s.begin=d,c.beginRe=ir(e,d);var m=s.end||s.endsWithParent?s.end:/\B|\b/;m&&(s.end=m,c.endRe=ir(e,m)),l=rr(m)||"",s.endsWithParent&&o&&(l+=(m?"|":"")+o)}var f=s.keywords||s.beginKeywords;if(f){var g={},b=function(t,n){e.case_insensitive&&(n=n.toLowerCase());for(var r=0,s=n.split(/\s+/);r<s.length;r++){var i=s[r].split(/\|/),o=i[0],a=i[1];g[o]=[t,a?Number(a):1]}};if("string"==typeof f)b("keyword",f);else for(var v in f)b(v,f[v]);c.keywords=g}var y=[];if(s.contains&&s.contains.length){for(var k=0,x=s.contains;k<x.length;k++)for(var _=x[k],$="self"===_?s:_,w=0,A=r($)||$.endsWithParent&&[nr({},$)]||[$];w<A.length;w++){var S=A[w];y.push(S)}c.contains=y.map(function(e){return n(e,c,l)})}s.starts&&(c.starts=n(s.starts,i,o));var E=y.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([l,s.illegal]).map(rr).filter(Boolean);return E.length&&(c.terminators=ir(e,E.join("|"),!0)),c}(e);return e.case_insensitive&&(s.case_insensitive=!0),s}var ar={},lr={};function cr(e){if(ar[e.name]=e,e.aliases)for(var t=0,n=e.aliases;t<n.length;t++){var r=n[t];lr[r]=e.name}}function hr(){return Object.keys(ar)}function pr(e){e=(e||"").toLowerCase(),e=lr[e]||e;var t=ar[e];if(t)return function(e){return"lexemesRe"in e}(t)?t:ar[e]=or(t)}var ur={begin:"\\\\[\\s\\S]",relevance:0},dr={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[ur]},mr={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[ur]},fr={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/};function gr(e,t,n){void 0===n&&(n={});var r=nr({className:"comment",begin:e,end:t,contains:[]},n),s=r.contains;return s&&(s.push(fr),s.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0})),r}gr("//","$");var br=gr("/\\*","\\*/");gr("#","$");var vr={className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},yr={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]},kr={name:"xml",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},gr("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[yr],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[yr],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},yr]}]};function xr(e,t){var n=e&&e.exec(t);return n&&0===n.index||!1}function _r(e,t,n,r,s,i){var o=[{content:[]}];function a(e){var t=o[0].content;"string"==typeof e&&t.length&&"string"==typeof t[t.length-1]?t[t.length-1]+=e:t.push(e)}function l(e){a(t.text(e))}function c(t,n){n||(t=e.classPrefix+t),o.unshift({className:t,content:[]})}function h(t){t=e.classPrefix+t,o.push({className:t,content:[]})}function p(){if(o.length<2)throw"unbalanced";var e=o.shift(),n=e.className,r=e.content,s=t.join(r);a(n?t.wrap(n,s):s)}function u(e,t){if(xr(e.endRe,t)){for(;e.endsParent&&e.parent;e=e.parent);return e}if(e.endsWithParent&&e.parent)return u(e.parent,t)}function d(){null!=v.subLanguage?function(n){var r=1==n.length&&n[0];if(!r||pr(r)){var s=r?_r(e,t,r,k,!0,y[r]):$r(e,t,k,n.length?v.subLanguage:void 0);v.relevance>0&&(x+=s.relevance),r&&s.top&&(y[r]=s.top),c(s.language,!0),a(s.value),p()}else l(k)}(v.subLanguage):function(){if(v.keywords){var e=0;v.lexemesRe.lastIndex=0;for(var t=v.lexemesRe.exec(k);t;){l(k.substring(e,t.index));var n=g.case_insensitive?t[0].toLowerCase():t[0],r=v.keywords.hasOwnProperty(n)&&v.keywords[n];r?(x+=r[1],c(r[0],!1),l(t[0]),p()):l(t[0]),e=v.lexemesRe.lastIndex,t=v.lexemesRe.exec(k)}l(k.substr(e))}else l(k)}(),k=""}function m(e){e.className&&c(e.className,!1),v=Object.create(e,{parent:{value:v}})}function f(e,t){if(k+=e,null==t)return d(),0;for(var n,r=0,i=v.contains;r<i.length;r++){var o=i[r];if(xr(o.beginRe,t)){n=o;break}}if(n)return n.skip?k+=t:(n.excludeBegin&&(k+=t),d(),n.returnBegin||n.excludeBegin||(k=t)),m(n),n.returnBegin?0:t.length;var a=u(v,t);if(a){var l=v;l.skip?k+=t:(l.returnEnd||l.excludeEnd||(k+=t),d(),l.excludeEnd&&(k=t));do{v.className&&p(),v.skip||v.subLanguage||(x+=v.relevance),v=v.parent}while(v!==a.parent);return a.starts&&m(a.starts),l.returnEnd?0:t.length}if(!s&&xr(v.illegalRe,t))throw new Error('Illegal lexeme "'+t+'" for mode "'+(v.className||"<unnamed>")+'"');return k+=t,t.length||1}var g=pr(n);if(!g)throw new Error('Unknown language: "'+n+'"');var b,v=i||g,y={};for(b=v;b&&b!==g;b=b.parent)b.className&&h(b.className);var k="",x=0;try{for(var _=void 0,$=void 0,w=0;v.terminators.lastIndex=w,_=v.terminators.exec(r);)$=f(r.substring(w,_.index),_[0]),w=_.index+$;for(f(r.substr(w)),b=v;b.parent;b=b.parent)b.className&&p();if(1!=o.length)throw"unbalanced";var A=o[0],S=A.className,E=A.content,T=t.join(E),C=S?t.wrap(S,T):T;return{language:n,relevance:x,value:C,top:v}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{language:n,relevance:0,value:t.text(r)};throw e}}function $r(e,t,n,r){void 0===r&&(r=e.languages||hr());var s={language:"",relevance:0,value:t.text(n)};if(""!=n){for(var i=s,o=0,a=r.filter(pr);o<a.length;o++){var l=_r(e,t,a[o],n,!1);l.relevance>i.relevance&&(i=l),l.relevance>s.relevance&&(i=s,s=l)}i.language&&(s.second_best=i)}return s}var wr={classPrefix:"hljs-",useBr:!1};!function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,r=e;n<r.length;n++){cr(r[n])}}({name:"css",case_insensitive:!0,illegal:/[=/|'$]/,contains:[br,{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[dr,mr]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[br,{begin:/(?:[A-Z_.-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[dr,mr,vr]}]},vr,mr,dr,br,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]}]}]},kr);const Ar=(void 0===(Sr={classPrefix:""})&&(Sr={}),{render:tr,options:nr({},wr,Sr)});var Sr;const{PREFIX:Er,SLOT:Tr,SUFFIX:Cr,WRAPPER:Nr}=Cn,Rr="  ",zr=(e,t)=>((e,t)=>{if(!e)return e;const n=e.replace(/\t/g,Rr).split("\n"),r=n.reduce((e,t)=>{if(/^\s*$/.test(t))return e;const n=t.match(/^(\s*)/),r=n&&n[0].length;return null===e||r<e?r:e},null);return n.map(e=>t+e.substr(r)).join("\n")})(e.innerHTML.replace(/\s+$/,"").replace(/(="")/g,""),t),Or=(e,t,n,r,s)=>{let i="";const o=On(e,t,Er);Nn(o)&&(i+=`${zr(o,"").trim()}\n`);let a="",l=null;const c=On(e,t,Nr),h=zn(c);if(h){a=Rr;const e=h.outerHTML.match(/<([a-z]+)[^>]*>/);e&&(l=h.tagName.toLowerCase(),i+=`${e[0]}\n${Rr}`)}i+=`<${t}`,Object.keys(n).sort((e,t)=>e>t?1:-1).forEach(e=>{const{value:t,knobType:r,attribute:s}=n[e],o=s||e;switch(r){case"boolean":i+=t?` ${o}`:"";break;case"select":i+=""!==t?` ${o}="${t}"`:"";break;default:i+=null!=t?` ${o}="${t}"`:""}}),i+=">";const p=On(e,t,Tr);Nn(p)?i+=`${zr(p,`${a}${Rr}`)}\n${a}`:r.length&&(1!==r.length||r[0].name?(i+=r.reduce((e,t)=>{const{name:n,content:r}=t;return`${e}\n${a}${Rr}${n?`<div slot="${n}">${r}</div>`:r}`},""),i+=`\n${a}`):i+=r[0].content),i+=`</${t}>`,l&&(i+=`\n</${l}>`);const u=On(e,t,Cr);Nn(u)&&(i+=`\n${zr(u,"").trim()}\n`);const d=s.filter(e=>e.value!==e.default);d.length&&(i+=`\n<style>\n${Rr}${t} {\n`,d.forEach(e=>{e.value&&(i+=`${Rr}${Rr}${e.name}: ${e.value};\n`)}),i+=`${Rr}}\n</style>`);const{value:m}=function(e,t,n){var r=e.render,s=e.options;return"string"==typeof n?_r(s,r,n,t,!1):$r(s,r,t,n)}(Ar,i,["xml","css"]);return D`<pre><code>${Le(m)}</code></pre>`},Pr=e=>{const{knobType:t,default:n}=e;switch(t){case"boolean":return"false"!==n;case"number":return Number(n);default:return Ln(n)}},Lr=(e="")=>e.replace(" | undefined","").replace(" | null",""),Ir=(e,t,n="")=>{let r=t.filter(({name:t})=>!n.includes(t)&&!((e,t)=>{let n=!1;if(e){const r=function e(n){return n===HTMLElement?void 0:Object.getOwnPropertyDescriptor(n.prototype,t)||e(Object.getPrototypeOf(n))}(e);n=Boolean(r&&r.get&&void 0===r.set)}return n})(customElements.get(e),t));return r=r.map(e=>{const t={...e,knobType:Lr(e.type?.text)};return"string"==typeof t.default&&(t.value=Pr(t)),t}),r},Mr=(e,t)=>((e,t,n)=>En[e].filter(Rn(t,n)))(t,e,Cn.KNOB).map(e=>{const{attr:t,type:n}=e.dataset;let r=null;if(t){if("select"===n){const s=zn(e),i=s?Array.from(s.children).filter(e=>e instanceof HTMLOptionElement).map(e=>e.value):[];s instanceof HTMLSelectElement&&i.length>1&&(r={name:t,attribute:t,knobType:n,options:i})}"string"!==n&&"boolean"!==n||(r={name:t,attribute:t,knobType:n})}return r}).filter(Boolean),Dr=pe(class extends ue{constructor(e){if(super(e),e.type!==he)throw Error("templateContent can only be used in child bindings")}render(e){return this.vt===e?U:(this.vt=e,document.importNode(e.content,!0))}}),{HOST:Ur,PREFIX:Hr,SLOT:Br,SUFFIX:jr,WRAPPER:Fr}=Cn,qr=e=>"object"==typeof e&&Promise.resolve(e)===e;const Kr=pe(class extends ue{constructor(e){if(super(e),e.type!==he)throw new Error("renderer only supports binding to element")}render(e){return H}update(e,[t]){const n=e.options?.host,{tag:r}=t,s=[],[i,o,a,l,c]=[Ur,Hr,jr,Br,Fr].map(e=>On(t.id,r,e)),h=zn(c),p=h?h.localName:"";let u=n.querySelector(r);if(u){const e=n.querySelector('[part="demo-output"]'),r=u.parentElement;if(r&&r===e||r.localName===p)return((e,t)=>{const{knobs:n}=t;Object.keys(n).forEach(t=>{const{attribute:r,value:s,custom:i}=n[t];i&&r?"string"==typeof s&&s?e.setAttribute(r,s):e.removeAttribute(r):e[t]=s})})(u,t),U}const d=`</${r}>`,m=zn(i);Nn(o)&&s.push(Dr(o));let f=m?m.outerHTML:`<${r}>${d}`;if(Nn(l)&&(f=f.replace(d,`${l.innerHTML}${d}`)),p){const e=Le(`\n        <${p}>\n          ${f}\n        </${p}>\n      `);s.push(e)}else s.push(Le(f));return Nn(a)&&s.push(Dr(a)),Promise.resolve().then(()=>{u=n.querySelector(r),async function(e){let t=!1;const n=e,r=n.updateComplete;qr(r)&&(await r,t=!0);const s=!!n.componentOnReady&&n.componentOnReady();return qr(s)&&(await s,t=!0),t||await new Promise(requestAnimationFrame),n}(u).then(()=>{u.dispatchEvent(new CustomEvent("rendered",{detail:{component:u},bubbles:!0,composed:!0}))})}),D`${s}`}}),Wr=(e,t)=>{const{name:n,value:r}=e;return D`
    <input
      id=${t}
      type="text"
      .value=${String(r)}
      data-name=${n}
      part="input"
    />
  `},Zr=(e,t)=>{const{name:n,knobType:r,value:s,options:i}=e;let o;return o="select"===r&&Array.isArray(i)?D`
      <select id=${t} data-name=${n} data-type=${r} part="select">
        ${i.map(e=>D`<option value=${e}>${e}</option>`)}
      </select>
    `:"boolean"===r?D`
      <input
        id=${t}
        type="checkbox"
        .checked=${Boolean(s)}
        data-name=${n}
        data-type=${r}
        part="checkbox"
      />
    `:D`
      <input
        id=${t}
        type=${"number"===r?"number":"text"}
        .value=${null==s?"":String(s)}
        data-name=${n}
        data-type=${r}
        part="input"
      />
    `,o},Gr=(e,t)=>{const{name:n,content:r}=e;return D`
    <input
      id=${t}
      type="text"
      .value=${r}
      data-type="slot"
      data-slot=${n}
      part="input"
    />
  `},Vr=(e,t,n,r)=>{const s=e.map(e=>{const{name:t}=e,s=`${n}-${t||"default"}`,i="slot"===n?In(t):t;return D`
      <tr>
        <td>
          <label for=${s} part="knob-label">${i}</label>
        </td>
        <td>${r(e,s)}</td>
      </tr>
    `});return D`
    <h3 part="knobs-header" ?hidden=${0===e.length}>${t}</h3>
    <table>
      ${s}
    </table>
  `};class Qr extends oe{constructor(){super(...arguments),this.copyBtnText="copy",this.cssProps=[],this.events=[],this.slots=[],this.tag="",this.props=[],this.exclude="",this._whenDefined={}}createRenderRoot(){return this}render(){const{tag:e}=this;if(!customElements.get(e))return this._whenDefined[e]=customElements.whenDefined(e),this._whenDefined[e].then(()=>{this.tag===e&&this.requestUpdate()}),D`
        <div part="warning">
          Element ${e} is not defined. Have you imported it?
        </div>
      `;const[t,n,r,s,i]=[this.cssProps,this.events,this.slots,this.customKnobs,this.propKnobs].map(e=>0===e.length),o=this.vid,a=this.eventsController?.log||[],l=this.slotsController?.slots||[],c=this.stylesController?.css||[],h=r||Pn(o,e,Cn.SLOT);return D`
      <div part="demo-output" @rendered=${this.onRendered}>
        ${Kr({id:o,tag:e,knobs:this.knobs})}
      </div>
      <api-viewer-tabs part="demo-tabs">
        <api-viewer-tab heading="Source" slot="tab" part="tab"></api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <button @click=${this._onCopyClick} part="button">
            ${this.copyBtnText}
          </button>
          <div part="demo-snippet">
            ${Or(o,e,this.knobs,l,c)}
          </div>
        </api-viewer-panel>
        <api-viewer-tab
          heading="Knobs"
          slot="tab"
          part="tab"
          ?hidden=${i&&s&&h}
        ></api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <div part="knobs">
            <section part="knobs-column" @change=${this._onPropChanged}>
              ${Vr(this.propKnobs,"Properties","prop",Zr)}
              ${Vr(this.customKnobs,"Attributes","attr",Zr)}
            </section>
            <section
              ?hidden=${h}
              part="knobs-column"
              @change=${this._onSlotChanged}
            >
              ${Vr(l,"Slots","slot",Gr)}
            </section>
          </div>
        </api-viewer-panel>
        <api-viewer-tab
          heading="Styles"
          slot="tab"
          part="tab"
          ?hidden=${t}
        ></api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <div part="knobs" ?hidden=${t}>
            <section part="knobs-column" @change=${this._onCssChanged}>
              ${Vr(c,"Custom CSS Properties","css-prop",Wr)}
            </section>
          </div>
        </api-viewer-panel>
        <api-viewer-tab
          id="events"
          heading="Events"
          slot="tab"
          part="tab"
          ?hidden=${n}
        ></api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <div part="event-log" ?hidden=${n}>
            <button
              @click=${this._onLogClear}
              ?hidden=${!a.length}
              part="button"
            >
              Clear
            </button>
            ${xe(a.length?er(a):D`
                    <p part="event-record">
                      Interact with component to see the event log.
                    </p>
                  `)}
          </div>
        </api-viewer-panel>
      </api-viewer-tabs>
    `}willUpdate(e){e.has("tag")&&(this.knobs={},this.propKnobs=Ir(this.tag,this.props,this.exclude),this.customKnobs=Mr(this.tag,this.vid))}updated(e){if(e.has("tag")&&e.get("tag")){const e=this.renderRoot.querySelector("api-viewer-tabs");e&&e.selectFirst()}}_onLogClear(){this.eventsController.clear();const e=this.querySelector("#events");e&&e.focus()}_onCopyClick(){const e=this.renderRoot.querySelector('[part="demo-snippet"] code');if(e){const t=document.createRange();t.selectNodeContents(e);const n=window.getSelection();n.removeAllRanges(),n.addRange(t);try{document.execCommand("copy"),this.copyBtnText="done"}catch(e){console.error(e),this.copyBtnText="error"}setTimeout(()=>{this.copyBtnText="copy"},1e3),n.removeAllRanges()}}onRendered(e){const{component:t}=e.detail;this.initKnobs(t),this.initEvents(t),this.initSlots(t),this.initStyles(t)}initEvents(e){const t=this.eventsController;t&&(t.clear(),this.removeController(t)),this.eventsController=new Xn(this,e,this.events)}initKnobs(e){if(Pn(this.vid,this.tag,Cn.HOST)){const t=((e,t)=>e.filter(e=>{const{name:n,knobType:r}=e,s=Pr(e);return t[n]!==s||"boolean"===r&&s}))(this.propKnobs,e);t.forEach(t=>{this.syncKnob(e,t)})}}initSlots(e){const t=this.slotsController;t&&this.removeController(t),this.slotsController=new Yn(this,this.vid,e,this.slots)}initStyles(e){const t=this.stylesController;t&&this.removeController(t),this.stylesController=new Jn(this,e,this.cssProps)}getKnob(e){const t=t=>t.name===e||t.attribute===e;let n=this.propKnobs.find(t),r=!1;return n||(n=this.customKnobs.find(t),r=!0),{knob:n,custom:r}}setKnobs(e,t,n,r,s=!1){this.knobs={...this.knobs,[e]:{knobType:t,value:n,attribute:r,custom:s}}}syncKnob(e,t){const{name:n,knobType:r,attribute:s}=t,i=e[n];this.setKnobs(n,r,i,s),this.propKnobs=this.propKnobs.map(e=>e.name===n?{...e,value:i}:e)}_onCssChanged(e){const t=e.composedPath()[0];this.stylesController.setValue(t.dataset.name,t.value)}_onPropChanged(e){const t=e.composedPath()[0],{name:n,type:r}=t.dataset;let s;switch(r){case"boolean":s=t.checked;break;case"number":s=""===t.value?null:Number(t.value);break;default:s=t.value}const{knob:i,custom:o}=this.getKnob(n);i&&this.setKnobs(n,r,s,i.attribute,o)}_onSlotChanged(e){const t=e.composedPath()[0];this.slotsController.setValue(t.dataset.slot,t.value)}}async function Xr(e,t,n,r,s,i,o=""){const a=await e;if(!$n(a))return Mn;const l=Sn(a),c=((e,t)=>{const n=Sn(e),r=t?n.findIndex(e=>e?.name===t):0,s=n[r];if(!s)return null;const{name:i,module:o}=s.declaration,a=o?e.modules.find(e=>e.path===o.replace(/^\//,""))?.declarations?.find(e=>e.name===i):e.modules.flatMap(e=>e.declarations).find(e=>e?.name===i);if(!a||!(e=>e.customElement)(a))throw new Error(`Could not find declaration for ${t}`);return{customElement:!0,name:s.name,description:a?.description,slots:a.slots??[],attributes:a.attributes??[],members:a.members??[],events:a.events??[],cssParts:a.cssParts??[],cssProperties:[...a.cssProperties??[]].sort((e,t)=>e.name>t.name?1:-1)}})(a,s),h=((e=[])=>e.filter(An))(c.members);return D`
    <header part="header">
      <div part="header-title">&lt;${c.name}&gt;</div>
      <nav>
        <input
          id="docs"
          type="radio"
          name="section-${i}"
          value="docs"
          ?checked=${"docs"===t}
          @change=${r}
          part="radio-button"
        />
        <label part="radio-label" for="docs">Docs</label>
        <input
          id="demo"
          type="radio"
          name="section-${i}"
          value="demo"
          ?checked=${"demo"===t}
          @change=${r}
          part="radio-button"
        />
        <label part="radio-label" for="demo">Demo</label>
        <label part="select-label">
          <select
            @change=${n}
            .value=${s||""}
            ?hidden=${1===l.length}
            part="select"
          >
            ${l.map(e=>D`<option value=${e.name}>${e.name}</option>`)}
          </select>
        </label>
      </nav>
    </header>
    ${xe("docs"===t?D`
            <div ?hidden=${""===c.description} part="docs-description">
              ${_n(c.description)}
            </div>
            <api-viewer-docs
              .name=${c.name}
              .props=${h}
              .attrs=${c.attributes??[]}
              .events=${c.events??[]}
              .slots=${c.slots??[]}
              .cssParts=${c.cssParts??[]}
              .cssProps=${c.cssProperties??[]}
              part="docs-container"
            ></api-viewer-docs>
          `:D`
            <api-viewer-demo
              .tag=${c.name}
              .props=${h}
              .events=${c.events??[]}
              .slots=${c.slots??[]}
              .cssProps=${c.cssProperties??[]}
              .exclude=${o}
              .vid=${i}
              part="demo-container"
            ></api-viewer-demo>
          `)}
  `}e([ce()],Qr.prototype,"copyBtnText",void 0),e([ce({attribute:!1})],Qr.prototype,"cssProps",void 0),e([ce({attribute:!1})],Qr.prototype,"events",void 0),e([ce({attribute:!1})],Qr.prototype,"slots",void 0),e([ce()],Qr.prototype,"tag",void 0),e([ce({attribute:!1})],Qr.prototype,"props",void 0),e([ce()],Qr.prototype,"exclude",void 0),e([ce({type:Number})],Qr.prototype,"vid",void 0),e([ce({attribute:!1})],Qr.prototype,"customKnobs",void 0),e([ce({attribute:!1})],Qr.prototype,"knobs",void 0),e([ce({attribute:!1})],Qr.prototype,"propKnobs",void 0),customElements.define("api-viewer-demo",Qr);let Yr=0;class Jr extends(Dn(oe)){constructor(){super(),this.section="docs",this._id=Yr++}render(){return D`
      ${Oe(Xr(this.jsonFetched,this.section,this._onSelect,this._onToggle,this.selected,this._id,this.excludeKnobs))}
    `}firstUpdated(){this.setTemplates()}setTemplates(e){Tn(this._id,e||Array.from(this.querySelectorAll("template")))}_onSelect(e){this.selected=e.target.value}_onToggle(e){this.section=e.target.value}}e([ce()],Jr.prototype,"section",void 0),e([ce({type:String,attribute:"exclude-knobs"})],Jr.prototype,"excludeKnobs",void 0);var es=o`
  pre {
    margin: 0;
    color: black;
    background: none;
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
    text-align: left;
    white-space: pre-wrap;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    text-shadow: none;
  }

  code {
    font-family: inherit;
  }

  .comment {
    color: slategray;
  }

  .attr,
  .selector-tag {
    color: #690;
  }

  .css {
    color: #333;
  }

  .built_in {
    color: #dd4a68;
  }

  .meta {
    color: #e90;
    font-weight: bold;
  }

  .string {
    color: #07a;
  }

  .tag {
    color: #999;
  }

  .attribute,
  .name,
  .number {
    color: #905;
  }
`;const ts=o`
  button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    text-transform: uppercase;
    border: none;
    border-radius: 0.25em;
    cursor: pointer;
    background: var(--ave-button-background, rgba(0, 0, 0, 0.3));
    color: var(--ave-button-color, #fff);
  }

  button:focus,
  button:hover {
    background: var(--ave-button-active-background, rgba(0, 0, 0, 0.6));
  }

  api-viewer-demo {
    display: block;
  }

  [part='demo-tabs'],
  [part='demo-output'] {
    border-top: solid 1px var(--ave-border-color);
  }

  [part='demo-tabs'] [part='tab-panel'] {
    box-sizing: border-box;
    position: relative;
    background: #fafafa;
  }

  [part='demo-output'] {
    padding: 1.5rem;
    text-align: initial;
    transform: translateZ(0);
    overflow: hidden;
  }

  [part='demo-snippet'] {
    padding: 0.75rem 1rem;
  }

  .source {
    position: relative;
  }

  [part='knobs'] {
    display: flex;
    padding: 0 1rem 1rem;
  }

  [part='knobs-column'] {
    flex-shrink: 1;
  }

  [part='knobs-column']:not(:only-child) {
    flex-basis: 50%;
  }

  [part='knobs-header'] {
    font-size: 1rem;
    font-weight: bold;
    margin: 1rem 0 0.25rem;
  }

  td {
    padding: 0.25rem 0.25rem 0.25rem 0;
    font-size: 0.9375rem;
    white-space: nowrap;
  }

  [part='event-log'] {
    padding: 0 1rem;
    min-height: 50px;
    max-height: 200px;
    overflow: auto;
  }

  [part='event-record'] {
    margin: 0 0 0.25rem;
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
  }

  [part='event-record']:first-of-type {
    margin-top: 1rem;
  }

  [part='event-record']:last-of-type {
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    [part='knobs'] {
      flex-direction: column;
    }

    [part='knobs-column']:not(:last-child) {
      margin-bottom: 1rem;
    }

    [part='input'] {
      max-width: 8rem;
    }
  }
`;var ns=o`
  ${ts}
  ${es}
`,rs=o`
  p,
  ul,
  ol {
    margin: 1rem 0;
    font-size: 0.9375rem;
    line-height: 1.5;
  }

  a {
    color: var(--ave-link-color);
  }

  a:hover {
    color: var(--ave-link-hover-color);
  }

  pre {
    white-space: pre-wrap;
  }

  api-viewer-docs {
    display: block;
  }

  [part='tab'][heading^='CSS'] {
    min-width: 120px;
    font-size: 0.8125rem;
  }

  [part='docs-item'] {
    display: block;
    padding: 0.5rem;
    color: var(--ave-item-color);
  }

  [part='docs-item']:not(:first-of-type) {
    border-top: solid 1px var(--ave-border-color);
  }

  [part='docs-description'] {
    display: block;
    padding: 0 1rem;
    border-bottom: solid 1px var(--ave-border-color);
  }

  [part='docs-row'] {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  [part='docs-column'] {
    box-sizing: border-box;
    flex-basis: 25%;
    padding-right: 0.5rem;
  }

  [part='docs-column']:only-child {
    flex-basis: 100%;
  }

  .column-name-css,
  .column-type {
    flex-basis: 50%;
  }

  [part='docs-label'] {
    color: var(--ave-label-color);
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.1rem;
  }

  [part='docs-value'] {
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  [part='docs-markdown'] p,
  [part='docs-markdown'] ul,
  [part='docs-markdown'] ol {
    margin: 0.5rem 0;
  }

  .accent {
    color: var(--ave-accent-color);
  }

  @media (max-width: 480px) {
    .column-type {
      margin-top: 1rem;
    }

    .column-name-css,
    .column-type {
      flex-basis: 100%;
    }

    [part='tab'][heading^='CSS'] {
      max-width: 125px;
    }
  }
`,ss=o`
  :host {
    display: block;
    text-align: left;
    box-sizing: border-box;
    max-width: 800px;
    min-width: 360px;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
    border: 1px solid var(--ave-border-color);
    border-radius: var(--ave-border-radius);

    --ave-primary-color: #01579b;
    --ave-accent-color: #d63200;
    --ave-border-color: rgba(0, 0, 0, 0.12);
    --ave-border-radius: 4px;
    --ave-header-color: #fff;
    --ave-item-color: rgba(0, 0, 0, 0.87);
    --ave-label-color: #424242;
    --ave-link-color: #01579b;
    --ave-link-hover-color: #d63200;
    --ave-tab-indicator-size: 2px;
    --ave-tab-color: rgba(0, 0, 0, 0.54);
    --ave-monospace-font: Menlo, 'DejaVu Sans Mono', 'Liberation Mono', Consolas,
      'Courier New', monospace;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    background: var(--ave-header-background, var(--ave-primary-color));
    border-top-left-radius: var(--ave-border-radius);
    border-top-right-radius: var(--ave-border-radius);
  }

  nav {
    display: flex;
    align-items: center;
  }

  [part='header-title'] {
    color: var(--ave-header-color);
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  [part='select-label'] {
    margin-left: 0.5rem;
  }

  [part='warning'] {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    header {
      flex-direction: column;
    }

    nav {
      margin-top: 0.5rem;
    }
  }
`,is=o`
  ${ss}
  ${rs}
  ${ns}

  [part='radio-label'] {
    margin: 0 0.75rem 0 0.25rem;
    color: var(--ave-header-color);
    font-size: 0.875rem;
  }
`;customElements.define("api-viewer",class extends Jr{static get styles(){return is}firstUpdated(){this.setTemplates()}setTemplates(e){Tn(this._id,e||Array.from(this.querySelectorAll("template")))}})}();
