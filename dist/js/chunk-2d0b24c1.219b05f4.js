(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b24c1"],{2409:function(a,t,e){"use strict";var s=e("0d5e");const r=()=>Object(s["a"])({method:"get",url:"https://capi.asakabank.uz/rest/merchant_list/",auth:{username:"asakabank-site",password:"4sakaU7#"}}),n=()=>Object(s["a"])({method:"get",url:"https://capi.asakabank.uz/rest/category_list/",auth:{username:"asakabank-site",password:"4sakaU7#"}}),c=a=>Object(s["a"])({method:"get",url:"https://capi.asakabank.uz/rest/merchant_by_category_id?categoryId="+a,auth:{username:"asakabank-site",password:"4sakaU7#"}}),u=a=>Object(s["a"])({method:"get",url:"https://capi.asakabank.uz/rest/merchant_by_id?id="+a,auth:{username:"asakabank-site",password:"4sakaU7#"}}),k=a=>Object(s["a"])({method:"post",url:"https://capi.asakabank.uz/rest/payment/wu_execute",auth:{username:"asakabank-site",password:"4sakaU7#"},data:a}),p=a=>Object(s["a"])({method:"post",url:"https://capi.asakabank.uz/rest/payment/wu_confirm",auth:{username:"asakabank-site",password:"4sakaU7#"},data:a});t["a"]={get_merchant_list:r,get_category_list:n,merchant_by_category_id:c,merchant_by_id:u,payment_wu_execute:k,payment_wu_confirm:p}}}]);