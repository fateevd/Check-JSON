(this.webpackJsonpcheack=this.webpackJsonpcheack||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),o=c(5),r=c.n(o),d=c(2),a=[{id:10,title:"radio 1",completed:!1,checked:[{id:11,title:"checkbox 1",completed:!1},{id:12,title:"checkbox 2",completed:!1}]},{id:20,title:"radio 2",completed:!1,checked:[{id:21,title:"checkbox 1",completed:!1},{id:22,title:"checkbox 2",completed:!1},{id:23,title:"checkbox 3",completed:!1}]}],l=c(4),u=c(6),s=c(0),j=["children"],b=function(e){var t=e.children,c=Object(u.a)(e,j);return Object(s.jsx)("button",Object(l.a)(Object(l.a)({},c),{},{children:t}))},h=function(e){var t=e.copyState,c=e.onInput,i=Object(n.useState)(""),o=Object(d.a)(i,2),r=o[0],a=o[1];return Object(s.jsxs)("form",{className:"form",children:[Object(s.jsx)("input",{value:r,onChange:function(e){return a(e.target.value)},type:"text"}),Object(s.jsx)(b,{onClick:function(e){return function(e){e.preventDefault(),c(r),a("")}(e)},children:"set state"}),Object(s.jsx)(b,{onClick:function(e){return t(e)},children:"save state"})]})},p=function(e){var t=e.subItem,c=e.onChange;return Object(s.jsxs)("div",{className:"checkBox",children:[Object(s.jsx)("input",{checked:t.completed,onChange:function(){return c(t.id)},id:t.id,type:"checkbox"}),Object(s.jsx)("label",{htmlFor:t.id,children:t.title})]})},m=function(e){var t=e.item,c=e.onChange;return Object(s.jsxs)("div",{className:"radioButton",children:[Object(s.jsx)("input",{type:"radio",checked:t.completed,onChange:function(){return c(t.id)}}),Object(s.jsx)("label",{htmlFor:t.id,children:t.title})]})},x=function(){var e=Object(n.useState)(a),t=Object(d.a)(e,2),c=t[0],i=t[1],o=function(e){i(c.map((function(t){return t.id===e&&(t.completed=!t.completed),t.checked.map((function(t){return t.id===e&&(t.completed=!t.completed),t})),t})))};return Object(s.jsxs)("div",{children:[Object(s.jsx)(h,{onInput:function(e){i(JSON.parse(e))},copyState:function(e){e.preventDefault(),navigator.clipboard.writeText(JSON.stringify(c))}}),c.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)(m,{item:e,onChange:o}),e.checked.map((function(e){return Object(s.jsx)(p,{subItem:e,onChange:o},e.id)}))]},e.id)}))]})},O=(c(12),function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(x,{})})});r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d8428cdb.chunk.js.map