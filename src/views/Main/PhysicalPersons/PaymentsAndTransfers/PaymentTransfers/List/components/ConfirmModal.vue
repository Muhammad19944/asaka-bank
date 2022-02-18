<template>
	<v-dialog v-model="confirmModel.dialog" max-width="500px">
		<!--        persistent-->
		<form class="app-form-group payment-modal-wrap pa-4">
			<v-card-title>
				<h1 class="d-inline-block mr-auto">To'lovni tasdiqlash</h1>
				<button
					@click="confirmModel.dialog = !confirmModel.dialog"
					class="d-inline-block outline-transparent size-md float-right"
				>
					<x-icon size="1.5x" />
				</button>
			</v-card-title>
			<v-card-text>
				<v-container>
					<v-row>
						<v-col cols="12">
							SMS kodi ushbu raqamga yuboriladi
							{{ confirmModel.data.smsPhone && confirmModel.data.smsPhone }}
						</v-col>
						<v-col v-if="expiresIn !== null || 0" cols="12">
							<vue-countdown :time="expiresIn" :interval="100" v-slot="{ hours, minutes, seconds }">
								Tasdiqlash vaqti
								{{ hours }} Soat, {{ minutes }} minut, {{ seconds }} sikund.
							</vue-countdown>
						</v-col>
						<v-col cols="12">
							<hr class="w-100" />
						</v-col>
						<v-col cols="12">
							<label>
								Tasdiqlash kodi
								<v-text-field
									v-model="verifyCode"
									outlined
									hide-details
									class="font-600 dark-text my-2"
								/>
							</label>
							<v-btn
								@click.prevent="handleSubmit()"
								type="submit"
								depressed
								color="danger"
								min-width="192"
								min-height="50"
								rounded
								class="mt-5"
							>
								<I18nVue classes="font-700 text-white" t="btn_pay" />
							</v-btn>
							<!--<pre>{{ JSON.stringify(confirmId && confirmId, null, 2) }}</pre>-->
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>
		</form>
	</v-dialog>
</template>
<script>
	import { XIcon } from "vue-feather-icons";
	import VueCountdown from "@chenfengyuan/vue-countdown";
	import I18nVue from "@/I18nVue";
	import paymentApi from "@/api/payment";

	export default {
		name: "ConfirmModal",
		props: {
			confirmModel: {
				required: true,
				type: Object
			},
			checkData: Object
		},
		components: { I18nVue, XIcon, VueCountdown },
		data: () => {
			return {
				verifyCode: "",
				confirmId: null,
				expiresIn: null
			};
		},
		updated() {
			this.confirmModel.data.expiresIn ? (this.expiresIn = this.confirmModel.data.expiresIn * 1000) : (this.expiresIn = null);
			this.confirmModel.data.confirmId ? (this.confirmId = this.confirmModel.data.confirmId) : (this.confirmId = null);
		},
		methods: {
			handleSubmit() {
				paymentApi
					.payment_wu_confirm({
						verifyCode: this.verifyCode,
						confirmId: this.confirmId
					})
					.then(
						(response) => {
							this.confirmModel.dialog = !this.confirmModel.dialog;
							this.$toast.success("To'landi!")
							this.checkData = response.data
						},
						(error) => {
							this.$toast.error(error.data.message || "Xatolik!");
							console.log("Error Data ==> ", error);
						}
					)
				.catch((err) => console.log('Catch Data ==> ', err.toString()))
			}
		}
	};
</script>
