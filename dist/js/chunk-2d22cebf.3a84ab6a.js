(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22cebf"],{f4fa:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"deposits-view"},[e("div",{staticClass:"view-toolbar"},[e("v-container",{staticClass:"pa-0"},[e("div",{staticClass:"app-tab-header px-5 d-flex"},[e("div",{staticClass:"tab-header-items text-center",attrs:{"data-navigation":"items"}},[e("router-link",{staticClass:"navigation-link navigation-link__hover text-decoration-none p-relative text--h4 py-6 font-600 d-inline-block mr-8",attrs:{to:{name:"DepositListType",params:{type:"all"}}}},[e("I18nVue",{attrs:{t:"all_deposits"}})],1)],1),e("div",{staticClass:"tab-header-items text-center",attrs:{"data-navigation":"items"}},[e("router-link",{staticClass:"navigation-link navigation-link__hover text-decoration-none p-relative text--h4 py-6 font-600 d-inline-block mr-8",attrs:{to:{name:"DepositListType",params:{type:"milliy_valyutada"}}}},[e("I18nVue",{attrs:{t:"deposit_type.sum"}})],1)],1),e("div",{staticClass:"tab-header-items text-center",attrs:{"data-navigation":"items"}},[e("router-link",{staticClass:"navigation-link navigation-link__hover text-decoration-none p-relative text--h4 py-6 font-600 d-inline-block mr-8",attrs:{to:{name:"DepositListType",params:{type:"aqsh_dollarida"}}}},[e("I18nVue",{attrs:{t:"deposit_type.dollar"}})],1)],1),e("div",{staticClass:"tab-header-items text-center",attrs:{"data-navigation":"items"}},[e("router-link",{staticClass:"navigation-link navigation-link__hover text-decoration-none p-relative text--h4 py-6 font-600 d-inline-block mr-8",attrs:{to:{name:"DepositListType",params:{type:"yevroda_omonatlar"}}}},[e("I18nVue",{attrs:{t:"deposit_type.euro"}})],1)],1)])])],1),e("div",{staticClass:"view-toolbar-content py-16 overflow-hidden"},[e("v-container",{staticClass:"pa-0"},[e("div",{staticClass:"app-tab-content p-relative"},[e("transition",{attrs:{name:"fade"}},[e("router-view",{key:t.$route.fullPath})],1)],1)])],1)])},s=[],n=e("76d6"),o=e("d1f9"),r=e("22ef"),l=e("0a35"),d=e("c4a0"),p={name:"index",components:{CardItem:n["a"],I18nVue:o["a"],AppBreadCrumb:r["a"],ChevronRightIcon:l["g"]},data(){return{depositList:[],layout:!1,tabNavText:""}},mounted(){this.getList();const t=document.querySelectorAll('[data-navigation="items"]');Object(d["a"])(t)},methods:{getList(){this.$http.get("/1/deposit/",{params:{category:5}}).then(({data:t})=>{this.depositList=t.results,this.layout=!0,this.tabNavText=""})},getType(t){if(this.layout=!1,this.tabNavText===t)return this.layout=!0,!1;this.$http.get("/1/deposit",{params:{type:t,category:5}}).then(({data:a})=>{this.depositList=a.results,this.layout=!0,this.tabNavText=t})}}},c=p,v=e("0c7c"),h=Object(v["a"])(c,i,s,!1,null,null,null);a["default"]=h.exports}}]);