(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.formulajs~ab1fa13e"],{c5b0:function(n,r,e){var t=e("d532"),o=e("73a1");r.ASC=function(){throw new Error("ASC is not implemented")},r.BAHTTEXT=function(){throw new Error("BAHTTEXT is not implemented")},r.CHAR=function(n){return n=t.parseNumber(n),n instanceof Error?n:String.fromCharCode(n)},r.CLEAN=function(n){n=n||"";var r=/[\0-\x1F]/g;return n.replace(r,"")},r.CODE=function(n){n=n||"";var r=n.charCodeAt(0);return isNaN(r)&&(r=o.na),r},r.CONCATENATE=function(){var n=t.flatten(arguments),r=0;while((r=n.indexOf(!0))>-1)n[r]="TRUE";var e=0;while((e=n.indexOf(!1))>-1)n[e]="FALSE";return n.join("")},r.CONCAT=r.CONCATENATE,r.DBCS=function(){throw new Error("DBCS is not implemented")},r.DOLLAR=function(){throw new Error("DOLLAR is not implemented")},r.EXACT=function(n,r){return 2!==arguments.length?o.na:n===r},r.FIND=function(n,r,e){return arguments.length<2?o.na:(e=void 0===e?0:e,r?r.indexOf(n,e-1)+1:null)},r.FIXED=function(){throw new Error("FIXED is not implemented")},r.HTML2TEXT=function(n){var r="";return n&&(n instanceof Array?n.forEach((function(n){""!==r&&(r+="\n"),r+=n.replace(/<(?:.|\n)*?>/gm,"")})):r=n.replace(/<(?:.|\n)*?>/gm,"")),r},r.LEFT=function(n,r){return r=void 0===r?1:r,r=t.parseNumber(r),r instanceof Error||"string"!==typeof n?o.value:n?n.substring(0,r):null},r.LEN=function(n){return 0===arguments.length?o.error:null===n?0:"string"===typeof n?n?n.length:0:Array.isArray(n)?o.error:o.value},r.LOWER=function(n){return"string"!==typeof n?o.value:n?n.toLowerCase():n},r.MID=function(n,r,e){if(void 0===r||null===r)return o.value;if(r=t.parseNumber(r),e=t.parseNumber(e),t.anyIsError(r,e)||"string"!==typeof n)return e;var i=r-1,u=i+e;return n.substring(i,u)},r.NUMBERVALUE=function(n,r,e){return r="undefined"===typeof r?".":r,e="undefined"===typeof e?",":e,Number(n.replace(r,".").replace(e,""))},r.PRONETIC=function(){throw new Error("PRONETIC is not implemented")},r.PROPER=function(n){return void 0===n||0===n.length?o.value:(!0===n&&(n="TRUE"),!1===n&&(n="FALSE"),isNaN(n)&&"number"===typeof n?o.value:("number"===typeof n&&(n=""+n),n.replace(/\w\S*/g,(function(n){return n.charAt(0).toUpperCase()+n.substr(1).toLowerCase()}))))},r.REGEXEXTRACT=function(n,r){if(arguments.length<2)return o.na;var e=n.match(new RegExp(r));return e?e[e.length>1?e.length-1:0]:null},r.REGEXMATCH=function(n,r,e){if(arguments.length<2)return o.na;var t=n.match(new RegExp(r));return e?t:!!t},r.REGEXREPLACE=function(n,r,e){return arguments.length<3?o.na:n.replace(new RegExp(r),e)},r.REPLACE=function(n,r,e,i){return r=t.parseNumber(r),e=t.parseNumber(e),t.anyIsError(r,e)||"string"!==typeof n||"string"!==typeof i?o.value:n.substr(0,r-1)+i+n.substr(r-1+e)},r.REPT=function(n,r){return r=t.parseNumber(r),r instanceof Error?r:new Array(r+1).join(n)},r.RIGHT=function(n,r){return r=void 0===r?1:r,r=t.parseNumber(r),r instanceof Error?r:n?n.substring(n.length-r):o.na},r.SEARCH=function(n,r,e){var t;return"string"!==typeof n||"string"!==typeof r?o.value:(e=void 0===e?0:e,t=r.toLowerCase().indexOf(n.toLowerCase(),e-1)+1,0===t?o.value:t)},r.SPLIT=function(n,r){return n.split(r)},r.SUBSTITUTE=function(n,r,e,t){if(arguments.length<3)return o.na;if(!n||!r)return n;if(void 0===t)return n.replace(new RegExp(r,"g"),e);var i=0,u=0;while(n.indexOf(r,i)>0)if(i=n.indexOf(r,i+1),u++,u===t)return n.substring(0,i)+e+n.substring(i+r.length)},r.T=function(n){return"string"===typeof n?n:""},r.TEXT=function(){throw new Error("TEXT is not implemented")},r.TRIM=function(n){return"string"!==typeof n?o.value:n.replace(/ +/g," ").trim()},r.UNICHAR=r.CHAR,r.UNICODE=r.CODE,r.UPPER=function(n){return"string"!==typeof n?o.value:n.toUpperCase()},r.VALUE=function(){throw new Error("VALUE is not implemented")}}}]);