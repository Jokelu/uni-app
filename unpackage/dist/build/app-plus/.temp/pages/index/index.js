require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],[,,,,,,,,,,function(t,e,s){"use strict";var i=n(s(1)),a=n(s(11));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(13),a=s.n(i),n=s(14);var c=function(t){s(12)},l=s(0)(a.a,n.a,c,null,null);e.default=l.exports},function(t,e){},function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{title:"Hello",shopList:[{name:"角门东"},{name:"角门东"},{name:"角门东"},{name:"角门东"},{name:"角门东"},{name:"角门东"}]}},onLoad:function(){},methods:{toDetail:function(){t.navigateTo({url:"housedetail/housedetail"})}}}}).call(e,s(3).default)},function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[t._m(0),s("view",{staticClass:"shop_list"},t._l(t.shopList,function(e,i){return s("view",{key:i,staticClass:"shop_item",attrs:{eventid:"zf3-0-"+i},on:{click:t.toDetail}},[s("image",{staticClass:"item_img",attrs:{src:"../../static/shop.jpg"}}),t._m(1,!0)])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"hot"},[e("text",{staticClass:"hot_text"},[this._v("热门推荐")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"item_info"},[e("view",{staticClass:"item_name"},[this._v("河大北区商业街")]),e("view",{staticClass:"item_price"},[e("text",{staticClass:"priceCount"},[this._v("1200")]),this._v("元/月起")]),e("view",{staticClass:"item_point"},[e("text",[this._v("80")]),this._v("m2"),e("text",[this._v(" | ")]),this._v(" 北市-北市区周边")])])}]};e.a=i}],[10]);