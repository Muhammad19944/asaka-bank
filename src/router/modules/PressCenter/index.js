const PressCenterClient = [
	{
		path: 'press-center',
		name: 'PressCenterClient',
		component: () => import('@/views/Main/PressCenter'),
		redirect: { name: 'PressCenterClientHome' },
		meta:{
			linkTextUZ: "Matbuot markazi",
			linkTextRU: "Пресс-центр",
			linkTextEN: "Press center"
		},
		children: [
			{
				path: 'home',
				name: 'PressCenterClientHome',
				component: () => import('@/views/Main/PressCenter/Home')
			},
			{
				path: "news/:id",
				name: "NewsShow",
				component: () => import("@/layout/Main/PressCenter/show")
			},
			{
				path: 'news-and-notifications',
				name: 'NewsAndNotifications',
				meta:{
					linkTextUZ: "Yangiliklar va xabarnomalar",
					linkTextRU: "Новости и уведомления",
					linkTextEN: "News and notifications",

					headerTextUZ: "Yangiliklar va xabarnomalar",
					headerTextRU: "Новости и уведомления",
					headerTextEN: "News and notifications"
				},
				component: () => import('@/views/Main/PressCenter/NewsAndNotifications')
			},
			{
				path: 'announcements',
				name: 'Announcements',
				meta:{
					linkTextUZ: "E'lonlar",
					linkTextRU: "Объявления",
					linkTextEN: "Announcements",

					headerTextUZ: "E'lonlar",
					headerTextRU: "Объявления",
					headerTextEN: "Announcements"
				},
				component: () => import('@/views/Main/PressCenter/Announcements')
			},
			{
				path: 'promotions',
				name: 'Promotions',
				meta:{
					linkTextUZ: "Aksiyalar",
					linkTextRU: "Акции",
					linkTextEN: "Promotions",

					headerTextUZ: "Aksiyalar",
					headerTextRU: "Акции",
					headerTextEN: "Promotions"
				},
				component: () => import('@/views/Main/PressCenter/Promotions')
			},
			{
				path: 'working-with-youth',
				name: 'WorkingWithYouth',
				meta:{
					linkTextUZ: "Yoshlar bilan ishlash",
					linkTextRU: "Молодежная политика",
					linkTextEN: "Youth policy",

					headerTextUZ: "Yoshlar bilan ishlash",
					headerTextRU: "Молодежная политика",
					headerTextEN: "Youth policy"
				},
				component: () => import('@/views/Main/PressCenter/WorkingWithYouth')
			},
			{
				path: 'financial-literacy',
				name: 'ClientFinancialLiteracy',
				meta:{
					linkTextUZ: "Moliyaviy savodxonlik",
					linkTextRU: "Финансовая грамотность",
					linkTextEN: "Financial literacy",

					headerTextUZ: "Moliyaviy savodxonlik",
					headerTextRU: "Финансовая грамотность",
					headerTextEN: "Financial literacy"
				},
				component: () => import('@/views/Main/PressCenter/FinancialLiteracy')
			},
			{
				path: 'tenders',
				name: 'Tenders',
				meta:{
					linkTextUZ: "Tenderlar",
					linkTextRU: "Тендеры",
					linkTextEN: "Tenders",

					headerTextUZ: "Tenderlar",
					headerTextRU: "Тендеры",
					headerTextEN: "Tenders"
				},
				component: () => import('@/views/Main/PressCenter/Tenders/List')
			},
			{
				path: 'tenders/:id',
				name: 'TendersDetail',
				meta:{
					linkTextUZ: "Tenderlar",
					linkTextRU: "Тендеры",
					linkTextEN: "Tenders",

					headerTextUZ: "Tender",
					headerTextRU: "Тендер",
					headerTextEN: "Tender"
				},
				component: () => import('@/views/Main/PressCenter/Tenders/Detail')
			},
			{
				path: 'useful-links',
				name: 'UsefulLinks',
				meta:{
					linkTextUZ: "Foydali havolalar",
					linkTextRU: "Полезные ссылки",
					linkTextEN: "Useful links",

					headerTextUZ: "Foydali havolalar",
					headerTextRU: "Полезные ссылки",
					headerTextEN: "Useful links"
				},
				component: () => import('@/views/Main/PressCenter/UsefulLinks')
			},
			{
				path: 'video-materials',
				name: 'VideoMaterials',
				meta:{
					linkTextUZ: "Video materiallar",
					linkTextRU: "Видео материалы",
					linkTextEN: "Video materials",

					headerTextUZ: "Video materiallar",
					headerTextRU: "Видео материалы",
					headerTextEN: "Video materials"
				},
				component: () => import('@/views/Main/PressCenter/VideoMaterials')
			},
			{
				path: 'photo-materials',
				name: 'PhotoMaterials',
				meta:{
					linkTextUZ: "Foto materiallar",
					linkTextRU: "Фото материалы",
					linkTextEN: "Photo materials",

					headerTextUZ: "Foto materiallar",
					headerTextRU: "Фото материалы",
					headerTextEN: "Photo materials"
				},
				component: () => import('@/views/Main/PressCenter/PhotoMaterials')
			}

		]
	}
]

export default PressCenterClient
