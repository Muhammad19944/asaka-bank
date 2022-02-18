(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8e30"],{5791:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news-view"},[a("div",{staticClass:"d-flex align-center mb-5"},[a("h5",{staticClass:"app-card-title font-600 text-secondary-dark"},[t._v(t._s(t.$t("Dashboard.sidebar.videos.videos_text")))]),a("v-spacer"),a("v-btn",{attrs:{to:{name:"DashboardVideosCreate"},depressed:"",color:"primary"}},[a("div",{staticClass:"d-flex align-center"},[a("plus-icon",{staticClass:"mr-1",attrs:{size:"1.5x"}}),a("span",{staticClass:"text-transform-reset"},[t._v(t._s(t.$t("Dashboard.add_new")))])],1)])],1),a("v-row",[a("v-col",{attrs:{md:"9"}},[a("v-row",[t._l(t.newsList,(function(e){return[a("v-col",{key:e.id,attrs:{md:"4"}},[a("div",{staticClass:"\n                                    app-card\n                                    border-all\n                                    d-flex\n                                    flex-column\n                                    text-decoration-none\n                                    rounded\n                                    overflow-hidden\n                                    h-100\n                                "},[a("div",{staticClass:"app-card-header p-relative"},[a("v-responsive",{attrs:{"aspect-ratio":1.5}},[a("div",{staticClass:"card-header-img p-absolute w-100 h-100 d-flex pa-7"},[a("img",{staticClass:"ma-auto transition-all",attrs:{src:"/images/logo.svg",alt:"App logo"}})])]),a("div",{staticClass:"\n                                            app-card-overlay\n                                            p-absolute\n                                            w-100\n                                            h-100\n                                            d-flex\n                                            align-center\n                                            justify-space-around\n                                            px-10\n                                            transition-ease-in-out\n                                        "},[a("router-link",{staticClass:"\n                                                rounded-circle\n                                                d-flex\n                                                align-center\n                                                justify-center\n                                                border-all\n                                                outline-transparent\n                                                transition-ease-in-out\n                                            ",attrs:{to:{name:"DashboardVideosRead",params:{id:e.id}},type:"button"}},[a("button",{staticClass:"d-flex align-center justify-center",attrs:{type:"button"}},[a("eye-icon",{staticClass:"text-white",attrs:{size:"1.1x"}})],1)]),a("router-link",{staticClass:"\n                                                rounded-circle\n                                                d-flex\n                                                align-center\n                                                justify-center\n                                                border-all\n                                                outline-transparent\n                                                transition-ease-in-out\n                                            ",attrs:{to:{name:"DashboardVideosUpdate",params:{id:e.id}},type:"button"}},[a("button",{staticClass:"\n                                                    rounded-circle\n                                                    d-flex\n                                                    align-center\n                                                    justify-center\n                                                    transition-ease-in-out\n                                                ",attrs:{type:"button"}},[a("edit-icon",{staticClass:"text-white",attrs:{size:"1.1x"}})],1)]),a("button",{staticClass:"\n                                                rounded-circle\n                                                d-flex\n                                                align-center\n                                                justify-center\n                                                border-all\n                                                outline-transparent\n                                                transition-ease-in-out\n                                            ",attrs:{type:"button"},on:{click:function(a){return t.deleteRow(e.id)}}},[a("trash2-icon",{staticClass:"text-white",attrs:{size:"1.1x"}})],1)],1)],1),a("div",{staticClass:"app-card-body pa-6 flex-1 d-flex flex-column bg-white"},[a("div",{staticClass:"card-body-meta d-flex mb-5"},[a("div",{staticClass:"card-date mr-6"},[a("h2",{staticClass:"text-center mb-1"},[t._v(t._s(t._f("filterOnlyDate")(e.date_added)))]),a("span",{staticClass:"text-capitalize"},[t._v(t._s(t._f("filterOnlyMonth")(e.date_added)))])]),a("div",{staticClass:"card-text main-grey"},[a("h5",{staticClass:"line-truncate"},[a("I18nVue",{attrs:{uz:e.title_uz,ru:e.title_ru,en:e.title_en}})],1)])])])])])]})),a("v-col",{staticClass:"text-center",attrs:{md:"12"}},[t.isAllLoaded?t._e():[a("send-button",{attrs:{text:t.$t("Dashboard.load_more")},on:{"emit:up":t.loadMore}},[a("download-cloud-icon",{staticClass:"text-white",attrs:{size:"1.3x"}})],1)]],2)],2)],1),a("v-col",{attrs:{md:"3"}},[a("widget",{attrs:{CATEGORY_ID:11}})],1)],1)],1)},n=[],i=a("0130"),r=a("2954"),o=a("0a35"),l=a("d1f9"),d={name:"index",components:{SendButton:i["a"],Widget:r["a"],PlusIcon:o["F"],ChevronRightIcon:o["g"],DownloadCloudIcon:o["j"],EyeIcon:o["n"],EditIcon:o["m"],Trash2Icon:o["M"],I18nVue:l["a"]},data(){return{newsList:[],pageCounter:1,isAllLoaded:!1}},mounted(){this.getAll()},methods:{getAll(){this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/news/`,{params:{page:this.pageCounter,page_size:this.$store.state.FILTER_OPTIONS.page_size,category:11}}).then(({data:t})=>{t.next||(this.isAllLoaded=!0),t.results.forEach(t=>{this.newsList.push(t)})})},deleteRow(t){confirm("O'chirishni xoxlaysizmi ?")&&this.$http.delete(`/${this.$store.state.auth.COMPANY_ID}/news/${t}/`).then(()=>{this.$toast.success("O'chirildi"),this.getAll()}).catch(()=>{this.$toast.error("O'chirishda xatolik")})},loadMore(){this.pageCounter=this.pageCounter+1,this.getAll()}}},c=d,u=a("0c7c"),h=Object(u["a"])(c,s,n,!1,null,null,null);e["default"]=h.exports}}]);