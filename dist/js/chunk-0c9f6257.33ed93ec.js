(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c9f6257"],{"6e6d":function(t,a,e){},b1a9:function(t,a,e){"use strict";e("6e6d")},fb44:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-detail-view"},[e("v-container",[e("div",{staticClass:"detail-view-content"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"d-flex align-center",attrs:{lg:"6"}},[e("v-responsive",{attrs:{"aspect-ratio":16/9}},[e("img",{staticClass:"detail-img",attrs:{src:t.cardDetailModel.card_image&&t.$http.defaults.baseURL+t.cardDetailModel.card_image.url,alt:""}})])],1),e("v-col",{attrs:{lg:"6"}},[e("div",{staticClass:"pl-lg-16"},[e("p",{staticClass:"text-lg-right mt-8 mt-md-0"},[e("I18nVue",{attrs:{t:"updated"}}),t._v(" "+t._s(t._f("filterDate")(t.cardDetailModel.modified_date&&t.cardDetailModel.modified_date))+" ")],1),e("h1",{staticClass:"font-700 text-extra-large-3 dark-text"},[e("I18nVue",{attrs:{uz:t.cardDetailModel.name_uz,ru:t.cardDetailModel.name_ru,en:t.cardDetailModel.name_en}})],1),e("v-divider",{staticClass:"my-8"}),e("h4",["en"===t.$i18n.locale?e("span",{domProps:{innerHTML:t._s(t.cardDetailModel.description_en)}}):t._e(),"ru"===t.$i18n.locale?e("span",{domProps:{innerHTML:t._s(t.cardDetailModel.description_ru)}}):t._e(),"uz"===t.$i18n.locale?e("span",{domProps:{innerHTML:t._s(t.cardDetailModel.description_uz)}}):t._e()]),e("div",{staticClass:"credit-meta d-flex flex-wrap mb-13 w-100 mt-10"},[e("div",{staticClass:"credit-meta-items d-flex align-center pb-3 dark-text"},[e("h1",{staticClass:"text-extra-large-4 mr-3 line-base font-300"},[e("I18nVue",{attrs:{uz:t.cardDetailModel.card_process_uz,ru:t.cardDetailModel.card_process_ru,en:t.cardDetailModel.card_process_en}})],1),e("div",{staticClass:"d-flex flex-column h-100"},[e("h5",{staticClass:"font-600"},[e("I18nVue",{attrs:{t:"Cooperative.Cards.sum2"}})],1),e("I18nVue",{staticClass:"text-small d-block font-600 line-base pb-1 mt-auto",attrs:{t:"Cards.detail.issue"}})],1)]),e("div",{staticClass:"credit-meta-items d-flex align-center pb-3 dark-text"},[e("h1",{staticClass:"text-extra-large-4 mr-3 line-base font-300"},[t._v(" "+t._s(t.cardDetailModel.card_currency)+" ")]),e("div",{staticClass:"d-flex flex-column h-100"},[e("I18nVue",{staticClass:"text-small d-block font-600 line-base pb-1 mt-auto",attrs:{t:"Cards.detail.card_currency"}})],1)]),t.cardDetailModel.deposit?[e("div",{staticClass:"credit-meta-items d-flex align-center pb-3 dark-text"},[e("h1",{staticClass:"text-extra-large-4 mr-3 line-base font-300"},[t._v(" "+t._s(t.cardDetailModel.deposit)+" ")]),e("div",{staticClass:"d-flex flex-column h-100"},[e("h5",{staticClass:"font-600"},[t._v(t._s(t.cardDetailModel.card_currency))]),e("span",{staticClass:"text-small d-block font-600 line-base pb-1 mt-auto"},[e("I18nVue",{attrs:{t:"Cards.detail.deposit"}})],1)])])]:t._e(),t.cardDetailModel.expiry_date?[e("div",{staticClass:"credit-meta-items d-flex align-center pb-3 dark-text"},[e("h1",{staticClass:"text-extra-large-4 mr-3 line-base font-300"},[t._v(" "+t._s(t.cardDetailModel.expiry_date)+" ")]),e("div",{staticClass:"d-flex flex-column h-100"},[e("h5",{staticClass:"font-600"},[e("I18nVue",{attrs:{t:"Cooperative.Cards.year"}})],1),e("span",{staticClass:"text-small d-block font-600 line-base pb-1 mt-auto"},[e("I18nVue",{attrs:{t:"Cooperative.Cards.expiration"}})],1)])])]:t._e()],2)],1)])],1)],1)]),e("div",{staticClass:"view-toolbar mt-16"},[e("v-container",{staticClass:"py-0"},[e("div",{staticClass:"app-tab-header d-flex"},[e("div",{staticClass:"tab-header-items text-center mr-7 active",attrs:{"data-item":"header"}},[e("a",{staticClass:"\n                                navigation-link navigation-link__hover\n                                p-relative\n                                text--h4\n                                py-6\n                                font-600\n                                d-inline-block\n                            "},[e("I18nVue",{attrs:{t:"Cards.detail.about_card"}})],1)]),e("div",{staticClass:"tab-header-items text-center mr-7",attrs:{"data-item":"header"}},[e("a",{staticClass:"\n                                navigation-link navigation-link__hover\n                                p-relative\n                                text--h4\n                                py-6\n                                font-600\n                                d-inline-block\n                            "},[e("I18nVue",{attrs:{t:"Cards.detail.recipes_and_conditions"}})],1)]),e("div",{staticClass:"tab-header-items text-center mr-7",attrs:{"data-item":"header"}},[e("a",{staticClass:"\n                                navigation-link navigation-link__hover\n                                p-relative\n                                text--h4\n                                py-6\n                                font-600\n                                d-inline-block\n                            "},[e("I18nVue",{attrs:{t:"Cards.detail.files"}})],1)])])])],1),e("div",{staticClass:"view-toolbar-content py-16 overflow-hidden"},[e("v-container",{staticClass:"py-0"},[e("div",{staticClass:"app-tab-content p-relative"},[e("div",{staticClass:"tab-content-items active",attrs:{"data-item":"content"}},[t.layout?[e("about-card",{attrs:{about_description_uz:t.cardDetailModel.about_description_uz,about_description_ru:t.cardDetailModel.about_description_ru,about_description_en:t.cardDetailModel.about_description_en}})]:t._e()],2),e("div",{staticClass:"tab-content-items",attrs:{"data-item":"content"}},[e("h1",{staticClass:"text-extra-large-4 font-700 dark-text mb-10"},[t._v(" "+t._s(t.$t("card_condition"))+" ")]),e("div",{staticClass:"credit-widget pa-7 rounded-lg app-ul"},["en"===t.$i18n.locale&&t.cardDetailModel.card_conditions?e("span",{domProps:{innerHTML:t._s(t.cardDetailModel.card_conditions.condition_en)}}):t._e(),"ru"===t.$i18n.locale&&t.cardDetailModel.card_conditions?e("span",{domProps:{innerHTML:t._s(t.cardDetailModel.card_conditions.condition_ru)}}):t._e(),"uz"===t.$i18n.locale&&t.cardDetailModel.card_conditions?e("span",{domProps:{innerHTML:t._s(t.cardDetailModel.card_conditions.condition_uz)}}):t._e()])]),e("div",{staticClass:"tab-content-items",attrs:{"data-item":"content"}},[e("DocumentCard")],1)])])],1)],1)},r=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about-card-view"},[e("h1",{staticClass:"text-extra-large-4 font-700 dark-text mb-2"},[e("I18nVue",{attrs:{t:"benefits_of_using_cards.title"}})],1),"en"===t.$i18n.locale?e("h3",{staticClass:"grey-light-2 mb-15",domProps:{innerHTML:t._s(t.about_description_en)}}):t._e(),"ru"===t.$i18n.locale?e("h3",{staticClass:"grey-light-2 mb-15",domProps:{innerHTML:t._s(t.about_description_ru)}}):t._e(),"uz"===t.$i18n.locale?e("h3",{staticClass:"grey-light-2 mb-15",domProps:{innerHTML:t._s(t.about_description_uz)}}):t._e(),t.results?e("v-row",{staticClass:"mb-10"},t._l(t.results,(function(a){return e("v-col",{attrs:{lg:"4",md:"6"}},[e("app-information-card",{attrs:{item:a},scopedSlots:t._u([{key:"image",fn:function(){return[e("img",{staticStyle:{width:"60px",height:"60px"},attrs:{src:t.$http.defaults&&t.$http.defaults.baseURL+a.icon.url,alt:""}})]},proxy:!0},{key:"title",fn:function(){return[e("I18nVue",{attrs:{uz:a.property_title_uz,ru:a.property_title_ru,en:a.property_title_en}})]},proxy:!0},{key:"description",fn:function(){return[e("I18nVue",{attrs:{uz:a.property_desc_uz,ru:a.property_desc_ru,en:a.property_desc_en}})]},proxy:!0}],null,!0)})],1)})),1):t._e(),e("v-row",[e("v-col",{staticClass:"pl-0",attrs:{lg:"7"}},[e("v-row",[e("v-col",{attrs:{md:"6"}},[e("div",{staticClass:"app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2"},[e("h1",{staticClass:"font-300 text-extra-large primary-text"},[t._v("1")]),e("v-divider",{staticClass:"my-10",staticStyle:{"border-color":"rgba(var(--border-color), 1)"}}),e("h4",{staticClass:"dark-text"},[e("I18nVue",{attrs:{t:"benefits_of_using_cards.text1"}})],1)],1)]),e("v-col",{attrs:{md:"6"}},[e("div",{staticClass:"app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2"},[e("h1",{staticClass:"font-300 text-extra-large primary-text"},[t._v("2")]),e("v-divider",{staticClass:"my-10",staticStyle:{"border-color":"rgba(var(--border-color), 1)"}}),e("h4",{staticClass:"dark-text"},[e("I18nVue",{attrs:{t:"benefits_of_using_cards.text2"}})],1)],1)]),e("v-col",{attrs:{md:"6"}},[e("div",{staticClass:"app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2"},[e("h1",{staticClass:"font-300 text-extra-large primary-text"},[t._v("3")]),e("v-divider",{staticClass:"my-10",staticStyle:{"border-color":"rgba(var(--border-color), 1)"}}),e("h4",{staticClass:"dark-text"},[e("I18nVue",{attrs:{t:"benefits_of_using_cards.text3"}})],1)],1)]),e("v-col",{attrs:{md:"6"}},[e("div",{staticClass:"app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2"},[e("h1",{staticClass:"font-300 text-extra-large primary-text"},[t._v("✓")]),e("v-divider",{staticClass:"my-10",staticStyle:{"border-color":"rgba(var(--border-color), 1)"}}),e("h4",{staticClass:"dark-text"},[e("I18nVue",{attrs:{t:"benefits_of_using_cards.text4"}})],1)],1)])],1)],1),e("v-col",{attrs:{lg:"5"}},[e("div",{staticClass:"orphan-card-1 mx-lg-auto"},[e("v-responsive",{attrs:{"aspect-ratio":16/9}},[e("img",{staticClass:"d-block w-100 h-100 img-cover",attrs:{src:"/images/card-01_3.png",alt:"Card image"}})]),e("h3",{staticClass:"dark-text font-600 mt-4"},[e("I18nVue",{attrs:{t:"benefits_of_using_cards.text5"}})],1),e("p",{staticClass:"mt-3 mb-6"},[e("I18nVue",{attrs:{t:"benefits_of_using_cards.text6"}})],1),e("v-btn",{attrs:{to:{name:"CardOpen"},depressed:"",color:"danger",rounded:"","min-width":"192","min-height":"50"}},[e("I18nVue",{attrs:{classes:"font-700 text-white",t:"benefits_of_using_cards.btn"}})],1)],1)])],1)],1)},n=[],l=e("d1f9"),d=e("26ad"),c={name:"AboutCard",components:{I18nVue:l["a"],AppInformationCard:d["a"]},props:["about_description_uz","about_description_ru","about_description_en"],data(){return{results:null}},mounted(){this.$http.get(`1/plastic_cards/${this.$route.params.id}/property/`).then(({data:t})=>this.results=t.results)}},o=c,u=(e("b1a9"),e("0c7c")),p=Object(u["a"])(o,i,n,!1,null,null,null),_=p.exports,m=e("0a35"),v=e("c4a0"),h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",[e("v-col",{attrs:{md:"6"}},[e("h1",{staticClass:"font-600 dark-text mb-8"},[e("I18nVue",{attrs:{t:"Cards.detail.required_documents"}})],1),t.documents?t._l(t.documents,(function(t){return e("div",{staticClass:"app-slide-card pa-6 mb-6 rounded-lg overflow-hidden p-relative",staticStyle:{"min-height":"auto"}},[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"mr-5 p-relative"},[e("v-avatar",{attrs:{color:"#fff",size:"75"}},[e("svg",{staticClass:"size-lg",attrs:{id:"icon-file",viewBox:"0 0 64 64"}},[e("path",{attrs:{d:"M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"}}),e("path",{attrs:{d:"M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"}})])])],1),e("div",[e("h3",{staticClass:"dark-text font-600"},[e("I18nVue",{attrs:{uz:t.title_uz,ru:t.title_ru,en:t.title_en}})],1),e("I18nVue",{attrs:{uz:t.doc_name_uz,ru:t.doc_name_ru,en:t.doc_name_en}})],1)])])})):t._e()],2),e("v-col",{attrs:{md:"6"}},[e("h1",{staticClass:"font-600 dark-text mb-8"},[e("I18nVue",{attrs:{t:"toDownload"}})],1),t._l(t.documents,(function(a){return[null!==a.for_download?e("a",{staticClass:"app-slide-card pa-6 mb-6 rounded-lg overflow-hidden p-relative d-block text-decoration-none",staticStyle:{"min-height":"auto"},attrs:{target:"_blank",rel:"noopener noreferrer",download:"",href:t.$http.defaults.baseURL+a.for_download.url}},[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"mr-5 p-relative"},[e("v-avatar",{attrs:{color:"#fff",size:"75"}},[e("svg",{staticClass:"size-lg",attrs:{id:"icon-file",viewBox:"0 0 64 64"}},[e("path",{attrs:{d:"M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"}}),e("path",{attrs:{d:"M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"}})])])],1),e("div",{staticClass:"flex-1"},[e("h3",{staticClass:"dark-text font-600"},[e("I18nVue",{attrs:{uz:a.title_uz,ru:a.title_ru,en:a.title_en}})],1)]),e("div",{staticClass:"download-icon pr-10 transition-all"},[e("download-icon",{staticClass:"custom-class",attrs:{size:"1.8x"}})],1)])]):t._e()]}))],2)],1)},C=[],f={name:"DocumentCard",components:{I18nVue:l["a"],DownloadIcon:m["k"]},data(){return{documents:null}},mounted(){this.$http.get(`1/plastic_cards/${this.$route.params.id}/required_documents/`).then(({data:t})=>this.documents=t.results)}},x=f,b=Object(u["a"])(x,h,C,!1,null,null,null),g=b.exports,y={name:"index",components:{DocumentCard:g,I18nVue:l["a"],AboutCard:_,ChevronRightIcon:m["g"]},data(){return{cardDetailModel:{},cardDetailDocsList:null,layout:!1}},mounted(){const t=document.querySelectorAll('[data-item="header"]'),a=document.querySelectorAll('[data-item="content"]');Object(v["b"])(t,a),this.getOne()},methods:{getOne(){this.$http.get(`1/plastic_cards/${this.$route.params.id}/`,{params:{category:5}}).then(({data:t})=>{this.cardDetailModel=t,this.cardDetailDocsList=t.card_documents,this.layout=!0})}}},M=y,z=Object(u["a"])(M,s,r,!1,null,null,null);a["default"]=z.exports}}]);