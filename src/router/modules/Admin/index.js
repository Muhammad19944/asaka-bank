import PrivateClients from "./modules/PrivateClients";
import AdminSmallBusiness from "./modules/SmallBusiness";
import AdminCorporateClients from './modules/CorporateClients'
import AboutBank from "./modules/AboutBank";
import PressCenter from "./modules/PressCenter";
import Feedback from "./modules/Feedback";
import OtherSections from "./modules/OtherSections";
import UserCabinet from "./modules/UserCabinet";
import HR from "./modules/HR"

const admin = [
	{
		path: "/admin",
		name: "Admin",
		component: () => import("@/layout/Admin"),
		meta: {
			private: true,
		},
		children: [
			...PrivateClients,
			...AdminSmallBusiness,
			...AdminCorporateClients,
			...AboutBank,
			...PressCenter,
			...Feedback,
			...OtherSections,
			...UserCabinet,
			...HR
		]
	}
];

export default admin;
