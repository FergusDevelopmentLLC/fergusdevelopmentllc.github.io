(this.webpackJsonppies_fe=this.webpackJsonppies_fe||[]).push([[0],{38:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),i=c.n(n),s=c(17),r=c.n(s),j=(c(38),c(2)),o=c(9),l=c(5),u="CREATE_PIE_REQUEST",p="CREATE_PIE_SUCCESS",d="CREATE_PIE_FAILURE",h="FETCH_PIE_REQUEST",b="FETCH_PIE_SUCCESS",O="FETCH_PIE_FAILURE",m="UPDATE_PIE_REQUEST",x="UPDATE_PIE_SUCCESS",f="UPDATE_PIE_FAILURE",g="DELETE_PIE_REQUEST",y="DELETE_PIE_SUCCESS",E="DELETE_PIE_FAILURE",v="USERS_LOGIN_REQUEST",N="USERS_LOGIN_SUCCESS",k="USERS_LOGIN_FAILURE",S="SIGNUP_REQUEST",_="SIGNUP_SUCCESS",z="SIGNUP_FAILURE",R="CURRENT_USER_REFRESH_REQUEST",I="CURRENT_USER_REFRESH_SUCCESS",C="CURRENT_USER_REFRESH_FAILURE",L="https://pies-api.herokuapp.com",P=c(14),T=function(e){var t="";return e.errors?t=Object.keys(e.errors).map((function(t){return"".concat(t.capitalize()," ").concat(Object(P.a)(new Set(e.errors[t])).join(", "))})).join(", ")+".":e.error&&(t=e.error),t};String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var U=function(e,t){return function(c){c({type:R});var a={method:"GET",headers:e&&e.token?{Authorization:"Bearer "+e.token}:{}};fetch("".concat(L,"/user"),a).then((function(e){return e.json()})).then((function(e){return e.error||e.errors?c({type:C,error:T(e)}):c({type:I,payload:e.user})})).then((function(){t&&t.push("/pies")})).catch((function(e){c({type:C,error:e.toString()})}))}},A=c(3),F=function(){var e=Object(A.d)((function(e){return e.authenticationReducer.loggedIn})),t=(Object(A.d)((function(e){return e.authenticationReducer.isLoading})),Object(A.d)((function(e){return e.authenticationReducer.user}))),c=Object(A.c)();return Object(a.jsxs)("nav",{children:[e?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:Object(a.jsx)(o.b,{to:"/pies",children:"My pies"})}),Object(a.jsx)("div",{children:Object(a.jsx)(o.b,{to:"/pies/new",children:"New pie"})}),Object(a.jsx)("div",{children:Object(a.jsx)(o.b,{to:"/",onClick:function(){return c({type:"CLEAR_DATA"})},children:"Logout"})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:Object(a.jsx)(o.b,{to:"/login",children:"Login"})}),Object(a.jsx)("div",{children:Object(a.jsx)(o.b,{to:"/signup",children:"Signup"})})]}),e&&t?Object(a.jsxs)("div",{className:"logged-in-name",children:["Welcome, ",Object(a.jsx)(o.b,{to:"/profile",className:"profile-link",children:t.first_name})]}):null]})},w=c(10),D=function(e){var t=Object(n.useState)(""),c=Object(w.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)(""),j=Object(w.a)(r,2),o=j[0],l=j[1],u=Object(n.useState)(!0),p=Object(w.a)(u,2),d=p[0],h=p[1],b=Object(A.d)((function(e){return e.authenticationReducer.errorMessage})),O=Object(A.c)();Object(n.useEffect)((function(){h(!(i&&o))}),[i,o]);var m=function(e){"email"===e.target.name?s(e.target.value):"password"===e.target.name&&l(e.target.value)};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Log in"}),Object(a.jsx)("div",{className:"error",children:b}),Object(a.jsxs)("form",{className:"form",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"text",name:"email",value:i,onChange:m}),Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",name:"password",value:o,onChange:m}),Object(a.jsx)("input",{type:"submit",value:"Log in",disabled:d,onClick:function(t){t.preventDefault(),O(function(e,t,c){return function(a){a({type:v});var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{email:e,password:t}})};fetch("".concat(L,"/api/users/login"),n).then((function(e){return e.json()})).then((function(e){if(!e.error&&!e.errors)return a({type:N,payload:e.user});a({type:k,error:T(e)})})).then((function(){c.push("/pies",null)})).catch((function(e){a({type:k,error:e.toString()})}))}}(i,o,e.history))}})]})]})},G=function(e){var t=Object(n.useState)(""),c=Object(w.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)(""),j=Object(w.a)(r,2),o=j[0],l=j[1],u=Object(n.useState)(""),p=Object(w.a)(u,2),d=p[0],h=p[1],b=Object(n.useState)(""),O=Object(w.a)(b,2),m=O[0],x=O[1],f=Object(n.useState)(!0),g=Object(w.a)(f,2),y=g[0],E=g[1],v=Object(A.d)((function(e){return e.authenticationReducer.errorMessage})),N=Object(A.c)();Object(n.useEffect)((function(){E(!(i&&o&&d))}),[i,o,d,m]);var k=function(e){var t;"email"===e.target.name?t=s:"password"===e.target.name?t=l:"firstname"===e.target.name?t=h:"lastname"===e.target.name&&(t=x),t(e.target.value)};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Sign up"}),Object(a.jsx)("div",{className:"error",children:v}),Object(a.jsxs)("form",{className:"form",children:[Object(a.jsx)("label",{htmlFor:"firstname",children:"First name (required)"}),Object(a.jsx)("input",{type:"text",name:"firstname",value:d,onChange:k}),Object(a.jsx)("label",{htmlFor:"lastname",children:"Last name"}),Object(a.jsx)("input",{type:"text",name:"lastname",value:m,onChange:k}),Object(a.jsx)("label",{htmlFor:"email",children:"Email (required)"}),Object(a.jsx)("input",{type:"text",name:"email",value:i,onChange:k}),Object(a.jsx)("label",{htmlFor:"password",children:"Password (required)"}),Object(a.jsx)("input",{type:"password",name:"password",value:o,onChange:k}),Object(a.jsx)("input",{type:"submit",value:"Sign up",disabled:y,onClick:function(t){t.preventDefault(),N(function(e,t,c,a,n){return function(i){i({type:S});var s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{email:e,password:t,first_name:c,last_name:a}})};fetch("".concat(L,"/api/users"),s).then((function(e){return e.json()})).then((function(e){e.error||e.errors?i({type:z,error:T(e)}):(i({type:_,payload:e.user}),n.push("/pies",null))})).catch((function(e){i({type:z,error:e.toString()})}))}}(i,o,d,m,e.history))}})]})]})},V=function(e,t){return function(c){c({type:m});var a={method:"PATCH",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({pie:e})};fetch("".concat(L,"/pies/").concat(e.id),a).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)})).then((function(e){return c({type:x,payload:e})})).then((function(){c(U(t))})).catch((function(e){return c({type:f,payload:e})}))}},H=function(e){var t=Object(A.d)((function(e){return e.authenticationReducer.user})),c=Object(A.c)(),i=Object(n.useState)({title:"",pieces:["Goal 1","Goal 2","Goal 3","Goal 4","Goal 5","Goal 6","Goal 7","Goal 8"]}),s=Object(w.a)(i,2),r=s[0],o=s[1],l=function(e){var t=Object(P.a)(r.pieces);t[e.target.id]=e.target.value,o(Object(j.a)(Object(j.a)({},r),{},{pieces:t}))};String.prototype.isEmpty=function(){return 0===this.length||!this.trim()};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"New Pie"}),Object(a.jsxs)("form",{className:"form",children:[Object(a.jsx)("label",{htmlFor:"title",children:"Title"}),Object(a.jsx)("input",{type:"text",name:"title",value:r.title,onChange:function(e){o(Object(j.a)(Object(j.a)({},r),{},{title:e.target.value}))}}),Object(a.jsx)("label",{htmlFor:"piece00",children:"Piece"}),Object(a.jsx)("input",{type:"text",name:"piece00",id:0,defaultValue:r.pieces[0],onChange:l}),Object(a.jsx)("label",{htmlFor:"piece01",children:"Piece"}),Object(a.jsx)("input",{type:"text",name:"piece01",id:1,defaultValue:r.pieces[1],onChange:l}),Object(a.jsx)("label",{htmlFor:"piece02",children:"Piece"}),Object(a.jsx)("input",{type:"text",name:"piece02",id:2,defaultValue:r.pieces[2],onChange:l}),Object(a.jsx)("label",{htmlFor:"piece03",children:"Piece"}),Object(a.jsx)("input",{type:"text",name:"piece03",id:3,defaultValue:r.pieces[3],onChange:l}),Object(a.jsx)("label",{htmlFor:"piece04",children:"Piece"}),Object(a.jsx)("input",{type:"text",name:"piece04",id:4,defaultValue:r.pieces[4],onChange:l}),Object(a.jsx)("label",{htmlFor:"piece05",children:"Piece"}),Object(a.jsx)("input",{type:"text",name:"piece05",id:5,defaultValue:r.pieces[5],onChange:l}),Object(a.jsx)("label",{htmlFor:"piece06",children:"Piece"}),Object(a.jsx)("input",{type:"text",name:"piece06",id:6,defaultValue:r.pieces[6],onChange:l}),Object(a.jsx)("label",{htmlFor:"piece07",children:"Piece"}),Object(a.jsx)("input",{type:"text",name:"piece07",id:7,defaultValue:r.pieces[7],onChange:l}),Object(a.jsx)("input",{type:"submit",value:"Save",onClick:function(a){a.preventDefault(),r.title.isEmpty()||r.pieces[0].isEmpty()||r.pieces[1].isEmpty()||r.pieces[2].isEmpty()||r.pieces[3].isEmpty()||r.pieces[4].isEmpty()||r.pieces[5].isEmpty()||r.pieces[6].isEmpty()||r.pieces[7].isEmpty()?alert("All fields are required"):c(function(e,t,c){return e.user_id=t.id,function(a){a({type:u});var n={method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({pie:e})};fetch("".concat(L,"/pies"),n).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)})).then((function(e){return a({type:p,payload:e})})).then((function(){return a(U(t,c))})).catch((function(e){return a({type:d,payload:e})}))}}(r,t,e.history))}})]})]})},M=c(27),Q=c(28),J=c(31),q=c(30),X=function(e){var t=e.pieData,c=function(e){return!!t.chunks.includes(e)};return Object(a.jsxs)("svg",{viewBox:"0 0 600 600",children:[Object(a.jsxs)("g",{transform:"translate(0,300)",children:[Object(a.jsxs)("g",{id:"piece00",children:[Object(a.jsx)("path",{id:"10",className:"chunk ".concat(c(10)?"pie-00":""),d:"m 325.96455,-28.964603 a 29.950082,29.950082 0 0 0 -21.1646,-8.78552 v 29.95012 z"}),Object(a.jsx)("path",{id:"20",className:"chunk ".concat(c(20)?"pie-00":""),d:"m 347.12975,-50.129713 a 59.900166,59.900166 0 0 0 -42.3298,-17.5705 v 29.9501 a 29.950082,29.950082 0 0 1 2.9901,0.14986 29.950082,29.950082 0 0 1 2.96,0.44701 29.950082,29.950082 0 0 1 2.9006,0.74105 29.950082,29.950082 0 0 1 2.8122,1.02629 29.950082,29.950082 0 0 1 2.696,1.30225 29.950082,29.950082 0 0 1 2.5523,1.56475 29.950082,29.950082 0 0 1 2.3833,1.81179 29.950082,29.950082 0 0 1 1.8702,1.74252 z"}),Object(a.jsx)("path",{id:"30",className:"chunk ".concat(c(30)?"pie-00":""),d:"m 368.29385,-71.293803 a 89.850251,89.850251 0 0 0 -63.4939,-26.356532 v 29.950112 a 59.900166,59.900166 0 0 1 5.9801,0.29921 59.900166,59.900166 0 0 1 5.9205,0.89503 59.900166,59.900166 0 0 1 5.8012,1.48105 59.900166,59.900166 0 0 1 5.6245,2.0531 59.900166,59.900166 0 0 1 5.3914,2.60449 59.900166,59.900166 0 0 1 5.1046,3.12953 59.900166,59.900166 0 0 1 4.7666,3.62355 59.900166,59.900166 0 0 1 3.7409,3.48454 z"}),Object(a.jsx)("path",{id:"40",className:"chunk ".concat(c(40)?"pie-00":""),d:"m 389.45895,-92.458925 a 119.80033,119.80033 0 0 0 -84.659,-35.141525 v 29.950115 a 89.850251,89.850251 0 0 1 63.4938,26.356532 z"}),Object(a.jsx)("path",{id:"50",className:"chunk ".concat(c(50)?"pie-00":""),d:"m 410.62355,-113.62351 a 149.75041,149.75041 0 0 0 -105.8236,-43.92703 v 29.9501 a 119.80033,119.80033 0 0 1 84.659,35.141525 z"}),Object(a.jsx)("path",{id:"60",className:"chunk ".concat(c(60)?"pie-00":""),d:"m 304.79995,-187.50013 v 29.94959 a 149.75041,149.75041 0 0 1 105.8235,43.92703 l 21.1461,-21.14599 a 179.65004,179.70003 0 0 0 -126.9696,-52.73063 z"}),Object(a.jsx)("path",{id:"70",className:"chunk ".concat(c(70)?"pie-00":""),d:"m 304.79995,-217.45 v 29.95011 a 179.65004,179.70003 0 0 1 126.9711,52.72908 l 21.1817,-21.18165 A 209.64998,209.64998 0 0 0 304.79995,-217.45 z"})]}),Object(a.jsxs)("g",{id:"piece01",children:[Object(a.jsx)("path",{id:"11",className:"chunk ".concat(c(11)?"pie-01":""),d:"m 325.96455,-28.964603 -21.1646,21.1646 h 29.9502 a 29.950082,29.950082 0 0 0 -8.7856,-21.1646 z"}),Object(a.jsx)("path",{id:"21",className:"chunk ".concat(c(21)?"pie-01":""),d:"m 347.12975,-50.129713 -21.1651,21.16512 a 29.950082,29.950082 0 0 1 0.3203,0.29818 29.950082,29.950082 0 0 1 1.9756,2.24896 29.950082,29.950082 0 0 1 1.7415,2.43549 29.950082,29.950082 0 0 1 1.4899,2.59675 29.950082,29.950082 0 0 1 1.2226,2.73265 29.950082,29.950082 0 0 1 0.9442,2.84117 29.950082,29.950082 0 0 1 0.6557,2.92076 29.950082,29.950082 0 0 1 0.3607,2.97191 29.950082,29.950082 0 0 1 0.075,2.11873 h 29.9501 a 59.900166,59.900166 0 0 0 -17.5704,-42.32972 z"}),Object(a.jsx)("path",{id:"31",className:"chunk ".concat(c(31)?"pie-01":""),d:"m 368.29385,-71.293803 -21.1641,21.16408 a 59.900166,59.900166 0 0 1 0.6402,0.59686 59.900166,59.900166 0 0 1 3.9512,4.49844 59.900166,59.900166 0 0 1 3.483,4.86998 59.900166,59.900166 0 0 1 2.9792,5.19401 59.900166,59.900166 0 0 1 2.4458,5.46528 59.900166,59.900166 0 0 1 1.8883,5.68185 59.900166,59.900166 0 0 1 1.311,5.842 59.900166,59.900166 0 0 1 0.7219,5.94434 59.900166,59.900166 0 0 1 0.1499,4.23696 h 29.9501 a 89.850251,89.850251 0 0 0 -26.3565,-63.4938 z"}),Object(a.jsx)("path",{id:"41",className:"chunk ".concat(c(41)?"pie-01":""),d:"m 389.45895,-92.458925 -21.1652,21.165122 a 89.850251,89.850251 0 0 1 26.3566,63.4938 h 29.9501 a 119.80032,119.80032 0 0 0 -35.1415,-84.658922 z"}),Object(a.jsx)("path",{id:"51",className:"chunk ".concat(c(51)?"pie-01":""),d:"m 410.62355,-113.62351 -21.1646,21.164595 a 119.80032,119.80032 0 0 1 35.1415,84.658922 h 29.9501 a 149.7504,149.7504 0 0 0 -43.927,-105.823517 z"}),Object(a.jsx)("path",{id:"61",className:"chunk ".concat(c(61)?"pie-01":""),d:"m 431.76955,-134.7695 -21.1461,21.14599 a 149.7504,149.7504 0 0 1 43.9271,105.823517 h 29.8995 A 179.65003,179.70003 0 0 0 431.76955,-134.7695 z"}),Object(a.jsx)("path",{id:"71",className:"chunk ".concat(c(71)?"pie-01":""),d:"m 452.95275,-155.95246 -21.1817,21.18165 a 179.65003,179.70003 0 0 1 52.679,126.971057 h 30.0002 a 209.64998,209.64998 0 0 0 -61.4975,-148.152707 z"})]}),Object(a.jsxs)("g",{id:"piece02",children:[Object(a.jsx)("path",{id:"12",className:"chunk ".concat(c(12)?"pie-02":""),d:"m 304.79995,-7.800003 21.1646,21.1646 a 29.950082,29.950082 0 0 0 8.7856,-21.1646 z"}),Object(a.jsx)("path",{id:"22",className:"chunk ".concat(c(22)?"pie-02":""),d:"m 325.96465,13.364607 21.1651,21.16511 a 59.900166,59.900166 0 0 0 17.5705,-42.32971 h -29.9501 a 29.950082,29.950082 0 0 1 -0.1499,2.99 29.950082,29.950082 0 0 1 -0.447,2.96003 29.950082,29.950082 0 0 1 -0.7411,2.9006 29.950082,29.950082 0 0 1 -1.0262,2.81223 29.950082,29.950082 0 0 1 -1.3023,2.69595 29.950082,29.950082 0 0 1 -1.5647,2.5522999 29.950082,29.950082 0 0 1 -1.8118,2.3833101 29.950082,29.950082 0 0 1 -1.7425,1.87018 z"}),Object(a.jsx)("path",{id:"32",className:"chunk ".concat(c(32)?"pie-02":""),d:"m 347.12975,34.529707 21.1641,21.1641 a 89.850251,89.850251 0 0 0 26.3565,-63.49381 h -29.9501 a 59.900166,59.900166 0 0 1 -0.2992,5.98001 59.900166,59.900166 0 0 1 -0.8951,5.92055 59.900166,59.900166 0 0 1 -1.481,5.8011999 59.900166,59.900166 0 0 1 -2.0531,5.6244601 59.900166,59.900166 0 0 1 -2.6045,5.39142 59.900166,59.900166 0 0 1 -3.1295,5.10458 59.900166,59.900166 0 0 1 -3.6236,4.76665 59.900166,59.900166 0 0 1 -3.4845,3.74084 z"}),Object(a.jsx)("path",{id:"42",className:"chunk ".concat(c(42)?"pie-02":""),d:"m 368.29375,55.693807 21.1652,21.1651 a 119.80032,119.80032 0 0 0 35.1415,-84.65891 h -29.9501 a 89.850251,89.850251 0 0 1 -26.3566,63.49381 z"}),Object(a.jsx)("path",{id:"52",className:"chunk ".concat(c(52)?"pie-02":""),d:"m 389.45895,76.858907 21.1646,21.16461 a 149.7504,149.7504 0 0 0 43.927,-105.82351 h -29.9501 a 119.80032,119.80032 0 0 1 -35.1415,84.6589 z"}),Object(a.jsx)("path",{id:"62",className:"chunk ".concat(c(62)?"pie-02":""),d:"m 410.62345,98.023517 21.1476,21.147563 a 179.65003,179.70003 0 0 0 52.679,-126.971073 h -29.8995 a 149.7504,149.7504 0 0 1 -43.9271,105.82351 z"}),Object(a.jsx)("path",{id:"72",className:"chunk ".concat(c(72)?"pie-02":""),d:"m 431.76955,119.16978 21.1832,21.1832 a 209.64998,209.64998 0 0 0 61.4975,-148.152733 h -30.0002 a 179.65003,179.70003 0 0 1 -52.6805,126.969533 z"})]}),Object(a.jsxs)("g",{id:"piece03",children:[Object(a.jsx)("path",{id:"13",className:"chunk ".concat(c(13)?"pie-03":""),d:"m 304.79995,-7.800003 v 29.95012 a 29.950082,29.950082 0 0 0 21.1646,-8.78552 z"}),Object(a.jsx)("path",{id:"23",className:"chunk ".concat(c(23)?"pie-03":""),d:"m 325.96465,13.364607 a 29.950082,29.950082 0 0 1 -0.2982,0.32039 29.950082,29.950082 0 0 1 -2.249,1.97559 29.950082,29.950082 0 0 1 -2.4355,1.74151 29.950082,29.950082 0 0 1 -2.5967,1.48982 29.950082,29.950082 0 0 1 -2.7327,1.22266 29.950082,29.950082 0 0 1 -2.8412,0.94414 29.950082,29.950082 0 0 1 -2.9207,0.65577 29.950082,29.950082 0 0 1 -2.9719,0.36071 29.950082,29.950082 0 0 1 -2.1188,0.0749 v 29.95008 a 59.900166,59.900166 0 0 0 42.3298,-17.57049 z"}),Object(a.jsx)("path",{id:"33",className:"chunk ".concat(c(33)?"pie-03":""),d:"m 347.12975,34.529707 a 59.900166,59.900166 0 0 1 -0.5969,0.64026 59.900166,59.900166 0 0 1 -4.4984,3.95119 59.900166,59.900166 0 0 1 -4.87,3.483 59.900166,59.900166 0 0 1 -5.194,2.97915 59.900166,59.900166 0 0 1 -5.4653,2.44584 59.900166,59.900166 0 0 1 -5.6819,1.88825 59.900166,59.900166 0 0 1 -5.842,1.31103 59.900166,59.900166 0 0 1 -5.9443,0.72192 59.900166,59.900166 0 0 1 -4.237,0.14986 v 29.95012 a 89.850251,89.850251 0 0 0 63.4939,-26.35652 z"}),Object(a.jsx)("path",{id:"43",className:"chunk ".concat(c(43)?"pie-03":""),d:"m 368.29375,55.693807 a 89.850251,89.850251 0 0 1 -63.4938,26.35652 v 29.950123 a 119.80032,119.80032 0 0 0 84.659,-35.141543 z"}),Object(a.jsx)("path",{id:"53",className:"chunk ".concat(c(53)?"pie-03":""),d:"m 389.45895,76.858907 a 119.80032,119.80032 0 0 1 -84.659,35.141543 v 29.95011 a 149.7504,149.7504 0 0 0 105.8236,-43.927043 z"}),Object(a.jsx)("path",{id:"63",className:"chunk ".concat(c(63)?"pie-03":""),d:"m 410.62345,98.023517 a 149.7504,149.7504 0 0 1 -105.8235,43.927043 v 29.94959 a 179.65003,179.70003 0 0 0 126.9711,-52.72907 z"}),Object(a.jsx)("path",{id:"73",className:"chunk ".concat(c(73)?"pie-03":""),d:"m 431.76955,119.16978 a 179.65003,179.70003 0 0 1 -126.9696,52.7306 V 201.85 a 209.64998,209.64998 0 0 0 148.1528,-61.49701 z"})]}),Object(a.jsxs)("g",{id:"piece04",children:[Object(a.jsx)("path",{id:"14",className:"chunk ".concat(c(14)?"pie-04":""),d:"m 304.79995,-7.800003 -21.1646,21.1646 a 29.950082,29.950082 0 0 0 21.1646,8.78552 z"}),Object(a.jsx)("path",{id:"24",className:"chunk ".concat(c(24)?"pie-04":""),d:"m 283.63535,13.364607 -21.16506,21.16511 a 59.900166,59.900166 0 0 0 42.32966,17.57049 v -29.95008 a 29.950082,29.950082 0 0 1 -2.99,-0.14986 29.950082,29.950082 0 0 1 -2.96,-0.44701 29.950082,29.950082 0 0 1 -2.9006,-0.74105 29.950082,29.950082 0 0 1 -2.8127,-1.02629 29.950082,29.950082 0 0 1 -2.6955,-1.30225 29.950082,29.950082 0 0 1 -2.5523,-1.56475 29.950082,29.950082 0 0 1 -2.3833,-1.81179 29.950082,29.950082 0 0 1 -1.8702,-1.74252 z"}),Object(a.jsx)("path",{id:"34",className:"chunk ".concat(c(34)?"pie-04":""),d:"m 262.47028,34.529707 -21.16408,21.1641 a 89.850251,89.850251 0 0 0 63.49375,26.35652 v -29.95012 a 59.900166,59.900166 0 0 1 -5.98,-0.29919 59.900166,59.900166 0 0 1 -5.9205,-0.89503 59.900166,59.900166 0 0 1 -5.8012,-1.48106 59.900166,59.900166 0 0 1 -5.6245,-2.05312 59.900166,59.900166 0 0 1 -5.3914,-2.60447 59.900166,59.900166 0 0 1 -5.10457,-3.12952 59.900166,59.900166 0 0 1 -4.76665,-3.62357 59.900166,59.900166 0 0 1 -3.74085,-3.48454 z"}),Object(a.jsx)("path",{id:"44",className:"chunk ".concat(c(44)?"pie-04":""),d:"m 241.3062,55.693807 -21.16512,21.1651 a 119.80033,119.80033 0 0 0 84.65887,35.141543 V 82.050327 A 89.850251,89.850251 0 0 1 241.3062,55.693807 z"}),Object(a.jsx)("path",{id:"54",className:"chunk ".concat(c(54)?"pie-04":""),d:"m 220.14109,76.858907 -21.1646,21.16461 A 149.75041,149.75041 0 0 0 304.79995,141.95056 V 112.00045 A 119.80033,119.80033 0 0 1 220.14109,76.858907 z"}),Object(a.jsx)("path",{id:"64",className:"chunk ".concat(c(64)?"pie-04":""),d:"m 198.97649,98.023517 -21.146,21.145993 a 179.65004,179.70003 0 0 0 126.96946,52.73064 V 141.95056 A 149.75041,149.75041 0 0 1 198.97649,98.023517 z"}),Object(a.jsx)("path",{id:"74",className:"chunk ".concat(c(74)?"pie-04":""),d:"m 177.82894,119.17132 -21.18113,21.18113 A 209.64998,209.64998 0 0 0 304.79995,201.85 V 171.90038 A 179.65004,179.70003 0 0 1 177.82894,119.17132 z"})]}),Object(a.jsxs)("g",{id:"piece05",children:[Object(a.jsx)("path",{id:"15",className:"chunk ".concat(c(15)?"pie-05":""),d:"m 304.79995,-7.800003 h -29.9501 a 29.950082,29.950082 0 0 0 8.7855,21.1646 z"}),Object(a.jsx)("path",{id:"25",className:"chunk ".concat(c(25)?"pie-05":""),d:"m 274.84985,-7.799993 h -29.95006 a 59.900166,59.900166 0 0 0 17.5705,42.32971 l 21.16506,-21.16511 a 29.950082,29.950082 0 0 1 -0.3203,-0.29818 29.950082,29.950082 0 0 1 -1.9756,-2.24896 29.950082,29.950082 0 0 1 -1.7415,-2.43549 29.950082,29.950082 0 0 1 -1.4899,-2.59675 29.950082,29.950082 0 0 1 -1.2226,-2.73265 29.950082,29.950082 0 0 1 -0.9442,-2.84117 29.950082,29.950082 0 0 1 -0.6557,-2.92076 29.950082,29.950082 0 0 1 -0.3607,-2.97191 29.950082,29.950082 0 0 1 -0.075,-2.11873 z"}),Object(a.jsx)("path",{id:"35",className:"chunk ".concat(c(35)?"pie-05":""),d:"m 244.89978,-7.800003 h -29.95011 a 89.850251,89.850251 0 0 0 26.35653,63.49381 l 21.16408,-21.1641 a 59.900166,59.900166 0 0 1 -0.64027,-0.59685 59.900166,59.900166 0 0 1 -3.95118,-4.49844 59.900166,59.900166 0 0 1 -3.48299,-4.86998 59.900166,59.900166 0 0 1 -2.97914,-5.19401 59.900166,59.900166 0 0 1 -2.44585,-5.46528 59.900166,59.900166 0 0 1 -1.88826,-5.68185 59.900166,59.900166 0 0 1 -1.31103,-5.842 59.900166,59.900166 0 0 1 -0.72192,-5.94434 59.900166,59.900166 0 0 1 -0.14986,-4.23696 z"}),Object(a.jsx)("path",{id:"45",className:"chunk ".concat(c(45)?"pie-05":""),d:"m 214.94967,-7.800003 h -29.95011 a 119.80032,119.80032 0 0 0 35.14152,84.65891 l 21.16512,-21.1651 a 89.850251,89.850251 0 0 1 -26.35653,-63.49381 z"}),Object(a.jsx)("path",{id:"55",className:"chunk ".concat(c(55)?"pie-05":""),d:"m 184.99957,-7.799993 h -29.95011 a 149.7504,149.7504 0 0 0 43.92703,105.82351 l 21.1646,-21.16461 a 119.80032,119.80032 0 0 1 -35.14152,-84.6589 z"}),Object(a.jsx)("path",{id:"65",className:"chunk ".concat(c(65)?"pie-05":""),d:"m 155.04945,-7.799993 h -29.89947 a 179.65003,179.70003 0 0 0 52.68051,126.969513 l 21.146,-21.146003 A 149.7504,149.7504 0 0 1 155.04945,-7.799993 z"}),Object(a.jsx)("path",{id:"75",className:"chunk ".concat(c(75)?"pie-05":""),d:"M 125.14999,-7.799753 H 95.14975 a 209.64998,209.64998 0 0 0 61.49806,148.152203 l 21.18113,-21.18113 A 179.65003,179.70003 0 0 1 125.14999,-7.799753 z"})]}),Object(a.jsxs)("g",{id:"piece06",children:[Object(a.jsx)("path",{id:"16",className:"chunk ".concat(c(16)?"pie-06":""),d:"m 283.63535,-28.964603 a 29.950082,29.950082 0 0 0 -8.7855,21.1646 h 29.9501 z"}),Object(a.jsx)("path",{id:"26",className:"chunk ".concat(c(26)?"pie-06":""),d:"m 262.47029,-50.129713 a 59.900166,59.900166 0 0 0 -17.5705,42.32972 h 29.95006 a 29.950082,29.950082 0 0 1 0.1499,-2.99 29.950082,29.950082 0 0 1 0.447,-2.96003 29.950082,29.950082 0 0 1 0.741,-2.9006 29.950082,29.950082 0 0 1 1.0263,-2.81223 29.950082,29.950082 0 0 1 1.3023,-2.69595 29.950082,29.950082 0 0 1 1.5647,-2.5523 29.950082,29.950082 0 0 1 1.8118,-2.38331 29.950082,29.950082 0 0 1 1.7425,-1.87018 z"}),Object(a.jsx)("path",{id:"36",className:"chunk ".concat(c(36)?"pie-06":""),d:"m 241.3062,-71.293803 a 89.850251,89.850251 0 0 0 -26.35653,63.4938 h 29.95011 a 59.900166,59.900166 0 0 1 0.29921,-5.98001 59.900166,59.900166 0 0 1 0.89503,-5.92055 59.900166,59.900166 0 0 1 1.48105,-5.8012 59.900166,59.900166 0 0 1 2.0531,-5.62446 59.900166,59.900166 0 0 1 2.6045,-5.39142 59.900166,59.900166 0 0 1 3.12952,-5.10458 59.900166,59.900166 0 0 1 3.62355,-4.76665 59.900166,59.900166 0 0 1 3.48454,-3.74085 z"}),Object(a.jsx)("path",{id:"46",className:"chunk ".concat(c(46)?"pie-06":""),d:"m 220.14108,-92.458925 a 119.80032,119.80032 0 0 0 -35.14152,84.658922 h 29.95011 a 89.850251,89.850251 0 0 1 26.35653,-63.4938 z"}),Object(a.jsx)("path",{id:"56",className:"chunk ".concat(c(56)?"pie-06":""),d:"M 198.97649,-113.62351 A 149.7504,149.7504 0 0 0 155.04946,-7.799993 h 29.95011 a 119.80032,119.80032 0 0 1 35.14152,-84.658922 z"}),Object(a.jsx)("path",{id:"66",className:"chunk ".concat(c(66)?"pie-06":""),d:"m 198.97649,-113.62351 -21.14755,-21.14754 A 179.65003,179.70003 0 0 0 125.14998,-7.799993 h 29.89947 a 149.7504,149.7504 0 0 1 43.92704,-105.823517 z"}),Object(a.jsx)("path",{id:"76",className:"chunk ".concat(c(76)?"pie-06":""),d:"m 177.83049,-134.76926 -21.1832,-21.1832 A 209.64998,209.64998 0 0 0 95.14975,-7.799753 h 30.00024 a 179.65003,179.70003 0 0 1 52.6805,-126.969507 z"})]}),Object(a.jsxs)("g",{id:"piece07",children:[Object(a.jsx)("path",{id:"17",className:"chunk ".concat(c(17)?"pie-07":""),d:"m 283.63535,-28.964603 21.1646,21.1646 v -29.95012 a 29.950082,29.950082 0 0 0 -21.1646,8.78552 z"}),Object(a.jsx)("path",{id:"27",className:"chunk ".concat(c(27)?"pie-07":""),d:"m 262.47029,-50.129713 21.16506,21.16512 a 29.950082,29.950082 0 0 1 0.2982,-0.32039 29.950082,29.950082 0 0 1 2.249,-1.97559 29.950082,29.950082 0 0 1 2.4355,-1.74151 29.950082,29.950082 0 0 1 2.5967,-1.48982 29.950082,29.950082 0 0 1 2.7327,-1.22266 29.950082,29.950082 0 0 1 2.8412,-0.94414 29.950082,29.950082 0 0 1 2.9207,-0.65577 29.950082,29.950082 0 0 1 2.9719,-0.36071 29.950082,29.950082 0 0 1 2.1187,-0.0749 v -29.9501 a 59.900166,59.900166 0 0 0 -42.32966,17.5705 z"}),Object(a.jsx)("path",{id:"37",className:"chunk ".concat(c(37)?"pie-07":""),d:"m 241.3062,-71.293803 21.16408,21.16408 a 59.900166,59.900166 0 0 1 0.59687,-0.64027 59.900166,59.900166 0 0 1 4.49843,-3.95118 59.900166,59.900166 0 0 1 4.86997,-3.48299 59.900166,59.900166 0 0 1 5.194,-2.97915 59.900166,59.900166 0 0 1 5.4653,-2.44584 59.900166,59.900166 0 0 1 5.6818,-1.88826 59.900166,59.900166 0 0 1 5.842,-1.31103 59.900166,59.900166 0 0 1 5.9444,-0.72192 59.900166,59.900166 0 0 1 4.2369,-0.14986 v -29.950112 a 89.850251,89.850251 0 0 0 -63.49375,26.356532 z"}),Object(a.jsx)("path",{id:"47",className:"chunk ".concat(c(47)?"pie-07":""),d:"m 220.14108,-92.458925 21.16512,21.165122 a 89.850251,89.850251 0 0 1 63.49375,-26.356532 v -29.950115 a 119.80032,119.80032 0 0 0 -84.65887,35.141525 z"}),Object(a.jsx)("path",{id:"57",className:"chunk ".concat(c(57)?"pie-07":""),d:"m 198.97649,-113.62351 21.1646,21.164595 a 119.80032,119.80032 0 0 1 84.65886,-35.141515 v -29.95011 a 149.7504,149.7504 0 0 0 -105.82346,43.92703 z"}),Object(a.jsx)("path",{id:"67",className:"chunk ".concat(c(67)?"pie-07":""),d:"m 304.79995,-187.50013 a 179.65003,179.70003 0 0 0 -126.97101,52.72908 l 21.14755,21.14754 a 149.7504,149.7504 0 0 1 105.82346,-43.92703 z"}),Object(a.jsx)("path",{id:"77",className:"chunk ".concat(c(77)?"pie-07":""),d:"m 304.79995,-217.45 a 209.64998,209.64998 0 0 0 -148.15266,61.49754 l 21.1832,21.1832 a 179.65003,179.70003 0 0 1 126.96946,-52.73063 z"})]})]}),Object(a.jsx)("text",{children:Object(a.jsx)("tspan",{x:"300",y:"30",className:"title middle",children:t.title})}),Object(a.jsx)("text",{children:Object(a.jsx)("tspan",{x:"340",y:"75",className:"label right",children:t.pieces[0]})}),Object(a.jsx)("text",{children:Object(a.jsx)("tspan",{x:"490",y:"175",className:"label right",children:t.pieces[1]})}),Object(a.jsx)("text",{children:Object(a.jsx)("tspan",{x:"480",y:"440",className:"label right",children:t.pieces[2]})}),Object(a.jsx)("text",{children:Object(a.jsx)("tspan",{x:"340",y:"525",className:"label right",children:t.pieces[3]})}),Object(a.jsx)("text",{children:Object(a.jsx)("tspan",{x:"270",y:"525",className:"label left",children:t.pieces[4]})}),Object(a.jsx)("text",{children:Object(a.jsx)("tspan",{x:"130",y:"440",className:"label left",children:t.pieces[5]})}),Object(a.jsx)("text",{children:Object(a.jsx)("tspan",{x:"120",y:"175",className:"label left",children:t.pieces[6]})}),Object(a.jsx)("text",{children:Object(a.jsx)("tspan",{x:"270",y:"75",className:"label left",children:t.pieces[7]})})]})},B=function(e){var t=e.pies;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"pie-gallery",children:t.map((function(e){return Object(a.jsxs)("div",{className:"pie-gallery-container",children:[Object(a.jsx)(X,{pieData:e}),Object(a.jsx)("div",{children:Object(a.jsx)(o.b,{to:"/pies/".concat(e.id),children:"Update"})})]},e.id)}))})})},W=function(e){Object(J.a)(c,e);var t=Object(q.a)(c);function c(e){var a;return Object(M.a)(this,c),(a=t.call(this,e)).state={user:a.props.user},a}return Object(Q.a)(c,[{key:"getPies",value:function(){return this.state.user&&this.state.user.pies&&this.state.user.pies.length>0?Object(a.jsx)(B,{pies:this.state.user.pies}):null}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"My Pies"}),this.state.user&&this.state.user.pies&&this.state.user.pies.length>0?null:"No pies yet. Click New Pie to create a pie.",this.getPies()]})}}]),c}(n.Component),K=Object(A.b)((function(e){return{user:e.authenticationReducer.user,isLoading:e.authenticationReducer.isLoading}}),{refreshUser:U})(W),Y=c(32),Z=function(e){var t=e.component,c=Object(Y.a)(e,["component"]),n=Object(A.d)((function(e){return e.authenticationReducer.loggedIn}));return Object(a.jsx)(l.b,Object(j.a)(Object(j.a)({},c),{},{render:function(e){return n?Object(a.jsx)(t,Object(j.a)({},e)):Object(a.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},$=function(e){var t=e.pieData,c=Object(A.c)(),n=Object(A.d)((function(e){return e.authenticationReducer.user}));return function(){if(t.pieces)return t.pieces.map((function(e,i){return Object(a.jsxs)("div",{className:"pie-controls-container",children:[Object(a.jsx)("h4",{children:e}),Object(a.jsxs)("div",{className:"chunk-wrapper",children:[Object(a.jsx)("button",{onClick:function(){return function(e){for(var a=0,i=[parseInt(1+e.toString()),parseInt(2+e.toString()),parseInt(3+e.toString()),parseInt(4+e.toString()),parseInt(5+e.toString()),parseInt(6+e.toString()),parseInt(7+e.toString())];a<i.length;a++){var s=i[a];if(!t.chunks.includes(s)){c(V(Object(j.a)(Object(j.a)({},t),{},{chunks:[].concat(Object(P.a)(t.chunks),[s])}),n));break}}}(i)},children:"Add chunk"})," ",Object(a.jsx)("button",{onClick:function(){return function(e){for(var a=[parseInt(7+e.toString()),parseInt(6+e.toString()),parseInt(5+e.toString()),parseInt(4+e.toString()),parseInt(3+e.toString()),parseInt(2+e.toString()),parseInt(1+e.toString())],i=function(){var e=r[s];if(t.chunks.includes(e))return c(V(Object(j.a)(Object(j.a)({},t),{},{chunks:t.chunks.filter((function(t){return t!==e}))}),n)),"break"},s=0,r=a;s<r.length&&"break"!==i();s++);}(i)},children:"Remove chunk"})]})]},i)}))}()},ee=function(e){var t=Object(A.c)(),c=Object(A.d)((function(e){return e.pieReducer.pie})),i=Object(A.d)((function(e){return e.authenticationReducer.user}));return Object(n.useEffect)((function(){var c;t((c=e.id,function(e){e({type:h}),fetch("".concat(L,"/pies/").concat(c),null).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)})).then((function(t){return e({type:b,payload:t})})).catch((function(t){return e({type:O,payload:t})}))}))}),[t,e.id]),Object(a.jsxs)("div",{className:"pie-container",children:[Object.keys(c).length>0?Object(a.jsx)(X,{pieData:c}):null,Object.keys(c).length>0?Object(a.jsx)($,{pieData:c}):null,Object(a.jsx)("div",{className:"delete-pie-wrapper",children:Object(a.jsx)("button",{onClick:function(){t(function(e,t,c){return function(a){a({type:g});var n={method:"DELETE",headers:new Headers({"content-type":"application/json"})};fetch("".concat(L,"/pies/").concat(e.id),n).then((function(e){if(!e.ok)return Promise.reject(e.statusText)})).then((function(){return a({type:y})})).then((function(){return a(U(t,c))})).catch((function(e){return a({type:E,payload:e})}))}}(c,i,e.history))},children:"Delete Pie"})})]})},te=function(e){var t=e.user;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Profile"}),Object(a.jsxs)("div",{children:["First name: ",t.first_name,Object(a.jsx)("br",{}),"Last name: ",t.last_name,Object(a.jsx)("br",{}),"Email: ",t.email,Object(a.jsx)("br",{}),"Number of pies created: ",t.pies.length]})]})},ce=function(){var e=Object(A.d)((function(e){return e.authenticationReducer.user}));return Object(a.jsx)(te,{user:e})},ae=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(F,{}),Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{exact:!0,path:"/",component:D}),Object(a.jsx)(l.b,{exact:!0,path:"/login",component:D}),Object(a.jsx)(l.b,{exact:!0,path:"/signup",component:G}),Object(a.jsx)(Z,{exact:!0,path:"/profile",component:ce}),Object(a.jsx)(Z,{exact:!0,path:"/pies",component:K}),Object(a.jsx)(Z,{exact:!0,path:"/pies/new",component:H}),Object(a.jsx)(Z,{exact:!0,path:"/pies/:id",component:function(e){return e.match.params.id?Object(a.jsx)(ee,Object(j.a)({},Object(j.a)({id:parseInt(e.match.params.id)},e))):null}})]})]})},ne=c(12),ie=c(29),se={loggedIn:!1,isLoading:!1,user:{}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(j.a)(Object(j.a)({},e),{},{loggedIn:!1,isLoading:!0});case N:return{loggedIn:!0,isLoading:!1,user:t.payload};case k:return{loggedIn:!1,isLoading:!1,errorMessage:t.error};case S:return Object(j.a)(Object(j.a)({},e),{},{loggedIn:!1,isLoading:!0});case _:return{loggedIn:!0,isLoading:!1,user:t.payload};case z:return{loggedIn:!1,isLoading:!1,errorMessage:t.error};case R:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0});case I:return Object(j.a)(Object(j.a)({},e),{},{loggedIn:!0,isLoading:!1,user:t.payload});case C:return{loggedIn:!1,isLoading:!1,errorMessage:t.payload};default:return e}},je={pie:{},isLoading:!1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0});case b:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,pie:t.payload});case O:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,error:t.payload});case m:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0});case x:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,pie:t.payload});case f:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,error:t.payload});case u:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0});case p:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,pie:t.payload});case d:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,error:t.payload});case g:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0});case y:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,pie:{}});case E:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}},le=Object(ne.c)({authenticationReducer:re,pieReducer:oe}),ue=function(e,t){return"CLEAR_DATA"===t.type&&(e=void 0),le(e,t)},pe=[ie.a],de=Object(ne.e)(ue,{},Object(ne.d)(ne.a.apply(void 0,pe),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));r.a.render(Object(a.jsx)(A.a,{store:de,children:Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(ae,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.7d7b5bd0.chunk.js.map