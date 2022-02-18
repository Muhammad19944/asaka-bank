<template>
	<div class="deposits-view">
		<div class="view-toolbar py-5">
			<v-container>
				<h3 class="dark-text font-600">{{ $t('all_deposits') }}</h3>
			</v-container>
		</div>

		<v-container>
			<div class="app-card-wrap py-16">
				<template v-for="item in depositList">
					<div v-if="item.is_available" :key="item.id" class="app-card-horizontal credit-widget d-flex mb-15">
						<div class="card-horizontal__left">
							<img
								:src="$http.defaults.baseURL + item.image.url"
								alt="Card image"
								class="d-block img-cover"
							/>
						</div>

						<div class="card-horizontal__mid flex-1 d-flex flex-column py-10 px-12">
							<div class="dark-text font-700 d-flex align-center justify-space-between mb-4">
								<h2>
									<I18nVue :en="item.title_en" :ru="item.title_ru" :uz="item.title_uz" />
								</h2>
								<h4>
									{{
										item.type === 'milliy_valyutada'
											? 'UZS'
											: item.type === 'aqsh_dollarida'
											? 'UZD'
											: 'EUR'
									}}
								</h4>
							</div>

							<h4 class="font-300">
                                <span v-if='$i18n.locale === "en"' v-html='item.description_en'/>
                                <span v-if='$i18n.locale === "ru"' v-html='item.description_ru'/>
                                <span v-if='$i18n.locale === "uz"' v-html='item.description_uz'/>
							</h4>

							<div class="d-flex align-center mt-auto">
								<v-btn
									depressed
									color="rgba(var(--main-primary), 1)"
									outlined
									rounded
									min-width="192"
									min-height="50"
									class="font-700 mr-4"
								>
									{{ $t('application_form') }}
								</v-btn>

								<v-btn
									:to="{ name: 'DepositsCorporateDetail', params: { id: item.id } }"
									depressed
									dark
									color="rgba(var(--main-primary), 1)"
									rounded
									class="font-700"
									min-width="192"
									min-height="50"
								>
									{{ $t('more_details') }}
								</v-btn>
							</div>
						</div>

						<div class="card-horizontal__right pa-10">
							<h5 class="mb-3">{{ $t('interest_on_deposit') }}</h5>

							<h3 class="font-600 dark-text">
								{{ $t('annual') }}
								<span class="text-extra-large-3 font-300">{{ item.yearly_to }}%</span>
							</h3>

							<div class="card-horizontal-line my-6"></div>

							<h5 class="mb-2">{{ $t('shelf_life') }}</h5>

							<h3 class="dark-text">
								<span class="text-extra-large-3 font-300 mr-1">{{ item.min_save_period }}</span>
								{{ $t('up_to_month') }}
							</h3>
						</div>
					</div>
				</template>
			</div>
		</v-container>
	</div>
</template>

<script>
    import I18nVue from '@/I18nVue'
export default {
	name: "index",
    components: {
	    I18nVue,
    },
	data() {
		return {
			depositList: []
		}
	},
	mounted() {
		this.getList()
	},
	methods: {
		/*
		* Получение лист депозитов
		* */
		getList() {
			this.$http.get('/1/deposit/')
				.then(({ data }) => {
					this.depositList = data.results
				})
		}
	}
}
</script>

<style>

</style>