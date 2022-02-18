<template>
	<div class="detail-view">
		<v-container>
			<div class="detail-view-content">
				<v-row>
					<v-col lg="6">
						<div class="pr-16">
							<v-responsive :aspect-ratio="4 / 3">
								<img
									:src="creditDetailModel.image && this.$http.defaults.baseURL + creditDetailModel.image.url"
									alt=""
									class="p-absolute img-contain"
								/>
							</v-responsive>
						</div>
					</v-col>

					<v-col lg="6">
						<div class="pl-lg-16">
							<p class="text-lg-right">
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
								<template v-for='item in referenceList'>
									<div class="credit-meta-items d-flex align-center dark-text pb-3">
										<div class="d-flex align-center">
											<div class='mr-2 mt-4 mb-0 font-300'>
												<span v-if="$i18n.locale === 'uz'"><I18nVue v-html="item.text_left_uz" /></span>
												<span v-if="$i18n.locale === 'ru'"><I18nVue v-html="item.text_left_ru" /></span>
												<span v-if="$i18n.locale === 'en'"><I18nVue v-html="item.text_left_en" /></span>
											</div>
											<div>
												<I18nVue
													classes="text--h4 font-600"
													:uz='item.text_right_top_uz' :ru='item.text_right_top_ru' :en='item.text_right_top_en'
												/>
												<h6 class="grey--text font-600 mb-1">
													<I18nVue :uz='item.text_bottom_uz' :ru='item.text_bottom_ru' :en='item.text_bottom_en'/>
												</h6>
											</div>
										</div>
									</div>
								</template>
							</div>
						</div>
					</v-col>
				</v-row>
			</div>
		</v-container>
    <v-divider class="my-8" />

<!--COMMENTED TEMPLATE-->
		<template>
<!--      <div class="view-toolbar mt-16">-->
<!--        <v-container class="py-0">-->
<!--          <div class="app-tab-header d-flex">-->
<!--            <div class="tab-header-items text-center mr-7 active" data-item="header">-->
<!--              <a-->
<!--                  class="-->
<!--                                navigation-link navigation-link__hover-->
<!--                                p-relative-->
<!--                                text&#45;&#45;h4-->
<!--                                py-6-->
<!--                                font-600-->
<!--                                d-inline-block-->
<!--                            "-->
<!--              >-->
<!--                <I18nVue t="Credit_Detail.tab1" />-->
<!--              </a>-->
<!--            </div>-->
<!--            <div class="tab-header-items text-center mr-7" data-item="header">-->
<!--              <a-->
<!--                  class="-->
<!--                                navigation-link navigation-link__hover-->
<!--                                p-relative-->
<!--                                text&#45;&#45;h4-->
<!--                                py-6-->
<!--                                font-600-->
<!--                                d-inline-block-->
<!--                            "-->
<!--              >-->
<!--                <I18nVue t="Credit_Detail.tab2" />-->
<!--              </a>-->
<!--            </div>-->
<!--            <div class="tab-header-items text-center mr-7" data-item="header">-->
<!--              <a-->
<!--                  class="-->
<!--                                navigation-link navigation-link__hover-->
<!--                                p-relative-->
<!--                                text&#45;&#45;h4-->
<!--                                py-6-->
<!--                                font-600-->
<!--                                d-inline-block-->
<!--                            "-->
<!--              >-->
<!--                <I18nVue t="Credit_Detail.tab3" />-->
<!--              </a>-->
<!--            </div>-->
<!--            <div class="tab-header-items text-center mr-7" data-item="header">-->
<!--              <a-->
<!--                  class="-->
<!--                                navigation-link navigation-link__hover-->
<!--                                p-relative-->
<!--                                text&#45;&#45;h4-->
<!--                                py-6-->
<!--                                font-600-->
<!--                                d-inline-block-->
<!--                            "-->
<!--              >-->
<!--                <I18nVue t="Credit_Detail.tab4" />-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </v-container>-->
<!--      </div>-->


<!--      <div class="view-toolbar-content py-16 overflow-hidden">-->
<!--        <v-container class="py-0">-->
<!--          <div class="app-tab-content p-relative">-->
<!--            <div class="tab-content-items active" data-item="content">-->
<!--              <app-online-credit-calc @emit:up="generateTable" />-->
<!--            </div>-->

