(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const Pi={prefix:"",suffix:"",tag(s){return this.prefix+s+this.suffix},enabled:[],namemap:new Map,reflect:!1,cssvar:"godown-c"},B=Ti(globalThis.GodownWebComponentsCONF,Pi);function Ti(s,t=B){return Object.assign(t,s),t.reflect&&(globalThis.GodownWebComponentsCONF=t),t}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=window,De=ee.ShadowRoot&&(ee.ShadyCSS===void 0||ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ne=Symbol(),Ye=new WeakMap;let ui=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(De&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Ye.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ye.set(e,t))}return t}toString(){return this.cssText}};const pi=s=>new ui(typeof s=="string"?s:s+"",void 0,Ne),m=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new ui(e,s,Ne)},Li=(s,t)=>{De?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),r=ee.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)})},Ze=De?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return pi(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we;const re=window,Ge=re.trustedTypes,Bi=Ge?Ge.emptyScript:"",Ke=re.reactiveElementPolyfillSupport,Oe={toAttribute(s,t){switch(t){case Boolean:s=s?Bi:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},fi=(s,t)=>t!==s&&(t==t||s==s),_e={attribute:!0,type:String,converter:Oe,reflect:!1,hasChanged:fi},je="finalized";let yt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const r=this._$Ep(i,e);r!==void 0&&(this._$Ev.set(r,i),t.push(r))}),t}static createProperty(t,e=_e){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const o=this[t];this[e]=r,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_e}static finalize(){if(this.hasOwnProperty(je))return!1;this[je]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of i)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(Ze(r))}else t!==void 0&&e.push(Ze(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Li(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=_e){var r;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const n=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:Oe).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,o=r._$Ev.get(t);if(o!==void 0&&this._$El!==o){const n=r.getPropertyOptions(o),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:Oe;this._$El=o,this[o]=a.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||fi)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,o)=>this[o]=r),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(i)):this._$Ek()}catch(r){throw e=!1,this._$Ek(),r}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};yt[je]=!0,yt.elementProperties=new Map,yt.elementStyles=[],yt.shadowRootOptions={mode:"open"},Ke==null||Ke({ReactiveElement:yt}),((we=re.reactiveElementVersions)!==null&&we!==void 0?we:re.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe;const se=window,_t=se.trustedTypes,Je=_t?_t.createPolicy("lit-html",{createHTML:s=>s}):void 0,Pe="$lit$",K=`lit$${(Math.random()+"").slice(9)}$`,vi="?"+K,zi=`<${vi}>`,ht=document,zt=()=>ht.createComment(""),Dt=s=>s===null||typeof s!="object"&&typeof s!="function",mi=Array.isArray,Di=s=>mi(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",$e=`[ 	
\f\r]`,Lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qe=/-->/g,ti=/>/g,at=RegExp(`>|${$e}(?:([^\\s"'>=/]+)(${$e}*=${$e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ei=/'/g,ii=/"/g,gi=/^(?:script|style|textarea|title)$/i,Ni=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),c=Ni(1),J=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),oi=new WeakMap,lt=ht.createTreeWalker(ht,129,null,!1);function bi(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Je!==void 0?Je.createHTML(t):t}const Ui=(s,t)=>{const e=s.length-1,i=[];let r,o=t===2?"<svg>":"",n=Lt;for(let a=0;a<e;a++){const u=s[a];let v,p,b=-1,g=0;for(;g<u.length&&(n.lastIndex=g,p=n.exec(u),p!==null);)g=n.lastIndex,n===Lt?p[1]==="!--"?n=Qe:p[1]!==void 0?n=ti:p[2]!==void 0?(gi.test(p[2])&&(r=RegExp("</"+p[2],"g")),n=at):p[3]!==void 0&&(n=at):n===at?p[0]===">"?(n=r??Lt,b=-1):p[1]===void 0?b=-2:(b=n.lastIndex-p[2].length,v=p[1],n=p[3]===void 0?at:p[3]==='"'?ii:ei):n===ii||n===ei?n=at:n===Qe||n===ti?n=Lt:(n=at,r=void 0);const x=n===at&&s[a+1].startsWith("/>")?" ":"";o+=n===Lt?u+zi:b>=0?(i.push(v),u.slice(0,b)+Pe+u.slice(b)+K+x):u+K+(b===-2?(i.push(void 0),a):x)}return[bi(s,o+(s[e]||"<?>")+(t===2?"</svg>":"")),i]};class Nt{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0;const a=t.length-1,u=this.parts,[v,p]=Ui(t,e);if(this.el=Nt.createElement(v,i),lt.currentNode=this.el.content,e===2){const b=this.el.content,g=b.firstChild;g.remove(),b.append(...g.childNodes)}for(;(r=lt.nextNode())!==null&&u.length<a;){if(r.nodeType===1){if(r.hasAttributes()){const b=[];for(const g of r.getAttributeNames())if(g.endsWith(Pe)||g.startsWith(K)){const x=p[n++];if(b.push(g),x!==void 0){const R=r.getAttribute(x.toLowerCase()+Pe).split(K),O=/([.?@])?(.*)/.exec(x);u.push({type:1,index:o,name:O[2],strings:R,ctor:O[1]==="."?Mi:O[1]==="?"?qi:O[1]==="@"?Wi:ue})}else u.push({type:6,index:o})}for(const g of b)r.removeAttribute(g)}if(gi.test(r.tagName)){const b=r.textContent.split(K),g=b.length-1;if(g>0){r.textContent=_t?_t.emptyScript:"";for(let x=0;x<g;x++)r.append(b[x],zt()),lt.nextNode(),u.push({type:2,index:++o});r.append(b[g],zt())}}}else if(r.nodeType===8)if(r.data===vi)u.push({type:2,index:o});else{let b=-1;for(;(b=r.data.indexOf(K,b+1))!==-1;)u.push({type:7,index:o}),b+=K.length-1}o++}}static createElement(t,e){const i=ht.createElement("template");return i.innerHTML=t,i}}function xt(s,t,e=s,i){var r,o,n,a;if(t===J)return t;let u=i!==void 0?(r=e._$Co)===null||r===void 0?void 0:r[i]:e._$Cl;const v=Dt(t)?void 0:t._$litDirective$;return(u==null?void 0:u.constructor)!==v&&((o=u==null?void 0:u._$AO)===null||o===void 0||o.call(u,!1),v===void 0?u=void 0:(u=new v(s),u._$AT(s,e,i)),i!==void 0?((n=(a=e)._$Co)!==null&&n!==void 0?n:a._$Co=[])[i]=u:e._$Cl=u),u!==void 0&&(t=xt(s,u._$AS(s,t.values),u,i)),t}class Hi{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:r}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:ht).importNode(i,!0);lt.currentNode=o;let n=lt.nextNode(),a=0,u=0,v=r[0];for(;v!==void 0;){if(a===v.index){let p;v.type===2?p=new Ft(n,n.nextSibling,this,t):v.type===1?p=new v.ctor(n,v.name,v.strings,this,t):v.type===6&&(p=new Vi(n,this,t)),this._$AV.push(p),v=r[++u]}a!==(v==null?void 0:v.index)&&(n=lt.nextNode(),a++)}return lt.currentNode=ht,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Ft{constructor(t,e,i,r){var o;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cp=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=xt(this,t,e),Dt(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==J&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Di(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==$&&Dt(this._$AH)?this._$AA.nextSibling.data=t:this.$(ht.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Nt.createElement(bi(r.h,r.h[0]),this.options)),r);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const n=new Hi(o,this),a=n.u(this.options);n.v(i),this.$(a),this._$AH=n}}_$AC(t){let e=oi.get(t.strings);return e===void 0&&oi.set(t.strings,e=new Nt(t)),e}T(t){mi(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new Ft(this.k(zt()),this.k(zt()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class ue{constructor(t,e,i,r,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const o=this.strings;let n=!1;if(o===void 0)t=xt(this,t,e,0),n=!Dt(t)||t!==this._$AH&&t!==J,n&&(this._$AH=t);else{const a=t;let u,v;for(t=o[0],u=0;u<o.length-1;u++)v=xt(this,a[i+u],e,u),v===J&&(v=this._$AH[u]),n||(n=!Dt(v)||v!==this._$AH[u]),v===$?t=$:t!==$&&(t+=(v??"")+o[u+1]),this._$AH[u]=v}n&&!r&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Mi extends ue{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}const Ii=_t?_t.emptyScript:"";class qi extends ue{constructor(){super(...arguments),this.type=4}j(t){t&&t!==$?this.element.setAttribute(this.name,Ii):this.element.removeAttribute(this.name)}}class Wi extends ue{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=xt(this,t,e,0))!==null&&i!==void 0?i:$)===J)return;const r=this._$AH,o=t===$&&r!==$||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==$&&(r===$||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Vi{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){xt(this,t)}}const ri=se.litHtmlPolyfillSupport;ri==null||ri(Nt,Ft),((xe=se.litHtmlVersions)!==null&&xe!==void 0?xe:se.litHtmlVersions=[]).push("2.8.0");const Fi=(s,t,e)=>{var i,r;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=o._$litPart$;if(n===void 0){const a=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=n=new Ft(t.insertBefore(zt(),a),a,void 0,e??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ke,Ce;class q extends yt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Fi(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return J}}q.finalized=!0,q._$litElement$=!0,(ke=globalThis.litElementHydrateSupport)===null||ke===void 0||ke.call(globalThis,{LitElement:q});const si=globalThis.litElementPolyfillSupport;si==null||si({LitElement:q});((Ce=globalThis.litElementVersions)!==null&&Ce!==void 0?Ce:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=s=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(s,t):((e,i)=>{const{kind:r,elements:o}=i;return{kind:r,elements:o,finisher(n){customElements.define(e,n)}}})(s,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}},Yi=(s,t,e)=>{t.constructor.createProperty(e,s)};function l(s){return(t,e)=>e!==void 0?Yi(s,t,e):Xi(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Et(s){return l({...s,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=({finisher:s,descriptor:t})=>(e,i)=>{var r;if(i===void 0){const o=(r=e.originalKey)!==null&&r!==void 0?r:e.key,n=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(e.key)}:{...e,key:o};return s!=null&&(n.finisher=function(a){s(a,o)}),n}{const o=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),s==null||s(o,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D(s,t){return yi({descriptor:e=>{const i={get(){var r,o;return(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(s))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const r=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var o,n;return this[r]===void 0&&(this[r]=(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(s))!==null&&n!==void 0?n:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zi(s){return yi({descriptor:t=>({get(){var e,i;return(i=(e=this.renderRoot)===null||e===void 0?void 0:e.querySelectorAll(s))!==null&&i!==void 0?i:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ee;((Ee=window.HTMLSlotElement)===null||Ee===void 0?void 0:Ee.prototype.assignedElements)!=null;const y=(s,t)=>e=>{var i,r;const o=B==null?void 0:B.tag(s);customElements.get(o)===void 0&&(customElements.define(o,e,t),(i=B==null?void 0:B.enabled)===null||i===void 0||i.push(s),(r=B==null?void 0:B.namemap)===null||r===void 0||r.set(s,o))},Se=(s="body",t="div")=>{if(!t)return;s=(typeof s=="string"?document.querySelector(s):s)||document.body;const e=Gi(t);s.appendChild(e)},Gi=(s="div")=>{const t=(typeof s=="string"?s:s==null?void 0:s.tag)||"div",{props:e,children:i,html:r}=s||{},o=document.createElement(t);return e&&Object.keys(e).forEach(n=>{o.setAttribute(n,e[n]===!0?"":e[n])}),r&&(o.innerHTML+=r),i&&(i.length?[...i].forEach(n=>{typeof n=="string"?o.appendChild(document.createTextNode(n)):o.appendChild(n)}):typeof i=="string"?o.appendChild(document.createTextNode(i)):o.appendChild(i)),o};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=s=>s??$;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_i=s=>(...t)=>({_$litDirective$:s,values:t});class xi{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=_i(class extends xi{constructor(s){var t;if(super(s),s.type!==wi.ATTRIBUTE||s.name!=="class"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){var e,i;if(this.it===void 0){this.it=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((e=this.nt)===null||e===void 0)&&e.has(o))&&this.it.add(o);return this.render(t)}const r=s.element.classList;this.it.forEach(o=>{o in t||(r.remove(o),this.it.delete(o))});for(const o in t){const n=!!t[o];n===this.it.has(o)||!((i=this.nt)===null||i===void 0)&&i.has(o)||(n?(r.add(o),this.it.add(o)):(r.remove(o),this.it.delete(o)))}return J}}),d=pi("--"+B.cssvar.replace(/[^a-zA-Z0-9\\-]/g,""));class ot extends q{}ot.styles=m`
    :host {
      ${d}--text-selection: rgb(80 255 255);
      ${d}--text-selection-background: rgb(0 0 0 / 10%);
    }
    * {
      font-size: 100%;
      color: inherit;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    ::selection {
      color: var(${d}--text-selection);
      background: var(${d}--text-selection-background);
    }
  `;class Xt extends ot{}var St=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};const Ue=m`
  :host {
    --ov-text: aliceblue;
    --ov-border: 0.275em;
    --ov-port: #1a1a1a;
    --ov-1-1: #ae0ca5;
    --ov-1-2: #ffd802;
    --ov-2-1: #1fe173;
    --ov-2-2: #582bca;
    --ov-3-1: #00b4f0;
    --ov-3-2: #e614e6;
    --ov-deg: 60deg;
    --ov-1: linear-gradient(var(--ov-deg), var(--ov-1-1), var(--ov-1-2));
    --ov-2: linear-gradient(var(--ov-deg), var(--ov-2-1), var(--ov-2-2));
    --ov-3: linear-gradient(var(--ov-deg), var(--ov-3-1), var(--ov-3-2));
  }
  .overbreathflow {
    animation: 8s linear infinite breathflow;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: inherit;
  }
  @keyframes breathflow {
    0%,
    100% {
      opacity: 1;
      background-image: var(--ov-1);
    }
    33.33% {
      opacity: 1;
      background-image: var(--ov-2);
    }
    16.66%,
    50.33%,
    83% {
      opacity: 0;
    }
    66.67% {
      opacity: 1;
      background-image: var(--ov-3);
    }
  }
`;let kt=class extends Xt{constructor(){super(...arguments),this.t1="t1 unset.",this.t2="t2 unset..",this.t3="t3 unset..."}render(){return c`<div class="overbreath">
      <span class="overbreathpart"><span class="overbreathroot">${this.t1}</span><span class="overbreathtext">${this.t1}</span></span>
      <span class="overbreathpart"><span class="overbreathroot">${this.t2}</span><span class="overbreathtext">${this.t2}</span></span>
      <span class="overbreathpart"><span class="overbreathroot">${this.t3}</span><span class="overbreathtext">${this.t3}</span></span>
    </div>`}};kt.styles=[Ue,m`
      :host {
        display: flex;
        margin: auto;
        width: fit-content;
        font-size: clamp(4.4rem, 9vw, 5rem);
        align-items: center;
      }
      @media screen and (max-width: 1280px) {
        :host {
          flex-direction: column;
        }
      }
      *::selection {
        background: none;
      }
      .overbreath {
        font-size: inherit;
        padding-bottom: 1rem;
        display: flex;
        align-items: inherit;
        flex-direction: inherit;
      }
      .overbreathpart {
        line-height: 1;
        position: relative;
      }
      .overbreathroot {
        color: currentColor;
        position: absolute;
        top: 0;
      }
      .overbreathtext,
      .overbreathroot {
        white-space: nowrap;
        box-sizing: border-box;
        padding-right: 2.5px;
        letter-spacing: -2.5px;
        width: fit-content;
        background-clip: text;
        -webkit-background-clip: text;
        font-weight: 800;
        font-size: inherit;
      }
      .overbreathtext {
        box-sizing: border-box;
        -webkit-text-fill-color: transparent;
      }
      .overbreathpart:nth-child(1) .overbreathtext {
        animation: overbreathtext1 8s infinite;
        background-image: var(--ov-1);
      }
      .overbreathpart:nth-child(2) .overbreathtext {
        animation: 8s ease 0s infinite normal none running overbreathtext2;
        background-image: var(--ov-2);
      }
      .overbreathpart:nth-child(3) .overbreathtext {
        animation: 8s ease 0s infinite normal none running overbreathtext3;
        background-image: var(--ov-3);
      }
      .overbreathpart:nth-child(1) .overbreathroot {
        animation: overbreath1 8s infinite;
      }
      .overbreathpart:nth-child(2) .overbreathroot {
        animation: overbreath2 8s infinite;
      }
      .overbreathpart:nth-child(3) .overbreathroot {
        animation: overbreath3 8s infinite;
      }
      @keyframes overbreathtext1 {
        0%,
        16.667%,
        to {
          opacity: 1;
        }
        33.333%,
        83.333% {
          opacity: 0;
        }
      }
      @keyframes overbreathtext2 {
        0%,
        to {
          opacity: 0;
        }
        33.333%,
        50% {
          opacity: 1;
        }
        16.667%,
        66.667% {
          opacity: 0;
        }
      }
      @keyframes overbreathtext3 {
        0%,
        50%,
        to {
          opacity: 0;
        }
        66.667%,
        83.333% {
          opacity: 1;
        }
      }
      @keyframes overbreath1 {
        0%,
        16.667%,
        to {
          opacity: 0;
        }
        25%,
        91.667% {
          opacity: 1;
        }
      }
      @keyframes overbreath2 {
        0%,
        to {
          opacity: 1;
        }
        33.333%,
        50% {
          opacity: 0;
        }
        25%,
        58.333% {
          opacity: 1;
        }
      }
      @keyframes overbreath3 {
        0%,
        58.333%,
        91.667%,
        to {
          opacity: 1;
        }
        66.667%,
        83.333% {
          opacity: 0;
        }
      }
    `];St([l()],kt.prototype,"t1",void 0);St([l()],kt.prototype,"t2",void 0);St([l()],kt.prototype,"t3",void 0);kt=St([y("ov-text")],kt);let Te=class extends Xt{render(){return c`<div class="overbreathflow"></div>
      <slot></slot>`}};Te.styles=[Ue,m`
      :host {
        z-index: 1;
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        overflow: hidden;
      }
      .overbreathflow {
        z-index: -1;
      }
    `];Te=St([y("ov-port")],Te);let Le=class extends Xt{render(){return c`<div class="overbreathboard">
      <div class="overbreathflow"></div>
      <button><slot></slot></button>
    </div>`}};Le.styles=[Ue,m`
      :host {
        display: inline-block;
        width: fit-content;
        height: fit-content;
        background: var(--ov-port);
        color: var(--ov-text);
        border-radius: 0.375em;
        font-size: 1em;
      }
      .overbreathboard {
        color: currentColor;
        background: inherit;
        border-radius: inherit;
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
      }
      button {
        font-size: inherit;
        color: currentColor;
        background: inherit;
        width: 100%;
        margin: var(--ov-border);
        position: relative;
        z-index: 1;
        border: 0;
        border-radius: inherit;
      }
    `];Le=St([y("ov-button")],Le);var He=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let Ut=class extends Xt{constructor(){super(...arguments),this.index=0,this.autochange=0,this.current=0}get assigned(){return this.shadowRoot.querySelector("slot").assignedElements()}render(){return c`<div>
      <a @click=${this.prev} prev>
        <svg viewBox="0 0 48 48" fill="none"><path d="M31 36L19 24L31 12" stroke="#1e293b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </a>
      <section><slot></slot></section>
      <a @click=${this.next} next
        ><svg viewBox="0 0 48 48" fill="none"><path d="M19 12L31 24L19 36" stroke="#1e293b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </a>
    </div>`}firstUpdated(){this.assigned.length!=0&&(this.shadowRoot.querySelector("div").style.width=`${this.assigned[0].offsetWidth}px`,this.assigned.forEach(t=>{t.style.overflowX="hidden",t.style.transition="width 0s"}),this.show(this.index),this.autochange&&setInterval(()=>{this.index++,this.index>=this.assigned.length&&(this.index=0),this.show(this.index)},this.autochange))}show(t){this.shadowRoot.querySelector("section").style.width="100%",this.assigned.forEach((e,i)=>{i==t?(e.style.width="100%",e.style.transition=""):e.style.width=0}),this.current=t}next(){this.index++,this.index>=this.assigned.length&&(this.index=0),this.show(this.index)}prev(){this.index--,this.index<0&&(this.index=this.assigned.length-1),this.show(this.index)}};Ut.styles=m`
    :host {
      display: block;
    }
    div,
    section {
      display: flex;
      position: relative;
    }
    div {
      min-width: 5.8em;
      overflow: hidden;
    }
    a {
      position: absolute;
      height: 100%;
      width: 1.4em;
      z-index: 1;
      transition: all 0.3s;
    }
    a:hover {
      background-color: #0000000f;
      padding: 0 0.05em;
    }
    a[prev] {
      left: 0;
    }
    a[next] {
      right: 0;
    }
    :host(:hover) a[prev] {
      margin-left: 0.05em;
    }
    :host(:hover) a[next] {
      margin-right: 0.05em;
    }
    svg {
      display: flex;
      height: 100%;
      width: 1.4em;
    }
  `;He([l({type:Number})],Ut.prototype,"index",void 0);He([l({type:Number})],Ut.prototype,"autochange",void 0);Ut=He([y("ro-port")],Ut);var rt=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let W=class extends Xt{constructor(){super(...arguments),this.text=void 0,this.stopped=!1,this.autochange=0,this.max=50,this.min=500,this.len=0,this._timer=[]}render(){return c`<slot></slot><i></i>`}firstUpdated(){var t;this.text||(this.text=((t=this.shadowRoot.querySelector("slot").assignedNodes()[0])===null||t===void 0?void 0:t.textContent.trim())||""),this.len=this.text.length,!this.stopped&&this.len&&this.rewrite()}rewrite(){for(const r of this._timer)clearTimeout(r);this._timer=[];const t=this.shadowRoot.querySelector("slot").assignedNodes()[0];t.textContent="";let e=0,i=this.autochange?this.autochange:ni(this.min,this.max);this.text.split("").forEach(r=>{this._timer.push(setTimeout(()=>{t.textContent+=r,this.dispatchEvent(new CustomEvent("change")),this.len===t.textContent.length&&this.dispatchEvent(new CustomEvent("done",{detail:e}))},e)),e+=i,this.autochange||(i=ni(this.min,this.max))})}stop(){for(const t of this._timer)clearTimeout(t);this._timer=[]}};W.styles=m`
    :host {
      font-family: monospace;
      white-space: nowrap;
    }
    i {
      border-right: 1px solid;
      margin: 1px;
      animation: s 1.5s steps(1) infinite;
    }
    @keyframes s {
      0% {
        border-color: currentColor;
      }
      50% {
        border-color: transparent;
      }
    }
  `;rt([l()],W.prototype,"text",void 0);rt([l({type:Boolean})],W.prototype,"stopped",void 0);rt([l({type:Number})],W.prototype,"autochange",void 0);rt([l({type:Number})],W.prototype,"max",void 0);rt([l({type:Number})],W.prototype,"min",void 0);rt([Et()],W.prototype,"len",void 0);rt([Et()],W.prototype,"_timer",void 0);W=rt([y("tw-text")],W);function ni(s=0,t=1){return Math.random()*(t-s)+s}class Me extends ot{}var Yt=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let dt=class extends Me{constructor(){super(...arguments),this.rank=!1,this.max=0,this.more=0,this.usefresh=async()=>{await this.updateComplete,this.scrollTop=this.scrollHeight}}get assigned(){return this.shadowRoot.querySelector("slot").assignedElements()}render(){const t=`slot::slotted(:nth-of-type(n + ${(this.max||0)+1})) {display: none;}`;return c`
      ${this.rank?c`<div class="flex">
            <slot></slot>
            <style>
              ${t}
            </style>
            <avatar-anchor style="display:${this.more>0?void 0:"none"}" more=${this.more||0}></avatar-anchor>
          </div>`:c`<div><slot></slot></div>`}
    `}firstUpdated(){if(this.rank&&!this.more){let t=0;this.max&&this.assigned.length>this.max&&(t=this.assigned.length-this.max),this.more=t}}append(t="avatar-anchor"){this.max&&this.assigned.length==this.max?(this.assigned.pop().style.display="none",Se(this,t),this.assigned.pop().style.display="none",this.more=2):this.max&&this.assigned.length>this.max?(Se(this,t),this.assigned.pop().style.display="none",this.more+=1):Se(this,t),this.fresh()}subtract(){if(this.more==2){this.assigned.pop().style.display="",this.more=0;return}else this.more>0&&(this.more-=1);this.assigned.length&&this.assigned.pop().remove()}async fresh(){await this.usefresh()}};dt.styles=m`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
    div {
      display: contents;
    }
    .flex {
      display: flex;
      flex-direction: row;
    }
  `;Yt([l({type:Boolean})],dt.prototype,"rank",void 0);Yt([l({type:Number})],dt.prototype,"max",void 0);Yt([l({type:Number})],dt.prototype,"more",void 0);Yt([l({attribute:!1})],dt.prototype,"usefresh",void 0);dt=Yt([y("avatar-group")],dt);var $i=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let ne=class extends Me{constructor(){super(...arguments),this.v=!1}render(){return c`
      <slot name="pre"></slot>
      <div class=${this.v?"v":"h"}>
        <style>
          ::slotted(*:nth-of-type(1)),
          ::slotted(*:last-of-type) {
            border-radius: ${getComputedStyle(this).borderRadius};
          }
        </style>
        <slot></slot>
      </div>
      <slot name="suf"></slot>
    `}};ne.styles=m`
    :host {
      display: inline-flex;
      align-items: center;
    }
    .v {
      flex-direction: column;
    }
    .h ::slotted(*:nth-of-type(1)) {
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
    .h ::slotted(*:last-of-type) {
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
    }
    .v ::slotted(*:nth-of-type(1)) {
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
    .v ::slotted(*:last-of-type) {
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
    }
    .h ::slotted(*) {
      margin: 0 -0.04em; /* 50% border-width */
    }
    .v ::slotted(*) {
      margin: -0.04em 0; /* 50% border-width */
    }
    ::slotted(*:hover) {
      z-index: 2;
    }
    .h {
      margin: 0 0.04em;
      display: inherit;
    }
    .v {
      margin: 0.04em 0;
      display: inherit;
    }
  `;$i([l({type:Boolean})],ne.prototype,"v",void 0);ne=$i([y("button-group")],ne);var Ie=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let Ht=class extends Me{constructor(){super(...arguments),this.index=-1,this.only=!1}render(){return c`<slot></slot>`}get assigned(){return this.shadowRoot.querySelector("slot").assignedElements()}async firstUpdated(){var t;await this.updateComplete,this.index>=0&&((t=this.assigned[this.index])===null||t===void 0||t.setAttribute("open","")),this.addEventListener("click",this._handleClick)}_handleClick(t){this.only&&(this.index=this.assigned.indexOf(t.target),this.assigned.forEach((e,i)=>{i!=this.index&&e.removeAttribute("open")}))}};Ht.styles=m`
    :host {
      display: block;
    }
  `;Ie([l({type:Number})],Ht.prototype,"index",void 0);Ie([l({type:Boolean})],Ht.prototype,"only",void 0);Ht=Ie([y("details-group")],Ht);class k extends ot{namevalue(){return[this.name,this.value]}reset(){this.value=this.def,this._input.value=this.def}_handleInput(t){t.stopPropagation(),this.value=t.target.value,!this.compositing&&(this.dispatchEvent(new CustomEvent("input",{detail:this.value,bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:this.value,composed:!0})))}_handleChange(){this.dispatchEvent(new CustomEvent("change",{detail:this.value,composed:!0}))}connectedCallback(){super.connectedCallback(),this.def||(this.def=this.value||""),this.value||(this.value=this.def)}_compositionCheck(){var t,e;(t=this._input)===null||t===void 0||t.addEventListener("compositionstart",()=>{this.compositing=!0}),(e=this._input)===null||e===void 0||e.addEventListener("compositionend",i=>{this.compositing=!1,this._handleInput(i)})}_focusCheck(){this.autofocus&&this.focus()}focus(t){var e;(e=this._input)===null||e===void 0||e.focus(t)}firstUpdated(){this._focusCheck(),this._compositionCheck()}}k.styles=[ot.styles,m`
      :host {
        ${d}--text:rgb(240 240 240);
        ${d}--input-outline: rgb(25 130 180);
        ${d}--input-outline-focus: rgb(29 155 180);
        ${d}--input-background: rgb(24 24 24);
        ${d}--input-background-hover: rgb(42 42 42);
        ${d}--input-control:rgb(244 244 244);
        ${d}--input-true: rgb(47 129 237);
        ${d}--input-false: rgb(204 204 204);
        ${d}--input-width: 10.6rem;
      }
      ::-webkit-calendar-picker-indicator {
        background-color: var(${d}--input-true);
        border-radius: 0.1rem;
      }
    `];var P=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let E=class extends k{constructor(){super(...arguments),this.accept=void 0,this.label="",this.name="",this.pla=void 0,this.type="text",this.value=void 0,this.def="",this.only=!1,this.min=0,this.max=100,this.step=1,this.autofocus=!1}render(){var t;return this.name||(this.name=((t=this.label)===null||t===void 0?void 0:t.toLowerCase())||this.type),c`<label for="input">
      <slot name="pre"></slot>
      <slot></slot>
      <div class=${this.type}>${this._typeSwitcher()}</div>
      <slot name="suf"></slot>
    </label>`}connectedCallback(){super.connectedCallback(),!this.def&&this.type!=="file"&&(this.def=this.value||""),this.value||(this.value=this.def)}firstUpdated(){this.type==="range"&&(this._ranged.style.width=100*(parseInt(this.value)/(this.max-this.min))+"%",this.childNodes.length&&(this.shadowRoot.querySelector("div").style.margin="0")),this._focusCheck(),this._compositionCheck()}_handleRange(t){this.value=t.target.value,this._ranged.style.width=100*parseInt(t.target.value)/(this.max-this.min)+"%",this.dispatchEvent(new CustomEvent("input",{detail:this.value}))}_handleFile(t){this.value=this.only?t.target.files[0]:t.target.files,this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}reset(){this.type==="range"?(this._input.value=this.def||((this.max-this.min)/2).toString(),this.value=this._input.value,this._ranged.style.width=100*(parseInt(this.value)/(this.max-this.min))+"%"):(this._input.value=this.def.toString(),this.value=this.def)}_typeSwitcher(){switch(this.type){case"range":return c`<input id="input" type="range" min=${this.min} max=${this.max} step=${this.step} value=${this.value} @input=${this._handleRange} @change=${this._handleChange} /><i></i>`;case"file":return c`<input id="input" type="file" accept=${$t(this.accept)} ?multiple=${!this.only} class="input" @change=${this._handleFile} />`;default:return c`<input id="input" class="input" type=${this.type} placeholder=${this.pla} value=${this.value} @input=${this._handleInput} @change=${this._handleChange} />`}}};E.styles=[k.styles,m`
      :host {
        width: var(${d}--input-width);
        height: 1em;
        display: inline-flex;
        background-color: var(${d}--input-background);
        border-radius: 0.2em;
        outline: 0.18em solid transparent;
        color: var(${d}--text);
      }
      :host(:focus-within) {
        outline-color: var(${d}--input-outline-focus);
      }
      :host([type="range"]) {
        outline: none;
        height: auto;
      }
      :host([type="file"]) {
        height: auto;
        width: auto;
        min-height: 0.5em;
        min-width: 0.5em;
      }
      div,
      label {
        display: flex;
        flex: 1;
      }
      * {
        border-radius: inherit;
        cursor: inherit;
        font-family: inherit;
      }
      .input[type="color"] {
        padding: 0;
        height: 100% !important;
      }
      .input[type="file"] {
        display: none;
      }
      .input {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        font-size: 0.8em;
        outline: 0;
        border: 0;
        margin: 0;
        border: none;
        color: inherit;
        background: transparent;
        padding: 0 0.25em;
        border-radius: 0.25em;
      }
      .range {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0.5px 0.1em var(${d}--shadow);
        background-color: var(${d}--input-false);
      }
      .range input ~ i {
        position: absolute;
        left: 0;
        width: 50%;
        pointer-events: none;
        background-color: var(${d}--input-true);
        height: calc(0.6em - 1.1px);
      }
      .range input {
        height: 0.6em;
        margin: 0px -0.5em;
        width: calc(100% + 0.5em);
        appearance: none;
        -webkit-appearance: none;
        outline: none;
        background-color: transparent;
      }
      .range input::-webkit-slider-runnable-track {
        height: 0.6em;
      }
      .range input::-webkit-slider-thumb {
        z-index: 1;
        appearance: none;
        -webkit-appearance: none;
        position: relative;
        height: 1.2em;
        width: 1.2em;
        margin-top: -0.3em;
        background-color: var(${d}--input-control);
        border-radius: 50%;
        border: solid 0.125em rgba(0, 221, 255, 0.5);
        box-shadow: 0 0.1em 0.1em var(${d}--shadow);
      }
    `];P([D("input")],E.prototype,"_input",void 0);P([D(".range i")],E.prototype,"_ranged",void 0);P([l()],E.prototype,"accept",void 0);P([l()],E.prototype,"label",void 0);P([l()],E.prototype,"name",void 0);P([l()],E.prototype,"pla",void 0);P([l()],E.prototype,"type",void 0);P([l()],E.prototype,"value",void 0);P([l()],E.prototype,"def",void 0);P([l({type:Boolean})],E.prototype,"only",void 0);P([l({type:Number})],E.prototype,"min",void 0);P([l({type:Number})],E.prototype,"max",void 0);P([l({type:Number})],E.prototype,"step",void 0);P([l({type:Boolean})],E.prototype,"autofocus",void 0);E=P([y("base-input")],E);var M=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let z=class extends k{constructor(){super(...arguments),this.label="",this.name="",this.pla=void 0,this.type="text",this.value="",this.def="",this.base="outline",this.offset="",this.autofocus=!1}render(){var t;return this.name||(this.name=((t=this.label)===null||t===void 0?void 0:t.toLowerCase())||this.type),c`<div class=${fe({[this.base]:!0,"no-label":!this.label})}>
      ${this.type!=="textarea"?c`<input class="input" required title="" value=${this.value} @input=${this._handleInput} @change=${this._handleChange} type=${this.type} placeholder=${this.pla} />`:c`<textarea class="input" required title="" value=${this.value||this.def} @input=${this._handleInput} placeholder=${this.pla}></textarea>`}
      <fieldset>
        <legend><span>${this.label}</span></legend>
      </fieldset>
      <style>
        :valid ~ fieldset legend,
        :focus ~ fieldset legend {
          margin-left: ${this.offset||0} !important;
        }
      </style>
    </div>`}};z.styles=[k.styles,m`
      :host {
        line-height: normal;
        display: inline-block;
        width: var(${d}--input-width);
        color: var(${d}--text);
        border-color: var(${d}--input-outline);
        border-radius: 0.2em;
      }
      .input:focus {
        ${d}--input-outline: var(${d}--input-outline-focus) !important;
      }
      div:hover {
        ${d}--input-background: var(${d}--input-background-hover) !important;
      }
      .underline::after,
      .underline::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        bottom: -0.1em;
        width: 100%;
        height: 0.18em;
        bottom: 0;
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
      }
      .underline:focus-within::before {
        z-index: 2;
        width: 100%;
      }
      .underline::before {
        width: 0;
        transition: all 0.2s;
        background: var(${d}--input-outline-focus) !important;
      }
      .underline::after {
        background: var(${d}--input-outline);
      }
      .underline fieldset {
        border-color: transparent !important;
      }
      .outline fieldset {
        border-color: inherit !important;
        border: 0.18em solid;
      }
      .outline .input {
        padding-left: 0.18em;
        padding-right: 0.18em;
      }
      .no-label.filed .input {
        margin-top: 0;
      }
      .filed {
        background: var(${d}--input-background);
        outline: 0.18em solid var(${d}--input-outline);
        height: calc(100% - 0.36em);
        width: calc(100% - 0.36em);
        margin: 0.18em;
      }
      .filed fieldset {
        border-color: transparent !important;
        background: transparent !important;
      }
      :focus ~ fieldset,
      :valid ~ fieldset {
        border-color: var(${d}--input-outline-focus);
      }
      * {
        border-radius: inherit;
        font-size: inherit;
        font-family: inherit;
        transition:
          all 0.2s,
          height 0s;
      }
      div {
        border-color: inherit;
        position: relative;
        width: 100%;
        display: inline-flex;
        min-height: inherit;
      }
      textarea.input {
        resize: vertical;
        height: 1.5em;
        padding-top: 0.3em;
      }
      .input {
        margin-left: 0.18em;
        margin-right: 0.18em;
      }
      .input {
        width: 100%;
        padding-top: 0.2em;
        min-height: 1.7em;
        margin-top: 0.45em;
        margin-bottom: 0.2em;
        border: 0;
        box-sizing: border-box;
        font-size: inherit;
        outline: 0;
        background: transparent;
        z-index: 2;
        overflow-y: hidden;
      }
      fieldset {
        box-sizing: border-box;
        position: absolute;
        background: var(${d}--input-background);
        pointer-events: none;
        padding: 0px;
        position: absolute;
        height: 100%;
        margin: 0;
        width: inherit;
      }
      legend span {
        white-space: nowrap;
        display: inline-block;
        padding: 0 0.2em;
        background: var(${d}--input-background);
        font-size: inherit;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      legend {
        width: 0;
        height: 1em;
        transform: translateY(0.8em);
      }
      .filed span {
        background: transparent;
      }
      :focus + fieldset legend,
      :valid + fieldset legend {
        transform: translateY(-0.19em) scale(0.7);
      }
    `];M([l()],z.prototype,"label",void 0);M([l()],z.prototype,"name",void 0);M([l()],z.prototype,"pla",void 0);M([l()],z.prototype,"type",void 0);M([l()],z.prototype,"value",void 0);M([l()],z.prototype,"def",void 0);M([l()],z.prototype,"base",void 0);M([l()],z.prototype,"offset",void 0);M([l({type:Boolean})],z.prototype,"autofocus",void 0);M([D(".input")],z.prototype,"_input",void 0);z=M([y("exp-input")],z);var Y=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let H=class extends k{constructor(){super(...arguments),this.type="text",this.label="",this.def="",this.pla=void 0,this.name="",this.value="",this.autofocus=!1}render(){var t;return this.name||(this.name=((t=this.label)===null||t===void 0?void 0:t.toLowerCase())||this.type),c`<label for=${this.name}>
      <span>${this.label}<slot></slot></span>
      <fieldset>
        <i><slot name="pre"></slot></i>
        <input @input=${this._handleInput} @change=${this._handleChange} id=${this.name} type=${this.type} placeholder=${this.pla} class=${this.type} />
        <i><slot name="suf"></slot></i>
        ${this.type==="password"&&!this.querySelector('[slot="suf"]')?c`<i @mousedown=${this._passwordSwitcher} @mouseup=${()=>this._input.type="password"} @mouseleave=${()=>this._input.type="password"}>
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M9.85786 18C6.23858 21 4 24 4 24C4 24 12.9543 36 24 36C25.3699 36 26.7076 35.8154 28 35.4921M20.0318 12.5C21.3144 12.1816 22.6414 12 24 12C35.0457 12 44 24 44 24C44 24 41.7614 27 38.1421 30" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.3142 20.6211C19.4981 21.5109 19 22.6972 19 23.9998C19 26.7612 21.2386 28.9998 24 28.9998C25.3627 28.9998 26.5981 28.4546 27.5 27.5705" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M42 42L6 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </i>`:void 0}
      </fieldset>
    </label>`}_passwordSwitcher(){this._input.type==="password"?this._input.type="text":this._input.type="password"}};H.styles=[k.styles,m`
      :host {
        background-color: inherit;
        display: block;
        border-radius: 4px;
      }
      label {
        margin: auto;
        width: 100%;
        box-sizing: border-box;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: inherit;
      }
      span {
        flex: 1;
      }
      input {
        background-color: transparent;
        font-size: 102.5%;
        line-height: 1.2em;
        border: 0;
        border-radius: inherit;
        outline: 0;
        box-sizing: border-box;
        flex: 1;
        width: 100%;
        padding: 4.8px;
      }
      fieldset:focus-within {
        outline: 0.18em solid var(${d}--input-outline-focus);
      }
      @media screen and (max-width: 540px) {
        label {
          justify-content: flex-start;
          flex-direction: column;
          align-items: flex-start;
          width: fit-content;
        }
      }
      i {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-style: normal;
      }
      i > svg {
        height: 1em;
        width: 1.5em;
      }
      fieldset {
        color: var(${d}--text);
        position: relative;
        background-color: var(${d}--input-background);
        display: flex;
        padding: 0;
        border-radius: inherit;
        outline: none;
        border: 0;
        margin: 0;
        width: var(${d}--input-width);
      }
      ::-ms-reveal {
        display: none;
      }
    `];Y([l()],H.prototype,"type",void 0);Y([l()],H.prototype,"label",void 0);Y([l()],H.prototype,"def",void 0);Y([l()],H.prototype,"pla",void 0);Y([l()],H.prototype,"name",void 0);Y([l()],H.prototype,"value",void 0);Y([l({type:Boolean})],H.prototype,"autofocus",void 0);Y([D("input")],H.prototype,"_input",void 0);H=Y([y("label-input")],H);var N=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let T=class extends k{constructor(){super(...arguments),this.open=!1,this.selcls=`${B.tag("select-input")}-selected`,this.pla=void 0,this.only=!1,this.def="",this.value=[],this.name="select",this.text=[],this.autofocus=!1}get assigned(){return this.shadowRoot.querySelector("slot").assignedElements()}render(){return c`<div>
      <section>${this.lists()}</section>
      <input
        id="input"
        @focus=${()=>{this.open=!0}}
        @input=${this._handleInput}
        placeholder=${this.pla}
      />
      <label for="input">
        <svg viewBox="0 0 48 48" fill="none"><path d="M36 19L24 31L12 19H36Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linejoin="round" /></svg>
      </label>
      <aside ?open=${this.open}><slot></slot></aside>
    </div>`}lists(){const t=[];if(this.value.length)for(const e in this.value)t.push(c`<i class="selected-item">
            ${this.text[e]||this.value[e]}
            <svg
              @click=${()=>{this.select(this.value[e])}}
              t="1678769821062"
              viewBox="0 0 1024 1024"
              version="1.1"
              p-id="2770"
            >
              <path d="M960 512c0-249.6-198.4-448-448-448S64 262.4 64 512s198.4 448 448 448 448-198.4 448-448zM691.2 736L512 556.8 332.8 736c-12.8 12.8-32 12.8-44.8 0-12.8-12.8-12.8-32 0-44.8L467.2 512 288 332.8c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0L512 467.2 691.2 288c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L556.8 512 736 691.2c12.8 12.8 12.8 32 0 44.8-12.8 12.8-32 12.8-44.8 0z" fill="currentColor" p-id="2771"></path>
            </svg>
          </i>`);return t}_focusCheck(){var t;this.autofocus&&((t=this._input)===null||t===void 0||t.focus(),this.open=!0)}focus(t){var e;(e=this._input)===null||e===void 0||e.focus(t),this.open=!0}firstUpdated(){this._focusCheck(),this.assigned.forEach(t=>{t.value?t.addEventListener("click",()=>{this.select(t.value,t.innerText)}):t.children&&[...t.children].forEach(e=>{e.addEventListener("click",()=>{this.select(e.value,e.innerText)})})}),this.addEventListener("change",t=>{this.open=!this.only}),document.addEventListener("click",t=>{this.contains(t.target)||(this.open=!1)})}select(t,e){e==null&&this.assigned.forEach(i=>{i.value?i.value==t&&(e=i.innerText):i.children&&[...i.children].forEach(r=>{r.value==t&&(e=r.innerText)})}),this.value.includes(t)?this.only?(this.value=[],this.text=[]):(this.value=this.value.filter(i=>i!=t),this.text=this.text.filter(i=>i!=e)):this.only?(this.value=[t],this.text=[e]):(this.value.push(t),this.text.push(e)),this.assigned.forEach(i=>{i.value?this.value.includes(i.value)?i.classList.add(this.selcls):i.classList.remove(this.selcls):i.children&&[...i.children].forEach(r=>{this.value.includes(r.value)?r.classList.add(this.selcls):r.classList.remove(this.selcls)})}),this._input.value="",this.dispatchEvent(new CustomEvent("change",{detail:this.namevalue()})),this.requestUpdate()}_handleInput(){let t=this._input.value.trim();!this.only&&t.includes(";")&&(t=t.split(";").pop().trim()),this.assigned.forEach(e=>{e.value&&(e.style.display="block"),e.children&&(e.style.display="block",[...e.children].forEach(i=>{i.style.display="block"}))}),t&&this.assigned.forEach(e=>{e.value?e.value.toLowerCase().includes(t.toLowerCase())||e.innerText.toLowerCase().includes(t.toLowerCase())?e.style.display="block":e.style.display="none":e.children&&([...e.children].forEach(i=>{i.value.toLowerCase().includes(t.toLowerCase())||i.innerText.toLowerCase().includes(t.toLowerCase())?i.style.display="block":i.style.display="none"}),[...e.children].filter(i=>i.style.display=="block").length==0&&(e.style.display="none"))}),this.dispatchEvent(new CustomEvent("input",{detail:this.namevalue()}))}namevalue(){return this.only?[this.name,this.value[0]]:[this.name,this.value]}reset(){this.value=[],this.text=[],this._input.value="",this.assigned.forEach(t=>{t.value?t.classList.remove(this.selcls):t.children&&[...t.children].forEach(e=>{e.classList.remove(this.selcls)})}),this.def&&(this.only?this.def.split(";")[0].trim()&&this.select(this.def.split(";")[0].trim(),null):this.def.split(";").forEach(t=>{t.trim()&&this.select(t.trim(),null)}))}};T.styles=[k.styles,m`
      :host {
        background: var(${d}--input-background);
        color: var(${d}--text);
        display: inline-flex;
        outline: 0.145em solid transparent;
        border-radius: 0.25em;
        height: 1.5em;
        width: var(${d}--input-width);
      }
      :host([open]) {
        outline-color: var(${d}--input-outline-focus);
      }
      input {
        padding: 0px 0px 0px 0.25em;
        background: none;
        cursor: inherit;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        border: inherit;
        outline: none;
        border-radius: inherit;
        flex: 1;
      }
      div {
        display: inline-flex;
        position: relative;
        width: 100%;
        border-radius: inherit;
        z-index: inherit;
      }
      label svg {
        height: 100%;
      }
      aside {
        margin-top: 1px;
        position: absolute;
        top: 100%;
        width: 100%;
        visibility: hidden;
        z-index: 1;
        border-radius: inherit;
      }
      section {
        max-width: calc(100% - 1.2em);
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        border-radius: inherit;
        z-index: inherit;
      }
      i.selected-item {
        background: var(${d}--input-true);
        border-radius: inherit;
        height: 100%;
        float: left;
        display: inline-flex;
        font-style: normal;
        align-items: center;
        padding-left: 0.1em;
        margin-left: 0.065em;
      }
      i:first-child {
        margin-left: 0;
      }
      i.selected-item svg {
        width: 1em;
        padding: 0 0.12em;
        height: 0.8em;
        pointer-events: all;
      }
      aside[open] {
        visibility: visible;
      }
    `];N([l({type:Boolean,reflect:!0})],T.prototype,"open",void 0);N([l()],T.prototype,"selcls",void 0);N([l()],T.prototype,"pla",void 0);N([l({type:Boolean})],T.prototype,"only",void 0);N([l()],T.prototype,"def",void 0);N([l({type:Array})],T.prototype,"value",void 0);N([l()],T.prototype,"name",void 0);N([Et()],T.prototype,"text",void 0);N([l({type:Boolean})],T.prototype,"autofocus",void 0);N([D("input")],T.prototype,"_input",void 0);N([D("aside")],T.prototype,"_aside",void 0);T=N([y("select-input")],T);var C=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let A=class extends k{constructor(){super(...arguments),this.query="",this.target="",this.infer=!1,this.remote=!1,this.action="./",this.method="get",this.name="q",this.value="",this.pla=void 0,this.list=[],this.autofocus=!1,this.useinfer=async t=>(await new Promise(e=>{setTimeout(()=>{e()},400)}),["Undefine: useinfer",`Use: useinfer(${t} :string)`,"Return Array<string>"])}render(){var t;return c`<form action=${this.action} method=${this.method}>
      <div>
        <input name=${this.name} @input=${this._handleInput} @change=${this._handleChange} value=${this.value} title="" placeholder=${this.pla} />
        <button @click=${this._handleSubmit}>
          <svg viewBox="0 0 1024 1024" width="95%" height="100%">
            <path fill="currentColor" d="M745.429333 655.658667c1.173333 0.746667 2.325333 1.578667 3.413334 2.496l114.410666 96a32 32 0 0 1-41.152 49.024l-114.389333-96a32 32 0 0 1-6.208-6.976A297.429333 297.429333 0 0 1 512 768c-164.949333 0-298.666667-133.717333-298.666667-298.666667S347.050667 170.666667 512 170.666667s298.666667 133.717333 298.666667 298.666666a297.386667 297.386667 0 0 1-65.237334 186.325334zM512 704c129.6 0 234.666667-105.066667 234.666667-234.666667s-105.066667-234.666667-234.666667-234.666666-234.666667 105.066667-234.666667 234.666666 105.066667 234.666667 234.666667 234.666667z" p-id="9859"></path>
          </svg>
        </button>
      </div>
      <slot></slot>
      ${!((t=this.list)===null||t===void 0)&&t.length?c`<ul>
            ${this.list.map((e,i)=>c`<li key=${i}>${e}</li>`)}
          </ul>`:void 0}
    </form>`}_handleSubmit(t){this.remote||t.preventDefault(),this.dispatchEvent(new CustomEvent("submit",{detail:this.value}))}async _handleInput(t){const e=t.target.value.trim();if(this.value=e,!this.compositing){if(e&&this.infer?(this.list=await this.useinfer(e),this.value||(this.list=[])):this.list=[],this.target&&this.query){const i=document.querySelector(this.target),r=document.querySelectorAll(this.query);if(console.log(),!e||!i||!r.length){document.querySelector(this.target).replaceChildren();return}for(const o of r)o.textContent.includes(e)&&i.appendChild(o.cloneNode(!0))}this.dispatchEvent(new CustomEvent("input",{detail:e})),this.dispatchEvent(new CustomEvent("change",{detail:e}))}}};A.styles=[k.styles,m`
      :host {
        color: var(${d}--text);
        display: inline-block;
        min-height: 1.5rem;
        width: var(${d}--input-width);
        border-radius: 0.75em;
        background: var(${d}--input-background);
      }
      :host(:focus) form {
        outline-color: var(${d}--input-outline);
      }
      div {
        flex: 1;
        display: flex;
      }
      form {
        min-height: 100%;
        outline: 0.145em solid transparent;
        display: flex;
        flex-direction: column;
        background: inherit;
        border-radius: inherit;
        padding: 0;
        width: 100%;
        margin: 0;
        overflow: hidden;
      }
      ul {
        list-style: none;
      }
      li {
        padding: 0.1em 0.5em;
        font-size: 0.95rem;
      }
      li:hover {
        background: var(${d}--input-background-hover);
      }
      button,
      input {
        border: 0;
        background: none;
        outline: none;
      }
      button {
        width: 1.8rem;
        height: 1.5rem;
      }
      input {
        flex: 1;
        min-width: 0;
        box-sizing: border-box;
        padding-left: 0.75em;
        padding-right: 0;
        font-size: 1rem;
      }
    `];C([D("input")],A.prototype,"_input",void 0);C([l()],A.prototype,"query",void 0);C([l()],A.prototype,"target",void 0);C([l({type:Boolean})],A.prototype,"infer",void 0);C([l({type:Boolean})],A.prototype,"remote",void 0);C([l()],A.prototype,"action",void 0);C([l()],A.prototype,"method",void 0);C([l()],A.prototype,"name",void 0);C([l()],A.prototype,"value",void 0);C([l()],A.prototype,"pla",void 0);C([l({type:Array})],A.prototype,"list",void 0);C([l({type:Boolean})],A.prototype,"autofocus",void 0);C([l({attribute:!1})],A.prototype,"useinfer",void 0);A=C([y("search-input")],A);const Ae=[{action:"https://www.google.com/search",name:"q",pla:"Google"},{action:"https://quark.sm.cn/s",name:"q",pla:"Quark"},{action:"https://www.bing.com/search",name:"q",pla:"Bing"},{action:"https://www.sogou.com/web",name:"query",pla:"搜狗"},{action:"https://yandex.com/search/",name:"text",pla:"Yandex"},{action:"https://www.qwant.com/",name:"q",pla:"Qwant"}];let ct=class extends k{constructor(){super(),Object.assign(this,Ae[Math.floor(Math.random()*Ae.length)])}render(){return this.origin&&Object.assign(this,Ae.find(t=>t.pla===this.origin)),c`<form action=${this.action} method="get" target="_blank">
      <input name=${this.name} placeholder=${this.pla} />
      <button type="submit" aria-label="Search">
        <svg viewBox="0 0 18 18"><path d="M7.25 0C3.254 0 0 3.254 0 7.25s3.254 7.25 7.25 7.25c1.727 0 3.316-.61 4.563-1.625l4.906 4.906a.757.757 0 0 0 .73.207.766.766 0 0 0 .54-.539.757.757 0 0 0-.208-.73l-4.906-4.907A7.202 7.202 0 0 0 14.5 7.25C14.5 3.254 11.246 0 7.25 0Zm0 1.5A5.74 5.74 0 0 1 13 7.25c0 1.55-.613 2.953-1.605 3.984a1.035 1.035 0 0 0-.16.16A5.726 5.726 0 0 1 7.25 13 5.74 5.74 0 0 1 1.5 7.25 5.74 5.74 0 0 1 7.25 1.5Z" fill="currentColor" fill-rule="nonzero"></path></svg>
      </button>
    </form>`}};ct.styles=[k.styles,m`
      :host {
        width: 10em;
        height: 1.5em;
        display: inline-block;
        border-radius: 0.75em;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        --search: aliceblue;
        --ground: currentColor;
        --search-hover: rgb(20 69 155);
      }
      form {
        color: currentColor;
        display: inline-flex;
        height: 100%;
        box-sizing: border-box;
        position: relative;
        border-radius: inherit;
        margin: 0;
      }
      input {
        border-top-left-radius: inherit;
        border-bottom-left-radius: inherit;
        border-right: 0 !important;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
        outline: none;
        flex: 1 1 0%;
        padding-left: 1em;
        padding-right: 3.05em;
        border-width: 0.08em;
        border-style: solid;
        border-image: initial;
        border-color: var(--ground);
        background-color: transparent;
        color: var(--ground);
        transition: all 0.2s;
      }
      button:hover {
        background-color: var(--search-hover);
      }
      button {
        background: currentColor;
        border-top-right-radius: inherit;
        border-bottom-right-radius: inherit;
        margin: 0;
        background: none transparent;
        border-spacing: 0;
        text-align: left;
        align-items: center;
        justify-content: center;
        outline: none;
        border: none;
        display: inline-flex;
        transition: all 0.2s;
        padding: 0;
        font-size: 1em;
        height: 100%;
        width: 2.5em;
        background-color: var(--ground);
      }
      svg {
        text-indent: 0;
        font-size: 1em;
        color: var(--search);
        width: 0.8em;
        height: 0.8em;
      }
      path {
        mix-blend-mode: exclusion;
      }
    `];C([l()],ct.prototype,"action",void 0);C([l()],ct.prototype,"name",void 0);C([l()],ct.prototype,"pla",void 0);C([l()],ct.prototype,"origin",void 0);ct=C([y("search-w")],ct);var Zt=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let ut=class extends k{constructor(){super(...arguments),this.name="",this.set=2}render(){return c`<form enctype="multipart/form-data">
      <slot name="pre"></slot>
      <main>${this.opt()}<slot></slot></main>
      <slot name="suf"></slot>
    </form>`}opt(){const t=[];for(let e=0;e<=this.set-1;e++)ai[e]&&t.push(ai[e]);return t}reset(){ie(this._form,e=>{e.reset&&e.reset()});const t=document.createElement("form");for(const e of this.shadowRoot.querySelectorAll("slot"))for(const i of e.assignedNodes())i.reset&&i.reset(),t.appendChild(i.cloneNode(!0));t.reset();for(const e of this.shadowRoot.querySelectorAll("slot"))for(const i of e.assignedNodes())i.name&&t[i.name]&&(i.value=t[i.name].value);t.remove()}namevalue(){const t={},e=document.createElement("form");e.enctype="multipart/form-data";for(const r of this.shadowRoot.querySelectorAll("slot"))for(const o of r.assignedNodes())if(o.namevalue){const[n,a]=o.namevalue();n&&(t[n]=a)}else e.appendChild(o.cloneNode(!0));const i=new FormData(e);for(const[r,o]of i)t[r]=o;return ie(this._form,r=>{if(r.namevalue){const[o,n]=r.namevalue();o&&(t[o]=n)}}),e.remove(),[this.name,t]}FormData(){const t={},e=document.createElement("form");e.enctype="multipart/form-data";for(const r of this.shadowRoot.querySelectorAll("slot"))for(const o of r.assignedNodes())if(o.FormData)for(const[n,a]of o.FormData())t[n]=a;else e.appendChild(o.cloneNode(!0));const i=new FormData(e);ie(this._form,r=>{if(r.namevalue){const[o,n]=r.namevalue();o&&i.append(o,n)}});for(const r in t)i.append(r,t[r]);return e.remove(),i}};ut.styles=[k.styles,m`
      :host {
        display: flow-root;
      }
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
      }
      main {
        display: flex;
        flex-direction: column;
      }
    `];Zt([l()],ut.prototype,"name",void 0);Zt([l({type:Number})],ut.prototype,"set",void 0);Zt([D("form")],ut.prototype,"_form",void 0);ut=Zt([y("sign-form")],ut);function ie(s,t){if(s){t(s);for(const e of s.childNodes)ie(e,t)}}const ai=[c`<label-input label="E-mail" style="margin: 0.25em 0;" type="email"></label-input>`,c`<label-input label="Password" style="margin: 0.25em 0;" type="password"></label-input>`];let li=class extends ut{constructor(){super(),this.set=0}};li=Zt([y("base-form")],li);var st=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let V=class extends k{constructor(){super(...arguments),this.name="",this.value="",this.max=6,this.index=-1,this.autofocus=!1,this.current=0,this.currentValue=[]}render(){return c`<main>
      <div>
        ${Array(this.max).fill(0).map(()=>c`<span><i></i></span>`)}
        <input @input=${this._handleInput} value="     " />
      </div>
    </main>`}firstUpdated(){this._focusCheck(),this.currentValue=this.value.split("").concat(Array(this.max-this.value.length).fill(null)),this.current=this.index<0||this.index>this.max?this.currentValue.indexOf(null):this.index,this._spans.forEach((t,e)=>{t.addEventListener("click",()=>{this.current=e,this.focusAt(),this._input.focus()})}),document.addEventListener("click",t=>{this.contains(t.target)||this.blur()})}_handleInput(t){t.data===null?this.currentValue[this.current]!==null?this.currentValue[this.current]=null:(this.currentValue[this.current-1]=null,this.current=this.current-1<0?0:this.current-1):(this.currentValue[this.current]=t.data,this.current+1>=this.max?(this.current=this.currentValue.indexOf(null),this.current===-1&&this.blur()):this.current+=1),this.focus(),this._spans.forEach((e,i)=>{e.querySelector("i").innerText=this.currentValue[i]||""}),this.value=this.currentValue.join(""),this.dispatchEvent(new CustomEvent("input",{detail:this.value,bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:this.value,composed:!0}))}focus(){this.focusAt()}focusAt(t=this.current){var e;this._spans.forEach(i=>{i.classList.remove("focus")}),(e=this._spans[t])===null||e===void 0||e.classList.add("focus"),this._input.value="      "}blur(t=this.current){var e;(e=this._spans[t])===null||e===void 0||e.classList.remove("focus"),this._input.blur()}reset(){this.currentValue=Array(this.max).fill(null),this.current=0,this._spans.forEach(t=>{t.querySelector("i").innerText=""}),this.value="",this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}};V.styles=[k.styles,m`
      :host {
        display: inline-block;
        width: fit-content;
      }
      main {
        display: flex;
      }
      * {
        font-size: 1em;
      }
      div {
        vertical-align: top;
        position: relative;
        display: inline-flex;
        font-size: 116%;
      }
      span {
        box-sizing: content-box;
        vertical-align: top;
        display: inline-flex;
        width: 1.0275em;
        padding: 0.1em;
        height: 1.0275em;
        pointer-events: all;
      }
      i {
        height: inherit;
        width: 100%;
        z-index: 1;
        background-color: var(${d}--input-false);
        font-style: normal;
        text-align: center;
        font-size: 80%;
        line-height: 1.09;
      }
      input {
        border: 0;
        opacity: 0;
        left: 0;
        position: absolute;
        background-color: tan;
        right: 0;
        top: 0;
        bottom: 0;
      }
      .focus i {
        outline: 0.12em solid var(${d}--input-true);
      }
    `];st([l()],V.prototype,"name",void 0);st([l()],V.prototype,"value",void 0);st([l({type:Number})],V.prototype,"max",void 0);st([l({type:Number})],V.prototype,"index",void 0);st([l({type:Boolean})],V.prototype,"autofocus",void 0);st([D("input")],V.prototype,"_input",void 0);st([Zi("span")],V.prototype,"_spans",void 0);V=st([y("split-input")],V);var nt=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let F=class extends k{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.base="rect",this.def="false",this.name="checkbox",this.value="on"}render(){return c`<span class=${this.base}>
      <input @change=${this._handleChange} ?disabled=${this.disabled} ?checked=${this.checked} name=${this.name} value=${this.value} type="checkbox" />
      <aside>
        <div class="false"><slot name="false"></slot></div>
        <div class="always"><slot></slot><slot name="always"></slot></div>
        <div class="true"><slot name="true"></slot></div>
      </aside>
    </span>`}reset(){this.checked=this.def==="true",this._input.checked=this.checked}connectedCallback(){super.connectedCallback(),this.checked?this.def="true":this.def==="true"&&(this.checked=!0)}_handleChange(){this.checked=this._input.checked,this.dispatchEvent(new CustomEvent("input",{detail:this.checked,bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:this.checked,composed:!0}))}namevalue(){return[this.name,this.checked]}};F.styles=[k.styles,m`
      :host {
        width: 3em;
        height: 1.5em;
      }
      :host,
      span {
        display: inline-flex;
        font-size: inherit;
        position: relative;
        align-items: center;
        border-radius: inherit;
      }
      span {
        width: inherit;
        height: inherit;
      }
      input {
        width: inherit;
        height: inherit;
        margin: 0;
        outline: none;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        position: relative;
        font-size: inherit;
        background-color: var(${d}--input-false);
        border-radius: inherit;
        transition: all 0.3s;
      }
      aside {
        pointer-events: none;
        transition: 0.3s;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        font-size: inherit;
        overflow: hidden;
        border-radius: inherit;
      }
      aside div {
        height: 100%;
      }
      input[disabled] ~ aside {
        filter: brightness(0.87);
      }
      .rect div.always {
        display: none;
      }
      .always {
        position: absolute;
      }
      .rect aside {
        height: 100%;
        width: 100%;
        left: 0;
      }
      .rect .true,
      .rect .false {
        width: 50%;
        text-align: center;
        transition: all 0.3s;
      }
      .rect input:checked ~ aside div.true,
      .rect .false {
        background-color: var(${d}--input-true);
      }
      .rect input:checked ~ aside div.false,
      .rect .true {
        background-color: var(${d}--input-false);
      }
      .fat aside {
        width: 1.2em;
        height: 1.2em;
        border-radius: 50%;
        background-color: var(${d}--input-control);
        transition: 0.3s;
        left: 0.15em;
        top: 0.15em;
        bottom: 0.15em;
      }
      .fat {
        border-radius: 0.75em;
      }
      .fat input:checked {
        background-color: var(${d}--input-true);
      }
      .fat input:checked ~ aside {
        left: calc(100% - 0.15em - 1.2em);
        right: 0.15em;
      }
      .fat input:checked ~ aside div.true,
      .fat div.false {
        display: block;
      }
      .fat input:checked ~ aside div.false,
      .fat div.true {
        display: none;
      }
    `];nt([l({type:Boolean})],F.prototype,"checked",void 0);nt([l({type:Boolean})],F.prototype,"disabled",void 0);nt([l()],F.prototype,"base",void 0);nt([l()],F.prototype,"def",void 0);nt([l()],F.prototype,"name",void 0);nt([l()],F.prototype,"value",void 0);nt([D("input")],F.prototype,"_input",void 0);F=nt([y("switch-input")],F);class At extends ot{}var Gt=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let pt=class extends At{constructor(){super(...arguments),this.call="info",this.autoclose=3e3,this.title="",this.content=""}render(){return this.autoclose&&setTimeout(()=>this.close(),this.autoclose),c`<div class="${this.call} alert" role="alert">
      <section class="content">
        <strong><slot name="title"></slot>${this.title}</strong>
        <slot></slot>${this.content}
      </section>
      <aside class="close" @click=${this.close}>
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M14 14L34 34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M14 34L34 14" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </aside>
    </div>`}close(){this.shadowRoot.querySelector(".alert").classList.add("hide"),setTimeout(()=>{this.remove()},300)}};pt.styles=m`
    :host {
      margin: 0.1em auto;
      width: 100%;
      display: inline-block;
    }
    .hide {
      opacity: 0;
      transform: translateY(-50%);
    }
    .success {
      --color: #3c763d;
      --super: #2b542c;
      --background: #dff0d8;
      --border: #d6e9c6;
    }
    .info {
      --color: #31708f;
      --background: #d9edf7;
      --border: #bce8f1;
      --super: #245269;
    }
    .warning {
      --color: #8a6d3b;
      --background: #fcf8e3;
      --border: #faebcc;
      --super: #66512c;
    }
    .danger {
      --color: #a94442;
      --background: #f2dede;
      --border: #ebccd1;
      --super: #843534;
    }
    .alert {
      display: flex;
      justify-content: space-between;
      padding: 0.2em 0.5em;
      border: 1px solid transparent;
      border-radius: 4px;
      transition: all 0.25s;
      color: var(--color);
      background-color: var(--background);
      border-color: var(--border);
      animation: alert 0.25s ease-in-out;
    }
    @keyframes alert {
      0% {
        opacity: 0;
        transform: translateY(-50%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    section.content {
      margin: 0 0.25em 0 0.35em;
      min-height: 1.6em;
      line-height: 1.6em;
    }
    aside.close {
      height: fit-content;
      width: fit-content;
      border-radius: 50%;
      transition: all 0.3s;
    }
    aside.close:hover {
      backdrop-filter: contrast(115%);
    }
    svg {
      display: block;
      height: 1.6em;
      width: 1.6em;
    }
    aside.close:hover path {
      stroke: var(--super);
    }
    path {
      stroke: var(--color);
      transition: all 0.3s;
    }
    .alert ::slotted(a) {
      font-weight: bold;
      color: var(--super);
    }
  `;Gt([l()],pt.prototype,"call",void 0);Gt([l({type:Number})],pt.prototype,"autoclose",void 0);Gt([l()],pt.prototype,"title",void 0);Gt([l()],pt.prototype,"content",void 0);pt=Gt([y("alert-item")],pt);var gt=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let X=class extends At{constructor(){super(),this.src="",this.href=void 0,this.name="",this.more=0,this.call="center",this.gap=!1,this.call="center"}render(){return c`<div class=${fe({gap:this.gap,[this.call]:this.call})}>
      <header>
        <a href=${$t(this.href)}>
          ${this.ava()}
          <slot name="state"></slot>
        </a>
        <section>
          <slot name="bar"></slot>
          ${this.gap?c`<article><slot></slot></article>`:""}
        </section>
      </header>
      ${this.gap?"":c`<article><slot></slot></article>`}
    </div>`}ava(){if(this.src)return c`<img src=${this.src} />`;if(this.name){let t=this.name.slice(0,2);return t=t[0].toUpperCase()+t.slice(1),c`<span>${t}</span>`}else if(this.more){const t=this.more>99?"...":this.more;return c`<span>+${t}</span>`}return c`<slot name="avatar"></slot>`}};X.styles=m`
    :host {
      display: inline-block;
      height: fit-content;
    }
    * {
      border-radius: inherit;
    }
    article {
      flex: 1;
    }
    header {
      display: flex;
      flex-wrap: nowrap;
    }
    .center header {
      flex-direction: column;
    }
    .right header {
      flex-direction: row-reverse;
      justify-content: flex-start;
    }
    .left header {
      justify-content: flex-start;
    }
    img {
      width: 100%;
      height: 100%;
    }
    div {
      --ava: 2.5em;
    }
    a {
      color: inherit;
      height: var(--ava);
      width: var(--ava);
      min-height: var(--ava);
      min-width: var(--ava);
      display: flex;
      position: relative;
    }
    span {
      position: absolute;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .left.gap {
      margin-right: var(--ava);
    }
    .right.gap {
      margin-left: var(--ava);
    }
    slot[name="bar"]::slotted(*) {
      height: var(--ava);
    }
    slot[name="state"] {
      position: absolute;
      display: block;
      position: absolute;
      display: block;
      bottom: -0.25em;
      right: -0.25em;
    }
    .left section,
    .right section {
      min-height: var(--ava);
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .right section {
      justify-content: flex-end;
    }
  `;gt([l()],X.prototype,"src",void 0);gt([l()],X.prototype,"href",void 0);gt([l()],X.prototype,"name",void 0);gt([l({type:Number})],X.prototype,"more",void 0);gt([l()],X.prototype,"call",void 0);gt([l({type:Boolean})],X.prototype,"gap",void 0);X=gt([y("avatar-anchor")],X);var Rt=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};const Ki=m`
  :host {
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
  }
  .ghost,
  .ghost:hover {
    color: var(--background);
    border-color: var(--background);
    background-color: transparent;
  }
  .ghost:active {
    color: var(--active);
    background-color: var(--background-active);
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: inherit;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    font-size: inherit;
    border-radius: inherit;
    border-width: 0.08em;
    border-style: solid;
    cursor: inherit;
    text-decoration: inherit;
    transition: all 0.2s ease-in;
    color: var(--color);
    border-color: var(--border);
    background-color: var(--background);
  }
  a:hover {
    color: var(--hover);
    border-color: var(--border-hover);
    background-color: var(--background-hover);
  }
  a:active {
    transition: 0s;
    color: var(--active);
    border-color: var(--border-active);
    background-color: var(--background-active);
  }
  a[disabled],
  a[disabled]:hover,
  a[disabled]:active {
    color: var(--color-disabled);
    border-color: var(--border-disabled);
    background-color: var(--background-disabled);
  }
`,Ji=m`
  .black {
    --color: #f0f0f0;
    --border: #444444;
    --background: #2c2c2c;
    --hover: #fafafa;
    --border-hover: #707070;
    --background-hover: #303030;
    --active: #fafafa;
    --border-active: #5a5a5a;
    --background-active: #3a3a3a;
  }
  .white {
    --color: #2c2c2c;
    --border: #44444450;
    --background: #f8f8f8;
    --hover: #707070;
    --border-hover: #44444450;
    --background-hover: #f4f4f4;
    --border-active: #aaaaaa;
    --background-active: #aaaaaa;
  }
  .yellow {
    --color: #fafafa;
    --border: #44444450;
    --background: #ebb10d;
    --hover: #ececec;
    --border-hover: #44444450;
    --background-hover: #f9bd10;
    --background-active: #d7a422;
    --border-active: #44444420;
  }
  .gary {
    --color: #fafafa;
    --border: #44444450;
    --background: #51535e;
    --hover: #ececec;
    --border-hover: #44444450;
    --background-hover: #5e616d;
    --background-active: #3f3d47;
    --border-active: #44444420;
  }
  .red {
    --color: #fafafa;
    --border: #44444450;
    --background: #d11a2d;
    --hover: #ececec;
    --border-hover: #44444450;
    --background-hover: #c62828;
    --background-active: #a61b29;
    --border-active: #44444420;
  }
  .blue {
    --color: #fafafa;
    --border: #44444450;
    --background: #1177b0;
    --hover: #ececec;
    --border-hover: #44444450;
    --background-hover: #11659a;
    --background-active: #144a74;
    --border-active: #44444420;
  }
  .green {
    --color: #fafafa;
    --border: #44444450;
    --background: #12aa8c;
    --hover: #ececec;
    --border-hover: #44444450;
    --background-hover: #1db68f;
    --background-active: #248067;
    --border-active: #44444420;
  }
`;let Q=class extends At{constructor(){super(...arguments),this.disabled=!1,this.ghost=!1,this.href=void 0,this.target=void 0,this.color="black"}render(){return c`<a href=${$t(this.href)} target=${$t(this.target)} ?disabled=${this.disabled} class=${fe({ghost:this.ghost,[this.color]:this.color})}> <slot name="pre"></slot><slot></slot><slot name="suf"></slot> </a>`}};Q.styles=[Ki,Ji];Rt([l({type:Boolean})],Q.prototype,"disabled",void 0);Rt([l({type:Boolean})],Q.prototype,"ghost",void 0);Rt([l()],Q.prototype,"href",void 0);Rt([l()],Q.prototype,"target",void 0);Rt([l()],Q.prototype,"color",void 0);Q=Rt([y("base-button")],Q);var Ot=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let tt=class extends At{constructor(){super(...arguments),this.open=!1,this.key="Escape",this.scale=!1,this.modal=!1,this.call="center"}get _div(){return this.shadowRoot.querySelector("div")}render(){return c`<div ?open=${this.open} ?modal=${this.modal}>
      <slot class=${this.call}></slot>
    </div>`}firstUpdated(){this.addEventListener("submit",t=>{t.target.method==="dialog"&&this.close()}),this.scale&&this.addEventListener("wheel",this._handleWheel),this.key&&document.addEventListener("keydown",t=>this._handleKeydown(t)),this.open&&this.show()}show(){this.open=!0,this.modal&&this.showModal()}showModal(){this.modal=!0,this.open=!0,this._div.addEventListener("click",this._handleModal)}close(){this.open=!1,this.modal&&this._div.removeEventListener("click",this._handleModal)}_handleWheel(t){const e=this._div.style.transform.match(/scale\((.*)\)/);let i=1;e&&(i=Number(e[1])),t.deltaY>0?i-=.1:i+=.1,this._div.style.transform=`scale(${i})`}_handleKeydown(t){const e=this.key.split(/[^a-zA-Z0-9]/).filter(i=>i!=="");(e.includes(t.key)||e.includes(t.code))&&this.close()}_handleModal(t){t.stopPropagation()}};tt.styles=m`
    :host {
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: all 0.3s;
      display: flex;
      visibility: hidden;
      background: rgb(0 0 0 / 0%);
    }
    :host([open]) {
      visibility: visible;
    }
    :host([open][modal]) {
      backdrop-filter: blur(0.25px);
      background: rgb(0 0 0 / 20%);
    }
    [open] slot {
      opacity: 1 !important;
      transform: translateY(0) translateX(0) !important;
    }
    div {
      height: 100%;
      width: 100%;
      display: flex;
      transition: inherit;
    }
    slot {
      display: block;
      width: fit-content;
      height: fit-content;
      margin: auto;
      opacity: 0;
      transition: inherit;
      pointer-events: all;
    }
    .center {
      transform: translateY(-15%);
    }
    .top {
      width: 100%;
      margin-top: 0;
      transform: translateY(-15%);
    }
    .right {
      height: 100%;
      margin-right: 0;
      transform: translateX(15%);
    }
    .bottom {
      width: 100%;
      margin-bottom: 0;
      transform: translateY(15%);
    }
    .left {
      height: 100%;
      margin-left: 0;
      transform: translateX(-15%);
    }
  `;Ot([l({type:Boolean,reflect:!0})],tt.prototype,"open",void 0);Ot([l({type:String})],tt.prototype,"key",void 0);Ot([l({type:Boolean})],tt.prototype,"scale",void 0);Ot([l({type:Boolean})],tt.prototype,"modal",void 0);Ot([l({type:String})],tt.prototype,"call",void 0);tt=Ot([y("dialog-item")],tt);var ve=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let ft=class extends At{constructor(){super(...arguments),this.href=void 0,this.target="_self",this.arrow=""}render(){return c`<a href=${$t(this.href)} target=${this.target}>
      <slot name="pre"></slot><slot></slot><slot name="suf"></slot>
      <i style="font-style:normal"><slot name="icon"></slot>${this._arrowSwitcher()}</i>
    </a>`}_arrowSwitcher(){switch(this.arrow){case"delta":return c`<svg viewBox="0 0 48 48" fill="none"><path d="M20 12L32 24L20 36V12Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linejoin="round" /></svg>`;case"arrow":return c`<svg width="38" height="38" viewBox="0 0 48 48" fill="none">
          <path d="M36 24.0083H12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M24 12L36 24L24 36" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`;case"angle":return c`<svg viewBox="0 0 48 48" fill="none"><path d="M19 12L31 24L19 36" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg>`;case"hand":return c`<svg viewBox="-10 -5 64 58" fill="none">
          <path d="M10.0264 40.9736L10.0264 18.9736H4.02637L4.02637 40.9736H10.0264Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0264 18.9738C17.1493 12.4548 21.2772 8.71418 22.4102 7.75192C24.1096 6.30854 26.0304 6.91463 26.0304 10.5268C26.0304 14.139 20.7449 16.2222 20.7449 18.9738C20.7415 18.9902 27.5007 18.9913 41.0223 18.9771C42.6797 18.9753 44.0246 20.3174 44.0264 21.9748L44.0264 21.9779C44.0264 23.6371 42.6814 24.9821 41.0222 24.9821H33.0128C31.8039 32.9549 31.137 37.2894 31.012 37.9858C30.8244 39.0303 29.8274 40.9738 26.9583 40.9738C25.0456 40.9738 20.0683 40.9738 10.0264 40.9738V18.9738Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
        </svg>`}}};ft.styles=m`
    :host {
      display: inline-block;
      color: currentColor;
      text-decoration: none;
      cursor: default;
    }
    :host([href]) {
      cursor: pointer;
    }
    a {
      width: 100%;
      display: flex;
      color: inherit;
      text-decoration: inherit;
      justify-content: space-between;
      align-items: center;
    }
    i {
      display: inline-flex;
      border-radius: 20%;
    }
    i > svg {
      width: 1em;
      height: 1em;
      border-radius: inherit;
    }
    :host(:hover) i {
      animation: arrow 0.3s linear;
    }
    i:hover {
      background-color: rgb(0 0 0 / 0.075);
    }
    @keyframes arrow {
      from {
        transform: translateX(0);
      }
      50% {
        transform: translateX(0.05em);
      }
      to {
        transform: translateX(0);
      }
    }
  `;ve([l()],ft.prototype,"href",void 0);ve([l()],ft.prototype,"target",void 0);ve([l()],ft.prototype,"arrow",void 0);ft=ve([y("super-a")],ft);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Be extends xi{constructor(t){if(super(t),this.et=$,t.type!==wi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===$||t==null)return this.ft=void 0,this.et=t;if(t===J)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Be.directiveName="unsafeHTML",Be.resultType=1;const Qi=_i(Be);var bt=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o},G;let L=G=class extends q{constructor(){super(...arguments),this._routes=[],this.params={},this.static=!1,this.type="united",this.baseURL="",this.path="",this.override=!1,this.compoent=null}set routes(t){if(Object.prototype.toString.call(t)!=="[object Array]"){this._routes=[];return}this.static?this._routes=t:this._routes=G.sortRoutesPaths(t),this.requestUpdate()}get routes(){return this._routes}render(){var t,e,i;return this.type==="field"?(t=this.render_field())!==null&&t!==void 0?t:c`<slot></slot>`:this.type==="slotted"||this.type==="child"?(e=this.render_slotted())!==null&&e!==void 0?e:c`<slot></slot>`:(i=this.render_united())!==null&&i!==void 0?i:c`<slot></slot>`}useRouter(){return{path:this.path,params:this.params}}connectedCallback(){if(super.connectedCallback(),this.path=window.location.pathname,window.addEventListener("popstate",i=>{this.path=window.location.pathname}),!this.override)return;const t=history.pushState;history.pushState=function(){t.apply(this,arguments),this.path=window.location.pathname};const e=history.replaceState;history.replaceState=function(){e.apply(this,arguments),this.path=window.location.pathname}}render_united(){const t=this.render_slotted();return t||this.render_field()}render_slotted(){const t=this.querySelectorAll(":scope > *[slot]"),e=Array.from(t).map(n=>{const a=n.getAttribute("slot");return{path:this.baseURL+a,slotname:a}});let i;this.static?i=e:i=G.sortRoutesPaths(e);const r=G.useWhichRoute(i,this.path);return this.slottedCompoent(r,i)}render_field(){const t=G.useWhichRoute(this.routes,this.path),e=G.parseRouterParams(t,this.path);return this.params=e,this.fieldComponent(t)}fieldComponent(t){if(!t)return;const e=this.routes.find(i=>i.path===t);return e?e.component||(e.html?Qi(e.html):null):null}slottedCompoent(t,e){if(!t)return;const i=e.find(o=>o.path===t);if(!i)return null;const r=G.parseRouterParams(t,this.path);return this.params=r,c`<slot name="${i.slotname}"></slot>`}static sortRoutesPaths(t){const i=t.map(n=>{const a=n.path,v=a.split("/").filter(p=>p.startsWith(":")).length;return{...n,path:a,Single_dynamicRouteCount:v}}).sort((n,a)=>n.Single_dynamicRouteCount-a.Single_dynamicRouteCount),r=i.filter(n=>n.path.split("/").filter(p=>p.startsWith("...")||p.startsWith("*")).length>0);return r.sort((n,a)=>{const u=n.path.split("/").findIndex(p=>p.startsWith("...")||p.startsWith("*")),v=a.path.split("/").findIndex(p=>p.startsWith("...")||p.startsWith("*"));return u!==-1&&v!==-1?v-u:0}),[...i.filter(n=>n.path.split("/").filter(p=>p.startsWith("...")||p.startsWith("*")).length===0),...r]}static useWhichRoute(t,e,i=""){const o=(i+e).split("/").slice(1),a=t.map(u=>u.path);for(const u of a){const v=u.split("/").slice(1);if(v.every((b,g)=>{const x=o[g];return b.startsWith(":")?o.length<=v.length:b.startsWith("...")?o.length>=v.length:o.length===v.length&&x===b}))return u}return null}static parseRouterParams(t,e){if(!t||!e)return;const i={},r=e.split("/").splice(1),o=t.split("/").splice(1);for(const[n,a]of o.entries())if(a.startsWith(":"))i[a.slice(1)]=r[n];else if(a.startsWith("*"))i[a.slice(1)]=r.slice(n).join("/");else if(a.startsWith("..."))i[a.slice(3)]=r.slice(n).join("/");else if(a!==r[n])return;return i}static updateAll(){const t=B.namemap.get("route-view"),e=document.querySelectorAll(`${t}:not([override])`);for(let i=0,r;r=e[i];i++)r.path=window.location.pathname}};L.styles=m`
    :host {
      display: contents;
    }
  `;bt([l({type:Boolean})],L.prototype,"static",void 0);bt([l()],L.prototype,"type",void 0);bt([l()],L.prototype,"baseURL",void 0);bt([l()],L.prototype,"path",void 0);bt([l({type:Boolean})],L.prototype,"override",void 0);bt([l({type:Object})],L.prototype,"compoent",void 0);L=G=bt([y("route-view")],L);var qe=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o},oe;let Mt=oe=class extends ft{constructor(){super(...arguments),this.active="",this.replace=!1}firstUpdated(){this.shadowRoot.querySelector("a").addEventListener("click",this._handleClick.bind(this)),this.active&&window.addEventListener("popstate",this.useActive.bind(this))}useActive(){const t=new URL(this.href,window.location.href);t.origin===window.location.origin&&(t.pathname===window.location.pathname?this.classList.add(this.active):this.classList.remove(this.active))}_handleClick(t){if(this.target!=="_self")return;new URL(this.href,window.location.href).origin===window.location.origin&&(t.preventDefault(),this.replace?this.replaceState():this.pushState())}pushState(t=this.href){oe.pushState(null,"",t),this.active&&this.useActive()}replaceState(t=this.href){oe.replaceState(null,"",t),this.active&&this.useActive()}static pushState(t,e,i){history.pushState(t,e,i),L.updateAll()}static replaceState(t,e,i){history.replaceState(t,e,i),L.updateAll()}};Mt.styles=m`
    :host {
      display: inline-block;
      color: currentColor;
      text-decoration: none;
      cursor: default;
    }
    :host([href]) {
      cursor: pointer;
    }
    a {
      width: 100%;
      display: flex;
      color: inherit;
      text-decoration: inherit;
      justify-content: space-between;
      align-items: center;
    }
    i {
      display: inline-flex;
      border-radius: 20%;
    }
  `;qe([l()],Mt.prototype,"active",void 0);qe([l({type:Boolean})],Mt.prototype,"replace",void 0);Mt=oe=qe([y("link-a")],Mt);var jt=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let et=class extends At{constructor(){super(...arguments),this.current=20,this.isValue=!1,this.max=1,this.min=0,this.modify=!1}set value(t){t==null||t===""?(this.removeAttribute("value"),this.isValue=!1):(this.setAttribute("value",t),this.isValue=!0),this.current=this.parsePercent(t||20)}get value(){return this.getAttribute("value")}render(){return this.value!==null&&(this.isValue=!0,this.current=this.parsePercent(this.value)),c`<div class=${fe({value:this.isValue})} @click=${this._handleClick}>
      <i style="width:${this.current}%;"><slot></slot></i>
    </div>`}parsePercent(t="0"){return String(t).includes("%")?parseFloat(String(t)):parseFloat(String(t))/(this.max-this.min)*100}_handleClick(t){this.modify&&(this.value=(t.offsetX/this.offsetWidth*(this.max-this.min)).toString(),this.dispatchEvent(new CustomEvent("change",{detail:t.offsetX/this.offsetWidth})))}};et.styles=[k.styles,m`
      :host,
      div {
        display: inline-flex;
      }
      div {
        position: relative;
        width: 10em;
        height: 0.5em;
        border-radius: 0.25em;
        background-color: var(${d}--input-false);
        z-index: 1;
      }
      div i {
        position: absolute;
        border-radius: inherit;
        top: 0;
        left: 0;
        height: 100%;
        width: 20%;
        background-color: var(${d}--input-true);
        z-index: 2;
        transition: all 0.3s;
        animation: progress 1.5s ease-in-out infinite alternate;
      }
      @keyframes progress {
        from {
          left: 0%;
        }
        to {
          left: 80%;
        }
      }
      div.value i {
        animation: none;
        width: 20%;
      }
    `];jt([Et()],et.prototype,"current",void 0);jt([Et()],et.prototype,"isValue",void 0);jt([l({type:Number})],et.prototype,"max",void 0);jt([l({type:Number})],et.prototype,"min",void 0);jt([l({type:Boolean})],et.prototype,"modify",void 0);et=jt([y("load-track")],et);class Z extends ot{}const ki=m`
  :host {
    ${d}--nav-text: rgb(240 240 240);
    ${d}--nav-background: rgb(28 28 30);
    ${d}--nav-super-background: rgb(16 136 138);
  }
`;var Kt=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let vt=class extends Z{constructor(){super(...arguments),this.pre="auto",this.suf="auto",this.v=!1,this.b="2.2px"}render(){const t=`.before{height:${this.b};max-width:${this.pre}}.after{height:${this.b};max-width:${this.suf}}.v .before{width:${this.b};max-height:${this.pre}}.v .after{width:${this.b};max-height:${this.suf}}`;return c`<div class=${this.v?"v":"h"}>
      <hr class="before" />
      <slot></slot>
      <hr class="after" />
      <style>
        ${t}
      </style>
    </div>`}};vt.styles=m`
    :host {
      display: block;
      color: currentColor;
      background: none;
    }
    div {
      display: flex;
      align-items: center;
      border-radius: inherit;
      width: 100%;
      height: 100%;
    }
    hr {
      border-radius: inherit;
      margin: 0;
      border: 0;
      flex: 1;
      background: currentColor;
    }
    .v {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  `;Kt([l()],vt.prototype,"pre",void 0);Kt([l()],vt.prototype,"suf",void 0);Kt([l({type:Boolean})],vt.prototype,"v",void 0);Kt([l()],vt.prototype,"b",void 0);vt=Kt([y("div-line")],vt);var We=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let It=class extends Z{constructor(){super(...arguments),this.flexflow="row nowrap column nowrap",this.m="720px"}render(){const t=this.flexflow.split(/\s+/),e=`:host{flex-direction:${t[0]||"row"};flex-wrap:${t[1]||"nowrap"};}@media(max-width: ${this.m||"720px"}){:host{flex-direction:${t[2]||t[0]||"colom"};flex-wrap:${t[3]||t[1]||"nowrap"}}`;return c`<slot></slot>
      <style>
        ${e}
      </style>`}};It.styles=m`
    :host {
      display: flex !important;
    }
  `;We([l()],It.prototype,"flexflow",void 0);We([l()],It.prototype,"m",void 0);It=We([y("flex-flow")],It);var Ve=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let qt=class extends Z{constructor(){super(...arguments),this.x="auto",this.y="auto"}get offsetsWidth(){var t,e;return(e=(t=this.offsetParent)===null||t===void 0?void 0:t.clientWidth)!==null&&e!==void 0?e:document.body.offsetWidth}get offsetsHeight(){var t,e;return(e=(t=this.offsetParent)===null||t===void 0?void 0:t.clientHeight)!==null&&e!==void 0?e:document.body.offsetHeight}render(){return c` <div @mousedown=${this._startDrag} @mouseup=${this._endDrag}>
      <slot></slot>
    </div>`}firstUpdated(){this.reset(),document.addEventListener("mouseup",this._endDrag.bind(this))}_startDrag(t){this.cx=t.clientX,this.cy=t.clientY,this.t=this.offsetTop,this.l=this.offsetLeft,this.drag=!0,document.addEventListener("mousemove",this._handleDrag.bind(this))}_endDrag(){this.drag=!1,document.removeEventListener("mousemove",this._handleDrag.bind(this))}_handleDrag(t){if(!this.drag)return;const e=t.clientX-(this.cx-this.l),i=t.clientY-(this.cy-this.t);e<0?this.style.left="0":e<this.offsetsWidth-this.offsetWidth?this.style.left=`${e}px`:this.style.left=`${this.offsetsWidth-this.offsetWidth}"px"`,i<0?this.style.top="0":i<this.offsetsHeight-this.offsetHeight?this.style.top=`${i}px`:this.style.top=`${this.offsetsHeight-this.offsetHeight}px`}reset(){this.style.left=this.x||"0",this.style.top=this.y||"0",this.offsetLeft>this.offsetsWidth-this.offsetWidth&&(this.style.left=`${this.offsetsWidth-this.offsetWidth}px`),this.offsetTop>this.offsetsHeight-this.offsetHeight&&(this.style.top=`${this.offsetsHeight-this.offsetHeight}px`)}};qt.styles=m`
    :host {
      position: relative;
      display: inline-flex;
    }
  `;Ve([l()],qt.prototype,"x",void 0);Ve([l()],qt.prototype,"y",void 0);qt=Ve([y("drag-box")],qt);var Fe=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let Wt=class extends Z{constructor(){super(...arguments),this.m="720px",this.position="sticky fixed"}render(){const t=this.position.split(" ")[0]||"sticky",e=this.position.split(" ")[1]||"fixed",i=this.m||"720px",r=`:host{position:${t} !important;}@media(min-width:${i}){:host{position:${e} !important;width:fit-content !important;height:100% !important;}nav{display: flex !important;justify-content: space-between !important;flex-direction: column !important;align-content: flex-start !important;align-items: stretch !important;}}`;return c`<nav><slot></slot></nav>
      <style>
        ${r}
      </style>`}};Wt.styles=[Z.styles,ki,m`
      :host {
        color: var(${d}--nav-text);
        background: var(${d}--nav-background);
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: fit-content;
        display: flex;
      }
      nav {
        height: inherit;
        width: inherit;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        box-sizing: border-box;
      }
    `];Fe([l()],Wt.prototype,"m",void 0);Fe([l()],Wt.prototype,"position",void 0);Wt=Fe([y("nav-aside")],Wt);var Ci=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let ae=class extends Z{render(){return c`<main>
      <slot name="hover"></slot>
      <slot name="focus" @click=${this.toggle}></slot>
      <div style="transform:translateX(0)"><slot></slot></div>
    </main>`}async firstUpdated(){this.querySelector('[slot="focus"]')&&document.addEventListener("click",t=>{this.contains(t.target)||this.close()}),await this.updateComplete,this.resize(),window.addEventListener("resize",()=>{clearTimeout(this._timer),this._timer=setTimeout(()=>{this._div.style.transform="translateX(0)",this.resize()},250)})}resize(){var t;const e=((t=this.offsetParent)===null||t===void 0?void 0:t.getBoundingClientRect())||document.body.getBoundingClientRect(),i=this._div.getBoundingClientRect().left,r=this._div.getBoundingClientRect().right,o=e.width-(r-e.x),n=e.width-(e.right-i);i<0?this._div.style.transform=`translateX(${-n}px)`:r>e.right?this._div.style.transform=`translateX(${o}px)`:this._div.style.transform="translateX(0)"}close(){this._div.style.visibility="hidden",this.dispatchEvent(new CustomEvent("change",{detail:!1}))}open(){this._div.style.visibility="visible",this.dispatchEvent(new CustomEvent("change",{detail:!0}))}toggle(){this._div.style.visibility==="visible"?this.close():this.open()}};ae.styles=[Z.styles,m`
      :host {
        height: 100%;
        width: 100%;
      }
      main {
        height: inherit;
        width: inherit;
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
      }
      div {
        background-color: inherit;
        position: absolute;
        visibility: hidden;
        top: 100%;
      }
      slot[name="hover"]:hover ~ div,
      div:hover {
        visibility: visible;
      }
    `];Ci([D("div")],ae.prototype,"_div",void 0);ae=Ci([y("down-drop")],ae);var me=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let Ct=class extends Z{constructor(){super(...arguments),this.host="",this.subhead="",this.set=0}render(){return c`<nav>
        <h1>
          <slot name="host"></slot>
          <a href="/">${this.host}</a>${this.subhead&&c`<span></span>
            <div>${this.subhead}</div>`}
        </h1>
        <div>
          ${this.opt()}
          <slot name="opt"></slot>
        </div>
      </nav>
      <main><slot></slot></main>
      <slot name="footer"></slot>`}opt(){const t=[];for(let e=0;e<=this.set-1;e++)hi[e]&&t.unshift(hi[e]);return t}};Ct.styles=[Z.styles,ki,m`
      :host {
        ${d}--nav-height:2.4em;
        ${d}--nav-h1-size:calc(var(${d}--nav-height)/2);
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
        min-height: 100%;
      }
      nav,
      .option {
        color: var(${d}--nav-text);
        background: var(${d}--nav-background);
      }
      .option a:hover {
        background: var(${d}--nav-super-background);
      }
      nav {
        height: var(${d}--nav-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 2.5%;
        box-sizing: border-box;
        margin: auto;
        position: relative;
        z-index: 2;
      }
      a {
        text-decoration: none;
        color: currentColor;
      }
      h1 {
        font-weight: normal;
        font-size: var(${d}--nav-h1-size);
        margin: 0;
        display: flex;
        align-items: center;
      }
      h1 span {
        height: 1em;
        width: 0.1em;
        background: currentColor;
        margin: 0.24em;
      }
      h1 > * {
        white-space: nowrap;
      }
      main {
        flex: 1;
        width: inherit;
        display: flex;
        flex-direction: column;
        z-index: 1;
      }
      nav > div {
        height: 100%;
        display: flex;
        flex-direction: row;
      }
      .option {
        overflow: hidden;
      }
      .option a {
        height: 2.4em;
        line-height: 2.4em;
        display: block;
        white-space: nowrap;
        padding: 0 0.9em;
        text-align: center;
        transition: background-color 152ms;
      }
      .option a:hover {
        transform: scale(1.025);
      }
      down-drop a {
        display: flex;
        padding: 0.15em;
        box-sizing: border-box;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
      down-drop a::selection {
        color: var(${d}--text-selection);
        background: var(${d}--text-selection-background);
      }
      @media screen and (max-width: 540px) {
        h1 a ~ * {
          display: none;
        }
      }
    `];me([l()],Ct.prototype,"host",void 0);me([l()],Ct.prototype,"subhead",void 0);me([l({type:Number})],Ct.prototype,"set",void 0);Ct=me([y("nav-layout")],Ct);const hi=[c`<down-drop>
    <a slot="hover">
      <svg viewBox="0 0 1024 1024" width="1.8em" height="1.8em"><path fill="currentColor" d="M588.8 128l12 83.2 4.8 34.4 31.2 14.4c12.8 6.4 26.4 13.6 38.4 21.6l28 18.4 31.2-12 81.6-32 76 127.2-67.2 51.2-28 21.6 3.2 35.2c0.8 7.2 0.8 14.4 0.8 20.8s0 13.6-0.8 20.8l-3.2 35.2 28 21.6 67.2 51.2-75.2 127.2-82.4-32-31.2-12-28 18.4c-12.8 8.8-25.6 16-38.4 21.6l-31.2 14.4-4.8 33.6-12 84H435.2l-12-83.2-4.8-34.4-31.2-14.4c-12.8-6.4-26.4-13.6-38.4-21.6l-28-18.4-31.2 12L208 768l-76-127.2 67.2-51.2 28-21.6-3.2-35.2c-0.8-7.2-0.8-14.4-0.8-20.8s0-13.6 0.8-20.8l3.2-35.2-28-21.6-67.2-51.2L207.2 256l82.4 32 31.2 12 28-18.4c12.8-8.8 25.6-16 38.4-21.6l31.2-14.4 4.8-33.6L435.2 128h153.6m8.8-64H426.4c-27.2 0-49.6 19.2-53.6 44.8L360 201.6c-16 7.2-31.2 16-47.2 26.4l-90.4-35.2c-6.4-2.4-12.8-3.2-19.2-3.2-19.2 0-37.6 9.6-46.4 26.4L71.2 360c-13.6 22.4-8 52 12.8 68l76 57.6c-0.8 9.6-1.6 18.4-1.6 26.4s0 16.8 1.6 26.4l-76 57.6c-20.8 16-26.4 44-12.8 68l84.8 143.2c9.6 16.8 28 27.2 47.2 27.2 6.4 0 12-0.8 18.4-3.2L312 796c15.2 10.4 31.2 19.2 47.2 26.4l13.6 92c3.2 25.6 26.4 45.6 53.6 45.6h171.2c27.2 0 49.6-19.2 53.6-44.8l13.6-92.8c16-7.2 31.2-16 47.2-26.4l90.4 35.2c6.4 2.4 12.8 3.2 19.2 3.2 19.2 0 37.6-9.6 46.4-26.4l85.6-144.8c12.8-23.2 7.2-51.2-13.6-67.2l-76-57.6c0.8-8 1.6-16.8 1.6-26.4 0-9.6-0.8-18.4-1.6-26.4l76-57.6c20.8-16 26.4-44 12.8-68l-84.8-143.2c-9.6-16.8-28-27.2-47.2-27.2-6.4 0-12 0.8-18.4 3.2L712 228c-15.2-10.4-31.2-19.2-47.2-26.4l-13.6-92c-4-26.4-26.4-45.6-53.6-45.6zM512 384c70.4 0 128 57.6 128 128s-57.6 128-128 128-128-57.6-128-128 57.6-128 128-128m0-64c-105.6 0-192 86.4-192 192s86.4 192 192 192 192-86.4 192-192-86.4-192-192-192z"></path></svg>
    </a>
    <div class="option"><a href="/zh">简体中文</a><a href="/en">English</a><a href="/ru">Русский</a></div>
  </down-drop>`,c`<down-drop>
    <a href="/account" slot="hover">
      <svg viewBox="0 0 1024 1024" width="1.8em" height="1.8em"><path fill="currentColor" d="M870.314 877.39C777.938 967.975 651.552 1024 512 1024 229.24 1024 0.018 794.742 0.018 511.981 0.018 229.221 229.24 0 512 0s511.982 229.222 511.982 511.982c0 143.21-58.914 272.485-153.668 365.41zM512 950.86c103.932 0 199.307-36.314 274.496-96.728C746.45 740.398 639.447 658.262 512 658.262c-127.447 0-234.451 82.136-274.496 195.87C312.693 914.546 408.068 950.86 512 950.86z m0-877.684c-242.35 0-438.842 196.492-438.842 438.842 0 109.528 40.374 209.4 106.712 286.308C237.724 672.597 364.513 585.158 512 585.158c147.45 0 274.276 87.44 332.13 213.168 66.338-76.87 106.712-176.78 106.712-286.308 0-242.35-196.492-438.842-438.842-438.842z m0 475.412c-101.007 0-182.85-81.88-182.85-182.85 0-101.007 81.843-182.851 182.85-182.851 100.97 0 182.85 81.844 182.85 182.85 0 100.97-81.88 182.851-182.85 182.851z m0-292.561c-60.597 0-109.71 49.114-109.71 109.674 0 60.596 49.113 109.71 109.71 109.71 60.597 0 109.71-49.114 109.71-109.71 0-60.56-49.113-109.674-109.71-109.674z"></path></svg>
    </a>
  </down-drop>`];class Jt extends ot{}const Ei=m`
  :host {
    display: block;
    transition: all 0.3s ease-in-out;
  }
  span {
    display: inline-flex;
    align-items: center;
    flex: 1;
    white-space: nowrap;
  }
  dt {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    background: inherit;
    align-items: center;
  }
  * {
    transition: inherit;
  }
  dd {
    overflow: hidden;
    display: grid;
    grid-template-rows: 0fr;
  }
  section {
    min-height: 0;
    overflow: hidden;
  }
  dd[open] {
    grid-template-rows: 1fr;
  }
`;var Pt=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let it=class extends Jt{constructor(){super(...arguments),this.reverse=!1,this.open=!1,this.fill=!1,this.float=!1}render(){return c`<dl>
      <dt ?open=${this.open} @click=${()=>this.toggle()} style="flex-direction:row${this.reverse?"-reverse":""}">
        <span>${this.summary}<slot name="summary"></slot></span>
        <i style="transform: rotate(${this.reverse?"-18":""}0deg);">${this.querySelector('slot[name="icon"]')?c`<slot name="icon"></slot>`:c`<svg fill="currentColor" viewBox="0 0 16 16"><path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" /></svg>`}</i>
      </dt>
      <dd ?open=${this.open} ?float=${this.float}>
        <section><slot></slot></section>
      </dd>
    </dl>`}firstUpdated(){this.fill&&this.shadowRoot.querySelector("dd").addEventListener("click",()=>this.toggle())}toggle(t=!this.open){this.open=t,this.dispatchEvent(new CustomEvent("change",{detail:this.open}))}};it.styles=[Jt.styles,Ei,m`
      dl {
        height: 100%;
        position: relative;
      }
      dt {
        height: 100%;
      }
      i {
        height: 1.2em;
        min-width: 1.2em;
        aspect-ratio: 1/1;
        display: flex;
        margin-left: auto;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      [open] i {
        transform: rotate(-90deg) !important;
      }
      [float] {
        top: 100%;
        position: absolute;
      }
    `];Pt([l()],it.prototype,"summary",void 0);Pt([l({type:Boolean})],it.prototype,"reverse",void 0);Pt([l({type:Boolean,reflect:!0})],it.prototype,"open",void 0);Pt([l({type:Boolean})],it.prototype,"fill",void 0);Pt([l({type:Boolean})],it.prototype,"float",void 0);it=Pt([y("details-expand")],it);var Qt=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let mt=class extends Jt{constructor(){super(...arguments),this.summary="",this.open=!1}render(){const t=!this.summary&&!this.querySelector('[slot="summary"]');return t&&(this.open=!0),c`<dl>
      <dt ?open=${this.open} ?notitle=${t}>
        <span>${this.summary}<slot name="summary"></slot></span>
        <i @click=${()=>this.toggle()}>${this.querySelector('[slot="icon"]')?c`<slot name="icon"></slot>`:c`<svg viewBox="0 0 48 48" fill="none"><path d="M19 12L31 24L19 36" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg>`}</i>
      </dt>
      <dd ?open=${this.open}>
        <section><slot></slot></section>
      </dd>
    </dl>`}toggle(t=!this.open){this.open=t,this.dispatchEvent(new CustomEvent("change",{detail:this.open}))}};mt.styles=[Jt.styles,Ei,m`
      i {
        width: 1.2em;
        height: 1.2em;
        display: inline-flex;
        align-items: center;
        border-radius: 20%;
        transition: inherit;
      }
      dt i {
        background-color: rgb(0 0 0 / 0.055);
      }
      dt i:hover {
        background-color: rgb(0 0 0 /0.075);
      }
      [open] svg {
        transform: rotate(90deg);
      }
      [notitle] {
        display: none;
      }
    `];Qt([l()],mt.prototype,"summary",void 0);Qt([l({type:Boolean,reflect:!0})],mt.prototype,"open",void 0);Qt([Et()],mt.prototype,"def",void 0);Qt([D("section")],mt.prototype,"_section",void 0);mt=Qt([y("menu-list")],mt);var to=globalThis&&globalThis.__decorate||function(s,t,e,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(t,e,o):n(t,e))||o);return r>3&&o&&Object.defineProperty(t,e,o),o};let ze=class extends Jt{get _section(){return this.shadowRoot.querySelector("section")}render(){return c`<section>
      <main>
        <span><slot></slot></span>
      </main>
    </section>`}firstUpdated(){this._section.addEventListener("scroll",t=>{this.dispatchEvent(new CustomEvent("scroll",{detail:t.target.scrollTop}))}),this.resize(),window.addEventListener("resize",()=>{this.resize()})}resize(){const t=this.firstElementChild;if(!t)return;const e=t.clientHeight||0;if(e)this._section.style.width=e+"px",this._section.style.height=getComputedStyle(this).width;else{const i=getComputedStyle(t).height;this.style.height=i,this._section.style.width=i,this._section.style.height=getComputedStyle(this).width}}};ze.styles=m`
    :host {
      display: block;
      width: 100%;
      height: fit-content;
    }
    section {
      overflow: auto;
      position: relative;
      transform-origin: 0 0;
      transform: rotate(-90deg) translateX(-100%);
    }
    section::-webkit-scrollbar {
      display: none;
    }
    span {
      height: 500px;
      display: flex;
    }
    main {
      width: auto;
      position: absolute;
      left: 100%;
      transform-origin: 0 0;
      transform: rotate(90deg);
    }
  `;ze=to([y("scroll-x")],ze);const ge=m`
  :host {
    display: contents;
  }
  flex-flow {
    align-items: center;
  }
  base-button span {
    margin: 4px;
  }
  base-form {
    margin: 1em;
  }
  label-input {
    margin: 0.25em 0;
  }
  link-a {
    margin-top: .8em;
  }
  .wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    flex-direction: column;
  }
`;let wt={}.VITE_SERVER||"";wt&&wt.endsWith("/")&&(wt=wt.slice(0,wt.length-1));const le=wt;function Si(s){return s?/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(s):!1}function Ai(s,t){return s?t?t===s:!0:!1}var Bt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function eo(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function io(s){if(s.__esModule)return s;var t=s.default;if(typeof t=="function"){var e=function i(){return this instanceof i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(s).forEach(function(i){var r=Object.getOwnPropertyDescriptor(s,i);Object.defineProperty(e,i,r.get?r:{enumerable:!0,get:function(){return s[i]}})}),e}var Ri={exports:{}};function oo(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Re={exports:{}};const ro={},so=Object.freeze(Object.defineProperty({__proto__:null,default:ro},Symbol.toStringTag,{value:"Module"})),no=io(so);var di;function ao(){return di||(di=1,function(s,t){(function(e,i){s.exports=i()})(Bt,function(){var e=e||function(i,r){var o;if(typeof window<"u"&&window.crypto&&(o=window.crypto),typeof self<"u"&&self.crypto&&(o=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(o=globalThis.crypto),!o&&typeof window<"u"&&window.msCrypto&&(o=window.msCrypto),!o&&typeof Bt<"u"&&Bt.crypto&&(o=Bt.crypto),!o&&typeof oo=="function")try{o=no}catch{}var n=function(){if(o){if(typeof o.getRandomValues=="function")try{return o.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof o.randomBytes=="function")try{return o.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function h(){}return function(f){var w;return h.prototype=f,w=new h,h.prototype=null,w}}(),u={},v=u.lib={},p=v.Base=function(){return{extend:function(h){var f=a(this);return h&&f.mixIn(h),(!f.hasOwnProperty("init")||this.init===f.init)&&(f.init=function(){f.$super.init.apply(this,arguments)}),f.init.prototype=f,f.$super=this,f},create:function(){var h=this.extend();return h.init.apply(h,arguments),h},init:function(){},mixIn:function(h){for(var f in h)h.hasOwnProperty(f)&&(this[f]=h[f]);h.hasOwnProperty("toString")&&(this.toString=h.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),b=v.WordArray=p.extend({init:function(h,f){h=this.words=h||[],f!=r?this.sigBytes=f:this.sigBytes=h.length*4},toString:function(h){return(h||x).stringify(this)},concat:function(h){var f=this.words,w=h.words,_=this.sigBytes,S=h.sigBytes;if(this.clamp(),_%4)for(var j=0;j<S;j++){var be=w[j>>>2]>>>24-j%4*8&255;f[_+j>>>2]|=be<<24-(_+j)%4*8}else for(var I=0;I<S;I+=4)f[_+I>>>2]=w[I>>>2];return this.sigBytes+=S,this},clamp:function(){var h=this.words,f=this.sigBytes;h[f>>>2]&=4294967295<<32-f%4*8,h.length=i.ceil(f/4)},clone:function(){var h=p.clone.call(this);return h.words=this.words.slice(0),h},random:function(h){for(var f=[],w=0;w<h;w+=4)f.push(n());return new b.init(f,h)}}),g=u.enc={},x=g.Hex={stringify:function(h){for(var f=h.words,w=h.sigBytes,_=[],S=0;S<w;S++){var j=f[S>>>2]>>>24-S%4*8&255;_.push((j>>>4).toString(16)),_.push((j&15).toString(16))}return _.join("")},parse:function(h){for(var f=h.length,w=[],_=0;_<f;_+=2)w[_>>>3]|=parseInt(h.substr(_,2),16)<<24-_%8*4;return new b.init(w,f/2)}},R=g.Latin1={stringify:function(h){for(var f=h.words,w=h.sigBytes,_=[],S=0;S<w;S++){var j=f[S>>>2]>>>24-S%4*8&255;_.push(String.fromCharCode(j))}return _.join("")},parse:function(h){for(var f=h.length,w=[],_=0;_<f;_++)w[_>>>2]|=(h.charCodeAt(_)&255)<<24-_%4*8;return new b.init(w,f)}},O=g.Utf8={stringify:function(h){try{return decodeURIComponent(escape(R.stringify(h)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(h){return R.parse(unescape(encodeURIComponent(h)))}},U=v.BufferedBlockAlgorithm=p.extend({reset:function(){this._data=new b.init,this._nDataBytes=0},_append:function(h){typeof h=="string"&&(h=O.parse(h)),this._data.concat(h),this._nDataBytes+=h.sigBytes},_process:function(h){var f,w=this._data,_=w.words,S=w.sigBytes,j=this.blockSize,be=j*4,I=S/be;h?I=i.ceil(I):I=i.max((I|0)-this._minBufferSize,0);var te=I*j,Xe=i.min(te*4,S);if(te){for(var ye=0;ye<te;ye+=j)this._doProcessBlock(_,ye);f=_.splice(0,te),w.sigBytes-=Xe}return new b.init(f,Xe)},clone:function(){var h=p.clone.call(this);return h._data=this._data.clone(),h},_minBufferSize:0});v.Hasher=U.extend({cfg:p.extend(),init:function(h){this.cfg=this.cfg.extend(h),this.reset()},reset:function(){U.reset.call(this),this._doReset()},update:function(h){return this._append(h),this._process(),this},finalize:function(h){h&&this._append(h);var f=this._doFinalize();return f},blockSize:16,_createHelper:function(h){return function(f,w){return new h.init(w).finalize(f)}},_createHmacHelper:function(h){return function(f,w){return new Tt.HMAC.init(h,w).finalize(f)}}});var Tt=u.algo={};return u}(Math);return e})}(Re)),Re.exports}(function(s,t){(function(e,i){s.exports=i(ao())})(Bt,function(e){return function(){var i=e,r=i.lib,o=r.WordArray,n=r.Hasher,a=i.algo,u=[],v=a.SHA1=n.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(p,b){for(var g=this._hash.words,x=g[0],R=g[1],O=g[2],U=g[3],Tt=g[4],h=0;h<80;h++){if(h<16)u[h]=p[b+h]|0;else{var f=u[h-3]^u[h-8]^u[h-14]^u[h-16];u[h]=f<<1|f>>>31}var w=(x<<5|x>>>27)+Tt+u[h];h<20?w+=(R&O|~R&U)+1518500249:h<40?w+=(R^O^U)+1859775393:h<60?w+=(R&O|R&U|O&U)-1894007588:w+=(R^O^U)-899497514,Tt=U,U=O,O=R<<30|R>>>2,R=x,x=w}g[0]=g[0]+x|0,g[1]=g[1]+R|0,g[2]=g[2]+O|0,g[3]=g[3]+U|0,g[4]=g[4]+Tt|0},_doFinalize:function(){var p=this._data,b=p.words,g=this._nDataBytes*8,x=p.sigBytes*8;return b[x>>>5]|=128<<24-x%32,b[(x+64>>>9<<4)+14]=Math.floor(g/4294967296),b[(x+64>>>9<<4)+15]=g,p.sigBytes=b.length*4,this._process(),this._hash},clone:function(){var p=n.clone.call(this);return p._hash=this._hash.clone(),p}});i.SHA1=n._createHelper(v),i.HmacSHA1=n._createHmacHelper(v)}(),e.SHA1})})(Ri);var lo=Ri.exports;const ho=eo(lo),Oi=s=>co(ho,s);function co(s,t,...e){return s(t,e).toString()}var uo=Object.defineProperty,po=Object.getOwnPropertyDescriptor,fo=(s,t,e,i)=>{for(var r=i>1?void 0:i?po(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&uo(t,e,r),r};let he=class extends q{onSubmit(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("base-form"),[t,e]=s.namevalue();let{email:i,password:r}=e;Si(i)&&Ai(r,e["password verify"])&&(r=Oi(r),console.log(i,r),fetch(`${le}/${t}`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,password:r})}).then(()=>{new URLSearchParams(window.location.search).get("callback_url")&&(history.pushState(null,"","/login"+window.location.search),L.updateAll())}))}render(){return c`
      <flex-flow class="wrapper">
        <base-form name="register">
          <label-input label="E-mail" name="email"></label-input>
          <label-input label="Password" type="password"></label-input>
          <label-input label="Password Verify" type="password"></label-input>
        </base-form>
        <base-button @click=${this.onSubmit}><span>Submit</span></base-button>
        <link-a href="/login">Go to login</link-a>
      </flex-flow>
    `}};he.styles=ge;he=fo([pe("signup-page")],he);var vo=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,go=(s,t,e,i)=>{for(var r=i>1?void 0:i?mo(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&vo(t,e,r),r};let de=class extends q{onSubmit(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("base-form"),[t,e]=s.namevalue();let{email:i,password:r}=e;Si(i)&&Ai(r,e["password verify"])&&(r=Oi(r),console.log(i,r),fetch(`${le}/${t}`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,password:r})}).then(n=>n.json()).then(n=>{const{token:a}=n;localStorage.setItem("TOKEN",a),new URLSearchParams(window.location.search).get("callback_url")&&(history.pushState(null,"","/auth"+window.location.search),L.updateAll())}))}render(){return c`
      <flex-flow class="wrapper">
        <base-form name="login">
          <label-input label="E-mail" name="email"></label-input>
          <label-input label="Password" type="password"></label-input>
        </base-form>
        <base-button @click=${this.onSubmit}><span>Submit</span></base-button>
        <link-a href="/signup">Create account</link-a>
      </flex-flow>
    `}};de.styles=ge;de=go([pe("login-page")],de);var bo=Object.defineProperty,yo=Object.getOwnPropertyDescriptor,ji=(s,t,e,i)=>{for(var r=i>1?void 0:i?yo(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&bo(t,e,r),r};let Vt=class extends q{constructor(){super(...arguments),this.state=null}onSubmit(){fetch(`${le}/auth`,{method:"post",headers:{Authorization:`Bearer ${this.token}`}}).then(s=>s.json()).then(s=>{const{code:t}=s;window.location.href=`${this.callbackURL}?code=${t}`}).catch(()=>{})}firstUpdated(){if(this.token=localStorage.getItem("TOKEN"),this.callbackURL=new URLSearchParams(window.location.search).get("callback_url"),!this.token||!this.callbackURL){this.toLogin();return}this.callbackURLOrigin=new URL(this.callbackURL).origin;const s=this.token.split(".")[1];s&&(this.state=JSON.parse(atob(s))),fetch(`${le}/api/user`,{method:"post",headers:{Authorization:"Bearer "+this.token}}).then(t=>t.json()).then(t=>{this.state=t}).catch(()=>{this.toLogin()})}toLogin(){history.pushState(null,"","/login"+window.location.search),L.updateAll()}render(){return c`
      <flex-flow class="wrapper">
        ${this.state?c`
              ${this.state.email}
              <span> You're authorizing</span>
              <span style="font-weight: 700;">another application</span>
              <a
                style="font-style: italic;text-decoration: underline;"
                href=${$t(this.callbackURLOrigin===null?void 0:this.callbackURLOrigin)}
              >
                ${this.callbackURLOrigin}
              </a>
              <span> to gain account access </span>
              <span style="font-weight: 700;">(read-only)</span>
              <base-button @click=${this.onSubmit}>
                <span>Permission</span>
              </base-button>
              <link-a href="/login">Change account</link-a>
            `:c` Wait a moment. `}
      </flex-flow>
    `}};Vt.styles=ge;ji([l({attribute:!1})],Vt.prototype,"state",2);Vt=ji([pe("auth-page")],Vt);var wo=Object.defineProperty,_o=Object.getOwnPropertyDescriptor,xo=(s,t,e,i)=>{for(var r=i>1?void 0:i?_o(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&wo(t,e,r),r};let ce=class extends q{render(){return c`
      <div class="wrapper">
        <link-a href="/login">Login</link-a>
        <link-a href="/auth">Authorization</link-a>
        <link-a href="/signup">Signup</link-a>
        <link-a
          href="https://github.com/startracex/goupapp/blob/main/apps/sign#readme"
        >
          Document
        </link-a>
      </div>
    `}};ce.styles=[ge,m`
      link-a {
        display: block;
        margin: 10px 0;
      }
    `];ce=xo([pe("index-page")],ce);const $o=[{path:"/",component:new ce},{path:"/signup",component:new he},{path:"/login",component:new de},{path:"/auth",component:new Vt}],ci=document.querySelector("route-view");ci&&(ci.routes=$o);
