(this.webpackJsonppersonal_dashboard=this.webpackJsonppersonal_dashboard||[]).push([[0],{155:function(t,e,n){},156:function(t,e,n){},286:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),s=n.n(a),j=n(16),i=n.n(j),o=(n(155),n.p,n(156),n(157),n(9)),l=n(27),b=n.n(l),r=n(80),d=n.n(r);function O(t){var e,n=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),s=Object(a.useState)(0),j=Object(o.a)(s,1)[0],i=Object(a.useState)([]),l=Object(o.a)(i,2),r=l[0],O=l[1],u=Object(a.useState)({}),h=Object(o.a)(u,2),x=h[0],m=h[1],f=Object(a.useState)(""),p=Object(o.a)(f,2),v=p[0],y=p[1];return Object(a.useEffect)((function(){b.a.get("http://".concat(n,"/json?name=").concat(t.list,".json")).then((function(t){O(t.data.data[0].structure.content)}))}),[j]),Object(a.useEffect)((function(){"true"!==t.latest?b.a.get("http://".concat(n,"/json?name=").concat(t.name,"&list=").concat(t.list)).then((function(t){m(t.data.data[0].data)})):b.a.get("http://".concat(n,"/json?date=latest&list=").concat(t.list)).then((function(t){m(t.data.data[0].data)}))}),[r]),Object(a.useEffect)((function(){var e=r.map((function(e){var n,c;return t.onlynext?e.id.includes("next")&&null!==(c="## "+e.title+"\n\n"+x[e.id])&&void 0!==c?c:"":"## "+e.title+"\n\n"+(null!==(n=x[e.id])&&void 0!==n?n:"")}));y(e.join("\n"))}),[x]),Object(c.jsx)(d.a,{source:v})}function u(){return Object(c.jsx)(O,{latest:"true",list:"weekly",onlynext:!0})}function h(){return Object(c.jsx)(O,{latest:"true",list:"monthly",onlynext:!0})}var x=n(81),m=n(57),f=n(291),p=n(146),v=n(15),y=f.a.TextArea;function g(t){var e,n=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),s=Object(a.useState)([]),j=Object(o.a)(s,2),i=j[0],l=j[1],r=Object(a.useState)(0),d=Object(o.a)(r,1)[0],O=Object(a.useState)({}),u=Object(o.a)(O,2),h=u[0],g=u[1],w=Object(v.e)(),k="";void 0!==t.date&&null!==t.date&&""!==t.date&&(k=t.date.split(".")[0]),console.log(k);var _=Object(a.useState)(k),S=Object(o.a)(_,2),C=S[0],I=S[1];"date"in h||g(Object(m.a)(Object(m.a)({},h),{},{date:C})),Object(a.useEffect)((function(){var e="http://".concat(n,"/json?name=").concat(t.list,".json");b.a.get(e).then((function(t){l(t.data.data[0].structure.content)}))}),[d]),Object(a.useEffect)((function(){if(void 0!==t.date&&null!==t.date&&""!==t.date){var e="http://".concat(n,"/json?list=").concat(t.list,"&name=").concat(k,".json");b.a.get(e).then((function(t){g(t.data.data[0].data)}))}}),[d]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Date"}),Object(c.jsx)(f.a,{value:C,onChange:function(t){return e=t.target.value,I(e),void g(Object(m.a)(Object(m.a)({},h),{},{date:e}));var e}}),i.map((function(t){var e;return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t.title}),Object(c.jsx)(y,{rows:6,onChange:function(e){return n=e.target.value,c=t.id,console.log(h),void g(Object(m.a)(Object(m.a)({},h),{},Object(x.a)({},c,n)));var n,c},value:null!==(e=h[t.id])&&void 0!==e?e:""}),Object(c.jsx)("br",{})]})})),Object(c.jsx)(p.a,{type:"primary",onClick:function(){b.a.post("http://".concat(n,"/json?list=").concat(t.list),h).then((function(){w.push("/".concat(t.list,"_view"))}))},children:"submit"})]})}function w(t){var e,n=Object(a.useState)(t.date),s=Object(o.a)(n,2),j=s[0],i=s[1],l=Object(a.useState)(!0),r=Object(o.a)(l,2),d=r[0],O=r[1],u=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),h=Object(a.useState)(0),x=Object(o.a)(h,1)[0];return Object(a.useEffect)((function(){""===j?b.a.get("http://".concat(u,"/date?list=").concat(t.list)).then((function(t){i(t.data.date),O(!1)})):O(!1)}),[x]),d?Object(c.jsx)(c.Fragment,{}):Object(c.jsx)(g,{list:t.list,date:j})}function k(t){var e,n=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),s=Object(a.useState)(0),j=Object(o.a)(s,1)[0],i=Object(a.useState)(""),l=Object(o.a)(i,2),r=l[0],O=l[1];return Object(a.useEffect)((function(){b.a.get("http://".concat(n,"/file?name=").concat(t.name,"&list=").concat(t.list)).then((function(t){O(t.data.data[0].content)}))}),[j]),Object(c.jsx)(d.a,{source:r})}function _(){var t,e=Object(a.useState)([]),n=Object(o.a)(e,2),s=n[0],j=n[1],i=(null!==(t="44.232.253.221")?t:"127.0.0.1")+":"+("219","219"),l=Object(a.useState)(""),r=Object(o.a)(l,2),d=r[0],O=r[1],u=Object(a.useState)(!0),h=Object(o.a)(u,2),x=h[0],m=h[1];return Object(a.useEffect)((function(){b.a.get("http://".concat(i,"/file?list=read")).then((function(t){j(t.data.data.map((function(t){return{name:t.name}})))})),console.log(s)}),[0,x]),x?Object(c.jsx)(c.Fragment,{children:s.sort((function(t,e){return t.name.localeCompare(e.name)})).map((function(t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("a",{onClick:function(){O(t.name),m(!1)},children:t.name},t.name),Object(c.jsx)("br",{})]})}))}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{name:d,list:"read"}),Object(c.jsx)(p.a,{type:"primary",onClick:function(){m(!0)},children:"back"})]})}function S(t){var e,n=Object(a.useState)([]),s=Object(o.a)(n,2),j=s[0],i=s[1],l=(null!==(e="44.232.253.221")?e:"127.0.0.1")+":"+("219","219"),r=Object(a.useState)(""),d=Object(o.a)(r,2),u=d[0],h=d[1],x=Object(a.useState)(!0),m=Object(o.a)(x,2),f=m[0],y=m[1],g=Object(v.e)();return console.log(t.history),Object(a.useEffect)((function(){b.a.get("http://".concat(l,"/file?list=").concat(t.list)).then((function(t){i(t.data.data.filter((function(t){return!t.name.includes("9999")})).map((function(t){return{name:t.name}})))})),console.log(j)}),[0,f]),f?Object(c.jsx)(c.Fragment,{children:j.sort((function(t,e){return e.name.localeCompare(t.name)})).map((function(t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("a",{onClick:function(){h(t.name),y(!1)},children:t.name},t.name),Object(c.jsx)("br",{})]})}))}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{name:u,list:t.list,onlynext:!1}),Object(c.jsx)(p.a,{type:"primary",onClick:function(){y(!0)},children:"back"}),Object(c.jsx)(p.a,{type:"primary",onClick:function(){g.push("/".concat(t.list,"_edit?date=").concat(u))},children:"edit"})]})}var C=n(25),I=n(289),F=n(290),E=n(292),N=n(293),B=n(294),L=n(295),P=n(296),T=n(297),D=I.a.Header,H=I.a.Sider,J=I.a.Content;var M=F.a.SubMenu;var A=function(t){var e,n,a,s,j=new URLSearchParams(Object(v.f)().search);return Object(c.jsxs)(I.a,{children:[Object(c.jsxs)(H,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(t){console.log(t)},onCollapse:function(t,e){console.log(t,e)},children:[Object(c.jsx)("div",{className:"logo"}),Object(c.jsxs)(F.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(c.jsxs)(F.a.Item,{icon:Object(c.jsx)(E.a,{}),children:["\u81ea\u5df1\u63d0\u9ad8\u7684\u70b9",Object(c.jsx)(C.b,{to:"/improvement"})]},"1"),Object(c.jsxs)(F.a.Item,{icon:Object(c.jsx)(E.a,{}),children:["\u539f\u5219",Object(c.jsx)(C.b,{to:"/principe"})]},"10"),Object(c.jsxs)(F.a.Item,{icon:Object(c.jsx)(N.a,{}),children:["\u540c\u7406\u5fc3",Object(c.jsx)(C.b,{to:"/empthy"})]},"11"),Object(c.jsxs)(F.a.Item,{icon:Object(c.jsx)(B.a,{}),children:["\u672c\u5468\u76ee\u6807",Object(c.jsx)(C.b,{to:"/weekly"})]},"2"),Object(c.jsxs)(F.a.Item,{icon:Object(c.jsx)(B.a,{}),children:["\u672c\u6708\u76ee\u6807",Object(c.jsx)(C.b,{to:"/monthly"})]},"3"),Object(c.jsxs)(F.a.Item,{icon:Object(c.jsx)(L.a,{}),children:["\u8bfb\u4e66",Object(c.jsx)(C.b,{to:"/read"})]},"4"),Object(c.jsxs)(M,{icon:Object(c.jsx)(P.a,{}),title:"\u4fee\u6539",children:[Object(c.jsxs)(F.a.Item,{children:["\u6bcf\u5468\u8ba1\u5212",Object(c.jsx)(C.b,{to:"/weekly_edit"})]},"weekly_edit"),Object(c.jsxs)(F.a.Item,{children:["\u6bcf\u5468\u5de5\u4f5c\u603b\u7ed3",Object(c.jsx)(C.b,{to:"/weekly_work_edit"})]},"weekly_work_edit"),Object(c.jsxs)(F.a.Item,{children:["\u6bcf\u6708\u8ba1\u5212",Object(c.jsx)(C.b,{to:"/monthly_edit"})]},"monthly_edit"),Object(c.jsxs)(F.a.Item,{children:["\u670b\u53cb",Object(c.jsx)(C.b,{to:"/friends_edit"})]},"friends")]},"sub1"),Object(c.jsxs)(M,{icon:Object(c.jsx)(T.a,{}),title:"\u67e5\u770b",children:[Object(c.jsxs)(F.a.Item,{children:["\u6bcf\u5468\u8ba1\u5212",Object(c.jsx)(C.b,{to:"/weekly_view"})]},"weekly_view"),Object(c.jsxs)(F.a.Item,{children:["\u6bcf\u6708\u8ba1\u5212",Object(c.jsx)(C.b,{to:"/monthly_view"})]},"month_view"),Object(c.jsxs)(F.a.Item,{children:["\u670b\u53cb",Object(c.jsx)(C.b,{to:"/friends_view"})]},"friends_view")]},"sub2")]})]}),Object(c.jsxs)(I.a,{children:[Object(c.jsx)(D,{className:"site-layout-sub-header-background",style:{padding:0}}),Object(c.jsx)(J,{style:{margin:"24px 16px 0"},children:Object(c.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:1024},children:[Object(c.jsx)(v.a,{exact:!0,path:"/",component:Object(c.jsx)(k,{name:"\u6211\u80fd\u505a\u7684\u597d\u7684\u5730\u65b9.md",list:"must"})}),Object(c.jsx)(v.a,{path:"/improvement",component:Object(c.jsx)(k,{name:"\u6211\u80fd\u505a\u7684\u597d\u7684\u5730\u65b9.md",list:"must"})}),Object(c.jsx)(v.a,{path:"/weekly",component:u}),Object(c.jsx)(v.a,{path:"/monthly",component:h}),Object(c.jsx)(v.a,{path:"/read",component:_}),Object(c.jsx)(v.a,{path:"/weekly_edit",children:Object(c.jsx)(w,{list:"weekly",date:null!==(e=j.get("date"))&&void 0!==e?e:""})}),Object(c.jsx)(v.a,{path:"/weekly_work_edit",children:Object(c.jsx)(w,{list:"weekly_work",date:null!==(n=j.get("date"))&&void 0!==n?n:""})}),Object(c.jsx)(v.a,{path:"/weekly_view",children:Object(c.jsx)(S,{list:"weekly"})}),Object(c.jsx)(v.a,{path:"/weekly_work_view",children:Object(c.jsx)(S,{list:"weekly_work"})}),Object(c.jsx)(v.a,{path:"/friends_edit",children:Object(c.jsx)(w,{list:"friends",date:null!==(a=j.get("date"))&&void 0!==a?a:""})}),Object(c.jsx)(v.a,{path:"/friends_view",children:Object(c.jsx)(S,{list:"friends"})}),Object(c.jsx)(v.a,{path:"/monthly_edit",children:Object(c.jsx)(w,{list:"monthly",date:null!==(s=j.get("date"))&&void 0!==s?s:""})}),Object(c.jsx)(v.a,{path:"/monthly_view",children:Object(c.jsx)(S,{list:"monthly"})}),Object(c.jsx)(v.a,{path:"/principe",component:Object(c.jsx)(k,{name:"\u539f\u5219.md",list:"must"})}),Object(c.jsx)(v.a,{path:"/empthy",component:Object(c.jsx)(k,{name:"\u540c\u7406\u5fc3.md",list:"must"})})]})})]})]})},K=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,298)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,j=e.getTTFB;n(t),c(t),a(t),s(t),j(t)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(C.a,{children:Object(c.jsx)(A,{})})}),document.getElementById("root")),K()}},[[286,1,2]]]);
//# sourceMappingURL=main.4ef6f832.chunk.js.map