<!--            <div class="tab-content-items" data-item="content">-->
<!--              <terms-and-conditions :property="property" />-->
<!--            </div>-->

<!--            <div class="tab-content-items" data-item="content">-->
<!--              <documents />-->
<!--            </div>-->

<!--            <div class="tab-content-items" data-item="content">-->
<!--              <payment-methods :property="property" />-->
<!--            </div>-->
<!--          </div>-->
<!--        </v-container>-->
<!--      </div>-->


<!--      <section class="py-8">-->
<!--        <v-container>-->
<!--          <h1 class="font-600 dark-text">-->
<!--            <I18nVue t="Credit_Detail.step_text" />-->
<!--          </h1>-->
<!--          <I18nVue t="Credit_Detail.step_body" class="text&#45;&#45;h3 grey&#45;&#45;text d-block mt-2 mb-10" />-->

<!--          <v-row>-->
<!--            <v-col lg="3" sm="6">-->
<!--              <div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">-->
<!--                <h1 class="font-300 text-extra-large primary-text">1</h1>-->

<!--                <v-divider style="border-color: rgba(var(&#45;&#45;border-color), 1)" class="my-10" />-->

<!--                <h4 class="dark-text">-->
<!--                  <I18nVue t="Credit_Detail.step1" />-->
<!--                </h4>-->
<!--              </div>-->
<!--            </v-col>-->

<!--            <v-col lg="3" sm="6">-->
<!--              <div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">-->
<!--                <h1 class="font-300 text-extra-large primary-text">2</h1>-->

<!--                <v-divider style="border-color: rgba(var(&#45;&#45;border-color), 1)" class="my-10" />-->

<!--                <h4 class="dark-text">-->
<!--                  <I18nVue t="Credit_Detail.step2" />-->
<!--                </h4>-->
<!--              </div>-->
<!--            </v-col>-->

<!--            <v-col lg="3" sm="6">-->
<!--              <div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">-->
<!--                <h1 class="font-300 text-extra-large primary-text">3</h1>-->

<!--                <v-divider style="border-color: rgba(var(&#45;&#45;border-color), 1)" class="my-10" />-->

<!--                <h4 class="dark-text">-->
<!--                  <I18nVue t="Credit_Detail.step3" />-->
<!--                </h4>-->
<!--              </div>-->
<!--            </v-col>-->

<!--            <v-col lg="3" sm="6">-->
<!--              <div-->
<!--                  class="-->
<!--                                transition-all-->
<!--                                py-10-->
<!--                                px-7-->
<!--                                rounded-lg-->
<!--                                h-100-->
<!--                                mx-2-->
<!--                                primary-bg-->
<!--                                d-flex-->
<!--                                flex-column-->
<!--                                align-start-->
<!--                            "-->
<!--              >-->
<!--                <h2 class="font-600">-->
<!--                  <I18nVue t="Credit_Detail.step4" />-->
<!--                </h2>-->

<!--                <h5 class="font-300 my-4">-->
<!--                  <I18nVue t="Credit_Detail.step5" />-->
<!--                </h5>-->

<!--                <v-btn-->
<!--                    :to="{ name: 'OnlineCredit' }"-->
<!--                    depressed-->
<!--                    color="rgba(var(&#45;&#45;main-primary), 1)"-->
<!--                    rounded-->
<!--                    min-width="192"-->
<!--                    min-height="50"-->
<!--                    class="mt-auto"-->
<!--                    style="background-color: #fff"-->
<!--                    :disabled="creditDetailModel.is_available && !creditDetailModel.is_available"-->
<!--                >-->
<!--                  <I18nVue t="application_form" class="primary-text font-700" />-->
<!--                </v-btn>-->
<!--              </div>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--        </v-container>-->
<!--      </section>-->

<!--      &lt;!&ndash; CREDIT GENERATED TABLE &ndash;&gt;-->
<!--      <transition name="fade">-->
<!--        <template v-if="generateTableModel.isTableGenerated">-->
<!--          <div class="generated-table-modal p-fixed w-100 h-100 d-flex align-center justify-center">-->
<!--            <div class="generated-table w-100 overflow-y-auto rounded">-->
<!--              <div class="generated-table-content pa-8">-->
<!--                <div class="d-flex align-center justify-space-between mb-5">-->
<!--                  <h2 class="font-600">-->
<!--                    <I18nVue t='CreditCalculator.payment_table'/>-->
<!--                  </h2>-->

