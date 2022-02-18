(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31b03457","chunk-2d0f0bc1"],{6895:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"district-form-view"},[a("app-card",[a("div",{staticClass:"form-wrap pa-5 px-6 d-flex flex-column m-h-100"},[a("div",{staticClass:"d-flex align-center mb-8"},[a("h4",{staticClass:"text--primary text-uppercase font-700 mr-4"},[t._v(" "+t._s("Create"===t.TYPE?t.$t("Dashboard.add_new"):"Update"===t.TYPE?t.$t("Dashboard.update"):t.$t("Dashboard.read"))+" ")]),a("v-divider",{staticStyle:{"border-color":"rgb(var(--border-color), 1)"}})],1),a("div",{staticClass:"flex-1"},[a("v-row",[a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.category_name"))+" (UZ)")]),a("v-text-field",{attrs:{error:t.$v.categoryModel.title_uz.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.categoryModel.title_uz.$model,callback:function(e){t.$set(t.$v.categoryModel.title_uz,"$model",e)},expression:"$v.categoryModel.title_uz.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.category_name"))+" (RU)")]),a("v-text-field",{attrs:{error:t.$v.categoryModel.title_ru.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.categoryModel.title_ru.$model,callback:function(e){t.$set(t.$v.categoryModel.title_ru,"$model",e)},expression:"$v.categoryModel.title_ru.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.category_name"))+" (EN)")]),a("v-text-field",{attrs:{error:t.$v.categoryModel.title_en.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.categoryModel.title_en.$model,callback:function(e){t.$set(t.$v.categoryModel.title_en,"$model",e)},expression:"$v.categoryModel.title_en.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Список категорий")]),"uz"===t.$i18n.locale?[a("v-select",{attrs:{items:t.categoryList,"item-text":"title_uz","item-value":"id",readonly:"Read"===t.TYPE,outlined:"","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[a("chevron-down-icon",{staticClass:"grey--text",attrs:{size:"1.5x"}})]},proxy:!0}],null,!1,2932708987),model:{value:t.categoryModel.parent,callback:function(e){t.$set(t.categoryModel,"parent",e)},expression:"categoryModel.parent"}})]:t._e(),"ru"===t.$i18n.locale?[a("v-select",{attrs:{items:t.categoryList,"item-text":"title_ru","item-value":"id",readonly:"Read"===t.TYPE,outlined:"","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[a("chevron-down-icon",{staticClass:"grey--text",attrs:{size:"1.5x"}})]},proxy:!0}],null,!1,2932708987),model:{value:t.categoryModel.parent,callback:function(e){t.$set(t.categoryModel,"parent",e)},expression:"categoryModel.parent"}})]:t._e(),"en"===t.$i18n.locale?[a("v-select",{attrs:{items:t.categoryList,"item-text":"title_en","item-value":"id",readonly:"Read"===t.TYPE,outlined:"","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[a("chevron-down-icon",{staticClass:"grey--text",attrs:{size:"1.5x"}})]},proxy:!0}],null,!1,2932708987),model:{value:t.categoryModel.parent,callback:function(e){t.$set(t.categoryModel,"parent",e)},expression:"categoryModel.parent"}})]:t._e()],2)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("Ссылка категории")]),a("v-text-field",{attrs:{error:t.$v.categoryModel.link.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.categoryModel.link.$model,callback:function(e){t.$set(t.$v.categoryModel.link,"$model",e)},expression:"$v.categoryModel.link.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v("На верхний меню")]),a("v-switch",{staticClass:"mt-0",attrs:{readonly:"Read"===t.TYPE,color:"rgba(var(--primary), 1)",inset:"","hide-details":""},model:{value:t.categoryModel.is_top_header,callback:function(e){t.$set(t.categoryModel,"is_top_header",e)},expression:"categoryModel.is_top_header"}})],1)])],1)],1),a("div",{staticClass:"mt-8"},[a("go-back-button"),"Create"===t.TYPE?[a("send-button",{attrs:{text:t.$t("Dashboard.create")},on:{"emit:up":t.send}})]:"Update"===t.TYPE?[a("send-button",{attrs:{text:t.$t("Dashboard.update")},on:{"emit:up":t.update}})]:t._e()],2)])])],1)},r=[],s=a("87d8"),l=a("0130"),i=a("9e43"),n=a("b5ae"),d=a("0a35"),c=a("3666"),u=a.n(c),p={name:"CategoriesForm",props:{TYPE:{type:String,default:""}},components:{AppCard:s["a"],SendButton:l["a"],GoBackButton:i["a"],ChevronDownIcon:d["e"]},data(){return{categoryList:[],categoryModel:{title_uz:"",title_ru:"",title_en:"",parent:null,is_top_header:!0,link:""}}},validations:{categoryModel:{title_uz:{required:n["required"]},title_ru:{required:n["required"]},title_en:{required:n["required"]},link:{required:n["required"]}}},mounted(){this.getAll(),this.$route.params.id&&this.getOne()},methods:{getAll(){this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/menu/`).then(({data:t})=>{this.categoryList=t.results})},send(){this.$v.$touch(),this.$v.$invalid?this.$toast.warning("Field to'ldirilishi shart"):(this.categoryModel={...this.categoryModel,link:u()(this.categoryModel.link)},this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/menu/`,this.categoryModel).then(t=>{this.$toast.success("Yaratildi"),setTimeout(()=>{this.$router.push({name:"OtherSectionCategoryList"})},1500)}).catch(t=>{this.$toast.error("Yaratishda xatolik")}))},update(){this.$v.$touch(),this.$v.$invalid?this.$toast.warning("Field to'ldirilishi shart"):this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/menu/${this.$route.params.id}/`,this.categoryModel).then(t=>{this.$toast.success("Yangilandi"),setTimeout(()=>{this.$router.push({name:"OtherSectionCategoryList"})},1500)}).catch(t=>{this.$toast.error("Yangilashda xatolik")})},getOne(){this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/menu/${this.$route.params.id}/`).then(({data:t})=>{this.categoryModel=t})}}},h=p,m=a("0c7c"),$=Object(m["a"])(h,o,r,!1,null,null,null);e["a"]=$.exports},"9e43":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{staticClass:"mr-5",attrs:{depressed:"",color:"warning","min-width":"135","min-height":"45"},on:{click:function(e){return t.$router.go(-1)}}},[a("div",{staticClass:"d-flex align-center justify-space-between w-100"},[a("chevron-left-icon",{staticClass:"ml-n1 mr-1",attrs:{size:"1.5x"}}),a("span",{staticClass:"text-transform-reset reset-size font-600 text-white"},[t._v(t._s(t.$t("Dashboard.back")))])],1)])},r=[],s=a("0a35"),l={name:"GoBackButton",components:{ChevronLeftIcon:s["f"]}},i=l,n=a("0c7c"),d=Object(n["a"])(i,o,r,!1,null,null,null);e["a"]=d.exports},f350:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("categories-form",{attrs:{TYPE:t.$store.state.FORM_TYPE.UPDATE}})},r=[],s=a("6895"),l={name:"Update",components:{CategoriesForm:s["a"]}},i=l,n=a("0c7c"),d=Object(n["a"])(i,o,r,!1,null,null,null);e["default"]=d.exports}}]);