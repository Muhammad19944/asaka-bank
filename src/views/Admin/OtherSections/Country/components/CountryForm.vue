<template>
	<div class="country-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6 d-flex flex-column m-h-100">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === "Create" ? $t("Dashboard.add_new") : TYPE === "Update" ? $t("Dashboard.update") : $t("Dashboard.read") }}
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>

				<div class="flex-1">
					<v-row>
						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.country.name") }} (UZ)</h5>

								<v-text-field
									v-model="$v.countryModel.name_uz.$model"
									:error="$v.countryModel.name_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.country.name") }} (RU)</h5>

								<v-text-field
									v-model="$v.countryModel.name_ru.$model"
									:error="$v.countryModel.name_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.country.name") }} (EN)</h5>

								<v-text-field
									v-model="$v.countryModel.name_en.$model"
									:error="$v.countryModel.name_en.$error"
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
						<send-button @emit:up="send" :text="$t('Dashboard.create')" />
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
import AppCard from "../../../BaseComponents/AppCard";
import SendButton from "../../../BaseComponents/SendButton";
import GoBackButton from "../../../BaseComponents/GoBackButton";
import { required } from "vuelidate/lib/validators";

export default {
	name: "CountryForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppCard,
		SendButton,
		GoBackButton
	},
	data() {
		return {
			countryModel: {
				name_uz: "",
				name_ru: "",
				name_en: ""
			}
		};
	},
	validations: {
		countryModel: {
			name_uz: { required },
			name_ru: { required },
			name_en: { required }
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

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/country/`, this.countryModel)
				.then((res) => {
					this.$toast.success(`Yaratildi`);

					this.resetFields();

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionCountryList" });
					}, 1500);
				})
				.catch((err) => {
					this.$toast.error(`Yaratishda xatolik`);

					this.resetFields();
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

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/country/${this.$route.params.id}/`, this.countryModel)
				.then((res) => {
					this.$toast.success(`Yangilandi`);

					this.resetFields();

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionCountryList" });
					}, 1500);
				})
				.catch((err) => {
					this.$toast.error(`Yangilashda xatolik`);

					this.resetFields();
				});
		},

		/*
		 *
		 * */
		getOne() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/country/${this.$route.params.id}/`).then(({ data }) => {
				this.countryModel = data;
			});
		},

		/*
		 *
		 * */
		resetFields() {
			this.countryModel.name_uz = this.countryModel.name_ru = this.countryModel.name_en = "";
		}
	}
};
</script>

<style></style>
