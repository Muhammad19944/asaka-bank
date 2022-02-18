<template>
	<div class="about-card-view">
		<h1 class="text-extra-large-4 font-700 dark-text mb-2">
			<I18nVue t="benefits_of_using_cards.title" />
		</h1>

		<h3 v-if="$i18n.locale === 'en'" v-html="about_description_en" class="grey-light-2 mb-15" />
		<h3 v-if="$i18n.locale === 'ru'" v-html="about_description_ru" class="grey-light-2 mb-15" />
		<h3 v-if="$i18n.locale === 'uz'" v-html="about_description_uz" class="grey-light-2 mb-15" />

		<v-row v-if="results" class="mb-10">
			<v-col v-for="item of results" md="4">
				<app-information-card>
					<template #image>
						<img :src="$http.defaults && $http.defaults.baseURL + item.icon.url" alt=""
						     class="detail-img" style="width: 70px;" />
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

		<v-row>
			<v-col lg="7" class="pl-0">
				<v-row>
					<v-col sm="6">
						<div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
							<h1 class="font-300 text-extra-large primary-text">1</h1>

							<v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

							<h4 class="dark-text">
								<I18nVue t="benefits_of_using_cards.text1" />
							</h4>
						</div>
					</v-col>

					<v-col sm="6">
						<div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
							<h1 class="font-300 text-extra-large primary-text">2</h1>

							<v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

							<h4 class="dark-text">
								<I18nVue t="benefits_of_using_cards.text2" />
							</h4>
						</div>
					</v-col>

					<v-col sm="6">
						<div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
							<h1 class="font-300 text-extra-large primary-text">3</h1>

							<v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

							<h4 class="dark-text">
								<I18nVue t="benefits_of_using_cards.text3" />
							</h4>
						</div>
					</v-col>

					<v-col sm="6">
						<div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
							<h1 class="font-300 text-extra-large primary-text">✓</h1>

							<v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

							<h4 class="dark-text">
								<I18nVue t="benefits_of_using_cards.text4" />
							</h4>
						</div>
					</v-col>
				</v-row>
			</v-col>

			<!-- Right Side -->
			<v-col lg="5">
				<div class="orphan-card-1 mx-lg-auto">
					<v-responsive :aspect-ratio="16 / 9">
						<img src="/images/card-01_3.png" alt="Card image" class="d-block w-100 h-100 img-cover" />
					</v-responsive>

					<h3 class="dark-text font-600 mt-4">
						<I18nVue t="benefits_of_using_cards.text5" />
					</h3>

					<p class="mt-3 mb-6">
						<I18nVue t="benefits_of_using_cards.text6" />
					</p>

					<v-btn :to="{ name: 'CardOpen' }" depressed color="danger" rounded min-width="192" min-height="50">
						<I18nVue classes="font-700 text-white" t="benefits_of_using_cards.btn" />
					</v-btn>
				</div>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import I18nVue from "@/I18nVue";
import AppInformationCard from "../../../../../../components/AppInformationCard";

export default {
	name: "AboutCard",
	components: {
		I18nVue,
		AppInformationCard
	},
	props: ['about_description_uz', 'about_description_ru', 'about_description_en'],
	data() {
		return { results: null };
	},
	mounted() {
		this.$http
			.get(`1/plastic_cards/${this.$route.params.id}/property/`, {
				params: {
					category: 7
				}
			})
			.then(({ data }) => (this.results = data.results));
	}
};
</script>

<style></style>
