<template>
	<div class="detail-view">
		<v-container>
			<div class="detail-view-content">
				<v-row>
					<v-col lg="6">
						<v-responsive :aspect-ratio="4 / 3">
							<img
								:src="creditDetailModel.image && this.$http.defaults.baseURL + creditDetailModel.image.url"
								alt="Credit image"
								class="p-absolute img-contain"
							/>
						</v-responsive>
					</v-col>

					<v-col lg="6">
						<div class="pl-lg-16">
							<p class="text-right">
								<I18nVue t="updated" />
								{{ creditDetailModel.modified_date && creditDetailModel.modified_date | filterDate }}
							</p>
							<h1 class="font-700 text-extra-large-4 dark-text">
								<I18nVue
									:ru="creditDetailModel.title_ru"
									:en="creditDetailModel.title_en"
									:uz="creditDetailModel.title_uz"
								/>
							</h1>
							<v-divider class="my-8" />
							<span v-if="$i18n.locale === 'en'" v-html="creditDetailModel.description_en" />
							<span v-if="$i18n.locale === 'ru'" v-html="creditDetailModel.description_ru" />
							<span v-if="$i18n.locale === 'uz'" v-html="creditDetailModel.description_uz" />

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
						<a
							class="
                                navigation-link navigation-link__hover
                                p-relative
                                text--h4
                                py-6
                                font-600
                                d-inline-block
                            "
						>
							<I18nVue t="Credit_Detail.tab1" />
						</a>
					</div>
					<div class="tab-header-items text-center mr-7" data-item="header">
						<a
							class="
                                navigation-link navigation-link__hover
                                p-relative
                                text--h4
                                py-6
                                font-600
                                d-inline-block
                            "
						>
							<I18nVue t="Credit_Detail.tab2" />
						</a>
					</div>
					<div class="tab-header-items text-center mr-7" data-item="header">
						<a
							class="
                                navigation-link navigation-link__hover
                                p-relative
                                text--h4
                                py-6
                                font-600
                                d-inline-block
                            "
						>
							<I18nVue t="Credit_Detail.tab3" />
						</a>
					</div>
					<!--					<div class="tab-header-items text-center mr-7" data-item="header">-->
					<!--						<a-->
					<!--							class="-->
					<!--                                navigation-link navigation-link__hover-->
					<!--                                p-relative-->
					<!--                                text&#45;&#45;h4-->
					<!--                                py-6-->
					<!--                                font-600-->
					<!--                                d-inline-block-->
					<!--                            "-->
					<!--						>-->
					<!--							<I18nVue t="Credit_Detail.tab4" />-->
					<!--						</a>-->
					<!--					</div>-->
				</div>
			</v-container>
		</div>

		<div class="view-toolbar-content py-16 overflow-hidden">
			<v-container class="py-0">
				<div class="app-tab-content p-relative">
					<div class="tab-content-items active" data-item="content">

						<app-small-business-credit-calc>
							<template v-if="$route.params.id == 12">
								<div class="credit-widget pa-7 rounded-lg overflow-hidden">
									<v-simple-table class="border-all">
										<tr>
											<th class="pa-2 border-right border-bottom">
                                            <span v-if="$i18n.locale === 'uz'"
                                                  class="font-700">Kredit nomi</span>
												<span v-if="$i18n.locale === 'ru'"
												      class="font-700">Название кредита</span>
												<span v-if="$i18n.locale === 'en'"
												      class="font-700">Credit name</span>
											</th>
											<th class="pa-2 border-right border-bottom">
                                            <span v-if="$i18n.locale === 'uz'"
                                                  class="font-700">Hisob varaq:</span>
												<span v-if="$i18n.locale === 'ru'"
												      class="font-700">Расчётный счет:</span>
												<span v-if="$i18n.locale === 'en'"
												      class="font-700">Account sheet:</span>
											</th>
											<th class="pa-2 border-right border-bottom">
												<span v-if="$i18n.locale === 'uz'" class="font-700">Kredit minimal miqdori</span>
												<span v-if="$i18n.locale === 'ru'" class="font-700">Минимальная сумма кредита</span>
												<span v-if="$i18n.locale === 'en'" class="font-700">Minimum loan amount</span>
											</th>
											<th class="pa-2 border-bottom">
												<span v-if="$i18n.locale === 'uz'" class="font-700">Kredit maksimal miqdori</span>
												<span v-if="$i18n.locale === 'ru'" class="font-700">Максимальная сумма кредита</span>
												<span v-if="$i18n.locale === 'en'" class="font-700">Maximum loan amount</span>
											</th>
										</tr>
										<tr>
											<td class="pa-2 border-right text-center border-bottom">
												<span v-if="$i18n.locale === 'uz'">Biznes overdraft</span>
												<span v-if="$i18n.locale === 'ru'">Бизнес овердрафт</span>
												<span v-if="$i18n.locale === 'en'">Business overdraft</span>
											</td>
											<td class="pa-2 border-right text-center border-bottom">
												<span v-if="$i18n.locale === 'uz'">Asosiy</span>
												<span v-if="$i18n.locale === 'ru'">Основной</span>
												<span v-if="$i18n.locale === 'en'">Basic</span>
											</td>
											<td class="pa-2 border-right text-center border-bottom">
												<span v-if="$i18n.locale === 'uz'">20 mln. so’m</span>
												<span v-if="$i18n.locale === 'ru'">20 млн. сум</span>
												<span v-if="$i18n.locale === 'en'">20 mln. sum</span>
											</td>
											<td class="pa-2 text-center border-bottom">
												<span v-if="$i18n.locale === 'uz'">2 mlrd. so’m</span>
												<span v-if="$i18n.locale === 'ru'">2 млрд. сум</span>
												<span v-if="$i18n.locale === 'en'">2 billion sum</span>
											</td>
										</tr>
										<tr>
											<template v-if="$i18n.locale === 'uz'">
												<td class="pa-2 border-right text-center">Tadbirkor overdraft</td>
												<td class="pa-2 border-right text-center">Asosiy</td>
												<td class="pa-2 border-right text-center">10 mln. so’m</td>
												<td class="pa-2 text-center">800 mln. so’m</td>
											</template>
											<template v-if="$i18n.locale === 'ru'">
												<td class="pa-2 border-right text-center">Тадбиркор овердрафт</td>
												<td class="pa-2 border-right text-center">Основной</td>
												<td class="pa-2 border-right text-center">10 млн. сум</td>
												<td class="pa-2 text-center">800 млн. сум</td>
											</template>
											<template v-if="$i18n.locale === 'en'">
												<td class="pa-2 border-right text-center">Tadbirkor overdraft</td>
												<td class="pa-2 border-right text-center">Basic</td>
												<td class="pa-2 border-right text-center">10 mln. sum</td>
												<td class="pa-2 text-center">800 mln. sum</td>
											</template>
										</tr>
									</v-simple-table>
								</div>
							</template>

							<template v-else-if="$route.params.id == 11">
								<div class="credit-widget pa-7 rounded-lg overflow-hidden">
									<v-simple-table class="border-all">
										<tr>
											<th class="pa-2 border-right border-bottom">
                                            <span v-if="$i18n.locale === 'uz'"
                                                  class="font-700">Kredit nomi</span>
												<span v-if="$i18n.locale === 'ru'"
												      class="font-700">Название кредита</span>
												<span v-if="$i18n.locale === 'en'"
												      class="font-700">Credit name</span>
											</th>
											<th class="pa-2 border-right border-bottom">
                                            <span v-if="$i18n.locale === 'uz'"
                                                  class="font-700">Hisob varaq:</span>
												<span v-if="$i18n.locale === 'ru'"
												      class="font-700">Расчётный счет:</span>
												<span v-if="$i18n.locale === 'en'"
												      class="font-700">Account sheet:</span>
											</th>
											<th class="pa-2 border-right border-bottom">
												<span v-if="$i18n.locale === 'uz'" class="font-700">Kredit minimal miqdori</span>
												<span v-if="$i18n.locale === 'ru'" class="font-700">Минимальная сумма кредита</span>
												<span v-if="$i18n.locale === 'en'" class="font-700">Minimum loan amount</span>
											</th>
											<th class="pa-2 border-bottom">
												<span v-if="$i18n.locale === 'uz'" class="font-700">Kredit maksimal miqdori</span>
												<span v-if="$i18n.locale === 'ru'" class="font-700">Максимальная сумма кредита</span>
												<span v-if="$i18n.locale === 'en'" class="font-700">Maximum loan amount</span>
											</th>
										</tr>
										<tr>
											<td class="pa-2 border-right text-center border-bottom">
												<span v-if="$i18n.locale === 'uz'">Biznes standart</span>
												<span v-if="$i18n.locale === 'ru'">Бизнес стандарт</span>
												<span v-if="$i18n.locale === 'en'">Business standard</span>
											</td>
											<td class="pa-2 border-right text-center border-bottom">
												<span v-if="$i18n.locale === 'uz'">Asosiy</span>
												<span v-if="$i18n.locale === 'ru'">Основной</span>
												<span v-if="$i18n.locale === 'en'">Basic</span>
											</td>
											<td class="pa-2 border-right text-center border-bottom">
												<span v-if="$i18n.locale === 'uz'">20 mln. so’m</span>
												<span v-if="$i18n.locale === 'ru'">20 млн. сум</span>
												<span v-if="$i18n.locale === 'en'">20 mln. sum</span>
											</td>
											<td class="pa-2 text-center border-bottom">
												<span v-if="$i18n.locale === 'uz'">2 mlrd. so’m</span>
												<span v-if="$i18n.locale === 'ru'">2 млрд. сум</span>
												<span v-if="$i18n.locale === 'en'">2 billion sum</span>
											</td>
										</tr>
										<tr>
											<template v-if="$i18n.locale === 'uz'">
												<td class="pa-2 border-right text-center border-bottom">Biznes plus
												</td>
												<td class="pa-2 border-right text-center border-bottom">Ikkilamchi
												</td>
												<td class="pa-2 border-right text-center border-bottom">20 mln.
													so’m
												</td>
												<td class="pa-2 text-center border-bottom">1 mlrd. so’m</td>
											</template>
											<template v-if="$i18n.locale === 'ru'">
												<td class="pa-2 border-right text-center border-bottom">Бизнес
													плюс
												</td>
												<td class="pa-2 border-right text-center border-bottom">Вторичный
												</td>
												<td class="pa-2 border-right text-center border-bottom">20 млн.
													сум
												</td>
												<td class="pa-2 text-center border-bottom">1 млрд. сум</td>
											</template>
											<template v-if="$i18n.locale === 'en'">
												<td class="pa-2 border-right text-center border-bottom">Business
													plus
												</td>
												<td class="pa-2 border-right text-center border-bottom">Secondary
												</td>
												<td class="pa-2 border-right text-center border-bottom">20 mln.
													sum
												</td>
												<td class="pa-2 text-center border-bottom">1 billion sum</td>
											</template>
										</tr>
										<tr>
											<template v-if="$i18n.locale === 'uz'">
												<td class="pa-2 border-right text-center">Faol tadbirkor</td>
												<td class="pa-2 border-right text-center">Asosiy</td>
												<td class="pa-2 border-right text-center">10 mln. so’m</td>
												<td class="pa-2 text-center">800 mln. so’m</td>
											</template>
											<template v-if="$i18n.locale === 'ru'">
												<td class="pa-2 border-right text-center">Фаол тадбиркор</td>
												<td class="pa-2 border-right text-center">Основной</td>
												<td class="pa-2 border-right text-center">10 млн. сум</td>
												<td class="pa-2 text-center">800 млн. сум</td>
											</template>
											<template v-if="$i18n.locale === 'en'">
												<td class="pa-2 border-right text-center">Faol tadbirkor</td>
												<td class="pa-2 border-right text-center">Basic</td>
												<td class="pa-2 border-right text-center">10 mln. sum</td>
												<td class="pa-2 text-center">800 mln. sum</td>
											</template>
										</tr>
									</v-simple-table>
								</div>
							</template>

							<template v-else>
								<span v-if="$i18n.locale === 'en'" v-html="creditDetailModel.description_en" />
								<span v-if="$i18n.locale === 'ru'" v-html="creditDetailModel.description_ru" />
								<span v-if="$i18n.locale === 'uz'" v-html="creditDetailModel.description_uz" />
							</template>
						</app-small-business-credit-calc>
					</div>

					<div class="tab-content-items" data-item="content">
						<terms-and-conditions :property="property" />
					</div>

					<div class="tab-content-items" data-item="content">
						<documents :documents="documents" />
					</div>
					<!--					<div class="tab-content-items" data-item="content">-->
					<!--						<payment-methods :property="property" />-->
					<!--					</div>-->
				</div>
			</v-container>
		</div>

		<section class="py-8">
			<v-container>
				<h1 class="font-600 dark-text">
					<I18nVue t="Credit_Detail.step_text" />
				</h1>
				<I18nVue t="Credit_Detail.step_body" class="text--h3 grey--text d-block mt-2 mb-10" />

				<v-row>
					<v-col lg="3" sm="6">
						<div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
							<h1 class="font-300 text-extra-large primary-text">1</h1>

							<v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

							<h4 class="dark-text">
								<I18nVue t="Credit_Detail.step1" />
							</h4>
						</div>
					</v-col>

					<v-col lg="3" sm="6">
						<div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
							<h1 class="font-300 text-extra-large primary-text">2</h1>

							<v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

							<h4 class="dark-text">
								<I18nVue t="Credit_Detail.step2" />
							</h4>
						</div>
					</v-col>

					<v-col lg="3" sm="6">
						<div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
							<h1 class="font-300 text-extra-large primary-text">3</h1>

							<v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

							<h4 class="dark-text">
								<I18nVue t="Credit_Detail.step3" />
							</h4>
						</div>
					</v-col>

					<v-col lg="3" sm="6">
						<div
							class="
                                transition-all
                                py-10
                                px-7
                                rounded-lg
                                h-100
                                mx-2
                                primary-bg
                                d-flex
                                flex-column
                                align-start
                            "
						>
							<h2 class="font-600">
								<I18nVue t="Credit_Detail.step4" />
							</h2>

							<h5 class="font-300 my-4">
								<I18nVue t="Credit_Detail.step5" />
							</h5>

							<v-btn
								:to="{ name: 'OnlineCredit' }"
								depressed
								color="rgba(var(--main-primary), 1)"
								rounded
								min-width="192"
								min-height="50"
								class="mt-auto"
								style="background-color: #fff"
								:disabled="creditDetailModel.is_available && !creditDetailModel.is_available"
							>
								<I18nVue t="application_form" class="primary-text font-700" />
							</v-btn>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</section>
	</div>
