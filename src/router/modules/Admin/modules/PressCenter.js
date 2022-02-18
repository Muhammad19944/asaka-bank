const PressCenter = [
	{
		path: "press-center",
		name: "DashboardPressCenter",
		component: () => import("@/views/Admin/PressCenter"),
		redirect: { name: "DashboardNews" },
		children: [
			// Dashboard
			{
				path: 'dashboard',
				name: 'NewsDashboard',
				component: () => import('@/views/Admin/PressCenter/Dashboard')
			},

			// News And Notification
			{
				path: "news",
				name: "DashboardNews",
				component: () => import("@/views/Admin/PressCenter/NewsAndNotifications"),
				redirect: { name: "DashboardNewsList" },
				children: [
					{
						path: "list",
						name: "DashboardNewsList",
						component: () => import("@/views/Admin/PressCenter/NewsAndNotifications/List")
					},
					{
						path: "list/update/:id",
						name: "DashboardNewsUpdate",
						component: () => import("@/views/Admin/PressCenter/NewsAndNotifications/Update")
					},
					{
						path: "list/read/:id",
						name: "DashboardNewsRead",
						component: () => import("@/views/Admin/PressCenter/NewsAndNotifications/Read")
					},
					{
						path: "list/create",
						name: "DashboardNewsCreate",
						component: () => import("@/views/Admin/PressCenter/NewsAndNotifications/Create")
					}
				]
			},

			// To Partners
			{
				path: "to-partners",
				name: "DashboardToPartners",
				component: () => import("@/views/Admin/PressCenter/ToPartners"),
				redirect: { name: "DashboardToPartnersList" },
				children: [
					{
						path: "list",
						name: "DashboardToPartnersList",
						component: () => import("@/views/Admin/PressCenter/ToPartners/List")
					},
					{
						path: "list/update/:id",
						name: "DashboardToPartnersUpdate",
						component: () => import("@/views/Admin/PressCenter/ToPartners/Update")
					},
					{
						path: "list/read/:id",
						name: "DashboardToPartnersRead",
						component: () => import("@/views/Admin/PressCenter/ToPartners/Read")
					},
					{
						path: "list/create",
						name: "DashboardToPartnersCreate",
						component: () => import("@/views/Admin/PressCenter/ToPartners/Create")
					}
				]
			},

			//Announcements

			{
				path: "announcements",
				name: "DashboardAnnouncements",
				component: () => import("@/views/Admin/PressCenter/Announcements"),
				redirect: { name: "DashboardAnnouncementsList" },
				children: [
					{
						path: "list",
						name: "DashboardAnnouncementsList",
						component: () => import("@/views/Admin/PressCenter/Announcements/List")
					},
					{
						path: "list/update/:id",
						name: "DashboardAnnouncementsUpdate",
						component: () => import("@/views/Admin/PressCenter/Announcements/Update")
					},
					{
						path: "list/read/:id",
						name: "DashboardAnnouncementsRead",
						component: () => import("@/views/Admin/PressCenter/Announcements/Read")
					},
					{
						path: "list/create",
						name: "DashboardAnnouncementsCreate",
						component: () => import("@/views/Admin/PressCenter/Announcements/Create")
					}
				]
			},

			// Promotion
			{
				path: 'promotion',
				name: 'DashboardPromotion',
				component: () => import('@/views/Admin/PressCenter/Promotion'),
				redirect: { name: 'DashboardPromotionList' },
				children: [
					{
						path: 'list',
						name: 'DashboardPromotionList',
						component: () => import('@/views/Admin/PressCenter/Promotion/List')
					},
					{
						path: 'list/read/:id',
						name: 'DashboardPromotionRead',
						component: () => import('@/views/Admin/PressCenter/Promotion/Read')
					},
					{
						path: 'list/update/:id',
						name: 'DashboardPromotionUpdate',
						component: () => import('@/views/Admin/PressCenter/Promotion/Update')
					},
					{
						path: 'list/create',
						name: 'DashboardPromotionCreate',
						component: () => import('@/views/Admin/PressCenter/Promotion/Create')
					},
				]
			},

			// Young policy
			{
				path: "young-policy",
				name: "DashboardYoungPolicy",
				component: () => import("@/views/Admin/PressCenter/YouthPolicy"),
				redirect: { name: "DashboardYoungPolicyList" },
				children: [
					{
						path: "list",
						name: "DashboardYoungPolicyList",
						component: () => import("@/views/Admin/PressCenter/YouthPolicy/List")
					},
					{
						path: "list/update/:id",
						name: "DashboardYoungPolicyUpdate",
						component: () => import("@/views/Admin/PressCenter/YouthPolicy/Update")
					},
					{
						path: "list/read/:id",
						name: "DashboardYoungPolicyRead",
						component: () => import("@/views/Admin/PressCenter/YouthPolicy/Read")
					},
					{
						path: "list/create",
						name: "DashboardYoungPolicyCreate",
						component: () => import("@/views/Admin/PressCenter/YouthPolicy/Create")
					}
				]
			},

			// Financial literacy
			{
				path: "financial-literacy",
				name: "FinancialLiteracy",
				component: () => import("@/views/Admin/PressCenter/FinancialLiteracy"),
				redirect: { name: "FinancialLiteracyList" },
				children: [
					{
						path: "list",
						name: "FinancialLiteracyList",
						component: () => import("@/views/Admin/PressCenter/FinancialLiteracy/List")
					},
					{
						path: "list/update/:id",
						name: "FinancialLiteracyUpdate",
						component: () => import("@/views/Admin/PressCenter/FinancialLiteracy/Update")
					},
					{
						path: "list/read/:id",
						name: "FinancialLiteracyRead",
						component: () => import("@/views/Admin/PressCenter/FinancialLiteracy/Read")
					},
					{
						path: "list/create",
						name: "FinancialLiteracyCreate",
						component: () => import("@/views/Admin/PressCenter/FinancialLiteracy/Create")
					}
				]
			},

			// Tenders
			{
				path: "tenders",
				name: "DashboardTenders",
				component: () => import("@/views/Admin/PressCenter/Tenders"),
				redirect: { name: "DashboardTendersList" },
				children: [
					{
						path: "list",
						name: "DashboardTendersList",
						component: () => import("@/views/Admin/PressCenter/Tenders/List")
					},
					{
						path: "list/update/:id",
						name: "DashboardTendersUpdate",
						component: () => import("@/views/Admin/PressCenter/Tenders/Update")
					},
					{
						path: "list/read/:id",
						name: "DashboardTendersRead",
						component: () => import("@/views/Admin/PressCenter/Tenders/Read")
					},
					{
						path: "list/create",
						name: "DashboardTendersCreate",
						component: () => import("@/views/Admin/PressCenter/Tenders/Create")
					}
				]
			},

			// Useful links
			{
				path: "useful-links",
				name: "DashboardUsefulLinks",
				component: () => import("@/views/Admin/PressCenter/UsefulLinks"),
				redirect: { name: "DashboardUsefulLinksList" },
				children: [
					{
						path: "list",
						name: "DashboardUsefulLinksList",
						component: () => import("@/views/Admin/PressCenter/UsefulLinks/List")
					},
					{
						path: "list/update/:id",
						name: "DashboardUsefulLinksUpdate",
						component: () => import("@/views/Admin/PressCenter/UsefulLinks/Update")
					},
					{
						path: "list/read/:id",
						name: "DashboardUsefulLinksRead",
						component: () => import("@/views/Admin/PressCenter/UsefulLinks/Read")
					},
					{
						path: "list/create",
						name: "DashboardUsefulLinksCreate",
						component: () => import("@/views/Admin/PressCenter/UsefulLinks/Create")
					}
				]
			},

			// Videos
			{
				path: "videos",
				name: "DashboardVideos",
				component: () => import("@/views/Admin/PressCenter/Videos"),
				redirect: { name: "DashboardVideosList" },
				children: [
					{
						path: "list",
						name: "DashboardVideosList",
						component: () => import("@/views/Admin/PressCenter/Videos/List")
					},
					{
						path: "list/update/:id",
						name: "DashboardVideosUpdate",
						component: () => import("@/views/Admin/PressCenter/Videos/Update")
					},
					{
						path: "list/read/:id",
						name: "DashboardVideosRead",
						component: () => import("@/views/Admin/PressCenter/Videos/Read")
					},
					{
						path: "list/create",
						name: "DashboardVideosCreate",
						component: () => import("@/views/Admin/PressCenter/Videos/Create")
					}
				]
			},

			// Photos
			{
				path: "photos",
				name: "DashboardPhotos",
				component: () => import("@/views/Admin/PressCenter/Photos"),
				redirect: { name: "DashboardPhotosList" },
				children: [
					{
						path: "list",
						name: "DashboardPhotosList",
						component: () => import("@/views/Admin/PressCenter/Photos/List")
					},
					{
						path: "list/update/:id",
						name: "DashboardPhotosUpdate",
						component: () => import("@/views/Admin/PressCenter/Photos/Update")
					},
					{
						path: "list/read/:id",
						name: "DashboardPhotosRead",
						component: () => import("@/views/Admin/PressCenter/Photos/Read")
					},
					{
						path: "list/create",
						name: "DashboardPhotosCreate",
						component: () => import("@/views/Admin/PressCenter/Photos/Create")
					}
				]
			},

			// Category
			{
				path: "category",
				name: "DashboardCategory",
				component: () => import("@/views/Admin/PressCenter/Category"),
				children: [
					{
						path: "list",
						name: "DashboardCategoryList",
						component: () => import("@/views/Admin/PressCenter/Category/List")
					},
					{
						path: "list/update/:id",
						name: "DashboardCategoryUpdate",
						component: () => import("@/views/Admin/PressCenter/Category/Update")
					},
					{
						path: "list/read/:id",
						name: "DashboardCategoryRead",
						component: () => import("@/views/Admin/PressCenter/Category/Read")
					},
					{
						path: "list/create",
						name: "DashboardCategoryCreate",
						component: () => import("@/views/Admin/PressCenter/Category/Create")
					}
				]
			}
		]
	}
];

export default PressCenter;
