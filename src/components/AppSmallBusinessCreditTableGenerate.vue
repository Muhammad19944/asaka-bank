<template>
	<div class="generated-table-modal p-fixed w-100 h-100 d-flex align-center justify-center">
		<div class="generated-table w-100 overflow-y-auto rounded">
			<div class="generated-table-content pa-8">
				<div class="d-flex align-center justify-space-between mb-5">
					<h2 class="font-600">
						<I18nVue t='CreditCalculator.payment_table'/>
					</h2>

					<v-btn icon depressed color="danger" large>
						<x-icon size="2x"></x-icon>
					</v-btn>
				</div>

				<div class="app-table mb-7">
					<v-simple-table class="app-table app-table__border">
						<template v-slot:default>
							<tbody>
								<tr>
									<td class="text-left py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.credit_type'/>:
										</h5>
									</td>
									<td class="text-left py-4">
										<template v-if="$i18n.locale === 'uz'">
											<h5 class="font-600">213</h5>
										</template>

										<template v-if="$i18n.locale === 'ru'">
											<h5 class="font-600">2323</h5>
										</template>

										<template v-if="$i18n.locale === 'en'">
											<h5 class="font-600">4343</h5>
										</template>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600"><I18nVue t='CreditCalculator.credit_period'/>:</h5>
									</td>
									<td class="py-4">
										<template v-if="$i18n.locale === 'uz'">
											<h5 class="font-600">2 oy</h5>
										</template>

										<template v-if="$i18n.locale === 'ru'">
											<h5 class="font-600">2 месяц</h5>
										</template>

										<template v-if="$i18n.locale === 'en'">
											<h5 class="font-600">4 month</h5>
										</template>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600"><I18nVue t='CreditCalculator.annual_rate'/>:</h5>
									</td>
									<td class="py-4">
										<h5 v-if="true" class="font-600">1 %</h5>
										<h5 v-else class="font-600">2 %</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.initial_payment'/>:
										</h5>
									</td>
									<td class="py-4">
										<h5 v-if="true" class="font-600">1 %</h5>
										<h5 v-else>-</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.privilege_period'/>:
										</h5>
									</td>
									<td class="py-4">
										<template v-if="$i18n.locale === 'uz'">
											<h5 v-if="true" class="font-600">2 oy</h5>
											<h5 v-else>Mavjud emas</h5>
										</template>

										<template v-if="$i18n.locale === 'ru'">
											<h5 v-if="true" class="font-600">2 месяц</h5>
											<h5 v-else>Недоступен</h5>
										</template>

										<template v-if="$i18n.locale === 'en'">
											<h5 v-if="true" class="font-600">2 month</h5>
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
									<h5 class="font-600">
										<I18nVue t='CreditCalculator.payment_period'/>
									</h5>
								</th>
								<th width="150" class="text-center py-4">
									<h5 class="font-600">
										<I18nVue t='CreditCalculator.date'/>
									</h5>
								</th>
								<th width="275" class="text-center py-4">
									<h5 class="font-600">
										<I18nVue t='CreditCalculator.debt'/>
									</h5>
								</th>
								<th width="375" class="text-center py-4">
									<h5 class="font-600">
										<I18nVue t='CreditCalculator.base_debt_payment'/>
									</h5>
								</th>
								<th width="325"  class="text-center py-4">
									<h5 class="font-600">
										<I18nVue t='CreditCalculator.interest_rate_payment'/>
									</h5>
								</th>
								<template>
									<th width="325"  class="text-center py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.privilege_period'/>
										</h5>
									</th>
								</template>
								<th width="250" class="text-center py-4">
									<h5 class="font-600">
										<I18nVue t='CreditCalculator.total_payment'/>
									</h5>
								</th>
							</tr>
							</thead>

							<tbody>
<!--							<tr v-for="(item, index) in generateTableModel.tableContent">-->
<!--								<td class="py-4">-->
<!--									<h5 class="font-600">{{ index + 1 }}</h5>-->
<!--								</td>-->
<!--								<td class="py-4">-->
<!--									<h5 class="font-600">{{ item.dateFormat }}</h5>-->
<!--								</td>-->
<!--								<td class="py-4">-->
<!--									<h5 class="font-600">{{ item.date }}</h5>-->
<!--								</td>-->

<!--								<td class="py-4">-->
<!--									<h5 class="font-600">{{ item.amountPayment }}</h5>-->
<!--								</td>-->
<!--								<td class="py-4">-->
<!--									<h5 class="font-600">{{ item.loanPayment }}</h5>-->
<!--								</td>-->
<!--								<td class="py-4">-->
<!--									<h5 class="font-600">{{ item.interestPayment }}</h5>-->
<!--								</td>-->
<!--								<template v-if='generateTableModel.tableHeader.gracePeriod.month'>-->
<!--									<td class="py-4">-->
<!--										<h5 class="font-600">{{ item.gracePeriodPayment }}</h5>-->
<!--									</td>-->
<!--								</template>-->
<!--								<td class="py-4">-->
<!--									<h5 class="font-600">{{ item.total }}</h5>-->
<!--								</td>-->
<!--							</tr>-->
							</tbody>

							<tfoot>
							<tr>
								<td></td>
								<td class="py-4 text-left" colspan="3">
									<h4 class="font-700">
										<I18nVue t='CreditCalculator.total'/>:
									</h4>
								</td>
								<td class="py-4">
									<h4 class="font-700">
										123
									</h4>
								</td>
								<td class="py-4">
									<h4 class="font-700">
										444
									</h4>
								</td>
								<template v-if="true">
									<td></td>
								</template>
								<td class="py-4">
									<h4 class="font-700">
										234
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

<script>
import I18nVue from "../I18nVue";

export default {
	name: "AppSmallBusinessCreditTableGenerate",
	components: {
		I18nVue
	}
};
</script>
