<template>
	<div class="public-offer-view">
		<div class="view-toolbar">
			<v-container class='pa-0'>
				<div class='app-tab-header d-flex'>
					<div class="tab-header-items text-center mr-7 active" data-item="header">
						<a
							class="
                                navigation-link__hover
                                p-relative
                                text--h3
                                dark-text
                                py-6
                                font-600
                                d-inline-block
                            "
						>
							{{ $t("PublicOffer.new") }}
						</a>
					</div>
					<div class="tab-header-items text-center mr-7" data-item="header">
						<a
							class="
                                navigation-link__hover
                                p-relative
                                text--h3
                                dark-text
                                py-6
                                font-600
                                d-inline-block
                            "
						>
							{{ $t("PublicOffer.old") }} (31.08.2021)
						</a>
					</div>
				</div>
			</v-container>
		</div>

		<div class='view-toolbar-content py-16 overflow-hidden'>
			<v-container>
				<div class='app-tab-content p-relative'>
					<div class='tab-content-items active' data-item='content'>
						<template v-if="offersList.length">
							<span v-if='$i18n.locale === "uz"' v-html='offersList[0].text_uz' />
							<span v-if='$i18n.locale === "ru"' v-html='offersList[0].text_ru' />
							<span v-if='$i18n.locale === "en"' v-html='offersList[0].text_en' />
						</template>
					</div>
					<div class='tab-content-items' data-item='content'>
						<template v-if="offersList.length">
							<span v-if='$i18n.locale === "uz"' v-html='offersList[1].text_uz' />
							<span v-if='$i18n.locale === "ru"' v-html='offersList[1].text_ru' />
							<span v-if='$i18n.locale === "en"' v-html='offersList[1].text_en' />
						</template>
					</div>
				</div>
			</v-container>
		</div>
	</div>
</template>

<script>
	import I18nVue from "@/I18nVue"
	import { appTab } from "@/utils/frontend"
	export default {
		name: "index",
		components: {
			I18nVue
		},
		data() {
			return {
				offersList: []
			}
		},
		mounted() {

			const $tabHeaderItems = document.querySelectorAll("[data-item=\"header\"]");
			const $tabContentItems = document.querySelectorAll("[data-item=\"content\"]");

			appTab($tabHeaderItems, $tabContentItems);

			this.getOffersList()
		},
		methods: {
			getOffersList(){
				this.$http
					.get("/1/bank/public_offer", {
						params: {
							ordering: 'id'
						}
					})
					.then(({ data }) => {
						this.offersList = data.results;
					})
			}
		}
	}
</script>

<style scoped>

</style>