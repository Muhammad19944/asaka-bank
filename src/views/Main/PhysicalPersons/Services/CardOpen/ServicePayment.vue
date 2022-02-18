<template>
	<div class="service-payment-view">
		<v-container>
			<div class="py-10">
				<v-row>
					<v-col md="6">
						<div class="app-form-group mb-7">
							<h4 class="font-600 dark-text">
								{{ $t("P2p.Payment.cardNumber") }}
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

							<v-text-field
								v-model="$v.paymentModel.card_number.$model"
								:error="$v.paymentModel.card_number.$error"
								v-mask="'#### #### #### ####'"
								outlined
								hide-details
							>
							</v-text-field>
<!--							v-mask="'#### #### #### ####'"-->
						</div>
					</v-col>

					<v-col md="6">
						<div class="app-form-group mb-7">
							<h4 class="font-600 dark-text">
								{{ $t("P2p.Payment.date2") }}
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

							<v-text-field
								v-model="$v.paymentModel.expiry_date.$model"
								:error="$v.paymentModel.expiry_date.$error"
								v-mask="'##/##'"
								outlined
								hide-details
							>
							</v-text-field>
<!--							v-mask="'##/##'"-->
						</div>
					</v-col>

					<v-btn
						@click="openModal"
						depressed
						color="danger"
						rounded
						min-width="192"
						min-height="50"
					>
                        <span class="text-white font-700">
	                        {{ $t("payment_service") }}
                        </span>
					</v-btn>
				</v-row>
			</div>
		</v-container>

		<!-- Code confirmation dialog -->
		<v-dialog
			v-model="dialog"
			persistent
			max-width="500"
		>
			<template v-if="!dialogModalLoaded">
				<v-card class="pa-10 text-center">
					<v-progress-circular
						indeterminate
						color="primary"
					></v-progress-circular>
				</v-card>
			</template>

			<template v-else>
				<v-card>
					<v-card-title class="justify-space-between mb-4">
						{{ $t("Auth.Verify.smsCode") }}

						<span class="font-600 text--h5">{{ countDownDate.minute }} мин : {{ countDownDate.second <= 9 ? '0' + countDownDate.second : countDownDate.second}} сек</span>
					</v-card-title>

					<v-card-text class="pb-2">
						<div class="app-form-group app-form-group__small no-shadow mb-2">
							<h5 class="font-600 dark-text mb-1">{{ $t('Auth.Verify.codeLabel') }}</h5>

							<v-text-field
								v-model="OTPPaymentModel.otp"
								outlined
								:hint="OTPPaymentModel.phoneNumber + $t('Auth.Verify.codeHint')"
								persistent-hint
							>
							</v-text-field>
						</div>
					</v-card-text>

					<v-card-actions>
						<div class="px-2 pb-3 d-flex align-center justify-space-between w-100">
							<v-btn
								@click="resend"
								:disabled="disableResendButton"
								color="blue darken-1"
								depressed
								min-width="125"
								min-height="42"
							>
							<span class="reset-size font-600 text-transform-reset text-white" style="letter-spacing: 0.025rem">
								{{ $t("Auth.Verify.resendCode") }}
							</span>
							</v-btn>

							<v-btn
								@click.prevent="send"
								color="success darken-1"
								depressed
								dark
								min-width="125"
								min-height="42"
							>
							<span class="reset-size font-600 text-transform-reset" style="letter-spacing: 0.025rem">
								{{ $t("Auth.Verify.confirmation") }}
							</span>
							</v-btn>
						</div>
					</v-card-actions>
				</v-card>
			</template>
		</v-dialog>
		<!-- /Code confirmation dialog -->
	</div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
	name: "ServicePayment",
	data() {
		return {
			dialog: false,
			dialogModalLoaded: false,
			code: "",
			countDownDate: {
				minute: 0,
				second: 0
			},
			countInterval: 0,
			disableResendButton: true,
			paymentModel: {
				card_number: "",
				expiry_date: "",
				// order_id: 70
				order_id: this.$route.params.id
			},
			OTPPaymentModel: {
				payment_id: "",
				otp: 0,
				phoneNumber: ""
			}
		}
	},
	validations: {
		paymentModel: {
			card_number: { required },
			expiry_date: { required }
		}
	},
	mounted() {
		console.log(this.$route.params.id);
	},
	methods: {
		openModal() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			}

			this.dialog = true
			/*
			 * Убираем все пробелы из суммы.
			 * */
			this.paymentModel.card_number = this.paymentModel.card_number.replace(/ /g, '')
			this.paymentModel.expiry_date = this.paymentModel.expiry_date.replace(/\//g, '')

			this.paymentModel.expiry_date = `${this.paymentModel.expiry_date.slice(-2)}${this.paymentModel.expiry_date.slice(0, 2)}`

			this.$http.post("/transaction/create/", this.paymentModel)
			.then(({ data }) => {
				this.dialogModalLoaded = true
				// Запускаем счетчик
				this.countDown()
				this.OTPPaymentModel.payment_id = data.paymentId
				this.OTPPaymentModel.phoneNumber = data.phoneNumber
			})
		},
		/*
		*
		* */
		closeModal() {
			this.dialog = false

			// Очищаем счетчик перед закрытием модалки
			this.clearCountDown()
		},

		/*
		* Счетчик для подтверждений
		* */
		countDown(count = 2) {
			let countFormat = count * 60
			let countSecond = 60;
			let countMinute = null

			this.countInterval = setInterval(() => {

				if (countSecond <= 0) {
					countSecond = 60
				}

				if (countFormat <= 0) {
					clearInterval(this.countInterval)
					this.disableResendButton = false

					return false;
				}

				countFormat--
				countSecond--

				countMinute = Math.floor(countFormat / 60)

				this.countDownDate.minute = countMinute
				this.countDownDate.second = countSecond
			}, 1000)
		},

		/*
		*
		* */
		clearCountDown() {
			this.countDownDate.minute = this.countDownDate.second = 0
			this.disableResendButton = true
			clearInterval(this.countInterval)
		},
		/*
		*
		* */
		send() {
			this.dialogModalLoaded = false

			this.$http.post("/transaction/hold_and_charge/", this.OTPPaymentModel)
			.then(({ data }) => {
				this.$toast.success(data.message.toString())

				this.dialog = false
				this.paymentModel.card_number = ""
				this.paymentModel.expiry_date = ""
			})
		},
		/*
		*
		* */
		resend() {
			// Очищаем счетчик перед закрытием модалки
			this.clearCountDown()

			// Запускаем счетчик
			this.countDown()
		}
	}
}
</script>
