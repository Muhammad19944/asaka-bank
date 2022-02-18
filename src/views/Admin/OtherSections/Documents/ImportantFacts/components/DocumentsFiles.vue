<template>
	<div class="form-wrap">
		<template v-if="$store.state.CREATED_IMPORTANT_FACTS_ID === null">
			<v-alert type="error">Birinchi hujjat yillari yaratilishi shart</v-alert>
		</template>

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
					<file-upload
						ref="documentFile"
						@emit:up="upload"
						:value="documentFile"
						:label="$t('Dashboard.upload_file')"
					/>
				</v-col>
				<template v-if="TYPE !== 'Create' && TYPE !== 'Read'">
					<v-col md="4">
						<div class="app-form-group app-form-group__small no-shadow mb-2">
							<h5 class="font-600 dark-text mb-1" style="opacity: 0">Hidden text</h5>

							<send-button @emit:up="send" :text="$t('Dashboard.add_new')">
								<plus-circle-icon size="1.3x" class="text-white"></plus-circle-icon>
							</send-button>
						</div>
					</v-col>
				</template>
			</v-row>


			<template v-if="TYPE !== 'Create'">
				<v-row>
					<v-col v-for="(item, index) in documentsList" :key="index" md="4">
						<div class="credit-widget pa-5 rounded-lg d-flex align-center overflow-hidden p-relative">

							<h3 class="dark-text font-600 mb-0" v-html="item.title_uz"></h3>

							<div
								class="
                                app-slide-overlay
                                p-absolute
                                w-100
                                h-100
                                d-flex
                                align-center
                                justify-center
                                text-white
                                transition-ease-in-out
                            "
							>
								<v-tooltip top color="primary">
									<template v-slot:activator="{ on, attrs }">
										<v-btn
											@click="propUpdate(item)"
											:disabled="$store.state.CREATED_IMPORTANT_FACTS_ID === null || TYPE === 'Read'"
											color="primary"
											large
											dark
											v-bind="attrs"
											v-on="on"
											icon
											depressed
											class="
                                            border-all
                                            pa-1
                                            rounded-circle
                                            d-flex
                                            align-center
                                            justify-center
                                            outline-transparent
                                            mr-4
                                            transition-fast-out-slow-in
                                        "
										>
											<edit2-icon size="1.2x" class="text-white d-block"></edit2-icon>
										</v-btn>
									</template>

									<span>{{ $t("Dashboard.update") }}</span>
								</v-tooltip>

								<v-tooltip top color="danger">
									<template v-slot:activator="{ on, attrs }">
										<v-btn
											@click="deleteProp(item.id)"
											:disabled="$store.state.CREATED_IMPORTANT_FACTS_ID === null || TYPE === 'Read'"
											color="primary"
											large
											dark
											v-bind="attrs"
											v-on="on"
											icon
											depressed
											class="
                                            border-all
                                            pa-1
                                            rounded-circle
                                            d-flex
                                            align-center
                                            justify-center
                                            outline-transparent
                                            mr-4
                                            transition-fast-out-slow-in
                                        "
										>
											<trash2-icon size="1.3x" class="text-white d-block"></trash2-icon>
										</v-btn>
									</template>

									<span>{{ $t("Dashboard.delete") }}</span>
								</v-tooltip>
							</div>
						</div>
					</v-col>
				</v-row>
			</template>
		</div>
		<div class="mt-8">
			<template v-if="TYPE !== 'Create'">
				<go-back-button />

				<template v-if="TYPE !== 'Read'">
					<send-button
						@emit:up="update"
						:text="$t('Dashboard.update')"
					/>
				</template>
			</template>

			<template v-else>
				<go-back-button />

				<template v-if="!isDocumentCreated">
					<send-button @emit:up="send" :text="$t('Dashboard.add_new')" />
				</template>

				<template v-else>
					<send-button
						@emit:up="update"
						:text="$t('Dashboard.update')"
					/>
				</template>
			</template>
		</div>
	</div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import FileUpload from "../../../../BaseComponents/FileUpload";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import { Edit2Icon, Trash2Icon, PlusCircleIcon } from "vue-feather-icons";

export default {
	name: "DocumentsFiles",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		FileUpload,
		SendButton,
		GoBackButton,
		Edit2Icon,
		Trash2Icon,
		PlusCircleIcon
	},
	data() {
		return {
			documentFile: null,
			documentsModel: {
				title_uz: "",
				title_ru: "",
				title_en: "",
				type: "present_facts",
				file: null
			},
			documentsList: [],
			isDocumentCreated: false
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
		this.getAll();
	},
	methods: {
		getAll() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/bank/finance_indication_title/${this.$store.state.CREATED_IMPORTANT_FACTS_ID}/many_documents/`, {
				params: {
					type: "present_facts"
				}
			})
				.then(({ data }) => {
					this.documentsList = data.results;
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
		send() {
			this.documentsModel.file = this.documentFile;

			this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/bank/finance_indication_title/${this.$store.state.CREATED_IMPORTANT_FACTS_ID}/many_documents/`, this.documentsModel)
				.then(({ data }) => {
					this.$toast.success("Yaratildi");
					this.isDocumentCreated = true;

					this.getAll();
				});
		},
		/*
		*
		* */
		update() {
			if (!this.documentsModel.hasOwnProperty("id")) {
				this.$toast.warning("Field to'ldirilishi shart");

				return void 0;
			}

			this.documentsModel.file = this.documentFile;

			if (this.$route.params.id) {
				this.$store.state.CREATED_IMPORTANT_FACTS_ID = this.$route.params.id;
			}

			this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/bank/finance_indication_title/${this.$store.state.CREATED_IMPORTANT_FACTS_ID}/many_documents/${this.documentsModel.id}/`, this.documentsModel)
				.then((res) => {
					this.$toast.success("Yangilandi");

					this.getAll();
				})
				.catch((err) => {
					this.$toast.error("Yangilashda xatolik");
				});
		},
		/*
		*
		* */
		propUpdate(item) {
			this.documentsModel = { ...item };
			this.documentFile = item.file;
		},
		/*
		*
		* */
		deleteProp(id) {
			if (!confirm(`O'chirishni xoxlaysizmi ?`)) {
				return void 0;
			}

			this.$http
				.delete(`/${this.$store.state.auth.COMPANY_ID}/bank/finance_indication_title/${this.$store.state.CREATED_IMPORTANT_FACTS_ID}/many_documents/${id}/`)
				.then((res) => {
					this.$toast.success(`O'chirildi`);

					this.getAll();
				})
				.catch((err) => {
					this.$toast.error(`O'chirishda xatolik`);
				});
		}
	}
};
</script>

<style scoped>

</style>
