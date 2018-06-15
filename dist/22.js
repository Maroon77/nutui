/*! NutUI v1.2.7 Fri Jun 15 2018 19:38:21 GMT+0800 (CST) */
webpackJsonpnutui([22],{1055:function(n,t,e){(n.exports=e(2)()).push([n.i,"",""])},1136:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("nut-docheader",{attrs:{name:n.$route.name,chName:n.$route.params.chnName,type:"Component",desc:"下拉选择面板，从页面底部弹出，支持多级联动选择及异步请求。",showQrCode:!0}}),n._v(" "),e("h5",[n._v("示例")]),n._v(" "),e("h6",[n._v("默认用法")]),n._v(" "),e("nut-codebox",{attrs:{code:n.demo.code1,imgUrl:["../asset/img/demo/select1.png"]}}),n._v(" "),e("nut-codebox",{attrs:{code:n.demo.code11}}),n._v(" "),e("h6",[n._v("显示内容自定义Slot")]),n._v(" "),e("nut-codebox",{attrs:{code:n.demo.code2,imgUrl:["../asset/img/demo/select2.png"]}}),n._v(" "),e("nut-codebox",{attrs:{code:n.demo.code22}}),n._v(" "),e("h6",[n._v("异步加载")]),n._v(" "),e("nut-codebox",{attrs:{code:n.demo.code3,imgUrl:["../asset/img/demo/select3.png"]}}),n._v(" "),e("nut-codebox",{attrs:{code:n.demo.code33}}),n._v(" "),e("h5",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),e("h5",[n._v("Slot")]),n._v(" "),n._m(1),n._v(" "),e("h5",[n._v("Events")]),n._v(" "),n._m(2),n._v(" "),e("h5",[n._v("Methods")]),n._v(" "),n._m(3)],1)},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"tbl-wrapper"},[e("table",{staticClass:"u-full-width"},[e("thead",[e("tr",[e("th",[n._v("参数")]),n._v(" "),e("th",[n._v("说明")]),n._v(" "),e("th",[n._v("类型")]),n._v(" "),e("th",[n._v("默认值")]),n._v(" "),e("th",[n._v("可选值")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("data")]),n._v(" "),e("td",[n._v('显示数据，类型为[{"n": "1","s":[{"n","2"}]}]')]),n._v(" "),e("td",[n._v("Array")]),n._v(" "),e("td",[n._v("--")]),n._v(" "),e("td",[n._v("--")])]),n._v(" "),e("tr",[e("td",[n._v("selected")]),n._v(" "),e("td",[n._v("选中值，每一列的显示值已‘-’分割，如设置的值本列未找到，则默认第一个，例“2017-1-2”")]),n._v(" "),e("td",[n._v("String")]),n._v(" "),e("td",[n._v("--")]),n._v(" "),e("td",[n._v("--")])]),n._v(" "),e("tr",[e("td",[n._v("nodeKey")]),n._v(" "),e("td",[n._v('跟数据节点值，如传入数据为[{"n":"1","b":"2"}],nodeKey配置为n，则列表显示1')]),n._v(" "),e("td",[n._v("String")]),n._v(" "),e("td",[n._v("--")]),n._v(" "),e("td",[n._v("n")])]),n._v(" "),e("tr",[e("td",[n._v("childKey")]),n._v(" "),e("td",[n._v('子数据节点值，如传入数据为[{"n":"1","s":[{"n","1"}]}],childKey配置为s，则子列表为s数据')]),n._v(" "),e("td",[n._v("String")]),n._v(" "),e("td",[n._v("--")]),n._v(" "),e("td",[n._v("s")])]),n._v(" "),e("tr",[e("td",[n._v("async")]),n._v(" "),e("td",[n._v("是否支持异步，当为true时，data配置一层即可，列拖动时会返回对应索引，可动态添加后面的子列")]),n._v(" "),e("td",[n._v("Boolean")]),n._v(" "),e("td",[n._v("--")]),n._v(" "),e("td",[n._v("false")])])])])])},function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"tbl-wrapper"},[t("table",{staticClass:"u-full-width"},[t("thead",[t("tr",[t("th",[this._v("名称")]),this._v(" "),t("th",[this._v("说明")])])]),this._v(" "),t("tbody",[t("tr",[t("td",[this._v("显示Slot")]),this._v(" "),t("td",[this._v("默认显示的自定义样式Slot")])])])])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"tbl-wrapper"},[e("table",{staticClass:"u-full-width"},[e("thead",[e("tr",[e("th",[n._v("事件名")]),n._v(" "),e("th",[n._v("说明")]),n._v(" "),e("th",[n._v("回调参数")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("slideEnd")]),n._v(" "),e("td",[n._v("当异步开启时，每当滑动结束时触发")]),n._v(" "),e("td",[n._v("[数据数据],数据索引对应列（用于更新数据）")])]),n._v(" "),e("tr",[e("td",[n._v("change")]),n._v(" "),e("td",[n._v("点击确认时触发")]),n._v(" "),e("td",[n._v("[每列选中的对象值]")])])])])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"tbl-wrapper"},[e("table",{staticClass:"u-full-width"},[e("thead",[e("tr",[e("th",[n._v("事件名")]),n._v(" "),e("th",[n._v("说明")]),n._v(" "),e("th",[n._v("传入参数")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("updateSelect")]),n._v(" "),e("td",[n._v("当异步开启时，动态添加第二列时调用")]),n._v(" "),e("td",[n._v("符合列表数据结构（nodeKey与childKey）")])])])])])}]}},1252:function(n,t,e){var d=e(1055);"string"==typeof d&&(d=[[n.i,d,""]]),d.locals&&(n.exports=d.locals);e(3)("57804655",d,!0,{})},887:function(n,t,e){var d=e(1)(e(985),e(1136),function(n){e(1252)},null,null);n.exports=d.exports},985:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d,s=e(20);(d=s)&&d.__esModule;t.default={data:function(){return{demo:{code1:'<nut-select class="demo1-select" \n:selected="demo1.selected" \n:data="demo1.data" \n@change="demo1Change">\n    {{demo1.selected}}\n</nut-select>',code11:'export default {\n    data(){\n        return{\n          demo1: {\n              data: [\n                {"n": "北京", "s": [{"n": "海淀区"},{"n": "通州区"}]},\n                {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},\n                {"n": "河北省", "s": [{"n": "石家庄市", "s": [{"n": "城东区"},{"n": "城西区"}]},{"n":"秦皇岛市"}]},\n                {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},\n                {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},\n                {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},\n                {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},\n                {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},\n                {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]}\n              ],\n              selected: \'河北省-石家庄市-城东区\'\n          }\n        }\n    }   \n}',code2:'\n          <nut-select\n  :selected="demo2.selected" \n  :data="demo2.data"\n  @change="demo2Change"\n  class="demo-select">\n  <slot><a class="button button-primary">{{demo2.selected}}</a></slot>\n</nut-select>',code22:'export default {\n    data(){\n        return{\n            demo2: {\n                selected: \'2018-11\',\n                data: [\n                    {"n":"2017","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},\n                    {"n":"2018","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},\n                    {"n":"2019","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},\n                    {"n":"2020","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},\n                    {"n":"2021","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},\n                    {"n":"2022","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},\n                    {"n":"2023","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]}\n                ]\n            }\n        }\n    }   \n}',code3:'    \n<nut-select\n  :selected="demo3.selected" \n  :data="demo3.data"\n  :async = true\n  @change="demo3Change"\n  @slideEnd="slideEnd"\n  class="demo-select">\n  <slot><a class="button button-primary">{{demo3.selected}}</a></slot>\n</nut-select>',code33:'export default {\n    data(){\n        return{\n            demo3: {\n              selected: \'1\',\n              data: [\n                {"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"}\n              ]\n            }\n        }\n    }   \n}'}}},methods:{}}}});