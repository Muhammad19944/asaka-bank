(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc656"],{"4e6e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bank-shareholders-view"},[s("v-container",[s("div",{staticClass:"app-content-view"},[s("h4",{staticClass:"font-600 dark-text mb-3"},[s("I18nVue",{attrs:{t:"AboutBank.bankShareholders.title"}})],1),s("v-simple-table",{staticClass:"app-table app-table__border",scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",[s("h5",{staticClass:"font-600 dark-text"},[t._v("№")])]),s("th",[s("h5",{staticClass:"font-600 dark-text"},[s("I18nVue",{attrs:{t:"AboutBank.bankShareholders.table.th1"}})],1)]),s("th",[s("h5",{staticClass:"font-600 dark-text"},[s("I18nVue",{attrs:{t:"AboutBank.bankShareholders.table.th2"}})],1)]),s("th",[s("h5",{staticClass:"font-600 dark-text"},[s("I18nVue",{attrs:{t:"AboutBank.bankShareholders.table.th3"}})],1)])])]),s("tbody",t._l(t.sortedList,(function(e,a){return s("tr",{key:e.id},[s("td",{staticClass:"py-3",attrs:{width:"100"}},[s("h5",[t._v(t._s(a+1))])]),s("td",{staticClass:"py-3",attrs:{width:"500"}},[s("h5",[s("I18nVue",{attrs:{uz:e.title_uz,ru:e.title_ru,en:e.title_en}})],1)]),s("td",{staticClass:"py-3"},[s("h5",[s("I18nVue",{attrs:{uz:e.address_uz,ru:e.address_ru,en:e.address_en}})],1)]),s("td",{staticClass:"py-3",attrs:{width:"150"}},[s("h5",[t._v(t._s(e.share_percent)+" %")])])])})),0)]},proxy:!0}])})],1)])],1)},r=[],n=s("d1f9"),h={name:"index",components:{I18nVue:n["a"]},data(){return{shareholdersList:[]}},computed:{sortedList(){let t=new Intl.Collator("en",{numeric:!0,sensitivity:"base"}),e=this.shareholdersList.sort((e,s)=>t.compare(s.share_percent,e.share_percent));return e}},mounted(){this.getShareholdersList()},methods:{getShareholdersList(){this.$http.get("/1/bank/shareholders/",{params:{page_size:50}}).then(({data:t})=>{this.shareholdersList=t.results})}}},i=h,l=s("0c7c"),d=Object(l["a"])(i,a,r,!1,null,null,null);e["default"]=d.exports}}]);