(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ac8954c"],{"133a":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"app-filter rounded-lg pa-4 mb-5"},[a("v-row",[t._t("default")],2)],1)},i=[],l={name:"AppFilter"},n=l,r=a("0c7c"),o=Object(r["a"])(n,e,i,!1,null,null,null);s["a"]=o.exports},"8fa9":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"empty-list d-flex align-center flex-column justify-center h-100"},[a("img",{staticClass:"d-block mb-6",staticStyle:{transform:"scale(0.9)"},attrs:{src:"/images/dashboard/empty-block.svg",alt:"Empty image"}}),a("div",{staticClass:"d-flex align-center"},[a("frown-icon",{staticClass:"dark-text",attrs:{size:"1.8x"}}),a("h2",{staticClass:"font-600 ml-3 dark-text"},[t._v(t._s(t.$t("Dashboard.no_information_found")))])],1)])},i=[],l=a("0a35"),n={name:"NotFound",components:{FrownIcon:l["r"]}},r=n,o=a("0c7c"),c=Object(o["a"])(r,e,i,!1,null,null,null);s["a"]=c.exports},c2b0:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user-applications-view"},[a("app-layout-scope-renderless",{attrs:{"api-url":t.initialPathName},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.filters,i=s.list,l=s.count,n=s.loading,r=s.paginate;return[a("div",{staticClass:"d-flex flex-column h-100"},[a("app-filter",[a("v-col",{attrs:{md:"3"}},[a("div",{staticClass:"app-form-group no-shadow app-form-group__xs"},[a("v-text-field",{attrs:{outlined:"","hide-details":"",clearable:"",placeholder:"Search..."},model:{value:e.search,callback:function(s){t.$set(e,"search",s)},expression:"filters.search"}})],1)]),a("v-col",{attrs:{md:"3"}},[a("div",{staticClass:"app-form-group no-shadow app-form-group__xs"},[a("v-select",{attrs:{items:t.getStatusList,"item-text":"uz"===t.$i18n.locale?"name_uz":"ru"===t.$i18n.locale?"name_ru":"name_en","item-value":"id",outlined:"","hide-details":"",clearable:"",placeholder:t.$t("LastCorrections.filter_by_status")},scopedSlots:t._u([{key:"append",fn:function(){return[a("chevron-down-icon",{staticClass:"mt-1",attrs:{size:"1.2x"}})]},proxy:!0}],null,!0),model:{value:e.status,callback:function(s){t.$set(e,"status",s)},expression:"filters.status"}})],1)])],1),a("app-card",{staticClass:"mb-13",attrs:{title:t.$t("Dashboard.sidebar.list_of_loans")+" ("+l+")"}},[n?a("app-loader"):t._e(),i.length?[a("v-simple-table",{staticClass:"admin-table"},[a("tbody",t._l(i,(function(s){return a("tr",{key:s.id,staticClass:"transition-fast-out-slow-in"},[a("td",{staticClass:"admin-table-td",attrs:{width:"300"}},[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(s.full_name)+" ")]),a("span",{staticClass:"text-small font-600 text-secondary-dark d-block"},[t._v("F.I.O")])]),a("td",{staticClass:"admin-table-td",attrs:{width:"300"}},[s.vacancy_title?[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(s.vacancy_title)+" ")])]:[a("h5",{staticClass:"font-600"},[t._v(t._s(t.$t("LastCorrections.notSelected")))])],a("span",{staticClass:"text-small font-600 text-secondary-dark d-block"},[t._v("Vakansiya nomi")])],2),a("td",{staticClass:"admin-table-td",attrs:{width:"350"}},[s.district?[a("h5",{staticClass:"font-600"},[a("I18nVue",{attrs:{uz:s.district.name_uz,ru:s.district.name_ru,en:s.district.name_en}})],1)]:[a("h5",{staticClass:"font-600"},[t._v(t._s(t.$t("LastCorrections.notSelected")))])],a("span",{staticClass:"text-small font-600 text-secondary-dark d-block"},[t._v(t._s(t.$t("LastCorrections.region")))])],2),a("td",{staticClass:"admin-table-td",attrs:{width:"200"}},[s.status?[a("v-chip",{staticClass:"mb-1 text-capitalize mr-2",attrs:{color:"primary","text-color":"white",small:""}},[a("I18nVue",{attrs:{uz:s.status.name_uz,ru:s.status.name_ru,en:s.status.name_en}})],1)]:t._e(),a("span",{staticClass:"text-small font-600 text-secondary-dark d-block"},[t._v(t._s(t.$t("LastCorrections.status")))])],2),a("td",{staticClass:"admin-table-td",attrs:{width:"250"}},[a("h5",{staticClass:"font-600"},[t._v(t._s(t._f("filterDateAndTimeHour")(s.created_date)))]),a("span",{staticClass:"text-small font-600 text-secondary-dark d-block"},[a("I18nVue",{attrs:{t:"LastCorrections.date"}})],1)]),a("td",{staticClass:"admin-table-td",attrs:{width:"100"}},[a("v-btn",{attrs:{to:{name:"AdminHRApplicationsRead",params:{id:s.id}},depressed:"",icon:"",color:"info"}},[a("eye-icon",{staticClass:"custom-class",attrs:{size:"1.5x"}})],1)],1)])})),0)])]:[a("not-found")]],2),a("div",{staticClass:"card-footer"},[a("app-pagination",{on:{"emit:up":r}})],1)],1)]}}])})],1)},i=[],l=a("e02c"),n=a("133a"),r=a("87d8"),o=a("6571"),c=a("8fa9"),d=a("7c84"),u=a("0a35"),p=a("d1f9"),h=a("2f62"),f={name:"List",components:{AppLayoutScopeRenderless:l["a"],AppFilter:n["a"],AppCard:r["a"],AppLoader:o["a"],NotFound:c["a"],AppPagination:d["a"],EyeIcon:u["n"],PlusIcon:u["F"],ChevronDownIcon:u["e"],I18nVue:p["a"]},data(){return{initialPathName:"job_app/action"}},computed:{...Object(h["c"])({getStatusList:"getStatusList"})},methods:{filterByUrl(t){this.initialPathName=t.value}}},m=f,_=a("0c7c"),g=Object(_["a"])(m,e,i,!1,null,null,null);s["default"]=g.exports},e02c:function(t,s,a){"use strict";var e,i,l=a("c4a0"),n={name:"AppLayoutScopeRenderless",props:{apiUrl:{type:String,default:null},type:{type:String,default:null},category:{type:[Number,String],default:null}},data(){return{filters:{search:null,status:null,card:null,cardType:null,credit:null,depositType:null,filial:null,filterByUrl:{title_uz:"Kredit uchun arizalar",title_ru:"Заявки на кредит",title_en:"Credit applications",value:"credit_application/action",block:2}},list:[],listCount:0,loading:!0}},watch:{filters:{deep:!0,handler(t){window.addEventListener("keyup",this.debouncedSearch())}}},created(){this.debouncedSearch=Object(l["d"])(()=>this.getAll(),500),this.getAll()},methods:{getAll(){this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/${this.apiUrl}/`,{params:{category:this.category,search:this.filters.search,status:this.filters.status,card:this.filters.card,card_type:this.filters.cardType,credit:this.filters.credit,type:this.filters.depositType,filial:this.filters.filial,page:this.$store.state.FILTER_OPTIONS.page,page_size:this.$store.state.FILTER_OPTIONS.page_size}}).then(({data:t})=>{console.log(t),this.list=t.results,this.listCount=t.count,this.$store.state.FILTER_OPTIONS.page_length=Math.ceil(t.count/this.$store.state.FILTER_OPTIONS.page_size)}).finally(()=>{this.loading=!1})},deleteRow(t){confirm("O'chirishni xoxlaysizmi ?")&&this.$http.delete(`/${this.$store.state.auth.COMPANY_ID}/${this.apiUrl}/${t}/`).then(t=>{this.$toast.success("O'chirildi"),this.getAll()}).catch(()=>{this.$toast.error("O'chirishda xatolik")})},paginate(t){this.$store.state.FILTER_OPTIONS.page=t,this.loading=!0,this.getAll()},exportToExcel(){this.loading=!0,this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/export_apps_to_excel/`,{responseType:"blob",params:{status:this.filters.status,card:this.filters.card,credit:this.filters.credit,filial:this.filters.filial,type:this.type}}).then(({data:t})=>{const s=window.URL.createObjectURL(new Blob([t])),a=document.createElement("a");a.href=s,a.setAttribute("download","application_documents.xls"),document.body.appendChild(a),a.click()}).finally(()=>{this.loading=!1})}},render(){return this.$scopedSlots.default({filters:this.filters,list:this.list,count:this.listCount,loading:this.loading,getAll:this.getAll,deleteRow:this.deleteRow,paginate:this.paginate,exportToExcel:this.exportToExcel})}},r=n,o=a("0c7c"),c=Object(o["a"])(r,e,i,!1,null,"42705190",null);s["a"]=c.exports}}]);