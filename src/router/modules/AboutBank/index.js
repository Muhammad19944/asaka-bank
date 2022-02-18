const aboutBank = [
	{
		path: "about-bank",
		name: "AboutBank",
		meta: {
			linkTextUZ: "Bank haqida",
			linkTextRU: "О банке",
			linkTextEN: "About the bank"
		},
		component: () => import("@/views/Main/AboutBank"),
		redirect: { name: "AboutBankHome" },
		children: [
			{
				path: "home",
				name: "AboutBankHome",
				meta: {
					linkTextUZ: "Bank haqida",
					linkTextRU: "О банке",
					linkTextEN: "About the bank"
				},
				component: () => import("@/views/Main/AboutBank/Home")
			},
			{
				path: "anti-corruption",
				name: "AboutBankAntiCorruption",
				meta: {
					linkTextUZ: "Korrupsiyaga qarshi kurash",
					linkTextRU: "Борьба с коррупцией",
					linkTextEN: "Anti-corruption",

					headerTextUZ: "Korrupsiyaga qarshi kurash",
					headerTextRU: "Борьба с коррупцией",
					headerTextEN: "Anti-corruption",

					headerSubTextUZ: "\"Asakabank\" AJda bank xizmatlaridan foydalanish jarayonida korrupsiyaga duch kelsangiz quyidagilar orqali murojaat qiling.\n" +
						"Telegram ijtimoiy tarmog'i orqali @Asaka_antikorrup_bot botiga;\n" +
						"Bankning 1152 aloqa markazi orqali \n" +
						"Rasmiy saytdagi \"komplaens menedjer\" sahifasi.",

					headerSubTextRU: "Если вы столкнулись с коррупцией при использовании банковских услуг в АО «Асакабанк», просим связаться с нами по следующим каналам: \n" +
						"Telegram через социальную сеть @Asaka_antikorrup_bot; \n" +
						"Через колл-центр Банка 1152\n" +
						"Страница “Комплаенс менеджер” на официальном сайте.",

					headerSubTextEN: "If you encounter corruption when using banking services at Asakabank JSC, please contact us through the following channels:\n" +
						"Telegram via the social network @Asaka_antikorrup_bot;\n" +
						"Through the call center of the Bank 1152\n" +
						"Compliance Manager page on the official website."
				},
				component: () => import("@/views/Main/AboutBank/AntiCorruption")
			},
			{
				path: "about",
				name: "About",
				meta: {
					linkTextUZ: "Bank haqida",
					linkTextRU: "О банке",
					linkTextEN: "About the bank",

					headerTextUZ: "Bank haqida",
					headerTextRU: "О банке",
					headerTextEN: "About the bank",

					headerSubTextUZ: "Asakabank – muvaffaqiyatli tanlov!",
					headerSubTextRU: "Асака Банк - удачный выбор!",
					headerSubTextEN: "Asaka Bank - a successful choice!"
				},
				component: () => import("@/views/Main/AboutBank/About")
			},
			{
				path: "mission",
				name: "Mission",
				meta: {
					linkTextUZ: "Missiya",
					linkTextRU: "Миссия",
					linkTextEN: "Mission",

					headerTextUZ: "Bank missiyasi",
					headerTextRU: "Миссия банка",
					headerTextEN: "Bank mission",

					headerSubTextUZ: "Asakabank – muvaffaqiyatli tanlov!",
					headerSubTextRU: "Асака Банк - удачный выбор!",
					headerSubTextEN: "Asaka Bank - a successful choice!"
				},
				component: () => import("@/views/Main/AboutBank/About")
			},
			{
				path: "business-plan",
				name: "BusinessPlan",
				meta: {
					linkTextUZ: "Biznes plan",
					linkTextRU: "Бизнес план",
					linkTextEN: "Business plan",

					headerTextUZ: "Bank biznes rejasi",
					headerTextRU: "Бизнес план банка",
					headerTextEN: "Bank business plan",

					headerSubTextUZ: "Asakabank – muvaffaqiyatli tanlov!",
					headerSubTextRU: "Асака Банк - удачный выбор!",
					headerSubTextEN: "Asaka Bank - a successful choice!"
				},
				component: () => import("@/views/Main/AboutBank/About")
			},
			{
				path: "chairman-board",
				name: "ChairmanBoard",
				meta: {
					linkTextUZ: "Boshqaruv raisidan xabar",
					linkTextRU: "Обращение председателя правления",
					linkTextEN: "Message from the chairman of the board",

					headerTextUZ: "Message from the chairman of the bank's board",
					headerTextRU: "Обращение председателя правления банка",
					headerTextEN: "Bank boshqaruvi raisining xabari",

					headerSubTextUZ: "Asakabank – muvaffaqiyatli tanlov!",
					headerSubTextRU: "Асака Банк - удачный выбор!",
					headerSubTextEN: "Asaka Bank - a successful choice!"
				},
				component: () => import("@/views/Main/AboutBank/About")
			},
			{
				path: "bank-history",
				name: "BankHistory",
				meta: {
					linkTextUZ: "Bank tarixi",
					linkTextRU: "История банка",
					linkTextEN: "Bank history",

					headerTextUZ: "Asaka banki tarixi",
					headerTextRU: "История Асака Банка",
					headerTextEN: "History of Asaka Bank",

					headerSubTextUZ: "25 yil ishonchli tarzda etakchilik mavqeini saqlab qoldi!",
					headerSubTextRU: "Уверенно удерживает лидирующие позиции на протяжении 25 лет!",
					headerSubTextEN: "Has confidently maintained its leadership position for 25 years!"
				},
				component: () => import("@/views/Main/AboutBank/BankHistory")
			},
			{
				path: "bank-council",
				name: "BankStructure",
				meta: {
					linkTextUZ: "Bank kengashi",
					linkTextRU: "Совет банка",
					linkTextEN: "Bank council",

					headerTextUZ: "Bank kengashi",
					headerTextRU: "Совет банка",
					headerTextEN: "Bank council",

					headerSubTextUZ: "Asakabank O’zbekistonning yirik banklaridan biri hisoblanadi.",
					headerSubTextRU: "Асакабанк - один из крупнейших банков Узбекистана.",
					headerSubTextEN: "Asakabank is one of the largest banks in Uzbekistan."
				},
				component: () => import("@/views/Main/AboutBank/BankStructure")
			},
			{
				path: "bank-board",
				name: "BankBoard",
				meta: {
					linkTextUZ: "Bank boshqaruvi",
					linkTextRU: "Правление банка",
					linkTextEN: "Bank Board",

					headerTextUZ: "Bank boshqaruvi",
					headerTextRU: "Правление банка",
					headerTextEN: "Bank Board",

					headerSubTextUZ: "Asakabank O’zbekistonning yirik banklaridan biri hisoblanadi.",
					headerSubTextRU: "Асакабанк - один из крупнейших банков Узбекистана.",
					headerSubTextEN: "Asakabank is one of the largest banks in Uzbekistan."
				},
				component: () => import("@/views/Main/AboutBank/BankStructure")
			},
			{
				path: "structural-units",
				name: "StructuralUnits",
				meta: {
					linkTextUZ: "Tarkibiy bo'linmalar",
					linkTextRU: "Структурные подразделения",
					linkTextEN: "Structural units",

					headerTextUZ: "Tarkibiy bo'linmalar",
					headerTextRU: "Структурные подразделения",
					headerTextEN: "Structural units",

					headerSubTextUZ: "Asakabank O’zbekistonning yirik banklaridan biri hisoblanadi.",
					headerSubTextRU: "Асакабанк - один из крупнейших банков Узбекистана.",
					headerSubTextEN: "Asakabank is one of the largest banks in Uzbekistan."
				},
				component: () => import("@/views/Main/AboutBank/BankStructure")
			},
			{
				path: "bank-structure-diagram",
				name: "BankStructureDiagram",
				meta: {
					linkTextUZ: "Bank tuzilishi sxemasi",
					linkTextRU: "Схема структуры банка",
					linkTextEN: "Bank structure diagram",

					headerTextUZ: "Bank tuzilishi sxemasi",
					headerTextRU: "Схема структуры банка",
					headerTextEN: "Bank structure diagram",

					headerSubTextUZ: "Asakabank O’zbekistonning yirik banklaridan biri hisoblanadi.",
					headerSubTextRU: "Асакабанк - один из крупнейших банков Узбекистана.",
					headerSubTextEN: "Asakabank is one of the largest banks in Uzbekistan."
				},
				component: () => import("@/views/Main/AboutBank/BankStructure")
			},
			{
				path: "audit-committee",
				name: "BankAuditCommittee",
				meta: {
					linkTextUZ: "Taftish komissiyasi",
					linkTextRU: "Ревизионная комиссия",
					linkTextEN: "Audit committee",

					headerTextUZ: "Taftish komissiyasi",
					headerTextRU: "Ревизионная комиссия",
					headerTextEN: "Audit committee",

					headerSubTextUZ: "Asakabank O’zbekistonning yirik banklaridan biri hisoblanadi.",
					headerSubTextRU: "Асакабанк - один из крупнейших банков Узбекистана.",
					headerSubTextEN: "Asakabank is one of the largest banks in Uzbekistan."
				},
				component: () => import("@/views/Main/AboutBank/BankStructure")
			},
			{
				path: "awards",
				name: "BankAwards",
				meta: {
					linkTextUZ: "Mukofotlar",
					linkTextRU: "Достижения",
					linkTextEN: "Awards",

					headerTextUZ: "Yutuqlar va mukofotlar",
					headerTextRU: "Достижения и награды",
					headerTextEN: "Achievements and awards",

					headerSubTextUZ: "O'zbekistonda yilning eng yaxshi banki sifatida bir necha bor e'tirof etilgan",
					headerSubTextRU: "Неоднократно признавался лучшим банком года в Узбекистане.",
					headerSubTextEN: "It has been repeatedly recognized as the best bank of the year in Uzbekistan"
				},
				component: () => import("@/views/Main/AboutBank/Awards")
			},
			{
				path: "quality-system",
				name: "QualitySystem",
				meta: {
					linkTextUZ: "Sifat menejmenti tizimi",
					linkTextRU: "Система менеджмента качества",
					linkTextEN: "Quality management system",

					headerTextUZ: "Sifat menejmenti tizimi",
					headerTextRU: "Система менеджмента качества",
					headerTextEN: "Quality management system"
				},
				component: () => import("@/views/Main/AboutBank/QualitySystem")
			},
			{
				path: "press-center",
				name: "PressCenter",
				meta: {
					linkTextUZ: "Matbuot markazi",
					linkTextRU: "Пресс-центр",
					linkTextEN: "Press center",

					headerTextUZ: "Matbuot markazi",
					headerTextRU: "Пресс-центр",
					headerTextEN: "Press center",

					headerSubTextUZ: "Tezkorlik, axborot ochiqligi va shaffoflik",
					headerSubTextRU: "Скорость, информационная открытость и прозрачность",
					headerSubTextEN: "Speed, information openness and transparency"
				},
				component: () => import("@/views/Main/AboutBank/PressCenter")
			},
			{
				path: "career",
				name: "Career",
				meta: {
					linkTextUZ: "Karyera",
					linkTextRU: "Карьера",
					linkTextEN: "Career"
				},
				component: () => import("@/views/Main/AboutBank/Career")
			},
			{
				path: "career/:id",
				name: "CareerID",
				meta: {
					linkTextUZ: "Karyera",
					linkTextRU: "Карьера",
					linkTextEN: "Career"
				},
				component: () => import("@/views/Main/AboutBank/Career/show")
			},
			{
				path: "affiliates",
				name: "Affiliates",
				meta: {
					linkTextUZ: "Affillangan shaxslar",
					linkTextRU: "Аффилированные лица",
					linkTextEN: "Affiliates",

					headerTextUZ: "Affillangan shaxslar",
					headerTextRU: "Аффилированные лица",
					headerTextEN: "Affiliates"
				},
				component: () => import("@/views/Main/AboutBank/Service/Affiliates")
			},
			{
				path: "documents",
				name: "BankDocuments",
				meta: {
					linkTextUZ: "Hujjatlar",
					linkTextRU: "Документы",
					linkTextEN: "Documents",

					headerTextUZ: "Yuklash uchun ma'lumotlar",
					headerTextRU: "Информация для скачивания",
					headerTextEN: "Information for download"
				},
				component: () => import("@/views/Main/AboutBank/Service/Documents")
			},
			{
				path: "bank-appeals",
				name: "BankAppeals",
				meta: {
					linkTextUZ: "Murojaatlar",
					linkTextRU: "Апелляции",
					linkTextEN: "Appeals",

					headerTextUZ: "Fuqarolar murojaatlari",
					headerTextRU: "Порядок приема граждан",
					headerTextEN: "Citizens' appeals"
				},
				component: () => import("@/views/Main/AboutBank/Appeals")
			},
			{
				path: "bank-appeals-form",
				name: "BankAppealsForm",
				meta: {
					linkTextUZ: "Murojaatlar",
					linkTextRU: "Апелляции",
					linkTextEN: "Appeals",

					headerTextUZ: "Murojat yozish",
					headerTextRU: "Написание обращения",
					headerTextEN: "Write an appeal"
				},
				component: () => import("@/views/Main/AboutBank/Appeals/AppealForm")
			},
			{
				path: "compliance",
				name: "Compliance",
				meta: {
					linkTextUZ: "Kompleans menejeri sahifasi",
					linkTextRU: "Страница комплаенс менеджера",
					linkTextEN: "Compliance manager page",
				},
				component: () => import("@/views/Main/AboutBank/Appeals/Compliance")
			},
			{
				path: "bank-committees",
				name: "BankCommittees",
				meta: {
					linkTextUZ: "Bank qo'mitalari",
					linkTextRU: "Банковские комитеты",
					linkTextEN: "Banking committees",

					headerTextUZ: "Bank qo'mitalari",
					headerTextRU: "Банковские комитеты",
					headerTextEN: "Banking committees"
				},
				component: () => import("@/views/Main/AboutBank/BankingCommittees")
			},
			{
				path: "internal-audit-department",
				name: "InternalAuditDepartment",
				meta: {
					linkTextUZ: "Ichki audit departamenti",
					linkTextRU: "Департамент внутреннего аудита",
					linkTextEN: "Internal audit department",

					headerTextUZ: "Ichki audit departamenti",
					headerTextRU: "Департамент внутреннего аудита",
					headerTextEN: "Internal audit department"
				},
				component: () => import("@/views/Main/AboutBank/InternalAuditDepartment")
			},
			{
				path: "bank-shareholders",
				name: "BankShareholders",
				meta: {
					linkTextUZ: "Bank aksionerlari",
					linkTextRU: "Акционеры банка",
					linkTextEN: "Bank shareholders",

					headerTextUZ: "Bank aksionerlari",
					headerTextRU: "Акционеры банка",
					headerTextEN: "Bank shareholders"
				},
				component: () => import("@/views/Main/AboutBank/BankShareholders")
			},
			{
				path: "bank-activity",
				name: "AboutActivity",
				meta: {
					linkTextUZ: "Ochiq ma'lumotlar",
					linkTextRU: "Открытые данные",
					linkTextEN: "Open data",

					headerTextUZ: "Ochiq ma'lumotlar",
					headerTextRU: "Открытые данные",
					headerTextEN: "Open data"
				},
				component: () => import("@/views/Main/AboutBank/AboutActivity")
			},
			{
				path: "charity-activity",
				name: "CharityActivity",
				meta: {
					linkTextUZ: "Xayriya faoliyati",
					linkTextRU: "Благотворительная деятельность",
					linkTextEN: "Charity activities",

					headerTextUZ: "Xayriya faoliyati",
					headerTextRU: "Благотворительная деятельность",
					headerTextEN: "Charity activities"
				},
				component: () => import("@/views/Main/AboutBank/CharityActivities")
			},
			{
				path: "securities",
				name: "Securities",
				meta: {
					linkTextUZ: "Qimmatli qog'ozlar",
					linkTextRU: "Ценные бумаги",
					linkTextEN: "Securities",

					headerTextUZ: "Qimmatli qog'ozlar",
					headerTextRU: "Ценные бумаги",
					headerTextEN: "Securities"
				},
				component: () => import("@/views/Main/AboutBank/Securities")
			},
			{
				path: "important-facts",
				name: "AboutBankImportantFacts",
				meta: {
					linkTextUZ: "Muhim faktlar",
					linkTextRU: "Существенные факты",
					linkTextEN: "Important facts",

					headerTextUZ: "Muhim faktlar",
					headerTextRU: "Существенные факты",
					headerTextEN: "Important facts"
				},
				component: () => import("@/views/Main/AboutBank/ImportantFacts")
			},
			{
				path: "public-offer",
				name: "PublicOffer",
				meta: {
					linkTextUZ: "Ommaviy offerta",
					linkTextRU: "Публичная оферта",
					linkTextEN: "Public offer",

					headerTextUZ: "Shaxsiy ma'lumotlarni qayta ishlash shartlari",
					headerTextRU: "Условия обработки персональных данных",
					headerTextEN: "Conditions for the processing of personal data"
				},
				component: () => import("@/views/Main/AboutBank/PublicOffer")
			},
			{
				path: "ratings",
				name: "Ratings",
				meta: {
					linkTextUZ: "Reytinglar",
					linkTextRU: "Рейтинги",
					linkTextEN: "Ratings",

					headerTextUZ: "Reytinglar",
					headerTextRU: "Рейтинги",
					headerTextEN: "Ratings"
				},
				component: () => import("@/views/Main/AboutBank/Ratings")
			},
			{
				path: "tariffs",
				name: "Tariffs",
				meta: {
					linkTextUZ: "Bank tariflari",
					linkTextRU: "Тарифы банка",
					linkTextEN: "Bank tariffs",

					headerTextUZ: "Bank tariflari",
					headerTextRU: "Тарифы банка",
					headerTextEN: "Bank tariffs",

					headerSubTextUZ: "Jismoniy va yuridik shaxslarga xizmat ko'rsatish tariflari",
					headerSubTextRU: "Тарифы на обслуживание физических и юридических лиц",
					headerSubTextEN: "Tariffs for servicing individuals and legal entities"
				},
				component: () => import("@/views/Main/AboutBank/Tariffs")
			},
		]
	}
];

export default aboutBank;
