<template>
	<v-row>
		<v-dialog v-model="dialog" persistent max-width="600px">
			<template v-if="getUser">
				<v-card v-if="getUser.verification_type === 'phone'">
					<v-card-title class="justify-space-between mb-4">
						<I18nVue classes="text-h6" t="Auth.Verify.smsCode" />

						<span class="font-600 text--h5">{{ countDownDate.minute }} мин : {{ countDownDate.second <= 9 ? '0' + countDownDate.second : countDownDate.second}} сек</span>
					</v-card-title>

					<v-card-text class="pb-2">
						<div class="app-form-group app-form-group__small no-shadow mb-7">
							<h5 class="font-600 dark-text mb-1">{{ $t('Auth.Verify.number') }}</h5>

							<v-text-field
								:value="'+' + getUser.phone_number"
								disabled
								outlined
								hide-details
							>
							</v-text-field>
						</div>

						<div class="app-form-group app-form-group__small no-shadow mb-2">
							<h5 class="font-600 dark-text mb-1">{{ $t('Auth.Verify.codeLabel') }}</h5>

							<v-text-field
								v-model="code"
								outlined
								:hint="$t('Auth.Verify.codeHint')"
								persistent-hint
							>
							</v-text-field>
						</div>
					</v-card-text>

					<v-card-actions>
						<div class="px-2 pb-3 d-flex align-center justify-space-between w-100">
<!--							<v-btn-->
<!--								@click="dialog = !dialog"-->
<!--								color="red darken-1"-->
<!--								depressed-->
<!--								dark-->
<!--								min-width="125"-->
<!--								min-height="42"-->
<!--							>-->
<!--								<I18nVue t="Auth.Verify.close" class="reset-size font-600 text-transform-reset" style="letter-spacing: 0.025rem" />-->
<!--							</v-btn>-->


							<v-btn
								@click="Resend"
								:disabled="disableResendButton"
								color="blue darken-1"
								depressed
								min-width="125"
								min-height="42"
							>
								<I18nVue t="Auth.Verify.resendCode" class="reset-size font-600 text-transform-reset text-white" style="letter-spacing: 0.025rem" />
							</v-btn>

							<v-btn
								@click.prevent="Save"
								color="success darken-1"
								depressed
								dark
								min-width="125"
								min-height="42"
							>
								<I18nVue t="Auth.Verify.confirmation" class="reset-size font-600 text-transform-reset" style="letter-spacing: 0.025rem" />
							</v-btn>
						</div>
					</v-card-actions>
				</v-card>

				<!--      <v-card v-if="parentThis.verification_type === 'email'">-->
				<!--        <v-card-title class="headline grey lighten-2">-->
				<!--          <I18nVue t="Auth.Verify.eConf" />-->
				<!--        </v-card-title>-->
				<!--        <v-card-text class="mt-5">-->
				<!--          <I18nVue t="Auth.Verify.eConf2" />-->
				<!--        </v-card-text>-->

				<!--        <v-divider />-->

				<!--        <v-card-actions>-->
				<!--          <v-spacer />-->
				<!--          <v-btn outlined color="primary" text @click.prevent="dialog = !dialog">-->
				<!--            <I18nVue t="Auth.Verify.ok" />-->
				<!--          </v-btn>-->
				<!--        </v-card-actions>-->
				<!--      </v-card>-->


				<v-card v-else class="danger_tab">
					<v-card-title class="header">
						<I18nVue t="Auth.Verify.eConf" />
					</v-card-title>

					<v-card-text class="body">
						<I18nVue t="Auth.Verify.eConf2" />
					</v-card-text>

					<v-divider />

					<v-card-actions>
						<v-spacer />

						<v-btn
							@click.prevent="closeModal"
							color="success darken-1"
							depressed
							dark
							min-width="125"
							min-height="42"
						>
							<I18nVue t="Auth.Verify.ok" class="reset-size font-600 text-transform-reset" style="letter-spacing: 0.025rem" />
						</v-btn>
					</v-card-actions>
				</v-card>
			</template>
		</v-dialog>
	</v-row>
</template>
<script>
import I18nVue from "@/I18nVue";

export default {
	name: "Verify",
	components: { I18nVue },
	props: {
		parentThis: {
			type: Object,
			default: () => {}
		}
	},
	data: () => ({
		dialog: false,
		code: "",
		countDownDate: {
			minute: 0,
			second: 0
		},
		countInterval: 0,
		disableResendButton: true
	}),
	computed: {
		getUser() {
			return this.$store.getters.getUser
		}
	},
	methods: {
		/*
		*
		* */
		openModal() {
			this.dialog = true

			// Запускаем счетчик
			this.countDown()
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
		Save() {
			this.$http
				.post(`/verify/phone/${this.getUser.phone_number}/${this.code}/`)
				.then(
					(response) => {
						this.$router.push({ name: "Login" });

						this.$toast.success(`${this.$t("Auth.Verify.conf")} ${
							this.$i18n.locale === "uz" ? response.data.uz
								: this.$i18n.locale === "ru" ? response.data.ru
									: response.data.en
						}`);
						this.dialog = false;

						// Очищаем счетчик перед закрытием модалки
						this.clearCountDown()
					},
					(error) => this.$toast.error(`${this.$t("Auth.Verify.error")} ${
						this.$i18n.locale === "uz" ? error.data.uz
							: this.$i18n.locale === "ru" ? error.data.ru
								: error.data.en
					}`)
				)
				.catch((error) => this.$toast.error(`${this.$t("Auth.Verify.error1")} ${
					this.$i18n.locale === "uz" ? error.data.uz
						: this.$i18n.locale === "ru" ? error.data.ru
							: error.data.en
				}`));
		},

		/*
		*
		* */
		Resend() {
			// Очищаем счетчик перед закрытием модалки
			this.clearCountDown()

			// Запускаем счетчик
			this.countDown()

			this.$http
				.post(`/resend/verification/${this.getUser.phone_number}/`)
				.then(
					(response) => this.$toast.success(`${
						this.$i18n.locale === "uz" ? response.data.detail.uz
							: this.$i18n.locale === "ru" ? response.data.detail.ru
								: response.data.detail.en
					}`),
					(error) => this.$toast.error(`${
						this.$i18n.locale === "uz" ? error.data.detail.uz
							: this.$i18n.locale === "ru" ? error.data.detail.ru
								: error.data.detail.en
					}`)
				)
				.catch((error) => this.$toast.error(`${this.$t("Auth.Verify.error")} ${
					this.$i18n.locale === "uz" ? error.data.detail.uz
						: this.$i18n.locale === "ru" ? error.data.detail.ru
							: error.data.detail.en
				}`));
		}
	}
};
</script>
<style>
.danger_tab .header {
	background-color: #d70c17;
	color: white;
}

.danger_tab .body {
	margin-top: 25px;
	font-size: 16px;
	color: var(--grey-light-2);
}
</style>
