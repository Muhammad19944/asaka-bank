<template>
	<div class="form-wrap">
		<div class="flex-1">
			<v-row>
				<v-col md="4">
					<div class="app-form-group app-form-group__small no-shadow mb-2">
						<h5 class="font-600 dark-text mb-1">Hujjat yillari (UZ)</h5>

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
						<h5 class="font-600 dark-text mb-1">Hujjat yillari (RU)</h5>

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
						<h5 class="font-600 dark-text mb-1">Hujjat yillari (EN)</h5>

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
								:items="$store.state.ANNUAL_DOCUMENTS"
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
									></chevron-down-icon>
								</template>
							</v-select>
						</template>

						<template v-if="$i18n.locale === 'ru'">
							<v-select
								v-model="documentsModel.type"
								:items="$store.state.ANNUAL_DOCUMENTS"
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
									></chevron-down-icon>
								</template>
							</v-select>
						</template>

						<template v-if="$i18n.locale === 'en'">
							<v-select
								v-model="documentsModel.type"
								:items="$store.state.ANNUAL_DOCUMENTS"
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
									></chevron-down-icon>
								</template>
							</v-select>
						</template>
					</div>
				</v-col>
			</v-row>
			<v-row>
				<v-col md="4">
					<div class="mt-8">
						<go-back-button />
						<template v-if="TYPE === 'Create'">
							<send-button @emit:up="send" :text="$t('Dashboard.create')" />
						</template>

						<template v-else-if="TYPE === 'Update'">
							<send-button @emit:up="update" :text="$t('Dashboard.update')" />
						</template>
					</div>
				</v-col>
			</v-row>
		</div>
	</div>

</template>

<script>
import { required } from "vuelidate/lib/validators";
import { ChevronDownIcon } from "vue-feather-icons";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";

export default {
	name: "DocumentsOptional",
	components: {
		ChevronDownIcon,
		SendButton,
		GoBackButton
	},
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			documentsModel: {
				title_uz: "",
				title_ru: "",
				title_en: "",
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
		send() {
			this.$http.post(`${this.$store.state.auth.COMPANY_ID}/bank/finance_indication_title/`, this.documentsModel)
				.then(({ data }) => {
					this.$toast.success("Yaratildi");

					this.$store.state.CREATED_IMPORTANT_FACTS_ID = data.id;

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionImportantFactsList" });
					}, 1500);
				})
				.catch((error) => {
					this.$toast.error("Yaratishda xatolik");
				});
		},
		/*
		*
		* */
		update() {

			if (this.$route.params.id) {
				this.$store.state.CREATED_IMPORTANT_FACTS_ID = this.$route.params.id;
			}

			this.$http.put(`${this.$store.state.auth.COMPANY_ID}/bank/finance_indication_title/${this.$store.state.CREATED_IMPORTANT_FACTS_ID}`, this.documentsModel)
				.then((response) => {
					this.$toast.success("Yangilandi");

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionImportantFactsList" });
					}, 1500);
				})
				.catch((error) => {
					this.$toast.error("Yangilashda xatolik!");
				});
		},
		/*
		*
		* */
		getOne() {
			this.$store.state.CREATED_IMPORTANT_FACTS_ID = this.$route.params.id;

			this.$http.get(`${this.$store.state.auth.COMPANY_ID}/bank/finance_indication_title/${this.$store.state.CREATED_IMPORTANT_FACTS_ID}`, {
				params: {
					type: "present_facts"
				}
			})
				.then(({ data }) => {
					this.documentsModel = data;
				});
		}
	}
};
</script>

<style scoped>

</style>
