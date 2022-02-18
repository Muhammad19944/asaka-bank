const AdminCorporateClients = [
	// Cards
	{
		path: "corporate-cards",
		name: "AdminCorporateCards",
		component: () => import("@/views/Admin/CorporateClients/Cards"),
		redirect: { name: "AdminCorporateCardsList" },
		children: [
			{
				path: "cards-list",
				name: "AdminCorporateCardsList",
				component: () => import("@/views/Admin/CorporateClients/Cards/Card/List")
			},
			{
				path: "cards-list/read/:id",
				name: "AdminCorporateCardsRead",
				component: () => import("@/views/Admin/CorporateClients/Cards/Card/Read")
			},
			{
				path: "cards-list/update/:id",
				name: "AdminCorporateCardsUpdate",
				component: () => import("@/views/Admin/CorporateClients/Cards/Card/Update")
			},
			{
				path: "cards-list/create",
				name: "AdminCorporateCardsCreate",
				component: () => import("@/views/Admin/CorporateClients/Cards/Card/Create")
			},

			// Application List
			{
				path: "applications-list",
				name: "AdminCorporateApplicationsList",
				component: () => import("@/views/Admin/CorporateClients/Cards/Applications/List")
			},
			{
				path: "applications-list/update/:id",
				name: "AdminCorporateApplicationsUpdate",
				component: () => import("@/views/Admin/CorporateClients/Cards/Applications/Update")
			},
			{
				path: "applications-list/read/:id",
				name: "AdminCorporateApplicationsRead",
				component: () => import("@/views/Admin/CorporateClients/Cards/Applications/Read")
			}
		]
	},

	// Credits
	{
		path: "corporate-credits",
		name: "AdminCorporateCredits",
		component: () => import("@/views/Admin/CorporateClients/Credits"),
		redirect: { name: "AdminCorporateCreditsList" },
		children: [
			{
				path: "credit-list",
				name: "AdminCorporateCreditsList",
				component: () => import("@/views/Admin/CorporateClients/Credits/Credit/List")
			},
			{
				path: "credit-list/update/:id",
				name: "AdminCorporateCreditsUpdate",
				component: () => import("@/views/Admin/CorporateClients/Credits/Credit/Update")
			},
			{
				path: "credit-list/read/:id",
				name: "AdminCorporateCreditsRead",
				component: () => import("@/views/Admin/CorporateClients/Credits/Credit/Read")
			},
			{
				path: "credit-list/create",
				name: "AdminCorporateCreditsCreate",
				component: () => import("@/views/Admin/CorporateClients/Credits/Credit/Create")
			}
		]
	}
]

export default AdminCorporateClients
