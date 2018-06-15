/*! NutUI v1.2.7 Fri Jun 15 2018 19:38:21 GMT+0800 (CST) */
webpackJsonpnutui([62],{1005:function(i,s,e){(i.exports=e(2)()).push([i.i,"\n#mySwiperDemo .nut-swiper-silde {\n  color: #fff;\n  font-size: 24px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: gray;\n}\n#mySwiperDemo .nut-swiper-silde:nth-child(2n) {\n  background-color: red;\n}\n#mySwiperDemo .nut-swiper-silde:nth-child(2n+1) {\n  background-color: green;\n}\n#mySwiperDemo #nutSwiperMore .nut-swiper-silde > div {\n  background-color: #fff;\n  width: 30%;\n  margin: 0 1.6%;\n  color: #333;\n  height: 70%;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n#mySwiperDemo #nutSwiperLazyLoad .nut-swiper-silde > div {\n  background-color: #fff;\n  color: #333;\n  width: 30%;\n  margin: 0 1.6%;\n}\n#mySwiperDemo #nutSwiperLazyLoad .nut-swiper-silde > div img {\n    max-width: 100%;\n}\n#mySwiperDemo #nutSwiperLazyLoad .nut-swiper-silde > div p {\n    font-size: 12px;\n    line-height: 18px;\n    height: 36px;\n    overflow: hidden;\n}\n#mySwiperDemo #nutSwiperFree .nut-swiper-silde {\n  width: 100px;\n  font-size: 12px;\n  background-color: #ccc;\n  margin-right: 10px;\n}\n#mySwiperDemo #fullScreen {\n  height: 600px;\n}\n#mySwiperDemo #fullScreen .nut-swiper-silde {\n    height: 100%;\n    width: 100%;\n}\n",""])},1114:function(i,s){i.exports={render:function(){var i=this,s=i.$createElement,e=i._self._c||s;return e("div",{attrs:{id:"mySwiperDemo"}},[e("nut-demoheader",{attrs:{name:i.$route.name}}),i._v(" "),e("p",[i._v("横向无缝切换")]),i._v(" "),e("nut-swiper",{ref:"demo1",attrs:{"pagination-visible":!0,direction:"horizontal"},on:{slideChangeEnd:i.slideChangeEnd}},i._l(i.dataItem,function(s){return e("div",{key:s.name,staticClass:"nut-swiper-silde"},[e("span",[i._v("page"+i._s(s.name))])])})),i._v(" "),e("p",[i._v("横向切换")]),i._v(" "),e("nut-swiper",{attrs:{"pagination-visible":!0,performanceMode:!0,direction:"horizontal"}},[e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 1")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 2")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 3")])])]),i._v(" "),e("p",[i._v("横向循环切换")]),i._v(" "),e("nut-swiper",{attrs:{"pagination-visible":!0,loop:!0,direction:"horizontal"},on:{slideChangeEnd:i.slideChangeEnd,slideChangeStart:i.slideChangeStart}},[e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 1")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 2")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 3")])])]),i._v(" "),e("p",[i._v("竖向循环切换")]),i._v(" "),e("nut-swiper",{attrs:{"pagination-visible":!1,autoPlay:5e3,direction:"vertical"}},[e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 1")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 2")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 3")])])]),i._v(" "),e("p",[i._v("竖向切换")]),i._v(" "),e("nut-swiper",{attrs:{id:"fullScreen","pagination-visible":!1,performanceMode:!0,direction:"vertical"},on:{slideChangeEnd:i.slideChangeEnd,slideChangeStart:i.slideChangeStart}},[e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 1"+i._s(this.move))])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 2"+i._s(this.move))])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 3"+i._s(this.move))])])]),i._v(" "),e("p",[i._v("多层切换")]),i._v(" "),e("nut-swiper",{attrs:{"pagination-visible":!0,direction:"horizontal",id:"nutSwiperMore"}},[e("div",{staticClass:"nut-swiper-silde"},[e("div",[i._v("page 1")]),i._v(" "),e("div",[i._v("page 2")]),i._v(" "),e("div",[i._v("page 3")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("div",[i._v("page 4")]),i._v(" "),e("div",[i._v("page 5")]),i._v(" "),e("div",[i._v("page 6")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("div",[i._v("page 7")]),i._v(" "),e("div",[i._v("page 8")]),i._v(" "),e("div",[i._v("page 9")])])]),i._v(" "),e("p",[i._v("lazyLoad切换")]),i._v(" "),e("nut-swiper",{attrs:{"pagination-visible":!1,direction:"horizontal",id:"nutSwiperLazyLoad",lazyLoad:!0,lazyLoadingUrl:"//static.360buyimg.com/exploit/mplus/2.1.81/css/i/loading.gif",lazyLoaderrorUrl:""}},[e("div",{staticClass:"nut-swiper-silde"},[e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t2029/269/1342378600/94347/c088416b/56581d53Ne97b6442.jpg"}}),i._v(" "),e("p",[i._v("牙膏牙膏吃牙膏")])]),i._v(" "),e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t5944/284/7637282290/291307/34ae9129/597ed721N4d9a0e73.jpg"}}),i._v(" "),e("p",[i._v("纯正白砂糖，味甜")])]),i._v(" "),e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t9604/129/1427755970/357543/ba77f0be/59e071fcN4a3e077d.jpg"}}),i._v(" "),e("p",[i._v("妙洁 保鲜袋背心型食品袋中号200只装 可提携易打结")])])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t3826/185/3277282028/320781/8fbf1015/587c2fcaNc3741a59.jpg"}}),i._v(" "),e("p",[i._v("全棉灭菌免换洗")])]),i._v(" "),e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t6028/28/1573357626/422743/9b98f679/5934c6c9N03afe631.jpg"}}),i._v(" "),e("p",[i._v("锁定厨房油污0")])]),i._v(" "),e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t4792/130/2443359129/122816/5f47cbd2/58ff20ecN49be8a01.jpg"}}),i._v(" "),e("p",[i._v("训练宝宝咀嚼力")])])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t13924/18/765396019/118800/71bda7ea/5a13878fN35292d9b.jpg"}}),i._v(" "),e("p",[i._v("得力(deli)S01黑色0.5mm经典办公按动中性笔水性笔子弹头签字笔 12支/盒")])]),i._v(" "),e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t4231/114/1373063995/311341/1feeaaad/58c1000cN5c448e8d.jpg"}}),i._v(" "),e("p",[i._v("台湾蛋黄味糙米卷")])]),i._v(" "),e("div",[e("img",{staticClass:"nut-swiper-lazyload",attrs:{"data-src":"//img11.360buyimg.com/n3/s300x300_jfs/t2005/197/1846980340/247407/fcdbd278/56e0ceffN1d106bdb.jpg"}}),i._v(" "),e("p",[i._v("柔韧耐用，保鲜安全")])])])]),i._v(" "),e("p",[i._v("freeMode 不自动贴合")]),i._v(" "),e("nut-swiper",{attrs:{direction:"horizontal",freeMode:!0,id:"nutSwiperFree"}},[e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 1")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 2")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 3")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 4")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 5")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 6")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 1")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 2")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 3")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 4")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 5")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 6")])])]),i._v(" "),e("p",[i._v("类似日历、地址，滚动范围超过一个silde 应该停留在当前手指停的地方，而不是只滚动一屏")]),i._v(" "),e("nut-swiper",{attrs:{direction:"horizontal",id:"nutSwiperFree",type:"multiple"}},[e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 1")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 2")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 3")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 4")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 5")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 6")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 1")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 2")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 3")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 4")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 5")])]),i._v(" "),e("div",{staticClass:"nut-swiper-silde"},[e("span",[i._v("page 6")])])])],1)},staticRenderFns:[]}},1202:function(i,s,e){var t=e(1005);"string"==typeof t&&(t=[[i.i,t,""]]),t.locals&&(i.exports=t.locals);e(3)("2619ea52",t,!0,{})},846:function(i,s,e){var t=e(1)(e(941),e(1114),function(i){e(1202)},null,null);i.exports=t.exports},941:function(i,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{dataItem:null,move:1}},methods:{slideChangeStart:function(i,s,e){console.log(e)},slideChangeEnd:function(i,s){console.log(i)}},mounted:function(){var i=this;setTimeout(function(){i.dataItem=[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}],i.$refs.demo1.updateSlidesBindEvent(2)},300)}}}});