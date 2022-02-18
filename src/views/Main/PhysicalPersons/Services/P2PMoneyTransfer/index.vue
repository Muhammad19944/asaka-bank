<template>
	<div class="p2p-money-transfer-view">
		<v-container>
			<div class="money-transfer-content">
				<v-row>
					<v-col lg="6">
						<div class="app-form pa-md-10 pa-5 rounded-lg mb-8">
							<h3 class="text-center">IN PROCESS</h3>
						</div>


						<template>
<!--							<form class="app-form pa-md-10 pa-5 rounded-lg mb-8">-->
<!--								<div class="app-form-group mb-4">-->
<!--									<label for="from" class="font-600 dark-text">-->
<!--										<I18nVue t="P2p.MoneyTransfer.From" />-->
<!--									</label>-->
<!--									<v-divider class="mt-3 mb-7" style="border-color: rgba(var(&#45;&#45;border-color), 1)" />-->
<!--									<v-text-field-->
<!--										v-mask="'#### #### #### ####'"-->
<!--										placeholder="XXXX XXXX XXXX XXXX"-->
<!--										outlined-->
<!--										persistent-hint-->
<!--										id="from"-->
<!--										maxlength="19"-->
<!--										:rules="[rules.requiredCard]"-->
<!--										v-model="$v.from.$model"-->
<!--										:error="$v.from.$error"-->
<!--										:success="!!receiver_card_data1"-->
<!--										:hint="receiver_card_data1 ? receiver_card_data1 : receiver_card_error1"-->
<!--									>-->
<!--									</v-text-field>-->
<!--								</div>-->

<!--								<div class="app-form-group mb-4">-->
<!--									<label for="to" class="font-600 dark-text text&#45;&#45;h4">-->
<!--										<I18nVue t="P2p.MoneyTransfer.To" />-->
<!--									</label>-->
<!--									<v-divider class="mt-3 mb-7" style="border-color: rgba(var(&#45;&#45;border-color), 1)" />-->
<!--									<v-text-field-->
<!--										v-mask="'#### #### #### ####'"-->
<!--										placeholder="XXXX XXXX XXXX XXXX"-->
<!--										outlined-->
<!--										persistent-hint-->
<!--										id="to"-->
<!--										maxlength="19"-->
<!--										:rules="[rules.requiredCard]"-->
<!--										v-model="$v.to.$model"-->
<!--										:error="$v.to.$error"-->
<!--										:success="!!receiver_card_data2"-->
<!--										:hint="receiver_card_data2 ? receiver_card_data2 : receiver_card_error2"-->
<!--									>-->
<!--									</v-text-field>-->
<!--								</div>-->

<!--								<div class="app-form-group mb-4">-->
<!--									<label for="amount" class="font-600 dark-text text&#45;&#45;h4">-->
<!--										<I18nVue t="P2p.MoneyTransfer.Summa" />-->
<!--										<p v-if="card_info_data" class="d-inline-block text-right float-right">-->
<!--											<I18nVue t="P2p.MoneyTransfer.Commission" />-->
<!--											{{ card_info_data.serviceCharge && card_info_data.serviceCharge.value }} %-->
<!--										</p>-->
<!--									</label>-->
<!--									<v-divider class="mt-3 mb-7" style="border-color: rgba(var(&#45;&#45;border-color), 1)" />-->
<!--									<v-text-field-->
<!--										v-model="$v.amount.$model"-->
<!--										:error="$v.amount.$error"-->
<!--										:rules="[rules.required, this.minAmount !== null && rules.loanMin, this.maxAmount !== null && rules.loanMax]"-->
<!--										id="amount"-->
<!--										class="font-600 dark-text mb-1"-->
<!--										outlined-->
<!--										persistent-hint-->
<!--									/>-->
<!--								</div>-->
<!--								<v-btn-->
<!--									:disabled="!btnDisabled"-->
<!--									@click.prevent="postWuExecute"-->
<!--									depressed-->
<!--									color="danger"-->
<!--									rounded-->
<!--									min-width="192"-->
<!--									min-height="50"-->
<!--								>-->
<!--									<I18nVue classes="font-700 text-white" t="P2p.MoneyTransfer.Transfer" />-->
<!--								</v-btn>-->
<!--							</form>-->
<!--							<p2-p-confirm-modal :confirmModel="this.confirmModel"-->
<!--							                    :card_info_data="card_info_data!==null&&card_info_data" />-->
<!--							<p class="pa-4 mb-0">-->
<!--								<I18nVue t="P2p.MoneyTransfer.Maximum" />-->
<!--								{{ maxAmount ? maxAmount : "10 000 000" }}-->
<!--								<br>-->
<!--								<I18nVue t="P2p.MoneyTransfer.Minimum" />-->
<!--								{{ minAmount ? minAmount : "1 000" }}-->
<!--								<I18nVue t="P2p.MoneyTransfer.Sum" />-->
<!--							</p>-->
<!--							<I18nVue classes="pa-4 d-block" t="P2p.MoneyTransfer.CanBeSeveral" />-->
						</template>
					</v-col>

					<v-col lg="6" class="d-lg-block d-none">
						<div class="">
							<v-responsive :aspect-ratio="6 / 5">
								<img
									src="/images/services-14.png"
									alt="Card image"
									class="d-block img-contain p-absolute"
									style="top: 0"
								/>
							</v-responsive>
						</div>
					</v-col>
				</v-row>
			</div>
		</v-container>
	</div>
