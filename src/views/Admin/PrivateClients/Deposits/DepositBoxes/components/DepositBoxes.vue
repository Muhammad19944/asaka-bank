<template>
	<div class="deposit-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6 d-flex flex-column m-h-100">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === "Create" ? $t("Dashboard.add_new") : TYPE === "Update" ? $t("Dashboard.update") : $t("Dashboard.read")
						}}
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>

				<div class="flex-1">
					<v-row>
						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit_box.name") }} (UZ)</h5>

								<v-text-field
									v-model="$v.depositModel.name_uz.$model"
									:error="$v.depositModel.name_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit_box.name") }} (RU)</h5>

								<v-text-field
									v-model="$v.depositModel.name_ru.$model"
									:error="$v.depositModel.name_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit_box.name") }} (EN)</h5>

								<v-text-field
									v-model="$v.depositModel.name_en.$model"
									:error="$v.depositModel.name_en.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit_box.size") }}</h5>

								<v-text-field
									v-model="$v.depositModel.box_size.$model"
									:error="$v.depositModel.box_size.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit_box.rent_price") }}</h5>

								<v-text-field
									v-model="$v.depositModel.rent_price.$model"
									:error="$v.depositModel.rent_price.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit_box.period") }} (UZ)</h5>

								<v-text-field
									v-model="$v.depositModel.period.$model"
									:error="$v.depositModel.period.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

            <v-col md="4">
              <div class="app-form-group app-form-group__small no-shadow mb-2">
                <h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit_box.period") }} (RU)</h5>

                <v-text-field
                    v-model="$v.depositModel.period_ru.$model"
                    :error="$v.depositModel.period_ru.$error"
                    :readonly="TYPE === 'Read'"
                    outlined
                    hide-details
                >
                </v-text-field>
              </div>
            </v-col>

            <v-col md="4">
              <div class="app-form-group app-form-group__small no-shadow mb-2">
                <h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit_box.period") }} (EN)</h5>

                <v-text-field
                    v-model="$v.depositModel.period_en.$model"
                    :error="$v.depositModel.period_en.$error"
                    :readonly="TYPE === 'Read'"
                    outlined
                    hide-details
                >
                </v-text-field>
              </div>
            </v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit_box.lost_key_fee") }}</h5>

								<v-text-field
									v-model="$v.depositModel.lost_key_fee.$model"
									:error="$v.depositModel.lost_key_fee.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>
					</v-row>
				</div>

				<div class="mt-8">
					<go-back-button />
					<template v-if="TYPE === 'Create'">
						<send-button @emit:up="send" :text="$t('Dashboard.add_new')" />
					</template>

					<template v-else-if="TYPE === 'Update'">
						<send-button @emit:up="update" :text="$t('Dashboard.update')" />
					</template>
				</div>
			</div>
		</app-card>
	</div>
</template>

<script>
import AppCard from "../../../../BaseComponents/AppCard";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import { required } from "vuelidate/lib/validators";
import { ChevronDownIcon } from "vue-feather-icons";

export default {
	name: "DepositBoxes",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppCard,
		SendButton,
		GoBackButton,
		ChevronDownIcon
	},
	data() {
		return {
			depositList: [],
			depositModel: {
				name_uz: "",
				name_ru: "",
				name_en: "",
				box_size: "",
				rent_price: "",
				period: "",
				period_ru: "",
				period_en: "",
				lost_key_fee: null,
			}
		};
	},
	validations: {
		depositModel: {
			name_uz: { required },
			name_ru: { required },
			name_en: { required },
			box_size: { required },
			rent_price: { required },
			period: { required },
			period_ru: { required },
			period_en: { required },
			lost_key_fee: { required }
		}
	},
	watch: {
		"depositModel.rent_price"(val) {
			/*
			 * Форматируем числа
			 * 100, 1 000, 10 000, 100 000, ...
			 * */
			this.depositModel.rent_price = this.$options.filters.filterNumberFormatThousands(val);
		},
		"depositModel.lost_key_fee"(val) {
			/*
			 * Форматируем числа
			 * 100, 1 000, 10 000, 100 000, ...
			 * */
			this.depositModel.lost_key_fee = this.$options.filters.filterNumberFormatThousands(val);
		}
	},
	mounted() {
		if (this.$route.params.id) {
			this.getOne();
		}
	},
	methods: {
		/*
		 *
		 * */
		send() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(`Field to'ldirilishi shart`);

				return;
			}

			this.depositModel.lost_key_fee = this.depositModel.lost_key_fee.replace(/\D/g, '')

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/depository_box_type/`, this.depositModel)
				.then((res) => {
					this.$toast.success(`Yaratildi`);

					setTimeout(() => {
						this.$router.push({ name: "DashboardDepositsBoxesList" });
					}, 1500);
				})
				.catch((err) => {
					this.$toast.error(`Yaratishda xatolik`);
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

      this.depositModel.lost_key_fee = this.depositModel.lost_key_fee.replace(/\D/g, '')

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/depository_box_type/${this.$route.params.id}/`, this.depositModel)
				.then((res) => {
					this.$toast.success(`Yangilandi`);

					setTimeout(() => {
						this.$router.push({ name: "DashboardDepositsBoxesList" });
					}, 1500);
				})
				.catch((err) => {
					this.$toast.error(`Yangilashda xatolik`);
				});
		},
		/*
		 *
		 * */
		getOne() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/depository_box_type/${this.$route.params.id}/`).then(({ data }) => {
				this.depositModel = data;
			});
		}
	}
};
</script>

<style></style>
