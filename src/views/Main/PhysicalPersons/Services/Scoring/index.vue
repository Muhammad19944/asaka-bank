<template>
	<div class="scoring-view">
		<v-container>
			<div class="scoring-content py-5">
				<div class="scoring-items">
					<h3 class="font-600 dark-text">
						1. <I18nVue t="Scoring.quest1.title" />
					</h3>

					<v-radio-group
						v-model="$v.scoringModel.age.$model"
						:error="$v.scoringModel.age.$error"
						row
					>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest1.answer1')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest1.answer1" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest1.answer2')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest1.answer2" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" v:value="$t('Scoring.quest1.answer3')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest1.answer3" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest1.answer4')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest1.answer4" />
									</h4>
								</template>
							</v-radio>
						</v-col>
					</v-radio-group>
					<v-divider style="border-color: rgba(var(--border-color), 1)" />
				</div>
			</div>

			<div class="scoring-content py-5">
				<div class="scoring-items">
					<h3 class="font-600 dark-text">
						2. <I18nVue t="Scoring.quest3.title" />
					</h3>
					<v-radio-group
						v-model="$v.scoringModel.last_work_continuation.$model"
						:error="$v.scoringModel.last_work_continuation.$error"
						row
					>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest3.answer1')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest3.answer1" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest3.answer2')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest3.answer2" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest3.answer3')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest3.answer3" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest3.answer4')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest3.answer4" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest3.answer5')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest3.answer5" />
									</h4>
								</template>
							</v-radio>
						</v-col>
					</v-radio-group>

					<v-divider style="border-color: rgba(var(--border-color), 1)" />
				</div>
			</div>

			<div class="scoring-content py-5">
				<div class="scoring-items">
					<h3 class="font-600 dark-text">
						3. <I18nVue t="Scoring.quest4.title" />
					</h3>
					<v-radio-group
						v-model="$v.scoringModel.salary.$model"
						:error="$v.scoringModel.salary.$error"
						row
					>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest4.answer1')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest4.answer1" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest4.answer2')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest4.answer2" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest4.answer3')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest4.answer3" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest4.answer4')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest4.answer4" />
									</h4>
								</template>
							</v-radio>
						</v-col>
					</v-radio-group>

					<v-divider style="border-color: rgba(var(--border-color), 1)" />
				</div>
			</div>

			<div class="scoring-content py-5">
				<div class="scoring-items">
					<h3 class="font-600 dark-text">
						4. <I18nVue t="Scoring.quest5.title" />
					</h3>
					<v-radio-group
						v-model="$v.scoringModel.redemption_monthly_payment.$model"
						:error="$v.scoringModel.redemption_monthly_payment.$error"
						row
					>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest5.answer1')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest5.answer1" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest5.answer2')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest5.answer2" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest5.answer3')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest5.answer3" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest5.answer4')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest5.answer4" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest5.answer5')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest5.answer5" />
									</h4>
								</template>
							</v-radio>
						</v-col>
					</v-radio-group>

					<v-divider style="border-color: rgba(var(--border-color), 1)" />
				</div>
			</div>

			<div class="scoring-content py-5">
				<div class="scoring-items">
					<h3 class="font-600 dark-text">
						5. <I18nVue t="Scoring.quest6.title" />
					</h3>
					<v-radio-group
						v-model="$v.scoringModel.work_organization.$model"
						:error="$v.scoringModel.work_organization.$error"
						row
					>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest6.answer1')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest6.answer1" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest6.answer2')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest6.answer2" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest6.answer3')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest6.answer3" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest6.answer4')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest6.answer4" />
									</h4>
								</template>
							</v-radio>
						</v-col>
					</v-radio-group>

					<v-divider style="border-color: rgba(var(--border-color), 1)" />
				</div>
			</div>

			<div class="scoring-content py-5">
				<div class="scoring-items">
					<h3 class="font-600 dark-text">
						6. <I18nVue t="Scoring.quest7.title" />
					</h3>
					<v-radio-group
						v-model="$v.scoringModel.debtor_money_paper.$model"
						:error="$v.scoringModel.debtor_money_paper.$error"
						row
					>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest7.answer1')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest7.answer1" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest7.answer2')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest7.answer2" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest7.answer3')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest7.answer3" />
									</h4>
								</template>
							</v-radio>
						</v-col>
					</v-radio-group>

					<v-divider style="border-color: rgba(var(--border-color), 1)" />
				</div>
			</div>

			<div class="scoring-content py-5">
				<div class="scoring-items">
					<h3 class="font-600 dark-text">
						7. <I18nVue t="Scoring.quest8.title" />
					</h3>
					<v-radio-group
						v-model="$v.scoringModel.real_estate.$model"
						:error="$v.scoringModel.real_estate.$error"
						row>

						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest8.answer1')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest8.answer1" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest8.answer2')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest8.answer2" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="4">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest8.answer3')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest8.answer3" />
									</h4>
								</template>
							</v-radio>
						</v-col>
					</v-radio-group>

					<v-divider style="border-color: rgba(var(--border-color), 1)" />
				</div>
			</div>

			<div class="scoring-content py-5">
				<div class="scoring-items">
					<h3 class="font-600 dark-text">
						8. <I18nVue t="Scoring.quest9.title" />
					</h3>
					<v-radio-group
						v-model="$v.scoringModel.additional_real_estate.$model"
						:error="$v.scoringModel.additional_real_estate.$error"
						row
					>
						<v-col md="12">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest9.answer1')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest9.answer1" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="12">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest9.answer2')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest9.answer2" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="12">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest9.answer3')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest9.answer3" />
									</h4>
								</template>
							</v-radio>
						</v-col>
					</v-radio-group>
					<v-divider style="border-color: rgba(var(--border-color), 1)" />
				</div>
			</div>

			<div class="scoring-content py-5">
				<div class="scoring-items">
					<h3 class="font-600 dark-text">
						9. <I18nVue t="Scoring.quest10.title" />
					</h3>
					<v-radio-group
						v-model="$v.scoringModel.deposit_in_bank.$model"
						:error="$v.scoringModel.deposit_in_bank.$error"
						row
					>
						<v-col md="12">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest10.answer1')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest10.answer1" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="12">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest10.answer2')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest10.answer2" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="12">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest10.answer3')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest10.answer3" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="12">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest10.answer4')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest10.answer4" />
									</h4>
								</template>
							</v-radio>
						</v-col>
					</v-radio-group>
					<v-divider style="border-color: rgba(var(--border-color), 1)" />
				</div>
			</div>

			<div class="scoring-content py-5">
				<div class="scoring-items">
					<h3 class="font-600 dark-text">
						10. <I18nVue t="Scoring.quest11.title" />
					</h3>
					<v-radio-group
						v-model="$v.scoringModel.credit_history.$model"
						:error="$v.scoringModel.credit_history.$error"
						row
					>
						<v-col md="12">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest11.answer1')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest11.answer1" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="12">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest11.answer2')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest11.answer2" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="12">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest11.answer3')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest11.answer3" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="12">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest11.answer4')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest11.answer4" />
									</h4>
								</template>
							</v-radio>
						</v-col>
						<v-col md="12">
							<v-radio color="danger" class="ma-0 pr-4" :value="$t('Scoring.quest11.answer5')">
								<template v-slot:label>
									<h4 class="font-600 dark-text pl-2">
										<I18nVue t="Scoring.quest11.answer5" />
									</h4>
								</template>
							</v-radio>
						</v-col>
					</v-radio-group>
					<v-divider style="border-color: rgba(var(--border-color), 1)" />
				</div>
			</div>

			<v-btn
				@click="send"
				depressed
				color="danger"
				rounded
				min-width="192"
				min-height="50"
				class="mt-15"
			>
				<I18nVue t="LastCorrections.send" classes="text-white font-700" />
			</v-btn>
		</v-container>
	</div>
