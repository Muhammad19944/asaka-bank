const AboutBank = [
	{
		path: "about-bank",
		name: "DashboardAboutBank",
		component: () => import("@/views/Admin/AboutBank"),
		children: [
			// Shareholder
			{
				path: "shareholder",
				name: "DashboardShareholder",
				component: () => import("@/views/Admin/AboutBank/Shareholder"),
				redirect: { name: "DashboardShareholderList" },
				children: [
					{
						path: "list",
						name: "DashboardShareholderList",
						component: () => import("@/views/Admin/AboutBank/Shareholder/List")
					},
					{
						path: "list/read/:id",
						name: "DashboardShareholderRead",
						component: () => import("@/views/Admin/AboutBank/Shareholder/Read")
					},
					{
						path: "list/update/:id",
						name: "DashboardShareholderUpdate",
						component: () => import("@/views/Admin/AboutBank/Shareholder/Update")
					},
					{
						path: "list/create",
						name: "DashboardShareholderCreate",
						component: () => import("@/views/Admin/AboutBank/Shareholder/Create")
					}
				]
			},

			// Awards
			{
				path: 'awards',
				name: 'DashboardAwards',
				component: () => import('@/views/Admin/AboutBank/Awards'),
				redirect: { name: 'DashboardAwardsList' },
				children: [
					{
						path: "list",
						name: "DashboardAwardsList",
						component: () => import("@/views/Admin/AboutBank/Awards/List")
					},
					{
						path: "list/read/:id",
						name: "DashboardAwardsRead",
						component: () => import("@/views/Admin/AboutBank/Awards/Read")
					},
					{
						path: "list/update/:id",
						name: "DashboardAwardsUpdate",
						component: () => import("@/views/Admin/AboutBank/Awards/Update")
					},
					{
						path: "list/create",
						name: "DashboardAwardsCreate",
						component: () => import("@/views/Admin/AboutBank/Awards/Create")
					}
				]
			},

			// Careers
			{
				path: 'careers',
				name: 'DashboardCareers',
				component: () => import('@/views/Admin/AboutBank/Careers'),
				redirect: { name: 'DashboardCareersList' },
				children: [
					{
						path: "list",
						name: "DashboardCareersList",
						component: () => import("@/views/Admin/AboutBank/Careers/List")
					},
					{
						path: "list/read/:id",
						name: "DashboardCareersRead",
						component: () => import("@/views/Admin/AboutBank/Careers/Read")
					},
					{
						path: "list/update/:id",
						name: "DashboardCareersUpdate",
						component: () => import("@/views/Admin/AboutBank/Careers/Update")
					},
					{
						path: "list/create",
						name: "DashboardCareersCreate",
						component: () => import("@/views/Admin/AboutBank/Careers/Create")
					}
				]
			},

			// Structure
			{
				path: 'structure',
				name: 'DashboardStructure',
				component: () => import('@/views/Admin/AboutBank/Structure'),
				redirect: { name: 'DashboardCareersList' },
				children: [
					{
						path: "list",
						name: "DashboardStructureList",
						component: () => import("@/views/Admin/AboutBank/Structure/List")
					},
					{
						path: "list/read/:id",
						name: "DashboardStructureRead",
						component: () => import("@/views/Admin/AboutBank/Structure/Read")
					},
					{
						path: "list/update/:id",
						name: "DashboardStructureUpdate",
						component: () => import("@/views/Admin/AboutBank/Structure/Update")
					},
					{
						path: "list/create",
						name: "DashboardStructureCreate",
						component: () => import("@/views/Admin/AboutBank/Structure/Create")
					}
				]
			},

			// StructuralDivision
			{
				path: 'structure-division',
				name: 'StructureDivision',
				component: () => import('@/views/Admin/AboutBank/StructuralDivision'),
				redirect: { name: 'StructureDivisionList' },
				children: [
					{
						path: "list",
						name: "StructureDivisionList",
						component: () => import("@/views/Admin/AboutBank/StructuralDivision/List")
					},
					{
						path: "list/read/:id",
						name: "StructureDivisionRead",
						component: () => import("@/views/Admin/AboutBank/StructuralDivision/Read")
					},
					{
						path: "list/update/:id",
						name: "StructureDivisionUpdate",
						component: () => import("@/views/Admin/AboutBank/StructuralDivision/Update")
					},
					{
						path: "list/create",
						name: "StructureDivisionCreate",
						component: () => import("@/views/Admin/AboutBank/StructuralDivision/Create")
					}
				]
			},
			{
				path: 'public-offer',
				name: 'PublicOffers',
				component: () => import('@/views/Admin/AboutBank/PublicOffer'),
				redirect: { name: 'PublicOffersList' },
				children: [
					{
						path: "list",
						name: "PublicOffersList",
						component: () => import("@/views/Admin/AboutBank/PublicOffer/List")
					},
					{
						path: "list/read/:id",
						name: "PublicOffersRead",
						component: () => import("@/views/Admin/AboutBank/PublicOffer/Read")
					},
					{
						path: "list/update/:id",
						name: "PublicOffersUpdate",
						component: () => import("@/views/Admin/AboutBank/PublicOffer/Update")
					},
					{
						path: "list/create",
						name: "PublicOffersCreate",
						component: () => import("@/views/Admin/AboutBank/PublicOffer/Create")
					}
				]
			}
		]
	}
];

export default AboutBank;
