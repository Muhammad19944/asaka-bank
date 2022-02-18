<template>
	<div class="deposit-detail-view">
		<v-container>
			<div class="detail-view-content">
				<v-row>
					<v-col lg="6">
						<v-responsive :aspect-ratio="4 / 3">
							<img
								:src="depositDetailModel.image && $http.defaults.baseURL + depositDetailModel.image.url"
								alt="Credit image"
								class="p-absolute w-100 h-100 img-contain"
							/>
						</v-responsive>
					</v-col>
					<v-col lg="6">
						<div class="pl-lg-16">
							<p class="text-lg-right">
								<I18nVue t="updated" />
								{{ depositDetailModel.modified_date && depositDetailModel.modified_date | filterDate }}
							</p>
							<h1 class="font-700 text-extra-large-3 dark-text">
	                            <I18nVue :ru="depositDetailModel.title_ru"
	                                     :uz="depositDetailModel.title_uz"
	                                     :en="depositDetailModel.title_en" />
	                        </h1>

							<h2 v-if="depositDetailModel.type === 'milliy_valyutada'" class="dark-text font-600 mt-3">
	                            <I18nVue t='deposits_in_currency' />
	                        </h2>

	                        <h2 v-else-if="depositDetailModel.type === 'aqsh_dollarida'" class="dark-text font-600 mt-3">
	                            <I18nVue t='deposits_in_US' />
	                        </h2>

	                        <h2 v-else class="dark-text font-600 mt-3">
	                            <I18nVue t='deposits_in_euro' />
	                        </h2>

							<v-divider class="my-8"/>

							<h4>
	                            <span v-if='$i18n.locale === "en"' v-html='depositDetailModel.description_en' />
	                            <span v-if='$i18n.locale === "ru"' v-html='depositDetailModel.description_ru' />
	                            <span v-if='$i18n.locale === "uz"' v-html='depositDetailModel.description_uz' />
	                        </h4>

							<div class="credit-meta d-flex flex-wrap mb-13 w-100 mt-10">
								<template v-for="item in referenceList">
									<div class="credit-meta-items d-flex align-center dark-text">
										<h1 class="text-extra-large-4 mr-3 line-base font-300">
											<span v-if="$i18n.locale === 'uz'" v-html="item.text_left_uz"></span>
											<span v-if="$i18n.locale === 'ru'" v-html="item.text_left_ru"></span>
											<span v-if="$i18n.locale === 'en'" v-html="item.text_left_en"></span>
										</h1>
										<div class="d-flex flex-column h-100">
											<h5 class="font-600">
												<I18nVue :uz="item.text_right_top_uz" :ru="item.text_right_top_ru"
												         :en="item.text_right_top_en" />
											</h5>
											<I18nVue :uz="item.text_bottom_uz" :ru="item.text_bottom_ru"
											         :en="item.text_bottom_en" />
										</div>
									</div>
								</template>
							</div>
						</div>
					</v-col>
				</v-row>
			</div>
		</v-container>

		<div class="view-toolbar mt-16">
			<v-container class="py-0">
				<div class="app-tab-header d-flex">
					<div class="tab-header-items text-center mr-7 active" data-item="header">
						<a class="navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block">
							<I18nVue t='about_deposit' />
						</a>
					</div>
					<div class="tab-header-items text-center mr-7" data-item="header">
						<a class="navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block">
							<I18nVue t='tariffs_and_conditions'/>
						</a>
					</div>
					<div class="tab-header-items text-center mr-7" data-item="header">
						<a class="navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block">
							<I18nVue t='documents'/>
						</a>
					</div>
				</div>
			</v-container>
		</div>

		<div class="view-toolbar-content py-16 overflow-hidden">
			<div class="app-tab-content p-relative">
				<div class="tab-content-items active" data-item="content">
					<template v-if='layout'>
						<about-deposit :depositDetail="depositDetailModel" />
					</template>
				</div>
				<div class="tab-content-items" data-item="content">
					<v-container>
						<tariffs-and-conditions />
					</v-container>
				</div>
				<div class="tab-content-items" data-item="content">
					<v-container>
						<documents/>
					</v-container>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import AppBreadCrumb from '@/components/AppBreadCrumb'
    import AboutDeposit from './components/AboutDeposit'
    import Documents from './components/Documents'
    import TariffsAndConditions from './components/TariffsAndConditions'
    import { appTab } from '@/utils/frontend'
    import I18nVue from '@/I18nVue'

    export default {
        name: 'index',
        components: {
            AppBreadCrumb,
            AboutDeposit,
            TariffsAndConditions,
            Documents,
            I18nVue,
        },
        data() {
            return {
                depositDetailModel: {},
                layout: false,
	            referenceList: [],
            }
        },
        mounted() {
	        this.getReferenceList();
            const $tabHeaderItems = document.querySelectorAll('[data-item="header"]')
            const $tabContentItems = document.querySelectorAll('[data-item="content"]')

            appTab($tabHeaderItems, $tabContentItems)

		this.getOne()
	},
	methods: {
		getOne() {
                this.$http.get(`1/deposit/${this.$route.params.id}/`)
				.then(({ data }) => {
					this.depositDetailModel = data
					this.layout = true
				})
		},
		/*
		*
		* */
		getReferenceList() {
			if (this.$route.params.id) {
				this.$store.state.CREATED_DEPOSIT_ID = this.$route.params.id
			}

			this.$http.get(`/1/deposit/${this.$store.state.CREATED_DEPOSIT_ID}/reference/`)
				.then(({ data }) => {

					this.referenceList = data.results

				})
		}
	}
}
</script>

<style>

</style>
