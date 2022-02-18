<template>
	<div class="online-credit-view">
		<v-container class="px-0 p-relative">
			<div class="view-title mb-8">
				<h1 class="font-600 dark-text align-self-center mb-3">
					<I18nVue t="Home.Credit_Calc.title" />
				</h1>

				<h3 class="grey-light-2">
					<I18nVue t="Home.Credit_Calc.desc" />
				</h3>
			</div>

			<v-row>
				<v-col lg="5" sm="12">
					<slot />

					<div class="app-form-group-wrap mt-15">
						<template v-if="!$route.params.id">
							<div class="app-form-group mb-10">
								<h4 class="font-600 dark-text">
									<I18nVue t="Home.Credit_Calc.label1" />
								</h4>

								<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

								<v-select
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
							</div>
						</template>

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
									@dragging="dragging"
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

						<div class="app-form-group mb-10">
							<h4 class="font-600 dark-text">
								<I18nVue t="Home.Credit_Calc.label6" />
							</h4>

							<v-divider class="mt-3 mb-8" style="border-color: rgba(var(--border-color), 1)" />

							<v-radio-group v-model="creditPeriodRadios" hide-details>
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
					</div>
				</v-col>

				<v-spacer class="d-none d-sm-block" />

				<v-col lg="6" sm="12">
					<div class="credit-widget widget-sticky pa-5 pa-sm-10 rounded-lg overflow-hidden">
						<div class="d-flex flex-wrap align-center justify-space-between font-600 dark-text mb-4 mb-sm-5">
							<h3>
								<I18nVue t="Home.Credit_Calc.label8"/>
							</h3>
							<h3>1 %</h3>
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
						</div>

						<div class="d-flex flex-wrap align-center justify-space-between font-600 dark-text">
							<h3>
								<I18nVue t="Home.Credit_Calc.label10"/>
							</h3>
							<h2>
								146 361.67
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
						<span class="d-none">1</span>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import I18nVue from "../I18nVue";
import { ChevronDownIcon } from "vue-feather-icons"
import { mapMutations } from "vuex"

export default {
	name: "AppSmallBusinessCreditCalc",
	components: {
		I18nVue,
		ChevronDownIcon
	},
	data() {
		return {
			periodAmountRange: {
				value: 200000,
				min: 0,
				max: 100000000
			},

			periodAmountInput: '',
			maxLengthAmount: '',

			creditPeriodList: [
				{
					month: 12
				},
				{
					month: 24
				},
				{
					month: 36
				},
				{
					month: 48
				},
			],
			creditPeriodRadios: {},

			creditGracePeriodList: [
				{
					month: 12
				},
				{
					month: 24
				},
				{
					month: 36
				},
				{
					month: 48
				},
			],
			creditGracePeriodSelect: {
				month: 12
			},
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
	methods: {
		...mapMutations({
			SET_SMALL_BUSINESS_CREDIT_TABLE: "SET_SMALL_BUSINESS_CREDIT_TABLE"
		}),
		generateTable() {
			let model = {

			}
			// this.SET_SMALL_BUSINESS_CREDIT_TABLE(1)
			console.log('1')
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
		dragChange(value) {
			this.periodAmountInput = value
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
	}
};
</script>
