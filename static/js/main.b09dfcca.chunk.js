(this.webpackJsonppersonal_dashboard=this.webpackJsonppersonal_dashboard||[]).push([[0],{155:function(t,e,n){},156:function(t,e,n){},286:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),s=n.n(a),j=n(16),o=n.n(j),i=(n(155),n.p,n(156),n(157),n(9)),r=n(27),l=n.n(r),b=n(80),u=n.n(b);function O(t){var e,n=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),s=Object(a.useState)(0),j=Object(i.a)(s,1)[0],o=Object(a.useState)([]),r=Object(i.a)(o,2),b=r[0],O=r[1],d=Object(a.useState)({}),m=Object(i.a)(d,2),x=m[0],h=m[1],f=Object(a.useState)(""),p=Object(i.a)(f,2),v=p[0],g=p[1];return Object(a.useEffect)((function(){l.a.get("http://".concat(n,"/json?name=").concat(t.list,".json")).then((function(t){O(t.data.data[0].structure.content)}))}),[j]),Object(a.useEffect)((function(){"true"!==t.latest?l.a.get("http://".concat(n,"/json?name=").concat(t.name,"&list=").concat(t.list)).then((function(t){h(t.data.data[0].data)})):l.a.get("http://".concat(n,"/json?date=latest&list=").concat(t.list)).then((function(t){h(t.data.data[0].data)}))}),[b]),Object(a.useEffect)((function(){var e=b.map((function(e){var n,c;return t.onlynext?e.id.includes("next")&&null!==(c="## "+e.title+"\n\n"+x[e.id])&&void 0!==c?c:"":"## "+e.title+"\n\n"+(null!==(n=x[e.id])&&void 0!==n?n:"")}));g(e.join("\n"))}),[x]),Object(c.jsx)(u.a,{source:v})}function d(){return Object(c.jsx)(O,{latest:"true",list:"weekly",onlynext:!0})}function m(){return Object(c.jsx)(O,{latest:"true",list:"monthly",onlynext:!0})}var x=n(81),h=n(57),f=n(291),p=n(146),v=n(15),g=f.a.TextArea;function y(t){var e,n=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),s=Object(a.useState)([]),j=Object(i.a)(s,2),o=j[0],r=j[1],b=Object(a.useState)(0),u=Object(i.a)(b,1)[0],O=Object(a.useState)({}),d=Object(i.a)(O,2),m=d[0],y=d[1],S=Object(v.e)(),k="";void 0!==t.date&&null!==t.date&&""!==t.date&&(k=t.date.split(".")[0]),console.log(k);var _=Object(a.useState)(k),w=Object(i.a)(_,2),C=w[0],I=w[1];"date"in m||y(Object(h.a)(Object(h.a)({},m),{},{date:C})),Object(a.useEffect)((function(){var e="http://".concat(n,"/json?name=").concat(t.list,".json");l.a.get(e).then((function(t){r(t.data.data[0].structure.content)}))}),[u]),Object(a.useEffect)((function(){if(void 0!==t.date&&null!==t.date&&""!==t.date){var e="http://".concat(n,"/json?list=").concat(t.list,"&name=").concat(k,".json");l.a.get(e).then((function(t){y(t.data.data[0].data)}))}}),[u]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Date"}),Object(c.jsx)(f.a,{value:C,onChange:function(t){return e=t.target.value,I(e),void y(Object(h.a)(Object(h.a)({},m),{},{date:e}));var e}}),o.map((function(t){var e;return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t.title}),Object(c.jsx)(g,{rows:6,onChange:function(e){return n=e.target.value,c=t.id,console.log(m),void y(Object(h.a)(Object(h.a)({},m),{},Object(x.a)({},c,n)));var n,c},value:null!==(e=m[t.id])&&void 0!==e?e:""}),Object(c.jsx)("br",{})]})})),Object(c.jsx)(p.a,{type:"primary",onClick:function(){l.a.post("http://".concat(n,"/json?list=").concat(t.list),m).then((function(){S.push("/".concat(t.list,"_view"))}))},children:"submit"})]})}function S(t){var e,n=Object(a.useState)(t.date),s=Object(i.a)(n,2),j=s[0],o=s[1],r=Object(a.useState)(!0),b=Object(i.a)(r,2),u=b[0],O=b[1],d=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),m=Object(a.useState)(0),x=Object(i.a)(m,1)[0];return Object(a.useEffect)((function(){""===j?l.a.get("http://".concat(d,"/date?list=").concat(t.list)).then((function(t){o(t.data.date),O(!1)})):O(!1)}),[x]),u?Object(c.jsx)(c.Fragment,{}):Object(c.jsx)(y,{list:t.list,date:j})}function k(t){var e,n=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),s=Object(a.useState)(0),j=Object(i.a)(s,1)[0],o=Object(a.useState)(""),r=Object(i.a)(o,2),b=r[0],O=r[1];return Object(a.useEffect)((function(){l.a.get("http://".concat(n,"/file?name=").concat(t.name,"&list=").concat(t.list)).then((function(t){O(t.data.data[0].content)}))}),[j]),Object(c.jsx)(u.a,{source:b})}function _(){var t,e=Object(a.useState)([]),n=Object(i.a)(e,2),s=n[0],j=n[1],o=(null!==(t="44.232.253.221")?t:"127.0.0.1")+":"+("219","219"),r=Object(a.useState)(""),b=Object(i.a)(r,2),u=b[0],O=b[1],d=Object(a.useState)(!0),m=Object(i.a)(d,2),x=m[0],h=m[1];return Object(a.useEffect)((function(){l.a.get("http://".concat(o,"/file?list=read")).then((function(t){j(t.data.data.map((function(t){return{name:t.name}})))})),console.log(s)}),[0,x]),x?Object(c.jsx)(c.Fragment,{children:s.sort((function(t,e){return t.name.localeCompare(e.name)})).map((function(t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("a",{onClick:function(){O(t.name),h(!1)},children:t.name},t.name),Object(c.jsx)("br",{})]})}))}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{name:u,list:"read"}),Object(c.jsx)(p.a,{type:"primary",onClick:function(){h(!0)},children:"back"})]})}function w(t){var e,n=Object(a.useState)([]),s=Object(i.a)(n,2),j=s[0],o=s[1],r=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),b=Object(a.useState)(""),u=Object(i.a)(b,2),d=u[0],m=u[1],x=Object(a.useState)(!0),h=Object(i.a)(x,2),f=h[0],g=h[1],y=Object(v.e)();return console.log(t.history),Object(a.useEffect)((function(){l.a.get("http://".concat(r,"/file?list=").concat(t.list)).then((function(t){o(t.data.data.filter((function(t){return!t.name.includes("9999")})).map((function(t){return{name:t.name}})))})),console.log(j)}),[0,f]),f?Object(c.jsx)(c.Fragment,{children:j.sort((function(t,e){return e.name.localeCompare(t.name)})).map((function(t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("a",{onClick:function(){m(t.name),g(!1)},children:t.name},t.name),Object(c.jsx)("br",{})]})}))}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{name:d,list:t.list,onlynext:!1}),Object(c.jsx)(p.a,{type:"primary",onClick:function(){g(!0)},children:"back"}),Object(c.jsx)(p.a,{type:"primary",onClick:function(){y.push("/".concat(t.list,"_edit?date=").concat(d))},children:"edit"})]})}var C=n(26),I=n(289),F=n(290),E=n(292),N=n(293),B=n(294),L=n(295),P=n(296),T=n(297),D=n(298),H=I.a.Header,J=I.a.Sider,M=I.a.Content;var A=F.a.SubMenu;var K=function(t){var e,n=[{name:"\u6bcf\u5468\u8ba1\u5212",json:"weekly"},{name:"\u6bcf\u5468\u5de5\u4f5c\u603b\u7ed3",json:"weekly_work"},{name:"\u6bcf\u6708\u8ba1\u5212",json:"monthly"},{name:"\u9879\u76ee",json:"project"},{name:"\u670b\u53cb",json:"friends"},{name:"\u7761\u524d\u6545\u4e8b",json:"sleep_story"},{name:"\u6545\u4e8b",json:"story"},{name:"\u7b11\u8bdd",json:"fun"}],a=[{name:"\u8bfb\u4e66\u8ba1\u5212",json:"book"},{name:"\u505a\u996d",json:"cook"},{name:"\u94fe\u63a5",json:"reading_link"},{name:"\u9910\u5385",json:"resturant"},{name:"\u65c5\u6e38",json:"tour"},{name:"\u6444\u5f71",json:"photos"}],s=new URLSearchParams(Object(v.f)().search);return Object(c.jsxs)(I.a,{children:[Object(c.jsxs)(J,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(t){console.log(t)},onCollapse:function(t,e){console.log(t,e)},children:[Object(c.jsx)("div",{className:"logo"}),Object(c.jsxs)(F.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(c.jsxs)(F.a.Item,{icon:Object(c.jsx)(E.a,{}),children:["\u81ea\u5df1\u63d0\u9ad8\u7684\u70b9",Object(c.jsx)(C.b,{to:"/improvement"})]},"1"),Object(c.jsxs)(F.a.Item,{icon:Object(c.jsx)(E.a,{}),children:["\u539f\u5219",Object(c.jsx)(C.b,{to:"/principe"})]},"10"),Object(c.jsxs)(F.a.Item,{icon:Object(c.jsx)(N.a,{}),children:["\u540c\u7406\u5fc3",Object(c.jsx)(C.b,{to:"/empthy"})]},"11"),Object(c.jsxs)(F.a.Item,{icon:Object(c.jsx)(B.a,{}),children:["\u5e94\u6025\u5904\u7406",Object(c.jsx)(C.b,{to:"/safety"})]},"12"),Object(c.jsxs)(F.a.Item,{icon:Object(c.jsx)(L.a,{}),children:["\u672c\u5468\u76ee\u6807",Object(c.jsx)(C.b,{to:"/weekly"})]},"2"),Object(c.jsxs)(F.a.Item,{icon:Object(c.jsx)(L.a,{}),children:["\u672c\u6708\u76ee\u6807",Object(c.jsx)(C.b,{to:"/monthly"})]},"3"),Object(c.jsxs)(F.a.Item,{icon:Object(c.jsx)(L.a,{}),children:["\u5e74\u8ba1\u5212",Object(c.jsx)(C.b,{to:"/year_plan"})]},"3"),Object(c.jsxs)(F.a.Item,{icon:Object(c.jsx)(P.a,{}),children:["\u8bfb\u4e66\u7b14\u8bb0",Object(c.jsx)(C.b,{to:"/read"})]},"4"),Object(c.jsx)(A,{icon:Object(c.jsx)(T.a,{}),title:"\u4fee\u6539",children:n.map((function(t){var e="".concat(t.json,"_edit");return Object(c.jsxs)(F.a.Item,{children:[t.name,Object(c.jsx)(C.b,{to:"/".concat(e)})]},e)}))},"sub1"),Object(c.jsx)(A,{icon:Object(c.jsx)(D.a,{}),title:"\u67e5\u770b",children:n.map((function(t){var e="".concat(t.json,"_view");return Object(c.jsxs)(F.a.Item,{children:[t.name,Object(c.jsx)(C.b,{to:"/".concat(e)})]},e)}))},"sub2"),Object(c.jsx)(A,{icon:Object(c.jsx)(T.a,{}),title:"\u6dfb\u52a0\u6e05\u5355",children:a.map((function(t){var e="".concat(t.json,"_edit");return Object(c.jsxs)(F.a.Item,{children:[t.name,Object(c.jsx)(C.b,{to:"/".concat(e)})]},e)}))},"sub3"),Object(c.jsx)(A,{icon:Object(c.jsx)(D.a,{}),title:"\u67e5\u770b\u6e05\u5355",children:a.map((function(t){var e="".concat(t.json,"_view");return Object(c.jsxs)(F.a.Item,{children:[t.name,Object(c.jsx)(C.b,{to:"/".concat(e)})]},e)}))},"sub4")]})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(H,{className:"site-layout-sub-header-background",style:{padding:0}}),Object(c.jsx)(M,{style:{margin:"24px 16px 0"},children:Object(c.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:1024},children:[Object(c.jsx)(v.a,{exact:!0,path:"/",children:Object(c.jsx)(k,{name:"\u6211\u80fd\u505a\u7684\u597d\u7684\u5730\u65b9.md",list:"must"})}),Object(c.jsx)(v.a,{path:"/improvement",children:Object(c.jsx)(k,{name:"\u6211\u80fd\u505a\u7684\u597d\u7684\u5730\u65b9.md",list:"must"})}),Object(c.jsx)(v.a,{path:"/safety",children:Object(c.jsx)(k,{name:"\u5e94\u6025\u5904\u7406\u65b9\u6cd5.md",list:"must"})}),Object(c.jsx)(v.a,{path:"/year_plan",children:Object(c.jsx)(k,{name:"2021\u5e74\u8ba1\u5212.md",list:"must"})}),Object(c.jsx)(v.a,{path:"/weekly",component:d}),Object(c.jsx)(v.a,{path:"/monthly",component:m}),Object(c.jsx)(v.a,{path:"/read",component:_}),n.map((function(t){var e,n="/".concat(t.json,"_edit");return Object(c.jsx)(v.a,{path:n,children:Object(c.jsx)(S,{list:t.json,date:null!==(e=s.get("date"))&&void 0!==e?e:""})})})),n.map((function(t){var e="/".concat(t.json,"_view");return Object(c.jsx)(v.a,{path:e,children:Object(c.jsx)(w,{list:t.json})})})),a.map((function(t){var e,n="/".concat(t.json,"_edit");return Object(c.jsx)(v.a,{path:n,children:Object(c.jsx)(S,{list:t.json,date:null!==(e=s.get("date"))&&void 0!==e?e:""})})})),a.map((function(t){var e="/".concat(t.json,"_view");return Object(c.jsx)(v.a,{path:e,children:Object(c.jsx)(w,{list:t.json})})})),Object(c.jsx)(v.a,{path:"/friends_edit",children:Object(c.jsx)(S,{list:"friends",date:null!==(e=s.get("date"))&&void 0!==e?e:""})}),Object(c.jsx)(v.a,{path:"/principe",children:Object(c.jsx)(k,{name:"\u539f\u5219.md",list:"must"})}),Object(c.jsx)(v.a,{path:"/empthy",children:Object(c.jsx)(k,{name:"\u540c\u7406\u5fc3.md",list:"must"})})]})})]})]})},R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,299)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,j=e.getTTFB;n(t),c(t),a(t),s(t),j(t)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(C.a,{children:Object(c.jsx)(K,{})})}),document.getElementById("root")),R()}},[[286,1,2]]]);
//# sourceMappingURL=main.b09dfcca.chunk.js.map