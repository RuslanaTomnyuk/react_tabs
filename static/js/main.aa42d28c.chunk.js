(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),s=n(4),b=n(1),i=(n(9),n(10),n(0)),l=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("ul",{className:"tabs__list",children:e.map((function(t){return Object(i.jsxs)("li",{className:"tabs__tab",children:[Object(i.jsx)("button",{type:"button",className:"tabs__button",onClick:function(){return c(t)},children:t.title}),Object(i.jsx)("span",{className:"tabs__content",children:t.id===n&&t.content})]},t.id)}))})})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],r=function(){var t=Object(b.useState)(o[0]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsxs)("h1",{className:"app__title",children:["Selected tab is\xa0",n.title]}),Object(i.jsx)(l,{selectedTabId:n.id,tabs:o,onTabSelected:c})]})};a.a.render(Object(i.jsx)(r,{}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.aa42d28c.chunk.js.map