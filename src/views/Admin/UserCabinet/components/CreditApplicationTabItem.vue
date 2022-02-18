<template>
	<div class='credit-application-view px-2'>
		<v-row>
			<!-- FISH -->
			<v-col md='6'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>
						<I18nVue t='Services.OpenCard.FISH' />
					</h5>

					<v-text-field
						v-model='formRequestModel.full_name'
						:error='$v.formRequestModel.full_name.$error'
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.FISH_sub')" />
				</div>
			</v-col>

			<!-- TELEFON RAQAM -->
			<v-col md='6'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>
						<I18nVue t='Services.OpenCard.phone' />
					</h5>

					<v-text-field
						v-model='formRequestModel.phone'
						:error='$v.formRequestModel.phone.$error'
						v-mask="'+998 (##) ### ## ##'"
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.phone_sub')"
					>
					</v-text-field>
				</div>
			</v-col>


			<!-- EMAIL -->
			<v-col md='6'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>
						<I18nVue t='Services.OpenCard.mail' />
					</h5>

					<v-text-field
						v-model='$v.formRequestModel.email.$model'
						:error='$v.formRequestModel.email.$error'
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.mail')"
					>
					</v-text-field>
				</div>
			</v-col>


			<!-- STIR -->
			<v-col md='6'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>
						<I18nVue t='Services.OpenCard.stir' />
					</h5>

					<v-text-field
						v-model='$v.formRequestModel.tax_inn.$model'
						:error='$v.formRequestModel.tax_inn.$error'
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.stir')" />
				</div>
			</v-col>


			<!-- TUG'ILGAN SANASI -->

			<v-col md='12'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>
						<I18nVue t='date_of_birth' />
					</h5>

					<v-dialog
						ref='dialog'
						v-model='datePickerModal'
						:return-value.sync='formRequestModel.date_of_birth'
						width='290px'
					>
						<template v-slot:activator='{ on, attrs }'>
							<v-text-field
								v-model='formRequestModel.date_of_birth'
								:placeholder="$t('date_of_birth')"
								prepend-icon=''
								readonly
								outlined
								hide-details
								v-bind='attrs'
								v-on='on'
							/>
						</template>
						<v-date-picker v-model='formRequestModel.date_of_birth' scrollable>
							<v-spacer />
							<v-btn text color='primary' @click='datePickerModal = false'> Cancel</v-btn>
							<v-btn text color='primary' @click='$refs.dialog.save(formRequestModel.date_of_birth)'>
								OK
							</v-btn>
						</v-date-picker>
					</v-dialog>
				</div>
			</v-col>

			<!-- PASSPORT -->
			<v-col md='6'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>
						<I18nVue t='Services.OpenCard.passport' />
					</h5>

					<v-file-input
						@change="getPassportFile"
						v-model="$v.passportInputModel.$model"
						:error="$v.passportInputModel.$error"
						prepend-icon=''
						outlined
						:placeholder="$t('Services.OpenCard.passport')"
					>
						<template v-slot:prepend-inner>
							<file-text-icon size='1.5x' class='grey--text mr-2'></file-text-icon>
						</template>
					</v-file-input>
					<span class='d-block mt-n1 text-small primary-text font-600'>
                        <I18nVue t='Services.OpenCard.passport_notification' />
                    </span>
				</div>
			</v-col>

			<!-- DAROMADLAR TO'G'RISIDA MA'LUMOT -->

			<v-col md='6'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>
						{{ $t("LastCorrections.income_info") }}
					</h5>

					<v-file-input
						@change="getFile"
						v-model="$v.fileInputModel.$model"
						:error="$v.fileInputModel.$error"
						prepend-icon=''
						outlined
						:placeholder="$t('LastCorrections.upload_file')"
					>
						<template v-slot:prepend-inner>
							<file-text-icon size='1.5x' class='grey--text mr-2'></file-text-icon>
						</template>
					</v-file-input>
				</div>
			</v-col>

			<!--YASHASH JOYI-->
			<v-col md='6'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>
						<I18nVue t='Services.OpenCard.residence' />
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
						:placeholder="$t('Services.OpenCard.residence')"
					>
						<template v-slot:append>
							<chevron-down-icon size='1.5x' class='grey--text' />
						</template>
					</v-select>
				</div>
			</v-col>

			<!--FILIAL-->
			<v-col md='6'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>
						<I18nVue t='Services.OpenCard.filial' />
					</h5>

					<v-select
						v-model="$v.formRequestModel.filial.$model"
						:error="$v.formRequestModel.filial.$error"
						:items="branchesList"
						item-text="name_uz"
						item-value="id"
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.filial')"
					>
						<template v-slot:append>
							<chevron-down-icon size='1.5x' class='grey--text' />
						</template>
					</v-select>
				</div>
			</v-col>

			<!--KREDIT TURI-->
			<v-col md='6'>
				<!--						<template v-if="$route.params.id">-->
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">Kredit turi</h5>

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
								<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
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
							placeholder="Kredit turi"
						>
							<template v-slot:append>
								<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
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
							placeholder="Kredit turi"
						>
							<template v-slot:append>
								<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
							</template>
						</v-select>
					</template>
				</div>
				<!--						</template>-->
			</v-col>

			<!-- BOSHLANG'ICH TO'LOV -->
			<v-col md='6'>
				<template v-if="creditInitialFeeList[0] &&  creditInitialFeeList[0].value">
					<div class="app-form-group app-form-group__small no-shadow mb-2">
						<h5 class="font-600 dark-text mb-1">Boshlang'ich to'lov</h5>

						<v-select
							v-model="creditInitialFeeSelect"
							:items="creditInitialFeeList"
							item-text="value"
							return-object
							outlined
							hide-details
							placeholder="Boshlang'ich to'lov"
						>
							<template v-slot:append>
								<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
							</template>
						</v-select>

						<!--								{{ creditInitialFeeSelect }}-->
					</div>
				</template>
			</v-col>

			<!-- KREDIT MIQDORI -->
			<v-col md='12'>
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">Miqdor</h5>

					<v-text-field
						v-model="periodAmountInput"
						:maxlength='maxLengthAmount'
						outlined
						hide-details
						class="progress-field"
					>
					</v-text-field>

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
								<div :class="['custom-step', { active }]"></div>
							</template>
						</vue-slider>
					</div>
				</div>
			</v-col>

			<!-- KREDIT MUDDATI -->

			<v-col md='12'>
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">Kredit muddati</h5>

					<v-radio-group
						v-model='creditPeriodRadios'
						hide-details>
						<template v-slot:label>
							<div class='app-track'>
								<div class='track-top d-flex p-relative'>
									<template v-for='(item, index) in creditPeriodList'>
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
									<template v-for='(item, index) in creditPeriodList'>
										<div :key='index' class='flex-1 text-center py-3'>
											<span class='text-small'>{{ item.month }} oy</span>
										</div>
									</template>
								</div>
							</div>
						</template>
					</v-radio-group>

					<!--							{{ creditPeriodRadios }}-->
				</div>
			</v-col>

			<!-- KREDIT MAQSADI -->
			<v-col md='6'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>
						<I18nVue t='credit_purpose' />
					</h5>

					<v-textarea
						v-model='$v.formRequestModel.credit_purpose.$model'
						:error='$v.formRequestModel.credit_purpose.$error'
						outlined
						hide-details
						:placeholder="$t('credit_purpose')" />
				</div>
			</v-col>

			<!-- XABAR -->
			<v-col md='6'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>
						<I18nVue t='Services.OpenCard.message' />
					</h5>

					<v-textarea
						v-model='$v.formRequestModel.text.$model'
						:error='$v.formRequestModel.text.$error'
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.message')" />
				</div>
			</v-col>

			<v-col md='12'>
				<div class='app-form-group mb-7'>
					<h5 class='font-600 dark-text'>
						<I18nVue t='Services.OpenCard.oferta' />
					</h5>

					<div class='d-flex align-start'>
						<v-checkbox
							v-model='checkbox'
							hide-details
							color='danger'
							class='ma-0'
						/>
						<h4 class='font-600 dark-text'>
							<I18nVue t='Services.OpenCard.oferta_sub' />
							<router-link to='/' class='text-decoration-none primary-text'>
								&nbsp;<I18nVue t='Services.OpenCard.oferta' />
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
					color='danger'
					rounded
					min-width='192'
					min-height='50'
				>
					<I18nVue classes='text-white font-700' t='Services.OpenCard.application' />
				</v-btn>
			</v-col>
		</v-row>

		<app-snackbar ref="appSnackbar" />
	</div>
