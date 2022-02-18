<template>
	<div class="online-credit-view">
		<v-container class="px-0 p-relative">
			<div class="view-title mb-15">
				<h1 class="font-600 dark-text align-self-center mb-3">
					<I18nVue t="Home.Credit_Calc.title" />
				</h1>

				<h3 class="grey-light-2">
					<I18nVue t="Home.Credit_Calc.desc" />
				</h3>
			</div>
			<v-row>
				<v-col lg="5" sm="12">
					<template v-if="!$route.params.id">
						<div class="app-form-group mb-10">
							<h4 class="font-600 dark-text">
								<I18nVue t="Home.Credit_Calc.label1" />
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

							<template v-if="$i18n.locale === 'uz'">
								<v-select
									v-model="creditType"
									@change="getCreditID"
									:items="creditList"
									return-object
									item-text="title_uz"
									outlined
									hide-details
									placeholder="Kredit turi"
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</template>

							<template v-if="$i18n.locale === 'ru'">
								<v-select
									v-model="creditType"
									@change="getCreditID"
									:items="creditList"
									return-object
									item-text="title_ru"
									item-value='id'
									outlined
									hide-details
									placeholder="Тип кредита"
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</template>

							<template v-if="$i18n.locale === 'en'">
								<v-select
									v-model="creditType"
									@change="getCreditID"
									:items="creditList"
									return-object
									item-text="title_en"
									item-value='id'
									outlined
									hide-details
									placeholder="Credit type"
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</template>
						</div>
					</template>

					<!-- Hide in a mortgage and overdraft template -->
					<template v-if="!(creditTypeText === 'mortgage' || creditTypeText === 'overdraft')">
						<div class="app-form-group mb-10">
							<h4 class="font-600 dark-text">
								<I18nVue t="refund_scheme" />
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

							<template v-if="$i18n.locale === 'uz'">
								<v-select
									v-model="refundSchemeSelect"
									:items="refundScheme"
									item-text='title_uz'
									item-value='value'
									outlined
									hide-details
									placeholder="Credit type"
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</template>

							<template v-if="$i18n.locale === 'ru'">
								<v-select
									v-model="refundSchemeSelect"
									:items="refundScheme"
									item-text='title_ru'
									item-value='value'
									outlined
									hide-details
									placeholder="Credit type"
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</template>

							<template v-if="$i18n.locale === 'en'">
								<v-select
									v-model="refundSchemeSelect"
									:items="refundScheme"
									item-text='title_en'
									item-value='value'
									outlined
									hide-details
									placeholder="Credit type"
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</template>
						</div>
					</template>
					<!-- End hide in a mortgage and overdraft template -->

					<template
						v-if="creditZoneSelect && (creditZoneSelect.percent || creditZoneSelect.title_uz)">
						<div class="app-form-group mb-10">
							<h4 class="font-600 dark-text">
								<I18nVue t="Home.Credit_Calc.label2" />
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

							<template v-if="$i18n.locale === 'uz'">
								<v-select
									v-model="creditZoneSelect"
									:items="creditZoneList"
									item-text="title_uz"
									return-object
									outlined
									hide-details
									placeholder="Hududni tanlang"
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</template>

							<template v-if="$i18n.locale === 'ru'">
								<v-select
									v-model="creditZoneSelect"
									:items="creditZoneList"
									item-text="title_ru"
									return-object
									outlined
									hide-details
									placeholder="Выберите область"
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</template>

							<template v-if="$i18n.locale === 'en'">
								<v-select
									v-model="creditZoneSelect"
									:items="creditZoneList"
									item-text="title_en"
									return-object
									outlined
									hide-details
									placeholder="Select region"
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</template>
						</div>
					</template>

					<template
						v-if="creditLoanTypeList[0] && (creditLoanTypeList[0].percent || creditLoanTypeList[0].title_uz)">
						<div class="app-form-group mb-10">
							<h4 class="font-600 dark-text">
								<I18nVue t="Home.Credit_Calc.label3" />
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

							<template v-if="$i18n.locale === 'uz'">
								<v-select
									v-model="creditLoanTypeSelect"
									:items="creditLoanTypeList"
									item-text="title_uz"
									return-object
									outlined
									hide-details
									placeholder="Ko'chmas mulk"
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</template>

							<template v-if="$i18n.locale === 'ru'">
								<v-select
									v-model="creditLoanTypeSelect"
									:items="creditLoanTypeList"
									item-text="title_ru"
									return-object
									outlined
									hide-details
									placeholder="Недвижимость"
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</template>

							<template v-if="$i18n.locale === 'en'">

								<v-select
									v-model="creditLoanTypeSelect"
									:items="creditLoanTypeList"
									item-text="title_en"
									return-object
									outlined
									hide-details
									placeholder="Real estate"
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</template>
						</div>
					</template>

					<div class="app-form-group-wrap">
						<div class="app-form-group mb-10">
							<h4 class="font-600 dark-text">
								<I18nVue t="Home.Credit_Calc.label4" />
							</h4>

							<v-divider class="mt-3 mb-8" style="border-color: rgba(var(--border-color), 1)" />

							<v-text-field
								v-model="periodAmountInput"
								:maxlength='maxLengthAmount'
								outlined
								hide-details
								class="progress-field"
							/>
							<div class="mt-n2">
								<vue-slider
									@dragging='dragging'
									@change="dragChange"
									v-model="periodAmountRange.value"
									:tooltip="'none'"
									:dotSize="[20, 20]"
									:height="8"
									:min="0"
									:max="periodAmountRange.max"
									:interval="100000"
									:process-style="{ backgroundColor: 'rgba(var(--main-primary))' }"
									:tooltip-style="{ backgroundColor: 'rgba(var(--main-primary))', borderColor: 'rgba(var(--main-primary))' }"
									class="pa-0"
								>
									<template v-slot:step="{ label, active }">
										<div :class="['custom-step', { active }]" />
									</template>
								</vue-slider>
							</div>
						</div>

						<template v-if="creditInitialFeeList[0] &&  creditInitialFeeList[0].value">
							<div class="app-form-group mb-10">
								<h4 class="font-600 dark-text">
									<I18nVue t="Home.Credit_Calc.label5" />
								</h4>

								<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

								<v-select
									v-model="creditInitialFeeSelect"
									:items="creditInitialFeeList"
									item-text="value"
									return-object
									outlined
									hide-details
								>
									<template slot='selection' slot-scope='{ item }'>
										{{ item.value }} %
									</template>
									<template slot='item' slot-scope='{ item }'>
										{{ item.value }} %
									</template>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>

								<!--{{ creditInitialFeeSelect }}-->
							</div>
						</template>

						<div class="app-form-group mb-10">
							<h4 class="font-600 dark-text">
								<I18nVue t="Home.Credit_Calc.label6" />
							</h4>

							<v-divider class="mt-3 mb-8" style="border-color: rgba(var(--border-color), 1)" />

							<v-radio-group v-model='creditPeriodRadios' hide-details>
								<template v-slot:label>
									<div class='app-track'>
										<div class='track-top d-flex p-relative'>
											<template v-for='(item, index) in creditPeriodList'>
												<v-radio
													:key='index'
													:id="'check-' + index"
													class='d-none'
													:value='item'
												/>
												<label
													:key='item.index'
													@click='getTrackSize($event)'
													:for="'check-' + index"
													class='track-label flex-1 pointer pb-6 p-relative'
													:class="index === 0 ? 'active' : ''"
												>
                                                    <span class='text--h1 primary-text text-center d-block'>
	                                                    {{item.month}}
                                                    </span>
												</label>
											</template>
										</div>

										<div class='track-bottom d-flex'>
											<template v-for='(item, index) in creditPeriodList'>
												<div :key='index' class='flex-1 text-center py-3'>
													<span class='text-small'>
														{{ item.month }}
														<span class='ml-1 d-block d-sm-inline-block' v-if='$i18n.locale === "uz"'>oy</span>
														<span class='ml-1 d-block d-sm-inline-block' v-if='$i18n.locale === "ru"'>месяц</span>
														<span class='ml-1 d-block d-sm-inline-block' v-if='$i18n.locale === "en"'>months</span>
													</span>
												</div>
											</template>
										</div>
									</div>
								</template>
							</v-radio-group>
						</div>

						<template v-if="creditGracePeriodList[0] && creditGracePeriodList[0].month">
							<div class="app-form-group">
								<h4 class="font-600 dark-text">
									<I18nVue t="Home.Credit_Calc.label7"/>
								</h4>

								<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

								<v-select
									v-model="creditGracePeriodSelect"
									:items="creditGracePeriodList"
									item-text="month"
									return-object
									outlined
									hide-details
								>
									<template slot='selection' slot-scope='{ item }'>
										{{ item.month }}
										<span class='ml-1' v-if='$i18n.locale === "uz"'>oy</span>
										<span class='ml-1' v-if='$i18n.locale === "ru"'>месяц(а)</span>
										<span class='ml-1' v-if='$i18n.locale === "en"'>month(s)</span>
									</template>
									<template slot='item' slot-scope='{ item }'>
										{{ item.month }}
										<span class='ml-1' v-if='$i18n.locale === "uz"'>oy</span>
										<span class='ml-1' v-if='$i18n.locale === "ru"'>месяц(а)</span>
										<span class='ml-1' v-if='$i18n.locale === "en"'>month(s)</span>
									</template>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</div>
						</template>