<!--                  <v-btn @click="generateTableModel.isTableGenerated = false" icon depressed color="danger" large>-->
<!--                    <x-icon size="2x" class="custom-class"></x-icon>-->
<!--                  </v-btn>-->
<!--                </div>-->

<!--                <div class="app-table mb-7">-->
<!--                  <v-simple-table class="app-table app-table__border">-->
<!--                    <template v-slot:default>-->
<!--                      <tbody>-->
<!--                      <tr>-->
<!--                        <td class="text-left py-4">-->
<!--                          <h5 class="font-600"><I18nVue t='CreditCalculator.credit_type'/>: </h5>-->
<!--                        </td>-->
<!--                        <td class="text-left py-4">-->
<!--                          <template v-if="$i18n.locale === 'uz'">-->
<!--                            <h5 class="font-600">{{ generateTableModel.tableHeader.creditType.title_uz }}</h5>-->
<!--                          </template>-->

<!--                          <template v-if="$i18n.locale === 'ru'">-->
<!--                            <h5 class="font-600">{{ generateTableModel.tableHeader.creditType.title_ru }}</h5>-->
<!--                          </template>-->

<!--                          <template v-if="$i18n.locale === 'en'">-->
<!--                            <h5 class="font-600">{{ generateTableModel.tableHeader.creditType.title_en }}</h5>-->
<!--                          </template>-->
<!--                        </td>-->
<!--                      </tr>-->
<!--                      <tr>-->
<!--                        <td class="py-4">-->
<!--                          <h5 class="font-600"><I18nVue t='CreditCalculator.credit_period'/>: </h5>-->
<!--                        </td>-->
<!--                        <td class="py-4">-->
<!--                          <template v-if="$i18n.locale === 'uz'">-->
<!--                            <h5 class="font-600">{{ generateTableModel.tableHeader.creditPeriod.month }} oy</h5>-->
<!--                          </template>-->

<!--                          <template v-if="$i18n.locale === 'ru'">-->
<!--                            <h5 class="font-600">{{ generateTableModel.tableHeader.creditPeriod.month }} месяц</h5>-->
<!--                          </template>-->

<!--                          <template v-if="$i18n.locale === 'en'">-->
<!--                            <h5 class="font-600">{{ generateTableModel.tableHeader.creditPeriod.month }} month</h5>-->
<!--                          </template>-->
<!--                        </td>-->
<!--                      </tr>-->
<!--                      <tr>-->
<!--                        <td class="py-4">-->
<!--                          <h5 class="font-600"><I18nVue t='CreditCalculator.annual_rate'/>: </h5>-->
<!--                        </td>-->
<!--                        <td class="py-4">-->
<!--                          <h5 v-if='generateTableModel.tableHeader.interestRate.percent' class="font-600">{{ generateTableModel.tableHeader.interestRate.percent }}%</h5>-->
<!--                          <h5 v-else class="font-600">{{ generateTableModel.tableHeader.generalPercent }}%</h5>-->
<!--                        </td>-->
<!--                      </tr>-->
<!--                      <tr>-->
<!--                        <td class="py-4">-->
<!--                          <h5 class="font-600"><I18nVue t='CreditCalculator.initial_payment'/>: </h5>-->
<!--                        </td>-->
<!--                        <td class="py-4">-->
<!--                          <h5 v-if='generateTableModel.tableHeader.initialPayment.value' class="font-600">{{ generateTableModel.tableHeader.initialPayment.value }}%</h5>-->
<!--                          <h5 v-else>-</h5>-->
<!--                        </td>-->
<!--                      </tr>-->
<!--                      <tr>-->
<!--                        <td class="py-4">-->
<!--                          <h5 class="font-600"><I18nVue t='CreditCalculator.privilege_period'/>:</h5>-->
<!--                        </td>-->
<!--                        <td class="py-4">-->
<!--                          <template v-if="$i18n.locale === 'uz'">-->
<!--                            <h5 v-if='generateTableModel.tableHeader.gracePeriod.month' class="font-600">{{ generateTableModel.tableHeader.gracePeriod.month }} oy</h5>-->
<!--                            <h5 v-else>Mavjud emas</h5>-->
<!--                          </template>-->

