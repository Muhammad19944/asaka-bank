<template>
	<div class="documents-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6 d-flex flex-column m-h-100">
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
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.document.title") }} (UZ)</h5>

								<v-text-field
									v-model="$v.documentsModel.title_uz.$model"
									:error="$v.documentsModel.title_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.document.title") }} (RU)</h5>

								<v-text-field
									v-model="$v.documentsModel.title_ru.$model"
									:error="$v.documentsModel.title_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.document.title") }} (EN)</h5>

								<v-text-field
									v-model="$v.documentsModel.title_en.$model"
									:error="$v.documentsModel.title_en.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.branch.type") }}</h5>

								<template v-if="$i18n.locale === 'uz'">
									<v-select
										v-model="documentsModel.type"
										:items="$store.state.DOCUMENT_TYPES"
										item-text="title_uz"
										item-value="value"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
									>
										<template v-slot:append>
											<chevron-down-icon
												size="1.35x"
												class="text-secondary-dark"
											/>
										</template>
									</v-select>
								</template>

								<template v-if="$i18n.locale === 'ru'">
									<v-select
										v-model="documentsModel.type"
										:items="$store.state.DOCUMENT_TYPES"
										item-text="title_ru"
										item-value="value"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
									>
										<template v-slot:append>
											<chevron-down-icon
												size="1.35x"
												class="text-secondary-dark"
											/>
										</template>
									</v-select>
								</template>

								<template v-if="$i18n.locale === 'en'">
									<v-select
										v-model="documentsModel.type"
										:items="$store.state.DOCUMENT_TYPES"
										item-text="title_en"
										item-value="value"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
									>
										<template v-slot:append>
											<chevron-down-icon
												size="1.35x"
												class="text-secondary-dark"
											/>
										</template>
									</v-select>
								</template>
							</div>
						</v-col>

						<v-col md="4">
							<file-upload
								@emit:up="upload"
								:value="documentFile"
								:disabled="TYPE === 'Read'"
								:label="$t('Dashboard.upload_file') + ' ' + '(UZ)'"
							/>
						</v-col>

						<v-col md="4">
							<file-upload
								@emit:up="uploadRU"
								:value="documentFileRU"
								:disabled="TYPE === 'Read'"
								:label="$t('Dashboard.upload_file') + ' ' + '(RU)'"
							/>
						</v-col>

						<v-col md="4">
							<file-upload
								@emit:up="uploadEN"
								:value="documentFileEN"
								:disabled="TYPE === 'Read'"
								:label="$t('Dashboard.upload_file') + ' ' + '(EN)'"
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
import AppCard from "../../../../BaseComponents/AppCard";
import FileUpload from "../../../../BaseComponents/FileUpload";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import { required } from "vuelidate/lib/validators";
import { ChevronDownIcon } from 'vue-feather-icons'

export default {
	name: "DocumentsForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppCard,
		FileUpload,
		SendButton,
		GoBackButton,
		ChevronDownIcon
	},
	data() {
		return {
			documentFile: null,
			documentFileRU: null,
			documentFileEN: null,
			documentsModel: {
				title_uz: "",
				title_ru: "",
				title_en: "",
				file: null,
				file_en: null,
				file_ru: null,
				type: ""
			}
		};
	},
	validations: {
		documentsModel: {
			title_uz: { required },
			title_ru: { required },
			title_en: { required }
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

			this.documentsModel.file = this.documentFile.id
			this.documentsModel.file_ru = this.documentFileRU.id
			this.documentsModel.file_en = this.documentFileEN.id

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/bank/documents/`, this.documentsModel)
				.then((res) => {
					this.$toast.success(this.$t("Dashboard.c"));

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionDocumentsList" });
					}, 1500);
				})
				.catch((err) => {
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

			this.documentsModel.file = this.documentFile.id
			this.documentsModel.file_ru = this.documentFileRU.id
			this.documentsModel.file_en = this.documentFileEN.id

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/bank/documents/${this.$route.params.id}/`, this.documentsModel)
				.then((res) => {
					this.$toast.success(this.$t("Dashboard.c"));

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionDocumentsList" });
					}, 1500);
				})
				.catch((err) => {
					this.$toast.error(this.$t("Dashboard.e"));
				});
		},

		/*
		 *
		 * */
		getOne() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/bank/documents/${this.$route.params.id}/`).then(({ data }) => {
				this.documentsModel = data;

				this.documentFile = this.documentsModel.file
				this.documentFileRU = this.documentsModel.file_ru
				this.documentFileEN = this.documentsModel.file_en
			});
		},

		/*
		 *
		 * */
		upload(file) {
			this.documentFile = file;
		},

		/*
		*
		* */
		uploadRU(file) {
			this.documentFileRU = file;
		},

		/*
		*
		* */
		uploadEN(file) {
			this.documentFileEN = file;
		}
	}
};
</script>

<style></style>
