(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b102518"],{"133a":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"app-filter rounded-lg pa-4 mb-5"},[a("v-row",[t._t("default")],2)],1)},i=[],n={name:"AppFilter"},l=n,o=a("0c7c"),r=Object(o["a"])(l,e,i,!1,null,null,null);s["a"]=r.exports},"8fa9":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"empty-list d-flex align-center flex-column justify-center h-100"},[a("img",{staticClass:"d-block mb-6",staticStyle:{transform:"scale(0.9)"},attrs:{src:"/images/dashboard/empty-block.svg",alt:"Empty image"}}),a("div",{staticClass:"d-flex align-center"},[a("frown-icon",{staticClass:"dark-text",attrs:{size:"1.8x"}}),a("h2",{staticClass:"font-600 ml-3 dark-text"},[t._v(t._s(t.$t("Dashboard.no_information_found")))])],1)])},i=[],n=a("0a35"),l={name:"NotFound",components:{FrownIcon:n["r"]}},o=l,r=a("0c7c"),d=Object(r["a"])(o,e,i,!1,null,null,null);s["a"]=d.exports},9056:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"slides-view"},[a("app-filter"),a("app-card",{staticClass:"mb-13",attrs:{title:t.$t("Dashboard.sidebar.slide_section")},scopedSlots:t._u([{key:"add-view",fn:function(){return[a("v-btn",{attrs:{to:{name:"OtherSectionSlidesCreate"},depressed:"",color:"primary"}},[a("div",{staticClass:"d-flex align-center"},[a("plus-icon",{staticClass:"mr-1",attrs:{size:"1.5x"}}),a("span",{staticClass:"text-transform-reset"},[t._v(t._s(t.$t("Dashboard.add_new")))])],1)])]},proxy:!0}])},[t.isLoaded?t._e():a("app-loader"),t.slidesList.length?[a("v-simple-table",{staticClass:"admin-table"},[a("tbody",t._l(t.slidesList,(function(s){return a("tr",{key:s.id,staticClass:"transition-fast-out-slow-in"},[a("td",{staticClass:"admin-table-td"},[a("h5",{staticClass:"font-600"},[t._v(t._s(s.name_uz))]),a("span",{staticClass:"text-small font-600 text-secondary-dark"},[t._v("Slide nomi")])]),a("td",{staticClass:"admin-table-td",attrs:{width:"300"}},[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t._f("filterDateAndTimeHour")(s.modified_date?s.modified_date:""))+" ")]),a("span",{staticClass:"text-small font-600 text-secondary-dark"},[t._v("Sana")])]),a("td",{staticClass:"admin-table-td",attrs:{width:"160"}})])})),0)])]:[a("not-found")]],2),a("div",{staticClass:"card-footer"},[a("app-pagination",{on:{"emit:up":t.paginate}})],1)],1)},i=[],n=a("133a"),l=a("87d8"),o=a("7c84"),r=a("6571"),d=a("8fa9"),c=a("0a35"),p={name:"List",components:{AppFilter:n["a"],AppCard:l["a"],AppPagination:o["a"],AppLoader:r["a"],NotFound:d["a"],PlusIcon:c["F"],EyeIcon:c["n"],EditIcon:c["m"],Trash2Icon:c["M"]},data(){return{isLoaded:!1,slidesList:[]}},mounted(){this.getAll()},methods:{getAll(){this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/slide/image/`).then(({data:t})=>{this.slidesList=t.results,this.$store.state.FILTER_OPTIONS.page_length=Math.floor(t.count/this.$store.state.FILTER_OPTIONS.page_size),this.isLoaded=!0})},deleteRow(t){confirm("O'chirishni xoxlaysizmi ?")&&this.$http.delete(`/${this.$store.state.auth.COMPANY_ID}/slide/image/${t}/`).then(()=>{this.$toast.success("O'chirildi"),this.getAll()}).catch(()=>{this.$toast.error("O'chirishda xatolik")})},paginate(t){this.$store.state.FILTER_OPTIONS.page=t,this.isLoaded=!1,this.getAll()}}},u=p,h=a("0c7c"),m=Object(h["a"])(u,e,i,!1,null,null,null);s["default"]=m.exports}}]);