<template>
	<div class="news-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6">
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
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.shareholder.title") }} (UZ)</h5>

								<v-text-field
									v-model="$v.careersModel.job_title_uz.$model"
									:error="$v.careersModel.job_title_uz.$error"
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
									v-model="$v.careersModel.job_title_ru.$model"
									:error="$v.careersModel.job_title_ru.$error"
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
									v-model="$v.careersModel.job_title_en.$model"
									:error="$v.careersModel.job_title_en.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="12">
							<div class="admin-tabs">
								<v-tabs
									height="56"
									v-model="tab1"
									hide-slider
									class="mb-0 mb-5"
								>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											{{ $t("Dashboard.sidebar.about_bank.careers.description") }}
											<span class="font-700 text-small">(UZ)</span></h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											{{ $t("Dashboard.sidebar.about_bank.careers.description") }}
											<span class="font-700 text-small">(RU)</span></h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											{{ $t("Dashboard.sidebar.about_bank.careers.description") }}
											<span class="font-700 text-small">(EN)</span></h5>
									</v-tab>
								</v-tabs>

								<v-tabs-items v-model="tab1">
									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="careersModel.job_description_uz"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>

									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="careersModel.job_description_ru"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>
									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="careersModel.job_description_en"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>
								</v-tabs-items>
							</div>
						</v-col>

						<v-col md="12">
							<div class="admin-tabs">
								<v-tabs
									height="56"
									v-model="tab2"
									hide-slider
									class="mb-0 mb-5"
								>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											{{ $t("Dashboard.sidebar.about_bank.careers.requirement") }}
											<span class="font-700 text-small">(UZ)</span></h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											{{ $t("Dashboard.sidebar.about_bank.careers.requirement") }}
											<span class="font-700 text-small">(RU)</span></h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											{{ $t("Dashboard.sidebar.about_bank.careers.requirement") }}
											<span class="font-700 text-small">(EN)</span></h5>
									</v-tab>
								</v-tabs>

								<v-tabs-items v-model="tab2">
									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="careersModel.job_requirement_uz"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>

									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="careersModel.job_requirement_ru"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>
									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="careersModel.job_requirement_en"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>
								</v-tabs-items>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.sidebar.about_bank.careers.workplace") }}</h5>

								<v-select
									v-model="filialSelects"
									:items="filialList"
									item-text="name_uz"
									item-value="id"
									multiple
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
									return-object
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
									</template>
								</v-select>
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
			filialList: [],
			filialSelects: [],
			tab1: null,
			tab2: null,
			careersModel: {
				job_title_uz: "",
				job_title_ru: "",
				job_title_en: "",
				job_description_uz: "",
				job_description_ru: "",
				job_description_en: "",
				job_requirement_uz: "",
				job_requirement_ru: "",
				job_requirement_en: "",
				work_places: []
			}
		};
	},
	validations: {
		careersModel: {
			job_title_uz: { required },
			job_title_ru: { required },
			job_title_en: { required },
			job_description_uz: { required },
			job_description_ru: { required },
			job_description_en: { required }
		}
	},
	mounted() {
		if (this.$route.params.id) {
			this.getOne();
		}

		this.getFilialList()
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

			this.filialSelects.map(item => this.careersModel.work_places.push({ id: item.id }))

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/bank/careers/`, this.careersModel)
				.then(() => {
					this.$toast.success("Yaratildi");

					setTimeout(() => {
						this.$router.push({ name: "DashboardCareersList" });
					}, 1500);
				})
				.catch(() => {
					this.$toast.error("Yaratishda xatolik");
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

			this.careersModel.work_places = []

			this.filialSelects.map(item => this.careersModel.work_places.push({ id: item.id }))

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/bank/careers/${this.$route.params.id}/`, this.careersModel)
				.then(() => {
					this.$toast.success("Yangilandi");

					setTimeout(() => {
						this.$router.push({ name: "DashboardCareersList" });
					}, 1500);
				})
				.catch(() => {
					this.$toast.error("Yangilashda xatolik");
				});
		},

		/*
		 *
		 * */
		getOne() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/bank/careers/${this.$route.params.id}/`).then(({ data }) => {
				this.careersModel = data;

				this.filialSelects = data.work_places
			});
		},

		/*
		*
		* */
		getFilialList() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/filial`)
			.then(({ data }) => {
				this.filialList = data.results
			})
		}
	}
};
</script>

<style></style>