<!--                          <template v-if="$i18n.locale === 'ru'">-->
<!--                            <h5 v-if='generateTableModel.tableHeader.gracePeriod.month' class="font-600">{{ generateTableModel.tableHeader.gracePeriod.month }} месяц</h5>-->
<!--                            <h5 v-else>Недоступен</h5>-->
<!--                          </template>-->

<!--                          <template v-if="$i18n.locale === 'en'">-->
<!--                            <h5 v-if='generateTableModel.tableHeader.gracePeriod.month' class="font-600">{{ generateTableModel.tableHeader.gracePeriod.month }} month</h5>-->
<!--                            <h5 v-else>Not available</h5>-->
<!--                          </template>-->
<!--                        </td>-->
<!--                      </tr>-->
<!--                      </tbody>-->
<!--                    </template>-->
<!--                  </v-simple-table>-->
<!--                </div>-->

<!--                <div class="app-table">-->
<!--                  <v-simple-table class="app-table app-table__border text-center">-->
<!--                    <template v-slot:default>-->
<!--                      <thead>-->
<!--                      <tr>-->
<!--                        <th width="75" class="text-center py-4">-->
<!--                          <h5 class="font-600">№</h5>-->
<!--                        </th>-->
<!--                        <th width="200" class="text-center py-4">-->
<!--                          <h5 class="font-600"><I18nVue t='CreditCalculator.payment_period'/> </h5>-->
<!--                        </th>-->
<!--                        <th width="150" class="text-center py-4">-->
<!--                          <h5 class="font-600"><I18nVue t='CreditCalculator.date'/> </h5>-->
<!--                        </th>-->
<!--                        <th width="275" class="text-center py-4">-->
<!--                          <h5 class="font-600"><I18nVue t='CreditCalculator.debt'/> </h5>-->
<!--                        </th>-->
<!--                        <th width="375" class="text-center py-4">-->
<!--                          <h5 class="font-600"><I18nVue t='CreditCalculator.base_debt_payment'/> </h5>-->
<!--                        </th>-->
<!--                        <th width="325"  class="text-center py-4">-->
<!--                          <h5 class="font-600"><I18nVue t='CreditCalculator.interest_rate_payment'/></h5>-->
<!--                        </th>-->
<!--                        <template v-if='generateTableModel.tableHeader.gracePeriod.month'>-->
<!--                          <th width="325"  class="text-center py-4">-->
<!--                            <h5 class="font-600"><I18nVue t='CreditCalculator.privilege_period'/></h5>-->
<!--                          </th>-->
<!--                        </template>-->
<!--                        <th width="250" class="text-center py-4">-->
<!--                          <h5 class="font-600"><I18nVue t='CreditCalculator.total_payment'/> </h5>-->
<!--                        </th>-->
<!--                      </tr>-->
<!--                      </thead>-->
<!--                      <tbody>-->
<!--                      <tr v-for="(item, index) in generateTableModel.tableContent">-->
<!--                        <td class="py-4">-->
<!--                          <h5 class="font-600">{{ index + 1 }}</h5>-->
<!--                        </td>-->
<!--                        <td class="py-4">-->
<!--                          <h5 class="font-600">{{ item.dateFormat }}</h5>-->
<!--                        </td>-->
<!--                        <td class="py-4">-->
<!--                          <h5 class="font-600">{{ item.date }}</h5>-->
<!--                        </td>-->

