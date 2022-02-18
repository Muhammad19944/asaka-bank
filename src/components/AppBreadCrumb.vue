<template>
	<v-container>
		<div class="app-view-title">
			<v-row :class="this.$route.meta.headerTextUZ ? '' : 'marginBottom'">
				<v-col lg="9">
					<nav class="breadcrumb-navigation">
						<ul class="list-style-none d-flex align-center flex-wrap pl-0">
							<template v-for='route in $route.matched'>
								<li v-if="!(Object.keys(route.meta).length === 0)" :key="route.name">
									<router-link
										:to="{ name: route.name }"
										class="breadcrumb-link navigation-link d-flex align-center ml-3 pa-2 text-decoration-none text-uppercase font-700 text-small dark-grey"
									>
										<span v-if='$i18n.locale === "uz"'>{{ route.meta.linkTextUZ }}</span>
										<span v-if='$i18n.locale === "ru"'>{{ route.meta.linkTextRU }}</span>
										<span v-if='$i18n.locale === "en"'>{{ route.meta.linkTextEN }}</span>
									</router-link>
								</li>
							</template>
						</ul>
					</nav>
						<h1 class='dark-text font-700 text-extra-large-3 mt-5 mb-6'>
							<span v-if='$i18n.locale === "uz"'>{{ this.$route.meta.headerTextUZ }}</span>
							<span v-if='$i18n.locale === "ru"'>{{ this.$route.meta.headerTextRU }}</span>
							<span v-if='$i18n.locale === "en"'>{{ this.$route.meta.headerTextEN }}</span>
						</h1>

						<h2 class='dark-text font-300'>
							<span v-if='$i18n.locale === "uz"'>{{ this.$route.meta.headerSubTextUZ }}</span>
							<span v-if='$i18n.locale === "ru"'>{{ this.$route.meta.headerSubTextRU }}</span>
							<span v-if='$i18n.locale === "en"'>{{ this.$route.meta.headerSubTextEN }}</span>
						</h2>
				</v-col>

				<v-col lg="3">
					<h4 class="dark-grey text-left text-lg-right mb-7 font-600">{{ $t("share_social") }}</h4>

					<div class="social-list">
						<div class="d-flex align-center justify-start justify-lg-end">
							<ShareNetwork
								network="facebook"
								:url="'http://app-new.asakabank.uz' + routeUrl"
								hashtags="asakabank"
								title=""
								class="d-block mr-4"
							>
								<v-avatar
									size="48"
									class="social-circle border-all transition-all"
								>
									<facebook-icon style="width: 1.4rem; height: 1.4rem"
									               class="primary-text"></facebook-icon>
								</v-avatar>
							</ShareNetwork>

							<ShareNetwork
								network="twitter"
								:url="'http://app-new.asakabank.uz' + routeUrl"
								hashtags="asakabank, bankasaka"
								title=""
							>
								<v-avatar
									size="48"
									class="social-circle border-all transition-all"
								>
									<twitter-icon style="width: 1.4rem; height: 1.4rem"
									              class="primary-text"></twitter-icon>
								</v-avatar>
							</ShareNetwork>

<!--							<v-btn-->
<!--								color="primary"-->
<!--								dark-->
<!--								icon-->
<!--								class="mr-3"-->
<!--							>-->
<!--								<printer-icon size="1.75x" class="primary-text"></printer-icon>-->
<!--							</v-btn>-->

<!--							<v-menu-->
<!--								offset-y-->
<!--								open-on-hover-->
<!--								content-class="elevation-0"-->
<!--							>-->
<!--								<template v-slot:activator="{ on, attrs }">-->
<!--									<v-btn-->
<!--										color="primary"-->
<!--										dark-->
<!--										icon-->
<!--										v-bind="attrs"-->
<!--										v-on="on"-->
<!--									>-->
<!--										<share-2-icon size="1.75x" class="primary-text"></share-2-icon>-->
<!--									</v-btn>-->
<!--								</template>-->

<!--								<div class="navigation-menu-content">-->
<!--									<div class="pt-3">-->
<!--										<ShareNetwork-->
<!--											network="facebook"-->
<!--											:url="routeUrl"-->
<!--											title="Say hi to Vite! A brand new, extremely fast development setup for Vue."-->
<!--											description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."-->
<!--											quote="The hot reload is so fast it\'s near instant. - Evan You"-->
<!--											hashtags="vuejs,vite"-->
<!--											class="d-block mb-4"-->
<!--										>-->
<!--											<v-avatar-->
<!--												size="48"-->
<!--												class="social-circle border-all transition-all"-->
<!--											>-->
<!--												<facebook-icon style="width: 1.4rem; height: 1.4rem"-->
<!--												               class="primary-text"></facebook-icon>-->
<!--											</v-avatar>-->
<!--										</ShareNetwork>-->

<!--										<ShareNetwork-->
<!--											network="twitter"-->
<!--											:url="routeUrl"-->
<!--											title="Say hi to Vite! A brand new, extremely fast development setup for Vue."-->
<!--											description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."-->
<!--											quote="The hot reload is so fast it\'s near instant. - Evan You"-->
<!--											hashtags="vuejs,vite"-->
<!--											class="d-block mb-4"-->
<!--										>-->
<!--											<v-avatar-->
<!--												size="48"-->
<!--												class="social-circle border-all transition-all"-->
<!--											>-->
<!--												<twitter-icon style="width: 1.4rem; height: 1.4rem"-->
<!--												              class="primary-text"></twitter-icon>-->
<!--											</v-avatar>-->
<!--										</ShareNetwork>-->
<!--									</div>-->
<!--								</div>-->
<!--							</v-menu>-->
						</div>
					</div>
				</v-col>
			</v-row>
		</div>
	</v-container>
</template>

<script>
import { Share2Icon, PrinterIcon, FacebookIcon, TwitterIcon } from "vue-feather-icons";

export default {
	name: "AppBreadCrumb",
	components: {
		Share2Icon,
		PrinterIcon,
		FacebookIcon,
		TwitterIcon
	},
	computed: {
		routeUrl() {
			return this.$store.getters.routeURL
		}
	},
	mounted() {
		// console.log(this.$route.matched);
	}
};
</script>

<style>
.breadcrumb-navigation ul li:first-child .breadcrumb-link,
.breadcrumb-navigation ul li:nth-child(2) .breadcrumb-link {
	padding-left: 0 !important;
	margin-left: 0 !important;
}

.breadcrumb-navigation ul li .breadcrumb-link::before {
	content: '';
	width: 11px;
	height: 11px;
	background: rgba(var(--grey-light-2), .4);
	border-radius: 100%;
	margin-right: 20px;
}

.breadcrumb-navigation ul li:first-child,
.breadcrumb-navigation ul li:first-child .breadcrumb-link::before {
	display: none;
}

.marginBottom {
	margin-bottom: -4vw !important;
}
</style>
