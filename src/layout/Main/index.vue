<template>
	<div class="app-main-layout d-flex flex-column">
		<span id="betaVersion" class="beta-version">
			<span><b>beta</b> version</span>
		</span>

		<header-top-mobile-app-download/>

		<div :class="getHeaderAppDownloadVisible ? 'header-top' : ''">
			<the-header data-html2canvas-ignore />

			<div class="header-fix"></div>

			<v-main class="app-main">
				<app-bread-crumb v-if="!isHomeRoute" />


				<transition name="fade">
					<router-view class="app-router-view" />
				</transition>
			</v-main>

			<the-press-center v-if="!disableNews" />

			<the-footer />
		</div>
	</div>
</template>

<script>
import AppBreadCrumb from "@/components/AppBreadCrumb";
import TheHeader from "./Header";
import TheFooter from "./Footer";
import ThePressCenter from "./PressCenter";
import HeaderTopMobileAppDownload from "@/layout/Main/Header/components/HeaderTopMobileAppDownload";
import { mapGetters } from "vuex";

export default {
	name: "MainLayout",
	components: {
		AppBreadCrumb,
		TheHeader,
		TheFooter,
		ThePressCenter,
		HeaderTopMobileAppDownload
	},
	data() {
		return {
			isExitClicked: false,
			isMobile: false,
			disableNews: false,
			isHomeRoute: false
		};
	},
	computed: {
		...mapGetters({
			getHeaderAppDownloadVisible: "getHeaderAppDownloadVisible"
		})
	},
	watch: {
		$route(to) {
			// this.disableNews = to.path.split('/')[to.path.split('/').length - 1]

			this.isHomeRoute = to.path.split("/").includes("home");
			this.disableNews = to.path.split("/").includes("press-center");

			// console.log(this.isHomeRoute);
		}
	},
	mounted() {
		const $body = document.querySelector("body")
		const $betaVersion = document.querySelector("#betaVersion")
		let lastScrollTop = 600

		// Mobile touch
		$body.addEventListener("touchstart", () => {
			let st = window.pageYOffset || document.documentElement.scrollTop
			if (st > lastScrollTop) {
				$betaVersion.classList.add("beta-version-display-none")
			} else if(st <= lastScrollTop) {
				$betaVersion.classList.remove("beta-version-display-none")
			}

			lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

		}, false);


		this.getDeviceType();
		// this.disableNews = this.$route.path.split('/')[this.$route.path.split('/').length - 1]

		this.isHomeRoute = this.$route.path.split("/").includes("home");
		this.disableNews = this.$route.path.split("/").includes("press-center");

		// console.log(this.disableNews)

	},
	methods: {
		/*
		*
		* */
		getDeviceType() {
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				this.isMobile = true
			}
		},

		/*
		*
		* */
		exitClicked(e) {
			this.isExitClicked = e;
			console.log(e);
		}
	}
};
</script>

<style>
.app-main-layout {
	min-height: 100vh;
}

.app-main {
	min-height: 625px;
}

.header-fix {
	padding-top: 127px;
}
</style>
