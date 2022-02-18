<template>
	<div class="top-mobile-app-download-menu">
		<template v-if="getHeaderAppDownloadVisible">
			<div id="mobile-app-dowload">
				<div class="d-flex app-download-cover">
					<div class="d-flex app-download">
						<div class="app-wrap-close-button col-2 d-flex justify-center align-center">
							<v-btn
								@click="hideBar"
								icon
								depressed
								color="white"
								large>
								<x-icon size="2x" class="custom-class"></x-icon>
							</v-btn>
						</div>
						<div class="app-wrap-logo col-2 my-2 d-flex justify-center align-center">
							<img src="/images/new_logo.png" alt="App logo" class="medium-logo"
							     style="transform: scale(0.55)" />
						</div>
						<div class="app-wrap-text col-6">
							<h4 class="text--white font-600">Asakabank</h4>
							<span class="text-install text--white font-300">{{ $t("MobileVersion.install-phone")
								}}</span>
						</div>
						<div class="app-wrap-install-button col-2 d-flex align-center">

							<div class="white px-2 rounded">
								<a
									target="_blank"
									rel="noopener noreferrer"
									:href="mobileOS === 'android' ? 'https://play.google.com/store/apps/details?id=uz.asakabank.myasaka' :
									mobileOS === 'iphone' ? 'https://apps.apple.com/ru/app/asakabank/id1574165416' : '/'"
									class="text-decoration-none"
								>
									<span class="text-install font-700">{{ $t("MobileVersion.install") }}</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import { XIcon } from "vue-feather-icons";
import { mapGetters, mapMutations } from "vuex"

export default {
	name: "HeaderTopMobileAppDownload",
	components: {
		XIcon
	},
	data() {
		return {
			exitClicked: false,
			isMobile: false,
			mobileOS: "desktop"
		};
	},
	computed: {
		...mapGetters({
			getHeaderAppDownloadVisible: "getHeaderAppDownloadVisible"
		})
	},
	mounted() {
		this.getMobileOperatingSystem();
	},
	methods: {
		...mapMutations({
			SET_HEADER_APP_DOWNLOAD: "SET_HEADER_APP_DOWNLOAD"
		}),

		/*
		*
		* */
		hideBar() {
			this.SET_HEADER_APP_DOWNLOAD(false)
			// this.exitClicked = true;
			// this.$emit("exitClicked", this.exitClicked);
		},

		/*
		*
		* */
		getMobileOperatingSystem() {
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				if (/Android/i.test(navigator.userAgent)) {
					this.mobileOS = "android";
				} else if (/iPad|iPhone|iPod/i.test(navigator.userAgent)) {
					this.mobileOS = "iphone";
				} else {
					this.mobileOS = "desktop";
				}
			}
		}
	}
};
</script>

<style>
.app-download-cover {
	background: #d70c17;
	width: auto;
	height: 70px;
}

.app-wrap-logo {
	background: white;
	border-radius: 15px;
}

.medium-logo {
	width: 100%;
}

.text--white {
	color: white;
}

.text-install {
	font-size: 11px;
	text-transform: none;
}

.app-wrap-install-button {
	margin-left: -40px;
}

#mobile-app-dowload {
	position: fixed;
	z-index: 66;
}
</style>
