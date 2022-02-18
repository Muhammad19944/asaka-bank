<template>
	<div class="district-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6 d-flex flex-column m-h-100">
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
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.category_name") }} (UZ)</h5>

								<v-text-field
									v-model="$v.categoryModel.title_uz.$model"
									:error="$v.categoryModel.title_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.category_name") }} (RU)</h5>

								<v-text-field
									v-model="$v.categoryModel.title_ru.$model"
									:error="$v.categoryModel.title_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.category_name") }} (EN)</h5>

								<v-text-field
									v-model="$v.categoryModel.title_en.$model"
									:error="$v.categoryModel.title_en.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Список категорий</h5>

								<template v-if="$i18n.locale === 'uz'">
									<v-select
										v-model="categoryModel.parent"
										:items="categoryList"
										item-text="title_uz"
										item-value="id"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
									>
										<template v-slot:append>
											<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
										</template>
									</v-select>
								</template>

								<template v-if="$i18n.locale === 'ru'">
									<v-select
										v-model="categoryModel.parent"
										:items="categoryList"
										item-text="title_ru"
										item-value="id"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
									>
										<template v-slot:append>
											<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
										</template>
									</v-select>
								</template>

								<template v-if="$i18n.locale === 'en'">
									<v-select
										v-model="categoryModel.parent"
										:items="categoryList"
										item-text="title_en"
										item-value="id"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
									>
										<template v-slot:append>
											<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
										</template>
									</v-select>
								</template>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Ссылка категории</h5>

								<v-text-field
									v-model="$v.categoryModel.link.$model"
									:error="$v.categoryModel.link.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">На верхний меню</h5>

								<v-switch
									v-model="categoryModel.is_top_header"
									:readonly="TYPE === 'Read'"
									color="rgba(var(--primary), 1)"
									inset
									hide-details
									class="mt-0"
								></v-switch>
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
import GoBackButton from "../../../BaseComponents/GoBackButton";
import { required } from "vuelidate/lib/validators";
import { ChevronDownIcon } from 'vue-feather-icons'

import slugify from "slugify"

export default {
	name: "CategoriesForm",
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
		ChevronDownIcon
	},
	data() {
		return {
			categoryList: [],
			categoryModel: {
				title_uz: "",
				title_ru: "",
				title_en: "",
				parent: null,
				is_top_header: true,
				link: ""
			}
		};
	},
	validations: {
		categoryModel: {
			title_uz: { required },
			title_ru: { required },
			title_en: { required },
			link: { required }
		}
	},
	mounted() {
		this.getAll()

		if (this.$route.params.id) {
			this.getOne();
		}
	},
	methods: {
		/*
		 *
		 * */
		getAll() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/menu/`).then(({ data }) => {
				this.categoryList = data.results;
			});
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

			this.categoryModel = {
				...this.categoryModel,
				link: slugify(this.categoryModel.link)
			}

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/menu/`, this.categoryModel)
				.then((res) => {
					this.$toast.success(`Yaratildi`);

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionCategoryList" });
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
				.put(`/${this.$store.state.auth.COMPANY_ID}/menu/${this.$route.params.id}/`, this.categoryModel)
				.then((res) => {
					this.$toast.success(`Yangilandi`);

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionCategoryList" });
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
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/menu/${this.$route.params.id}/`).then(({ data }) => {
				this.categoryModel = data;
			});
		}
	}
};
</script>

<style></style>
