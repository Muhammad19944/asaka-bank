<template>
	<div class="deposit-calculator-table-view">
		<v-container>
			<div class="w-100 overflow-y-auto rounded">
				<div class="generated-table-content">
					<div class="d-flex align-center justify-space-between mb-5 mt-5">
						<h2 class="font-600">
							<I18nVue t='LastCorrections.deposit_calculation_info'/>
						</h2>
						<send-button
							@emit:up="generatePDF"
							:text="$t('download_pdf')"
							class="mr-5"
						>
						</send-button>
					</div>
					<div class="app-table mb-7">
						<v-simple-table class="app-table app-table__border">
							<template v-slot:default>
								<tbody>
								<tr>
									<td width="450" class="text-left py-4">
										<h5 class="font-600">
											<I18nVue t='DepositCalculator.currency_type'/>
											:
										</h5>
									</td>
									<td class="text-left py-4">
										<h5 class="font-600">
											{{ currency }}
										</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='DepositCalculator.deposit_type'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue :uz="depositNames.name_uz" :ru="depositNames.name_ru" :en="depositNames.name_en"/>
										</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='DepositCalculator.amount'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ $options.filters.toFixedFormatThousands(depositAmount) }}</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='Services.OpenCard.deposit_date'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ depositPeriod }} {{ $t("Credit_Detail.credit_period") }}</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='DepositCalculator.annual_rate'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ annualRate }}%</h5>
									</td>
								</tr>

								<!-- SAMPLE QUERY
									calc?currency=UZS&depositName=avans&depositAmount=1000000&depositPeriod=12&annualRate=25

									-->
								</tbody>
							</template>
						</v-simple-table>
					</div>
					<div class="app-table mb-16">
						<v-simple-table class="app-table app-table__border text-center">
							<template v-slot:default>
								<thead>
								<tr>
									<th class="text-center py-4">
										<h5 class="font-weight-bold">
											{{ $t("DepositCalculator.thirty_days") }}
										</h5>
									</th>
									<th class="text-center py-4">
										<h5 class="font-weight-bold">
											{{ $t("DepositCalculator.overall_profit") }}
										</h5>
									</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td class="py-4">
										<h5 class="font-600">{{ calculateThirtyDays }}  {{ currency }}</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ calculateOverall }} {{ currency }}</h5>
									</td>
								</tr>
								</tbody>
							</template>
						</v-simple-table>
					</div>
				</div>
			</div>
		</v-container>

		<!--GENERATE PDF-->
		<generate-pdf
			ref="html2Pdf"
			documentName="Deposit Calculation.pdf"
		>
			<template>
				<section id="after1" class="pdf-item">
					<div class="pdf-item__content">
						<div style="display: flex; align-items: center; margin-bottom: 20px">
							<img src="/logo2.png" alt="" style="width: 90px; height: 90px">

							<div style="margin-left: 15px">
								<h4>AsakaBank</h4>
								<hr style="margin: 4px 0" />

								<span>{{ $t('stock_company') }}</span>
							</div>
						</div>
						<div style="margin-bottom: 50px; margin-top: 50px">
							<h2 class="font-600">
								<I18nVue t='LastCorrections.deposit_calculation_info'/>
							</h2>
						</div>
						<div class="" style="margin-bottom: 64px">
							<table class="app-table__border pdf-table">
								<tr>
									<td class="text-left py-4">
										<h5 class="font-600">
											<I18nVue t='DepositCalculator.currency_type'/>
											:
										</h5>
									</td>
									<td class="text-left py-4">
										<h5 class="font-600">
											{{ currency }}
										</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='DepositCalculator.deposit_type'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue :uz="depositNames.name_uz" :ru="depositNames.name_ru" :en="depositNames.name_en"/>
										</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='DepositCalculator.amount'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ $options.filters.toFixedFormatThousands(depositAmount) }}</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='Services.OpenCard.deposit_date'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ depositPeriod }} {{ $t("Credit_Detail.credit_period") }}</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='DepositCalculator.annual_rate'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ annualRate }}%</h5>
									</td>
								</tr>
							</table>
						</div>
						<div class="">
							<table class="app-table__border text-center pdf-table">
								<tr>
									<th class="text-center py-4">
										<h5 class="font-weight-bold">
											{{ $t("DepositCalculator.thirty_days") }}
										</h5>
									</th>
									<th class="text-center py-4">
										<h5 class="font-weight-bold">
											{{ $t("DepositCalculator.overall_profit") }}
										</h5>
									</th>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">{{ calculateThirtyDays }}  {{ currency }}</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ calculateOverall }} {{ currency }}</h5>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</section>
			</template>
		</generate-pdf>
	</div>
</template>

<script>
import I18nVue from '@/I18nVue'
import moment from "moment";
import GeneratePdf from "@/views/Admin/BaseComponents/GeneratePDF";
import SendButton from "@/views/Admin/BaseComponents/SendButton";
export default {
	name: "index",
	components: {
		I18nVue,
		GeneratePdf,
		SendButton
	},
	data() {
		return {
			currency: "",
			depositName: "",
			depositAmount: 0,
			depositPeriod: 0,
			annualRate: 0,

			depositNames: {
				name_uz: "",
				name_ru: "",
				name_en: ""
			}
		}
	},
	computed: {
		calculateThirtyDays() {
			let result = (this.depositAmount * (this.annualRate / 100) / 365) * 30
			return this.$options.filters.toFixedFormatThousands(result)
		},
		/**/
		calculateOverall() {
			let sumOfDays
			for (let i = 0; i < this.depositPeriod; i++){
				if (i === 0){
					sumOfDays = moment().add(i, 'month').daysInMonth()
				}
				else {
					sumOfDays = sumOfDays + moment().add(i, 'month').daysInMonth()
				}
			}
			let result = (this.depositAmount * (this.annualRate /100)) / 365 * sumOfDays

			return this.$options.filters.toFixedFormatThousands(result)
		}
	},
	mounted() {
		this.getQueryParameters();
		this.getDepositNames(this.depositName)
	},
	methods: {
		generatePDF() {
			const { html2Pdf } = this.$refs

			html2Pdf.$children[0].generatePdf();
		},
		/*
		*
		* */
		getDepositNames(value){
			switch (value){
				case "avans":
					this.depositNames.name_uz = "Avans"
					this.depositNames.name_ru = "Аванс"
					this.depositNames.name_en = "Avans"
					break;
				case "online":
					this.depositNames.name_uz = "On-line"
					this.depositNames.name_ru = "Онлайн"
					this.depositNames.name_en = "On-line"
					break;
				case "maximum_profit":
					this.depositNames.name_uz = "Maksimal foyda"
					this.depositNames.name_ru = "Максимальная выгода"
					this.depositNames.name_en = "Maximum benefit"
					break;
			}
		},
		/*
		*
		* */
		getQueryParameters() {
			let parameters = this.$route.query

			this.currency = parameters.currency;
			this.depositName = parameters.depositName;
			this.depositAmount = parameters.depositAmount;
			this.depositPeriod = parameters.depositPeriod;
			this.annualRate = parameters.annualRate
		}
	}
}
</script>

<style scoped>

</style>
