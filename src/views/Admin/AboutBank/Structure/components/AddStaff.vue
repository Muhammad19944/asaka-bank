<template>
	<div class="form-wrap-body">
		<v-row>
			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.fio" />
						(UZ)
					</h5>

					<v-text-field
						v-model="$v.staffModel.full_name_uz.$model"
						:error="$v.staffModel.full_name_uz.$error"
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
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.fio" />
						(RU)
					</h5>

					<v-text-field
						v-model="$v.staffModel.full_name_ru.$model"
						:error="$v.staffModel.full_name_ru.$error"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					/>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.fio" />
						(EN)
					</h5>

					<v-text-field
						v-model="$v.staffModel.full_name_en.$model"
						:error="$v.staffModel.full_name_en.$error"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					/>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.position" />
						(UZ)
					</h5>

					<v-text-field
						v-model="$v.staffModel.position_uz.$model"
						:error="$v.staffModel.position_uz.$error"
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
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.position" />
						(RU)
					</h5>

					<v-text-field
						v-model="$v.staffModel.position_ru.$model"
						:error="$v.staffModel.position_ru.$error"
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
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.position" />
						(EN)
					</h5>

					<v-text-field
						v-model="$v.staffModel.position_en.$model"
						:error="$v.staffModel.position_en.$error"
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
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.description" />
						(UZ)
					</h5>

					<v-text-field
						v-model="$v.staffModel.description_uz.$model"
						:error="$v.staffModel.description_uz.$error"
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
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.description" />
						(RU)
					</h5>

					<v-text-field
						v-model="$v.staffModel.description_ru.$model"
						:error="$v.staffModel.description_ru.$error"
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
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.description" />
						(EN)
					</h5>

					<v-text-field
						v-model="$v.staffModel.description_en.$model"
						:error="$v.staffModel.description_en.$error"
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
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.phone" />
					</h5>

					<v-text-field
						v-model="staffModel.phone"
						v-mask="'+998 XX XXX XX XX'"
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
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.email" />
					</h5>

					<v-text-field
						v-model="$v.staffModel.email.$model"
						:error="$v.staffModel.email.$error"
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
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.type" />
					</h5>

					<template v-if="$i18n.locale === 'uz'">
						<v-select
							v-model="$v.staffModel.type.$model"
							:error="$v.staffModel.type.$error"
							:items="$store.state.STRUCTURE_TYPE"
							item-text="title_uz"
							item-value="value"
							:readonly="TYPE === 'Read'"
							outlined
							hide-details
						>
							<template v-slot:append>
								<chevron-down-icon size="1.5x" class="grey--text"/>
							</template>
						</v-select>
					</template>

					<template v-if="$i18n.locale === 'ru'">
						<v-select
							v-model="$v.staffModel.type.$model"
							:error="$v.staffModel.type.$error"
							:items="$store.state.STRUCTURE_TYPE"
							item-text="title_ru"
							item-value="value"
							:readonly="TYPE === 'Read'"
							outlined
							hide-details
						>
							<template v-slot:append>
								<chevron-down-icon size="1.5x" class="grey--text"/>
							</template>
						</v-select>
					</template>

					<template v-if="$i18n.locale === 'en'">
						<v-select
							v-model="$v.staffModel.type.$model"
							:error="$v.staffModel.type.$error"
							:items="$store.state.STRUCTURE_TYPE"
							item-text="title_en"
							item-value="value"
							:readonly="TYPE === 'Read'"
							outlined
							hide-details
						>
							<template v-slot:append>
								<chevron-down-icon size="1.5x" class="grey--text"/>
							</template>
						</v-select>
					</template>
				</div>
			</v-col>

      <v-col md="4">
        <div class="app-form-group app-form-group__small no-shadow mb-2">
          <h5 class="font-600 dark-text mb-1">
            Tartib raqami
          </h5>

          <v-text-field
              v-model="$v.staffModel.rank.$model"
              :error="$v.staffModel.rank.$error"
              :readonly="TYPE === 'Read'"
              outlined
              hide-details
              type="number"
          >
          </v-text-field>
        </div>
      </v-col>
		</v-row>

		<template v-if="TYPE !== 'Create'">
			<v-row>
				<v-col md="12" class="mt-2">
					<go-back-button />

					<template v-if="TYPE !== 'Read'">
						<send-button
							@emit:up="update"
							:text="$t('Dashboard.update')"
						/>
					</template>
				</v-col>
			</v-row>
		</template>

		<template v-else>
			<v-row>
				<v-col md="12" class="mt-5">
					<go-back-button />

					<template v-if="!isCreated">
						<send-button @emit:up="send" :text="$t('Dashboard.add_new')" />
					</template>

					<template v-else>
						<send-button
							@emit:up="update"
							:text="$t('Dashboard.update')"
						/>
					</template>
				</v-col>
			</v-row>
		</template>
	</div>
