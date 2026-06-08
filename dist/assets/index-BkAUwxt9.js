(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const Bu=()=>{};var na={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Uu=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],a=n[t++],c=n[t++],h=((r&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},_l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const o=n[r],a=r+1<n.length,c=a?n[r+1]:0,h=r+2<n.length,d=h?n[r+2]:0,f=o>>2,p=(o&3)<<4|c>>4;let I=(c&15)<<2|d>>6,A=d&63;h||(A=64,a||(I=64)),s.push(t[f],t[p],t[I],t[A])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Uu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||c==null||d==null||p==null)throw new zu;const I=o<<2|c>>4;if(s.push(I),d!==64){const A=c<<4&240|d>>2;if(s.push(A),p!==64){const R=d<<6&192|p;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ju=function(n){const e=vl(n);return _l.encodeByteArray(e,!0)},qs=function(n){return ju(n).replace(/\./g,"")},Gu=function(n){try{return _l.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=()=>Hu().__FIREBASE_DEFAULTS__,Ku=()=>{if(typeof process>"u"||typeof na>"u")return;const n=na.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Gu(n[1]);return e&&JSON.parse(e)},_i=()=>{try{return Bu()||Wu()||Ku()||Qu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yu=n=>{var e,t;return(t=(e=_i())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ju=n=>{const e=Yu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},El=()=>{var n;return(n=_i())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[qs(JSON.stringify(t)),qs(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function th(){var e;const n=(e=_i())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nh(){return!th()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sh(){try{return typeof indexedDB=="object"}catch{return!1}}function rh(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="FirebaseError";class cn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ih,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wl.prototype.create)}}class wl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?oh(o,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new cn(r,c,s)}}function oh(n,e){return n.replace(ah,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ah=/\{\$([^}]+)}/g;function Fs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const o=n[r],a=e[r];if(sa(o)&&sa(a)){if(!Fs(o,a))return!1}else if(o!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function sa(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lh(n){return(await fetch(n,{credentials:"include"})).ok}class Bn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Xu;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hh(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);s===c&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uh(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uh(n){return n===Rt?void 0:n}function hh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ch(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const fh={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},mh=G.INFO,ph={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},gh=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=ph[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tl{constructor(e){this.name=e,this._logLevel=mh,this._logHandler=gh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const yh=(n,e)=>e.some(t=>n instanceof t);let ra,ia;function vh(){return ra||(ra=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _h(){return ia||(ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Il=new WeakMap,Qr=new WeakMap,Al=new WeakMap,Or=new WeakMap,Ei=new WeakMap;function Eh(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(lt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Il.set(t,n)}).catch(()=>{}),Ei.set(e,n),e}function wh(n){if(Qr.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Qr.set(n,e)}let Yr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Al.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return lt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function bh(n){Yr=n(Yr)}function Th(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(qr(this),e,...t);return Al.set(s,e.sort?e.sort():[e]),lt(s)}:_h().includes(n)?function(...e){return n.apply(qr(this),e),lt(Il.get(this))}:function(...e){return lt(n.apply(qr(this),e))}}function Ih(n){return typeof n=="function"?Th(n):(n instanceof IDBTransaction&&wh(n),yh(n,vh())?new Proxy(n,Yr):n)}function lt(n){if(n instanceof IDBRequest)return Eh(n);if(Or.has(n))return Or.get(n);const e=Ih(n);return e!==n&&(Or.set(n,e),Ei.set(e,n)),e}const qr=n=>Ei.get(n);function Ah(n,e,{blocked:t,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(n,e),c=lt(a);return s&&a.addEventListener("upgradeneeded",h=>{s(lt(a.result),h.oldVersion,h.newVersion,lt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),r&&h.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Sh=["get","getKey","getAll","getAllKeys","count"],Rh=["put","add","delete","clear"],Fr=new Map;function oa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fr.get(e))return Fr.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Rh.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Sh.includes(t)))return;const o=async function(a,...c){const h=this.transaction(a,r?"readwrite":"readonly");let d=h.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),r&&h.done]))[0]};return Fr.set(e,o),o}bh(n=>({...n,get:(e,t,s)=>oa(e,t)||n.get(e,t,s),has:(e,t)=>!!oa(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ph(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ph(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jr="@firebase/app",aa="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new Tl("@firebase/app"),Vh="@firebase/app-compat",xh="@firebase/analytics-compat",Dh="@firebase/analytics",kh="@firebase/app-check-compat",Nh="@firebase/app-check",Lh="@firebase/auth",Mh="@firebase/auth-compat",Oh="@firebase/database",qh="@firebase/data-connect",Fh="@firebase/database-compat",$h="@firebase/functions",Bh="@firebase/functions-compat",Uh="@firebase/installations",zh="@firebase/installations-compat",jh="@firebase/messaging",Gh="@firebase/messaging-compat",Hh="@firebase/performance",Wh="@firebase/performance-compat",Kh="@firebase/remote-config",Qh="@firebase/remote-config-compat",Yh="@firebase/storage",Jh="@firebase/storage-compat",Xh="@firebase/firestore",Zh="@firebase/ai",ed="@firebase/firestore-compat",td="firebase",nd="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="[DEFAULT]",sd={[Jr]:"fire-core",[Vh]:"fire-core-compat",[Dh]:"fire-analytics",[xh]:"fire-analytics-compat",[Nh]:"fire-app-check",[kh]:"fire-app-check-compat",[Lh]:"fire-auth",[Mh]:"fire-auth-compat",[Oh]:"fire-rtdb",[qh]:"fire-data-connect",[Fh]:"fire-rtdb-compat",[$h]:"fire-fn",[Bh]:"fire-fn-compat",[Uh]:"fire-iid",[zh]:"fire-iid-compat",[jh]:"fire-fcm",[Gh]:"fire-fcm-compat",[Hh]:"fire-perf",[Wh]:"fire-perf-compat",[Kh]:"fire-rc",[Qh]:"fire-rc-compat",[Yh]:"fire-gcs",[Jh]:"fire-gcs-compat",[Xh]:"fire-fst",[ed]:"fire-fst-compat",[Zh]:"fire-vertex","fire-js":"fire-js",[td]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new Map,rd=new Map,Zr=new Map;function la(n,e){try{n.container.addComponent(e)}catch(t){Ze.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Bs(n){const e=n.name;if(Zr.has(e))return Ze.debug(`There were multiple attempts to register component ${e}.`),!1;Zr.set(e,n);for(const t of $s.values())la(t,n);for(const t of rd.values())la(t,n);return!0}function id(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function od(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ct=new wl("app","Firebase",ad);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=nd;function Sl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Xr,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw ct.create("bad-app-name",{appName:String(r)});if(t||(t=El()),!t)throw ct.create("no-options");const o=$s.get(r);if(o){if(Fs(t,o.options)&&Fs(s,o.config))return o;throw ct.create("duplicate-app",{appName:r})}const a=new dh(r);for(const h of Zr.values())a.addComponent(h);const c=new ld(t,s,a);return $s.set(r,c),c}function ud(n=Xr){const e=$s.get(n);if(!e&&n===Xr&&El())return Sl();if(!e)throw ct.create("no-app",{appName:n});return e}function Jt(n,e,t){let s=sd[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ze.warn(a.join(" "));return}Bs(new Bn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="firebase-heartbeat-database",dd=1,Un="firebase-heartbeat-store";let $r=null;function Rl(){return $r||($r=Ah(hd,dd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Un)}catch(t){console.warn(t)}}}}).catch(n=>{throw ct.create("idb-open",{originalErrorMessage:n.message})})),$r}async function fd(n){try{const t=(await Rl()).transaction(Un),s=await t.objectStore(Un).get(Cl(n));return await t.done,s}catch(e){if(e instanceof cn)Ze.warn(e.message);else{const t=ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ze.warn(t.message)}}}async function ca(n,e){try{const s=(await Rl()).transaction(Un,"readwrite");await s.objectStore(Un).put(e,Cl(n)),await s.done}catch(t){if(t instanceof cn)Ze.warn(t.message);else{const s=ct.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ze.warn(s.message)}}}function Cl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=1024,pd=30;class gd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vd(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ua();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>pd){const a=_d(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ze.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ua(),{heartbeatsToSend:s,unsentEntries:r}=yd(this._heartbeatsCache.heartbeats),o=qs(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Ze.warn(t),""}}}function ua(){return new Date().toISOString().substring(0,10)}function yd(n,e=md){const t=[];let s=n.slice();for(const r of n){const o=t.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),ha(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),ha(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class vd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sh()?rh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ca(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ca(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ha(n){return qs(JSON.stringify({version:2,heartbeats:n})).length}function _d(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n){Bs(new Bn("platform-logger",e=>new Ch(e),"PRIVATE")),Bs(new Bn("heartbeat",e=>new gd(e),"PRIVATE")),Jt(Jr,aa,n),Jt(Jr,aa,"esm2020"),Jt("fire-js","")}Ed("");var wd="firebase",bd="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(wd,bd,"app");var da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ut,Pl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function v(){}v.prototype=g.prototype,E.F=g.prototype,E.prototype=new v,E.prototype.constructor=E,E.D=function(w,_,b){for(var y=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)y[ae-2]=arguments[ae];return g.prototype[_].apply(w,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,g,v){v||(v=0);const w=Array(16);if(typeof g=="string")for(var _=0;_<16;++_)w[_]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(_=0;_<16;++_)w[_]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=E.g[0],v=E.g[1],_=E.g[2];let b=E.g[3],y;y=g+(b^v&(_^b))+w[0]+3614090360&4294967295,g=v+(y<<7&4294967295|y>>>25),y=b+(_^g&(v^_))+w[1]+3905402710&4294967295,b=g+(y<<12&4294967295|y>>>20),y=_+(v^b&(g^v))+w[2]+606105819&4294967295,_=b+(y<<17&4294967295|y>>>15),y=v+(g^_&(b^g))+w[3]+3250441966&4294967295,v=_+(y<<22&4294967295|y>>>10),y=g+(b^v&(_^b))+w[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=b+(_^g&(v^_))+w[5]+1200080426&4294967295,b=g+(y<<12&4294967295|y>>>20),y=_+(v^b&(g^v))+w[6]+2821735955&4294967295,_=b+(y<<17&4294967295|y>>>15),y=v+(g^_&(b^g))+w[7]+4249261313&4294967295,v=_+(y<<22&4294967295|y>>>10),y=g+(b^v&(_^b))+w[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=b+(_^g&(v^_))+w[9]+2336552879&4294967295,b=g+(y<<12&4294967295|y>>>20),y=_+(v^b&(g^v))+w[10]+4294925233&4294967295,_=b+(y<<17&4294967295|y>>>15),y=v+(g^_&(b^g))+w[11]+2304563134&4294967295,v=_+(y<<22&4294967295|y>>>10),y=g+(b^v&(_^b))+w[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=b+(_^g&(v^_))+w[13]+4254626195&4294967295,b=g+(y<<12&4294967295|y>>>20),y=_+(v^b&(g^v))+w[14]+2792965006&4294967295,_=b+(y<<17&4294967295|y>>>15),y=v+(g^_&(b^g))+w[15]+1236535329&4294967295,v=_+(y<<22&4294967295|y>>>10),y=g+(_^b&(v^_))+w[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=b+(v^_&(g^v))+w[6]+3225465664&4294967295,b=g+(y<<9&4294967295|y>>>23),y=_+(g^v&(b^g))+w[11]+643717713&4294967295,_=b+(y<<14&4294967295|y>>>18),y=v+(b^g&(_^b))+w[0]+3921069994&4294967295,v=_+(y<<20&4294967295|y>>>12),y=g+(_^b&(v^_))+w[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=b+(v^_&(g^v))+w[10]+38016083&4294967295,b=g+(y<<9&4294967295|y>>>23),y=_+(g^v&(b^g))+w[15]+3634488961&4294967295,_=b+(y<<14&4294967295|y>>>18),y=v+(b^g&(_^b))+w[4]+3889429448&4294967295,v=_+(y<<20&4294967295|y>>>12),y=g+(_^b&(v^_))+w[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=b+(v^_&(g^v))+w[14]+3275163606&4294967295,b=g+(y<<9&4294967295|y>>>23),y=_+(g^v&(b^g))+w[3]+4107603335&4294967295,_=b+(y<<14&4294967295|y>>>18),y=v+(b^g&(_^b))+w[8]+1163531501&4294967295,v=_+(y<<20&4294967295|y>>>12),y=g+(_^b&(v^_))+w[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=b+(v^_&(g^v))+w[2]+4243563512&4294967295,b=g+(y<<9&4294967295|y>>>23),y=_+(g^v&(b^g))+w[7]+1735328473&4294967295,_=b+(y<<14&4294967295|y>>>18),y=v+(b^g&(_^b))+w[12]+2368359562&4294967295,v=_+(y<<20&4294967295|y>>>12),y=g+(v^_^b)+w[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=b+(g^v^_)+w[8]+2272392833&4294967295,b=g+(y<<11&4294967295|y>>>21),y=_+(b^g^v)+w[11]+1839030562&4294967295,_=b+(y<<16&4294967295|y>>>16),y=v+(_^b^g)+w[14]+4259657740&4294967295,v=_+(y<<23&4294967295|y>>>9),y=g+(v^_^b)+w[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=b+(g^v^_)+w[4]+1272893353&4294967295,b=g+(y<<11&4294967295|y>>>21),y=_+(b^g^v)+w[7]+4139469664&4294967295,_=b+(y<<16&4294967295|y>>>16),y=v+(_^b^g)+w[10]+3200236656&4294967295,v=_+(y<<23&4294967295|y>>>9),y=g+(v^_^b)+w[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=b+(g^v^_)+w[0]+3936430074&4294967295,b=g+(y<<11&4294967295|y>>>21),y=_+(b^g^v)+w[3]+3572445317&4294967295,_=b+(y<<16&4294967295|y>>>16),y=v+(_^b^g)+w[6]+76029189&4294967295,v=_+(y<<23&4294967295|y>>>9),y=g+(v^_^b)+w[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=b+(g^v^_)+w[12]+3873151461&4294967295,b=g+(y<<11&4294967295|y>>>21),y=_+(b^g^v)+w[15]+530742520&4294967295,_=b+(y<<16&4294967295|y>>>16),y=v+(_^b^g)+w[2]+3299628645&4294967295,v=_+(y<<23&4294967295|y>>>9),y=g+(_^(v|~b))+w[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=b+(v^(g|~_))+w[7]+1126891415&4294967295,b=g+(y<<10&4294967295|y>>>22),y=_+(g^(b|~v))+w[14]+2878612391&4294967295,_=b+(y<<15&4294967295|y>>>17),y=v+(b^(_|~g))+w[5]+4237533241&4294967295,v=_+(y<<21&4294967295|y>>>11),y=g+(_^(v|~b))+w[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=b+(v^(g|~_))+w[3]+2399980690&4294967295,b=g+(y<<10&4294967295|y>>>22),y=_+(g^(b|~v))+w[10]+4293915773&4294967295,_=b+(y<<15&4294967295|y>>>17),y=v+(b^(_|~g))+w[1]+2240044497&4294967295,v=_+(y<<21&4294967295|y>>>11),y=g+(_^(v|~b))+w[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=b+(v^(g|~_))+w[15]+4264355552&4294967295,b=g+(y<<10&4294967295|y>>>22),y=_+(g^(b|~v))+w[6]+2734768916&4294967295,_=b+(y<<15&4294967295|y>>>17),y=v+(b^(_|~g))+w[13]+1309151649&4294967295,v=_+(y<<21&4294967295|y>>>11),y=g+(_^(v|~b))+w[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=b+(v^(g|~_))+w[11]+3174756917&4294967295,b=g+(y<<10&4294967295|y>>>22),y=_+(g^(b|~v))+w[2]+718787259&4294967295,_=b+(y<<15&4294967295|y>>>17),y=v+(b^(_|~g))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(_+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+_&4294967295,E.g[3]=E.g[3]+b&4294967295}s.prototype.v=function(E,g){g===void 0&&(g=E.length);const v=g-this.blockSize,w=this.C;let _=this.h,b=0;for(;b<g;){if(_==0)for(;b<=v;)r(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<g;)if(w[_++]=E.charCodeAt(b++),_==this.blockSize){r(this,w),_=0;break}}else for(;b<g;)if(w[_++]=E[b++],_==this.blockSize){r(this,w),_=0;break}}this.h=_,this.o+=g},s.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;g=this.o*8;for(var v=E.length-8;v<E.length;++v)E[v]=g&255,g/=256;for(this.v(E),E=Array(16),g=0,v=0;v<4;++v)for(let w=0;w<32;w+=8)E[g++]=this.g[v]>>>w&255;return E};function o(E,g){var v=c;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=g(E)}function a(E,g){this.h=g;const v=[];let w=!0;for(let _=E.length-1;_>=0;_--){const b=E[_]|0;w&&b==g||(v[_]=b,w=!1)}this.g=v}var c={};function h(E){return-128<=E&&E<128?o(E,function(g){return new a([g|0],g<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return C(d(-E));const g=[];let v=1;for(let w=0;E>=v;w++)g[w]=E/v|0,v*=4294967296;return new a(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return C(f(E.substring(1),g));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=d(Math.pow(g,8));let w=p;for(let b=0;b<E.length;b+=8){var _=Math.min(8,E.length-b);const y=parseInt(E.substring(b,b+_),g);_<8?(_=d(Math.pow(g,_)),w=w.j(_).add(d(y))):(w=w.j(v),w=w.add(d(y)))}return w}var p=h(0),I=h(1),A=h(16777216);n=a.prototype,n.m=function(){if(x(this))return-C(this).m();let E=0,g=1;for(let v=0;v<this.g.length;v++){const w=this.i(v);E+=(w>=0?w:4294967296+w)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(x(this))return"-"+C(this).toString(E);const g=d(Math.pow(E,6));var v=this;let w="";for(;;){const _=me(v,g).g;v=L(v,_.j(g));let b=((v.g.length>0?v.g[0]:v.h)>>>0).toString(E);if(v=_,R(v))return b+w;for(;b.length<6;)b="0"+b;w=b+w}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(let g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function x(E){return E.h==-1}n.l=function(E){return E=L(this,E),x(E)?-1:R(E)?0:1};function C(E){const g=E.g.length,v=[];for(let w=0;w<g;w++)v[w]=~E.g[w];return new a(v,~E.h).add(I)}n.abs=function(){return x(this)?C(this):this},n.add=function(E){const g=Math.max(this.g.length,E.g.length),v=[];let w=0;for(let _=0;_<=g;_++){let b=w+(this.i(_)&65535)+(E.i(_)&65535),y=(b>>>16)+(this.i(_)>>>16)+(E.i(_)>>>16);w=y>>>16,b&=65535,y&=65535,v[_]=y<<16|b}return new a(v,v[v.length-1]&-2147483648?-1:0)};function L(E,g){return E.add(C(g))}n.j=function(E){if(R(this)||R(E))return p;if(x(this))return x(E)?C(this).j(C(E)):C(C(this).j(E));if(x(E))return C(this.j(C(E)));if(this.l(A)<0&&E.l(A)<0)return d(this.m()*E.m());const g=this.g.length+E.g.length,v=[];for(var w=0;w<2*g;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(let _=0;_<E.g.length;_++){const b=this.i(w)>>>16,y=this.i(w)&65535,ae=E.i(_)>>>16,Pe=E.i(_)&65535;v[2*w+2*_]+=y*Pe,$(v,2*w+2*_),v[2*w+2*_+1]+=b*Pe,$(v,2*w+2*_+1),v[2*w+2*_+1]+=y*ae,$(v,2*w+2*_+1),v[2*w+2*_+2]+=b*ae,$(v,2*w+2*_+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new a(v,0)};function $(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function H(E,g){this.g=E,this.h=g}function me(E,g){if(R(g))throw Error("division by zero");if(R(E))return new H(p,p);if(x(E))return g=me(C(E),g),new H(C(g.g),C(g.h));if(x(g))return g=me(E,C(g)),new H(C(g.g),g.h);if(E.g.length>30){if(x(E)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var v=I,w=g;w.l(E)<=0;)v=se(v),w=se(w);var _=te(v,1),b=te(w,1);for(w=te(w,2),v=te(v,2);!R(w);){var y=b.add(w);y.l(E)<=0&&(_=_.add(v),b=y),w=te(w,1),v=te(v,1)}return g=L(E,_.j(g)),new H(_,g)}for(_=p;E.l(g)>=0;){for(v=Math.max(1,Math.floor(E.m()/g.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),b=d(v),y=b.j(g);x(y)||y.l(E)>0;)v-=w,b=d(v),y=b.j(g);R(b)&&(b=I),_=_.add(b),E=L(E,y)}return new H(_,E)}n.B=function(E){return me(this,E).h},n.and=function(E){const g=Math.max(this.g.length,E.g.length),v=[];for(let w=0;w<g;w++)v[w]=this.i(w)&E.i(w);return new a(v,this.h&E.h)},n.or=function(E){const g=Math.max(this.g.length,E.g.length),v=[];for(let w=0;w<g;w++)v[w]=this.i(w)|E.i(w);return new a(v,this.h|E.h)},n.xor=function(E){const g=Math.max(this.g.length,E.g.length),v=[];for(let w=0;w<g;w++)v[w]=this.i(w)^E.i(w);return new a(v,this.h^E.h)};function se(E){const g=E.g.length+1,v=[];for(let w=0;w<g;w++)v[w]=E.i(w)<<1|E.i(w-1)>>>31;return new a(v,E.h)}function te(E,g){const v=g>>5;g%=32;const w=E.g.length-v,_=[];for(let b=0;b<w;b++)_[b]=g>0?E.i(b+v)>>>g|E.i(b+v+1)<<32-g:E.i(b+v);return new a(_,E.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Pl=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,ut=a}).apply(typeof da<"u"?da:typeof self<"u"?self:typeof window<"u"?window:{});var Es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vl,Nn,xl,Ps,ei,Dl,kl,Nl;(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Es=="object"&&Es];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var s=t(this);function r(i,l){if(l)e:{var u=s;i=i.split(".");for(var m=0;m<i.length-1;m++){var T=i[m];if(!(T in u))break e;u=u[T]}i=i[i.length-1],m=u[i],l=l(m),l!=m&&l!=null&&e(u,i,{configurable:!0,writable:!0,value:l})}}r("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(i){return i||function(l){var u=[],m;for(m in l)Object.prototype.hasOwnProperty.call(l,m)&&u.push([m,l[m]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function h(i,l,u){return i.call.apply(i.bind,arguments)}function d(i,l,u){return d=h,d.apply(null,arguments)}function f(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var m=u.slice();return m.push.apply(m,arguments),i.apply(this,m)}}function p(i,l){function u(){}u.prototype=l.prototype,i.Z=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(m,T,S){for(var D=Array(arguments.length-2),B=2;B<arguments.length;B++)D[B-2]=arguments[B];return l.prototype[T].apply(m,D)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function A(i){const l=i.length;if(l>0){const u=Array(l);for(let m=0;m<l;m++)u[m]=i[m];return u}return[]}function R(i,l){for(let m=1;m<arguments.length;m++){const T=arguments[m];var u=typeof T;if(u=u!="object"?u:T?Array.isArray(T)?"array":u:"null",u=="array"||u=="object"&&typeof T.length=="number"){u=i.length||0;const S=T.length||0;i.length=u+S;for(let D=0;D<S;D++)i[u+D]=T[D]}else i.push(T)}}class x{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function C(i){a.setTimeout(()=>{throw i},0)}function L(){var i=E;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class ${constructor(){this.h=this.g=null}add(l,u){const m=H.get();m.set(l,u),this.h?this.h.next=m:this.g=m,this.h=m}}var H=new x(()=>new me,i=>i.reset());class me{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let se,te=!1,E=new $,g=()=>{const i=Promise.resolve(void 0);se=()=>{i.then(v)}};function v(){for(var i;i=L();){try{i.h.call(i.g)}catch(u){C(u)}var l=H;l.j(i),l.h<100&&(l.h++,i.next=l.g,l.g=i)}te=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};a.addEventListener("test",u,l),a.removeEventListener("test",u,l)}catch{}return i}();function y(i){return/^[\s\xa0]*$/.test(i)}function ae(i,l){_.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,l)}p(ae,_),ae.prototype.init=function(i,l){const u=this.type=i.type,m=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget,l||(u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement)),this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&ae.Z.h.call(this)},ae.prototype.h=function(){ae.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Pe="closure_listenable_"+(Math.random()*1e6|0),is=0;function no(i,l,u,m,T){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!m,this.ha=T,this.key=++is,this.da=this.fa=!1}function Le(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Et(i,l,u){for(const m in i)l.call(u,i[m],m,i)}function os(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function pn(i){const l={};for(const u in i)l[u]=i[u];return l}const Y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $t(i,l){let u,m;for(let T=1;T<arguments.length;T++){m=arguments[T];for(u in m)i[u]=m[u];for(let S=0;S<Y.length;S++)u=Y[S],Object.prototype.hasOwnProperty.call(m,u)&&(i[u]=m[u])}}function as(i){this.src=i,this.g={},this.h=0}as.prototype.add=function(i,l,u,m,T){const S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);const D=mr(i,l,m,T);return D>-1?(l=i[D],u||(l.fa=!1)):(l=new no(l,this.src,S,!!m,T),l.fa=u,i.push(l)),l};function fr(i,l){const u=l.type;if(u in i.g){var m=i.g[u],T=Array.prototype.indexOf.call(m,l,void 0),S;(S=T>=0)&&Array.prototype.splice.call(m,T,1),S&&(Le(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function mr(i,l,u,m){for(let T=0;T<i.length;++T){const S=i[T];if(!S.da&&S.listener==l&&S.capture==!!u&&S.ha==m)return T}return-1}var pr="closure_lm_"+(Math.random()*1e6|0),gr={};function so(i,l,u,m,T){if(Array.isArray(l)){for(let S=0;S<l.length;S++)so(i,l[S],u,m,T);return null}return u=oo(u),i&&i[Pe]?i.J(l,u,c(m)?!!m.capture:!1,T):du(i,l,u,!1,m,T)}function du(i,l,u,m,T,S){if(!l)throw Error("Invalid event type");const D=c(T)?!!T.capture:!!T;let B=vr(i);if(B||(i[pr]=B=new as(i)),u=B.add(l,u,m,D,S),u.proxy)return u;if(m=fu(),u.proxy=m,m.src=i,m.listener=u,i.addEventListener)b||(T=D),T===void 0&&(T=!1),i.addEventListener(l.toString(),m,T);else if(i.attachEvent)i.attachEvent(io(l.toString()),m);else if(i.addListener&&i.removeListener)i.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return u}function fu(){function i(u){return l.call(i.src,i.listener,u)}const l=mu;return i}function ro(i,l,u,m,T){if(Array.isArray(l))for(var S=0;S<l.length;S++)ro(i,l[S],u,m,T);else m=c(m)?!!m.capture:!!m,u=oo(u),i&&i[Pe]?(i=i.i,S=String(l).toString(),S in i.g&&(l=i.g[S],u=mr(l,u,m,T),u>-1&&(Le(l[u]),Array.prototype.splice.call(l,u,1),l.length==0&&(delete i.g[S],i.h--)))):i&&(i=vr(i))&&(l=i.g[l.toString()],i=-1,l&&(i=mr(l,u,m,T)),(u=i>-1?l[i]:null)&&yr(u))}function yr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Pe])fr(l.i,i);else{var u=i.type,m=i.proxy;l.removeEventListener?l.removeEventListener(u,m,i.capture):l.detachEvent?l.detachEvent(io(u),m):l.addListener&&l.removeListener&&l.removeListener(m),(u=vr(l))?(fr(u,i),u.h==0&&(u.src=null,l[pr]=null)):Le(i)}}}function io(i){return i in gr?gr[i]:gr[i]="on"+i}function mu(i,l){if(i.da)i=!0;else{l=new ae(l,this);const u=i.listener,m=i.ha||i.src;i.fa&&yr(i),i=u.call(m,l)}return i}function vr(i){return i=i[pr],i instanceof as?i:null}var _r="__closure_events_fn_"+(Math.random()*1e9>>>0);function oo(i){return typeof i=="function"?i:(i[_r]||(i[_r]=function(l){return i.handleEvent(l)}),i[_r])}function we(){w.call(this),this.i=new as(this),this.M=this,this.G=null}p(we,w),we.prototype[Pe]=!0,we.prototype.removeEventListener=function(i,l,u,m){ro(this,i,l,u,m)};function Ae(i,l){var u,m=i.G;if(m)for(u=[];m;m=m.G)u.push(m);if(i=i.M,m=l.type||l,typeof l=="string")l=new _(l,i);else if(l instanceof _)l.target=l.target||i;else{var T=l;l=new _(m,i),$t(l,T)}T=!0;let S,D;if(u)for(D=u.length-1;D>=0;D--)S=l.g=u[D],T=ls(S,m,!0,l)&&T;if(S=l.g=i,T=ls(S,m,!0,l)&&T,T=ls(S,m,!1,l)&&T,u)for(D=0;D<u.length;D++)S=l.g=u[D],T=ls(S,m,!1,l)&&T}we.prototype.N=function(){if(we.Z.N.call(this),this.i){var i=this.i;for(const l in i.g){const u=i.g[l];for(let m=0;m<u.length;m++)Le(u[m]);delete i.g[l],i.h--}}this.G=null},we.prototype.J=function(i,l,u,m){return this.i.add(String(i),l,!1,u,m)},we.prototype.K=function(i,l,u,m){return this.i.add(String(i),l,!0,u,m)};function ls(i,l,u,m){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();let T=!0;for(let S=0;S<l.length;++S){const D=l[S];if(D&&!D.da&&D.capture==u){const B=D.listener,he=D.ha||D.src;D.fa&&fr(i.i,D),T=B.call(he,m)!==!1&&T}}return T&&!m.defaultPrevented}function pu(i,l){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(i,l||0)}function ao(i){i.g=pu(()=>{i.g=null,i.i&&(i.i=!1,ao(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class gu extends w{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ao(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(i){w.call(this),this.h=i,this.g={}}p(gn,w);var lo=[];function co(i){Et(i.g,function(l,u){this.g.hasOwnProperty(u)&&yr(l)},i),i.g={}}gn.prototype.N=function(){gn.Z.N.call(this),co(this)},gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Er=a.JSON.stringify,yu=a.JSON.parse,vu=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function uo(){}function ho(){}var yn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function wr(){_.call(this,"d")}p(wr,_);function br(){_.call(this,"c")}p(br,_);var wt={},fo=null;function cs(){return fo=fo||new we}wt.Ia="serverreachability";function mo(i){_.call(this,wt.Ia,i)}p(mo,_);function vn(i){const l=cs();Ae(l,new mo(l))}wt.STAT_EVENT="statevent";function po(i,l){_.call(this,wt.STAT_EVENT,i),this.stat=l}p(po,_);function Se(i){const l=cs();Ae(l,new po(l,i))}wt.Ja="timingevent";function go(i,l){_.call(this,wt.Ja,i),this.size=l}p(go,_);function _n(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},l)}function En(){this.g=!0}En.prototype.ua=function(){this.g=!1};function _u(i,l,u,m,T,S){i.info(function(){if(i.g)if(S){var D="",B=S.split("&");for(let J=0;J<B.length;J++){var he=B[J].split("=");if(he.length>1){const pe=he[0];he=he[1];const ze=pe.split("_");D=ze.length>=2&&ze[1]=="type"?D+(pe+"="+he+"&"):D+(pe+"=redacted&")}}}else D=null;else D=S;return"XMLHTTP REQ ("+m+") [attempt "+T+"]: "+l+`
`+u+`
`+D})}function Eu(i,l,u,m,T,S,D){i.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+T+"]: "+l+`
`+u+`
`+S+" "+D})}function Bt(i,l,u,m){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+bu(i,u)+(m?" "+m:"")})}function wu(i,l){i.info(function(){return"TIMEOUT: "+l})}En.prototype.info=function(){};function bu(i,l){if(!i.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(i=0;i<S.length;i++)if(Array.isArray(S[i])){var u=S[i];if(!(u.length<2)){var m=u[1];if(Array.isArray(m)&&!(m.length<1)){var T=m[0];if(T!="noop"&&T!="stop"&&T!="close")for(let D=1;D<m.length;D++)m[D]=""}}}}return Er(S)}catch{return l}}var us={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},yo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},vo;function Tr(){}p(Tr,uo),Tr.prototype.g=function(){return new XMLHttpRequest},vo=new Tr;function wn(i){return encodeURIComponent(String(i))}function Tu(i){var l=1;i=i.split(":");const u=[];for(;l>0&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function nt(i,l,u,m){this.j=i,this.i=l,this.l=u,this.S=m||1,this.V=new gn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _o}function _o(){this.i=null,this.g="",this.h=!1}var Eo={},Ir={};function Ar(i,l,u){i.M=1,i.A=ds(Ue(l)),i.u=u,i.R=!0,wo(i,null)}function wo(i,l){i.F=Date.now(),hs(i),i.B=Ue(i.A);var u=i.B,m=i.S;Array.isArray(m)||(m=[String(m)]),No(u.i,"t",m),i.C=0,u=i.j.L,i.h=new _o,i.g=Xo(i.j,u?l:null,!i.u),i.P>0&&(i.O=new gu(d(i.Y,i,i.g),i.P)),l=i.V,u=i.g,m=i.ba;var T="readystatechange";Array.isArray(T)||(T&&(lo[0]=T.toString()),T=lo);for(let S=0;S<T.length;S++){const D=so(u,T[S],m||l.handleEvent,!1,l.h||l);if(!D)break;l.g[D.key]=D}l=i.J?pn(i.J):{},i.u?(i.v||(i.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,l)):(i.v="GET",i.g.ea(i.B,i.v,null,l)),vn(),_u(i.i,i.v,i.B,i.l,i.S,i.u)}nt.prototype.ba=function(i){i=i.target;const l=this.O;l&&it(i)==3?l.j():this.Y(i)},nt.prototype.Y=function(i){try{if(i==this.g)e:{const B=it(this.g),he=this.g.ya(),J=this.g.ca();if(!(B<3)&&(B!=3||this.g&&(this.h.h||this.g.la()||Bo(this.g)))){this.K||B!=4||he==7||(he==8||J<=0?vn(3):vn(2)),Sr(this);var l=this.g.ca();this.X=l;var u=Iu(this);if(this.o=l==200,Eu(this.i,this.v,this.B,this.l,this.S,B,l),this.o){if(this.U&&!this.L){t:{if(this.g){var m,T=this.g;if((m=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var S=m;break t}}S=null}if(i=S)Bt(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Rr(this,i);else{this.o=!1,this.m=3,Se(12),bt(this),bn(this);break e}}if(this.R){i=!0;let pe;for(;!this.K&&this.C<u.length;)if(pe=Au(this,u),pe==Ir){B==4&&(this.m=4,Se(14),i=!1),Bt(this.i,this.l,null,"[Incomplete Response]");break}else if(pe==Eo){this.m=4,Se(15),Bt(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else Bt(this.i,this.l,pe,null),Rr(this,pe);if(bo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),B!=4||u.length!=0||this.h.h||(this.m=1,Se(16),i=!1),this.o=this.o&&i,!i)Bt(this.i,this.l,u,"[Invalid Chunked Response]"),bt(this),bn(this);else if(u.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Lr(D),D.P=!0,Se(11))}}else Bt(this.i,this.l,u,null),Rr(this,u);B==4&&bt(this),this.o&&!this.K&&(B==4?Ko(this.j,this):(this.o=!1,hs(this)))}else Fu(this.g),l==400&&u.indexOf("Unknown SID")>0?(this.m=3,Se(12)):(this.m=0,Se(13)),bt(this),bn(this)}}}catch{}finally{}};function Iu(i){if(!bo(i))return i.g.la();const l=Bo(i.g);if(l==="")return"";let u="";const m=l.length,T=it(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return bt(i),bn(i),"";i.h.i=new a.TextDecoder}for(let S=0;S<m;S++)i.h.h=!0,u+=i.h.i.decode(l[S],{stream:!(T&&S==m-1)});return l.length=0,i.h.g+=u,i.C=0,i.h.g}function bo(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Au(i,l){var u=i.C,m=l.indexOf(`
`,u);return m==-1?Ir:(u=Number(l.substring(u,m)),isNaN(u)?Eo:(m+=1,m+u>l.length?Ir:(l=l.slice(m,m+u),i.C=m+u,l)))}nt.prototype.cancel=function(){this.K=!0,bt(this)};function hs(i){i.T=Date.now()+i.H,To(i,i.H)}function To(i,l){if(i.D!=null)throw Error("WatchDog timer not null");i.D=_n(d(i.aa,i),l)}function Sr(i){i.D&&(a.clearTimeout(i.D),i.D=null)}nt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(wu(this.i,this.B),this.M!=2&&(vn(),Se(17)),bt(this),this.m=2,bn(this)):To(this,this.T-i)};function bn(i){i.j.I==0||i.K||Ko(i.j,i)}function bt(i){Sr(i);var l=i.O;l&&typeof l.dispose=="function"&&l.dispose(),i.O=null,co(i.V),i.g&&(l=i.g,i.g=null,l.abort(),l.dispose())}function Rr(i,l){try{var u=i.j;if(u.I!=0&&(u.g==i||Cr(u.h,i))){if(!i.L&&Cr(u.h,i)&&u.I==3){try{var m=u.Ba.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var T=m;if(T[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)ys(u),ps(u);else break e;Nr(u),Se(18)}}else u.xa=T[1],0<u.xa-u.K&&T[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=_n(d(u.Va,u),6e3));So(u.h)<=1&&u.ta&&(u.ta=void 0)}else It(u,11)}else if((i.L||u.g==i)&&ys(u),!y(l))for(T=u.Ba.g.parse(l),l=0;l<T.length;l++){let J=T[l];const pe=J[0];if(!(pe<=u.K))if(u.K=pe,J=J[1],u.I==2)if(J[0]=="c"){u.M=J[1],u.ba=J[2];const ze=J[3];ze!=null&&(u.ka=ze,u.j.info("VER="+u.ka));const At=J[4];At!=null&&(u.za=At,u.j.info("SVER="+u.za));const ot=J[5];ot!=null&&typeof ot=="number"&&ot>0&&(m=1.5*ot,u.O=m,u.j.info("backChannelRequestTimeoutMs_="+m)),m=u;const at=i.g;if(at){const _s=at.g?at.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_s){var S=m.h;S.g||_s.indexOf("spdy")==-1&&_s.indexOf("quic")==-1&&_s.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Pr(S,S.h),S.h=null))}if(m.G){const Mr=at.g?at.g.getResponseHeader("X-HTTP-Session-Id"):null;Mr&&(m.wa=Mr,Z(m.J,m.G,Mr))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),m=u;var D=i;if(m.na=Jo(m,m.L?m.ba:null,m.W),D.L){Ro(m.h,D);var B=D,he=m.O;he&&(B.H=he),B.D&&(Sr(B),hs(B)),m.g=D}else Ho(m);u.i.length>0&&gs(u)}else J[0]!="stop"&&J[0]!="close"||It(u,7);else u.I==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?It(u,7):kr(u):J[0]!="noop"&&u.l&&u.l.qa(J),u.A=0)}}vn(4)}catch{}}var Su=class{constructor(i,l){this.g=i,this.map=l}};function Io(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ao(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function So(i){return i.h?1:i.g?i.g.size:0}function Cr(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Pr(i,l){i.g?i.g.add(l):i.h=l}function Ro(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Io.prototype.cancel=function(){if(this.i=Co(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Co(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.G);return l}return A(i.i)}var Po=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ru(i,l){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const m=i[u].indexOf("=");let T,S=null;m>=0?(T=i[u].substring(0,m),S=i[u].substring(m+1)):T=i[u],l(T,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function st(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;i instanceof st?(this.l=i.l,Tn(this,i.j),this.o=i.o,this.g=i.g,In(this,i.u),this.h=i.h,Vr(this,Lo(i.i)),this.m=i.m):i&&(l=String(i).match(Po))?(this.l=!1,Tn(this,l[1]||"",!0),this.o=An(l[2]||""),this.g=An(l[3]||"",!0),In(this,l[4]),this.h=An(l[5]||"",!0),Vr(this,l[6]||"",!0),this.m=An(l[7]||"")):(this.l=!1,this.i=new Rn(null,this.l))}st.prototype.toString=function(){const i=[];var l=this.j;l&&i.push(Sn(l,Vo,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Sn(l,Vo,!0),"@"),i.push(wn(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Sn(u,u.charAt(0)=="/"?Vu:Pu,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Sn(u,Du)),i.join("")},st.prototype.resolve=function(i){const l=Ue(this);let u=!!i.j;u?Tn(l,i.j):u=!!i.o,u?l.o=i.o:u=!!i.g,u?l.g=i.g:u=i.u!=null;var m=i.h;if(u)In(l,i.u);else if(u=!!i.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var T=l.h.lastIndexOf("/");T!=-1&&(m=l.h.slice(0,T+1)+m)}if(T=m,T==".."||T==".")m="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){m=T.lastIndexOf("/",0)==0,T=T.split("/");const S=[];for(let D=0;D<T.length;){const B=T[D++];B=="."?m&&D==T.length&&S.push(""):B==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),m&&D==T.length&&S.push("")):(S.push(B),m=!0)}m=S.join("/")}else m=T}return u?l.h=m:u=i.i.toString()!=="",u?Vr(l,Lo(i.i)):u=!!i.m,u&&(l.m=i.m),l};function Ue(i){return new st(i)}function Tn(i,l,u){i.j=u?An(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function In(i,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);i.u=l}else i.u=null}function Vr(i,l,u){l instanceof Rn?(i.i=l,ku(i.i,i.l)):(u||(l=Sn(l,xu)),i.i=new Rn(l,i.l))}function Z(i,l,u){i.i.set(l,u)}function ds(i){return Z(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function An(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Sn(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,Cu),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Cu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Vo=/[#\/\?@]/g,Pu=/[#\?:]/g,Vu=/[#\?]/g,xu=/[#\?@]/g,Du=/#/g;function Rn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function Tt(i){i.g||(i.g=new Map,i.h=0,i.i&&Ru(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=Rn.prototype,n.add=function(i,l){Tt(this),this.i=null,i=Ut(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function xo(i,l){Tt(i),l=Ut(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Do(i,l){return Tt(i),l=Ut(i,l),i.g.has(l)}n.forEach=function(i,l){Tt(this),this.g.forEach(function(u,m){u.forEach(function(T){i.call(l,T,m,this)},this)},this)};function ko(i,l){Tt(i);let u=[];if(typeof l=="string")Do(i,l)&&(u=u.concat(i.g.get(Ut(i,l))));else for(i=Array.from(i.g.values()),l=0;l<i.length;l++)u=u.concat(i[l]);return u}n.set=function(i,l){return Tt(this),this.i=null,i=Ut(this,i),Do(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=ko(this,i),i.length>0?String(i[0]):l):l};function No(i,l,u){xo(i,l),u.length>0&&(i.i=null,i.g.set(Ut(i,l),A(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(let m=0;m<l.length;m++){var u=l[m];const T=wn(u);u=ko(this,u);for(let S=0;S<u.length;S++){let D=T;u[S]!==""&&(D+="="+wn(u[S])),i.push(D)}}return this.i=i.join("&")};function Lo(i){const l=new Rn;return l.i=i.i,i.g&&(l.g=new Map(i.g),l.h=i.h),l}function Ut(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function ku(i,l){l&&!i.j&&(Tt(i),i.i=null,i.g.forEach(function(u,m){const T=m.toLowerCase();m!=T&&(xo(this,m),No(this,T,u))},i)),i.j=l}function Nu(i,l){const u=new En;if(a.Image){const m=new Image;m.onload=f(rt,u,"TestLoadImage: loaded",!0,l,m),m.onerror=f(rt,u,"TestLoadImage: error",!1,l,m),m.onabort=f(rt,u,"TestLoadImage: abort",!1,l,m),m.ontimeout=f(rt,u,"TestLoadImage: timeout",!1,l,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=i}else l(!1)}function Lu(i,l){const u=new En,m=new AbortController,T=setTimeout(()=>{m.abort(),rt(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:m.signal}).then(S=>{clearTimeout(T),S.ok?rt(u,"TestPingServer: ok",!0,l):rt(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),rt(u,"TestPingServer: error",!1,l)})}function rt(i,l,u,m,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),m(u)}catch{}}function Mu(){this.g=new vu}function xr(i){this.i=i.Sb||null,this.h=i.ab||!1}p(xr,uo),xr.prototype.g=function(){return new fs(this.i,this.h)};function fs(i,l){we.call(this),this.H=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(fs,we),n=fs.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=l,this.readyState=1,Pn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(l.body=i),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Mo(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Mo(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?Cn(this):Pn(this),this.readyState==3&&Mo(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Cn(this))},n.Na=function(i){this.g&&(this.response=i,Cn(this))},n.ga=function(){this.g&&Cn(this)};function Cn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Pn(i)}n.setRequestHeader=function(i,l){this.A.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function Pn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Oo(i){let l="";return Et(i,function(u,m){l+=m,l+=":",l+=u,l+=`\r
`}),l}function Dr(i,l,u){e:{for(m in u){var m=!1;break e}m=!0}m||(u=Oo(u),typeof i=="string"?u!=null&&wn(u):Z(i,l,u))}function re(i){we.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(re,we);var Ou=/^https?$/i,qu=["POST","PUT"];n=re.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,l,u,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():vo.g(),this.g.onreadystatechange=I(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){qo(this,S);return}if(i=u||"",u=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var T in m)u.set(T,m[T]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())u.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(u.keys()).find(S=>S.toLowerCase()=="content-type"),T=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(qu,l,void 0)>=0)||m||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,D]of u)this.g.setRequestHeader(S,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(S){qo(this,S)}};function qo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.o=5,Fo(i),ms(i)}function Fo(i){i.A||(i.A=!0,Ae(i,"complete"),Ae(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Ae(this,"complete"),Ae(this,"abort"),ms(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ms(this,!0)),re.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?$o(this):this.Xa())},n.Xa=function(){$o(this)};function $o(i){if(i.h&&typeof o<"u"){if(i.v&&it(i)==4)setTimeout(i.Ca.bind(i),0);else if(Ae(i,"readystatechange"),it(i)==4){i.h=!1;try{const S=i.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var m;if(m=S===0){let D=String(i.D).match(Po)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),m=!Ou.test(D?D.toLowerCase():"")}u=m}if(u)Ae(i,"complete"),Ae(i,"success");else{i.o=6;try{var T=it(i)>2?i.g.statusText:""}catch{T=""}i.l=T+" ["+i.ca()+"]",Fo(i)}}finally{ms(i)}}}}function ms(i,l){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,l||Ae(i,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function it(i){return i.g?i.g.readyState:0}n.ca=function(){try{return it(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),yu(l)}};function Bo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Fu(i){const l={};i=(i.g&&it(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<i.length;m++){if(y(i[m]))continue;var u=Tu(i[m]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const S=l[T]||[];l[T]=S,S.push(u)}os(l,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vn(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function Uo(i){this.za=0,this.i=[],this.j=new En,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Vn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Vn("baseRetryDelayMs",5e3,i),this.Za=Vn("retryDelaySeedMs",1e4,i),this.Ta=Vn("forwardChannelMaxRetries",2,i),this.va=Vn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Io(i&&i.concurrentRequestLimit),this.Ba=new Mu,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Uo.prototype,n.ka=8,n.I=1,n.connect=function(i,l,u,m){Se(0),this.W=i,this.H=l||{},u&&m!==void 0&&(this.H.OSID=u,this.H.OAID=m),this.F=this.X,this.J=Jo(this,null,this.W),gs(this)};function kr(i){if(zo(i),i.I==3){var l=i.V++,u=Ue(i.J);if(Z(u,"SID",i.M),Z(u,"RID",l),Z(u,"TYPE","terminate"),xn(i,u),l=new nt(i,i.j,l),l.M=2,l.A=ds(Ue(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=l.A,u=!0),u||(l.g=Xo(l.j,null),l.g.ea(l.A)),l.F=Date.now(),hs(l)}Yo(i)}function ps(i){i.g&&(Lr(i),i.g.cancel(),i.g=null)}function zo(i){ps(i),i.v&&(a.clearTimeout(i.v),i.v=null),ys(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function gs(i){if(!Ao(i.h)&&!i.m){i.m=!0;var l=i.Ea;se||g(),te||(se(),te=!0),E.add(l,i),i.D=0}}function $u(i,l){return So(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=l.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=_n(d(i.Ea,i,l),Qo(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const T=new nt(this,this.j,i);let S=this.o;if(this.U&&(S?(S=pn(S),$t(S,this.U)):S=this.U),this.u!==null||this.R||(T.J=S,S=null),this.S)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var m=this.i[u];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,l>4096){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=Go(this,T,l),u=Ue(this.J),Z(u,"RID",i),Z(u,"CVER",22),this.G&&Z(u,"X-HTTP-Session-Id",this.G),xn(this,u),S&&(this.R?l="headers="+wn(Oo(S))+"&"+l:this.u&&Dr(u,this.u,S)),Pr(this.h,T),this.Ra&&Z(u,"TYPE","init"),this.S?(Z(u,"$req",l),Z(u,"SID","null"),T.U=!0,Ar(T,u,null)):Ar(T,u,l),this.I=2}}else this.I==3&&(i?jo(this,i):this.i.length==0||Ao(this.h)||jo(this))};function jo(i,l){var u;l?u=l.l:u=i.V++;const m=Ue(i.J);Z(m,"SID",i.M),Z(m,"RID",u),Z(m,"AID",i.K),xn(i,m),i.u&&i.o&&Dr(m,i.u,i.o),u=new nt(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),l&&(i.i=l.G.concat(i.i)),l=Go(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Pr(i.h,u),Ar(u,m,l)}function xn(i,l){i.H&&Et(i.H,function(u,m){Z(l,m,u)}),i.l&&Et({},function(u,m){Z(l,m,u)})}function Go(i,l,u){u=Math.min(i.i.length,u);const m=i.l?d(i.l.Ka,i.l,i):null;e:{var T=i.i;let B=-1;for(;;){const he=["count="+u];B==-1?u>0?(B=T[0].g,he.push("ofs="+B)):B=0:he.push("ofs="+B);let J=!0;for(let pe=0;pe<u;pe++){var S=T[pe].g;const ze=T[pe].map;if(S-=B,S<0)B=Math.max(0,T[pe].g-100),J=!1;else try{S="req"+S+"_"||"";try{var D=ze instanceof Map?ze:Object.entries(ze);for(const[At,ot]of D){let at=ot;c(ot)&&(at=Er(ot)),he.push(S+At+"="+encodeURIComponent(at))}}catch(At){throw he.push(S+"type="+encodeURIComponent("_badmap")),At}}catch{m&&m(ze)}}if(J){D=he.join("&");break e}}D=void 0}return i=i.i.splice(0,u),l.G=i,D}function Ho(i){if(!i.g&&!i.v){i.Y=1;var l=i.Da;se||g(),te||(se(),te=!0),E.add(l,i),i.A=0}}function Nr(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=_n(d(i.Da,i),Qo(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Wo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=_n(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Se(10),ps(this),Wo(this))};function Lr(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Wo(i){i.g=new nt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var l=Ue(i.na);Z(l,"RID","rpc"),Z(l,"SID",i.M),Z(l,"AID",i.K),Z(l,"CI",i.F?"0":"1"),!i.F&&i.ia&&Z(l,"TO",i.ia),Z(l,"TYPE","xmlhttp"),xn(i,l),i.u&&i.o&&Dr(l,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=ds(Ue(l)),u.u=null,u.R=!0,wo(u,i)}n.Va=function(){this.C!=null&&(this.C=null,ps(this),Nr(this),Se(19))};function ys(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Ko(i,l){var u=null;if(i.g==l){ys(i),Lr(i),i.g=null;var m=2}else if(Cr(i.h,l))u=l.G,Ro(i.h,l),m=1;else return;if(i.I!=0){if(l.o)if(m==1){u=l.u?l.u.length:0,l=Date.now()-l.F;var T=i.D;m=cs(),Ae(m,new go(m,u)),gs(i)}else Ho(i);else if(T=l.m,T==3||T==0&&l.X>0||!(m==1&&$u(i,l)||m==2&&Nr(i)))switch(u&&u.length>0&&(l=i.h,l.i=l.i.concat(u)),T){case 1:It(i,5);break;case 4:It(i,10);break;case 3:It(i,6);break;default:It(i,2)}}}function Qo(i,l){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*l}function It(i,l){if(i.j.info("Error code "+l),l==2){var u=d(i.bb,i),m=i.Ua;const T=!m;m=new st(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Tn(m,"https"),ds(m),T?Nu(m.toString(),u):Lu(m.toString(),u)}else Se(2);i.I=0,i.l&&i.l.pa(l),Yo(i),zo(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function Yo(i){if(i.I=0,i.ja=[],i.l){const l=Co(i.h);(l.length!=0||i.i.length!=0)&&(R(i.ja,l),R(i.ja,i.i),i.h.i.length=0,A(i.i),i.i.length=0),i.l.oa()}}function Jo(i,l,u){var m=u instanceof st?Ue(u):new st(u);if(m.g!="")l&&(m.g=l+"."+m.g),In(m,m.u);else{var T=a.location;m=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;const S=new st(null);m&&Tn(S,m),l&&(S.g=l),T&&In(S,T),u&&(S.h=u),m=S}return u=i.G,l=i.wa,u&&l&&Z(m,u,l),Z(m,"VER",i.ka),xn(i,m),m}function Xo(i,l,u){if(l&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Aa&&!i.ma?new re(new xr({ab:u})):new re(i.ma),l.Fa(i.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zo(){}n=Zo.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function vs(){}vs.prototype.g=function(i,l){return new xe(i,l)};function xe(i,l){we.call(this),this.g=new Uo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(i?i["X-WebChannel-Client-Profile"]=l.sa:i={"X-WebChannel-Client-Profile":l.sa}),this.g.U=i,(i=l&&l.Qb)&&!y(i)&&(this.g.u=i),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new zt(this)}p(xe,we),xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xe.prototype.close=function(){kr(this.g)},xe.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=Er(i),i=u);l.i.push(new Su(l.Ya++,i)),l.I==3&&gs(l)},xe.prototype.N=function(){this.g.l=null,delete this.j,kr(this.g),delete this.g,xe.Z.N.call(this)};function ea(i){wr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const u in l){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}p(ea,wr);function ta(){br.call(this),this.status=1}p(ta,br);function zt(i){this.g=i}p(zt,Zo),zt.prototype.ra=function(){Ae(this.g,"a")},zt.prototype.qa=function(i){Ae(this.g,new ea(i))},zt.prototype.pa=function(i){Ae(this.g,new ta)},zt.prototype.oa=function(){Ae(this.g,"b")},vs.prototype.createWebChannel=vs.prototype.g,xe.prototype.send=xe.prototype.o,xe.prototype.open=xe.prototype.m,xe.prototype.close=xe.prototype.close,Nl=function(){return new vs},kl=function(){return cs()},Dl=wt,ei={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},us.NO_ERROR=0,us.TIMEOUT=8,us.HTTP_ERROR=6,Ps=us,yo.COMPLETE="complete",xl=yo,ho.EventType=yn,yn.OPEN="a",yn.CLOSE="b",yn.ERROR="c",yn.MESSAGE="d",we.prototype.listen=we.prototype.J,Nn=ho,re.prototype.listenOnce=re.prototype.K,re.prototype.getLastError=re.prototype.Ha,re.prototype.getLastErrorCode=re.prototype.ya,re.prototype.getStatus=re.prototype.ca,re.prototype.getResponseJson=re.prototype.La,re.prototype.getResponseText=re.prototype.la,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Fa,Vl=re}).apply(typeof Es<"u"?Es:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un="12.13.0";function Td(n){un=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Tl("@firebase/firestore");function jt(){return Dt.logLevel}function k(n,...e){if(Dt.logLevel<=G.DEBUG){const t=e.map(wi);Dt.debug(`Firestore (${un}): ${n}`,...t)}}function et(n,...e){if(Dt.logLevel<=G.ERROR){const t=e.map(wi);Dt.error(`Firestore (${un}): ${n}`,...t)}}function kt(n,...e){if(Dt.logLevel<=G.WARN){const t=e.map(wi);Dt.warn(`Firestore (${un}): ${n}`,...t)}}function wi(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Ll(n,s,t)}function Ll(n,e,t){let s=`FIRESTORE (${un}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw et(s),new Error(s)}function W(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Ll(e,r,s)}function F(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends cn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Id{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Te.UNAUTHENTICATED))}shutdown(){}}class Ad{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Sd{constructor(e){this.t=e,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0,42304);let s=this.i;const r=h=>this.i!==s?(s=this.i,t(h)):Promise.resolve();let o=new ht;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ht,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},c=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ht)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(W(typeof s.accessToken=="string",31837,{l:s}),new Ml(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string",2055,{h:e}),new Te(e)}}class Rd{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Cd{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Rd(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pd{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,od(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){W(this.o===void 0,3512);const s=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>s(o))};const r=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new fa(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new fa(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Vd(40);for(let o=0;o<r.length;++o)s.length<20&&r[o]<t&&(s+=e.charAt(r[o]%62))}return s}}function U(n,e){return n<e?-1:n>e?1:0}function ti(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),o=e.charAt(s);if(r!==o)return Br(r)===Br(o)?U(r,o):Br(r)?1:-1}return U(n.length,e.length)}const xd=55296,Dd=57343;function Br(n){const e=n.charCodeAt(0);return e>=xd&&e<=Dd}function rn(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="__name__";class je{constructor(e,t,s){t===void 0?t=0:t>e.length&&O(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&O(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return je.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof je?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const o=je.compareSegments(e.get(r),t.get(r));if(o!==0)return o}return U(e.length,t.length)}static compareSegments(e,t){const s=je.isNumericId(e),r=je.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?je.extractNumericId(e).compare(je.extractNumericId(t)):ti(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ut.fromString(e.substring(4,e.length-2))}}class X extends je{construct(e,t,s){return new X(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new X(t)}static emptyPath(){return new X([])}}const kd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends je{construct(e,t,s){return new _e(e,t,s)}static isValidIdentifier(e){return kd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ma}static keyField(){return new _e([ma])}static fromServerFormat(e){const t=[];let s="",r=0;const o=()=>{if(s.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=h,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(o(),r++)}if(o(),a)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(X.fromString(e))}static fromName(e){return new M(X.fromString(e).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new X(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n,e,t){if(!t)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Nd(n,e,t,s){if(e===!0&&s===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pa(n){if(!M.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ga(n){if(M.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ql(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function er(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":O(12329,{type:typeof n})}function Nt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=er(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(n,e){const t={typeString:n};return e&&(t.value=e),t}function Xn(n,e){if(!ql(n))throw new N(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${s}' field to equal '${o.value}'`;break}}if(t)throw new N(P.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=-62135596800,va=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*va);return new ee(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ya)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/va}_compareTo(e){return this.seconds===e.seconds?U(this.nanoseconds,e.nanoseconds):U(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xn(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ya;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:ue("string",ee._jsonSchemaVersion),seconds:ue("number"),nanoseconds:ue("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new ee(0,0))}static max(){return new q(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=-1;function Ld(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=q.fromTimestamp(s===1e9?new ee(t+1,0):new ee(t,s));return new ft(r,M.empty(),e)}function Md(n){return new ft(n.readTime,n.key,zn)}class ft{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ft(q.min(),M.empty(),zn)}static max(){return new ft(q.max(),M.empty(),zn)}}function Od(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:U(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==qd)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((s,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(s,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,s)=>{t(e)})}static reject(e){return new V((t,s)=>{s(e)})}static waitFor(e){return new V((t,s)=>{let r=0,o=0,a=!1;e.forEach(c=>{++r,c.next(()=>{++o,a&&o===r&&t()},h=>s(h))}),a=!0,o===r&&t()})}static or(e){let t=V.resolve(!1);for(const s of e)t=t.next(r=>r?V.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,o)=>{s.push(t.call(this,r,o))}),this.waitFor(s)}static mapArray(e,t){return new V((s,r)=>{const o=e.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(f=>{a[d]=f,++c,c===o&&s(a)},f=>r(f))}})}static doWhile(e,t){return new V((s,r)=>{const o=()=>{e()===!0?t().next(()=>{o()},r):s()};o()})}}function $d(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function dn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}tr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=-1;function nr(n){return n==null}function Us(n){return n===0&&1/n==-1/0}function Bd(n){return typeof n=="number"&&Number.isInteger(n)&&!Us(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="";function Ud(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=_a(e)),e=zd(n.get(t),e);return _a(e)}function zd(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const o=n.charAt(r);switch(o){case"\0":t+="";break;case Fl:t+="";break;default:t+=o}}return t}function _a(n){return n+Fl+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Lt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $l(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ws(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ws(this.root,e,this.comparator,!1)}getReverseIterator(){return new ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ws(this.root,e,this.comparator,!0)}}class ws{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?s(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,s,r,o){this.key=e,this.value=t,this.color=s??ve.RED,this.left=r??ve.EMPTY,this.right=o??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,o){return new ve(e??this.key,t??this.value,s??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const o=s(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,s),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ve.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw O(27949);return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(e,t,s,r,o){return this}insert(e,t,s){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wa(this.data.getIterator())}getIteratorFrom(e){return new wa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class wa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new Oe([])}unionWith(e){let t=new fe(_e.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Oe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rn(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Bl("Invalid base64 string: "+o):o}}(e);return new Ee(t)}static fromUint8Array(e){const t=function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o}(e);return new Ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return U(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const jd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mt(n){if(W(!!n,39018),typeof n=="string"){let e=0;const t=jd.exec(n);if(W(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function pt(n){return typeof n=="string"?Ee.fromBase64String(n):Ee.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="server_timestamp",zl="__type__",jl="__previous_value__",Gl="__local_write_time__";function Ii(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[zl])==null?void 0:s.stringValue)===Ul}function sr(n){const e=n.mapValue.fields[jl];return Ii(e)?sr(e):e}function jn(n){const e=mt(n.mapValue.fields[Gl].timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t,s,r,o,a,c,h,d,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=f,this.apiKey=p}}const zs="(default)";class Gn{constructor(e,t){this.projectId=e,this.database=t||zs}static empty(){return new Gn("","")}get isDefaultDatabase(){return this.database===zs}isEqual(e){return e instanceof Gn&&e.projectId===this.projectId&&e.database===this.database}}function Hd(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gn(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="__type__",Wd="__max__",bs={mapValue:{}},Wl="__vector__",js="value";function gt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ii(n)?4:Qd(n)?9007199254740991:Kd(n)?10:11:O(28295,{value:n})}function Ke(n,e){if(n===e)return!0;const t=gt(n);if(t!==gt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return jn(n).isEqual(jn(e));case 3:return function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const a=mt(r.timestampValue),c=mt(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,o){return pt(r.bytesValue).isEqual(pt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,o){return oe(r.geoPointValue.latitude)===oe(o.geoPointValue.latitude)&&oe(r.geoPointValue.longitude)===oe(o.geoPointValue.longitude)}(n,e);case 2:return function(r,o){if("integerValue"in r&&"integerValue"in o)return oe(r.integerValue)===oe(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const a=oe(r.doubleValue),c=oe(o.doubleValue);return a===c?Us(a)===Us(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return rn(n.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:case 11:return function(r,o){const a=r.mapValue.fields||{},c=o.mapValue.fields||{};if(Ea(a)!==Ea(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Ke(a[h],c[h])))return!1;return!0}(n,e);default:return O(52216,{left:n})}}function Hn(n,e){return(n.values||[]).find(t=>Ke(t,e))!==void 0}function on(n,e){if(n===e)return 0;const t=gt(n),s=gt(e);if(t!==s)return U(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,e.booleanValue);case 2:return function(o,a){const c=oe(o.integerValue||o.doubleValue),h=oe(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,e);case 3:return ba(n.timestampValue,e.timestampValue);case 4:return ba(jn(n),jn(e));case 5:return ti(n.stringValue,e.stringValue);case 6:return function(o,a){const c=pt(o),h=pt(a);return c.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const f=U(c[d],h[d]);if(f!==0)return f}return U(c.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const c=U(oe(o.latitude),oe(a.latitude));return c!==0?c:U(oe(o.longitude),oe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ta(n.arrayValue,e.arrayValue);case 10:return function(o,a){var I,A,R,x;const c=o.fields||{},h=a.fields||{},d=(I=c[js])==null?void 0:I.arrayValue,f=(A=h[js])==null?void 0:A.arrayValue,p=U(((R=d==null?void 0:d.values)==null?void 0:R.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return p!==0?p:Ta(d,f)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===bs.mapValue&&a===bs.mapValue)return 0;if(o===bs.mapValue)return 1;if(a===bs.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},f=Object.keys(d);h.sort(),f.sort();for(let p=0;p<h.length&&p<f.length;++p){const I=ti(h[p],f[p]);if(I!==0)return I;const A=on(c[h[p]],d[f[p]]);if(A!==0)return A}return U(h.length,f.length)}(n.mapValue,e.mapValue);default:throw O(23264,{he:t})}}function ba(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return U(n,e);const t=mt(n),s=mt(e),r=U(t.seconds,s.seconds);return r!==0?r:U(t.nanos,s.nanos)}function Ta(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const o=on(t[r],s[r]);if(o)return o}return U(t.length,s.length)}function an(n){return ni(n)}function ni(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=mt(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return pt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const o of t.values||[])r?r=!1:s+=",",s+=ni(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${ni(t.fields[a])}`;return r+"}"}(n.mapValue):O(61005,{value:n})}function Vs(n){switch(gt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sr(n);return e?16+Vs(e):16;case 5:return 2*n.stringValue.length;case 6:return pt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,o)=>r+Vs(o),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return Lt(s.fields,(o,a)=>{r+=o.length+Vs(a)}),r}(n.mapValue);default:throw O(13486,{value:n})}}function Ia(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function si(n){return!!n&&"integerValue"in n}function Ai(n){return!!n&&"arrayValue"in n}function Aa(n){return!!n&&"nullValue"in n}function Sa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xs(n){return!!n&&"mapValue"in n}function Kd(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Hl])==null?void 0:s.stringValue)===Wl}function On(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Lt(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=On(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=On(n.arrayValue.values[t]);return e}return{...n}}function Qd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Wd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.value=e}static empty(){return new ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!xs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=On(t)}setAll(e){let t=_e.emptyPath(),s={},r=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=On(a):r.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,s,r)}delete(e){const t=this.field(e.popLast());xs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];xs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Lt(t,(r,o)=>e[r]=o);for(const r of s)delete e[r]}clone(){return new ke(On(this.value))}}function Kl(n){const e=[];return Lt(n.fields,(t,s)=>{const r=new _e([t]);if(xs(s)){const o=Kl(s.mapValue).fields;if(o.length===0)e.push(r);else for(const a of o)e.push(r.child(a))}else e.push(r)}),new Oe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,s,r,o,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ie(e,0,q.min(),q.min(),q.min(),ke.empty(),0)}static newFoundDocument(e,t,s,r){return new Ie(e,1,t,q.min(),s,r,0)}static newNoDocument(e,t){return new Ie(e,2,t,q.min(),q.min(),ke.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,q.min(),q.min(),ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,t){this.position=e,this.inclusive=t}}function Ra(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const o=e[r],a=n.position[r];if(o.field.isKeyField()?s=M.comparator(M.fromName(a.referenceValue),t.key):s=on(a,t.data.field(o.field)),o.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ca(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ke(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t="asc"){this.field=e,this.dir=t}}function Yd(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{}class ce extends Ql{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Xd(e,t,s):t==="array-contains"?new tf(e,s):t==="in"?new nf(e,s):t==="not-in"?new sf(e,s):t==="array-contains-any"?new rf(e,s):new ce(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Zd(e,s):new ef(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(on(t,this.value)):t!==null&&gt(this.value)===gt(t)&&this.matchesComparison(on(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends Ql{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Be(e,t)}matches(e){return Yl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Yl(n){return n.op==="and"}function Jl(n){return Jd(n)&&Yl(n)}function Jd(n){for(const e of n.filters)if(e instanceof Be)return!1;return!0}function ri(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+an(n.value);if(Jl(n))return n.filters.map(e=>ri(e)).join(",");{const e=n.filters.map(t=>ri(t)).join(",");return`${n.op}(${e})`}}function Xl(n,e){return n instanceof ce?function(s,r){return r instanceof ce&&s.op===r.op&&s.field.isEqual(r.field)&&Ke(s.value,r.value)}(n,e):n instanceof Be?function(s,r){return r instanceof Be&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((o,a,c)=>o&&Xl(a,r.filters[c]),!0):!1}(n,e):void O(19439)}function Zl(n){return n instanceof ce?function(t){return`${t.field.canonicalString()} ${t.op} ${an(t.value)}`}(n):n instanceof Be?function(t){return t.op.toString()+" {"+t.getFilters().map(Zl).join(" ,")+"}"}(n):"Filter"}class Xd extends ce{constructor(e,t,s){super(e,t,s),this.key=M.fromName(s.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Zd extends ce{constructor(e,t){super(e,"in",t),this.keys=ec("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ef extends ce{constructor(e,t){super(e,"not-in",t),this.keys=ec("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ec(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>M.fromName(s.referenceValue))}class tf extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ai(t)&&Hn(t.arrayValue,this.value)}}class nf extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Hn(this.value.arrayValue,t)}}class sf extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Hn(this.value.arrayValue,t)}}class rf extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ai(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Hn(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t=null,s=[],r=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=o,this.startAt=a,this.endAt=c,this.Te=null}}function Pa(n,e=null,t=[],s=[],r=null,o=null,a=null){return new of(n,e,t,s,r,o,a)}function Si(n){const e=F(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>ri(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(o){return o.field.canonicalString()+o.dir}(s)).join(","),nr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>an(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>an(s)).join(",")),e.Te=t}return e.Te}function Ri(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Yd(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Xl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ca(n.startAt,e.startAt)&&Ca(n.endAt,e.endAt)}function ii(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t=null,s=[],r=[],o=null,a="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function af(n,e,t,s,r,o,a,c){return new fn(n,e,t,s,r,o,a,c)}function tc(n){return new fn(n)}function Va(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lf(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function nc(n){return n.collectionGroup!==null}function qn(n){const e=F(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new fe(_e.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Wn(o,s))}),t.has(_e.keyField().canonicalString())||e.Ie.push(new Wn(_e.keyField(),s))}return e.Ie}function Ge(n){const e=F(n);return e.Ee||(e.Ee=cf(e,qn(n))),e.Ee}function cf(n,e){if(n.limitType==="F")return Pa(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const o=r.dir==="desc"?"asc":"desc";return new Wn(r.field,o)});const t=n.endAt?new Gs(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Gs(n.startAt.position,n.startAt.inclusive):null;return Pa(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function oi(n,e){const t=n.filters.concat([e]);return new fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function uf(n,e){const t=n.explicitOrderBy.concat([e]);return new fn(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function ai(n,e,t){return new fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function rr(n,e){return Ri(Ge(n),Ge(e))&&n.limitType===e.limitType}function sc(n){return`${Si(Ge(n))}|lt:${n.limitType}`}function Gt(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>Zl(r)).join(", ")}]`),nr(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>an(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>an(r)).join(",")),`Target(${s})`}(Ge(n))}; limitType=${n.limitType})`}function ir(n,e){return e.isFoundDocument()&&function(s,r){const o=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(o):M.isDocumentKey(s.path)?s.path.isEqual(o):s.path.isImmediateParentOf(o)}(n,e)&&function(s,r){for(const o of qn(s))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const o of s.filters)if(!o.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(a,c,h){const d=Ra(a,c,h);return a.inclusive?d<=0:d<0}(s.startAt,qn(s),r)||s.endAt&&!function(a,c,h){const d=Ra(a,c,h);return a.inclusive?d>=0:d>0}(s.endAt,qn(s),r))}(n,e)}function hf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rc(n){return(e,t)=>{let s=!1;for(const r of qn(n)){const o=df(r,e,t);if(o!==0)return o;s=s||r.field.isKeyField()}return 0}}function df(n,e,t){const s=n.field.isKeyField()?M.comparator(e.key,t.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?on(h,d):O(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return O(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,o]of s)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Lt(this.inner,(t,s)=>{for(const[r,o]of s)e(r,o)})}isEmpty(){return $l(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=new ne(M.comparator);function tt(){return ff}const ic=new ne(M.comparator);function Ln(...n){let e=ic;for(const t of n)e=e.insert(t.key,t);return e}function oc(n){let e=ic;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Pt(){return Fn()}function ac(){return Fn()}function Fn(){return new Mt(n=>n.toString(),(n,e)=>n.isEqual(e))}const mf=new ne(M.comparator),pf=new fe(M.comparator);function z(...n){let e=pf;for(const t of n)e=e.add(t);return e}const gf=new fe(U);function yf(){return gf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Us(e)?"-0":e}}function lc(n){return{integerValue:""+n}}function vf(n,e){return Bd(e)?lc(e):Ci(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this._=void 0}}function _f(n,e,t){return n instanceof Hs?function(r,o){const a={fields:{[zl]:{stringValue:Ul},[Gl]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&Ii(o)&&(o=sr(o)),o&&(a.fields[jl]=o),{mapValue:a}}(t,e):n instanceof Kn?uc(n,e):n instanceof Qn?hc(n,e):function(r,o){const a=cc(r,o),c=xa(a)+xa(r.Ae);return si(a)&&si(r.Ae)?lc(c):Ci(r.serializer,c)}(n,e)}function Ef(n,e,t){return n instanceof Kn?uc(n,e):n instanceof Qn?hc(n,e):t}function cc(n,e){return n instanceof Ws?function(s){return si(s)||function(o){return!!o&&"doubleValue"in o}(s)}(e)?e:{integerValue:0}:null}class Hs extends or{}class Kn extends or{constructor(e){super(),this.elements=e}}function uc(n,e){const t=dc(e);for(const s of n.elements)t.some(r=>Ke(r,s))||t.push(s);return{arrayValue:{values:t}}}class Qn extends or{constructor(e){super(),this.elements=e}}function hc(n,e){let t=dc(e);for(const s of n.elements)t=t.filter(r=>!Ke(r,s));return{arrayValue:{values:t}}}class Ws extends or{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function xa(n){return oe(n.integerValue||n.doubleValue)}function dc(n){return Ai(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function wf(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof Kn&&r instanceof Kn||s instanceof Qn&&r instanceof Qn?rn(s.elements,r.elements,Ke):s instanceof Ws&&r instanceof Ws?Ke(s.Ae,r.Ae):s instanceof Hs&&r instanceof Hs}(n.transform,e.transform)}class bf{constructor(e,t){this.version=e,this.transformResults=t}}class qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qe}static exists(e){return new qe(void 0,e)}static updateTime(e){return new qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ds(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ar{}function fc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Pi(n.key,qe.none()):new Zn(n.key,n.data,qe.none());{const t=n.data,s=ke.empty();let r=new fe(_e.comparator);for(let o of e.fields)if(!r.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?s.delete(o):s.set(o,a),r=r.add(o)}return new Ot(n.key,s,new Oe(r.toArray()),qe.none())}}function Tf(n,e,t){n instanceof Zn?function(r,o,a){const c=r.value.clone(),h=ka(r.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Ot?function(r,o,a){if(!Ds(r.precondition,o))return void o.convertToUnknownDocument(a.version);const c=ka(r.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(mc(r)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(r,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function $n(n,e,t,s){return n instanceof Zn?function(o,a,c,h){if(!Ds(o.precondition,a))return c;const d=o.value.clone(),f=Na(o.fieldTransforms,h,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,s):n instanceof Ot?function(o,a,c,h){if(!Ds(o.precondition,a))return c;const d=Na(o.fieldTransforms,h,a),f=a.data;return f.setAll(mc(o)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(n,e,t,s):function(o,a,c){return Ds(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function If(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),o=cc(s.transform,r||null);o!=null&&(t===null&&(t=ke.empty()),t.set(s.field,o))}return t||null}function Da(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&rn(s,r,(o,a)=>wf(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Zn extends ar{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ot extends ar{constructor(e,t,s,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function mc(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function ka(n,e,t){const s=new Map;W(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const o=n[r],a=o.transform,c=e.data.field(o.field);s.set(o.field,Ef(a,c,t[r]))}return s}function Na(n,e,t){const s=new Map;for(const r of n){const o=r.transform,a=t.data.field(r.field);s.set(r.field,_f(o,a,e))}return s}class Pi extends ar{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Af extends ar{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&Tf(o,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=$n(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=$n(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ac();return this.mutations.forEach(r=>{const o=e.get(r.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(r.key)?null:c;const h=fc(a,c);h!==null&&s.set(r.key,h),a.isValidDocument()||a.convertToNoDocument(q.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&rn(this.mutations,e.mutations,(t,s)=>Da(t,s))&&rn(this.baseMutations,e.baseMutations,(t,s)=>Da(t,s))}}class Vi{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){W(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=function(){return mf}();const o=e.mutations;for(let a=0;a<o.length;a++)r=r.insert(o[a].key,s[a].version);return new Vi(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,j;function Pf(n){switch(n){case P.OK:return O(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return O(15467,{code:n})}}function pc(n){if(n===void 0)return et("GRPC error has no .code"),P.UNKNOWN;switch(n){case le.OK:return P.OK;case le.CANCELLED:return P.CANCELLED;case le.UNKNOWN:return P.UNKNOWN;case le.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case le.INTERNAL:return P.INTERNAL;case le.UNAVAILABLE:return P.UNAVAILABLE;case le.UNAUTHENTICATED:return P.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case le.NOT_FOUND:return P.NOT_FOUND;case le.ALREADY_EXISTS:return P.ALREADY_EXISTS;case le.PERMISSION_DENIED:return P.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case le.ABORTED:return P.ABORTED;case le.OUT_OF_RANGE:return P.OUT_OF_RANGE;case le.UNIMPLEMENTED:return P.UNIMPLEMENTED;case le.DATA_LOSS:return P.DATA_LOSS;default:return O(39323,{code:n})}}(j=le||(le={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=new ut([4294967295,4294967295],0);function La(n){const e=Vf().encode(n),t=new Pl;return t.update(e),new Uint8Array(t.digest())}function Ma(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ut([t,s],0),new ut([r,o],0)]}class xi{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Mn(`Invalid padding: ${t}`);if(s<0)throw new Mn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Mn(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Mn(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ut.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(ut.fromNumber(s)));return r.compare(xf)===1&&(r=new ut([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=La(e),[s,r]=Ma(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(s,r,o);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new xi(o,r,t);return s.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=La(e),[s,r]=Ma(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(s,r,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Mn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t,s,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,ts.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new es(q.min(),r,new ne(U),tt(),z())}}class ts{constructor(e,t,s,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ts(s,t,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class gc{constructor(e,t){this.targetId=e,this.Ce=t}}class yc{constructor(e,t,s=Ee.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Oa{constructor(){this.ve=0,this.Fe=qa(),this.Me=Ee.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=z(),t=z(),s=z();return this.Fe.forEach((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:O(38017,{changeType:o})}}),new ts(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=qa()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,W(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Df{constructor(e){this.Ge=e,this.ze=new Map,this.je=tt(),this.Je=Ts(),this.He=Ts(),this.Ze=new ne(U)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:O(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,r)=>{this.rt(r)&&t(r)})}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const o=r.target;if(ii(o))if(s===0){const a=new M(o.path);this.et(t,a,Ie.newNoDocument(a,q.min()))}else W(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const c=this.ut(e),h=c?this.ct(c,e,a):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:o=0}=t;let a,c;try{a=pt(s).toUint8Array()}catch(h){if(h instanceof Bl)return kt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new xi(a,r,o)}catch(h){return kt(h instanceof Mn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach(o=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.et(t,o,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((o,a)=>{const c=this.ot(a);if(c){if(o.current&&ii(c.target)){const h=new M(c.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Ie.newNoDocument(h,e))}o.Be&&(t.set(a,o.ke()),o.Ke())}});let s=z();this.He.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(o))}),this.je.forEach((o,a)=>a.setReadTime(e));const r=new es(e,t,this.Ze,this.je,s);return this.je=tt(),this.Je=Ts(),this.He=Ts(),this.Ze=new ne(U),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Oa,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new fe(U),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new fe(U),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||k("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Oa),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ts(){return new ne(M.comparator)}function qa(){return new ne(M.comparator)}const kf={asc:"ASCENDING",desc:"DESCENDING"},Nf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Lf={and:"AND",or:"OR"};class Mf{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function li(n,e){return n.useProto3Json||nr(e)?e:{value:e}}function Ks(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vc(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Of(n,e){return Ks(n,e.toTimestamp())}function He(n){return W(!!n,49232),q.fromTimestamp(function(t){const s=mt(t);return new ee(s.seconds,s.nanos)}(n))}function Di(n,e){return ci(n,e).canonicalString()}function ci(n,e){const t=function(r){return new X(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function _c(n){const e=X.fromString(n);return W(Ic(e),10190,{key:e.toString()}),e}function ui(n,e){return Di(n.databaseId,e.path)}function Ur(n,e){const t=_c(e);if(t.get(1)!==n.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(wc(t))}function Ec(n,e){return Di(n.databaseId,e)}function qf(n){const e=_c(n);return e.length===4?X.emptyPath():wc(e)}function hi(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wc(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Fa(n,e,t){return{name:ui(n,e),fields:t.value.mapValue.fields}}function Ff(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],o=function(d,f){return d.useProto3Json?(W(f===void 0||typeof f=="string",58123),Ee.fromBase64String(f||"")):(W(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ee.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const f=d.code===void 0?P.UNKNOWN:pc(d.code);return new N(f,d.message||"")}(a);t=new yc(s,r,o,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ur(n,s.document.name),o=He(s.document.updateTime),a=s.document.createTime?He(s.document.createTime):q.min(),c=new ke({mapValue:{fields:s.document.fields}}),h=Ie.newFoundDocument(r,o,a,c),d=s.targetIds||[],f=s.removedTargetIds||[];t=new ks(d,f,h.key,h)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ur(n,s.document),o=s.readTime?He(s.readTime):q.min(),a=Ie.newNoDocument(r,o),c=s.removedTargetIds||[];t=new ks([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ur(n,s.document),o=s.removedTargetIds||[];t=new ks([],o,r,null)}else{if(!("filter"in e))return O(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:o}=s,a=new Cf(r,o),c=s.targetId;t=new gc(c,a)}}return t}function $f(n,e){let t;if(e instanceof Zn)t={update:Fa(n,e.key,e.value)};else if(e instanceof Pi)t={delete:ui(n,e.key)};else if(e instanceof Ot)t={update:Fa(n,e.key,e.data),updateMask:Qf(e.fieldMask)};else{if(!(e instanceof Af))return O(16599,{dt:e.type});t={verify:ui(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(o,a){const c=a.transform;if(c instanceof Hs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Kn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Qn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ws)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw O(20930,{transform:a.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,o){return o.updateTime!==void 0?{updateTime:Of(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O(27497)}(n,e.precondition)),t}function Bf(n,e){return n&&n.length>0?(W(e!==void 0,14353),n.map(t=>function(r,o){let a=r.updateTime?He(r.updateTime):He(o);return a.isEqual(q.min())&&(a=He(o)),new bf(a,r.transformResults||[])}(t,e))):[]}function Uf(n,e){return{documents:[Ec(n,e.path)]}}function zf(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Ec(n,r);const o=function(d){if(d.length!==0)return Tc(Be.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(f=>function(I){return{field:Ht(I.field),direction:Hf(I.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=li(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:r}}function jf(n){let e=qf(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){W(s===1,65062);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let o=[];t.where&&(o=function(p){const I=bc(p);return I instanceof Be&&Jl(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(I=>function(R){return new Wn(Wt(R.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(I))}(t.orderBy));let c=null;t.limit&&(c=function(p){let I;return I=typeof p=="object"?p.value:p,nr(I)?null:I}(t.limit));let h=null;t.startAt&&(h=function(p){const I=!!p.before,A=p.values||[];return new Gs(A,I)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const I=!p.before,A=p.values||[];return new Gs(A,I)}(t.endAt)),af(e,r,a,o,c,"F",h,d)}function Gf(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bc(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Wt(t.unaryFilter.field);return ce.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Wt(t.unaryFilter.field);return ce.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Wt(t.unaryFilter.field);return ce.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Wt(t.unaryFilter.field);return ce.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(n):n.fieldFilter!==void 0?function(t){return ce.create(Wt(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Be.create(t.compositeFilter.filters.map(s=>bc(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(t.compositeFilter.op))}(n):O(30097,{filter:n})}function Hf(n){return kf[n]}function Wf(n){return Nf[n]}function Kf(n){return Lf[n]}function Ht(n){return{fieldPath:n.canonicalString()}}function Wt(n){return _e.fromServerFormat(n.fieldPath)}function Tc(n){return n instanceof ce?function(t){if(t.op==="=="){if(Sa(t.value))return{unaryFilter:{field:Ht(t.field),op:"IS_NAN"}};if(Aa(t.value))return{unaryFilter:{field:Ht(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Sa(t.value))return{unaryFilter:{field:Ht(t.field),op:"IS_NOT_NAN"}};if(Aa(t.value))return{unaryFilter:{field:Ht(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ht(t.field),op:Wf(t.op),value:t.value}}}(n):n instanceof Be?function(t){const s=t.getFilters().map(r=>Tc(r));return s.length===1?s[0]:{compositeFilter:{op:Kf(t.op),filters:s}}}(n):O(54877,{filter:n})}function Qf(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ic(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Ac(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t,s,r,o=q.min(),a=q.min(),c=Ee.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new Xe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.yt=e}}function Jf(n){const e=jf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ai(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.bn=new Zf}addToCollectionParentIndex(e,t){return this.bn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(ft.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(ft.min())}updateCollectionGroup(e,t,s){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Zf{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new fe(X.comparator),o=!r.has(s);return this.index[t]=r.add(s),o}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new fe(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sc=41943040;class Ve{static withCacheSize(e){return new Ve(e,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve.DEFAULT_COLLECTION_PERCENTILE=10,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ve.DEFAULT=new Ve(Sc,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ve.DISABLED=new Ve(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new yt(0)}static ar(){return new yt(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="LruGarbageCollector",em=1048576;function Ua([n,e],[t,s]){const r=U(n,t);return r===0?U(e,s):r}class tm{constructor(e){this.Pr=e,this.buffer=new fe(Ua),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Ua(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class nm{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){k(Ba,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){dn(t)?k(Ba,"Ignoring IndexedDB error during garbage collection: ",t):await hn(t)}await this.Ar(3e5)})}}class sm{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return V.resolve(tr.ce);const s=new tm(t);return this.Vr.forEachTarget(e,r=>s.Er(r.sequenceNumber)).next(()=>this.Vr.mr(e,r=>s.Er(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve($a)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$a):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,o,a,c,h,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,a=Date.now(),this.nthSequenceNumber(e,r))).next(p=>(s=p,c=Date.now(),this.removeTargets(e,s,t))).next(p=>(o=p,h=Date.now(),this.removeOrphanedDocuments(e,s))).next(p=>(d=Date.now(),jt()<=G.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${p} documents in `+(d-h)+`ms
Total Duration: ${d-f}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:p})))}}function rm(n,e){return new sm(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.changes=new Mt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?V.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&$n(s.mutation,r,Oe.empty(),ee.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,z()).next(()=>s))}getLocalViewOfDocuments(e,t,s=z()){const r=Pt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(o=>{let a=Ln();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=Pt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,z()))}populateOverlays(e,t,s){const r=[];return s.forEach(o=>{t.has(o)||r.push(o)}),this.documentOverlayCache.getOverlays(e,r).next(o=>{o.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,s,r){let o=tt();const a=Fn(),c=function(){return Fn()}();return t.forEach((h,d)=>{const f=s.get(d.key);r.has(d.key)&&(f===void 0||f.mutation instanceof Ot)?o=o.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),$n(f.mutation,d,f.mutation.getFieldMask(),ee.now())):a.set(d.key,Oe.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>c.set(d,new om(f,a.get(d)??null))),c))}recalculateAndSaveOverlays(e,t){const s=Fn();let r=new ne((a,c)=>a-c),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let f=s.get(h)||Oe.empty();f=c.applyToLocalView(d,f),s.set(h,f);const p=(r.get(c.batchId)||z()).add(h);r=r.insert(c.batchId,p)})}).next(()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,f=h.value,p=ac();f.forEach(I=>{if(!o.has(I)){const A=fc(t.get(I),s.get(I));A!==null&&p.set(I,A),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,p))}return V.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return lf(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(o=>{const a=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-o.size):V.resolve(Pt());let c=zn,h=o;return a.next(d=>V.forEach(d,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),o.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(I=>{h=h.insert(f,I)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,z())).next(f=>({batchId:c,changes:oc(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(s=>{let r=Ln();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const o=t.collectionGroup;let a=Ln();return this.indexManager.getCollectionParents(e,o).next(c=>V.forEach(c,h=>{const d=function(p,I){return new fn(I,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next(f=>{f.forEach((p,I)=>{a=a.insert(p,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,o,r))).next(a=>{o.forEach((h,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ie.newInvalidDocument(f)))});let c=Ln();return a.forEach((h,d)=>{const f=o.get(h);f!==void 0&&$n(f.mutation,d,Oe.empty(),ee.now()),ir(t,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return V.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:He(r.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(r){return{name:r.name,query:Jf(r.bundledQuery),readTime:He(r.readTime)}}(t)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this.overlays=new ne(M.comparator),this.Lr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Pt();return V.forEach(t,r=>this.getOverlay(e,r).next(o=>{o!==null&&s.set(r,o)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,o)=>{this.St(e,t,o)}),V.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(s)),V.resolve()}getOverlaysForCollection(e,t,s){const r=Pt(),o=t.length+1,a=new M(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>s&&r.set(h.getKey(),h)}return V.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let o=new ne((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let f=o.get(d.largestBatchId);f===null&&(f=Pt(),o=o.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=Pt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=r)););return V.resolve(c)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new Rf(t,s));let o=this.Lr.get(t);o===void 0&&(o=z(),this.Lr.set(t,o)),this.Lr.set(t,o.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(){this.sessionToken=Ee.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.kr=new fe(ge.Kr),this.qr=new fe(ge.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new ge(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new ge(e,t))}Qr(e,t){e.forEach(s=>this.removeReference(s,t))}Gr(e){const t=new M(new X([])),s=new ge(t,e),r=new ge(t,e+1),o=[];return this.qr.forEachInRange([s,r],a=>{this.Wr(a),o.push(a.key)}),o}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new M(new X([])),s=new ge(t,e),r=new ge(t,e+1);let o=z();return this.qr.forEachInRange([s,r],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new ge(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ge{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return M.comparator(e.key,t.key)||U(e.Jr,t.Jr)}static Ur(e,t){return U(e.Jr,t.Jr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new fe(ge.Kr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Sf(o,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Hr=this.Hr.add(new ge(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),o=r<0?0:r;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Ti:this.Yn-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ge(t,0),r=new ge(t,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([s,r],a=>{const c=this.Zr(a.Jr);o.push(c)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new fe(U);return t.forEach(r=>{const o=new ge(r,0),a=new ge(r,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,a],c=>{s=s.add(c.Jr)})}),V.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let o=s;M.isDocumentKey(o)||(o=o.child(""));const a=new ge(new M(o),0);let c=new fe(U);return this.Hr.forEachWhile(h=>{const d=h.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(c=c.add(h.Jr)),!0)},a),V.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach(s=>{const r=this.Zr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){W(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return V.forEach(t.mutations,r=>{const o=new ge(r.key,t.batchId);return s=s.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Hr=s})}nr(e){}containsKey(e,t){const s=new ge(t,0),r=this.Hr.firstAfterOrEqual(s);return V.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this.ti=e,this.docs=function(){return new ne(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),o=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return V.resolve(s?s.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let s=tt();return t.forEach(r=>{const o=this.docs.get(r);s=s.insert(r,o?o.document.mutableCopy():Ie.newInvalidDocument(r))}),V.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let o=tt();const a=t.path,c=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:f}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Od(Md(f),s)<=0||(r.has(f.key)||ir(t,f))&&(o=o.insert(f.key,f.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(e,t,s,r){O(9500)}ni(e,t){return V.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new fm(this)}getSize(e){return V.resolve(this.size)}}class fm extends im{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)}),V.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this.persistence=e,this.ri=new Mt(t=>Si(t),Ri),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.ii=0,this.si=new ki,this.targetCount=0,this.oi=yt._r()}forEachTarget(e,t){return this.ri.forEach((s,r)=>t(r)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),V.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new yt(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.lr(t),V.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,s){let r=0;const o=[];return this.ri.forEach((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)}),V.waitFor(o).next(()=>r)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return V.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),V.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach(a=>{o.push(r.markPotentiallyOrphaned(e,a))}),V.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return V.resolve(s)}containsKey(e,t){return V.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this._i={},this.overlays={},this.ai=new tr(0),this.ui=!1,this.ui=!0,this.ci=new um,this.referenceDelegate=e(this),this.li=new mm(this),this.indexManager=new Xf,this.remoteDocumentCache=function(r){return new dm(r)}(s=>this.referenceDelegate.hi(s)),this.serializer=new Yf(t),this.Pi=new lm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new hm(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){k("MemoryPersistence","Starting transaction:",e);const r=new pm(this.ai.next());return this.referenceDelegate.Ti(),s(r).next(o=>this.referenceDelegate.Ii(r).next(()=>o)).toPromise().then(o=>(r.raiseOnCommittedEvent(),o))}Ei(e,t){return V.or(Object.values(this._i).map(s=>()=>s.containsKey(e,t)))}}class pm extends Fd{constructor(e){super(),this.currentSequenceNumber=e}}class Ni{constructor(e){this.persistence=e,this.Ri=new ki,this.Ai=null}static Vi(e){return new Ni(e)}get di(){if(this.Ai)return this.Ai;throw O(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),V.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),V.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(r=>this.di.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(o=>this.di.add(o.toString()))}).next(()=>s.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.di,s=>{const r=M.fromPath(s);return this.mi(e,r).next(o=>{o||t.removeEntry(r,q.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return V.or([()=>V.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Qs{constructor(e,t){this.persistence=e,this.fi=new Mt(s=>Ud(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=rm(this,t)}static Vi(e,t){return new Qs(e,t)}Ti(){}Ii(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}pr(e){let t=0;return this.mr(e,s=>{t++}).next(()=>t)}mr(e,t){return V.forEach(this.fi,(s,r)=>this.wr(e,s,r).next(o=>o?V.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.ni(e,a=>this.wr(e,a,t).next(c=>{c||(s++,o.removeEntry(a,q.min()))})).next(()=>o.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),V.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),V.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vs(e.data.value)),t}wr(e,t,s){return V.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return V.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=z(),r=z();for(const o of t.docChanges)switch(o.type){case 0:s=s.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new Li(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return nh()?8:$d(eh())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const o={result:null};return this.gs(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ps(e,t,r,s).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new gm;return this.ys(e,t,a).next(c=>{if(o.result=c,this.As)return this.ws(e,t,a,c.size)})}).next(()=>o.result)}ws(e,t,s,r){return s.documentReadCount<this.Vs?(jt()<=G.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Gt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(jt()<=G.DEBUG&&k("QueryEngine","Query:",Gt(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(jt()<=G.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Gt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ge(t))):V.resolve())}gs(e,t){if(Va(t))return V.resolve(null);let s=Ge(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=ai(t,null,"F"),s=Ge(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const a=z(...o);return this.fs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,s).next(h=>{const d=this.Ss(t,c);return this.bs(t,d,a,h.readTime)?this.gs(e,ai(t,null,"F")):this.Ds(e,d,t,h)}))})))}ps(e,t,s,r){return Va(t)||r.isEqual(q.min())?V.resolve(null):this.fs.getDocuments(e,s).next(o=>{const a=this.Ss(t,o);return this.bs(t,a,s,r)?V.resolve(null):(jt()<=G.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gt(t)),this.Ds(e,a,t,Ld(r,zn)).next(c=>c))})}Ss(e,t){let s=new fe(rc(e));return t.forEach((r,o)=>{ir(e,o)&&(s=s.add(o))}),s}bs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}ys(e,t,s){return jt()<=G.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Gt(t)),this.fs.getDocumentsMatchingQuery(e,t,ft.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="LocalStore",vm=3e8;class _m{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new ne(U),this.Fs=new Mt(o=>Si(o),Ri),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new am(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Em(n,e,t,s){return new _m(n,e,t,s)}async function Cc(n,e){const t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(o=>(r=o,t.Os(e),t.mutationQueue.getAllMutationBatches(s))).next(o=>{const a=[],c=[];let h=z();for(const d of r){a.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of o){c.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return t.localDocuments.getDocuments(s,h).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:c}))})})}function wm(n,e){const t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),o=t.xs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,f){const p=d.batch,I=p.keys();let A=V.resolve();return I.forEach(R=>{A=A.next(()=>f.getEntry(h,R)).next(x=>{const C=d.docVersions.get(R);W(C!==null,48541),x.version.compareTo(C)<0&&(p.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),f.addEntry(x)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(h,p))}(t,s,e,o).next(()=>o.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let h=z();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Pc(n){const e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function bm(n,e){const t=F(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const c=[];e.targetChanges.forEach((f,p)=>{const I=r.get(p);if(!I)return;c.push(t.li.removeMatchingKeys(o,f.removedDocuments,p).next(()=>t.li.addMatchingKeys(o,f.addedDocuments,p)));let A=I.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(Ee.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,s)),r=r.insert(p,A),function(x,C,L){return x.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=vm?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(I,A,f)&&c.push(t.li.updateTargetData(o,A))});let h=tt(),d=z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,f))}),c.push(Tm(o,a,e.documentUpdates).next(f=>{h=f.Bs,d=f.Ls})),!s.isEqual(q.min())){const f=t.li.getLastRemoteSnapshotVersion(o).next(p=>t.li.setTargetsMetadata(o,o.currentSequenceNumber,s));c.push(f)}return V.waitFor(c).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.vs=r,o))}function Tm(n,e,t){let s=z(),r=z();return t.forEach(o=>s=s.add(o)),e.getEntries(n,s).next(o=>{let a=tt();return t.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(c)),h.isNoDocument()&&h.version.isEqual(q.min())?(e.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(c,h)):k(Mi,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Bs:a,Ls:r}})}function Im(n,e){const t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Ti),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Am(n,e){const t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.li.getTargetData(s,e).next(o=>o?(r=o,V.resolve(r)):t.li.allocateTargetId(s).next(a=>(r=new Xe(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s})}async function di(n,e,t){const s=F(n),r=s.vs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",o,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!dn(a))throw a;k(Mi,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function za(n,e,t){const s=F(n);let r=q.min(),o=z();return s.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,f){const p=F(h),I=p.Fs.get(f);return I!==void 0?V.resolve(p.vs.get(I)):p.li.getTargetData(d,f)}(s,a,Ge(e)).next(c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:q.min(),t?o:z())).next(c=>(Sm(s,hf(e),c),{documents:c,ks:o})))}function Sm(n,e,t){let s=n.Ms.get(e)||q.min();t.forEach((r,o)=>{o.readTime.compareTo(s)>0&&(s=o.readTime)}),n.Ms.set(e,s)}class ja{constructor(){this.activeTargetIds=yf()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rm{constructor(){this.vo=new ja,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new ja,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="ConnectivityMonitor";class Ha{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){k(Ga,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){k(Ga,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is=null;function fi(){return Is===null?Is=function(){return 268435456+Math.round(2147483648*Math.random())}():Is++,"0x"+Is.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="RestConnection",Pm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Vm{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===zs?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,o){const a=fi(),c=this.Qo(e,t.toUriEncodedString());k(zr,`Sending RPC '${e}' ${a}:`,c,s);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,r,o);const{host:d}=new URL(c),f=bl(d);return this.zo(e,c,h,s,f).then(p=>(k(zr,`Received RPC '${e}' ${a}: `,p),p),p=>{throw kt(zr,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",s),p})}jo(e,t,s,r,o,a){return this.Wo(e,t,s,r,o)}Go(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+un}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,o)=>e[o]=r),s&&s.headers.forEach((r,o)=>e[o]=r)}Qo(e,t){const s=Pm[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="WebChannelConnection",Dn=(n,e,t)=>{n.listen(e,s=>{try{t(s)}catch(r){setTimeout(()=>{throw r},0)}})};class Xt extends Vm{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Xt.c_){const e=kl();Dn(e,Dl.STAT_EVENT,t=>{t.stat===ei.PROXY?k(be,"STAT_EVENT: detected buffering proxy"):t.stat===ei.NOPROXY&&k(be,"STAT_EVENT: detected no buffering proxy")}),Xt.c_=!0}}zo(e,t,s,r,o){const a=fi();return new Promise((c,h)=>{const d=new Vl;d.setWithCredentials(!0),d.listenOnce(xl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ps.NO_ERROR:const p=d.getResponseJson();k(be,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case Ps.TIMEOUT:k(be,`RPC '${e}' ${a} timed out`),h(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case Ps.HTTP_ERROR:const I=d.getStatus();if(k(be,`RPC '${e}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const x=function(L){const $=L.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf($)>=0?$:P.UNKNOWN}(R.status);h(new N(x,R.message))}else h(new N(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new N(P.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{k(be,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(r);k(be,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",f,s,15)})}T_(e,t,s){const r=fi(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const d=o.join("");k(be,`Creating RPC '${e}' stream ${r}: ${d}`,c);const f=a.createWebChannel(d,c);this.I_(f);let p=!1,I=!1;const A=new xm({Jo:R=>{I?k(be,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(p||(k(be,`Opening RPC '${e}' stream ${r} transport.`),f.open(),p=!0),k(be,`RPC '${e}' stream ${r} sending:`,R),f.send(R))},Ho:()=>f.close()});return Dn(f,Nn.EventType.OPEN,()=>{I||(k(be,`RPC '${e}' stream ${r} transport opened.`),A.i_())}),Dn(f,Nn.EventType.CLOSE,()=>{I||(I=!0,k(be,`RPC '${e}' stream ${r} transport closed`),A.o_(),this.E_(f))}),Dn(f,Nn.EventType.ERROR,R=>{I||(I=!0,kt(be,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),A.o_(new N(P.UNAVAILABLE,"The operation could not be completed")))}),Dn(f,Nn.EventType.MESSAGE,R=>{var x;if(!I){const C=R.data[0];W(!!C,16349);const L=C,$=(L==null?void 0:L.error)||((x=L[0])==null?void 0:x.error);if($){k(be,`RPC '${e}' stream ${r} received error:`,$);const H=$.status;let me=function(E){const g=le[E];if(g!==void 0)return pc(g)}(H),se=$.message;H==="NOT_FOUND"&&se.includes("database")&&se.includes("does not exist")&&se.includes(this.databaseId.database)&&kt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),me===void 0&&(me=P.INTERNAL,se="Unknown error status: "+H+" with message "+$.message),I=!0,A.o_(new N(me,se)),f.close()}else k(be,`RPC '${e}' stream ${r} received:`,C),A.__(C)}}),Xt.u_(),setTimeout(()=>{A.s_()},0),A}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Nl()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n){return new Xt(n)}function jr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n){return new Mf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.c_=!1;class Vc{constructor(e,t,s=1e3,r=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&k("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="PersistentStream";class xc{constructor(e,t,s,r,o,a,c,h){this.Ci=e,this.S_=s,this.b_=r,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Vc(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(et(t.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.D_===t&&this.G_(s,r)},s=>{e(()=>{const r=new N(P.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)})})}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.Yo(()=>{s(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(r=>{s(()=>this.z_(r))}),this.stream.onMessage(r=>{s(()=>++this.F_==1?this.J_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return k(Wa,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(k(Wa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class km extends xc{constructor(e,t,s,r,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Ff(this.serializer,e),s=function(o){if(!("targetChange"in o))return q.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?He(a.readTime):q.min()}(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=hi(this.serializer),t.addTarget=function(o,a){let c;const h=a.target;if(c=ii(h)?{documents:Uf(o,h)}:{query:zf(o,h).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=vc(o,a.resumeToken);const d=li(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(q.min())>0){c.readTime=Ks(o,a.snapshotVersion.toTimestamp());const d=li(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const s=Gf(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=hi(this.serializer),t.removeTarget=e,this.K_(t)}}class Nm extends xc{constructor(e,t,s,r,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return W(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){W(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Bf(e.writeResults,e.commitTime),s=He(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=hi(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>$f(this.serializer,s))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{}class Mm extends Lm{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(e,ci(t,s),r,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}jo(e,t,s,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.jo(e,ci(t,s),r,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(P.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Om(n,e,t,s){return new Mm(n,e,t,s)}class qm{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(et(t),this.aa=!1):k("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="RemoteStore";class Fm{constructor(e,t,s,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new yt(1e3),this.Va=new yt(1001),this.da=new Set,this.ma=[],this.fa=o,this.fa.Mo(a=>{s.enqueueAndForget(async()=>{qt(this)&&(k(Qe,"Restarting streams for network reachability change."),await async function(h){const d=F(h);d.da.add(4),await ns(d),d.ga.set("Unknown"),d.da.delete(4),await cr(d)}(this))})}),this.ga=new qm(s,r)}}async function cr(n){if(qt(n))for(const e of n.ma)await e(!0)}async function ns(n){for(const e of n.ma)await e(!1)}function mi(n,e){return n.Ea.get(e)||void 0}function Dc(n,e){const t=F(n),s=mi(t,e.targetId);if(s!==void 0&&t.Ia.has(s))return;const r=function(c,h){const d=mi(c,h);d!==void 0&&c.Ra.delete(d);const f=function(I,A){return A%2!=0?I.Va.next():I.Aa.next()}(c,h);return c.Ea.set(h,f),c.Ra.set(f,h),f}(t,e.targetId);k(Qe,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const o=new Xe(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(r,o),$i(t)?Fi(t):mn(t).O_()&&qi(t,o)}function Oi(n,e){const t=F(n),s=mn(t),r=mi(t,e);k(Qe,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t.Ia.delete(r),t.Ea.delete(e),t.Ra.delete(r),s.O_()&&kc(t,r),t.Ia.size===0&&(s.O_()?s.L_():qt(t)&&t.ga.set("Unknown"))}function qi(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void k(Qe,"SDK target ID not found for remote ID: "+e.targetId);const s=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(s)}mn(n).Z_(e)}function kc(n,e){n.pa.$e(e),mn(n).X_(e)}function Fi(n){n.pa=new Df({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):z()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),mn(n).start(),n.ga.ua()}function $i(n){return qt(n)&&!mn(n).x_()&&n.Ia.size>0}function qt(n){return F(n).da.size===0}function Nc(n){n.pa=void 0}async function $m(n){n.ga.set("Online")}async function Bm(n){n.Ia.forEach((e,t)=>{qi(n,e)})}async function Um(n,e){Nc(n),$i(n)?(n.ga.ha(e),Fi(n)):n.ga.set("Unknown")}async function zm(n,e,t){if(n.ga.set("Online"),e instanceof yc&&e.state===2&&e.cause)try{await async function(r,o){const a=o.cause;for(const c of o.targetIds){if(r.Ia.has(c)){const h=r.Ra.get(c);h!==void 0&&(await r.remoteSyncer.rejectListen(h,a),r.Ea.delete(h),r.Ra.delete(c)),r.Ia.delete(c)}r.pa.removeTarget(c)}}(n,e)}catch(s){k(Qe,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ys(n,s)}else if(e instanceof ks?n.pa.Xe(e):e instanceof gc?n.pa.st(e):n.pa.tt(e),!t.isEqual(q.min()))try{const s=await Pc(n.localStore);t.compareTo(s)>=0&&await function(o,a){const c=o.pa.Tt(a);c.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const p=o.Ia.get(f);p&&o.Ia.set(f,p.withResumeToken(d.resumeToken,a))}}),c.targetMismatches.forEach((d,f)=>{const p=o.Ia.get(d);if(!p)return;o.Ia.set(d,p.withResumeToken(Ee.EMPTY_BYTE_STRING,p.snapshotVersion)),kc(o,d);const I=new Xe(p.target,d,f,p.sequenceNumber);qi(o,I)});const h=function(f,p){const I=new Map;p.targetChanges.forEach((R,x)=>{const C=f.Ra.get(x);C!==void 0&&I.set(C,R)});let A=new ne(U);return p.targetMismatches.forEach((R,x)=>{const C=f.Ra.get(R);C!==void 0&&(A=A.insert(C,x))}),new es(p.snapshotVersion,I,A,p.documentUpdates,p.resolvedLimboDocuments)}(o,c);return o.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(s){k(Qe,"Failed to raise snapshot:",s),await Ys(n,s)}}async function Ys(n,e,t){if(!dn(e))throw e;n.da.add(1),await ns(n),n.ga.set("Offline"),t||(t=()=>Pc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k(Qe,"Retrying IndexedDB access"),await t(),n.da.delete(1),await cr(n)})}function Lc(n,e){return e().catch(t=>Ys(n,t,e))}async function ur(n){const e=F(n),t=vt(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ti;for(;jm(e);)try{const r=await Im(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,Gm(e,r)}catch(r){await Ys(e,r)}Mc(e)&&Oc(e)}function jm(n){return qt(n)&&n.Ta.length<10}function Gm(n,e){n.Ta.push(e);const t=vt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Mc(n){return qt(n)&&!vt(n).x_()&&n.Ta.length>0}function Oc(n){vt(n).start()}async function Hm(n){vt(n).ra()}async function Wm(n){const e=vt(n);for(const t of n.Ta)e.ea(t.mutations)}async function Km(n,e,t){const s=n.Ta.shift(),r=Vi.from(s,e,t);await Lc(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await ur(n)}async function Qm(n,e){e&&vt(n).Y_&&await async function(s,r){if(function(a){return Pf(a)&&a!==P.ABORTED}(r.code)){const o=s.Ta.shift();vt(s).B_(),await Lc(s,()=>s.remoteSyncer.rejectFailedWrite(o.batchId,r)),await ur(s)}}(n,e),Mc(n)&&Oc(n)}async function Ka(n,e){const t=F(n);t.asyncQueue.verifyOperationInProgress(),k(Qe,"RemoteStore received new credentials");const s=qt(t);t.da.add(3),await ns(t),s&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await cr(t)}async function Ym(n,e){const t=F(n);e?(t.da.delete(2),await cr(t)):e||(t.da.add(2),await ns(t),t.ga.set("Unknown"))}function mn(n){return n.ya||(n.ya=function(t,s,r){const o=F(t);return o.sa(),new km(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{Zo:$m.bind(null,n),Yo:Bm.bind(null,n),t_:Um.bind(null,n),H_:zm.bind(null,n)}),n.ma.push(async e=>{e?(n.ya.B_(),$i(n)?Fi(n):n.ga.set("Unknown")):(await n.ya.stop(),Nc(n))})),n.ya}function vt(n){return n.wa||(n.wa=function(t,s,r){const o=F(t);return o.sa(),new Nm(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Hm.bind(null,n),t_:Qm.bind(null,n),ta:Wm.bind(null,n),na:Km.bind(null,n)}),n.ma.push(async e=>{e?(n.wa.B_(),await ur(n)):(await n.wa.stop(),n.Ta.length>0&&(k(Qe,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,s,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=o,this.deferred=new ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,o){const a=Date.now()+s,c=new Bi(e,t,a,r,o);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ui(n,e){if(et("AsyncQueue",`${e}: ${n}`),dn(n))return new N(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{static emptySet(e){return new Zt(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||M.comparator(t.key,s.key):(t,s)=>M.comparator(t.key,s.key),this.keyedMap=Ln(),this.sortedSet=new ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Zt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.Sa=new ne(M.comparator)}track(e){const t=e.doc.key,s=this.Sa.get(t);s?e.type!==0&&s.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&s.type!==1?this.Sa=this.Sa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Sa=this.Sa.remove(t):e.type===1&&s.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):O(63341,{Vt:e,ba:s}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal((t,s)=>{e.push(s)}),e}}class ln{constructor(e,t,s,r,o,a,c,h,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,r,o){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new ln(e,t,Zt.emptySet(t),a,s,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class Xm{constructor(){this.queries=Ya(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,s){const r=F(t),o=r.queries;r.queries=Ya(),o.forEach((a,c)=>{for(const h of c.va)h.onError(s)})})(this,new N(P.ABORTED,"Firestore shutting down"))}}function Ya(){return new Mt(n=>sc(n),rr)}async function Zm(n,e){const t=F(n);let s=3;const r=e.query;let o=t.queries.get(r);o?!o.Fa()&&e.Ma()&&(s=2):(o=new Jm,s=e.Ma()?0:1);try{switch(s){case 0:o.Ca=await t.onListen(r,!0);break;case 1:o.Ca=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=Ui(a,`Initialization of query '${Gt(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,o),o.va.push(e),e.Oa(t.onlineState),o.Ca&&e.Na(o.Ca)&&zi(t)}async function ep(n,e){const t=F(n),s=e.query;let r=3;const o=t.queries.get(s);if(o){const a=o.va.indexOf(e);a>=0&&(o.va.splice(a,1),o.va.length===0?r=e.Ma()?0:1:!o.Fa()&&e.Ma()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function tp(n,e){const t=F(n);let s=!1;for(const r of e){const o=r.query,a=t.queries.get(o);if(a){for(const c of a.va)c.Na(r)&&(s=!0);a.Ca=r}}s&&zi(t)}function np(n,e,t){const s=F(n),r=s.queries.get(e);if(r)for(const o of r.va)o.onError(t);s.queries.delete(e)}function zi(n){n.xa.forEach(e=>{e.next()})}var pi,Ja;(Ja=pi||(pi={})).Ba="default",Ja.Cache="cache";class sp{constructor(e,t,s){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=s||{}}Na(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ln(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const s=t!=="Offline";return(!this.options.Wa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=ln.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==pi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.key=e}}class Fc{constructor(e){this.key=e}}class rp{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=z(),this.mutatedKeys=z(),this.iu=rc(e),this.su=new Zt(this.iu)}get ou(){return this.tu}_u(e,t){const s=t?t.au:new Qa,r=t?t.su:this.su;let o=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((f,p)=>{const I=r.get(f),A=ir(this.query,p)?p:null,R=!!I&&this.mutatedKeys.has(I.key),x=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let C=!1;I&&A?I.data.isEqual(A.data)?R!==x&&(s.track({type:3,doc:A}),C=!0):this.uu(I,A)||(s.track({type:2,doc:A}),C=!0,(h&&this.iu(A,h)>0||d&&this.iu(A,d)<0)&&(c=!0)):!I&&A?(s.track({type:0,doc:A}),C=!0):I&&!A&&(s.track({type:1,doc:I}),C=!0,(h||d)&&(c=!0)),C&&(A?(a=a.add(A),o=x?o.add(f):o.delete(f)):(a=a.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),o=o.delete(f.key),s.track({type:1,doc:f})}return{su:a,au:s,bs:c,mutatedKeys:o}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const o=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort((f,p)=>function(A,R){const x=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Vt:C})}};return x(A)-x(R)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(s),r=r??!1;const c=t&&!r?this.lu():[],h=this.ru.size===0&&this.current&&!r?1:0,d=h!==this.nu;return this.nu=h,a.length!==0||d?{snapshot:new ln(this.query,e.su,o,a,e.mutatedKeys,h===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),hu:c}:{hu:c}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Qa,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(t=>this.tu=this.tu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.tu=this.tu.delete(t)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=z(),this.su.forEach(s=>{this.Pu(s.key)&&(this.ru=this.ru.add(s.key))});const t=[];return e.forEach(s=>{this.ru.has(s)||t.push(new Fc(s))}),this.ru.forEach(s=>{e.has(s)||t.push(new qc(s))}),t}Tu(e){this.tu=e.ks,this.ru=z();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return ln.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const ji="SyncEngine";class ip{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class op{constructor(e){this.key=e,this.Eu=!1}}class ap{constructor(e,t,s,r,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new Mt(c=>sc(c),rr),this.Vu=new Map,this.du=new Set,this.mu=new ne(M.comparator),this.fu=new Map,this.gu=new ki,this.pu={},this.yu=new Map,this.wu=yt.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function lp(n,e,t=!0){const s=Gc(n);let r;const o=s.Au.get(e);return o?(s.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.Iu()):r=await $c(s,e,t,!0),r}async function cp(n,e){const t=Gc(n);await $c(t,e,!0,!1)}async function $c(n,e,t,s){const r=await Am(n.localStore,Ge(e)),o=r.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let c;return s&&(c=await up(n,e,o,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Dc(n.remoteStore,r),c}async function up(n,e,t,s,r){n.bu=(p,I,A)=>async function(x,C,L,$){let H=C.view._u(L);H.bs&&(H=await za(x.localStore,C.query,!1).then(({documents:E})=>C.view._u(E,H)));const me=$&&$.targetChanges.get(C.targetId),se=$&&$.targetMismatches.get(C.targetId)!=null,te=C.view.applyChanges(H,x.isPrimaryClient,me,se);return Za(x,C.targetId,te.hu),te.snapshot}(n,p,I,A);const o=await za(n.localStore,e,!0),a=new rp(e,o.ks),c=a._u(o.documents),h=ts.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),d=a.applyChanges(c,n.isPrimaryClient,h);Za(n,t,d.hu);const f=new ip(e,t,a);return n.Au.set(e,f),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),d.snapshot}async function hp(n,e,t){const s=F(n),r=s.Au.get(e),o=s.Vu.get(r.targetId);if(o.length>1)return s.Vu.set(r.targetId,o.filter(a=>!rr(a,e))),void s.Au.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await di(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Oi(s.remoteStore,r.targetId),gi(s,r.targetId)}).catch(hn)):(gi(s,r.targetId),await di(s.localStore,r.targetId,!0))}async function dp(n,e){const t=F(n),s=t.Au.get(e),r=t.Vu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Oi(t.remoteStore,s.targetId))}async function fp(n,e,t){const s=Ep(n);try{const r=await function(a,c){const h=F(a),d=ee.now(),f=c.reduce((A,R)=>A.add(R.key),z());let p,I;return h.persistence.runTransaction("Locally write mutations","readwrite",A=>{let R=tt(),x=z();return h.xs.getEntries(A,f).next(C=>{R=C,R.forEach((L,$)=>{$.isValidDocument()||(x=x.add(L))})}).next(()=>h.localDocuments.getOverlayedDocuments(A,R)).next(C=>{p=C;const L=[];for(const $ of c){const H=If($,p.get($.key).overlayedDocument);H!=null&&L.push(new Ot($.key,H,Kl(H.value.mapValue),qe.exists(!0)))}return h.mutationQueue.addMutationBatch(A,d,L,c)}).next(C=>{I=C;const L=C.applyToLocalDocumentSet(p,x);return h.documentOverlayCache.saveOverlays(A,C.batchId,L)})}).then(()=>({batchId:I.batchId,changes:oc(p)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,c,h){let d=a.pu[a.currentUser.toKey()];d||(d=new ne(U)),d=d.insert(c,h),a.pu[a.currentUser.toKey()]=d}(s,r.batchId,t),await ss(s,r.changes),await ur(s.remoteStore)}catch(r){const o=Ui(r,"Failed to persist write");t.reject(o)}}async function Bc(n,e){const t=F(n);try{const s=await bm(t.localStore,e);e.targetChanges.forEach((r,o)=>{const a=t.fu.get(o);a&&(W(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.Eu=!0:r.modifiedDocuments.size>0?W(a.Eu,14607):r.removedDocuments.size>0&&(W(a.Eu,42227),a.Eu=!1))}),await ss(t,s,e)}catch(s){await hn(s)}}function Xa(n,e,t){const s=F(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Au.forEach((o,a)=>{const c=a.view.Oa(e);c.snapshot&&r.push(c.snapshot)}),function(a,c){const h=F(a);h.onlineState=c;let d=!1;h.queries.forEach((f,p)=>{for(const I of p.va)I.Oa(c)&&(d=!0)}),d&&zi(h)}(s.eventManager,e),r.length&&s.Ru.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function mp(n,e,t){const s=F(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.fu.get(e),o=r&&r.key;if(o){let a=new ne(M.comparator);a=a.insert(o,Ie.newNoDocument(o,q.min()));const c=z().add(o),h=new es(q.min(),new Map,new ne(U),a,c);await Bc(s,h),s.mu=s.mu.remove(o),s.fu.delete(e),Gi(s)}else await di(s.localStore,e,!1).then(()=>gi(s,e,t)).catch(hn)}async function pp(n,e){const t=F(n),s=e.batch.batchId;try{const r=await wm(t.localStore,e);zc(t,s,null),Uc(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ss(t,r)}catch(r){await hn(r)}}async function gp(n,e,t){const s=F(n);try{const r=await function(a,c){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return h.mutationQueue.lookupMutationBatch(d,c).next(p=>(W(p!==null,37113),f=p.keys(),h.mutationQueue.removeMutationBatch(d,p))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>h.localDocuments.getDocuments(d,f))})}(s.localStore,e);zc(s,e,t),Uc(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ss(s,r)}catch(r){await hn(r)}}function Uc(n,e){(n.yu.get(e)||[]).forEach(t=>{t.resolve()}),n.yu.delete(e)}function zc(n,e,t){const s=F(n);let r=s.pu[s.currentUser.toKey()];if(r){const o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),s.pu[s.currentUser.toKey()]=r}}function gi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Vu.get(e))n.Au.delete(s),t&&n.Ru.Du(s,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach(s=>{n.gu.containsKey(s)||jc(n,s)})}function jc(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(Oi(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),Gi(n))}function Za(n,e,t){for(const s of t)s instanceof qc?(n.gu.addReference(s.key,e),yp(n,s)):s instanceof Fc?(k(ji,"Document no longer in limbo: "+s.key),n.gu.removeReference(s.key,e),n.gu.containsKey(s.key)||jc(n,s.key)):O(19791,{Cu:s})}function yp(n,e){const t=e.key,s=t.path.canonicalString();n.mu.get(t)||n.du.has(s)||(k(ji,"New document in limbo: "+t),n.du.add(s),Gi(n))}function Gi(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new M(X.fromString(e)),s=n.wu.next();n.fu.set(s,new op(t)),n.mu=n.mu.insert(t,s),Dc(n.remoteStore,new Xe(Ge(tc(t.path)),s,"TargetPurposeLimboResolution",tr.ce))}}async function ss(n,e,t){const s=F(n),r=[],o=[],a=[];s.Au.isEmpty()||(s.Au.forEach((c,h)=>{a.push(s.bu(h,e,t).then(d=>{var f;if((d||t)&&s.isPrimaryClient){const p=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:f.current;s.sharedClientState.updateQueryState(h.targetId,p?"current":"not-current")}if(d){r.push(d);const p=Li.Es(h.targetId,d);o.push(p)}}))}),await Promise.all(a),s.Ru.H_(r),await async function(h,d){const f=F(h);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(d,I=>V.forEach(I.Ts,A=>f.persistence.referenceDelegate.addReference(p,I.targetId,A)).next(()=>V.forEach(I.Is,A=>f.persistence.referenceDelegate.removeReference(p,I.targetId,A)))))}catch(p){if(!dn(p))throw p;k(Mi,"Failed to update sequence numbers: "+p)}for(const p of d){const I=p.targetId;if(!p.fromCache){const A=f.vs.get(I),R=A.snapshotVersion,x=A.withLastLimboFreeSnapshotVersion(R);f.vs=f.vs.insert(I,x)}}}(s.localStore,o))}async function vp(n,e){const t=F(n);if(!t.currentUser.isEqual(e)){k(ji,"User change. New user:",e.toKey());const s=await Cc(t.localStore,e);t.currentUser=e,function(o,a){o.yu.forEach(c=>{c.forEach(h=>{h.reject(new N(P.CANCELLED,a))})}),o.yu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ss(t,s.Ns)}}function _p(n,e){const t=F(n),s=t.fu.get(e);if(s&&s.Eu)return z().add(s.key);{let r=z();const o=t.Vu.get(e);if(!o)return r;for(const a of o){const c=t.Au.get(a);r=r.unionWith(c.view.ou)}return r}}function Gc(n){const e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_p.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mp.bind(null,e),e.Ru.H_=tp.bind(null,e.eventManager),e.Ru.Du=np.bind(null,e.eventManager),e}function Ep(n){const e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gp.bind(null,e),e}class Js{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lr(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return Em(this.persistence,new ym,e.initialUser,this.serializer)}xu(e){return new Rc(Ni.Vi,this.serializer)}Mu(e){return new Rm}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Js.provider={build:()=>new Js};class wp extends Js{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){W(this.persistence.referenceDelegate instanceof Qs,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new nm(s,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?Ve.withCacheSize(this.cacheSizeBytes):Ve.DEFAULT;return new Rc(s=>Qs.Vi(s,t),this.serializer)}}class yi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xa(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=vp.bind(null,this.syncEngine),await Ym(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Xm}()}createDatastore(e){const t=lr(e.databaseInfo.databaseId),s=Dm(e.databaseInfo);return Om(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,o,a,c){return new Fm(s,r,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Xa(this.syncEngine,t,0),function(){return Ha.v()?new Ha:new Cm}())}createSyncEngine(e,t){return function(r,o,a,c,h,d,f){const p=new ap(r,o,a,c,h,d);return f&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const o=F(r);k(Qe,"RemoteStore shutting down."),o.da.add(5),await ns(o),o.fa.shutdown(),o.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}yi.provider={build:()=>new yi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):et("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="FirestoreClient";class Tp{constructor(e,t,s,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Te.UNAUTHENTICATED,this.clientId=bi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(s,async a=>{k(_t,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(k(_t,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ui(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Gr(n,e){n.asyncQueue.verifyOperationInProgress(),k(_t,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Cc(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function el(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ip(n);k(_t,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Ka(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Ka(e.remoteStore,r)),n._onlineComponents=e}async function Ip(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k(_t,"Using user provided OfflineComponentProvider");try{await Gr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===P.FAILED_PRECONDITION||r.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;kt("Error using user provided cache. Falling back to memory cache: "+t),await Gr(n,new Js)}}else k(_t,"Using default OfflineComponentProvider"),await Gr(n,new wp(void 0));return n._offlineComponents}async function Hc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k(_t,"Using user provided OnlineComponentProvider"),await el(n,n._uninitializedComponentsProvider._online)):(k(_t,"Using default OnlineComponentProvider"),await el(n,new yi))),n._onlineComponents}function Ap(n){return Hc(n).then(e=>e.syncEngine)}async function Sp(n){const e=await Hc(n),t=e.eventManager;return t.onListen=lp.bind(null,e.syncEngine),t.onUnlisten=hp.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=cp.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=dp.bind(null,e.syncEngine),t}function Rp(n,e,t={}){const s=new ht;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const f=new bp({next:I=>{f.Ku(),a.enqueueAndForget(()=>ep(o,p)),I.fromCache&&h.source==="server"?d.reject(new N(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),p=new sp(c,f,{includeMetadataChanges:!0,Wa:!0});return Zm(o,p)}(await Sp(n),n.asyncQueue,e,t,s)),s.promise}function Cp(n,e){const t=new ht;return n.asyncQueue.enqueueAndForget(async()=>fp(await Ap(n),e,t)),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="ComponentProvider",tl=new Map;function Vp(n,e,t,s,r){return new Gd(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Wc(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="firestore.googleapis.com",nl=!0;class sl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Kc,this.ssl=nl}else this.host=e.host,this.ssl=e.ssl??nl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Sc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<em)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Nd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wc(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hr{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Id;switch(s.type){case"firstParty":return new Cd(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=tl.get(t);s&&(k(Pp,"Removing Datastore"),tl.delete(t),s.terminate())}(this),Promise.resolve()}}function xp(n,e,t,s={}){var d;n=Nt(n,hr);const r=bl(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&lh(`https://${c}`),o.host!==Kc&&o.host!==c&&kt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:c,ssl:r,emulatorOptions:s};if(!Fs(h,a)&&(n._setSettings(h),s.mockUserToken)){let f,p;if(typeof s.mockUserToken=="string")f=s.mockUserToken,p=Te.MOCK_USER;else{f=Zu(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Te(I)}n._authCredentials=new Ad(new Ml(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ft(this.firestore,e,this._query)}}class de{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new de(this.firestore,e,this._key)}toJSON(){return{type:de._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Xn(t,de._jsonSchema))return new de(e,s||null,new M(X.fromString(t.referencePath)))}}de._jsonSchemaVersion="firestore/documentReference/1.0",de._jsonSchema={type:ue("string",de._jsonSchemaVersion),referencePath:ue("string")};class dt extends Ft{constructor(e,t,s){super(e,t,tc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new de(this.firestore,null,new M(e))}withConverter(e){return new dt(this.firestore,e,this._path)}}function Me(n,e,...t){if(n=sn(n),Ol("collection","path",e),n instanceof hr){const s=X.fromString(e,...t);return ga(s),new dt(n,null,s)}{if(!(n instanceof de||n instanceof dt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(X.fromString(e,...t));return ga(s),new dt(n.firestore,null,s)}}function ye(n,e,...t){if(n=sn(n),arguments.length===1&&(e=bi.newId()),Ol("doc","path",e),n instanceof hr){const s=X.fromString(e,...t);return pa(s),new de(n,null,new M(s))}{if(!(n instanceof de||n instanceof dt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(X.fromString(e,...t));return pa(s),new de(n.firestore,n instanceof dt?n.converter:null,new M(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="AsyncQueue";class il{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Vc(this,"async_queue_retry"),this.lc=()=>{const s=jr();s&&k(rl,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.hc=e;const t=jr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=jr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const t=new ht;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!dn(e))throw e;k(rl,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const t=this.hc.then(()=>(this.ac=!0,e().catch(s=>{throw this._c=s,this.ac=!1,et("INTERNAL UNHANDLED ERROR: ",ol(s)),s}).then(s=>(this.ac=!1,s))));return this.hc=t,t}enqueueAfterDelay(e,t,s){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const r=Bi.createAndSchedule(this,e,t,s,o=>this.Ec(o));return this.oc.push(r),r}Pc(){this._c&&O(47125,{Rc:ol(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function ol(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class rs extends hr{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new il,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new il(e),this._firestoreClient=void 0,await e}}}function Dp(n,e){const t=typeof n=="object"?n:ud(),s=typeof n=="string"?n:zs,r=id(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const o=Ju("firestore");o&&xp(r,...o)}return r}function Qc(n){if(n._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kp(n),n._firestoreClient}function kp(n){var s,r,o,a;const e=n._freezeSettings(),t=Vp(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Tp(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ne(Ee.fromBase64String(e))}catch(t){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ne(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ne._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xn(e,Ne._jsonSchema))return Ne.fromBase64String(e.bytes)}}Ne._jsonSchemaVersion="firestore/bytes/1.0",Ne._jsonSchema={type:ue("string",Ne._jsonSchemaVersion),bytes:ue("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return U(this._lat,e._lat)||U(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:We._jsonSchemaVersion}}static fromJSON(e){if(Xn(e,We._jsonSchema))return new We(e.latitude,e.longitude)}}We._jsonSchemaVersion="firestore/geoPoint/1.0",We._jsonSchema={type:ue("string",We._jsonSchemaVersion),latitude:ue("number"),longitude:ue("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==r[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Fe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xn(e,Fe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Fe(e.vectorValues);throw new N(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Fe._jsonSchemaVersion="firestore/vectorValue/1.0",Fe._jsonSchema={type:ue("string",Fe._jsonSchemaVersion),vectorValues:ue("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=/^__.*__$/;class Lp{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ot(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zn(e,this.data,t,this.fieldTransforms)}}function Xc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{dataSource:n})}}class Hi{constructor(e,t,s,r,o,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,o===void 0&&this.fc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Hi({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.wc(e),s}Sc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.fc(),s}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Xs(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Xc(this.dataSource)&&Np.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class Mp{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||lr(e)}V(e,t,s,r=!1){return new Hi({dataSource:e,methodName:t,targetDoc:s,path:_e.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wi(n){const e=n._freezeSettings(),t=lr(n._databaseId);return new Mp(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Zc(n,e,t,s,r,o={}){const a=n.V(o.merge||o.mergeFields?2:0,e,t,r);nu("Data must be an object, but it was:",a,s);const c=eu(s,a);let h,d;if(o.merge)h=new Oe(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const f=[];for(const p of o.mergeFields){const I=dr(e,p,t);if(!a.contains(I))throw new N(P.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);$p(f,I)||f.push(I)}h=new Oe(f),d=a.fieldTransforms.filter(p=>h.covers(p.field))}else h=null,d=a.fieldTransforms;return new Lp(new ke(c),h,d)}function Op(n,e,t,s=!1){return Ki(t,n.V(s?4:3,e))}function Ki(n,e){if(tu(n=sn(n)))return nu("Unsupported field value:",e,n),eu(n,e);if(n instanceof Jc)return function(s,r){if(!Xc(r.dataSource))throw r.Dc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Dc(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(r);o&&r.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(s,r){const o=[];let a=0;for(const c of s){let h=Ki(c,r.bc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(s,r){if((s=sn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return vf(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=ee.fromDate(s);return{timestampValue:Ks(r.serializer,o)}}if(s instanceof ee){const o=new ee(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ks(r.serializer,o)}}if(s instanceof We)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ne)return{bytesValue:vc(r.serializer,s._byteString)};if(s instanceof de){const o=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(o))throw r.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Di(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Fe)return function(a,c){const h=a instanceof Fe?a.toArray():a;return{mapValue:{fields:{[Hl]:{stringValue:Wl},[js]:{arrayValue:{values:h.map(f=>{if(typeof f!="number")throw c.Dc("VectorValues must only contain numeric values.");return Ci(c.serializer,f)})}}}}}}(s,r);if(Ac(s))return s._toProto(r.serializer);throw r.Dc(`Unsupported field value: ${er(s)}`)}(n,e)}function eu(n,e){const t={};return $l(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lt(n,(s,r)=>{const o=Ki(r,e.yc(s));o!=null&&(t[s]=o)}),{mapValue:{fields:t}}}function tu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ee||n instanceof We||n instanceof Ne||n instanceof de||n instanceof Jc||n instanceof Fe||Ac(n))}function nu(n,e,t){if(!tu(t)||!ql(t)){const s=er(t);throw s==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+s)}}function dr(n,e,t){if((e=sn(e))instanceof Yc)return e._internalPath;if(typeof e=="string")return Fp(n,e);throw Xs("Field path arguments must be of type string or ",n,!1,void 0,t)}const qp=new RegExp("[~\\*/\\[\\]]");function Fp(n,e,t){if(e.search(qp)>=0)throw Xs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Yc(...e.split("."))._internalPath}catch{throw Xs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xs(n,e,t,s,r){const o=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${s}`),a&&(h+=` in document ${r}`),h+=")"),new N(P.INVALID_ARGUMENT,c+n+h)}function $p(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{convertValue(e,t="none"){switch(gt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw O(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Lt(e,(r,o)=>{s[r]=this.convertValue(o,t)}),s}convertVectorValue(e){var s,r,o;const t=(o=(r=(s=e.fields)==null?void 0:s[js].arrayValue)==null?void 0:r.values)==null?void 0:o.map(a=>oe(a.doubleValue));return new Fe(t)}convertGeoPoint(e){return new We(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=sr(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(jn(e));default:return null}}convertTimestamp(e){const t=mt(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=X.fromString(e);W(Ic(s),9688,{name:e});const r=new Gn(s.get(1),s.get(3)),o=new M(s.popFirst(5));return r.isEqual(t)||et(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up extends Bp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ne(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new de(this.firestore,null,t)}}const al="@firebase/firestore",ll="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t,s,r,o){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new de(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(dr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class zp extends su{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qi{}class ru extends Qi{}function Gp(n,e,...t){let s=[];e instanceof Qi&&s.push(e),s=s.concat(t),function(o){const a=o.filter(h=>h instanceof Ji).length,c=o.filter(h=>h instanceof Yi).length;if(a>1||a>0&&c>0)throw new N(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class Yi extends ru{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Yi(e,t,s)}_apply(e){const t=this._parse(e);return iu(e._query,t),new Ft(e.firestore,e.converter,oi(e._query,t))}_parse(e){const t=Wi(e.firestore);return function(o,a,c,h,d,f,p){let I;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new N(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ul(p,f);const R=[];for(const x of p)R.push(cl(h,o,x));I={arrayValue:{values:R}}}else I=cl(h,o,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ul(p,f),I=Op(c,a,p,f==="in"||f==="not-in");return ce.create(d,f,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Ji extends Qi{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ji(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Be.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,o){let a=r;const c=o.getFlattenedFilters();for(const h of c)iu(a,h),a=oi(a,h)}(e._query,t),new Ft(e.firestore,e.converter,oi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xi extends ru{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Xi(e,t)}_apply(e){const t=function(r,o,a){if(r.startAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Wn(o,a)}(e._query,this._field,this._direction);return new Ft(e.firestore,e.converter,uf(e._query,t))}}function Hp(n,e="asc"){const t=e,s=dr("orderBy",n);return Xi._create(s,t)}function cl(n,e,t){if(typeof(t=sn(t))=="string"){if(t==="")throw new N(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nc(e)&&t.indexOf("/")!==-1)throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(X.fromString(t));if(!M.isDocumentKey(s))throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ia(n,new M(s))}if(t instanceof de)return Ia(n,t._key);throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${er(t)}.`)}function ul(n,e){if(!Array.isArray(n)||n.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iu(n,e){const t=function(r,o){for(const a of r)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function ou(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class As{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class en extends su{constructor(e,t,s,r,o,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ns(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(dr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=en._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}en._jsonSchemaVersion="firestore/documentSnapshot/1.0",en._jsonSchema={type:ue("string",en._jsonSchemaVersion),bundleSource:ue("string","DocumentSnapshot"),bundleName:ue("string"),bundle:ue("string")};class Ns extends en{data(e={}){return super.data(e)}}class tn{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new As(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Ns(this._firestore,this._userDataWriter,s.key,s,new As(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(c=>{const h=new Ns(r._firestore,r._userDataWriter,c.doc.key,c.doc,new As(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Ns(r._firestore,r._userDataWriter,c.doc.key,c.doc,new As(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Wp(c.type),doc:h,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=tn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),r.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Wp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn._jsonSchemaVersion="firestore/querySnapshot/1.0",tn._jsonSchema={type:ue("string",tn._jsonSchemaVersion),bundleSource:ue("string","QuerySnapshot"),bundleName:ue("string"),bundle:ue("string")};function Je(n){n=Nt(n,Ft);const e=Nt(n.firestore,rs),t=Qc(e),s=new Up(e);return jp(n._query),Rp(t,n._query).then(r=>new tn(e,s,n,r))}function $e(n,e,t){n=Nt(n,de);const s=Nt(n.firestore,rs),r=ou(n.converter,e,t),o=Wi(s);return Zi(s,[Zc(o,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,qe.none())])}function nn(n){return Zi(Nt(n.firestore,rs),[new Pi(n._key,qe.none())])}function au(n,e){const t=Nt(n.firestore,rs),s=ye(n),r=ou(n.converter,e),o=Wi(n.firestore);return Zi(t,[Zc(o,"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,qe.exists(!1))]).then(()=>s)}function Zi(n,e){const t=Qc(n);return Cp(t,e)}(function(e,t=!0){Td(cd),Bs(new Bn("firestore",(s,{instanceIdentifier:r,options:o})=>{const a=s.getProvider("app").getImmediate(),c=new rs(new Sd(s.getProvider("auth-internal")),new Pd(a,s.getProvider("app-check-internal")),Hd(a,r),a);return o={useFetchStreams:t,...o},c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Jt(al,ll,e),Jt(al,ll,"esm2020")})();const Kp={apiKey:"AIzaSyA9Ql9xdzxVYpEwlMt89shfz1C1tj5VPcg",authDomain:"young-engineers-c8a13.firebaseapp.com",projectId:"young-engineers-c8a13",storageBucket:"young-engineers-c8a13.firebasestorage.app",messagingSenderId:"767781023870",appId:"1:767781023870:web:57ff58253caa0bce90282f",measurementId:"G-VT2VRNNP5V"},Qp=Sl(Kp),Q=Dp(Qp),kn=[{title:"Motorized Seesaw",program:"Bricks Challenge",age:"Ages 7-10",topic:"Gears & Motion",desc:"An interactive seesaw demonstrating reciprocal motion, torque, and structural load balancing. Students learn how gear reduction allows a small motor to lift heavier loads at a slower speed.",concept:"Gear ratios, Speed vs. Torque reduction",difficulty:"Beginner to Intermediate",img:"assets/model_1.jpg",badgeColor:"red"},{title:"Mechanical Pulley Swing",program:"Galileo Technic",age:"Ages 7-10",topic:"Belts & Pulley",desc:"An advanced playground swing build demonstrating transmission of rotary energy via belts and pulleys. Students analyze friction, belt slippage, and centripetal forces as the swing oscillates.",concept:"Pulley systems, Friction & Tension",difficulty:"Intermediate",img:"assets/model_2.jpg",badgeColor:"blue"},{title:"Walking Dino Robot",program:"Robo Toys",age:"Ages 10-14",topic:"Worm Gears & Linkages",desc:"A bi-pedal walking dinosaur robot utilizing worm gear mechanisms and leg linkages to turn rotational motor speed into step movements. Students learn about walking patterns and mechanical logic.",concept:"Worm gears, Multi-joint Linkages",difficulty:"Advanced",img:"assets/model_3.jpg",badgeColor:"teal"},{title:"Spinning Drum Washer",program:"Algo Play",age:"Ages 4-6",topic:"Rotary Transmission",desc:"A fun motorized washing machine drum model. Early builders learn mechanical sequencing, frame support structure, and basic motor connectivity, ensuring physical understanding of centrifugal force.",concept:"Rotary motion, Frame load support",difficulty:"Early Starter (Ages 4-6)",img:"assets/model_4.jpg",badgeColor:"yellow"},{title:"Motorized Conveyor Belt",program:"Bricks Challenge",age:"Ages 7-10",topic:"Gears & Conveyors",desc:"A miniature sorting conveyor belt showing how gears translate rotational motion into linear conveyor travel. Students study speed regulation, belt tension, and cargo friction.",concept:"Rotational-to-linear conversion, Cargo friction",difficulty:"Intermediate",img:"assets/model_5.jpg",badgeColor:"red"},{title:"Fire Truck Character Robot",program:"Algo Play",age:"Ages 4-6",topic:"Basic Coding & Vehicles",desc:"A cheerful fire truck chassis that teaches young kids how wheels translate motor power into locomotion. Students practice basic direction controls and mechanical frame support.",concept:"Axles, Wheel locomotion, Vehicle frame support",difficulty:"Early Starter (Ages 4-6)",img:"assets/model_6.jpg",badgeColor:"yellow"},{title:"Mechanical Ferris Wheel",program:"Galileo Technic",age:"Ages 7-10",topic:"Linkages & Orbit",desc:"An elaborate orbiting ride linkage illustrating circular motion and dual-axis rotation. Students construct gear systems to spin the structure while maintaining carriage vertical alignment.",concept:"Epicyclic gearing, Structural load balancing",difficulty:"Advanced",img:"assets/model_7.jpg",badgeColor:"blue"},{title:"Basketball Shooter Robot",program:"Robo Toys",age:"Ages 10-14",topic:"Sensors & Actuators",desc:"An interactive robot that detects objects and launches a small ball into a basket hoop. Students code trigger mechanisms using ultrasonic sensors and mechanical lever arms.",concept:"Ultrasonic sensors, Lever arm velocity",difficulty:"Advanced",img:"assets/model_8.jpg",badgeColor:"teal"}],Yp=[{id:"class-1",title:"Bricks Challenge: Motorized Machines",provider_id:"ep-1",program_id:"prog-bricks",program:"Bricks Challenge",school_year:"2026-2027",season:"Fall",start_date:"2026-09-03",end_date:"2026-11-05",number_of_sessions:10,ageGroup:"7-10",ageLabel:"2nd to 4th Grade",location:"Room 12",dayOfWeek:"Thursdays",time:"4:00 PM - 5:15 PM",price:260,spotsTotal:16,spotsRemaining:14,accent:"red",description:"Introduces mechanical engineering concepts. Students build motorized models like wind turbines and cranes while learning about gear ratios and torque.",image:"assets/bricks_challenge.png"},{id:"class-2",title:"Galileo Technic: Kinematics & Speed",provider_id:"ep-1",program_id:"prog-galileo",program:"Galileo Technic",school_year:"2026-2027",season:"Fall",start_date:"2026-09-07",end_date:"2026-11-09",number_of_sessions:10,ageGroup:"7-10",ageLabel:"3rd to 5th Grade",location:"Library",dayOfWeek:"Mondays",time:"3:45 PM - 5:00 PM",price:280,spotsTotal:10,spotsRemaining:7,accent:"teal",description:"Explores complex transmissions, differential gearboxes, and speed reduction systems. Promotes critical thinking and analytical design.",image:"assets/galileo_technic.jpg"},{id:"class-3",title:"Algo Play: Creative Coding",provider_id:"ep-1",program_id:"prog-algo",program:"Algo Play",school_year:"2026-2027",season:"Fall",start_date:"2026-09-01",end_date:"2026-11-03",number_of_sessions:10,ageGroup:"4-6",ageLabel:"Pre-K to 1st Grade",location:"Kindergarten Room",dayOfWeek:"Tuesdays",time:"3:30 PM - 4:45 PM",price:240,spotsTotal:12,spotsRemaining:9,accent:"blue",description:"Young learners explore algorithmic thinking, sequencing, and basic problem-solving through tactile, screen-free Lego blocks.",image:"assets/algo_play.png"},{id:"class-4",title:"Robo Toys: Smart Coding & Sensors",provider_id:"ep-1",program_id:"prog-robo",program:"Robo Toys",school_year:"2026-2027",season:"Fall",start_date:"2026-09-02",end_date:"2026-11-04",number_of_sessions:10,ageGroup:"10-14",ageLabel:"5th to 8th Grade",location:"Science Lab",dayOfWeek:"Wednesdays",time:"4:15 PM - 5:30 PM",price:290,spotsTotal:12,spotsRemaining:12,accent:"yellow",description:"Advanced program combining brick building with dynamic sensor controls. Students code their models using drag-and-drop programming.",image:"assets/robo_toys.png"}],Jp=[{id:"enroll-1",classId:"class-3",classTitle:"Algo Play: Creative Coding",studentName:"Leo Carter",studentAge:5,school:"Lincoln Elementary",grade:"Kindergarten",parentName:"Sarah Carter",parentEmail:"sarah.c@example.com",parentPhone:"(408) 555-0192",notes:"Enjoys dinosaur models. Please assist with smaller pins."},{id:"enroll-2",classId:"class-2",classTitle:"Galileo Technic: Kinematics & Speed",studentName:"Emily Zhao",studentAge:9,school:"Union Elementary",grade:"4th Grade",parentName:"Ken Zhao",parentEmail:"ken.zhao@example.com",parentPhone:"(408) 555-0238",notes:"Has done some Scratch programming before."},{id:"enroll-3",classId:"class-2",classTitle:"Galileo Technic: Kinematics & Speed",studentName:"Aiden Martinez",studentAge:8,school:"Union Elementary",grade:"3rd Grade",parentName:"Sofia Martinez",parentEmail:"sofia.m@example.com",parentPhone:"(408) 555-0144",notes:""}];let Yn=[],Jn=[],Zs=[],Kt=[],Ls=[],Ms=[];const hl=[{id:"prog-bricks",name:"Bricks Challenge",ageRange:"Ages 7-10",accent:"red",image:"assets/lego_challenge.png",description:"Young learners explore algorithmic thinking, sequencing, and basic problem-solving through tactile, screen-free Lego blocks."},{id:"prog-galileo",name:"Galileo Technic",ageRange:"Ages 10-14",accent:"blue",image:"assets/big_builders.png",description:"Advanced mechanical engineering concepts and physics using advanced technical Lego parts."},{id:"prog-algo",name:"Algo Play",ageRange:"Ages 4-6",accent:"teal",image:"assets/algo_play.png",description:"Introduction to algorithmic thinking and tangible coding for our youngest engineers."},{id:"prog-robo",name:"Robo Toys",ageRange:"Ages 10-14",accent:"yellow",image:"assets/robo_toys.png",description:"Advanced program combining brick building with dynamic sensor controls using drag-and-drop programming."}],dl=[{id:"emp-1",name:"Alex Johnson",role:"instructor",email:"alex@example.com",phone:"(408) 555-0101",start_date:"2026-01-15",description:"Lead robotics instructor with 5 years of experience in STEM education.",created_at:new Date().toISOString()},{id:"emp-2",name:"Mia Patel",role:"helper",email:"mia@example.com",phone:"(408) 555-0102",start_date:"2026-03-01",description:"Classroom helper studying engineering at SJSU.",created_at:new Date().toISOString()}],fl=[{id:"ep-1",name:"Lincoln Elementary",provider_type:"school",website:"https://lincoln.sjusd.org",address:"555 Lincoln Ave, San Jose, CA 95125",phone:"(408) 555-1000",contact_name:"Principal Smith",contact_email:"psmith@sjusd.org",contact_phone:"(408) 555-1001",description:"Public elementary school in the San Jose Unified School District.",created_at:new Date().toISOString()}];async function lu(){Yn=(await Je(Me(Q,"classes"))).docs.map(h=>h.data()),Yn.sort((h,d)=>h.id.localeCompare(d.id)),Jn=(await Je(Me(Q,"enrollments"))).docs.map(h=>h.data()),Jn.sort((h,d)=>d.id.localeCompare(h.id));const t=Gp(Me(Q,"inquiries"),Hp("timestamp","desc"));if(Zs=(await Je(t)).docs.map(h=>h.data()),Kt=(await Je(Me(Q,"programs"))).docs.map(h=>h.data()),Kt.length===0){Kt=[...hl];for(const h of hl)await $e(ye(Q,"programs",h.id),h)}if(Ls=(await Je(Me(Q,"education_providers"))).docs.map(h=>h.data()),Ls.length===0){Ls=[...fl];for(const h of fl)await $e(ye(Q,"education_providers",h.id),h)}if(Ms=(await Je(Me(Q,"employees"))).docs.map(h=>h.data()),Ms.length===0){Ms=[...dl];for(const h of dl)await $e(ye(Q,"employees",h.id),h)}const c=document.getElementById("footer-programs-list");c&&Kt.length>0&&(c.innerHTML=Kt.map(h=>`<li><a href="#/classes?filter=${h.ageRange.replace("Ages ","")}">${h.name} (${h.ageRange})</a></li>`).join(""))}function Hr(){return Kt}function Ct(){return Ls}function Qt(){return Ms}function Vt(){return Yn}async function cu(n){const e=Yn.filter(t=>!n.some(s=>s.id===t.id));Yn=n;for(const t of e)try{await nn(ye(Q,"classes",t.id))}catch(s){console.error(s)}for(const t of n)try{await $e(ye(Q,"classes",t.id),t)}catch(s){console.error(s)}}function eo(){return Jn}async function Xp(n){const e=Jn.filter(t=>!n.some(s=>s.id===t.id));Jn=n;for(const t of e)try{await nn(ye(Q,"enrollments",t.id))}catch(s){console.error(s)}for(const t of n)try{await $e(ye(Q,"enrollments",t.id),t)}catch(s){console.error(s)}}const Zp=[{id:"inquiry-1",name:"Principal Davies",email:"davies.p@union.k12.ca.us",phone:"(408) 555-4321",subject:"After-school robotics program request for Lincoln Elementary",message:"Hello, we are interested in starting a Bricks Challenge after-school club for our 2nd and 3rd graders on campus. Do you have availability for Friday afternoons in the Fall semester? We typically have 15-20 students interested.",status:"received",timestamp:"2026-05-20T10:30:00Z"},{id:"inquiry-2",name:"Marcus Aurelius",email:"marcus.a@example.com",phone:"(408) 555-8765",subject:"Birthday party package inquiry",message:"Hi! My son's 8th birthday is in July. Can you share the pricing details for hosting a motorized Lego party at our home in Southwest San Jose? There will be about 12 children.",status:"reviewed",timestamp:"2026-05-19T14:15:00Z"},{id:"inquiry-3",name:"Helena Smith",email:"hsmith@goldenagesenior.org",phone:"(408) 555-0987",subject:"Golden Age Wellness workshop request",message:"We would love to organize a trial session of your Golden Age motor-skills workshop for our residents. Could you send us the requirements for table space and electricity?",status:"responded",timestamp:"2026-05-18T09:00:00Z"}];function Yt(){return Zs}async function Os(n){const e=Zs.filter(t=>!n.some(s=>s.id===t.id));Zs=n;for(const t of e)try{await nn(ye(Q,"inquiries",t.id))}catch(s){console.error(s)}for(const t of n)try{await $e(ye(Q,"inquiries",t.id),t)}catch(s){console.error(s)}}async function eg(){const n=document.getElementById("app-viewport");n&&(n.innerHTML=`
      <div class="loader-container" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 400px; gap: 1.5rem;">
        <div class="loader-brick">
          <div class="loader-stud loader-stud-1"></div>
          <div class="loader-stud loader-stud-2"></div>
          <div class="loader-stud loader-stud-3"></div>
          <div class="loader-stud loader-stud-4"></div>
        </div>
        <p style="font-family: var(--font-family); color: var(--text-secondary); font-weight: 500; font-size: 1.1rem; letter-spacing: 0.5px;">Resetting Lego Database to defaults...</p>
      </div>
    `);try{const e=await Je(Me(Q,"classes"));for(const r of e.docs)await nn(ye(Q,"classes",r.id));const t=await Je(Me(Q,"enrollments"));for(const r of t.docs)await nn(ye(Q,"enrollments",r.id));const s=await Je(Me(Q,"inquiries"));for(const r of s.docs)await nn(ye(Q,"inquiries",r.id));for(const r of Yp)await $e(ye(Q,"classes",r.id),r);for(const r of Jp)await $e(ye(Q,"enrollments",r.id),r);for(const r of Zp)await $e(ye(Q,"inquiries",r.id),r);alert("Database successfully reset to defaults!"),await lu()}catch(e){console.error("Error resetting database:",e),alert("Error resetting database. Please check console for details.")}window.location.reload()}let to=sessionStorage.getItem("ye_admin_auth")==="true";function uu(){const n=window.location.hash||"#/home",e=document.getElementById("nav-links");e.classList.contains("active")&&e.classList.remove("active");const t=n.split("?"),s=t[0],r=t[1]||"",o={};r&&r.split("&").forEach(c=>{const[h,d]=c.split("=");o[decodeURIComponent(h)]=decodeURIComponent(d||"")}),document.querySelectorAll(".nav-item").forEach(c=>{const h=c.getAttribute("data-path");s.includes(h)?c.classList.add("active"):c.classList.remove("active")});const a=document.getElementById("app-viewport");a.innerHTML="",s==="#/home"?tg(a):s==="#/about"?ag(a):s==="#/classes"?ng(a,o):s==="#/faq"?lg(a):s==="#/admin"?hu(a):s==="#/enroll"?rg(a,o):window.location.hash="#/home",window.scrollTo(0,0)}document.getElementById("menu-toggle").addEventListener("click",()=>{document.getElementById("nav-links").classList.toggle("active")});document.getElementById("nav-logo").addEventListener("click",()=>{window.location.hash="#/home"});window.addEventListener("hashchange",uu);window.addEventListener("DOMContentLoaded",async()=>{const n=document.getElementById("app-viewport");n&&(n.innerHTML=`
      <div class="loader-container" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 400px; gap: 1.5rem;">
        <div class="loader-brick">
          <div class="loader-stud loader-stud-1"></div>
          <div class="loader-stud loader-stud-2"></div>
          <div class="loader-stud loader-stud-3"></div>
          <div class="loader-stud loader-stud-4"></div>
        </div>
        <p style="font-family: var(--font-family); color: var(--text-secondary); font-weight: 500; font-size: 1.1rem; letter-spacing: 0.5px;">Assembling Lego Database...</p>
      </div>
    `);try{await lu()}catch(e){console.error("Error syncing from Firestore:",e)}uu()});function tg(n){n.innerHTML=`
    <div class="page-view">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            <span>Now Enrolling for Summer Camps & Fall 2026</span>
          </div>
          <h1 class="hero-title">Building Tomorrow's <br><span class="color">Engineers & Creators</span></h1>
          <p class="hero-desc">Interactive, hands-on Lego Robotics classes that transform complex engineering and science concepts into fun, playable experiments for kids ages 4 to 14.</p>
          <div class="hero-actions">
            <a href="#/classes" class="btn btn-primary">Explore Classes <i class="fa-solid fa-arrow-right"></i></a>
            <a href="#/faq" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div class="hero-media">
          <div class="hero-media-wrapper">
            <img src="assets/lego_robotics_banner.png" alt="Lego Robotics Robot Concept">
          </div>
          <!-- Floating glass card -->
          <div class="glass-panel hero-floating-card">
            <div class="floating-icon"><i class="fa-solid fa-gears" style="color: var(--lego-teal);"></i></div>
            <div class="floating-info">
              <h4>Lincoln Elementary</h4>
              <p>Next class starts Tuesday</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section (Bento Box style) -->
      <section class="stats-container">
        <div class="glass-panel stat-card blue">
          <div class="stat-number">30k+</div>
          <div class="stat-label">Happy Students Globally</div>
        </div>
        <div class="glass-panel stat-card red">
          <div class="stat-number">15+</div>
          <div class="stat-label">Local Schools Served</div>
        </div>
        <div class="glass-panel stat-card yellow">
          <div class="stat-number">120+</div>
          <div class="stat-label">Robotics Models Built</div>
        </div>
        <div class="glass-panel stat-card teal">
          <div class="stat-number">4.9★</div>
          <div class="stat-label">Parent Satisfaction Rating</div>
        </div>
      </section>

      <!-- Program Overview -->
      <section class="programs-section">
        <div class="section-header">
          <span class="section-tag">Learning Pathways</span>
          <h2 class="section-title">Designed for Every Age & Stage</h2>
          <p class="section-subtitle">We grow with your child. Our multi-stage programs build structural concepts, mechanics, block programming, and mechanical theory.</p>
        </div>
        
        <div class="programs-grid">
          <!-- Program 1: Bricks Challenge -->
          <div class="glass-panel program-card red">
            <div class="program-img-wrapper">
              <img src="assets/bricks_challenge.png" alt="Bricks Challenge Program Logo">
            </div>
            <div class="program-content">
              <span class="program-age">Ages 7 - 10</span>
              <h3>Bricks Challenge</h3>
              <p>Introduces mechanics, classical physics, and structural design using LEGO® building bricks. Students construct motorized machinery and analyze gear ratios.</p>
              <a href="#/classes?filter=7-10" class="btn btn-secondary" style="margin-top: 1rem;">View Classes</a>
            </div>
          </div>

          <!-- Program 2: Galileo Technic -->
          <div class="glass-panel program-card teal">
            <div class="program-img-wrapper">
              <img src="assets/galileo_technic.jpg" alt="Galileo Technic Program Logo">
            </div>
            <div class="program-content">
              <span class="program-age">Ages 7 - 10</span>
              <h3>Galileo Technic</h3>
              <p>Explores advanced machinery, kinematics, double gearing, differential gearboxes, and automated mechanics. Focuses on real-world industrial physics.</p>
              <a href="#/classes?filter=7-10" class="btn btn-secondary" style="margin-top: 1rem;">View Classes</a>
            </div>
          </div>

          <!-- Program 3: Algo Play -->
          <div class="glass-panel program-card blue">
            <div class="program-img-wrapper">
              <img src="assets/algo_play.png" alt="Algo Play Program Logo">
            </div>
            <div class="program-content">
              <span class="program-age">Ages 4 - 6</span>
              <h3>Algo Play</h3>
              <p>Tactile and visual introduction to algorithmic thinking and code sequencing. Young children design and solve tasks using logic bricks.</p>
              <a href="#/classes?filter=4-6" class="btn btn-secondary" style="margin-top: 1rem;">View Classes</a>
            </div>
          </div>

          <!-- Program 4: Robo Toys -->
          <div class="glass-panel program-card yellow">
            <div class="program-img-wrapper">
              <img src="assets/robo_toys.png" alt="Robo Toys Program Logo">
            </div>
            <div class="program-content">
              <span class="program-age">Ages 10 - 14</span>
              <h3>Robo Toys</h3>
              <p>Combines robotics construction with intuitive block coding. Children program autonomous vehicles and mechanical systems using sensors.</p>
              <a href="#/classes?filter=10-14" class="btn btn-secondary" style="margin-top: 1rem;">View Classes</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Model Showcase Section -->
      <section style="max-width: 1200px; margin: 0 auto 6rem auto; padding: 0 1.5rem;">
        <div class="section-header" style="margin-bottom: 3rem; text-align: center;">
          <span class="section-tag" style="color: var(--lego-teal);">Hands-on Creations</span>
          <h2 class="section-title">What Our Students Build</h2>
          <p class="section-subtitle">Real motorized and programmed Lego models built by students in classes to learn engineering and logic concepts.</p>
        </div>

        <div class="glass-panel showcase-carousel-container" style="position: relative; overflow: hidden; padding: 2.5rem; display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem; align-items: center; min-height: 480px;">
          <!-- Left side: Image Showcase -->
          <div class="showcase-media-wrapper" style="position: relative; border-radius: 12px; overflow: hidden; aspect-ratio: 1; border: 1px solid var(--glass-border); background: #ffffff; box-shadow: var(--shadow-sm); display: flex; align-items: center; justify-content: center;">
            <img id="showcase-img" src="assets/model_1.jpg" alt="Model Build" style="max-width: 90%; max-height: 90%; object-fit: contain; transition: opacity 0.3s ease, transform 0.3s ease;">
            
            <button id="showcase-prev" class="showcase-btnprev" aria-label="Previous Model">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button id="showcase-next" class="showcase-btnnext" aria-label="Next Model">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          <!-- Right side: Content Details -->
          <div class="showcase-content-wrapper" style="display: flex; flex-direction: column; gap: 1.5rem; justify-content: center; height: 100%;">
            <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
              <span id="showcase-level" class="showcase-badge" style="background: rgba(255, 68, 68, 0.1); color: var(--lego-red); border: 1px solid rgba(255, 68, 68, 0.2);">Bricks Challenge</span>
              <span id="showcase-topic" class="showcase-badge" style="background: rgba(0, 180, 216, 0.1); color: var(--lego-blue); border: 1px solid rgba(0, 180, 216, 0.2);">Gears & Motion</span>
            </div>
            
            <h3 id="showcase-title" style="font-size: 2rem; color: var(--text-primary); font-family: var(--font-heading); font-weight: 800; line-height: 1.2; margin: 0;">Motorized Seesaw</h3>
            <p id="showcase-desc" style="color: var(--text-secondary); line-height: 1.7; font-size: 1.05rem; margin: 0;">An interactive seesaw demonstrating reciprocal motion, torque, and structural load balancing. Students learn how gear reduction allows a small motor to lift heavier loads at a slower speed.</p>
            
            <div style="border-top: 1px solid var(--glass-border); padding-top: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem; color: var(--text-secondary); font-size: 0.95rem;">
                <i class="fa-solid fa-gear" style="color: var(--lego-teal); width: 20px;"></i>
                <span id="showcase-concept"><strong>Core Engineering Concept:</strong> Gear ratios, Speed vs. Torque reduction</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.75rem; color: var(--text-secondary); font-size: 0.95rem;">
                <i class="fa-solid fa-microchip" style="color: var(--lego-red); width: 20px;"></i>
                <span id="showcase-tech"><strong>Difficulty Level:</strong> Beginner to Intermediate</span>
              </div>
            </div>

            <!-- Dots Indicator / Controls bottom -->
            <div style="display: flex; gap: 0.5rem; margin-top: 1rem;" id="showcase-dots">
              ${kn.map((A,R)=>`
                <span class="showcase-dot${R===0?" active":""}" data-index="${R}"></span>
              `).join("")}
            </div>
          </div>
        </div>
      </section>

      <!-- Target Audiences / Formats Overview -->
      <section class="programs-section" style="padding-top: 0;">
        <div class="section-header">
          <span class="section-tag">Programs for Everyone</span>
          <h2 class="section-title">STEM Opportunities for All Occasions</h2>
          <p class="section-subtitle">We bring the joy of engineering and hands-on coding to various formats, ages, and community spaces across Southwest San Jose.</p>
        </div>
        
        <div class="programs-grid">
          <!-- Audience 1: Summer & Winter Camps -->
          <div class="glass-panel program-card blue">
            <div class="program-img-wrapper">
              <img src="assets/camp.png" alt="Young Engineers Camps Logo">
            </div>
            <div class="program-content">
              <span class="program-age">All Ages</span>
              <h3>Summer & Winter Camps</h3>
              <p>Engaging full-day and half-day holiday programs filled with design challenges, collaborative building, and dynamic science experiments.</p>
              <a href="#/classes?search=Camp" class="btn btn-secondary" style="margin-top: 1rem;">View Camps</a>
            </div>
          </div>

          <!-- Audience 2: Birthday Parties -->
          <div class="glass-panel program-card red">
            <div class="program-img-wrapper">
              <img src="assets/birthday.png" alt="Birthday Parties Logo">
            </div>
            <div class="program-content">
              <span class="program-age">Custom Age Groups</span>
              <h3>Birthday Parties</h3>
              <p>Unforgettable motorized Lego-themed birthday celebrations. We bring the fun directly to you with customizable model builds and robotics activities.</p>
              <a href="#/faq" class="btn btn-secondary" style="margin-top: 1rem;">Inquire Party</a>
            </div>
          </div>

          <!-- Audience 3: School Build Up -->
          <div class="glass-panel program-card yellow">
            <div class="program-img-wrapper">
              <img src="assets/build_up.png" alt="Build Up Enrichment Logo">
            </div>
            <div class="program-content">
              <span class="program-age">School Programs</span>
              <h3>Build Up Enrichment</h3>
              <p>Partner workshops, specialized extracurricular modules, and school events designed to supplement STEM curricula with engineering labs.</p>
              <a href="#/classes" class="btn btn-secondary" style="margin-top: 1rem;">Explore Modules</a>
            </div>
          </div>

          <!-- Audience 4: Golden Age -->
          <div class="glass-panel program-card teal">
            <div class="program-img-wrapper">
              <img src="assets/golden_age.png" alt="Golden Age Program Logo">
            </div>
            <div class="program-content">
              <span class="program-age">Seniors (65+)</span>
              <h3>Golden Age Wellness</h3>
              <p>Unique cognitive fitness and motor-skills program utilizing motorized Lego models. Fosters community connection and mental dexterity.</p>
              <a href="#/faq" class="btn btn-secondary" style="margin-top: 1rem;">Learn More</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;let e=0;const t=document.getElementById("showcase-img"),s=document.getElementById("showcase-title"),r=document.getElementById("showcase-desc"),o=document.getElementById("showcase-concept"),a=document.getElementById("showcase-tech"),c=document.getElementById("showcase-level"),h=document.getElementById("showcase-topic"),d=document.getElementById("showcase-prev"),f=document.getElementById("showcase-next"),p=document.getElementById("showcase-dots");function I(A){e=A;const R=kn[A];t.style.opacity="0",t.style.transform="scale(0.95)",setTimeout(()=>{t.src=R.img,t.alt=R.title,s.textContent=R.title,r.textContent=R.desc,o.innerHTML=`<strong>Core Engineering Concept:</strong> ${R.concept}`,a.innerHTML=`<strong>Difficulty Level:</strong> ${R.difficulty}`,c.textContent=R.program,h.textContent=R.topic,c.className="showcase-badge",R.badgeColor==="red"?(c.style.background="rgba(255, 68, 68, 0.1)",c.style.color="var(--lego-red)",c.style.borderColor="rgba(255, 68, 68, 0.2)"):R.badgeColor==="blue"?(c.style.background="rgba(0, 180, 216, 0.1)",c.style.color="var(--lego-blue)",c.style.borderColor="rgba(0, 180, 216, 0.2)"):R.badgeColor==="teal"?(c.style.background="rgba(0, 200, 180, 0.1)",c.style.color="var(--lego-teal)",c.style.borderColor="rgba(0, 200, 180, 0.2)"):R.badgeColor==="yellow"&&(c.style.background="rgba(255, 193, 7, 0.1)",c.style.color="var(--lego-yellow)",c.style.borderColor="rgba(255, 193, 7, 0.2)"),p.querySelectorAll(".showcase-dot").forEach((C,L)=>{L===A?C.classList.add("active"):C.classList.remove("active")}),t.style.opacity="1",t.style.transform="scale(1)"},200)}if(d&&f&&p){d.addEventListener("click",()=>{let R=e-1;R<0&&(R=kn.length-1),I(R)}),f.addEventListener("click",()=>{let R=e+1;R>=kn.length&&(R=0),I(R)}),p.addEventListener("click",R=>{if(R.target.classList.contains("showcase-dot")){const x=parseInt(R.target.getAttribute("data-index"),10);I(x)}});const A=setInterval(()=>{if(!document.getElementById("showcase-img")){clearInterval(A);return}let R=e+1;R>=kn.length&&(R=0),I(R)},8e3)}}function ng(n,e){const t=Vt(),s=e.filter||"all",r=(e.search||"").toLowerCase(),o=t.filter(c=>{const h=s==="all"||c.ageGroup===s,d=!r||c.title.toLowerCase().includes(r)||c.location.toLowerCase().includes(r)||c.program.toLowerCase().includes(r);return h&&d});n.innerHTML=`
    <div class="page-view classes-container">
      <div class="section-header">
        <span class="section-tag">Robotics Directory</span>
        <h2 class="section-title">Explore Active Lego Classes</h2>
        <p class="section-subtitle">Enroll directly in after-school programs, weekend workshops, and summer camps hosted at local elementary schools.</p>
      </div>

      <!-- Interactive Filters & Search -->
      <div class="glass-panel filter-bar">
        <div class="filter-group">
          <button class="filter-btn ${s==="all"?"active":""}" data-val="all">All Ages</button>
          <button class="filter-btn ${s==="4-6"?"active":""}" data-val="4-6">Ages 4-6</button>
          <button class="filter-btn ${s==="7-10"?"active":""}" data-val="7-10">Ages 7-10</button>
          <button class="filter-btn ${s==="10-14"?"active":""}" data-val="10-14">Ages 10-14</button>
        </div>
        <div class="search-input-wrapper">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" class="search-input" id="class-search" placeholder="Search schools, programs..." value="${e.search||""}">
        </div>
      </div>

      <!-- Classes Grid -->
      <div class="classes-grid" id="classes-list-grid">
        ${sg(o)}
      </div>
    </div>
  `,n.querySelectorAll(".filter-btn").forEach(c=>{c.addEventListener("click",h=>{const d=h.target.getAttribute("data-val");e.filter=d,ml(e)})}),n.querySelector("#class-search").addEventListener("input",c=>{e.search=c.target.value,ml(e)})}function sg(n){return n.length===0?`
      <div class="no-classes-found glass-panel">
        <i class="fa-regular fa-calendar-times" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem; display: block;"></i>
        <h3>No classes matching your search or filters</h3>
        <p style="color: var(--text-secondary); margin-top: 0.5rem;">Try selecting "All Ages" or expanding your search term.</p>
      </div>
    `:n.map(e=>{let t=`${e.spotsRemaining} spots left`,s="";e.spotsRemaining===0?(t="Class Full",s="full"):e.spotsRemaining<=3&&(t=`Only ${e.spotsRemaining} left!`,s="limited");const o=Ct().find(d=>d.id===e.provider_id),a=o?o.name:"",c=a?`${a} - ${e.location}`:e.location;let h="";if(e.season&&e.start_date&&e.end_date){const d=new Date(e.start_date),f=new Date(e.end_date);d.setMinutes(d.getMinutes()+d.getTimezoneOffset()),f.setMinutes(f.getMinutes()+f.getTimezoneOffset());const p=d.toLocaleDateString(void 0,{month:"short",day:"numeric"}),I=f.toLocaleDateString(void 0,{month:"short",day:"numeric"});h=`<div class="class-detail-item">
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>${e.school_year||""} ${e.season} Term: ${p} - ${I} (${e.number_of_sessions||"?"} sessions)</span>
                      </div>`}return`
      <div class="glass-panel class-card ${e.accent}">
        <div class="class-card-accent"></div>
        <div class="class-card-body">
          <span class="class-tag">${e.program} (Ages ${e.ageGroup})</span>
          <h3 class="class-title">${e.title}</h3>
          <p class="class-desc">${e.description}</p>
          
          <div class="class-details">
            <div class="class-detail-item">
              <i class="fa-solid fa-location-dot"></i>
              <span>${c}</span>
            </div>
            ${h}
            <div class="class-detail-item">
              <i class="fa-solid fa-clock"></i>
              <span>${e.dayOfWeek}, ${e.time}</span>
            </div>
            <div class="class-detail-item">
              <i class="fa-solid fa-graduation-cap"></i>
              <span>Grade Level: ${e.ageLabel}</span>
            </div>
          </div>

          <div class="class-footer">
            <div class="class-price">
              <span class="amount">$${e.price}</span>
              <span class="lbl">Tuition (Full Term)</span>
            </div>
            <span class="class-spots ${s}">${t}</span>
          </div>

          ${e.spotsRemaining>0?`<a href="#/enroll?classId=${e.id}" class="btn btn-primary btn-enroll-card">Enroll Child <i class="fa-solid fa-user-plus"></i></a>`:'<button class="btn btn-secondary btn-enroll-card" disabled>Waiting List Only</button>'}
        </div>
      </div>
    `}).join("")}function ml(n){const e=[];n.filter&&n.filter!=="all"&&e.push(`filter=${n.filter}`),n.search&&e.push(`search=${encodeURIComponent(n.search)}`);const t=e.join("&");window.location.hash=`#/classes${t?"?"+t:""}`}let xt={currentStep:1,selectedClass:null,formData:{}};function rg(n,e){const t=Vt(),s=e.classId,r=t.find(o=>o.id===s);if(!r){n.innerHTML=`
      <div class="page-view enroll-container" style="text-align: center; padding: 6rem 2rem;">
        <i class="fa-solid fa-triangle-exclamation" style="font-size: 3rem; color: var(--lego-red); margin-bottom: 1rem;"></i>
        <h2>No Class Selected</h2>
        <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">To enroll, please choose a class from the Robotics Classes directory.</p>
        <a href="#/classes" class="btn btn-primary">Browse Classes <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    `;return}(!xt.selectedClass||xt.selectedClass.id!==r.id)&&(xt={currentStep:1,selectedClass:r,formData:{parentFirstName:"",parentLastName:"",parentEmail:"",parentPhone:"",studentFirstName:"",studentLastName:"",studentAge:"",studentSchool:r.location.split(",")[0],studentGrade:"",medicalNotes:"",cardNumber:"",cardExpiry:"",cardCvv:""}}),vi(n)}function vi(n){const e=xt,t=e.selectedClass;n.innerHTML=`
    <div class="page-view enroll-container">
      <div class="enroll-header">
        <h2>Secure Class Registration</h2>
        <p>Register your child for <strong>${t.title}</strong></p>
      </div>

      <!-- Step Progress Bar -->
      <div class="progress-steps">
        <div class="step-indicator ${e.currentStep===1?"active":""} ${e.currentStep>1?"completed":""}">
          <div class="step-number">${e.currentStep>1?'<i class="fa-solid fa-check"></i>':"1"}</div>
          <span class="step-label">Parent Details</span>
        </div>
        <div class="step-indicator ${e.currentStep===2?"active":""} ${e.currentStep>2?"completed":""}">
          <div class="step-number">${e.currentStep>2?'<i class="fa-solid fa-check"></i>':"2"}</div>
          <span class="step-label">Student Details</span>
        </div>
        <div class="step-indicator ${e.currentStep===3?"active":""}">
          <div class="step-number">3</div>
          <span class="step-label">Secure Checkout</span>
        </div>
      </div>

      <!-- Selected Class Summary Header -->
      <div class="selected-class-banner">
        <div class="selected-class-info">
          <h4>${t.title}</h4>
          <p><i class="fa-solid fa-school"></i> ${t.location} &nbsp;|&nbsp; <i class="fa-solid fa-calendar"></i> ${t.dayOfWeek}, ${t.time}</p>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 1.15rem; font-weight: 700; color: var(--lego-blue); font-family: var(--font-heading);">$${t.price}</span>
        </div>
      </div>

      <!-- Form Wizard Card -->
      <form class="glass-panel form-card" id="enrollment-wizard-form" novalidate>
        
        <!-- STEP 1: Parent Info -->
        <div class="form-step-content ${e.currentStep===1?"active":""}">
          <h3 class="form-step-title">Parent / Guardian Information</h3>
          <div class="form-grid">
            <div class="form-group">
              <label for="parentFirstName">First Name *</label>
              <input type="text" class="form-control" id="parentFirstName" value="${e.formData.parentFirstName}" required placeholder="John">
              <span class="field-error">First name is required</span>
            </div>
            <div class="form-group">
              <label for="parentLastName">Last Name *</label>
              <input type="text" class="form-control" id="parentLastName" value="${e.formData.parentLastName}" required placeholder="Doe">
              <span class="field-error">Last name is required</span>
            </div>
            <div class="form-group">
              <label for="parentEmail">Email Address *</label>
              <input type="email" class="form-control" id="parentEmail" value="${e.formData.parentEmail}" required placeholder="john.doe@example.com">
              <span class="field-error">Provide a valid email address</span>
            </div>
            <div class="form-group">
              <label for="parentPhone">Phone Number *</label>
              <input type="tel" class="form-control" id="parentPhone" value="${e.formData.parentPhone}" required placeholder="(408) 555-0199">
              <span class="field-error">Phone number is required</span>
            </div>
          </div>
        </div>

        <!-- STEP 2: Student Info -->
        <div class="form-step-content ${e.currentStep===2?"active":""}">
          <h3 class="form-step-title">Student Information</h3>
          <div class="form-grid">
            <div class="form-group">
              <label for="studentFirstName">Student First Name *</label>
              <input type="text" class="form-control" id="studentFirstName" value="${e.formData.studentFirstName}" required placeholder="Jane">
              <span class="field-error">Student first name is required</span>
            </div>
            <div class="form-group">
              <label for="studentLastName">Student Last Name *</label>
              <input type="text" class="form-control" id="studentLastName" value="${e.formData.studentLastName}" required placeholder="Doe">
              <span class="field-error">Student last name is required</span>
            </div>
            <div class="form-group">
              <label for="studentAge">Student Age *</label>
              <input type="number" class="form-control" id="studentAge" value="${e.formData.studentAge}" required min="4" max="15" placeholder="8">
              <span class="field-error">Age must be between 4 and 15</span>
            </div>
            <div class="form-group">
              <label for="studentGrade">Current Grade Level *</label>
              <select class="form-control" id="studentGrade" required>
                <option value="" disabled ${e.formData.studentGrade===""?"selected":""}>Select Grade</option>
                <option value="Pre-K" ${e.formData.studentGrade==="Pre-K"?"selected":""}>Pre-K</option>
                <option value="Kindergarten" ${e.formData.studentGrade==="Kindergarten"?"selected":""}>Kindergarten</option>
                <option value="1st Grade" ${e.formData.studentGrade==="1st Grade"?"selected":""}>1st Grade</option>
                <option value="2nd Grade" ${e.formData.studentGrade==="2nd Grade"?"selected":""}>2nd Grade</option>
                <option value="3rd Grade" ${e.formData.studentGrade==="3rd Grade"?"selected":""}>3rd Grade</option>
                <option value="4th Grade" ${e.formData.studentGrade==="4th Grade"?"selected":""}>4th Grade</option>
                <option value="5th Grade" ${e.formData.studentGrade==="5th Grade"?"selected":""}>5th Grade</option>
                <option value="6th-8th Grade" ${e.formData.studentGrade==="6th-8th Grade"?"selected":""}>6th-8th Grade</option>
              </select>
              <span class="field-error">Grade level is required</span>
            </div>
            <div class="form-group">
              <label for="studentSchool">School Name *</label>
              <input type="text" class="form-control" id="studentSchool" value="${e.formData.studentSchool}" required placeholder="Lincoln Elementary">
              <span class="field-error">School name is required</span>
            </div>
            <div class="form-group">
              <label for="medicalNotes">Allergies / Special Instructions</label>
              <input type="text" class="form-control" id="medicalNotes" value="${e.formData.medicalNotes}" placeholder="None or details...">
            </div>
          </div>
        </div>

        <!-- STEP 3: Simulated Checkout -->
        <div class="form-step-content ${e.currentStep===3?"active":""}">
          <h3 class="form-step-title">Secure Billing Checkout</h3>
          
          <div class="checkout-total">
            Total Term Tuition: <span>$${t.price}.00</span>
          </div>

          <div class="form-grid">
            <div class="form-group col-span-2">
              <div style="display:flex; justify-content: space-between; align-items:center;">
                <label for="cardNumber">Credit Card Number *</label>
                <div class="card-logo-icons">
                  <i class="fa-brands fa-cc-visa"></i>
                  <i class="fa-brands fa-cc-mastercard"></i>
                  <i class="fa-brands fa-cc-amex"></i>
                </div>
              </div>
              <input type="text" class="form-control" id="cardNumber" value="${e.formData.cardNumber}" required placeholder="4111 2222 3333 4444" pattern="^[0-9\\s]{13,19}$">
              <span class="field-error">Provide a valid card number</span>
            </div>
            
            <div class="form-group">
              <label for="cardExpiry">Expiration Date *</label>
              <input type="text" class="form-control" id="cardExpiry" value="${e.formData.cardExpiry}" required placeholder="MM/YY" pattern="^(0[1-9]|1[0-2])\\/?([0-9]{2})$">
              <span class="field-error">Provide MM/YY</span>
            </div>
            
            <div class="form-group">
              <label for="cardCvv">CVV/Security Code *</label>
              <input type="password" class="form-control" id="cardCvv" value="${e.formData.cardCvv}" required placeholder="3-4 digits" pattern="^[0-9]{3,4}$">
              <span class="field-error">Provide 3-4 digits CVV</span>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap: 0.5rem; margin-top: 1.5rem; font-size: 0.8rem; color: var(--text-secondary);">
            <i class="fa-solid fa-lock" style="color: var(--lego-teal);"></i>
            <span>256-bit SSL Encrypted transaction simulator. No real money will be charged.</span>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="form-actions">
          ${e.currentStep>1?'<button type="button" class="btn btn-secondary" id="wizard-back-btn"><i class="fa-solid fa-arrow-left"></i> Back</button>':"<div></div>"}
          
          ${e.currentStep<3?'<button type="button" class="btn btn-primary" id="wizard-next-btn">Continue <i class="fa-solid fa-arrow-right"></i></button>':'<button type="submit" class="btn btn-accent" id="wizard-submit-btn">Complete Enrollment <i class="fa-solid fa-check"></i></button>'}
        </div>
      </form>
    </div>
  `;const s=n.querySelector("#enrollment-wizard-form");n.querySelector("#wizard-next-btn")&&n.querySelector("#wizard-next-btn").addEventListener("click",()=>{pl(n,e.currentStep)&&(Wr(n,e.currentStep),e.currentStep+=1,vi(n))}),n.querySelector("#wizard-back-btn")&&n.querySelector("#wizard-back-btn").addEventListener("click",()=>{Wr(n,e.currentStep),e.currentStep-=1,vi(n)}),s.addEventListener("submit",async r=>{if(r.preventDefault(),pl(n,3)){Wr(n,3);const o=s.querySelector("#wizard-submit-btn");o&&(o.disabled=!0,o.innerHTML='Processing... <i class="fa-solid fa-spinner fa-spin"></i>'),await ig(n)}})}function Wr(n,e){const t=xt;e===1?(t.formData.parentFirstName=n.querySelector("#parentFirstName").value.trim(),t.formData.parentLastName=n.querySelector("#parentLastName").value.trim(),t.formData.parentEmail=n.querySelector("#parentEmail").value.trim(),t.formData.parentPhone=n.querySelector("#parentPhone").value.trim()):e===2?(t.formData.studentFirstName=n.querySelector("#studentFirstName").value.trim(),t.formData.studentLastName=n.querySelector("#studentLastName").value.trim(),t.formData.studentAge=n.querySelector("#studentAge").value.trim(),t.formData.studentGrade=n.querySelector("#studentGrade").value,t.formData.studentSchool=n.querySelector("#studentSchool").value.trim(),t.formData.medicalNotes=n.querySelector("#medicalNotes").value.trim()):e===3&&(t.formData.cardNumber=n.querySelector("#cardNumber").value.trim(),t.formData.cardExpiry=n.querySelector("#cardExpiry").value.trim(),t.formData.cardCvv=n.querySelector("#cardCvv").value.trim())}function pl(n,e){let t=!0;const s=r=>{const o=n.querySelector("#"+r),a=o.closest(".form-group");o.value.trim()?a.classList.remove("has-error"):(a.classList.add("has-error"),t=!1)};if(e===1){s("parentFirstName"),s("parentLastName");const r=n.querySelector("#parentEmail"),o=r.closest(".form-group");/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.value.trim())?o.classList.remove("has-error"):(o.classList.add("has-error"),t=!1),s("parentPhone")}else if(e===2){s("studentFirstName"),s("studentLastName");const r=n.querySelector("#studentAge"),o=r.closest(".form-group"),a=parseInt(r.value);isNaN(a)||a<4||a>15?(o.classList.add("has-error"),t=!1):o.classList.remove("has-error"),s("studentGrade"),s("studentSchool")}else if(e===3){const r=n.querySelector("#cardNumber"),o=r.closest(".form-group");new RegExp(r.pattern).test(r.value.replace(/\s+/g,""))?o.classList.remove("has-error"):(o.classList.add("has-error"),t=!1);const a=n.querySelector("#cardExpiry"),c=a.closest(".form-group");new RegExp(a.pattern).test(a.value.trim())?c.classList.remove("has-error"):(c.classList.add("has-error"),t=!1);const h=n.querySelector("#cardCvv"),d=h.closest(".form-group");new RegExp(h.pattern).test(h.value.trim())?d.classList.remove("has-error"):(d.classList.add("has-error"),t=!1)}return t}async function ig(n){const e=xt,t=Vt(),s=eo(),r=t.findIndex(h=>h.id===e.selectedClass.id);r!==-1&&t[r].spotsRemaining>0&&(t[r].spotsRemaining-=1,await cu(t));const o=`${e.formData.studentFirstName} ${e.formData.studentLastName}`,a=`${e.formData.parentFirstName} ${e.formData.parentLastName}`,c={id:"enroll-"+Date.now(),classId:e.selectedClass.id,classTitle:e.selectedClass.title,studentName:o,studentAge:parseInt(e.formData.studentAge),school:e.formData.studentSchool,grade:e.formData.studentGrade,parentName:a,parentEmail:e.formData.parentEmail,parentPhone:e.formData.parentPhone,notes:e.formData.medicalNotes};s.push(c),await Xp(s),n.innerHTML=`
    <div class="page-view enroll-container">
      <div class="glass-panel success-screen">
        <div class="success-icon">
          <i class="fa-solid fa-check"></i>
        </div>
        <h2 class="success-title">Enrollment Completed!</h2>
        <p class="success-desc">We've sent a registration confirmation email to <strong>${e.formData.parentEmail}</strong>. Welcome to Southwest San Jose Young Engineers!</p>
        
        <div class="receipt-card">
          <div class="receipt-title">Registration Summary</div>
          <div class="receipt-row">
            <span>Student:</span>
            <strong>${o}</strong>
          </div>
          <div class="receipt-row">
            <span>Class:</span>
            <strong>${e.selectedClass.title}</strong>
          </div>
          <div class="receipt-row">
            <span>School / Location:</span>
            <strong>${e.selectedClass.location}</strong>
          </div>
          <div class="receipt-row">
            <span>Time:</span>
            <strong>${e.selectedClass.dayOfWeek}, ${e.selectedClass.time}</strong>
          </div>
          <div class="receipt-row total">
            <span>Amount Paid:</span>
            <strong>$${e.selectedClass.price}.00</strong>
          </div>
        </div>

        <div style="display:flex; justify-content:center; gap: 1rem;">
          <a href="#/classes" class="btn btn-primary">Browse Other Classes</a>
          <a href="#/home" class="btn btn-secondary">Return Home</a>
        </div>
      </div>
    </div>
  `,cg(),xt={currentStep:1,selectedClass:null,formData:{}}}let St=null,K="classes",Ss="all",Rs="all",Cs="all",De=null,Re=null,Ce=null,Ye=null;function hu(n){to?ie(n):og(n)}function og(n){n.innerHTML=`
    <div class="page-view">
      <div class="glass-panel admin-auth-panel">
        <div class="admin-auth-icon">
          <i class="fa-solid fa-lock"></i>
        </div>
        <h2 style="margin-bottom: 0.5rem;">Instructor Portal</h2>
        <p style="color: var(--text-secondary); margin-bottom: 2rem; font-size: 0.9rem;">Sign in to define classes, view student rosters, and manage enrollments.</p>
        
        <form id="admin-login-form" novalidate style="display:flex; flex-direction:column; gap:1.25rem; text-align:left;">
          <div class="form-group">
            <label for="admin-pass">Instructor Password *</label>
            <input type="password" class="form-control" id="admin-pass" required placeholder="Enter admin password">
            <span class="field-error">Incorrect password. Please try again.</span>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;">Sign In <i class="fa-solid fa-sign-in-alt"></i></button>
        </form>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-top:1.5rem;">For demo evaluation, the password is: <code style="color: var(--lego-yellow);">admin</code></p>
      </div>
    </div>
  `,n.querySelector("#admin-login-form").addEventListener("submit",t=>{t.preventDefault();const s=n.querySelector("#admin-pass"),r=s.closest(".form-group");s.value==="admin"?(r.classList.remove("has-error"),to=!0,sessionStorage.setItem("ye_admin_auth","true"),ie(n)):r.classList.add("has-error")})}function ie(n){const e=Vt(),t=eo(),s=Yt();!St&&e.length>0&&(St=e[0].id),!Ye&&s.length>0&&(Ye=s[0].id);let r="";if(K==="classes")r=`
      <div class="admin-layout">
        <!-- LEFT: Classes & Class Creation -->
        <div style="display:flex; flex-direction:column; gap:2rem;">
          
          <!-- Defined Classes List -->
          <div class="glass-panel" style="padding: 1.5rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:1rem;">
              <h3 class="admin-panel-title" style="margin:0;"><i class="fa-solid fa-list-check"></i> Defined Classes</h3>
              <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                <select class="form-control" id="filter-center" style="width:auto; padding:0.25rem 0.5rem; font-size:0.85rem; height:auto;">
                  <option value="all">All Centers</option>
                  ${Ct().map(f=>`<option value="${f.id}" ${Ss===f.id?"selected":""}>${f.name}</option>`).join("")}
                </select>
                <select class="form-control" id="filter-year" style="width:auto; padding:0.25rem 0.5rem; font-size:0.85rem; height:auto;">
                  <option value="all">All Years</option>
                  ${[...new Set(e.map(f=>f.school_year).filter(Boolean))].map(f=>`<option value="${f}" ${Rs===f?"selected":""}>${f}</option>`).join("")}
                </select>
                <select class="form-control" id="filter-program" style="width:auto; padding:0.25rem 0.5rem; font-size:0.85rem; height:auto;">
                  <option value="all">All Programs</option>
                  ${Hr().map(f=>`<option value="${f.id}" ${Cs===f.id?"selected":""}>${f.name}</option>`).join("")}
                </select>
              </div>
            </div>
            <div class="admin-classes-list">
              ${e.filter(f=>!(Ss!=="all"&&f.provider_id!==Ss||Rs!=="all"&&f.school_year!==Rs||Cs!=="all"&&f.program_id!==Cs)).map(f=>{var x;const I=Ct().find(C=>C.id===f.provider_id),A=I?I.name:"Unknown Education Center";let R=f.dayOfWeek;if(f.season&&f.start_date&&f.end_date){const C=new Date(f.start_date);C.setMinutes(C.getMinutes()+C.getTimezoneOffset());const L=new Date(f.end_date);L.setMinutes(L.getMinutes()+L.getTimezoneOffset()),R=`${f.school_year||""} ${f.season}: ${C.toLocaleDateString(void 0,{month:"short",day:"numeric"})} - ${L.toLocaleDateString(void 0,{month:"short",day:"numeric"})} (${f.dayOfWeek})`}return`
                <div class="admin-class-row ${f.id===St?"active":""}" data-id="${f.id}">
                  <div class="admin-class-meta">
                    <h4>${f.title}</h4>
                    <p><i class="fa-solid fa-school"></i> ${A} - ${(f.location||"").split(",")[0]} &nbsp;|&nbsp; <i class="fa-solid fa-calendar"></i> ${R}</p>
                    ${f.instructor_id?`<p style="font-size: 0.75rem; color: var(--text-muted); margin: 0.2rem 0 0 0;"><i class="fa-solid fa-chalkboard-user"></i> Instructor: ${((x=Qt().find(C=>C.id===f.instructor_id))==null?void 0:x.name)||"Unknown"}</p>`:""}
                  </div>
                  <div class="admin-class-action" style="display:flex; align-items:center; gap:0.5rem;">
                    <span class="roster-stat-tag">${t.filter(C=>C.classId===f.id).length} Enrolled</span>
                    <button class="btn btn-secondary btn-sm edit-class-btn" data-id="${f.id}" style="padding:0.25rem 0.5rem;" title="Edit Class"><i class="fa-solid fa-pen"></i></button>
                  </div>
                </div>
                `}).join("")}
            </div>
          </div>

          <!-- Add Class Form -->
          <div class="glass-panel add-class-form">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.25rem;">
              <h3 class="admin-panel-title" style="margin:0;"><i class="fa-solid ${De?"fa-pen-to-square":"fa-folder-plus"}"></i> ${De?"Edit Class":"Define New Class"}</h3>
              ${De?'<button class="btn btn-secondary btn-sm" id="cancel-edit-class" style="padding:0.25rem 0.75rem; font-size:0.8rem;">Cancel Edit</button>':""}
            </div>
            <form id="create-class-form" style="display:flex; flex-direction:column; gap:1.25rem;">
              <div class="form-group">
                <label for="new-title">Class Title *</label>
                <input type="text" class="form-control" id="new-title" required placeholder="e.g. Lego Challenge: Basic Mechanisms">
              </div>
              <div class="form-group" style="margin-bottom: 1.25rem;">
                <label for="new-provider">Education Center *</label>
                <select class="form-control" id="new-provider" required>
                  ${Ct().map((f,p)=>`<option value="${f.id}" ${p===0?"selected":""}>${f.name}</option>`).join("")}
                </select>
              </div>
              <div class="form-grid">
                <div class="form-group">
                  <label for="new-year">School Year</label>
                  <input type="text" class="form-control" id="new-year" list="year-options" placeholder="e.g. 2026-2027 (Optional)">
                  <datalist id="year-options">
                    <option value="2025-2026">
                    <option value="2026-2027">
                    <option value="2027-2028">
                  </datalist>
                </div>
                <div class="form-group">
                  <label for="new-season">Season *</label>
                  <select class="form-control" id="new-season" required>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                  </select>
                </div>
              </div>
              <div class="form-grid">
                <div class="form-group">
                  <label for="new-program">Program Pathway *</label>
                  <select class="form-control" id="new-program" required>
                    ${Hr().map((f,p)=>`<option value="${f.id}" ${p===0?"selected":""}>${f.name}</option>`).join("")}
                  </select>
                </div>
                <div class="form-group">
                  <label for="new-age">Age Range *</label>
                  <select class="form-control" id="new-age" required>
                    <option value="4-6">Ages 4-6</option>
                    <option value="7-10" selected>Ages 7-10</option>
                    <option value="10-14">Ages 10-14</option>
                  </select>
                </div>
              </div>
              <div class="form-grid">
                <div class="form-group">
                  <label for="new-start">Start Date *</label>
                  <input type="date" class="form-control" id="new-start" required>
                </div>
                <div class="form-group">
                  <label for="new-end">End Date *</label>
                  <input type="date" class="form-control" id="new-end" required>
                </div>
              </div>
              <div class="form-grid">
                <div class="form-group">
                  <label for="new-day">Day of Week *</label>
                  <select class="form-control" id="new-day" required>
                    <option value="Mondays">Mondays</option>
                    <option value="Tuesdays">Tuesdays</option>
                    <option value="Wednesdays">Wednesdays</option>
                    <option value="Thursdays">Thursdays</option>
                    <option value="Fridays">Fridays</option>
                    <option value="Saturdays">Saturdays</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="new-time">Class Time *</label>
                  <input type="text" class="form-control" id="new-time" required placeholder="e.g. 3:30 PM - 4:45 PM">
                </div>
              </div>
              <div class="form-grid">
                <div class="form-group">
                  <label for="new-location">Specific Room / Location *</label>
                  <input type="text" class="form-control" id="new-location" required placeholder="e.g. Library, Room 12">
                </div>
                <div class="form-group">
                  <label for="new-sessions">Number of Sessions *</label>
                  <input type="number" class="form-control" id="new-sessions" required min="1" max="50" value="10">
                </div>
              </div>
              <div class="form-grid">
                <div class="form-group">
                  <label for="new-price">Tuition Fee ($) *</label>
                  <input type="number" class="form-control" id="new-price" required min="100" max="500" value="250">
                </div>
                <div class="form-group">
                  <label for="new-spots">Total Spots *</label>
                  <input type="number" class="form-control" id="new-spots" required min="5" max="30" value="12">
                </div>
              </div>
              <div class="form-group">
                <label for="new-desc">Class Description *</label>
                <textarea class="form-control" id="new-desc" rows="3" required placeholder="Provide a brief summary of learning topics..." style="resize:vertical; min-height:80px;"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;">${De?"Save Changes":"Create Class"} <i class="fa-solid ${De?"fa-save":"fa-plus"}"></i></button>
            </form>
          </div>

        </div>

        <!-- RIGHT: Student Roster Renders -->
        <div class="glass-panel roster-card" id="admin-roster-section">
          ${gl(St)}
        </div>
      </div>
    `;else if(K==="inquiries")r=`
      <div class="admin-layout">
        <!-- LEFT: Inquiries List -->
        <div class="glass-panel" style="padding: 1.5rem; height: fit-content; display:flex; flex-direction:column; gap:1rem;">
          <h3 class="admin-panel-title"><i class="fa-solid fa-inbox"></i> Client Inquiries</h3>
          <div class="admin-classes-list" style="max-height: 600px; overflow-y: auto; display:flex; flex-direction:column; gap:0.75rem;">
            ${s.length===0?`
              <div style="text-align:center; padding: 3rem 1.5rem; color: var(--text-secondary);">
                <i class="fa-solid fa-envelope-open" style="font-size: 2.5rem; opacity: 0.35; margin-bottom: 0.75rem; color: var(--lego-blue);"></i>
                <p style="margin:0; font-size:0.9rem;">No inquiries received yet.</p>
              </div>
            `:s.map(f=>{let p="var(--lego-blue)",I="rgba(0, 150, 255, 0.1)";f.status==="reviewed"?(p="var(--lego-yellow)",I="rgba(255, 193, 7, 0.1)"):f.status==="responded"?(p="var(--lego-teal)",I="rgba(0, 200, 180, 0.1)"):f.status==="archived"&&(p="var(--text-muted)",I="rgba(100, 116, 139, 0.1)");const A=new Date(f.timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return`
                <div class="admin-class-row inquiry-row ${f.id===Ye?"active":""}" data-id="${f.id}">
                  <div class="admin-class-meta" style="width:100%;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.25rem; gap:0.5rem;">
                      <h4 style="margin:0; font-size:0.95rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${f.name}</h4>
                      <span style="font-size:0.75rem; color:var(--text-secondary); white-space:nowrap;">${A}</span>
                    </div>
                    <p style="font-weight: 500; color: var(--text-primary); margin: 0 0 0.5rem 0; font-size: 0.85rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${f.subject}</p>
                    <span class="roster-stat-tag" style="background:${I}; color:${p}; border-color:${p}33; text-transform: capitalize; padding:0.15rem 0.5rem; font-size:0.7rem; border-radius:50px; display: inline-block;">${f.status}</span>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>

        <!-- RIGHT: Inquiry Detail View -->
        <div class="glass-panel roster-card" id="admin-inquiry-detail-section">
          ${yl(Ye)}
        </div>
      </div>
    `;else if(K==="providers"){const f=Ct();r=`
      <div class="admin-layout">
        <!-- LEFT: Providers List -->
        <div class="glass-panel" style="padding: 1.5rem; height: fit-content; display:flex; flex-direction:column; gap:1rem;">
          <h3 class="admin-panel-title"><i class="fa-solid fa-school-flag"></i> Education Centers</h3>
          <div class="admin-classes-list" style="max-height: 600px; overflow-y: auto; display:flex; flex-direction:column; gap:0.75rem;">
            ${f.length===0?`
              <div style="text-align:center; padding: 3rem 1.5rem; color: var(--text-secondary);">
                <i class="fa-solid fa-school" style="font-size: 2.5rem; opacity: 0.35; margin-bottom: 0.75rem; color: var(--lego-blue);"></i>
                <p style="margin:0; font-size:0.9rem;">No education centers added yet.</p>
              </div>
            `:f.map(p=>`
              <div class="admin-class-row inquiry-row" style="cursor:default;">
                <div class="admin-class-meta" style="width:100%; display:flex; justify-content:space-between; align-items:center;">
                  <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.25rem; gap:0.5rem;">
                      <h4 style="margin:0; font-size:0.95rem;">${p.name}</h4>
                      <span style="font-size:0.75rem; color:var(--text-secondary); white-space:nowrap; text-transform: capitalize;">${(p.provider_type||"").replace("_"," ")}</span>
                    </div>
                    <p style="font-weight: 500; color: var(--text-primary); margin: 0 0 0.5rem 0; font-size: 0.85rem;">${p.address}</p>
                  </div>
                  <button class="btn btn-secondary btn-sm edit-provider-btn" data-id="${p.id}" style="padding:0.25rem 0.5rem;"><i class="fa-solid fa-pen"></i></button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- RIGHT: Add Provider Form -->
        <div class="glass-panel add-class-form">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.25rem;">
            <h3 class="admin-panel-title" style="margin:0;"><i class="fa-solid ${Re?"fa-pen-to-square":"fa-plus"}"></i> ${Re?"Edit Education Center":"Add New Education Center"}</h3>
            ${Re?'<button class="btn btn-secondary btn-sm" id="cancel-edit-provider" style="padding:0.25rem 0.75rem; font-size:0.8rem;">Cancel</button>':""}
          </div>
          <form id="create-provider-form" style="display:flex; flex-direction:column; gap:1.25rem;">
            <div class="form-group">
              <label for="new-prov-name">Education Center Name *</label>
              <input type="text" class="form-control" id="new-prov-name" required placeholder="e.g. Lincoln Elementary">
            </div>
            <div class="form-grid">
              <div class="form-group">
                <label for="new-prov-type">Type *</label>
                <select class="form-control" id="new-prov-type" required>
                  <option value="school">School</option>
                  <option value="charter_school">Charter School</option>
                  <option value="preschool">Preschool</option>
                  <option value="daycare">Daycare</option>
                  <option value="tutoring_center">Tutoring Center</option>
                  <option value="after_school_program">After School Program</option>
                  <option value="summer_camp">Summer Camp</option>
                  <option value="music_school">Music School</option>
                  <option value="sports_academy">Sports Academy</option>
                  <option value="community_program">Community Program</option>
                  <option value="online_school">Online School</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="new-prov-phone">Main Phone *</label>
                <input type="text" class="form-control" id="new-prov-phone" required placeholder="(408) 555-1234">
              </div>
            </div>
            <div class="form-group">
              <label for="new-prov-address">Full Address *</label>
              <input type="text" class="form-control" id="new-prov-address" required placeholder="123 Main St, San Jose, CA">
            </div>
            <div class="form-group">
              <label for="new-prov-website">Website URL *</label>
              <input type="url" class="form-control" id="new-prov-website" required placeholder="https://example.com">
            </div>
            <hr style="border: 0; border-top: 1px solid var(--glass-border); margin: 0.5rem 0;">
            <h4 style="margin:0; font-size:0.95rem;">Point of Contact</h4>
            <div class="form-grid">
              <div class="form-group">
                <label for="new-prov-cname">Contact Name *</label>
                <input type="text" class="form-control" id="new-prov-cname" required placeholder="Jane Doe">
              </div>
              <div class="form-group">
                <label for="new-prov-cphone">Contact Phone *</label>
                <input type="text" class="form-control" id="new-prov-cphone" required placeholder="(408) 555-9876">
              </div>
            </div>
            <div class="form-group">
              <label for="new-prov-cemail">Contact Email *</label>
              <input type="email" class="form-control" id="new-prov-cemail" required placeholder="jane@example.com">
            </div>
            <div class="form-group">
              <label for="new-prov-desc">Description *</label>
              <textarea class="form-control" id="new-prov-desc" rows="2" required style="resize:vertical; min-height:60px;"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;">${Re?"Save Changes":"Add Education Center"} <i class="fa-solid ${Re?"fa-save":"fa-plus"}"></i></button>
          </form>
        </div>
      </div>
    `}else if(K==="employees"){const f=Qt();r=`
      <div class="admin-layout">
        <!-- LEFT: Employees List -->
        <div class="glass-panel" style="padding: 1.5rem; height: fit-content; display:flex; flex-direction:column; gap:1rem;">
          <h3 class="admin-panel-title"><i class="fa-solid fa-user-tie"></i> Employees</h3>
          <div class="admin-classes-list" style="max-height: 600px; overflow-y: auto; display:flex; flex-direction:column; gap:0.75rem;">
            ${f.length===0?`
              <div style="text-align:center; padding: 3rem 1.5rem; color: var(--text-secondary);">
                <i class="fa-solid fa-users" style="font-size: 2.5rem; opacity: 0.35; margin-bottom: 0.75rem; color: var(--lego-blue);"></i>
                <p style="margin:0; font-size:0.9rem;">No employees added yet.</p>
              </div>
            `:f.map(p=>`
              <div class="admin-class-row inquiry-row" style="cursor:default;">
                <div class="admin-class-meta" style="width:100%; display:flex; justify-content:space-between; align-items:center;">
                  <div>
                    <div style="display:flex; justify-content:flex-start; align-items:center; margin-bottom: 0.25rem; gap:0.5rem;">
                      <h4 style="margin:0; font-size:0.95rem;">${p.name}</h4>
                      <span style="font-size:0.75rem; color:var(--text-secondary); white-space:nowrap; text-transform: capitalize; background: var(--bg-secondary); padding: 0.1rem 0.4rem; border-radius: 4px;">${(p.role||"other").replace("_"," ")}</span>
                    </div>
                    <p style="font-weight: 500; color: var(--text-primary); margin: 0 0 0.5rem 0; font-size: 0.85rem;"><i class="fa-solid fa-envelope"></i> ${p.email} &nbsp;|&nbsp; <i class="fa-solid fa-phone"></i> ${p.phone}</p>
                    ${p.start_date?`<p style="font-size: 0.75rem; color: var(--text-muted); margin: 0;">Started: ${p.start_date}</p>`:""}
                  </div>
                  <button class="btn btn-secondary btn-sm edit-employee-btn" data-id="${p.id}" style="padding:0.25rem 0.5rem;"><i class="fa-solid fa-pen"></i></button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- RIGHT: Add/Edit Employee Form -->
        <div class="glass-panel add-class-form">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.25rem;">
            <h3 class="admin-panel-title" style="margin:0;"><i class="fa-solid ${Ce?"fa-pen-to-square":"fa-user-plus"}"></i> ${Ce?"Edit Employee":"Add New Employee"}</h3>
            ${Ce?'<button class="btn btn-secondary btn-sm" id="cancel-edit-employee" style="padding:0.25rem 0.75rem; font-size:0.8rem;">Cancel</button>':""}
          </div>
          <form id="create-employee-form" style="display:flex; flex-direction:column; gap:1.25rem;">
            <div class="form-group">
              <label for="new-emp-name">Full Name *</label>
              <input type="text" class="form-control" id="new-emp-name" required placeholder="e.g. John Doe">
            </div>
            <div class="form-grid">
              <div class="form-group">
                <label for="new-emp-role">Role *</label>
                <select class="form-control" id="new-emp-role" required>
                  <option value="instructor">Instructor</option>
                  <option value="helper">Helper</option>
                  <option value="marketing">Marketing</option>
                  <option value="admin">Admin</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="new-emp-start">Start Date</label>
                <input type="date" class="form-control" id="new-emp-start">
              </div>
            </div>
            <div class="form-grid">
              <div class="form-group">
                <label for="new-emp-phone">Phone *</label>
                <input type="text" class="form-control" id="new-emp-phone" required placeholder="(408) 555-0101">
              </div>
              <div class="form-group">
                <label for="new-emp-email">Email *</label>
                <input type="email" class="form-control" id="new-emp-email" required placeholder="john@example.com">
              </div>
            </div>
            <div class="form-group">
              <label for="new-emp-desc">Description / Notes</label>
              <textarea class="form-control" id="new-emp-desc" rows="2" style="resize:vertical; min-height:60px;" placeholder="Optional notes..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;">${Ce?"Save Changes":"Add Employee"} <i class="fa-solid ${Ce?"fa-save":"fa-plus"}"></i></button>
          </form>
        </div>
      </div>
    `}n.innerHTML=`
    <div class="page-view admin-container" style="display: flex; gap: 2rem; align-items: flex-start; max-width: 1400px; margin: 0 auto; padding: 2rem;">
      
      <!-- Sidebar Navigation -->
      <div class="admin-sidebar glass-panel" style="flex: 0 0 260px; padding: 1.5rem; display:flex; flex-direction:column; gap: 0.75rem; height: calc(100vh - 120px); position: sticky; top: 100px;">
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem; color: var(--text-primary); border-bottom: 1px solid var(--glass-border); padding-bottom: 0.75rem;"><i class="fa-solid fa-gauge"></i> Admin Menu</h3>
        
        <button class="tab-btn ${K==="classes"?"active":""}" id="admin-tab-classes" style="text-align:left; background: ${K==="classes"?"var(--bg-secondary)":"transparent"}; border: 1px solid ${K==="classes"?"var(--glass-border)":"transparent"}; color: ${K==="classes"?"var(--lego-blue)":"var(--text-muted)"}; font-size:0.95rem; font-weight:700; cursor:pointer; padding:0.75rem 1rem; border-radius:8px; display:flex; align-items:center; gap:0.75rem; transition: all 0.3s;">
          <i class="fa-solid fa-graduation-cap" style="width: 20px;"></i> Class Rosters
        </button>
        <button class="tab-btn ${K==="inquiries"?"active":""}" id="admin-tab-inquiries" style="text-align:left; background: ${K==="inquiries"?"var(--bg-secondary)":"transparent"}; border: 1px solid ${K==="inquiries"?"var(--glass-border)":"transparent"}; color: ${K==="inquiries"?"var(--lego-blue)":"var(--text-muted)"}; font-size:0.95rem; font-weight:700; cursor:pointer; padding:0.75rem 1rem; border-radius:8px; display:flex; align-items:center; gap:0.75rem; transition: all 0.3s;">
          <i class="fa-solid fa-envelope-open-text" style="width: 20px;"></i> Client Inquiries
          ${s.filter(f=>f.status==="received").length>0?`<span style="background:var(--lego-red); color:white; font-size:0.7rem; padding:0.1rem 0.4rem; border-radius:10px; margin-left:auto;">${s.filter(f=>f.status==="received").length}</span>`:""}
        </button>
        <button class="tab-btn ${K==="providers"?"active":""}" id="admin-tab-providers" style="text-align:left; background: ${K==="providers"?"var(--bg-secondary)":"transparent"}; border: 1px solid ${K==="providers"?"var(--glass-border)":"transparent"}; color: ${K==="providers"?"var(--lego-blue)":"var(--text-muted)"}; font-size:0.95rem; font-weight:700; cursor:pointer; padding:0.75rem 1rem; border-radius:8px; display:flex; align-items:center; gap:0.75rem; transition: all 0.3s;">
          <i class="fa-solid fa-school-flag" style="width: 20px;"></i> Education Centers
        </button>
        <button class="tab-btn ${K==="employees"?"active":""}" id="admin-tab-employees" style="text-align:left; background: ${K==="employees"?"var(--bg-secondary)":"transparent"}; border: 1px solid ${K==="employees"?"var(--glass-border)":"transparent"}; color: ${K==="employees"?"var(--lego-blue)":"var(--text-muted)"}; font-size:0.95rem; font-weight:700; cursor:pointer; padding:0.75rem 1rem; border-radius:8px; display:flex; align-items:center; gap:0.75rem; transition: all 0.3s;">
          <i class="fa-solid fa-user-tie" style="width: 20px;"></i> Employees
        </button>

        <div style="flex-grow: 1;"></div>
        
        <div style="display:flex; flex-direction:column; gap:0.5rem;">
          <button class="btn btn-secondary" id="admin-reset-db" title="Restore default classes and test roster" style="width:100%; justify-content:center; padding: 0.5rem;"><i class="fa-solid fa-rotate-left"></i> Reset Demo</button>
          <button class="btn btn-secondary" id="admin-logout-btn" style="width:100%; justify-content:center; padding: 0.5rem;"><i class="fa-solid fa-sign-out-alt"></i> Logout</button>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="admin-main-wrapper" style="flex: 1; min-width: 0;">
        <div class="admin-header" style="margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:flex-end;">
          <div>
            <span class="section-tag">Management Console</span>
            <h2 style="margin: 0.5rem 0 0 0;">Robotics Instructor Dashboard</h2>
          </div>
        </div>

        <div id="admin-main-layout">
          ${r}
        </div>
      </div>
    </div>
  `;const o=n.querySelector("#admin-tab-classes"),a=n.querySelector("#admin-tab-inquiries"),c=n.querySelector("#admin-tab-providers"),h=n.querySelector("#admin-tab-employees");if(o&&o.addEventListener("click",()=>{K="classes",ie(n)}),a&&a.addEventListener("click",()=>{K="inquiries",ie(n)}),c&&c.addEventListener("click",()=>{K="providers",ie(n)}),h&&h.addEventListener("click",()=>{K="employees",ie(n)}),n.querySelector("#admin-reset-db").addEventListener("click",()=>{confirm("Are you sure you want to reset the demo database? This will revert all classes, rosters, and inquiries to defaults.")&&eg()}),n.querySelector("#admin-logout-btn").addEventListener("click",()=>{to=!1,sessionStorage.removeItem("ye_admin_auth"),hu(n)}),K==="classes"){const f=n.querySelector("#filter-center"),p=n.querySelector("#filter-year"),I=n.querySelector("#filter-program");if(f&&f.addEventListener("change",x=>{Ss=x.target.value,ie(n)}),p&&p.addEventListener("change",x=>{Rs=x.target.value,ie(n)}),I&&I.addEventListener("change",x=>{Cs=x.target.value,ie(n)}),n.querySelectorAll(".edit-class-btn").forEach(x=>{x.addEventListener("click",C=>{C.stopPropagation(),De=x.getAttribute("data-id"),ie(n)})}),De){const C=Vt().find(L=>L.id===De);if(C){const L=n.querySelector("#new-title");L&&(L.value=C.title||"");const $=n.querySelector("#new-provider");$&&($.value=C.provider_id||"");const H=n.querySelector("#new-year");H&&(H.value=C.school_year||"");const me=n.querySelector("#new-season");me&&(me.value=C.season||"Fall");const se=n.querySelector("#new-program");se&&(se.value=C.program_id||"");const te=n.querySelector("#new-age");te&&(te.value=C.ageGroup||"7-10");const E=n.querySelector("#new-start");E&&(E.value=C.start_date||"");const g=n.querySelector("#new-end");g&&(g.value=C.end_date||"");const v=n.querySelector("#new-sessions");v&&(v.value=C.number_of_sessions||10);const w=n.querySelector("#new-location");w&&(w.value=C.location||"");const _=n.querySelector("#new-day");_&&(_.value=C.dayOfWeek||"Mondays");const b=n.querySelector("#new-time");b&&(b.value=C.time||"");const y=n.querySelector("#new-price");y&&(y.value=C.price||200);const ae=n.querySelector("#new-spots");ae&&(ae.value=C.spotsTotal||15);const Pe=n.querySelector("#new-desc");Pe&&(Pe.value=C.description||"")}}const A=n.querySelector("#cancel-edit-class");A&&A.addEventListener("click",()=>{De=null,ie(n)}),n.querySelectorAll(".admin-class-row").forEach(x=>{x.addEventListener("click",()=>{St=x.getAttribute("data-id"),n.querySelectorAll(".admin-class-row").forEach(L=>L.classList.remove("active")),x.classList.add("active");const C=n.querySelector("#admin-roster-section");C&&(C.innerHTML=gl(St))})});const R=n.querySelector("#create-class-form");R&&R.addEventListener("submit",async x=>{x.preventDefault();const C=R.querySelector("button[type='submit']");C&&C.innerHTML,C&&(C.disabled=!0,C.innerHTML='Creating... <i class="fa-solid fa-spinner fa-spin"></i>');const L=Vt(),$=n.querySelector("#new-title").value.trim(),H=n.querySelector("#new-provider").value,me=n.querySelector("#new-year").value,se=n.querySelector("#new-season").value,te=n.querySelector("#new-program").value,E=n.querySelector("#new-age").value,g=n.querySelector("#new-start").value,v=n.querySelector("#new-end").value,w=parseInt(n.querySelector("#new-sessions").value),_=n.querySelector("#new-location").value.trim(),b=n.querySelector("#new-day").value,y=n.querySelector("#new-time").value.trim(),ae=parseInt(n.querySelector("#new-price").value),Pe=parseInt(n.querySelector("#new-spots").value),is=n.querySelector("#new-desc").value.trim(),Le=Hr().find($t=>$t.id===te),Et=Le?Le.name:te,os=Le?Le.accent:"blue",pn=Le?Le.image:"assets/lego_challenge.png";let Y;De?(Y=L.find($t=>$t.id===De),Y&&(Y.title=$,Y.provider_id=H,Y.school_year=me,Y.season=se,Y.program_id=te,Y.program=Et,Y.start_date=g,Y.end_date=v,Y.number_of_sessions=w,Y.ageGroup=E,Y.ageLabel=E==="4-6"?"Pre-K to 1st Grade":E==="7-10"?"2nd to 5th Grade":"5th to 8th Grade",Y.location=_,Y.dayOfWeek=b,Y.time=y,Y.price=ae,Y.spotsTotal=Pe,Y.accent=os,Y.description=is,Y.image=pn)):(Y={id:"class-"+Date.now(),title:$,provider_id:H,school_year:me,season:se,program_id:te,program:Et,start_date:g,end_date:v,number_of_sessions:w,ageGroup:E,ageLabel:E==="4-6"?"Pre-K to 1st Grade":E==="7-10"?"2nd to 5th Grade":"5th to 8th Grade",location:_,dayOfWeek:b,time:y,price:ae,spotsTotal:Pe,spotsRemaining:Pe,accent:os,description:is,image:pn},L.push(Y)),await cu(L),alert(De?"Class updated successfully!":"New Lego robotics class added successfully!"),St=Y.id,De=null,ie(n)})}else if(K==="inquiries")n.querySelectorAll(".inquiry-row").forEach(f=>{f.addEventListener("click",()=>{Ye=f.getAttribute("data-id"),n.querySelectorAll(".inquiry-row").forEach(p=>p.classList.remove("active")),f.classList.add("active"),n.querySelector("#admin-inquiry-detail-section").innerHTML=yl(Ye),d()})}),d();else if(K==="providers"){if(Re){const A=Ct().find(R=>R.id===Re);A&&(n.querySelector("#new-prov-name").value=A.name||"",n.querySelector("#new-prov-type").value=A.provider_type||"school",n.querySelector("#new-prov-phone").value=A.phone||"",n.querySelector("#new-prov-address").value=A.address||"",n.querySelector("#new-prov-website").value=A.website||"",n.querySelector("#new-prov-cname").value=A.contact_name||"",n.querySelector("#new-prov-cphone").value=A.contact_phone||"",n.querySelector("#new-prov-cemail").value=A.contact_email||"",n.querySelector("#new-prov-desc").value=A.description||"")}const f=n.querySelector("#cancel-edit-provider");f&&f.addEventListener("click",()=>{Re=null,ie(n)}),n.querySelectorAll(".edit-provider-btn").forEach(I=>{I.addEventListener("click",()=>{Re=I.getAttribute("data-id"),ie(n)})});const p=n.querySelector("#create-provider-form");p&&p.addEventListener("submit",async I=>{I.preventDefault();const A=p.querySelector("button[type='submit']");A&&(A.disabled=!0,A.innerHTML='Saving... <i class="fa-solid fa-spinner fa-spin"></i>');const R={id:Re||"ep-"+Date.now(),name:n.querySelector("#new-prov-name").value.trim(),provider_type:n.querySelector("#new-prov-type").value,phone:n.querySelector("#new-prov-phone").value.trim(),address:n.querySelector("#new-prov-address").value.trim(),website:n.querySelector("#new-prov-website").value.trim(),contact_name:n.querySelector("#new-prov-cname").value.trim(),contact_phone:n.querySelector("#new-prov-cphone").value.trim(),contact_email:n.querySelector("#new-prov-cemail").value.trim(),description:n.querySelector("#new-prov-desc").value.trim(),created_at:Re?void 0:new Date().toISOString()},x=Ct();if(!Re)x.push(R);else{const C=x.findIndex(L=>L.id===Re);C!==-1&&(R.created_at=x[C].created_at,x[C]=R)}try{await $e(ye(Q,"education_providers",R.id),R,{merge:!0}),alert(Re?"Education center updated successfully!":"New education center added successfully!"),Re=null}catch(C){console.error(C),alert("Error saving education center. Please check permissions.")}ie(n)})}else if(K==="employees"){if(Ce){const A=Qt().find(R=>R.id===Ce);A&&(n.querySelector("#new-emp-name").value=A.name||"",n.querySelector("#new-emp-role").value=A.role||"instructor",n.querySelector("#new-emp-start").value=A.start_date||"",n.querySelector("#new-emp-phone").value=A.phone||"",n.querySelector("#new-emp-email").value=A.email||"",n.querySelector("#new-emp-desc").value=A.description||"")}const f=n.querySelector("#cancel-edit-employee");f&&f.addEventListener("click",()=>{Ce=null,ie(n)}),n.querySelectorAll(".edit-employee-btn").forEach(I=>{I.addEventListener("click",()=>{Ce=I.getAttribute("data-id"),ie(n)})});const p=n.querySelector("#create-employee-form");p&&p.addEventListener("submit",async I=>{I.preventDefault();const A=p.querySelector("button[type='submit']");A&&(A.disabled=!0,A.innerHTML='Saving... <i class="fa-solid fa-spinner fa-spin"></i>');const R={id:Ce||"emp-"+Date.now(),name:n.querySelector("#new-emp-name").value.trim(),role:n.querySelector("#new-emp-role").value,start_date:n.querySelector("#new-emp-start").value,phone:n.querySelector("#new-emp-phone").value.trim(),email:n.querySelector("#new-emp-email").value.trim(),description:n.querySelector("#new-emp-desc").value.trim(),created_at:Ce?void 0:new Date().toISOString()},x=Qt();if(!Ce)x.push(R);else{const C=x.findIndex(L=>L.id===Ce);C!==-1&&(R.created_at=x[C].created_at,x[C]=R)}try{await $e(ye(Q,"employees",R.id),R,{merge:!0}),alert(Ce?"Employee updated successfully!":"New employee added successfully!"),Ce=null}catch(C){console.error(C),alert("Error saving employee. Please check permissions.")}ie(n)})}function d(){const f=n.querySelector("#inq-status-select"),p=n.querySelector("#inq-delete-btn"),I=n.querySelector("#inquiry-reply-form");f&&f.addEventListener("change",async A=>{const R=f.getAttribute("data-id"),x=A.target.value,C=Yt(),L=C.find($=>$.id===R);L&&(f.disabled=!0,L.status=x,await Os(C),f.disabled=!1,ie(n))}),I&&I.addEventListener("submit",async A=>{A.preventDefault();const R=n.querySelector("#inq-reply-message").value.trim(),x=Ye,C=Yt(),L=C.find($=>$.id===x);if(L){const $=I.querySelector("button[type='submit']");$&&$.innerHTML,$&&($.disabled=!0,$.innerHTML='Sending... <i class="fa-solid fa-spinner fa-spin"></i>'),L.status="responded",L.replyText=R,L.replyTimestamp=new Date().toISOString(),await Os(C);try{await au(Me(Q,"mail"),{to:L.email,message:{subject:"Re: "+L.subject,html:`
                  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <h2 style="color: #ef4444;">Response to your inquiry</h2>
                    <p>Hi ${L.name},</p>
                    <p>${R.replace(/\n/g,"<br>")}</p>
                    <br>
                    <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00c8b4;">
                      <p style="margin: 0; color: #666; font-size: 0.9em;"><strong>Original Message:</strong><br>${L.message.replace(/\n/g,"<br>")}</p>
                    </div>
                    <p>Best regards,<br><strong>The Young Engineers Team</strong></p>
                  </div>
                `}})}catch(H){console.error("Failed to send email:",H)}alert(`Response successfully sent inline to ${L.name} (${L.email})!`),ie(n)}}),p&&p.addEventListener("click",async()=>{const A=p.getAttribute("data-id");if(confirm("Are you sure you want to permanently delete this inquiry?")){p.innerHTML,p.disabled=!0,p.innerHTML='Deleting... <i class="fa-solid fa-trash fa-spin"></i>';let R=Yt();R=R.filter(x=>x.id!==A),await Os(R),Ye===A&&(Ye=R.length>0?R[0].id:null),ie(n)}})}}function gl(n){var o,a;const e=Vt(),t=eo(),s=e.find(c=>c.id===n);if(!s)return'<div class="roster-empty-state"><i class="fa-solid fa-magnifying-glass"></i><p>Select a class to view rosters</p></div>';const r=t.filter(c=>c.classId===n);return`
    <div class="roster-header">
      <div style="flex:1;">
        <h3 style="font-size: 1.3rem;">Class Student Roster</h3>
        <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.25rem;">Roster for: <strong>${s.title}</strong></p>
        ${s.instructor_id?`<p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 0.25rem;"><i class="fa-solid fa-chalkboard-user"></i> Instructor: ${((o=Qt().find(c=>c.id===s.instructor_id))==null?void 0:o.name)||"Unknown"} &nbsp;|&nbsp; Helper: ${s.helper_id?((a=Qt().find(c=>c.id===s.helper_id))==null?void 0:a.name)||"Unknown":"None"}</p>`:""}
      </div>
      <div class="roster-stats">
        <span class="roster-stat-tag">${r.length} Enrolled</span>
        <span class="roster-stat-tag spots">${s.spotsRemaining} spots left</span>
      </div>
    </div>

    ${r.length===0?`
        <div class="roster-empty-state">
          <i class="fa-solid fa-users-slash"></i>
          <h3>No Student Registrations Yet</h3>
          <p style="color: var(--text-secondary); margin-top: 0.5rem;">Classes created manually start with 0 student enrollments. Navigate to 'Classes' and complete a checkout to see records update here.</p>
        </div>
      `:`
        <div class="roster-table-container">
          <table class="roster-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Age / Grade</th>
                <th>Parent Info</th>
                <th>Medical/Notes</th>
              </tr>
            </thead>
            <tbody>
              ${r.map(c=>`
                <tr>
                  <td>
                    <strong style="color: var(--text-primary); font-size: 0.95rem;">${c.studentName}</strong>
                    <div style="font-size:0.75rem; color: var(--text-muted);">${c.school}</div>
                  </td>
                  <td>
                    <div>${c.studentAge} years old</div>
                    <div style="font-size:0.75rem; color: var(--text-muted);">${c.grade}</div>
                  </td>
                  <td>
                    <div><strong>${c.parentName}</strong></div>
                    <div style="font-size:0.75rem; color: var(--text-secondary);"><i class="fa-solid fa-envelope"></i> ${c.parentEmail}</div>
                    <div style="font-size:0.75rem; color: var(--text-secondary);"><i class="fa-solid fa-phone"></i> ${c.parentPhone}</div>
                  </td>
                  <td>
                    <span style="font-size:0.8rem; color:${c.notes?"var(--lego-yellow)":"var(--text-muted)"};">
                      ${c.notes||"None"}
                    </span>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `}
  `}function yl(n){const t=Yt().find(o=>o.id===n);if(!t)return`
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding: 4rem 1.5rem; color: var(--text-secondary); height: 100%;">
        <i class="fa-solid fa-envelope-open" style="font-size: 3.5rem; margin-bottom: 1.25rem; opacity: 0.35; color: var(--lego-blue);"></i>
        <h3 style="font-size:1.25rem; color:var(--text-primary); font-family: var(--font-heading);">No Inquiry Selected</h3>
        <p style="font-size:0.9rem; margin-top:0.5rem; max-width:280px; line-height:1.5;">Select a client inquiry from the sidebar list to inspect details and respond.</p>
      </div>
    `;const s=new Date(t.timestamp).toLocaleString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});let r="";if(t.replyText){const o=new Date(t.replyTimestamp).toLocaleString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"});r=`
      <div style="border-top:1px solid var(--glass-border); padding-top:1.25rem; margin-top:0.5rem;">
        <span style="font-size: 0.725rem; font-weight: 700; text-transform: uppercase; color: var(--lego-teal); display: block; margin-bottom: 0.5rem;"><i class="fa-solid fa-circle-check"></i> Sent Response</span>
        <div class="glass-panel" style="padding: 1.25rem; background: rgba(0, 200, 180, 0.025); border-color: rgba(0, 200, 180, 0.15); border-radius: 8px; font-size: 0.95rem; line-height: 1.6; color: var(--text-primary); white-space: pre-wrap; word-break: break-word; margin-bottom:0.75rem;">${t.replyText}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
          <div style="font-size: 0.8rem; color: var(--text-secondary); display: flex; align-items: center; gap: 0.35rem;">
            <i class="fa-solid fa-clock"></i> Sent on ${o}
          </div>
          <button class="btn btn-secondary btn-sm" id="inq-delete-btn" data-id="${t.id}" style="color:var(--lego-red); border-color:rgba(255, 68, 68, 0.15); display:inline-flex; align-items:center; gap:0.35rem;"><i class="fa-solid fa-trash"></i> Delete Inquiry</button>
        </div>
      </div>
    `}else r=`
      <div style="border-top:1px solid var(--glass-border); padding-top:1.25rem; margin-top:0.5rem;" id="inq-reply-compose-container">
        <span style="font-size: 0.725rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 0.5rem;">Compose Inline Response</span>
        <form id="inquiry-reply-form" style="display:flex; flex-direction:column; gap:0.75rem;">
          <textarea class="form-control" id="inq-reply-message" rows="3" required placeholder="Type your email response to ${t.name} here..." style="resize:vertical; min-height:80px; font-size:0.95rem;"></textarea>
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap; align-items:center;">
            <button type="submit" class="btn btn-primary btn-sm" style="display:inline-flex; align-items:center; gap:0.35rem;"><i class="fa-solid fa-paper-plane"></i> Send Reply</button>
            <a href="mailto:${t.email}?subject=RE: ${encodeURIComponent(t.subject)}" class="btn btn-secondary btn-sm" style="display:inline-flex; align-items:center; gap:0.35rem;"><i class="fa-solid fa-external-link"></i> External App</a>
            <button type="button" class="btn btn-secondary btn-sm" id="inq-delete-btn" data-id="${t.id}" style="color:var(--lego-red); border-color:rgba(255, 68, 68, 0.15); margin-left:auto; display:inline-flex; align-items:center; gap:0.35rem;"><i class="fa-solid fa-trash"></i> Delete</button>
          </div>
        </form>
      </div>
    `;return`
    <div class="roster-header" style="border-bottom: 1px solid var(--glass-border); padding-bottom: 1.25rem; margin-bottom: 1.5rem; display:flex; justify-content:space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap;">
      <div>
        <h3 style="font-size: 1.3rem; margin:0;">${t.name}</h3>
        <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.25rem; display:flex; flex-wrap:wrap; gap:0.75rem;">
          <span><i class="fa-solid fa-envelope"></i> <a href="mailto:${t.email}" style="color: var(--lego-blue); font-weight:600; text-decoration:none;">${t.email}</a></span>
          ${t.phone?`<span><i class="fa-solid fa-phone"></i> <a href="tel:${t.phone}" style="color: var(--lego-blue); font-weight:600; text-decoration:none;">${t.phone}</a></span>`:""}
        </p>
      </div>
      <div style="min-width: 130px;">
        <span style="font-size: 0.725rem; font-weight:700; text-transform:uppercase; color:var(--text-secondary); display:block; margin-bottom:0.25rem;">Update Status</span>
        <select class="form-control" id="inq-status-select" data-id="${t.id}" style="padding: 0.25rem 1.5rem 0.25rem 0.5rem; font-size: 0.85rem; border-radius: 6px; width:100%; height:32px; background-color: var(--bg-secondary); border-color: var(--glass-border); color: var(--text-primary); font-weight:600; cursor: pointer;">
          <option value="received" ${t.status==="received"?"selected":""}>Received</option>
          <option value="reviewed" ${t.status==="reviewed"?"selected":""}>Reviewed</option>
          <option value="responded" ${t.status==="responded"?"selected":""}>Responded</option>
          <option value="archived" ${t.status==="archived"?"selected":""}>Archived</option>
        </select>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap:1.25rem;">
      <div>
        <span style="font-size: 0.725rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 0.25rem;">Subject</span>
        <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); line-height: 1.4;">${t.subject}</div>
      </div>

      <div>
        <span style="font-size: 0.725rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">Message Body</span>
        <div class="glass-panel" style="padding: 1.25rem; background: rgba(0, 0, 0, 0.015); border-color: rgba(0, 0, 0, 0.04); border-radius: 8px; font-size: 0.95rem; line-height: 1.6; color: var(--text-primary); white-space: pre-wrap; word-break: break-word;">${t.message}</div>
      </div>

      <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.25rem; display: flex; align-items: center; gap: 0.35rem;">
        <i class="fa-solid fa-clock"></i> Sent on ${s}
      </div>

      ${r}
    </div>
  `}function ag(n){n.innerHTML=`
    <div class="page-view animate-fade-in">
      <!-- Hero Section -->
      <section class="hero-section" style="padding: 4rem 1rem 3rem 1rem; text-align: center;">
        <span class="section-tag" style="margin-bottom: 1rem; display: inline-block;">Who We Are</span>
        <h1 class="hero-title" style="font-size: 2.75rem; margin-bottom: 1.5rem;">About Young Engineers Southwest San Jose</h1>
        <p class="hero-subtitle" style="max-width: 800px; margin: 0 auto; color: var(--text-secondary);">We teach children STEM and robotics principles through hands-on play. By designing and building motorized models using Lego® bricks, children understand complex physics and engineering rules while having fun.</p>
      </section>

      <!-- Mission & Philosophy Section -->
      <section class="classes-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; max-width: 1200px; margin: 0 auto 5rem auto; padding: 0 1.5rem;">
        <div class="glass-panel" style="padding: 3rem; display: flex; flex-direction: column; justify-content: center;">
          <span class="section-tag" style="margin-bottom: 0.5rem;">Our Mission</span>
          <h2 class="section-title" style="font-size: 2rem; margin-bottom: 1.5rem; text-align: left;">Preparing Children for a Changing World</h2>
          <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">At Young Engineers Southwest San Jose, we believe that education should be engaging, intuitive, and experiential. Through our specialized enrichment programs, students develop critical 21st-century skills: critical thinking, problem-solving, spatial awareness, and creative engineering.</p>
          <p style="color: var(--text-secondary); line-height: 1.8;">Our courses are designed around the EDUTAINMENT methodology, seamlessly blending structured engineering theory with open-ended play to ensure students retain and apply what they build.</p>
        </div>
        <div class="glass-panel" style="padding: 3rem; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, rgba(255, 68, 68, 0.05), rgba(0, 180, 216, 0.05)); border-color: rgba(255, 255, 255, 0.5);">
          <span class="section-tag" style="margin-bottom: 0.5rem; color: var(--lego-teal);">Hands-On Learning</span>
          <h2 class="section-title" style="font-size: 2rem; margin-bottom: 1.5rem; text-align: left;">STEM & Robotics Enrichment</h2>
          <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1.25rem;">
            <li style="display: flex; gap: 1rem; align-items: flex-start; color: var(--text-secondary); line-height: 1.5;">
              <i class="fa-solid fa-circle-check" style="color: var(--lego-teal); font-size: 1.2rem; margin-top: 0.1rem;"></i>
              <span><strong>Scientific Principles:</strong> Understanding gears, transmissions, speed reduction, and structural stability.</span>
            </li>
            <li style="display: flex; gap: 1rem; align-items: flex-start; color: var(--text-secondary); line-height: 1.5;">
              <i class="fa-solid fa-circle-check" style="color: var(--lego-teal); font-size: 1.2rem; margin-top: 0.1rem;"></i>
              <span><strong>Computational Thinking:</strong> Algorithmic logic and coding fundamentals.</span>
            </li>
            <li style="display: flex; gap: 1rem; align-items: flex-start; color: var(--text-secondary); line-height: 1.5;">
              <i class="fa-solid fa-circle-check" style="color: var(--lego-teal); font-size: 1.2rem; margin-top: 0.1rem;"></i>
              <span><strong>Dexterity & Focus:</strong> Improving fine motor skills, focus, and logical planning.</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Recognition Section (Moved here from home screen) -->
      <section class="glass-panel" style="max-width: 1200px; margin: 0 auto 5rem auto; padding: 4rem 3rem; text-align: center; background: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4));">
        <span class="section-tag" style="margin-bottom: 1rem; display: inline-block; color: var(--lego-red);">Accreditation</span>
        <h2 class="section-title" style="font-size: 2.25rem; margin-bottom: 1rem;">Officially Recognized Globally</h2>
        <p class="section-subtitle" style="max-width: 750px; margin: 0 auto 3rem auto; color: var(--text-secondary);">Our curriculum is certified and recognized by leading educational boards and institutions globally, ensuring a scientifically structured program of the highest international caliber.</p>
        <div style="display: flex; justify-content: center; align-items: center; width: 100%; margin-bottom: 2rem;">
          <img src="assets/recognition.png" alt="Officially recognized by the EU Commission and Harvard Graduate School of Education" style="max-height: 120px; width: auto; max-width: 100%; object-fit: contain;">
        </div>
        <p style="max-width: 650px; margin: 0 auto; color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
          Young Engineers enrichment programs are reviewed, recognized, and certified by the <strong>European Union Commission</strong> and the <strong>Harvard Graduate School of Education</strong>. This guarantees a safe, structured, and pedagogically sound framework for your child's STEM development.
        </p>
      </section>
    </div>
  `}function lg(n){n.innerHTML=`
    <div class="page-view">
      
      <!-- FAQ Section -->
      <section class="faq-container">
        <div class="section-header" style="padding-top:2rem; margin-bottom:2rem;">
          <span class="section-tag">Common Inquiries</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">Got questions about scheduling, age limits, structure, or makeup sessions? Find answers below.</p>
        </div>

        <div class="faq-grid">
          <div class="glass-panel faq-item active">
            <div class="faq-question">
              <span>Are these classes hosted after schools end?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>Yes! We work directly with schools in Southwest San Jose to offer enrichment programs. Classes take place directly on school campuses inside designated classrooms or science labs immediately after school dismissal. Our instructors meet kids on campus.</p>
            </div>
          </div>

          <div class="glass-panel faq-item">
            <div class="faq-question">
              <span>What is the instructor-to-student ratio?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>We maintain an excellent ratio of 1:8 or 1:10 depending on the age group. This ensures that every child receives individualized attention, troubleshooting assistance with their motorized gears, and personal coding help.</p>
            </div>
          </div>

          <div class="glass-panel faq-item">
            <div class="faq-question">
              <span>Do kids get to keep the Lego models they build?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>Because we use highly specialized kits containing electric motors, battery packs, and gears, the kits are reused for educational exercises. Children do not take them home, but we photograph and take videos of every student's working machines, which we send to parents after each session!</p>
            </div>
          </div>

          <div class="glass-panel faq-item">
            <div class="faq-question">
              <span>How do make-up lessons work?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>If your child misses an after-school class due to illness or travel, you can contact us to schedule a make-up session in another school where the same class runs during that week, or get a credit toward our holiday workshops.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Form Section -->
      <section class="contact-section">
        <div class="contact-info">
          <div>
            <span class="section-tag" style="display:block; margin-bottom: 0.5rem;">Connect With Us</span>
            <h2 style="font-size:2.25rem;">Have Questions? <br>Send us a Message</h2>
            <p style="color:var(--text-secondary); margin-top:0.75rem;">If you are a school principal interested in initiating a new STEM program, or a parent needing assistance, get in touch.</p>
          </div>

          <div class="glass-panel contact-card">
            <div class="contact-card-icon"><i class="fa-solid fa-envelope"></i></div>
            <div class="contact-card-details">
              <h4>Email Us Directly</h4>
              <p>southwestsanjose@youngengineers.org</p>
            </div>
          </div>

          <div class="glass-panel contact-card">
            <div class="contact-card-icon"><i class="fa-solid fa-phone"></i></div>
            <div class="contact-card-details">
              <h4>Call or Text Info Line</h4>
              <p>(408) 555-0182 (Mon-Fri, 9am - 5pm)</p>
            </div>
          </div>
        </div>

        <div class="glass-panel contact-form-panel">
          <form id="contact-inquiry-form" style="display:flex; flex-direction:column; gap:1.25rem;">
            <div class="form-grid">
              <div class="form-group">
                <label for="contact-name">Your Name *</label>
                <input type="text" class="form-control" id="contact-name" required placeholder="John Doe">
              </div>
              <div class="form-group">
                <label for="contact-email">Email Address *</label>
                <input type="email" class="form-control" id="contact-email" required placeholder="john@example.com">
              </div>
            </div>
            <div class="form-grid">
              <div class="form-group">
                <label for="contact-phone">Phone Number (Optional)</label>
                <input type="tel" class="form-control" id="contact-phone" placeholder="e.g. (408) 555-0182">
              </div>
              <div class="form-group">
                <label for="contact-subject">Subject *</label>
                <input type="text" class="form-control" id="contact-subject" required placeholder="e.g. Inquiry about Lincoln Elementary camp">
              </div>
            </div>
            <div class="form-group">
              <label for="contact-message">Message *</label>
              <textarea class="form-control" id="contact-message" rows="4" required placeholder="Describe your question or school partnership interest..." style="resize:vertical; min-height:100px;"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="align-self:flex-start;">Send Inquiry <i class="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>
      </section>

    </div>
  `,n.querySelectorAll(".faq-item").forEach(t=>{t.querySelector(".faq-question").addEventListener("click",()=>{const s=t.classList.contains("active");n.querySelectorAll(".faq-item").forEach(r=>r.classList.remove("active")),s||t.classList.add("active")})});const e=n.querySelector("#contact-inquiry-form");e&&e.addEventListener("submit",async t=>{t.preventDefault();const s=n.querySelector("#contact-name").value.trim(),r=n.querySelector("#contact-email").value.trim(),o=n.querySelector("#contact-phone").value.trim(),a=n.querySelector("#contact-subject").value.trim(),c=n.querySelector("#contact-message").value.trim(),h=e.querySelector("button[type='submit']"),d=h?h.innerHTML:"";h&&(h.disabled=!0,h.innerHTML='Sending... <i class="fa-solid fa-spinner fa-spin"></i>');const f=Yt(),p={id:"inquiry-"+Date.now(),name:s,email:r,phone:o||null,subject:a,message:c,status:"received",timestamp:new Date().toISOString()};f.unshift(p),await Os(f);try{await au(Me(Q,"mail"),{to:r,message:{subject:"Thank you for contacting Southwest San Jose Young Engineers!",html:`
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                <h2 style="color: #ef4444;">We've received your inquiry!</h2>
                <p>Hi ${s},</p>
                <p>Thank you for reaching out to Southwest San Jose Young Engineers! This is an automated confirmation that we have successfully received your message.</p>
                <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00c8b4;">
                  <p style="margin: 0;"><strong>Your Message:</strong><br>${c.replace(/\n/g,"<br>")}</p>
                </div>
                <p>One of our instructors will review your request and get back to you within 24 hours.</p>
                <br>
                <p>Best regards,<br><strong>The Young Engineers Team</strong></p>
              </div>
            `}})}catch(I){console.error("Failed to queue auto-reply email:",I)}alert("Thank you! Your message has been sent to Southwest San Jose Young Engineers. We'll reply within 24 hours."),e.reset(),h&&(h.disabled=!1,h.innerHTML=d)})}let Kr=!1;function cg(){const n=document.getElementById("confetti-canvas");if(!n)return;n.style.display="block";const e=n.getContext("2d"),t=()=>{n.width=window.innerWidth,n.height=window.innerHeight};t(),window.addEventListener("resize",t);const s=["hsl(354, 85%, 56%)","hsl(210, 100%, 52%)","hsl(43, 96%, 56%)","hsl(174, 86%, 45%)","hsl(265, 83%, 64%)"],r=[];Kr=!0;for(let c=0;c<150;c++)r.push({x:n.width/2,y:n.height+20,size:Math.random()*8+6,color:s[Math.floor(Math.random()*s.length)],speedX:(Math.random()-.5)*15,speedY:-(Math.random()*15+15),gravity:.4,rotation:Math.random()*360,rotationSpeed:(Math.random()-.5)*10});let o=240;function a(){Kr&&(e.clearRect(0,0,n.width,n.height),r.forEach(c=>{c.speedY+=c.gravity,c.x+=c.speedX,c.y+=c.speedY,c.rotation+=c.rotationSpeed,e.save(),e.translate(c.x,c.y),e.rotate(c.rotation*Math.PI/180),e.fillStyle=c.color,e.fillRect(-c.size/2,-c.size/2,c.size,c.size),e.fillStyle="rgba(255,255,255,0.3)",e.fillRect(-c.size/4,-c.size/4,c.size/2,c.size/2),e.restore()}),o--,o>0?requestAnimationFrame(a):(Kr=!1,n.style.display="none",window.removeEventListener("resize",t)))}a()}
