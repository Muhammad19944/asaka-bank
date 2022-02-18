<template>
	<div class="px-5" v-if="layout">
		<template v-if="depositList.length">
			<template v-for="item in depositList">
				<card-item :key="item.id" :item="item">
					<template v-slot:card-currency>
						<h4 class="dark-text font-700">
							{{ item.type === 'milliy_valyutada'
							? 'UZS'
							: item.type === 'aqsh_dollarida'
								? 'USD'
								: 'EUR'
							}}
						</h4>
					</template>

					<template v-slot:card-buttons>
						<v-btn
							:to="{ name: 'DepositOpenID', params: { id: item.id } }"
							depressed
							color="rgba(var(--main-primary), 1)"
							outlined
							rounded
							min-width="192"
							min-height="50"
							class="font-700"
						>
							{{ $t("application_form") }}
						</v-btn>

						<v-btn
							:to="{ name: 'DepositsDetail', params: { id: item.id } }"
							depressed
							dark
							color="rgba(var(--main-primary), 1)"
							rounded
							min-width="192"
							min-height="50"
							class="font-700"
						>
							{{ $t("more_details") }}
						</v-btn>
					</template>

					<template v-slot:card-right-props>
						<h4 class="mb-3 font-600">
							<I18nVue t="deposit_interest" />
						</h4>

						<span v-if="$i18n.locale === 'uz'" class="text--h1 font-400 dark-text">
							yillik
							<span class="text-extra-large-3 font-300">{{ item.yearly_to }}%</span>
							gacha
						</span>

						<span v-if="$i18n.locale === 'ru'" class="text--h1 font-400 dark-text">
							до
							<span class="text-extra-large-3 font-300">{{ item.yearly_to }}%</span>
							годовых
						</span>

						<span v-if="$i18n.locale === 'en'" class="text--h1 font-400 dark-text">
							upto <span class="text-extra-large-3 font-300">{{ item.yearly_to }}%</span>
							yearly
						</span>

						<div class="card-horizontal-line my-6"></div>

						<h4 class="mb-3 font-600">
							<I18nVue t="shelf_life" />
						</h4>

						<span v-if="$i18n.locale === 'uz'" class="text--h1 font-400 dark-text">
							<span class="text-extra-large-3 font-300">{{ item.max_save_period }}</span>
							oygacha
						</span>

						<span v-if="$i18n.locale === 'ru'" class="text--h1 font-400 dark-text">
							до <span class="text-extra-large-3 font-300">{{ item.max_save_period }}</span>
							месяцев
						</span>

						<span v-if="$i18n.locale === 'en'" class="text--h1 font-400 dark-text">
							upto <span class="text-extra-large-3 font-300">{{ item.max_save_period }}</span>
							month
						</span>
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
			depositList: [],
			layout: false,
		}
	},
	mounted() {
		this.getList(this.$route.params.type)
	},
	methods: {
		getList(type) {
			this.$http
				.get("/1/deposit", {
					params: {
						type: type === 'all' ? null : type,
						category: 5
					}
				})
				.then(({ data }) => {
					this.depositList = data.results;

					this.layout = true;
				});
		}
	}
};
</script>

<style scoped>

</style>
