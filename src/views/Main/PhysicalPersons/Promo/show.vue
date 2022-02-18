<template>
	<div class="save-money-view">
<!--		    <pre>{{ JSON.stringify(promotionId_data, null, 2) }}</pre>-->
		<v-container class="pb-16">
			<div class="detail-view-content">
				<v-row no-gutters>
					<v-col md="6">
						<div class="pr-16">
							<v-responsive :aspect-ratio="7/5">
								<img
									:src="promotionId_data.image && ($http.defaults.baseURL + promotionId_data.image.url)"
									alt="Credit image" class="w-100 h-100 img-contain" />
							</v-responsive>
						</div>
					</v-col>
					<v-col md="6" align-self="center">
						<h1 class="font-700 text-extra-large-3 dark-text mt-10 mt-sm-0">
							<span v-if='$i18n.locale === "en"' v-html="promotionId_data.title_en" />
							<span v-if='$i18n.locale === "ru"' v-html="promotionId_data.title_ru" />
							<span v-if='$i18n.locale === "uz"' v-html="promotionId_data.title_uz" />
						</h1>
						<v-divider class="my-8" />
						<h4>
							<span v-if='$i18n.locale === "en"' v-html="promotionId_data.main_description_en" />
							<span v-if='$i18n.locale === "ru"' v-html="promotionId_data.main_description_ru" />
							<span v-if='$i18n.locale === "uz"' v-html="promotionId_data.main_description_uz" />
						</h4>
						<v-btn
							depressed
							dark
							color="rgba(var(--main-primary), 1)"
							rounded
							min-width="192"
							min-height="50"
							class="font-700 mt-4"
							:href="promotionId_data.file && ($http.defaults.baseURL + promotionId_data.file.url)"
							target="_blank"
							rel="noopener noreferrer"
						>
							<I18nVue t="Promo.btn" />
						</v-btn>
					</v-col>
				</v-row>
			</div>
		</v-container>
		<v-container class="p-relative">
			<div class="view-title mb-10">
				<span v-if='$i18n.locale === "en"' v-html="promotionId_data.description_en" />
				<span v-if='$i18n.locale === "ru"' v-html="promotionId_data.description_ru" />
				<span v-if='$i18n.locale === "uz"' v-html="promotionId_data.description_uz" />
			</div>
		</v-container>
		<div class="mb-16"  v-if="promotionId_data.title_schedule_uz || promotionId_data.title_schedule_ru || promotionId_data.title_schedule_en">
			<v-container>
				<div class="app-collapse--advanced mb-10">
					<v-expansion-panels v-model="panel" accordion multiple class="border-all">
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								<span v-if='$i18n.locale === "en"' v-html="promotionId_data.title_schedule_uz" />
								<span v-if='$i18n.locale === "ru"' v-html="promotionId_data.title_schedule_ru" />
								<span v-if='$i18n.locale === "uz"' v-html="promotionId_data.title_schedule_uz" />
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<span v-if='$i18n.locale === "en"' v-html="promotionId_data.schedule_uz" />
								<span v-if='$i18n.locale === "ru"' v-html="promotionId_data.schedule_ru" />
								<span v-if='$i18n.locale === "uz"' v-html="promotionId_data.schedule_uz" />
							</v-expansion-panel-content>
						</v-expansion-panel>
					</v-expansion-panels>
				</div>
			</v-container>
		</div>
	</div>
</template>
<script>
import I18nVue from "@/I18nVue";

export default {
	name: "show",
	components: { I18nVue },
	data: () => ({
		promotionId_data: [],
		panel: [0]
	}),
	mounted() {
		this.$http.get(`/1/promotion/${this.$route.params.id}`).then(({ data }) => this.promotionId_data = data);
	}
};
</script>
