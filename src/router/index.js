import Vue from "vue";
import VueRouter from "vue-router";
import { token } from '@/services/TokenService';

import PhysicalPersons from "./modules/PhysicalPersons";
import CorporateCustomers from "./modules/CorporateCustomers";
import ShareholderAndInvestor from "./modules/ShareholderAndInverstor";
import AboutBank from "./modules/AboutBank";
import SmallBusiness from "./modules/SmallBusiness";
import PressCenterClient from "./modules/PressCenter";
import Auth from "./modules/Auth";
import Admin from "./modules/Admin";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "main",
		component: () => import("@/layout/Main"),
		redirect: { name: "PhysicalPersons" },
		alias: ['/uz', '/ru', '/en'],
		meta: {
			private: false,
		},
		children: [
			...PhysicalPersons,
			...CorporateCustomers,
			...ShareholderAndInvestor,
			...AboutBank,
			...SmallBusiness,
			...PressCenterClient,
			...Auth
		]
	},
	...Admin,
	{ path: "*", name: "404", component: () => import("@/views/Main/StaticPages/NotFound") }
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
	scrollBehavior: () => ({ y: 0 })
});

router.beforeEach((to, from, next) => {
	let hasToken = !!token.get();
	let isPrivate = to.matched[0].meta.private

	if (hasToken && isPrivate) {
		// console.log('has token and come into admin')
		return next()
	}

	if (!hasToken && isPrivate) {
		// console.log('no token and come into admin')
		return next({ name: 'Login' });
	}

	return next();
});

export default router;