<!--						<pre>{{ creditGracePeriodSelect }}</pre>-->
					</div>
				</v-col>

				<v-spacer class="d-none d-sm-block" />

				<v-col lg="6" sm="12">
					<div class="credit-widget widget-sticky pa-5 pa-sm-10 rounded-lg overflow-hidden">
						<div class="d-flex flex-wrap align-center justify-space-between font-600 dark-text mb-4 mb-sm-5">
							<h3>
								<I18nVue t="Home.Credit_Calc.label8"/>
							</h3>
							<h3 v-if='creditLoanTypeSelect.percent'>{{ creditLoanTypeSelect.percent }} %</h3>
							<h3 v-if="creditZoneSelect.percent">{{ creditZoneSelect.percent }} %</h3>
							<h3 v-if="generalPercent">{{ generalPercent }} %</h3>
							<h3 v-if="forCarSelect.percent">{{ forCarSelect.percent }} %</h3>
						</div>

						<div class="d-flex flex-wrap align-center justify-space-between font-600 dark-text mb-4 mb-sm-5">
							<h3 class="mb-3 mb-sm-0">
								<I18nVue t="Home.Credit_Calc.label9"/>
							</h3>

							<v-btn
							       @click="generateTable"
							       outlined
							       color="rgba(var(--main-primary), 1)"
							       rounded
							       height="42"
							       class="text-transform-reset"
							>
								<I18nVue t="Home.Credit_Calc.btn_table" classes="dark-text"/>
							</v-btn>
