<template>
	<div>
		<template v-if="$store.state.CREATED_DEPOSIT_ID === null">
			<v-row>
				<v-col md="12">
					<v-alert type="error">{{ $t('Dashboard.deposit.deposit_error_alert') }}</v-alert>
				</v-col>
			</v-row>
		</template>

		<div class="d-flex align-center mb-6">
			<h4 class="text--primary text-uppercase font-700 mr-4">Срок депозита</h4>
			<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
		</div>

		<template v-for="(item, index) in depositPeriod.calculation_info">
			<v-row :key="index">
				<v-col md="4">
					<div class="app-form-group app-form-group__small no-shadow mb-2">
						<h5 class="font-600 dark-text mb-1">{{ index + 1 }}. {{ $t('Dashboard.deposit.deposit_period') }} <span class="red--text">({{ $t('Dashboard.month') }})</span></h5>

						<v-text-field
							v-model="depositPeriod.calculation_info[index].month"
							:readonly="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
							outlined
							hide-details
						>
						</v-text-field>
					</div>
				</v-col>

				<v-col md="4">
					<div class="app-form-group app-form-group__small no-shadow mb-2">
						<h5 class="font-600 dark-text mb-1">
							{{ $t('Dashboard.deposit.deposit_period') }} <span class="red--text">({{ $t('Dashboard.percentage_linked_month') }})</span>
						</h5>

						<v-text-field
							v-model="depositPeriod.calculation_info[index].percent"
							:readonly="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
							outlined
							hide-details
						>
						</v-text-field>
					</div>
				</v-col>

				<template v-if="depositPeriod.calculation_info.length !== index + 1">
					<v-col md="3">
						<div class="app-form-group app-form-group__small no-shadow mb-2">
							<h5 class="font-600 dark-text mb-1" style="opacity: 0">Hidden text</h5>

							<send-button
								@emit:up="deleteRow(index)"
								:disabled="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
								color="danger"
								:text="$t('Dashboard.delete')"
							>
								<trash2-icon size="1.3x" class="text-white d-block"></trash2-icon>
							</send-button>
						</div>
					</v-col>
				</template>

				<template v-else>
					<v-col md="3">
						<div class="app-form-group app-form-group__small no-shadow mb-2">
							<h5 class="font-600 dark-text mb-1" style="opacity: 0">Hidden text</h5>

							<send-button
								@emit:up="addRow"
								:text="$t('Dashboard.add_new')"
								:disabled="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
							>
								<plus-circle-icon size="1.3x" class="text-white"></plus-circle-icon>
							</send-button>
						</div>
					</v-col>
				</template>
			</v-row>
		</template>

		<v-row>
			<v-col md="12">
				<div class="d-flex align-center">
					<h4 class="text--primary text-uppercase font-700 mr-4">{{ $t('Dashboard.credits.quantity') }}</h4>
					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">Сумма вклада <span class="red--text">(minimum)</span></h5>

					<v-text-field
						v-model="$v.depositPeriod.min_amt.$model"
						:error="$v.depositPeriod.min_amt.$error"
						:readonly="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">Сумма вклада <span class="red--text">(maksimum)</span></h5>

					<v-text-field
						v-model="$v.depositPeriod.max_amt.$model"
						:error="$v.depositPeriod.max_amt.$error"
						:readonly="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>
		</v-row>

		<template v-if="TYPE !== 'Create' && TYPE !== 'Update'">
			<go-back-button />

			<template v-if="TYPE !== 'Read'">
				<send-button
					@emit:up="update"
					:text="$t('Dashboard.update')"
				/>
			</template>
		</template>

		<template v-else>
			<go-back-button />

			<template v-if="!isDepositCalcCreated">
				<send-button @emit:up="send" :text="$t('Dashboard.add_new')" />
			</template>

			<template v-else>
				<send-button
					@emit:up="update"
					:text="$t('Dashboard.update')"
				/>
			</template>
		</template>
	</div>
</template>

<script>
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import SendButton from "../../../../BaseComponents/SendButton";
import { Edit2Icon, Trash2Icon, PlusCircleIcon } from "vue-feather-icons";
import { required } from "vuelidate/lib/validators";

