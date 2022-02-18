<template>
	<div class="app-upload-wrap">
		<v-row>
			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.document.title") }} <span
						class="font-700 text-small">(UZ)</span>
					</h5>

					<v-text-field
						v-model="$v.documentModel.title_uz.$model"
						:error="$v.documentModel.title_uz.$error"
						:readonly="CREATED_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.document.title") }} <span
						class="font-700 text-small">(RU)</span>
					</h5>

					<v-text-field
						v-model="$v.documentModel.title_ru.$model"
						:error="$v.documentModel.title_ru.$error"
						:readonly="CREATED_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.document.title") }} <span
						class="font-700 text-small">(EN)</span>
					</h5>

					<v-text-field
						v-model="$v.documentModel.title_en.$model"
						:error="$v.documentModel.title_en.$error"
						:readonly="CREATED_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.document.description") }} <span
						class="font-700 text-small">(UZ)</span></h5>

					<v-text-field
						v-model="documentModel.doc_name_uz"
						:readonly="CREATED_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					/>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.document.description") }} <span
						class="font-700 text-small">(RU)</span></h5>

					<v-text-field
						v-model="documentModel.doc_name_ru"
						:readonly="CREATED_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					/>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.document.description") }} <span
						class="font-700 text-small">(EN)</span></h5>

					<v-text-field
						v-model="documentModel.doc_name_en"
						:readonly="CREATED_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					/>
				</div>
			</v-col>

			<v-col md="4">
				<file-upload
					ref="propFile"
					@emit:up="upload"
					:value="documentFile"
					:disabled="!CREATED_ID || TYPE === 'Read'"
					:sub-label="$t('Dashboard.document.for_download_text')"
				/>
			</v-col>

			<!-- (CREATED_CARD_ID) => will shown a button -->
			<template v-if="CREATED_ID">
				<!-- (TYPE !== 'Read') => will hide a button -->
				<template v-if="TYPE !== 'Read'">
					<v-col md="4">
						<div class="app-form-group app-form-group__small no-shadow mb-2">
							<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.add_new") }}</h5>

							<send-button @emit:up="addNew" :text="$t('Dashboard.add_new')">
								<plus-circle-icon size="1.3x" class="text-white" />
							</send-button>
						</div>
					</v-col>
				</template>
			</template>
		</v-row>

		<v-row>
			<template v-if="CREATED_ID">
				<template v-for="item in documentsList">
					<v-col md="4" :key="item.id">
						<div class="credit-widget pa-7 rounded-lg overflow-hidden d-flex align-center p-relative">
							<v-avatar size="56" class="mr-5">
								<svg class="size-lg" id="icon-file" viewBox="0 0 64 64">
									<path
										d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"
									/>
									<path
										d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"
									/>
								</svg>
							</v-avatar>

							<div>
								<I18nVue
									:uz="item.title_uz"
									:ru="item.title_ru"
									:en="item.title_en"
									classes="text--h4 dark-text font-600 d-block"
								/>

								<template v-if="item.doc_name_uz">
									<I18nVue
										:uz="item.doc_name_uz"
										:ru="item.doc_name_ru"
										:en="item.doc_name_en"
										classes="text--h5 d-block"
									/>
								</template>
							</div>

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
											:disabled="TYPE === 'Read'"
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
											<edit2-icon size="1.2x" class="text-white d-block" />
										</v-btn>
									</template>

									<span>{{ $t("Dashboard.update") }}</span>
								</v-tooltip>

								<v-tooltip top color="danger">
									<template v-slot:activator="{ on, attrs }">
										<v-btn
											@click="propDelete(item.id)"
											:disabled="TYPE === 'Read'"
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
											<trash2-icon size="1.3x" class="text-white d-block" />
										</v-btn>
									</template>

									<span>{{ $t("Dashboard.delete") }}</span>
								</v-tooltip>
							</div>
						</div>
					</v-col>
				</template>

				<v-col md="12" class="mt-10">
					<template v-if="TYPE !== 'Create' && TYPE !== 'Update'">
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
						<template v-if="isUpdateClicked">
							<send-button
								@emit:up="update"
								:text="$t('Dashboard.update')"
							/>
						</template>
					</template>
				</v-col>
			</template>
		</v-row>
	</div>
</template>

<script>
import FileUpload from "./FileUpload";
import SendButton from "./SendButton";
import GoBackButton from "./GoBackButton";
import I18nVue from "../../../I18nVue";
import { PlusCircleIcon, Trash2Icon, Edit2Icon } from "vue-feather-icons";
import { required } from "vuelidate/lib/validators";

