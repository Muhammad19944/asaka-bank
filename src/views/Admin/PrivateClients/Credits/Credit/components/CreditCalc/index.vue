<template>
	<div class="form-wrap-body">
		<v-row>
			<template v-if="$store.state.CREATED_CREDIT_ID === null">
				<v-col md="12">
					<v-alert type="error"> Birinchi kredit yaratilishi shart</v-alert>
				</v-col>
			</template>
		</v-row>

		<credit-calc-type
			v-model="calculatorModel.type"
			:TYPE="TYPE"
			class="mb-8"
		/>

		<!-- Car loan template -->
		<template v-if="calculatorModel.type === 'car_loan'">
			<period v-model="calculatorModel.period" :TYPE="TYPE" class="mb-8" />

			<initial-fee v-model="calculatorModel.initial_fee" :TYPE="TYPE" class="mb-8" />

			<attach-interest
				v-model="calculatorModel.for_car"
				:initial-payment-list="calculatorModel.initial_fee"
				:period-list="calculatorModel.period"
				:TYPE="TYPE"
				class="mb-8"
			/>
		</template>
		<!-- End car loan template -->

		<!-- Microloan -->
		<template v-if="calculatorModel.type === 'microloans'" >
			<period v-model="calculatorModel.period" :TYPE="TYPE" class="mb-8" />


			<attach-interest-for-microloan
				v-model="calculatorModel.for_car"
				:period-list="calculatorModel.period"
				:TYPE="TYPE"
				class="mb-8"
			/>
		</template>

		<!-- End Microloan -->

		<!-- Mortgage template -->
		<template v-else-if="calculatorModel.type === 'mortgage'">
			<real-state-market v-model="calculatorModel.loan_type" :TYPE="TYPE" class="mb-8" />

			<initial-fee v-model="calculatorModel.initial_fee" :TYPE="TYPE" class="mb-8" />
		</template>
		<!-- End mortgage template -->

		<!-- Mortgage market template -->
		<template v-else-if="calculatorModel.type === 'mortgage_market'">
			<zone v-model="calculatorModel.zone" :TYPE="TYPE" class="mb-8" />

			<initial-fee v-model="calculatorModel.initial_fee" :TYPE="TYPE" class="mb-8" />
		</template>
		<!-- End mortgage market template -->

		<!-- Other templates -->
		<template v-else>
			<general-percent v-model="calculatorModel.general_percent" :TYPE="TYPE" class="mb-8" />

			<period v-model="calculatorModel.period" :TYPE="TYPE" class="mb-8" />
		</template>
		<!-- End Other templates -->

		<amount v-model="calculatorModel.amount" :TYPE="TYPE" class="mb-8" />

		<grace-period v-model="calculatorModel.grace_period" :TYPE="TYPE" class="mb-8" />

		<template v-if="TYPE !== 'Create'">
			<v-row>
				<v-col md="12" class="mt-2">
					<go-back-button />
					<!-- Check if isCreditCalcCreated is empty -->
					<template v-if="!isCreditCalcCreated">
						<send-button @emit:up="send" :text="$t('Dashboard.add_new')" />
					</template>
					<template v-else>
						<template v-if="TYPE !== 'Read'">
							<send-button @emit:up="update" :text="$t('Dashboard.update')" class="mr-5" />

							<send-button @emit:up="deleteCalc" :text="$t('Dashboard.delete')" color="danger">
								<trash2-icon size="1.3x" class="text-white"></trash2-icon>
							</send-button>
						</template>
					</template>
				</v-col>
			</v-row>
		</template>

		<template v-else>
			<v-row>
				<v-col md="12" class="mt-5">
					<go-back-button />
					<send-button @emit:up="send" :text="$t('Dashboard.add_new')" />
				</v-col>
			</v-row>
		</template>
	</div>
</template>

<script>
	import AttachInterestForMicroloan
		from "./AttachInterestForMicroloan"
import AttachInterest from "./AttachInterest";
import RealStateMarket from "./RealStateMarket";
import Zone from "./Zone";
import GeneralPercent from "./GeneralPercent";
import InitialFee from "./InitialFee";
import Period from "./Period";
import Amount from "./Amount";
import GracePeriod from "./GracePeriod";
import CreditCalcType from "./CreditCalcType";
import SendButton from "../../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../../BaseComponents/GoBackButton";
import { Trash2Icon } from "vue-feather-icons";

export default {
	name: "index",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AttachInterestForMicroloan,
		AttachInterest,
		RealStateMarket,
		Zone,
		GeneralPercent,
		InitialFee,
		Period,
		Amount,
		GracePeriod,
		CreditCalcType,
		SendButton,
		GoBackButton,
		Trash2Icon
	},
	data() {
		return {
			calculatorModel: {
				type: "",
				general_percent: "",
				loan_type: [],
				zone: [],
				initial_fee: [],
				period: [],
				amount: {
					min: null,
					max: null
				},
				grace_period: [],
				for_car: []
			},
			isCreditCalcCreated: false,
			periodID: {}
		};
	},
	watch: {
		// 'calculatorModel.type'() {
		// 	this.calculatorModel.general_percent = ""
		// 	this.calculatorModel.loan_type = [{}]
		// 	this.calculatorModel.zone = [{}]
		// 	this.calculatorModel.initial_fee = [{}]
		// 	this.calculatorModel.period = [{}]
		// 	this.calculatorModel.amount.min = null
		// 	this.calculatorModel.amount.max = null
		// 	this.calculatorModel.grace_period = [{}]
		// }
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
		send() {
			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/period/`, this.calculatorModel)
				.then((res) => {
					this.$toast.success(`Kredit uchun kalkulyator yaratildi`);

					this.getPeriod();
				})
				.catch((err) => {
					this.$toast.error(`Yaratishda xatolik`);
				});
		},

		/*
		 *
		 * */
		update() {
			this.$http
				.put(
					`/${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/period/${this.periodID}`,
					this.calculatorModel
				)
				.then((res) => {
					this.$toast.success(`Kredit kalkulyator yangilandi`);

					this.getPeriod();
				})
				.catch((err) => {
					this.$toast.error(`Yangilashda xatolik`);
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
				.delete(`/${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/period/${this.periodID}`)
				.then((res) => {
					this.$toast.success(`Kredit kalkulyator o'chirildi`);

					this.calculatorModel = {
						...this.calculatorModel,
						general_percent: "",
						loan_type: [{}],
						zone: [{}],
						initial_fee: [{}],
						period: [{}],
						amount: {
							min: null,
							max: null
						},
						grace_period: [{}],
						for_car: []
					};

					this.isCreditCalcCreated = false;
				})
				.catch((err) => {
					this.$toast.error(`O'chirishda xatolik`);
				});
		},

		/*
		 *
		 * */
		getPeriod() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/period/`).then(({ data }) => {
				if (data.results.length) {
					this.periodID = data.results[0].id;
					this.getOnePeriod(this.periodID);

					this.isCreditCalcCreated = true;
				}
			});
		},

		/*
		 *
		 * */
		getOnePeriod(id) {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/period/${id}`).then(({ data }) => {
				this.calculatorModel = data;
			});
		}
	}
};
</script>

<style></style>
