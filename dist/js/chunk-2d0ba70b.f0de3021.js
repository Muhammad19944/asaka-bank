(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba70b"],{"36e7":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"public-offer-view"},[n("div",{staticClass:"view-toolbar"},[n("v-container",{staticClass:"pa-0"},[n("div",{staticClass:"app-tab-header d-flex"},[n("div",{staticClass:"tab-header-items text-center mr-7 active",attrs:{"data-item":"header"}},[n("a",{staticClass:"\n                                navigation-link__hover\n                                p-relative\n                                text--h3\n                                dark-text\n                                py-6\n                                font-600\n                                d-inline-block\n                            "},[t._v(" "+t._s(t.$t("PublicOffer.new"))+" ")])]),n("div",{staticClass:"tab-header-items text-center mr-7",attrs:{"data-item":"header"}},[n("a",{staticClass:"\n                                navigation-link__hover\n                                p-relative\n                                text--h3\n                                dark-text\n                                py-6\n                                font-600\n                                d-inline-block\n                            "},[t._v(" "+t._s(t.$t("PublicOffer.old"))+" (31.08.2021) ")])])])])],1),n("div",{staticClass:"view-toolbar-content py-16 overflow-hidden"},[n("v-container",[n("div",{staticClass:"app-tab-content p-relative"},[n("div",{staticClass:"tab-content-items active",attrs:{"data-item":"content"}},[t.offersList.length?["uz"===t.$i18n.locale?n("span",{domProps:{innerHTML:t._s(t.offersList[0].text_uz)}}):t._e(),"ru"===t.$i18n.locale?n("span",{domProps:{innerHTML:t._s(t.offersList[0].text_ru)}}):t._e(),"en"===t.$i18n.locale?n("span",{domProps:{innerHTML:t._s(t.offersList[0].text_en)}}):t._e()]:t._e()],2),n("div",{staticClass:"tab-content-items",attrs:{"data-item":"content"}},[t.offersList.length?["uz"===t.$i18n.locale?n("span",{domProps:{innerHTML:t._s(t.offersList[1].text_uz)}}):t._e(),"ru"===t.$i18n.locale?n("span",{domProps:{innerHTML:t._s(t.offersList[1].text_ru)}}):t._e(),"en"===t.$i18n.locale?n("span",{domProps:{innerHTML:t._s(t.offersList[1].text_en)}}):t._e()]:t._e()],2)])])],1)])},a=[],i=n("d1f9"),r=n("c4a0"),o={name:"index",components:{I18nVue:i["a"]},data(){return{offersList:[]}},mounted(){const t=document.querySelectorAll('[data-item="header"]'),e=document.querySelectorAll('[data-item="content"]');Object(r["b"])(t,e),this.getOffersList()},methods:{getOffersList(){this.$http.get("/1/bank/public_offer",{params:{ordering:"id"}}).then(({data:t})=>{this.offersList=t.results})}}},c=o,l=n("0c7c"),d=Object(l["a"])(c,s,a,!1,null,"b78c1ec6",null);e["default"]=d.exports}}]);