<!--                        <td class="py-4">-->
<!--                          <h5 class="font-600">{{ item.amountPayment }}</h5>-->
<!--                        </td>-->
<!--                        <td class="py-4">-->
<!--                          <h5 class="font-600">{{ item.loanPayment }}</h5>-->
<!--                        </td>-->
<!--                        <td class="py-4">-->
<!--                          <h5 class="font-600">{{ item.interestPayment }}</h5>-->
<!--                        </td>-->
<!--                        <template v-if='generateTableModel.tableHeader.gracePeriod.month'>-->
<!--                          <td class="py-4">-->
<!--                            <h5 class="font-600">{{ item.gracePeriodPayment }}</h5>-->
<!--                          </td>-->
<!--                        </template>-->
<!--                        <td class="py-4">-->
<!--                          <h5 class="font-600">{{ item.total }}</h5>-->
<!--                        </td>-->
<!--                      </tr>-->
<!--                      </tbody>-->
<!--                      <tfoot>-->
<!--                      <tr>-->
<!--                        <td></td>-->
<!--                        <td class="py-4 text-left" colspan="3">-->
<!--                          <h4 class="font-700"><I18nVue t='CreditCalculator.total'/>: </h4>-->
<!--                        </td>-->
<!--                        <td class="py-4">-->
<!--                          <h4 class="font-700">-->
<!--                            {{ generateTableModel.tableFooter.amountPayment }}-->
<!--                          </h4>-->
<!--                        </td>-->
<!--                        <td class="py-4">-->
<!--                          <h4 class="font-700">-->
<!--                            {{ generateTableModel.tableFooter.additionalPayment }}-->
<!--                          </h4>-->
<!--                        </td>-->
<!--                        <template v-if='generateTableModel.tableHeader.gracePeriod.month'>-->
<!--                          <td></td>-->
<!--                        </template>-->
<!--                        <td class="py-4">-->
<!--                          <h4 class="font-700">-->
<!--                            {{ generateTableModel.tableFooter.total }}-->
<!--                          </h4>-->
<!--                        </td>-->
<!--                      </tr>-->
<!--                      </tfoot>-->
<!--                    </template>-->
<!--                  </v-simple-table>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </template>-->
<!--      </transition>-->
<!--      &lt;!&ndash; END CREDIT GENERATED TABLE &ndash;&gt;-->
    </template>
	</div>
</template>

<script>
import I18nVue from "@/I18nVue";
import AppOnlineCreditCalc from "@/components/AppOnlineCreditCalc";
import TermsAndConditions from "./components/TermsAndConditions";
import Documents from "./components/Documents";
import PaymentMethods from "./components/PaymentMethods";

import { ChevronRightIcon, XIcon } from "vue-feather-icons";
import { appTab } from "@/utils/frontend";

export default {
	name: "index",
	components: {
		I18nVue,
		AppOnlineCreditCalc,
		TermsAndConditions,
		Documents,
		PaymentMethods,
		ChevronRightIcon,
		XIcon
	},
	data() {
		return {
			creditDetailModel: {
				image: {
					url: {}
				}
			},
			property: null,
			documents: null,
			referenceList: [],
			generateTableModel: {
				isTableGenerated: false,
				creditTypeText: null,
				tableHeader: {},
				tableContent: []
			}
		};
	},
	mounted() {
		this.getList();
		this.getReferenceList();

		const $tabHeaderItems = document.querySelectorAll("[data-item=\"header\"]");
		const $tabContentItems = document.querySelectorAll("[data-item=\"content\"]");

		appTab($tabHeaderItems, $tabContentItems);

		this.getOne();
		this.getOneProp();

		this.$http.get(`/1/credit/${this.$route.params.id}/documents/`).then(({ data }) => {
			this.documents = data.results;
		});
	},
	methods: {
		getOne() {
			this.$http.get(`/1/credit/${this.$route.params.id}/`).then(({ data }) => {
				this.creditDetailModel = data;
			});
		},

		getReferenceList(){
			if(this.$route.params.id){
				this.$store.state.CREATED_CREDIT_ID = this.$route.params.id
			}
			this.$http.get(`${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/reference/`)
			.then(({ data }) => {
				this.referenceList = data.results;
			})
		},

		/*
		*
		* */
		getList(){

			if(this.$route.params.id){
				this.$store.state.CREATED_CREDIT_ID = this.$route.params.id
			}

			this.$http.get(`${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/reference/`)
			.then(({ data }) => {
				console.log(data.results)
			})
		},

		/*
		 *
		 * */
		getOneProp() {
			this.$http.get(`/1/credit/${this.$route.params.id}/property/`).then(({ data }) => {
				this.property = data.results;
			});
		},

		/*
		*
		* */
		generateTable(arg) {
			this.generateTableModel.isTableGenerated = arg.isTableGenerated
			this.generateTableModel.tableHeader = arg.tableHeader
			this.generateTableModel.tableContent = arg.tableContent
			this.generateTableModel.tableFooter = arg.tableFooter
			this.creditTypeText = arg.creditTypeText
		}
	}
};
</script>

<style></style>
