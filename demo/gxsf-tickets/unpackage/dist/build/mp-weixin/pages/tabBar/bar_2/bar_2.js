(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/bar_2/bar_2"],{"0c3e":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"1d1a":function(t,e,n){"use strict";n.r(e);var o=n("0c3e"),a=n("3068");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("af0d");var r,s=n("f0c5"),i=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=i.exports},3068:function(t,e,n){"use strict";n.r(e);var o=n("7612"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=a.a},"3ae3":function(t,e,n){},7612:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{login:!1,avatarUrl:"../../../static/logo.png",userInfo:""}},methods:{toNewForm:function(e){this.login?t.navigateTo({url:e}):t.showToast({title:"请先登录",duration:2e3,mask:!0,image:"../../../static/messy/cancel.png"})},exit_login:function(){t.removeStorage({key:"tick_user"}),this.login=!1,this.userInfo=""},goLogin:function(){this.login?t.navigateTo({url:"/pages/user/personal/personal"}):(console.log("点击前往登录"),t.navigateTo({url:"/pages/lgin/lgin"}))},load_user:function(){var e=this;t.getStorage({key:"tick_user",success:function(n){e.userInfo=n.data.user_list[0].user,t.request({url:"http://localhost:5000/user-login",method:"POST",data:{number:e.userInfo.user_number,password:e.userInfo.user_password},success:function(n){var o=n.data;console.log(typeof n.data),"string"===typeof n.data?t.showModal({title:"提示",content:n.data}):(t.setStorageSync("tick_user",o),e.userInfo=o.user_list[0].user,e.userInfo.user_avatar="http://localhost:5000/find-file?path="+e.userInfo.user_avatar,e.login=!0)}}),console.log(e.userInfo.user_name)}})}},onPullDownRefresh:function(){this.load_user(),setTimeout((function(){t.stopPullDownRefresh()}),1e3)},onLoad:function(){this.load_user()}};e.default=n}).call(this,n("543d")["default"])},af0d:function(t,e,n){"use strict";var o=n("3ae3"),a=n.n(o);a.a},e727:function(t,e,n){"use strict";(function(t){n("1890");o(n("66fd"));var e=o(n("1d1a"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["e727","common/runtime","common/vendor"]]]);