const corporateCustomers = [
	{
		path: "corporate-customers",
		name: "CorporateCustomers",
		meta: {
			linkTextUZ: "Korporativ mijozlar",
			linkTextRU: "Корпоративным клиентам",
			linkTextEN: "Corporate customers"
		},
		component: () => import("@/views/Main/CorporateCustomers"),
		redirect: { name: "HomeCorporateCustomers" },
		children: [
			{
				path: "home",
				name: "HomeCorporateCustomers",
				component: () => import("@/views/Main/CorporateCustomers/Home")
			},
			{
				path: "accounting-cash-service",
				name: "AccountingCashService",
				meta: {
					linkTextUZ: "Hisob-kitob va kassa xizmati",
					linkTextRU: "Бухгалтерско-кассовое обслуживание",
					linkTextEN: "Accounting and cash service"
				},
				component: () => import("@/views/Main/CorporateCustomers/AccountingCashService")
			},
			{
				path: "account-open",
				name: "AccountOpen",
				meta: {
					linkTextUZ: "Hisob ochish",
					linkTextRU: "Открыть счет",
					linkTextEN: "Account opening",

					headerTextUZ: "Hisob raqam ochish",
					headerTextRU: "Открыть счет",
					headerTextEN: "Opening an account",

					headerSubTextUZ: "Hisob raqam ochish uchun so'rov qoldiring",
					headerSubTextRU: "Оставьте заявку на открытие счета",
					headerSubTextEN: "Leave a request to open an account"
				},
				component: () => import("@/views/Main/CorporateCustomers/AccountOpen")
			},
			{
				path: "salary-project",
				name: "SalaryProject",
				meta: {
					linkTextUZ: "Ish haqi loyihasi",
					linkTextRU: "Зарплатный проект",
					linkTextEN: "Salary project",

					headerTextUZ: "Ish haqi loyihasi",
					headerTextRU: "Зарплатный проект",
					headerTextEN: "Salary project",

					headerSubTextUZ: "Har qanday tashkilotning moliyaviy muammolarini hal qilish",
					headerSubTextRU: "Решить финансовые проблемы любой организации",
					headerSubTextEN: "Solving the financial problems of any organization"
				},
				component: () => import("@/views/Main/CorporateCustomers/SalaryProject")
			},
			{
				path: "credits",
				name: "CreditsCorporate",
				meta: {
					linkTextUZ: "Kreditlar",
					linkTextRU: "Кредиты",
					linkTextEN: "Credits"
				},
				component: () => import("@/views/Main/CorporateCustomers/Credits"),
				redirect: { name: "CreditsListCorporate" },
				children: [
					{
						path: "list",
						name: "CreditsListCorporate",
						meta: {
							linkTextUZ: "Kreditlar",
							linkTextRU: "Кредиты",
							linkTextEN: "Credits",

							headerTextUZ: "Korporativ mijozlarga kreditlar",
							headerTextRU: "Кредиты корпоративным клиентам",
							headerTextEN: "Loans to corporate clients",

							headerSubTextUZ: "Yangi omadli xaridlar uchun!",
							headerSubTextRU: "Для новых счастливых покупок!",
							headerSubTextEN: "For new happy purchases!"
						},
						component: () => import("@/views/Main/CorporateCustomers/Credits/List")
					},
					{
						path: "list/:id",
						name: "CreditsCorporateDetail",
						component: () => import("@/views/Main/CorporateCustomers/Credits/Detail")
					}
				]
			},
			{
				path: "cards",
				name: "CardsCorporate",
				meta: {
					linkTextUZ: "Kartalar",
					linkTextRU: "Карты",
					linkTextEN: "Cards"
				},
				component: () => import("@/views/Main/CorporateCustomers/Cards"),
				redirect: { name: "CardsCorporateList" },
				children: [
					{
						path: "list",
						name: "CardsCorporateList",
						redirect: {
							name: "CardsCorporateListType",
							params: {
								type: "all"
							}
						},
						component: () => import("@/views/Main/CorporateCustomers/Cards/List"),
						children: [
							{
								path: "type/:type",
								name: "CardsCorporateListType",
								meta: {
									linkTextUZ: "Kartalar ro'yxati",
									linkTextRU: "Список карточек",
									linkTextEN: "List of cards",

									headerTextUZ: "Korporativ kartalar",
									headerTextRU: "Корпоративные карты",
									headerTextEN: "Corporate cards",

									headerSubTextUZ: "Bizning kartalarimiz bilan pulni tejash va sarflash oson",
									headerSubTextRU: "С нашими картами легко экономить и тратить деньги",
									headerSubTextEN: "It is easy to save and spend money with our cards"
								},
								component: () => import("@/views/Main/CorporateCustomers/Cards/List/ListType")
							}
						]
					},
					{
						path: "list/:id",
						name: "CardsCorporateDetail",
						component: () => import("@/views/Main/CorporateCustomers/Cards/Detail")
					}
				]
			},
			{
				path: "corp-mobile-bank",
				name: "CorporateMobileBank",
				meta: {
					linkTextUZ: "Mobil bank",
					linkTextRU: "Мобильный банк",
					linkTextEN: "Mobile banking",

					headerTextUZ: "Mobil bank",
					headerTextRU: "Мобильный банк",
					headerTextEN: "Mobile banking",

					headerSubTextUZ: "Barcha moliyalaringiz sizning cho'ntagingizda",
					headerSubTextRU: "Все финансы в вашем кармане",
					headerSubTextEN: "All finances in your pocket"
				},
				component: () => import("@/views/Main/CorporateCustomers/Services/MobileBank")
			},
			{
				path: "deposits",
				name: "DepositsCorporate",
				meta: {
					linkTextUZ: "Omonatlar",
					linkTextRU: "Вклады",
					linkTextEN: "Deposits"
				},
				component: () => import("@/views/Main/CorporateCustomers/Deposits"),
				redirect: { name: "DepositsCorporateList" },
				children: [
					{
						path: "list",
						name: "DepositsCorporateList",
						meta: {
							linkTextUZ: "Omonatlar",
							linkTextRU: "Вклады",
							linkTextEN: "Deposits",

							headerTextUZ: "Omonatlar",
							headerTextRU: "Вклады",
							headerTextEN: "Deposits",

							headerSubTextUZ: "Bo`sh turgan pul mablag`laringizni xavfsiz va foydali investitsiya qiling.",
							headerSubTextRU: "Надежно и выгодно вкладывайте свободные деньги.",
							headerSubTextEN: "Invest your idle money safely and profitably."
						},
						component: () => import("@/views/Main/CorporateCustomers/Deposits/List")
					},
					{
						path: "list/:id",
						name: "DepositsCorporateDetail",
						component: () => import("@/views/Main/CorporateCustomers/Deposits/Detail")
					}
				]
			},
			{
				path: "financing",
				name: "Financing",
				meta: {
					linkTextUZ: "Moliyalashtirish",
					linkTextRU: "Финансирование",
					linkTextEN: "Financing",

					headerTextUZ: "Moliyalashtirish",
					headerTextRU: "Финансирование",
					headerTextEN: "Financing",

					headerSubTextUZ: "Bank iqtisodiy foydali, istiqbolli loyihalarni moliyalashtiriadi.",
					headerSubTextRU: "Банк финансирует экономически жизнеспособные, перспективные проекты.",
					headerSubTextEN: "The bank finances economically viable, promising projects."
				},
				component: () => import("@/views/Main/CorporateCustomers/Financing")
			},
			{
				path: "foreign-economic-activity",
				name: "ForeignEconomicActivity",
				meta: {
					linkTextUZ: "Tashqi iqtisodiy faoliyat",
					linkTextRU: "Внешнеэкономическая деятельность",
					linkTextEN: "Foreign economic activity",

					headerTextUZ: "Tashqi iqtisodiy faoliyat",
					headerTextRU: "Внешнеэкономическая деятельность",
					headerTextEN: "Foreign economic activity",

					headerSubTextUZ: "Importchilar, eksportchilar va xorijiy kontragentlar bilan hisob-kitoblarni amalga oshiruvchilar uchun.",
					headerSubTextRU: "Для поселенцев с импортерами, экспортерами и иностранными контрагентами.",
					headerSubTextEN: "For those who make settlements with importers, exporters and foreign counterparties."
				},
				component: () => import("@/views/Main/CorporateCustomers/Financing/ForeignEconomicActivity")
			},
			{
				path: "dealing-operations",
				name: "DealingOperations",
				meta: {
					linkTextUZ: "Diling operatsiyalar",
					linkTextRU: "Дилинговые операции",
					linkTextEN: "Dealing operations",

					headerTextUZ: "Diling operatsiyalari",
					headerTextRU: "Дилинговые операции",
					headerTextEN: "Dealing operations"
				},
				component: () => import("@/views/Main/CorporateCustomers/Financing/DealingOperations")
			},
			{
				path: "project-financing",
				name: "ProjectFinancing",
				meta: {
					linkTextUZ: "Asosiy vositalarni xarid qilish uchun kreditlar",
					linkTextRU: "Кредиты на приобретение основных средств",
					linkTextEN: "Loans for the purchase of fixed assets",

					headerTextUZ: "Asosiy vositalarni xarid qilish uchun kreditlar",
					headerTextRU: "Кредиты на приобретение основных средств",
					headerTextEN: "Loans for the purchase of fixed assets"
				},
				component: () => import("@/views/Main/CorporateCustomers/Financing/ProjectFinancing")
			},
			{
				path: "documentary-transactions",
				name: "DocumentaryTransactions",
				meta: {
					linkTextUZ: "Hujjatli operatsiyalar",
					linkTextRU: "Документарные операции",
					linkTextEN: "Documentary transactions",

					headerTextUZ: "Hujjatli operatsiyalar",
					headerTextRU: "Документарные операции",
					headerTextEN: "Documentary transactions",

					headerSubTextUZ: "Xaridorlar va sotuvchilar o'rtasida hisob-kitob qilish bo'yicha bank xizmatlari",
					headerSubTextRU: "Банковские услуги для расчетов между покупателями и продавцами",
					headerSubTextEN: "Banking services for settlements between buyers and sellers"
				},
				component: () => import("@/views/Main/CorporateCustomers/Financing/DocumentaryTransactions")
			},
			{
				path: "corp-supporting",
				name: "SFEA",
				meta: {
					linkTextUZ: "Tashqi iqtisodiy faoliyatni qo'llab-quvvatlash",
					linkTextRU: "Поддержка внешнеэкономической деятельности",
					linkTextEN: "Supporting foreign economic activity",

					headerTextUZ: "Tashqi iqtisodiy faoliyatni qo'llab-quvvatlash",
					headerTextRU: "Поддержка внешнеэкономической деятельности",
					headerTextEN: "Supporting foreign economic activity"
				},
				component: () => import("@/views/Main/CorporateCustomers/Financing/SFEA")
			},

			{
				path: "trade-acquiring",
				name: "TradeAcquiring",
				meta: {
					linkTextUZ: "Savdo ekvayringi",
					linkTextRU: "Торговый эквайринг",
					linkTextEN: "Trade acquiring",

					headerTextUZ: "Savdo ekvayringi",
					headerTextRU: "Торговый эквайринг",
					headerTextEN: "Trade acquiring",

					headerSubTextUZ: "Plastik kartalar bilan to'lash uchun terminal.",
					headerSubTextRU: "Терминал для оплаты пластиковыми картами.",
					headerSubTextEN: "Terminal for payment with plastic cards."
				},
				component: () => import("@/views/Main/CorporateCustomers/Services/TradeAcquiring/index")
			},
			{
				path: "application-for-terminal",
				name: "ApplicationForTerminal",
				meta: {
					linkTextUZ: "Terminalga buyurtma",
					linkTextRU: "Заказ на терминал",
					linkTextEN: "Order to the terminal",

					headerTextUZ: "Savdo ekvayringi uchun ariza",
					headerTextRU: "Заявка на торговый эквайринг",
					headerTextEN: "Application for trade acquiring",

					headerSubTextUZ: "Terminal bilan maksimal foyda oling.",
					headerSubTextRU: "Получайте максимальную прибыль с терминалом.",
					headerSubTextEN: "Get the maximum profit with terminal."
				},
				component: () => import("@/views/Main/CorporateCustomers/Services/ApplicationTerminal/index")
			},
			{
				path: "documents",
				name: "CorporateDocuments",
				meta: {
					linkTextUZ: "Hujjatlar",
					linkTextRU: "Документы",
					linkTextEN: "Documents",

					headerTextUZ: "Ma'lumotni yuklab oling",
					headerTextRU: "Информация для скачивания",
					headerTextEN: "Download information"
				},
				component: () => import("@/views/Main/CorporateCustomers/Documents")
			},
			{
				path: "corporate-internet-bank",
				name: "CorporateInternetBank",
				meta: {
					linkTextUZ: "Korporativ bank",
					linkTextRU: "Корпоративный банк",
					linkTextEN: "Corporate bank",

					headerTextUZ: "Korporativ Internet-bank",
					headerTextRU: "Корпоративный интернет банк",
					headerTextEN: "Corporate Internet Bank",

					headerSubTextUZ: "Sizning shaxsiy bankingiz ofisda.",
					headerSubTextRU: "Ваш персональный банк прямо в офисе.",
					headerSubTextEN: "Your personal bank right in the office."
				},
				component: () => import("@/views/Main/CorporateCustomers/InternetBank")
			},
			{
				path: "corporate-trade-finance",
				name: "CorporateTradeFinance",
				meta: {
					linkTextUZ: "Savdoni moliyalashtirish",
					linkTextRU: "Торговое финансирование",
					linkTextEN: "Trade finance",

					headerTextUZ: "Savdoni moliyalashtirish",
					headerTextRU: "Торговое финансирование",
					headerTextEN: "Trade finance",

					headerSubTextUZ: "«Asaka» bank keng korrespondentlik tarmog'iga ega.",
					headerSubTextRU: "Асака Банк имеет разветвленную корреспондентскую сеть.",
					headerSubTextEN: "Asaka Bank has an extensive correspondent network."
				},
				component: () => import("@/views/Main/CorporateCustomers/Financing/TradeFinance")
			},
			{
				path: "factoring",
				name: "CorporateFactoring",
				meta: {
					linkTextUZ: "Faktoring",
					linkTextRU: "Факторинг",
					linkTextEN: "Factoring",

					headerTextUZ: "Faktoring",
					headerTextRU: "Факторинг",
					headerTextEN: "Factoring",

					headerSubTextUZ: "Savdo faoliyati bilan shug'ullanuvchi ishlab chiqaruvchilar va etkazib beruvchilar uchun bir qator xizmatlar",
					headerSubTextRU: "Комплекс услуг для производителей и поставщиков, ведущих торговую деятельность",
					headerSubTextEN: "Complex of services for manufacturers and suppliers engaged in trading activities"
				},
				component: () => import("@/views/Main/CorporateCustomers/Services/Factoring")
			},
		]
	}
];

export default corporateCustomers;
