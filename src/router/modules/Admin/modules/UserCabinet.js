const AdminUserCabinet = [
	//	Application List
	{
		path: "admin-user-applications",
		name: "AdminUserApplications",
		component: () => import("@/views/Admin/UserCabinet/Applications/List")
	},
	{
		path: "admin-user-applications/:id",
		name: "AdminUserApplicationsID",
		component: () => import("@/views/Admin/UserCabinet/Applications/Read")
	},
	{
		path: "admin-user-applications/create",
		name: "AdminUserApplicationsCreate",
		component: () => import("@/views/Admin/UserCabinet/Applications/Create")
	},
	// End Application List
]

export default AdminUserCabinet
