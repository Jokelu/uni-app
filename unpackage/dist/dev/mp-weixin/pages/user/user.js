require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{19:function(t,e,s){"use strict";var i=n(s(1)),a=n(s(20));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},20:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(22),a=s.n(i),n=s(23),l=!1;var c=function(t){l||s(21)},o=s(0)(a.a,n.a,c,null,null);o.options.__file="..\\..\\..\\..\\..\\code\\uniapp\\house\\pages\\user\\user.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] user.vue: functional components are not supported with templates, they should use render functions."),e.default=o.exports},21:function(t,e){},22:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{editUserInfo:function(){t.navigateTo({url:"personinfo/personinfo"})},toSelect:function(){t.navigateTo({url:"collect/collect"})},toAbout:function(){t.navigateTo({url:"aboutme/aboutme"})},login:function(){t.navigateTo({url:"login/login"})}}}}).call(e,s(30).default)},23:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"user"},[s("view",{staticClass:"userinfo"},[s("view",{staticClass:"avatar"}),s("view",{staticClass:"user-data"},[s("view",{staticClass:"name"},[t._v("测试")]),s("view",{staticClass:"edit",attrs:{eventid:"JtS-0"},on:{click:t.editUserInfo}},[t._v("查看并编辑个人资料")])])]),s("view",{},[s("view",{staticClass:"cell",staticStyle:{margin:"10px 0"},attrs:{eventid:"ljH-1"},on:{click:t.toSelect}},[t._m(0),s("image",{attrs:{src:"../../static/right.png",alt:""}})]),s("view",{staticClass:"cell",staticStyle:{"margin-bottom":"1px"},attrs:{eventid:"TCy-2"},on:{click:t.toAbout}},[t._m(1),s("image",{attrs:{src:"../../static/right.png",alt:""}})]),t._m(2)]),s("button",{staticClass:"sing-out",attrs:{eventid:"vUN-3"},on:{click:t.login}},[t._v("登录")])],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"cell_left"},[e("image",{attrs:{src:"../../static/shoucang.png"}}),e("text",[this._v("收藏的房源")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"cell_left"},[e("image",{attrs:{src:"../../static/guanyuwomen.png",alt:""}}),e("text",[this._v("关于我们")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"cell"},[e("view",{staticClass:"cell_left"},[e("image",{attrs:{src:"../../static/kefu.png",alt:""}}),e("text",[this._v("客服电话")])]),e("text",[this._v("010-5612345")])])}]};e.a=a}},[19]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map