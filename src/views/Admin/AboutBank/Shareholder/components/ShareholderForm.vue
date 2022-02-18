<template>
	<div class="news-form-view">
		<app-card>
			<div class="form-wrap d-flex flex-column h-100 pa-5 px-6">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === "Create" ? $t("Dashboard.add_new") : TYPE === "Update" ? $t("Dashboard.update") : $t("Dashboard.read") }}
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"/>
				</div>

				<div class="flex-1">
					<v-row>
						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.shareholder.title") }} (UZ)</h5>

								<v-text-field
									v-model="$v.shareholderModel.title_uz.$model"
									:error="$v.shareholderModel.title_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.shareholder.title") }} (RU)</h5>

								<v-text-field
									v-model="$v.shareholderModel.title_ru.$model"
									:error="$v.shareholderModel.title_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.shareholder.title") }} (EN)</h5>

								<v-text-field
									v-model="$v.shareholderModel.title_en.$model"
									:error="$v.shareholderModel.title_en.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Address (UZ)</h5>

								<v-text-field
									v-model="$v.shareholderModel.address_uz.$model"
									:error="$v.shareholderModel.address_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Address (RU)</h5>

								<v-text-field
									v-model="$v.shareholderModel.address_ru.$model"
									:error="$v.shareholderModel.address_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Address (EN)</h5>

								<v-text-field
									v-model="$v.shareholderModel.address_en.$model"
									:error="$v.shareholderModel.address_en.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.shareholder.percent") }}</h5>

								<v-text-field
									v-model="$v.shareholderModel.share_percent.$model"
									:error="$v.shareholderModel.share_percent.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.shareholder.link") }}</h5>

								<v-text-field
									v-model="shareholderModel.link"
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
import { ChevronDownIcon } from "vue-feather-icons";
import { required } from "vuelidate/lib/validators";

export default {
	name: "ShareholderForm",
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
			shareholderModel: {
				title_uz: "",
				title_ru: "",
				title_en: "",
				address_uz: "",
				address_ru: "",
				address_en: "",
				share_percent: "",
				link: ""
			}
		};
	},
	validations: {
		shareholderModel: {
			title_uz: { required },
			title_ru: { required },
			title_en: { required },
			address_uz: { required},
			address_ru: { required},
			address_en: { required},
			share_percent: { required }
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
				this.$toast.warning(this.$t("Dashboard.f"));

				return;
			}

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/bank/shareholders/`, this.shareholderModel)
				.then(() => {
					this.$toast.success(this.$t("Dashboard.c"));

					setTimeout(() => {
						this.$router.push({ name: "DashboardShareholderList" });
					}, 1500);
				})
				.catch(() => {
					this.$toast.error(this.$t("Dashboard.e"));
				});
		},

		/*
		 *
		 * */
		update() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(this.$t("Dashboard.f"));

				return;
			}

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/bank/shareholders/${this.$route.params.id}`, this.shareholderModel)
				.then(() => {
					this.$toast.success(this.$t("Dashboard.c"));

					setTimeout(() => {
						this.$router.push({ name: "DashboardShareholderList" });
					}, 1500);
				})
				.catch(() => {
					this.$toast.error(this.$t("Dashboard.e"));
				});
		},

		/*
		 *
		 * */
		getOne() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/bank/shareholders/${this.$route.params.id}`).then(({ data }) => {
				this.shareholderModel = data;
			});
		}
	}
};
</script>
