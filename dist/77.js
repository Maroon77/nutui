/*! NutUI v1.2.7 Fri Jun 15 2018 19:38:21 GMT+0800 (CST) */
webpackJsonpnutui([77],{1083:function(t,a,s){(t.exports=s(2)()).push([t.i,"",""])},1182:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nut-demoheader",{attrs:{name:t.$route.name}}),t._v(" "),s("nut-mask",{attrs:{visible:t.maskShow},on:{"update:visible":function(a){t.maskShow=a}}}),t._v(" "),s("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:function(a){t.maskShow=!0}}},[t._v("基础示例")]),t._v(" "),s("nut-mask",{attrs:{visible:t.maskShow2,color:"rgba(255,200,200,.6)"},on:{"update:visible":function(a){t.maskShow2=a}}}),t._v(" "),s("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:function(a){t.maskShow2=!0}}},[t._v("自定义颜色与透明度")]),t._v(" "),s("nut-mask",{attrs:{visible:t.maskShow3,closeOnClickModal:!1},on:{"update:visible":function(a){t.maskShow3=a},"open-mask":t.autoClose}}),t._v(" "),s("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:function(a){t.maskShow3=!0}}},[t._v("禁止点击关闭，4秒后自动关闭")]),t._v(" "),s("nut-mask",{attrs:{visible:t.maskShow4,fade:!0},on:{"update:visible":function(a){t.maskShow4=a}}}),t._v(" "),s("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:function(a){t.maskShow4=!0}}},[t._v("渐隐渐现")]),t._v(" "),s("nut-mask",{attrs:{visible:t.maskShow5},on:{"update:visible":function(a){t.maskShow5=a},"open-mask":t.maskOpen,"close-mask":t.maskClose}}),t._v(" "),s("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:function(a){t.maskShow5=!0}}},[t._v("事件")])],1)},staticRenderFns:[]}},1280:function(t,a,s){var o=s(1083);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);s(3)("717ce8ef",o,!0,{})},830:function(t,a,s){var o=s(1)(s(925),s(1182),function(t){s(1280)},null,null);t.exports=o.exports},925:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{maskShow:!1,maskShow2:!1,maskShow3:!1,maskShow4:!1,maskShow5:!1}},methods:{autoClose:function(){var t=this;setTimeout(function(){t.maskShow3=!1},4e3)},maskOpen:function(){alert("show")},maskClose:function(){alert("hide")}}}}});