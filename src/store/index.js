import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/modules/auth";
import admin from "./modules/admin";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		SMALL_BUSINESS_CREDIT_TABLE: {},

		HEADER_APP_DOWNLOAD_VISIBLE: true,

		ERROR_MESSAGE_MODAL_VISIBLE: false,

		GRID_MENU_VISIBLE: false,

		MENU_DROPDOWN: false,

		ROUTE_URL: "",

		FORM_TYPE: {
			CREATE: "Create",
			UPDATE: "Update",
			READ: "Read"
		},

		INDIVIDUAL_CARD_DESIGN: {
			card: [
				{
					title: "Uzcard",
					value: "uzcard"
				}
			],
			cardValue: "",

			logoColor: [
				{
					title_uz: 'Oq',
					title_ru: 'Белый',
					title_en: 'White',
					value: 'white'
				},
				{
					title_uz: 'Oq-qora',
					title_ru: 'Черно-белый',
					title_en: 'Black-white',
					value: 'black_white'
				},
				{
					title_uz: 'Qora',
					title_ru: 'Черный',
					title_en: 'Black',
					value: 'black'
				},
				{
					title_uz: 'Rangli',
					title_ru: 'Цветной',
					title_en: 'Colorful',
					value: 'colorful'
				},
			],
			logoColorValue: "",

			logoPosition: [
				{
					title_uz: 'Yuqori chap burchak',
					title_ru: 'Левый верхний угол',
					title_en: 'Top left corner',
					value: 'top_left'
				},
				{
					title_uz: "Yuqori o'ng burchak",
					title_ru: 'Правый верхний угол',
					title_en: 'Top right corner',
					value: 'top_right'
				}
			],
			logoPositionValue: "",

			textColor: [
				{
					title_uz: 'Oq',
					title_ru: 'Белый',
					title_en: 'White',
					value: 'white'
				},
				{
					title_uz: 'Qora',
					title_ru: 'Черный',
					title_en: 'Black',
					value: 'black'
				},
			],
			textColorValue: "",

			imagePath: "",
			imageId: null
		},

		USER_APPLICATIONS_TYPE: [
			{
				title_uz: "Kredit uchun arizalar",
				title_ru: "Заявки на кредит",
				title_en: "Credit applications",
				value: "credit_application/action",
				block: 2
			},
			{
				title_uz: "Karta uchun arizalar",
				title_ru: "Заявки на карты",
				title_en: "Card applications",
				value: "plastic_card/application/action",
				block: 1
			},
			{
				title_uz: "Omonat uchun arizalar",
				title_ru: "Заявки на депозит",
				title_en: "Deposit applications",
				value: "deposit/application/action",
				block: 0
			}
		],

		CARD_TYPE: [
			{
				title_uz: "Milliy valyuta",
				title_ru: "Национальная валюта",
				title_en: "National currency",
				value: "national_currency"
			},
			{
				title_uz: "Xalqaro valyuta",
				title_ru: "Международная валюта",
				title_en: "International currency",
				value: "international_currency"
			},
			{
				title_uz: "Kobeydj",
				title_ru: "Кобейдж",
				title_en: "Kobeydj",
				value: "kobeydj"
			}
		],

		CARD: [
			{
				title: "UzCard",
				value: "uzcard"
			},
			{
				title: "Humo",
				value: "humo"
			},
			{
				title: "Mastercard",
				value: "mastercard"
			},
			{
				title: "Bonus",
				value: "bonus"
			}
		],

		CREATED_CARD_ID: null,

		DEPOSIT_TYPE: [
			{
				title_uz: "Milliy valyuta",
				title_ru: "Национальная валюта",
				title_en: "National currency",
				value: "milliy_valyutada"
			},
			{
				title_uz: "AQSH dollarida",
				title_ru: "В долларах США",
				title_en: "In U.S. dollars",
				value: "aqsh_dollarida"
			},
			{
				title_uz: "Yevrodagi omonatlar",
				title_ru: "Депозиты в евро",
				title_en: "Deposits in Euros",
				value: "yevroda_omonatlar"
			}
		],

		SMALL_BUSINESS_TYPES: [
			{
				title_uz: "Kredit",
				title_ru: "Кредит",
				title_en: "Credit",
				value: "business_credit"
			},
			{
				title_uz: "Tarif",
				title_ru: "Тариф",
				title_en: "Tariff",
				value: "business_deposit"
			}
		],

		CREATED_DEPOSIT_ID: null,

		CREATED_CREDIT_ID: null,

		CREATED_FINANCE_ID: null,

		CREATED_TRANSFER_ID: null,

		CREATED_ANNUAL_DOCUMENT_ID: null,

		CREATED_IMPORTANT_FACTS_ID: null,

		CREATE_POLLS_ID: null,

		FILTER_OPTIONS: {
			search: "",
			page: 1,
			page_size: 10,
			page_length: null
		},

		TYPE: [
			{
				title: "Filial",
				value: "filial"
			},
			{
				title: "ATM",
				value: "automate_trans_machine"
			},
			{
				title: "Mini bank",
				value: "mini_bank"
			},
			{
				title: "Service center",
				value: "service_center"
			},
			{
				title: "Information center",
				value: "information_center"
			},
			{
				title: "Valyuta ayirboshlash",
				value: "exchange_center"
			}
		],

		DOCUMENT_TYPES: [
			{
				title_uz: "Xususiy mijozlar",
				title_ru: "Физическим лицам",
				title_en: "Individuals",
				value: "individual"
			},
			{
				title_uz: "Yuridik shaxslar",
				title_ru: "Юридические лица",
				title_en: "Legal entities",
				value: "corporate"
			},
			{
				title_uz: "Normativ huquqiy hujjatlar",
				title_ru: "Законные документы",
				title_en: "Legal documents",
				value: "legal"
			},
			{
				title_uz: "Ichki normativ",
				title_ru: "Внутренний нормативный",
				title_en: "Internal normative",
				value: "inner"
			},
			{
				title_uz: "Nizomlar",
				title_ru: "Положения",
				title_en: "Regulations",
				value: "nizom"
			},
			{
				title_uz: "Bank biznes rejasi",
				title_ru: "Бизнес-план банка",
				title_en: "Bank business plan",
				value: "plan"
			},
			{
				title_uz: "Murojaatlar statistikasi",
				title_ru: "Справочная статистика",
				title_en: "Reference statistics",
				value: "appeal_stats"
			},
			{
				title_uz: "Nashrlar",
				title_ru: "Публикации",
				title_en: "Publications",
				value: "publications"
			},
			{
				title_uz: "Audit hulosasi",
				title_ru: "Заключение аудита",
				title_en: "Audit conclusion",
				value: "audit_outcomes"
			},
			{
				title_uz: "Ochiq ma'lumotlar",
				title_ru: "Открытые данные",
				title_en: "Open data",
				value: "open_info"
			},
			{
				title_uz: "Sifat menejment tizimi",
				title_ru: "Система менеджмента качества",
				title_en: "Quality management system",
				value: "quality_management"
			},
			{
				title_uz: "Reyting",
				title_ru: "Рейтинг",
				title_en: "Rating",
				value: "rating"
			},
			{
				title_uz: "Qimmatbaho qog'ozlar",
				title_ru: "Ценные бумаги",
				title_en: "Expensive paper",
				value: "expensive_paper"
			},
			{
				title_uz: "Sug'urta kompaniyalari",
				title_ru: "Страховые компании",
				title_en: "Insurance companies",
				value: "insurance_docs"
			},
			{
				title_uz: "Ichki audit departamenti",
				title_ru: "Департамент внутреннего аудита",
				title_en: "Internal Audit Department",
				value: "internal_audit"
			},
			{
				title_uz: "Korrupsiyaga qarshi kurash",
				title_ru: "Борьба с коррупцией",
				title_en: "Anti-corruption",
				value: "anti_corruption"
			}
		],

		ANNUAL_DOCUMENTS: [
			{
				title_uz: "Moliyaviy hisobotlar",
				title_ru: "Финансовые отчеты",
				title_en: "Financial reports",
				value: "financial_reports"
			},
			{
				title_uz: "Taqdimotlar",
				title_ru: "Презентаций",
				title_en: "Presentations",
				value: "presentations"
			},
			{
				title_uz: "Faktlar",
				title_ru: "Факты",
				title_en: "Facts",
				value: "facts"
			},
			{
				title_uz: "Muhim faktlar",
				title_ru: "Существенные факты",
				title_en: "Important facts",
				value: "present_facts"
			},
			{
				title_uz: "Normativ huquqiy hujjatlar",
				title_ru: "Нормативно-правовые документы",
				title_en: "Normative legal documents",
				value: "decisions"
			},
			{
				title_uz: "Tenderlar",
				title_ru: "Тендеры",
				title_en: "Tenders",
				value: "tender"
			}
		],

		CONDITION: [
			{
				title: "Active",
				value: "active"
			},
			{
				title: "Inactive",
				value: "inactive"
			}
		],

		STRUCTURE_TYPE: [
			{
				title_uz: "Bank kengashi",
				title_ru: "Совет банка",
				title_en: "Bank board",
				value: "bank_council"
			},
			{
				title_uz: "Bank boshqaruvi",
				title_ru: "Управление банком",
				title_en: "Bank management",
				value: "bank_board"
			},
			{
				title_uz: "Tarkibiy bo`linmalar",
				title_ru: "Структурные подразделения",
				title_en: "Structural subdivisions",
				value: "department"
			},
			{
				title_uz: "Taftish komissiya",
				title_ru: "Ревизионная комиссия",
				title_en: "Audit commission",
				value: "audit_commission"
			},
			{
				title_uz: "Boshqalar",
				title_ru: "Другие",
				title_en: "Others",
				value: "others"
			}
		],

		CREATED_STAFF_ID: null,

		HAS_STAFF_RESUME: false,

		CREATED_STAFF_BIOGRAPHY_ID: null,

		BIOGRAPHY_MODEL: {
			work_place_uz: "",
			work_place_ru: "",
			work_place_en: "",
			birth_year: "",
			birth_place_uz: "",
			birth_place_ru: "",
			birth_place_en: "",
			nationality_uz: "",
			nationality_ru: "",
			nationality_en: "",
			education_uz: "",
			education_ru: "",
			education_en: "",
			speciality_uz: "",
			speciality_ru: "",
			speciality_en: "",
			work_experience: "",
			current_position_held_year: "",
			structure: null
		},

		CREDIT_CALC_TYPE: [
			{
				title_uz: 'Avtokredit',
				title_ru: 'Автокредит',
				title_en: 'Car loan',
				value: 'car_loan'
			},
			{
				title_uz: "Bozor tamoyillari asosida ipateka",
				title_ru: 'Ипотека по рыночным принципам',
				title_en: 'Mortgage based on market principles',
				value: 'mortgage_market'
			},
			{
				title_uz: 'Qulay sharoitdagi ipoteka',
				title_ru: 'Ипотека на выгодных условиях',
				title_en: 'Mortgage on favorable terms',
				value: 'mortgage'
			},
			{
				title_uz: 'Iste\'molchi',
				title_ru: 'Потребительский',
				title_en: 'Consumer',
				value: 'consumer'
			},
			{
				title_uz: 'Mikroqarz',
				title_ru: 'Микрозайм',
				title_en: 'Microloans',
				value: 'microloans'
			},
			{
				title_uz: 'Overdraft',
				title_ru: 'Овердрафт',
				title_en: 'Overdraft',
				value: 'overdraft'
			},
			{
				title_uz: "Ta'lim kredit",
				title_ru: 'Кредит на образование',
				title_en: 'Education credit',
				value: 'education_credit'
			}
		],

		isStaffBankManagement: '',
	},

	getters: {
		routeURL: (state) => state.ROUTE_URL,
		getGridMenuVisible: (state) => state.GRID_MENU_VISIBLE,
		getErrorMessageModalVisible: (state) => state.ERROR_MESSAGE_MODAL_VISIBLE,
		getHeaderAppDownloadVisible: (state) => state.HEADER_APP_DOWNLOAD_VISIBLE,
		getSmallBusinessCreditTable: (state) => state.SMALL_BUSINESS_CREDIT_TABLE
	},

	mutations: {
		SET_ROUTE_URL(state, payload) {
			state.ROUTE_URL = payload
		},

		TOGGLE_GRID_MENU(state, payload) {
			state.GRID_MENU_VISIBLE = payload
		},

		TOGGLE_ERROR_MESSAGE_MODAL(state, payload) {
			state.ERROR_MESSAGE_MODAL_VISIBLE = payload
		},

		SET_HEADER_APP_DOWNLOAD(state, payload) {
			state.HEADER_APP_DOWNLOAD_VISIBLE = payload
		},

		SET_SMALL_BUSINESS_CREDIT_TABLE(state, payload) {
			state.SMALL_BUSINESS_CREDIT_TABLE = payload
		}
	},

	actions: {
		actionRouteUrl({ commit }, payload) {
			commit('SET_ROUTE_URL', payload)
		}
	},

	modules: {
		auth,
		admin
	}
});
