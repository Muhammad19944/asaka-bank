(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7867"],{"76d6":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-card-horizontal credit-widget d-flex flex-wrap flex-lg-nowrap mb-15"},[a("div",{staticClass:"card-horizontal__left",class:{"pa-5 pa-sm-8":t.imageCompact}},[t._t("card-left-image",(function(){return[a("img",{staticClass:"d-block img-cover img-right",attrs:{src:t.item.image.url&&t.$http.defaults.baseURL+t.item.image.url,alt:""}})]}))],2),a("div",{staticClass:"card-horizontal__mid flex-1 d-flex flex-column py-6 py-sm-10 px-6 px-sm-12"},[t._t("card-title",(function(){return[a("div",{staticClass:"d-flex align-center justify-space-between mb-4"},[a("h2",{staticClass:"dark-text font-700"},[a("I18nVue",{attrs:{ru:t.item.title_ru,uz:t.item.title_uz,en:t.item.title_en}})],1),t._t("card-currency")],2)]})),a("h4",{staticClass:"font-500 main-grey text-clamp mb-5"},["en"===t.$i18n.locale?a("span",{domProps:{innerHTML:t._s(t.item.description_en)}}):t._e(),"ru"===t.$i18n.locale?a("span",{domProps:{innerHTML:t._s(t.item.description_ru)}}):t._e(),"uz"===t.$i18n.locale?a("span",{domProps:{innerHTML:t._s(t.item.description_uz)}}):t._e()]),a("div",{staticClass:"d-flex flex-wrap align-center mt-auto grid-gap-1"},[t.item.is_available?[t._t("card-buttons")]:["uz"===t.$i18n.locale?a("h4",{staticClass:"font-700 primary-text"},[t._v("Xizmat vaqtinchalik ish faoliyatida emas")]):t._e(),"ru"===t.$i18n.locale?a("h4",{staticClass:"font-700 primary-text"},[t._v("Сервис временно не работает")]):t._e(),"en"===t.$i18n.locale?a("h4",{staticClass:"font-700 primary-text"},[t._v("The service is temporarily not working")]):t._e()]],2)],2),a("div",{staticClass:"card-horizontal__right pt-6 pb-8 px-8"},[t._t("card-right-props")],2)])},s=[],n=a("d1f9"),r={name:"CardItem",props:{item:{type:Object,default:()=>{}},imageCompact:{type:Boolean,default:!1}},components:{I18nVue:n["a"]}},l=r,c=a("0c7c"),o=Object(c["a"])(l,i,s,!1,null,null,null);e["a"]=o.exports}}]);