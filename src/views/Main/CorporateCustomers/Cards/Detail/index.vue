<template>
	<div class="card-detail-view">
		<v-container>
			<div class="detail-view-content">
				<v-row>
					<v-col lg="6">
						<v-responsive :aspect-ratio="4 / 3">
							<img
								:src="
                                    cardDetailModel.card_image &&
                                    $http.defaults.baseURL + cardDetailModel.card_image.url
                                "
								alt=""
								class="p-absolute img-contain detail-img"
							/>
						</v-responsive>
					</v-col>

					<v-col lg="6">
						<div class="pl-lg-16">
							<p class="text-lg-right">
								<I18nVue t="updated" />
								{{ cardDetailModel.modified_date && cardDetailModel.modified_date | filterDate }}
							</p>

							<h1 class="font-700 text-extra-large-3 dark-text">
								<I18nVue
									:uz="cardDetailModel.name_uz"
									:ru="cardDetailModel.name_ru"
									:en="cardDetailModel.name_en"
								/>
							</h1>
							<h2 class="dark-text font-600 mt-3">
								{{
									cardDetailModel.type === "milliy_valyutada"
										? $t('extension3')
										: cardDetailModel.type === "aqsh_dollarida"
											? $t('extension2')
											: $t('extension1')
								}}
							</h2>
							<v-divider class="my-8" />
							<h4>
								<span v-if="$i18n.locale === 'en'" v-html="cardDetailModel.description_en" />
								<span v-if="$i18n.locale === 'ru'" v-html="cardDetailModel.description_ru" />
								<span v-if="$i18n.locale === 'uz'" v-html="cardDetailModel.description_uz" />
							</h4>
							<div class="credit-meta d-flex flex-wrap mb-13 w-100 mt-10">
								<div class="credit-meta-items d-flex align-center pb-3 dark-text">
									<h1 class="text-extra-large-4 mr-3 line-base font-300">
										<I18nVue
											:uz="cardDetailModel.card_process_uz"
											:ru="cardDetailModel.card_process_ru"
											:en="cardDetailModel.card_process_en"
										/>
									</h1>
									<div class="d-flex flex-column h-100">
										<h5 class="font-600">
											<I18nVue t='Cooperative.Cards.sum2'/>
										</h5>
										<I18nVue
											t="Cards.detail.issue"
											class="text-small d-block font-600 line-base pb-1 mt-auto"
										/>
									</div>
								</div>

								<div class="credit-meta-items d-flex align-center pb-3 dark-text">
									<h1 class="text-extra-large-4 mr-3 line-base font-300">
										{{ cardDetailModel.card_currency }}
									</h1>
									<div class="d-flex flex-column h-100">
										<span v-if="cardDetailModel.card_currency === 'USD'">
	                                        <I18nVue t='Cooperative.Cards.usd'/>
	                                    </span>
										<span v-else>
	                                        <I18nVue t='Cooperative.Cards.sum'/>
	                                    </span>
										<I18nVue
											t="Cards.detail.card_currency"
											class="text-small d-block font-600 line-base pb-1 mt-auto"
										/>
									</div>
								</div>

								<template v-if="cardDetailModel.deposit">
									<div class="credit-meta-items d-flex align-center pb-3 dark-text">
										<h1 class="text-extra-large-4 mr-3 line-base font-300">
											{{ cardDetailModel.deposit | filterNumberFormatThousands }}
										</h1>
										<div class="d-flex flex-column h-100">
											<h5 class="font-600">{{ cardDetailModel.card_currency }}</h5>
											<span class="text-small d-block font-600 line-base pb-1 mt-auto">
	                                            <I18nVue t='Cards.detail.deposit'/>
	                                        </span>
										</div>
									</div>
								</template>

								<template v-if="cardDetailModel.expiry_date">
									<div class="credit-meta-items d-flex align-center pb-3 dark-text">
										<h1 class="text-extra-large-4 mr-3 line-base font-300">
											{{ cardDetailModel.expiry_date }}
										</h1>
										<div class="d-flex flex-column h-100">
											<h5 class="font-600"><I18nVue t='Cooperative.Cards.year'/></h5>
											<span class="text-small d-block font-600 line-base pb-1 mt-auto">
	                                            <I18nVue t='Cooperative.Cards.expiration'/>
	                                        </span
	                                        >
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
							<I18nVue t="Cards.detail.about_card" />
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
							<I18nVue t="Cards.detail.recipes_and_conditions" />
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
							<I18nVue t="Cards.detail.files" />
						</a>
					</div>
				</div>
			</v-container>
		</div>

		<div class="view-toolbar-content py-16 overflow-hidden">
			<v-container class="py-0">
				<div class="app-tab-content p-relative">
					<div class="tab-content-items active" data-item="content">
						<template v-if="layout">
							<about-card
								:about_description_uz="cardDetailModel.about_description_uz"
								:about_description_ru="cardDetailModel.about_description_ru"
								:about_description_en="cardDetailModel.about_description_en"
							/>
						</template>
					</div>
					<div class="tab-content-items" data-item="content">
						<h1 class="text-extra-large-4 font-700 dark-text mb-10">
							{{ $t('card_condition') }}
						</h1>

						<div class="credit-widget pa-7 rounded-lg app-ul">
                            <span
	                            v-if="$i18n.locale === 'en' && cardDetailModel.card_conditions"
	                            v-html="cardDetailModel.card_conditions.condition_en"
                            />
							<span
								v-if="$i18n.locale === 'ru' && cardDetailModel.card_conditions"
								v-html="cardDetailModel.card_conditions.condition_ru"
							/>
							<span
								v-if="$i18n.locale === 'uz' && cardDetailModel.card_conditions"
								v-html="cardDetailModel.card_conditions.condition_uz"
							/>
						</div>


					</div>
					<div class="tab-content-items" data-item="content">
						<DocumentCard />
					</div>
				</div>
			</v-container>
			<!--<pre>{{JSON.stringify(cardDetailModel, null, 2)}}</pre>-->
		</div>
	</div>
</template>

<script>
import AboutCard from "./components/AboutCard";
import { ChevronRightIcon, DownloadIcon } from "vue-feather-icons";
import { appTab } from "@/utils/frontend";
import I18nVue from "@/I18nVue";
import DocumentCard from "./components/DocumentCard";

export default {
	name: "index",
	components: {
		DocumentCard,
		I18nVue,
		AboutCard,
		ChevronRightIcon
	},
	data() {
		return {
			cardDetailModel: {},
			cardDetailDocsList: null,
			layout: false
		};
	},
	mounted() {
		const $tabHeaderItems = document.querySelectorAll("[data-item=\"header\"]");
		const $tabContentItems = document.querySelectorAll("[data-item=\"content\"]");

		appTab($tabHeaderItems, $tabContentItems);

		this.getOne();
	},
	methods: {
		getOne() {
			this.$http.get(`1/plastic_cards/${this.$route.params.id}/`, {
				params: {
					category: 6
				}
			}).then(({ data }) => {
				this.cardDetailModel = data;
				this.cardDetailDocsList = data.card_documents;
				this.layout = true;
				// console.log(this.cardDetailModel)
			});
		}
	}
};
</script>

<style></style>
