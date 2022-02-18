<template>
	<div class="deposit-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6 d-flex flex-column m-h-100">
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
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit-view.title") }} (UZ)</h5>

								<v-text-field
									v-model="$v.depositModel.title_uz.$model"
									:error="$v.depositModel.title_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit-view.title") }} (RU)</h5>

								<v-text-field
									v-model="$v.depositModel.title_ru.$model"
									:error="$v.depositModel.title_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit-view.title") }} (EN)</h5>

								<v-text-field
									v-model="$v.depositModel.title_en.$model"
									:error="$v.depositModel.title_en.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit-view.description") }} (UZ)</h5>

								<v-text-field
									v-model="$v.depositModel.description_uz.$model"
									:error="$v.depositModel.description_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit-view.description") }} (RU)</h5>

								<v-text-field
									v-model="$v.depositModel.description_ru.$model"
									:error="$v.depositModel.description_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit-view.description") }} (EN)</h5>

								<v-text-field
									v-model="$v.depositModel.description_en.$model"
									:error="$v.depositModel.description_en.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit-view.sub_description") }} (UZ)</h5>

								<v-text-field
									v-model="depositModel.sub_description_uz"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit-view.sub_description") }} (RU)</h5>

								<v-text-field
									v-model="depositModel.sub_description_ru"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit-view.sub_description") }} (EN)</h5>

								<v-text-field
									v-model="depositModel.sub_description_en"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<app-tree-select v-model="treeID" :disabled="TYPE === 'Read'" />
						</v-col>

						<v-col md="4">
							<file-upload
								ref="propFile"
								@emit:up="upload"
								:value="depositPropFile"
								:disabled="TYPE === 'Read'"
								:label="$t('Dashboard.upload_file')"
							/>
						</v-col>
					</v-row>
				</div>

				<div class="mt-8">
					<go-back-button />
					<template v-if="TYPE === 'Create'">
						<send-button @emit:up="send" :text="$t('Dashboard.add_new')" />
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
import AppTreeSelect from "../../../../BaseComponents/AppTreeSelect";
import FileUpload from "../../../../BaseComponents/FileUpload";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import { required } from "vuelidate/lib/validators";
import { ChevronDownIcon } from "vue-feather-icons";

export default {
	name: "DepositBoxViewForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppCard,
		AppTreeSelect,
		FileUpload,
		SendButton,
		GoBackButton,
		ChevronDownIcon
	},
	data() {
		return {
			depositList: [],
			treeID: null,
			depositPropFile: null,
			depositModel: {
				category: null,
				title_uz: "",
				title_ru: "",
				title_en: "",
				description_uz: "",
				description_ru: "",
				description_en: "",
				sub_description_uz: "",
				sub_description_ru: "",
				sub_description_en: "",
				image: null
			}
		};
	},
	validations: {
		depositModel: {
			title_uz: { required },
			title_ru: { required },
			title_en: { required },
			description_uz: { required },
			description_ru: { required },
			description_en: { required }
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

			this.depositModel.image = this.depositPropFile.id;
			this.depositModel.category = this.treeID;

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/depository/`, this.depositModel)
				.then((res) => {
					this.$toast.success(`Yaratildi`);

					setTimeout(() => {
						this.$router.push({ name: "DashboardDepositsBoxView" });
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
				.put(`/${this.$store.state.auth.COMPANY_ID}/depository/${this.$route.params.id}/`, this.depositModel)
				.then((res) => {
					this.$toast.success(`Yangilandi`);

					setTimeout(() => {
						this.$router.push({ name: "DashboardDepositsBoxView" });
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
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/depository/${this.$route.params.id}/`).then(({ data }) => {
				this.depositModel = data;

				this.treeID = data.category.id
				this.depositPropFile = data.image
			});
		},

		/*
		 *
		 * */
		upload(file) {
			this.depositPropFile = file;
		},
	}
};
</script>

<style></style>
