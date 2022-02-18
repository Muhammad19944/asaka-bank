<template>
	<div class="credit-calc-view">
		<div class="view-toolbar mt-16">
			<v-container class="py-0">
				<div class="app-tab-header px-3 d-flex">
					<div class="tab-header-items text-center mr-7 active" data-item="header">
						<a class="navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block">
							<span>
								<I18nVue t='Credits.service.calc_title'/>
							</span>
						</a>
					</div>
					<div class="tab-header-items text-center mr-7" data-item="header">
						<a class="navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block">
							<span>
								<I18nVue t='Credits.service.application_title'/>
							</span>
						</a>
					</div>
				</div>
			</v-container>
		</div>

		<div class="view-toolbar-content py-16">
			<v-container class="py-0">
				<div class="app-tab-content p-relative">
					<div class="tab-content-items active" data-item="content">
						<app-online-credit-calc @emit:up="generateTable" />
					</div>
					<div class="tab-content-items" data-item="content">
						<app-status-application />
					</div>
				</div>
			</v-container>
		</div>

		<!-- CREDIT GENERATED TABLE -->
		<transition name="fade">
			<template v-if="generateTableModel.isTableGenerated">
				<div class="generated-table-modal p-fixed w-100 h-100 d-flex align-center justify-center">
					<div class="generated-table w-100 overflow-y-auto rounded">
						<div class="generated-table-content pa-8">
							<div class="d-flex align-center justify-space-between mb-5">
								<h2 class="font-600">
									<I18nVue t='CreditCalculator.payment_table'/>
								</h2>

								<v-btn @click="generateTableModel.isTableGenerated = false" icon depressed color="danger" large>
									<x-icon size="2x" class="custom-class"></x-icon>
								</v-btn>
							</div>

							<div class="app-table mb-7">
								<v-simple-table class="app-table app-table__border">
									<template v-slot:default>
										<tbody>
										<tr>
											<td class="text-left py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.credit_type'/>:</h5>
											</td>
											<td class="text-left py-4">
												<template v-if="$i18n.locale === 'uz'">
													<h5 class="font-600">{{ generateTableModel.tableHeader.creditType.title_uz }}</h5>
												</template>

												<template v-if="$i18n.locale === 'ru'">
													<h5 class="font-600">{{ generateTableModel.tableHeader.creditType.title_ru }}</h5>
												</template>

												<template v-if="$i18n.locale === 'en'">
													<h5 class="font-600">{{ generateTableModel.tableHeader.creditType.title_en }}</h5>
												</template>
											</td>
										</tr>
										<tr>
											<td class="py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.credit_period'/>:</h5>
											</td>
											<td class="py-4">
												<template v-if="$i18n.locale === 'uz'">
													<h5 class="font-600">{{ generateTableModel.tableHeader.creditPeriod.month }} oy</h5>
												</template>

												<template v-if="$i18n.locale === 'ru'">
													<h5 class="font-600">{{ generateTableModel.tableHeader.creditPeriod.month }} месяц</h5>
												</template>

												<template v-if="$i18n.locale === 'en'">
													<h5 class="font-600">{{ generateTableModel.tableHeader.creditPeriod.month }} month</h5>
												</template>
											</td>
										</tr>
										<tr>
											<td class="py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.annual_rate'/>:</h5>
											</td>
											<td class="py-4">
												<h5 v-if='generateTableModel.tableHeader.interestRate.percent' class="font-600">{{ generateTableModel.tableHeader.interestRate.percent }}%</h5>
												<h5 v-else class="font-600">{{ generateTableModel.tableHeader.generalPercent }}%</h5>
											</td>
										</tr>
										<tr>
											<td class="py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.initial_payment'/>:</h5>
											</td>
											<td class="py-4">
												<h5 v-if='generateTableModel.tableHeader.initialPayment.value' class="font-600">{{ generateTableModel.tableHeader.initialPayment.value }}%</h5>
												<h5 v-else>-</h5>
											</td>
										</tr>
										<tr>
											<td class="py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.privilege_period'/>: </h5>
											</td>
											<td class="py-4">
												<template v-if="$i18n.locale === 'uz'">
													<h5 v-if='generateTableModel.tableHeader.gracePeriod.month' class="font-600">{{ generateTableModel.tableHeader.gracePeriod.month }} oy</h5>
													<h5 v-else>Mavjud emas</h5>
												</template>

												<template v-if="$i18n.locale === 'ru'">
													<h5 v-if='generateTableModel.tableHeader.gracePeriod.month' class="font-600">{{ generateTableModel.tableHeader.gracePeriod.month }} месяц</h5>
													<h5 v-else>Недоступен</h5>
												</template>

												<template v-if="$i18n.locale === 'en'">
													<h5 v-if='generateTableModel.tableHeader.gracePeriod.month' class="font-600">{{ generateTableModel.tableHeader.gracePeriod.month }} month</h5>
													<h5 v-else>Not available</h5>
												</template>
											</td>
										</tr>
										</tbody>
									</template>
								</v-simple-table>
							</div>

							<div class="app-table">
								<v-simple-table class="app-table app-table__border text-center">
									<template v-slot:default>
										<thead>
										<tr>
											<th width="75" class="text-center py-4">
												<h5 class="font-600">№</h5>
											</th>
											<th width="200" class="text-center py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.payment_period'/></h5>
											</th>
											<th width="150" class="text-center py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.date'/></h5>
											</th>
											<th width="275" class="text-center py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.debt'/></h5>
											</th>
											<th width="375" class="text-center py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.base_debt_payment'/></h5>
											</th>
											<th width="325"  class="text-center py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.interest_rate_payment'/></h5>
											</th>
											<template v-if='generateTableModel.tableHeader.gracePeriod.month'>
												<th width="325"  class="text-center py-4">
													<h5 class="font-600"><I18nVue t='CreditCalculator.privilege_period'/></h5>
												</th>
											</template>
											<th width="250" class="text-center py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.total_payment'/></h5>
											</th>
										</tr>
										</thead>
										<tbody>
										<tr v-for="(item, index) in generateTableModel.tableContent">
											<td class="py-4">
												<h5 class="font-600">{{ index + 1 }}</h5>
											</td>
											<td class="py-4">
												<h5 class="font-600">{{ item.dateFormat }}</h5>
											</td>
											<td class="py-4">
												<h5 class="font-600">{{ item.date }}</h5>
											</td>

											<td class="py-4">
												<h5 class="font-600">{{ item.amountPayment }}</h5>
											</td>
											<td class="py-4">
												<h5 class="font-600">{{ item.loanPayment }}</h5>
											</td>
											<td class="py-4">
												<h5 class="font-600">{{ item.interestPayment }}</h5>
											</td>
											<template v-if='generateTableModel.tableHeader.gracePeriod.month'>
												<td class="py-4">
													<h5 class="font-600">{{ item.gracePeriodPayment }}</h5>
												</td>
											</template>
											<td class="py-4">
												<h5 class="font-600">{{ item.total }}</h5>
											</td>
										</tr>
										</tbody>
										<tfoot>
										<tr>
											<td></td>
											<td class="py-4 text-left" colspan="3">
												<h4 class="font-700"><I18nVue t='CreditCalculator.total'/>:</h4>
											</td>
											<td class="py-4">
												<h4 class="font-700">
													{{ generateTableModel.tableFooter.amountPayment }}
												</h4>
											</td>
											<td class="py-4">
												<h4 class="font-700">
													{{ generateTableModel.tableFooter.additionalPayment }}
												</h4>
											</td>
											<template v-if='generateTableModel.tableHeader.gracePeriod.month'>
												<td></td>
											</template>
											<td class="py-4">
												<h4 class="font-700">
													{{ generateTableModel.tableFooter.total }}
												</h4>
											</td>
										</tr>
										</tfoot>
									</template>
								</v-simple-table>
							</div>
						</div>
					</div>
				</div>
			</template>
		</transition>
		<!-- END CREDIT GENERATED TABLE -->
	</div>
</template>

<script>
import AppOnlineCreditCalc from "@/components/AppOnlineCreditCalc";
import AppStatusApplication from "@/components/AppStatusApplication";
import { appTab } from "@/utils/frontend";
import { XIcon } from 'vue-feather-icons'
import I18nVue from '@/I18nVue'

export default {
	name: "index",
	components: {
		AppOnlineCreditCalc,
		AppStatusApplication,
		XIcon,
		I18nVue
	},
	data() {
		return {
			generateTableModel: {
				isTableGenerated: false,
				creditTypeText: null,
				tableHeader: {},
				tableContent: []
			}
		}
	},
	mounted() {
		const $tabHeaderItems = document.querySelectorAll('[data-item="header"]')
		const $tabContentItems = document.querySelectorAll('[data-item="content"]')

		appTab($tabHeaderItems, $tabContentItems)
	},
	methods: {
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
}
</script>

<style>

</style>
