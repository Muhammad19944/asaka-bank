<template>
	<div class="save-money-view">
		<v-container class="pb-16">
			<div class="detail-view-content">
				<v-row>
					<v-col md="6">
						<v-responsive :aspect-ratio="7/5">
							<img :src="saveMoneyModel.image && ($http.defaults.baseURL + saveMoneyModel.image.url)"
							     alt="Credit image" class="w-100 h-100 img-contain p-absolute" />
						</v-responsive>
					</v-col>

					<v-col md="6">
						<div class="pl-lg-16">
							<p class="text-lg-right">
								<I18nVue t="updated" />
								{{ saveMoneyModel.modified_date && saveMoneyModel.modified_date | filterDate }}
							</p>

							<h1 class="font-700 text-extra-large-4 dark-text mt-10 mt-sm-0">
								<span v-if='$i18n.locale === "en"' v-html="saveMoneyModel.title_en" />
								<span v-if='$i18n.locale === "ru"' v-html="saveMoneyModel.title_ru" />
								<span v-if='$i18n.locale === "uz"' v-html="saveMoneyModel.title_uz" />
							</h1>
							<h2 class="dark-text font-600 mt-3">
								<span v-if='$i18n.locale === "en"' v-html="saveMoneyModel.description_en" />
								<span v-if='$i18n.locale === "ru"' v-html="saveMoneyModel.description_ru" />
								<span v-if='$i18n.locale === "uz"' v-html="saveMoneyModel.description_uz" />
							</h2>

							<v-divider class="my-8" />

							<h4>
								<span v-if='$i18n.locale === "en"' v-html="saveMoneyModel.sub_description_en" />
								<span v-if='$i18n.locale === "ru"' v-html="saveMoneyModel.sub_description_ru" />
								<span v-if='$i18n.locale === "uz"' v-html="saveMoneyModel.sub_description_uz" />
							</h4>
						</div>
					</v-col>
				</v-row>
			</div>
		</v-container>

		<div class="best-offers-view section mt-16">
			<v-container class="p-relative">
				<div class="view-title mb-10">
					<h1 class="font-600 dark-text align-self-center mb-3">
						<I18nVue t="SaveMoney.deposit_box" />
					</h1>
				</div>

				<v-row>
					<v-col lg="8">
						<v-row>
							<v-col md="6">
								<app-information-card>
									<template #image>
										<PrivacyIcon class="size-lg fill-primary" />
									</template>

									<template #title>
										<I18nVue t="SaveMoney.privacy" />
									</template>

									<template #description>
										<I18nVue t="SaveMoney.safety_guaranteed" />
									</template>
								</app-information-card>
							</v-col>

							<v-col md="6">
								<app-information-card>
									<template #image>
										<SafesIcon class="size-lg fill-primary" />
									</template>

									<template #title>
										<I18nVue t="SaveMoney.reliable" />
									</template>

									<template #description>
										<I18nVue t="SaveMoney.cash" />
									</template>
								</app-information-card>
							</v-col>

							<v-col md="6">
								<app-information-card>
									<template #image>
										<Globe2Icon class="size-lg fill-primary" />
									</template>

									<template #title>
										<I18nVue t="SaveMoney.comfortable" />
									</template>

									<template #description>
										<I18nVue t="SaveMoney.check" />
									</template>
								</app-information-card>
							</v-col>

							<v-col md="6">
								<app-information-card>
									<template #image>
										<UnlimIcon class="size-lg fill-primary" />
									</template>

									<template #title>
										<I18nVue t="SaveMoney.unlimited" />
									</template>

									<template #description>
										<I18nVue t="SaveMoney.rent" />
									</template>
								</app-information-card>
							</v-col>
						</v-row>
					</v-col>

					<v-col lg="4">
						<div class="app-slide-card pa-6 pa-sm-10 rounded-lg overflow-hidden p-relative h-100"
						     style="min-height: auto"
						>
							<h3 class="font-600 dark-text mb-5">
								<I18nVue t="SaveMoney.save" />
							</h3>

							<p class="dark-grey font-600">
								<I18nVue t="SaveMoney.safe" />
							</p>

							<p class="dark-grey font-600">
								<I18nVue t="SaveMoney.safe2" />
							</p>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</div>

		<div class="section">
			<v-container>
				<div class="view-title mb-10">
					<h1 class="font-600 dark-text align-self-center mb-3">
						<I18nVue t="SaveMoney.rent2" />
					</h1>
				</div>

				<v-row>
					<template v-for="item in depositBoxList">
						<v-col :key="item.id" lg="6" md="6">
							<div class="app-slide-card d-flex pa-5 pa-sm-10 rounded-lg overflow-hidden p-relative h-100"
							     style="min-height: auto">
								<div class="d-flex flex-wrap flex-sm-nowrap align-center w-100">
									<v-avatar size="80" class="mr-7">
										<SafesIcon class="size-lg fill-primary" />
									</v-avatar>

									<div class="w-100 mt-5 mt-sm-0">
										<h3 class="dark-text font-600 mb-2">
											<span v-if='$i18n.locale === "en"' v-html="item.name_en" />
											<span v-else-if='$i18n.locale === "ru"' v-html="item.name_ru" />
											<span v-else-if='$i18n.locale === "uz"' v-html="item.name_uz" />
										</h3>

										<div class="deposit-meta d-flex justify-space-between font-600 mb-1">
											<h5 class="dark-text mr-3">
												<I18nVue t="SaveMoney.boxSize" />
												:
											</h5>

											<h5 class="deposit-meta__value">{{ item.box_size }}
												<span v-if='$i18n.locale === "ru"'>мм</span>
												<span v-else>mm</span>
											</h5>
										</div>

										<div class="deposit-meta d-flex justify-space-between font-600 mb-1">
											<h5 class="dark-text mr-3">
												<I18nVue t="SaveMoney.rentPrice" />
												:
											</h5>

											<h5 class="deposit-meta__value">
												{{ item.rent_price | filterNumberFormatThousands }}
												<span v-if='$i18n.locale === "uz"'>so’m/oy+QQS</span>
												<span v-if='$i18n.locale === "en"'>sum/month+VAT</span>
												<span v-if='$i18n.locale === "ru"'>сум/месяц+НДС</span>
											</h5>
										</div>

										<div class="deposit-meta d-flex justify-space-between font-600 mb-1">
											<h5 class="dark-text mr-3">
												<I18nVue t="SaveMoney.period" />
												:
											</h5>

											<h5 class="deposit-meta__value">
                        <I18nVue :uz="item.period" :ru="item.period_ru" :en="item.period_en"/>
											</h5>
										</div>

										<div class="deposit-meta d-flex justify-space-between font-600 mb-1">
											<h5 class="dark-text mr-3">
												<I18nVue t="SaveMoney.lostKey" />
												:
											</h5>

											<h5 class="deposit-meta__value">
												{{ item.lost_key_fee | filterNumberFormatThousands }}
												<span v-if='$i18n.locale === "uz"'>so’m</span>
												<span v-if='$i18n.locale === "en"'>sum</span>
												<span v-if='$i18n.locale === "ru"'>сум</span>
											</h5>
										</div>
									</div>
								</div>
							</div>
						</v-col>
					</template>
				</v-row>
			</v-container>
		</div>

		<div class="mb-16">
			<v-container>
				<div class="view-title mb-10">
					<h1 class="font-600 dark-text align-self-center mb-3">
						<I18nVue t="SaveMoney.depositary" />
					</h1>
					<h3 class="grey-light-2">
						<I18nVue t="SaveMoney.where" />
					</h3>
				</div>

				<template v-for="item in filialList">
					<template v-if="item.is_for_depository === true">
						<div :key="item.id" class="credit-widget pa-6 pa-sm-10 rounded-lg overflow-hidden mb-8">
							<h2 class="font-600 dark-text">
								<span v-if='$i18n.locale === "uz"'>{{ item.name_uz }}</span>
								<span v-if='$i18n.locale === "en"'>{{ item.name_en }}</span>
								<span v-if='$i18n.locale === "ru"'>{{ item.name_ru }}</span>
							</h2>

							<h4 class="grey-light-2 my-2 my-sm-4">
								<I18nVue t="SaveMoney.address" />
								:
								<span v-if='$i18n.locale === "uz"'>{{ item.address_uz }}</span>
								<span v-if='$i18n.locale === "en"'>{{ item.address_en }}</span>
								<span v-if='$i18n.locale === "ru"'>{{ item.address_ru }}</span>
							</h4>

							<div>
                <span class="text-13"><I18nVue t="SaveMoney.for_contact" />: <a :href="'tel:' + item.depository_phone"
                                                                                class="text-decoration-none primary-text text--h4">{{ item.depository_phone
	                }}</a></span>
							</div>
						</div>
					</template>
				</template>
			</v-container>
		</div>

		<section class="section-service section">
			<v-container>
				<v-row>
					<v-col lg="4" md="6">
						<router-link
							:to="{ name: 'SMSNotification' }"
							class="app-slide-card pa-8 mx-2 rounded-lg overflow-hidden d-flex flex-column text-decoration-none p-relative"
						>
							<svg id="icon-smartphone" viewBox="0 0 496 496">
								<path
									d="M472 112H288V40c0-22.056-17.944-40-40-40H40C17.944 0 0 17.944 0 40v416c0 22.056 17.944 40 40 40h208c22.056 0 40-17.944 40-40V336h-16v80H16V80h256v32h-72c-13.232 0-24 10.768-24 24v116.688L108.688 320H472c13.232 0 24-10.768 24-24V136c0-13.232-10.768-24-24-24zM272 432v24c0 13.232-10.768 24-24 24H40c-13.232 0-24-10.768-24-24v-24h256zM16 64V40c0-13.232 10.768-24 24-24h208c13.232 0 24 10.768 24 24v24H16zm464 232c0 4.416-3.584 8-8 8H147.312L192 259.312V136c0-4.416 3.584-8 8-8h272c4.416 0 8 3.584 8 8v160z"
								></path>
								<path
									d="M416 208c-8.824 0-16-7.176-16-16s7.176-16 16-16 16 7.176 16 16h16c0-17.648-14.352-32-32-32s-32 14.352-32 32 14.352 32 32 32c8.824 0 16 7.176 16 16s-7.176 16-16 16-16-7.176-16-16h-16c0 17.648 14.352 32 32 32s32-14.352 32-32-14.352-32-32-32zM256 208c-8.824 0-16-7.176-16-16s7.176-16 16-16 16 7.176 16 16h16c0-17.648-14.352-32-32-32s-32 14.352-32 32 14.352 32 32 32c8.824 0 16 7.176 16 16s-7.176 16-16 16-16-7.176-16-16h-16c0 17.648 14.352 32 32 32s32-14.352 32-32-14.352-32-32-32zM345.752 160L336 199.016 326.248 160H304v104h16v-63.016l16 64 16-64V264h16V160zM112 448h64v16h-64zM240 336h16v16h-16zM208 336h16v16h-16zM176 336h16v16h-16zM144 336h16v16h-16z"
								></path>
							</svg>
							<div class="pr-6 pr-sm-16 mt-auto mt-auto">
								<h2 class="font-600 dark-text my-2">
									<I18nVue t="Cards.sms.title" />
								</h2>
								<h5 class="mb-0 main-grey">
									<I18nVue t="Cards.sms.body" />
								</h5>
							</div>
							<div class="slide-card-angle d-flex align-center justify-center">
								<chevron-right-icon size="2x" class="text-white" />
							</div>
						</router-link>
					</v-col>
					<v-col lg="4" md="6">
						<router-link
							:to="{ name: 'BankOffice' }"
							class="app-slide-card pa-8 mx-2 rounded-lg overflow-hidden d-flex flex-column text-decoration-none p-relative"
						>
							<svg id="icon-atm" viewBox="0 0 54 60">
								<path
									d="M10.789 17h19.475a1 1 0 0 0 .938-1.346l-4.053-11A1 1 0 0 0 26.211 4H6.736A1 1 0 0 0 5.8 5.346l4.053 11a1 1 0 0 0 .936.654zM25.514 6l3.315 9H11.486L8.171 6z"
								/>
								<path
									d="M1 15.212v36.959c-.003.796.314 1.56.879 2.122l5.413 5.413A1 1 0 0 0 8 60h28a1 1 0 0 0 1-1v-3h13a4 4 0 0 0 4-4V27a4 4 0 0 0-4-4H37v-3a.32.32 0 0 0-.007-.033.964.964 0 0 0-.055-.313l-7-19A1 1 0 0 0 29 0H1a1 1 0 0 0-.349.07C.629.079.608.085.587.1a.991.991 0 0 0-.274.184C.3.3.284.312.268.329a.916.916 0 0 0-.088.1.935.935 0 0 0-.08.152C.092.6.082.608.076.624a1.015 1.015 0 0 0-.069.34C.007.976 0 .987 0 1v8.538c0 1.085.19 2.161.561 3.18.291.8.44 1.643.439 2.494zm2 36.959V15.212c0-1.085-.19-2.161-.561-3.18A7.263 7.263 0 0 1 2 9.538V6.607l5 13.572v36.407l-3.707-3.707A1 1 0 0 1 3 52.171zM42 25v29h-9a2 2 0 0 1-2-2V27a2 2 0 0 1 2-2zm10 2v25a2 2 0 0 1-2 2h-1V25h1a2 2 0 0 1 2 2zm-5-2v29h-3V25zm-14-2a4 4 0 0 0-4 4v25a4 4 0 0 0 4 4h2v2H9V21h26v2zM28.3 2l6.262 17H8.7L2.435 2z"
								/>
								<path
									d="M12.707 10.707l2-2a1 1 0 1 0-1.414-1.414l-2 2a1 1 0 1 0 1.414 1.414zM13.293 13.707a1 1 0 0 0 1.414 0l5-5a1 1 0 1 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414zM25 25h-6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm-6 4v-2h6v2zM12 23a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM12 29a1 1 0 0 0-1 1v25a1 1 0 0 0 2 0V30a1 1 0 0 0-1-1zM34.058 46a3.5 3.5 0 1 0 4.884 0 3.5 3.5 0 1 0-4.884 0zM38 48.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM36.5 42a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
								/>
							</svg>
							<div class="pr-6 pr-sm-16 mt-auto mt-auto">
								<h2 class="font-600 dark-text my-2">
									<I18nVue t="Cards.bankomat.title" />
								</h2>

								<h5 class="mb-0 main-grey">
									<I18nVue t="Cards.bankomat.body" />
								</h5>
							</div>
							<div class="slide-card-angle d-flex align-center justify-center">
								<chevron-right-icon size="2x" class="text-white" />
							</div>
						</router-link>
					</v-col>
					<v-col lg="4" md="6">
						<router-link
							:to="{ name: 'BankOffice' }"
							class="app-slide-card pa-8 mx-2 rounded-lg overflow-hidden d-flex flex-column text-decoration-none p-relative"
						>
							<svg id="icon-atm-machine" viewBox="0 0 416.667 416.667">
								<path
									d="M384.667 27.896H32c-17.645 0-32 14.355-32 32v296.875c0 17.645 14.355 32 32 32h352.667c17.645 0 32-14.355 32-32V59.896c0-17.645-14.355-32-32-32zm16 328.875c0 8.822-7.178 16-16 16H32c-8.822 0-16-7.178-16-16V59.896c0-8.822 7.178-16 16-16h352.667c8.822 0 16 7.178 16 16v296.875z"
								/>
								<path
									d="M352.667 68.604H64c-13.233 0-24 10.767-24 24v167.334c0 13.233 10.767 24 24 24h288.667c13.233 0 24-10.767 24-24V92.604c0-13.233-10.767-24-24-24zm8 191.334c0 4.411-3.589 8-8 8H64c-4.411 0-8-3.589-8-8V92.604c0-4.411 3.589-8 8-8h288.667c4.411 0 8 3.589 8 8v167.334zM360.667 308.333a8 8 0 0 0 0 16v15.771h-72.208v-15.771h40.875a8 8 0 0 0 0-16h-40.875c-8.822 0-16 7.178-16 16v15.771c0 8.822 7.178 16 16 16h72.208c8.822 0 16-7.178 16-16v-15.771c0-8.822-7.178-16-16-16zM232 316.271h-7a8 8 0 0 0 0 16h7v7.833H56v-7.833h136.667a8 8 0 0 0 0-16H56c-8.822 0-16 7.178-16 16v7.833c0 8.822 7.178 16 16 16h176c8.822 0 16-7.178 16-16v-7.833c0-8.822-7.178-16-16-16z"
								/>
								<path
									d="M280.458 100.604H80.333a8 8 0 0 0-8 8v135.917a8 8 0 0 0 8 8h200.125a8 8 0 0 0 8-8V108.604a8 8 0 0 0-8-8zm-8 135.917h-28.313l-62.574-62.574a8.002 8.002 0 0 0-11.313 0 7.999 7.999 0 0 0 0 11.314l51.259 51.26H88.333V116.604H101.6l36.657 36.657c1.562 1.562 3.609 2.343 5.657 2.343s4.095-.781 5.657-2.343a7.999 7.999 0 0 0 0-11.314l-25.343-25.343h148.23v119.917zM336.833 108.938h-16.5a8 8 0 0 0 0 16h16.5a8 8 0 0 0 0-16zM336.833 228.854h-16.5a8 8 0 0 0 0 16h16.5a8 8 0 0 0 0-16zM336.833 188.604h-16.5a8 8 0 0 0 0 16h16.5a8 8 0 0 0 0-16zM336.833 148.604h-16.5a8 8 0 0 0 0 16h16.5a8 8 0 0 0 0-16z"
								/>
							</svg>
							<div class="pr-6 pr-sm-16 mt-auto mt-auto">
								<h2 class="font-600 dark-text my-2">
									<I18nVue t="Cards.inf.title" />
								</h2>
								<h5 class="mb-0 main-grey">
									<I18nVue t="Cards.inf.body" />
								</h5>
							</div>
							<div class="slide-card-angle d-flex align-center justify-center">
								<chevron-right-icon size="2x" class="text-white" />
							</div>
						</router-link>
					</v-col>
				</v-row>
			</v-container>
		</section>
	</div>
