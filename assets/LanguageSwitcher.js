import{c as o}from"./createLucideIcon.js";import{u as _,p as r,c as h,o as f,e as a,w as t,b as n,d as i,t as v,s as w,f as c}from"./index.js";import{_ as M}from"./_plugin-vue_export-helper.js";/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=o("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=o("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=o("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=o("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),x={class:"language-switcher"},N={class:"lang-text"},L={__name:"LanguageSwitcher",setup(S){const{locale:l}=_(),d={"zh-CN":"简中","zh-TW":"繁中",en:"EN",ja:"日本",ko:"한국",vi:"VN"},u=r(()=>l.value),m=r(()=>d[l.value]||"简中"),g=({key:p})=>{l.value=p,localStorage.setItem("locale",p)};return(p,e)=>{const s=c("a-menu-item"),k=c("a-menu"),y=c("a-dropdown");return f(),h("div",x,[a(y,{trigger:["click"]},{overlay:t(()=>[a(k,{onClick:g,"selected-keys":[u.value]},{default:t(()=>[a(s,{key:"zh-CN"},{default:t(()=>[...e[1]||(e[1]=[n("span",{class:"lang-option"},"🇨🇳 简体中文",-1)])]),_:1}),a(s,{key:"zh-TW"},{default:t(()=>[...e[2]||(e[2]=[n("span",{class:"lang-option"},"🇹🇼 繁體中文",-1)])]),_:1}),a(s,{key:"en"},{default:t(()=>[...e[3]||(e[3]=[n("span",{class:"lang-option"},"🇺🇸 English",-1)])]),_:1}),a(s,{key:"ja"},{default:t(()=>[...e[4]||(e[4]=[n("span",{class:"lang-option"},"🇯🇵 日本語",-1)])]),_:1}),a(s,{key:"ko"},{default:t(()=>[...e[5]||(e[5]=[n("span",{class:"lang-option"},"🇰🇷 한국어",-1)])]),_:1}),a(s,{key:"vi"},{default:t(()=>[...e[6]||(e[6]=[n("span",{class:"lang-option"},"🇻🇳 Tiếng Việt",-1)])]),_:1})]),_:1},8,["selected-keys"])]),default:t(()=>[n("a",{class:"lang-btn",onClick:e[0]||(e[0]=w(()=>{},["prevent"]))},[a(i(C),{size:18}),n("span",N,v(m.value),1),a(i(z),{size:14})])]),_:1})])}}},E=M(L,[["__scopeId","data-v-8e212f38"]]);export{z as C,C as G,E as L,V as M,B as S};
