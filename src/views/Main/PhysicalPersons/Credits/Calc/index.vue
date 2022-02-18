<template>
	<div class="credit-calculator-table-view">
		<v-container>
			<div class="w-100 overflow-y-auto rounded">
				<div class="generated-table-content">
					<div class="d-flex align-center justify-space-between mb-5 mt-5">
						<h2 class="font-600">
							<I18nVue t='CreditCalculator.payment_table'/>
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
									<td width="500" class="text-left py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.credit_type'/>
											:
										</h5>
									</td>
									<td class="text-left py-4">
										<h5 class="font-600">
											<I18nVue :uz="creditTypeNames.name_uz" :ru="creditTypeNames.name_ru" :en="creditTypeNames.name_en"/>
										</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.credit_period'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ creditPeriod }} {{ $t("Credit_Detail.credit_period") }}</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.annual_rate'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ annualRate }}%</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.initial_payment'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 v-if="initialPayment === undefined" class="font-600">-</h5>
										<h5 v-else class="font-600">{{ initialPayment }}%</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.privilege_period'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 v-if="privilegedPeriod === undefined" class="font-600">-</h5>
										<h5 v-else class="font-600">{{ privilegedPeriod }} {{ $t("Credit_Detail.credit_period") }}</h5>
									</td>
								</tr>

								<!-- SAMPLE QUERY
									calc?creditType=micro_loan&creditAmount=1000000&refundSchema=annuity&creditPeriod=20&annualRate=25&initialPayment=17&privilegedPeriod=6
								-->
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
									<th width="375" class="text-center py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.base_debt_payment'/>
										</h5>
									</th>
									<th width="325" class="text-center py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.interest_rate_payment'/>
										</h5>
									</th>
									<th width="250" class="text-center py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.total_payment'/>
										</h5>
									</th>
									<th width="275" class="text-center py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.debt'/>
										</h5>
									</th>
								</tr>
								</thead>
								<tbody>
								<tr v-for="(item, index) in tableData" :key="index">
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
										<h5 class="font-600">{{ item.loanPayment }}</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ item.interestPayment }}</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ item.total }}</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ item.amountPayment }}</h5>
									</td>
								</tr>
								</tbody>
								<tfoot>
								<tr>
									<td></td>
									<td class="py-4 text-left" colspan="2">
										<h4 class="font-700">
											<I18nVue t='CreditCalculator.total'/>
											:
										</h4>
									</td>
									<td class="py-4">
										<h4 class="font-700">
											{{ totalAmountToPay }}
										</h4>
									</td>
									<td class="py-4">
										<h4 class="font-700">
											{{ totalInterestPayment }}
										</h4>
									</td>
									<td class="py-4">
										<h4 class="font-700">
											{{ totalToPay }}
										</h4>
									</td>
									<td></td>
								</tr>
								</tfoot>
							</template>
						</v-simple-table>
					</div>
				</div>
			</div>
		</v-container>

		<!--GENERATE PDF-->
		<generate-pdf
			ref="html2Pdf"
			documentName="Credit Calculation.pdf"
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
						<div style="margin-bottom: 20px; margin-top: 20px">
							<h2 class="font-600">
								<I18nVue t='CreditCalculator.payment_table'/>
							</h2>
						</div>
						<div>
							<table class="app-table__border pdf-table">
								<tr>
									<td class="text-left">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.credit_type'/>
											:
										</h5>
									</td>
									<td class="text-left">
										<h5 class="font-600">
											<I18nVue :uz="creditTypeNames.name_uz" :ru="creditTypeNames.name_ru" :en="creditTypeNames.name_en"/>
										</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.credit_period'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ creditPeriod }} {{ $t("Credit_Detail.credit_period") }}</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.annual_rate'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ annualRate }}%</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.initial_payment'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 v-if="initialPayment === undefined" class="font-600">-</h5>
										<h5 v-else class="font-600">{{ initialPayment }}%</h5>
									</td>
								</tr>
								<tr>
									<td class="py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.privilege_period'/>
											:
										</h5>
									</td>
									<td class="py-4">
										<h5 v-if="privilegedPeriod === undefined" class="font-600">-</h5>
										<h5 v-else class="font-600">{{ privilegedPeriod }} {{ $t("Credit_Detail.credit_period") }}</h5>
									</td>
								</tr>
							</table>
						</div>
						<div style="margin-top: 20px">
							<table class="app-table__border pdf-table text-center">
								<tr>
									<th class="text-center py-4">
										<h5 class="font-600">№</h5>
									</th>
									<th class="text-center py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.payment_period'/>
										</h5>
									</th>
									<th class="text-center py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.date'/>
										</h5>
									</th>
									<th class="text-center py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.base_debt_payment'/>
										</h5>
									</th>
									<th class="text-center py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.interest_rate_payment'/>
										</h5>
									</th>
									<th class="text-center py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.total_payment'/>
										</h5>
									</th>
									<th class="text-center py-4">
										<h5 class="font-600">
											<I18nVue t='CreditCalculator.debt'/>
										</h5>
									</th>
								</tr>
								<tr v-for="(item, index) in tableData" :key="index">
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
										<h5 class="font-600">{{ item.loanPayment }}</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ item.interestPayment }}</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ item.total }}</h5>
									</td>
									<td class="py-4">
										<h5 class="font-600">{{ item.amountPayment }}</h5>
									</td>
								</tr>
								<tr style="font-weight: bold">
									<td></td>
									<td class="py-4 text-left">
										<h4 class="font-700">
											<I18nVue t='CreditCalculator.total'/>
											:
										</h4>
									</td>
									<td></td>
									<td class="py-4">
										<h4 class="font-700">
											{{ totalAmountToPay }}
										</h4>
									</td>
									<td class="py-4">
										<h4 class="font-700">
											{{ totalInterestPayment }}
										</h4>
									</td>
									<td class="py-4">
										<h4 class="font-700">
											{{ totalToPay }}
										</h4>
									</td>
									<td></td>
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
import moment from 'moment'
import { IPMT, PPMT, PMT } from '@formulajs/formulajs'
import { ChevronDownIcon } from 'vue-feather-icons'
import I18nVue from '@/I18nVue'
import GeneratePdf from "@/views/Admin/BaseComponents/GeneratePDF";
import SendButton from "@/views/Admin/BaseComponents/SendButton";

