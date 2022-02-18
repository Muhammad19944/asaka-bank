<template>
	<div class="deposit-application-view px-2">
		<v-row>
			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t='Services.OpenCard.FISH'/>
					</h5>

					<v-text-field
						v-model="$v.formRequestModel.full_name.$model"
						:error="$v.formRequestModel.full_name.$error"
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.FISH_sub')"
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1"><I18nVue t='Services.OpenCard.phone'/></h5>

					<v-text-field
						v-model="$v.formRequestModel.phone.$model"
						:error="$v.formRequestModel.phone.$error"
						v-mask="'+998 (##) ### ## ##'"
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.phone_sub')"
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t='Services.OpenCard.mail'/>
					</h5>

					<v-text-field
						v-model="$v.formRequestModel.email.$model"
						:error="$v.formRequestModel.email.$error"
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.mail')"
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t='Services.OpenCard.stir'/>
					</h5>

					<v-text-field
						v-model="$v.formRequestModel.tax_inn.$model"
						:error="$v.formRequestModel.tax_inn.$error"
						outlined
						hide-details
						maxlength="9"
						:placeholder="$t('Services.OpenCard.stir')"
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t='Services.OpenCard.residence'/>
					</h5>

					<v-select
						@change="getBranches"
						v-model="$v.formRequestModel.district.$model"
						:error="$v.formRequestModel.district.$error"
						:items="districtList"
						item-text="name_uz"
						item-value="id"
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.residence_sub')"
					>
						<template v-slot:append>
							<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
						</template>
					</v-select>
				</div>
			</v-col>

			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t='Services.OpenCard.filial'/>
					</h5>
					<v-select
						v-model="$v.formRequestModel.filial.$model"
						:error="$v.formRequestModel.filial.$error"
						:items="branchesList"
						item-text="name_uz"
						item-value="id"
						outlined
						hide-details
						:no-data-text="$t('Services.OpenCard.no_data')"
						:placeholder="$t('Services.OpenCard.filial_sub')"
					>
						<template v-slot:append>
							<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
						</template>
					</v-select>
				</div>
			</v-col>

			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t='Services.OpenCard.passport'/>
					</h5>

					<v-file-input
						@change="getFile"
						v-model="$v.fileInputModel.$model"
						:error="$v.fileInputModel.$error"
						prepend-icon=""
						hide-details
						show-size
						outlined
						:placeholder="$t('Services.OpenCard.passport')"
					></v-file-input>
				</div>
			</v-col>


			<!--DEPOSIT CURRENCY-->

			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t='Services.OpenCard.currency_type'/>
					</h5>

					<v-select
						@change="getDepositList"
						v-model="defaultCurrency"
						:items="currencyList"
						return-object
						item-text='name'
						item-value='value'
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.currency_type')"
					>
						<template v-slot:append>
							<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
						</template>
					</v-select>
				</div>
			</v-col>

			<!-- OMONAT TURI -->

			<v-col md="12">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t='Services.OpenCard.deposit_type'/>
					</h5>

					<v-select
						@change="getDepositID"
						v-model="depositType"
						:items="depositList"
						item-text="title_uz"
						item-value='id'
						return-object
						outlined
						hide-details
						:no-data-text="$t('Services.OpenCard.no_data')"
						:placeholder="$t('Services.OpenCard.deposit_type')"
					>
						<template v-slot:append>
							<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
						</template>
					</v-select>
					<!--	                        {{ depositType.id }}-->
				</div>
			</v-col>

			<!-- OMONAT MIQDORI -->

			<v-col md="12">
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>
						<I18nVue t='DepositCalculator.amount' />
					</h5>

					<v-divider class='mt-3 mb-8' style='border-color: rgba(var(--border-color), 1)' />

					<v-text-field
						v-model='periodAmountInput'
						:maxlength='maxLengthAmount'
						outlined
						hide-details
						class='progress-field'
					>
					</v-text-field>

					<div class='mt-n2'>
						<vue-slider
							@dragging='dragging'
							@change="dragChange"
							v-model='periodAmountRange.value'
							:tooltip="'none'"
							:dotSize='[20, 20]'
							:height='8'
							:min='0'
							:max='periodAmountRange.max'
							:interval='100'
							:process-style="{ backgroundColor: 'rgba(var(--main-primary))' }"
							:tooltip-style="{ backgroundColor: 'rgba(var(--main-primary))', borderColor: 'rgba(var(--main-primary))' }"
							class='pa-0'
						>
							<template v-slot:step='{ label, active }'>
								<div :class="['custom-step', { active }]"></div>
							</template>
						</vue-slider>
					</div>

				</div>
				<!--	                    {{ periodAmountInput }}-->
			</v-col>

			<!-- OMONAT MUDDATI -->

			<v-col md="12">
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>
						<I18nVue t='DepositCalculator.credit_period' />
					</h5>

					<v-divider class='mt-3 mb-8' style='border-color: rgba(var(--border-color), 1)' />

					<v-radio-group
						@change='getMonth'
						v-model='depositPeriodRadios'
						hide-details
					>
						<template v-slot:label>
							<div class='app-track'>
								<div class='track-top d-flex p-relative'>
									<template v-for='(item, index) in depositPeriodList'>
										<v-radio
											:key='index'
											:id="'check-' + index"
											class='d-none'
											:value='item'
										></v-radio>
										<label
											:key='item.index'
											@click='getTrackSize($event)'
											:for="'check-' + index"
											class='track-label flex-1 pointer pb-6 p-relative'
											:class="index === 0 ? 'active' : ''"
										>
                                                    <span class='text--h1 primary-text text-center d-block'>{{
		                                                    item.month
	                                                    }}</span>
										</label>
									</template>
								</div>

								<div class='track-bottom d-flex'>
									<template v-for='(item, index) in depositPeriodList'>
										<div :key='index' class='flex-1 text-center py-3'>
                                                <span class='text-small'>{{ item.month }} <I18nVue
	                                                t='DepositCalculator.month' /></span>
										</div>
									</template>
								</div>
							</div>
						</template>
					</v-radio-group>
				</div>
				<!--	                    {{ depositPeriodRadios }}-->
			</v-col>

			<v-col md="12">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t='Services.OpenCard.message'/>
					</h5>

					<v-textarea v-model="formRequestModel.text"
					            outlined
					            hide-details
					            :placeholder="$t('Services.OpenCard.message')"
					>
					</v-textarea>
				</div>
			</v-col>

			<v-col v-if='$i18n.locale === "uz"' md="12">
				<div class="app-form-group mb-7">
					<h5 class="font-600 dark-text">Ommaviy oferta</h5>

					<div class="d-flex align-start">
						<v-checkbox v-model="checkbox" hide-details color="danger" class="ma-0"></v-checkbox>
						<h4 class="font-600 dark-text">
							<router-link
								:to="{ name: 'PublicOffer' }"
								class="text-decoration-none primary-text"
							>ommaviy oferta
							</router-link>
							shartlari bilan tanishdim

						</h4>
					</div>
				</div>
			</v-col>

			<v-col v-if='$i18n.locale === "en"' md="12">
				<div class="app-form-group mb-7">
					<h5 class="font-600 dark-text">Public offer</h5>

					<div class="d-flex align-start">
						<v-checkbox v-model="checkbox" hide-details color="danger" class="ma-0"></v-checkbox>
						<h4 class="font-600 dark-text">
							I got acquainted with the conditions of
							<router-link
								:to="{ name: 'PublicOffer' }"
								class="text-decoration-none primary-text"
							>public offer
							</router-link>
						</h4>
					</div>
				</div>
			</v-col>

			<v-col v-if='$i18n.locale === "ru"' md="12">
				<div class="app-form-group mb-7">
					<h5 class="font-600 dark-text">Публичная оферта</h5>

					<div class="d-flex align-start">
						<v-checkbox v-model="checkbox" hide-details color="danger" class="ma-0"></v-checkbox>
						<h4 class="font-600 dark-text">
							Я ознакомился(-ась) с условиями
							<router-link
								:to="{ name: 'PublicOffer' }"
								class="text-decoration-none primary-text"
							>публичная оферта
							</router-link>
						</h4>
					</div>
				</div>
			</v-col>

			<v-col md="12">
				<v-btn
					@click="send"
					:disabled="!checkbox"
					depressed
					color="danger"
					rounded
					min-width="192"
					min-height="50"
				>
					<span class="text-white font-700">{{ $t('Nav.PrivateClients.InteractiveServices.OpenDeposit') }}</span>
				</v-btn>
			</v-col>
		</v-row>

		<app-snackbar ref="appSnackbar" />
	</div>
