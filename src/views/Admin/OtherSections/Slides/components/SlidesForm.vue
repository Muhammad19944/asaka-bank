<template>
	<div class="slides-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === "Create" ? $t("Dashboard.add_new") : TYPE === "Update" ? $t("Dashboard.update") : $t("Dashboard.read")
						}}
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>

				<div>
					<v-row>
						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.slide.title") }} (UZ)</h5>

								<v-text-field
									v-model="$v.slidesModel.title_uz.$model"
									:error="$v.slidesModel.title_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.slide.title") }} (RU)</h5>

								<v-text-field
									v-model="$v.slidesModel.title_ru.$model"
									:error="$v.slidesModel.title_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.slide.title") }} (EN)</h5>

								<v-text-field
									v-model="$v.slidesModel.title_en.$model"
									:error="$v.slidesModel.title_en.$error"
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
											{{ $t("Dashboard.slide.description") }} <span class="font-700 text-small">(UZ)</span>
										</h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											{{ $t("Dashboard.slide.description") }} <span class="font-700 text-small">(RU)</span>
										</h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											{{ $t("Dashboard.slide.description") }} <span class="font-700 text-small">(EN)</span>
										</h5>
									</v-tab>
								</v-tabs>

								<v-tabs-items v-model="tab1">
									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="slidesModel.description_uz"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>

									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="slidesModel.description_ru"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>
									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="slidesModel.description_en"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>
								</v-tabs-items>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.slide.more_button_text") }}
									(UZ)</h5>

								<v-text-field
									v-model="$v.slidesModel.more_button_name_uz.$model"
									:error="$v.slidesModel.more_button_name_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.slide.more_button_text") }}
									(RU)</h5>

								<v-text-field
									v-model="$v.slidesModel.more_button_name_ru.$model"
									:error="$v.slidesModel.more_button_name_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.slide.more_button_text") }}
									(EN)</h5>

								<v-text-field
									v-model="$v.slidesModel.more_button_name_en.$model"
									:error="$v.slidesModel.more_button_name_en.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.slide.more_button_link") }}</h5>

								<v-text-field
									v-model="$v.slidesModel.more_button_link.$model"
									:error="$v.slidesModel.more_button_link.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.slide.more_button_text") }} <span
									class="red--text">({{ $t("Dashboard.second") }})</span> (UZ)</h5>

								<v-text-field
									v-model="slidesModel.second_button_name_uz"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.slide.more_button_text") }} <span
									class="red--text">({{ $t("Dashboard.second") }})</span> (RU)</h5>

								<v-text-field
									v-model="slidesModel.second_button_name_ru"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.slide.more_button_text") }} <span
									class="red--text">({{ $t("Dashboard.second") }})</span> (EN)</h5>

								<v-text-field
									v-model="slidesModel.second_button_name_en"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.slide.more_button_link") }} <span
									class="red--text">({{ $t("Dashboard.second") }})</span></h5>

								<v-text-field
									v-model="slidesModel.second_button_link"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.credits.interest_rate") }}</h5>

								<v-text-field
									v-model="slidesModel.interest_rate"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.credits.bhm") }}</h5>

								<v-text-field
									v-model="slidesModel.bhm"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.credits.period") }}</h5>

								<v-text-field
									v-model="slidesModel.credit_period"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.cards.fee_of_card") }}</h5>

								<v-text-field
									v-model="slidesModel.fee_of_card"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.cards.deposit") }} <span
									class="red--text">({{ $t("Dashboard.min") }})</span></h5>

								<v-text-field
									v-model="slidesModel.min_deposit"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.category") }}</h5>

								<v-select
									v-model="slidesModel.category"
									:items="categoryList"
									item-text="name_uz"
									item-value="id"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
									</template>
								</v-select>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.slide.open_fee_account") }}</h5>

								<v-text-field
									v-model="slidesModel.account_fee"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.transfers.commission") }}</h5>

								<v-text-field
									v-model="slidesModel.commission_fee"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<file-upload
								@emit:up="upload"
								:value="slideFile"
								:disabled="TYPE === 'Read'"
								:label="$t('Dashboard.upload_photo')"
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
import GoBackButton from "../../../BaseComponents/GoBackButton";
import FileUpload from "../../../BaseComponents/FileUpload";
import { required } from "vuelidate/lib/validators";
import { ChevronDownIcon } from "vue-feather-icons";

export default {
	name: "slidesForm",
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
		FileUpload,
		ChevronDownIcon
	},
	data() {
		return {
			tab1: null,
			categoryList: [],
			slideFile: null,
			slidesModel: {
				title_uz: "",
				title_ru: "",
				title_en: "",
				description_uz: "",
				description_ru: "",
				description_en: "",
				image: null, //
				more_button_name_uz: "",
				more_button_name_ru: "",
				more_button_name_en: "",
				second_button_name_uz: "",
				second_button_name_ru: "",
				second_button_name_en: "",
				more_button_link: "",
				second_button_link: "",
				interest_rate: "",
				bhm: "",
				credit_period: "",
				fee_of_card: "",
				min_deposit: "",
				category: null,
				account_fee: "",
				commission_fee: ""
			}
		};
	},
	validations: {
		slidesModel: {
			title_uz: { required },
			title_ru: { required },
			title_en: { required },
			more_button_name_uz: { required },
			more_button_name_ru: { required },
			more_button_name_en: { required },
			more_button_link: { required }
		}
	},
	mounted() {
		if (this.$route.params.id) {
			this.getOne();
		}

		this.getCategoryList();
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
				.post(`/${this.$store.state.auth.COMPANY_ID}/slide/image/`, this.slidesModel)
				.then((res) => {
					this.$toast.success(`Yaratildi`);

					this.resetFields();

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionSlidesList" });
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
				.put(`/${this.$store.state.auth.COMPANY_ID}/slide/image/${this.$route.params.id}/`, this.slidesModel)
				.then((res) => {
					this.$toast.success(`Yangilandi`);

					this.resetFields();

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionSlidesList" });
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
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/slide/image/${this.$route.params.id}/`).then(({ data }) => {
				this.slidesModel = data;
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
		upload(file) {
			this.slideFile = file;
		},

		/*
		 *
		 * */
		resetFields() {
			this.slidesModel.name_uz = this.slidesModel.name_ru = this.slidesModel.name_en = "";
		}
	}
};
</script>

<style></style>