export default {
	name: "AppUploadDocs",
	props: {
		TYPE: {
			type: String,
			default: ""
		},
		API_URL: {
			BASE_URL: String,
			GET_LIST: String
		},
		CREATED_ID: {
			type: [String, Number],
			default: ""
		}
	},
	components: {
		FileUpload,
		SendButton,
		GoBackButton,
		I18nVue,
		PlusCircleIcon,
		Trash2Icon,
		Edit2Icon
	},
	data() {
		return {
			documentModel: {
				title_uz: "",
				title_ru: "",
				title_en: "",
				doc_name_uz: "",
				doc_name_ru: "",
				doc_name_en: "",
				for_download: null
			},
			documentsList: [],
			documentFile: null,
			isDocumentCreated: false,
			isUpdateClicked: false
		};
	},
	validations: {
		documentModel: {
			title_uz: { required },
			title_ru: { required },
			title_en: { required }
		}
	},
	mounted() {
		if (this.$route.params.id) {
			this.getAllDocs();
		}
	},
	methods: {
		/**
		 *
		 *
		 */
		getAllDocs() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/${this.API_URL.BASE_URL}/${this.CREATED_ID}/${this.API_URL.GET_LIST}/`)
				.then(({ data }) => {
					this.documentsList = data.results;
				});
		},

		/*
		*
		* */
		upload(files) {
			this.documentFile = files;
		},

		/*
		*
		* */
		send() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(this.$t("Dashboard.f"));

				return;
			}

			this.documentModel.for_download = this.documentFile ? this.documentFile.id : null;

			this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/${this.API_URL.BASE_URL}/${this.CREATED_ID}/${this.API_URL.GET_LIST}/`, this.documentModel)
				.then(({ data }) => {
					this.$toast.success(this.$t("Dashboard.c"));

					this.documentModel = data

					this.isDocumentCreated = true

				})
				.catch(err => {
					this.$toast.error(this.$t("Dashboard.e"));

					this.resetFields();
				});
		},

		/**
		 *
		 *
		 */
		update() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(this.$t("Dashboard.f"));

				return;
			}

			this.documentModel.for_download = this.documentFile ? this.documentFile.id : null;

			this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/${this.API_URL.BASE_URL}/${this.CREATED_ID}/${this.API_URL.GET_LIST}/${this.documentModel.id}/`, this.documentModel)
				.then(res => {
					this.$toast.success(this.$t("Dashboard.n"));
					this.resetFields();
					this.getAllDocs();
				})
				.catch(err => {
					this.$toast.error(this.$t("Dashboard.e"));

					this.resetFields();
				});
		},

		/**
		 *
		 *
		 */
		propDelete(id) {
			if (!confirm(this.$t("Dashboard.d"))) {
				return void 0;
			}

			this.$http.delete(`/${this.$store.state.auth.COMPANY_ID}/${this.API_URL.BASE_URL}/${this.CREATED_ID}/${this.API_URL.GET_LIST}/${id}`)
				.then(res => {
					this.$toast.success(this.$t("Dashboard.d1"));

					this.getAllDocs();
					this.isUpdateClicked = false;

					this.resetFields();
				})
				.catch(() => this.$toast.error(this.$t("Dashboard.e")));
		},

		/**
		 *
		 *
		 */
		addNew() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(this.$t("Dashboard.f"));

				return;
			}

			this.documentModel.for_download = this.documentFile ? this.documentFile.id : null;

			this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/${this.API_URL.BASE_URL}/${this.CREATED_ID}/${this.API_URL.GET_LIST}/`, this.documentModel)
				.then(res => {
					this.$toast.success(this.$t("Dashboard.c"));

					this.resetFields();

					this.getAllDocs();
				})
				.catch(err => {
					this.$toast.error(this.$t("Dashboard.e"));

					this.resetFields();
				});
		},

		/**
		 *
		 *
		 */
		propUpdate(item) {
			this.documentModel = { ...item };
			this.documentFile = item.for_download ? { ...item.for_download } : null;
			this.isUpdateClicked = true
		},

		/**
		 *
		 *
		 */
		resetFields() {
			const { propFile } = this.$refs;

			this.documentModel.title_uz =
				this.documentModel.title_ru =
					this.documentModel.title_en =
						this.documentModel.doc_name_uz =
							this.documentModel.doc_name_ru =
								this.documentModel.doc_name_en =
									"";
			this.documentModel.for_download = null;
			this.documentFile = null;

			propFile.file = [];
		}
	}
};
</script>
