(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("19b3"),n=a.n(r);n.a},"14ea":function(t,e,a){},"19b3":function(t,e,a){},3184:function(t,e,a){"use strict";var r=a("32d5"),n=a.n(r);n.a},"32d5":function(t,e,a){},4678:function(t,e,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=s,t.exports=n,n.id="4678"},"4da5":function(t,e,a){},5609:function(t,e){var a="http://192.168.0.106:3333";t.exports={baseUrl:a}},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header"),a("v-content",[a("router-view")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{height:"60",dark:"",app:""}},[a("router-link",{attrs:{to:"/",tag:"span"}},[a("v-toolbar-title",{staticClass:"headline ff linkTags text-uppercase",attrs:{onmouseover:""}},[a("span",{staticClass:"display-1 font-weight-bold grey--text"},[t._v("ANIME")]),a("span",{staticClass:"font-weight-light"},[t._v("BLOGS")])])],1),a("v-spacer"),1==t.loggedIn?[a("router-link",{staticClass:"px-5 ff",attrs:{to:"/blog-view",tag:"span"}},[a("v-btn",{attrs:{text:"",small:""}},[a("span",[t._v("My Blogs")])])],1),a("router-link",{staticClass:"px-3 ff",attrs:{to:"/blog-add",tag:"span"}},[a("v-btn",{staticClass:"mr-2",attrs:{text:"",small:""}},[a("v-icon",{staticClass:"font-weight-bold"},[t._v("add")]),t._v("Add Blogs ")],1)],1),a("v-btn",{attrs:{text:"",small:""},on:{click:function(e){return t.signout()}}},[a("span",{staticClass:"mr-2"},[t._v("Logout")])])]:[a("v-btn",{attrs:{text:"",to:"/login",small:""}},[a("span",{staticClass:"mr-2"},[t._v("Login")])])]],2)},i=[],c=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("2fa7")),l=a("2f62");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={name:"header",methods:d({},Object(l["d"])(["logout"]),{signout:function(){window.localStorage.setItem("authenticated",""),this.logout(),this.$router.push("/login")}}),computed:Object(l["c"])(["loggedIn"])},p=f,b=(a("8baf"),a("2877")),v=a("6544"),m=a.n(v),g=a("40dc"),h=a("8336"),j=a("132d"),w=a("2fa4"),y=a("2a7f"),O=Object(b["a"])(p,o,i,!1,null,null,null),x=O.exports;m()(O,{VAppBar:g["a"],VBtn:h["a"],VIcon:j["a"],VSpacer:w["a"],VToolbarTitle:y["a"]});var k={name:"App",components:{Header:x},data:function(){return{}}},C=k,_=(a("034f"),a("7496")),D=a("a75b"),P=Object(b["a"])(C,n,s,!1,null,null,null),B=P.exports;m()(P,{VApp:_["a"],VContent:D["a"]});var E=a("8c4f"),V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ff",attrs:{id:"app"}},[r("v-parallax",{staticClass:"bg",attrs:{height:"350",src:a("8372")}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("h2",{staticClass:"subheading"},[t._v("We keep you updated about various articles related to the anime.")]),r("h4",{staticClass:"title"},[t._v("Want your articles to get featured as well?")]),r("h1",{staticClass:"display-1 font-weight-bold yellow--text mb-4"},[t._v("COME JOIN OUR WORLD")]),0==t.loggedIn?r("router-link",{attrs:{to:"/register",tag:"span"}},[r("v-btn",{attrs:{color:"success"}},[t._v("GET STARTED")])],1):r("router-link",{attrs:{to:"/blog-add",tag:"span"}},[r("v-btn",{attrs:{color:"success"}},[t._v("ADD BLOGS")])],1)],1)],1)],1),r("v-app",{staticClass:"bg"},t._l(t.allBlogData,(function(e){return r("div",{key:e.id},[r("v-card",{staticClass:"mx-auto pt-1 pa-5 mt-5 mb-5 teal darken-2",attrs:{"max-width":"1000",height:"200"}},[r("router-link",{staticClass:"linkTags",attrs:{to:{path:"/blog-view/"+e.id},tag:"span",onmouseover:""}},[r("v-card-title",{staticClass:"display-1 font-weight-black pb-1",domProps:{textContent:t._s(e.title)}})],1),r("v-card-subtitle",{staticClass:"pt-0 mt-0 white--text font-italic font-weight-medium"},[t._v("-"+t._s(e.author))]),r("v-card-subtitle",{staticClass:"pb-0 pt-0"},[r("span",{staticClass:"white--text title"},[t._v(t._s(t._f("truncate")(e.content,50)))]),r("router-link",{staticClass:"title font-weight-black linkTags",attrs:{to:{path:"/blog-view/"+e.id},onmouseover:"",tag:"span"}},[t._v("Read More")])],1),r("v-card-subtitle",{staticClass:"pb-0 mb-0 white--text text-right font-weight-medium"},[t._v(t._s(t.moment(e.created_at).format("MMMM Do YYYY")))])],1)],1)})),0)],1)},S=[],A=a("c1df"),q=a.n(A);function T(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function I(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?T(a,!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var $={name:"startpage",methods:I({},Object(l["b"])(["fetchAllBlog"]),{moment:function(t){return q()(t)}}),filters:{truncate:function(t,e){return(t||"").substring(0,e)+"…   "}},computed:Object(l["c"])(["allBlogData","loggedIn"]),created:function(){this.fetchAllBlog(),this.totalPage=this.allBlogData.length}},z=$,R=(a("f076"),a("b0af")),M=a("99d9"),N=a("62ad"),Y=a("8b9c"),L=a("0fd9"),G=Object(b["a"])(z,V,S,!1,null,"08293018",null),U=G.exports;m()(G,{VApp:_["a"],VBtn:h["a"],VCard:R["a"],VCardSubtitle:M["b"],VCardTitle:M["c"],VCol:N["a"],VParallax:Y["a"],VRow:L["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"bg"},[a("div",{staticClass:"text-md-center ff"},[a("v-card",{staticClass:"px-6 py-6 mb-5 mt-12 mx-auto teal darken-2",attrs:{"max-width":"400","min-height":"400"}},[a("p",{staticClass:"display-2 mt-0 font-weight-bold white--text my-10"},[t._v("LOGIN")]),a("form",[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{dark:"",label:"Email",placeholder:"Enter your email here",outlined:"","error-messages":t.errors.collect("email"),"data-vv-name":"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:10",expression:"'required|max:10'"}],attrs:{dark:"",label:"Password",counter:10,"error-messages":t.errors.collect("password"),"data-vv-name":"password",placeholder:"Enter your password here",type:"password",outlined:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("div",{staticClass:"pa-2"},[a("v-btn",{attrs:{dark:"","x-large":""},on:{click:function(e){return t.submit()}}},[t._v("LOGIN")])],1)],1),a("div",{staticClass:"mt-3 white--text"},[t._v(" Haven't registered yet? "),a("router-link",{staticClass:"linkTags",attrs:{to:"/register",onmouseover:"",tag:"span"}},[t._v("REGISTER HERE")])],1)]),a("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("Invalid Credentials.")])],1)])},H=[],J=a("7bb1");function W(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function K(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?W(a,!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}r["a"].use(J["a"]);var Q={name:"login",$_veeValidate:{validator:"new"},data:function(){return{email:"",password:"",timeout:3e3,snackbar:!1,dictionary:{attributes:{email:"E-mail Address"},custom:{password:{required:function(){return"password can not be empty"},max:"The password field may not be greater than 10 characters"}}}}},methods:K({},Object(l["b"])(["login"]),{submit:function(){var t=this;this.$validator.validateAll().then((function(e){if(e){var a={email:t.email,password:t.password};t.login(a).then((function(){t.$router.push("/")})).catch((function(){t.loginFailed=!0,t.snackbar=!0}))}}))}})},X=Q,Z=(a("7bab"),a("2db4")),tt=a("8654"),et=Object(b["a"])(X,F,H,!1,null,"28fa3c3c",null),at=et.exports;m()(et,{VApp:_["a"],VBtn:h["a"],VCard:R["a"],VSnackbar:Z["a"],VTextField:tt["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app",{staticClass:"bgregister"},[a("div",{staticClass:"text-md-center ff"},[a("v-card",{staticClass:"px-6 py-6 mb-5 mt-12 mx-auto teal darken-2",attrs:{"max-width":"400","min-height":"400"}},[a("p",{staticClass:"display-2 mb-7 font-weight-bold white--text"},[t._v("Register")]),a("form",[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{dark:"",label:"Name",placeholder:"Enter your name here",outlined:"","error-messages":t.errors.collect("name"),"data-vv-name":"name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{label:"Email",dark:"",placeholder:"Enter your email here",outlined:"","error-messages":t.errors.collect("email"),"data-vv-name":"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:10",expression:"'required|max:10'"}],attrs:{label:"Password",dark:"",placeholder:"Enter your password here",type:"password",outlined:"",counter:10,"error-messages":t.errors.collect("password"),"data-vv-name":"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("div",{staticClass:"pa-2"},[a("v-btn",{attrs:{dark:"","x-large":""},on:{click:function(e){return t.submit()}}},[t._v("Register")])],1)],1),a("div",{staticClass:"mt-3 white--text"},[t._v(" Already a member? "),a("router-link",{staticClass:"linkTags",attrs:{onmouseover:"",to:"/login",tag:"span"}},[t._v("LOGIN HERE")])],1)])],1)])],1)},nt=[];a("b0c0");function st(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function ot(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?st(a,!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):st(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}r["a"].use(J["a"]);var it={name:"register",$_veeValidate:{validator:"new"},data:function(){return{name:"",email:"",password:"",dictionary:{attributes:{email:"E-mail Address"},custom:{password:{required:function(){return"password can not be empty"},max:"The password field may not be greater than 10 characters"}}}}},methods:ot({},Object(l["b"])(["register"]),{submit:function(){var t=this;this.$validator.validateAll().then((function(e){if(e){var a={name:t.name,email:t.email,password:t.password};t.register(a).then((function(){t.$router.push("/")}))}}))}})},ct=it,lt=(a("3184"),Object(b["a"])(ct,rt,nt,!1,null,"349b0308",null)),ut=lt.exports;m()(lt,{VApp:_["a"],VBtn:h["a"],VCard:R["a"],VTextField:tt["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"bg"},[a("div",{staticClass:"text-center ff mb-25 container"},[a("v-card",{staticClass:"px-6 py-6 mb-5 mt-12 mx-auto teal darken-2"},[a("p",{staticClass:"display-2 font-weight-bold white--text mt-0 mb-12"},[t._v("ADD BLOG")]),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:70",expression:"'required|max:70'"}],staticClass:"mb-0",attrs:{dark:"",label:"Title",placeholder:"Enter title",counter:70,outlined:"","error-messages":t.errors.collect("title"),"data-vv-name":"title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{dark:"",label:"Author","error-messages":t.errors.collect("author"),"data-vv-name":"author",required:"",placeholder:"Enter author",outlined:""},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}}),a("v-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{dark:"",label:"Description","error-messages":t.errors.collect("content"),"data-vv-name":"content",required:"",placeholder:"Description",outlined:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("div",{staticClass:"pb-2"},[a("v-btn",{staticClass:"ma-3",attrs:{large:""},on:{click:function(e){return t.submit()}}},[t._v("Save")]),a("router-link",{attrs:{to:"/blog-view",tag:"span"}},[a("v-btn",{staticClass:"ma-3",attrs:{large:"",dark:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("Cancel")])],1)],1)],1)],1)])},ft=[];function pt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function bt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?pt(a,!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):pt(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}r["a"].use(J["a"]);var vt={name:"blogadd",$_veeValidate:{validator:"new"},data:function(){return{title:"",content:"",author:"",dictionary:{attributes:{email:"E-mail Address"},custom:{title:{required:function(){return"title can not be empty"},max:"The title field may not be greater than 70 characters"}}}}},methods:bt({},Object(l["b"])(["addBlog"]),{submit:function(){var t=this;this.$validator.validateAll().then((function(e){if(e){var a={title:t.title,author:t.author,content:t.content};t.addBlog(a).then((function(){t.$router.push("/blog-view")}))}}))}}),computed:{isComplete:function(){return this.title&&this.author&&this.content}}},mt=vt,gt=(a("f56a"),a("a844")),ht=Object(b["a"])(mt,dt,ft,!1,null,"44b4495e",null),jt=ht.exports;m()(ht,{VApp:_["a"],VBtn:h["a"],VCard:R["a"],VTextField:tt["a"],VTextarea:gt["a"]});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app",{staticClass:"bg"},t._l(t.blogData,(function(e){return a("div",{key:e.id,staticClass:"ff container"},[a("v-card",{staticClass:"mx-auto pt-1 pa-5 mt-5 mb-5 teal darken-2"},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{md6:""}},[a("v-card-subtitle",{staticClass:"pb-0 mb-0 white--text font-weight-medium"},[t._v(t._s(t.moment(e.created_at).format("MMMM Do YYYY")))]),a("router-link",{staticClass:"linkTags",attrs:{to:{path:"/blog-view/"+e.id},onmouseover:"",tag:"span"}},[a("v-card-title",{staticClass:"display-1 font-weight-black pt-1 pb-0",domProps:{textContent:t._s(e.title)}})],1),a("v-card-subtitle",{staticClass:"pt-0 mt-0 white--text font-italic font-weight-medium"},[t._v("-"+t._s(e.author))]),a("v-card-subtitle",{staticClass:"pt-0"},[a("span",{staticClass:"white--text title"},[t._v(t._s(t._f("truncate")(e.content,30)))]),a("router-link",{staticClass:"title font-weight-black linkTags",attrs:{to:{path:"/blog-view/"+e.id},tag:"span",onmouseover:""}},[t._v("Read More")])],1)],1),a("v-flex",{attrs:{md6:"","d-flex":"","justify-end":""}},[a("v-card-actions",[a("router-link",{staticClass:"pr-2",attrs:{to:{path:"/blog-edit/"+e.id},tag:"span"}},[a("v-btn",{attrs:{color:"primary",fab:"",small:""}},[a("v-icon",[t._v("edit")])],1)],1),a("v-btn",{attrs:{fab:"",small:"",color:"error"},on:{click:function(a){return t.showAlert(e.id)}}},[a("v-icon",[t._v("delete")])],1)],1)],1)],1)],1)],1)})),0)],1)},yt=[];function Ot(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function xt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Ot(a,!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Ot(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var kt={name:"blogview",data:function(){return{page:1}},methods:xt({},Object(l["b"])(["fetchBlogData","deleteBlog"]),{showAlert:function(t){var e=this;this.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.value&&(e.deleteBlog(t),e.$swal.fire("Deleted!","Your file has been deleted.","success"))}))},moment:function(t){return q()(t)}}),computed:Object(l["c"])(["blogData"]),created:function(){this.fetchBlogData()},filters:{truncate:function(t,e){return(t||"").substring(0,e)+"…   "}},components:{}},Ct=kt,_t=(a("66ea"),a("0e8f")),Dt=a("a722"),Pt=Object(b["a"])(Ct,wt,yt,!1,null,"6f1272b0",null),Bt=Pt.exports;m()(Pt,{VApp:_["a"],VBtn:h["a"],VCard:R["a"],VCardActions:M["a"],VCardSubtitle:M["b"],VCardTitle:M["c"],VFlex:_t["a"],VIcon:j["a"],VLayout:Dt["a"]});var Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"bg"},t._l(t.allBlogData,(function(e){return a("div",{key:e.id},[e.id==t.routeValue?a("div",[a("v-card",{staticClass:"mx-auto ff pt-1 pa-5 mt-5 mb-5 teal darken-2",attrs:{"max-width":"1000",height:"100%"}},[a("v-card-subtitle",{staticClass:"pb-0 mb-0 text-right white--text font-weight-medium"},[t._v(t._s(t.moment(e.created_at).format("MMMM Do YYYY")))]),a("v-card-title",{staticClass:"display-2 font-weight-black pt-1 pb-0",domProps:{textContent:t._s(e.title)}}),a("v-card-subtitle",{staticClass:"pt-0 mt-0 white--text font-italic font-weight-large"},[t._v("-"+t._s(e.author))]),a("v-card-subtitle",[a("span",{staticClass:"blogContent"},[t._v(t._s(e.content))])])],1)],1):t._e()])})),0)},Vt=[];function St(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function At(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?St(a,!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):St(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var qt={name:"blogdetail",data:function(){return{routeValue:this.$route.params.id}},methods:At({},Object(l["b"])(["fetchAllBlog"]),{moment:function(t){return q()(t)}}),computed:At({},Object(l["c"])(["allBlogData"])),created:function(){this.fetchAllBlog()}},Tt=qt,It=(a("e8a6"),Object(b["a"])(Tt,Et,Vt,!1,null,"d2e305c6",null)),$t=It.exports;m()(It,{VApp:_["a"],VCard:R["a"],VCardSubtitle:M["b"],VCardTitle:M["c"]});var zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"bg"},[a("div",{staticClass:"text-center ff mb-25 container"},[a("v-card",{staticClass:"px-6 py-6 mb-5 mt-12 mx-auto teal darken-2"},[a("p",{staticClass:"display-2 font-weight-bold white--text mt-0 mb-12"},[t._v("EDIT BLOG")]),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:70",expression:"'required|max:70'"}],staticClass:"mb-0",attrs:{dark:"",label:"Title",placeholder:"Enter title",outlined:"",counter:70,"error-messages":t.errors.collect("title"),"data-vv-name":"title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{dark:"",label:"Author","error-messages":t.errors.collect("author"),"data-vv-name":"author",required:"",placeholder:"Enter author",outlined:""},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}}),a("v-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{dark:"",label:"Description","error-messages":t.errors.collect("content"),"data-vv-name":"content",required:"",placeholder:"Description",outlined:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("div",{staticClass:"pb-2"},[a("v-btn",{staticClass:"ma-3",attrs:{large:""},on:{click:function(e){return t.submit()}}},[t._v("Save")]),a("router-link",{attrs:{to:"/blog-view",tag:"span"}},[a("v-btn",{staticClass:"ma-3",attrs:{large:"",dark:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("Cancel")])],1)],1)],1)],1)])},Rt=[];function Mt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function Nt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Mt(a,!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Mt(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}r["a"].use(J["a"]);var Yt={name:"blogadd",$_veeValidate:{validator:"new"},data:function(){return{id:"",title:"",content:"",author:"",routeValue:this.$route.params.id,dictionary:{attributes:{email:"E-mail Address"},custom:{title:{required:function(){return"title can not be empty"},max:"The title field may not be greater than 70 characters"}}}}},methods:Nt({},Object(l["b"])(["editBlog","fetchBlogData"]),{submit:function(){var t=this;this.$validator.validateAll().then((function(e){if(e){var a={id:t.id,title:t.title,author:t.author,content:t.content};t.editBlog(a).then((function(){t.$router.push("/blog-view")}))}}))}}),computed:Nt({isComplete:function(){return this.title&&this.author&&this.content}},Object(l["c"])(["blogData"])),created:function(){var t=this;this.fetchBlogData();var e=this.blogData.filter((function(e){return e.id==t.$route.params.id}));console.log(e),this.id=e[0].id,this.title=e[0].title,this.author=e[0].author,this.content=e[0].content}},Lt=Yt,Gt=(a("884e"),Object(b["a"])(Lt,zt,Rt,!1,null,"7f61fc41",null)),Ut=Gt.exports;m()(Gt,{VApp:_["a"],VBtn:h["a"],VCard:R["a"],VTextField:tt["a"],VTextarea:gt["a"]}),r["a"].use(E["a"]);var Ft=[{path:"/",name:"startpage",component:U},{path:"/login",name:"login",component:at},{path:"/register",name:"register",component:ut},{path:"/blog-add",name:"blogadd",component:jt},{path:"/blog-view",name:"blogview",component:Bt},{path:"/blog-view/:id",name:"blogdetail",component:$t},{path:"/blog-edit/:id",name:"blogedit",component:Ut}],Ht=new E["a"]({routes:Ft,mode:"history",scrollBehavior:function(t,e,a){return{x:0,y:0}}}),Jt=Ht,Wt=(a("96cf"),a("89ba")),Kt=a("bc3a"),Qt=a.n(Kt),Xt=a("5609"),Zt=a.n(Xt),te={loggedIn:!1},ee={loggedIn:function(t){return t.loggedIn}},ae={login:function(){var t=Object(Wt["a"])(regeneratorRuntime.mark((function t(e,a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,Qt.a.post("".concat(Zt.a.baseUrl,"/api/v1/auth/login"),a);case 4:return n=t.sent,r("loggedIn",n.data),t.abrupt("return",n.data);case 9:throw t.prev=9,t.t0=t["catch"](1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));function e(e,a){return t.apply(this,arguments)}return e}(),register:function(){var t=Object(Wt["a"])(regeneratorRuntime.mark((function t(e,a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,Qt.a.post("".concat(Zt.a.baseUrl,"/api/v1/auth/register"),a);case 4:return n=t.sent,r("register",n.data),t.abrupt("return",n.data);case 9:throw t.prev=9,t.t0=t["catch"](1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));function e(e,a){return t.apply(this,arguments)}return e}()},re={loggedIn:function(t,e){window.localStorage.setItem("authenticated",e.token),t.loggedIn=!0},register:function(t,e){window.localStorage.setItem("authenticated",e.token),t.loggedIn=!0},logout:function(t){return t.loggedIn=!1}},ne={state:te,actions:ae,mutations:re,getters:ee},se=(a("99af"),a("c740"),a("a434"),{blogData:[],allBlogData:[],blogDetail:{},updatedData:{}}),oe={blogData:function(t){return t.blogData},allBlogData:function(t){return t.allBlogData}},ie={fetchBlogData:function(){var t=Object(Wt["a"])(regeneratorRuntime.mark((function t(e){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,r={headers:{Authorization:"Bearer "+window.localStorage.getItem("authenticated")}},t.next=5,Qt.a.get("".concat(Zt.a.baseUrl,"/api/v1/blogs"),r);case 5:n=t.sent,a("userBlogData",n.data),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));function e(e){return t.apply(this,arguments)}return e}(),addBlog:function(){var t=Object(Wt["a"])(regeneratorRuntime.mark((function t(e,a){var r,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,n={headers:{Authorization:"Bearer "+window.localStorage.getItem("authenticated")}},t.next=5,Qt.a.post("".concat(Zt.a.baseUrl,"/api/v1/blogs"),a,n);case 5:return s=t.sent,r("addBlogData",s.data),t.abrupt("return");case 10:throw t.prev=10,t.t0=t["catch"](1),t.t0;case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));function e(e,a){return t.apply(this,arguments)}return e}(),editBlog:function(){var t=Object(Wt["a"])(regeneratorRuntime.mark((function t(e,a){var r,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,n={headers:{Authorization:"Bearer "+window.localStorage.getItem("authenticated")}},t.next=5,Qt.a.put("".concat(Zt.a.baseUrl,"/api/v1/blogs/").concat(a.id),a,n);case 5:return s=t.sent,r("updateData",s.data),console.log(s.data,"res"),t.abrupt("return");case 11:throw t.prev=11,t.t0=t["catch"](1),t.t0;case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));function e(e,a){return t.apply(this,arguments)}return e}(),deleteBlog:function(){var t=Object(Wt["a"])(regeneratorRuntime.mark((function t(e,a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n={headers:{Authorization:"Bearer "+window.localStorage.getItem("authenticated")}},t.next=4,Qt.a.delete("".concat(Zt.a.baseUrl,"/api/v1/blogs/").concat(a),n);case 4:r("removeBlog",a);case 5:case"end":return t.stop()}}),t)})));function e(e,a){return t.apply(this,arguments)}return e}(),fetchAllBlog:function(){var t=Object(Wt["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,t.next=4,Qt.a.get("".concat(Zt.a.baseUrl,"/api/v1/allblogs"));case 4:r=t.sent,a("allBlogData",r.data),t.next=11;break;case 8:throw t.prev=8,t.t0=t["catch"](1),t.t0;case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));function e(e){return t.apply(this,arguments)}return e}()},ce={userBlogData:function(t,e){return t.blogData=e},addBlogData:function(t,e){return t.blogData.push(e)},updateData:function(t,e){var a=t.blogData.findIndex((function(t){return t.id===e.id}));-1!=a&&t.blogData.splice(a,1,e)},removeBlog:function(t,e){var a=t.blogData.findIndex((function(t){return t.id===e}));t.blogData.splice(a,1)},allBlogData:function(t,e){return t.allBlogData=e}},le={state:se,actions:ie,mutations:ce,getters:oe},ue=a("0e44"),de=a("a78e");r["a"].use(l["a"]);var fe=new l["a"].Store({plugins:[Object(ue["a"])({getState:function(t){return de["getJSON"](t)},setState:function(t,e){return de["set"](t,e,{expires:3,secure:!0})}})],modules:{auth:ne,blog:le}}),pe=a("f309");r["a"].use(pe["a"]);var be=new pe["a"]({icons:{iconfont:"mdi"}}),ve=(a("d1e78"),a("5886"));a("4413");r["a"].use(ve["a"]),r["a"].config.productionTip=!1,new r["a"]({router:Jt,store:fe,vuetify:be,render:function(t){return t(B)}}).$mount("#app")},"5b16":function(t,e,a){},"66ea":function(t,e,a){"use strict";var r=a("6897"),n=a.n(r);n.a},6897:function(t,e,a){},"7bab":function(t,e,a){"use strict";var r=a("ef0f"),n=a.n(r);n.a},8372:function(t,e,a){t.exports=a.p+"img/image8.efbb7bc8.jpg"},"884e":function(t,e,a){"use strict";var r=a("ad99"),n=a.n(r);n.a},"8baf":function(t,e,a){"use strict";var r=a("14ea"),n=a.n(r);n.a},ad99:function(t,e,a){},bf27:function(t,e,a){},e8a6:function(t,e,a){"use strict";var r=a("5b16"),n=a.n(r);n.a},ef0f:function(t,e,a){},f076:function(t,e,a){"use strict";var r=a("4da5"),n=a.n(r);n.a},f56a:function(t,e,a){"use strict";var r=a("bf27"),n=a.n(r);n.a}});
//# sourceMappingURL=app.0e69f9e9.js.map