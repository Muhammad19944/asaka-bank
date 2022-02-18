<template>
	<div class="news-form-view">
		<app-card>
			<div class="form-wrap d-flex flex-column m-h-100 pa-5 px-6">
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
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.news.name") }} (UZ)</h5>

								<v-text-field
									v-model="$v.newsModel.title_uz.$model"
									:error="$v.newsModel.title_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.news.name") }} (RU)</h5>

								<v-text-field
									v-model="$v.newsModel.title_ru.$model"
									:error="$v.newsModel.title_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.news.name") }} (EN)</h5>

								<v-text-field
									v-model="$v.newsModel.title_en.$model"
									:error="$v.newsModel.title_en.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="12">
							<div class="admin-tabs">
								<v-tabs height="56" v-model="tab1" hide-slider class="mb-0 mb-5">
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											{{ $t("Dashboard.news.description") }} <span class="font-700 text-small">(UZ)</span>
										</h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											{{ $t("Dashboard.news.description") }} <span class="font-700 text-small">(RU)</span>
										</h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											{{ $t("Dashboard.news.description") }} <span class="font-700 text-small">(EN)</span>
										</h5>
									</v-tab>
								</v-tabs>

								<v-tabs-items v-model="tab1">
									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												ref="myTextEditor"
												@change="onEditorChange($event)"
												v-model="$v.newsModel.description_uz.$model"
												:error="$v.newsModel.description_uz.$error"
												:disabled="TYPE === 'Read'"
											>
<!--												<template #toolbar>-->
<!--													<button id="custom-button" @click.prevent="fnOpenUploadVideo" title="视频">-->
<!--														<video-icon />-->
<!--													</button>-->
<!--												</template>-->
											</quill-editor>
										</div>
									</v-tab-item>

									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="$v.newsModel.description_ru.$model"
												:error="$v.newsModel.description_ru.$error"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>

									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="$v.newsModel.description_en.$model"
												:error="$v.newsModel.description_en.$error"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>
								</v-tabs-items>
							</div>
						</v-col>

						<v-col md="12">
							<v-date-picker
								v-model='newsModel.date_added'
								scrollable
							></v-date-picker>
						</v-col>

						<template v-if="GALLERY">
							<v-col md="4">
								<multiple-file-upload
									ref="propFile"
									@emit:up="upload"
									:value="galleryFiles"
									:disabled="TYPE === 'Read'"
									:label="$t('Dashboard.upload_file')"
								/>
							</v-col>
						</template>
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

		<v-dialog
			v-model="dialogFnOpenUpload"
			max-width="290"
		>
			<v-card>
				<v-file-input
					v-model="videoInput"
					truncate-length="15"
				></v-file-input>

				<v-btn color="primary" @click="fnOpenUploadSubmit">
					Upload
				</v-btn>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import AppCard from "../../BaseComponents/AppCard";
import SendButton from "../../BaseComponents/SendButton";
import GoBackButton from "../../BaseComponents/GoBackButton";
import MultipleFileUpload from "../../BaseComponents/MultipleFileUpload";
import { ChevronDownIcon, VideoIcon } from "vue-feather-icons";
import { required } from "vuelidate/lib/validators";

export default {
	name: "NewsForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		},
		CATEGORY_ID: {
			type: [Number, String]
		},
		REDIRECT_ROUTE: {
			type: String
		},
		GALLERY: {
			type: Boolean,
			default: false
		}
	},
	components: {
		AppCard,
		SendButton,
		GoBackButton,
		MultipleFileUpload,
		ChevronDownIcon,
		VideoIcon
	},
	data() {
		return {
			videoInput: null,
			dialogFnOpenUpload: false,
			galleryFiles: null,
			tab1: null,
			categoryList: [],
			newsModel: {
				title_uz: "",
				title_ru: "",
				title_en: "",
				description_uz: "",
				description_en: "",
				description_ru: "",
				category: this.CATEGORY_ID,
				attachments: [],
				date_added: ""
			},
		};
	},
	validations: {
		newsModel: {
			title_uz: { required },
			title_ru: { required },
			title_en: { required },
			description_uz: { required },
			description_en: { required },
			description_ru: { required },
			category: { required }
		}
	},
	computed: {
		editor () {
			return this.$refs.myTextEditor.quill
		}
	},
	mounted() {
		this.getCategoryList();

		if (this.$route.params.id) {
			this.getOne();
		}
	},
	methods: {
		onEditorChange(editor) {
			console.log(editor);
			let html = editor.html
			this.$emit('input', html)
		},

		fnOpenUploadVideo() {
			this.dialogFnOpenUpload = true
		},

		fnOpenUploadSubmit () {
			let formData = new FormData()
			formData.append('file', this.videoInput)

			return new Promise((resolve, reject) => {
				this.$http.post('/documents/', formData)
					.then(({ data }) => {
						console.log(data);
						this.editor.insertEmbed(this.editor.getSelection().index, 'video', data.file)
					})
			})
		},

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
				.post(`/${this.$store.state.auth.COMPANY_ID}/news/`, this.newsModel)
				.then(() => {
					this.$toast.success("Yaratildi");

					setTimeout(() => {
						this.$router.push({ name: this.REDIRECT_ROUTE });
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

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/news/${this.$route.params.id}`, this.newsModel)
				.then(() => {
					this.$toast.success("Yangilandi");

					setTimeout(() => {
						this.$router.push({ name: this.REDIRECT_ROUTE });
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
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/news/${this.$route.params.id}`).then(({ data }) => {
				this.newsModel = data;

				this.galleryFiles = data.attachments
			});
		},

		/*
		 *
		 * */
		getCategoryList() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/category/`).then(({ data }) => {
				this.categoryList = data.results;
			});
		},

		/*
		*
		* */
		upload(files) {
			this.newsModel.attachments = []

			files.forEach(file => {
				this.newsModel.attachments.push({
					id: file.id
				})
			})
		}
	}
};
</script>

<style></style>