</template>

<script>
import AppSnackbar from '@/components/AppSnackbar'
import { ChevronDownIcon } from 'vue-feather-icons'
import { email, required } from 'vuelidate/lib/validators'
import I18nVue from '@/I18nVue'

export default {
	name: 'DepositApplicationTabItem',
	components: {
		AppSnackbar,
		ChevronDownIcon,
		I18nVue
	},
	data() {
		return {
			periodAmountInput: '',

			depositPeriodList: [],
			depositPeriodRadios: {},
			depositPeriodPercent: {},

			periodAmountRange: {
				value: 0,
				min: 0,
				max: 0
			},

			depositType: '',
			value: 0,
			checkbox: false,
			formRequestModel: {
				full_name: '',
				phone: '',
				email: '',
				passport: null,
				tax_inn: '',
				deposit: null,
				deposit_amt: null,
				deposit_period: '',
				district: null,
				filial: null,
				text: '',
			},
			currencyList: [
				{
					name: 'UZS',
					value: 'milliy_valyutada'
				},
				{
					name: 'USD',
					value: 'aqsh_dollarida'
				},
				{
					name: 'EUR',
					value: 'yevroda_omonatlar'
				}
			],
			defaultCurrency: {
				name: 'UZS',
				value: 'milliy_valyutada'
			},
			fileInputModel: null,
			districtList: [],
			branchesList: [],
			depositList: [],
			rangeModel: {
				rangeValue: '',
				rangeMax: 0,
			},
			maxLengthAmount: '',
			calcModel: {
				amount: '',
				duration: [],
			},
		}
	},
	validations: {
		fileInputModel: { required },
		currencyList: { required },
		formRequestModel: {
			full_name: { required },
			phone: { required },
			email: { required, email },
			tax_inn: { required },
			district: { required },
			filial: { required },
		},
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
			 * Убераем все пробелы из суммы.
			 * */
			const removeWhiteSpaces = result.replace(/ /g, '')

			// Присваиваем если пользователь ввел больше чем от лимита
			if (removeWhiteSpaces > this.periodAmountRange.max) {
				this.periodAmountInput = this.periodAmountRange.max

				return false
			}
			this.periodAmountInput = result

			this.periodAmountRange.value = removeWhiteSpaces
		},
		/*
		*
		* */
		'depositType'(val) {
			if (val) this.getDepositID({ id: val.id })
		},
		/*
		 *
		 * */
		'rangeModel.rangeValue'(val) {
			this.calcModel.amount = val
		},
	},
	mounted() {
		this.getDistrict()
		this.getDepositID({ id: 1 })
		this.getDepositList("milliy_valyutada")
	},
	methods: {
		/*
		*
		* */
		dragChange(value) {
			this.periodAmountInput = value
		},

		/*
		 * Отправка формы
		 * */
		send() {
			// console.log(1)
			this.$v.$touch()

			if (this.$v.$invalid) {
				return
			}
			// console.log(2)

			// Удаляем плюс и пробелы из номера
			this.formRequestModel.phone = this.formRequestModel.phone.replace(/\D/g, '')

			this.formRequestModel.deposit = this.depositType.id

			this.formRequestModel.deposit_amt = Number(this.periodAmountInput.replace(/\D/g, ''))
			this.formRequestModel.deposit_period = String(this.depositPeriodRadios)

			this.$http.post(`/deposit_application/create/`, this.formRequestModel).then((res) => {
				const { appSnackbar } = this.$refs

				appSnackbar.snackbar = true
				appSnackbar.text = 'Murojat muvaffaqiyatli yuborildi'

				// Сбросим все поля
				this.fileInputModel = {}
				this.currencyModel = ''

				for (let key in this.formRequestModel) {
					this.formRequestModel[key] = ''
				}

				this.$v.$reset()
			})
		},

		/*
		 * Получение список фильтрованных депозитов
		 * */
		getDepositList(value) {
			this.$http.get(`/1/deposit/`, {
				params: {
					type: value.value
				}
			})
				.then(({ data }) => {
					this.depositList = data.results
					this.depositType = this.depositList[0]
				})
		},

		/*
		 * Получение доп. информации депозита
		 * */
		getDepositOptions(val) {
			this.$http.get(`/1/deposit/${val}/property/`).then(({ data }) => {
				const { amount } = data.results[0]
				const length = String(amount).length

				this.rangeModel.rangeMax = amount
				this.additionalDetails = data.results
				this.calcModel.duration = data.results[0].deposit_period

				if (length % 3 === 0) this.maxLengthAmount = length + Math.floor(length / 3 - 1)
				else this.maxLengthAmount = length + Math.floor(length / 3)
			})
		},

		/*
		 * Получение список районов
		 * */
		getDistrict() {
			this.$http.get(`/1/district/`, {
				params: {
					page_size: 500
				}
			}).then(({ data }) => {
				this.districtList = data.results
			})
		},

		/*
		 * Получение список филиалов
		 * */
		getBranches(val) {
			this.$http
				.get(`/1/filial/`, {
					params: {
						district: val,
						page_size: 500
					},
				})
				.then(({ data }) => {
					this.branchesList = data.results
				})
		},

		/*
		 * Получение файла
		 * */
		getFile(file) {
			let formData = new FormData()
			formData.append('passport_image', file)
			formData.append('given_name', 'passport_image')

			this.$http
				.post('/upload/', formData)
				.then(({ data }) => {
					this.formRequestModel.passport = data.id
				})
			// .catch((err) => {
			//     console.log(err)
			// })
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

			$label.forEach((item) => item.classList.remove('active'))
			$currentLabel.classList.add('active')
		},
		/*
		*
		* */
		getDepositID(value) {
			this.$http.get(`/1/deposit/${value.id}/period/`)
				.then(({ data }) => {
					const { min_amt, max_amt, calculation_info } = data.results[0]
					const length = String(max_amt).length

					this.calculationInfoList = calculation_info
					this.calculationInfoSelect = this.calculationInfoList[0]

					this.depositMinAmount = min_amt
					this.depositMaxAmount = max_amt

					this.depositPeriodList = calculation_info
					this.depositPeriodRadios = this.depositPeriodList[0].month
					this.depositPeriodPercent = this.depositPeriodList[0].percent

					this.periodAmountRange.max = parseInt(max_amt.replace(/ /g, ''))

					setTimeout(() => {
						this.periodAmountRange.value = parseInt(min_amt.replace(/ /g, ''))
						this.periodAmountInput = this.periodAmountRange.value
					}, 0)

					this.maxLengthAmount = length
				})
		},
		/*
		*
		* */
		getMonth(val) {
			this.depositPeriodPercent = val.percent
			this.depositPeriodRadios = val.month
		}
	},
}
</script>

<style></style>