</template>

<script>
import { ChevronDownIcon, FileTextIcon } from 'vue-feather-icons'
import { required, email } from "vuelidate/lib/validators";
import I18nVue from '@/I18nVue'
import AppSnackbar from "@/components/AppSnackbar";

export default {
	name: "CreditApplicationTabItem",
	components: {
		I18nVue,
		ChevronDownIcon, FileTextIcon,
		AppSnackbar
	},
	data() {
		return {
			value: 0,
			checkbox: false,
			datePickerModal: false,
			formRequestModel: {
				full_name: '',
				phone: '',
				email: '',
				tax_inn: '',
				date_of_birth: "",
				district: null,
				filial: null,
				credit: null,
				credit_amount: "",
				initial_payment: "",
				credit_period: "",
				credit_purpose: "",
				passport: "",
				file: null,
				text: ""
			},
			passportInputModel: [],
			fileInputModel: [],

			districtList: [],
			branchesList: [],

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

			selectedID: '',

		}
	},
	validations: {
		fileInputModel: { required },
		passportInputModel: { required },
		formRequestModel: {
			full_name: { required },
			phone: { required },
			email: { required, email },
			tax_inn: { required },
			date_of_birth: { required },
			district: { required },
			filial: { required },
			text: { required },
			credit_purpose: { required}
		}
	},
	/*
	*
	* */
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
		}
	},
	/*
	*
	* */
	mounted() {
		this.getDistrict()
		this.getList()

		if (!this.creditID){
			this.getCreditID({ id: 4 })
		}
		else {
			this.getCreditID({ id: +this.creditID })
		}
	},
	/*
	*
	* */
	methods: {
		/*
		*
		* */
		dragChange(value) {
			this.periodAmountInput = value
		},

		getTrackSize($event) {
			const $label = document.querySelectorAll('.track-label')
			const $currentLabel = $event.target.closest('.track-label')

			$label.forEach((item) => item.classList.remove('active'))
			$currentLabel.classList.add('active')
		},
		/*
		*
		* */
		getDistrict() {
			this.$http.get("/1/district/").then(({ data }) => {
				this.districtList = data.results;
			});
		},
		/*
		*
		* */
		getBranches(val) {
			this.$http
				.get("/1/filial/", {
					params: {
						district: val
					}
				})
				.then(({ data }) => {
					this.branchesList = data.results;
				});
		},
		/*
		*
		* */
		getList() {
			this.$http.get('/1/credit/', {
				params: {
					category: 5
				}
			})
				.then(({ data }) => {
					this.creditList = data.results
					this.creditType = this.creditList[0]
				})
		},
		/*
		*
		* */
		getCreditID(value) {
			// let params = typeof value === 'object' ? value.id : value

			this.$http.get(`/1/credit/${value.id}/period/`)
				.then(({ data }) => {
					const { amount, grace_period, initial_fee, loan_type, period, type, zone, general_percent } = data.results[0]
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
		getPassportFile(file) {
			let formData = new FormData();
			formData.append("passport_image", file);
			formData.append("given_name", "passport_image");

			this.$http
				.post("/upload/", formData)
				.then(({ data }) => {
					this.formRequestModel.passport = data.id;
				})
			// .catch((err) => {
			// 	console.log(err);
			// });
		},
		/*
		*
		* */
		getFile(file) {
			let formData = new FormData();
			formData.append("file_image", file);
			formData.append("given_name", "file_image");

			this.$http
				.post("/upload/", formData)
				.then(({ data }) => {
					this.formRequestModel.file = data.id;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		/*
		*
		* */
		send() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			}

			// Удаляем плюс и пробелы из номера
			this.formRequestModel.phone = this.formRequestModel.phone.replace(/\D/g, "");

			this.formRequestModel.credit = this.creditType.id
			this.formRequestModel.credit_amount = this.periodAmountInput
			this.formRequestModel.initial_payment = this.creditInitialFeeSelect.value
			this.formRequestModel.credit_period = this.creditPeriodRadios.month
			this.formRequestModel.file = this.fileInputModel

			this.$http.post("/credit/application/create/", this.formRequestModel).then((res) => {
				const { appSnackbar } = this.$refs;

				appSnackbar.snackbar = true;
				appSnackbar.text = "Murojat muvaffaqiyatli yuborildi";

				// Сбросим все поля
				this.fileInputModel = {};
				this.passportInputModel = {};

				for (let key in this.formRequestModel) {
					this.formRequestModel[key] = "";
				}

				this.$v.$reset();
			});
		}


	}
}
</script>

<style></style>