<!--							<v-btn v-else-if='this.creditInitialFeeSelect.value'-->
<!--							       @click="generateTableForCarLoan"-->
<!--							       outlined-->
<!--							       color="rgba(var(&#45;&#45;main-primary), 1)"-->
<!--							       rounded-->
<!--							       height="42"-->
<!--							       class="text-transform-reset"-->
<!--							>-->
<!--								<I18nVue t="Home.Credit_Calc.btn_table" classes="dark-text"/>-->
<!--							</v-btn>-->
<!--							<v-btn v-else-->
<!--							       @click="generateTableForOverdraft"-->
<!--							       outlined-->
<!--							       color="rgba(var(&#45;&#45;main-primary), 1)"-->
<!--							       rounded-->
<!--							       height="42"-->
<!--							       class="text-transform-reset"-->
<!--							>-->
<!--								<I18nVue t="Home.Credit_Calc.btn_table" classes="dark-text"/>-->
<!--							</v-btn>-->
						</div>

						<div class="d-flex flex-wrap align-center justify-space-between font-600 dark-text">
							<h3>
								<I18nVue t="Home.Credit_Calc.label10"/>
							</h3>
							<h2>{{ calculate }}
								<I18nVue t="Home.Credit_Calc.sum" classes="font-400 text--h3"/>
							</h2>
						</div>


						<v-divider class="my-5 my-sm-10" />

						<h5>
							<I18nVue t="Home.Credit_Calc.text" />
						</h5>

						<div class="d-flex flex-wrap flex-sm-nowrap mt-4">
							<v-btn
								disabled
								outlined
								color="rgba(var(--main-primary), 1)"
								rounded
								height="50"
								min-width="192"
								class="font-700 mr-4 mt-5"
							>
								<I18nVue t="Home.Credit_Calc.btn_send"/>
							</v-btn>

							<v-btn
								:to="{name: 'Scoring'}"
								outlined
								color="rgba(var(--main-primary), 1)"
								rounded
								height="50"
								min-width="192"
								class="font-700 mt-5"
							>
								<I18nVue t="Home.Credit_Calc.btn_scoring"/>
							</v-btn>
						</div>

						<!-- Not delete -->
						<span class="d-none">{{ findCarOptions }}</span>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import moment from 'moment'
