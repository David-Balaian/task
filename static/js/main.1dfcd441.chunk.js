(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{111:function(e,t,n){e.exports={loginContainer:"login_loginContainer__3mN-Z",wrapper:"login_wrapper__2fpXW"}},144:function(e,t,n){e.exports={container:"items_container__3s0oK"}},145:function(e,t,n){e.exports={container:"itemInner_container__3L9ls"}},164:function(e,t,n){e.exports=n(200)},169:function(e,t,n){},200:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),l=n(22),o=n.n(l),i=(n(169),n(40)),u=n(19),s=n(277),d=n(280),f=n(111),b=n.n(f),m=n(29),p=n(4),O=n(279),h=Object(O.a)((a={},Object(p.a)(a,"LOGIN",(function(e){return e})),Object(p.a)(a,"LOGIN_SUCCESS",(function(e){return e})),Object(p.a)(a,"LOGIN_ERROR",(function(e){return e})),Object(p.a)(a,"LOGOUT",(function(e){return e})),a)),v=h.login,g=h.loginSuccess,j=h.loginError,E=h.logout,x=function(e){return e.auth.error};function w(){var e=Object(m.d)(),t=Object(r.useState)(""),n=Object(u.a)(t,2),a=n[0],l=n[1],o=Object(r.useState)(""),i=Object(u.a)(o,2),f=i[0],p=i[1],O=Object(m.e)(x),h=Object(m.e)((function(e){return e}));console.log("state",h);return c.a.createElement("div",{className:b.a.loginContainer},c.a.createElement("div",{className:b.a.wrapper},c.a.createElement(s.a,{variant:"outlined",fullWidth:!0,label:"Username",value:a,onChange:function(e){l(e.target.value)},error:!!O,helperText:O}),c.a.createElement(s.a,{variant:"outlined",fullWidth:!0,label:"Password",type:"password",value:f,onChange:function(e){p(e.target.value)},error:!!O,helperText:O}),c.a.createElement(d.a,{variant:"contained",color:"primary",fullWidth:!0,size:"large",onClick:function(){e(v({userName:a,password:f}))}}," Log in ")))}var S,_=function(e){return e.items.list},y=n(289),T=n(293),R=n(292),C=n(287),I=n(290),L=n(291),k=n(288),N=n(284),G=n(285),U=n(276),D=Object(O.a)((S={},Object(p.a)(S,"GET_LIST",(function(e){return e})),Object(p.a)(S,"GET_LIST_SUCCESS",(function(e){return e})),Object(p.a)(S,"GET_LIST_ERROR",(function(e){return e})),S)),M=D.getList,A=D.getListSuccess,P=D.getListError;function W(e){var t=Object(m.d)();Object(r.useEffect)((function(){t(M({results:e}))}),[t,e])}function z(e){var t=e.series,n=function(){var e=Object(i.e)(),t=Object(r.useState)(10),n=Object(u.a)(t,2),a=n[0],c=n[1],l=Object(r.useState)(10),o=Object(u.a)(l,2),s=o[0],d=o[1],f=Object(r.useRef)(null);return W(s),{rowsCount:a,handleRowsChange:function(e){c(+e.target.value?Math.min(5e3,+e.target.value):1),f.current&&clearTimeout(f.current),f.current=setTimeout((function(){+e.target.value?d(Math.min(5e3,+e.target.value)):d(1)}),600)},setRowsCount:c,rowsCountAsync:s,handleMoreClick:function(t){return e.push("/items/".concat(t))}}}(),a=n.rowsCount,l=n.rowsCountAsync,o=n.handleMoreClick,s=n.handleRowsChange,d=function(e){var t=[{label:"name",align:"left"},{label:"avatar",align:"center",cellRenderer:function(e){return c.a.createElement("img",{src:e,alt:""})}},{label:"gender",align:"right"},{label:"email",align:"right"},{label:"age",align:"right"}];return{rows:e.reduce((function(e,t){var n={id:t.login.username,name:"".concat(t.name.first," ").concat(t.name.last),avatar:t.picture.thumbnail,gender:t.gender,email:t.email,age:t.dob.age};return e.push(n),e}),[]),columnDefs:t}}(t),f=d.columnDefs,b=d.rows,m=function(e,t){var n=Object(r.useState)(10),a=Object(u.a)(n,2),c=a[0],l=a[1],o=t===c?0:Math.min(10,t-c),i=Object(r.useState)({startIndex:0,endIndex:c}),s=Object(u.a)(i,2),d=s[0],f=s[1],b=Object(r.useRef)(),m=Object(r.useRef)();Object(r.useEffect)((function(){t<100&&l(t)}),[b,t]);var p={height:100*e.length,paddingTop:100*d.startIndex};return{containerRef:b,handleContScroll:function(){if(c!==t){var e=b.current.scrollTop*o/(100*o);e<o&&(e=o),f({startIndex:Math.round(Math.min(t-o-c,e-o)),endIndex:Math.round(Math.min(t,e+o+c))})}else f({startIndex:0,endIndex:t})},wrapperRef:m,wrapperStyle:p,showing:d,rowHeight:100}}(b,l),p=m.containerRef,O=m.wrapperRef,h=m.wrapperStyle,v=m.showing,g=m.rowHeight,j=m.handleContScroll;return c.a.createElement("div",{ref:p,style:{width:"100%",height:"100vh",overflow:"auto"},onScroll:j},c.a.createElement("div",{ref:O,style:{height:h.height,paddingTop:h.paddingTop,width:"fit-content",margin:"0 auto",boxSizing:"border-box",position:"relative"}},c.a.createElement(C.a,{component:k.a,elevation:10},c.a.createElement(y.a,{sx:{width:"100%"}},c.a.createElement(I.a,null,c.a.createElement(L.a,null,f.map((function(e){return c.a.createElement(R.a,{key:e.label,align:e.align},e.label)})))),c.a.createElement(T.a,null,b.slice(v.startIndex,v.endIndex).map((function(e){return c.a.createElement(L.a,{key:e.name,sx:{height:g,"&:last-child td, &:last-child th":{border:0}}},f.map((function(t){return c.a.createElement(R.a,{key:t.label,align:t.align},t.cellRenderer?t.cellRenderer(e[t.label]):e[t.label])})),c.a.createElement(R.a,null," ",c.a.createElement(N.a,{onClick:function(){o(e.id)},variant:"contained",color:"primary",fullWidth:!0},"more")," "))}))))),c.a.createElement(G.a,{sx:{position:"fixed",bottom:0,right:0,backgroundColor:"#fff"}},c.a.createElement(U.a,{variant:"filled",color:"primary",helperText:"note: table will virtualize rows if the count exceed 100",label:"Rows count",type:"number",value:a,onChange:s}))))}var X=n(144),F=n.n(X);function H(){var e=Object(m.e)(_);return c.a.createElement("div",{className:F.a.container},!!e.length&&c.a.createElement(z,{series:e}))}var J=n(145),q=n.n(J),B=n(294),K=n(296),V=n(295),Z=n(297),Q=n(286);function Y(e){var t,n,a,r,l=e.data,o=[{label:"Gender",value:l.gender},{label:"Natioanality",value:l.nat},{label:"Age",value:l.registered.age},{label:"City",value:l.location.city},{label:"Phone",value:l.phone}];return c.a.createElement(B.a,{sx:{display:"flex"}},c.a.createElement(V.a,{component:"img",sx:{width:150},image:null===l||void 0===l||null===(t=l.picture)||void 0===t?void 0:t.large,alt:null===l||void 0===l||null===(n=l.name)||void 0===n?void 0:n.first}),c.a.createElement(G.a,{sx:{display:"flex",flexDirection:"column"}},c.a.createElement(K.a,null,c.a.createElement(Z.a,{component:"div",variant:"h5"},"".concat(null===l||void 0===l||null===(a=l.name)||void 0===a?void 0:a.first," ").concat(null===l||void 0===l||null===(r=l.name)||void 0===r?void 0:r.last)),c.a.createElement(G.a,{sx:{display:"flex",flexDirection:"column",width:"fit-content"}},o.map((function(e){var t=e.label,n=e.value;return c.a.createElement(Q.a,{key:t,label:"".concat(t,": ").concat(n)})}))))))}function $(){var e=Object(m.e)((function(e){return e.items.list})),t=Object(i.f)(),n=Object(r.useState)(null),a=Object(u.a)(n,2),l=a[0],o=a[1];return Object(r.useEffect)((function(){var n=t.pathname.split("/").pop();o(e.find((function(e){return e.login.username===n})))}),[]),c.a.createElement("div",{className:q.a.container},l?c.a.createElement(Y,{data:l}):c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,c.a.createElement("strong",null," ",t.pathname.split("/").pop()," user not found")),c.a.createElement("h6",null,"If you come here by URL or refreshed the page the user can not be found as if the list updated already.")))}var ee=function(e){return e.status.loading},te=n(282),ne=n(298);function ae(){W(10);var e=Object(m.e)(ee);return c.a.createElement(c.a.Fragment,null,c.a.createElement(te.a,{sx:{color:"#fff",zIndex:900},open:e},c.a.createElement(ne.a,{color:"inherit"})),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:w}),c.a.createElement(i.a,{exact:!0,path:"/items",component:H}),c.a.createElement(i.a,{exact:!0,path:"/items/:id",component:$}),c.a.createElement(i.a,{path:"*",component:w})))}var re,ce,le,oe,ie=n(65),ue=n(132),se=n(149),de=n(70),fe=n(56),be=Object(fe.a)(),me=n(43),pe=n(281),Oe={userName:null,password:null,error:null},he=Object(pe.a)((re={},Object(p.a)(re,"LOGIN_ERROR",(function(e,t){var n=t.payload;return Object(me.a)(Object(me.a)({},e),n)})),Object(p.a)(re,"LOGIN_SUCCESS",(function(e,t){var n=t.payload;return Object(me.a)(Object(me.a)(Object(me.a)({},e),n),{},{error:null})})),Object(p.a)(re,"LOGOUT",(function(){return Object(me.a)({},Oe)})),re),Oe),ve=Object(O.a)((ce={},Object(p.a)(ce,"START_LOADING",(function(e){return e})),Object(p.a)(ce,"STOP_LOADING",(function(e){return e})),ce)),ge=ve.startLoading,je=ve.stopLoading,Ee=Object(pe.a)((le={},Object(p.a)(le,"START_LOADING",(function(){return{loading:!0}})),Object(p.a)(le,"STOP_LOADING",(function(){return{loading:!1}})),le),{loading:!1}),xe=Object(pe.a)((oe={},Object(p.a)(oe,"GET_LIST_SUCCESS",(function(e,t){var n=t.payload;return Object(me.a)(Object(me.a)({},e),n)})),Object(p.a)(oe,"GET_LIST_ERROR",(function(e,t){var n=t.payload;return Object(me.a)(Object(me.a)(Object(me.a)({},e),n),{},{error:null})})),oe),{list:[]}),we=Object(ie.b)({router:Object(de.b)(be),status:Ee,auth:he,items:xe}),Se=n(37),_e=n.n(Se),ye=n(33),Te=n(34),Re=_e.a.mark(Le),Ce=_e.a.mark(ke),Ie=_e.a.mark(Ne);function Le(e){var t,n,a;return _e.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.payload,n=t.userName,a=t.password,r.prev=1,!n||!a){r.next=7;break}return r.next=5,Object(ye.a)([Object(ye.c)(g({userName:n,password:a})),Object(ye.c)(Object(Te.d)("/items"))]);case 5:r.next=9;break;case 7:return r.next=9,Object(ye.c)(j({error:"Please fill both fields"}));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(1),r.next=15,Object(ye.b)(ke);case 15:case"end":return r.stop()}}),Re,null,[[1,11]])}function ke(){return _e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.c)(E());case 2:case"end":return e.stop()}}),Ce)}function Ne(){return _e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)("LOGIN",Le);case 2:return e.next=4,Object(ye.e)("LOGOUT",ke);case 4:case"end":return e.stop()}}),Ie)}var Ge=n(147),Ue=n.n(Ge).a.create({baseURL:"https://randomuser.me"});Ue.interceptors.request.use((function(e){return Xe.dispatch(ge()),e})),Ue.interceptors.response.use((function(e){return Xe.dispatch(je()),e}));var De=_e.a.mark(Ae),Me=_e.a.mark(Pe);function Ae(e){var t,n,a;return _e.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(ye.b)(Ue.get,"/api",{params:t});case 4:return n=r.sent,a=n.data.results,r.next=8,Object(ye.c)(A({list:a}));case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(1),r.next=14,Object(ye.c)(P());case 14:case"end":return r.stop()}}),De,null,[[1,10]])}function Pe(){return _e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)("GET_LIST",Ae);case 2:case"end":return e.stop()}}),Me)}var We=_e.a.mark(ze);function ze(){return _e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.d)(Ne);case 2:return e.next=4,Object(ye.d)(Pe);case 4:case"end":return e.stop()}}),We)}var Xe=function(){var e=Object(se.a)(),t=[e,Object(ue.a)(be)],n=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.c)(ie.a.apply(void 0,t)),a=Object(ie.d)(we,n);return e.run(ze),a}();o.a.render(c.a.createElement(m.a,{store:Xe},c.a.createElement(de.a,{history:be},c.a.createElement(ae,null))),document.getElementById("root"))}},[[164,1,2]]]);
//# sourceMappingURL=main.1dfcd441.chunk.js.map