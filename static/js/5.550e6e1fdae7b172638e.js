webpackJsonp([5],{"/YkU":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("S352"),s=n("gHxB"),o={name:"MjLogin",components:{TransHeader:r.a,LoginContainer:s.a},data:function(){return{url:"http://localhost:8080/mj/mj_login",MjLoginForm:{telephone:"",password:""}}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"Mj-login"}},[e("trans-header"),this._v(" "),e("login-container",{attrs:{form:this.MjLoginForm,url:this.url}})],1)},staticRenderFns:[]};var i=n("VU/8")(o,a,!1,function(t){n("8nI1")},"data-v-826a3098",null);e.default=i.exports},"8nI1":function(t,e,n){var r=n("krGB");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("rjj0").default)("06742376",r,!0,{})},HRw3:function(t,e,n){var r=n("uNSh");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("rjj0").default)("f54564b2",r,!0,{})},S352:function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"trans-header"},[n("router-link",{staticStyle:{position:"fixed",top:"2%",right:"2%","font-size":"1.2em"},attrs:{to:"/govlogin"}},[t._v("政府人员登录")]),t._v(" "),n("el-header",{attrs:{height:""}},[n("el-button",{staticClass:"useful",attrs:{type:"text"},on:{click:t.transFarmer}},[t._v("我是农户  ")]),t._v(" "),n("el-button",{attrs:{type:"text"}},[t._v("|")]),t._v(" "),n("el-button",{staticClass:"useful",attrs:{type:"text"},on:{click:t.transMj}},[t._v("我是买家")])],1)],1)},staticRenderFns:[]};var s=n("VU/8")({name:"TransHeader",methods:{transMj:function(){this.$router.push({name:"mjLogin"}),this.$message({message:"已切换至买家登录模式",type:"success"})},transFarmer:function(){this.$router.push({name:"nhLogin"}),this.$message({message:"已切换至农户登录模式",type:"success"})}}},r,!1,function(t){n("HRw3")},"data-v-c6cae538",null);e.a=s.exports},gHxB:function(t,e,n){"use strict";var r={name:"LoginContainer",props:["form","url"],data:function(){return{rules:{telephone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{min:11,max:11,message:"请输入11位手机号码",trigger:"blur"},{pattern:/^1[34578]\d{9}$/,message:"目前只支持中国大陆的手机号码",trigger:"blur"}],password:[{required:!0,message:"请输入登录密码",trigger:"blur"},{min:6,max:20,message:"请输入6-20位密码",trigger:"blur"}]}}},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return e.$message("请检查手机号码或密码格式"),!1;e.onSubmit()})},handleLogin:function(){var t=this;this.$refs.form.validate(function(e){if(e)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("Login",t.form).then(function(){t.loading=!1,t.$router.push({path:"/"})}).catch(function(){t.loading=!1})})},onSubmit:function(){var t=this;this.url.includes("nh")?(this.loading=!0,this.$store.dispatch("NhLogin",this.form).then(function(){t.loading=!1,t.$router.push({path:"/"})}).catch(function(){t.loading=!1})):this.url.includes("mj")&&(this.loading=!0,this.$store.dispatch("MjLogin",this.form).then(function(){t.loading=!1,t.$router.push({path:"/"})}).catch(function(){t.loading=!1}))},resetPassword:function(){this.$message("重置密码！！")},goRegister:function(){this.url.includes("nh")?this.$router.push({name:"nhRegister"}):this.$router.push({name:"mjRegister"})},resetForm:function(t){this.$refs[t].resetFields()}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"手机号码",prop:"telephone"}},[n("el-input",{attrs:{placeholder:"请输入11位手机号码"},model:{value:t.form.telephone,callback:function(e){t.$set(t.form,"telephone",e)},expression:"form.telephone"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"登录密码",prop:"password"}},[n("el-input",{attrs:{type:"password",placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("form")}}},[t._v("立即登录")]),t._v(" "),n("el-button",{on:{click:function(e){t.resetForm("form")}}},[t._v("取消")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:t.resetPassword}},[t._v("忘记密码")]),t._v(" "),n("el-button",{attrs:{type:"success"},on:{click:t.goRegister}},[t._v("无账号，去注册")])],1)],1)},staticRenderFns:[]};var o=n("VU/8")(r,s,!1,function(t){n("wT0x")},"data-v-1238c979",null);e.a=o.exports},krGB:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n*[data-v-826a3098] {\n  text-align: center;\n}\n.login-form[data-v-826a3098] {\n  height: 100%;\n  width: 100%;\n}\n.login[data-v-826a3098] {\n  width: 40%;\n  margin-top: 70px;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.trans-header[data-v-826a3098] {\n  position: relative;\n  padding-top: 70px;\n}\n\n",""])},uNSh:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.el-button[data-v-c6cae538] {\n  font-family: sans-serif;\n  font-size: 50px;\n}\n.el-button.useful[data-v-c6cae538]:hover {\n  font-weight: bold;\n}\n",""])},w0QL:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.el-form-item[data-v-1238c979] {\n  -webkit-transform: translateX(-40px);\n          transform: translateX(-40px);\n}\n\n",""])},wT0x:function(t,e,n){var r=n("w0QL");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("rjj0").default)("12f70ba2",r,!0,{})}});