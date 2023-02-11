import{h as _,j as d,k as p,al as h,c as m,am as u,m as n,an as t,ao as o,A as s,F as f,ap as v,aq as g,ar as x,s as r,as as y,at as b,q as N,au as k,av as P,_ as j}from"./nav-c46f5ec5.js";import{N as w}from"./NoteDisplay-93bcc68c.js";import{u as S}from"./index-805c0b13.js";import"./_commonjsHelpers-725317a4.js";const V={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},q={class:"opacity-50"},z={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),H={key:0,class:"border-gray-400/50 mb-8"},A=_({__name:"PresenterPrint",setup(F){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),S({title:`Notes - ${m.title}`});const i=u(()=>x.slice(0,-1).map(a=>{var l;return(l=a.meta)==null?void 0:l.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,l)=>(r(),n("div",{id:"page-root",style:g(s(P))},[t("div",V,[t("div",L,[t("h1",T,o(s(m).title),1),t("div",q,o(new Date().toLocaleString()),1)]),(r(!0),n(f,null,v(s(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",z,[t("div",B,[t("div",C,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),D])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(i).length-1?(r(),n("hr",H)):k("v-if",!0)]))),128))])],4))}}),$=j(A,[["__file","/home/projects/slidev-l1qnz8/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{$ as default};
