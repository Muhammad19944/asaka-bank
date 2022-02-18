<template>
	<div class="public-offer-form-view">
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
											TEXT
											<span class="font-700 text-small">(UZ)</span></h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											TEXT
											<span class="font-700 text-small">(RU)</span></h5>
									</v-tab>
									<v-tab class="transition-ease-in-out">
										<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
											TEXT
											<span class="font-700 text-small">(EN)</span></h5>
									</v-tab>
								</v-tabs>

								<v-tabs-items v-model="tab1">
									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="publicOfferModel.text_uz"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>

									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="publicOfferModel.text_ru"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>
									<v-tab-item>
										<div class="app-editor">
											<quill-editor
												v-model="publicOfferModel.text_en"
												:disabled="TYPE === 'Read'"
											></quill-editor>
										</div>
									</v-tab-item>
								</v-tabs-items>
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
		name: "PublicOfferForm",
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
				tab1: null,
				publicOfferModel: {
					text_uz: "",
					text_ru: "",
					text_en: ""
				}
			}
		},
		mounted() {
			if (this.$route.params.id) {
				this.getOne();
			}
		},
		methods: {
			send(){
				this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/bank/public_offer/`, this.publicOfferModel)
				.then(()=>{
					this.$toast.success("Yaratildi!");
					setTimeout(() => {
						this.$router.push({ name: "PublicOffersList" });
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
				this.$http
					.put(`/${this.$store.state.auth.COMPANY_ID}/bank/public_offer/${this.$route.params.id}/`, this.publicOfferModel)
					.then(() => {
						this.$toast.success("Yangilandi");

						setTimeout(() => {
							this.$router.push({ name: "PublicOffersList" });
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
				this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/bank/public_offer/${this.$route.params.id}/`).then(({ data }) => {
					this.publicOfferModel = data;

				});
			},
		}
	}
</script>

<style scoped>

</style>
