const shareholderAndInvestor = [
	{
		path: "investors",
		name: "ShareholderAndInvestor",
		meta: {
			linkTextUZ: "Aksiyadorlar va investorlar",
			linkTextRU: "Акционеры и инвесторы",
			linkTextEN: "Shareholders and investors"
		},
		component: () => import("@/views/Main/ShareholderAndInvestor"),
		redirect: { name: "HomeShareholderAndInvestor" },
		children: [
			{
				path: "home",
				name: "HomeShareholderAndInvestor",
				meta: {
					linkTextUZ: "Aksiyadorlar va investorlar",
					linkTextRU: "Акционеры и инвесторы",
					linkTextEN: "Shareholders and investors"
				},
				component: () => import("@/views/Main/ShareholderAndInvestor/Home")
			},
			{
				path: "internal-documents",
				name: "InternalDocuments",
				meta: {
					linkTextUZ: "Ichki ma'lumotlar",
					linkTextRU: "Внутренняя информация",
					linkTextEN: "Internal information",

					headerTextUZ: "Ichki ma'lumotlar",
					headerTextRU: "Внутренняя информация",
					headerTextEN: "Internal information"
				},
				component: () => import("@/views/Main/ShareholderAndInvestor/InternalDocuments")
			},
			{
				path: "financial-indicators",
				name: "FinancialIndicators",
				meta: {
					linkTextUZ: "Moliyaviy hisobot",
					linkTextRU: "Финансовый отчет",
					linkTextEN: "Financial reporting",

					headerTextUZ: "Moliyaviy hisobot",
					headerTextRU: "Финансовый отчет",
					headerTextEN: "Financial reporting"
				},
				component: () => import("@/views/Main/ShareholderAndInvestor/FinancialIndicators")
			},
			{
				path: "audit-report",
				name: "AuditReport",
				meta: {
					linkTextUZ: "Audit hisoboti",
					linkTextRU: "Аудиторский отчет",
					linkTextEN: "Audit report",

					headerTextUZ: "Audit hisoboti",
					headerTextRU: "Аудиторский отчет",
					headerTextEN: "Audit report"
				},
				component: () => import("@/views/Main/ShareholderAndInvestor/AuditReport")
			},
			{
				path: "bank-performance",
				name: "BankPerformance",
				meta: {
					linkTextUZ: "Bank faoliyatining asosiy ko'rsatkichlari",
					linkTextRU: "Ключевые показатели эффективности банка",
					linkTextEN: "Key performance indicators of the bank",

					headerTextUZ: "Bank faoliyatining asosiy ko'rsatkichlari",
					headerTextRU: "Ключевые показатели эффективности банка",
					headerTextEN: "Key performance indicators of the bank"
				},
				component: () => import("@/views/Main/ShareholderAndInvestor/BankPerformance")
			},
			{
				path: "statistic-graphs",
				name: "StatisticGraphs",
				meta: {
					linkTextUZ: "Statistik grafikalar",
					linkTextRU: "Статистические графики",
					linkTextEN: "Statistical graphs",

					headerTextUZ: "Statistik grafikalar",
					headerTextRU: "Статистические графики",
					headerTextEN: "Statistical graphs"
				},
				component: () => import("@/views/Main/ShareholderAndInvestor/StatisticalGraphs")
			},
			{
				path: "development-dynamics",
				name: "DevelopmentDynamics",
				meta: {
					linkTextUZ: "Rivojlanish dinamikasi",
					linkTextRU: "Динамика развития",
					linkTextEN: "Development dynamics",

					headerTextUZ: "Rivojlanish dinamikasi",
					headerTextRU: "Динамика развития",
					headerTextEN: "Development dynamics"
				},
				component: () => import("@/views/Main/ShareholderAndInvestor/DevelopmentDynamics")
			},
			{
				path: "open-data",
				name: "OpenData",
				meta: {
					linkTextUZ: "Ochiq ma'lumotlar",
					linkTextRU: "Открытые данные",
					linkTextEN: "Open data",

					headerTextUZ: "Ochiq ma'lumotlar",
					headerTextRU: "Открытые данные",
					headerTextEN: "Open data"
				},
				component: () => import("@/views/Main/ShareholderAndInvestor/OpenData")
			},
			{
				path: "treasury-operations",
				name: "TreasuryOperations",
				meta: {
					linkTextUZ: "G'aznaxona amaliyotlari",
					linkTextRU: "Казначейские операции",
					linkTextEN: "Treasury operations",

					headerTextUZ: "G'aznaxona amaliyotlari",
					headerTextRU: "Казначейские операции",
					headerTextEN: "Treasury operations"
				},
				component: () => import("@/views/Main/ShareholderAndInvestor/TreasuryOperations")
			},
			{
				path: "partner-information",
				name: "PartnerInformation",
				meta: {
					linkTextUZ: "Hamkorlarga",
					linkTextRU: "Партнерам",
					linkTextEN: "To partners",

					headerTextUZ: "Hamkorlarga",
					headerTextRU: "Партнерам",
					headerTextEN: "To partners"
				},
				component: () => import("@/views/Main/ShareholderAndInvestor/PartnerInformation")
			}
		]
	}
];

export default shareholderAndInvestor;