</template>

<script>
import AppBreadCrumb from "@/components/AppBreadCrumb";
import { Share2Icon, PrinterIcon, FacebookIcon, TwitterIcon, ChevronDownIcon } from "vue-feather-icons";
import I18nVue from "@/I18nVue";
import { required } from "vuelidate/lib/validators";

export default {
	name: "index",
	components: {
		I18nVue,
		AppBreadCrumb,
		Share2Icon,
		PrinterIcon,
		FacebookIcon,
		TwitterIcon,
		ChevronDownIcon
	},
	data() {
		return {
			scoringModel: {
				age: "",
				last_work_continuation: "",
				salary: "",
				redemption_monthly_payment: "",
				work_organization: "",
				debtor_money_paper: "",
				real_estate: "",
				additional_real_estate: "",
				deposit_in_bank: "",
				credit_history: "",
			}
		};
	},
	validations: {
		scoringModel: {
			age: { required },
			last_work_continuation: { required },
			salary: { required },
			redemption_monthly_payment: { required },
			work_organization: { required },
			debtor_money_paper: { required },
			real_estate: { required },
			additional_real_estate: { required },
			deposit_in_bank: { required },
			credit_history: { required }
		}
	},
	methods: {
		send() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			}

			this.$http.post('/scoring/create/', this.scoringModel)
				.then(({ data }) => {
					this.$toast.success(this.$t('application_send'));

					for (let key in this.scoringModel) {
						this.scoringModel[key] = ""
					}

					this.$nextTick(() => { this.$v.$reset() })
				})
		}
	}
};
</script>

<style></style>
