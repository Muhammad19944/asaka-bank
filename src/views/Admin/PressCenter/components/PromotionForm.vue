<template>
	<div class="category-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6">
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
								<h5 class="font-600 dark-text mb-1">title_uz (UZ)</h5>

								<v-text-field
									v-model="$v.promotionModel.title_uz.$model"
									:error="$v.promotionModel.title_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">title_ru (RU)</h5>

								<v-text-field
									v-model="$v.promotionModel.title_ru.$model"
									:error="$v.promotionModel.title_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">title_en (EN)</h5>

								<v-text-field
									v-model="$v.promotionModel.title_en.$model"
									:error="$v.promotionModel.title_en.$error"
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
									v-model="tab3"
									hide-slider
									class="mb-0 mb-5"
								>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											main_description_uz
											<span class="font-700 text-small">(UZ)</span></h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											main_description_ru
											<span class="font-700 text-small">(RU)</span></h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											main_description_en
											<span class="font-700 text-small">(EN)</span></h5>
									</v-tab>
								</v-tabs>

								<v-tabs-items v-model="tab3">
									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="promotionModel.main_description_uz"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>

									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="promotionModel.main_description_ru"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>
									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="promotionModel.main_description_en"
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
									v-model="tab1"
									hide-slider
									class="mb-0 mb-5"
								>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											description_uz
											<span class="font-700 text-small">(UZ)</span></h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											description_ru
											<span class="font-700 text-small">(RU)</span></h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											description_en
											<span class="font-700 text-small">(EN)</span></h5>
									</v-tab>
								</v-tabs>

								<v-tabs-items v-model="tab1">
									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="promotionModel.description_uz"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>

									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="promotionModel.description_ru"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>
									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="promotionModel.description_en"
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
											schedule_uz
											<span class="font-700 text-small">(UZ)</span></h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											schedule_ru
											<span class="font-700 text-small">(RU)</span></h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											schedule_en
											<span class="font-700 text-small">(EN)</span></h5>
									</v-tab>
								</v-tabs>

								<v-tabs-items v-model="tab2">
									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="promotionModel.schedule_uz"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>

									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="promotionModel.schedule_ru"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>
									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="promotionModel.schedule_en"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>
								</v-tabs-items>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">start date</h5>

								<v-menu
									v-model="startDate"
									:close-on-content-click="false"
									:nudge-right="40"
									transition="scale-transition"
									offset-y
									min-width="auto"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-text-field
											v-model="promotionModel.start_date"
											placeholder="Start date"
											append-icon="mdi-calendar"
											readonly
											outlined
											hide-details
											v-bind="attrs"
											v-on="on"
										></v-text-field>
									</template>
									<v-date-picker
										v-model="promotionModel.start_date"
										@input="startDate = false"
									></v-date-picker>
								</v-menu>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">end date</h5>

								<v-menu
									v-model="endDate"
									:close-on-content-click="false"
									:nudge-right="40"
									transition="scale-transition"
									offset-y
									min-width="auto"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-text-field
											v-model="promotionModel.end_date"
											placeholder="End date"
											append-icon="mdi-calendar"
											readonly
											outlined
											hide-details
											v-bind="attrs"
											v-on="on"
										></v-text-field>
									</template>
									<v-date-picker
										v-model="promotionModel.end_date"
										@input="endDate = false"
									></v-date-picker>
								</v-menu>
							</div>
						</v-col>

						<v-col md="4">
							<file-upload
								:label="$t('Dashboard.upload_file')"
								@emit:up="upload"
								:value="fileUpload"
								:disabled="TYPE === 'Read'"
							/>
						</v-col>

						<v-col md="4">
							<file-upload
								:label="$t('Dashboard.upload_photo')"
								@emit:up="uploadImage"
								:value="imageUpload"
								:disabled="TYPE === 'Read'"
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
import AppCard from "../../BaseComponents/AppCard";
import SendButton from "../../BaseComponents/SendButton";
import GoBackButton from "../../BaseComponents/GoBackButton";
import FileUpload from "../../BaseComponents/FileUpload";
import { required } from "vuelidate/lib/validators";

export default {
	name: "PromotionForm",
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
		FileUpload
	},
	data() {
		return {
			fileUpload: null,
			imageUpload: null,
			tab1: null,
			tab2: null,
			tab3: null,
			startDate: false,
			endDate: false,
			promotionModel: {
				title_uz: "",
				title_ru: "",
				title_en: "",
				description_uz: "",
				description_ru: "",
				description_en: "",
				schedule_uz: "",
				schedule_ru: "",
				schedule_en: "",
				file: null,
				start_date: "",
				end_date: "",
				main_description_uz: "",
				main_description_ru: "",
				main_description_en: "",
				image: null
			}
		};
	},
	validations: {
		promotionModel: {
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
				this.$toast.warning(`Field to'ldirilishi shart`);

				return;
			}

			this.promotionModel.file = this.fileUpload.id;
			this.promotionModel.image = this.imageUpload.id;

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/promotion/`, this.promotionModel)
				.then((res) => {
					this.$toast.success(`Yaratildi`);

					setTimeout(() => {
						this.$router.push({ name: "DashboardPromotionList" });
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

			this.promotionModel.file = this.fileUpload.id;
			this.promotionModel.image = this.imageUpload.id;

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/promotion/${this.$route.params.id}/`, this.promotionModel)
				.then((res) => {
					this.$toast.success(`Yangilandi`);

					setTimeout(() => {
						this.$router.push({ name: "DashboardPromotionList" });
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
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/promotion/${this.$route.params.id}/`).then(({ data }) => {
				this.promotionModel = data;

				this.fileUpload = data.file;
				this.imageUpload = data.image;
			});
		},

		/*
		 *
		 * */
		upload(file) {
			this.fileUpload = file;
		},

		/*
		*
		* */
		uploadImage(file) {
			this.imageUpload = file;
		}
	}
};
</script>

<style></style>
