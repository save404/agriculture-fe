webpackJsonp([4],{"1Xzj":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.editor-slide-upload[data-v-261a59b3] {\n  margin-bottom: 20px;\n}\n.editor-slide-upload[data-v-261a59b3] .el-upload--picture-card {\n    width: 100%;\n}\n",""])},"4J4j":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.tinymce-container[data-v-1600e880] {\n  position: relative;\n}\n.tinymce-container[data-v-1600e880] .mce-fullscreen {\n  z-index: 10000;\n}\n.tinymce-textarea[data-v-1600e880] {\n  visibility: hidden;\n  z-index: -1;\n}\n.editor-custom-btn-container[data-v-1600e880] {\n  position: absolute;\n  right: 4px;\n  top: 4px;\n  /*z-index: 2005;*/\n}\n.fullscreen .editor-custom-btn-container[data-v-1600e880] {\n  z-index: 10000;\n  position: fixed;\n}\n.editor-upload-btn[data-v-1600e880] {\n  display: inline-block;\n}\n",""])},"5aCZ":function(t,e,n){"use strict";var i=n("//Fk"),o=n.n(i),a=n("fZjL"),s=n.n(a),r={name:"editorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var t=this;return s()(this.listObj).every(function(e){return t.listObj[e].hasSuccess})},handleSubmit:function(){var t=this,e=s()(this.listObj).map(function(e){return t.listObj[e]});this.checkAllSuccess()?(console.log(e),this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！")},handleSuccess:function(t,e){for(var n=e.uid,i=s()(this.listObj),o=0,a=i.length;o<a;o++)if(this.listObj[i[o]].uid===n)return this.listObj[i[o]].url=t.files.file,void(this.listObj[i[o]].hasSuccess=!0)},handleRemove:function(t){for(var e=t.uid,n=s()(this.listObj),i=0,o=n.length;i<o;i++)if(this.listObj[n[i]].uid===e)return void delete this.listObj[n[i]]},beforeUpload:function(t){var e=this,n=window.URL||window.webkitURL,i=t.uid;return this.listObj[i]={},new o.a(function(o,a){var s=new Image;s.src=n.createObjectURL(t),s.onload=function(){e.listObj[i]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},o(!0)})}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-container"},[n("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("上传图片\n  ")]),t._v(" "),n("el-dialog",{attrs:{"append-to-body":"",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-upload",{staticClass:"editor-slide-upload",attrs:{action:"https://httpbin.org/post",multiple:!0,"file-list":t.fileList,"show-file-list":!0,"list-type":"picture-card","on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1),t._v(" "),n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确 定")])],1)],1)},staticRenderFns:[]};var l=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],d=["bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap\t preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],u={name:"tinymce",components:{editorImage:n("VU/8")(r,c,!1,function(t){n("DhA7")},"data-v-261a59b3",null).exports},props:{id:{type:String},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{default:"file edit insert view format table"},height:{type:Number,required:!1,default:360}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id||"vue-tinymce-"+ +new Date,fullscreen:!1}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(e.tinymceId).setContent(t||"")})}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},methods:{initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#"+this.tinymceId,height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:d,menubar:this.menubar,plugins:l,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp SetContent",function(){t.hasChange=!0,t.$emit("input",n.getContent())})},setup:function(t){t.on("FullscreenStateChanged",function(t){e.fullscreen=t.state})}})},destroyTinymce:function(){window.tinymce.get(this.tinymceId)&&window.tinymce.get(this.tinymceId).destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach(function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'+t.url+'" >')})}},destroyed:function(){this.destroyTinymce()}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tinymce-container editor-container",class:{fullscreen:this.fullscreen}},[e("textarea",{staticClass:"tinymce-textarea",attrs:{id:this.tinymceId}}),this._v(" "),e("div",{staticClass:"editor-custom-btn-container"},[e("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:this.imageSuccessCBK}})],1)])},staticRenderFns:[]};var m=n("VU/8")(u,p,!1,function(t){n("YMyi")},"data-v-1600e880",null);e.a=m.exports},Cdx3:function(t,e,n){var i=n("sB3e"),o=n("lktj");n("uqUo")("keys",function(){return function(t){return o(i(t))}})},DhA7:function(t,e,n){var i=n("1Xzj");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("rjj0").default)("188afda2",i,!0,{})},YMyi:function(t,e,n){var i=n("4J4j");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("rjj0").default)("e6884758",i,!0,{})},fZjL:function(t,e,n){t.exports={default:n("jFbC"),__esModule:!0}},g89u:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),o=n.n(i),a=n("NYxO"),s=n("+mJe"),r=n("5aCZ"),c=n("mw3O"),l=n.n(c),d=n("vLgD");var u={components:{MDinput:s.a,Tinymce:r.a},props:{type:String,isEdit:{type:Boolean,default:!1}},data:function(){return{msg:"发布",postForm:{basicId:"",title:"",telephone:"",level:0,content:""},rules:{}}},created:function(){this.isEdit&&(this.msg="保存")},computed:o()({},Object(a.b)(["basicId","roles","phone"])),methods:{releasePurchase:function(){var t,e,n,i=this;this.postForm.basicId=this.postForm.basicId||this.basicId,this.isEdit||(t=this.postForm.title,e=this.postForm.content,n=this.postForm.level,Object(d.a)({url:"/gov/post/add",method:"post",data:l.a.stringify({noticeTitle:t,noticeContent:e,noticeLevel:n})})).then(function(t){i.$message({message:"公告发布成功",type:"success"}),i.$router.push({name:"dashboard"})}).catch(function(){})}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"createPost-container"},[n("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,rules:t.rules}},[n("div",{staticClass:"createPost-main-container"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[n("MDinput",{attrs:{name:"name",required:"",maxlength:100},model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}},[t._v("\n              标题\n            ")])],1),t._v(" "),n("div",{staticClass:"postInfo-container"},[n("el-row",[n("el-col",{attrs:{span:11}},[n("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"80px",label:"联系电话:"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"联系方式"},model:{value:t.postForm.telephone,callback:function(e){t.$set(t.postForm,"telephone",e)},expression:"postForm.telephone"}})],1)],1),t._v(" "),n("el-col",{attrs:{span:11}},[n("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"60px",label:"重要性:"}},[n("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{max:3,colors:["#99A9BF","#F7BA2A","#FF9900"],"low-threshold":1,"high-threshold":3},model:{value:t.postForm.level,callback:function(e){t.$set(t.postForm,"level",e)},expression:"postForm.level"}})],1)],1),t._v(" "),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"primary",size:"large"},on:{click:t.releasePurchase}},[t._v(t._s(t.msg))])],1)],1)],1)],1)],1),t._v(" "),n("el-form-item",{staticStyle:{"margin-bottom":"40px"}},[n("div",{staticClass:"editor-container"},[n("tinymce",{attrs:{height:300},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1)])],1)])],1)},staticRenderFns:[]};var m={components:{NoticeForm:n("VU/8")(u,p,!1,function(t){n("kJuD")},"data-v-0fcdad24",null).exports},computed:o()({},Object(a.b)(["roles"])),data:function(){return{}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notice-create"},[e("notice-form",{attrs:{type:this.roles[0]}})],1)},staticRenderFns:[]},f=n("VU/8")(m,h,!1,null,null,null);e.default=f.exports},jFbC:function(t,e,n){n("Cdx3"),t.exports=n("FeBl").Object.keys},kJuD:function(t,e,n){var i=n("m4+k");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("rjj0").default)("ad020a9a",i,!0,{})},"m4+k":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'\n.createPost-container[data-v-0fcdad24] {\n  position: relative;\n}\n.createPost-container .createPost-main-container[data-v-0fcdad24] {\n    padding: 10px 45px 20px 50px;\n}\n.createPost-container .createPost-main-container .postInfo-container[data-v-0fcdad24] {\n      position: relative;\n      margin-bottom: 10px;\n}\n.createPost-container .createPost-main-container .postInfo-container[data-v-0fcdad24]:after {\n        content: "";\n        display: table;\n        clear: both;\n}\n.createPost-container .createPost-main-container .postInfo-container .postInfo-container-item[data-v-0fcdad24] {\n        float: left;\n}\n.createPost-container .createPost-main-container .editor-container[data-v-0fcdad24] {\n      min-height: 300px;\n      margin: 0 0 30px;\n}\n.createPost-container .createPost-main-container .editor-container .editor-upload-btn-container[data-v-0fcdad24] {\n        text-align: right;\n        margin-right: 10px;\n}\n.createPost-container .createPost-main-container .editor-container .editor-upload-btn-container .editor-upload-btn[data-v-0fcdad24] {\n          display: inline-block;\n}\n.createPost-container .word-counter[data-v-0fcdad24] {\n    width: 40px;\n    position: absolute;\n    right: -10px;\n    top: 0px;\n}\n',""])},uqUo:function(t,e,n){var i=n("kM2E"),o=n("FeBl"),a=n("S82l");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],s={};s[t]=e(n),i(i.S+i.F*a(function(){n(1)}),"Object",s)}}});