(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53cb2cab"],{3408:function(t,e,a){},"5a51":function(t,e,a){"use strict";a("3408")},"884a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("news-create-form",{attrs:{TYPE:t.$store.state.FORM_TYPE.UPDATE,CATEGORY_ID:9,REDIRECT_ROUTE:"DashboardTendersList"}})},i=[],o=a("9038"),l={name:"Update",components:{NewsCreateForm:o["a"]}},r=l,n=a("0c7c"),d=Object(n["a"])(r,s,i,!1,null,null,null);e["default"]=d.exports},9038:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news-form-view"},[a("app-card",[a("div",{staticClass:"form-wrap d-flex flex-column m-h-100 pa-5 px-6"},[a("div",{staticClass:"d-flex align-center mb-8"},[a("h4",{staticClass:"text--primary text-uppercase font-700 mr-4"},[t._v(" "+t._s("Create"===t.TYPE?t.$t("Dashboard.add_new"):"Update"===t.TYPE?t.$t("Dashboard.update"):t.$t("Dashboard.read"))+" ")]),a("v-divider",{staticStyle:{"border-color":"rgb(var(--border-color), 1)"}})],1),a("div",{staticClass:"flex-1"},[a("v-row",[a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.news.name"))+" (UZ)")]),a("v-text-field",{attrs:{error:t.$v.newsModel.title_uz.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.newsModel.title_uz.$model,callback:function(e){t.$set(t.$v.newsModel.title_uz,"$model",e)},expression:"$v.newsModel.title_uz.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.news.name"))+" (RU)")]),a("v-text-field",{attrs:{error:t.$v.newsModel.title_ru.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.newsModel.title_ru.$model,callback:function(e){t.$set(t.$v.newsModel.title_ru,"$model",e)},expression:"$v.newsModel.title_ru.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.news.name"))+" (EN)")]),a("v-text-field",{attrs:{error:t.$v.newsModel.title_en.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.newsModel.title_en.$model,callback:function(e){t.$set(t.$v.newsModel.title_en,"$model",e)},expression:"$v.newsModel.title_en.$model"}})],1)]),a("v-col",{attrs:{md:"12"}},[a("div",{staticClass:"admin-tabs"},[a("v-tabs",{staticClass:"mb-0 mb-5",attrs:{height:"56","hide-slider":""},model:{value:t.tab1,callback:function(e){t.tab1=e},expression:"tab1"}},[a("v-tab",{staticClass:"transition-ease-in-out"},[a("h5",{staticClass:"font-600 dark-text text-transform-reset no-spacing px-2"},[t._v(" "+t._s(t.$t("Dashboard.news.description"))+" "),a("span",{staticClass:"font-700 text-small"},[t._v("(UZ)")])])]),a("v-tab",{staticClass:"transition-ease-in-out"},[a("h5",{staticClass:"font-600 dark-text text-transform-reset no-spacing px-2"},[t._v(" "+t._s(t.$t("Dashboard.news.description"))+" "),a("span",{staticClass:"font-700 text-small"},[t._v("(RU)")])])]),a("v-tab",{staticClass:"transition-ease-in-out"},[a("h5",{staticClass:"font-600 dark-text text-transform-reset no-spacing px-2"},[t._v(" "+t._s(t.$t("Dashboard.news.description"))+" "),a("span",{staticClass:"font-700 text-small"},[t._v("(EN)")])])])],1),a("v-tabs-items",{model:{value:t.tab1,callback:function(e){t.tab1=e},expression:"tab1"}},[a("v-tab-item",[a("div",{staticClass:"app-editor"},[a("quill-editor",{ref:"myTextEditor",attrs:{error:t.$v.newsModel.description_uz.$error,disabled:"Read"===t.TYPE},on:{change:function(e){return t.onEditorChange(e)}},model:{value:t.$v.newsModel.description_uz.$model,callback:function(e){t.$set(t.$v.newsModel.description_uz,"$model",e)},expression:"$v.newsModel.description_uz.$model"}})],1)]),a("v-tab-item",[a("div",{staticClass:"app-editor"},[a("quill-editor",{attrs:{error:t.$v.newsModel.description_ru.$error,disabled:"Read"===t.TYPE},model:{value:t.$v.newsModel.description_ru.$model,callback:function(e){t.$set(t.$v.newsModel.description_ru,"$model",e)},expression:"$v.newsModel.description_ru.$model"}})],1)]),a("v-tab-item",[a("div",{staticClass:"app-editor"},[a("quill-editor",{attrs:{error:t.$v.newsModel.description_en.$error,disabled:"Read"===t.TYPE},model:{value:t.$v.newsModel.description_en.$model,callback:function(e){t.$set(t.$v.newsModel.description_en,"$model",e)},expression:"$v.newsModel.description_en.$model"}})],1)])],1)],1)]),a("v-col",{attrs:{md:"12"}},[a("v-date-picker",{attrs:{scrollable:""},model:{value:t.newsModel.date_added,callback:function(e){t.$set(t.newsModel,"date_added",e)},expression:"newsModel.date_added"}})],1),t.GALLERY?[a("v-col",{attrs:{md:"4"}},[a("multiple-file-upload",{ref:"propFile",attrs:{value:t.galleryFiles,disabled:"Read"===t.TYPE,label:t.$t("Dashboard.upload_file")},on:{"emit:up":t.upload}})],1)]:t._e()],2)],1),a("div",{staticClass:"mt-8"},[a("go-back-button"),"Create"===t.TYPE?[a("send-button",{attrs:{text:t.$t("Dashboard.create")},on:{"emit:up":t.send}})]:"Update"===t.TYPE?[a("send-button",{attrs:{text:t.$t("Dashboard.update")},on:{"emit:up":t.update}})]:t._e()],2)])]),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialogFnOpenUpload,callback:function(e){t.dialogFnOpenUpload=e},expression:"dialogFnOpenUpload"}},[a("v-card",[a("v-file-input",{attrs:{"truncate-length":"15"},model:{value:t.videoInput,callback:function(e){t.videoInput=e},expression:"videoInput"}}),a("v-btn",{attrs:{color:"primary"},on:{click:t.fnOpenUploadSubmit}},[t._v(" Upload ")])],1)],1)],1)},i=[],o=a("87d8"),l=a("0130"),r=a("9e43"),n=a("e751"),d=a("0a35"),c=a("b5ae"),u={name:"NewsForm",props:{TYPE:{type:String,default:""},CATEGORY_ID:{type:[Number,String]},REDIRECT_ROUTE:{type:String},GALLERY:{type:Boolean,default:!1}},components:{AppCard:o["a"],SendButton:l["a"],GoBackButton:r["a"],MultipleFileUpload:n["a"],ChevronDownIcon:d["e"],VideoIcon:d["T"]},data(){return{videoInput:null,dialogFnOpenUpload:!1,galleryFiles:null,tab1:null,categoryList:[],newsModel:{title_uz:"",title_ru:"",title_en:"",description_uz:"",description_en:"",description_ru:"",category:this.CATEGORY_ID,attachments:[],date_added:""}}},validations:{newsModel:{title_uz:{required:c["required"]},title_ru:{required:c["required"]},title_en:{required:c["required"]},description_uz:{required:c["required"]},description_en:{required:c["required"]},description_ru:{required:c["required"]},category:{required:c["required"]}}},computed:{editor(){return this.$refs.myTextEditor.quill}},mounted(){this.getCategoryList(),this.$route.params.id&&this.getOne()},methods:{onEditorChange(t){console.log(t);let e=t.html;this.$emit("input",e)},fnOpenUploadVideo(){this.dialogFnOpenUpload=!0},fnOpenUploadSubmit(){let t=new FormData;return t.append("file",this.videoInput),new Promise((e,a)=>{this.$http.post("/documents/",t).then(({data:t})=>{console.log(t),this.editor.insertEmbed(this.editor.getSelection().index,"video",t.file)})})},send(){this.$v.$touch(),this.$v.$invalid?this.$toast.warning("Field to'ldirilishi shart"):this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/news/`,this.newsModel).then(()=>{this.$toast.success("Yaratildi"),setTimeout(()=>{this.$router.push({name:this.REDIRECT_ROUTE})},1500)}).catch(()=>{this.$toast.error("Yaratishda xatolik")})},update(){this.$v.$touch(),this.$v.$invalid?this.$toast.warning("Field to'ldirilishi shart"):this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/news/${this.$route.params.id}`,this.newsModel).then(()=>{this.$toast.success("Yangilandi"),setTimeout(()=>{this.$router.push({name:this.REDIRECT_ROUTE})},1500)}).catch(()=>{this.$toast.error("Yangilashda xatolik")})},getOne(){this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/news/${this.$route.params.id}`).then(({data:t})=>{this.newsModel=t,this.galleryFiles=t.attachments})},getCategoryList(){this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/category/`).then(({data:t})=>{this.categoryList=t.results})},upload(t){this.newsModel.attachments=[],t.forEach(t=>{this.newsModel.attachments.push({id:t.id})})}}},p=u,h=a("0c7c"),m=Object(h["a"])(p,s,i,!1,null,null,null);e["a"]=m.exports},e751:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(" "+t._s(t.label)+" "),t.subLabel?[a("span",{staticClass:"red--text"},[t._v("("+t._s(t.subLabel)+")")])]:t._e()],2),a("v-file-input",{staticClass:"file-uploader",attrs:{disabled:t.disabled,"prepend-icon":"",accept:"image/png, image/jpeg, image/jpg, image/bmp",outlined:"","hide-details":"",multiple:""},on:{change:t.upload},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-btn",{staticStyle:{"margin-top":"-6px"},attrs:{disabled:t.isLoading,depressed:"",loading:t.isLoading,color:"rgba(var(--primary), 1)"}},[a("span",{staticClass:"text-transform-reset text-white"},[t._v(t._s(t.$t("Dashboard.upload_file")))])])]},proxy:!0}]),model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),t.fileList.length?a("div",{staticClass:"upload-wrap d-flex flex-wrap mt-1 mx-n1"},[t._l(t.fileList,(function(e){return[a("div",{staticClass:"file-upload-wrap rounded overflow-hidden p-relative ma-1"},[a("a",{staticClass:"border-all d-flex align-center justify-center w-100 h-100 rounded"},[a("file-text-icon",{staticClass:"grey--text",attrs:{size:"1.5x"}})],1),a("div",{staticClass:"file-upload-actions p-absolute w-100 h-100 d-flex align-center justify-space-around px-2 transition-ease-in-out"},[a("a",{staticClass:"rounded-circle d-flex align-center justify-center outline-transparent",class:t.disabled?"disableClick":"",attrs:{href:t.$http.defaults.baseURL+e.url,download:t.$http.defaults.baseURL+e.url,target:"_blank",rel:"noopener noreferrer"}},[a("eye-icon",{staticClass:"text-white d-block",attrs:{size:"1.2x"}})],1)])])]}))],2):t._e()],1)},i=[],o=a("0a35"),l={name:"MultipleFileUpload",props:{label:{type:String},subLabel:{type:String,default:""},disabled:{type:Boolean,default:!1},value:{type:Array,default:()=>[]}},components:{EyeIcon:o["n"],Trash2Icon:o["M"],FileTextIcon:o["q"],DownloadIcon:o["k"]},data(){return{file:[],fileList:[],isLoading:!1}},watch:{value(t){this.fileList=t}},methods:{upload(t){this.isLoading=!0;let e=new FormData;for(let a=0;a<t.length;a++){let s=t[a];e.append("file",s)}this.$http.post("/multiple_upload/",e).then(({data:t})=>{this.$toast.success("Rasm yuklandi"),this.$emit("emit:up",t),this.isLoading=!1,this.fileList=t}).catch(t=>{this.$t("Dashboard.e")})},download(){}}},r=l,n=(a("5a51"),a("0c7c")),d=Object(n["a"])(r,s,i,!1,null,null,null);e["a"]=d.exports}}]);