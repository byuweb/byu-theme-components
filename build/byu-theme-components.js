(function(t,r,n,i){n=t.createElement(r),n.async=1,n.src="//"+(location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",i=t.getElementsByTagName(r)[0],i.parentNode.insertBefore(n,i)})(document,"script");function _toArray(e){return _arrayWithHoles(e)||_iterableToArray(e)||_nonIterableRest()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:t+""}function _decorate(e,t,n,s){var a=_getDecoratorsApi();if(s)for(var o=0;o<s.length;o++)a=s[o](a);var d=t(function(e){a.initializeInstanceElements(e,r.elements)},n),r=a.decorateClass(_coalesceClassElements(d.d.map(_createElementDescriptor)),e);return a.initializeClassElements(d.F,r.elements),a.runClassFinishers(d.F,r.finishers)}function _getDecoratorsApi(){_getDecoratorsApi=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(n){t.forEach(function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var s="static"===i?e:r;this.defineClassElement(s,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,i)},this),e.forEach(function(e){if(!_hasDecorators(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)},this),!t)return{elements:r,finishers:n};var s=this.decorateConstructor(r,t);return n.push.apply(n,s.finishers),s.finishers=n,s},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r,n=[],s=[],a=e.decorators,o=a.length-1;0<=o;o--){r=t[e.placement],r.splice(r.indexOf(e.key),1);var d=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,a[o])(d)||d);e=l.element,this.addElementPlacement(e,t),l.finisher&&s.push(l.finisher);var p=l.extras;if(p){for(var c=0;c<p.length;c++)this.addElementPlacement(p[c],t);n.push.apply(n,p)}}return{element:e,finishers:s,extras:n}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;0<=n;n--){var s=this.fromClassDescriptor(e),a=this.toClassDescriptor((0,t[n])(s)||s);if(void 0!==a.finisher&&r.push(a.finisher),void 0!==a.elements){e=a.elements;for(var o=0;o<e.length-1;o++)for(var d=o+1;d<e.length;d++)if(e[o].key===e[d].key&&e[o].placement===e[d].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){return void 0===e?void 0:_toArray(e).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=e.kind+"";if("method"!=t&&"field"!=t)throw new TypeError("An element descriptor's .kind property must be either \"method\" or \"field\", but a decorator created an element descriptor with .kind \""+t+"\"");var r=_toPropertyKey(e.key),n=e.placement+"";if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError("An element descriptor's .placement property must be one of \"static\", \"prototype\" or \"own\", but a decorator created an element descriptor with .placement \""+n+"\"");var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"==t?(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer):this.disallowProperty(e,"initializer","A method descriptor"),s},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=_optionalCallableProperty(e,"finisher"),n=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:n}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=e.kind+"";if("class"!=t)throw new TypeError("A class descriptor's .kind property must be \"class\", but a decorator created a class descriptor with .kind \""+t+"\"");this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=_optionalCallableProperty(e,"finisher"),n=this.toElementDescriptors(e.elements);return{elements:n,finisher:r}},runClassFinishers:function(e,t){for(var r,n=0;n<t.length;n++)if(r=(0,t[n])(e),void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}return e},disallowProperty:function(e,t,r){if(e[t]!==void 0)throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function _createElementDescriptor(e){var t,r=_toPropertyKey(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function _coalesceGetterSetter(e,t){e.descriptor.get===void 0?t.descriptor.set=e.descriptor.set:t.descriptor.get=e.descriptor.get}function _coalesceClassElements(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===a.key&&e.placement===a.placement},n=0;n<e.length;n++){var s,a=e[n];if(!("method"===a.kind&&(s=t.find(r))))t.push(a);else if(_isDataDescriptor(a.descriptor)||_isDataDescriptor(s.descriptor)){if(_hasDecorators(a)||_hasDecorators(s))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");s.descriptor=a.descriptor}else{if(_hasDecorators(a)){if(_hasDecorators(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");s.decorators=a.decorators}_coalesceGetterSetter(a,s)}}return t}function _hasDecorators(e){return e.decorators&&e.decorators.length}function _isDataDescriptor(e){return e!==void 0&&(e.value!==void 0||e.writable!==void 0)}function _optionalCallableProperty(e,t){var r=e[t];if(r!==void 0&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}const directives=new WeakMap,isDirective=e=>"function"==typeof e&&directives.has(e),isCEPolyfill=window.customElements!==void 0&&window.customElements.polyfillWrapFlushCallback!==void 0,removeNodes=(e,t,r=null)=>{for(let i=t;i!==r;){const t=i.nextSibling;e.removeChild(i),i=t}},noChange={},nothing={},marker=`{{lit-${(Math.random()+"").slice(2)}}}`,nodeMarker=`<!--${marker}-->`,markerRegex=new RegExp(`${marker}|${nodeMarker}`),boundAttributeSuffix="$lit$";class Template{constructor(e,t){this.parts=[],this.element=t;let r=-1,n=0;const i=[],s=t=>{const a=t.content,o=document.createTreeWalker(a,133,null,!1);for(let a=0;o.nextNode();){r++;const t=o.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const s=t.attributes;let a=0;for(let e=0;e<s.length;e++)0<=s[e].value.indexOf(marker)&&a++;for(;0<a--;){const i=e.strings[n],s=lastAttributeNameRegex.exec(i)[2],a=s.toLowerCase()+boundAttributeSuffix,o=t.getAttribute(a),d=o.split(markerRegex);this.parts.push({type:"attribute",index:r,name:s,strings:d}),t.removeAttribute(a),n+=d.length-1}}"TEMPLATE"===t.tagName&&s(t)}else if(3===t.nodeType){const e=t.data;if(0<=e.indexOf(marker)){const s=t.parentNode,a=e.split(markerRegex),o=a.length-1;for(let e=0;e<o;e++)s.insertBefore(""===a[e]?createMarker():document.createTextNode(a[e]),t),this.parts.push({type:"node",index:++r});""===a[o]?(s.insertBefore(createMarker(),t),i.push(t)):t.data=a[o],n+=o}}else if(8===t.nodeType)if(t.data===marker){const e=t.parentNode;(null===t.previousSibling||r===a)&&(r++,e.insertBefore(createMarker(),t)),a=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(i.push(t),r--),n++}else for(let e=-1;-1!==(e=t.data.indexOf(marker,e+1));)this.parts.push({type:"node",index:-1})}};s(t);for(const r of i)r.parentNode.removeChild(r)}}const isTemplatePartActive=e=>-1!==e.index,createMarker=()=>document.createComment(""),lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class TemplateInstance{constructor(e,t,r){this._parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this._parts)void 0!==r&&r.setValue(e[t]),t++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const e=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let r=0,n=0;const i=e=>{const s=document.createTreeWalker(e,133,null,!1);for(let a=s.nextNode();r<t.length&&null!==a;){const e=t[r];if(!isTemplatePartActive(e))this._parts.push(void 0),r++;else if(n===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(a,e.name,e.strings,this.options));r++}else n++,"TEMPLATE"===a.nodeName&&i(a.content),a=s.nextNode()}};return i(e),isCEPolyfill&&(document.adoptNode(e),customElements.upgrade(e)),e}}class TemplateResult{constructor(e,t,r,n){this.strings=e,this.values=t,this.type=r,this.processor=n}getHTML(){const e=this.strings.length-1;let t="";for(let r=0;r<e;r++){const e=this.strings[r],n=lastAttributeNameRegex.exec(e);t+=n?e.substr(0,n.index)+n[1]+n[2]+boundAttributeSuffix+n[3]+marker:e+nodeMarker}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const isPrimitive=e=>null===e||"object"!=typeof e&&"function"!=typeof e;class AttributeCommitter{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let n=0;n<r.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new AttributePart(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let n=0;n<t;n++){r+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const n of e)r+="string"==typeof n?n:n+"";else r+="string"==typeof e?e:e+""}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class AttributePart{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===noChange||isPrimitive(e)&&e===this.value||(this.value=e,!isDirective(e)&&(this.committer.dirty=!0))}commit(){for(;isDirective(this.value);){const e=this.value;this.value=noChange,e(this)}this.value===noChange||this.committer.commit()}}class NodePart{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(createMarker()),this.endNode=e.appendChild(createMarker())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=createMarker()),e._insert(this.endNode=createMarker())}insertAfterPart(e){e._insert(this.startNode=createMarker()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;isDirective(this._pendingValue);){const e=this._pendingValue;this._pendingValue=noChange,e(this)}const e=this._pendingValue;e===noChange||(isPrimitive(e)?e!==this.value&&this._commitText(e):e instanceof TemplateResult?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===nothing?(this.value=nothing,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value===e||(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:e+"")),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof TemplateInstance&&this.value.template===t)this.value.update(e.values);else{const r=new TemplateInstance(t,e.processor,this.options),n=r._clone();r.update(e.values),this._commitNode(n),this.value=r}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,n=0;for(const i of e)r=t[n],void 0===r&&(r=new NodePart(this.options),t.push(r),0==n?r.appendIntoPart(this):r.insertAfterPart(t[n-1])),r.setValue(i),r.commit(),n++;n<t.length&&(t.length=n,this.clear(r&&r.endNode))}clear(e=this.startNode){removeNodes(this.startNode.parentNode,e.nextSibling,this.endNode)}}class BooleanAttributePart{constructor(e,t,r){if(this.value=void 0,this._pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this._pendingValue=e}commit(){for(;isDirective(this._pendingValue);){const e=this._pendingValue;this._pendingValue=noChange,e(this)}if(this._pendingValue!==noChange){const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=noChange}}}class PropertyCommitter extends AttributeCommitter{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new PropertyPart(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class PropertyPart extends AttributePart{}let eventOptionsSupported=!1;try{const e={get capture(){return eventOptionsSupported=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class EventPart{constructor(e,t,r){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this._boundHandleEvent=t=>this.handleEvent(t)}setValue(e){this._pendingValue=e}commit(){for(;isDirective(this._pendingValue);){const e=this._pendingValue;this._pendingValue=noChange,e(this)}if(this._pendingValue===noChange)return;const e=this._pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive);r&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),null!=e&&(null==t||r)&&(this._options=getOptions(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=noChange}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const getOptions=e=>e&&(eventOptionsSupported?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);class DefaultTemplateProcessor{handleAttributeExpressions(e,t,r,n){const i=t[0];if("."===i){const n=new PropertyCommitter(e,t.slice(1),r);return n.parts}if("@"===i)return[new EventPart(e,t.slice(1),n.eventContext)];if("?"===i)return[new BooleanAttributePart(e,t.slice(1),r)];const s=new AttributeCommitter(e,t,r);return s.parts}handleTextExpression(e){return new NodePart(e)}}const defaultTemplateProcessor=new DefaultTemplateProcessor;function templateFactory(e){let t=templateCaches.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},templateCaches.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(marker);return r=t.keyString.get(n),void 0===r&&(r=new Template(e,e.getTemplateElement()),t.keyString.set(n,r)),t.stringsArray.set(e.strings,r),r}const templateCaches=new Map,parts=new WeakMap,render=(e,t,r)=>{let n=parts.get(t);n===void 0&&(removeNodes(t,t.firstChild),parts.set(t,n=new NodePart(Object.assign({templateFactory},r))),n.appendInto(t)),n.setValue(e),n.commit()};(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const html=(e,...t)=>new TemplateResult(e,t,"html",defaultTemplateProcessor),walkerNodeFilter=133;function removeNodesFromTemplate(e,t){const{element:{content:n},parts:r}=e,i=document.createTreeWalker(n,walkerNodeFilter,null,!1);let s=nextActiveIndexInTemplateParts(r),a=r[s],o=-1,d=0;const l=[];for(let n=null;i.nextNode();){o++;const e=i.currentNode;for(e.previousSibling===n&&(n=null),t.has(e)&&(l.push(e),null===n&&(n=e)),null!==n&&d++;a!==void 0&&a.index===o;)a.index=null===n?a.index-d:-1,s=nextActiveIndexInTemplateParts(r,s),a=r[s]}l.forEach(e=>e.parentNode.removeChild(e))}const countNodes=e=>{let t=11===e.nodeType?0:1;for(const r=document.createTreeWalker(e,walkerNodeFilter,null,!1);r.nextNode();)t++;return t},nextActiveIndexInTemplateParts=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(isTemplatePartActive(t))return r}return-1};function insertNodeIntoTemplate(e,t,r=null){const{element:{content:i},parts:n}=e;if(null===r||void 0===r)return void i.appendChild(t);const s=document.createTreeWalker(i,walkerNodeFilter,null,!1);let a=nextActiveIndexInTemplateParts(n),o=0,d=-1;for(;s.nextNode();){d++;const e=s.currentNode;for(e===r&&(o=countNodes(t),r.parentNode.insertBefore(t,r));-1!==a&&n[a].index===d;){if(0<o){for(;-1!==a;)n[a].index+=o,a=nextActiveIndexInTemplateParts(n,a);return}a=nextActiveIndexInTemplateParts(n,a)}}}const getTemplateCacheKey=(e,t)=>`${e}--${t}`;let compatibleShadyCSSVersion=!0;"undefined"==typeof window.ShadyCSS?compatibleShadyCSSVersion=!1:"undefined"==typeof window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),compatibleShadyCSSVersion=!1);const shadyTemplateFactory=e=>t=>{const r=getTemplateCacheKey(t.type,e);let n=templateCaches.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},templateCaches.set(r,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(marker);if(i=n.keyString.get(s),void 0===i){const r=t.getTemplateElement();compatibleShadyCSSVersion&&window.ShadyCSS.prepareTemplateDom(r,e),i=new Template(t,r),n.keyString.set(s,i)}return n.stringsArray.set(t.strings,i),i},TEMPLATE_TYPES=["html","svg"],removeStylesFromLitTemplates=e=>{TEMPLATE_TYPES.forEach(t=>{const r=templateCaches.get(getTemplateCacheKey(t,e));r!==void 0&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),removeNodesFromTemplate(e,r)})})},shadyRenderSet=new Set,prepareTemplateStyles=(e,t,r)=>{shadyRenderSet.add(r);const n=e.querySelectorAll("style");if(0===n.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,r);const s=document.createElement("style");for(let a=0;a<n.length;a++){const e=n[a];e.parentNode.removeChild(e),s.textContent+=e.textContent}if(removeStylesFromLitTemplates(r),insertNodeIntoTemplate(t,s,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,r),window.ShadyCSS.nativeShadow){const r=t.element.content.querySelector("style");e.insertBefore(r.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(s,t.element.content.firstChild);const e=new Set;e.add(s),removeNodesFromTemplate(t,e)}},render$1=(e,t,r)=>{const n=r.scopeName,i=parts.has(t),s=t instanceof ShadowRoot&&compatibleShadyCSSVersion&&e instanceof TemplateResult,a=s&&!shadyRenderSet.has(n),o=a?document.createDocumentFragment():t;if(render(e,o,Object.assign({templateFactory:shadyTemplateFactory(n)},r)),a){const e=parts.get(o);parts.delete(o),e.value instanceof TemplateInstance&&prepareTemplateStyles(o,e.value.template,n),removeNodes(t,t.firstChild),t.appendChild(o),parts.set(t,e)}!i&&s&&window.ShadyCSS.styleElement(t.host)};window.JSCompiler_renameProperty=e=>e;const defaultConverter={toAttribute(e,t){return t===Boolean?e?"":null:t===Object||t===Array?null==e?e:JSON.stringify(e):e},fromAttribute(e,t){return t===Boolean?null!==e:t===Number?null===e?null:+e:t===Object||t===Array?JSON.parse(e):e}},notEqual=(e,t)=>t!==e&&(t===t||e===e),defaultPropertyDeclaration={attribute:!0,type:String,converter:defaultConverter,reflect:!1,hasChanged:notEqual},microtaskPromise=Promise.resolve(!0),STATE_HAS_UPDATED=1,STATE_UPDATE_REQUESTED=4,STATE_IS_REFLECTING_TO_ATTRIBUTE=8,STATE_IS_REFLECTING_TO_PROPERTY=16,STATE_HAS_CONNECTED=32;class UpdatingElement extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=microtaskPromise,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const n=this._attributeNameForProperty(r,t);void 0!==n&&(this._attributeToPropertyMap.set(n,r),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=defaultPropertyDeclaration){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[r]},set(t){const n=this[e];this[r]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){if(!(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)){const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[])];for(const r of t)this.createProperty(r,e[r])}}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=notEqual){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,n=t.converter||defaultConverter,i="function"==typeof n?n:n.fromAttribute;return i?i(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,n=t.converter,i=n&&n.toAttribute||defaultConverter.toAttribute;return i(e,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState|=STATE_HAS_CONNECTED,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=defaultPropertyDeclaration){const n=this.constructor,i=n._attributeNameForProperty(e,r);if(i!==void 0){const e=n._propertyValueToAttribute(t,r);if(e===void 0)return;this._updateState|=STATE_IS_REFLECTING_TO_ATTRIBUTE,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState&=~STATE_IS_REFLECTING_TO_ATTRIBUTE}}_attributeToProperty(e,t){if(this._updateState&STATE_IS_REFLECTING_TO_ATTRIBUTE)return;const r=this.constructor,n=r._attributeToPropertyMap.get(e);if(n!==void 0){const e=r._classProperties.get(n)||defaultPropertyDeclaration;this._updateState|=STATE_IS_REFLECTING_TO_PROPERTY,this[n]=r._propertyValueFromAttribute(t,e),this._updateState&=~STATE_IS_REFLECTING_TO_PROPERTY}}_requestUpdate(e,t){let r=!0;if(e!==void 0){const n=this.constructor,i=n._classProperties.get(e)||defaultPropertyDeclaration;n._valueHasChanged(this[e],t,i.hasChanged)?(!this._changedProperties.has(e)&&this._changedProperties.set(e,t),!0===i.reflect&&!(this._updateState&STATE_IS_REFLECTING_TO_PROPERTY)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState|=STATE_UPDATE_REQUESTED;let e,t;const r=this._updatePromise;this._updatePromise=new Promise((r,n)=>{e=r,t=n});try{await r}catch(t){}this._hasConnected||(await new Promise(e=>this._hasConnectedResolver=e));try{const e=this.performUpdate();null!=e&&(await e)}catch(r){t(r)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&STATE_HAS_CONNECTED}get _hasRequestedUpdate(){return this._updateState&STATE_UPDATE_REQUESTED}get hasUpdated(){return this._updateState&STATE_HAS_UPDATED}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const r=this._changedProperties;try{t=this.shouldUpdate(r),t&&this.update(r)}catch(r){throw t=!1,r}finally{this._markUpdated()}t&&(!(this._updateState&STATE_HAS_UPDATED)&&(this._updateState|=STATE_HAS_UPDATED,this.firstUpdated(r)),this.updated(r))}_markUpdated(){this._changedProperties=new Map,this._updateState&=~STATE_UPDATE_REQUESTED}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&0<this._reflectingProperties.size&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}UpdatingElement.finalized=!0;const legacyCustomElement=(e,t)=>(window.customElements.define(e,t),t),standardCustomElement=(e,t)=>{const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){window.customElements.define(e,t)}}},customElement=e=>t=>"function"==typeof t?legacyCustomElement(e,t):standardCustomElement(e,t),standardProperty=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign({},t,{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},legacyProperty=(e,t,r)=>{t.constructor.createProperty(r,e)};function property(e){return(t,r)=>r===void 0?standardProperty(e,t):legacyProperty(e,t,r)}const supportsAdoptingStyleSheets="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,constructionToken=Symbol();class CSSResult{constructor(e,t){if(t!==constructionToken)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(supportsAdoptingStyleSheets?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const textFromCSSResult=e=>{if(e instanceof CSSResult)return e.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},css=(e,...t)=>{const r=t.reduce((t,r,n)=>t+textFromCSSResult(r)+e[n+1],e[0]);return new CSSResult(r,constructionToken)};(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");function arrayFlat(e,t=[]){for(let r=0,n=e.length;r<n;r++){const n=e[r];Array.isArray(n)?arrayFlat(n,t):t.push(n)}return t}const flattenStyles=e=>e.flat?e.flat(1/0):arrayFlat(e);class LitElement extends UpdatingElement{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){const r=flattenStyles(e),n=r.reduceRight((e,t)=>(e.add(t),e),new Set);n.forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0===e.length||(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?supportsAdoptingStyleSheets?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof TemplateResult&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}LitElement.finalized=!0,LitElement.render=render$1;const style=css`:host{display:block;background-color:green}`;let BYUFooter=_decorate([customElement("byu-footer")],function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[property()],key:"foo",value(){return"footer property"}},{kind:"field",static:!0,key:"styles",value(){return style}},{kind:"method",key:"render",value:function(){return html`
        <p>${this.foo}</p>
    `}}]}},LitElement);const style$1=css`.byu-site-banner .byu-link{color:red}`;let BYUHeader=_decorate([customElement("byu-header")],function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[property()],key:"foo",value(){return"header property"}},{kind:"field",static:!0,key:"styles",value(){return style$1}},{kind:"method",key:"render",value:function(){return html`
        <header role="banner" class="byu-header">
    <div class="byu-site-banner">

        <a class="byu-link" href="https://byu.edu">
            <span class="visually-hidden">BYU</span>
        </a>

        <div class="byu-titles">

            <h1 class="byu-site-title">
                <a href="/">Mission &amp; Aims</a>
            </h1>

            <button class="byu-menu-button" aria-expanded="false">Menu</button>

        </div>

        <div class="byu-action-id-search">

        </div>
    </div>

</header>

    `}}]}},LitElement);export{BYUFooter,BYUHeader};
//# sourceMappingURL=byu-theme-components.js.map
