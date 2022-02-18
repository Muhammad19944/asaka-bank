const AdminSmallBusiness = [
	// Cards
	{
		path: "business-cards",
		name: "AdminSmallBusinessCards",
		component: () => import("@/views/Admin/SmallBusiness/Cards"),
		redirect: { name: "AdminSmallBusinessCardsList" },
		children: [
			{
				path: "cards-list",
				name: "AdminSmallBusinessCardsList",
				component: () => import("@/views/Admin/SmallBusiness/Cards/Card/List")
			},
			{
				path: "cards-list/read/:id",
				name: "AdminSmallBusinessCardsRead",
				component: () => import("@/views/Admin/SmallBusiness/Cards/Card/Read")
			},
			{
				path: "cards-list/update/:id",
				name: "AdminSmallBusinessCardsUpdate",
				component: () => import("@/views/Admin/SmallBusiness/Cards/Card/Update")
			},
			{
				path: "cards-list/create",
				name: "AdminSmallBusinessCardsListCreate",
				component: () => import("@/views/Admin/SmallBusiness/Cards/Card/Create")
			},

			// Card Applications
			{
				path: "applications-list",
				name: "AdminSmallBusinessCarsApplicationsList",
				component: () => import("@/views/Admin/SmallBusiness/Cards/Applications/List")
			},
			{
				path: "applications-list/update/:id",
				name: "AdminSmallBusinessCarsApplicationsUpdate",
				component: () => import("@/views/Admin/SmallBusiness/Cards/Applications/Update")
			},
			{
				path: "applications-list/read/:id",
				name: "AdminSmallBusinessCarsApplicationsRead",
				component: () => import("@/views/Admin/SmallBusiness/Cards/Applications/Read")
			}
		]
	},

	// Credits
	{
		path: "business-credits",
		name: "AdminSmallBusinessCredits",
		component: () => import("@/views/Admin/SmallBusiness/Credits"),
		redirect: { name: "AdminSmallBusinessCreditsList" },
		children: [
			{
				path: "credit-list",
				name: "AdminSmallBusinessCreditsList",
				component: () => import("@/views/Admin/SmallBusiness/Credits/Credit/List")
			},
			{
				path: "credit-list/update/:id",
				name: "AdminSmallBusinessCreditsUpdate",
				component: () => import("@/views/Admin/SmallBusiness/Credits/Credit/Update")
			},
			{
				path: "credit-list/read/:id",
				name: "AdminSmallBusinessCreditsRead",
				component: () => import("@/views/Admin/SmallBusiness/Credits/Credit/Read")
			},
			{
				path: "credit-list/create",
				name: "AdminSmallBusinessCreditsCreate",
				component: () => import("@/views/Admin/SmallBusiness/Credits/Credit/Create")
			},
			// {
			// 	path: "applications-list",
			// 	name: "AdminSmallBusinessCreditsApplicationsList",
			// 	component: () => import("@/views/Admin/SmallBusiness/Credits/Applications/List")
			// },
			// {
			// 	path: "applications-list/update/:id",
			// 	name: "AdminSmallBusinessCreditsApplicationsUpdate",
			// 	component: () => import("@/views/Admin/SmallBusiness/Credits/Applications/Update")
			// },
			// {
			// 	path: "applications-list/read/:id",
			// 	name: "AdminSmallBusinessCreditsApplicationsRead",
			// 	component: () => import("@/views/Admin/SmallBusiness/Credits/Applications/Read")
			// }
		]
	},

	//Financing
	{
		path: "small-business-financing",
		name: "AdminSmallBusinessFinancing",
		component: () => import("@/views/Admin/SmallBusiness/Financing"),
		redirect: { name: "AdminSmallBusinessFinancingList" },
		children: [
			{
				path: "financing-list",
				name: "AdminSmallBusinessFinancingList",
				component: () => import("@/views/Admin/SmallBusiness/Financing/Finance/List")
			},
			{
				path: "financing-list/update/:id",
				name: "AdminSmallBusinessFinancingUpdate",
				component: () => import("@/views/Admin/SmallBusiness/Financing/Finance/Update")
			},
			{
				path: "financing-list/read/:id",
				name: "AdminSmallBusinessFinancingRead",
				component: () => import("@/views/Admin/SmallBusiness/Financing/Finance/Read")
			},
			{
				path: "financing-list/create",
				name: "AdminSmallBusinessFinancingCreate",
				component: () => import("@/views/Admin/SmallBusiness/Financing/Finance/Create")
			}
		]
	},

	// Applications
	{
		path: "small-business-applications",
		name: "SmallBusinessApplications",
		component: () => import("@/views/Admin/SmallBusiness/Applications/List")
	},
	{
		path: "small-business-applications/:id",
		name: "SmallBusinessApplicationsID",
		component: () => import("@/views/Admin/SmallBusiness/Applications/components/ApplicationForm")
	}
]

export default AdminSmallBusiness
