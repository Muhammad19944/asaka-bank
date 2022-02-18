const physicalPersons = [
	{
		path: "physical-persons",
		name: "PhysicalPersons",
		meta: {
			linkTextUZ: "Xususiy mijozlar",
			linkTextRU: "Физическим лицам",
			linkTextEN: "Individuals"
		},
		component: () => import("@/views/Main/PhysicalPersons"),
		redirect: { name: "HomePhysicalPersons" },
		children: [
			{
				path: "home",
				name: "HomePhysicalPersons",
				component: () => import("@/views/Main/PhysicalPersons/Home")
			},
			// {
			// 	path: "news/:id",
			// 	name: "NewsShow",
			// 	component: () => import("@/layout/Main/PressCenter/show")
			// },
			{
				path: "credits",
				name: "Credits",
				component: () => import("@/views/Main/PhysicalPersons/Credits"),
				redirect: { name: "CreditsList" },
				meta: {
					linkTextUZ: "Kreditlar",
					linkTextRU: "Кредиты",
					linkTextEN: "Credits"
				},
				children: [
					{
						path: "list",
						name: "CreditsList",
						meta: {
							linkTextUZ: "Kredit mahsulotlari",
							linkTextRU: "Кредитные продукты",
							linkTextEN: "Credit products",

							headerTextUZ: "Xususiy mijozlarga kreditlar",
							headerTextRU: "Кредиты физическим лицам",
							headerTextEN: "Loans to individuals",

							headerSubTextUZ: "Yangi omadli xaridlar uchun!",
							headerSubTextRU: "Для новых удачных покупок!",
							headerSubTextEN: "For new happy purchases!"
						},
						component: () => import("@/views/Main/PhysicalPersons/Credits/List")
					},
					{
						path: "calc",
						name: "CreditCalculator",
						component: () => import("@/views/Main/PhysicalPersons/Credits/Calc")
					},
					{
						path: "list/:id",
						name: "CreditsDetail",
						component: () => import("@/views/Main/PhysicalPersons/Credits/Detail"),
						meta: {},
					}
				]
			},
			{
				path: "cards",
				name: "Cards",
				component: () => import("@/views/Main/PhysicalPersons/Cards"),
				redirect: { name: "CardsList" },
				meta: {
					linkTextUZ: "Kartalar",
					linkTextRU: "Карты",
					linkTextEN: "Cards"
				},
				children: [
					{
						path: "list",
						name: "CardsList",
						redirect: {
							name: "CardListType",
							params: {
								type: "all"
							}
						},
						component: () => import("@/views/Main/PhysicalPersons/Cards/List"),
						children: [
							{
								path: "type/:type",
								name: "CardListType",
								meta: {
									linkTextUZ: "Kartalar ro'yxati",
									linkTextRU: "Список карт",
									linkTextEN: "List of cards",

									headerTextUZ: "Bank kartalari",
									headerTextRU: "Банковские карты",
									headerTextEN: "Bank cards",


									headerSubTextUZ: "To’lovlarni amalga oshirishda eng qulay vosita",
									headerSubTextRU: "С нашими картами легко копить и приятно тратить",
									headerSubTextEN: "It's easy to save and spend with our cards."
								},
								component: () => import("@/views/Main/PhysicalPersons/Cards/List/ListType")
							}
						]
					},
					{
						path: "list/:id",
						name: "CardsDetail",
						component: () => import("@/views/Main/PhysicalPersons/Cards/Detail")
					}
				]
			},
			{
				path: "deposits",
				name: "Deposits",
				component: () => import("@/views/Main/PhysicalPersons/Deposits"),
				redirect: { name: "DepositsList" },
				meta: {
					linkTextUZ: "Omonatlar",
					linkTextRU: "Вклады",
					linkTextEN: "Deposits"
				},
				children: [
					{
						path: "list",
						name: "DepositsList",
						redirect: {
							name: "DepositListType",
							params: {
								type: "all"
							}
						},
						component: () => import("@/views/Main/PhysicalPersons/Deposits/List"),
						children: [
							{
								path: "type/:type",
								name: "DepositListType",
								meta: {
									linkTextUZ: "Omonatlar ro'yxati",
									linkTextRU: "Список вкладов",
									linkTextEN: "List of deposits",

									headerTextUZ: "Omonatlar",
									headerTextRU: "Вклады",
									headerTextEN: "Deposits",

									headerSubTextUZ: "Jamg‘armalaringizni saqlash va daromad olish uchun!",
									headerSubTextRU: "Гарантия сохранения и приумножения Вашего капитала!",
									headerSubTextEN: "In order to preserve and save money!"
								},
								component: () => import("@/views/Main/PhysicalPersons/Deposits/List/ListType")
							}
						]
					},
					{
						path: "list/:id",
						name: "DepositsDetail",
						component: () => import("@/views/Main/PhysicalPersons/Deposits/Detail")
					},
					{
						path: "calc",
						name: "DepositCalculatorAPI",
						component: () => import("@/views/Main/PhysicalPersons/Deposits/Calc")
					}
				]
			},
			{
				path: "money-transfer",
				name: "MoneyTransfer",
				component: () => import("@/views/Main/PhysicalPersons/PaymentsAndTransfers/MoneyTransfers"),
				redirect: { name: "MoneyTransferList" },
				meta: {
					linkTextUZ: "To'lovlar va o'tkazmalar",
					linkTextRU: "Платежи и переводы",
					linkTextEN: "Payments and transfers"
				},
				children: [
					{
						path: "list",
						name: "MoneyTransferList",
						meta: {
							linkTextUZ: "Pul o'tkazmalari",
							linkTextRU: "Денежные переводы",
							linkTextEN: "Money transfers",

							headerTextUZ: "Pul o'tkazmalari",
							headerTextRU: "Денежные переводы",
							headerTextEN: "Money transfers",

							headerSubTextUZ: "Yaqinlaringiz bir necha daqiqa ichida o'tkazmani qabul qiladi",
							headerSubTextRU: "Ваши близкие будут получить перевод в течение нескольких минут",
							headerSubTextEN: "Your loved ones will receive the transfer in minutes"
						},
						component: () =>
							import("@/views/Main/PhysicalPersons/PaymentsAndTransfers/MoneyTransfers/List")
					},
					{
						path: "list/:id",
						name: "MoneyTransferDetail",
						props: true,
						component: () =>
							import("@/views/Main/PhysicalPersons/PaymentsAndTransfers/MoneyTransfers/Detail")
					}
				]
			},
			{
				path: "payment-transfer",
				name: "PaymentTransfer",
				component: () => import("@/views/Main/PhysicalPersons/PaymentsAndTransfers/PaymentTransfers"),
				redirect: { name: "PaymentTransferList" },
				children: [
					{
						path: "list",
						name: "PaymentTransferList",
						meta: {
							linkTextUZ: "To'lovlar",
							linkTextRU: "Платежи",
							linkTextEN: "Payments",

							headerTextUZ: "Mahsulot va xizmatlar uchun to'lovlar",
							headerTextRU: "Оплата товаров и услуг",
							headerTextEN: "Payments for products and services",


							headerSubTextUZ: "Aloqa, kommunal xizmatlar va boshqalar uchun to'lovlarni amalga oshiring",
							headerSubTextRU: "Оплачивайте связь, коммунальные услуги и многое другое",
							headerSubTextEN: "Make payments for communications, utilities, and more"
						},
						component: () => import("@/views/Main/PhysicalPersons/PaymentsAndTransfers/PaymentTransfers/List"),
						children: [
							{
								path: ":id",
								name: "PaymentRoute",
								props: true,
								component: () => import("@/views/Main/PhysicalPersons/PaymentsAndTransfers/PaymentTransfers/List/show")
							}
						]
					}
				]
			},
			{
				path: "services",
				name: "ServicesList",
				meta: {
					linkTextUZ: "Xizmatlar",
					linkTextRU: "Услуги",
					linkTextEN: "Services",

					headerTextUZ: "Xizmatlar",
					headerTextRU: "Услуги",
					headerTextEN: "Services"
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/List")
			},
			{
				path: "credit-calc",
				name: "CreditCalc",
				meta: {
					linkTextUZ: "Kredit kalkulyator",
					linkTextRU: "Кредитный калькулятор",
					linkTextEN: "Credit calculator",

					headerTextUZ: "Kredit kalkulyatori",
					headerTextRU: "Кредитный калькулятор",
					headerTextEN: "Credit calculator",


					headerSubTextUZ: "Yangi muvaffaqiyatli xaridlar uchun kreditni hisoblang",
					headerSubTextRU: "Рассчитайте кредит для новых успешных покупок",
					headerSubTextEN: "Calculate credit for new successful purchases"
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/CreditCalc")
			},
			{
				path: "online-credit",
				name: "OnlineCredit",
				meta: {
					linkTextUZ: "Onlayn kredit",
					linkTextRU: "Онлайн-кредит",
					linkTextEN: "Online credit",

					headerTextUZ: "Onlayn kredit",
					headerTextRU: "Онлайн-кредит",
					headerTextEN: "Online credit",

					headerSubTextUZ: "Yangi omadli xaridlar uchun!",
					headerSubTextRU: "Для новых удачных покупок!",
					headerSubTextEN: "FOr new happy purchases!"
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/OnlineCredit")
			},
			{
				path: "online-credit/:id",
				name: "OnlineCreditID",
				meta: {
					linkTextUZ: "Onlayn kredit",
					linkTextRU: "Онлайн-кредит",
					linkTextEN: "Online credit",

					headerTextUZ: "Onlayn kredit",
					headerTextRU: "Онлайн-кредит",
					headerTextEN: "Online credit",

					headerSubTextUZ: "Yangi omadli xaridlar uchun!",
					headerSubTextRU: "Для новых удачных покупок!",
					headerSubTextEN: "For new happy purchases!"
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/OnlineCredit")
			},
			{
				path: "scoring",
				name: "Scoring",
				meta: {
					linkTextUZ: "Skoring",
					linkTextRU: "Скоринг",
					linkTextEN: "Scoring",

					headerTextUZ: "Skoring",
					headerTextRU: "Скоринг",
					headerTextEN: "Scoring",

					headerSubTextUZ: "Yangi omadli xaridlar uchun!",
					headerSubTextRU: "За новых удачных покупок!",
					headerSubTextEN: "For new Lucky purchases!"
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/Scoring")
			},
			{
				path: "faq",
				name: "FAQ",
				meta: {
					linkTextUZ: "Savollar va javoblar",
					linkTextRU: "Вопросы и ответы",
					linkTextEN: "Questions and answers",

					headerTextUZ: "Savollar va javoblar",
					headerTextRU: "Вопросы и ответы",
					headerTextEN: "Questions and answers",

					headerSubTextUZ: "Siz uchun, tez-tez beriladigan savollar ro'yxatini tuzdik.",
					headerSubTextRU: "Для вас мы составили список часто задаваемых вопросов.",
					headerSubTextEN: "For you, we have compiled a list of frequently asked questions."
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/FAQ")
			},
			{
				path: "card-open",
				name: "CardOpen",
				meta: {
					linkTextUZ: "Karta ochish",
					linkTextRU: "Открыть карту",
					linkTextEN: "Open card",

					headerTextUZ: "Karta ochish",
					headerTextRU: "Открыть карту",
					headerTextEN: "Open card",

					headerSubTextUZ: "Plastik karta ochish uchun ariza",
					headerSubTextRU: "Заявление на открытие пластиковой карты",
					headerSubTextEN: "Application for opening a plastic card"
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/CardOpen")
			},
			{
				path: "card-open/:id",
				name: "ServicePayment",
				meta: {
					linkTextUZ: "Karta ochish",
					linkTextRU: "Открыть карту",
					linkTextEN: "Service Payment",

					headerTextUZ: "Karta ochish",
					headerTextRU: "Открыть карту",
					headerTextEN: "Open card",

					headerSubTextUZ: "Pullik va bepul plastik kartalarni ochish uchun ariza",
					headerSubTextRU: "Заявка на открытие платных и бесплатных пластиковых карт",
					headerSubTextEN: "Application for opening paid and free plastic cards"
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/CardOpen/ServicePayment")
			},
			{
				path: "sms-notification",
				name: "SMSNotification",
				meta: {
					linkTextUZ: "Sms xabarnoma",
					linkTextRU: "SMS-уведомление",
					linkTextEN: "SMS notification",

					headerTextUZ: "SMS xabarnoma",
					headerTextRU: "SMS-уведомление",
					headerTextEN: "SMS notification",

					headerSubTextUZ: "Mobil telefoningizdga avtomatik SMS xabarnomalarini oling",
					headerSubTextRU: "Получайте автоматические SMS-уведомления на свой мобильный телефон",
					headerSubTextEN: "Receive automatic SMS notifications on your mobile phone"
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/SMSNotification")
			},
			{
				path: "mobile-bank",
				name: "MobileBank",
				meta: {
					linkTextUZ: "Mobil bank",
					linkTextRU: "Мобильный банк",
					linkTextEN: "Mobile banking",

					headerTextUZ: "Mobil bank",
					headerTextRU: "Мобильный банк",
					headerTextEN: "Mobile banking",

					headerSubTextUZ: "Bankingiz doim kaftingizda",
					headerSubTextRU: "Все финансы в вашем кармане",
					headerSubTextEN: "Your bank is always in your palm"
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/MobileBank")
			},
			// {
			// 	path: "p2p-money-transfer",
			// 	name: "P2PMoneyTransfer",
			// 	meta: {
			// 		linkTextUZ: "Kartadan kartaga o`tkazish",
			// 		linkTextRU: "Перевод с карты на карту",
			// 		linkTextEN: "Transfer from card to card",
			//
			// 		headerTextUZ: "Kartadan kartaga o`tkazish",
			// 		headerTextRU: "Перевод с карты на карту",
			// 		headerTextEN: "Transfer from card to card",
			//
			// 		headerSubTextUZ: "Tez, qulay va ishonchli",
			// 		headerSubTextRU: "Быстро, удобно, надежно",
			// 		headerSubTextEN: "Fast, convenient and reliable"
			// 	},
			// 	component: () => import("@/views/Main/PhysicalPersons/Services/P2PMoneyTransfer")
			// },
			// {
			// 	path: "money-send",
			// 	name: "MoneySend",
			// 	meta: {
			// 		linkTextUZ: "Money Send",
			// 		linkTextRU: "Money Send",
			// 		linkTextEN: "Money Send",
			//
			// 		headerTextUZ: "Money Send",
			// 		headerTextRU: "Money Send",
			// 		headerTextEN: "Money Send",
			//
			// 		headerSubTextUZ: "Xorijiy valyutada pul o'tkazmalar",
			// 		headerSubTextRU: "Денежные переводы в иностранной валюте",
			// 		headerSubTextEN: "Money transfers in foreign currency"
			// 	},
			// 	component: () => import("@/views/Main/PhysicalPersons/Services/MoneySend")
			// },
			{
				path: "individual-design-card",
				name: "IndividualDesignCard",
				meta: {
					linkTextUZ: "Individual dizayndagi karta",
					linkTextRU: "Карточка индивидуального дизайна",
					linkTextEN: "Individual design card",

					headerTextUZ: "Individual dizayndagi karta",
					headerTextRU: "Карточка индивидуального дизайна",
					headerTextEN: "Individual design card",

					headerSubTextUZ: "Sizning kartangiz - sizning xarakteringiz",
					headerSubTextRU: "Ваша карта - это ваш персонаж",
					headerSubTextEN: "Your card is your character"
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/IndividualCardDesign")
			},

			{
				path: "individual-design-card/id",
				name: "IndividualDesignCardID",
				meta: {
					linkTextUZ: "Individual dizayndagi karta",
					linkTextRU: "Карточка индивидуального дизайна",
					linkTextEN: "Individual design card",

					headerTextUZ: "Individual dizayndagi karta",
					headerTextRU: "Карточка индивидуального дизайна",
					headerTextEN: "Individual design card",

					headerSubTextUZ: "Sizning kartangiz - sizning xarakteringiz",
					headerSubTextRU: "Ваша карта - это ваш персонаж",
					headerSubTextEN: "Your card is your character"
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/CardOpen")
			},

			{
				path: "deposit-open",
				name: "DepositOpen",
				meta: {
					linkTextUZ: "Omonat ochish",
					linkTextRU: "Открытие депозита",
					linkTextEN: "Opening a deposit",

					headerTextUZ: "Omonat ochish",
					headerTextRU: "Открытие депозита",
					headerTextEN: "Opening a deposit",

					headerSubTextUZ: "Hoziroq o'z omonatingizni oching.",
					headerSubTextRU: "Откройте свой депозит сейчас.",
					headerSubTextEN: "Open your deposit now."
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/DepositOpen")
			},

			{
				path: "deposit-open/:id",
				name: "DepositOpenID",
				meta: {
					linkTextUZ: "Omonat ochish",
					linkTextRU: "Открытие депозита",
					linkTextEN: "Opening a deposit",

					headerTextUZ: "Omonat ochish",
					headerTextRU: "Открытие депозита",
					headerTextEN: "Opening a deposit",

					headerSubTextUZ: "Hoziroq o'z omonatingizni oching.",
					headerSubTextRU: "Откройте свой депозит сейчас.",
					headerSubTextEN: "Open your deposit now."
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/DepositOpen")
			},


			{
				path: "deposit-calc",
				name: "DepositCalc",
				meta: {
					linkTextUZ: "Depozit kalkulyator",
					linkTextRU: "Калькулятор депозита",
					linkTextEN: "Deposit calculator",

					headerTextUZ: "Depozit kalkulyatori",
					headerTextRU: "Калькулятор депозита",
					headerTextEN: "Deposit calculator",

					headerSubTextUZ: "Omonatingiz foizlarini hisoblang",
					headerSubTextRU: "Рассчитайте проценты по депозиту",
					headerSubTextEN: "Calculate the interest on your deposit"
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/DepositCalc")
			},


			{
				path: "save-money",
				name: "SaveMoney",
				meta: {
					linkTextUZ: "Depozitar qutilar",
					linkTextRU: "Депозитные ящики",
					linkTextEN: "Depository boxes"
				},
				component: () => import("@/views/Main/PhysicalPersons/SaveMoney")
			},


			{
				path: "status-application",
				name: "StatusApplication",
				meta: {
					linkTextUZ: "So'rov holatini tekshirish",
					linkTextRU: "Проверить статус запроса",
					linkTextEN: "Checking query status",

					headerTextUZ: "So'rovingiz holatini tekshiring!",
					headerTextRU: "Проверьте статус вашего запроса!",
					headerTextEN: "Check the status of your request!",

					headerSubTextUZ: "Arizangiz raqamini kiriting",
					headerSubTextRU: "Введите номер вашей заявки",
					headerSubTextEN: "Enter your application number"
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/StatusApplication")
			},


			{
				path: "currency-exchange",
				name: "CurrencyExchange",
				meta: {
					linkTextUZ: "Valyuta ayirboshlash",
					linkTextRU: "Обмен валюты",
					linkTextEN: "Currency exchange",

					headerTextUZ: "Valyuta ayirboshlash",
					headerTextRU: "Обмен валюты",
					headerTextEN: "Currency exchange",

					headerSubTextUZ: "Har doim tez va qulay",
					headerSubTextRU: "Всегда быстро и удобно",
					headerSubTextEN: "Always fast and convenient"
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/CurrencyExchange")
			},

			{
				path: "bank-office",
				name: "BankOffice",
				meta: {
					linkTextUZ: "FILIALLAR VA BANKOMATLAR",
					linkTextRU: "ФИЛИАЛЫ И БАНКОМАТЫ",
					linkTextEN: "BRANCHES AND ATMS",

					headerTextUZ: "\"Asakabank\" AJning filiallari",
					headerTextRU: "Филиалы АО \"Асака Банк\"",
					headerTextEN: "Branches of Asaka Bank JSC",

					headerSubTextUZ: "Filiallar va bankomatlar mintaqaviy tarmog'i.",
					headerSubTextRU: "Региональная сеть отделений и банкоматов.",
					headerSubTextEN: "Regional network of branches and ATMs."
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/OfficeAndATMs")
			},

			{
				path: "promo",
				name: "Promo",
				component: () => import("@/views/Main/PhysicalPersons/Promo")
			},
			{
				path: "promo/:id",
				name: "PromoId",
				props: true,
				component: () => import("@/views/Main/PhysicalPersons/Promo/show")
			},
			{
				path: "online-polls",
				name: "ClientOnlinePolls",
				meta: {
					linkTextUZ: "Onlayn so'rovnomalar",
					linkTextRU: "Онлайн-опросы",
					linkTextEN: "Online polls",

					headerTextUZ: "So'rovnomalar arxivi",
					headerTextRU: "Архив опросов",
					headerTextEN: "Online polls",

					headerSubTextUZ: "Plastik kartalarga kirim qilish uchun rekvizitni aniqlash",
					headerSubTextRU: "Определение реквизитов для оформления чеков по пластиковым картам",
					headerSubTextEN: "Archive of polls"
				},
				component: () => import("@/views/Main/PhysicalPersons/Services/OnlinePolls")
			},
			{
				path: "card-requisites",
				name: "CardRequisites",
				meta: {
					linkTextUZ: "Karta rekvizitlari",
					linkTextRU: "Реквизиты карты",
					linkTextEN: "Card details",

					headerTextUZ: "Karta rekvizitlari",
					headerTextRU: "Реквизиты карты",
					headerTextEN: "Card details",

					headerSubTextUZ: "Plastik kartalarga kirim qilish uchun rekvizitni aniqlash",
					headerSubTextRU: "Определение реквизитов для оформления чеков по пластиковым картам",
					headerSubTextEN: "Determining the details for making receipts on plastic cards"
				},
				component: () => import("@/views/Main/PhysicalPersons/Cards/CardRequisites")
			}
		]
	}
];

export default physicalPersons;
