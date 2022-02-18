<template>
	<div class="news-form-view">
		<app-card>
			<div class="form-wrap d-flex flex-column h-100 pa-5 px-6">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === "Create" ? $t("Dashboard.add_new") : TYPE === "Update" ? $t("Dashboard.update") :
						$t("Dashboard.read") }}
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>

				<div class="flex-1">
					<v-row>
						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">
									<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.name" />
									(UZ)
								</h5>

								<v-text-field
									v-model="$v.divisionModel.name_uz.$model"
									:error="$v.divisionModel.name_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								/>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">
									<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.name" />
									(RU)
								</h5>

								<v-text-field
									v-model="$v.divisionModel.name_ru.$model"
									:error="$v.divisionModel.name_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">
									<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.name" />
									(EN)
								</h5>

								<v-text-field
									v-model="$v.divisionModel.name_en.$model"
									:error="$v.divisionModel.name_en.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								/>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">
									<I18nVue t="Dashboard.AboutBank.members" />
								</h5>
								<template v-if="$i18n.locale === 'uz'">
									<v-select
										v-model="$v.memberSelected.$model"
										:error="$v.memberSelected.$error"
										:items="membersList"
										item-text="full_name_uz"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
										multiple
										return-object
									>
										<template v-slot:append>
											<chevron-down-icon size="1.5x" class="grey--text"/>
										</template>
									</v-select>
								</template>

								<template v-if="$i18n.locale === 'ru'">
									<v-select
										v-model="$v.memberSelected.$model"
										:error="$v.memberSelected.$error"
										:items="membersList"
										item-text="full_name_ru"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
										multiple
										return-object
									>
										<template v-slot:append>
											<chevron-down-icon size="1.5x" class="grey--text"/>
										</template>
									</v-select>
								</template>

								<template v-if="$i18n.locale === 'en'">
									<v-select
										v-model="$v.memberSelected.$model"
										:error="$v.memberSelected.$error"
										:items="membersList"
										item-text="full_name_en"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
										multiple
										return-object
									>
										<template v-slot:append>
											<chevron-down-icon size="1.5x" class="grey--text"/>
										</template>
									</v-select>
								</template>
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
	import { ChevronDownIcon } from "vue-feather-icons";
	import { required } from "vuelidate/lib/validators";
	import I18nVue from "../../../../../I18nVue";

	export default {
		name: "ShareholderForm",
		props: {
			TYPE: {
				type: String,
				default: ""
			}
		},
		components: {
			I18nVue,
			AppCard,
			SendButton,
			GoBackButton,
			ChevronDownIcon
		},
		data() {
			return {
				divisionModel: {
					name_uz: "",
					name_ru: "",
					name_en: "",
					members: []
				},
				membersList: [],
				memberSelected: []
			};
		},
		validations: {
			divisionModel: {
				name_uz: { required },
				name_ru: { required },
				name_en: { required }
			},
			memberSelected: { required }
		},
		mounted() {
			if (this.$route.params.id) {
				this.getOne();
			}

			this.getListMembers();
		},
		methods: {
			/*
			*
			* */
			send() {
				this.$v.$touch();

				if (this.$v.$invalid) {
					this.$toast.warning(this.$t("Dashboard.f"));

					return;
				}

				this.memberSelected.forEach(item => this.divisionModel.members.push({ id: item.id }));

				this.$http
					.post(`/${this.$store.state.auth.COMPANY_ID}/department/`, this.divisionModel)
					.then(({ data }) => {
						this.$toast.success(this.$t("Dashboard.c"));

						this.divisionModel = data;

						setTimeout(() => {
							this.$router.push({ name: "StructureDivisionList" });
						}, 1500);
					})
					.catch(() => {
						this.$toast.error(this.$t("Dashboard.e"));
					});
			},
			/*
			*
			* */
			update() {
				this.$v.$touch();

				if (this.$v.$invalid) {
					this.$toast.warning(this.$t("Dashboard.f"));

					return;
				}

				this.divisionModel.members = [];

				this.memberSelected.forEach(item => this.divisionModel.members.push({ id: item.id }));

				this.$http
					.put(`/${this.$store.state.auth.COMPANY_ID}/department/${this.divisionModel.id}`, this.divisionModel)
					.then(({ data }) => {
						this.$toast.success(this.$t("Dashboard.y"));

						this.divisionModel = data;

						setTimeout(() => {
							this.$router.push({ name: "StructureDivisionList" });
						}, 1500);
					})
					.catch(() => {
						this.$toast.error(this.$t("Dashboard.e"));
					});
			},

			/*
			*
			* */
			getOne() {
				this.$http
					.post(`/${this.$store.state.auth.COMPANY_ID}/department/${this.$route.params.id}`)
					.then(({ data }) => {
						this.divisionModel = data;
						this.memberSelected = data.members;
					});
			},

			/*
			*
			* */
			getListMembers() {
				this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/bank/structure/`, {
					params: {
						page_size: 500
					}
				})
					.then(({ data }) => {
						this.membersList = data.results;
					});
			}
		}
	};
</script>
