(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dca8982","chunk-0ffc9c0d","chunk-2d0a3114","chunk-2d0f0bc1"],{"0130":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{loading:t.loading,disabled:t.loading,depressed:"",color:t.color,"min-width":"135","min-height":"45"},on:{click:t.click}},[a("div",{staticClass:"d-flex align-center"},[a("span",{staticClass:"text-transform-reset reset-size font-600 text-white mr-3"},[t._v(t._s(t.text))]),t._t("default",(function(){return[a("send-icon",{staticClass:"text-white",attrs:{size:"1.3x"}})]}))],2)])},l=[],o=a("0a35"),s={name:"SendButton",props:{text:{type:String,default:"Yuborish"},color:{type:String,default:"rgba(var(--primary), 1)"}},components:{SendIcon:o["J"]},data(){return{loader:null,loading:!1}},watch:{loader(){const t=this.loader;this[t]=!this[t],setTimeout(()=>this[t]=!1,1e3),this.loader=null}},methods:{click(){this.loader="loading",this.$emit("emit:up")}}},n=s,d=a("0c7c"),r=Object(d["a"])(n,i,l,!1,null,null,null);e["a"]=r.exports},1058:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"application-form-view"},[a("app-card",[a("div",{staticClass:"form-wrap pa-5 px-6"},[a("div",{staticClass:"d-flex align-center mb-8"},[a("h4",{staticClass:"text--primary text-uppercase font-700 mr-4"},[t._v(" "+t._s("Create"===t.TYPE?t.$t("Dashboard.add_new"):"Update"===t.TYPE?t.$t("Dashboard.update"):t.$t("Dashboard.read")))]),a("v-divider",{staticStyle:{"border-color":"rgb(var(--border-color), 1)"}})],1),a("div",{staticClass:"form-wrap-body"},[a("v-row",[t.applicationModel.is_completed?[a("v-col",{attrs:{md:"12"}},[a("v-alert",{attrs:{type:"error"}},[t._v("Mijoz bilan murojaat yakunlangan")])],1)]:t._e(),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("F.I.O")]),a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.full_name,callback:function(e){t.$set(t.applicationModel,"full_name",e)},expression:"applicationModel.full_name"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Telefon")]),a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"+998 (##) ### ## ##",expression:"'+998 (##) ### ## ##'"}],attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.phone,callback:function(e){t.$set(t.applicationModel,"phone",e)},expression:"applicationModel.phone"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("E-mail")]),a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.email,callback:function(e){t.$set(t.applicationModel,"email",e)},expression:"applicationModel.email"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Tug'ilgan yili")]),a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.date_of_birth,callback:function(e){t.$set(t.applicationModel,"date_of_birth",e)},expression:"applicationModel.date_of_birth"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Viloyat")]),t.applicationModel.district?["uz"===t.$i18n.locale?[a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.district.name_uz,callback:function(e){t.$set(t.applicationModel.district,"name_uz",e)},expression:"applicationModel.district.name_uz"}})]:t._e(),"ru"===t.$i18n.locale?[a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.district.name_ru,callback:function(e){t.$set(t.applicationModel.district,"name_ru",e)},expression:"applicationModel.district.name_ru"}})]:t._e(),"en"===t.$i18n.locale?[a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.district.name_en,callback:function(e){t.$set(t.applicationModel.district,"name_en",e)},expression:"applicationModel.district.name_en"}})]:t._e()]:t._e()],2)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Filial")]),t.applicationModel.filial?["uz"===t.$i18n.locale?[a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.filial.name_uz,callback:function(e){t.$set(t.applicationModel.filial,"name_uz",e)},expression:"applicationModel.filial.name_uz"}})]:t._e(),"ru"===t.$i18n.locale?[a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.filial.name_ru,callback:function(e){t.$set(t.applicationModel.filial,"name_ru",e)},expression:"applicationModel.filial.name_ru"}})]:t._e(),"en"===t.$i18n.locale?[a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.filial.name_en,callback:function(e){t.$set(t.applicationModel.filial,"name_en",e)},expression:"applicationModel.filial.name_en"}})]:t._e()]:t._e()],2)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Kredit")]),t.applicationModel.credit?["uz"===t.$i18n.locale?[a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.credit.title_uz,callback:function(e){t.$set(t.applicationModel.credit,"title_uz",e)},expression:"applicationModel.credit.title_uz"}})]:t._e(),"ru"===t.$i18n.locale?[a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.credit.title_ru,callback:function(e){t.$set(t.applicationModel.credit,"title_ru",e)},expression:"applicationModel.credit.title_ru"}})]:t._e(),"en"===t.$i18n.locale?[a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.credit.title_en,callback:function(e){t.$set(t.applicationModel.credit,"title_en",e)},expression:"applicationModel.credit.title_en"}})]:t._e()]:t._e()],2)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Kredit summasi")]),a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.credit_amount,callback:function(e){t.$set(t.applicationModel,"credit_amount",e)},expression:"applicationModel.credit_amount"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Kredit muddati "),a("span",{staticClass:"red--text"},[t._v("(oy)")])]),a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.credit_period,callback:function(e){t.$set(t.applicationModel,"credit_period",e)},expression:"applicationModel.credit_period"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Boshlang'ich to'lov "),a("span",{staticClass:"red--text"},[t._v("(%)")])]),a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.initial_payment,callback:function(e){t.$set(t.applicationModel,"initial_payment",e)},expression:"applicationModel.initial_payment"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("STIR")]),a("v-text-field",{attrs:{outlined:"","hide-details":"",readonly:""},model:{value:t.applicationModel.tax_inn,callback:function(e){t.$set(t.applicationModel,"tax_inn",e)},expression:"applicationModel.tax_inn"}})],1)]),a("v-col",{attrs:{md:"4"}}),a("v-col",{attrs:{md:"4"}},[a("file-upload",{ref:"propFile",attrs:{value:t.documentFile,readonly:"",label:"Pasport nusxasi"},on:{"emit:up":t.upload}})],1),a("v-col",{attrs:{md:"4"}},[a("file-upload",{ref:"propFile",attrs:{value:t.file,readonly:"",label:"Daromadlar to'g'risida ma'lumot"},on:{"emit:up":t.uploadFile}})],1),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Statusni o'zgartirish")]),"uz"===t.$i18n.locale?[a("v-select",{attrs:{items:t.getStatusList,readonly:t.applicationModel.is_completed,"item-text":"name_uz","item-value":"id",outlined:"","hide-details":""},on:{change:t.changeStatus},scopedSlots:t._u([{key:"append",fn:function(){return[a("chevron-down-icon",{staticClass:"text-secondary-dark",attrs:{size:"1.35x"}})]},proxy:!0}],null,!1,1761019591)})]:t._e(),"ru"===t.$i18n.locale?[a("v-select",{attrs:{items:t.getStatusList,"item-text":"name_ru","item-value":"id",outlined:"","hide-details":""},on:{change:t.changeStatus},scopedSlots:t._u([{key:"append",fn:function(){return[a("chevron-down-icon",{staticClass:"text-secondary-dark",attrs:{size:"1.35x"}})]},proxy:!0}],null,!1,1761019591),model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})]:t._e(),"en"===t.$i18n.locale?[a("v-select",{attrs:{items:t.getStatusList,"item-text":"name_en","item-value":"id",outlined:"","hide-details":""},on:{change:t.changeStatus},scopedSlots:t._u([{key:"append",fn:function(){return[a("chevron-down-icon",{staticClass:"text-secondary-dark",attrs:{size:"1.35x"}})]},proxy:!0}],null,!1,1761019591),model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})]:t._e()],2)]),a("v-col",{attrs:{md:"6"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("credit_purpose")))]),a("v-textarea",{attrs:{readonly:"",outlined:"","hide-details":"","no-resize":""},model:{value:t.applicationModel.credit_purpose,callback:function(e){t.$set(t.applicationModel,"credit_purpose",e)},expression:"applicationModel.credit_purpose"}})],1)]),a("v-col",{attrs:{md:"6"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Xabar")]),a("v-textarea",{attrs:{readonly:"",outlined:"","hide-details":"","no-resize":""},model:{value:t.applicationModel.text,callback:function(e){t.$set(t.applicationModel,"text",e)},expression:"applicationModel.text"}})],1)]),a("v-col",{attrs:{md:"12"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Mijozga javob yozish")]),a("v-textarea",{attrs:{error:t.$v.applicationRequestModel.text.$error,readonly:t.applicationModel.is_completed,outlined:"","hide-details":"","no-resize":""},model:{value:t.$v.applicationRequestModel.text.$model,callback:function(e){t.$set(t.$v.applicationRequestModel.text,"$model",e)},expression:"$v.applicationRequestModel.text.$model"}})],1)]),a("v-col",{attrs:{md:"12"}},[a("go-back-button"),a("send-button",{staticClass:"mr-5",attrs:{text:t.$t("download_pdf")},on:{"emit:up":t.generatePDF}},[[a("download-icon",{staticClass:"text-white",attrs:{size:"1.3x"}})]],2),t.applicationModel.is_completed?t._e():[a("send-button",{on:{"emit:up":t.send}})]],2)],2)],1)])]),a("generate-pdf",{ref:"html2Pdf"},[[a("section",{staticClass:"pdf-item"},[a("div",{staticClass:"pdf-item__content"},[a("div",{staticStyle:{display:"flex","align-items":"center","margin-bottom":"20px"}},[a("img",{staticStyle:{width:"90px",height:"90px"},attrs:{src:"/logo2.png",alt:""}}),a("div",{staticStyle:{"margin-left":"15px"}},[a("h4",[t._v("AsakaBank")]),a("hr",{staticStyle:{margin:"4px 0"}}),a("span",[t._v(t._s(t.$t("stock_company")))])])]),a("h1",{staticStyle:{"font-size":"30px","font-family":"var(--font-bold)","text-align":"center"}},[t._v(" "+t._s(t.$t("application"))+" "),a("span",{staticStyle:{"font-size":"26px","font-family":"var(--font-bold)"}},[t._v("№"+t._s(t.applicationModel.id))])]),a("div",{staticStyle:{padding:"12px",background:"#0009","text-align":"center",color:"#fff",margin:"36px 0"}},[t._v(" "+t._s(t.$t("application_information"))+" ")]),a("table",[a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v(t._s(t.$t("language")))]),a("td",{staticStyle:{padding:"6px"}},["uz"===t.$i18n.locale?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v("O'zbek")])]:t._e(),"ru"===t.$i18n.locale?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v("Русский")])]:t._e(),"en"===t.$i18n.locale?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v("English")])]:t._e()],2)]),a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v(t._s(t.$t("status")))]),a("td",{staticStyle:{padding:"6px"}},[t.applicationModel.status?["uz"===t.$i18n.locale?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.status.name_uz))])]:t._e(),"ru"===t.$i18n.locale?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.status.name_ru))])]:t._e(),"en"===t.$i18n.locale?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.status.name_en))])]:t._e()]:t._e()],2)]),a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v(t._s(t.$t("org_structure")))]),a("td",{staticStyle:{padding:"6px"}},[t.applicationModel.filial?["uz"===t.$i18n.locale?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.filial.name_uz))])]:t._e(),"ru"===t.$i18n.locale?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.filial.name_ru))])]:t._e(),"en"===t.$i18n.locale?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.filial.name_en))])]:t._e()]:t._e()],2)]),a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v(t._s(t.$t("Dashboard.credits.name")))]),a("td",{staticStyle:{padding:"6px"}},[t.applicationModel.credit?["uz"===t.$i18n.locale?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.credit.title_uz))])]:t._e(),"ru"===t.$i18n.locale?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.credit.title_ru))])]:t._e(),"en"===t.$i18n.locale?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.credit.title_en))])]:t._e()]:t._e()],2)]),a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v(t._s(t.$t("Credits.text3")))]),a("td",{staticStyle:{padding:"6px"}},[t.applicationModel.credit_amount?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.credit_amount))])]:t._e()],2)]),a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v(t._s(t.$t("Dashboard.credits.period")))]),a("td",{staticStyle:{padding:"6px"}},[t.applicationModel.credit_period?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.credit_period)+" oy")])]:t._e()],2)]),a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v(t._s(t.$t("credit_purpose")))]),a("td",{staticStyle:{padding:"6px"}},[t.applicationModel.credit_purpose?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.credit_purpose))])]:t._e()],2)]),a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v(t._s(t.$t("Dashboard.credits.initial_fee")))]),a("td",{staticStyle:{padding:"6px"}},[t.applicationModel.initial_payment?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.initial_payment)+"%")])]:t._e()],2)])]),a("div",{staticStyle:{padding:"12px",background:"#0009","text-align":"center",color:"#fff",margin:"36px 0"}},[t._v(" "+t._s(t.$t("dates"))+" ")]),a("table",[a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v(t._s(t.$t("date_creation")))]),a("td",{staticStyle:{padding:"6px"}},[t.applicationModel.created_date?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t._f("filterDateAndTimeHour")(t.applicationModel.created_date)))])]:t._e()],2)])]),a("div",{staticStyle:{padding:"12px",background:"#0009","text-align":"center",color:"#fff",margin:"36px 0"}},[t._v(" "+t._s(t.$t("applicant_information"))+" ")])])]),a("div",{staticClass:"html2pdf__page-break"}),a("section",{staticClass:"pdf-item"},[a("div",{staticClass:"pdf-item__content"},[a("table",[a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v(t._s(t.$t("Dashboard.AboutBank.fio")))]),a("td",{staticStyle:{padding:"6px"}},[t.applicationModel.full_name?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.full_name))])]:t._e()],2)]),a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v(t._s(t.$t("Services.OpenCard.phone")))]),a("td",{staticStyle:{padding:"6px"}},[t.applicationModel.phone?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(" "+t._s(t._f("VMask")(t.applicationModel.phone,"+### (##) ###-##-##"))+" ")])]:t._e()],2)]),a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v(t._s(t.$t("Services.OpenCard.mail")))]),a("td",{staticStyle:{padding:"6px"}},[t.applicationModel.email?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.email))])]:t._e()],2)]),a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v("Tug'ilgan sana")]),a("td",{staticStyle:{padding:"6px"}},[t.applicationModel.date_of_birth?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.date_of_birth))])]:t._e()],2)]),a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v(t._s(t.$t("REQUISITES.Requisites.row5")))]),a("td",{staticStyle:{padding:"6px"}},[t.applicationModel.tax_inn?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.tax_inn))])]:t._e()],2)]),a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v(t._s(t.$t("region")))]),a("td",{staticStyle:{padding:"6px"}},[t.applicationModel.district?["uz"===t.$i18n.locale?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.district.name_uz))])]:t._e(),"ru"===t.$i18n.locale?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.district.name_ru))])]:t._e(),"en"===t.$i18n.locale?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.district.name_en))])]:t._e()]:t._e()],2)]),a("tr",[a("td",{staticStyle:{width:"200px","text-align":"right","font-family":"var(--font-bold)"}},[t._v(t._s(t.$t("Services.OpenCard.message")))]),a("td",{staticStyle:{padding:"6px"}},[t.applicationModel.text?[a("div",{staticStyle:{"margin-left":"12px"}},[t._v(t._s(t.applicationModel.text))])]:t._e()],2)])])])])]],2)],1)},l=[],o=a("87d8"),s=a("8d9d"),n=a("0130"),d=a("9e43"),r=a("461c"),p=a("0a35"),c=a("2f62"),u=a("b5ae"),m={name:"ApplicationForm",props:{TYPE:{type:String,default:""}},components:{AppCard:o["a"],FileUpload:s["a"],SendButton:n["a"],GoBackButton:d["a"],GeneratePdf:r["a"],FileTextIcon:p["q"],ChevronDownIcon:p["e"],DownloadIcon:p["k"]},data(){return{applicationModel:{},documentFile:null,file:null,applicationRequestModel:{application:+this.$route.params.id,text:"",file:null}}},validations:{applicationRequestModel:{text:{required:u["required"]}}},mounted(){this.getOne(),this.fetchStatusList()},computed:{...Object(c["c"])({getStatusList:"getStatusList"})},methods:{...Object(c["b"])({fetchStatusList:"fetchStatusList"}),generatePDF(){const{html2Pdf:t}=this.$refs;t.$children[0].generatePdf()},getOne(){this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/credit_application/action/${this.$route.params.id}/`).then(({data:t})=>{this.applicationModel=t,this.applicationRequestModel.text=t.application_outcome?t.application_outcome.text:"",this.documentFile=this.applicationModel.passport,this.file=this.applicationModel.file})},changeStatus(t){this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/credit_application/action/${this.$route.params.id}/`,{status:t}).then(()=>{this.$toast.success("Status o'zgartirildi")}).catch(()=>{this.$toast.error("O'zgartirishda xatolik")})},send(){this.$v.$touch(),this.$v.$invalid||this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/application/result/`,this.applicationRequestModel).then(()=>{this.$toast.success("Murojat mijozga yuborildi"),setTimeout(()=>{this.$router.push({name:"PrivateClientsCreditApplicationsList"})},1500)}).catch(t=>{this.$toast.error(t.data.join())})},upload(t){this.documentFile=t},uploadFile(t){this.file=t}}},f=m,_=a("0c7c"),v=Object(_["a"])(f,i,l,!1,null,null,null);e["a"]=v.exports},"10bb":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("application-form",{attrs:{TYPE:t.$store.state.FORM_TYPE.READ}})},l=[],o=a("1058"),s={name:"Read",components:{ApplicationForm:o["a"]}},n=s,d=a("0c7c"),r=Object(d["a"])(n,i,l,!1,null,"2aa2abbb",null);e["default"]=r.exports},1727:function(t,e,a){},3803:function(t,e,a){},"461c":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-html2pdf",t._g(t._b({ref:"html2Pdf",attrs:{"html-to-pdf-options":t.pdfOptions,"show-layout":!1,"float-layout":!0,"enable-download":!0,"preview-modal":!1,"paginate-elements-by-height":1100,"pdf-quality":2,"pdf-format":"a4","pdf-orientation":"portrait","pdf-content-width":"800px","manual-pagination":!1}},"vue-html2pdf",t.$attrs,!1),t.$listeners),[a("section",{attrs:{slot:"pdf-content"},slot:"pdf-content"},[t._t("default")],2)])},l=[],o=a("6480"),s={name:"GeneratePDF",props:{documentName:{type:String,default:"application.pdf"}},data(){return{pdfOptions:{image:{type:"jpg",quality:.98,useCORS:!1},filename:this.documentName}}},components:{VueHtml2pdf:o["a"]}},n=s,d=(a("d1d6"),a("0c7c")),r=Object(d["a"])(n,i,l,!1,null,null,null);e["a"]=r.exports},"87d8":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-card-wrap"},[t.title?[a("div",{staticClass:"d-flex align-center mb-2"},[a("h5",{staticClass:"app-card-title font-600 text-secondary-dark"},[t._v(" "+t._s(t.title)+" ")]),a("v-spacer"),t._t("add-view")],2)]:t._e(),a("div",{staticClass:"admin-app-card app-card__scrollable rounded-lg"},[a("div",{staticClass:"app-card__scrollable--view p-relative"},[t._t("default")],2)])],2)},l=[],o=a("d1f9"),s={name:"AppCard",props:{title:{type:String,default:""}},components:{I18nVue:o["a"]}},n=s,d=(a("f8c3"),a("0c7c")),r=Object(d["a"])(n,i,l,!1,null,"124af349",null);e["a"]=r.exports},"8d9d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(" "+t._s(t.label)+" "),t.subLabel?[a("span",{staticClass:"red--text"},[t._v("("+t._s(t.subLabel)+")")])]:t._e()],2),a("div",{staticClass:"d-flex align-center"},[a("v-file-input",{staticClass:"file-uploader mr-2",attrs:{disabled:t.disabled||t.readonly,"prepend-icon":"",accept:"image/png, image/jpeg, image/jpg, image/bmp",outlined:"","hide-details":""},on:{change:t.upload},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-btn",{staticStyle:{"margin-top":"-6px"},attrs:{depressed:"",color:"rgba(var(--primary), 1)"}},[a("span",{staticClass:"text-transform-reset text-white"},[t._v(t._s(t.$t("Dashboard.upload_file")))])])]},proxy:!0}]),model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),t.value?[a("span",{staticClass:"d-none"},[t._v(t._s(t.hidden))]),t.fileThumb.visible?[a("div",{staticClass:"file-upload-wrap rounded overflow-hidden p-relative"},[t.extension?[a("a",{staticClass:"border-all d-flex align-center justify-center w-100 h-100 rounded",attrs:{href:"#"}},[a("file-text-icon",{staticClass:"grey--text",attrs:{size:"1.5x"}})],1)]:[a("img",{staticClass:"d-block img-cover",attrs:{src:t.$http.defaults.baseURL+t.fileThumb.url,alt:"Card image"}})],a("div",{staticClass:"file-upload-actions p-absolute w-100 h-100 d-flex align-center justify-space-around px-2 transition-ease-in-out"},[a("a",{staticClass:"rounded-circle d-flex align-center justify-center outline-transparent",attrs:{href:t.$http.defaults.baseURL+t.fileThumb.url,download:"",target:"_blank",rel:"noopener noreferrer"}},[a("download-icon",{staticClass:"text-white d-block",attrs:{size:"1.2x"}})],1),t.readonly?t._e():[a("button",{staticClass:"rounded-circle d-flex align-center justify-center outline-transparent",attrs:{type:"button"},on:{click:t.deleteFile}},[a("trash2-icon",{staticClass:"text-white d-block",attrs:{size:"1.1x"}})],1)]],2)],2)]:t._e()]:t._e()],2)])},l=[],o=a("0a35"),s={name:"FileUpload",props:{label:{type:String},subLabel:{type:String,default:""},disabled:{type:Boolean,default:!1},value:{type:Object,default:()=>{}},readonly:{type:Boolean,default:!1}},components:{EyeIcon:o["n"],Trash2Icon:o["M"],FileTextIcon:o["q"],DownloadIcon:o["k"]},computed:{extension(){return["pdf","PDF","doc","docx","DOC","csv","CSV","xls","XLS"].includes(this.fileThumb.url.slice(-3))},hidden(){return{url:this.fileThumb.url=this.value.url,visible:this.fileThumb.visible=!0}}},watch:{value(t){t&&(this.fileThumb.visible=!0,this.fileThumb.url=t.url)}},data(){return{template:"",file:[],fileThumb:{url:"",visible:!1},fileList:[]}},methods:{upload(t){let e=new FormData;e.append("file",t),this.$http.post("/upload/",e).then(({data:t})=>{this.$toast.success("Rasm yuklandi"),this.$emit("emit:up",t),this.fileThumb.url=t.url,this.fileThumb.visible=!0}).catch(()=>this.$t("Dashboard.e"))},deleteFile(t){confirm(this.$t("Dashboard.d"))&&(this.fileThumb.visible=!1,this.fileThumb.url="",this.file=[])}}},n=s,d=a("0c7c"),r=Object(d["a"])(n,i,l,!1,null,null,null);e["a"]=r.exports},"9e43":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{staticClass:"mr-5",attrs:{depressed:"",color:"warning","min-width":"135","min-height":"45"},on:{click:function(e){return t.$router.go(-1)}}},[a("div",{staticClass:"d-flex align-center justify-space-between w-100"},[a("chevron-left-icon",{staticClass:"ml-n1 mr-1",attrs:{size:"1.5x"}}),a("span",{staticClass:"text-transform-reset reset-size font-600 text-white"},[t._v(t._s(t.$t("Dashboard.back")))])],1)])},l=[],o=a("0a35"),s={name:"GoBackButton",components:{ChevronLeftIcon:o["f"]}},n=s,d=a("0c7c"),r=Object(d["a"])(n,i,l,!1,null,null,null);e["a"]=r.exports},d1d6:function(t,e,a){"use strict";a("3803")},f8c3:function(t,e,a){"use strict";a("1727")}}]);