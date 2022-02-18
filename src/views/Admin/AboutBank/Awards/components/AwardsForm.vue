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
									v-model="$v.awardsModel.title_uz.$model"
									:error="$v.awardsModel.title_uz.$error"
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
									v-model="$v.awardsModel.title_ru.$model"
									:error="$v.awardsModel.title_ru.$error"
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
									v-model="$v.awardsModel.title_en.$model"
									:error="$v.awardsModel.title_en.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.sidebar.about_bank.awards.description") }} (UZ)</h5>

								<v-text-field
									v-model="$v.awardsModel.description_uz.$model"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.sidebar.about_bank.awards.description") }} (RU)</h5>

								<v-text-field
									v-model="$v.awardsModel.description_ru.$model"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.sidebar.about_bank.awards.description") }} (EN)</h5>

								<v-text-field
									v-model="$v.awardsModel.description_en.$model"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<file-upload
								ref="propFile"
								@emit:up="upload"
								:value="documentFile"
								:disabled="TYPE === 'Read'"
								:label="$t('Dashboard.upload_file')"
							/>
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
import FileUpload from "../../../BaseComponents/FileUpload";
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
		FileUpload,
		GoBackButton,
		ChevronDownIcon
	},
	data() {
		return {
			documentFile: null,
			awardsModel: {
				title_uz: "",
				title_ru: "",
				title_en: "",
				description_uz: "",
				description_ru: "",
				description_en: "",
			}
		};
	},
	validations: {
		awardsModel: {
			title_uz: { required },
			title_ru: { required },
			title_en: { required },
			description_uz: { },
			description_ru: { },
			description_en: { },
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

			this.awardsModel.file = this.documentFile.id

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/bank/awards/`, this.awardsModel)
				.then(() => {
					this.$toast.success(this.$t("Dashboard.c"));

					setTimeout(() => {
						this.$router.push({ name: "DashboardAwardsList" });
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

			this.awardsModel.file = this.documentFile.id

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/bank/awards/${this.$route.params.id}/`, this.awardsModel)
				.then(() => {
					this.$toast.success(this.$t("Dashboard.c"));

					setTimeout(() => {
						this.$router.push({ name: "DashboardAwardsList" });
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
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/bank/awards/${this.$route.params.id}/`).then(({ data }) => {
				this.awardsModel = data;

				this.documentFile = this.awardsModel.file
			});
		},

		/*
		 *
		 * */
		upload(file) {
			this.documentFile = file;
		},
	}
};
</script>

<style></style>
