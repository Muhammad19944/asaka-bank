const PrivateClients = [
	// Cards
	{
		path: "private-client-cards",
		name: "PrivateClientsCards",
		redirect: { name: "PrivateClientsCardsList" },
		component: () => import("@/views/Admin/PrivateClients/Cards"),
		children: [
			// Card
			{
				path: "cards-list",
				name: "PrivateClientsCardsList",
				component: () => import("@/views/Admin/PrivateClients/Cards/Card/List")
			},
			{
				path: "cards-list/read/:id",
				name: "PrivateClientsCardsRead",
				component: () => import("@/views/Admin/PrivateClients/Cards/Card/Read")
			},
			{
				path: "cards-list/update/:id",
				name: "PrivateClientsCardsUpdate",
				component: () => import("@/views/Admin/PrivateClients/Cards/Card/Update")
			},
			{
				path: "cards-list/create",
				name: "PrivateClientsCardsCreate",
				component: () => import("@/views/Admin/PrivateClients/Cards/Card/Create")
			},

			// Cards Application
			{
				path: "applications-list",
				name: "PrivateClientsCardsApplicationsList",
				component: () => import("@/views/Admin/PrivateClients/Cards/Applications/List")
			},
			{
				path: "applications-list/update/:id",
				name: "PrivateClientsCardsApplicationsUpdate",
				component: () => import("@/views/Admin/PrivateClients/Cards/Applications/Update")
			},
			{
				path: "applications-list/read/:id",
				name: "PrivateClientsCardsApplicationsRead",
				component: () => import("@/views/Admin/PrivateClients/Cards/Applications/Read")
			}
		]
	},

	// Credits
	{
		path: "private-client-credits",
		name: "PrivateClientCredits",
		component: () => import("@/views/Admin/PrivateClients/Credits"),
		redirect: { name: "PrivateClientsCreditsList" },
		children: [
			// Credit
			{
				path: "credit-list",
				name: "PrivateClientsCreditsList",
				component: () => import("@/views/Admin/PrivateClients/Credits/Credit/List")
			},
			{
				path: "credit-list/update/:id",
				name: "PrivateClientsCreditsUpdate",
				component: () => import("@/views/Admin/PrivateClients/Credits/Credit/Update")
			},
			{
				path: "credit-list/read/:id",
				name: "PrivateClientsCreditsRead",
				component: () => import("@/views/Admin/PrivateClients/Credits/Credit/Read")
			},
			{
				path: "credit-list/create",
				name: "PrivateClientsCreditsCreate",
				component: () => import("@/views/Admin/PrivateClients/Credits/Credit/Create")
			},

			// Credit Application
			{
				path: "applications-list",
				name: "PrivateClientsCreditApplicationsList",
				component: () => import("@/views/Admin/PrivateClients/Credits/Applications/List")
			},
			{
				path: "applications-list/update/:id",
				name: "PrivateClientsCreditApplicationsUpdate",
				component: () => import("@/views/Admin/PrivateClients/Credits/Applications/Update")
			},
			{
				path: "applications-list/read/:id",
				name: "PrivateClientsCreditApplicationsRead",
				component: () => import("@/views/Admin/PrivateClients/Credits/Applications/Read")
			}
		]
	},

	// Deposits
	{
		path: "private-client-deposits",
		name: "PrivateClientDeposits",
		component: () => import("@/views/Admin/PrivateClients/Deposits"),
		redirect: { name: "PrivateClientsDepositsList" },
		children: [
			// Deposit
			{
				path: "deposit-list",
				name: "PrivateClientsDepositsList",
				component: () => import("@/views/Admin/PrivateClients/Deposits/Deposit/List")
			},
			{
				path: "deposit-list/update/:id",
				name: "PrivateClientsDepositsUpdate",
				component: () => import("@/views/Admin/PrivateClients/Deposits/Deposit/Update")
			},
			{
				path: "deposit-list/read/:id",
				name: "PrivateClientsDepositsRead",
				component: () => import("@/views/Admin/PrivateClients/Deposits/Deposit/Read")
			},
			{
				path: "deposit-list/create",
				name: "PrivateClientsDepositsCreate",
				component: () => import("@/views/Admin/PrivateClients/Deposits/Deposit/Create")
			},

			// Deposit Application
			{
				path: "applications-list",
				name: "PrivateClientsDepositsApplicationsList",
				component: () => import("../../../../views/Admin/PrivateClients/Deposits/Applications/List")
			},
			{
				path: "applications-list/update/:id",
				name: "PrivateClientsDepositsApplicationsUpdate",
				component: () => import("../../../../views/Admin/PrivateClients/Deposits/Applications/Update")
			},
			{
				path: "applications-list/read/:id",
				name: "PrivateClientsDepositsApplicationsRead",
				component: () => import("../../../../views/Admin/PrivateClients/Deposits/Applications/Read")
			},

			// Deposit Boxes
			{
				path: "deposit-box-view",
				name: "DashboardDepositsBoxView",
				component: () => import("@/views/Admin/PrivateClients/Deposits/DepositBoxView/List")
			},
			{
				path: "deposit-box-view/update/:id",
				name: "DashboardDepositsBoxViewUpdate",
				component: () => import("@/views/Admin/PrivateClients/Deposits/DepositBoxView/Update")
			},
			{
				path: "deposit-box-view/read/:id",
				name: "DashboardDepositsBoxViewRead",
				component: () => import("@/views/Admin/PrivateClients/Deposits/DepositBoxView/Read")
			},
			{
				path: "deposit-box-view/create",
				name: "DashboardDepositsBoxViewCreate",
				component: () => import("@/views/Admin/PrivateClients/Deposits/DepositBoxView/Create")
			},

			// Deposit Boxes
			{
				path: "deposit-boxes-list",
				name: "DashboardDepositsBoxesList",
				component: () => import("@/views/Admin/PrivateClients/Deposits/DepositBoxes/List")
			},
			{
				path: "deposit-boxes-list/update/:id",
				name: "DashboardDepositsBoxesUpdate",
				component: () => import("@/views/Admin/PrivateClients/Deposits/DepositBoxes/Update")
			},
			{
				path: "deposit-boxes-list/read/:id",
				name: "DashboardDepositsBoxesRead",
				component: () => import("@/views/Admin/PrivateClients/Deposits/DepositBoxes/Read")
			},
			{
				path: "deposit-boxes-list/create",
				name: "DashboardDepositsBoxesCreate",
				component: () => import("@/views/Admin/PrivateClients/Deposits/DepositBoxes/Create")
			}
		]
	},

	// Money Transfer
	{
		path: "private-client-transfer",
		name: "PrivateClientTransfer",
		component: () => import("@/views/Admin/PrivateClients/MoneyTransfers"),
		redirect: { name: "DashboardMoneyTransfersList" },
		children: [
			// Money Transactions
			{
				path: "transfer-list",
				name: "DashboardMoneyTransfersList",
				component: () => import("@/views/Admin/PrivateClients/MoneyTransfers/Transfer/List")
			},
			{
				path: "transfer-list/update/:id",
				name: "DashboardMoneyTransfersUpdate",
				component: () => import("@/views/Admin/PrivateClients/MoneyTransfers/Transfer/Update")
			},
			{
				path: "transfer-list/read/:id",
				name: "DashboardMoneyTransfersRead",
				component: () => import("@/views/Admin/PrivateClients/MoneyTransfers/Transfer/Read")
			},
			{
				path: "transfer-list/create",
				name: "DashboardMoneyTransfersCreate",
				component: () => import("@/views/Admin/PrivateClients/MoneyTransfers/Transfer/Create")
			}
		]
	}
];

export default PrivateClients;
