(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5db09db4"],{"8d9d":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[s("h5",{staticClass:"font-600 dark-text mb-1"},[e._v(" "+e._s(e.label)+" "),e.subLabel?[s("span",{staticClass:"red--text"},[e._v("("+e._s(e.subLabel)+")")])]:e._e()],2),s("div",{staticClass:"d-flex align-center"},[s("v-file-input",{staticClass:"file-uploader mr-2",attrs:{disabled:e.disabled||e.readonly,"prepend-icon":"",accept:"image/png, image/jpeg, image/jpg, image/bmp",outlined:"","hide-details":""},on:{change:e.upload},scopedSlots:e._u([{key:"append",fn:function(){return[s("v-btn",{staticStyle:{"margin-top":"-6px"},attrs:{depressed:"",color:"rgba(var(--primary), 1)"}},[s("span",{staticClass:"text-transform-reset text-white"},[e._v(e._s(e.$t("Dashboard.upload_file")))])])]},proxy:!0}]),model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),e.value?[s("span",{staticClass:"d-none"},[e._v(e._s(e.hidden))]),e.fileThumb.visible?[s("div",{staticClass:"file-upload-wrap rounded overflow-hidden p-relative"},[e.extension?[s("a",{staticClass:"border-all d-flex align-center justify-center w-100 h-100 rounded",attrs:{href:"#"}},[s("file-text-icon",{staticClass:"grey--text",attrs:{size:"1.5x"}})],1)]:[s("img",{staticClass:"d-block img-cover",attrs:{src:e.$http.defaults.baseURL+e.fileThumb.url,alt:"Card image"}})],s("div",{staticClass:"file-upload-actions p-absolute w-100 h-100 d-flex align-center justify-space-around px-2 transition-ease-in-out"},[s("a",{staticClass:"rounded-circle d-flex align-center justify-center outline-transparent",attrs:{href:e.$http.defaults.baseURL+e.fileThumb.url,download:"",target:"_blank",rel:"noopener noreferrer"}},[s("download-icon",{staticClass:"text-white d-block",attrs:{size:"1.2x"}})],1),e.readonly?e._e():[s("button",{staticClass:"rounded-circle d-flex align-center justify-center outline-transparent",attrs:{type:"button"},on:{click:e.deleteFile}},[s("trash2-icon",{staticClass:"text-white d-block",attrs:{size:"1.1x"}})],1)]],2)],2)]:e._e()]:e._e()],2)])},l=[],o=s("0a35"),i={name:"FileUpload",props:{label:{type:String},subLabel:{type:String,default:""},disabled:{type:Boolean,default:!1},value:{type:Object,default:()=>{}},readonly:{type:Boolean,default:!1}},components:{EyeIcon:o["n"],Trash2Icon:o["M"],FileTextIcon:o["q"],DownloadIcon:o["k"]},computed:{extension(){return["pdf","PDF","doc","docx","DOC","csv","CSV","xls","XLS"].includes(this.fileThumb.url.slice(-3))},hidden(){return{url:this.fileThumb.url=this.value.url,visible:this.fileThumb.visible=!0}}},watch:{value(e){e&&(this.fileThumb.visible=!0,this.fileThumb.url=e.url)}},data(){return{template:"",file:[],fileThumb:{url:"",visible:!1},fileList:[]}},methods:{upload(e){let t=new FormData;t.append("file",e),this.$http.post("/upload/",t).then(({data:e})=>{this.$toast.success("Rasm yuklandi"),this.$emit("emit:up",e),this.fileThumb.url=e.url,this.fileThumb.visible=!0}).catch(()=>this.$t("Dashboard.e"))},deleteFile(e){confirm(this.$t("Dashboard.d"))&&(this.fileThumb.visible=!1,this.fileThumb.url="",this.file=[])}}},d=i,n=s("0c7c"),r=Object(n["a"])(d,a,l,!1,null,null,null);t["a"]=r.exports},"8e4d":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("documents-form",{attrs:{TYPE:e.$store.state.FORM_TYPE.READ}})},l=[],o=s("e0e0"),i={name:"Read",components:{DocumentsForm:o["a"]}},d=i,n=s("0c7c"),r=Object(n["a"])(d,a,l,!1,null,null,null);t["default"]=r.exports},e0e0:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"documents-form-view"},[s("app-card",[s("div",{staticClass:"form-wrap pa-5 px-6 d-flex flex-column m-h-100"},[s("div",{staticClass:"d-flex align-center mb-8"},[s("h4",{staticClass:"text--primary text-uppercase font-700 mr-4"},[e._v(" "+e._s("Create"===e.TYPE?e.$t("Dashboard.add_new"):"Update"===e.TYPE?e.$t("Dashboard.update"):e.$t("Dashboard.read"))+" ")]),s("v-divider",{staticStyle:{"border-color":"rgb(var(--border-color), 1)"}})],1),s("div",{staticClass:"flex-1"},[s("v-row",[s("v-col",{attrs:{md:"4"}},[s("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[s("h5",{staticClass:"font-600 dark-text mb-1"},[e._v(e._s(e.$t("Dashboard.document.title"))+" (UZ)")]),s("v-text-field",{attrs:{error:e.$v.documentsModel.title_uz.$error,readonly:"Read"===e.TYPE,outlined:"","hide-details":""},model:{value:e.$v.documentsModel.title_uz.$model,callback:function(t){e.$set(e.$v.documentsModel.title_uz,"$model",t)},expression:"$v.documentsModel.title_uz.$model"}})],1)]),s("v-col",{attrs:{md:"4"}},[s("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[s("h5",{staticClass:"font-600 dark-text mb-1"},[e._v(e._s(e.$t("Dashboard.document.title"))+" (RU)")]),s("v-text-field",{attrs:{error:e.$v.documentsModel.title_ru.$error,readonly:"Read"===e.TYPE,outlined:"","hide-details":""},model:{value:e.$v.documentsModel.title_ru.$model,callback:function(t){e.$set(e.$v.documentsModel.title_ru,"$model",t)},expression:"$v.documentsModel.title_ru.$model"}})],1)]),s("v-col",{attrs:{md:"4"}},[s("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[s("h5",{staticClass:"font-600 dark-text mb-1"},[e._v(e._s(e.$t("Dashboard.document.title"))+" (EN)")]),s("v-text-field",{attrs:{error:e.$v.documentsModel.title_en.$error,readonly:"Read"===e.TYPE,outlined:"","hide-details":""},model:{value:e.$v.documentsModel.title_en.$model,callback:function(t){e.$set(e.$v.documentsModel.title_en,"$model",t)},expression:"$v.documentsModel.title_en.$model"}})],1)]),s("v-col",{attrs:{md:"4"}},[s("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[s("h5",{staticClass:"font-600 dark-text mb-1"},[e._v(e._s(e.$t("Dashboard.branch.type")))]),"uz"===e.$i18n.locale?[s("v-select",{attrs:{items:e.$store.state.DOCUMENT_TYPES,"item-text":"title_uz","item-value":"value",readonly:"Read"===e.TYPE,outlined:"","hide-details":""},scopedSlots:e._u([{key:"append",fn:function(){return[s("chevron-down-icon",{staticClass:"text-secondary-dark",attrs:{size:"1.35x"}})]},proxy:!0}],null,!1,1761019591),model:{value:e.documentsModel.type,callback:function(t){e.$set(e.documentsModel,"type",t)},expression:"documentsModel.type"}})]:e._e(),"ru"===e.$i18n.locale?[s("v-select",{attrs:{items:e.$store.state.DOCUMENT_TYPES,"item-text":"title_ru","item-value":"value",readonly:"Read"===e.TYPE,outlined:"","hide-details":""},scopedSlots:e._u([{key:"append",fn:function(){return[s("chevron-down-icon",{staticClass:"text-secondary-dark",attrs:{size:"1.35x"}})]},proxy:!0}],null,!1,1761019591),model:{value:e.documentsModel.type,callback:function(t){e.$set(e.documentsModel,"type",t)},expression:"documentsModel.type"}})]:e._e(),"en"===e.$i18n.locale?[s("v-select",{attrs:{items:e.$store.state.DOCUMENT_TYPES,"item-text":"title_en","item-value":"value",readonly:"Read"===e.TYPE,outlined:"","hide-details":""},scopedSlots:e._u([{key:"append",fn:function(){return[s("chevron-down-icon",{staticClass:"text-secondary-dark",attrs:{size:"1.35x"}})]},proxy:!0}],null,!1,1761019591),model:{value:e.documentsModel.type,callback:function(t){e.$set(e.documentsModel,"type",t)},expression:"documentsModel.type"}})]:e._e()],2)]),s("v-col",{attrs:{md:"4"}},[s("file-upload",{attrs:{value:e.documentFile,disabled:"Read"===e.TYPE,label:e.$t("Dashboard.upload_file")+" (UZ)"},on:{"emit:up":e.upload}})],1),s("v-col",{attrs:{md:"4"}},[s("file-upload",{attrs:{value:e.documentFileRU,disabled:"Read"===e.TYPE,label:e.$t("Dashboard.upload_file")+" (RU)"},on:{"emit:up":e.uploadRU}})],1),s("v-col",{attrs:{md:"4"}},[s("file-upload",{attrs:{value:e.documentFileEN,disabled:"Read"===e.TYPE,label:e.$t("Dashboard.upload_file")+" (EN)"},on:{"emit:up":e.uploadEN}})],1)],1)],1),s("div",{staticClass:"mt-8"},[s("go-back-button"),"Create"===e.TYPE?[s("send-button",{attrs:{text:e.$t("Dashboard.create")},on:{"emit:up":e.send}})]:"Update"===e.TYPE?[s("send-button",{attrs:{text:e.$t("Dashboard.update")},on:{"emit:up":e.update}})]:e._e()],2)])])],1)},l=[],o=s("87d8"),i=s("8d9d"),d=s("0130"),n=s("9e43"),r=s("b5ae"),u=s("0a35"),c={name:"DocumentsForm",props:{TYPE:{type:String,default:""}},components:{AppCard:o["a"],FileUpload:i["a"],SendButton:d["a"],GoBackButton:n["a"],ChevronDownIcon:u["e"]},data(){return{documentFile:null,documentFileRU:null,documentFileEN:null,documentsModel:{title_uz:"",title_ru:"",title_en:"",file:null,file_en:null,file_ru:null,type:""}}},validations:{documentsModel:{title_uz:{required:r["required"]},title_ru:{required:r["required"]},title_en:{required:r["required"]}}},mounted(){this.$route.params.id&&this.getOne()},methods:{send(){this.$v.$touch(),this.$v.$invalid?this.$toast.warning(this.$t("Dashboard.f")):(this.documentsModel.file=this.documentFile.id,this.documentsModel.file_ru=this.documentFileRU.id,this.documentsModel.file_en=this.documentFileEN.id,this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/bank/documents/`,this.documentsModel).then(e=>{this.$toast.success(this.$t("Dashboard.c")),setTimeout(()=>{this.$router.push({name:"OtherSectionDocumentsList"})},1500)}).catch(e=>{this.$toast.error(this.$t("Dashboard.e"))}))},update(){this.$v.$touch(),this.$v.$invalid?this.$toast.warning(this.$t("Dashboard.f")):(this.documentsModel.file=this.documentFile.id,this.documentsModel.file_ru=this.documentFileRU.id,this.documentsModel.file_en=this.documentFileEN.id,this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/bank/documents/${this.$route.params.id}/`,this.documentsModel).then(e=>{this.$toast.success(this.$t("Dashboard.c")),setTimeout(()=>{this.$router.push({name:"OtherSectionDocumentsList"})},1500)}).catch(e=>{this.$toast.error(this.$t("Dashboard.e"))}))},getOne(){this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/bank/documents/${this.$route.params.id}/`).then(({data:e})=>{this.documentsModel=e,this.documentFile=this.documentsModel.file,this.documentFileRU=this.documentsModel.file_ru,this.documentFileEN=this.documentsModel.file_en})},upload(e){this.documentFile=e},uploadRU(e){this.documentFileRU=e},uploadEN(e){this.documentFileEN=e}}},m=c,p=s("0c7c"),h=Object(p["a"])(m,a,l,!1,null,null,null);t["a"]=h.exports}}]);