<template>
	<div>
		<v-dialog v-model="dialog" max-width="600">
			<form class="payment-modal-wrap pa-8">
				<div class="d-flex align-center justify-space-between mb-6">
					<h1>
						<I18nVue v-if="data.name" :uz="data.name.uz" :ru="data.name.ru" :en="data.name.en" />
					</h1>
					<button @click="dialog = !dialog" class="size-md ml-auto d-block outline-transparent">
						<x-icon size="1.5x" />
					</button>
				</div>
				<div class="app-form-group mb-5">
<!--					Payment Type: {{ data.paymentType }}-->
					<template v-for="item of data.accountFields">
						<label :for="item.id" class="font-600 dark-text mb-1 d-block">
							<I18nVue v-if="item.title" :uz="item.title.uz" :ru="item.title.ru" :en="item.title.en" />
						</label>
						<v-text-field
							:id="item.id.toString()"
							v-model="paymentModel.account[item.key]"
							v-mask="item.mask"
							:type="item.type"
							:placeholder="$i18n.locale === 'en' ? item.placeholder.en : $i18n.locale === 'ru'  ? item.placeholder.ru : item.placeholder.uz"
							outlined
							class="font-600 dark-text"
						>
							<template v-if="item.prefix" v-slot:prepend-inner>
								<h5 style="font-size: 18.5px; font-family: var(--font-semiBold)">
									{{ item.prefix }}
								</h5>
							</template>
						</v-text-field>
					</template>

					<div class="font-600 dark-text">
						<div class="d-flex align-center justify-space-between mb-1">
							<I18nVue t="P2p.Payment.sum" />

							<div class="">
								<label v-if="this.bolinganMaximal" class="float-right text-small grey--text">
									&nbsp; <I18nVue t="P2p.Payment.maximum" /> :
									{{ this.bolinganMaximal }}
								</label>
								<label v-if="this.bolinganMinimal" class="float-right text-small grey--text">
									<I18nVue t="P2p.Payment.minimum" /> : {{ this.bolinganMinimal }}, -
								</label>
							</div>
						</div>
						<v-text-field
							:rules="[rules.required,this.bolinganMinimal ? rules.loanMin : '',this.bolinganMaximal ? rules.loanMax : '']"
							v-model="summa"
							type="number"
							class="font-600 dark-text mb-1"
							outlined
						/>
					</div>

					<div class="font-600 dark-text mb-1">
						<label for="cartNumber" style="display: inline-block; width: 60%; margin-right: 5%">
							<I18nVue t="P2p.Payment.cardNumber" />
						</label>
						<label class="font-600 dark-text mb-1 d-inline-block">
							<I18nVue t="P2p.Payment.date" />
						</label>
					</div>
					<div>
						<v-text-field
							id="cartNumber"
							v-model="paymentModel.cardNumber"
							v-mask="'#### #### #### ####'"
							placeholder="XXXX - XXXX - XXXX - XXXX"
							type="tel"
							class="font-600 dark-text mb-1"
							style="display: inline-block; width: 60%; margin-right: 5%"
							outlined
						/>
						<v-text-field
							v-model="mm"
							v-mask="'##/##'"
							:placeholder="$t('P2p.Payment.date2')"
							type="tel"
							class="font-600 dark-text mb-1"
							style="width: 30%; display: inline-block; margin-right: 5%"
							outlined
						/>

						<!--                        <v-text-field-->
						<!--                            v-model='mm'-->
						<!--                            v-mask="'##'"-->
						<!--                            placeholder='oy'-->
						<!--                            class='font-600 dark-text mb-1'-->
						<!--                            style='width: 15%; display: inline-block; margin-right: 5%'-->
						<!--                            outlined-->
						<!--                        />-->
						<!--                        <v-text-field-->
						<!--                            v-model='yy'-->
						<!--                            placeholder='yil'-->
						<!--                            v-mask="'##'"-->
						<!--                            class='font-600 dark-text mb-1'-->
						<!--                            style='width: 15%; display: inline-block; float: right;'-->
						<!--                            outlined-->
						<!--                        />-->
					</div>
					<!--                    {{ this.paymentModel.expireDate }}-->
					<!--                    {{ this.paymentModel }}-->
					<!--                <pre>{{ JSON.stringify(this.data && this.data, null, 2) }}</pre>-->
				</div>
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
			</form>
		</v-dialog>
		<confirm-modal :confirmModel="this.confirmModel" :checkData="this.checkData" />
	</div>
</template>
<script>
	import { XIcon, ChevronDownIcon } from "vue-feather-icons";
	import I18nVue from "@/I18nVue";
	import { bolish, kopaytirish } from "@/utils/frontend";
	import paymentApi from "@/api/payment";
	import ConfirmModal
		from "@/views/Main/PhysicalPersons/PaymentsAndTransfers/PaymentTransfers/List/components/ConfirmModal";

	export default {
		name: "PaymentModal",
		components: {
			ConfirmModal,
			I18nVue,
			XIcon,
			ChevronDownIcon
		},
		data() {
			return {
				dialog: false,
				data: {},
				yy: "",
				mm: "",
				bolinganMinimal: null,
				bolinganMaximal: null,
				summa: null,
				paymentModel: {
					account: null,
					amount: null,
					cardNumber: null,
					expireDate: null,
					merchantId: null
				},
				confirmModel: {
					dialog: false,
					data: {}
				},
				checkData: {
					account: "",
					amount: '',
					btrx: null,
					date: "",
					merchantId: null,
					trx: ''
				},
				rules: {
					required: (v) => !!v || "Summani kiriting!",
					loanMin: (v) => v >= this.bolinganMinimal || `${this.bolinganMinimal} dan kam summa kirgazib bo'lmaydi`,
					loanMax: (v) => v <= this.bolinganMaximal || `${this.bolinganMaximal} dan ko'p summa kirgazib bo'lmaydi`
				}
			};
		},
		updated() {
			this.paymentModel.merchantId = this.data.merchantId;
			// this.yy.length === 2 && this.mm.length === 2 || this.yy && this.mm ? this.paymentModel.expireDate = this.yy + this.mm : this.paymentModel.expireDate = null
			this.mm && this.mm.length === 5 ? (this.paymentModel.expireDate = this.mm.substr(3, 2) + this.mm.substr(0, 2)) : (this.paymentModel.expireDate = null);
			this.data.amount.limitMin ? (this.bolinganMinimal = bolish(this.data.amount.limitMin)) : (this.bolinganMinimal = null);
			this.data.amount.limitMax ? (this.bolinganMaximal = bolish(this.data.amount.limitMax)) : (this.bolinganMaximal = null);
			this.summa >= this.bolinganMinimal && this.summa <= this.bolinganMaximal ? (this.paymentModel.amount = kopaytirish(this.summa)) : (this.paymentModel.amount = null);
		},
		methods: {
			handleSubmit() {
				paymentApi
					.payment_wu_execute(this.paymentModel)
					.then(
						(response) => {
							this.confirmModel.data = response.data;
							this.confirmModel.dialog = !this.confirmModel.dialog;
							this.dialog = !this.dialog;
							this.paymentModel.account = '';
							this.paymentModel.amount = '';
							this.paymentModel.cardNumber = '';
							this.paymentModel.expireDate = '';
							this.paymentModel.merchantId = '';
						},
						(error) => this.$toast.error(error.data.message)
					)
					.catch((err) => console.log("payment_wu_execute Catch error ==> ", err));
			}
		}
	};
</script>
