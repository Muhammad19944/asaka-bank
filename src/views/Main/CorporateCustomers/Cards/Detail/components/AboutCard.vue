<template>
	<div class="about-card-view">
		<h1 class="text-extra-large-4 font-700 dark-text mb-2">
			<I18nVue t="benefits_of_using_cards.title" />
		</h1>

		<h3 v-if="$i18n.locale === 'en'" v-html="about_description_en" class="grey-light-2 mb-15" />
		<h3 v-if="$i18n.locale === 'ru'" v-html="about_description_ru" class="grey-light-2 mb-15" />
		<h3 v-if="$i18n.locale === 'uz'" v-html="about_description_uz" class="grey-light-2 mb-15" />

		<v-row v-if="results" class="mb-10">
			<v-col v-for="item of results" lg="4" md="6">
				<app-information-card>
					<template #image>
						<img :src="$http.defaults && $http.defaults.baseURL + item.icon.url" alt=""
						     class="detail-img" style="width: 60px" />
					</template>

					<template #title>
						<I18nVue
							:uz="item.property_title_uz"
							:ru="item.property_title_ru"
							:en="item.property_title_en"
						/>
					</template>

					<template #description>
						<I18nVue
							:uz="item.property_desc_uz"
							:ru="item.property_desc_ru"
							:en="item.property_desc_en"
						/>
					</template>
				</app-information-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import AppInformationCard from "../../../../../../components/AppInformationCard";
import I18nVue from "@/I18nVue";

export default {
	name: "AboutCard",
	components: {
		AppInformationCard,
		I18nVue
	},
	props: ['about_description_uz', 'about_description_ru', 'about_description_en'],
	data() {
		return { results: null };
	},
	mounted() {
		this.$http
			.get(`1/plastic_cards/${this.$route.params.id}/property/`, {
				params: {
					category: 6
				}
			})
			.then(({ data }) => (this.results = data.results));
	}
};
</script>

<style></style>
