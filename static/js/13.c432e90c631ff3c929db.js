webpackJsonp([13],{"0sMg":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Dd8w"),c=a.n(r),n=a("NYxO"),o={components:{ContractForm:a("fzU9").a},computed:c()({},Object(n.b)(["roles"]))},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("contract-form",{attrs:{type:this.roles[0],isEdit:!0}})],1)},staticRenderFns:[]},i=a("VU/8")(o,s,!1,null,null,null);e.default=i.exports},MuGk:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.pscontract-form[data-v-0cd45811] {\n  padding: 10px 45px 20px 50px;\n}\n.el-input[data-v-0cd45811] {\n  width: 100px;\n}\n\n",""])},UNsD:function(t,e,a){var r=a("MuGk");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a("rjj0").default)("b8dd4676",r,!0,{})},fzU9:function(t,e,a){"use strict";var r=a("Dd8w"),c=a.n(r),n=a("NYxO"),o=a("+mJe"),s=a("cs1d"),i={components:{MDinput:o.a},props:{type:String,isEdit:{type:Boolean,default:!1}},data:function(){return{msg:"立即创建",contractForm:{title:sessionStorage.getItem("ncpName")+"购销合同书",alipayAccount:"",contractId:"",createTime:"",mjBasicId:"",ncpBasicId:sessionStorage.getItem("ncpBasicId"),nhBasicId:sessionStorage.getItem("nhBasicId"),prePayment:"",purchasePrice:0,purchaseQuantity:"",purchaseUnit:sessionStorage.getItem("unit"),purchaserName:"",purchasesLiquidatedDamages:"",receivingAddress:"",salesLiquidatedDamages:"",salesName:"",statu:0,other:"",d1:"",d2:"",perPrice:""}}},created:function(){var t=this;if(this.isEdit){this.msg="保存";var e=this.$route.params.id;Object(s.b)(e).then(function(e){for(var a in t.contractForm)e[a]&&(t.contractForm[a]=e[a])})}},computed:c()({},Object(n.b)(["basicId"]),{calculateTotal:function(){return this.contractForm.perPrice*this.contractForm.purchaseQuantity}}),methods:{onSubmit:function(){var t=this;"MJ"===this.type?(this.contractForm.mjBasicId=this.basicId,this.contractForm.purchasePrice=this.calculateTotal,console.log(this.contractForm),Object(s.a)(this.contractForm).then(function(e){t.$message({message:"合同创建成功",type:"success"}),t.$router.push({name:"contractList"})}),console.log("submit!")):Object(s.c)(this.contractForm).then(function(e){t.$message({message:"填写完成",type:"success"}),t.$router.push({name:"contractList"})})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pscontract-form"},[a("h1",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.contractForm.title))]),t._v(" "),a("el-form",{ref:"contractForm",attrs:{model:t.contractForm}},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:12}},[a("el-form-item",[a("MDinput",{attrs:{name:"name",required:"",maxlength:100},model:{value:t.contractForm.purchaserName,callback:function(e){t.$set(t.contractForm,"purchaserName",e)},expression:"contractForm.purchaserName"}},[t._v("\n            收购方(以下简称甲方)\n          ")])],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",[a("MDinput",{attrs:{name:"name",required:"",maxlength:100},model:{value:t.contractForm.salesName,callback:function(e){t.$set(t.contractForm,"salesName",e)},expression:"contractForm.salesName"}},[t._v("\n            供货方(以下简称乙方)\n          ")])],1)],1)],1),t._v(" "),a("el-form-item",[a("p",[t._v("\n        为了保护甲乙双方合法权益，提高双方的经济效益，明确法律责任，依据《中华人民共和国合同法》、《中华人民农产品质量安全法》和相关法律法规，经甲乙双方在平等自愿、互惠互利、诚实守信的原则上，签订\n        "),a("el-input",{attrs:{size:"mini",placeholder:""},model:{value:t.contractForm.title,callback:function(e){t.$set(t.contractForm,"title",e)},expression:"contractForm.title"}}),t._v(" 购销合同。其条款如下：\n      ")],1)]),t._v(" "),a("el-form-item",{attrs:{label:"第一条 甲乙双方的责任"}},[a("br"),t._v(" "),a("p",[t._v("一、乙方所供应的产品，必须达到卫生要求和质量标准，如出现产品质量问题，甲方无条件退货或换货。")]),t._v(" "),a("p",[t._v("二、乙方按甲方所需产品，提供保质、保量、安全的产品。甲方应该按双方约定的数量全部收购。")]),t._v(" "),a("p",[t._v("三、产品数量合计\n        "),a("el-input",{attrs:{size:"mini"},model:{value:t.contractForm.purchaseQuantity,callback:function(e){t.$set(t.contractForm,"purchaseQuantity",e)},expression:"contractForm.purchaseQuantity"}}),t._v(" "+t._s(t.contractForm.purchaseUnit)+"，每"+t._s(t.contractForm.purchaseUnit)+"\n        "),a("el-input",{attrs:{size:"mini"},model:{value:t.contractForm.perPrice,callback:function(e){t.$set(t.contractForm,"perPrice",e)},expression:"contractForm.perPrice"}}),t._v(" 元，以上金额合计 "),a("span",{staticStyle:{"font-weight":"bold",color:"red"}},[t._v(t._s(t.calculateTotal))]),t._v(" 元。预付金为\n        "),a("el-input",{attrs:{size:"mini"},model:{value:t.contractForm.prePayment,callback:function(e){t.$set(t.contractForm,"prePayment",e)},expression:"contractForm.prePayment"}}),t._v(" 元。")],1)]),t._v(" "),a("el-form-item",{attrs:{label:"第二条 违约责任"}},[a("br"),t._v(" "),a("p",[t._v("乙方违反合同，应向甲方支付违约金\n        "),a("el-input",{attrs:{size:"mini"},model:{value:t.contractForm.salesLiquidatedDamages,callback:function(e){t.$set(t.contractForm,"salesLiquidatedDamages",e)},expression:"contractForm.salesLiquidatedDamages"}}),t._v(" 元；甲方违反合同，应向乙方支付违约金\n        "),a("el-input",{attrs:{size:"mini"},model:{value:t.contractForm.purchasesLiquidatedDamages,callback:function(e){t.$set(t.contractForm,"purchasesLiquidatedDamages",e)},expression:"contractForm.purchasesLiquidatedDamages"}}),t._v(" 元。")],1)]),t._v(" "),a("el-form-item",{attrs:{label:"第三条 协议期限"}},[a("br"),t._v(" "),a("p",[t._v("本合同期限自\n        "),a("el-date-picker",{attrs:{size:"small",type:"date",placeholder:"选择日期时间"},model:{value:t.contractForm.d1,callback:function(e){t.$set(t.contractForm,"d1",e)},expression:"contractForm.d1"}}),t._v("\n        至\n        "),a("el-date-picker",{attrs:{size:"small",type:"date",placeholder:"选择日期时间"},model:{value:t.contractForm.d2,callback:function(e){t.$set(t.contractForm,"d2",e)},expression:"contractForm.d2"}}),t._v("\n        ，期届满，双方本着真诚合作及供需平衡的情况，在本合同结束前，再签订新合同书。\n      ")],1)]),t._v(" "),a("el-form-item",{attrs:{label:"第四条 补充内容"}},[a("br"),t._v(" "),a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:12}},[t._v("\n          支付宝账户:\n          "),a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini"},model:{value:t.contractForm.alipayAccount,callback:function(e){t.$set(t.contractForm,"alipayAccount",e)},expression:"contractForm.alipayAccount"}})],1),t._v(" "),a("el-col",{attrs:{span:12}},[t._v("\n          收货地址:\n          "),a("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini"},model:{value:t.contractForm.receivingAddress,callback:function(e){t.$set(t.contractForm,"receivingAddress",e)},expression:"contractForm.receivingAddress"}})],1)],1),t._v(" "),a("el-input",{attrs:{type:"textarea",placeholder:""},model:{value:t.contractForm.other,callback:function(e){t.$set(t.contractForm,"other",e)},expression:"contractForm.other"}})],1),t._v(" "),a("el-form-item",[a("p",[t._v("一、本合同自甲乙双方签字或盖章后生效。")]),t._v(" "),a("p",[t._v("二、本合同一式多份，甲乙双方、中介方、市场监管部门各执一份。")])]),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(t._s(t.msg))]),t._v(" "),a("el-button",[t._v("取消")])],1)],1)],1)},staticRenderFns:[]};var m=a("VU/8")(i,l,!1,function(t){a("UNsD")},"data-v-0cd45811",null);e.a=m.exports}});