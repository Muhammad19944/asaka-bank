const Feedback = [
	// Appeal
	{
		path: "appeal",
		name: "FeedbackAppeal",
		component: () => import("@/views/Admin/Feedback/Appeal"),
		children: [
			{
				path: "list",
				name: "FeedbackAppealList",
				component: () => import("@/views/Admin/Feedback/Appeal/List")
			},
			{
				path: "list/read/:id",
				name: "FeedbackAppealRead",
				component: () => import("@/views/Admin/Feedback/Appeal/Read")
			}
		]
	},

	// Compliance
	{
		path: "compliance",
		name: "FeedbackCompliance",
		component: () => import("@/views/Admin/Feedback/Compliances"),
		children: [
			{
				path: "list",
				name: "FeedbackComplianceList",
				component: () => import("@/views/Admin/Feedback/Compliances/List")
			},
			{
				path: "list/read/:id",
				name: "FeedbackComplianceRead",
				component: () => import("@/views/Admin/Feedback/Compliances/Read")
			}
		]
	}
];

export default Feedback;