export default {
	name: "CreateDepositPeriod",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		GoBackButton,
		SendButton,
		Edit2Icon,
		Trash2Icon,
		PlusCircleIcon
	},
	data() {
		return {
			depositList: [],
			depositPeriod: {
				calculation_info: [
					{
						month: '',
						percent: ''
					}
				],
				min_amt: "",
				max_amt: ""
			},
			periodID: null,
			isDepositCalcCreated: false
		};
	},
	watch: {
		'depositPeriod.min_amt'(val) {
			/*
			 * Форматируем числа
			 * 100, 1 000, 10 000, 100 000, ...
			 * */
			const result = this.$options.filters.filterNumberFormatThousands(val);
			this.$nextTick(() => this.depositPeriod.min_amt = result);
		},
		'depositPeriod.max_amt'(val) {
			/*
			 * Форматируем числа
			 * 100, 1 000, 10 000, 100 000, ...
			 * */
			const result = this.$options.filters.filterNumberFormatThousands(val);
			this.$nextTick(() => this.depositPeriod.max_amt = result);
		},
	},
	validations: {
		depositPeriod: {
			min_amt: { required },
			max_amt: { required }
		}
	},
	mounted() {
		if (this.$route.params.id) {
			this.getPeriod();
		}
	},
	methods: {
		/*
		 *
		 * */
		getPeriod() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/deposit/${this.$store.state.CREATED_DEPOSIT_ID}/period/`).then(({ data }) => {
				if (data.results.length) {
					this.periodID = data.results[0].id;
					this.getOnePeriod(this.periodID);

					this.isDepositCalcCreated = true;
				}
			});
		},

		/*
		 *
		 * */
		getOnePeriod(id) {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/deposit/${this.$store.state.CREATED_DEPOSIT_ID}/period/${id}`).then(({ data }) => {
				this.depositPeriod = data;
			});
		},

		/*
		 *
		 * */
		deleteCalc() {
			if (!confirm(`O'chirishni xoxlaysizmi ?`)) {
				return void 0;
			}

			this.$http
				.delete(`/${this.$store.state.auth.COMPANY_ID}/deposit/${this.$route.params.id}/period/${this.periodID}`)
				.then((res) => {
					this.$toast.success(`Kredit kalkulyator o'chirildi`);

					this.depositPeriod = {
						calculation_info: [{
							month: '',
							percent: ''
						}],
						min_amt: "",
						max_amt: ""
					};

					this.isDepositCalcCreated = false;
				})
				.catch((err) => {
					this.$toast.error(`O'chirishda xatolik`);
				});
		},

		/*
		 *
		 * */
		update() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(`Field to'ldirilishi shart`);

				return;
			}

			if(this.$route.params.id) {
				this.$store.state.CREATED_DEPOSIT_ID = this.$route.params.id
			}

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/deposit/${this.$store.state.CREATED_DEPOSIT_ID}/period/${this.depositPeriod.id}/`, this.depositPeriod)
				.then((res) => {
					this.$toast.success(`Yangilandi`);

					this.getPeriod();

					this.resetFields();
				})
				.catch((err) => {
					this.$toast.error(`Yangilashda xatolik`);

					this.resetFields();
				});
		},

		/*
		 *
		 * */
		send() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(`Field to'ldirilishi shart`);

				return;
			}

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/deposit/${this.$store.state.CREATED_DEPOSIT_ID}/period/`, this.depositPeriod)
				.then(({ data }) => {
					this.$toast.success(`Deposit davri yaratildi`);

					this.depositPeriod = data

					this.isDepositCalcCreated = true

					this.getPeriod();

					this.resetFields();
				})
				.catch((err) => {
					this.$toast.error(`Yaratilishda xatolik`);

					this.resetFields();
				});
		},

		/*
		 *
		 * */
		resetFields() {
			this.depositPeriod.id = null;
			this.depositPeriod.month = "";
			this.depositPeriod.percent = "";
		},

		/*
		*
		* */
		addRow() {
			this.depositPeriod.calculation_info.push({
				month: '',
				percent: ''
			})
		},
		/*
		 *
		 * */
		deleteRow(index) {
			if (!confirm(`O'chirishni xoxlaysizmi ?`)) {
				return void 0
			}

			this.depositPeriod.calculation_info.splice(index, 1)
		},
	}
};
</script>

<style></style>
