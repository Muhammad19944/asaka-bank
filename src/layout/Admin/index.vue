<template>
	<div class="admin-main-layout">
		<the-sidebar ref="appSidebar" />

		<the-header @emit:up="toggleDrawer" />

		<v-main class="admin-main">
			<template v-if="getUser">
				<router-view class="admin-router-view d-flex flex-column p-relative pa-4 px-sm-7 py-sm-6" />
			</template>

			<TheFooter />
		</v-main>
	</div>
</template>

<script>
import "@/assets/css/dashboard.css";
import TheSidebar from "./Sidebar";
import TheHeader from "./Header";
import TheFooter from "./Footer";

import { mapGetters, mapActions } from "vuex"

export default {
	name: "Admin",
	components: {
		TheFooter,
		TheSidebar,
		TheHeader
	},
	computed: {
		...mapGetters({
			getUser: "getUser"
		}),
	},
	watch: {
		$route(to) {
			this.$store.state.CREATED_CARD_ID = null;

			this.$store.state.CREATED_DEPOSIT_ID = null;

			this.$store.state.CREATED_CREDIT_ID = null;

			this.$store.state.CREATED_TRANSFER_ID = null;

			this.$store.state.CREATE_POLLS_ID = null;

			this.$store.state.CREATED_STAFF_ID = null;

			this.$store.state.CREATED_ANNUAL_DOCUMENT_ID = null;

			this.$store.state.CREATED_IMPORTANT_FACTS_ID = null;

			this.$store.state.CREATED_STAFF_BIOGRAPHY_ID = null;

			this.$store.state.BIOGRAPHY_MODEL = {
        work_place_uz: "",
        work_place_ru: "",
        work_place_en: "",
        birth_year: "",
        birth_place_uz: "",
        birth_place_ru: "",
        birth_place_en: "",
        nationality_uz: "",
        nationality_ru: "",
        nationality_en: "",
        education_uz: "",
        education_ru: "",
        education_en: "",
        speciality_uz: "",
        speciality_ru: "",
        speciality_en: "",
        work_experience: "",
        current_position_held_year: "",
        structure: null
      };

			this.$store.state.isStaffBankManagement = "";
		}
	},
	created() {
		this.fetchStatusList();
		this.fetchBranchesList()
	},
	methods: {
		...mapActions({
			fetchStatusList: "fetchStatusList",
			fetchBranchesList: "fetchBranchesList"
		}),

		/*
		*
		* */
		toggleDrawer() {
			const { appSidebar } = this.$refs;

			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					return (appSidebar.drawerSettings.drawer = !appSidebar.drawerSettings.drawer);
				case "sm":
					return (appSidebar.drawerSettings.drawer = !appSidebar.drawerSettings.drawer);
				case "md":
					return (appSidebar.drawerSettings.drawer = !appSidebar.drawerSettings.drawer);
				case "lg":
					return (appSidebar.drawerSettings.mini = !appSidebar.drawerSettings.mini);
				case "xl":
					return (appSidebar.drawerSettings.mini = !appSidebar.drawerSettings.mini);
			}
		}
	}
};
</script>

<style>
.admin-main-layout {
	background: var(--theme-bg);
	min-height: 100vh;
}

.admin-main {
	min-height: 100vh;
}

.admin-main .v-main__wrap {
	display: flex;
	flex-direction: column;
}

.admin-router-view {
	height: calc(var(--vh, 1vh) * 100 - 123px);
	overflow-y: auto;
	overflow-x: hidden;
}
</style>
