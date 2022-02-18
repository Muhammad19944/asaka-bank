(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-070f3c78"],{"8d9d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(" "+t._s(t.label)+" "),t.subLabel?[a("span",{staticClass:"red--text"},[t._v("("+t._s(t.subLabel)+")")])]:t._e()],2),a("div",{staticClass:"d-flex align-center"},[a("v-file-input",{staticClass:"file-uploader mr-2",attrs:{disabled:t.disabled||t.readonly,"prepend-icon":"",accept:"image/png, image/jpeg, image/jpg, image/bmp",outlined:"","hide-details":""},on:{change:t.upload},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-btn",{staticStyle:{"margin-top":"-6px"},attrs:{depressed:"",color:"rgba(var(--primary), 1)"}},[a("span",{staticClass:"text-transform-reset text-white"},[t._v(t._s(t.$t("Dashboard.upload_file")))])])]},proxy:!0}]),model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),t.value?[a("span",{staticClass:"d-none"},[t._v(t._s(t.hidden))]),t.fileThumb.visible?[a("div",{staticClass:"file-upload-wrap rounded overflow-hidden p-relative"},[t.extension?[a("a",{staticClass:"border-all d-flex align-center justify-center w-100 h-100 rounded",attrs:{href:"#"}},[a("file-text-icon",{staticClass:"grey--text",attrs:{size:"1.5x"}})],1)]:[a("img",{staticClass:"d-block img-cover",attrs:{src:t.$http.defaults.baseURL+t.fileThumb.url,alt:"Card image"}})],a("div",{staticClass:"file-upload-actions p-absolute w-100 h-100 d-flex align-center justify-space-around px-2 transition-ease-in-out"},[a("a",{staticClass:"rounded-circle d-flex align-center justify-center outline-transparent",attrs:{href:t.$http.defaults.baseURL+t.fileThumb.url,download:"",target:"_blank",rel:"noopener noreferrer"}},[a("download-icon",{staticClass:"text-white d-block",attrs:{size:"1.2x"}})],1),t.readonly?t._e():[a("button",{staticClass:"rounded-circle d-flex align-center justify-center outline-transparent",attrs:{type:"button"},on:{click:t.deleteFile}},[a("trash2-icon",{staticClass:"text-white d-block",attrs:{size:"1.1x"}})],1)]],2)],2)]:t._e()]:t._e()],2)])},r=[],i=a("0a35"),l={name:"FileUpload",props:{label:{type:String},subLabel:{type:String,default:""},disabled:{type:Boolean,default:!1},value:{type:Object,default:()=>{}},readonly:{type:Boolean,default:!1}},components:{EyeIcon:i["n"],Trash2Icon:i["M"],FileTextIcon:i["q"],DownloadIcon:i["k"]},computed:{extension(){return["pdf","PDF","doc","docx","DOC","csv","CSV","xls","XLS"].includes(this.fileThumb.url.slice(-3))},hidden(){return{url:this.fileThumb.url=this.value.url,visible:this.fileThumb.visible=!0}}},watch:{value(t){t&&(this.fileThumb.visible=!0,this.fileThumb.url=t.url)}},data(){return{template:"",file:[],fileThumb:{url:"",visible:!1},fileList:[]}},methods:{upload(t){let e=new FormData;e.append("file",t),this.$http.post("/upload/",e).then(({data:t})=>{this.$toast.success("Rasm yuklandi"),this.$emit("emit:up",t),this.fileThumb.url=t.url,this.fileThumb.visible=!0}).catch(()=>this.$t("Dashboard.e"))},deleteFile(t){confirm(this.$t("Dashboard.d"))&&(this.fileThumb.visible=!1,this.fileThumb.url="",this.file=[])}}},d=l,o=a("0c7c"),n=Object(o["a"])(d,s,r,!1,null,null,null);e["a"]=n.exports},"93a8":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news-form-view"},[a("app-card",[a("div",{staticClass:"form-wrap d-flex flex-column h-100 pa-5 px-6"},[a("div",{staticClass:"d-flex align-center mb-8"},[a("h4",{staticClass:"text--primary text-uppercase font-700 mr-4"},[t._v(" "+t._s("Create"===t.TYPE?t.$t("Dashboard.add_new"):"Update"===t.TYPE?t.$t("Dashboard.update"):t.$t("Dashboard.read"))+" ")]),a("v-divider",{staticStyle:{"border-color":"rgb(var(--border-color), 1)"}})],1),a("div",{staticClass:"flex-1"},[a("v-row",[a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.shareholder.title"))+" (UZ)")]),a("v-text-field",{attrs:{error:t.$v.awardsModel.title_uz.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.awardsModel.title_uz.$model,callback:function(e){t.$set(t.$v.awardsModel.title_uz,"$model",e)},expression:"$v.awardsModel.title_uz.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.shareholder.title"))+" (RU)")]),a("v-text-field",{attrs:{error:t.$v.awardsModel.title_ru.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.awardsModel.title_ru.$model,callback:function(e){t.$set(t.$v.awardsModel.title_ru,"$model",e)},expression:"$v.awardsModel.title_ru.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.shareholder.title"))+" (EN)")]),a("v-text-field",{attrs:{error:t.$v.awardsModel.title_en.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.awardsModel.title_en.$model,callback:function(e){t.$set(t.$v.awardsModel.title_en,"$model",e)},expression:"$v.awardsModel.title_en.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.sidebar.about_bank.awards.description"))+" (UZ)")]),a("v-text-field",{attrs:{readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.awardsModel.description_uz.$model,callback:function(e){t.$set(t.$v.awardsModel.description_uz,"$model",e)},expression:"$v.awardsModel.description_uz.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.sidebar.about_bank.awards.description"))+" (RU)")]),a("v-text-field",{attrs:{readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.awardsModel.description_ru.$model,callback:function(e){t.$set(t.$v.awardsModel.description_ru,"$model",e)},expression:"$v.awardsModel.description_ru.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.sidebar.about_bank.awards.description"))+" (EN)")]),a("v-text-field",{attrs:{readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.awardsModel.description_en.$model,callback:function(e){t.$set(t.$v.awardsModel.description_en,"$model",e)},expression:"$v.awardsModel.description_en.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("file-upload",{ref:"propFile",attrs:{value:t.documentFile,disabled:"Read"===t.TYPE,label:t.$t("Dashboard.upload_file")},on:{"emit:up":t.upload}})],1)],1)],1),a("div",{staticClass:"mt-8"},[a("go-back-button"),"Create"===t.TYPE?[a("send-button",{attrs:{text:t.$t("Dashboard.create")},on:{"emit:up":t.send}})]:"Update"===t.TYPE?[a("send-button",{attrs:{text:t.$t("Dashboard.update")},on:{"emit:up":t.update}})]:t._e()],2)])])],1)},r=[],i=a("87d8"),l=a("0130"),d=a("8d9d"),o=a("9e43"),n=a("0a35"),u=a("b5ae"),c={name:"ShareholderForm",props:{TYPE:{type:String,default:""}},components:{AppCard:i["a"],SendButton:l["a"],FileUpload:d["a"],GoBackButton:o["a"],ChevronDownIcon:n["e"]},data(){return{documentFile:null,awardsModel:{title_uz:"",title_ru:"",title_en:"",description_uz:"",description_ru:"",description_en:""}}},validations:{awardsModel:{title_uz:{required:u["required"]},title_ru:{required:u["required"]},title_en:{required:u["required"]},description_uz:{},description_ru:{},description_en:{}}},mounted(){this.$route.params.id&&this.getOne()},methods:{send(){this.$v.$touch(),this.$v.$invalid?this.$toast.warning(this.$t("Dashboard.f")):(this.awardsModel.file=this.documentFile.id,this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/bank/awards/`,this.awardsModel).then(()=>{this.$toast.success(this.$t("Dashboard.c")),setTimeout(()=>{this.$router.push({name:"DashboardAwardsList"})},1500)}).catch(()=>{this.$toast.error(this.$t("Dashboard.e"))}))},update(){this.$v.$touch(),this.$v.$invalid?this.$toast.warning(this.$t("Dashboard.f")):(this.awardsModel.file=this.documentFile.id,this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/bank/awards/${this.$route.params.id}/`,this.awardsModel).then(()=>{this.$toast.success(this.$t("Dashboard.c")),setTimeout(()=>{this.$router.push({name:"DashboardAwardsList"})},1500)}).catch(()=>{this.$toast.error(this.$t("Dashboard.e"))}))},getOne(){this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/bank/awards/${this.$route.params.id}/`).then(({data:t})=>{this.awardsModel=t,this.documentFile=this.awardsModel.file})},upload(t){this.documentFile=t}}},p=c,h=a("0c7c"),m=Object(h["a"])(p,s,r,!1,null,null,null);e["a"]=m.exports},"9bb5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("awards-form",{attrs:{TYPE:t.$store.state.FORM_TYPE.CREATE}})},r=[],i=a("93a8"),l={name:"Create",components:{AwardsForm:i["a"]}},d=l,o=a("0c7c"),n=Object(o["a"])(d,s,r,!1,null,null,null);e["default"]=n.exports}}]);