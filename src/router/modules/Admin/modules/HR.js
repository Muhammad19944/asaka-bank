const HR = [
	//	Application List
	{
		path: "hr-applications",
		name: "AdminHRApplications",
		component: () => import("@/views/Admin/HR/Applications/List")
	},
	{
		path: "hr-applications/:id",
		name: "AdminHRApplicationsRead",
		component: () => import("@/views/Admin/HR/Applications/Read")
	},
	// End Application List
]

export default HR;
