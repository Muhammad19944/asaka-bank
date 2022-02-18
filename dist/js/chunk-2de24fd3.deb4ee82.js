(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2de24fd3"],{4414:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category-form-view"},[a("app-card",[a("div",{staticClass:"form-wrap pa-5 px-6 d-flex flex-column m-h-100"},[a("div",{staticClass:"d-flex align-center mb-8"},[a("h4",{staticClass:"text--primary text-uppercase font-700 mr-4"},[t._v(" "+t._s("Create"===t.TYPE?t.$t("Dashboard.add_new"):"Update"===t.TYPE?t.$t("Dashboard.update"):t.$t("Dashboard.read"))+" ")]),a("v-divider",{staticStyle:{"border-color":"rgb(var(--border-color), 1)"}})],1),a("div",{staticClass:"flex-1"},[a("v-row",[a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.category_name"))+" (UZ)")]),a("v-text-field",{attrs:{error:t.$v.categoryModel.name_uz.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.categoryModel.name_uz.$model,callback:function(e){t.$set(t.$v.categoryModel.name_uz,"$model",e)},expression:"$v.categoryModel.name_uz.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.category_name"))+" (RU)")]),a("v-text-field",{attrs:{error:t.$v.categoryModel.name_ru.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.categoryModel.name_ru.$model,callback:function(e){t.$set(t.$v.categoryModel.name_ru,"$model",e)},expression:"$v.categoryModel.name_ru.$model"}})],1)]),a("v-col",{attrs:{md:"4"}},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[t._v(t._s(t.$t("Dashboard.category_name"))+" (EN)")]),a("v-text-field",{attrs:{error:t.$v.categoryModel.name_en.$error,readonly:"Read"===t.TYPE,outlined:"","hide-details":""},model:{value:t.$v.categoryModel.name_en.$model,callback:function(e){t.$set(t.$v.categoryModel.name_en,"$model",e)},expression:"$v.categoryModel.name_en.$model"}})],1)])],1)],1),a("div",{staticClass:"mt-8"},[a("go-back-button"),"Create"===t.TYPE?[a("send-button",{attrs:{text:t.$t("Dashboard.create")},on:{"emit:up":t.send}})]:"Update"===t.TYPE?[a("send-button",{attrs:{text:t.$t("Dashboard.update")},on:{"emit:up":t.update}})]:t._e()],2)])])],1)},o=[],s=a("87d8"),d=a("0130"),i=a("9e43"),l=a("b5ae"),n={name:"CategoryForm",props:{TYPE:{type:String,default:""}},components:{AppCard:s["a"],SendButton:d["a"],GoBackButton:i["a"]},data(){return{categoryModel:{name_uz:"",name_ru:"",name_en:""}}},validations:{categoryModel:{name_uz:{required:l["required"]},name_ru:{required:l["required"]},name_en:{required:l["required"]}}},mounted(){this.$route.params.id&&this.getOne()},methods:{send(){this.$v.$touch(),this.$v.$invalid?this.$toast.warning("Field to'ldirilishi shart"):this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/category/`,this.categoryModel).then(t=>{this.$toast.success("Yaratildi"),this.resetFields(),setTimeout(()=>{this.$router.push({name:"DashboardCategoryList"})},1500)}).catch(t=>{this.$toast.error("Yaratishda xatolik"),this.resetFields()})},update(){this.$v.$touch(),this.$v.$invalid?this.$toast.warning("Field to'ldirilishi shart"):this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/category/${this.$route.params.id}/`,this.categoryModel).then(t=>{this.$toast.success("Yangilandi"),this.resetFields(),setTimeout(()=>{this.$router.push({name:"DashboardCategoryList"})},1500)}).catch(t=>{this.$toast.error("Yangilashda xatolik"),this.resetFields()})},getOne(){this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/category/${this.$route.params.id}/`).then(({data:t})=>{this.categoryModel=t})},resetFields(){this.categoryModel.name_uz=this.categoryModel.name_ru=this.categoryModel.name_en=""}}},c=n,u=a("0c7c"),m=Object(u["a"])(c,r,o,!1,null,null,null);e["a"]=m.exports},d629:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("category-form",{attrs:{TYPE:t.$store.state.FORM_TYPE.CREATE}})},o=[],s=a("4414"),d={name:"index",components:{CategoryForm:s["a"]}},i=d,l=a("0c7c"),n=Object(l["a"])(i,r,o,!1,null,null,null);e["default"]=n.exports}}]);