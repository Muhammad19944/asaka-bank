<template>
	<div class="form-wrap-body">
		<v-row>
			<template v-if="$store.state.CREATED_CREDIT_ID === null">
				<v-col md="12">
					<v-alert type="error"> {{ $t('Dashboard.credits.credit_error_alert') }}</v-alert>
				</v-col>
			</template>

			<v-col md="12">
				<div class="admin-tabs mb-1">
					<v-tabs height="56" v-model="tab1" hide-slider class="mb-0 mb-5">
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t('Dashboard.terms_and_condition') }} <span class="font-700 text-small">(UZ)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t('Dashboard.terms_and_condition') }} <span class="font-700 text-small">(RU)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t('Dashboard.terms_and_condition') }} <span class="font-700 text-small">(EN)</span>
							</h5>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab1">
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="creditPropModel.condition_uz"
									:disabled="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>

						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="creditPropModel.condition_ru"
									:disabled="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="creditPropModel.condition_en"
									:disabled="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>
					</v-tabs-items>
				</div>
			</v-col>

<!--			<v-col md="12">-->
<!--				<div class="admin-tabs mb-1">-->
<!--					<v-tabs height="56" v-model="tab2" hide-slider class="mb-0 mb-5">-->
<!--						<v-tab class="transition-ease-in-out">-->
<!--							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">-->
<!--								{{ $t('Dashboard.credits.payment_methods') }} <span class="font-700 text-small">(UZ)</span>-->
<!--							</h5>-->
<!--						</v-tab>-->
<!--						<v-tab class="transition-ease-in-out">-->
<!--							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">-->
<!--								{{ $t('Dashboard.credits.payment_methods') }} <span class="font-700 text-small">(RU)</span>-->
<!--							</h5>-->
<!--						</v-tab>-->
<!--						<v-tab class="transition-ease-in-out">-->
<!--							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">-->
<!--								{{ $t('Dashboard.credits.payment_methods') }} <span class="font-700 text-small">(EN)</span>-->
<!--							</h5>-->
<!--						</v-tab>-->
<!--					</v-tabs>-->

<!--					<v-tabs-items v-model="tab2">-->
<!--						<v-tab-item>-->
<!--							<div class="app-editor">-->
<!--								<quill-editor-->
<!--									v-model="creditPropModel.redemption_type_uz"-->
<!--									:disabled="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"-->
<!--								>-->
<!--								</quill-editor>-->
<!--							</div>-->
<!--						</v-tab-item>-->

<!--						<v-tab-item>-->
<!--							<div class="app-editor">-->
<!--								<quill-editor-->
<!--									v-model="creditPropModel.redemption_type_ru"-->
<!--									:disabled="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"-->
<!--								>-->
<!--								</quill-editor>-->
<!--							</div>-->
<!--						</v-tab-item>-->
<!--						<v-tab-item>-->
<!--							<div class="app-editor">-->
<!--								<quill-editor-->
<!--									v-model="creditPropModel.redemption_type_en"-->
<!--									:disabled="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"-->
<!--								>-->
<!--								</quill-editor>-->
<!--							</div>-->
<!--						</v-tab-item>-->
<!--					</v-tabs-items>-->
<!--				</div>-->
<!--			</v-col>-->

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.credits.interest_rate') }}</h5>

					<v-text-field
						v-model="creditPropModel.interest_rate"
						:readonly="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>
		</v-row>

		<!-- (CREATED_CREDIT_ID) => will shown a button -->
		<template v-if="$store.state.CREATED_CREDIT_ID">
			<go-back-button />
			<!-- (TYPE !== 'Read') => will hide buttons -->
			<template v-if="TYPE !== 'Read'">
				<template v-if="!isPropCreated">
					<send-button @emit:up="send" :text="$t('Dashboard.add_new')">
						<plus-circle-icon size="1.3x" class="text-white"></plus-circle-icon>
					</send-button>
				</template>

				<template v-else>
					<send-button @emit:up="update" :text="$t('Dashboard.update')" />
				</template>
			</template>
		</template>
	</div>
</template>

<script>
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import { ChevronDownIcon } from "vue-feather-icons";

export default {
	name: "CreditProps",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		SendButton,
		GoBackButton,
		ChevronDownIcon
	},
	data() {
		return {
			tab1: null,
			tab2: null,
			creditPropModel: {
				interest_rate: "",
				condition_uz: "",
				condition_ru: "",
				condition_en: "",
				redemption_type_uz: "",
				redemption_type_ru: "",
				redemption_type_en: "",
				credit: null
			},
			isPropCreated: false
		};
	},
	mounted() {
		if (this.$route.params.id) {
			this.getOneProp();
		}
	},
	methods: {
		/*
		 *
		 * */
		send() {
			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/property/`, this.creditPropModel)
				.then(({ data }) => {
					this.$toast.success(`Yaratildi`);

					this.creditPropModel = data
					this.isPropCreated = true
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
					`/${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/property/${this.creditPropModel.id}/`,
					this.creditPropModel
				)
				.then((res) => {
					this.$toast.success(`Yangilandi`);

					this.getOneProp();
				})
				.catch((err) => {
					this.$toast.error(`Yaratishda xatolik`);
				});
		},

		/*
		 *
		 * */
		getOneProp() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/property/`).then(({ data }) => {
				this.creditPropModel = data.results.length > 0 ? data.results[0] : {};

				data.results.length > 0 ? (this.isPropCreated = true) : this.isPropCreated;
			});
		}
	}
};
</script>

<style></style>
