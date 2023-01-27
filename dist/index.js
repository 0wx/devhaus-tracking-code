"use strict";(()=>{var R=Object.create;var k=Object.defineProperty,U=Object.defineProperties,q=Object.getOwnPropertyDescriptor,B=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertyNames,N=Object.getOwnPropertySymbols,$=Object.getPrototypeOf,V=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var P=(e,t,o)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,T=(e,t)=>{for(var o in t||(t={}))V.call(t,o)&&P(e,o,t[o]);if(N)for(var o of N(t))J.call(t,o)&&P(e,o,t[o]);return e},E=(e,t)=>U(e,B(t));var Q=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var W=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let c of z(t))!V.call(e,c)&&c!==o&&k(e,c,{get:()=>t[c],enumerable:!(r=q(t,c))||r.enumerable});return e};var Y=(e,t,o)=>(o=e!=null?R($(e)):{},W(t||!e||!e.__esModule?k(o,"default",{value:e,enumerable:!0}):o,e));var F=Q(A=>{"use strict";A.parse=X;A.serialize=Z;var K=Object.prototype.toString,M=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function X(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var o={},r=t||{},c=r.decode||ee,f=0;f<e.length;){var s=e.indexOf("=",f);if(s===-1)break;var i=e.indexOf(";",f);if(i===-1)i=e.length;else if(i<s){f=e.lastIndexOf(";",s-1)+1;continue}var a=e.slice(f,s).trim();if(o[a]===void 0){var n=e.slice(s+1,i).trim();n.charCodeAt(0)===34&&(n=n.slice(1,-1)),o[a]=oe(n,c)}f=i+1}return o}function Z(e,t,o){var r=o||{},c=r.encode||te;if(typeof c!="function")throw new TypeError("option encode is invalid");if(!M.test(e))throw new TypeError("argument name is invalid");var f=c(t);if(f&&!M.test(f))throw new TypeError("argument val is invalid");var s=e+"="+f;if(r.maxAge!=null){var i=r.maxAge-0;if(isNaN(i)||!isFinite(i))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(i)}if(r.domain){if(!M.test(r.domain))throw new TypeError("option domain is invalid");s+="; Domain="+r.domain}if(r.path){if(!M.test(r.path))throw new TypeError("option path is invalid");s+="; Path="+r.path}if(r.expires){var a=r.expires;if(!re(a)||isNaN(a.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+a.toUTCString()}if(r.httpOnly&&(s+="; HttpOnly"),r.secure&&(s+="; Secure"),r.priority){var n=typeof r.priority=="string"?r.priority.toLowerCase():r.priority;switch(n){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(r.sameSite){var p=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(p){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s}function ee(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function te(e){return encodeURIComponent(e)}function re(e){return K.call(e)==="[object Date]"||e instanceof Date}function oe(e,t){try{return t(e)}catch(o){return e}}});function O(e){let t=T({},e);return["email","name","first_name","last_name","phone_number"].forEach(r=>{t[r]&&delete t[r]}),t}var j=Y(F(),1);function S(e=""){let t=window.location.search,o=new URLSearchParams(t),r=o==null?void 0:o.get(e);if(!r){let f=j.default.parse(document.cookie)[e];return f||(e==="utm_source"?"direct":null)}if(r)return document.cookie=j.default.serialize(e,r,{path:"/",maxAge:60*60*24*7}),r}function x(e){let t=E(T({},e),{network_provider:e.org});return delete t.org,t}async function L(){let e=await fetch("https://ipapi.co/json/").then(t=>t.json());window.analytics&&window.analytics.identify(x(e))}function v(e="",t={}){var r;L();let o=E(T({},t),{metadata:{utm_source:S("utm_source"),utm_medium:S("utm_medium"),utm_campaign:S("utm_campaign")}});window!=null&&window.analytics&&((r=window==null?void 0:window.analytics)==null||r.track(e,o))}function b(e={}){L(),window.analytics&&window.analytics.identify(e)}function H(){let e=document.querySelectorAll("iframe");try{e.forEach(t=>{var r,c,f;let o=(f=(c=(r=t==null?void 0:t.contentWindow)==null?void 0:r.document)==null?void 0:c.querySelector)==null?void 0:f.call(c,".jotform-form");(o==null?void 0:o.tagName)==="FORM"&&(o==null||o.addEventListener("submit",()=>{let s=[...o.querySelectorAll("input"),...o.querySelectorAll("select"),...o.querySelectorAll("textarea")],i={};s.forEach(a=>{var m;let n=(m=a.getAttribute("name"))!=null?m:"",{value:p}=a,l=()=>{let g=n.split("_");g.shift();let w=g.join("_").replace(/\[\]$/,"").toLowerCase();i[w]?typeof i[w]=="string"?i[w]=[i[w],p]:i[w].push(p):i[w]=p};n.search(/q\d+_[a-z\_]+\[?\]?/)!==-1&&((a.getAttribute("type")==="checkbox"||a.getAttribute("type")==="radio")&&a.checked||a.getAttribute("type")!=="checkbox"&&a.getAttribute("type")!=="radio"&&a.getAttribute("type")!=="file")&&l()}),b(i),v(t!=null&&t.title?`${t.title} Form Submitted`:"Jotform Form Submitted",O(i))}))})}catch(t){}}var u=(e="")=>/.+:.+/g.test(e)?e.substring(0,e.search(":")):e;var d=(e,t="",o=null,r)=>{var c,f,s;if(t==="path")return window.location.pathname;if(t==="url")return window.location.href.split("?")[0];if(/.+:.+/g.test(t)){let i=t.substring(0,t.search(":")),a=t.substring(t.search(":")+1,t.length);return d(e,i,a,r)}if(t)switch(o){case"innerHTML":return e==null?void 0:e.innerHTML;case"innerHTML-parseInt":return parseInt(e.innerHTML);case"url":return window.location.href.split("?")[0];case"boolean:true":return!0;case"boolean:false":return!1;case"grabPageview":let i=r.find(p=>{var l;return((l=p==null?void 0:p.dataset)==null?void 0:l.pageviewPropertyName)===t}),a=(f=(c=i==null?void 0:i.dataset)==null?void 0:c.pageviewPropertyValue)!=null?f:"innerHTML";return d(i,t,a,r);case"grabAHref":let n=e==null?void 0:e.getAttribute("href");return n!=null&&n.includes("?")&&(n=n==null?void 0:n.split("?")[0]),(s=n!=null?n:e==null?void 0:e.innerHTML)!=null?s:"";default:return o}};function C(e,t){var f,s;let o=Array.from(t),r=e.dataset.segmentEvent,c={};for(let i=1;i<=100;i++){let a=(f=e.dataset)==null?void 0:f["propertyName"+i],n=(s=e.dataset)==null?void 0:s["propertyValue"+i];if(a)c[u(a)]=d(e,a,n,o);else break}t.forEach(i=>{var m,g,h;let a=i,n=(m=a.dataset)==null?void 0:m.pageviewPropertyName,p=(h=(g=a.dataset)==null?void 0:g.pageviewPropertyValue)!=null?h:"innerHTML",l=u(n);if(c[u(n)]){let y=c[l];typeof y=="string"?c[l]=[y,d(a,n,p,o)]:Array.isArray(y)&&(c[l]=[...y,d(a,n,p,o)])}else a.getAttribute("data-multi-reference")==="true"?c[l]=[d(a,n,p,o)]:c[u(n)]=d(a,n,p,o)}),v(r,c)}function G(e,t,o){var s,i,a;let r=Array.from(o),f=e.closest("[data-wrapper]").querySelectorAll("[data-property-name]");for(let n=0;n<f.length;n++){let p=f[n],l=(s=p.dataset)==null?void 0:s.propertyName,m=(a=(i=p.dataset)==null?void 0:i.propertyValue)!=null?a:"innerHTML";t[u(l)]=d(p,l,m,r)}}function I(e,t,o){var f;let r=e.closest("form");[...(f=r==null?void 0:r.elements)!=null?f:[]].forEach(s=>{var a,n,p;let i=s;if(i!==e){let l=i==null?void 0:i.id.toLowerCase(),m=i==null?void 0:i.value,g=((a=i==null?void 0:i.dataset)==null?void 0:a.identify)==="true",h=((n=i==null?void 0:i.dataset)==null?void 0:n.bothIdentifyAndTrack)==="true",y=((p=i==null?void 0:i.dataset)==null?void 0:p.ignore)==="true";l&&m&&!y&&(g||h?(o[l]=m,h&&(t[l]=m)):t[l]=m)}})}function _(e,t){var s,i;let o=Array.from(t),r=e.dataset.segmentEvent,c={},f={};if(r){for(let n=1;n<=100;n++){let p=(s=e.dataset)==null?void 0:s["propertyName"+n],l=(i=e.dataset)==null?void 0:i["propertyValue"+n];if(p)c[u(p)]=d(e,p,l,o);else break}let a=()=>{var n,p;(e.tagName==="INPUT"&&e.type==="submit"||((n=e.dataset)==null?void 0:n.submitButton)==="true")&&I(e,c,f),((p=e.dataset)==null?void 0:p.cms)==="true"&&G(e,c,t),v(r,c),Object.keys(f).length>0&&b(f)};e.addEventListener("click",a),e.addEventListener("auxclick",a)}}function D(){let e=document.querySelectorAll("[data-segment-event]"),t=document.querySelectorAll("[data-pageview-property-name]");e.forEach(o=>{let r=o;r.tagName==="BODY"?C(r,t):_(r,t)})}D();window.addEventListener("load",H);})();
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//Copyright (c) 2023 Devhaus Pte Ltd
