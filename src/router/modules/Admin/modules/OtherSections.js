const OtherSections = [
	{
		path: "other-sections",
		name: "OtherSections",
		component: () => import("@/views/Admin/OtherSections"),
		children: [
			// Category
			{
				path: "category-list",
				name: "OtherSectionCategoryList",
				component: () => import("@/views/Admin/OtherSections/Categories/List")
			},
			{
				path: "category-list/update/:id",
				name: "OtherSectionCategoryUpdate",
				component: () => import("@/views/Admin/OtherSections/Categories/Update")
			},
			{
				path: "category-list/read/:id",
				name: "OtherSectionCategoryRead",
				component: () => import("@/views/Admin/OtherSections/Categories/Read")
			},
			{
				path: "category-list/create",
				name: "OtherSectionCategoryCreate",
				component: () => import("@/views/Admin/OtherSections/Categories/Create")
			},

			// Country
			{
				path: "country-list",
				name: "OtherSectionCountryList",
				component: () => import("@/views/Admin/OtherSections/Country/List")
			},
			{
				path: "country-list/update/:id",
				name: "OtherSectionCountryUpdate",
				component: () => import("@/views/Admin/OtherSections/Country/Update")
			},
			{
				path: "country-list/read/:id",
				name: "OtherSectionCountryRead",
				component: () => import("@/views/Admin/OtherSections/Country/Read")
			},
			{
				path: "country-list/create",
				name: "OtherSectionCountryCreate",
				component: () => import("@/views/Admin/OtherSections/Country/Create")
			},

			// District
			{
				path: "district-list",
				name: "OtherSectionDistrictList",
				component: () => import("@/views/Admin/OtherSections/District/List")
			},
			{
				path: "district-list/update/:id",
				name: "OtherSectionDistrictUpdate",
				component: () => import("@/views/Admin/OtherSections/District/Update")
			},
			{
				path: "district-list/read/:id",
				name: "OtherSectionDistrictRead",
				component: () => import("@/views/Admin/OtherSections/District/Read")
			},
			{
				path: "district-list/create",
				name: "OtherSectionDistrictCreate",
				component: () => import("@/views/Admin/OtherSections/District/Create")
			},

			// Branches
			{
				path: "branches",
				name: "OtherSectionBranchesList",
				component: () => import("@/views/Admin/OtherSections/Branches/List")
			},
			{
				path: "branches/update/:id",
				name: "OtherSectionBranchesUpdate",
				component: () => import("@/views/Admin/OtherSections/Branches/Update")
			},
			{
				path: "branches/read/:id",
				name: "OtherSectionBranchesRead",
				component: () => import("@/views/Admin/OtherSections/Branches/Read")
			},
			{
				path: "branches/create",
				name: "OtherSectionBranchesCreate",
				component: () => import("@/views/Admin/OtherSections/Branches/Create")
			},

			// Online Polls
			{
				path: "polls",
				name: "OtherSectionPollsList",
				component: () => import("@/views/Admin/OtherSections/OnlinePolls/List")
			},
			{
				path: "polls/read/:id",
				name: "OtherSectionPollsRead",
				component: () => import("@/views/Admin/OtherSections/OnlinePolls/Read")
			},
			{
				path: "polls/update/:id",
				name: "OtherSectionPollsUpdate",
				component: () => import("@/views/Admin/OtherSections/OnlinePolls/Update")
			},
			{
				path: "polls/create",
				name: "OtherSectionPollsCreate",
				component: () => import("@/views/Admin/OtherSections/OnlinePolls/Create")
			},

			// Documents
			{
				path: "documents-list",
				name: "OtherSectionDocumentsList",
				component: () => import("@/views/Admin/OtherSections/Documents/Documents/List")
			},
			{
				path: "documents-list/read/:id",
				name: "OtherSectionDocumentsRead",
				component: () => import("@/views/Admin/OtherSections/Documents/Documents/Read")
			},
			{
				path: "documents-list/update/:id",
				name: "OtherSectionDocumentsUpdate",
				component: () => import("@/views/Admin/OtherSections/Documents/Documents/Update")
			},
			{
				path: "documents-list/create",
				name: "OtherSectionDocumentsCreate",
				component: () => import("@/views/Admin/OtherSections/Documents/Documents/Create")
			},

			// Annual Documents
			{
				path: "annual-documents",
				name: "OtherSectionAnnualDocumentsList",
				component: () => import("@/views/Admin/OtherSections/Documents/AnnualDocuments/List")
			},
			{
				path: "annual-documents/read/:id",
				name: "OtherSectionAnnualDocumentsRead",
				component: () => import("@/views/Admin/OtherSections/Documents/AnnualDocuments/Read")
			},
			{
				path: "annual-documents/update/:id",
				name: "OtherSectionAnnualDocumentsUpdate",
				component: () => import("@/views/Admin/OtherSections/Documents/AnnualDocuments/Update")
			},
			{
				path: "annual-documents/create",
				name: "OtherSectionAnnualDocumentsCreate",
				component: () => import("@/views/Admin/OtherSections/Documents/AnnualDocuments/Create")
			},

			// Important Facts
			{
				path: "important-facts",
				name: "OtherSectionImportantFactsList",
				component: () => import("@/views/Admin/OtherSections/Documents/ImportantFacts/List")
			},
			{
				path: "important-facts/read/:id",
				name: "OtherSectionImportantFactsRead",
				component: () => import("@/views/Admin/OtherSections/Documents/ImportantFacts/Read")
			},
			{
				path: "important-facts/update/:id",
				name: "OtherSectionImportantFactsUpdate",
				component: () => import("@/views/Admin/OtherSections/Documents/ImportantFacts/Update")
			},
			{
				path: "important-facts/create",
				name: "OtherSectionImportantFactsCreate",
				component: () => import("@/views/Admin/OtherSections/Documents/ImportantFacts/Create")
			},

			//Open Information
			{
				path: "open-information",
				name: "OtherSectionOpenInformationList",
				component: () => import("@/views/Admin/OtherSections/Documents/OpenInformation/List")
			},
			{
				path: "open-information/read/:id",
				name: "OtherSectionOpenInformationRead",
				component: () => import("@/views/Admin/OtherSections/Documents/OpenInformation/Read")
			},
			{
				path: "open-information/update/:id",
				name: "OtherSectionOpenInformationUpdate",
				component: () => import("@/views/Admin/OtherSections/Documents/OpenInformation/Update")
			},
			{
				path: "open-information/create",
				name: "OtherSectionOpenInformationCreate",
				component: () => import("@/views/Admin/OtherSections/Documents/OpenInformation/Create")
			},

			// Users
			{
				path: "users",
				name: "OtherSectionUsersList",
				component: () => import("@/views/Admin/OtherSections/Users/User/List")
			},
			{
				path: "users/read/:id",
				name: "OtherSectionUsersRead",
				component: () => import("@/views/Admin/OtherSections/Users/User/Read")
			},
			{
				path: "users/update/:id",
				name: "OtherSectionUsersUpdate",
				component: () => import("@/views/Admin/OtherSections/Users/User/Update")
			},
			{
				path: "users/password-update/:id",
				name: "OtherSectionUsersPasswordUpdate",
				component: () => import("@/views/Admin/OtherSections/Users/User/components/UpdatePassword")
			},
			{
				path: "users/create",
				name: "OtherSectionUsersCreate",
				component: () => import("@/views/Admin/OtherSections/Users/User/Create")
			},

			// Roles
			{
				path: "roles",
				name: "OtherSectionRolesList",
				component: () => import("@/views/Admin/OtherSections/Users/Roles/List")
			},
			{
				path: "roles/read/:id",
				name: "OtherSectionRolesRead",
				component: () => import("@/views/Admin/OtherSections/Users/Roles/Read")
			},
			{
				path: "roles/update/:id",
				name: "OtherSectionRolesUpdate",
				component: () => import("@/views/Admin/OtherSections/Users/Roles/Update")
			},
			{
				path: "roles/create",
				name: "OtherSectionRolesCreate",
				component: () => import("@/views/Admin/OtherSections/Users/User/Create")
			},

			// Slides
			{
				path: "slides",
				name: "OtherSectionSlidesList",
				component: () => import("@/views/Admin/OtherSections/Slides/List")
			},
			{
				path: "slides/create",
				name: "OtherSectionSlidesCreate",
				component: () => import("@/views/Admin/OtherSections/Slides/Create")
			}
		]
	}
];

export default OtherSections;
