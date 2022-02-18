<template>
	<v-app>
		<router-view />

		<notifications group="simple" position="top right" :duration="5000" />

		<voice-speech />

		<error-text-modal />

		<transition name="fade">
			<template v-if="false">
				<app-small-business-credit-table-generate />
			</template>
		</transition>
	</v-app>
</template>

<script async>
import VoiceSpeech from "./components/VoiceSpeech";
import ErrorTextModal from "./components/ErrorTextModal";
import { setVH } from "@/utils/frontend";
import { actionTypes } from "@/store/modules/auth";
import { token } from "@/services/TokenService";
import { mapMutations } from "vuex"
import AppSmallBusinessCreditTableGenerate from "./components/AppSmallBusinessCreditTableGenerate";

export default {
	name: "App",
	metaInfo: {
		title: 'Asakabank',
	},
	components: {
		AppSmallBusinessCreditTableGenerate,
		VoiceSpeech,
		ErrorTextModal
	},
	watch: {
		$route: {
			handler(to) {
				// document.title = to.meta.title ? to.meta.title() : "Asaka Bank";
				this.$store.dispatch('actionRouteUrl', to.fullPath)

				this.$store.state.MENU_DROPDOWN = false
				this.TOGGLE_GRID_MENU(false)
				document.querySelector("html").classList.remove("active");
			},
			immediate: true
		}
	},
	created() {
		const locale = localStorage.getItem("locale") || "uz";
		document.documentElement.setAttribute("lang", locale);
		if (locale) {
			this.$i18n.locale = locale;
		} else if (navigator.language) {
			this.$i18n.locale = navigator.language.substring(0, 2);
		}
	},
	mounted() {
		token.get() && this.$store.dispatch(actionTypes.getCurrentUser).then((response) => {
			this.$store.state.auth.COMPANY_ID = response.company ? response.company.id : "";
		});

		setVH();
	},
	methods: {
		...mapMutations({
			TOGGLE_GRID_MENU: "TOGGLE_GRID_MENU"
		})
	}
};
</script>