</template>

<script>
	import SendButton from "../../../BaseComponents/SendButton";
	import GoBackButton from "../../../BaseComponents/GoBackButton";
	import { ChevronDownIcon } from "vue-feather-icons";
	import { required, email } from "vuelidate/lib/validators";
	import I18nVue from "../../../../../I18nVue";

	export default {
		name: "AddStaff",
		props: {
			TYPE: {
				type: String,
				default: ""
			}
		},
		components: {
			I18nVue,
			SendButton,
			GoBackButton,
			ChevronDownIcon
		},
		data() {
			return {
				isCreated: false,
				staffModel: {
					full_name_uz: "",
					full_name_ru: "",
					full_name_en: "",
					position_uz: "",
					position_ru: "",
					position_en: "",
					description_uz: "",
					description_ru: "",
					description_en: "",
					phone: "",
					email: "",
					type: "",
          rank: null
				}
			};
		},
		validations: {
			staffModel: {
				full_name_uz: { required },
				full_name_ru: { required },
				full_name_en: { required },
				position_uz: { required },
				position_ru: { required },
				position_en: { required },
				description_uz: { required },
				description_ru: { required },
				description_en: { required },
				email: { email },
				type: { required },
        rank: {required}
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
					this.$toast.warning(this.$t("Dashboard.f"));

					return;
				}

				this.$http
					.post(`/${this.$store.state.auth.COMPANY_ID}/bank/structure/`, this.staffModel)
					.then(({ data }) => {
						this.$toast.success(this.$t("Dashboard.c"));

						this.staffModel = data;
						this.isCreated = true;

						if (data.type === "bank_board") {
							this.$store.state.CREATED_STAFF_ID = data.id;
							this.$store.state.isStaffBankManagement = "bank_board";
						}
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

				if (this.staffModel.type !== "bank_board") {
					this.deleteBiographyID();
					this.$store.state.CREATED_STAFF_BIOGRAPHY_ID = null;
					this.$store.state.CREATED_STAFF_ID = null;
					this.$store.state.isStaffBankManagement = "";
				}

				this.$http
					.put(`/${this.$store.state.auth.COMPANY_ID}/bank/structure/${this.staffModel.id}`, this.staffModel)
					.then(({ data }) => {
						this.$toast.success(this.$t("Dashboard.n"));

						this.staffModel = data;
						this.isCreated = true;

						if (data.type === "bank_board") {
							this.$store.state.CREATED_STAFF_ID = data.id;
							this.$store.state.isStaffBankManagement = "bank_board";
						} else {
							this.$store.state.CREATED_STAFF_ID = null;
							this.$store.state.isStaffBankManagement = "";
						}
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
					.post(`/${this.$store.state.auth.COMPANY_ID}/bank/structure/${this.$route.params.id}`)
					.then(({ data }) => {
						this.staffModel = data;

            if (data.type === "bank_board") {
              this.$store.state.CREATED_STAFF_ID = data.id;
              this.$store.state.isStaffBankManagement = "bank_board";
            }

						if (data.resume) {
							this.$store.state.CREATED_STAFF_BIOGRAPHY_ID = data.resume.id;
							this.$store.state.isStaffBankManagement = "bank_board";
						}
					});
			},

			/*
			*
			* */
			deleteBiographyID() {
				if (this.$store.state.CREATED_STAFF_BIOGRAPHY_ID) {
					this.$http.delete(`/${this.$store.state.auth.COMPANY_ID}/biography/${this.$store.state.CREATED_STAFF_BIOGRAPHY_ID}/`)
						.then(({ data }) => {
							this.staffModel = data;

							this.$store.state.CREATED_STAFF_ID = null;
							this.$store.state.isStaffBankManagement = "";
							this.$store.state.HAS_STAFF_RESUME = false;

							for (let key in this.$store.state.BIOGRAPHY_MODEL) {
								this.$store.state.BIOGRAPHY_MODEL[key] = "";
							}
						});
				}
			}
		}
	};
</script>
