webpackJsonp([21],{"0pkM":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.purchase-list[data-v-2afd07bd] {\n  margin: 30px;\n}\n.purchase-text[data-v-2afd07bd] {\n  font-size: 30px;\n  line-height: 46px;\n}\n",""])},"68nN":function(t,e,n){var a=n("0pkM");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("rjj0").default)("466967a2",a,!0,{})},oHZd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),l=n.n(a),s=n("NYxO"),i=n("cJyC"),o={data:function(){return{list:[]}},created:function(){this.getList()},computed:l()({},Object(s.b)(["basicId","phone","roles"])),methods:{getList:function(){var t=this;Object(i.d)(this.basicId,this.roles[0]).then(function(e){t.list=e.list})},goDetail:function(t){}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"purchase-list"},[n("el-table",{attrs:{data:t.list}},[n("el-table-column",{attrs:{align:"center",label:"标题",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.title))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"内容",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.content))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"联系电话",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.telephone))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){t.goDetail(e.row.purchasesId)}}},[t._v("详情")])]}}])})],1)],1)},staticRenderFns:[]};var c=n("VU/8")(o,r,!1,function(t){n("68nN")},"data-v-2afd07bd",null);e.default=c.exports}});