export default {
	name: "index",
	components: {
		I18nVue,
		GeneratePdf,
		SendButton,
		ChevronDownIcon
	},
	data() {
		return {
			creditType: '',
			creditPeriod: '',
			creditAmount: 0,
			annualRate: '',
			initialPayment: '',
			privilegedPeriod: '',
			refundSchema: 'annuity',

			tableData: [],

			creditTypeNames: {
				name_uz: "",
				name_ru: "",
				name_en: ""
			}
		}
	},
	computed: {
		periodAmount() {

			const initialPayment = this.initialPayment !== undefined ? this.initialPayment : 0

			return this.creditAmount - (this.creditAmount * (initialPayment / 100));
		},
		/**/
		totalAmountToPay(){
			return this.$options.filters.toFixedFormatThousands(this.periodAmount)
		},
		/* ANNUITY */
		loanRatePerMonth(){
			return this.annualRate / (12*100)
		},
		/**/
		annuityRate() {
			return this.loanRatePerMonth * Math.pow(1 + this.loanRatePerMonth, this.creditPeriod) / ( Math.pow(1 + this.loanRatePerMonth, this.creditPeriod) - 1 )
		},
		/**/
		monthlyAnnuityPayment() {
			return this.annuityRate * this.periodAmount
		},
		/**/
		totalInterestPayment(){
			return ((this.monthlyAnnuityPayment * this.creditPeriod) - this.periodAmount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		},
		/**/
		totalToPay(){
			return this.$options.filters.toFixedFormatThousands(Number(this.periodAmount) + Number(this.totalInterestPayment.replace(/ /g, '')))
		},
	},
	mounted() {
		this.getQueryParameters();
		this.generateTable();
		this.getCreditTypeNames(this.creditType);
	},
	methods: {
		generateTable() {
			let generatedTable = [];

			let educationLoanCalcModel = {
				amountPayment: this.periodAmount,
				generalPercent: this.annualRate / 100,
				loanPayment: 0,
				interestPayment: 0,
				total: 0,
				gracePeriodMonth: this.privilegedPeriod !== undefined ? this.privilegedPeriod : 0
			};

			let mortgageCalcModel = {
				amountPayment: this.periodAmount,
				creditPeriodMonth: this.annualRate / 100,
				gracePeriodMonth: this.privilegedPeriod,
				gracePeriod: 0,

				//Differential
				loanPayment: 0,
				interestPayment: 0
			};

			let carLoanCalcModel = {
				amountPayment: this.periodAmount,
				generalPercent: this.annualRate / 100,
				loanPayment: 0,
				interestPayment: 0,
				total: 0
			};

			let overdraftCalcModel = {
				amountPayment: this.periodAmount,
				loanPayment: this.periodAmount / this.creditPeriod,
				interestPaymentMonthly: null,
			};

			let microLoanCalcModel = {
				amountPayment: this.periodAmount,
				generalPercent: this.annualRate / 100,
				loanPayment: 0,
				interestPayment: 0,
				total: 0,
				// gracePeriodMonth: this.creditGracePeriodSelect.month ? this.creditGracePeriodSelect.month : 0
			};

			for (let i = 0; i < this.creditPeriod; i++) {
				switch (this.creditType) {
					case "microloans":
						this.calculateMicroLoan(i + 1, generatedTable, microLoanCalcModel)
						break;
					case "overdraft":
						this.calculateOnlineOverdraft(i, generatedTable, overdraftCalcModel)
						break;
					case "car_loan":
						this.calculateMicroLoan(i + 1, generatedTable, carLoanCalcModel)
						break;
					case "mortgage_market":
						this.calculateMortgage(i + 1, generatedTable, mortgageCalcModel)
						break;
					case "mortgage":
						this.calculateMortgage(i + 1, generatedTable, mortgageCalcModel)
						break;
					case "education_credit":
						this.calculateMicroLoan(i + 1, generatedTable, educationLoanCalcModel)
						break;

				}
			}
			this.tableData = generatedTable
		},
		/*
		*
		* */
		calculateMortgage(i, array, model){
			if (this.refundSchema === "annuity"){
				if(i > 1) {
					model.amountPayment = model.amountPayment - Math.abs(PPMT(model.creditPeriodMonth / 12, i, +this.creditPeriod, this.periodAmount, 0, 0))
				}
				array.push({
					dateFormat: moment().add(i - 1, 'months').format('D.MM.YYYY'),
					date: moment().add(i- 1, 'months').daysInMonth(),

					// Остаток кредита
					amountPayment: this.$options.filters.toFixedFormatThousands(model.amountPayment),

					// Выплата кредита
					loanPayment: (i < model.gracePeriodMonth) ? '0.00' : this.$options.filters.toFixedFormatThousands(Math.abs(PPMT(model.creditPeriodMonth / 12, i, +this.creditPeriod, this.periodAmount, 0, 0))),

					// Выплата процентов
					interestPayment: (i < model.gracePeriodMonth) ? '' : this.$options.filters.toFixedFormatThousands(Math.abs(IPMT(model.creditPeriodMonth / 12, i, +this.creditPeriod, this.periodAmount, 0, 0))),
					// gracePeriodPayment: (increment < model.gracePeriodMonth) ? this.$options.filters.toFixedFormatThousands(model.gracePeriod) : '',

					// Общая выплата
					total: (i < model.gracePeriodMonth) ? this.$options.filters.toFixedFormatThousands(model.gracePeriod) : this.$options.filters.toFixedFormatThousands(this.monthlyAnnuityPayment),
				})
			}
			if (this.refundSchema === "differential"){
				model.interestPayment = Math.abs(model.amountPayment * model.creditPeriodMonth / 12)

				// If has grace period
				if(i <= model.gracePeriodMonth) {
					model.amountPayment = model.amountPayment - model.loanPayment
				} else {
					model.loanPayment = this.periodAmount / (+this.creditPeriod - this.privilegedPeriod)
					model.amountPayment = model.amountPayment - model.loanPayment
				}

				array.push({
					dateFormat: moment().add(i - 1, 'months').format('D.MM.YYYY'),
					date: moment().add(i - 1, 'months').daysInMonth(),

					// Остаток кредита
					amountPayment: this.$options.filters.toFixedFormatThousands(model.amountPayment),

					// Выплата кредита
					loanPayment: (i < model.gracePeriodMonth) ? '0.00' : this.$options.filters.toFixedFormatThousands(model.loanPayment),

					// Выплата процентов
					interestPayment: this.$options.filters.toFixedFormatThousands(model.interestPayment),

					// Общая выплата
					total: this.$options.filters.toFixedFormatThousands(model.loanPayment + model.interestPayment),
				})
			}
		},
		/*
		*
		* */
		calculateOnlineOverdraft(i, array, model){
			if (i === 0){
				model.amountPayment = model.amountPayment - 0
			}
			else {
				model.amountPayment = model.amountPayment - model.loanPayment
			}

			model.interestPaymentMonthly = model.amountPayment * (this.annualRate / 100) / 365 * 30

			array.push({
				dateFormat: moment().add(i, 'month').format('D.MM.YYYY'),
				date: moment().add(i,'month').daysInMonth(),

				// Остаток кредита
				amountPayment: this.$options.filters.toFixedFormatThousands(model.amountPayment),

				// Выплата кредита
				loanPayment: this.$options.filters.toFixedFormatThousands(model.loanPayment),

				// Выплата процентов
				interestPayment: this.$options.filters.toFixedFormatThousands(model.interestPaymentMonthly),

				// Общая выплата
				total: this.$options.filters.toFixedFormatThousands(model.loanPayment + model.interestPaymentMonthly),
			})
		},
		/*
		*
		* */
		calculateMicroLoan(i, array, model) {
			if (this.refundSchema === "annuity"){
				model.total = Math.abs(PMT(model.generalPercent / 12, this.creditPeriod, this.periodAmount, 0, 0))
				model.interestPayment = (model.amountPayment * model.generalPercent / 365) * moment().add(i, 'months').daysInMonth()
				model.loanPayment = model.total - model.interestPayment
				model.amountPayment = model.amountPayment - model.loanPayment
			}
			if (this.refundSchema === "differential"){
				model.total = model.interestPayment + model.loanPayment
				model.interestPayment = (model.amountPayment * model.generalPercent / 365) * moment().add(i, 'months').daysInMonth()
				model.loanPayment = this.periodAmount / this.creditPeriod
				model.amountPayment = model.amountPayment - model.loanPayment
			}
			array.push({
				dateFormat: moment().add(i, 'months').format('D.MM.YYYY'),
				date: moment().add(i, 'months').daysInMonth(),

				// Выплата кредита
				loanPayment: this.$options.filters.toFixedFormatThousands(model.loanPayment),

				// Выплата процентов
				interestPayment: this.$options.filters.toFixedFormatThousands(model.interestPayment),

				// Общая выплата
				total: this.$options.filters.toFixedFormatThousands(model.total),

				// Остаток кредита
				amountPayment: this.$options.filters.toFixedFormatThousands(model.amountPayment),
			})
		},
		/*
		*
		* */
		getQueryParameters() {

			let parameters = this.$route.query;

			this.creditType = parameters.creditType;
			this.creditPeriod = parameters.creditPeriod;
			this.annualRate = parameters.annualRate;
			this.initialPayment = parameters.initialPayment;
			this.privilegedPeriod = parameters.privilegedPeriod;
			this.creditAmount = parameters.creditAmount
		},
		/*
		*
		* */
		getCreditTypeNames(value){
			switch (value){
				case "microloans":
					this.creditTypeNames.name_uz = "Mikroqarz \"ODDIY\""
					this.creditTypeNames.name_ru = "Микрозайм «ПРОСТО»"
					this.creditTypeNames.name_en = "Microcredit \"SIMPLE\""
					break;
				case "mortgage_market":
					this.creditTypeNames.name_uz = "Bozor tamoyillari asosida ipoteka krediti"
					this.creditTypeNames.name_ru = "Ипотека на рыночных условиях"
					this.creditTypeNames.name_en = "Mortgage loan based on market principles"
					break;
				case "car_loan":
					this.creditTypeNames.name_uz = "Avtokredit 2.1"
					this.creditTypeNames.name_ru = "Автокредит 2.1"
					this.creditTypeNames.name_en = "Avtocredit 2.1"
					break;
				case "education_credit":
					this.creditTypeNames.name_uz = "Ta'lim krediti"
					this.creditTypeNames.name_ru = "Образовательный кредит"
					this.creditTypeNames.name_en = "Educational loan"
					break;
				case "overdraft":
					this.creditTypeNames.name_uz = "Onlayn overdraft \"OYLIKGACHA\""
					this.creditTypeNames.name_ru = "Онлайн овердрафт «ДО ЗАРПЛАТЫ»"
					this.creditTypeNames.name_en = "On-line overdraft \"BEFORE SALARY\""
					break;
			}
		},
		/*
		*
		* */
		generatePDF() {
			const { html2Pdf } = this.$refs

			html2Pdf.$children[0].generatePdf();
		},
	}
}
</script>

<style scoped>

</style>
