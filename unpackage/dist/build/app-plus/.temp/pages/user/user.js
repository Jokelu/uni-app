require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{20:function(t,e,s){"use strict";var a=n(s(1)),i=n(s(21));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},21:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(23),i=s.n(a),n=s(24);var c=function(t){s(22)},l=s(0)(i.a,n.a,c,null,null);e.default=l.exports},22:function(t,e){},23:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{editUserInfo:function(){t.navigateTo({url:"personinfo/personinfo"})},toSelect:function(){t.navigateTo({url:"collect/collect"})},toAbout:function(){t.navigateTo({url:"aboutme/aboutme"})}}}}).call(e,s(3).default)},24:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"user"},[s("view",{staticClass:"userinfo"},[s("view",{staticClass:"avatar"}),s("view",{staticClass:"user-data"},[s("view",{staticClass:"name"},[t._v("测试")]),s("view",{staticClass:"edit",attrs:{eventid:"rYh-0"},on:{click:t.editUserInfo}},[t._v("查看并编辑个人资料")])])]),s("view",{},[s("view",{staticClass:"cell",staticStyle:{margin:"10px 0"},attrs:{eventid:"BL3-1"},on:{click:t.toSelect}},[t._m(0),s("image",{attrs:{src:"../../static/right.png",alt:""}})]),s("view",{staticClass:"cell",staticStyle:{"margin-bottom":"1px"},attrs:{eventid:"lYK-2"},on:{click:t.toAbout}},[t._m(1),s("image",{attrs:{src:"../../static/right.png",alt:""}})]),t._m(2)]),s("button",{staticClass:"sing-out"},[t._v("退出登录")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"cell_left"},[e("image",{attrs:{src:"../../static/shoucang.png"}}),e("text",[this._v("收藏的房源")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"cell_left"},[e("image",{attrs:{src:"../../static/guanyuwomen.png",alt:""}}),e("text",[this._v("关于我们")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"cell"},[e("view",{staticClass:"cell_left"},[e("image",{attrs:{src:"../../static/kefu.png",alt:""}}),e("text",[this._v("客服电话")])]),e("text",[this._v("010-5612345")])])}]};e.a=a}},[20]);