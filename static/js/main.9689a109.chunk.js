(this.webpackJsonppersonal_dashboard=this.webpackJsonppersonal_dashboard||[]).push([[0],{127:function(t,e,n){},128:function(t,e,n){},223:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),s=n.n(c),j=n(27),i=n.n(j),o=(n(127),n.p,n(128),n(129),n(12)),r=n(18),l=n.n(r),b=n(66),u=n.n(b),d="server.tczhong.com/backend";function O(t){var e=Object(c.useState)(0),n=Object(o.a)(e,1)[0],s=Object(c.useState)([]),j=Object(o.a)(s,2),i=j[0],r=j[1],b=Object(c.useState)({}),O=Object(o.a)(b,2),m=O[0],h=O[1],x=Object(c.useState)(""),f=Object(o.a)(x,2),p=f[0],v=f[1];return Object(c.useEffect)((function(){l.a.get("https://".concat(d,"/json?name=").concat(t.list,".json")).then((function(t){r(t.data.data[0].structure.content)}))}),[n]),Object(c.useEffect)((function(){"true"!==t.latest?l.a.get("https://".concat(d,"/json?name=").concat(t.name,"&list=").concat(t.list)).then((function(t){h(t.data.data[0].data)})):l.a.get("https://".concat(d,"/json?date=latest&list=").concat(t.list)).then((function(t){h(t.data.data[0].data)}))}),[i]),Object(c.useEffect)((function(){var e=i.map((function(e){if(!t.onlynext){var n,a=null!==(n=m[e.id])&&void 0!==n?n:"";return Array.isArray(m[e.id])&&(a=m[e.id].join("\n")),"## "+e.title+"\n\n"+a}var c;return e.id.includes("next")&&null!==(c="## "+e.title+"\n\n"+m[e.id])&&void 0!==c?c:""}));e.unshift("# ".concat(m.date)),v(e.join("\n"))}),[m]),Object(a.jsx)(u.a,{source:p})}function m(){return Object(a.jsx)(O,{latest:"true",list:"weekly",onlynext:!0})}function h(){return Object(a.jsx)(O,{latest:"true",list:"monthly",onlynext:!0})}var x=n(67),f=n(34),p=n(227),v=n(118),g=n(17),y=p.a.TextArea;function k(t){var e=Object(c.useState)([]),n=Object(o.a)(e,2),s=n[0],j=n[1],i=Object(c.useState)(0),r=Object(o.a)(i,1)[0],b=Object(c.useState)({}),u=Object(o.a)(b,2),m=u[0],h=u[1],k=Object(g.e)(),S="";void 0!==t.date&&null!==t.date&&""!==t.date&&(S=t.date.split(".")[0]);var w=Object(c.useState)(S),_=Object(o.a)(w,2),C=_[0],F=_[1];"date"in m||h(Object(f.a)(Object(f.a)({},m),{},{date:C})),Object(c.useEffect)((function(){var e="https://".concat(d,"/json?name=").concat(t.list,".json");l.a.get(e).then((function(t){j(t.data.data[0].structure.content)}))}),[r]),Object(c.useEffect)((function(){if(void 0!==t.date&&null!==t.date&&""!==t.date){var e="https://".concat(d,"/json?list=").concat(t.list,"&name=").concat(S,".json");l.a.get(e).then((function(t){h(t.data.data[0].data)}))}}),[r]);return Object(a.jsxs)(a.Fragment,{children:["weekly"===t.list||"monthly"===t.list?Object(a.jsx)(O,{latest:"true",list:t.list,onlynext:!0}):Object(a.jsx)(a.Fragment,{}),Object(a.jsx)("h2",{children:"Date"}),Object(a.jsx)(p.a,{value:C,onChange:function(t){return e=t.target.value,F(e),void h(Object(f.a)(Object(f.a)({},m),{},{date:e}));var e}}),s.map((function(t){var e;return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("h2",{children:t.title}),Object(a.jsx)(y,{rows:6,onChange:function(e){return n=e.target.value,a=t.id,console.log(m),void h(Object(f.a)(Object(f.a)({},m),{},Object(x.a)({},a,n)));var n,a},value:null!==(e=m[t.id])&&void 0!==e?e:""}),Object(a.jsx)("br",{})]})})),Object(a.jsx)(v.a,{type:"primary",onClick:function(){l.a.post("https://".concat(d,"/json?list=").concat(t.list),m).then((function(){k.push("/".concat(t.list,"_view"))}))},children:"submit"})]})}function S(t){var e=Object(c.useState)(t.date),n=Object(o.a)(e,2),s=n[0],j=n[1],i=Object(c.useState)(!0),r=Object(o.a)(i,2),b=r[0],u=r[1],O=Object(c.useState)(0),m=Object(o.a)(O,1)[0];return Object(c.useEffect)((function(){""===s?l.a.get("https://".concat(d,"/date?list=").concat(t.list)).then((function(t){j(t.data.date),u(!1)})):u(!1)}),[m]),b?Object(a.jsx)(a.Fragment,{}):Object(a.jsx)(k,{list:t.list,date:s})}var w=p.a.TextArea;function _(t){var e,n=Object(c.useState)(0),s=Object(o.a)(n,1)[0],j=Object(c.useState)({}),i=Object(o.a)(j,2),r=i[0],b=i[1],u=Object(c.useState)(10),O=Object(o.a)(u,2),m=O[0],h=O[1],x=Object(g.e)();Object(c.useEffect)((function(){if(void 0!==t.name&&null!==t.name&&""!==t.name){var e="https://".concat(d,"/file?list=").concat(t.list,"&name=").concat(t.name);l.a.get(e).then((function(t){b(t.data.data[0]),h(t.data.data[0].content.split("\n").length+10)}))}}),[s]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w,{rows:m,onChange:function(t){return e=t.target.value,console.log(r),void b(Object(f.a)(Object(f.a)({},r),{},{content:e}));var e},value:null!==(e=r.content)&&void 0!==e?e:""}),Object(a.jsx)(v.a,{type:"primary",onClick:function(){l.a.post("https://".concat(d,"/file?list=").concat(t.list,"&name=").concat(t.name),r).then((function(){x.push("/markdown_show?list=".concat(t.list,"&name=").concat(t.name))}))},children:"submit"})]})}function C(t){var e=Object(c.useState)(0),n=Object(o.a)(e,1)[0],s=Object(c.useState)(""),j=Object(o.a)(s,2),i=j[0],r=j[1],b=Object(g.e)();return Object(c.useEffect)((function(){l.a.get("https://".concat(d,"/file?name=").concat(t.name,"&list=").concat(t.list)).then((function(t){r(t.data.data[0].content)}))}),[n]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.a,{source:i}),Object(a.jsx)(v.a,{type:"primary",onClick:function(){b.push("/markdown_edit?list=".concat(t.list,"&name=").concat(t.name))},children:"edit"})]})}function F(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],s=e[1],j=Object(c.useState)(""),i=Object(o.a)(j,2),r=i[0],b=i[1],u=Object(c.useState)(!0),O=Object(o.a)(u,2),m=O[0],h=O[1];return Object(c.useEffect)((function(){l.a.get("https://".concat(d,"/file?list=read")).then((function(t){s(t.data.data.map((function(t){return{name:t.name}})))})),console.log(n)}),[0,m]),m?Object(a.jsx)(a.Fragment,{children:n.sort((function(t,e){return t.name.localeCompare(e.name)})).map((function(t,e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("a",{onClick:function(){b(t.name),h(!1)},children:[e,". ",t.name]},t.name),Object(a.jsx)("br",{})]})}))}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(C,{name:r,list:"read"}),Object(a.jsx)(v.a,{type:"primary",onClick:function(){h(!0)},children:"back"})]})}var I=n(113);function E(t){var e=Object(I.a)("AIzaSyCjHEC0qECrtqhg74yjnAiAkcbpx0TtKuA",{zoom:10,center:{lat:37.3984,lng:-122.01233}}),n=e.ref,c=e.map,s=e.google;return console.log(t.list),c&&t.list&&t.list.map((function(t){new s.maps.Marker({label:t.name.split(".")[0],position:t.latlng,map:c})})),Object(a.jsx)("div",{ref:n,style:{width:"100%",height:500}})}function A(t){var e=Object(c.useState)([]),n=Object(o.a)(e,2),s=n[0],j=n[1],i=Object(c.useState)(""),r=Object(o.a)(i,2),b=r[0],u=r[1],m=Object(c.useState)(!0),h=Object(o.a)(m,2),x=h[0],f=h[1],p=Object(g.e)();return console.log(t.history),Object(c.useEffect)((function(){l.a.get("https://".concat(d,"/file?list=").concat(t.list)).then((function(e){t.list.includes("tour")||t.list.includes("resturant")?j(e.data.data.filter((function(t){return!t.name.includes("9999")})).map((function(t){return{name:t.name,latlng:t.latlng}}))):j(e.data.data.filter((function(t){return!t.name.includes("9999")})).map((function(t){return{name:t.name}})))})),console.log(s)}),[0,x]),x?Object(a.jsxs)(a.Fragment,{children:[s.sort((function(t,e){return e.name.localeCompare(t.name)})).map((function(t,e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("a",{onClick:function(){u(t.name),f(!1)},children:[e,". ",t.name]},t.name),Object(a.jsx)("br",{})]})})),t.list.includes("tour")||t.list.includes("resturant")?Object(a.jsx)(E,{list:s}):Object(a.jsx)(a.Fragment,{})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O,{name:b,list:t.list,onlynext:!1}),Object(a.jsx)(v.a,{type:"primary",onClick:function(){f(!0)},children:"back"}),Object(a.jsx)(v.a,{type:"primary",onClick:function(){p.push("/".concat(t.list,"_edit?date=").concat(b))},children:"edit"}),Object(a.jsx)("br",{})]})}var T=n(19),N=n(226),z=n(228),B=n(229),H=n(230),L=n(231),M=n(232),P=n(233),q=n(234),D=n(235),J=N.a.Header,K=N.a.Sider,R=N.a.Content;var U=z.a.SubMenu;var W=function(t){var e,n,c,s,j=[{name:"\u6bcf\u5468\u8ba1\u5212",json:"weekly"},{name:"\u6bcf\u5468\u5de5\u4f5c\u603b\u7ed3",json:"weekly_work"},{name:"\u6bcf\u5468\u751f\u6d3b\u65f6\u95f4\u603b\u7ed3",json:"weekly_analysis"},{name:"\u6bcf\u6708\u8ba1\u5212",json:"monthly"},{name:"\u9879\u76ee",json:"project"},{name:"\u670b\u53cb",json:"friends"},{name:"\u7761\u524d\u6545\u4e8b",json:"sleep_story"},{name:"\u6545\u4e8b",json:"story"},{name:"\u7b11\u8bdd",json:"fun"},{name:"\u81ea\u5df1\u7684\u60f3\u6cd5",json:"event_and_feeling"}],i=[{name:"\u8bfb\u4e66\u8ba1\u5212",json:"book"},{name:"\u505a\u996d",json:"cook"},{name:"\u94fe\u63a5",json:"reading_link"},{name:"\u9910\u5385",json:"resturant"},{name:"\u65c5\u6e38",json:"tour"},{name:"\u6444\u5f71",json:"photos"},{name:"\u60f3\u505a\u7684\u4e8b\u60c5",json:"play"}],o=new URLSearchParams(Object(g.f)().search);return Object(a.jsxs)(N.a,{children:[Object(a.jsxs)(K,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(t){console.log(t)},onCollapse:function(t,e){console.log(t,e)},children:[Object(a.jsx)("div",{className:"logo"}),Object(a.jsxs)(z.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(a.jsxs)(z.a.Item,{icon:Object(a.jsx)(B.a,{}),children:["\u81ea\u5df1\u63d0\u9ad8\u7684\u70b9",Object(a.jsx)(T.b,{to:"/improvement"})]},"1"),Object(a.jsxs)(z.a.Item,{icon:Object(a.jsx)(B.a,{}),children:["\u539f\u5219",Object(a.jsx)(T.b,{to:"/principe"})]},"10"),Object(a.jsxs)(z.a.Item,{icon:Object(a.jsx)(H.a,{}),children:["\u540c\u7406\u5fc3",Object(a.jsx)(T.b,{to:"/empthy"})]},"11"),Object(a.jsxs)(z.a.Item,{icon:Object(a.jsx)(L.a,{}),children:["\u5e94\u6025\u5904\u7406",Object(a.jsx)(T.b,{to:"/safety"})]},"12"),Object(a.jsxs)(z.a.Item,{icon:Object(a.jsx)(M.a,{}),children:["\u672c\u5468\u76ee\u6807",Object(a.jsx)(T.b,{to:"/weekly"})]},"2"),Object(a.jsxs)(z.a.Item,{icon:Object(a.jsx)(M.a,{}),children:["\u672c\u6708\u76ee\u6807",Object(a.jsx)(T.b,{to:"/monthly"})]},"3"),Object(a.jsxs)(z.a.Item,{icon:Object(a.jsx)(M.a,{}),children:["\u5e74\u8ba1\u5212",Object(a.jsx)(T.b,{to:"/year_plan"})]},"4"),Object(a.jsxs)(z.a.Item,{icon:Object(a.jsx)(P.a,{}),children:["\u8bfb\u4e66\u7b14\u8bb0",Object(a.jsx)(T.b,{to:"/read"})]},"5"),Object(a.jsx)(U,{icon:Object(a.jsx)(q.a,{}),title:"\u4fee\u6539",children:j.map((function(t){var e="".concat(t.json,"_edit");return Object(a.jsxs)(z.a.Item,{children:[t.name,Object(a.jsx)(T.b,{to:"/".concat(e)})]},e)}))},"sub1"),Object(a.jsx)(U,{icon:Object(a.jsx)(D.a,{}),title:"\u67e5\u770b",children:j.map((function(t){var e="".concat(t.json,"_view");return Object(a.jsxs)(z.a.Item,{children:[t.name,Object(a.jsx)(T.b,{to:"/".concat(e)})]},e)}))},"sub2"),Object(a.jsx)(U,{icon:Object(a.jsx)(q.a,{}),title:"\u6dfb\u52a0\u6e05\u5355",children:i.map((function(t){var e="".concat(t.json,"_edit");return Object(a.jsxs)(z.a.Item,{children:[t.name,Object(a.jsx)(T.b,{to:"/".concat(e)})]},e)}))},"sub3"),Object(a.jsx)(U,{icon:Object(a.jsx)(D.a,{}),title:"\u67e5\u770b\u6e05\u5355",children:i.map((function(t){var e="".concat(t.json,"_view");return Object(a.jsxs)(z.a.Item,{children:[t.name,Object(a.jsx)(T.b,{to:"/".concat(e)})]},e)}))},"sub4")]})]}),Object(a.jsxs)(N.a,{children:[Object(a.jsx)(J,{className:"site-layout-sub-header-background",style:{padding:0}}),Object(a.jsx)(R,{style:{margin:"24px 16px 0"},children:Object(a.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:1024},children:[Object(a.jsx)(g.a,{exact:!0,path:"/",children:Object(a.jsx)(C,{name:"\u6211\u80fd\u505a\u7684\u597d\u7684\u5730\u65b9.md",list:"must"})}),Object(a.jsx)(g.a,{path:"/improvement",children:Object(a.jsx)(C,{name:"\u6211\u80fd\u505a\u7684\u597d\u7684\u5730\u65b9.md",list:"must"})}),Object(a.jsx)(g.a,{path:"/safety",children:Object(a.jsx)(C,{name:"\u5e94\u6025\u5904\u7406\u65b9\u6cd5.md",list:"must"})}),Object(a.jsx)(g.a,{path:"/year_plan",children:Object(a.jsx)(C,{name:"2022\u5e74\u8ba1\u5212.md",list:"must"})}),Object(a.jsx)(g.a,{path:"/weekly",component:m}),Object(a.jsx)(g.a,{path:"/monthly",component:h}),Object(a.jsx)(g.a,{path:"/read",component:F}),j.map((function(t){var e,n="/".concat(t.json,"_edit");return Object(a.jsx)(g.a,{path:n,children:Object(a.jsx)(S,{list:t.json,date:null!==(e=o.get("date"))&&void 0!==e?e:""})})})),j.map((function(t){var e="/".concat(t.json,"_view");return Object(a.jsx)(g.a,{path:e,children:Object(a.jsx)(A,{list:t.json})})})),i.map((function(t){var e,n="/".concat(t.json,"_edit");return Object(a.jsx)(g.a,{path:n,children:Object(a.jsx)(S,{list:t.json,date:null!==(e=o.get("date"))&&void 0!==e?e:""})})})),i.map((function(t){var e="/".concat(t.json,"_view");return Object(a.jsx)(g.a,{path:e,children:Object(a.jsx)(A,{list:t.json})})})),Object(a.jsx)(g.a,{path:"/markdown_edit",children:Object(a.jsx)(_,{list:null!==(e=o.get("list"))&&void 0!==e?e:"",name:null!==(n=o.get("name"))&&void 0!==n?n:""})}),Object(a.jsx)(g.a,{path:"/markdown_show",children:Object(a.jsx)(C,{list:null!==(c=o.get("list"))&&void 0!==c?c:"",name:null!==(s=o.get("name"))&&void 0!==s?s:""})}),Object(a.jsx)(g.a,{path:"/principe",children:Object(a.jsx)(C,{name:"\u539f\u5219.md",list:"must"})}),Object(a.jsx)(g.a,{path:"/empthy",children:Object(a.jsx)(C,{name:"\u540c\u7406\u5fc3.md",list:"must"})})]})})]})]})},G=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,236)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,j=e.getTTFB;n(t),a(t),c(t),s(t),j(t)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(T.a,{children:Object(a.jsx)(W,{})})}),document.getElementById("root")),G()}},[[223,1,2]]]);
//# sourceMappingURL=main.9689a109.chunk.js.map