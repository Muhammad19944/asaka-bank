(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c73cd"],{5084:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bank-structure-view"},[a("div",{staticClass:"view-toolbar px-4 mt-16"},[a("v-container",{staticClass:"pa-0"},[a("div",{staticClass:"app-tab-header d-flex"},[a("router-link",{attrs:{to:{name:"BankStructure"}}},[a("div",{staticClass:"tab-header-items text-center mr-7",class:{active:t.bankStructureRoute},attrs:{"data-item":"header"},on:{click:function(e){return t.getSelectedList("bank_council")}}},[a("a",{staticClass:"navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.tab1"}})],1)])]),a("router-link",{attrs:{to:{name:"BankBoard"}}},[a("div",{staticClass:"tab-header-items text-center mr-7",class:{active:t.bankBoardRoute},attrs:{"data-item":"header"}},[a("a",{staticClass:" navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.tab2"}})],1)])]),a("router-link",{attrs:{to:{name:"StructuralUnits"}}},[a("div",{staticClass:"tab-header-items text-center mr-7",class:{active:t.structuralUnitsRoute},attrs:{"data-item":"header"},on:{click:t.getDepartmentList}},[a("a",{staticClass:" navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.tab3"}})],1)])]),a("router-link",{attrs:{to:{name:"BankStructureDiagram"}}},[a("div",{staticClass:"tab-header-items text-center mr-7",class:{active:t.bankStructureDiagramRoute},attrs:{"data-item":"header"}},[a("a",{staticClass:" navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.tab4"}})],1)])]),a("router-link",{attrs:{to:{name:"BankAuditCommittee"}}},[a("div",{staticClass:"tab-header-items text-center mr-7",class:{active:t.bankAuditCommitteeRoute},attrs:{"data-item":"header"},on:{click:function(e){return t.getSelectedList("audit_commission")}}},[a("a",{staticClass:"navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.tab5"}})],1)])])],1)])],1),a("div",{staticClass:"view-toolbar-content py-5 py-md-15 overflow-hidden"},[a("v-container",[a("div",{staticClass:"app-tab-content p-relative"},[a("div",{staticClass:"tab-content-items",class:{active:t.bankStructureRoute},attrs:{"data-item":"content"}},[a("h4",{staticClass:"mb-6"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text1"}})],1),a("bank-council",{attrs:{list:t.structureList}})],1),a("div",{staticClass:"tab-content-items",class:{active:t.bankBoardRoute},attrs:{"data-item":"content"}},[a("bank-board",{attrs:{list:t.structureList}})],1),a("div",{staticClass:"tab-content-items",class:{active:t.structuralUnitsRoute},attrs:{"data-item":"content"}},[a("department",{attrs:{list:t.departmentList}})],1),a("div",{staticClass:"tab-content-items",class:{active:t.bankStructureDiagramRoute},attrs:{"data-item":"content"}},[a("img",{attrs:{draggable:"false",src:"uz"===t.$i18n.locale?"/images/struktura-uz.jpg":"/images/struktura-ru.png",alt:"Structure image"}})]),a("div",{staticClass:"tab-content-items",class:{active:t.bankAuditCommitteeRoute},attrs:{"data-item":"content"}},[a("audit-commission",{attrs:{list:t.structureList}})],1)])])],1),a("section",{staticClass:"section-service section"},[a("v-container",[a("v-row",[a("v-col",{attrs:{md:"4"}},[a("router-link",{staticClass:" app-slide-card pa-8 mx-2 rounded-lg overflow-hidden d-flex flex-column text-decoration-none p-relative",attrs:{to:{name:"SMSNotification"}}},[a("svg",{attrs:{id:"icon-smartphone",viewBox:"0 0 496 496"}},[a("path",{attrs:{d:"M472 112H288V40c0-22.056-17.944-40-40-40H40C17.944 0 0 17.944 0 40v416c0 22.056 17.944 40 40 40h208c22.056 0 40-17.944 40-40V336h-16v80H16V80h256v32h-72c-13.232 0-24 10.768-24 24v116.688L108.688 320H472c13.232 0 24-10.768 24-24V136c0-13.232-10.768-24-24-24zM272 432v24c0 13.232-10.768 24-24 24H40c-13.232 0-24-10.768-24-24v-24h256zM16 64V40c0-13.232 10.768-24 24-24h208c13.232 0 24 10.768 24 24v24H16zm464 232c0 4.416-3.584 8-8 8H147.312L192 259.312V136c0-4.416 3.584-8 8-8h272c4.416 0 8 3.584 8 8v160z"}}),a("path",{attrs:{d:"M416 208c-8.824 0-16-7.176-16-16s7.176-16 16-16 16 7.176 16 16h16c0-17.648-14.352-32-32-32s-32 14.352-32 32 14.352 32 32 32c8.824 0 16 7.176 16 16s-7.176 16-16 16-16-7.176-16-16h-16c0 17.648 14.352 32 32 32s32-14.352 32-32-14.352-32-32-32zM256 208c-8.824 0-16-7.176-16-16s7.176-16 16-16 16 7.176 16 16h16c0-17.648-14.352-32-32-32s-32 14.352-32 32 14.352 32 32 32c8.824 0 16 7.176 16 16s-7.176 16-16 16-16-7.176-16-16h-16c0 17.648 14.352 32 32 32s32-14.352 32-32-14.352-32-32-32zM345.752 160L336 199.016 326.248 160H304v104h16v-63.016l16 64 16-64V264h16V160zM112 448h64v16h-64zM240 336h16v16h-16zM208 336h16v16h-16zM176 336h16v16h-16zM144 336h16v16h-16z"}})]),a("div",{staticClass:"pr-16 mt-auto"},[a("h2",{staticClass:"font-600 dark-text my-2"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text33"}})],1),a("h5",{staticClass:"mb-0 main-grey"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text34"}})],1)]),a("div",{staticClass:"slide-card-angle d-flex align-center justify-center"},[a("chevron-right-icon",{staticClass:"text-white",attrs:{size:"2x"}})],1)])],1),a("v-col",{attrs:{md:"4"}},[a("router-link",{staticClass:" app-slide-card pa-8 mx-2 rounded-lg overflow-hidden d-flex flex-column text-decoration-none p-relative",attrs:{to:{name:"BankOffice"}}},[a("svg",{attrs:{id:"icon-atm",viewBox:"0 0 54 60"}},[a("path",{attrs:{d:"M10.789 17h19.475a1 1 0 0 0 .938-1.346l-4.053-11A1 1 0 0 0 26.211 4H6.736A1 1 0 0 0 5.8 5.346l4.053 11a1 1 0 0 0 .936.654zM25.514 6l3.315 9H11.486L8.171 6z"}}),a("path",{attrs:{d:"M1 15.212v36.959c-.003.796.314 1.56.879 2.122l5.413 5.413A1 1 0 0 0 8 60h28a1 1 0 0 0 1-1v-3h13a4 4 0 0 0 4-4V27a4 4 0 0 0-4-4H37v-3a.32.32 0 0 0-.007-.033.964.964 0 0 0-.055-.313l-7-19A1 1 0 0 0 29 0H1a1 1 0 0 0-.349.07C.629.079.608.085.587.1a.991.991 0 0 0-.274.184C.3.3.284.312.268.329a.916.916 0 0 0-.088.1.935.935 0 0 0-.08.152C.092.6.082.608.076.624a1.015 1.015 0 0 0-.069.34C.007.976 0 .987 0 1v8.538c0 1.085.19 2.161.561 3.18.291.8.44 1.643.439 2.494zm2 36.959V15.212c0-1.085-.19-2.161-.561-3.18A7.263 7.263 0 0 1 2 9.538V6.607l5 13.572v36.407l-3.707-3.707A1 1 0 0 1 3 52.171zM42 25v29h-9a2 2 0 0 1-2-2V27a2 2 0 0 1 2-2zm10 2v25a2 2 0 0 1-2 2h-1V25h1a2 2 0 0 1 2 2zm-5-2v29h-3V25zm-14-2a4 4 0 0 0-4 4v25a4 4 0 0 0 4 4h2v2H9V21h26v2zM28.3 2l6.262 17H8.7L2.435 2z"}}),a("path",{attrs:{d:"M12.707 10.707l2-2a1 1 0 1 0-1.414-1.414l-2 2a1 1 0 1 0 1.414 1.414zM13.293 13.707a1 1 0 0 0 1.414 0l5-5a1 1 0 1 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414zM25 25h-6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm-6 4v-2h6v2zM12 23a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM12 29a1 1 0 0 0-1 1v25a1 1 0 0 0 2 0V30a1 1 0 0 0-1-1zM34.058 46a3.5 3.5 0 1 0 4.884 0 3.5 3.5 0 1 0-4.884 0zM38 48.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM36.5 42a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"}})]),a("div",{staticClass:"pr-16 mt-auto"},[a("h2",{staticClass:"font-600 dark-text my-2"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text35"}})],1),a("h5",{staticClass:"mb-0 main-grey"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text36"}})],1)]),a("div",{staticClass:"slide-card-angle d-flex align-center justify-center"},[a("chevron-right-icon",{staticClass:"text-white",attrs:{size:"2x"}})],1)])],1),a("v-col",{attrs:{md:"4"}},[a("router-link",{staticClass:" app-slide-card pa-8 mx-2 rounded-lg overflow-hidden d-flex flex-column text-decoration-none p-relative",attrs:{to:{name:"Scoring"}}},[a("svg",{attrs:{id:"icon-atm-machine",viewBox:"0 0 416.667 416.667"}},[a("path",{attrs:{d:"M384.667 27.896H32c-17.645 0-32 14.355-32 32v296.875c0 17.645 14.355 32 32 32h352.667c17.645 0 32-14.355 32-32V59.896c0-17.645-14.355-32-32-32zm16 328.875c0 8.822-7.178 16-16 16H32c-8.822 0-16-7.178-16-16V59.896c0-8.822 7.178-16 16-16h352.667c8.822 0 16 7.178 16 16v296.875z"}}),a("path",{attrs:{d:"M352.667 68.604H64c-13.233 0-24 10.767-24 24v167.334c0 13.233 10.767 24 24 24h288.667c13.233 0 24-10.767 24-24V92.604c0-13.233-10.767-24-24-24zm8 191.334c0 4.411-3.589 8-8 8H64c-4.411 0-8-3.589-8-8V92.604c0-4.411 3.589-8 8-8h288.667c4.411 0 8 3.589 8 8v167.334zM360.667 308.333a8 8 0 0 0 0 16v15.771h-72.208v-15.771h40.875a8 8 0 0 0 0-16h-40.875c-8.822 0-16 7.178-16 16v15.771c0 8.822 7.178 16 16 16h72.208c8.822 0 16-7.178 16-16v-15.771c0-8.822-7.178-16-16-16zM232 316.271h-7a8 8 0 0 0 0 16h7v7.833H56v-7.833h136.667a8 8 0 0 0 0-16H56c-8.822 0-16 7.178-16 16v7.833c0 8.822 7.178 16 16 16h176c8.822 0 16-7.178 16-16v-7.833c0-8.822-7.178-16-16-16z"}}),a("path",{attrs:{d:"M280.458 100.604H80.333a8 8 0 0 0-8 8v135.917a8 8 0 0 0 8 8h200.125a8 8 0 0 0 8-8V108.604a8 8 0 0 0-8-8zm-8 135.917h-28.313l-62.574-62.574a8.002 8.002 0 0 0-11.313 0 7.999 7.999 0 0 0 0 11.314l51.259 51.26H88.333V116.604H101.6l36.657 36.657c1.562 1.562 3.609 2.343 5.657 2.343s4.095-.781 5.657-2.343a7.999 7.999 0 0 0 0-11.314l-25.343-25.343h148.23v119.917zM336.833 108.938h-16.5a8 8 0 0 0 0 16h16.5a8 8 0 0 0 0-16zM336.833 228.854h-16.5a8 8 0 0 0 0 16h16.5a8 8 0 0 0 0-16zM336.833 188.604h-16.5a8 8 0 0 0 0 16h16.5a8 8 0 0 0 0-16zM336.833 148.604h-16.5a8 8 0 0 0 0 16h16.5a8 8 0 0 0 0-16z"}})]),a("div",{staticClass:"pr-16 mt-auto"},[a("h2",{staticClass:"font-600 dark-text my-2"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text37"}})],1),a("h5",{staticClass:"mb-0 main-grey"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text38"}})],1)]),a("div",{staticClass:"slide-card-angle d-flex align-center justify-center"},[a("chevron-right-icon",{staticClass:"text-white",attrs:{size:"2x"}})],1)])],1)],1)],1)],1)])},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",t._l(t.list,(function(t){return a("v-col",{key:t.id,attrs:{md:"6"}},[a("div",{staticClass:"credit-widget pa-4 pa-sm-8 rounded-lg overflow-hidden mr-4 h-100"},[a("h5",[a("I18nVue",{attrs:{uz:t.position_uz,ru:t.position_ru,en:t.position_en}})],1),a("h2",{staticClass:"font-600 dark-text mt-2 mb-5"},[a("I18nVue",{attrs:{uz:t.full_name_uz,ru:t.full_name_ru,en:t.full_name_en}})],1),a("p",{staticClass:"mb-0"},[a("I18nVue",{attrs:{uz:t.description_uz,ru:t.description_ru,en:t.description_en}})],1)])])})),1)},i=[],c=a("d1f9"),o={name:"BankCouncil",props:{list:{type:Array,default:()=>[]}},components:{I18nVue:c["a"]}},l=o,u=a("0c7c"),_=Object(u["a"])(l,r,i,!1,null,null,null),d=_.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{attrs:{md:"6"}},[t._l(t.newHalf,(function(e){return[a("div",{key:e.id,staticClass:"credit-widget d-flex flex-column rounded-lg overflow-hidden mb-8"},[a("div",{staticClass:"flex-1 pa-4 pa-sm-8"},[a("h5",[a("I18nVue",{attrs:{uz:e.position_uz,ru:e.position_ru,en:e.position_en}})],1),a("h2",{staticClass:"font-600 dark-text mt-2 mb-4"},[a("I18nVue",{attrs:{uz:e.full_name_uz,ru:e.full_name_ru,en:e.full_name_en}})],1),a("h5",{staticClass:"font-600 dark-grey mb-1"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text10"}}),t._v("   "),a("a",{staticClass:"text-decoration-none font-700",attrs:{href:"tel: "+e.phone}},[t._v(" "+t._s(e.phone)+" ")])],1),a("h5",{staticClass:"font-600 dark-grey"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text12"}}),t._v(" "+t._s(e.email)+" ")],1)]),a("div",{staticClass:"app-collapse section-grey"},[a("v-expansion-panels",{attrs:{accordion:""}},[a("v-expansion-panel",[a("v-expansion-panel-header",[a("div",{staticClass:"d-flex align-center"},[a("user-icon",{staticClass:"custom-class",attrs:{size:"1.2x"}}),a("h5",{staticClass:"font-700 ml-2"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text13"}})],1)],1)]),a("v-expansion-panel-content",{staticClass:"py-2"},[e.resume?[a("v-simple-table",{staticClass:"app-table app-table__border app-table__auto",scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text14"}})],1)]),a("td",{staticClass:"py-4"},[a("h5",{staticClass:"font-600"},[a("I18nVue",{attrs:{uz:e.resume.work_place_uz,ru:e.resume.work_place_ru,en:e.resume.work_place_en}})],1)])]),a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text16"}})],1)]),a("td",{staticClass:"py-4"},[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t._f("filterDate")(e.resume.birth_year))+" ")])])]),a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text18"}})],1)]),a("td",{staticClass:"py-4"},[a("h5",{staticClass:"font-600"},[a("I18nVue",{attrs:{uz:e.resume.birth_place_uz,ru:e.resume.birth_place_ru,en:e.resume.birth_place_en}})],1)])]),a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("LastCorrections.nationality"))+" ")])]),a("td",{staticClass:"py-4"},[a("h5",{staticClass:"font-600"},[a("I18nVue",{attrs:{uz:e.resume.nationality_uz,ru:e.resume.nationality_ru,en:e.resume.nationality_en}})],1)])]),a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("LastCorrections.education"))+" ")])]),a("td",{staticClass:"py-4"},[a("h5",{staticClass:"font-600"},["uz"===t.$i18n.locale?a("span",{domProps:{innerHTML:t._s(e.resume.education_uz)}}):t._e(),"ru"===t.$i18n.locale?a("span",{domProps:{innerHTML:t._s(e.resume.education_ru)}}):t._e(),"en"===t.$i18n.locale?a("span",{domProps:{innerHTML:t._s(e.resume.education_en)}}):t._e()])])]),a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("LastCorrections.specialization"))+" ")])]),a("td",{staticClass:"py-4"},[a("h5",{staticClass:"font-600"},["uz"===t.$i18n.locale?a("span",{domProps:{innerHTML:t._s(e.resume.speciality_uz)}}):t._e(),"ru"===t.$i18n.locale?a("span",{domProps:{innerHTML:t._s(e.resume.speciality_ru)}}):t._e(),"en"===t.$i18n.locale?a("span",{domProps:{innerHTML:t._s(e.resume.speciality_en)}}):t._e()])])]),a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("LastCorrections.experience_in_bank"))+" ")])]),a("td",{staticClass:"py-4"},["uz"===t.$i18n.locale?[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(e.resume.work_experience)+" "+t._s(t.$t("Credits.from"))+" ")])]:t._e(),"ru"===t.$i18n.locale?[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("Credits.from"))+" "+t._s(e.resume.work_experience)+" ")])]:t._e(),"en"===t.$i18n.locale?[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("Credits.from"))+" "+t._s(e.resume.work_experience)+" ")])]:t._e()],2)]),a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("LastCorrections.in_position"))+" ")])]),a("td",{staticClass:"py-4"},["uz"===t.$i18n.locale?[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(e.resume.current_position_held_year)+" "+t._s(t.$t("Credits.from"))+" ")])]:t._e(),"ru"===t.$i18n.locale?[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("Credits.from"))+" "+t._s(e.resume.current_position_held_year)+" ")])]:t._e(),"en"===t.$i18n.locale?[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("Credits.from"))+" "+t._s(e.resume.current_position_held_year)+" ")])]:t._e()],2)])])]},proxy:!0}],null,!0)})]:t._e()],2)],1)],1)],1)])]}))],2),a("v-col",{attrs:{md:"6"}},[t._l(t.newRestHalf,(function(e){return[a("div",{key:e.id,staticClass:"credit-widget d-flex flex-column rounded-lg overflow-hidden mb-8"},[a("div",{staticClass:"flex-1 pa-4 pa-sm-8"},[a("h5",[a("I18nVue",{attrs:{uz:e.position_uz,ru:e.position_ru,en:e.position_en}})],1),a("h2",{staticClass:"font-600 dark-text mt-2 mb-4"},[a("I18nVue",{attrs:{uz:e.full_name_uz,ru:e.full_name_ru,en:e.full_name_en}})],1),a("h5",{staticClass:"font-600 dark-grey mb-1"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text10"}}),t._v("   "),a("a",{staticClass:"text-decoration-none font-700",attrs:{href:"tel: "+e.phone}},[t._v(" "+t._s(e.phone)+" ")])],1),a("h5",{staticClass:"font-600 dark-grey"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text12"}}),t._v(" "+t._s(e.email)+" ")],1)]),a("div",{staticClass:"app-collapse section-grey"},[a("v-expansion-panels",{attrs:{accordion:""}},[a("v-expansion-panel",[a("v-expansion-panel-header",[a("div",{staticClass:"d-flex align-center"},[a("user-icon",{staticClass:"custom-class",attrs:{size:"1.2x"}}),a("h5",{staticClass:"font-700 ml-2"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text13"}})],1)],1)]),a("v-expansion-panel-content",{staticClass:"py-2"},[e.resume?[a("v-simple-table",{staticClass:"app-table app-table__border app-table__auto",scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text14"}})],1)]),a("td",{staticClass:"py-4"},[a("h5",{staticClass:"font-600"},[a("I18nVue",{attrs:{uz:e.resume.work_place_uz,ru:e.resume.work_place_ru,en:e.resume.work_place_en}})],1)])]),a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text16"}})],1)]),a("td",{staticClass:"py-4"},[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t._f("filterDate")(e.resume.birth_year))+" ")])])]),a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text18"}})],1)]),a("td",{staticClass:"py-4"},[a("h5",{staticClass:"font-600"},[a("I18nVue",{attrs:{uz:e.resume.birth_place_uz,ru:e.resume.birth_place_ru,en:e.resume.birth_place_en}})],1)])]),a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("LastCorrections.nationality"))+" ")])]),a("td",{staticClass:"py-4"},[a("h5",{staticClass:"font-600"},[a("I18nVue",{attrs:{uz:e.resume.nationality_uz,ru:e.resume.nationality_ru,en:e.resume.nationality_en}})],1)])]),a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("LastCorrections.education"))+" ")])]),a("td",{staticClass:"py-4"},[a("h5",{staticClass:"font-600"},["uz"===t.$i18n.locale?a("span",{domProps:{innerHTML:t._s(e.resume.education_uz)}}):t._e(),"ru"===t.$i18n.locale?a("span",{domProps:{innerHTML:t._s(e.resume.education_ru)}}):t._e(),"en"===t.$i18n.locale?a("span",{domProps:{innerHTML:t._s(e.resume.education_en)}}):t._e()])])]),a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("LastCorrections.specialization"))+" ")])]),a("td",{staticClass:"py-4"},[a("h5",{staticClass:"font-600"},["uz"===t.$i18n.locale?a("span",{domProps:{innerHTML:t._s(e.resume.speciality_uz)}}):t._e(),"ru"===t.$i18n.locale?a("span",{domProps:{innerHTML:t._s(e.resume.speciality_ru)}}):t._e(),"en"===t.$i18n.locale?a("span",{domProps:{innerHTML:t._s(e.resume.speciality_en)}}):t._e()])])]),a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("LastCorrections.experience_in_bank"))+" ")])]),a("td",{staticClass:"py-4"},["uz"===t.$i18n.locale?[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(e.resume.work_experience)+" "+t._s(t.$t("Credits.from"))+" ")])]:t._e(),"ru"===t.$i18n.locale?[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("Credits.from"))+" "+t._s(e.resume.work_experience)+" ")])]:t._e(),"en"===t.$i18n.locale?[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("Credits.from"))+" "+t._s(e.resume.work_experience)+" ")])]:t._e()],2)]),a("tr",[a("td",{staticClass:"py-4",attrs:{width:"350"}},[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("LastCorrections.in_position"))+" ")])]),a("td",{staticClass:"py-4"},["uz"===t.$i18n.locale?[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(e.resume.current_position_held_year)+" "+t._s(t.$t("Credits.from"))+" ")])]:t._e(),"ru"===t.$i18n.locale?[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("Credits.from"))+" "+t._s(e.resume.current_position_held_year)+" ")])]:t._e(),"en"===t.$i18n.locale?[a("h5",{staticClass:"font-600"},[t._v(" "+t._s(t.$t("Credits.from"))+" "+t._s(e.resume.current_position_held_year)+" ")])]:t._e()],2)])])]},proxy:!0}],null,!0)})]:t._e()],2)],1)],1)],1)])]}))],2)],1)},m=[],p=a("0a35"),v={name:"BankBoard",data(){return{boardList:[],newHalf:[],newRestHalf:[]}},components:{I18nVue:c["a"],UserIcon:p["Q"]},mounted(){this.getList()},methods:{getList(){this.$http.get("/1/bank/structure/",{params:{type:"bank_board"}}).then(({data:t})=>{this.boardList=t.results,this.boardList.sort((t,e)=>t.rank>e.rank?1:-1),this.even(this.boardList)})},even(t){for(let e=0;e<t.length;e++)e%2===0?this.newHalf.push(t[e]):this.newRestHalf.push(t[e])}}},C=v,f=Object(u["a"])(C,h,m,!1,null,null,null),k=f.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.list,(function(e){return[a("div",{key:e.id,staticClass:"app-collapse mt-0 mt-md-0 mb-5"},[a("div",{staticClass:"app-collapse-item credit-widget rounded-lg"},[a("v-expansion-panels",{attrs:{accordion:""}},[a("v-expansion-panel",[a("v-expansion-panel-header",[a("h4",{staticClass:"font-600"},[a("I18nVue",{attrs:{uz:e.name_uz,ru:e.name_ru,en:e.name_en}})],1)]),a("v-expansion-panel-content",[a("v-row",{staticClass:"py-2"},[t._l(e.members,(function(e){return[a("v-col",{key:e.id,attrs:{md:"6"}},[a("div",{staticClass:"credit-widget pa-4 pa-sm-8 rounded-lg overflow-hidden h-100"},[a("h5",[a("I18nVue",{attrs:{uz:e.position_uz,ru:e.position_ru,en:e.position_en}})],1),a("h2",{staticClass:"font-600 dark-text mt-2 mb-4"},[a("I18nVue",{attrs:{uz:e.full_name_uz,ru:e.full_name_ru,en:e.full_name_en}})],1),e.phone?a("h5",{staticClass:"font-600 dark-grey mb-1"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text10"}}),t._v("   "),a("a",{staticClass:"text-decoration-none font-700",attrs:{href:"tel: "+e.phone}},[t._v(" "+t._s(e.phone)+" ")])],1):t._e(),e.email?a("h5",{staticClass:"font-600 dark-grey"},[a("I18nVue",{attrs:{t:"SHAREHOLDERS_AND_INVESTORS.bank_structure.text12"}}),t._v(" "+t._s(e.email)+" ")],1):t._e()])])]}))],2)],1)],1)],1)],1)])]}))],2)},S=[],R={name:"Department",props:{list:{type:Array,default:()=>[]}},components:{I18nVue:c["a"]}},x=R,y=Object(u["a"])(x,b,S,!1,null,null,null),z=y.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.list,(function(t){return a("div",{key:t.id,staticClass:"credit-widget pa-4 pa-sm-8 rounded-lg overflow-hidden h-100 mb-8"},[a("h2",{staticClass:"font-600 dark-text mb-4"},[a("I18nVue",{attrs:{uz:t.full_name_uz,ru:t.full_name_ru,en:t.full_name_en}})],1),a("h4",{staticClass:"font-600 dark-grey"},[a("I18nVue",{attrs:{uz:t.position_uz,ru:t.position_ru,en:t.position_en}})],1)])})),0)},H=[],g={name:"AuditCommission",components:{I18nVue:c["a"]},props:{list:{type:Array,default:()=>[]}}},E=g,L=Object(u["a"])(E,V,H,!1,null,null,null),A=L.exports,I=a("c4a0"),w={name:"index",components:{BankCouncil:d,BankBoard:k,Department:z,AuditCommission:A,I18nVue:c["a"],ChevronRightIcon:p["g"],UserIcon:p["Q"]},data(){return{initialText:"bank_council",structureList:[],departmentList:[],bankStructureRoute:!1,bankBoardRoute:!1,structuralUnitsRoute:!1,bankStructureDiagramRoute:!1,bankAuditCommitteeRoute:!1}},watch:{$route(){this.setActiveRoute()}},mounted(){this.setActiveRoute();const t=document.querySelectorAll('[data-item="header"]'),e=document.querySelectorAll('[data-item="content"]');Object(I["b"])(t,e)},methods:{getList(t){this.$http.get("/1/bank/structure/",{params:{type:t}}).then(({data:t})=>{this.structureList=t.results,this.structureList.sort((t,e)=>t.rank>e.rank?1:-1)})},getSelectedList(t){this.structureList=[],this.initialText=t,this.getList(t)},getDepartmentList(){this.$http.get("/1/department/?ordering=id",{params:{page_size:500}}).then(({data:t})=>{this.departmentList=t.results,this.departmentList.forEach(t=>{t.members.sort((t,e)=>t.rank>e.rank?1:-1)})})},setActiveRoute(){switch(this.$route.name){case"BankStructure":this.bankStructureRoute=!0,this.bankBoardRoute=this.structuralUnitsRoute=this.bankStructureDiagramRoute=this.bankAuditCommitteeRoute=!1,this.getSelectedList("bank_council");break;case"BankBoard":this.bankBoardRoute=!0,this.bankStructureRoute=this.structuralUnitsRoute=this.bankStructureDiagramRoute=this.bankAuditCommitteeRoute=!1,this.getSelectedList();break;case"StructuralUnits":this.structuralUnitsRoute=!0,this.bankBoardRoute=this.bankStructureRoute=this.bankStructureDiagramRoute=this.bankAuditCommitteeRoute=!1,this.getDepartmentList();break;case"BankStructureDiagram":this.bankStructureDiagramRoute=!0,this.bankBoardRoute=this.bankStructureRoute=this.structuralUnitsRoute=this.bankAuditCommitteeRoute=!1;break;case"BankAuditCommittee":this.bankAuditCommitteeRoute=!0,this.bankBoardRoute=this.bankStructureRoute=this.bankStructureDiagramRoute=this.structuralUnitsRoute=!1,this.getSelectedList();break;default:break}}}},D=w,O=Object(u["a"])(D,s,n,!1,null,null,null);e["default"]=O.exports}}]);