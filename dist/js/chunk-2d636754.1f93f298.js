(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d636754"],{"42c1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("important-facts-form",{attrs:{TYPE:t.$store.state.FORM_TYPE.READ}})},o=[],i=a("88e8"),l={name:"Read",components:{ImportantFactsForm:i["a"]}},n=l,r=a("0c7c"),d=Object(r["a"])(n,s,o,!1,null,null,null);e["default"]=d.exports},"88e8":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"documents-form-view"},[a("app-card",[a("div",{staticClass:"form-wrap pa-5 px-6 d-flex flex-column m-h-100"},[a("div",{staticClass:"d-flex align-center mb-8"},[a("h4",{staticClass:"text--primary text-uppercase font-700 mr-4"},[t._v(" "+t._s("Create"===t.TYPE?t.$t("Dashboard.add_new"):"Update"===t.TYPE?t.$t("Dashboard.update"):t.$t("Dashboard.read"))+" ")]),a("v-divider",{staticStyle:{"border-color":"rgb(var(--border-color), 1)"}})],1),a("div",{staticClass:"app-collapse--advanced mb-10"},[a("v-expansion-panels",{staticClass:"border-all",attrs:{accordion:"",multiple:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"py-5 font-600 reset-size"},[t._v(" YILLAR ")]),a("v-expansion-panel-content",[a("documents-optional",{attrs:{TYPE:t.TYPE}})],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"py-5 font-600 reset-size"},[t._v(" HUJJATLAR ")]),a("v-expansion-panel-content",[a("documents-files",{attrs:{TYPE:t.TYPE}})],1)],1)],1)],1)])])],1)},o=[],i=a("87d8"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-wrap"},[a("div",{staticClass:"flex-1"},[a("v-row",[a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Hujjat yillari (UZ)")]),a("v-text-field",{attrs:{error:t.$v.documentsModel.title_uz.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.documentsModel.title_uz.$model,callback:function(e){t.$set(t.$v.documentsModel.title_uz,"$model",e)},expression:"$v.documentsModel.title_uz.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Hujjat yillari (RU)")]),a("v-text-field",{attrs:{error:t.$v.documentsModel.title_ru.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.documentsModel.title_ru.$model,callback:function(e){t.$set(t.$v.documentsModel.title_ru,"$model",e)},expression:"$v.documentsModel.title_ru.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Hujjat yillari (EN)")]),a("v-text-field",{attrs:{error:t.$v.documentsModel.title_en.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.documentsModel.title_en.$model,callback:function(e){t.$set(t.$v.documentsModel.title_en,"$model",e)},expression:"$v.documentsModel.title_en.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.branch.type")))]),"uz"===t.$i18n.locale?[a("v-select",{attrs:{items:t.$store.state.ANNUAL_DOCUMENTS,"item-text":"title_uz","item-value":"value",readonly:"Read"===t.TYPE,outlined:"","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[a("chevron-down-icon",{staticClass:"text-secondary-dark",attrs:{size:"1.35x"}})]},proxy:!0}],null,!1,1761019591),model:{value:t.documentsModel.type,callback:function(e){t.$set(t.documentsModel,"type",e)},expression:"documentsModel.type"}})]:t._e(),"ru"===t.$i18n.locale?[a("v-select",{attrs:{items:t.$store.state.ANNUAL_DOCUMENTS,"item-text":"title_ru","item-value":"value",readonly:"Read"===t.TYPE,outlined:"","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[a("chevron-down-icon",{staticClass:"text-secondary-dark",attrs:{size:"1.35x"}})]},proxy:!0}],null,!1,1761019591),model:{value:t.documentsModel.type,callback:function(e){t.$set(t.documentsModel,"type",e)},expression:"documentsModel.type"}})]:t._e(),"en"===t.$i18n.locale?[a("v-select",{attrs:{items:t.$store.state.ANNUAL_DOCUMENTS,"item-text":"title_en","item-value":"value",readonly:"Read"===t.TYPE,outlined:"","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[a("chevron-down-icon",{staticClass:"text-secondary-dark",attrs:{size:"1.35x"}})]},proxy:!0}],null,!1,1761019591),model:{value:t.documentsModel.type,callback:function(e){t.$set(t.documentsModel,"type",e)},expression:"documentsModel.type"}})]:t._e()],2)])],1),a("v-row",[a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"mt-8"},[a("go-back-button"),"Create"===t.TYPE?[a("send-button",{attrs:{text:t.$t("Dashboard.create")},on:{"emit:up":t.send}})]:"Update"===t.TYPE?[a("send-button",{attrs:{text:t.$t("Dashboard.update")},on:{"emit:up":t.update}})]:t._e()],2)])],1)],1)])},n=[],r=a("b5ae"),d=a("0a35"),c=a("0130"),u=a("9e43"),p={name:"DocumentsOptional",components:{ChevronDownIcon:d["e"],SendButton:c["a"],GoBackButton:u["a"]},props:{TYPE:{type:String,default:""}},data(){return{documentsModel:{title_uz:"",title_ru:"",title_en:"",type:""}}},validations:{documentsModel:{title_uz:{required:r["required"]},title_ru:{required:r["required"]},title_en:{required:r["required"]}}},mounted(){this.$route.params.id&&this.getOne()},methods:{send(){this.$http.post(this.$store.state.auth.COMPANY_ID+"/bank/finance_indication_title/",this.documentsModel).then(({data:t})=>{this.$toast.success("Yaratildi"),this.$store.state.CREATED_IMPORTANT_FACTS_ID=t.id,setTimeout(()=>{this.$router.push({name:"OtherSectionImportantFactsList"})},1500)}).catch(t=>{this.$toast.error("Yaratishda xatolik")})},update(){this.$route.params.id&&(this.$store.state.CREATED_IMPORTANT_FACTS_ID=this.$route.params.id),this.$http.put(`${this.$store.state.auth.COMPANY_ID}/bank/finance_indication_title/${this.$store.state.CREATED_IMPORTANT_FACTS_ID}`,this.documentsModel).then(t=>{this.$toast.success("Yangilandi"),setTimeout(()=>{this.$router.push({name:"OtherSectionImportantFactsList"})},1500)}).catch(t=>{this.$toast.error("Yangilashda xatolik!")})},getOne(){this.$store.state.CREATED_IMPORTANT_FACTS_ID=this.$route.params.id,this.$http.get(`${this.$store.state.auth.COMPANY_ID}/bank/finance_indication_title/${this.$store.state.CREATED_IMPORTANT_FACTS_ID}`,{params:{type:"present_facts"}}).then(({data:t})=>{this.documentsModel=t})}}},m=p,h=a("0c7c"),_=Object(h["a"])(m,l,n,!1,null,"d82fefae",null),f=_.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-wrap"},[null===t.$store.state.CREATED_IMPORTANT_FACTS_ID?[a("v-alert",{attrs:{type:"error"}},[t._v("Birinchi hujjat yillari yaratilishi shart")])]:t._e(),a("div",{staticClass:"flex-1"},[a("v-row",[a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.document.title"))+" (UZ)")]),a("v-text-field",{attrs:{error:t.$v.documentsModel.title_uz.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.documentsModel.title_uz.$model,callback:function(e){t.$set(t.$v.documentsModel.title_uz,"$model",e)},expression:"$v.documentsModel.title_uz.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.document.title"))+" (RU)")]),a("v-text-field",{attrs:{error:t.$v.documentsModel.title_ru.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.documentsModel.title_ru.$model,callback:function(e){t.$set(t.$v.documentsModel.title_ru,"$model",e)},expression:"$v.documentsModel.title_ru.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.document.title"))+" (EN)")]),a("v-text-field",{attrs:{error:t.$v.documentsModel.title_en.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.documentsModel.title_en.$model,callback:function(e){t.$set(t.$v.documentsModel.title_en,"$model",e)},expression:"$v.documentsModel.title_en.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("file-upload",{ref:"documentFile",attrs:{value:t.documentFile,label:t.$t("Dashboard.upload_file")},on:{"emit:up":t.upload}})],1),"Create"!==t.TYPE&&"Read"!==t.TYPE?[a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1",staticStyle:{opacity:"0"}},[t._v("Hidden text")]),a("send-button",{attrs:{text:t.$t("Dashboard.add_new")},on:{"emit:up":t.send}},[a("plus-circle-icon",{staticClass:"text-white",attrs:{size:"1.3x"}})],1)],1)])]:t._e()],2),"Create"!==t.TYPE?[a("v-row",t._l(t.documentsList,(function(e,s){return a("v-col",{key:s,attrs:{md:"4"}},[a("div",{staticClass:"credit-widget pa-5 rounded-lg d-flex align-center overflow-hidden p-relative"},[a("h3",{staticClass:"dark-text font-600 mb-0",domProps:{innerHTML:t._s(e.title_uz)}}),a("div",{staticClass:"\n                                app-slide-overlay\n                                p-absolute\n                                w-100\n                                h-100\n                                d-flex\n                                align-center\n                                justify-center\n                                text-white\n                                transition-ease-in-out\n                            "},[a("v-tooltip",{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(s){var o=s.on,i=s.attrs;return[a("v-btn",t._g(t._b({staticClass:"\n                                            border-all\n                                            pa-1\n                                            rounded-circle\n                                            d-flex\n                                            align-center\n                                            justify-center\n                                            outline-transparent\n                                            mr-4\n                                            transition-fast-out-slow-in\n                                        ",attrs:{disabled:null===t.$store.state.CREATED_IMPORTANT_FACTS_ID||"Read"===t.TYPE,color:"primary",large:"",dark:"",icon:"",depressed:""},on:{click:function(a){return t.propUpdate(e)}}},"v-btn",i,!1),o),[a("edit2-icon",{staticClass:"text-white d-block",attrs:{size:"1.2x"}})],1)]}}],null,!0)},[a("span",[t._v(t._s(t.$t("Dashboard.update")))])]),a("v-tooltip",{attrs:{top:"",color:"danger"},scopedSlots:t._u([{key:"activator",fn:function(s){var o=s.on,i=s.attrs;return[a("v-btn",t._g(t._b({staticClass:"\n                                            border-all\n                                            pa-1\n                                            rounded-circle\n                                            d-flex\n                                            align-center\n                                            justify-center\n                                            outline-transparent\n                                            mr-4\n                                            transition-fast-out-slow-in\n                                        ",attrs:{disabled:null===t.$store.state.CREATED_IMPORTANT_FACTS_ID||"Read"===t.TYPE,color:"primary",large:"",dark:"",icon:"",depressed:""},on:{click:function(a){return t.deleteProp(e.id)}}},"v-btn",i,!1),o),[a("trash2-icon",{staticClass:"text-white d-block",attrs:{size:"1.3x"}})],1)]}}],null,!0)},[a("span",[t._v(t._s(t.$t("Dashboard.delete")))])])],1)])])})),1)]:t._e()],2),a("div",{staticClass:"mt-8"},["Create"!==t.TYPE?[a("go-back-button"),"Read"!==t.TYPE?[a("send-button",{attrs:{text:t.$t("Dashboard.update")},on:{"emit:up":t.update}})]:t._e()]:[a("go-back-button"),t.isDocumentCreated?[a("send-button",{attrs:{text:t.$t("Dashboard.update")},on:{"emit:up":t.update}})]:[a("send-button",{attrs:{text:t.$t("Dashboard.add_new")},on:{"emit:up":t.send}})]]],2)],2)},$=[],b=a("8d9d"),C={name:"DocumentsFiles",props:{TYPE:{type:String,default:""}},components:{FileUpload:b["a"],SendButton:c["a"],GoBackButton:u["a"],Edit2Icon:d["l"],Trash2Icon:d["M"],PlusCircleIcon:d["E"]},data(){return{documentFile:null,documentsModel:{title_uz:"",title_ru:"",title_en:"",type:"present_facts",file:null},documentsList:[],isDocumentCreated:!1}},validations:{documentsModel:{title_uz:{required:r["required"]},title_ru:{required:r["required"]},title_en:{required:r["required"]}}},mounted(){this.getAll()},methods:{getAll(){this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/bank/finance_indication_title/${this.$store.state.CREATED_IMPORTANT_FACTS_ID}/many_documents/`,{params:{type:"present_facts"}}).then(({data:t})=>{this.documentsList=t.results})},upload(t){this.documentFile=t},send(){this.documentsModel.file=this.documentFile,this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/bank/finance_indication_title/${this.$store.state.CREATED_IMPORTANT_FACTS_ID}/many_documents/`,this.documentsModel).then(({data:t})=>{this.$toast.success("Yaratildi"),this.isDocumentCreated=!0,this.getAll()})},update(){this.documentsModel.hasOwnProperty("id")?(this.documentsModel.file=this.documentFile,this.$route.params.id&&(this.$store.state.CREATED_IMPORTANT_FACTS_ID=this.$route.params.id),this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/bank/finance_indication_title/${this.$store.state.CREATED_IMPORTANT_FACTS_ID}/many_documents/${this.documentsModel.id}/`,this.documentsModel).then(t=>{this.$toast.success("Yangilandi"),this.getAll()}).catch(t=>{this.$toast.error("Yangilashda xatolik")})):this.$toast.warning("Field to'ldirilishi shart")},propUpdate(t){this.documentsModel={...t},this.documentFile=t.file},deleteProp(t){confirm("O'chirishni xoxlaysizmi ?")&&this.$http.delete(`/${this.$store.state.auth.COMPANY_ID}/bank/finance_indication_title/${this.$store.state.CREATED_IMPORTANT_FACTS_ID}/many_documents/${t}/`).then(t=>{this.$toast.success("O'chirildi"),this.getAll()}).catch(t=>{this.$toast.error("O'chirishda xatolik")})}}},x=C,T=Object(h["a"])(x,v,$,!1,null,"1c4d9faa",null),y=T.exports,M={name:"AnnualDocumentsForm",props:{TYPE:{type:String,default:""}},components:{AppCard:i["a"],DocumentsOptional:f,DocumentsFiles:y},data(){return{panel:[0]}}},g=M,D=Object(h["a"])(g,s,o,!1,null,null,null);e["a"]=D.exports},"8d9d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(" "+t._s(t.label)+" "),t.subLabel?[a("span",{staticClass:"red--text"},[t._v("("+t._s(t.subLabel)+")")])]:t._e()],2),a("div",{staticClass:"d-flex align-center"},[a("v-file-input",{staticClass:"file-uploader mr-2",attrs:{disabled:t.disabled||t.readonly,"prepend-icon":"",accept:"image/png, image/jpeg, image/jpg, image/bmp",outlined:"","hide-details":""},on:{change:t.upload},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-btn",{staticStyle:{"margin-top":"-6px"},attrs:{depressed:"",color:"rgba(var(--primary), 1)"}},[a("span",{staticClass:"text-transform-reset text-white"},[t._v(t._s(t.$t("Dashboard.upload_file")))])])]},proxy:!0}]),model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),t.value?[a("span",{staticClass:"d-none"},[t._v(t._s(t.hidden))]),t.fileThumb.visible?[a("div",{staticClass:"file-upload-wrap rounded overflow-hidden p-relative"},[t.extension?[a("a",{staticClass:"border-all d-flex align-center justify-center w-100 h-100 rounded",attrs:{href:"#"}},[a("file-text-icon",{staticClass:"grey--text",attrs:{size:"1.5x"}})],1)]:[a("img",{staticClass:"d-block img-cover",attrs:{src:t.$http.defaults.baseURL+t.fileThumb.url,alt:"Card image"}})],a("div",{staticClass:"file-upload-actions p-absolute w-100 h-100 d-flex align-center justify-space-around px-2 transition-ease-in-out"},[a("a",{staticClass:"rounded-circle d-flex align-center justify-center outline-transparent",attrs:{href:t.$http.defaults.baseURL+t.fileThumb.url,download:"",target:"_blank",rel:"noopener noreferrer"}},[a("download-icon",{staticClass:"text-white d-block",attrs:{size:"1.2x"}})],1),t.readonly?t._e():[a("button",{staticClass:"rounded-circle d-flex align-center justify-center outline-transparent",attrs:{type:"button"},on:{click:t.deleteFile}},[a("trash2-icon",{staticClass:"text-white d-block",attrs:{size:"1.1x"}})],1)]],2)],2)]:t._e()]:t._e()],2)])},o=[],i=a("0a35"),l={name:"FileUpload",props:{label:{type:String},subLabel:{type:String,default:""},disabled:{type:Boolean,default:!1},value:{type:Object,default:()=>{}},readonly:{type:Boolean,default:!1}},components:{EyeIcon:i["n"],Trash2Icon:i["M"],FileTextIcon:i["q"],DownloadIcon:i["k"]},computed:{extension(){return["pdf","PDF","doc","docx","DOC","csv","CSV","xls","XLS"].includes(this.fileThumb.url.slice(-3))},hidden(){return{url:this.fileThumb.url=this.value.url,visible:this.fileThumb.visible=!0}}},watch:{value(t){t&&(this.fileThumb.visible=!0,this.fileThumb.url=t.url)}},data(){return{template:"",file:[],fileThumb:{url:"",visible:!1},fileList:[]}},methods:{upload(t){let e=new FormData;e.append("file",t),this.$http.post("/upload/",e).then(({data:t})=>{this.$toast.success("Rasm yuklandi"),this.$emit("emit:up",t),this.fileThumb.url=t.url,this.fileThumb.visible=!0}).catch(()=>this.$t("Dashboard.e"))},deleteFile(t){confirm(this.$t("Dashboard.d"))&&(this.fileThumb.visible=!1,this.fileThumb.url="",this.file=[])}}},n=l,r=a("0c7c"),d=Object(r["a"])(n,s,o,!1,null,null,null);e["a"]=d.exports}}]);