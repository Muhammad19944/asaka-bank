(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-538874f6"],{"4f26":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("deposit-boxes",{attrs:{TYPE:e.$store.state.FORM_TYPE.READ}})},d=[],r=o("a036"),a={name:"Create",components:{DepositBoxes:r["a"]}},i=a,l=o("0c7c"),p=Object(l["a"])(i,s,d,!1,null,null,null);t["default"]=p.exports},a036:function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"deposit-form-view"},[o("app-card",[o("div",{staticClass:"form-wrap pa-5 px-6 d-flex flex-column m-h-100"},[o("div",{staticClass:"d-flex align-center mb-8"},[o("h4",{staticClass:"text--primary text-uppercase font-700 mr-4"},[e._v(" "+e._s("Create"===e.TYPE?e.$t("Dashboard.add_new"):"Update"===e.TYPE?e.$t("Dashboard.update"):e.$t("Dashboard.read"))+" ")]),o("v-divider",{staticStyle:{"border-color":"rgb(var(--border-color), 1)"}})],1),o("div",{staticClass:"flex-1"},[o("v-row",[o("v-col",{attrs:{md:"4"}},[o("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[o("h5",{staticClass:"font-600 dark-text mb-1"},[e._v(e._s(e.$t("Dashboard.deposit_box.name"))+" (UZ)")]),o("v-text-field",{attrs:{error:e.$v.depositModel.name_uz.$error,readonly:"Read"===e.TYPE,outlined:"","hide-details":""},model:{value:e.$v.depositModel.name_uz.$model,callback:function(t){e.$set(e.$v.depositModel.name_uz,"$model",t)},expression:"$v.depositModel.name_uz.$model"}})],1)]),o("v-col",{attrs:{md:"4"}},[o("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[o("h5",{staticClass:"font-600 dark-text mb-1"},[e._v(e._s(e.$t("Dashboard.deposit_box.name"))+" (RU)")]),o("v-text-field",{attrs:{error:e.$v.depositModel.name_ru.$error,readonly:"Read"===e.TYPE,outlined:"","hide-details":""},model:{value:e.$v.depositModel.name_ru.$model,callback:function(t){e.$set(e.$v.depositModel.name_ru,"$model",t)},expression:"$v.depositModel.name_ru.$model"}})],1)]),o("v-col",{attrs:{md:"4"}},[o("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[o("h5",{staticClass:"font-600 dark-text mb-1"},[e._v(e._s(e.$t("Dashboard.deposit_box.name"))+" (EN)")]),o("v-text-field",{attrs:{error:e.$v.depositModel.name_en.$error,readonly:"Read"===e.TYPE,outlined:"","hide-details":""},model:{value:e.$v.depositModel.name_en.$model,callback:function(t){e.$set(e.$v.depositModel.name_en,"$model",t)},expression:"$v.depositModel.name_en.$model"}})],1)]),o("v-col",{attrs:{md:"4"}},[o("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[o("h5",{staticClass:"font-600 dark-text mb-1"},[e._v(e._s(e.$t("Dashboard.deposit_box.size")))]),o("v-text-field",{attrs:{error:e.$v.depositModel.box_size.$error,readonly:"Read"===e.TYPE,outlined:"","hide-details":""},model:{value:e.$v.depositModel.box_size.$model,callback:function(t){e.$set(e.$v.depositModel.box_size,"$model",t)},expression:"$v.depositModel.box_size.$model"}})],1)]),o("v-col",{attrs:{md:"4"}},[o("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[o("h5",{staticClass:"font-600 dark-text mb-1"},[e._v(e._s(e.$t("Dashboard.deposit_box.rent_price")))]),o("v-text-field",{attrs:{error:e.$v.depositModel.rent_price.$error,readonly:"Read"===e.TYPE,outlined:"","hide-details":""},model:{value:e.$v.depositModel.rent_price.$model,callback:function(t){e.$set(e.$v.depositModel.rent_price,"$model",t)},expression:"$v.depositModel.rent_price.$model"}})],1)]),o("v-col",{attrs:{md:"4"}},[o("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[o("h5",{staticClass:"font-600 dark-text mb-1"},[e._v(e._s(e.$t("Dashboard.deposit_box.period"))+" (UZ)")]),o("v-text-field",{attrs:{error:e.$v.depositModel.period.$error,readonly:"Read"===e.TYPE,outlined:"","hide-details":""},model:{value:e.$v.depositModel.period.$model,callback:function(t){e.$set(e.$v.depositModel.period,"$model",t)},expression:"$v.depositModel.period.$model"}})],1)]),o("v-col",{attrs:{md:"4"}},[o("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[o("h5",{staticClass:"font-600 dark-text mb-1"},[e._v(e._s(e.$t("Dashboard.deposit_box.period"))+" (RU)")]),o("v-text-field",{attrs:{error:e.$v.depositModel.period_ru.$error,readonly:"Read"===e.TYPE,outlined:"","hide-details":""},model:{value:e.$v.depositModel.period_ru.$model,callback:function(t){e.$set(e.$v.depositModel.period_ru,"$model",t)},expression:"$v.depositModel.period_ru.$model"}})],1)]),o("v-col",{attrs:{md:"4"}},[o("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[o("h5",{staticClass:"font-600 dark-text mb-1"},[e._v(e._s(e.$t("Dashboard.deposit_box.period"))+" (EN)")]),o("v-text-field",{attrs:{error:e.$v.depositModel.period_en.$error,readonly:"Read"===e.TYPE,outlined:"","hide-details":""},model:{value:e.$v.depositModel.period_en.$model,callback:function(t){e.$set(e.$v.depositModel.period_en,"$model",t)},expression:"$v.depositModel.period_en.$model"}})],1)]),o("v-col",{attrs:{md:"4"}},[o("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[o("h5",{staticClass:"font-600 dark-text mb-1"},[e._v(e._s(e.$t("Dashboard.deposit_box.lost_key_fee")))]),o("v-text-field",{attrs:{error:e.$v.depositModel.lost_key_fee.$error,readonly:"Read"===e.TYPE,outlined:"","hide-details":""},model:{value:e.$v.depositModel.lost_key_fee.$model,callback:function(t){e.$set(e.$v.depositModel.lost_key_fee,"$model",t)},expression:"$v.depositModel.lost_key_fee.$model"}})],1)])],1)],1),o("div",{staticClass:"mt-8"},[o("go-back-button"),"Create"===e.TYPE?[o("send-button",{attrs:{text:e.$t("Dashboard.add_new")},on:{"emit:up":e.send}})]:"Update"===e.TYPE?[o("send-button",{attrs:{text:e.$t("Dashboard.update")},on:{"emit:up":e.update}})]:e._e()],2)])])],1)},d=[],r=o("87d8"),a=o("0130"),i=o("9e43"),l=o("b5ae"),p=o("0a35"),n={name:"DepositBoxes",props:{TYPE:{type:String,default:""}},components:{AppCard:r["a"],SendButton:a["a"],GoBackButton:i["a"],ChevronDownIcon:p["e"]},data(){return{depositList:[],depositModel:{name_uz:"",name_ru:"",name_en:"",box_size:"",rent_price:"",period:"",period_ru:"",period_en:"",lost_key_fee:null}}},validations:{depositModel:{name_uz:{required:l["required"]},name_ru:{required:l["required"]},name_en:{required:l["required"]},box_size:{required:l["required"]},rent_price:{required:l["required"]},period:{required:l["required"]},period_ru:{required:l["required"]},period_en:{required:l["required"]},lost_key_fee:{required:l["required"]}}},watch:{"depositModel.rent_price"(e){this.depositModel.rent_price=this.$options.filters.filterNumberFormatThousands(e)},"depositModel.lost_key_fee"(e){this.depositModel.lost_key_fee=this.$options.filters.filterNumberFormatThousands(e)}},mounted(){this.$route.params.id&&this.getOne()},methods:{send(){this.$v.$touch(),this.$v.$invalid?this.$toast.warning("Field to'ldirilishi shart"):(this.depositModel.lost_key_fee=this.depositModel.lost_key_fee.replace(/\D/g,""),this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/depository_box_type/`,this.depositModel).then(e=>{this.$toast.success("Yaratildi"),setTimeout(()=>{this.$router.push({name:"DashboardDepositsBoxesList"})},1500)}).catch(e=>{this.$toast.error("Yaratishda xatolik")}))},update(){this.$v.$touch(),this.$v.$invalid?this.$toast.warning("Field to'ldirilishi shart"):(this.depositModel.lost_key_fee=this.depositModel.lost_key_fee.replace(/\D/g,""),this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/depository_box_type/${this.$route.params.id}/`,this.depositModel).then(e=>{this.$toast.success("Yangilandi"),setTimeout(()=>{this.$router.push({name:"DashboardDepositsBoxesList"})},1500)}).catch(e=>{this.$toast.error("Yangilashda xatolik")}))},getOne(){this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/depository_box_type/${this.$route.params.id}/`).then(({data:e})=>{this.depositModel=e})}}},m=n,u=o("0c7c"),_=Object(u["a"])(m,s,d,!1,null,null,null);t["a"]=_.exports}}]);