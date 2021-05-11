/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var o={695:function(o,e,n){o.exports=function(o,e){"use strict";function n(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var t=n(o),r=n(e);return class{constructor(o){(o="string"==typeof o?document.querySelector(o):o)&&(this._element=o,t.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){t.default.remove(this._element,this.constructor.DATA_KEY),r.default.off(this._element,`.${this.constructor.DATA_KEY}`),this._element=null}static getInstance(o){return t.default.get(o,this.DATA_KEY)}static get VERSION(){return"5.0.0"}}}(n(493),n(286))},331:function(o,e,n){o.exports=function(o,e,n){"use strict";function t(o){return o&&"object"==typeof o&&"default"in o?o:{default:o}}var r=t(o),c=t(e),a=t(n);const i="bs.button",d='[data-bs-toggle="button"]',l=`click.bs.button.data-api`;class s extends a.default{static get DATA_KEY(){return i}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(o){return this.each((function(){let e=r.default.get(this,i);e||(e=new s(this)),"toggle"===o&&e[o]()}))}}return c.default.on(document,l,d,(o=>{o.preventDefault();const e=o.target.closest(d);let n=r.default.get(e,i);n||(n=new s(e)),n.toggle()})),b="button",u=s,f=()=>{const o=(()=>{const{jQuery:o}=window;return o&&!document.body.hasAttribute("data-bs-no-jquery")?o:null})();if(o){const e=o.fn[b];o.fn[b]=u.jQueryInterface,o.fn[b].Constructor=u,o.fn[b].noConflict=()=>(o.fn[b]=e,u.jQueryInterface)}},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",f):f(),s;var b,u,f}(n(493),n(286),n(695))},493:function(o){o.exports=function(){"use strict";const o=new Map;return{set(e,n,t){o.has(e)||o.set(e,new Map);const r=o.get(e);r.has(n)||0===r.size?r.set(n,t):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get:(e,n)=>o.has(e)&&o.get(e).get(n)||null,remove(e,n){if(!o.has(e))return;const t=o.get(e);t.delete(n),0===t.size&&o.delete(e)}}}()},286:function(o){o.exports=function(){"use strict";const o=/[^.]*(?=\..*)\.|.*/,e=/\..*/,n=/::\d+$/,t={};let r=1;const c={mouseenter:"mouseover",mouseleave:"mouseout"},a=/^(mouseenter|mouseleave)/i,i=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function d(o,e){return e&&`${e}::${r++}`||o.uidEvent||r++}function l(o){const e=d(o);return o.uidEvent=e,t[e]=t[e]||{},t[e]}function s(o,e,n=null){const t=Object.keys(o);for(let r=0,c=t.length;r<c;r++){const c=o[t[r]];if(c.originalHandler===e&&c.delegationSelector===n)return c}return null}function b(o,e,n){const t="string"==typeof e,r=t?n:e;let c=g(o);return i.has(c)||(c=o),[t,r,c]}function u(e,n,t,r,c){if("string"!=typeof n||!e)return;if(t||(t=r,r=null),a.test(n)){const o=o=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return o.call(this,e)};r?r=o(r):t=o(t)}const[i,u,f]=b(n,t,r),g=l(e),k=g[f]||(g[f]={}),v=s(k,u,i?t:null);if(v)return void(v.oneOff=v.oneOff&&c);const p=d(u,n.replace(o,"")),m=i?function(o,e,n){return function t(r){const c=o.querySelectorAll(e);for(let{target:a}=r;a&&a!==this;a=a.parentNode)for(let i=c.length;i--;)if(c[i]===a)return r.delegateTarget=a,t.oneOff&&h.off(o,r.type,e,n),n.apply(a,[r]);return null}}(e,t,r):function(o,e){return function n(t){return t.delegateTarget=o,n.oneOff&&h.off(o,t.type,e),e.apply(o,[t])}}(e,t);m.delegationSelector=i?t:null,m.originalHandler=u,m.oneOff=c,m.uidEvent=p,k[p]=m,e.addEventListener(f,m,i)}function f(o,e,n,t,r){const c=s(e[n],t,r);c&&(o.removeEventListener(n,c,Boolean(r)),delete e[n][c.uidEvent])}function g(o){return o=o.replace(e,""),c[o]||o}const h={on(o,e,n,t){u(o,e,n,t,!1)},one(o,e,n,t){u(o,e,n,t,!0)},off(o,e,t,r){if("string"!=typeof e||!o)return;const[c,a,i]=b(e,t,r),d=i!==e,s=l(o),u=e.startsWith(".");if(void 0!==a){if(!s||!s[i])return;return void f(o,s,i,a,c?t:null)}u&&Object.keys(s).forEach((n=>{!function(o,e,n,t){const r=e[n]||{};Object.keys(r).forEach((c=>{if(c.includes(t)){const t=r[c];f(o,e,n,t.originalHandler,t.delegationSelector)}}))}(o,s,n,e.slice(1))}));const g=s[i]||{};Object.keys(g).forEach((t=>{const r=t.replace(n,"");if(!d||e.includes(r)){const e=g[t];f(o,s,i,e.originalHandler,e.delegationSelector)}}))},trigger(o,e,n){if("string"!=typeof e||!o)return null;const t=(()=>{const{jQuery:o}=window;return o&&!document.body.hasAttribute("data-bs-no-jquery")?o:null})(),r=g(e),c=e!==r,a=i.has(r);let d,l=!0,s=!0,b=!1,u=null;return c&&t&&(d=t.Event(e,n),t(o).trigger(d),l=!d.isPropagationStopped(),s=!d.isImmediatePropagationStopped(),b=d.isDefaultPrevented()),a?(u=document.createEvent("HTMLEvents"),u.initEvent(r,l,!0)):u=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((o=>{Object.defineProperty(u,o,{get:()=>n[o]})})),b&&u.preventDefault(),s&&o.dispatchEvent(u),u.defaultPrevented&&void 0!==d&&d.preventDefault(),u}};return h}()},404:(o,e,n)=>{"use strict";n.d(e,{Z:()=>c});var t=n(645),r=n.n(t)()((function(o){return o[1]}));r.push([o.id,".btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;border-radius:.25rem;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.btn{transition:none}}.btn:hover{color:#212529}.btn-check:focus+.btn,.btn:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,0.25)}.btn:disabled,.btn.disabled,fieldset:disabled .btn{pointer-events:none;opacity:.65}.btn-primary{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-primary:hover{color:#fff;background-color:#0b5ed7;border-color:#0a58ca}.btn-check:focus+.btn-primary,.btn-primary:focus{color:#fff;background-color:#0b5ed7;border-color:#0a58ca;box-shadow:0 0 0 .25rem rgba(49,132,253,0.5)}.btn-check:checked+.btn-primary,.btn-check:active+.btn-primary,.btn-primary:active,.btn-primary.active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0a58ca;border-color:#0a53be}.btn-check:checked+.btn-primary:focus,.btn-check:active+.btn-primary:focus,.btn-primary:active:focus,.btn-primary.active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(49,132,253,0.5)}.btn-primary:disabled,.btn-primary.disabled{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5c636a;border-color:#565e64}.btn-check:focus+.btn-secondary,.btn-secondary:focus{color:#fff;background-color:#5c636a;border-color:#565e64;box-shadow:0 0 0 .25rem rgba(130,138,145,0.5)}.btn-check:checked+.btn-secondary,.btn-check:active+.btn-secondary,.btn-secondary:active,.btn-secondary.active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#565e64;border-color:#51585e}.btn-check:checked+.btn-secondary:focus,.btn-check:active+.btn-secondary:focus,.btn-secondary:active:focus,.btn-secondary.active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(130,138,145,0.5)}.btn-secondary:disabled,.btn-secondary.disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-success{color:#fff;background-color:#198754;border-color:#198754}.btn-success:hover{color:#fff;background-color:#157347;border-color:#146c43}.btn-check:focus+.btn-success,.btn-success:focus{color:#fff;background-color:#157347;border-color:#146c43;box-shadow:0 0 0 .25rem rgba(60,153,110,0.5)}.btn-check:checked+.btn-success,.btn-check:active+.btn-success,.btn-success:active,.btn-success.active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#146c43;border-color:#13653f}.btn-check:checked+.btn-success:focus,.btn-check:active+.btn-success:focus,.btn-success:active:focus,.btn-success.active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(60,153,110,0.5)}.btn-success:disabled,.btn-success.disabled{color:#fff;background-color:#198754;border-color:#198754}.btn-info{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-info:hover{color:#000;background-color:#31d2f2;border-color:#25cff2}.btn-check:focus+.btn-info,.btn-info:focus{color:#000;background-color:#31d2f2;border-color:#25cff2;box-shadow:0 0 0 .25rem rgba(11,172,204,0.5)}.btn-check:checked+.btn-info,.btn-check:active+.btn-info,.btn-info:active,.btn-info.active,.show>.btn-info.dropdown-toggle{color:#000;background-color:#3dd5f3;border-color:#25cff2}.btn-check:checked+.btn-info:focus,.btn-check:active+.btn-info:focus,.btn-info:active:focus,.btn-info.active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(11,172,204,0.5)}.btn-info:disabled,.btn-info.disabled{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-warning{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#000;background-color:#ffca2c;border-color:#ffc720}.btn-check:focus+.btn-warning,.btn-warning:focus{color:#000;background-color:#ffca2c;border-color:#ffc720;box-shadow:0 0 0 .25rem rgba(217,164,6,0.5)}.btn-check:checked+.btn-warning,.btn-check:active+.btn-warning,.btn-warning:active,.btn-warning.active,.show>.btn-warning.dropdown-toggle{color:#000;background-color:#ffcd39;border-color:#ffc720}.btn-check:checked+.btn-warning:focus,.btn-check:active+.btn-warning:focus,.btn-warning:active:focus,.btn-warning.active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(217,164,6,0.5)}.btn-warning:disabled,.btn-warning.disabled{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#bb2d3b;border-color:#b02a37}.btn-check:focus+.btn-danger,.btn-danger:focus{color:#fff;background-color:#bb2d3b;border-color:#b02a37;box-shadow:0 0 0 .25rem rgba(225,83,97,0.5)}.btn-check:checked+.btn-danger,.btn-check:active+.btn-danger,.btn-danger:active,.btn-danger.active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#b02a37;border-color:#a52834}.btn-check:checked+.btn-danger:focus,.btn-check:active+.btn-danger:focus,.btn-danger:active:focus,.btn-danger.active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(225,83,97,0.5)}.btn-danger:disabled,.btn-danger.disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-light{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:focus+.btn-light,.btn-light:focus{color:#000;background-color:#f9fafb;border-color:#f9fafb;box-shadow:0 0 0 .25rem rgba(211,212,213,0.5)}.btn-check:checked+.btn-light,.btn-check:active+.btn-light,.btn-light:active,.btn-light.active,.show>.btn-light.dropdown-toggle{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:checked+.btn-light:focus,.btn-check:active+.btn-light:focus,.btn-light:active:focus,.btn-light.active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(211,212,213,0.5)}.btn-light:disabled,.btn-light.disabled{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-dark{color:#fff;background-color:#212529;border-color:#212529}.btn-dark:hover{color:#fff;background-color:#1c1f23;border-color:#1a1e21}.btn-check:focus+.btn-dark,.btn-dark:focus{color:#fff;background-color:#1c1f23;border-color:#1a1e21;box-shadow:0 0 0 .25rem rgba(66,70,73,0.5)}.btn-check:checked+.btn-dark,.btn-check:active+.btn-dark,.btn-dark:active,.btn-dark.active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1a1e21;border-color:#191c1f}.btn-check:checked+.btn-dark:focus,.btn-check:active+.btn-dark:focus,.btn-dark:active:focus,.btn-dark.active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(66,70,73,0.5)}.btn-dark:disabled,.btn-dark.disabled{color:#fff;background-color:#212529;border-color:#212529}.btn-outline-primary{color:#0d6efd;border-color:#0d6efd}.btn-outline-primary:hover{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:focus+.btn-outline-primary,.btn-outline-primary:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,0.5)}.btn-check:checked+.btn-outline-primary,.btn-check:active+.btn-outline-primary,.btn-outline-primary:active,.btn-outline-primary.active,.btn-outline-primary.dropdown-toggle.show{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:checked+.btn-outline-primary:focus,.btn-check:active+.btn-outline-primary:focus,.btn-outline-primary:active:focus,.btn-outline-primary.active:focus,.btn-outline-primary.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,0.5)}.btn-outline-primary:disabled,.btn-outline-primary.disabled{color:#0d6efd;background-color:transparent}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:focus+.btn-outline-secondary,.btn-outline-secondary:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,0.5)}.btn-check:checked+.btn-outline-secondary,.btn-check:active+.btn-outline-secondary,.btn-outline-secondary:active,.btn-outline-secondary.active,.btn-outline-secondary.dropdown-toggle.show{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:checked+.btn-outline-secondary:focus,.btn-check:active+.btn-outline-secondary:focus,.btn-outline-secondary:active:focus,.btn-outline-secondary.active:focus,.btn-outline-secondary.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,0.5)}.btn-outline-secondary:disabled,.btn-outline-secondary.disabled{color:#6c757d;background-color:transparent}.btn-outline-success{color:#198754;border-color:#198754}.btn-outline-success:hover{color:#fff;background-color:#198754;border-color:#198754}.btn-check:focus+.btn-outline-success,.btn-outline-success:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,0.5)}.btn-check:checked+.btn-outline-success,.btn-check:active+.btn-outline-success,.btn-outline-success:active,.btn-outline-success.active,.btn-outline-success.dropdown-toggle.show{color:#fff;background-color:#198754;border-color:#198754}.btn-check:checked+.btn-outline-success:focus,.btn-check:active+.btn-outline-success:focus,.btn-outline-success:active:focus,.btn-outline-success.active:focus,.btn-outline-success.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,0.5)}.btn-outline-success:disabled,.btn-outline-success.disabled{color:#198754;background-color:transparent}.btn-outline-info{color:#0dcaf0;border-color:#0dcaf0}.btn-outline-info:hover{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:focus+.btn-outline-info,.btn-outline-info:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,0.5)}.btn-check:checked+.btn-outline-info,.btn-check:active+.btn-outline-info,.btn-outline-info:active,.btn-outline-info.active,.btn-outline-info.dropdown-toggle.show{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:checked+.btn-outline-info:focus,.btn-check:active+.btn-outline-info:focus,.btn-outline-info:active:focus,.btn-outline-info.active:focus,.btn-outline-info.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,0.5)}.btn-outline-info:disabled,.btn-outline-info.disabled{color:#0dcaf0;background-color:transparent}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:focus+.btn-outline-warning,.btn-outline-warning:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,0.5)}.btn-check:checked+.btn-outline-warning,.btn-check:active+.btn-outline-warning,.btn-outline-warning:active,.btn-outline-warning.active,.btn-outline-warning.dropdown-toggle.show{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:checked+.btn-outline-warning:focus,.btn-check:active+.btn-outline-warning:focus,.btn-outline-warning:active:focus,.btn-outline-warning.active:focus,.btn-outline-warning.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,0.5)}.btn-outline-warning:disabled,.btn-outline-warning.disabled{color:#ffc107;background-color:transparent}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:focus+.btn-outline-danger,.btn-outline-danger:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,0.5)}.btn-check:checked+.btn-outline-danger,.btn-check:active+.btn-outline-danger,.btn-outline-danger:active,.btn-outline-danger.active,.btn-outline-danger.dropdown-toggle.show{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:checked+.btn-outline-danger:focus,.btn-check:active+.btn-outline-danger:focus,.btn-outline-danger:active:focus,.btn-outline-danger.active:focus,.btn-outline-danger.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,0.5)}.btn-outline-danger:disabled,.btn-outline-danger.disabled{color:#dc3545;background-color:transparent}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:focus+.btn-outline-light,.btn-outline-light:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,0.5)}.btn-check:checked+.btn-outline-light,.btn-check:active+.btn-outline-light,.btn-outline-light:active,.btn-outline-light.active,.btn-outline-light.dropdown-toggle.show{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:checked+.btn-outline-light:focus,.btn-check:active+.btn-outline-light:focus,.btn-outline-light:active:focus,.btn-outline-light.active:focus,.btn-outline-light.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,0.5)}.btn-outline-light:disabled,.btn-outline-light.disabled{color:#f8f9fa;background-color:transparent}.btn-outline-dark{color:#212529;border-color:#212529}.btn-outline-dark:hover{color:#fff;background-color:#212529;border-color:#212529}.btn-check:focus+.btn-outline-dark,.btn-outline-dark:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,0.5)}.btn-check:checked+.btn-outline-dark,.btn-check:active+.btn-outline-dark,.btn-outline-dark:active,.btn-outline-dark.active,.btn-outline-dark.dropdown-toggle.show{color:#fff;background-color:#212529;border-color:#212529}.btn-check:checked+.btn-outline-dark:focus,.btn-check:active+.btn-outline-dark:focus,.btn-outline-dark:active:focus,.btn-outline-dark.active:focus,.btn-outline-dark.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,0.5)}.btn-outline-dark:disabled,.btn-outline-dark.disabled{color:#212529;background-color:transparent}.btn-link{font-weight:400;color:#0d6efd;text-decoration:underline}.btn-link:hover{color:#0a58ca}.btn-link:disabled,.btn-link.disabled{color:#6c757d}.btn-lg{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.btn-sm{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#0d6efd;transition:width 0.6s ease}@media (prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem}.progress-bar-animated{animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion: reduce){.progress-bar-animated{animation:none}}body{color:blue}\n",""]);const c=r},434:(o,e,n)=>{"use strict";n.d(e,{Z:()=>c});var t=n(645),r=n.n(t)()((function(o){return o[1]}));r.push([o.id,"\r\nbody{\r\n    background: yellow;\r\n}",""]);const c=r},645:o=>{"use strict";o.exports=function(o){var e=[];return e.toString=function(){return this.map((function(e){var n=o(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(o,n,t){"string"==typeof o&&(o=[[null,o,""]]);var r={};if(t)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(r[a]=!0)}for(var i=0;i<o.length;i++){var d=[].concat(o[i]);t&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),e.push(d))}},e}},379:(o,e,n)=>{"use strict";var t,r=function(){var o={};return function(e){if(void 0===o[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(o){n=null}o[e]=n}return o[e]}}(),c=[];function a(o){for(var e=-1,n=0;n<c.length;n++)if(c[n].identifier===o){e=n;break}return e}function i(o,e){for(var n={},t=[],r=0;r<o.length;r++){var i=o[r],d=e.base?i[0]+e.base:i[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var b=a(s),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==b?(c[b].references++,c[b].updater(u)):c.push({identifier:s,updater:h(u,e),references:1}),t.push(s)}return t}function d(o){var e=document.createElement("style"),t=o.attributes||{};if(void 0===t.nonce){var c=n.nc;c&&(t.nonce=c)}if(Object.keys(t).forEach((function(o){e.setAttribute(o,t[o])})),"function"==typeof o.insert)o.insert(e);else{var a=r(o.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,s=(l=[],function(o,e){return l[o]=e,l.filter(Boolean).join("\n")});function b(o,e,n,t){var r=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(o.styleSheet)o.styleSheet.cssText=s(e,r);else{var c=document.createTextNode(r),a=o.childNodes;a[e]&&o.removeChild(a[e]),a.length?o.insertBefore(c,a[e]):o.appendChild(c)}}function u(o,e,n){var t=n.css,r=n.media,c=n.sourceMap;if(r?o.setAttribute("media",r):o.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),o.styleSheet)o.styleSheet.cssText=t;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(t))}}var f=null,g=0;function h(o,e){var n,t,r;if(e.singleton){var c=g++;n=f||(f=d(e)),t=b.bind(null,n,c,!1),r=b.bind(null,n,c,!0)}else n=d(e),t=u.bind(null,n,e),r=function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(n)};return t(o),function(e){if(e){if(e.css===o.css&&e.media===o.media&&e.sourceMap===o.sourceMap)return;t(o=e)}else r()}}o.exports=function(o,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var n=i(o=o||[],e);return function(o){if(o=o||[],"[object Array]"===Object.prototype.toString.call(o)){for(var t=0;t<n.length;t++){var r=a(n[t]);c[r].references--}for(var d=i(o,e),l=0;l<n.length;l++){var s=a(n[l]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}n=d}}}}},e={};function n(t){var r=e[t];if(void 0!==r)return r.exports;var c=e[t]={id:t,exports:{}};return o[t].call(c.exports,c,c.exports,n),c.exports}n.n=o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return n.d(e,{a:e}),e},n.d=(o,e)=>{for(var t in e)n.o(e,t)&&!n.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:e[t]})},n.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),(()=>{"use strict";var o=n(379),e=n.n(o),t=n(434);e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var r=n(404);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,n(331);var c=document.getElementById("botoncito");new bootstrap.Button(c).toogle(),c.onclick=function(){new bootstrap.Button(c).toogle()}})()})();