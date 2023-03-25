(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function oo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function lo(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ce(s)?cf(s):lo(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ce(t))return t;if(ae(t))return t}}const rf=/;(?![^(]*\))/g,of=/:([^]+)/,lf=/\/\*.*?\*\//gs;function cf(t){const e={};return t.replace(lf,"").split(rf).forEach(n=>{if(n){const s=n.split(of);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function _s(t){let e="";if(Ce(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=_s(t[n]);s&&(e+=s+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const af="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uf=oo(af);function la(t){return!!t||t===""}function hf(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ni(t[s],e[s]);return n}function Ni(t,e){if(t===e)return!0;let n=fl(t),s=fl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=gs(t),s=gs(e),n||s)return t===e;if(n=U(t),s=U(e),n||s)return n&&s?hf(t,e):!1;if(n=ae(t),s=ae(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Ni(t[o],e[o]))return!1}}return String(t)===String(e)}function ca(t,e){return t.findIndex(n=>Ni(n,e))}const aa=t=>Ce(t)?t:t==null?"":U(t)||ae(t)&&(t.toString===fa||!W(t.toString))?JSON.stringify(t,ua,2):String(t),ua=(t,e)=>e&&e.__v_isRef?ua(t,e.value):Sn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Ai(e)?{[`Set(${e.size})`]:[...e.values()]}:ae(e)&&!U(e)&&!da(e)?String(e):e,he={},In=[],rt=()=>{},ff=()=>!1,df=/^on[^a-z]/,Pi=t=>df.test(t),co=t=>t.startsWith("onUpdate:"),De=Object.assign,ao=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},pf=Object.prototype.hasOwnProperty,Q=(t,e)=>pf.call(t,e),U=Array.isArray,Sn=t=>Ms(t)==="[object Map]",Ai=t=>Ms(t)==="[object Set]",fl=t=>Ms(t)==="[object Date]",W=t=>typeof t=="function",Ce=t=>typeof t=="string",gs=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",ha=t=>ae(t)&&W(t.then)&&W(t.catch),fa=Object.prototype.toString,Ms=t=>fa.call(t),_f=t=>Ms(t).slice(8,-1),da=t=>Ms(t)==="[object Object]",uo=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ei=oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gf=/-(\w)/g,An=Oi(t=>t.replace(gf,(e,n)=>n?n.toUpperCase():"")),mf=/\B([A-Z])/g,jn=Oi(t=>t.replace(mf,"-$1").toLowerCase()),pa=Oi(t=>t.charAt(0).toUpperCase()+t.slice(1)),er=Oi(t=>t?`on${pa(t)}`:""),ms=(t,e)=>!Object.is(t,e),ti=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},oi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},li=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let dl;const yf=()=>dl||(dl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ve;class _a{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ve,!e&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ve;try{return Ve=this,e()}finally{Ve=n}}}on(){Ve=this}off(){Ve=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function ga(t){return new _a(t)}function vf(t,e=Ve){e&&e.active&&e.effects.push(t)}function Ef(){return Ve}function Cf(t){Ve&&Ve.cleanups.push(t)}const ho=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ma=t=>(t.w&Ut)>0,ya=t=>(t.n&Ut)>0,bf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ut},wf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];ma(i)&&!ya(i)?i.delete(t):e[n++]=i,i.w&=~Ut,i.n&=~Ut}e.length=n}},wr=new WeakMap;let ss=0,Ut=1;const Ir=30;let Ze;const sn=Symbol(""),Sr=Symbol("");class fo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,vf(this,s)}run(){if(!this.active)return this.fn();let e=Ze,n=At;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ze,Ze=this,At=!0,Ut=1<<++ss,ss<=Ir?bf(this):pl(this),this.fn()}finally{ss<=Ir&&wf(this),Ut=1<<--ss,Ze=this.parent,At=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ze===this?this.deferStop=!0:this.active&&(pl(this),this.onStop&&this.onStop(),this.active=!1)}}function pl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let At=!0;const va=[];function Vn(){va.push(At),At=!1}function zn(){const t=va.pop();At=t===void 0?!0:t}function ze(t,e,n){if(At&&Ze){let s=wr.get(t);s||wr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ho()),Ea(i)}}function Ea(t,e){let n=!1;ss<=Ir?ya(t)||(t.n|=Ut,n=!ma(t)):n=!t.has(Ze),n&&(t.add(Ze),Ze.deps.push(t))}function Et(t,e,n,s,i,r){const o=wr.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&U(t)){const c=li(s);o.forEach((a,u)=>{(u==="length"||u>=c)&&l.push(a)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":U(t)?uo(n)&&l.push(o.get("length")):(l.push(o.get(sn)),Sn(t)&&l.push(o.get(Sr)));break;case"delete":U(t)||(l.push(o.get(sn)),Sn(t)&&l.push(o.get(Sr)));break;case"set":Sn(t)&&l.push(o.get(sn));break}if(l.length===1)l[0]&&Tr(l[0]);else{const c=[];for(const a of l)a&&c.push(...a);Tr(ho(c))}}function Tr(t,e){const n=U(t)?t:[...t];for(const s of n)s.computed&&_l(s);for(const s of n)s.computed||_l(s)}function _l(t,e){(t!==Ze||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const If=oo("__proto__,__v_isRef,__isVue"),Ca=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gs)),Sf=po(),Tf=po(!1,!0),Rf=po(!0),gl=xf();function xf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let r=0,o=this.length;r<o;r++)ze(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Vn();const s=Z(this)[e].apply(this,n);return zn(),s}}),t}function po(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Vf:Ta:e?Sa:Ia).get(s))return s;const o=U(s);if(!t&&o&&Q(gl,i))return Reflect.get(gl,i,r);const l=Reflect.get(s,i,r);return(gs(i)?Ca.has(i):If(i))||(t||ze(s,"get",i),e)?l:de(l)?o&&uo(i)?l:l.value:ae(l)?t?Ra(l):jt(l):l}}const Nf=ba(),Pf=ba(!0);function ba(t=!1){return function(n,s,i,r){let o=n[s];if(On(o)&&de(o)&&!de(i))return!1;if(!t&&(!ci(i)&&!On(i)&&(o=Z(o),i=Z(i)),!U(n)&&de(o)&&!de(i)))return o.value=i,!0;const l=U(n)&&uo(s)?Number(s)<n.length:Q(n,s),c=Reflect.set(n,s,i,r);return n===Z(r)&&(l?ms(i,o)&&Et(n,"set",s,i):Et(n,"add",s,i)),c}}function Af(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Et(t,"delete",e,void 0),s}function Of(t,e){const n=Reflect.has(t,e);return(!gs(e)||!Ca.has(e))&&ze(t,"has",e),n}function kf(t){return ze(t,"iterate",U(t)?"length":sn),Reflect.ownKeys(t)}const wa={get:Sf,set:Nf,deleteProperty:Af,has:Of,ownKeys:kf},Df={get:Rf,set(t,e){return!0},deleteProperty(t,e){return!0}},Mf=De({},wa,{get:Tf,set:Pf}),_o=t=>t,ki=t=>Reflect.getPrototypeOf(t);function zs(t,e,n=!1,s=!1){t=t.__v_raw;const i=Z(t),r=Z(e);n||(e!==r&&ze(i,"get",e),ze(i,"get",r));const{has:o}=ki(i),l=s?_o:n?yo:ys;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function qs(t,e=!1){const n=this.__v_raw,s=Z(n),i=Z(t);return e||(t!==i&&ze(s,"has",t),ze(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ks(t,e=!1){return t=t.__v_raw,!e&&ze(Z(t),"iterate",sn),Reflect.get(t,"size",t)}function ml(t){t=Z(t);const e=Z(this);return ki(e).has.call(e,t)||(e.add(t),Et(e,"add",t,t)),this}function yl(t,e){e=Z(e);const n=Z(this),{has:s,get:i}=ki(n);let r=s.call(n,t);r||(t=Z(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ms(e,o)&&Et(n,"set",t,e):Et(n,"add",t,e),this}function vl(t){const e=Z(this),{has:n,get:s}=ki(e);let i=n.call(e,t);i||(t=Z(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Et(e,"delete",t,void 0),r}function El(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&Et(t,"clear",void 0,void 0),n}function Gs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=Z(o),c=e?_o:t?yo:ys;return!t&&ze(l,"iterate",sn),o.forEach((a,u)=>s.call(i,c(a),c(u),r))}}function Ys(t,e,n){return function(...s){const i=this.__v_raw,r=Z(i),o=Sn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?_o:e?yo:ys;return!e&&ze(r,"iterate",c?Sr:sn),{next(){const{value:h,done:f}=a.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Tt(t){return function(...e){return t==="delete"?!1:this}}function Lf(){const t={get(r){return zs(this,r)},get size(){return Ks(this)},has:qs,add:ml,set:yl,delete:vl,clear:El,forEach:Gs(!1,!1)},e={get(r){return zs(this,r,!1,!0)},get size(){return Ks(this)},has:qs,add:ml,set:yl,delete:vl,clear:El,forEach:Gs(!1,!0)},n={get(r){return zs(this,r,!0)},get size(){return Ks(this,!0)},has(r){return qs.call(this,r,!0)},add:Tt("add"),set:Tt("set"),delete:Tt("delete"),clear:Tt("clear"),forEach:Gs(!0,!1)},s={get(r){return zs(this,r,!0,!0)},get size(){return Ks(this,!0)},has(r){return qs.call(this,r,!0)},add:Tt("add"),set:Tt("set"),delete:Tt("delete"),clear:Tt("clear"),forEach:Gs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ys(r,!1,!1),n[r]=Ys(r,!0,!1),e[r]=Ys(r,!1,!0),s[r]=Ys(r,!0,!0)}),[t,n,e,s]}const[Ff,Bf,Uf,Hf]=Lf();function go(t,e){const n=e?t?Hf:Uf:t?Bf:Ff;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const Wf={get:go(!1,!1)},$f={get:go(!1,!0)},jf={get:go(!0,!1)},Ia=new WeakMap,Sa=new WeakMap,Ta=new WeakMap,Vf=new WeakMap;function zf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qf(t){return t.__v_skip||!Object.isExtensible(t)?0:zf(_f(t))}function jt(t){return On(t)?t:mo(t,!1,wa,Wf,Ia)}function Kf(t){return mo(t,!1,Mf,$f,Sa)}function Ra(t){return mo(t,!0,Df,jf,Ta)}function mo(t,e,n,s,i){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=qf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Ot(t){return On(t)?Ot(t.__v_raw):!!(t&&t.__v_isReactive)}function On(t){return!!(t&&t.__v_isReadonly)}function ci(t){return!!(t&&t.__v_isShallow)}function xa(t){return Ot(t)||On(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function kn(t){return oi(t,"__v_skip",!0),t}const ys=t=>ae(t)?jt(t):t,yo=t=>ae(t)?Ra(t):t;function Na(t){At&&Ze&&(t=Z(t),Ea(t.dep||(t.dep=ho())))}function Pa(t,e){t=Z(t),t.dep&&Tr(t.dep)}function de(t){return!!(t&&t.__v_isRef===!0)}function kt(t){return Aa(t,!1)}function Gf(t){return Aa(t,!0)}function Aa(t,e){return de(t)?t:new Yf(t,e)}class Yf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:ys(e)}get value(){return Na(this),this._value}set value(e){const n=this.__v_isShallow||ci(e)||On(e);e=n?e:Z(e),ms(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ys(e),Pa(this))}}function ke(t){return de(t)?t.value:t}const Qf={get:(t,e,n)=>ke(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return de(i)&&!de(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Oa(t){return Ot(t)?t:new Proxy(t,Qf)}function Xf(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=Zf(t,n);return e}class Jf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Zf(t,e,n){const s=t[e];return de(s)?s:new Jf(t,e,n)}var ka;class ed{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ka]=!1,this._dirty=!0,this.effect=new fo(e,()=>{this._dirty||(this._dirty=!0,Pa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Z(this);return Na(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ka="__v_isReadonly";function td(t,e,n=!1){let s,i;const r=W(t);return r?(s=t,i=rt):(s=t.get,i=t.set),new ed(s,i,r||!i,n)}function Dt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ls(r,e,n)}return i}function ot(t,e,n,s){if(W(t)){const r=Dt(t,e,n,s);return r&&ha(r)&&r.catch(o=>{Ls(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ot(t[r],e,n,s));return i}function Ls(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const a=r.ec;if(a){for(let u=0;u<a.length;u++)if(a[u](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Dt(c,null,10,[t,o,l]);return}}nd(t,n,i,s)}function nd(t,e,n,s=!0){console.error(t)}let vs=!1,Rr=!1;const Ne=[];let dt=0;const Tn=[];let mt=null,Xt=0;const Da=Promise.resolve();let vo=null;function Eo(t){const e=vo||Da;return t?e.then(this?t.bind(this):t):e}function sd(t){let e=dt+1,n=Ne.length;for(;e<n;){const s=e+n>>>1;Es(Ne[s])<t?e=s+1:n=s}return e}function Di(t){(!Ne.length||!Ne.includes(t,vs&&t.allowRecurse?dt+1:dt))&&(t.id==null?Ne.push(t):Ne.splice(sd(t.id),0,t),Ma())}function Ma(){!vs&&!Rr&&(Rr=!0,vo=Da.then(Fa))}function id(t){const e=Ne.indexOf(t);e>dt&&Ne.splice(e,1)}function rd(t){U(t)?Tn.push(...t):(!mt||!mt.includes(t,t.allowRecurse?Xt+1:Xt))&&Tn.push(t),Ma()}function Cl(t,e=vs?dt+1:0){for(;e<Ne.length;e++){const n=Ne[e];n&&n.pre&&(Ne.splice(e,1),e--,n())}}function La(t){if(Tn.length){const e=[...new Set(Tn)];if(Tn.length=0,mt){mt.push(...e);return}for(mt=e,mt.sort((n,s)=>Es(n)-Es(s)),Xt=0;Xt<mt.length;Xt++)mt[Xt]();mt=null,Xt=0}}const Es=t=>t.id==null?1/0:t.id,od=(t,e)=>{const n=Es(t)-Es(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Fa(t){Rr=!1,vs=!0,Ne.sort(od);const e=rt;try{for(dt=0;dt<Ne.length;dt++){const n=Ne[dt];n&&n.active!==!1&&Dt(n,null,14)}}finally{dt=0,Ne.length=0,La(),vs=!1,vo=null,(Ne.length||Tn.length)&&Fa()}}function ld(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||he;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||he;f&&(i=n.map(_=>Ce(_)?_.trim():_)),h&&(i=n.map(li))}let l,c=s[l=er(e)]||s[l=er(An(e))];!c&&r&&(c=s[l=er(jn(e))]),c&&ot(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ot(a,t,6,i)}}function Ba(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!W(t)){const c=a=>{const u=Ba(a,e,!0);u&&(l=!0,De(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(ae(t)&&s.set(t,null),null):(U(r)?r.forEach(c=>o[c]=null):De(o,r),ae(t)&&s.set(t,o),o)}function Mi(t,e){return!t||!Pi(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,jn(e))||Q(t,e))}let Ye=null,Li=null;function ai(t){const e=Ye;return Ye=t,Li=t&&t.type.__scopeId||null,e}function Ua(t){Li=t}function Ha(){Li=null}function cd(t,e=Ye,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Pl(-1);const r=ai(e);let o;try{o=t(...i)}finally{ai(r),s._d&&Pl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function tr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:c,emit:a,render:u,renderCache:h,data:f,setupState:_,ctx:g,inheritAttrs:b}=t;let P,x;const O=ai(t);try{if(n.shapeFlag&4){const K=i||s;P=ft(u.call(K,K,h,r,_,f,g)),x=c}else{const K=e;P=ft(K.length>1?K(r,{attrs:c,slots:l,emit:a}):K(r,null)),x=e.props?c:ad(c)}}catch(K){os.length=0,Ls(K,t,1),P=pe(ln)}let D=P;if(x&&b!==!1){const K=Object.keys(x),{shapeFlag:se}=D;K.length&&se&7&&(o&&K.some(co)&&(x=ud(x,o)),D=Dn(D,x))}return n.dirs&&(D=Dn(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),P=D,ai(O),P}const ad=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pi(n))&&((e||(e={}))[n]=t[n]);return e},ud=(t,e)=>{const n={};for(const s in t)(!co(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function hd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?bl(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Mi(a,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?bl(s,o,a):!0:!!o;return!1}function bl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Mi(n,r))return!0}return!1}function fd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const dd=t=>t.__isSuspense;function pd(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):rd(t)}function ni(t,e){if(Te){let n=Te.provides;const s=Te.parent&&Te.parent.provides;s===n&&(n=Te.provides=Object.create(s)),n[t]=e}}function lt(t,e,n=!1){const s=Te||Ye;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&W(e)?e.call(s.proxy):e}}const Qs={};function is(t,e,n){return Wa(t,e,n)}function Wa(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=he){const l=Te;let c,a=!1,u=!1;if(de(t)?(c=()=>t.value,a=ci(t)):Ot(t)?(c=()=>t,s=!0):U(t)?(u=!0,a=t.some(D=>Ot(D)||ci(D)),c=()=>t.map(D=>{if(de(D))return D.value;if(Ot(D))return en(D);if(W(D))return Dt(D,l,2)})):W(t)?e?c=()=>Dt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),ot(t,l,3,[f])}:c=rt,e&&s){const D=c;c=()=>en(D())}let h,f=D=>{h=x.onStop=()=>{Dt(D,l,4)}},_;if(Ln)if(f=rt,e?n&&ot(e,l,3,[c(),u?[]:void 0,f]):c(),i==="sync"){const D=ap();_=D.__watcherHandles||(D.__watcherHandles=[])}else return rt;let g=u?new Array(t.length).fill(Qs):Qs;const b=()=>{if(x.active)if(e){const D=x.run();(s||a||(u?D.some((K,se)=>ms(K,g[se])):ms(D,g)))&&(h&&h(),ot(e,l,3,[D,g===Qs?void 0:u&&g[0]===Qs?[]:g,f]),g=D)}else x.run()};b.allowRecurse=!!e;let P;i==="sync"?P=b:i==="post"?P=()=>Fe(b,l&&l.suspense):(b.pre=!0,l&&(b.id=l.uid),P=()=>Di(b));const x=new fo(c,P);e?n?b():g=x.run():i==="post"?Fe(x.run.bind(x),l&&l.suspense):x.run();const O=()=>{x.stop(),l&&l.scope&&ao(l.scope.effects,x)};return _&&_.push(O),O}function _d(t,e,n){const s=this.proxy,i=Ce(t)?t.includes(".")?$a(s,t):()=>s[t]:t.bind(s,s);let r;W(e)?r=e:(r=e.handler,n=e);const o=Te;Mn(this);const l=Wa(i,r.bind(s),n);return o?Mn(o):rn(),l}function $a(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function en(t,e){if(!ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),de(t))en(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)en(t[n],e);else if(Ai(t)||Sn(t))t.forEach(n=>{en(n,e)});else if(da(t))for(const n in t)en(t[n],e);return t}function Vt(t){return W(t)?{setup:t,name:t.name}:t}const si=t=>!!t.type.__asyncLoader;function wl(t){W(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,timeout:r,suspensible:o=!0,onError:l}=t;let c=null,a,u=0;const h=()=>(u++,c=null,f()),f=()=>{let _;return c||(_=c=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),l)return new Promise((b,P)=>{l(g,()=>b(h()),()=>P(g),u+1)});throw g}).then(g=>_!==c&&c?c:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),a=g,g)))};return Vt({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return a},setup(){const _=Te;if(a)return()=>nr(a,_);const g=O=>{c=null,Ls(O,_,13,!s)};if(o&&_.suspense||Ln)return f().then(O=>()=>nr(O,_)).catch(O=>(g(O),()=>s?pe(s,{error:O}):null));const b=kt(!1),P=kt(),x=kt(!!i);return i&&setTimeout(()=>{x.value=!1},i),r!=null&&setTimeout(()=>{if(!b.value&&!P.value){const O=new Error(`Async component timed out after ${r}ms.`);g(O),P.value=O}},r),f().then(()=>{b.value=!0,_.parent&&Co(_.parent.vnode)&&Di(_.parent.update)}).catch(O=>{g(O),P.value=O}),()=>{if(b.value&&a)return nr(a,_);if(P.value&&s)return pe(s,{error:P.value});if(n&&!x.value)return pe(n)}}})}function nr(t,e){const{ref:n,props:s,children:i,ce:r}=e.vnode,o=pe(t,s,i);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const Co=t=>t.type.__isKeepAlive;function gd(t,e){ja(t,"a",e)}function md(t,e){ja(t,"da",e)}function ja(t,e,n=Te){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Fi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Co(i.parent.vnode)&&yd(s,e,n,i),i=i.parent}}function yd(t,e,n,s){const i=Fi(e,t,s,!0);Va(()=>{ao(s[e],i)},n)}function Fi(t,e,n=Te,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Vn(),Mn(n);const l=ot(e,n,t,o);return rn(),zn(),l});return s?i.unshift(r):i.push(r),r}}const bt=t=>(e,n=Te)=>(!Ln||t==="sp")&&Fi(t,(...s)=>e(...s),n),vd=bt("bm"),Ed=bt("m"),Cd=bt("bu"),bd=bt("u"),wd=bt("bum"),Va=bt("um"),Id=bt("sp"),Sd=bt("rtg"),Td=bt("rtc");function Rd(t,e=Te){Fi("ec",t,e)}function xd(t,e){const n=Ye;if(n===null)return t;const s=Hi(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,c,a=he]=e[r];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&en(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:c,modifiers:a}))}return t}function qt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Vn(),ot(c,n,8,[t.el,l,t,e]),zn())}}const Nd=Symbol();function Pd(t,e,n,s){let i;const r=n&&n[s];if(U(t)||Ce(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ae(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const a=o[l];i[l]=e(t[a],a,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const xr=t=>t?tu(t)?Hi(t)||t.proxy:xr(t.parent):null,rs=De(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xr(t.parent),$root:t=>xr(t.root),$emit:t=>t.emit,$options:t=>bo(t),$forceUpdate:t=>t.f||(t.f=()=>Di(t.update)),$nextTick:t=>t.n||(t.n=Eo.bind(t.proxy)),$watch:t=>_d.bind(t)}),sr=(t,e)=>t!==he&&!t.__isScriptSetup&&Q(t,e),Ad={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(sr(s,e))return o[e]=1,s[e];if(i!==he&&Q(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&Q(a,e))return o[e]=3,r[e];if(n!==he&&Q(n,e))return o[e]=4,n[e];Nr&&(o[e]=0)}}const u=rs[e];let h,f;if(u)return e==="$attrs"&&ze(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==he&&Q(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,Q(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return sr(i,e)?(i[e]=n,!0):s!==he&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==he&&Q(t,o)||sr(e,o)||(l=r[0])&&Q(l,o)||Q(s,o)||Q(rs,o)||Q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Nr=!0;function Od(t){const e=bo(t),n=t.proxy,s=t.ctx;Nr=!1,e.beforeCreate&&Il(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:g,activated:b,deactivated:P,beforeDestroy:x,beforeUnmount:O,destroyed:D,unmounted:K,render:se,renderTracked:ye,renderTriggered:X,errorCaptured:G,serverPrefetch:Pe,expose:Re,inheritAttrs:Me,components:qe,directives:St,filters:$e}=e;if(a&&kd(a,s,null,t.appContext.config.unwrapInjectedRef),o)for(const re in o){const te=o[re];W(te)&&(s[re]=te.bind(n))}if(i){const re=i.call(n,n);ae(re)&&(t.data=jt(re))}if(Nr=!0,r)for(const re in r){const te=r[re],Qe=W(te)?te.bind(n,n):W(te.get)?te.get.bind(n,n):rt,zt=!W(te)&&W(te.set)?te.set.bind(n):rt,Xe=Be({get:Qe,set:zt});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:Le=>Xe.value=Le})}if(l)for(const re in l)za(l[re],s,n,re);if(c){const re=W(c)?c.call(n):c;Reflect.ownKeys(re).forEach(te=>{ni(te,re[te])})}u&&Il(u,t,"c");function ge(re,te){U(te)?te.forEach(Qe=>re(Qe.bind(n))):te&&re(te.bind(n))}if(ge(vd,h),ge(Ed,f),ge(Cd,_),ge(bd,g),ge(gd,b),ge(md,P),ge(Rd,G),ge(Td,ye),ge(Sd,X),ge(wd,O),ge(Va,K),ge(Id,Pe),U(Re))if(Re.length){const re=t.exposed||(t.exposed={});Re.forEach(te=>{Object.defineProperty(re,te,{get:()=>n[te],set:Qe=>n[te]=Qe})})}else t.exposed||(t.exposed={});se&&t.render===rt&&(t.render=se),Me!=null&&(t.inheritAttrs=Me),qe&&(t.components=qe),St&&(t.directives=St)}function kd(t,e,n=rt,s=!1){U(t)&&(t=Pr(t));for(const i in t){const r=t[i];let o;ae(r)?"default"in r?o=lt(r.from||i,r.default,!0):o=lt(r.from||i):o=lt(r),de(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Il(t,e,n){ot(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function za(t,e,n,s){const i=s.includes(".")?$a(n,s):()=>n[s];if(Ce(t)){const r=e[t];W(r)&&is(i,r)}else if(W(t))is(i,t.bind(n));else if(ae(t))if(U(t))t.forEach(r=>za(r,e,n,s));else{const r=W(t.handler)?t.handler.bind(n):e[t.handler];W(r)&&is(i,r,t)}}function bo(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>ui(c,a,o,!0)),ui(c,e,o)),ae(e)&&r.set(e,c),c}function ui(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ui(t,r,n,!0),i&&i.forEach(o=>ui(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Dd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Dd={data:Sl,props:Gt,emits:Gt,methods:Gt,computed:Gt,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Gt,directives:Gt,watch:Ld,provide:Sl,inject:Md};function Sl(t,e){return e?t?function(){return De(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Md(t,e){return Gt(Pr(t),Pr(e))}function Pr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ae(t,e){return t?[...new Set([].concat(t,e))]:e}function Gt(t,e){return t?De(De(Object.create(null),t),e):e}function Ld(t,e){if(!t)return e;if(!e)return t;const n=De(Object.create(null),t);for(const s in e)n[s]=Ae(t[s],e[s]);return n}function Fd(t,e,n,s=!1){const i={},r={};oi(r,Ui,1),t.propsDefaults=Object.create(null),qa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Kf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Bd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Z(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Mi(t.emitsOptions,f))continue;const _=e[f];if(c)if(Q(r,f))_!==r[f]&&(r[f]=_,a=!0);else{const g=An(f);i[g]=Ar(c,l,g,_,t,!1)}else _!==r[f]&&(r[f]=_,a=!0)}}}else{qa(t,e,i,r)&&(a=!0);let u;for(const h in l)(!e||!Q(e,h)&&((u=jn(h))===h||!Q(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ar(c,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!Q(e,h))&&(delete r[h],a=!0)}a&&Et(t,"set","$attrs")}function qa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ei(c))continue;const a=e[c];let u;i&&Q(i,u=An(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:Mi(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Z(n),a=l||he;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Ar(i,c,h,a[h],t,!Q(a,h))}}return o}function Ar(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=Q(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&W(c)){const{propsDefaults:a}=i;n in a?s=a[n]:(Mn(i),s=a[n]=c.call(null,e),rn())}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===jn(n))&&(s=!0))}return s}function Ka(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!W(t)){const u=h=>{c=!0;const[f,_]=Ka(h,e,!0);De(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ae(t)&&s.set(t,In),In;if(U(r))for(let u=0;u<r.length;u++){const h=An(r[u]);Tl(h)&&(o[h]=he)}else if(r)for(const u in r){const h=An(u);if(Tl(h)){const f=r[u],_=o[h]=U(f)||W(f)?{type:f}:Object.assign({},f);if(_){const g=Nl(Boolean,_.type),b=Nl(String,_.type);_[0]=g>-1,_[1]=b<0||g<b,(g>-1||Q(_,"default"))&&l.push(h)}}}const a=[o,l];return ae(t)&&s.set(t,a),a}function Tl(t){return t[0]!=="$"}function Rl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function xl(t,e){return Rl(t)===Rl(e)}function Nl(t,e){return U(e)?e.findIndex(n=>xl(n,t)):W(e)&&xl(e,t)?0:-1}const Ga=t=>t[0]==="_"||t==="$stable",wo=t=>U(t)?t.map(ft):[ft(t)],Ud=(t,e,n)=>{if(e._n)return e;const s=cd((...i)=>wo(e(...i)),n);return s._c=!1,s},Ya=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ga(i))continue;const r=t[i];if(W(r))e[i]=Ud(i,r,s);else if(r!=null){const o=wo(r);e[i]=()=>o}}},Qa=(t,e)=>{const n=wo(e);t.slots.default=()=>n},Hd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),oi(e,"_",n)):Ya(e,t.slots={})}else t.slots={},e&&Qa(t,e);oi(t.slots,Ui,1)},Wd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=he;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(De(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Ya(e,i)),o=e}else e&&(Qa(t,e),o={default:1});if(r)for(const l in i)!Ga(l)&&!(l in o)&&delete i[l]};function Xa(){return{app:null,config:{isNativeTag:ff,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $d=0;function jd(t,e){return function(s,i=null){W(s)||(s=Object.assign({},s)),i!=null&&!ae(i)&&(i=null);const r=Xa(),o=new Set;let l=!1;const c=r.app={_uid:$d++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:up,get config(){return r.config},set config(a){},use(a,...u){return o.has(a)||(a&&W(a.install)?(o.add(a),a.install(c,...u)):W(a)&&(o.add(a),a(c,...u))),c},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),c},component(a,u){return u?(r.components[a]=u,c):r.components[a]},directive(a,u){return u?(r.directives[a]=u,c):r.directives[a]},mount(a,u,h){if(!l){const f=pe(s,i);return f.appContext=r,u&&e?e(f,a):t(f,a,h),l=!0,c._container=a,a.__vue_app__=c,Hi(f.component)||f.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(a,u){return r.provides[a]=u,c}};return c}}function Or(t,e,n,s,i=!1){if(U(t)){t.forEach((f,_)=>Or(f,e&&(U(e)?e[_]:e),n,s,i));return}if(si(s)&&!i)return;const r=s.shapeFlag&4?Hi(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===he?l.refs={}:l.refs,h=l.setupState;if(a!=null&&a!==c&&(Ce(a)?(u[a]=null,Q(h,a)&&(h[a]=null)):de(a)&&(a.value=null)),W(c))Dt(c,l,12,[o,u]);else{const f=Ce(c),_=de(c);if(f||_){const g=()=>{if(t.f){const b=f?Q(h,c)?h[c]:u[c]:c.value;i?U(b)&&ao(b,r):U(b)?b.includes(r)||b.push(r):f?(u[c]=[r],Q(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,Q(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Fe(g,n)):g()}}}const Fe=pd;function Vd(t){return zd(t)}function zd(t,e){const n=yf();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=rt,insertStaticContent:g}=t,b=(d,p,m,y=null,E=null,S=null,N=!1,I=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Xn(d,p)&&(y=R(d),Le(d,E,S,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:C,ref:L,shapeFlag:k}=p;switch(C){case Bi:P(d,p,m,y);break;case ln:x(d,p,m,y);break;case ii:d==null&&O(p,m,y,N);break;case Ke:qe(d,p,m,y,E,S,N,I,T);break;default:k&1?se(d,p,m,y,E,S,N,I,T):k&6?St(d,p,m,y,E,S,N,I,T):(k&64||k&128)&&C.process(d,p,m,y,E,S,N,I,T,Y)}L!=null&&E&&Or(L,d&&d.ref,S,p||d,!p)},P=(d,p,m,y)=>{if(d==null)s(p.el=l(p.children),m,y);else{const E=p.el=d.el;p.children!==d.children&&a(E,p.children)}},x=(d,p,m,y)=>{d==null?s(p.el=c(p.children||""),m,y):p.el=d.el},O=(d,p,m,y)=>{[d.el,d.anchor]=g(d.children,p,m,y,d.el,d.anchor)},D=({el:d,anchor:p},m,y)=>{let E;for(;d&&d!==p;)E=f(d),s(d,m,y),d=E;s(p,m,y)},K=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),i(d),d=m;i(p)},se=(d,p,m,y,E,S,N,I,T)=>{N=N||p.type==="svg",d==null?ye(p,m,y,E,S,N,I,T):Pe(d,p,E,S,N,I,T)},ye=(d,p,m,y,E,S,N,I)=>{let T,C;const{type:L,props:k,shapeFlag:F,transition:H,dirs:z}=d;if(T=d.el=o(d.type,S,k&&k.is,k),F&8?u(T,d.children):F&16&&G(d.children,T,null,y,E,S&&L!=="foreignObject",N,I),z&&qt(d,null,y,"created"),k){for(const ne in k)ne!=="value"&&!ei(ne)&&r(T,ne,null,k[ne],S,d.children,y,E,A);"value"in k&&r(T,"value",null,k.value),(C=k.onVnodeBeforeMount)&&ht(C,y,d)}X(T,d,d.scopeId,N,y),z&&qt(d,null,y,"beforeMount");const oe=(!E||E&&!E.pendingBranch)&&H&&!H.persisted;oe&&H.beforeEnter(T),s(T,p,m),((C=k&&k.onVnodeMounted)||oe||z)&&Fe(()=>{C&&ht(C,y,d),oe&&H.enter(T),z&&qt(d,null,y,"mounted")},E)},X=(d,p,m,y,E)=>{if(m&&_(d,m),y)for(let S=0;S<y.length;S++)_(d,y[S]);if(E){let S=E.subTree;if(p===S){const N=E.vnode;X(d,N,N.scopeId,N.slotScopeIds,E.parent)}}},G=(d,p,m,y,E,S,N,I,T=0)=>{for(let C=T;C<d.length;C++){const L=d[C]=I?xt(d[C]):ft(d[C]);b(null,L,p,m,y,E,S,N,I)}},Pe=(d,p,m,y,E,S,N)=>{const I=p.el=d.el;let{patchFlag:T,dynamicChildren:C,dirs:L}=p;T|=d.patchFlag&16;const k=d.props||he,F=p.props||he;let H;m&&Kt(m,!1),(H=F.onVnodeBeforeUpdate)&&ht(H,m,p,d),L&&qt(p,d,m,"beforeUpdate"),m&&Kt(m,!0);const z=E&&p.type!=="foreignObject";if(C?Re(d.dynamicChildren,C,I,m,y,z,S):N||te(d,p,I,null,m,y,z,S,!1),T>0){if(T&16)Me(I,p,k,F,m,y,E);else if(T&2&&k.class!==F.class&&r(I,"class",null,F.class,E),T&4&&r(I,"style",k.style,F.style,E),T&8){const oe=p.dynamicProps;for(let ne=0;ne<oe.length;ne++){const me=oe[ne],Je=k[me],gn=F[me];(gn!==Je||me==="value")&&r(I,me,Je,gn,E,d.children,m,y,A)}}T&1&&d.children!==p.children&&u(I,p.children)}else!N&&C==null&&Me(I,p,k,F,m,y,E);((H=F.onVnodeUpdated)||L)&&Fe(()=>{H&&ht(H,m,p,d),L&&qt(p,d,m,"updated")},y)},Re=(d,p,m,y,E,S,N)=>{for(let I=0;I<p.length;I++){const T=d[I],C=p[I],L=T.el&&(T.type===Ke||!Xn(T,C)||T.shapeFlag&70)?h(T.el):m;b(T,C,L,null,y,E,S,N,!0)}},Me=(d,p,m,y,E,S,N)=>{if(m!==y){if(m!==he)for(const I in m)!ei(I)&&!(I in y)&&r(d,I,m[I],null,N,p.children,E,S,A);for(const I in y){if(ei(I))continue;const T=y[I],C=m[I];T!==C&&I!=="value"&&r(d,I,C,T,N,p.children,E,S,A)}"value"in y&&r(d,"value",m.value,y.value)}},qe=(d,p,m,y,E,S,N,I,T)=>{const C=p.el=d?d.el:l(""),L=p.anchor=d?d.anchor:l("");let{patchFlag:k,dynamicChildren:F,slotScopeIds:H}=p;H&&(I=I?I.concat(H):H),d==null?(s(C,m,y),s(L,m,y),G(p.children,m,L,E,S,N,I,T)):k>0&&k&64&&F&&d.dynamicChildren?(Re(d.dynamicChildren,F,m,E,S,N,I),(p.key!=null||E&&p===E.subTree)&&Ja(d,p,!0)):te(d,p,m,L,E,S,N,I,T)},St=(d,p,m,y,E,S,N,I,T)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?E.ctx.activate(p,m,y,N,T):$e(p,m,y,E,S,N,T):be(d,p,T)},$e=(d,p,m,y,E,S,N)=>{const I=d.component=tp(d,y,E);if(Co(d)&&(I.ctx.renderer=Y),sp(I),I.asyncDep){if(E&&E.registerDep(I,ge),!d.el){const T=I.subTree=pe(ln);x(null,T,p,m)}return}ge(I,d,p,m,E,S,N)},be=(d,p,m)=>{const y=p.component=d.component;if(hd(d,p,m))if(y.asyncDep&&!y.asyncResolved){re(y,p,m);return}else y.next=p,id(y.update),y.update();else p.el=d.el,y.vnode=p},ge=(d,p,m,y,E,S,N)=>{const I=()=>{if(d.isMounted){let{next:L,bu:k,u:F,parent:H,vnode:z}=d,oe=L,ne;Kt(d,!1),L?(L.el=z.el,re(d,L,N)):L=z,k&&ti(k),(ne=L.props&&L.props.onVnodeBeforeUpdate)&&ht(ne,H,L,z),Kt(d,!0);const me=tr(d),Je=d.subTree;d.subTree=me,b(Je,me,h(Je.el),R(Je),d,E,S),L.el=me.el,oe===null&&fd(d,me.el),F&&Fe(F,E),(ne=L.props&&L.props.onVnodeUpdated)&&Fe(()=>ht(ne,H,L,z),E)}else{let L;const{el:k,props:F}=p,{bm:H,m:z,parent:oe}=d,ne=si(p);if(Kt(d,!1),H&&ti(H),!ne&&(L=F&&F.onVnodeBeforeMount)&&ht(L,oe,p),Kt(d,!0),k&&$){const me=()=>{d.subTree=tr(d),$(k,d.subTree,d,E,null)};ne?p.type.__asyncLoader().then(()=>!d.isUnmounted&&me()):me()}else{const me=d.subTree=tr(d);b(null,me,m,y,d,E,S),p.el=me.el}if(z&&Fe(z,E),!ne&&(L=F&&F.onVnodeMounted)){const me=p;Fe(()=>ht(L,oe,me),E)}(p.shapeFlag&256||oe&&si(oe.vnode)&&oe.vnode.shapeFlag&256)&&d.a&&Fe(d.a,E),d.isMounted=!0,p=m=y=null}},T=d.effect=new fo(I,()=>Di(C),d.scope),C=d.update=()=>T.run();C.id=d.uid,Kt(d,!0),C()},re=(d,p,m)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Bd(d,p.props,y,m),Wd(d,p.children,m),Vn(),Cl(),zn()},te=(d,p,m,y,E,S,N,I,T=!1)=>{const C=d&&d.children,L=d?d.shapeFlag:0,k=p.children,{patchFlag:F,shapeFlag:H}=p;if(F>0){if(F&128){zt(C,k,m,y,E,S,N,I,T);return}else if(F&256){Qe(C,k,m,y,E,S,N,I,T);return}}H&8?(L&16&&A(C,E,S),k!==C&&u(m,k)):L&16?H&16?zt(C,k,m,y,E,S,N,I,T):A(C,E,S,!0):(L&8&&u(m,""),H&16&&G(k,m,y,E,S,N,I,T))},Qe=(d,p,m,y,E,S,N,I,T)=>{d=d||In,p=p||In;const C=d.length,L=p.length,k=Math.min(C,L);let F;for(F=0;F<k;F++){const H=p[F]=T?xt(p[F]):ft(p[F]);b(d[F],H,m,null,E,S,N,I,T)}C>L?A(d,E,S,!0,!1,k):G(p,m,y,E,S,N,I,T,k)},zt=(d,p,m,y,E,S,N,I,T)=>{let C=0;const L=p.length;let k=d.length-1,F=L-1;for(;C<=k&&C<=F;){const H=d[C],z=p[C]=T?xt(p[C]):ft(p[C]);if(Xn(H,z))b(H,z,m,null,E,S,N,I,T);else break;C++}for(;C<=k&&C<=F;){const H=d[k],z=p[F]=T?xt(p[F]):ft(p[F]);if(Xn(H,z))b(H,z,m,null,E,S,N,I,T);else break;k--,F--}if(C>k){if(C<=F){const H=F+1,z=H<L?p[H].el:y;for(;C<=F;)b(null,p[C]=T?xt(p[C]):ft(p[C]),m,z,E,S,N,I,T),C++}}else if(C>F)for(;C<=k;)Le(d[C],E,S,!0),C++;else{const H=C,z=C,oe=new Map;for(C=z;C<=F;C++){const je=p[C]=T?xt(p[C]):ft(p[C]);je.key!=null&&oe.set(je.key,C)}let ne,me=0;const Je=F-z+1;let gn=!1,al=0;const Qn=new Array(Je);for(C=0;C<Je;C++)Qn[C]=0;for(C=H;C<=k;C++){const je=d[C];if(me>=Je){Le(je,E,S,!0);continue}let ut;if(je.key!=null)ut=oe.get(je.key);else for(ne=z;ne<=F;ne++)if(Qn[ne-z]===0&&Xn(je,p[ne])){ut=ne;break}ut===void 0?Le(je,E,S,!0):(Qn[ut-z]=C+1,ut>=al?al=ut:gn=!0,b(je,p[ut],m,null,E,S,N,I,T),me++)}const ul=gn?qd(Qn):In;for(ne=ul.length-1,C=Je-1;C>=0;C--){const je=z+C,ut=p[je],hl=je+1<L?p[je+1].el:y;Qn[C]===0?b(null,ut,m,hl,E,S,N,I,T):gn&&(ne<0||C!==ul[ne]?Xe(ut,m,hl,2):ne--)}}},Xe=(d,p,m,y,E=null)=>{const{el:S,type:N,transition:I,children:T,shapeFlag:C}=d;if(C&6){Xe(d.component.subTree,p,m,y);return}if(C&128){d.suspense.move(p,m,y);return}if(C&64){N.move(d,p,m,Y);return}if(N===Ke){s(S,p,m);for(let k=0;k<T.length;k++)Xe(T[k],p,m,y);s(d.anchor,p,m);return}if(N===ii){D(d,p,m);return}if(y!==2&&C&1&&I)if(y===0)I.beforeEnter(S),s(S,p,m),Fe(()=>I.enter(S),E);else{const{leave:k,delayLeave:F,afterLeave:H}=I,z=()=>s(S,p,m),oe=()=>{k(S,()=>{z(),H&&H()})};F?F(S,z,oe):oe()}else s(S,p,m)},Le=(d,p,m,y=!1,E=!1)=>{const{type:S,props:N,ref:I,children:T,dynamicChildren:C,shapeFlag:L,patchFlag:k,dirs:F}=d;if(I!=null&&Or(I,null,m,d,!0),L&256){p.ctx.deactivate(d);return}const H=L&1&&F,z=!si(d);let oe;if(z&&(oe=N&&N.onVnodeBeforeUnmount)&&ht(oe,p,d),L&6)v(d.component,m,y);else{if(L&128){d.suspense.unmount(m,y);return}H&&qt(d,null,p,"beforeUnmount"),L&64?d.type.remove(d,p,m,E,Y,y):C&&(S!==Ke||k>0&&k&64)?A(C,p,m,!1,!0):(S===Ke&&k&384||!E&&L&16)&&A(T,p,m),y&&_n(d)}(z&&(oe=N&&N.onVnodeUnmounted)||H)&&Fe(()=>{oe&&ht(oe,p,d),H&&qt(d,null,p,"unmounted")},m)},_n=d=>{const{type:p,el:m,anchor:y,transition:E}=d;if(p===Ke){Vs(m,y);return}if(p===ii){K(d);return}const S=()=>{i(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:N,delayLeave:I}=E,T=()=>N(m,S);I?I(d.el,S,T):T()}else S()},Vs=(d,p)=>{let m;for(;d!==p;)m=f(d),i(d),d=m;i(p)},v=(d,p,m)=>{const{bum:y,scope:E,update:S,subTree:N,um:I}=d;y&&ti(y),E.stop(),S&&(S.active=!1,Le(N,d,p,m)),I&&Fe(I,p),Fe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},A=(d,p,m,y=!1,E=!1,S=0)=>{for(let N=S;N<d.length;N++)Le(d[N],p,m,y,E)},R=d=>d.shapeFlag&6?R(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),M=(d,p,m)=>{d==null?p._vnode&&Le(p._vnode,null,null,!0):b(p._vnode||null,d,p,null,null,null,m),Cl(),La(),p._vnode=d},Y={p:b,um:Le,m:Xe,r:_n,mt:$e,mc:G,pc:te,pbc:Re,n:R,o:t};let fe,$;return e&&([fe,$]=e(Y)),{render:M,hydrate:fe,createApp:jd(M,fe)}}function Kt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ja(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=xt(i[r]),l.el=o.el),n||Ja(o,l)),l.type===Bi&&(l.el=o.el)}}function qd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Kd=t=>t.__isTeleport,Ke=Symbol(void 0),Bi=Symbol(void 0),ln=Symbol(void 0),ii=Symbol(void 0),os=[];let nt=null;function Ge(t=!1){os.push(nt=t?null:[])}function Gd(){os.pop(),nt=os[os.length-1]||null}let Cs=1;function Pl(t){Cs+=t}function Za(t){return t.dynamicChildren=Cs>0?nt||In:null,Gd(),Cs>0&&nt&&nt.push(t),t}function cn(t,e,n,s,i,r){return Za(et(t,e,n,s,i,r,!0))}function ls(t,e,n,s,i){return Za(pe(t,e,n,s,i,!0))}function kr(t){return t?t.__v_isVNode===!0:!1}function Xn(t,e){return t.type===e.type&&t.key===e.key}const Ui="__vInternal",eu=({key:t})=>t??null,ri=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ce(t)||de(t)||W(t)?{i:Ye,r:t,k:e,f:!!n}:t:null;function et(t,e=null,n=null,s=0,i=null,r=t===Ke?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&eu(e),ref:e&&ri(e),scopeId:Li,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ye};return l?(Io(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Ce(n)?8:16),Cs>0&&!o&&nt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&nt.push(c),c}const pe=Yd;function Yd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Nd)&&(t=ln),kr(t)){const l=Dn(t,e,!0);return n&&Io(l,n),Cs>0&&!r&&nt&&(l.shapeFlag&6?nt[nt.indexOf(t)]=l:nt.push(l)),l.patchFlag|=-2,l}if(lp(t)&&(t=t.__vccOpts),e){e=Qd(e);let{class:l,style:c}=e;l&&!Ce(l)&&(e.class=_s(l)),ae(c)&&(xa(c)&&!U(c)&&(c=De({},c)),e.style=lo(c))}const o=Ce(t)?1:dd(t)?128:Kd(t)?64:ae(t)?4:W(t)?2:0;return et(t,e,n,s,i,o,r,!0)}function Qd(t){return t?xa(t)||Ui in t?De({},t):t:null}function Dn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Jd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&eu(l),ref:e&&e.ref?n&&i?U(i)?i.concat(ri(e)):[i,ri(e)]:ri(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Dn(t.ssContent),ssFallback:t.ssFallback&&Dn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Xd(t=" ",e=0){return pe(Bi,null,t,e)}function cC(t,e){const n=pe(ii,null,t);return n.staticCount=e,n}function Dr(t="",e=!1){return e?(Ge(),ls(ln,null,t)):pe(ln,null,t)}function ft(t){return t==null||typeof t=="boolean"?pe(ln):U(t)?pe(Ke,null,t.slice()):typeof t=="object"?xt(t):pe(Bi,null,String(t))}function xt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Dn(t)}function Io(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Io(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ui in e)?e._ctx=Ye:i===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),s&64?(n=16,e=[Xd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Jd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=_s([e.class,s.class]));else if(i==="style")e.style=lo([e.style,s.style]);else if(Pi(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ht(t,e,n,s=null){ot(t,e,7,[n,s])}const Zd=Xa();let ep=0;function tp(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Zd,r={uid:ep++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new _a(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ka(s,i),emitsOptions:Ba(s,i),emit:null,emitted:null,propsDefaults:he,inheritAttrs:s.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ld.bind(null,r),t.ce&&t.ce(r),r}let Te=null;const np=()=>Te||Ye,Mn=t=>{Te=t,t.scope.on()},rn=()=>{Te&&Te.scope.off(),Te=null};function tu(t){return t.vnode.shapeFlag&4}let Ln=!1;function sp(t,e=!1){Ln=e;const{props:n,children:s}=t.vnode,i=tu(t);Fd(t,n,i,e),Hd(t,s);const r=i?ip(t,e):void 0;return Ln=!1,r}function ip(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=kn(new Proxy(t.ctx,Ad));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?op(t):null;Mn(t),Vn();const r=Dt(s,t,0,[t.props,i]);if(zn(),rn(),ha(r)){if(r.then(rn,rn),e)return r.then(o=>{Al(t,o,e)}).catch(o=>{Ls(o,t,0)});t.asyncDep=r}else Al(t,r,e)}else nu(t,e)}function Al(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=Oa(e)),nu(t,n)}let Ol;function nu(t,e,n){const s=t.type;if(!t.render){if(!e&&Ol&&!s.render){const i=s.template||bo(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,a=De(De({isCustomElement:r,delimiters:l},o),c);s.render=Ol(i,a)}}t.render=s.render||rt}Mn(t),Vn(),Od(t),zn(),rn()}function rp(t){return new Proxy(t.attrs,{get(e,n){return ze(t,"get","$attrs"),e[n]}})}function op(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=rp(t))},slots:t.slots,emit:t.emit,expose:e}}function Hi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Oa(kn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in rs)return rs[n](t)},has(e,n){return n in e||n in rs}}))}function lp(t){return W(t)&&"__vccOpts"in t}const Be=(t,e)=>td(t,e,Ln);function su(t,e,n){const s=arguments.length;return s===2?ae(e)&&!U(e)?kr(e)?pe(t,null,[e]):pe(t,e):pe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&kr(n)&&(n=[n]),pe(t,e,n))}const cp=Symbol(""),ap=()=>lt(cp),up="3.2.45",hp="http://www.w3.org/2000/svg",Jt=typeof document<"u"?document:null,kl=Jt&&Jt.createElement("template"),fp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Jt.createElementNS(hp,t):Jt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Jt.createTextNode(t),createComment:t=>Jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{kl.innerHTML=s?`<svg>${t}</svg>`:t;const l=kl.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function dp(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function pp(t,e,n){const s=t.style,i=Ce(n);if(n&&!i){for(const r in n)Mr(s,r,n[r]);if(e&&!Ce(e))for(const r in e)n[r]==null&&Mr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Dl=/\s*!important$/;function Mr(t,e,n){if(U(n))n.forEach(s=>Mr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_p(t,e);Dl.test(n)?t.setProperty(jn(s),n.replace(Dl,""),"important"):t[s]=n}}const Ml=["Webkit","Moz","ms"],ir={};function _p(t,e){const n=ir[e];if(n)return n;let s=An(e);if(s!=="filter"&&s in t)return ir[e]=s;s=pa(s);for(let i=0;i<Ml.length;i++){const r=Ml[i]+s;if(r in t)return ir[e]=r}return e}const Ll="http://www.w3.org/1999/xlink";function gp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ll,e.slice(6,e.length)):t.setAttributeNS(Ll,e,n);else{const r=uf(e);n==null||r&&!la(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function mp(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=la(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Zt(t,e,n,s){t.addEventListener(e,n,s)}function yp(t,e,n,s){t.removeEventListener(e,n,s)}function vp(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Ep(e);if(s){const a=r[e]=wp(s,i);Zt(t,l,a,c)}else o&&(yp(t,l,o,c),r[e]=void 0)}}const Fl=/(?:Once|Passive|Capture)$/;function Ep(t){let e;if(Fl.test(t)){e={};let s;for(;s=t.match(Fl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):jn(t.slice(2)),e]}let rr=0;const Cp=Promise.resolve(),bp=()=>rr||(Cp.then(()=>rr=0),rr=Date.now());function wp(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ot(Ip(s,n.value),e,5,[s])};return n.value=t,n.attached=bp(),n}function Ip(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Bl=/^on[a-z]/,Sp=(t,e,n,s,i=!1,r,o,l,c)=>{e==="class"?dp(t,s,i):e==="style"?pp(t,n,s):Pi(e)?co(e)||vp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tp(t,e,s,i))?mp(t,e,s,r,o,l,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),gp(t,e,s,i))};function Tp(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Bl.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Bl.test(e)&&Ce(n)?!1:e in t}const hi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>ti(e,n):e};function Rp(t){t.target.composing=!0}function Ul(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const aC={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=hi(i);const r=s||i.props&&i.props.type==="number";Zt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=li(l)),t._assign(l)}),n&&Zt(t,"change",()=>{t.value=t.value.trim()}),e||(Zt(t,"compositionstart",Rp),Zt(t,"compositionend",Ul),Zt(t,"change",Ul))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=hi(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&li(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},xp={deep:!0,created(t,e,n){t._assign=hi(n),Zt(t,"change",()=>{const s=t._modelValue,i=Np(t),r=t.checked,o=t._assign;if(U(s)){const l=ca(s,i),c=l!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const a=[...s];a.splice(l,1),o(a)}}else if(Ai(s)){const l=new Set(s);r?l.add(i):l.delete(i),o(l)}else o(iu(t,r))})},mounted:Hl,beforeUpdate(t,e,n){t._assign=hi(n),Hl(t,e,n)}};function Hl(t,{value:e,oldValue:n},s){t._modelValue=e,U(e)?t.checked=ca(e,s.props.value)>-1:Ai(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Ni(e,iu(t,!0)))}function Np(t){return"_value"in t?t._value:t.value}function iu(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Pp=["ctrl","shift","alt","meta"],Ap={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Pp.some(n=>t[`${n}Key`]&&!e.includes(n))},uC=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Ap[e[i]];if(r&&r(n,e))return}return t(n,...s)},Op=De({patchProp:Sp},fp);let Wl;function kp(){return Wl||(Wl=Vd(Op))}const Dp=(...t)=>{const e=kp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Mp(s);if(!i)return;const r=e._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Mp(t){return Ce(t)?document.querySelector(t):t}var Lp=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let ru;const Wi=t=>ru=t,ou=Symbol();function Lr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var cs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(cs||(cs={}));function Fp(){const t=ga(!0),e=t.run(()=>kt({}));let n=[],s=[];const i=kn({install(r){Wi(i),i._a=r,r.provide(ou,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Lp?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const lu=()=>{};function $l(t,e,n,s=lu){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Ef()&&Cf(i),i}function mn(t,...e){t.slice().forEach(n=>{n(...e)})}function Fr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Lr(i)&&Lr(s)&&t.hasOwnProperty(n)&&!de(s)&&!Ot(s)?t[n]=Fr(i,s):t[n]=s}return t}const Bp=Symbol();function Up(t){return!Lr(t)||!t.hasOwnProperty(Bp)}const{assign:Nt}=Object;function Hp(t){return!!(de(t)&&t.effect)}function Wp(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=Xf(n.state.value[t]);return Nt(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=kn(Be(()=>{Wi(n);const _=n._s.get(t);return o[f].call(_,_)})),h),{}))}return c=cu(t,a,e,n,s,!0),c.$reset=function(){const h=i?i():{};this.$patch(f=>{Nt(f,h)})},c}function cu(t,e,n={},s,i,r){let o;const l=Nt({actions:{}},n),c={deep:!0};let a,u,h=kn([]),f=kn([]),_;const g=s.state.value[t];!r&&!g&&(s.state.value[t]={}),kt({});let b;function P(X){let G;a=u=!1,typeof X=="function"?(X(s.state.value[t]),G={type:cs.patchFunction,storeId:t,events:_}):(Fr(s.state.value[t],X),G={type:cs.patchObject,payload:X,storeId:t,events:_});const Pe=b=Symbol();Eo().then(()=>{b===Pe&&(a=!0)}),u=!0,mn(h,G,s.state.value[t])}const x=lu;function O(){o.stop(),h=[],f=[],s._s.delete(t)}function D(X,G){return function(){Wi(s);const Pe=Array.from(arguments),Re=[],Me=[];function qe(be){Re.push(be)}function St(be){Me.push(be)}mn(f,{args:Pe,name:X,store:se,after:qe,onError:St});let $e;try{$e=G.apply(this&&this.$id===t?this:se,Pe)}catch(be){throw mn(Me,be),be}return $e instanceof Promise?$e.then(be=>(mn(Re,be),be)).catch(be=>(mn(Me,be),Promise.reject(be))):(mn(Re,$e),$e)}}const K={_p:s,$id:t,$onAction:$l.bind(null,f),$patch:P,$reset:x,$subscribe(X,G={}){const Pe=$l(h,X,G.detached,()=>Re()),Re=o.run(()=>is(()=>s.state.value[t],Me=>{(G.flush==="sync"?u:a)&&X({storeId:t,type:cs.direct,events:_},Me)},Nt({},c,G)));return Pe},$dispose:O},se=jt(K);s._s.set(t,se);const ye=s._e.run(()=>(o=ga(),o.run(()=>e())));for(const X in ye){const G=ye[X];if(de(G)&&!Hp(G)||Ot(G))r||(g&&Up(G)&&(de(G)?G.value=g[X]:Fr(G,g[X])),s.state.value[t][X]=G);else if(typeof G=="function"){const Pe=D(X,G);ye[X]=Pe,l.actions[X]=G}}return Nt(se,ye),Nt(Z(se),ye),Object.defineProperty(se,"$state",{get:()=>s.state.value[t],set:X=>{P(G=>{Nt(G,X)})}}),s._p.forEach(X=>{Nt(se,o.run(()=>X({store:se,app:s._a,pinia:s,options:l})))}),g&&r&&n.hydrate&&n.hydrate(se.$state,g),a=!0,u=!0,se}function $p(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,c){const a=np();return l=l||a&&lt(ou,null),l&&Wi(l),l=ru,l._s.has(s)||(r?cu(s,e,i,l):Wp(s,i,l)),l._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const bn=typeof window<"u";function jp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ee=Object.assign;function or(t,e){const n={};for(const s in e){const i=e[s];n[s]=at(i)?i.map(t):t(i)}return n}const as=()=>{},at=Array.isArray,Vp=/\/$/,zp=t=>t.replace(Vp,"");function lr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Yp(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function qp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Kp(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Fn(e.matched[s],n.matched[i])&&au(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function au(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Gp(t[n],e[n]))return!1;return!0}function Gp(t,e){return at(t)?Vl(t,e):at(e)?Vl(e,t):t===e}function Vl(t,e){return at(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Yp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var bs;(function(t){t.pop="pop",t.push="push"})(bs||(bs={}));var us;(function(t){t.back="back",t.forward="forward",t.unknown=""})(us||(us={}));function Qp(t){if(!t)if(bn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),zp(t)}const Xp=/^[^#]+#/;function Jp(t,e){return t.replace(Xp,"#")+e}function Zp(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const $i=()=>({left:window.pageXOffset,top:window.pageYOffset});function e_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Zp(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zl(t,e){return(history.state?history.state.position-e:-1)+t}const Br=new Map;function t_(t,e){Br.set(t,e)}function n_(t){const e=Br.get(t);return Br.delete(t),e}let s_=()=>location.protocol+"//"+location.host;function uu(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),jl(c,"")}return jl(n,t)+s+i}function i_(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=uu(t,location),g=n.value,b=e.value;let P=0;if(f){if(n.value=_,e.value=f,o&&o===g){o=null;return}P=b?f.position-b.position:0}else s(_);i.forEach(x=>{x(n.value,g,{delta:P,type:bs.pop,direction:P?P>0?us.forward:us.back:us.unknown})})};function c(){o=n.value}function a(f){i.push(f);const _=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return r.push(_),_}function u(){const{history:f}=window;f.state&&f.replaceState(ee({},f.state,{scroll:$i()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:a,destroy:h}}function ql(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?$i():null}}function r_(t){const{history:e,location:n}=window,s={value:uu(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,a,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:s_()+t+c;try{e[u?"replaceState":"pushState"](a,"",f),i.value=a}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(c,a){const u=ee({},e.state,ql(i.value.back,c,i.value.forward,!0),a,{position:i.value.position});r(c,u,!0),s.value=c}function l(c,a){const u=ee({},i.value,e.state,{forward:c,scroll:$i()});r(u.current,u,!0);const h=ee({},ql(s.value,c,null),{position:u.position+1},a);r(c,h,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function o_(t){t=Qp(t);const e=r_(t),n=i_(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ee({location:"",base:t,go:s,createHref:Jp.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function l_(t){return typeof t=="string"||t&&typeof t=="object"}function hu(t){return typeof t=="string"||typeof t=="symbol"}const Rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},fu=Symbol("");var Kl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kl||(Kl={}));function Bn(t,e){return ee(new Error,{type:t,[fu]:!0},e)}function _t(t,e){return t instanceof Error&&fu in t&&(e==null||!!(t.type&e))}const Gl="[^/]+?",c_={sensitive:!1,strict:!1,start:!0,end:!0},a_=/[.+*?^${}()[\]/\\]/g;function u_(t,e){const n=ee({},c_,e),s=[];let i=n.start?"^":"";const r=[];for(const a of t){const u=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let h=0;h<a.length;h++){const f=a[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(a_,"\\$&"),_+=40;else if(f.type===1){const{value:g,repeatable:b,optional:P,regexp:x}=f;r.push({name:g,repeatable:b,optional:P});const O=x||Gl;if(O!==Gl){_+=10;try{new RegExp(`(${O})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${g}" (${O}): `+K.message)}}let D=b?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(D=P&&a.length<2?`(?:/${D})`:"/"+D),P&&(D+="?"),i+=D,_+=20,P&&(_+=-8),b&&(_+=-20),O===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const a=s.length-1;s[a][s[a].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(a){const u=a.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",g=r[f-1];h[g.name]=_&&g.repeatable?_.split("/"):_}return h}function c(a){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:g,repeatable:b,optional:P}=_,x=g in a?a[g]:"";if(at(x)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const O=at(x)?x.join("/"):x;if(!O)if(P)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function h_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function f_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=h_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Yl(s))return 1;if(Yl(i))return-1}return i.length-s.length}function Yl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const d_={type:0,value:""},p_=/[a-zA-Z0-9_]/;function __(t){if(!t)return[[]];if(t==="/")return[[d_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${a}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,a="",u="";function h(){a&&(n===0?r.push({type:0,value:a}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:a,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),a="")}function f(){a+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(a&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:p_.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${a}"`),h(),o(),i}function g_(t,e,n){const s=u_(__(t.path),n),i=ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function m_(t,e){const n=[],s=new Map;e=Jl({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,g=y_(u);g.aliasOf=f&&f.record;const b=Jl(e,u),P=[g];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of D)P.push(ee({},g,{components:f?f.record.components:g.components,path:K,aliasOf:f?f.record:g}))}let x,O;for(const D of P){const{path:K}=D;if(h&&K[0]!=="/"){const se=h.record.path,ye=se[se.length-1]==="/"?"":"/";D.path=h.record.path+(K&&ye+K)}if(x=g_(D,h,b),f?f.alias.push(x):(O=O||x,O!==x&&O.alias.push(x),_&&u.name&&!Xl(x)&&o(u.name)),g.children){const se=g.children;for(let ye=0;ye<se.length;ye++)r(se[ye],x,f&&f.children[ye])}f=f||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return O?()=>{o(O)}:as}function o(u){if(hu(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function c(u){let h=0;for(;h<n.length&&f_(u,n[h])>=0&&(u.record.path!==n[h].record.path||!du(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Xl(u)&&s.set(u.record.name,u)}function a(u,h){let f,_={},g,b;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Bn(1,{location:u});b=f.record.name,_=ee(Ql(h.params,f.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&Ql(u.params,f.keys.map(O=>O.name))),g=f.stringify(_)}else if("path"in u)g=u.path,f=n.find(O=>O.re.test(g)),f&&(_=f.parse(g),b=f.record.name);else{if(f=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!f)throw Bn(1,{location:u,currentLocation:h});b=f.record.name,_=ee({},h.params,u.params),g=f.stringify(_)}const P=[];let x=f;for(;x;)P.unshift(x.record),x=x.parent;return{name:b,path:g,params:_,matched:P,meta:E_(P)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:a,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function Ql(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function y_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:v_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function v_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Xl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function E_(t){return t.reduce((e,n)=>ee(e,n.meta),{})}function Jl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function du(t,e){return e.children.some(n=>n===t||du(t,n))}const pu=/#/g,C_=/&/g,b_=/\//g,w_=/=/g,I_=/\?/g,_u=/\+/g,S_=/%5B/g,T_=/%5D/g,gu=/%5E/g,R_=/%60/g,mu=/%7B/g,x_=/%7C/g,yu=/%7D/g,N_=/%20/g;function So(t){return encodeURI(""+t).replace(x_,"|").replace(S_,"[").replace(T_,"]")}function P_(t){return So(t).replace(mu,"{").replace(yu,"}").replace(gu,"^")}function Ur(t){return So(t).replace(_u,"%2B").replace(N_,"+").replace(pu,"%23").replace(C_,"%26").replace(R_,"`").replace(mu,"{").replace(yu,"}").replace(gu,"^")}function A_(t){return Ur(t).replace(w_,"%3D")}function O_(t){return So(t).replace(pu,"%23").replace(I_,"%3F")}function k_(t){return t==null?"":O_(t).replace(b_,"%2F")}function fi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function D_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(_u," "),o=r.indexOf("="),l=fi(o<0?r:r.slice(0,o)),c=o<0?null:fi(r.slice(o+1));if(l in e){let a=e[l];at(a)||(a=e[l]=[a]),a.push(c)}else e[l]=c}return e}function Zl(t){let e="";for(let n in t){const s=t[n];if(n=A_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(at(s)?s.map(r=>r&&Ur(r)):[s&&Ur(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function M_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=at(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const L_=Symbol(""),ec=Symbol(""),To=Symbol(""),Ro=Symbol(""),Hr=Symbol("");function Jn(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Pt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(Bn(4,{from:n,to:e})):h instanceof Error?l(h):l_(h)?l(Bn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},a=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(a);t.length<3&&(u=u.then(c)),u.catch(h=>l(h))})}function cr(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(F_(l)){const a=(l.__vccOpts||l)[e];a&&i.push(Pt(a,n,s,r,o))}else{let c=l();i.push(()=>c.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=jp(a)?a.default:a;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Pt(f,n,s,r,o)()}))}}return i}function F_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tc(t){const e=lt(To),n=lt(Ro),s=Be(()=>e.resolve(ke(t.to))),i=Be(()=>{const{matched:c}=s.value,{length:a}=c,u=c[a-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Fn.bind(null,u));if(f>-1)return f;const _=nc(c[a-2]);return a>1&&nc(u)===_&&h[h.length-1].path!==_?h.findIndex(Fn.bind(null,c[a-2])):f}),r=Be(()=>i.value>-1&&W_(n.params,s.value.params)),o=Be(()=>i.value>-1&&i.value===n.matched.length-1&&au(n.params,s.value.params));function l(c={}){return H_(c)?e[ke(t.replace)?"replace":"push"](ke(t.to)).catch(as):Promise.resolve()}return{route:s,href:Be(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const B_=Vt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tc,setup(t,{slots:e}){const n=jt(tc(t)),{options:s}=lt(To),i=Be(()=>({[sc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[sc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:su("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),U_=B_;function H_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function W_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!at(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function nc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sc=(t,e,n)=>t??e??n,$_=Vt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=lt(Hr),i=Be(()=>t.route||s.value),r=lt(ec,0),o=Be(()=>{let a=ke(r);const{matched:u}=i.value;let h;for(;(h=u[a])&&!h.components;)a++;return a}),l=Be(()=>i.value.matched[o.value]);ni(ec,Be(()=>o.value+1)),ni(L_,l),ni(Hr,i);const c=kt();return is(()=>[c.value,l.value,t.name],([a,u,h],[f,_,g])=>{u&&(u.instances[h]=a,_&&_!==u&&a&&a===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),a&&u&&(!_||!Fn(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(b=>b(a))},{flush:"post"}),()=>{const a=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return ic(n.default,{Component:f,route:a});const _=h.props[u],g=_?_===!0?a.params:typeof _=="function"?_(a):_:null,P=su(f,ee({},g,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ic(n.default,{Component:P,route:a})||P}}});function ic(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const vu=$_;function j_(t){const e=m_(t.routes,t),n=t.parseQuery||D_,s=t.stringifyQuery||Zl,i=t.history,r=Jn(),o=Jn(),l=Jn(),c=Gf(Rt);let a=Rt;bn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=or.bind(null,v=>""+v),h=or.bind(null,k_),f=or.bind(null,fi);function _(v,A){let R,M;return hu(v)?(R=e.getRecordMatcher(v),M=A):M=v,e.addRoute(M,R)}function g(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function b(){return e.getRoutes().map(v=>v.record)}function P(v){return!!e.getRecordMatcher(v)}function x(v,A){if(A=ee({},A||c.value),typeof v=="string"){const d=lr(n,v,A.path),p=e.resolve({path:d.path},A),m=i.createHref(d.fullPath);return ee(d,p,{params:f(p.params),hash:fi(d.hash),redirectedFrom:void 0,href:m})}let R;if("path"in v)R=ee({},v,{path:lr(n,v.path,A.path).path});else{const d=ee({},v.params);for(const p in d)d[p]==null&&delete d[p];R=ee({},v,{params:h(v.params)}),A.params=h(A.params)}const M=e.resolve(R,A),Y=v.hash||"";M.params=u(f(M.params));const fe=qp(s,ee({},v,{hash:P_(Y),path:M.path})),$=i.createHref(fe);return ee({fullPath:fe,hash:Y,query:s===Zl?M_(v.query):v.query||{}},M,{redirectedFrom:void 0,href:$})}function O(v){return typeof v=="string"?lr(n,v,c.value.path):ee({},v)}function D(v,A){if(a!==v)return Bn(8,{from:A,to:v})}function K(v){return X(v)}function se(v){return K(ee(O(v),{replace:!0}))}function ye(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:R}=A;let M=typeof R=="function"?R(v):R;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=O(M):{path:M},M.params={}),ee({query:v.query,hash:v.hash,params:"path"in M?{}:v.params},M)}}function X(v,A){const R=a=x(v),M=c.value,Y=v.state,fe=v.force,$=v.replace===!0,d=ye(R);if(d)return X(ee(O(d),{state:typeof d=="object"?ee({},Y,d.state):Y,force:fe,replace:$}),A||R);const p=R;p.redirectedFrom=A;let m;return!fe&&Kp(s,M,R)&&(m=Bn(16,{to:p,from:M}),zt(M,M,!0,!1)),(m?Promise.resolve(m):Pe(p,M)).catch(y=>_t(y)?_t(y,2)?y:Qe(y):re(y,p,M)).then(y=>{if(y){if(_t(y,2))return X(ee({replace:$},O(y.to),{state:typeof y.to=="object"?ee({},Y,y.to.state):Y,force:fe}),A||p)}else y=Me(p,M,!0,$,Y);return Re(p,M,y),y})}function G(v,A){const R=D(v,A);return R?Promise.reject(R):Promise.resolve()}function Pe(v,A){let R;const[M,Y,fe]=V_(v,A);R=cr(M.reverse(),"beforeRouteLeave",v,A);for(const d of M)d.leaveGuards.forEach(p=>{R.push(Pt(p,v,A))});const $=G.bind(null,v,A);return R.push($),yn(R).then(()=>{R=[];for(const d of r.list())R.push(Pt(d,v,A));return R.push($),yn(R)}).then(()=>{R=cr(Y,"beforeRouteUpdate",v,A);for(const d of Y)d.updateGuards.forEach(p=>{R.push(Pt(p,v,A))});return R.push($),yn(R)}).then(()=>{R=[];for(const d of v.matched)if(d.beforeEnter&&!A.matched.includes(d))if(at(d.beforeEnter))for(const p of d.beforeEnter)R.push(Pt(p,v,A));else R.push(Pt(d.beforeEnter,v,A));return R.push($),yn(R)}).then(()=>(v.matched.forEach(d=>d.enterCallbacks={}),R=cr(fe,"beforeRouteEnter",v,A),R.push($),yn(R))).then(()=>{R=[];for(const d of o.list())R.push(Pt(d,v,A));return R.push($),yn(R)}).catch(d=>_t(d,8)?d:Promise.reject(d))}function Re(v,A,R){for(const M of l.list())M(v,A,R)}function Me(v,A,R,M,Y){const fe=D(v,A);if(fe)return fe;const $=A===Rt,d=bn?history.state:{};R&&(M||$?i.replace(v.fullPath,ee({scroll:$&&d&&d.scroll},Y)):i.push(v.fullPath,Y)),c.value=v,zt(v,A,R,$),Qe()}let qe;function St(){qe||(qe=i.listen((v,A,R)=>{if(!Vs.listening)return;const M=x(v),Y=ye(M);if(Y){X(ee(Y,{replace:!0}),M).catch(as);return}a=M;const fe=c.value;bn&&t_(zl(fe.fullPath,R.delta),$i()),Pe(M,fe).catch($=>_t($,12)?$:_t($,2)?(X($.to,M).then(d=>{_t(d,20)&&!R.delta&&R.type===bs.pop&&i.go(-1,!1)}).catch(as),Promise.reject()):(R.delta&&i.go(-R.delta,!1),re($,M,fe))).then($=>{$=$||Me(M,fe,!1),$&&(R.delta&&!_t($,8)?i.go(-R.delta,!1):R.type===bs.pop&&_t($,20)&&i.go(-1,!1)),Re(M,fe,$)}).catch(as)}))}let $e=Jn(),be=Jn(),ge;function re(v,A,R){Qe(v);const M=be.list();return M.length?M.forEach(Y=>Y(v,A,R)):console.error(v),Promise.reject(v)}function te(){return ge&&c.value!==Rt?Promise.resolve():new Promise((v,A)=>{$e.add([v,A])})}function Qe(v){return ge||(ge=!v,St(),$e.list().forEach(([A,R])=>v?R(v):A()),$e.reset()),v}function zt(v,A,R,M){const{scrollBehavior:Y}=t;if(!bn||!Y)return Promise.resolve();const fe=!R&&n_(zl(v.fullPath,0))||(M||!R)&&history.state&&history.state.scroll||null;return Eo().then(()=>Y(v,A,fe)).then($=>$&&e_($)).catch($=>re($,v,A))}const Xe=v=>i.go(v);let Le;const _n=new Set,Vs={currentRoute:c,listening:!0,addRoute:_,removeRoute:g,hasRoute:P,getRoutes:b,resolve:x,options:t,push:K,replace:se,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:be.add,isReady:te,install(v){const A=this;v.component("RouterLink",U_),v.component("RouterView",vu),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ke(c)}),bn&&!Le&&c.value===Rt&&(Le=!0,K(i.location).catch(Y=>{}));const R={};for(const Y in Rt)R[Y]=Be(()=>c.value[Y]);v.provide(To,A),v.provide(Ro,jt(R)),v.provide(Hr,c);const M=v.unmount;_n.add(v),v.unmount=function(){_n.delete(v),_n.size<1&&(a=Rt,qe&&qe(),qe=null,c.value=Rt,Le=!1,ge=!1),M()}}};return Vs}function yn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function V_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(a=>Fn(a,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(a=>Fn(a,c))||i.push(c))}return[n,s,i]}function z_(){return lt(Ro)}const q_=Vt({__name:"App",setup(t){return(e,n)=>(Ge(),ls(ke(vu)))}}),K_="modulepreload",G_=function(t){return"/"+t},rc={},oc=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=G_(r),r in rc)return;rc[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":K_,o||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),o)return new Promise((u,h)=>{a.addEventListener("load",u),a.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};var ar=/iPhone/i,lc=/iPod/i,cc=/iPad/i,ac=/\biOS-universal(?:.+)Mac\b/i,ur=/\bAndroid(?:.+)Mobile\b/i,uc=/Android/i,vn=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,Xs=/Silk/i,gt=/Windows Phone/i,hc=/\bWindows(?:.+)ARM\b/i,fc=/BlackBerry/i,dc=/BB10/i,pc=/Opera Mini/i,_c=/\b(CriOS|Chrome)(?:.+)Mobile/i,gc=/Mobile(?:.+)Firefox\b/i,mc=function(t){return typeof t<"u"&&t.platform==="MacIntel"&&typeof t.maxTouchPoints=="number"&&t.maxTouchPoints>1&&typeof MSStream>"u"};function Y_(t){return function(e){return e.test(t)}}function Q_(t){var e={userAgent:"",platform:"",maxTouchPoints:0};!t&&typeof navigator<"u"?e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof t=="string"?e.userAgent=t:t&&t.userAgent&&(e={userAgent:t.userAgent,platform:t.platform,maxTouchPoints:t.maxTouchPoints||0});var n=e.userAgent,s=n.split("[FBAN");typeof s[1]<"u"&&(n=s[0]),s=n.split("Twitter"),typeof s[1]<"u"&&(n=s[0]);var i=Y_(n),r={apple:{phone:i(ar)&&!i(gt),ipod:i(lc),tablet:!i(ar)&&(i(cc)||mc(e))&&!i(gt),universal:i(ac),device:(i(ar)||i(lc)||i(cc)||i(ac)||mc(e))&&!i(gt)},amazon:{phone:i(vn),tablet:!i(vn)&&i(Xs),device:i(vn)||i(Xs)},android:{phone:!i(gt)&&i(vn)||!i(gt)&&i(ur),tablet:!i(gt)&&!i(vn)&&!i(ur)&&(i(Xs)||i(uc)),device:!i(gt)&&(i(vn)||i(Xs)||i(ur)||i(uc))||i(/\bokhttp\b/i)},windows:{phone:i(gt),tablet:i(hc),device:i(gt)||i(hc)},other:{blackberry:i(fc),blackberry10:i(dc),opera:i(pc),firefox:i(gc),chrome:i(_c),device:i(fc)||i(dc)||i(pc)||i(gc)||i(_c)},any:!1,phone:!1,tablet:!1};return r.any=r.apple.device||r.android.device||r.windows.device||r.other.device,r.phone=r.apple.phone||r.android.phone||r.windows.phone,r.tablet=r.apple.tablet||r.android.tablet||r.windows.tablet,r}/**
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
 */const Eu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const w=function(t,e){if(!t)throw qn(e)},qn=function(t){return new Error("Firebase Database ("+Eu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Cu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},X_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|a>>6,_=a&63;c||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):X_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||h==null)throw Error();const f=r<<2|l>>4;if(s.push(f),a!==64){const _=l<<4&240|a>>2;if(s.push(_),h!==64){const g=a<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},bu=function(t){const e=Cu(t);return xo.encodeByteArray(e,!0)},di=function(t){return bu(t).replace(/\./g,"")},Wr=function(t){try{return xo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function J_(t){return wu(void 0,t)}function wu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Z_(n)||(t[n]=wu(t[n],e[n]));return t}function Z_(t){return t!=="__proto__"}/**
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
 */function eg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tg=()=>eg().__FIREBASE_DEFAULTS__,ng=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wr(t[1]);return e&&JSON.parse(e)},Iu=()=>{try{return tg()||ng()||sg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ig=t=>{var e,n;return(n=(e=Iu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rg=t=>{const e=ig(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},og=()=>{var t;return(t=Iu())===null||t===void 0?void 0:t.config};/**
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
 */class ji{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function lg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[di(JSON.stringify(n)),di(JSON.stringify(o)),l].join(".")}/**
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
 */function cg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Su(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(cg())}function ag(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tu(){return Eu.NODE_ADMIN===!0}function ug(){try{return typeof indexedDB=="object"}catch{return!1}}function hg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const fg="FirebaseError";class Fs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=fg,Object.setPrototypeOf(this,Fs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ru.prototype.create)}}class Ru{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?dg(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Fs(i,l,s)}}function dg(t,e){return t.replace(pg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const pg=/\{\$([^}]+)}/g;/**
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
 */function ws(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
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
 */const xu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ws(Wr(r[0])||""),n=ws(Wr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},_g=function(t){const e=xu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},gg=function(t){const e=xu(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Un(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function yc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(vc(r)&&vc(o)){if(!$r(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function vc(t){return t!==null&&typeof t=="object"}/**
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
 */function mg(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class yg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let h=0;h<80;h++){h<40?h<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):h<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+a+c+u+s[h]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function No(t,e){return`${t} failed: ${e} argument `}/**
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
 */const vg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,w(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function dn(t){return t&&t._delegate?t._delegate:t}class Is{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class Eg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ji;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bg(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cg(t){return t===Yt?void 0:t}function bg(t){return t.instantiationMode==="EAGER"}/**
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
 */class wg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Eg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Ig={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Sg=le.INFO,Tg={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Rg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Tg[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nu{constructor(e){this.name=e,this._logLevel=Sg,this._logHandler=Rg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ig[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const xg=(t,e)=>e.some(n=>t instanceof n);let Ec,Cc;function Ng(){return Ec||(Ec=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pg(){return Cc||(Cc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pu=new WeakMap,jr=new WeakMap,Au=new WeakMap,hr=new WeakMap,Po=new WeakMap;function Ag(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Mt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pu.set(n,t)}).catch(()=>{}),Po.set(e,t),e}function Og(t){if(jr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});jr.set(t,e)}let Vr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Au.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kg(t){Vr=t(Vr)}function Dg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(fr(this),e,...n);return Au.set(s,e.sort?e.sort():[e]),Mt(s)}:Pg().includes(t)?function(...e){return t.apply(fr(this),e),Mt(Pu.get(this))}:function(...e){return Mt(t.apply(fr(this),e))}}function Mg(t){return typeof t=="function"?Dg(t):(t instanceof IDBTransaction&&Og(t),xg(t,Ng())?new Proxy(t,Vr):t)}function Mt(t){if(t instanceof IDBRequest)return Ag(t);if(hr.has(t))return hr.get(t);const e=Mg(t);return e!==t&&(hr.set(t,e),Po.set(e,t)),e}const fr=t=>Po.get(t);function Lg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Mt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Fg=["get","getKey","getAll","getAllKeys","count"],Bg=["put","add","delete","clear"],dr=new Map;function bc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dr.get(e))return dr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Bg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Fg.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return dr.set(e,r),r}kg(t=>({...t,get:(e,n,s)=>bc(e,n)||t.get(e,n,s),has:(e,n)=>!!bc(e,n)||t.has(e,n)}));/**
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
 */class Ug{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Hg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zr="@firebase/app",wc="0.9.2";/**
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
 */const an=new Nu("@firebase/app"),Wg="@firebase/app-compat",$g="@firebase/analytics-compat",jg="@firebase/analytics",Vg="@firebase/app-check-compat",zg="@firebase/app-check",qg="@firebase/auth",Kg="@firebase/auth-compat",Gg="@firebase/database",Yg="@firebase/database-compat",Qg="@firebase/functions",Xg="@firebase/functions-compat",Jg="@firebase/installations",Zg="@firebase/installations-compat",em="@firebase/messaging",tm="@firebase/messaging-compat",nm="@firebase/performance",sm="@firebase/performance-compat",im="@firebase/remote-config",rm="@firebase/remote-config-compat",om="@firebase/storage",lm="@firebase/storage-compat",cm="@firebase/firestore",am="@firebase/firestore-compat",um="firebase",hm="9.17.0";/**
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
 */const qr="[DEFAULT]",fm={[zr]:"fire-core",[Wg]:"fire-core-compat",[jg]:"fire-analytics",[$g]:"fire-analytics-compat",[zg]:"fire-app-check",[Vg]:"fire-app-check-compat",[qg]:"fire-auth",[Kg]:"fire-auth-compat",[Gg]:"fire-rtdb",[Yg]:"fire-rtdb-compat",[Qg]:"fire-fn",[Xg]:"fire-fn-compat",[Jg]:"fire-iid",[Zg]:"fire-iid-compat",[em]:"fire-fcm",[tm]:"fire-fcm-compat",[nm]:"fire-perf",[sm]:"fire-perf-compat",[im]:"fire-rc",[rm]:"fire-rc-compat",[om]:"fire-gcs",[lm]:"fire-gcs-compat",[cm]:"fire-fst",[am]:"fire-fst-compat","fire-js":"fire-js",[um]:"fire-js-all"};/**
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
 */const _i=new Map,Kr=new Map;function dm(t,e){try{t.container.addComponent(e)}catch(n){an.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gi(t){const e=t.name;if(Kr.has(e))return an.debug(`There were multiple attempts to register component ${e}.`),!1;Kr.set(e,t);for(const n of _i.values())dm(n,t);return!0}function pm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const _m={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new Ru("app","Firebase",_m);/**
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
 */class gm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const mm=hm;function Ou(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:qr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(n||(n=og()),!n)throw Lt.create("no-options");const r=_i.get(i);if(r){if($r(n,r.options)&&$r(s,r.config))return r;throw Lt.create("duplicate-app",{appName:i})}const o=new wg(i);for(const c of Kr.values())o.addComponent(c);const l=new gm(n,s,o);return _i.set(i,l),l}function ym(t=qr){const e=_i.get(t);if(!e&&t===qr)return Ou();if(!e)throw Lt.create("no-app",{appName:t});return e}function Rn(t,e,n){var s;let i=(s=fm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),an.warn(l.join(" "));return}gi(new Is(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vm="firebase-heartbeat-database",Em=1,Ss="firebase-heartbeat-store";let pr=null;function ku(){return pr||(pr=Lg(vm,Em,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ss)}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),pr}async function Cm(t){try{return(await ku()).transaction(Ss).objectStore(Ss).get(Du(t))}catch(e){if(e instanceof Fs)an.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});an.warn(n.message)}}}async function Ic(t,e){try{const s=(await ku()).transaction(Ss,"readwrite");return await s.objectStore(Ss).put(e,Du(t)),s.done}catch(n){if(n instanceof Fs)an.warn(n.message);else{const s=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});an.warn(s.message)}}}function Du(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bm=1024,wm=30*24*60*60*1e3;class Im{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=wm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sc(),{heartbeatsToSend:n,unsentEntries:s}=Sm(this._heartbeatsCache.heartbeats),i=di(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sc(){return new Date().toISOString().substring(0,10)}function Sm(t,e=bm){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Tc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Tm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ug()?hg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Cm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tc(t){return di(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Rm(t){gi(new Is("platform-logger",e=>new Ug(e),"PRIVATE")),gi(new Is("heartbeat",e=>new Im(e),"PRIVATE")),Rn(zr,wc,t),Rn(zr,wc,"esm2017"),Rn("fire-js","")}Rm("");var xm="firebase",Nm="9.17.0";/**
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
 */Rn(xm,Nm,"app");const Rc="@firebase/database",xc="0.14.2";/**
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
 */let Mu="";function Pm(t){Mu=t}/**
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
 */class Am{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ws(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Om{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Lu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Am(e)}}catch{}return new Om},tn=Lu("localStorage"),Gr=Lu("sessionStorage");/**
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
 */const xn=new Nu("@firebase/database"),km=function(){let t=1;return function(){return t++}}(),Fu=function(t){const e=vg(t),n=new yg;n.update(e);const s=n.digest();return xo.encodeByteArray(s)},Bs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Bs.apply(null,s):typeof s=="object"?e+=ve(s):e+=s,e+=" "}return e};let on=null,Nc=!0;const Dm=function(t,e){w(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(xn.logLevel=le.VERBOSE,on=xn.log.bind(xn),e&&Gr.set("logging_enabled",!0)):typeof t=="function"?on=t:(on=null,Gr.remove("logging_enabled"))},xe=function(...t){if(Nc===!0&&(Nc=!1,on===null&&Gr.get("logging_enabled")===!0&&Dm(!0)),on){const e=Bs.apply(null,t);on(e)}},Us=function(t){return function(...e){xe(t,...e)}},Yr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Bs(...t);xn.error(e)},Ct=function(...t){const e=`FIREBASE FATAL ERROR: ${Bs(...t)}`;throw xn.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+Bs(...t);xn.warn(e)},Mm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Lm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hn="[MIN_NAME]",un="[MAX_NAME]",Kn=function(t,e){if(t===e)return 0;if(t===Hn||e===un)return-1;if(e===Hn||t===un)return 1;{const n=Pc(t),s=Pc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Fm=function(t,e){return t===e?0:t<e?-1:1},Zn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},Ao=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ve(e[s]),n+=":",n+=Ao(t[e[s]]);return n+="}",n},Uu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function We(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Hu=function(t){w(!Bu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Bm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Um=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hm(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Wm=new RegExp("^-?(0*)\\d{1,10}$"),$m=-2147483648,jm=2147483647,Pc=function(t){if(Wm.test(t)){const e=Number(t);if(e>=$m&&e<=jm)return e}return null},Gn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},Vm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},hs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class zm{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class qm{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class Nn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Nn.OWNER="owner";/**
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
 */const Oo="5",Wu="v",$u="s",ju="r",Vu="f",zu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qu="ls",Ku="p",Qr="ac",Gu="websocket",Yu="long_polling";/**
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
 */class Qu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Km(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Xu(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let s;if(e===Gu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Yu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Km(t)&&(n.ns=t.namespace);const i=[];return We(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Gm{constructor(){this.counters_={}}incrementCounter(e,n=1){wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return J_(this.counters_)}}/**
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
 */const _r={},gr={};function ko(t){const e=t.toString();return _r[e]||(_r[e]=new Gm),_r[e]}function Ym(t,e){const n=t.toString();return gr[n]||(gr[n]=e()),gr[n]}/**
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
 */class Qm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Gn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ac="start",Xm="close",Jm="pLPCommand",Zm="pRTLPCB",Ju="id",Zu="pw",eh="ser",ey="cb",ty="seg",ny="ts",sy="d",iy="dframe",th=1870,nh=30,ry=th-nh,oy=25e3,ly=3e4;class wn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Us(e),this.stats_=ko(n),this.urlFn=c=>(this.appCheckToken&&(c[Qr]=this.appCheckToken),Xu(n,Yu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Qm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ly)),Lm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Do((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ac)this.id=l,this.password=c;else if(o===Xm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ac]="t",s[eh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ey]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Wu]=Oo,this.transportSessionId&&(s[$u]=this.transportSessionId),this.lastSessionId&&(s[qu]=this.lastSessionId),this.applicationId&&(s[Ku]=this.applicationId),this.appCheckToken&&(s[Qr]=this.appCheckToken),typeof location<"u"&&location.hostname&&zu.test(location.hostname)&&(s[ju]=Vu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wn.forceAllow_=!0}static forceDisallow(){wn.forceDisallow_=!0}static isAvailable(){return wn.forceAllow_?!0:!wn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Bm()&&!Um()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=bu(n),i=Uu(s,ry);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[iy]="t",s[Ju]=e,s[Zu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Do{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=km(),window[Jm+this.uniqueCallbackIdentifier]=e,window[Zm+this.uniqueCallbackIdentifier]=n,this.myIFrame=Do.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){xe("frame writing exception"),l.stack&&xe(l.stack),xe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ju]=this.myID,e[Zu]=this.myPW,e[eh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nh+s.length<=th;){const o=this.pendingSegs.shift();s=s+"&"+ty+i+"="+o.seg+"&"+ny+i+"="+o.ts+"&"+sy+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(oy)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const cy=16384,ay=45e3;let mi=null;typeof MozWebSocket<"u"?mi=MozWebSocket:typeof WebSocket<"u"&&(mi=WebSocket);class tt{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Us(this.connId),this.stats_=ko(n),this.connURL=tt.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Wu]=Oo,typeof location<"u"&&location.hostname&&zu.test(location.hostname)&&(o[ju]=Vu),n&&(o[$u]=n),s&&(o[qu]=s),i&&(o[Qr]=i),r&&(o[Ku]=r),Xu(e,Gu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tn.set("previous_websocket_failure",!0);try{let s;Tu(),this.mySock=new mi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&mi!==null&&!tt.forceDisallow_}static previouslyFailed(){return tn.isInMemoryStorage||tn.get("previous_websocket_failure")===!0}markConnectionHealthy(){tn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ws(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Uu(n,cy);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ay))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tt.responsesRequiredToBeHealthy=2;tt.healthyTimeout=3e4;/**
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
 */class Ts{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[wn,tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=tt&&tt.isAvailable();let s=n&&!tt.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[tt];else{const i=this.transports_=[];for(const r of Ts.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ts.globalTransportInitialized_=!1;/**
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
 */const uy=6e4,hy=5e3,fy=10*1024,dy=100*1024,mr="t",Oc="d",py="s",kc="r",_y="e",Dc="o",Mc="a",Lc="n",Fc="p",gy="h";class my{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Us("c:"+this.id+":"),this.transportManager_=new Ts(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=hs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mr in e){const n=e[mr];n===Mc?this.upgradeIfSecondaryHealthy_():n===kc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Dc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zn("t",e),s=Zn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zn("t",e),s=Zn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zn(mr,e);if(Oc in e){const s=e[Oc];if(n===gy){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Lc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===py?this.onConnectionShutdown_(s):n===kc?this.onReset_(s):n===_y?Yr("Server Error: "+s):n===Dc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Oo!==s&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),hs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(uy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):hs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(hy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class sh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ih{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class yi extends ih{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Su()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new yi}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Bc=32,Uc=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new ie("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ht(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function rh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function yy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function oh(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function lh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function Ee(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ie)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ie(n,0)}function V(t){return t.pieceNum_>=t.pieces_.length}function Oe(t,e){const n=q(t),s=q(e);if(n===null)return e;if(n===s)return Oe(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ch(t,e){if(Ht(t)!==Ht(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function st(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ht(t)>Ht(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class vy{constructor(e,n){this.errorPrefix_=n,this.parts_=oh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Vi(this.parts_[s]);ah(this)}}function Ey(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Vi(e),ah(t)}function Cy(t){const e=t.parts_.pop();t.byteLength_-=Vi(e),t.parts_.length>0&&(t.byteLength_-=1)}function ah(t){if(t.byteLength_>Uc)throw new Error(t.errorPrefix_+"has a key path longer than "+Uc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bc+") or object contains a cycle "+Qt(t))}function Qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Mo extends ih{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Mo}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const es=1e3,by=60*5*1e3,Hc=30*1e3,wy=1.3,Iy=3e4,Sy="server_kill",Wc=3;class vt extends sh{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=vt.nextPersistentConnectionId_++,this.log_=Us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=es,this.maxReconnectDelay_=by,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Tu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ve(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ji,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;vt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wt(e,"w")){const s=Un(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_g(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yr("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Iy&&(this.reconnectDelay_=es),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+vt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(h){w(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?xe("getToken() completed but was canceled"):(xe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new my(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{He(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Sy)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&He(h),c())}}}interrupt(e){xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yc(this.interruptReasons_)&&(this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ao(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ie(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wc&&(this.reconnectDelay_=Hc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Mu.replace(/\./g,"-")]=1,Su()?e["framework.cordova"]=1:ag()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yi.getInstance().currentlyOnline();return yc(this.interruptReasons_)&&e}}vt.nextPersistentConnectionId_=0;vt.nextConnectionId_=0;/**
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
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
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
 */class zi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new j(Hn,e),i=new j(Hn,n);return this.compare(s,i)!==0}minPost(){return j.MIN}}/**
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
 */let Js;class uh extends zi{static get __EMPTY_NODE(){return Js}static set __EMPTY_NODE(e){Js=e}compare(e,n){return Kn(e.name,n.name)}isDefinedOn(e){throw qn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(un,Js)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Js)}toString(){return".key"}}const Pn=new uh;/**
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
 */class Zs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ie.RED,this.left=i??Ue.EMPTY_NODE,this.right=r??Ue.EMPTY_NODE}copy(e,n,s,i,r){return new Ie(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class Ty{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Zs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Zs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Zs(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new Ty;/**
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
 */function Ry(t,e){return Kn(t.name,e.name)}function Lo(t,e){return Kn(t,e)}/**
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
 */let Xr;function xy(t){Xr=t}const hh=function(t){return typeof t=="number"?"number:"+Hu(t):"string:"+t},fh=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wt(e,".sv"),"Priority must be a string or number.")}else w(t===Xr||t.isEmpty(),"priority of unexpected type.");w(t===Xr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let $c;class we{constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),fh(this.priorityNode_)}static set __childrenNodeConstructor(e){$c=e}static get __childrenNodeConstructor(){return $c}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:q(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=q(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(w(s!==".priority"||Ht(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Hu(this.value_):e+=this.value_,this.lazyHash_=Fu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),r=we.VALUE_TYPE_ORDER.indexOf(s);return w(i>=0,"Unknown leaf type: "+n),w(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let dh,ph;function Ny(t){dh=t}function Py(t){ph=t}class Ay extends zi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Kn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(un,new we("[PRIORITY-POST]",ph))}makePost(e,n){const s=dh(e);return new j(n,new we("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new Ay;/**
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
 */const Oy=Math.log(2);class ky{constructor(e){const n=r=>parseInt(Math.log(r)/Oy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vi=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new Ie(f,h.node,Ie.BLACK,null,null);{const _=parseInt(u/2,10)+c,g=i(c,_),b=i(_+1,a);return h=t[_],f=n?n(h):h,new Ie(f,h.node,Ie.BLACK,g,b)}},r=function(c){let a=null,u=null,h=t.length;const f=function(g,b){const P=h-g,x=h;h-=g;const O=i(P+1,x),D=t[P],K=n?n(D):D;_(new Ie(K,D.node,b,null,O))},_=function(g){a?(a.left=g,a=g):(u=g,a=g)};for(let g=0;g<c.count;++g){const b=c.nextBitIsOne(),P=Math.pow(2,c.count-(g+1));b?f(P,Ie.BLACK):(f(P,Ie.BLACK),f(P,Ie.RED))}return u},o=new ky(t.length),l=r(o);return new Ue(s||e,l)};/**
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
 */let yr;const En={};class yt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return w(En&&_e,"ChildrenNode.ts has not been loaded"),yr=yr||new yt({".priority":En},{".priority":_e}),yr}get(e){const n=Un(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return wt(this.indexSet_,e.toString())}addIndex(e,n){w(e!==Pn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(j.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=vi(s,e.getCompare()):l=En;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new yt(u,a)}addToIndexes(e,n){const s=pi(this.indexes_,(i,r)=>{const o=Un(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),i===En)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(j.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),vi(l,o.getCompare())}else return En;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new j(e.name,l))),c.insert(e,e.node)}});return new yt(s,this.indexSet_)}removeFromIndexes(e,n){const s=pi(this.indexes_,i=>{if(i===En)return i;{const r=n.get(e.name);return r?i.remove(new j(e.name,r)):i}});return new yt(s,this.indexSet_)}}/**
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
 */let ts;class B{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&fh(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ts||(ts=new B(new Ue(Lo),null,yt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ts}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ts:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new j(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ts:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=q(e);if(s===null)return n;{w(q(e)!==".priority"||Ht(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,l)=>{n[o]=l.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+hh(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Fu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new j(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hs?-1:0}withIndex(e){if(e===Pn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Pn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pn?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Dy extends B{constructor(){super(new Ue(Lo),B.EMPTY_NODE,yt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Hs=new Dy;Object.defineProperties(j,{MIN:{value:new j(Hn,B.EMPTY_NODE)},MAX:{value:new j(un,Hs)}});uh.__EMPTY_NODE=B.EMPTY_NODE;we.__childrenNodeConstructor=B;xy(Hs);Py(Hs);/**
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
 */const My=!0;function Se(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,Se(e))}if(!(t instanceof Array)&&My){const n=[];let s=!1;if(We(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Se(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new j(o,c)))}}),n.length===0)return B.EMPTY_NODE;const r=vi(n,Ry,o=>o.name,Lo);if(s){const o=vi(n,_e.getCompare());return new B(r,Se(e),new yt({".priority":o},{".priority":_e}))}else return new B(r,Se(e),yt.Default)}else{let n=B.EMPTY_NODE;return We(t,(s,i)=>{if(wt(t,s)&&s.substring(0,1)!=="."){const r=Se(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Se(e))}}Ny(Se);/**
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
 */class Ly extends zi{constructor(e){super(),this.indexPath_=e,w(!V(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Kn(e.name,n.name):r}makePost(e,n){const s=Se(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new j(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Hs);return new j(un,e)}toString(){return oh(this.indexPath_,0).join("/")}}/**
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
 */class Fy extends zi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Kn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const s=Se(e);return new j(n,s)}toString(){return".value"}}const By=new Fy;/**
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
 */function _h(t){return{type:"value",snapshotNode:t}}function Wn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Rs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Uy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Fo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Rs(n,l)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Wn(n,s)):o.trackChildChange(xs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(Rs(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(xs(i,r,o))}else s.trackChildChange(Wn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ns{constructor(e){this.indexedFilter_=new Fo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ns.getStartPost_(e),this.endPost_=Ns.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new j(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,l)=>{r.matches(new j(o,l))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Hy{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ns(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new j(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;w(l.numChildren()===this.limit_,"");const c=new j(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,a,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,c);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(xs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Rs(n,h));const b=l.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Wn(f.name,f.node)),b.updateImmediateChild(f.name,f.node)):b}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(Rs(a.name,a.node)),r.trackChildChange(Wn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,B.EMPTY_NODE)):e}}/**
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
 */class Bo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hn}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:un}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new Bo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Wy(t){return t.loadsAllData()?new Fo(t.getIndex()):t.hasLimit()?new Hy(t):new Ns(t)}function jc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===By?n="$value":t.index_===Pn?n="$key":(w(t.index_ instanceof Ly,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ve(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ve(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ve(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Vc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
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
 */class Ei extends sh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Us("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ei.getListenId_(e,s),l={};this.listens_[o]=l;const c=jc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(r,h,!1,s),Un(this.listens_,o)===l){let f;a?a===401?f="permission_denied":f="rest_error:"+a:f="ok",i(f,null)}})}unlisten(e,n){const s=Ei.getListenId_(e,n);delete this.listens_[s]}get(e){const n=jc(e._queryParams),s=e._path.toString(),i=new ji;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+mg(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=ws(l.responseText)}catch{He("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class $y{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ci(){return{value:null,children:new Map}}function gh(t,e,n){if(V(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=q(e);t.children.has(s)||t.children.set(s,Ci());const i=t.children.get(s);e=ce(e),gh(i,e,n)}}function Jr(t,e,n){t.value!==null?n(e,t.value):jy(t,(s,i)=>{const r=new ie(e.toString()+"/"+s);Jr(i,r,n)})}function jy(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Vy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&We(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const zc=10*1e3,zy=30*1e3,qy=5*60*1e3;class Ky{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Vy(e);const s=zc+(zy-zc)*Math.random();hs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;We(e,(i,r)=>{r>0&&wt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),hs(this.reportStats_.bind(this),Math.floor(Math.random()*2*qy))}}/**
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
 */var it;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function mh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Uo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ho(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class bi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=it.ACK_USER_WRITE,this.source=mh()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new bi(J(),n,this.revert)}}else return w(q(this.path)===e,"operationForChild called for unrelated child."),new bi(ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ps{constructor(e,n){this.source=e,this.path=n,this.type=it.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new Ps(this.source,J()):new Ps(this.source,ce(this.path))}}/**
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
 */class hn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=it.OVERWRITE}operationForChild(e){return V(this.path)?new hn(this.source,J(),this.snap.getImmediateChild(e)):new hn(this.source,ce(this.path),this.snap)}}/**
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
 */class As{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=it.MERGE}operationForChild(e){if(V(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new hn(this.source,J(),n.value):new As(this.source,J(),n)}else return w(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new As(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Wt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Gy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Yy(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Uy(o.childName,o.snapshotNode))}),ns(t,i,"child_removed",e,s,n),ns(t,i,"child_added",e,s,n),ns(t,i,"child_moved",r,s,n),ns(t,i,"child_changed",e,s,n),ns(t,i,"value",e,s,n),i}function ns(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>Xy(t,l,c)),o.forEach(l=>{const c=Qy(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function Qy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Xy(t,e,n){if(e.childName==null||n.childName==null)throw qn("Should only compare child_ events.");const s=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function qi(t,e){return{eventCache:t,serverCache:e}}function fs(t,e,n,s){return qi(new Wt(e,n,s),t.serverCache)}function yh(t,e,n,s){return qi(t.eventCache,new Wt(e,n,s))}function wi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function fn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let vr;const Jy=()=>(vr||(vr=new Ue(Fm)),vr);class ue{constructor(e,n=Jy()){this.value=e,this.children=n}static fromObject(e){let n=new ue(null);return We(e,(s,i)=>{n=n.set(new ie(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(V(e))return null;{const s=q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ce(e),n);return r!=null?{path:Ee(new ie(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const n=q(e),s=this.children.get(n);return s!==null?s.subtree(ce(e)):new ue(null)}}set(e,n){if(V(e))return new ue(n,this.children);{const s=q(e),r=(this.children.get(s)||new ue(null)).set(ce(e),n),o=this.children.insert(s,r);return new ue(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=q(e),s=this.children.get(n);if(s){const i=s.remove(ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ue(null):new ue(this.value,r)}else return this}}get(e){if(V(e))return this.value;{const n=q(e),s=this.children.get(n);return s?s.get(ce(e)):null}}setTree(e,n){if(V(e))return n;{const s=q(e),r=(this.children.get(s)||new ue(null)).setTree(ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ue(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ee(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(V(e))return null;{const r=q(e),o=this.children.get(r);return o?o.findOnPath_(ce(e),Ee(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,s){if(V(e))return this;{this.value&&s(n,this.value);const i=q(e),r=this.children.get(i);return r?r.foreachOnPath_(ce(e),Ee(n,i),s):new ue(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ee(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class ct{constructor(e){this.writeTree_=e}static empty(){return new ct(new ue(null))}}function ds(t,e,n){if(V(e))return new ct(new ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Oe(i,e);return r=r.updateChild(o,n),new ct(t.writeTree_.set(i,r))}else{const i=new ue(n),r=t.writeTree_.setTree(e,i);return new ct(r)}}}function qc(t,e,n){let s=t;return We(n,(i,r)=>{s=ds(s,Ee(e,i),r)}),s}function Kc(t,e){if(V(e))return ct.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new ct(n)}}function Zr(t,e){return pn(t,e)!=null}function pn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Oe(n.path,e)):null}function Gc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new j(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new j(s,i.value))}),e}function Ft(t,e){if(V(e))return t;{const n=pn(t,e);return n!=null?new ct(new ue(n)):new ct(t.writeTree_.subtree(e))}}function eo(t){return t.writeTree_.isEmpty()}function $n(t,e){return vh(J(),t.writeTree_,e)}function vh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=vh(Ee(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ee(t,".priority"),s)),n}}/**
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
 */function Ki(t,e){return wh(e,t)}function Zy(t,e,n,s,i){w(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ds(t.visibleWrites,e,n)),t.lastWriteId=s}function ev(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function tv(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&nv(l,s.path)?i=!1:st(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return sv(t),!0;if(s.snap)t.visibleWrites=Kc(t.visibleWrites,s.path);else{const l=s.children;We(l,c=>{t.visibleWrites=Kc(t.visibleWrites,Ee(s.path,c))})}return!0}else return!1}function nv(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(Ee(t.path,n),e))return!0;return!1}function sv(t){t.visibleWrites=Eh(t.allWrites,iv,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function iv(t){return t.visible}function Eh(t,e,n){let s=ct.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)st(n,o)?(l=Oe(n,o),s=ds(s,l,r.snap)):st(o,n)&&(l=Oe(o,n),s=ds(s,J(),r.snap.getChild(l)));else if(r.children){if(st(n,o))l=Oe(n,o),s=qc(s,l,r.children);else if(st(o,n))if(l=Oe(o,n),V(l))s=qc(s,J(),r.children);else{const c=Un(r.children,q(l));if(c){const a=c.getChild(ce(l));s=ds(s,J(),a)}}}else throw qn("WriteRecord should have .snap or .children")}}return s}function Ch(t,e,n,s,i){if(!s&&!i){const r=pn(t.visibleWrites,e);if(r!=null)return r;{const o=Ft(t.visibleWrites,e);if(eo(o))return n;if(n==null&&!Zr(o,J()))return null;{const l=n||B.EMPTY_NODE;return $n(o,l)}}}else{const r=Ft(t.visibleWrites,e);if(!i&&eo(r))return n;if(!i&&n==null&&!Zr(r,J()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(st(a.path,e)||st(e,a.path))},l=Eh(t.allWrites,o,e),c=n||B.EMPTY_NODE;return $n(l,c)}}}function rv(t,e,n){let s=B.EMPTY_NODE;const i=pn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ft(t.visibleWrites,e);return n.forEachChild(_e,(o,l)=>{const c=$n(Ft(r,new ie(o)),l);s=s.updateImmediateChild(o,c)}),Gc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ft(t.visibleWrites,e);return Gc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ov(t,e,n,s,i){w(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ee(e,n);if(Zr(t.visibleWrites,r))return null;{const o=Ft(t.visibleWrites,r);return eo(o)?i.getChild(n):$n(o,i.getChild(n))}}function lv(t,e,n,s){const i=Ee(e,n),r=pn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ft(t.visibleWrites,i);return $n(o,s.getNode().getImmediateChild(n))}else return null}function cv(t,e){return pn(t.visibleWrites,e)}function av(t,e,n,s,i,r,o){let l;const c=Ft(t.visibleWrites,e),a=pn(c,J());if(a!=null)l=a;else if(n!=null)l=$n(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function uv(){return{visibleWrites:ct.empty(),allWrites:[],lastWriteId:-1}}function Ii(t,e,n,s){return Ch(t.writeTree,t.treePath,e,n,s)}function Wo(t,e){return rv(t.writeTree,t.treePath,e)}function Yc(t,e,n,s){return ov(t.writeTree,t.treePath,e,n,s)}function Si(t,e){return cv(t.writeTree,Ee(t.treePath,e))}function hv(t,e,n,s,i,r){return av(t.writeTree,t.treePath,e,n,s,i,r)}function $o(t,e,n){return lv(t.writeTree,t.treePath,e,n)}function bh(t,e){return wh(Ee(t.treePath,e),t.writeTree)}function wh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class fv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,xs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Rs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Wn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,xs(s,e.snapshotNode,i.oldSnap));else throw qn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class dv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ih=new dv;class jo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Wt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $o(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fn(this.viewCache_),r=hv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function pv(t){return{filter:t}}function _v(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gv(t,e,n,s,i){const r=new fv;let o,l;if(n.type===it.OVERWRITE){const a=n;a.source.fromUser?o=to(t,e,a.path,a.snap,s,i,r):(w(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!V(a.path),o=Ti(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===it.MERGE){const a=n;a.source.fromUser?o=yv(t,e,a.path,a.children,s,i,r):(w(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=no(t,e,a.path,a.children,s,i,l,r))}else if(n.type===it.ACK_USER_WRITE){const a=n;a.revert?o=Cv(t,e,a.path,s,i,r):o=vv(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===it.LISTEN_COMPLETE)o=Ev(t,e,n.path,s,r);else throw qn("Unknown operation type: "+n.type);const c=r.getChanges();return mv(e,o,c),{viewCache:o,changes:c}}function mv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=wi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(_h(wi(e)))}}function Sh(t,e,n,s,i,r){const o=e.eventCache;if(Si(s,n)!=null)return e;{let l,c;if(V(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=fn(e),u=a instanceof B?a:B.EMPTY_NODE,h=Wo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const a=Ii(s,fn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=q(n);if(a===".priority"){w(Ht(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Yc(s,n,u,c);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ce(n);let h;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const f=Yc(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(a).updateChild(u,f):h=o.getNode().getImmediateChild(a)}else h=$o(s,a,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),a,h,u,i,r):l=o.getNode()}}return fs(e,l,o.isFullyInitialized()||V(n),t.filter.filtersNodes())}}function Ti(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(V(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),_,null)}else{const _=q(n);if(!c.isCompleteForPath(n)&&Ht(n)>1)return e;const g=ce(n),P=c.getNode().getImmediateChild(_).updateChild(g,s);_===".priority"?a=u.updatePriority(c.getNode(),P):a=u.updateChild(c.getNode(),_,P,g,Ih,null)}const h=yh(e,a,c.isFullyInitialized()||V(n),u.filtersNodes()),f=new jo(i,h,r);return Sh(t,h,n,i,f,l)}function to(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new jo(i,e,r);if(V(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=fs(e,a,!0,t.filter.filtersNodes());else{const h=q(n);if(h===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=fs(e,a,l.isFullyInitialized(),l.isFiltered());else{const f=ce(n),_=l.getNode().getImmediateChild(h);let g;if(V(f))g=s;else{const b=u.getCompleteChild(h);b!=null?rh(f)===".priority"&&b.getChild(lh(f)).isEmpty()?g=b:g=b.updateChild(f,s):g=B.EMPTY_NODE}if(_.equals(g))c=e;else{const b=t.filter.updateChild(l.getNode(),h,g,f,u,o);c=fs(e,b,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Qc(t,e){return t.eventCache.isCompleteForChild(e)}function yv(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=Ee(n,c);Qc(e,q(u))&&(l=to(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=Ee(n,c);Qc(e,q(u))||(l=to(t,l,u,a,i,r,o))}),l}function Xc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function no(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;V(n)?a=s:a=new ue(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),g=Xc(t,_,f);c=Ti(t,c,new ie(h),g,i,r,o,l)}}),a.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const g=e.serverCache.getNode().getImmediateChild(h),b=Xc(t,g,f);c=Ti(t,c,new ie(h),b,i,r,o,l)}}),c}function vv(t,e,n,s,i,r,o){if(Si(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(V(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Ti(t,e,n,c.getNode().getChild(n),i,r,l,o);if(V(n)){let a=new ue(null);return c.getNode().forEachChild(Pn,(u,h)=>{a=a.set(new ie(u),h)}),no(t,e,n,a,i,r,l,o)}else return e}else{let a=new ue(null);return s.foreach((u,h)=>{const f=Ee(n,u);c.isCompleteForPath(f)&&(a=a.set(u,c.getNode().getChild(f)))}),no(t,e,n,a,i,r,l,o)}}function Ev(t,e,n,s,i){const r=e.serverCache,o=yh(e,r.getNode(),r.isFullyInitialized()||V(n),r.isFiltered());return Sh(t,o,n,s,Ih,i)}function Cv(t,e,n,s,i,r){let o;if(Si(s,n)!=null)return e;{const l=new jo(s,e,i),c=e.eventCache.getNode();let a;if(V(n)||q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ii(s,fn(e));else{const h=e.serverCache.getNode();w(h instanceof B,"serverChildren would be complete if leaf node"),u=Wo(s,h)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=q(n);let h=$o(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?a=t.filter.updateChild(c,u,h,ce(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,B.EMPTY_NODE,ce(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ii(s,fn(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||Si(s,J())!=null,fs(e,a,o,t.filter.filtersNodes())}}/**
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
 */class bv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Fo(s.getIndex()),r=Wy(s);this.processor_=pv(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(B.EMPTY_NODE,l.getNode(),null),u=new Wt(c,o.isFullyInitialized(),i.filtersNodes()),h=new Wt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=qi(h,u),this.eventGenerator_=new Gy(this.query_)}get query(){return this.query_}}function wv(t){return t.viewCache_.serverCache.getNode()}function Iv(t){return wi(t.viewCache_)}function Sv(t,e){const n=fn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!V(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function Jc(t){return t.eventRegistrations_.length===0}function Tv(t,e){t.eventRegistrations_.push(e)}function Zc(t,e,n){const s=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function ea(t,e,n,s){e.type===it.MERGE&&e.source.queryId!==null&&(w(fn(t.viewCache_),"We should always have a full cache before handling merges"),w(wi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=gv(t.processor_,i,e,n,s);return _v(t.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Th(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Rv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(Wn(r,o))}),n.isFullyInitialized()&&s.push(_h(n.getNode())),Th(t,s,n.getNode(),e)}function Th(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Yy(t.eventGenerator_,e,n,i)}/**
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
 */let Ri;class Rh{constructor(){this.views=new Map}}function xv(t){w(!Ri,"__referenceConstructor has already been defined"),Ri=t}function Nv(){return w(Ri,"Reference.ts has not been loaded"),Ri}function Pv(t){return t.views.size===0}function Vo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return w(r!=null,"SyncTree gave us an op for an invalid query."),ea(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ea(o,e,n,s));return r}}function xh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Ii(n,i?s:null),c=!1;l?c=!0:s instanceof B?(l=Wo(n,s),c=!1):(l=B.EMPTY_NODE,c=!1);const a=qi(new Wt(l,c,!1),new Wt(s,i,!1));return new bv(e,a)}return o}function Av(t,e,n,s,i,r){const o=xh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Tv(o,n),Rv(o,n)}function Ov(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=$t(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(Zc(a,n,s)),Jc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(Zc(c,n,s)),Jc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!$t(t)&&r.push(new(Nv())(e._repo,e._path)),{removed:r,events:o}}function Nh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Bt(t,e){let n=null;for(const s of t.views.values())n=n||Sv(s,e);return n}function Ph(t,e){if(e._queryParams.loadsAllData())return Gi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ah(t,e){return Ph(t,e)!=null}function $t(t){return Gi(t)!=null}function Gi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let xi;function kv(t){w(!xi,"__referenceConstructor has already been defined"),xi=t}function Dv(){return w(xi,"Reference.ts has not been loaded"),xi}let Mv=1;class ta{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=uv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Oh(t,e,n,s,i){return Zy(t.pendingWriteTree_,e,n,s,i),i?$s(t,new hn(mh(),e,n)):[]}function nn(t,e,n=!1){const s=ev(t.pendingWriteTree_,e);if(tv(t.pendingWriteTree_,e)){let r=new ue(null);return s.snap!=null?r=r.set(J(),!0):We(s.children,o=>{r=r.set(new ie(o),!0)}),$s(t,new bi(s.path,r,n))}else return[]}function Ws(t,e,n){return $s(t,new hn(Uo(),e,n))}function Lv(t,e,n){const s=ue.fromObject(n);return $s(t,new As(Uo(),e,s))}function Fv(t,e){return $s(t,new Ps(Uo(),e))}function Bv(t,e,n){const s=qo(t,n);if(s){const i=Ko(s),r=i.path,o=i.queryId,l=Oe(r,e),c=new Ps(Ho(o),l);return Go(t,r,c)}else return[]}function kh(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Ah(o,e))){const c=Ov(o,e,n,s);Pv(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>$t(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=$v(f);for(let g=0;g<_.length;++g){const b=_[g],P=b.query,x=Fh(t,b);t.listenProvider_.startListening(ps(P),Os(t,P),x.hashFn,x.onComplete)}}}!h&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(ps(e),null):a.forEach(f=>{const _=t.queryToTagMap.get(Yi(f));t.listenProvider_.stopListening(ps(f),_)}))}jv(t,a)}return l}function Dh(t,e,n,s){const i=qo(t,s);if(i!=null){const r=Ko(i),o=r.path,l=r.queryId,c=Oe(o,e),a=new hn(Ho(l),c,n);return Go(t,o,a)}else return[]}function Uv(t,e,n,s){const i=qo(t,s);if(i){const r=Ko(i),o=r.path,l=r.queryId,c=Oe(o,e),a=ue.fromObject(n),u=new As(Ho(l),c,a);return Go(t,o,u)}else return[]}function Hv(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const g=Oe(f,i);r=r||Bt(_,g),o=o||$t(_)});let l=t.syncPointTree_.get(i);l?(o=o||$t(l),r=r||Bt(l,J())):(l=new Rh,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,g)=>{const b=Bt(g,J());b&&(r=r.updateImmediateChild(_,b))}));const a=Ah(l,e);if(!a&&!e._queryParams.loadsAllData()){const f=Yi(e);w(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Vv();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=Ki(t.pendingWriteTree_,i);let h=Av(l,e,n,u,r,c);if(!a&&!o&&!s){const f=Ph(l,e);h=h.concat(zv(t,e,f))}return h}function zo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Oe(o,e),a=Bt(l,c);if(a)return a});return Ch(i,e,r,n,!0)}function Wv(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const h=Oe(a,n);s=s||Bt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Bt(i,J()):(i=new Rh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Wt(s,!0,!1):null,l=Ki(t.pendingWriteTree_,e._path),c=xh(i,e,l,r?o.getNode():B.EMPTY_NODE,r);return Iv(c)}function $s(t,e){return Mh(e,t.syncPointTree_,null,Ki(t.pendingWriteTree_,J()))}function Mh(t,e,n,s){if(V(t.path))return Lh(t,e,n,s);{const i=e.get(J());n==null&&i!=null&&(n=Bt(i,J()));let r=[];const o=q(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=bh(s,o);r=r.concat(Mh(l,c,a,u))}return i&&(r=r.concat(Vo(i,t,s,n))),r}}function Lh(t,e,n,s){const i=e.get(J());n==null&&i!=null&&(n=Bt(i,J()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=bh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Lh(u,l,c,a)))}),i&&(r=r.concat(Vo(i,t,s,n))),r}function Fh(t,e){const n=e.query,s=Os(t,n);return{hashFn:()=>(wv(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Bv(t,n._path,s):Fv(t,n._path);{const r=Hm(i,n);return kh(t,n,null,r)}}}}function Os(t,e){const n=Yi(e);return t.queryToTagMap.get(n)}function Yi(t){return t._path.toString()+"$"+t._queryIdentifier}function qo(t,e){return t.tagToQueryMap.get(e)}function Ko(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function Go(t,e,n){const s=t.syncPointTree_.get(e);w(s,"Missing sync point for query tag that we're tracking");const i=Ki(t.pendingWriteTree_,e);return Vo(s,n,i,null)}function $v(t){return t.fold((e,n,s)=>{if(n&&$t(n))return[Gi(n)];{let i=[];return n&&(i=Nh(n)),We(s,(r,o)=>{i=i.concat(o)}),i}})}function ps(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Dv())(t._repo,t._path):t}function jv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Yi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Vv(){return Mv++}function zv(t,e,n){const s=e._path,i=Os(t,e),r=Fh(t,n),o=t.listenProvider_.startListening(ps(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)w(!$t(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,h)=>{if(!V(a)&&u&&$t(u))return[Gi(u).query];{let f=[];return u&&(f=f.concat(Nh(u).map(_=>_.query))),We(h,(_,g)=>{f=f.concat(g)}),f}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(ps(u),Os(t,u))}}return o}/**
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
 */class Yo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yo(n)}node(){return this.node_}}class Qo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ee(this.path_,e);return new Qo(this.syncTree_,n)}node(){return zo(this.syncTree_,this.path_)}}const qv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},na=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Kv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Gv(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Kv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},Gv=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&w(!1,"Unexpected increment value: "+s);const i=e.node();if(w(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Yv=function(t,e,n,s){return Xo(e,new Qo(n,t),s)},Bh=function(t,e,n){return Xo(t,new Yo(e),n)};function Xo(t,e,n){const s=t.getPriority().val(),i=na(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=na(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new we(l,Se(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new we(i))),o.forEachChild(_e,(l,c)=>{const a=Xo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
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
 */class Jo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Zo(t,e){let n=e instanceof ie?e:new ie(e),s=t,i=q(n);for(;i!==null;){const r=Un(s.node.children,i)||{children:{},childCount:0};s=new Jo(i,s,r),n=ce(n),i=q(n)}return s}function Yn(t){return t.node.value}function Uh(t,e){t.node.value=e,so(t)}function Hh(t){return t.node.childCount>0}function Qv(t){return Yn(t)===void 0&&!Hh(t)}function Qi(t,e){We(t.node.children,(n,s)=>{e(new Jo(n,t,s))})}function Wh(t,e,n,s){n&&!s&&e(t),Qi(t,i=>{Wh(i,e,!0,s)}),n&&s&&e(t)}function Xv(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function js(t){return new ie(t.parent===null?t.name:js(t.parent)+"/"+t.name)}function so(t){t.parent!==null&&Jv(t.parent,t.name,t)}function Jv(t,e,n){const s=Qv(n),i=wt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,so(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,so(t))}/**
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
 */const Zv=/[\[\].#$\/\u0000-\u001F\u007F]/,eE=/[\[\].#$\u0000-\u001F\u007F]/,Er=10*1024*1024,$h=function(t){return typeof t=="string"&&t.length!==0&&!Zv.test(t)},jh=function(t){return typeof t=="string"&&t.length!==0&&!eE.test(t)},tE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jh(t)},Vh=function(t,e,n,s){s&&e===void 0||el(No(t,"value"),e,n)},el=function(t,e,n){const s=n instanceof ie?new vy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Qt(s)+" with contents = "+e.toString());if(Bu(e))throw new Error(t+"contains "+e.toString()+" "+Qt(s));if(typeof e=="string"&&e.length>Er/3&&Vi(e)>Er)throw new Error(t+"contains a string greater than "+Er+" utf8 bytes "+Qt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(We(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!$h(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ey(s,o),el(t,l,s),Cy(s)}),i&&r)throw new Error(t+' contains ".value" child '+Qt(s)+" in addition to actual children.")}},zh=function(t,e,n,s){if(!(s&&n===void 0)&&!jh(n))throw new Error(No(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zh(t,e,n,s)},qh=function(t,e){if(q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},sE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$h(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!tE(n))throw new Error(No(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class iE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Kh(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!ch(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function pt(t,e,n){Kh(t,n),rE(t,s=>st(s,e)||st(e,s))}function rE(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(oE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function oE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();on&&xe("event: "+n.toString()),Gn(s)}}}/**
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
 */const lE="repo_interrupt",cE=25;class aE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new iE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ci(),this.transactionQueueTree_=new Jo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function uE(t,e,n){if(t.stats_=ko(t.repoInfo_),t.forceRestClient_||Vm())t.server_=new Ei(t.repoInfo_,(s,i,r,o)=>{sa(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ia(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new vt(t.repoInfo_,e,(s,i,r,o)=>{sa(t,s,i,r,o)},s=>{ia(t,s)},s=>{hE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Ym(t.repoInfo_,()=>new Ky(t.stats_,t.server_)),t.infoData_=new $y,t.infoSyncTree_=new ta({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Ws(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),nl(t,"connected",!1),t.serverSyncTree_=new ta({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);pt(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Gh(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tl(t){return qv({timestamp:Gh(t)})}function sa(t,e,n,s,i){t.dataUpdateCount++;const r=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=pi(n,a=>Se(a));o=Uv(t.serverSyncTree_,r,c,i)}else{const c=Se(n);o=Dh(t.serverSyncTree_,r,c,i)}else if(s){const c=pi(n,a=>Se(a));o=Lv(t.serverSyncTree_,r,c)}else{const c=Se(n);o=Ws(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Ji(t,r)),pt(t.eventQueue_,l,o)}function ia(t,e){nl(t,"connected",e),e===!1&&pE(t)}function hE(t,e){We(e,(n,s)=>{nl(t,n,s)})}function nl(t,e,n){const s=new ie("/.info/"+e),i=Se(n);t.infoData_.updateSnapshot(s,i);const r=Ws(t.infoSyncTree_,s,i);pt(t.eventQueue_,s,r)}function Yh(t){return t.nextWriteId_++}function fE(t,e,n){const s=Wv(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Se(i).withIndex(e._queryParams.getIndex());Hv(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ws(t.serverSyncTree_,e._path,r);else{const l=Os(t.serverSyncTree_,e);o=Dh(t.serverSyncTree_,e._path,r,l)}return pt(t.eventQueue_,e._path,o),kh(t.serverSyncTree_,e,n,null,!0),r},i=>(Xi(t,"get for query "+ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function dE(t,e,n,s,i){Xi(t,"set",{path:e.toString(),value:n,priority:s});const r=tl(t),o=Se(n,s),l=zo(t.serverSyncTree_,e),c=Bh(o,l,r),a=Yh(t),u=Oh(t.serverSyncTree_,e,c,a,!0);Kh(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const g=f==="ok";g||He("set at "+e+" failed: "+f);const b=nn(t.serverSyncTree_,a,!g);pt(t.eventQueue_,e,b),gE(t,i,f,_)});const h=ef(t,e);Ji(t,h),pt(t.eventQueue_,h,[])}function pE(t){Xi(t,"onDisconnectEvents");const e=tl(t),n=Ci();Jr(t.onDisconnect_,J(),(i,r)=>{const o=Yv(i,r,t.serverSyncTree_,e);gh(n,i,o)});let s=[];Jr(n,J(),(i,r)=>{s=s.concat(Ws(t.serverSyncTree_,i,r));const o=ef(t,i);Ji(t,o)}),t.onDisconnect_=Ci(),pt(t.eventQueue_,J(),s)}function _E(t){t.persistentConnection_&&t.persistentConnection_.interrupt(lE)}function Xi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),xe(n,...e)}function gE(t,e,n,s){e&&Gn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Qh(t,e,n){return zo(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function sl(t,e=t.transactionQueueTree_){if(e||Zi(t,e),Yn(e)){const n=Jh(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&mE(t,js(e),n)}else Hh(e)&&Qi(e,n=>{sl(t,n)})}function mE(t,e,n){const s=n.map(a=>a.currentWriteId),i=Qh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];w(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Oe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Xi(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(nn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Zi(t,Zo(t.transactionQueueTree_,e)),sl(t,t.transactionQueueTree_),pt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Gn(h[f])}else{if(a==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{He("transaction at "+c.toString()+" failed: "+a);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=a}Ji(t,e)}},o)}function Ji(t,e){const n=Xh(t,e),s=js(n),i=Jh(t,n);return yE(t,i,s),s}function yE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Oe(n,c.path);let u=!1,h;if(w(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(nn(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=cE)u=!0,h="maxretry",i=i.concat(nn(t.serverSyncTree_,c.currentWriteId,!0));else{const f=Qh(t,c.path,o);c.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){el("transaction failed: Data returned ",_,c.path);let g=Se(_);typeof _=="object"&&_!=null&&wt(_,".priority")||(g=g.updatePriority(f.getPriority()));const P=c.currentWriteId,x=tl(t),O=Bh(g,f,x);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=O,c.currentWriteId=Yh(t),o.splice(o.indexOf(P),1),i=i.concat(Oh(t.serverSyncTree_,c.path,O,c.currentWriteId,c.applyLocally)),i=i.concat(nn(t.serverSyncTree_,P,!0))}else u=!0,h="nodata",i=i.concat(nn(t.serverSyncTree_,c.currentWriteId,!0))}pt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Zi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Gn(s[l]);sl(t,t.transactionQueueTree_)}function Xh(t,e){let n,s=t.transactionQueueTree_;for(n=q(e);n!==null&&Yn(s)===void 0;)s=Zo(s,n),e=ce(e),n=q(e);return s}function Jh(t,e){const n=[];return Zh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Zh(t,e,n){const s=Yn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Qi(e,i=>{Zh(t,i,n)})}function Zi(t,e){const n=Yn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Uh(e,n.length>0?n:void 0)}Qi(e,s=>{Zi(t,s)})}function ef(t,e){const n=js(Xh(t,e)),s=Zo(t.transactionQueueTree_,e);return Xv(s,i=>{Cr(t,i)}),Cr(t,s),Wh(s,i=>{Cr(t,i)}),n}function Cr(t,e){const n=Yn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(w(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(nn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Uh(e,void 0):n.length=r+1,pt(t.eventQueue_,js(e),i);for(let o=0;o<s.length;o++)Gn(s[o])}}/**
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
 */function vE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function EE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const ra=function(t,e){const n=CE(t),s=n.namespace;n.domain==="firebase.com"&&Ct(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Mm();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Qu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ie(n.pathString)}},CE=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=vE(t.substring(u,h)));const f=EE(t.substring(Math.min(t.length,h)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const _=e.slice(0,a);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */const oa="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",bE=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=oa.charAt(n%64),n=Math.floor(n/64);w(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=oa.charAt(e[i]);return w(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class wE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class IE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class SE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class il{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return V(this._path)?null:rh(this._path)}get ref(){return new It(this._repo,this._path)}get _queryIdentifier(){const e=Vc(this._queryParams),n=Ao(e);return n==="{}"?"default":n}get _queryObject(){return Vc(this._queryParams)}isEqual(e){if(e=dn(e),!(e instanceof il))return!1;const n=this._repo===e._repo,s=ch(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+yy(this._path)}}class It extends il{constructor(e,n){super(e,n,new Bo,!1)}get parent(){const e=lh(this._path);return e===null?null:new It(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ks{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),s=Ds(this.ref,e);return new ks(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ks(i,Ds(this.ref,s),_e)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tf(t,e){return t=dn(t),t._checkNotDeleted("ref"),e!==void 0?Ds(t._root,e):t._root}function Ds(t,e){return t=dn(t),q(t._path)===null?nE("child","path",e,!1):zh("child","path",e,!1),new It(t._repo,Ee(t._path,e))}function TE(t,e){t=dn(t),qh("push",t._path),Vh("push",e,t._path,!0);const n=Gh(t._repo),s=bE(n),i=Ds(t,s),r=Ds(t,s);let o;return e!=null?o=nf(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function nf(t,e){t=dn(t),qh("set",t._path),Vh("set",e,t._path,!1);const n=new ji;return dE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function RE(t){t=dn(t);const e=new SE(()=>{}),n=new rl(e);return fE(t._repo,t,n).then(s=>new ks(s,new It(t._repo,t._path),t._queryParams.getIndex()))}class rl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new wE("value",this,new ks(e.snapshotNode,new It(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new IE(this,e,n):null}matches(e){return e instanceof rl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}xv(It);kv(It);/**
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
 */const xE="FIREBASE_DATABASE_EMULATOR_HOST",io={};let NE=!1;function PE(t,e,n,s){t.repoInfo_=new Qu(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function AE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ra(r,i),l=o.repoInfo,c,a;typeof process<"u"&&process.env&&(a=process.env[xE]),a?(c=!0,r=`http://${a}?ns=${l.namespace}`,o=ra(r,i),l=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Nn(Nn.OWNER):new qm(t.name,t.options,e);sE("Invalid Firebase Database URL",o),V(o.path)||Ct("Database URL must point to the root of a Firebase Database (not including a child path).");const h=kE(l,t,u,new zm(t.name,n));return new DE(h,t)}function OE(t,e){const n=io[e];(!n||n[t.key]!==t)&&Ct(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_E(t),delete n[t.key]}function kE(t,e,n,s){let i=io[e.name];i||(i={},io[e.name]=i);let r=i[t.toURLString()];return r&&Ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new aE(t,NE,n,s),i[t.toURLString()]=r,r}class DE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(uE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new It(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(OE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ct("Cannot call "+e+" on a deleted database.")}}function ME(t=ym(),e){const n=pm(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=rg("database");s&&LE(n,...s)}return n}function LE(t,e,n,s={}){t=dn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ct("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Nn(Nn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:lg(s.mockUserToken,t.app.options.projectId);r=new Nn(o)}PE(i,e,n,r)}/**
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
 */function FE(t){Pm(mm),gi(new Is("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return AE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Rn(Rc,xc,t),Rn(Rc,xc,"esm2017")}vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};FE();const BE={apiKey:"AIzaSyCRQl7YSJj3ACv0TTjHd-bKiOCxSuNZ5gs",authDomain:"wedding-chatbox.firebaseapp.com",databaseURL:"https://wedding-chatbox-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"wedding-chatbox",storageBucket:"wedding-chatbox.appspot.com",messagingSenderId:"729067041456",appId:"1:729067041456:web:219f299c0eafc91c918175"};let ro,ol;const UE=()=>{ro=Ou(BE),ol=ME(ro)},HE=async(t,e)=>{const n=tf(ol,t),s=TE(n);await nf(s,e)},WE=t=>Object.keys(t).map(n=>({id:n,...t[n]})),$E=async t=>{const e=tf(ol,t);return(await RE(e)).val()||[]};function jE(){return ro||UE(),jt({writeDB:HE,readDB:$E,parseData:WE})}const Cn=jt({name:"",slug:"",inviter:"",isGroup:!1,isGiftSender:!1}),sf=$p("user",()=>{function t(e){Cn.name=e.name,Cn.slug=e.slug,Cn.inviter=e.inviter,Cn.isGroup=e.isGroup,Cn.isGiftSender=e.isGiftSender||!1}return{invitee:Cn,assignInvitee:t}}),VE={class:"heading-title"},zE=Vt({__name:"HeadingTitle",props:{text:null},setup(t){const e=t;return(n,s)=>(Ge(),cn("h1",VE,aa(e.text),1))}});const ll=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},br=ll(zE,[["__scopeId","data-v-e8e75cdc"]]),qE=t=>(Ua("data-v-c6e141a0"),t=t(),Ha(),t),KE={class:"guest-container"},GE=qE(()=>et("p",{class:"mb-5 guest__greeting"},"Kepada Bapak/Ibu/Saudara/i",-1)),YE={key:0,class:"typewriter mb-5"},QE={class:"guest__name"},XE=Vt({__name:"TheGuest",setup(t){const{invitee:e}=sf();return(n,s)=>(Ge(),cn("div",KE,[GE,ke(e).name?(Ge(),cn("div",YE,[et("p",QE,aa(ke(e).name),1)])):Dr("",!0),et("button",{type:"submit",class:"block button-primary naked-button responsive",onClick:s[0]||(s[0]=i=>n.$emit("open"))}," Buka Undangan ")]))}});const JE=ll(XE,[["__scopeId","data-v-c6e141a0"]]),ZE=t=>(Ua("data-v-e2e6960f"),t=t(),Ha(),t),eC={class:"section-container centered-flex"},tC={class:"guest"},nC={class:"sound-setting"},sC=ZE(()=>et("label",{for:"music"},"Mainkan suara latar.",-1)),iC=Vt({__name:"InitScreen",emits:["open"],setup(t,{emit:e}){const n="Jalu",s="Ayu",i=kt(!1),r=()=>{i.value=!0,setTimeout(()=>{e("open")},500)},o=Be({get:()=>{const l=localStorage.getItem("isPlayMusic");return l==="true"||l===null},set:l=>{localStorage.setItem("isPlayMusic",String(l))}});return(l,c)=>(Ge(),cn("div",{class:_s(["init-wrapper",i.value?"fadeout":""])},[(Ge(),cn(Ke,null,Pd(4,a=>et("div",{key:a,class:_s(`content-background bg-${a}`)},null,2)),64)),et("div",eC,[pe(br,{ref:"leftCorner",id:"title-text-1",text:ke(s),class:"mb-11 mr-10 animate"},null,8,["text"]),pe(br,{id:"title-text-2",text:"&",class:"animate"}),pe(br,{id:"title-text-3",text:ke(n),class:"mt-11 ml-10 animate"},null,8,["text"])]),et("div",tC,[pe(JE,{onOpen:r})]),et("div",nC,[xd(et("input",{type:"checkbox","onUpdate:modelValue":c[0]||(c[0]=a=>de(o)?o.value=a:null),id:"music",name:"music"},null,512),[[xp,ke(o)]]),sC])],2))}});const rC=ll(iC,[["__scopeId","data-v-e2e6960f"]]),oC=Vt({__name:"HomeView",setup(t){const e=wl(()=>oc(()=>import("./DesktopContainer-a23b065f.js"),["assets/DesktopContainer-a23b065f.js","assets/TheFooter-ef26ac6b.js","assets/TheFooter-7abf9265.css","assets/DesktopContainer-e82fa9b3.css"])),n=wl(()=>oc(()=>import("./MobileContainer-20243a14.js"),["assets/MobileContainer-20243a14.js","assets/TheFooter-ef26ac6b.js","assets/TheFooter-7abf9265.css","assets/MobileContainer-2fc0ea4d.css"])),s=Q_(window.navigator.userAgent).any,{readDB:i}=jE(),r=z_(),{assignInvitee:o}=sf(),l=async a=>{const u=`/guests/${a}`,h=await i(u);o({name:h.name,inviter:h.inviter,isGroup:h.isGroup,slug:a,isGiftSender:h.isGiftSender})};r.query&&r.query.to&&l(r.query.to);const c=kt(!0);return(a,u)=>(Ge(),cn(Ke,null,[c.value?(Ge(),ls(rC,{key:0,onOpen:u[0]||(u[0]=h=>c.value=!1)})):Dr("",!0),c.value?Dr("",!0):(Ge(),cn(Ke,{key:1},[ke(s)?(Ge(),ls(ke(n),{key:0})):(Ge(),ls(ke(e),{key:1}))],64))],64))}}),lC=j_({history:o_("/"),routes:[{path:"/",name:"home",component:oC}],scrollBehavior(){return{top:0}}});const cl=Dp(q_);cl.use(Fp());cl.use(lC);cl.mount("#app");export{Ke as F,br as H,ll as _,et as a,pe as b,cn as c,Vt as d,Ha as e,ke as f,ls as g,Dr as h,Pd as i,cC as j,jE as k,Ed as l,jt as m,_s as n,Ge as o,Ua as p,wd as q,kt as r,lo as s,aa as t,sf as u,Be as v,Xd as w,xd as x,aC as y,uC as z};
