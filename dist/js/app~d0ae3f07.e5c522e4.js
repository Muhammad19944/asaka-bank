(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~d0ae3f07"],{0:function(e,t,a){e.exports=a("56d7")},"0d5e":function(e,t,a){"use strict";var r=a("2b0e"),i=a("bc3a"),s=a.n(i),o=a("eafa");s.a.interceptors.request.use(e=>(e.headers={Authorization:o["b"].get()?"Token "+o["b"].get():"",Accept:"application/json"},e),e=>Promise.reject(e)),s.a.interceptors.response.use(e=>e,e=>(401===e.response.status&&Object(o["a"])(),Promise.reject(e.response))),s.a.defaults.baseURL=Object({NODE_ENV:"production",VUE_APP_BASE_URL2:"https://back.asakabank.uz",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_I18N_LOCALE:"en",VUE_APP_I18N_SUPPORTED_LOCALE:"[uz, ru, en]",VUE_APP_PASSWORD:"4sakaU7#",VUE_APP_SESSION_URL:"https://capi.asakabank.uz",VUE_APP_USERNAME:"asakabank-site",BASE_URL:"/"}).VUE_APP_BASE_URL||"https://back.asakabank.uz",r["default"].prototype.$http=s.a,t["a"]=s.a},3786:function(e,t,a){"use strict";var r=a("0d5e");const i=e=>r["a"].post("/individual/user-register/",e),s=e=>r["a"].post("/login/",e),o=()=>r["a"].get("/my/profile/");t["a"]={register:i,login:s,getCurrentUserApi:o}},"3dfd":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("router-view"),a("notifications",{attrs:{group:"simple",position:"top right",duration:5e3}}),a("voice-speech"),a("error-text-modal")],1)},i=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{ref:"voiceContainer",staticClass:"voice-container",attrs:{id:"voice-container"}},[a("v-btn",{attrs:{icon:"",depressed:""},on:{click:e.speech}},[a("volume2-icon",{attrs:{color:"#fff",size:"20"}})],1)],1)])},o=[],n=a("0a35"),l={name:"VoiceSpeech",components:{Volume2Icon:n["U"]},mounted(){document.addEventListener("dblclick",e=>{const{clientX:t,clientY:a}=e,{voiceContainer:r}=this.$refs;r.style.top=a+"px",r.style.left=t+"px",r.classList.add("active")});const{voiceContainer:e}=this.$refs;document.addEventListener("click",(function(t){let a=t.target;do{if(a===e)return;a=a.parentNode}while(a);e.classList.remove("active")}))},methods:{speech(){const e=new SpeechSynthesisUtterance;let t=localStorage.getItem("locale");"ru"===t&&(e.lang="ru-RU"),"en"===t&&(e.lang="en-US"),"uz"===t&&(e.lang="uz-UZ"),e.text=window.getSelection(),window.speechSynthesis.speak(e)}}},c=l,d=(a("ba93"),a("0c7c")),u=Object(d["a"])(c,s,o,!1,null,"57d477ea",null),p=u.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("v-card",[a("v-card-title",{staticClass:"primary-bg"},[a("alert-octagon-icon",{staticClass:"mr-3"}),a("h4",[e._v("Hatolik haqida habar")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",depressed:"",dark:""},on:{click:e.close}},[a("x-icon")],1)],1),a("v-card-text",{staticClass:"pt-5"},[a("div",{staticClass:"app-form-group mb-8"},[a("h5",{staticClass:"font-600 dark-text"},[e._v(" Matndan topilgan hatolik: ")]),a("v-divider",{staticClass:"mt-3 mb-5",staticStyle:{"border-color":"rgba(var(--border-color), 1)"}}),a("v-textarea",{attrs:{readonly:"",outlined:"","hide-details":""},model:{value:e.errorMessageModel.highlighted_text,callback:function(t){e.$set(e.errorMessageModel,"highlighted_text",t)},expression:"errorMessageModel.highlighted_text"}})],1),a("div",{staticClass:"app-form-group mb-8"},[a("h5",{staticClass:"font-600 dark-text"},[e._v(" Sahifa havola nomi: ")]),a("v-divider",{staticClass:"mt-3 mb-5",staticStyle:{"border-color":"rgba(var(--border-color), 1)"}}),a("v-text-field",{attrs:{readonly:"",outlined:"","hide-details":""},model:{value:e.errorMessageModel.url,callback:function(t){e.$set(e.errorMessageModel,"url",t)},expression:"errorMessageModel.url"}})],1),a("div",{staticClass:"app-form-group"},[a("h5",{staticClass:"font-600 dark-text"},[e._v(" Muallif uchun mulohaza (zaruriyatda): ")]),a("v-divider",{staticClass:"mt-3 mb-5",staticStyle:{"border-color":"rgba(var(--border-color), 1)"}}),a("v-textarea",{attrs:{error:e.$v.errorMessageModel.given_text.$error,outlined:"","hide-details":"",autofocus:""},model:{value:e.$v.errorMessageModel.given_text.$model,callback:function(t){e.$set(e.$v.errorMessageModel.given_text,"$model",t)},expression:"$v.errorMessageModel.given_text.$model"}})],1)]),a("v-card-actions",{staticClass:"pb-4 px-6"},[a("v-spacer"),a("v-btn",{staticClass:"mr-2",attrs:{color:"red darken-1",text:""},on:{click:e.close}},[a("span",{staticClass:"font-700"},[e._v("Bekor qilish")])]),a("v-btn",{attrs:{color:"rgba(var(--primary), 1)",depressed:"",dark:""},on:{click:e.send}},[a("span",{staticClass:"font-600"},[e._v("Yuborish")])])],1)],1)],1)],1)},g=[],m=a("2f62"),v=a("b5ae"),h={name:"ErrorTextModal",components:{AlertOctagonIcon:n["a"],XIcon:n["W"]},data(){return{errorMessageModel:{highlighted_text:"",given_text:"",url:""}}},validations:{errorMessageModel:{given_text:{required:v["required"]}}},mounted(){this.keyListener=e=>{"Enter"===e.key&&e.ctrlKey&&(this.errorMessageModel.highlighted_text=window.getSelection().toString().split("\n").join(" "),this.errorMessageModel.url=window.location.href,this.TOGGLE_ERROR_MESSAGE_MODAL(!0))},document.addEventListener("keydown",this.keyListener.bind(this))},computed:{...Object(m["c"])({getErrorMessageModalVisible:"getErrorMessageModalVisible"}),visible:{get(){return this.getErrorMessageModalVisible},set(e){return e}}},methods:{...Object(m["d"])({TOGGLE_ERROR_MESSAGE_MODAL:"TOGGLE_ERROR_MESSAGE_MODAL"}),close(){this.TOGGLE_ERROR_MESSAGE_MODAL(!1)},send(){this.$v.$touch(),this.$v.$invalid||this.$http.post("/notes/create/",this.errorMessageModel).then(({data:e})=>{this.$toast.success(this.$t("application_send"))}).finally(()=>{this.TOGGLE_ERROR_MESSAGE_MODAL(!1),this.errorMessageModel.given_text="",this.$nextTick(()=>{this.$v.$reset()})})}}},b=h,M=Object(d["a"])(b,f,g,!1,null,"1b8d26c6",null),_=M.exports,E=a("c4a0"),k=a("c7d4"),O=a("eafa"),S={name:"App",metaInfo:{title:"Asakabank"},components:{VoiceSpeech:p,ErrorTextModal:_},watch:{$route:{handler(e){this.$store.dispatch("actionRouteUrl",e.fullPath),this.$store.state.MENU_DROPDOWN=!1,this.TOGGLE_GRID_MENU(!1),document.querySelector("html").classList.remove("active")},immediate:!0}},created(){const e=localStorage.getItem("locale")||"uz";document.documentElement.setAttribute("lang",e),e?this.$i18n.locale=e:navigator.language&&(this.$i18n.locale=navigator.language.substring(0,2))},mounted(){O["b"].get()&&this.$store.dispatch(k["a"].getCurrentUser).then(e=>{this.$store.state.auth.COMPANY_ID=e.company?e.company.id:""}),Object(E["f"])()},methods:{...Object(m["d"])({TOGGLE_GRID_MENU:"TOGGLE_GRID_MENU"})}},x=S,D=Object(d["a"])(x,r,i,!1,null,null,null);t["a"]=D.exports},4657:function(e,t,a){"use strict";var r=a("2b0e");r["default"].directive("uppercase",{update(e,t,a,r){e.value=e.value.toUpperCase(),e.dispatchEvent(new Event("input"))}}),r["default"].directive("lowercase",{update(e,t,a,r){e.value=e.value.toLowerCase(),e.dispatchEvent(new Event("input"))}}),r["default"].directive("number",{bind(e,t,a,r){let i=e;t.modifiers.find&&(i=e.querySelector("input"));const s=function(){i.value&&(i.value=i.value.replace(/[^0-9]/g,""),i.dispatchEvent(new Event("input")))};i.addEventListener("input",s)}})},"5aea":function(e,t,a){},"63b3":function(e,t,a){var r={"./1.jpg":"e901","./10.jpg":"8220","./11.jpg":"d540","./12.jpg":"bb62","./13.jpg":"bac3","./14.jpg":"f332","./15.jpg":"737e","./16.jpg":"7ea5","./17.jpg":"2355","./18.jpg":"f521","./19.jpg":"74bc","./2.jpg":"aaa1","./20.jpg":"a50e","./21.jpg":"b60d","./22.jpg":"ef82","./23.jpg":"3e58","./24.jpg":"424b","./25.jpg":"841c","./3.jpg":"d0d7","./4.jpg":"f1f8","./5.jpg":"8a80","./6.jpg":"e444","./7.jpg":"c6e8","./8.jpg":"1741","./9.jpg":"5300"};function i(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=s,e.exports=i,i.id="63b3"},"8e14":function(e,t,a){var r={"./amex.png":"fea8","./aura.png":"d4c1","./chip.png":"e0c9","./dankort.png":"72c5","./dinersclub.png":"69f4","./discover.png":"469c","./elo.png":"bd42","./hipercard.png":"f124","./jcb.png":"a775","./laser.png":"d135","./maestro.png":"3c60","./mastercard.png":"702c","./mir.png":"9757","./troy.png":"aab3","./uatp.png":"5699","./unionpay.png":"2ddc","./visa.png":"f9db","./visaelectron.png":"59cb"};function i(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=s,e.exports=i,i.id="8e14"},9225:function(e,t,a){"use strict";var r=a("2b0e"),i=a("a925");function s(){const e=a("49f8"),t={};return e.keys().forEach(a=>{const r=a.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){const i=r[1];t[i]=e(a)}}),t}r["default"].use(i["a"]),t["a"]=new i["a"]({locale:"en",fallbackLocale:"en",messages:s()})},"98fc":function(e,t,a){"use strict";var r=a("2b0e"),i=a("c1df"),s=a.n(i),o=a("9225");a("957c"),a("010e");r["default"].filter("filterOnlyDate",e=>s()(e).isValid()?s()(e).format("D"):""),r["default"].filter("filterOnlyMonth",e=>s()(e).isValid()?s()(e).locale(o["a"].locale).format("MMMM"):""),r["default"].filter("filterDate",e=>s()(e).isValid()?s()(e).format("DD.MM.YYYY"):""),r["default"].filter("filterDateParse",e=>s()(e).isValid()?s()(e).format("YYYY,MM,DD"):""),r["default"].filter("filterMonthDate",e=>s()(e).isValid()?s()(e).format("MM.D.YYYY"):""),r["default"].filter("filterDateAndTime",e=>s()(e).isValid()?s()(e).format("D.MM.YYYY HH:mm"):""),r["default"].filter("filterDateAndTimeHour",e=>s()(e).isValid()?s()(e).format("D.MM.YYYY HH:mm"):""),r["default"].filter("filterTimeAndDate",e=>s()(e).isValid()?s()(e).format("HH:mm, D.MM.YYYY"):""),r["default"].filter("filterDateFMonth",e=>s()(e).isValid()?s()(e).format("D MMMM, YYYY"):""),r["default"].filter("filterTimeAndDateHMonth",e=>s()(e).isValid()?s()(e).format("D MMM YYYY, HH:mm"):""),r["default"].filter("filterTime",e=>s()(e).isValid()?s()(e).format("HH:mm"):""),r["default"].filter("filterNumberFormatThousands",e=>String(e).replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g," ")),r["default"].filter("toFixedFormatThousands",e=>Number(String(e).replace(/ /g,"")).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g," ")),r["default"].filter("filterMoneyGB",e=>Number(e)?(Number(e)/100).toLocaleString("en-GB",{minimumFractionDigits:2}):0),r["default"].filter("filterMoneyUS",e=>Number(e)?(Number(e)/100).toLocaleString("en-US",{minimumFractionDigits:2}):0),r["default"].filter("filterMoneyRU",e=>Number(e)?(Number(e)/100).toLocaleString("ru-RU",{minimumFractionDigits:2}):0)},ba93:function(e,t,a){"use strict";a("e222")},c1c3:function(e,t,a){},e222:function(e,t,a){}}]);