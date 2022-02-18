<template>
	<div class="documents-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6 d-flex flex-column m-h-100">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === "Create" ? $t("Dashboard.add_new") : TYPE === "Update" ? $t("Dashboard.update") : $t("Dashboard.read") }}
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>



				<div class="app-collapse--advanced mb-10">
					<v-expansion-panels v-model="panel" accordion multiple class="border-all">

						<!-- DOCUMENT YEARS -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								YILLAR
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<documents-optional :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- END DOCUMENT YEARS -->

						<!-- DOCUMENT FILES -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								HUJJATLAR
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<documents-files :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- END DOCUMENT FILES -->


					</v-expansion-panels>
				</div>



			<div>
<!--				<div class="flex-1">-->
<!--					<v-row>-->
<!--						<v-col md="4">-->
<!--							<div class="app-form-group app-form-group__small no-shadow mb-2">-->
<!--								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.document.title") }} (UZ)</h5>-->

<!--								<v-text-field-->
<!--									v-model="$v.documentsModel.title_uz.$model"-->
<!--									:error="$v.documentsModel.title_uz.$error"-->
<!--									:readonly="TYPE === 'Read'"-->
<!--									outlined-->
<!--									hide-details-->
<!--								>-->
<!--								</v-text-field>-->
<!--							</div>-->
<!--						</v-col>-->

<!--						<v-col md="4">-->
<!--							<div class="app-form-group app-form-group__small no-shadow mb-2">-->
<!--								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.document.title") }} (RU)</h5>-->

<!--								<v-text-field-->
<!--									v-model="$v.documentsModel.title_ru.$model"-->
<!--									:error="$v.documentsModel.title_ru.$error"-->
<!--									:readonly="TYPE === 'Read'"-->
<!--									outlined-->
<!--									hide-details-->
<!--								>-->
<!--								</v-text-field>-->
<!--							</div>-->
<!--						</v-col>-->

<!--						<v-col md="4">-->
<!--							<div class="app-form-group app-form-group__small no-shadow mb-2">-->
<!--								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.document.title") }} (EN)</h5>-->

<!--								<v-text-field-->
<!--									v-model="$v.documentsModel.title_en.$model"-->
<!--									:error="$v.documentsModel.title_en.$error"-->
<!--									:readonly="TYPE === 'Read'"-->
<!--									outlined-->
<!--									hide-details-->
<!--								>-->
<!--								</v-text-field>-->
<!--							</div>-->
<!--						</v-col>-->

<!--						<v-col md="4">-->
<!--							<div class="app-form-group app-form-group__small no-shadow mb-2">-->
<!--								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.branch.type") }}</h5>-->

<!--								<template v-if="$i18n.locale === 'uz'">-->
<!--									<v-select-->
<!--										v-model="documentsModel.type"-->
<!--										:items="$store.state.ANNUAL_DOCUMENTS"-->
<!--										item-text="title_uz"-->
<!--										item-value="value"-->
<!--										:readonly="TYPE === 'Read'"-->
<!--										outlined-->
<!--										hide-details-->
<!--									>-->
<!--										<template v-slot:append>-->
<!--											<chevron-down-icon-->
<!--												size="1.35x"-->
<!--												class="text-secondary-dark"-->
<!--											></chevron-down-icon>-->
<!--										</template>-->
<!--									</v-select>-->
<!--								</template>-->

<!--								<template v-if="$i18n.locale === 'ru'">-->
<!--									<v-select-->
<!--										v-model="documentsModel.type"-->
<!--										:items="$store.state.ANNUAL_DOCUMENTS"-->
<!--										item-text="title_ru"-->
<!--										item-value="value"-->
<!--										:readonly="TYPE === 'Read'"-->
<!--										outlined-->
<!--										hide-details-->
<!--									>-->
<!--										<template v-slot:append>-->
<!--											<chevron-down-icon-->
<!--												size="1.35x"-->
<!--												class="text-secondary-dark"-->
<!--											></chevron-down-icon>-->
<!--										</template>-->
<!--									</v-select>-->
<!--								</template>-->

<!--								<template v-if="$i18n.locale === 'en'">-->
<!--									<v-select-->
<!--										v-model="documentsModel.type"-->
<!--										:items="$store.state.ANNUAL_DOCUMENTS"-->
<!--										item-text="title_en"-->
<!--										item-value="value"-->
<!--										:readonly="TYPE === 'Read'"-->
<!--										outlined-->
<!--										hide-details-->
<!--									>-->
<!--										<template v-slot:append>-->
<!--											<chevron-down-icon-->
<!--												size="1.35x"-->
<!--												class="text-secondary-dark"-->
<!--											></chevron-down-icon>-->
<!--										</template>-->
<!--									</v-select>-->
<!--								</template>-->
<!--							</div>-->
<!--						</v-col>-->

<!--						<v-col md="4">-->
<!--							<multiple-file-upload-->
<!--								ref="propFile"-->
<!--								@emit:up="upload"-->
<!--								:value="documentFile"-->
<!--								:disabled="TYPE === 'Read'"-->
<!--								:label="$t('Dashboard.upload_file')"-->
<!--							/>-->
<!--						</v-col>-->
<!--					</v-row>-->
<!--				</div>-->

<!--				<div class="mt-8">-->
<!--					<go-back-button />-->
<!--					<template v-if="TYPE === 'Create'">-->
<!--						<send-button @emit:up="send" :text="$t('Dashboard.create')" />-->
<!--					</template>-->

<!--					<template v-else-if="TYPE === 'Update'">-->
<!--						<send-button @emit:up="update" :text="$t('Dashboard.update')" />-->
<!--					</template>-->
<!--				</div>-->
			</div>

			</div>
		</app-card>
	</div>
</template>

<script>
import AppCard from "../../../../BaseComponents/AppCard";
import MultipleFileUpload from "../../../../BaseComponents/MultipleFileUpload";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import { required } from "vuelidate/lib/validators";
import { ChevronDownIcon } from 'vue-feather-icons';
import DocumentsOptional from '@/views/Admin/OtherSections/Documents/AnnualDocuments/components/DocumentsOptional'
import DocumentsFiles from '@/views/Admin/OtherSections/Documents/AnnualDocuments/components/DocumentsFiles'

export default {
	name: "AnnualDocumentsForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppCard,
		MultipleFileUpload,
		SendButton,
		GoBackButton,
		ChevronDownIcon,
		DocumentsOptional,
		DocumentsFiles
	},
	data() {
		return {
			documentFile: [],
			documentsModel: {
				title_uz: "",
				title_ru: "",
				title_en: "",
				attachments: [],
				type: ""
			},
			panel: [0]
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
				.post(`/${this.$store.state.auth.COMPANY_ID}/bank/many_documents/`, this.documentsModel)
				.then((res) => {
					this.$toast.success(`Yaratildi`);

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionAnnualDocumentsList" });
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

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/bank/many_documents/${this.$route.params.id}/`, this.documentsModel)
				.then((res) => {
					this.$toast.success(`Yangilandi`);

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionAnnualDocumentsList" });
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
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/bank/many_documents/${this.$route.params.id}/`).then(({ data }) => {
				this.documentsModel = data;

				this.documentFile = data.attachments
			});
		},

		/*
		 *
		 * */
		upload(files) {
			this.documentsModel.attachments = []

			files.forEach(file => {
				this.documentsModel.attachments.push({
					id: file.id
				})
			})
		}
	}
};
</script>

<style></style>
