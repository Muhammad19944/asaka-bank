<template>
	<div class="px-5" v-if="layout">
		<template v-if="cardsList.length">
			<template v-for="item in cardsList">
				<card-item :key="item.id" :item="item" image-compact>
					<template v-slot:card-left-image>
						<img :src="item.card_image.url && $http.defaults.baseURL +  item.card_image.url" alt=""
						     class="d-block img-contain img-right" />
					</template>

					<template v-slot:card-title>
						<h2 class='dark-text font-700 mb-4'>
							<I18nVue :uz='item.name_uz' :ru='item.name_ru' :en='item.name_en' />
						</h2>
					</template>

					<template v-slot:card-buttons>
<!--						<v-btn-->
<!--							:to="{ name: 'CardOpen' }"-->
<!--							depressed-->
<!--							color='rgba(var(&#45;&#45;main-primary), 1)'-->
<!--							outlined-->
<!--							rounded-->
<!--							min-width='192'-->
<!--							min-height='50'-->
<!--							class='font-700'-->
<!--						>-->
<!--							<I18nVue t='application_form' />-->
<!--						</v-btn>-->

						<v-btn
							:to="{ name: 'CardsCorporateDetail', params: { id: item.id } }"
							depressed
							dark
							color='rgba(var(--main-primary), 1)'
							rounded
							min-width='192'
							min-height='50'
							class='font-700'
						>
							<I18nVue t='more_details' />
						</v-btn>
					</template>

					<template v-slot:card-right-props>
						<h4 class='mb-3 font-600'>
							<I18nVue t='Cards.detail.issue' />
						</h4>

						<span class='text--h1 font-300 dark-text'>
			                <I18nVue
				                :uz='item.card_process_uz'
				                :ru='item.card_process_ru'
				                :en='item.card_process_en'
			                />
			            </span>

						<div class='card-horizontal-line my-6' />

						<h4 class='mb-3 font-600'>
							<I18nVue t='Cards.detail.proctor' />
						</h4>

						<span class='text--h1 font-300 dark-text'>{{ item.fee_of_card }}</span>
					</template>
				</card-item>
			</template>
		</template>

		<template v-else>
			<h2 class="font-600 dark-text text-center">
				<I18nVue t="Cards.no_data" />
			</h2>
		</template>
	</div>
</template>

<script>
import CardItem from "../../../../../components/CardItem";
import I18nVue from "@/I18nVue";

export default {
	name: "ListType",
	components: {
		CardItem,
		I18nVue
	},
	data() {
		return {
			cardsList: [],
			layout: false,
		}
	},
	mounted() {
		this.getList(this.$route.params.type)
	},
	methods: {
		getList(type) {
			this.$http
				.get("/1/plastic_cards", {
					params: {
						type: type === 'all' ? null : type,
						category: 6
					}
				})
				.then(({ data }) => {
					this.cardsList = data.results;

					this.layout = true;
				});
		}
	}
};
</script>

<style scoped>

</style>
