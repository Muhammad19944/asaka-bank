(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bee73b5a"],{"86e5":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news-form-view"},[a("app-card",[a("div",{staticClass:"form-wrap pa-5 px-6"},[a("div",{staticClass:"d-flex align-center mb-8"},[a("h4",{staticClass:"text--primary text-uppercase font-700 mr-4"},[t._v(" "+t._s("Create"===t.TYPE?t.$t("Dashboard.add_new"):"Update"===t.TYPE?t.$t("Dashboard.update"):t.$t("Dashboard.read"))+" ")]),a("v-divider",{staticStyle:{"border-color":"rgb(var(--border-color), 1)"}})],1),a("div",{staticClass:"app-collapse--advanced mb-10"},[a("v-expansion-panels",{staticClass:"border-all",attrs:{accordion:"",multiple:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"py-5 font-600 reset-size"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.add"}})],1),a("v-expansion-panel-content",[a("add-staff",{attrs:{TYPE:t.TYPE}})],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"py-5 font-600 reset-size"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.bio"}})],1),a("v-expansion-panel-content",[a("staff-biography",{attrs:{TYPE:t.TYPE}})],1)],1)],1)],1)])])],1)},o=[],r=a("87d8"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-wrap-body"},[a("v-row",[a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.fio"}}),t._v(" (UZ) ")],1),a("v-text-field",{attrs:{error:t.$v.staffModel.full_name_uz.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.staffModel.full_name_uz.$model,callback:function(e){t.$set(t.$v.staffModel.full_name_uz,"$model",e)},expression:"$v.staffModel.full_name_uz.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.fio"}}),t._v(" (RU) ")],1),a("v-text-field",{attrs:{error:t.$v.staffModel.full_name_ru.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.staffModel.full_name_ru.$model,callback:function(e){t.$set(t.$v.staffModel.full_name_ru,"$model",e)},expression:"$v.staffModel.full_name_ru.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.fio"}}),t._v(" (EN) ")],1),a("v-text-field",{attrs:{error:t.$v.staffModel.full_name_en.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.staffModel.full_name_en.$model,callback:function(e){t.$set(t.$v.staffModel.full_name_en,"$model",e)},expression:"$v.staffModel.full_name_en.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.position"}}),t._v(" (UZ) ")],1),a("v-text-field",{attrs:{error:t.$v.staffModel.position_uz.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.staffModel.position_uz.$model,callback:function(e){t.$set(t.$v.staffModel.position_uz,"$model",e)},expression:"$v.staffModel.position_uz.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.position"}}),t._v(" (RU) ")],1),a("v-text-field",{attrs:{error:t.$v.staffModel.position_ru.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.staffModel.position_ru.$model,callback:function(e){t.$set(t.$v.staffModel.position_ru,"$model",e)},expression:"$v.staffModel.position_ru.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.position"}}),t._v(" (EN) ")],1),a("v-text-field",{attrs:{error:t.$v.staffModel.position_en.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.staffModel.position_en.$model,callback:function(e){t.$set(t.$v.staffModel.position_en,"$model",e)},expression:"$v.staffModel.position_en.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.description"}}),t._v(" (UZ) ")],1),a("v-text-field",{attrs:{error:t.$v.staffModel.description_uz.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.staffModel.description_uz.$model,callback:function(e){t.$set(t.$v.staffModel.description_uz,"$model",e)},expression:"$v.staffModel.description_uz.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.description"}}),t._v(" (RU) ")],1),a("v-text-field",{attrs:{error:t.$v.staffModel.description_ru.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.staffModel.description_ru.$model,callback:function(e){t.$set(t.$v.staffModel.description_ru,"$model",e)},expression:"$v.staffModel.description_ru.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.description"}}),t._v(" (EN) ")],1),a("v-text-field",{attrs:{error:t.$v.staffModel.description_en.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.staffModel.description_en.$model,callback:function(e){t.$set(t.$v.staffModel.description_en,"$model",e)},expression:"$v.staffModel.description_en.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.phone"}})],1),a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"+998 XX XXX XX XX",expression:"'+998 XX XXX XX XX'"}],attrs:{readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.staffModel.phone,callback:function(e){t.$set(t.staffModel,"phone",e)},expression:"staffModel.phone"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.email"}})],1),a("v-text-field",{attrs:{error:t.$v.staffModel.email.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.staffModel.email.$model,callback:function(e){t.$set(t.$v.staffModel.email,"$model",e)},expression:"$v.staffModel.email.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.type"}})],1),"uz"===t.$i18n.locale?[a("v-select",{attrs:{error:t.$v.staffModel.type.$error,items:t.$store.state.STRUCTURE_TYPE,"item-text":"title_uz","item-value":"value",readonly:"Read"===t.TYPE,outlined:"","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[a("chevron-down-icon",{staticClass:"grey--text",attrs:{size:"1.5x"}})]},proxy:!0}],null,!1,2932708987),model:{value:t.$v.staffModel.type.$model,callback:function(e){t.$set(t.$v.staffModel.type,"$model",e)},expression:"$v.staffModel.type.$model"}})]:t._e(),"ru"===t.$i18n.locale?[a("v-select",{attrs:{error:t.$v.staffModel.type.$error,items:t.$store.state.STRUCTURE_TYPE,"item-text":"title_ru","item-value":"value",readonly:"Read"===t.TYPE,outlined:"","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[a("chevron-down-icon",{staticClass:"grey--text",attrs:{size:"1.5x"}})]},proxy:!0}],null,!1,2932708987),model:{value:t.$v.staffModel.type.$model,callback:function(e){t.$set(t.$v.staffModel.type,"$model",e)},expression:"$v.staffModel.type.$model"}})]:t._e(),"en"===t.$i18n.locale?[a("v-select",{attrs:{error:t.$v.staffModel.type.$error,items:t.$store.state.STRUCTURE_TYPE,"item-text":"title_en","item-value":"value",readonly:"Read"===t.TYPE,outlined:"","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[a("chevron-down-icon",{staticClass:"grey--text",attrs:{size:"1.5x"}})]},proxy:!0}],null,!1,2932708987),model:{value:t.$v.staffModel.type.$model,callback:function(e){t.$set(t.$v.staffModel.type,"$model",e)},expression:"$v.staffModel.type.$model"}})]:t._e()],2)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(" Tartib raqami ")]),a("v-text-field",{attrs:{error:t.$v.staffModel.rank.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":"",type:"number"},model:{value:t.$v.staffModel.rank.$model,callback:function(e){t.$set(t.$v.staffModel.rank,"$model",e)},expression:"$v.staffModel.rank.$model"}})],1)])],1),"Create"!==t.TYPE?[a("v-row",[a("v-col",{staticClass:"mt-2",attrs:{md:"12"}},[a("go-back-button"),"Read"!==t.TYPE?[a("send-button",{attrs:{text:t.$t("Dashboard.update")},on:{"emit:up":t.update}})]:t._e()],2)],1)]:[a("v-row",[a("v-col",{staticClass:"mt-5",attrs:{md:"12"}},[a("go-back-button"),t.isCreated?[a("send-button",{attrs:{text:t.$t("Dashboard.update")},on:{"emit:up":t.update}})]:[a("send-button",{attrs:{text:t.$t("Dashboard.add_new")},on:{"emit:up":t.send}})]],2)],1)]],2)},i=[],n=a("0130"),d=a("9e43"),u=a("0a35"),c=a("b5ae"),p=a("d1f9"),f={name:"AddStaff",props:{TYPE:{type:String,default:""}},components:{I18nVue:p["a"],SendButton:n["a"],GoBackButton:d["a"],ChevronDownIcon:u["e"]},data(){return{isCreated:!1,staffModel:{full_name_uz:"",full_name_ru:"",full_name_en:"",position_uz:"",position_ru:"",position_en:"",description_uz:"",description_ru:"",description_en:"",phone:"",email:"",type:"",rank:null}}},validations:{staffModel:{full_name_uz:{required:c["required"]},full_name_ru:{required:c["required"]},full_name_en:{required:c["required"]},position_uz:{required:c["required"]},position_ru:{required:c["required"]},position_en:{required:c["required"]},description_uz:{required:c["required"]},description_ru:{required:c["required"]},description_en:{required:c["required"]},email:{email:c["email"]},type:{required:c["required"]},rank:{required:c["required"]}}},mounted(){this.$route.params.id&&this.getOne()},methods:{send(){this.$v.$touch(),this.$v.$invalid?this.$toast.warning(this.$t("Dashboard.f")):this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/bank/structure/`,this.staffModel).then(({data:t})=>{this.$toast.success(this.$t("Dashboard.c")),this.staffModel=t,this.isCreated=!0,"bank_board"===t.type&&(this.$store.state.CREATED_STAFF_ID=t.id,this.$store.state.isStaffBankManagement="bank_board")}).catch(()=>{this.$toast.error(this.$t("Dashboard.e"))})},update(){this.$v.$touch(),this.$v.$invalid?this.$toast.warning(this.$t("Dashboard.f")):("bank_board"!==this.staffModel.type&&(this.deleteBiographyID(),this.$store.state.CREATED_STAFF_BIOGRAPHY_ID=null,this.$store.state.CREATED_STAFF_ID=null,this.$store.state.isStaffBankManagement=""),this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/bank/structure/${this.staffModel.id}`,this.staffModel).then(({data:t})=>{this.$toast.success(this.$t("Dashboard.n")),this.staffModel=t,this.isCreated=!0,"bank_board"===t.type?(this.$store.state.CREATED_STAFF_ID=t.id,this.$store.state.isStaffBankManagement="bank_board"):(this.$store.state.CREATED_STAFF_ID=null,this.$store.state.isStaffBankManagement="")}).catch(()=>{this.$toast.error(this.$t("Dashboard.e"))}))},getOne(){this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/bank/structure/${this.$route.params.id}`).then(({data:t})=>{this.staffModel=t,"bank_board"===t.type&&(this.$store.state.CREATED_STAFF_ID=t.id,this.$store.state.isStaffBankManagement="bank_board"),t.resume&&(this.$store.state.CREATED_STAFF_BIOGRAPHY_ID=t.resume.id,this.$store.state.isStaffBankManagement="bank_board")})},deleteBiographyID(){this.$store.state.CREATED_STAFF_BIOGRAPHY_ID&&this.$http.delete(`/${this.$store.state.auth.COMPANY_ID}/biography/${this.$store.state.CREATED_STAFF_BIOGRAPHY_ID}/`).then(({data:t})=>{this.staffModel=t,this.$store.state.CREATED_STAFF_ID=null,this.$store.state.isStaffBankManagement="",this.$store.state.HAS_STAFF_RESUME=!1;for(let e in this.$store.state.BIOGRAPHY_MODEL)this.$store.state.BIOGRAPHY_MODEL[e]=""})}}},_=f,m=a("0c7c"),h=Object(m["a"])(_,l,i,!1,null,null,null),b=h.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-wrap-body"},[a("v-row",["bank_board"!==t.$store.state.isStaffBankManagement?[a("v-col",{attrs:{md:"12"}},[a("v-alert",{attrs:{type:"error"}},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.bOnly"}})],1)],1)]:t._e(),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.work_place"}}),t._v(" (UZ) ")],1),a("v-text-field",{attrs:{readonly:"Read"===t.TYPE||!(t.$store.state.CREATED_STAFF_ID&&t.$store.state.isStaffBankManagement),outlined:"","hide-details":""},model:{value:t.$store.state.BIOGRAPHY_MODEL.work_place_uz,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"work_place_uz",e)},expression:"$store.state.BIOGRAPHY_MODEL.work_place_uz"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.work_place"}}),t._v(" (RU) ")],1),a("v-text-field",{attrs:{readonly:"Read"===t.TYPE||!(t.$store.state.CREATED_STAFF_ID&&t.$store.state.isStaffBankManagement),outlined:"","hide-details":""},model:{value:t.$store.state.BIOGRAPHY_MODEL.work_place_ru,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"work_place_ru",e)},expression:"$store.state.BIOGRAPHY_MODEL.work_place_ru"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.work_place"}}),t._v(" (EN) ")],1),a("v-text-field",{attrs:{readonly:"Read"===t.TYPE||!(t.$store.state.CREATED_STAFF_ID&&t.$store.state.isStaffBankManagement),outlined:"","hide-details":""},model:{value:t.$store.state.BIOGRAPHY_MODEL.work_place_en,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"work_place_en",e)},expression:"$store.state.BIOGRAPHY_MODEL.work_place_en"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.birth_place"}}),t._v(" (UZ) ")],1),a("v-text-field",{attrs:{readonly:"Read"===t.TYPE||!(t.$store.state.CREATED_STAFF_ID&&t.$store.state.isStaffBankManagement),outlined:"","hide-details":""},model:{value:t.$store.state.BIOGRAPHY_MODEL.birth_place_uz,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"birth_place_uz",e)},expression:"$store.state.BIOGRAPHY_MODEL.birth_place_uz"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.birth_place"}}),t._v(" (RU) ")],1),a("v-text-field",{attrs:{readonly:"Read"===t.TYPE||!(t.$store.state.CREATED_STAFF_ID&&t.$store.state.isStaffBankManagement),outlined:"","hide-details":""},model:{value:t.$store.state.BIOGRAPHY_MODEL.birth_place_ru,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"birth_place_ru",e)},expression:"$store.state.BIOGRAPHY_MODEL.birth_place_ru"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.birth_place"}}),t._v(" (EN) ")],1),a("v-text-field",{attrs:{readonly:"Read"===t.TYPE||!(t.$store.state.CREATED_STAFF_ID&&t.$store.state.isStaffBankManagement),outlined:"","hide-details":""},model:{value:t.$store.state.BIOGRAPHY_MODEL.birth_place_en,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"birth_place_en",e)},expression:"$store.state.BIOGRAPHY_MODEL.birth_place_en"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.nationality"}}),t._v(" (UZ) ")],1),a("v-text-field",{attrs:{readonly:"Read"===t.TYPE||!(t.$store.state.CREATED_STAFF_ID&&t.$store.state.isStaffBankManagement),outlined:"","hide-details":""},model:{value:t.$store.state.BIOGRAPHY_MODEL.nationality_uz,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"nationality_uz",e)},expression:"$store.state.BIOGRAPHY_MODEL.nationality_uz"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.nationality"}}),t._v(" (RU) ")],1),a("v-text-field",{attrs:{readonly:"Read"===t.TYPE||!(t.$store.state.CREATED_STAFF_ID&&t.$store.state.isStaffBankManagement),outlined:"","hide-details":""},model:{value:t.$store.state.BIOGRAPHY_MODEL.nationality_ru,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"nationality_ru",e)},expression:"$store.state.BIOGRAPHY_MODEL.nationality_ru"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.nationality"}}),t._v(" (EN) ")],1),a("v-text-field",{attrs:{readonly:"Read"===t.TYPE||!(t.$store.state.CREATED_STAFF_ID&&t.$store.state.isStaffBankManagement),outlined:"","hide-details":""},model:{value:t.$store.state.BIOGRAPHY_MODEL.nationality_en,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"nationality_en",e)},expression:"$store.state.BIOGRAPHY_MODEL.nationality_en"}})],1)]),a("v-col",{attrs:{md:"12"}},[a("div",{staticClass:"admin-tabs mb-1"},[a("v-tabs",{staticClass:"mb-0 mb-5",attrs:{height:"56","hide-slider":""},model:{value:t.tab1,callback:function(e){t.tab1=e},expression:"tab1"}},[a("v-tab",{staticClass:"transition-ease-in-out"},[a("h5",{staticClass:"font-600 dark-text text-transform-reset no-spacing px-2"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.education"}}),t._v(" (UZ) ")],1)]),a("v-tab",{staticClass:"transition-ease-in-out"},[a("h5",{staticClass:"font-600 dark-text text-transform-reset no-spacing px-2"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.education"}}),t._v(" (RU) ")],1)]),a("v-tab",{staticClass:"transition-ease-in-out"},[a("h5",{staticClass:"font-600 dark-text text-transform-reset no-spacing px-2"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.education"}}),t._v(" (EN) ")],1)])],1),a("v-tabs-items",{model:{value:t.tab1,callback:function(e){t.tab1=e},expression:"tab1"}},[a("v-tab-item",[a("div",{staticClass:"app-editor"},[a("quill-editor",{attrs:{disabled:"Read"===t.TYPE},model:{value:t.$store.state.BIOGRAPHY_MODEL.education_uz,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"education_uz",e)},expression:"$store.state.BIOGRAPHY_MODEL.education_uz"}})],1)]),a("v-tab-item",[a("div",{staticClass:"app-editor"},[a("quill-editor",{attrs:{disabled:"Read"===t.TYPE},model:{value:t.$store.state.BIOGRAPHY_MODEL.education_ru,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"education_ru",e)},expression:"$store.state.BIOGRAPHY_MODEL.education_ru"}})],1)]),a("v-tab-item",[a("div",{staticClass:"app-editor"},[a("quill-editor",{attrs:{disabled:"Read"===t.TYPE},model:{value:t.$store.state.BIOGRAPHY_MODEL.education_en,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"education_en",e)},expression:"$store.state.BIOGRAPHY_MODEL.education_en"}})],1)])],1)],1)]),a("v-col",{attrs:{md:"12"}},[a("div",{staticClass:"admin-tabs mb-1"},[a("v-tabs",{staticClass:"mb-0 mb-5",attrs:{height:"56","hide-slider":""},model:{value:t.tab2,callback:function(e){t.tab2=e},expression:"tab2"}},[a("v-tab",{staticClass:"transition-ease-in-out"},[a("h5",{staticClass:"font-600 dark-text text-transform-reset no-spacing px-2"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.speciality"}}),t._v(" (UZ) ")],1)]),a("v-tab",{staticClass:"transition-ease-in-out"},[a("h5",{staticClass:"font-600 dark-text text-transform-reset no-spacing px-2"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.speciality"}}),t._v(" (RU) ")],1)]),a("v-tab",{staticClass:"transition-ease-in-out"},[a("h5",{staticClass:"font-600 dark-text text-transform-reset no-spacing px-2"},[a("I18nVue",{attrs:{classes:"font-700 text-small",t:"Dashboard.AboutBank.speciality"}}),t._v(" (EN) ")],1)])],1),a("v-tabs-items",{model:{value:t.tab2,callback:function(e){t.tab2=e},expression:"tab2"}},[a("v-tab-item",[a("div",{staticClass:"app-editor"},[a("quill-editor",{attrs:{disabled:"Read"===t.TYPE},model:{value:t.$store.state.BIOGRAPHY_MODEL.speciality_uz,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"speciality_uz",e)},expression:"$store.state.BIOGRAPHY_MODEL.speciality_uz"}})],1)]),a("v-tab-item",[a("div",{staticClass:"app-editor"},[a("quill-editor",{attrs:{disabled:"Read"===t.TYPE},model:{value:t.$store.state.BIOGRAPHY_MODEL.speciality_ru,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"speciality_ru",e)},expression:"$store.state.BIOGRAPHY_MODEL.speciality_ru"}})],1)]),a("v-tab-item",[a("div",{staticClass:"app-editor"},[a("quill-editor",{attrs:{disabled:"Read"===t.TYPE},model:{value:t.$store.state.BIOGRAPHY_MODEL.speciality_en,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"speciality_en",e)},expression:"$store.state.BIOGRAPHY_MODEL.speciality_en"}})],1)])],1)],1)]),void 0,void 0,a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{t:"Dashboard.AboutBank.birth_year"}})],1),a("v-dialog",{ref:"dialog",attrs:{disabled:"Read"===t.TYPE||!(t.$store.state.CREATED_STAFF_ID&&t.$store.state.isStaffBankManagement),"return-value":t.$store.state.BIOGRAPHY_MODEL.birth_year,width:"290px"},on:{"update:returnValue":function(e){return t.$set(t.$store.state.BIOGRAPHY_MODEL,"birth_year",e)},"update:return-value":function(e){return t.$set(t.$store.state.BIOGRAPHY_MODEL,"birth_year",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,o=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{readonly:"Read"===t.TYPE||!(t.$store.state.CREATED_STAFF_ID&&t.$store.state.isStaffBankManagement),outlined:"","hide-details":"","append-icon":"mdi-calendar"},model:{value:t.$store.state.BIOGRAPHY_MODEL.birth_year,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"birth_year",e)},expression:"$store.state.BIOGRAPHY_MODEL.birth_year"}},"v-text-field",o,!1),s))]}}]),model:{value:t.birthModal,callback:function(e){t.birthModal=e},expression:"birthModal"}},[a("v-date-picker",{attrs:{scrollable:""},model:{value:t.$store.state.BIOGRAPHY_MODEL.birth_year,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"birth_year",e)},expression:"$store.state.BIOGRAPHY_MODEL.birth_year"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.birthModal=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.$store.state.BIOGRAPHY_MODEL.birth_year)}}},[t._v(" OK ")])],1)],1)],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{t:"Dashboard.AboutBank.work_experience"}})],1),a("v-text-field",{attrs:{readonly:"Read"===t.TYPE||!(t.$store.state.CREATED_STAFF_ID&&t.$store.state.isStaffBankManagement),outlined:"","hide-details":""},model:{value:t.$store.state.BIOGRAPHY_MODEL.work_experience,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"work_experience",e)},expression:"$store.state.BIOGRAPHY_MODEL.work_experience"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[a("I18nVue",{attrs:{t:"Dashboard.AboutBank.current_position_held_year"}})],1),a("v-text-field",{attrs:{readonly:"Read"===t.TYPE||!(t.$store.state.CREATED_STAFF_ID&&t.$store.state.isStaffBankManagement),outlined:"","hide-details":""},model:{value:t.$store.state.BIOGRAPHY_MODEL.current_position_held_year,callback:function(e){t.$set(t.$store.state.BIOGRAPHY_MODEL,"current_position_held_year",e)},expression:"$store.state.BIOGRAPHY_MODEL.current_position_held_year"}})],1)])],2),"Create"!==t.TYPE?[a("v-row",[a("v-col",{staticClass:"mt-2",attrs:{md:"12"}},[a("go-back-button"),"Read"!==t.TYPE&&t.$store.state.CREATED_STAFF_ID&&t.$store.state.isStaffBankManagement?[t.$store.state.HAS_STAFF_RESUME?[a("send-button",{attrs:{text:t.$t("Dashboard.update")},on:{"emit:up":t.update}})]:[a("send-button",{attrs:{text:t.$t("Dashboard.add_new")},on:{"emit:up":t.send}})]]:t._e()],2)],1)]:[a("v-row",[a("v-col",{staticClass:"mt-5",attrs:{md:"12"}},[a("go-back-button"),t.$store.state.CREATED_STAFF_ID&&t.$store.state.isStaffBankManagement?[a("send-button",{attrs:{text:t.$t("Dashboard.add_new")},on:{"emit:up":t.send}})]:t._e()],2)],1)]],2)},v=[],E={name:"StaffBiography",props:{TYPE:{type:String,default:""}},components:{I18nVue:p["a"],SendButton:n["a"],GoBackButton:d["a"],ChevronDownIcon:u["e"]},data(){return{birthModal:!1,tab1:null,tab2:null}},mounted(){this.$route.params.id&&this.getOne()},methods:{send(){this.$store.state.BIOGRAPHY_MODEL.structure=this.$store.state.CREATED_STAFF_ID,this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/biography/`,this.$store.state.BIOGRAPHY_MODEL).then(({data:t})=>{this.$toast.success(this.$t("Dashboard.n")),this.$store.state.CREATED_STAFF_BIOGRAPHY_ID=t.id,this.$store.state.HAS_STAFF_RESUME=!0,setTimeout(()=>{this.$router.push({name:"DashboardStructureList"})},2e3)}).catch(()=>{this.$toast.error(this.$t("Dashboard.e"))})},update(){this.$store.state.BIOGRAPHY_MODEL.structure=this.$route.params.id,this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/biography/${this.$store.state.CREATED_STAFF_BIOGRAPHY_ID}`,this.$store.state.BIOGRAPHY_MODEL).then(({data:t})=>{this.$toast.success(this.$t("Dashboard.n")),this.$store.state.CREATED_STAFF_BIOGRAPHY_ID=t.id,this.$store.state.HAS_STAFF_RESUME=!0,setTimeout(()=>{this.$router.push({name:"DashboardStructureList"})},2e3)}).catch(()=>{this.$toast.error(this.$t("Dashboard.e"))})},getOne(){this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/biography/${this.$store.state.CREATED_STAFF_BIOGRAPHY_ID}`).then(({data:t})=>{this.$store.state.BIOGRAPHY_MODEL=t})}}},x=E,D=Object(m["a"])(x,$,v,!1,null,null,null),k=D.exports,A=a("8d9d"),M={name:"ShareholderForm",props:{TYPE:{type:String,default:""}},components:{I18nVue:p["a"],AppCard:r["a"],AddStaff:b,StaffBiography:k,SendButton:n["a"],FileUpload:A["a"],GoBackButton:d["a"],ChevronDownIcon:u["e"]},data(){return{panel:[0]}},mounted(){this.$route.params.id&&(this.$store.state.CREATED_STAFF_ID=+this.$route.params.id)}},O=M,R=Object(m["a"])(O,s,o,!1,null,null,null);e["a"]=R.exports},"8d9d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(" "+t._s(t.label)+" "),t.subLabel?[a("span",{staticClass:"red--text"},[t._v("("+t._s(t.subLabel)+")")])]:t._e()],2),a("div",{staticClass:"d-flex align-center"},[a("v-file-input",{staticClass:"file-uploader mr-2",attrs:{disabled:t.disabled||t.readonly,"prepend-icon":"",accept:"image/png, image/jpeg, image/jpg, image/bmp",outlined:"","hide-details":""},on:{change:t.upload},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-btn",{staticStyle:{"margin-top":"-6px"},attrs:{depressed:"",color:"rgba(var(--primary), 1)"}},[a("span",{staticClass:"text-transform-reset text-white"},[t._v(t._s(t.$t("Dashboard.upload_file")))])])]},proxy:!0}]),model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),t.value?[a("span",{staticClass:"d-none"},[t._v(t._s(t.hidden))]),t.fileThumb.visible?[a("div",{staticClass:"file-upload-wrap rounded overflow-hidden p-relative"},[t.extension?[a("a",{staticClass:"border-all d-flex align-center justify-center w-100 h-100 rounded",attrs:{href:"#"}},[a("file-text-icon",{staticClass:"grey--text",attrs:{size:"1.5x"}})],1)]:[a("img",{staticClass:"d-block img-cover",attrs:{src:t.$http.defaults.baseURL+t.fileThumb.url,alt:"Card image"}})],a("div",{staticClass:"file-upload-actions p-absolute w-100 h-100 d-flex align-center justify-space-around px-2 transition-ease-in-out"},[a("a",{staticClass:"rounded-circle d-flex align-center justify-center outline-transparent",attrs:{href:t.$http.defaults.baseURL+t.fileThumb.url,download:"",target:"_blank",rel:"noopener noreferrer"}},[a("download-icon",{staticClass:"text-white d-block",attrs:{size:"1.2x"}})],1),t.readonly?t._e():[a("button",{staticClass:"rounded-circle d-flex align-center justify-center outline-transparent",attrs:{type:"button"},on:{click:t.deleteFile}},[a("trash2-icon",{staticClass:"text-white d-block",attrs:{size:"1.1x"}})],1)]],2)],2)]:t._e()]:t._e()],2)])},o=[],r=a("0a35"),l={name:"FileUpload",props:{label:{type:String},subLabel:{type:String,default:""},disabled:{type:Boolean,default:!1},value:{type:Object,default:()=>{}},readonly:{type:Boolean,default:!1}},components:{EyeIcon:r["n"],Trash2Icon:r["M"],FileTextIcon:r["q"],DownloadIcon:r["k"]},computed:{extension(){return["pdf","PDF","doc","docx","DOC","csv","CSV","xls","XLS"].includes(this.fileThumb.url.slice(-3))},hidden(){return{url:this.fileThumb.url=this.value.url,visible:this.fileThumb.visible=!0}}},watch:{value(t){t&&(this.fileThumb.visible=!0,this.fileThumb.url=t.url)}},data(){return{template:"",file:[],fileThumb:{url:"",visible:!1},fileList:[]}},methods:{upload(t){let e=new FormData;e.append("file",t),this.$http.post("/upload/",e).then(({data:t})=>{this.$toast.success("Rasm yuklandi"),this.$emit("emit:up",t),this.fileThumb.url=t.url,this.fileThumb.visible=!0}).catch(()=>this.$t("Dashboard.e"))},deleteFile(t){confirm(this.$t("Dashboard.d"))&&(this.fileThumb.visible=!1,this.fileThumb.url="",this.file=[])}}},i=l,n=a("0c7c"),d=Object(n["a"])(i,s,o,!1,null,null,null);e["a"]=d.exports},ab1d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("structure-form",{attrs:{TYPE:t.$store.state.FORM_TYPE.UPDATE}})},o=[],r=a("86e5"),l={name:"Update",components:{StructureForm:r["a"]}},i=l,n=a("0c7c"),d=Object(n["a"])(i,s,o,!1,null,null,null);e["default"]=d.exports}}]);