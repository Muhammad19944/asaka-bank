<template>
	<v-container>
		<div class="app-card-wrap py-10">
			<template v-for="item in promotion_data">
				<div :key="item.id" class="app-card-horizontal credit-widget d-flex flex-wrap flex-lg-nowrap mb-15">
					<div class="card-horizontal__left">
						<img :src="item.image.url && $http.defaults.baseURL +  item.image.url" alt=""
						     class="d-block img-cover img-right" />
					</div>

					<div class="card-horizontal__mid flex-1 d-flex flex-column py-6 py-sm-10 px-6 px-sm-12">
						<h2 class="dark-text font-700 mb-4">
							<I18nVue :ru="item.title_ru" :uz="item.title_uz" :en="item.title_en" />
						</h2>

						<h4 class="font-500">
							<span v-if='$i18n.locale === "en"' v-html="item.main_description_en" />
							<span v-if='$i18n.locale === "ru"' v-html="item.main_description_ru" />
							<span v-if='$i18n.locale === "uz"' v-html="item.main_description_uz" />
						</h4>

						<div class="d-flex align-center mt-auto">
							<v-btn
								:to="{ name: 'PromoId', params: { id: item.id } }"
								depressed
								color="rgba(var(--main-primary), 1)"
								outlined
								rounded
								min-width="192"
								min-height="50"
								class="font-700 mr-4 mt-4"
							>
								<I18nVue t="btn_more" />
							</v-btn>
						</div>
					</div>

					<div class="card-horizontal__right pa-10">
						<h4 class="mb-3 font-600">
							<I18nVue t="Promo.text1" />
						</h4>

						<span class="text--h1 font-300 dark-text">
							{{ item.start_date|filterDate }}
						</span>

						<div class="card-horizontal-line my-6" />

						<h4 class="mb-3 font-600">
							<I18nVue t="Promo.text2" />
						</h4>

						<span class="text--h1 font-300 dark-text">
							{{ item.end_date|filterDate }}
						</span>
					</div>
				</div>
			</template>
		</div>
	</v-container>
</template>

<script>
import I18nVue from "@/I18nVue";

export default {
	name: "index",
	components: { I18nVue },
	data: () => ({ promotion_data: [] }),
	mounted() {
		this.$http.get("/1/promotion/").then(({ data }) => this.promotion_data = data.results);
	}
};
</script>