import { IPMT, PPMT, PMT } from '@formulajs/formulajs'
import { ChevronDownIcon } from 'vue-feather-icons'
import I18nVue from '@/I18nVue'

export default {
	name: "AppOnlineCreditCalc",
    props: {
	    creditID: {
	        type: [String, Number]
        }
    },
	components: {
		ChevronDownIcon,
		I18nVue
	},
	data() {
		return {
			generatedTable: [],

			refundScheme: [
				{
					title_uz: 'Annuitet',
					title_ru: 'Аннуитет',
					title_en: 'Annuity',
					value: 'annuity'
				},
				{
					title_uz: 'Differensial',
					title_ru: 'Дифференциальный',
					title_en: 'Differential',
					value: 'differential'
				},
			],
			refundSchemeSelect: 'annuity',

			creditType: {},
			creditList: [],

			periodAmountRange: {
				value: 0,
				min: 0,
				max: 0
			},

			periodAmountInput: '',
			maxLengthAmount: '',

			creditPeriodList: [],
			creditPeriodRadios: {},

			creditInitialFeeList: [],
			creditInitialFeeSelect: {},

			creditGracePeriodList: [],
			creditGracePeriodSelect: {},

			creditLoanTypeList: [],
			creditLoanTypeSelect: {},

            generalPercent: '',

			creditTypeText: '',

			creditZoneList: [],
			creditZoneSelect: {},

			forCarList: [],
			forCarSelect: {},

            selectedID: ''
		}
	},
	watch: {
		'periodAmountInput'(val) {
			/*
			 * Форматируем числа
			 * 100, 1 000, 10 000, 100 000, ...
			 * */
			const result = String(val)
				.replace(/\D/g, '')
				.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

			/*
			 * Убираем все пробелы из суммы.
			 * */
			const removeWhiteSpaces = result.replace(/ /g, '')

			// Присваиваем если пользователь ввел больше чем от лимита
			if (removeWhiteSpaces > this.periodAmountRange.max) {
				this.periodAmountInput = this.periodAmountRange.max

				return false
			}

			this.periodAmountInput = result

			this.periodAmountRange.value = removeWhiteSpaces
		}
	},
	computed: {
		findCarOptions() {
			if(this.creditTypeText === 'car_loan') {
				return this.forCarSelect = this.forCarList.find(item => item.type === this.refundSchemeSelect && item.initialPayment === this.creditInitialFeeSelect.value && item.month === this.creditPeriodRadios.month)
			}
			else if (this.creditTypeText === 'microloans'){
				return this.forCarSelect = this.forCarList.find(item => item.type === this.refundSchemeSelect && item.month === this.creditPeriodRadios.month)
			}
			else {
				return this.forCarSelect = {}
			}
		},
		/*
		*
		* */
		periodAmount() {

			const initialPay = this.creditInitialFeeSelect.value ? this.creditInitialFeeSelect.value : 0

			return (this.periodAmountInput.replace(/ /g, '')) - (this.periodAmountInput.replace(/ /g, '') * (initialPay / 100))
		},

		/* Дифференциальный
		* Определение суммы начисленных процентов
		* */
		calculateDifferentialPayment() {
			// Остатка платежа
			let remainingPayment = 0

			// Определение размера основного платежа
			let mainAmountPayment = this.periodAmount / this.creditPeriodRadios.month

			// Определение суммы начисленных процентов
			let total = 0

			// Годовой процент
			let percent = this.loanRatePerMonthDifferential

			for(let i = 0; i < +this.creditPeriodRadios.month; i++) {
				remainingPayment = this.periodAmount - (mainAmountPayment * i)

				total = total + (remainingPayment * percent / 365 * moment().add(i, 'months').daysInMonth())
			}

			return Math.abs(total * 1.15).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		},

		/*
		* Annuity
		* */
		loanRatePerMonth() {
			if(this.creditLoanTypeSelect.percent) {
				return this.creditLoanTypeSelect.percent / (12 * 100)
			}

			if(this.generalPercent) {
				return this.generalPercent / (12 * 100)
			}

			if(this.creditZoneSelect.percent) {
				return this.creditZoneSelect.percent / (12 * 100)
			}

			if(this.forCarSelect.percent) {
				return this.forCarSelect.percent / (12 * 100)
			}
		},

		/*
		* Differential
		* */
		loanRatePerMonthDifferential() {
			if(this.creditLoanTypeSelect.percent) {
				return this.creditLoanTypeSelect.percent / 100
			}

			if(this.generalPercent) {
				return this.generalPercent / 100
			}

			if(this.creditZoneSelect.percent) {
				return this.creditZoneSelect.percent / 100
			}

			if(this.forCarSelect.percent) {
				return this.forCarSelect.percent / 100
			}
		},

        /*
        *
        * */
		annuityRate() {
		    // if (this.loanRatePerMonth) {
                return this.loanRatePerMonth * Math.pow(1 + this.loanRatePerMonth, this.creditPeriodRadios.month) / ( Math.pow(1 + this.loanRatePerMonth, this.creditPeriodRadios.month) - 1 )
            // }
		},

		/*
		*
		* */
		monthlyAnnuityPayment() {
			return this.annuityRate * this.periodAmount
		},

		/*
		*
		* */
		calculate() {
			if(this.refundSchemeSelect === 'annuity') {
				return ((this.monthlyAnnuityPayment * this.creditPeriodRadios.month) - this.periodAmount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
			}
			if(this.refundSchemeSelect === 'differential') {
				return this.calculateDifferentialPayment
			}
		}
	},
	mounted() {
		this.getList();
		// this.getName();

        if (!this.creditID) {
	        this.getCreditID({ id: 9 })
        }
        else {
            this.getCreditID({ id: +this.creditID })
        }
	},
	methods: {
	//   getName(){
    //   let parameters = this.$route.query
	//     // let urlParams = new URLSearchParams(window.location.search);
	//     // let urlName = urlParams.get('name');
    //   this.getCreditID({ id: parameters.name });
    //   this.periodAmountInput = '3000000'
    //   console.log(this.periodAmountInput)
    // },
		/*
		*
		* */
		dragChange(value) {
			this.periodAmountInput = value
		},

		/*
		*
		* */
		getList() {
			this.$http.get('/1/credit/', {
				params: {
					category: 5,
					id: this.creditID
				}
			})
			.then(({ data }) => {
				this.creditList = data.results
				this.creditType = this.creditList[1]
			})
		},

		/*
		*
		* */
		getCreditID(value) {
            this.$http.get(`/1/credit/${value.id}/period/`)
			.then(({ data }) => {
				const { amount, grace_period, initial_fee, loan_type, period, type, zone, general_percent, for_car } = data.results[0]
				const length = String(amount.max).length

				this.creditGracePeriodList = grace_period
				this.creditGracePeriodSelect = this.creditGracePeriodList[0]

				this.creditInitialFeeList = initial_fee
				this.creditInitialFeeSelect = this.creditInitialFeeList[0]

				this.creditLoanTypeList = loan_type
				this.creditLoanTypeSelect = this.creditLoanTypeList[0]

                this.generalPercent = general_percent

				this.creditPeriodList = period
				this.creditPeriodRadios = this.creditPeriodList[0]

				this.creditTypeText = type

				this.creditZoneList = zone
				this.creditZoneSelect = this.creditZoneList[0]

				if(for_car) {
					this.forCarList = for_car
				}

				this.periodAmountRange.max = parseInt(amount.max.replace(/ /g, ''))

				setTimeout(() => {
					this.periodAmountRange.value = parseInt(amount.min.replace(/ /g, ''))
					this.periodAmountInput = this.periodAmountRange.value
				}, 0)

				this.maxLengthAmount = length
			})
		},

		/*
		*
		* */
		dragging(val) {
			this.periodAmountInput = val
		},

		/*
		*
		* */
		getTrackSize($event) {
			const $label = document.querySelectorAll('.track-label')
			const $currentLabel = $event.target.closest('.track-label')

			$label.forEach(item => item.classList.remove('active'))
			$currentLabel.classList.add('active')
		},

		/*
		* Generate credit table
		* */
		generateTable() {
			let generatedTable = []

			let mortgageCalcModel = {
				amountPayment: this.periodAmount,
				creditPeriodMonth: (this.creditLoanTypeSelect.percent ? this.creditLoanTypeSelect.percent : this.creditZoneSelect.percent) / 100,
				gracePeriodMonth: this.creditGracePeriodSelect.month,
				gracePeriod: 0,

				// dif
				loanPayment: 0,
				interestPayment: 0
			}

			let carsLoanCalcModel = {
				amountPayment: this.periodAmount,
				generalPercent: this.forCarSelect.percent / 100,
				loanPayment: 0,
				interestPayment: 0,
				total: 0,
				gracePeriodMonth: this.creditGracePeriodSelect.month ? this.creditGracePeriodSelect.month : 0
			};


			let overdraftCalcModel = {}

			overdraftCalcModel.amountPayment = this.periodAmountInput.replace(/ /g, '')
			overdraftCalcModel.loanPayment = overdraftCalcModel.amountPayment / this.creditPeriodRadios.month
			overdraftCalcModel.interestPaymentMonthly = null
			overdraftCalcModel.carCreditPeriodMonth = this.generalPercent / 100
			// overdraftCalcModel.totalInRows = null
			// overdraftCalcModel.sumOfRows = null

			let educationCalcModel = {
				amountPayment: this.periodAmount,
				generalPercent: this.generalPercent / 100,
				loanPayment: 0,
				interestPayment: 0,
				total: 0,
				gracePeriodMonth: this.creditGracePeriodSelect.month ? this.creditGracePeriodSelect.month : 0
			}


			let microloanCalcModel = {
				amountPayment: this.periodAmount,
				generalPercent: this.forCarSelect.percent / 100,
				loanPayment: 0,
				interestPayment: 0,
				total: 0,
				gracePeriodMonth: this.creditGracePeriodSelect.month ? this.creditGracePeriodSelect.month : 0
			}

			for(let i = 0; i < +this.creditPeriodRadios.month; i++) {
				switch (this.creditTypeText) {
					case "microloans":
						this.microloanCalc(i + 1, generatedTable, microloanCalcModel)
						break;
					case "mortgage":
						this.mortgageCalc(i + 1, generatedTable, mortgageCalcModel)
						break;
					case "mortgage_market":
						this.mortgageCalc(i + 1, generatedTable, mortgageCalcModel)
						break;
					case "car_loan":
						this.microloanCalc(i + 1, generatedTable, carsLoanCalcModel)
						break;
					case "education_credit":
						this.microloanCalc(i + 1, generatedTable, educationCalcModel)
						break;
					case "overdraft":
						this.overdraftCalc(i, generatedTable, overdraftCalcModel)
						break;
					default:
						generatedTable = []
				}
			}

			this.$emit('emit:up', {
				isTableGenerated: true,
				creditTypeText: this.creditTypeText,
				tableHeader: {
					creditType: this.creditType,
					creditPeriod: this.creditPeriodRadios,
					interestRate: this.creditLoanTypeSelect.percent ? this.creditLoanTypeSelect : this.creditZoneSelect,
                    generalPercent: this.generalPercent ? this.generalPercent : this.forCarSelect.percent,
					initialPayment: this.creditInitialFeeSelect,
					gracePeriod: this.creditGracePeriodSelect,
					creditTypeText: this.creditTypeText,
					refundSchema: this.refundSchemeSelect === 'annuity' ? this.refundScheme[0] : this.refundScheme[1]
				},
				tableContent: generatedTable,
				tableFooter: {
					amountPayment: this.$options.filters.toFixedFormatThousands(this.periodAmount),
					additionalPayment: this.calculate,
					total: this.$options.filters.toFixedFormatThousands(Number(this.periodAmount) + Number(this.calculate.replace(/ /g, ''))),
				}
			})
		},

		/*
		* Mortgage calc
		* */
		mortgageCalc(increment, array, model) {
			if(this.refundSchemeSelect === 'annuity') {
				// if(increment < model.gracePeriodMonth) {
				// 	model.gracePeriod = model.amountPayment * this.loanRatePerMonth
				// 	model.amountPayment = model.amountPayment - model.gracePeriod
				//
				// } else if(increment > 0) {
				// 	model.amountPayment = model.amountPayment - Math.abs(PPMT(model.creditPeriodMonth / 12, increment + 1, +this.creditPeriodRadios.month, this.periodAmount, 0, 0))
				// }

				if(increment > 1) {
					model.amountPayment = model.amountPayment - Math.abs(PPMT(model.creditPeriodMonth / 12, increment, +this.creditPeriodRadios.month, this.periodAmount, 0, 0))
				}

				array.push({
					dateFormat: moment().add(increment - 1, 'months').format('D.MM.YYYY'),
					date: moment().add(increment - 1, 'months').daysInMonth(),

					// Остаток кредита
					amountPayment: this.$options.filters.toFixedFormatThousands(model.amountPayment),

					// Выплата кредита
					loanPayment: (increment < model.gracePeriodMonth) ? '0.00' : this.$options.filters.toFixedFormatThousands(Math.abs(PPMT(model.creditPeriodMonth / 12, increment, +this.creditPeriodRadios.month, this.periodAmount, 0, 0))),

					// Выплата процентов
					interestPayment: (increment < model.gracePeriodMonth) ? '' : this.$options.filters.toFixedFormatThousands(Math.abs(IPMT(model.creditPeriodMonth / 12, increment, +this.creditPeriodRadios.month, this.periodAmount, 0, 0))),
					// gracePeriodPayment: (increment < model.gracePeriodMonth) ? this.$options.filters.toFixedFormatThousands(model.gracePeriod) : '',

					// Общая выплата
					total: (increment < model.gracePeriodMonth) ? this.$options.filters.toFixedFormatThousands(model.gracePeriod) : this.$options.filters.toFixedFormatThousands(this.monthlyAnnuityPayment),
				})
			}

			if(this.refundSchemeSelect === 'differential') {
				model.interestPayment = Math.abs(model.amountPayment * model.creditPeriodMonth / 12)

				// If has grace period
				if(increment <= model.gracePeriodMonth) {
					model.amountPayment = model.amountPayment - model.loanPayment
				} else {
					model.loanPayment = this.periodAmount / (+this.creditPeriodRadios.month - this.creditGracePeriodSelect.month)
					model.amountPayment = model.amountPayment - model.loanPayment
				}

				array.push({
					dateFormat: moment().add(increment - 1, 'months').format('D.MM.YYYY'),
					date: moment().add(increment - 1, 'months').daysInMonth(),

					// Остаток кредита
					amountPayment: this.$options.filters.toFixedFormatThousands(model.amountPayment),

					// Выплата кредита
					loanPayment: (increment < model.gracePeriodMonth) ? '0.00' : this.$options.filters.toFixedFormatThousands(model.loanPayment),

					// Выплата процентов
					interestPayment: this.$options.filters.toFixedFormatThousands(model.interestPayment),

					// Общая выплата
					total: this.$options.filters.toFixedFormatThousands(model.loanPayment + model.interestPayment),
				})
			}
		},

		/*
		* Overdraft calc
		* */
		overdraftCalc(increment, array, model) {
			if(this.refundSchemeSelect === 'annuity') {
				if(increment === 0) {
					model.amountPayment = model.amountPayment - 0
				} else {
					model.amountPayment = model.amountPayment - model.loanPayment
				}

				model.interestPaymentMonthly = model.amountPayment * model.carCreditPeriodMonth / 365 * 30
				// model.totalInRows = model.loanPayment + model.interestPaymentMonthly
				// model.sumOfRows += model.interestPaymentMonthly

				array.push({
					dateFormat: moment().add(increment, 'month').format('D.MM.YYYY'),
					date: moment().add(increment,'month').daysInMonth(),

					// Остаток кредита
					amountPayment: this.$options.filters.toFixedFormatThousands(model.amountPayment),

					// Выплата кредита
					loanPayment: this.$options.filters.toFixedFormatThousands(model.loanPayment),

					// Выплата процентов
					interestPayment: this.$options.filters.toFixedFormatThousands(model.interestPaymentMonthly),

					// Общая выплата
					total: this.$options.filters.toFixedFormatThousands(model.loanPayment + model.interestPaymentMonthly),
				})
			}

			if(this.refundSchemeSelect === 'differential') {

			}
		},

		/*
		* Microloan calc
		* */
		microloanCalc(increment, array, model) {
			if(this.refundSchemeSelect === 'annuity') {

				model.total = Math.abs(PMT(model.generalPercent / 12, this.creditPeriodRadios.month, this.periodAmount, 0, 0))

				model.interestPayment = (model.amountPayment * model.generalPercent / 365) * moment().add(increment, 'months').daysInMonth()

				model.loanPayment = model.total - model.interestPayment

				model.amountPayment = model.amountPayment - model.loanPayment

			}

			if(this.refundSchemeSelect === 'differential') {



				model.interestPayment = (model.amountPayment * model.generalPercent / 365) * moment().add(increment, 'months').daysInMonth()


				// If has grace period
				if(increment <= model.gracePeriodMonth) {
					model.loanPayment = 0
				} else {
					model.loanPayment = this.periodAmount / (this.creditPeriodRadios.month - model.gracePeriodMonth)
				}

				model.total = model.interestPayment + model.loanPayment

				model.amountPayment = model.amountPayment - model.loanPayment


				// console.log(model.interestPayment)
			}

			array.push({
				dateFormat: moment().add(increment, 'months').format('D.MM.YYYY'),
				date: moment().add(increment, 'months').daysInMonth(),

				// Выплата кредита
				loanPayment: this.$options.filters.toFixedFormatThousands(model.loanPayment),

				// Выплата процентов
				interestPayment: this.$options.filters.toFixedFormatThousands(model.interestPayment),

				// Общая выплата
				total: this.$options.filters.toFixedFormatThousands(model.total),

				// Остаток кредита
				amountPayment: this.$options.filters.toFixedFormatThousands(model.amountPayment),
			})
		}
	}
}
</script>

<style>

</style>