</template>


<script>
	import p2p from "@/api/p2p";
	import { bolish, kopaytirish } from "@/utils/frontend";
	import { required } from "vuelidate/lib/validators";
	import P2PConfirmModal from "@/views/Main/PhysicalPersons/Services/P2PMoneyTransfer/P2PConfirmModal";
	import VueHtml2pdf from "vue-html2pdf";
	import I18nVue from "@/I18nVue";

	export default {
		name: "index",
		components: { I18nVue, P2PConfirmModal, VueHtml2pdf },
		data() {
			return {
				card_info: {
					senderCardNumber: null,
					receiverCardNumber: null
				},
				wu_execute: {
					comment: "",
					receiverAccountId: 0,
					receiverAccountType: "Card",
					senderAccountId: 0,
					senderAccountType: "Card",
					transferAmount: 0
				},
				card_info_data: null,
				from: "",
				to: "",
				amount: null,
				minAmount: null,
				maxAmount: null,
				receiver_card_info1: null,
				receiver_card_data1: null,
				receiver_card_error1: null,
				receiver_card_info2: null,
				receiver_card_data2: null,
				receiver_card_error2: null,
				card_Info_error: null,
				btnDisabled: false,
				confirmModel: {
					dialog: false,
					data: {}
				},
				rules: {
					required: v => !!v || "Summani kiriting!",
					requiredCard: v => !!v || "Karta raqamini kiriting!",
					loanMin: v => v.replace(/ /g, "") >= this.minAmount || `${this.minAmount} dan kam summa kirgazib bo'lmaydi`,
					loanMax: v => v.replace(/ /g, "") <= this.maxAmount || `${this.maxAmount} dan ko'p summa kirgazib bo'lmaydi`
				}
			};
		},
		validations: {
			card_info: {
				senderCardNumber: { required },
				receiverCardNumber: { required }
			},
			wu_execute: {
				transferAmount: { required }
			},
			from: { required },
			to: { required },
			amount: { required }
		},
		watch: {
			from(val) {
				if (val.length === 19) {
					this.card_info.senderCardNumber = val.replace(/[^\w\d]+/gim, "");
					p2p.receiver_card_info(this.card_info.senderCardNumber)
						.then(
							({ data }) => {
								this.receiver_card_error1 = null;
								this.receiver_card_data1 = data.cardHolder;
							})
						.catch(e => this.$toast.error(e.data.message));
					this.getCardInfo();
				} else {
					this.card_info.senderCardNumber = null;
					this.receiver_card_error1 = null;
					this.receiver_card_data1 = null;
					this.btnDisabled = true;
				}
			},
			to(val) {
				if (val.length === 19) {
					this.card_info.receiverCardNumber = val.replace(/[^\w\d]+/gim, "");
					p2p.receiver_card_info(this.card_info.receiverCardNumber)
						.then(
							({ data }) => {
								this.receiver_card_error2 = null;
								this.receiver_card_data2 = data.cardHolder;
							},
							({ data }) => {
								this.receiver_card_data2 = null;
								this.receiver_card_error2 = data.message;
							}
						)
						.catch(e => this.$toast.error(e.data.message));
					this.getCardInfo();

				} else {
					this.card_info.receiverCardNumber = null;
					this.receiver_card_error2 = null;
					this.receiver_card_data2 = null;
					this.btnDisabled = true;
				}
			},
			amount(val) {
				/*
                * Форматируем числа
                * 100, 1 000, 10 000, 100 000, ...
                * */
				const result = this.$options.filters.filterNumberFormatThousands(val);
				this.$nextTick(() => this.amount = result);

				if (result.replace(/ /g, "") >= this.minAmount && result.replace(/ /g, "") <= this.maxAmount) {
					this.btnDisabled = true;
				} else {
					this.btnDisabled = false;
				}
			}
		},
		methods: {
			/*
		      *
		      */
			generateReport() {
				this.$refs.html2Pdf.generatePdf();
			},
			/*
	      *
	      * */
			getCardInfo() {
				if (this.card_info.senderCardNumber && this.card_info.receiverCardNumber) {
					p2p.card_info(this.card_info)
						.then(
							({ data }) => {
								this.card_info_data = data;
								this.minAmount = bolish(data.amount.limitMin);
								this.maxAmount = bolish(data.amount.limitMax);
								this.wu_execute.senderAccountId = data.sender.cardId;
								this.wu_execute.receiverAccountId = data.receiver.cardId;
							},
							({ data }) => {
								this.card_info_data = [];
								this.card_Info_error = data.message;
								this.$toast.error(data.message);
							}
						)
						.catch(e => this.$toast.error(e.data.message));
				}
			},

			/*
		      *
		      * */
			postWuExecute() {
				this.$v.$touch();

				if (this.$v.$invalid) {
					this.$toast.warning(`Qator to'ldirilishi shart`);
					return;
				}

				this.amount = this.amount.replace(/ /g, "");
				this.wu_execute.transferAmount = kopaytirish(this.amount);

				p2p.wu_execute(this.wu_execute)
					.then(({ data }) => {
						this.confirmModel.data = data;
						this.confirmModel.dialog = true;
					})
					.catch(e => {
						this.$toast.error(e.data.message);
						this.confirmModel.dialog = false;
						console.log("wu-execute error => ", e);
					});
			}
		}
	};
</script>

<style>
	@media screen {
		.color-red {
			color: yellow !important;
		}
	}
</style>
