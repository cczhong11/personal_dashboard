(this.webpackJsonppersonal_dashboard=this.webpackJsonppersonal_dashboard||[]).push([[0],{155:function(t,e,n){},156:function(t,e,n){},286:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),s=n.n(a),j=n(16),o=n.n(j),i=(n(155),n.p,n(156),n(157),n(8)),r=n(23),l=n.n(r),b=n(80),u=n.n(b);function O(t){var e,n=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),s=Object(a.useState)(0),j=Object(i.a)(s,1)[0],o=Object(a.useState)([]),r=Object(i.a)(o,2),b=r[0],O=r[1],d=Object(a.useState)({}),m=Object(i.a)(d,2),h=m[0],x=m[1],f=Object(a.useState)(""),p=Object(i.a)(f,2),v=p[0],g=p[1];return Object(a.useEffect)((function(){l.a.get("http://".concat(n,"/json?name=").concat(t.list,".json")).then((function(t){O(t.data.data[0].structure.content)}))}),[j]),Object(a.useEffect)((function(){"true"!==t.latest?l.a.get("http://".concat(n,"/json?name=").concat(t.name,"&list=").concat(t.list)).then((function(t){x(t.data.data[0].data)})):l.a.get("http://".concat(n,"/json?date=latest&list=").concat(t.list)).then((function(t){x(t.data.data[0].data)}))}),[b]),Object(a.useEffect)((function(){var e=b.map((function(e){if(!t.onlynext){var n,c=null!==(n=h[e.id])&&void 0!==n?n:"";return Array.isArray(h[e.id])&&(c=h[e.id].join("\n")),"## "+e.title+"\n\n"+c}var a;return e.id.includes("next")&&null!==(a="## "+e.title+"\n\n"+h[e.id])&&void 0!==a?a:""}));g(e.join("\n"))}),[h]),Object(c.jsx)(u.a,{source:v})}function d(){return Object(c.jsx)(O,{latest:"true",list:"weekly",onlynext:!0})}function m(){return Object(c.jsx)(O,{latest:"true",list:"monthly",onlynext:!0})}var h=n(81),x=n(42),f=n(291),p=n(146),v=n(15),g=f.a.TextArea;function y(t){var e,n=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),s=Object(a.useState)([]),j=Object(i.a)(s,2),o=j[0],r=j[1],b=Object(a.useState)(0),u=Object(i.a)(b,1)[0],O=Object(a.useState)({}),d=Object(i.a)(O,2),m=d[0],y=d[1],k=Object(v.e)(),S="";void 0!==t.date&&null!==t.date&&""!==t.date&&(S=t.date.split(".")[0]),console.log(S);var w=Object(a.useState)(S),_=Object(i.a)(w,2),C=_[0],F=_[1];"date"in m||y(Object(x.a)(Object(x.a)({},m),{},{date:C})),Object(a.useEffect)((function(){var e="http://".concat(n,"/json?name=").concat(t.list,".json");l.a.get(e).then((function(t){r(t.data.data[0].structure.content)}))}),[u]),Object(a.useEffect)((function(){if(void 0!==t.date&&null!==t.date&&""!==t.date){var e="http://".concat(n,"/json?list=").concat(t.list,"&name=").concat(S,".json");l.a.get(e).then((function(t){y(t.data.data[0].data)}))}}),[u]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Date"}),Object(c.jsx)(f.a,{value:C,onChange:function(t){return e=t.target.value,F(e),void y(Object(x.a)(Object(x.a)({},m),{},{date:e}));var e}}),o.map((function(t){var e;return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t.title}),Object(c.jsx)(g,{rows:6,onChange:function(e){return n=e.target.value,c=t.id,console.log(m),void y(Object(x.a)(Object(x.a)({},m),{},Object(h.a)({},c,n)));var n,c},value:null!==(e=m[t.id])&&void 0!==e?e:""}),Object(c.jsx)("br",{})]})})),Object(c.jsx)(p.a,{type:"primary",onClick:function(){l.a.post("http://".concat(n,"/json?list=").concat(t.list),m).then((function(){k.push("/".concat(t.list,"_view"))}))},children:"submit"})]})}function k(t){var e,n=Object(a.useState)(t.date),s=Object(i.a)(n,2),j=s[0],o=s[1],r=Object(a.useState)(!0),b=Object(i.a)(r,2),u=b[0],O=b[1],d=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),m=Object(a.useState)(0),h=Object(i.a)(m,1)[0];return Object(a.useEffect)((function(){""===j?l.a.get("http://".concat(d,"/date?list=").concat(t.list)).then((function(t){o(t.data.date),O(!1)})):O(!1)}),[h]),u?Object(c.jsx)(c.Fragment,{}):Object(c.jsx)(y,{list:t.list,date:j})}var S=f.a.TextArea;function w(t){var e,n,s=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),j=Object(a.useState)(0),o=Object(i.a)(j,1)[0],r=Object(a.useState)({}),b=Object(i.a)(r,2),u=b[0],O=b[1],d=Object(a.useState)(10),m=Object(i.a)(d,2),h=m[0],f=m[1],g=Object(v.e)();Object(a.useEffect)((function(){if(void 0!==t.name&&null!==t.name&&""!==t.name){var e="http://".concat(s,"/file?list=").concat(t.list,"&name=").concat(t.name);l.a.get(e).then((function(t){O(t.data.data[0]),f(t.data.data[0].content.split("\n").length+10)}))}}),[o]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(S,{rows:h,onChange:function(t){return e=t.target.value,console.log(u),void O(Object(x.a)(Object(x.a)({},u),{},{content:e}));var e},value:null!==(n=u.content)&&void 0!==n?n:""}),Object(c.jsx)(p.a,{type:"primary",onClick:function(){l.a.post("http://".concat(s,"/file?list=").concat(t.list,"&name=").concat(t.name),u).then((function(){g.push("/markdown_show?list=".concat(t.list,"&name=").concat(t.name))}))},children:"submit"})]})}function _(t){var e,n=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),s=Object(a.useState)(0),j=Object(i.a)(s,1)[0],o=Object(a.useState)(""),r=Object(i.a)(o,2),b=r[0],O=r[1],d=Object(v.e)();return Object(a.useEffect)((function(){l.a.get("http://".concat(n,"/file?name=").concat(t.name,"&list=").concat(t.list)).then((function(t){O(t.data.data[0].content)}))}),[j]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u.a,{source:b}),Object(c.jsx)(p.a,{type:"primary",onClick:function(){d.push("/markdown_edit?list=".concat(t.list,"&name=").concat(t.name))},children:"edit"})]})}function C(){var t,e=Object(a.useState)([]),n=Object(i.a)(e,2),s=n[0],j=n[1],o=(null!==(t="44.232.253.221")?t:"127.0.0.1")+":"+("219","219"),r=Object(a.useState)(""),b=Object(i.a)(r,2),u=b[0],O=b[1],d=Object(a.useState)(!0),m=Object(i.a)(d,2),h=m[0],x=m[1];return Object(a.useEffect)((function(){l.a.get("http://".concat(o,"/file?list=read")).then((function(t){j(t.data.data.map((function(t){return{name:t.name}})))})),console.log(s)}),[0,h]),h?Object(c.jsx)(c.Fragment,{children:s.sort((function(t,e){return t.name.localeCompare(e.name)})).map((function(t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("a",{onClick:function(){O(t.name),x(!1)},children:t.name},t.name),Object(c.jsx)("br",{})]})}))}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(_,{name:u,list:"read"}),Object(c.jsx)(p.a,{type:"primary",onClick:function(){x(!0)},children:"back"})]})}function F(t){var e,n=Object(a.useState)([]),s=Object(i.a)(n,2),j=s[0],o=s[1],r=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),b=Object(a.useState)(""),u=Object(i.a)(b,2),d=u[0],m=u[1],h=Object(a.useState)(!0),x=Object(i.a)(h,2),f=x[0],g=x[1],y=Object(v.e)();return console.log(t.history),Object(a.useEffect)((function(){l.a.get("http://".concat(r,"/file?list=").concat(t.list)).then((function(t){o(t.data.data.filter((function(t){return!t.name.includes("9999")})).map((function(t){return{name:t.name}})))})),console.log(j)}),[0,f]),f?Object(c.jsx)(c.Fragment,{children:j.sort((function(t,e){return e.name.localeCompare(t.name)})).map((function(t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("a",{onClick:function(){m(t.name),g(!1)},children:t.name},t.name),Object(c.jsx)("br",{})]})}))}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{name:d,list:t.list,onlynext:!1}),Object(c.jsx)(p.a,{type:"primary",onClick:function(){g(!0)},children:"back"}),Object(c.jsx)(p.a,{type:"primary",onClick:function(){y.push("/".concat(t.list,"_edit?date=").concat(d))},children:"edit"})]})}var I=n(25),E=n(289),A=n(290),N=n(292),T=n(293),B=n(294),L=n(295),P=n(296),D=n(297),H=n(298),J=E.a.Header,M=E.a.Sider,K=E.a.Content;var R=A.a.SubMenu;var U=function(t){var e,n,a,s,j=[{name:"\u6bcf\u5468\u8ba1\u5212",json:"weekly"},{name:"\u6bcf\u5468\u5de5\u4f5c\u603b\u7ed3",json:"weekly_work"},{name:"\u6bcf\u5468\u751f\u6d3b\u65f6\u95f4\u603b\u7ed3",json:"weekly_analysis"},{name:"\u6bcf\u6708\u8ba1\u5212",json:"monthly"},{name:"\u9879\u76ee",json:"project"},{name:"\u670b\u53cb",json:"friends"},{name:"\u7761\u524d\u6545\u4e8b",json:"sleep_story"},{name:"\u6545\u4e8b",json:"story"},{name:"\u7b11\u8bdd",json:"fun"}],o=[{name:"\u8bfb\u4e66\u8ba1\u5212",json:"book"},{name:"\u505a\u996d",json:"cook"},{name:"\u94fe\u63a5",json:"reading_link"},{name:"\u9910\u5385",json:"resturant"},{name:"\u65c5\u6e38",json:"tour"},{name:"\u6444\u5f71",json:"photos"}],i=new URLSearchParams(Object(v.f)().search);return Object(c.jsxs)(E.a,{children:[Object(c.jsxs)(M,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(t){console.log(t)},onCollapse:function(t,e){console.log(t,e)},children:[Object(c.jsx)("div",{className:"logo"}),Object(c.jsxs)(A.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(c.jsxs)(A.a.Item,{icon:Object(c.jsx)(N.a,{}),children:["\u81ea\u5df1\u63d0\u9ad8\u7684\u70b9",Object(c.jsx)(I.b,{to:"/improvement"})]},"1"),Object(c.jsxs)(A.a.Item,{icon:Object(c.jsx)(N.a,{}),children:["\u539f\u5219",Object(c.jsx)(I.b,{to:"/principe"})]},"10"),Object(c.jsxs)(A.a.Item,{icon:Object(c.jsx)(T.a,{}),children:["\u540c\u7406\u5fc3",Object(c.jsx)(I.b,{to:"/empthy"})]},"11"),Object(c.jsxs)(A.a.Item,{icon:Object(c.jsx)(B.a,{}),children:["\u5e94\u6025\u5904\u7406",Object(c.jsx)(I.b,{to:"/safety"})]},"12"),Object(c.jsxs)(A.a.Item,{icon:Object(c.jsx)(L.a,{}),children:["\u672c\u5468\u76ee\u6807",Object(c.jsx)(I.b,{to:"/weekly"})]},"2"),Object(c.jsxs)(A.a.Item,{icon:Object(c.jsx)(L.a,{}),children:["\u672c\u6708\u76ee\u6807",Object(c.jsx)(I.b,{to:"/monthly"})]},"3"),Object(c.jsxs)(A.a.Item,{icon:Object(c.jsx)(L.a,{}),children:["\u5e74\u8ba1\u5212",Object(c.jsx)(I.b,{to:"/year_plan"})]},"4"),Object(c.jsxs)(A.a.Item,{icon:Object(c.jsx)(P.a,{}),children:["\u8bfb\u4e66\u7b14\u8bb0",Object(c.jsx)(I.b,{to:"/read"})]},"5"),Object(c.jsx)(R,{icon:Object(c.jsx)(D.a,{}),title:"\u4fee\u6539",children:j.map((function(t){var e="".concat(t.json,"_edit");return Object(c.jsxs)(A.a.Item,{children:[t.name,Object(c.jsx)(I.b,{to:"/".concat(e)})]},e)}))},"sub1"),Object(c.jsx)(R,{icon:Object(c.jsx)(H.a,{}),title:"\u67e5\u770b",children:j.map((function(t){var e="".concat(t.json,"_view");return Object(c.jsxs)(A.a.Item,{children:[t.name,Object(c.jsx)(I.b,{to:"/".concat(e)})]},e)}))},"sub2"),Object(c.jsx)(R,{icon:Object(c.jsx)(D.a,{}),title:"\u6dfb\u52a0\u6e05\u5355",children:o.map((function(t){var e="".concat(t.json,"_edit");return Object(c.jsxs)(A.a.Item,{children:[t.name,Object(c.jsx)(I.b,{to:"/".concat(e)})]},e)}))},"sub3"),Object(c.jsx)(R,{icon:Object(c.jsx)(H.a,{}),title:"\u67e5\u770b\u6e05\u5355",children:o.map((function(t){var e="".concat(t.json,"_view");return Object(c.jsxs)(A.a.Item,{children:[t.name,Object(c.jsx)(I.b,{to:"/".concat(e)})]},e)}))},"sub4")]})]}),Object(c.jsxs)(E.a,{children:[Object(c.jsx)(J,{className:"site-layout-sub-header-background",style:{padding:0}}),Object(c.jsx)(K,{style:{margin:"24px 16px 0"},children:Object(c.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:1024},children:[Object(c.jsx)(v.a,{exact:!0,path:"/",children:Object(c.jsx)(_,{name:"\u6211\u80fd\u505a\u7684\u597d\u7684\u5730\u65b9.md",list:"must"})}),Object(c.jsx)(v.a,{path:"/improvement",children:Object(c.jsx)(_,{name:"\u6211\u80fd\u505a\u7684\u597d\u7684\u5730\u65b9.md",list:"must"})}),Object(c.jsx)(v.a,{path:"/safety",children:Object(c.jsx)(_,{name:"\u5e94\u6025\u5904\u7406\u65b9\u6cd5.md",list:"must"})}),Object(c.jsx)(v.a,{path:"/year_plan",children:Object(c.jsx)(_,{name:"2021\u5e74\u8ba1\u5212.md",list:"must"})}),Object(c.jsx)(v.a,{path:"/weekly",component:d}),Object(c.jsx)(v.a,{path:"/monthly",component:m}),Object(c.jsx)(v.a,{path:"/read",component:C}),j.map((function(t){var e,n="/".concat(t.json,"_edit");return Object(c.jsx)(v.a,{path:n,children:Object(c.jsx)(k,{list:t.json,date:null!==(e=i.get("date"))&&void 0!==e?e:""})})})),j.map((function(t){var e="/".concat(t.json,"_view");return Object(c.jsx)(v.a,{path:e,children:Object(c.jsx)(F,{list:t.json})})})),o.map((function(t){var e,n="/".concat(t.json,"_edit");return Object(c.jsx)(v.a,{path:n,children:Object(c.jsx)(k,{list:t.json,date:null!==(e=i.get("date"))&&void 0!==e?e:""})})})),o.map((function(t){var e="/".concat(t.json,"_view");return Object(c.jsx)(v.a,{path:e,children:Object(c.jsx)(F,{list:t.json})})})),Object(c.jsx)(v.a,{path:"/markdown_edit",children:Object(c.jsx)(w,{list:null!==(e=i.get("list"))&&void 0!==e?e:"",name:null!==(n=i.get("name"))&&void 0!==n?n:""})}),Object(c.jsx)(v.a,{path:"/markdown_show",children:Object(c.jsx)(_,{list:null!==(a=i.get("list"))&&void 0!==a?a:"",name:null!==(s=i.get("name"))&&void 0!==s?s:""})}),Object(c.jsx)(v.a,{path:"/principe",children:Object(c.jsx)(_,{name:"\u539f\u5219.md",list:"must"})}),Object(c.jsx)(v.a,{path:"/empthy",children:Object(c.jsx)(_,{name:"\u540c\u7406\u5fc3.md",list:"must"})})]})})]})]})},W=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,299)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,j=e.getTTFB;n(t),c(t),a(t),s(t),j(t)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(I.a,{children:Object(c.jsx)(U,{})})}),document.getElementById("root")),W()}},[[286,1,2]]]);
//# sourceMappingURL=main.c05d57a7.chunk.js.map