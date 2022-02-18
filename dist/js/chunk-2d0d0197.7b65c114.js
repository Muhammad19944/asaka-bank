(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0197"],{6711:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"service-payment-view"},[a("v-container",[a("div",{staticClass:"py-10"},[a("v-row",[a("v-col",{attrs:{md:"6"}},[a("div",{staticClass:"app-form-group mb-7"},[a("h4",{staticClass:"font-600 dark-text"},[e._v(" "+e._s(e.$t("P2p.Payment.cardNumber"))+" ")]),a("v-divider",{staticClass:"mt-3 mb-7",staticStyle:{"border-color":"rgba(var(--border-color), 1)"}}),a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"#### #### #### ####",expression:"'#### #### #### ####'"}],attrs:{error:e.$v.paymentModel.card_number.$error,outlined:"","hide-details":""},model:{value:e.$v.paymentModel.card_number.$model,callback:function(t){e.$set(e.$v.paymentModel.card_number,"$model",t)},expression:"$v.paymentModel.card_number.$model"}})],1)]),a("v-col",{attrs:{md:"6"}},[a("div",{staticClass:"app-form-group mb-7"},[a("h4",{staticClass:"font-600 dark-text"},[e._v(" "+e._s(e.$t("P2p.Payment.date2"))+" ")]),a("v-divider",{staticClass:"mt-3 mb-7",staticStyle:{"border-color":"rgba(var(--border-color), 1)"}}),a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"##/##",expression:"'##/##'"}],attrs:{error:e.$v.paymentModel.expiry_date.$error,outlined:"","hide-details":""},model:{value:e.$v.paymentModel.expiry_date.$model,callback:function(t){e.$set(e.$v.paymentModel.expiry_date,"$model",t)},expression:"$v.paymentModel.expiry_date.$model"}})],1)]),a("v-btn",{attrs:{depressed:"",color:"danger",rounded:"","min-width":"192","min-height":"50"},on:{click:e.openModal}},[a("span",{staticClass:"text-white font-700"},[e._v(" "+e._s(e.$t("payment_service"))+" ")])])],1)],1)]),a("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.dialogModalLoaded?[a("v-card",[a("v-card-title",{staticClass:"justify-space-between mb-4"},[e._v(" "+e._s(e.$t("Auth.Verify.smsCode"))+" "),a("span",{staticClass:"font-600 text--h5"},[e._v(e._s(e.countDownDate.minute)+" мин : "+e._s(e.countDownDate.second<=9?"0"+e.countDownDate.second:e.countDownDate.second)+" сек")])]),a("v-card-text",{staticClass:"pb-2"},[a("div",{staticClass:"app-form-group app-form-group__small no-shadow mb-2"},[a("h5",{staticClass:"font-600 dark-text mb-1"},[e._v(e._s(e.$t("Auth.Verify.codeLabel")))]),a("v-text-field",{attrs:{outlined:"",hint:e.OTPPaymentModel.phoneNumber+e.$t("Auth.Verify.codeHint"),"persistent-hint":""},model:{value:e.OTPPaymentModel.otp,callback:function(t){e.$set(e.OTPPaymentModel,"otp",t)},expression:"OTPPaymentModel.otp"}})],1)]),a("v-card-actions",[a("div",{staticClass:"px-2 pb-3 d-flex align-center justify-space-between w-100"},[a("v-btn",{attrs:{disabled:e.disableResendButton,color:"blue darken-1",depressed:"","min-width":"125","min-height":"42"},on:{click:e.resend}},[a("span",{staticClass:"reset-size font-600 text-transform-reset text-white",staticStyle:{"letter-spacing":"0.025rem"}},[e._v(" "+e._s(e.$t("Auth.Verify.resendCode"))+" ")])]),a("v-btn",{attrs:{color:"success darken-1",depressed:"",dark:"","min-width":"125","min-height":"42"},on:{click:function(t){return t.preventDefault(),e.send.apply(null,arguments)}}},[a("span",{staticClass:"reset-size font-600 text-transform-reset",staticStyle:{"letter-spacing":"0.025rem"}},[e._v(" "+e._s(e.$t("Auth.Verify.confirmation"))+" ")])])],1)])],1)]:[a("v-card",{staticClass:"pa-10 text-center"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]],2)],1)},n=[],o=a("b5ae"),i={name:"ServicePayment",data(){return{dialog:!1,dialogModalLoaded:!1,code:"",countDownDate:{minute:0,second:0},countInterval:0,disableResendButton:!0,paymentModel:{card_number:"",expiry_date:"",order_id:this.$route.params.id},OTPPaymentModel:{payment_id:"",otp:0,phoneNumber:""}}},validations:{paymentModel:{card_number:{required:o["required"]},expiry_date:{required:o["required"]}}},mounted(){console.log(this.$route.params.id)},methods:{openModal(){this.$v.$touch(),this.$v.$invalid||(this.dialog=!0,this.paymentModel.card_number=this.paymentModel.card_number.replace(/ /g,""),this.paymentModel.expiry_date=this.paymentModel.expiry_date.replace(/\//g,""),this.paymentModel.expiry_date=`${this.paymentModel.expiry_date.slice(-2)}${this.paymentModel.expiry_date.slice(0,2)}`,this.$http.post("/transaction/create/",this.paymentModel).then(({data:e})=>{this.dialogModalLoaded=!0,this.countDown(),this.OTPPaymentModel.payment_id=e.paymentId,this.OTPPaymentModel.phoneNumber=e.phoneNumber}))},closeModal(){this.dialog=!1,this.clearCountDown()},countDown(e=2){let t=60*e,a=60,s=null;this.countInterval=setInterval(()=>{if(a<=0&&(a=60),t<=0)return clearInterval(this.countInterval),this.disableResendButton=!1,!1;t--,a--,s=Math.floor(t/60),this.countDownDate.minute=s,this.countDownDate.second=a},1e3)},clearCountDown(){this.countDownDate.minute=this.countDownDate.second=0,this.disableResendButton=!0,clearInterval(this.countInterval)},send(){this.dialogModalLoaded=!1,this.$http.post("/transaction/hold_and_charge/",this.OTPPaymentModel).then(({data:e})=>{this.$toast.success(e.message.toString()),this.dialog=!1,this.paymentModel.card_number="",this.paymentModel.expiry_date=""})},resend(){this.clearCountDown(),this.countDown()}}},r=i,d=a("0c7c"),l=Object(d["a"])(r,s,n,!1,null,null,null);t["default"]=l.exports}}]);