<template>
	<div class="useful-form-view">
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
								<h5 class="font-600 dark-text mb-1">Sarlavha (UZ)</h5>

								<v-text-field
									v-model="$v.usefulModel.name_uz.$model"
									:error="$v.usefulModel.name_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Sarlavha (RU)</h5>

								<v-text-field
									v-model="$v.usefulModel.name_ru.$model"
									:error="$v.usefulModel.name_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Sarlavha (EN)</h5>

								<v-text-field
									v-model="$v.usefulModel.name_en.$model"
									:error="$v.usefulModel.name_en.$error"
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
								:value="propFile"
								:disabled="TYPE === 'Read'"
								:label="$t('Dashboard.upload_photo')"
							/>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Havola (Website)</h5>

								<v-text-field
									v-model="usefulModel.link"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
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
import AppCard from "../../BaseComponents/AppCard";
import FileUpload from "../../BaseComponents/FileUpload";
import GoBackButton from "../../BaseComponents/GoBackButton";
import SendButton from "../../BaseComponents/SendButton";
import { required } from "vuelidate/lib/validators";

export default {
	name: "UsefulCreateForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppCard,
		FileUpload,
		GoBackButton,
		SendButton
	},
	data() {
		return {
			propFile: null,
			usefulModel: {
				name_uz: "",
				name_ru: "",
				name_en: "",
				image: null,
				link: ""
			}
		}
	},
	validations: {
		usefulModel: {
			name_uz: { required },
			name_ru: { required },
			name_en: { required }
		}
	},
	mounted() {
		if( this.$route.params.id ) {
			this.getOne()
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

				return void 0;
			}

			this.usefulModel.image = this.propFile.id

			this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/link/`, this.usefulModel)
			.then(() => {
				this.$toast.success("Yaratildi");

				setTimeout(() => {
					this.$router.push({ name: "DashboardUsefulLinksList" });
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

				return void 0;
			}

			this.usefulModel.image = this.propFile.id

			this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/link/${this.$route.params.id}`)
				.then(() => {
					this.$toast.success("Yangilandi");

					setTimeout(() => {
						this.$router.push({ name: "DashboardUsefulLinksList" });
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
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/link/${this.$route.params.id}`).then(({ data }) => {
				// console.log(data);
				this.usefulModel.name_uz = data.name_uz;
				this.usefulModel.name_ru = data.name_ru;
				this.usefulModel.name_en = data.name_en;
				this.usefulModel.link = data.link

				this.propFile = data.image
			});
		},

		/*
		*
		* */
		upload(file) {
			this.propFile = file
		}
	}
};
</script>

<style>

</style>