</template>

<script>
import AppSmallBusinessCreditCalc from "@/components/AppSmallBusinessCreditCalc";
import TermsAndConditions from "./components/TermsAndConditions";
import Documents from "./components/Documents";
import PaymentMethods from "./components/PaymentMethods";
import { DownloadIcon } from "vue-feather-icons";
import { appTab } from "@/utils/frontend";
import I18nVue from "@/I18nVue";

export default {
	name: "index",
	components: {
		AppSmallBusinessCreditCalc,
		I18nVue,
		TermsAndConditions,
		Documents,
		PaymentMethods,
		DownloadIcon
	},
	data() {
		return {
			creditDetailModel: {},
			property: null,
			documents: null,
			referenceList: []
		};
	},
	mounted() {
		this.getReferenceList();
		const $tabHeaderItems = document.querySelectorAll("[data-item=\"header\"]");
		const $tabContentItems = document.querySelectorAll("[data-item=\"content\"]");

		appTab($tabHeaderItems, $tabContentItems);

		this.$http.get(`/1/credit/${this.$route.params.id}/`, {
			params: {
				category: 7
			}
		}).then(({ data }) => {
			this.creditDetailModel = data;
		});
		this.$http.get(`/1/credit/${this.$route.params.id}/property/`, {
			params: {
				category: 7
			}
		}).then(({ data }) => {
			this.property = data.results;
		});
		this.$http.get(`/1/credit/${this.$route.params.id}/documents/`, {
			params: {
				category: 7
			}
		}).then(({ data }) => {
			this.documents = data.results;
		});
	},
	methods: {
		getReferenceList() {
			if (this.$route.params.id) {
				this.$store.state.CREATED_CREDIT_ID = this.$route.params.id;
			}

			this.$http.get(`/1/credit/${this.$store.state.CREATED_CREDIT_ID}/reference/`)
				.then(({ data }) => {

					this.referenceList = data.results;

				});
		}
	}
};
</script>

<style>
.credit-meta-items {
	flex-grow: 0 !important;
}
</style>