</template>

<script>
import AppInformationCard from "../../../../components/AppInformationCard";
import { ChevronRightIcon } from "vue-feather-icons";
import PrivacyIcon from "@/components/Icons/PrivacyIcon";
import SafesIcon from "@/components/Icons/SafesIcon";
import Globe2Icon from "@/components/Icons/Globe2Icon";
import UnlimIcon from "@/components/Icons/UnlimIcon";
import PhoneSMSIcon from "@/components/Icons/PhoneSMSIcon";
import CashMachineIcon from "@/components/Icons/CashMachineIcon";
import InfokioskIcon from "@/components/Icons/InfokioskIcon";
import I18nVue from "@/I18nVue";

export default {
	name: "index",
	components: {
		AppInformationCard,
		ChevronRightIcon,
		PrivacyIcon,
		SafesIcon,
		Globe2Icon,
		UnlimIcon,
		PhoneSMSIcon,
		CashMachineIcon,
		InfokioskIcon,
		I18nVue
	},
	data() {
		return {
			saveMoneyModel: {},
			depositBoxList: [],
			branchesList: [],
			filialList: []
		};
	},
	mounted() {
		this.getDeposit();
		this.getDepositoryBoxList();
		this.getBranchesList();
		this.getFilialList();
	},
	methods: {
		getFilialList() {
			this.$http.get("/1/filial/")
				.then(({ data }) => {
					this.filialList = data.results;
				});
		},

		getDeposit() {
			this.$http.get("/1/depository/")
				.then(({ data }) => {
					this.saveMoneyModel = data.results[0];
				});
		},

		/*
		*
		* */
		getDepositoryBoxList() {
			this.$http.get("/1/depository_box_type/")
				.then(({ data }) => {
					this.depositBoxList = data.results;
				});
		},

		/*
		*
		* */
		getBranchesList() {
			this.$http.get("/1/filial/")
				.then(({ data }) => {
					this.branchesList = data.results;

					// console.log(this.branchesList);
				});
		}
	}
};
</script>

<style>

</style>
