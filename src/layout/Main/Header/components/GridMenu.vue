<template>
	<div class="grid-menu-wrap">
		<div class="header-grid-menu">
			<menu-icon @click="show" v-if="!getGridMenuVisible" size="1.2x" class="primary-text d-block pointer"></menu-icon>

			<x-icon @click="close" v-else size="1.2x" class="primary-text d-block pointer"></x-icon>
		</div>

		<transition name="fade">
			<div
				v-if="getGridMenuVisible"
				class="grid-menu-content p-fixed w-100"
				style="top: 127px"
				:style="getHeaderAppDownloadVisible ? {'paddingTop': '110px !important'} : {'paddingTop': '40px !important'}"
			>
				<template v-if="initialPathName === 'physical-persons'">
					<physical-person-grid-menu />
				</template>

				<template v-if="initialPathName === 'small-business'">
					<small-business-mobile-menu />
				</template>

				<template v-if="initialPathName === 'corporate-customers'">
					<corporate-customers-mobile-menu />
				</template>

				<template v-if="initialPathName === 'about-bank'">
					<about-bank-mobile-menu />
				</template>

				<template v-if="initialPathName === 'press-center'">
					<press-center-mobile-menu />
				</template>

				<template v-if="initialPathName === 'investors'">
					<investors-mobile-menu />
				</template>
			</div>
		</transition>
	</div>
</template>

<script>
import PhysicalPersonGridMenu from "./PhysicalPersonGridMenu";
import SmallBusinessMobileMenu from "./SmallBusinessMobileMenu";
import CorporateCustomersMobileMenu from "./CorporateCustomersMobileMenu";
import AboutBankMobileMenu from "./AboutBankMobileMenu";
import PressCenterMobileMenu from "./PressCenterMobileMenu";
import InvestorsMobileMenu from "./InvestorsMobileMenu";

import { MenuIcon, XIcon } from "vue-feather-icons";
import { mapGetters, mapMutations } from "vuex";
import I18nVue from "@/I18nVue";

export default {
	name: "GridMenu",
	components: {
		PhysicalPersonGridMenu,
		SmallBusinessMobileMenu,
		CorporateCustomersMobileMenu,
		AboutBankMobileMenu,
		PressCenterMobileMenu,
		InvestorsMobileMenu,
		I18nVue,
		MenuIcon,
		XIcon
	},
	data() {
		return {
			gridMenuShow: false,
			initialPathName: "physical-persons",
			isMobile: false
		};
	},
	computed: {
		...mapGetters({
			getGridMenuVisible: "getGridMenuVisible",
			getHeaderAppDownloadVisible: "getHeaderAppDownloadVisible"
		})
	},
	watch: {
		$route(to) {
			this.initialPathName = to.path.split("/")[1];
		}
	},
	mounted() {
		this.initialPathName = this.$route.path.split("/")[1];
	},
	methods: {
		...mapMutations({
			TOGGLE_GRID_MENU: "TOGGLE_GRID_MENU"
		}),

		show() {
			this.TOGGLE_GRID_MENU(true)

			document.querySelector("html").classList.add("active");
		},
		close() {
			this.TOGGLE_GRID_MENU(false)

			document.querySelector("html").classList.remove("active");
		}
	}
};
</script>

<style>
.grid-menu-content {
	left: 0;
	bottom: 0;
	/*height: calc(100vh - 62px);*/
	background: #fff;
	z-index: 1;
	padding: 100px 115px 30px;
	overflow-y: auto;
}

html.active {
	overflow: hidden !important;
}
</style>
