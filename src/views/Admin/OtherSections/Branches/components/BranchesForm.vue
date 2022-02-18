<template>
	<div class="branches-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === "Create" ? $t("Dashboard.add_new") : TYPE === "Update" ? $t("Dashboard.update") :
						$t("Dashboard.read") }}
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)" />
				</div>

				<div>
					<v-row>
						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.branch.name") }} (UZ)</h5>

								<v-text-field
									v-model="$v.branchesModel.name_uz.$model"
									:error="$v.branchesModel.name_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.branch.name") }} (RU)</h5>

								<v-text-field
									v-model="$v.branchesModel.name_ru.$model"
									:error="$v.branchesModel.name_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								/>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.branch.name") }} (EN)</h5>

								<v-text-field
									v-model="$v.branchesModel.name_en.$model"
									:error="$v.branchesModel.name_en.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								/>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.branch.address") }} (UZ)</h5>

								<v-text-field
									v-model="$v.branchesModel.address_uz.$model"
									:error="$v.branchesModel.address_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								/>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.branch.address") }} (RU)</h5>

								<v-text-field
									v-model="$v.branchesModel.address_ru.$model"
									:error="$v.branchesModel.address_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								/>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.branch.address") }} (EN)</h5>

								<v-text-field
									v-model="$v.branchesModel.address_en.$model"
									:error="$v.branchesModel.address_en.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								/>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.branch.phone") }}</h5>

								<v-text-field
									v-model="$v.branchesModel.phone_number.$model"
									:error="$v.branchesModel.phone_number.$error"
									:readonly="TYPE === 'Read'"
									v-mask="'+998 (##) ### ## ##'"
									outlined
									hide-details
								/>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">
									{{ $t("Dashboard.branch.address") }} <span
									class="red--text">({{ $t("Dashboard.second") }})</span>
								</h5>

								<v-text-field
									v-model="$v.branchesModel.phone_number_2.$model"
									:error="$v.branchesModel.phone_number_2.$error"
									:readonly="TYPE === 'Read'"
									v-mask="'+998 (##) ### ## ##'"
									outlined
									hide-details
								/>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.branch.fax") }}</h5>

								<v-text-field
									v-model="$v.branchesModel.fax.$model"
									:error="$v.branchesModel.fax.$error"
									:readonly="TYPE === 'Read'"
									v-mask="'+998 (##) ### ## ##'"
									outlined
									hide-details
								/>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.branch.email") }}</h5>

								<v-text-field
									v-model="$v.branchesModel.email.$model"
									:error="$v.branchesModel.email.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								/>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.branch.type") }}</h5>

								<v-select
									v-model="$v.branchesModel.type.$model"
									:error="$v.branchesModel.type.$error"
									:items="$store.state.TYPE"
									item-text="title"
									item-value="value"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.branch.location") }} <span
									class="red--text">({{ $t("Dashboard.branch.lat") }})</span></h5>

								<v-text-field
									v-model.number="$v.branchesModel.lat.$model"
									:error="$v.branchesModel.lat.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								/>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.branch.location") }} <span
									class="red--text">({{ $t("Dashboard.branch.lng") }})</span></h5>

								<v-text-field
									v-model.number="$v.branchesModel.lng.$model"
									:error="$v.branchesModel.lng.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								/>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.region.name") }}</h5>

								<v-select
									v-model="$v.branchesModel.district.$model"
									:error="$v.branchesModel.district.$error"
									:items="districtList"
									item-text="name_uz"
									item-value="id"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.branch.status") }}</h5>

								<v-select
									v-model="$v.branchesModel.condition.$model"
									:error="$v.branchesModel.condition.$error"
									:items="$store.state.CONDITION"
									item-text="title"
									item-value="value"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text" />
									</template>
								</v-select>
							</div>
						</v-col>

						<v-col md="12">
							<div class="d-flex align-center">
								<h4 class="text--primary text-uppercase font-700 mr-4">{{
										$t("Dashboard.deposit_box.deposit_box") }}</h4>

								<v-divider style="border-color: rgb(var(--border-color), 1)" />
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit_box.address") }}</h5>

								<v-text-field
									v-model="branchesModel.depository_address"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								/>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit_box.phone") }}</h5>

								<v-text-field
									v-model="branchesModel.depository_phone"
									:readonly="TYPE === 'Read'"
									v-mask="'+998 (##) ### ## ##'"
									outlined
									hide-details
								/>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit_box.is_available") }}</h5>

								<v-switch
									v-model="branchesModel.is_for_depository"
									:readonly="TYPE === 'Read'"
									color="rgba(var(--primary), 1)"
									inset
									hide-details
									class="mt-0"
								/>
							</div>
						</v-col>
						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Savdo ekvayringi olish uchun</h5>

								<v-switch
									v-model="branchesModel.is_for_acquiring"
									:readonly="TYPE === 'Read'"
									color="rgba(var(--primary), 1)"
									inset
									hide-details
									class="mt-0"
								/>
							</div>
						</v-col>
						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Valyuta ayirboshlash uchun</h5>

								<v-switch
									v-model="branchesModel.is_for_exchange"
									:readonly="TYPE === 'Read'"
									color="rgba(var(--primary), 1)"
									inset
									hide-details
									class="mt-0"
								/>
							</div>
						</v-col>
            <v-col md="4">
              <div class="app-form-group app-form-group__small no-shadow mb-2">
                <h5 class="font-600 dark-text mb-1">{{ $t("LastCorrections.number_exchange_office") }}</h5>

                <v-text-field
                    v-model="branchesModel.number_exchange_office"
                    :readonly="TYPE === 'Read'"
                    outlined
                    hide-details
                />
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
import { required, email } from "vuelidate/lib/validators";
import { ChevronDownIcon } from "vue-feather-icons";

export default {
	name: "branchesForm",
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
			districtList: [],
			branchesModel: {
				name_uz: "",
				name_ru: "",
				name_en: "",
				address_uz: "",
				address_ru: "",
				address_en: "",
				phone_number: "",
				phone_number_2: "",
				fax: "",
				email: "",
				type: "",
				lat: "",
				lng: "",
				district: null,
				condition: "",
				is_for_depository: false,
				depository_address: "",
				depository_phone: "",
				is_for_acquiring: false,
				is_for_exchange: false,
        number_exchange_office: ""
			}
		};
	},
	validations: {
		branchesModel: {
			name_uz: { required },
			name_ru: { required },
			name_en: { required },
			address_uz: { required },
			address_ru: { required },
			address_en: { required },
			phone_number: { },
			phone_number_2: {  },
			fax: { },
			email: { email },
			type: { required },
			lat: { required },
			lng: { required },
			district: { required },
			condition: { required }
		}
	},
	mounted() {
		if (this.$route.params.id) {
			this.getOne();
		}

		this.getDistrictList();
	},
	methods: {
		/*
		 *
		 *
		 * */
		send() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(this.$t("Dashboard.f"));

				return;
			}

			if (this.branchesModel.email === ""){
				this.branchesModel.email = null
			}

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/filial/`, this.branchesModel)
				.then((res) => {
					this.$toast.success(this.$t("Dashboard.c"));

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionBranchesList" });
					}, 1500);
				})
				.catch((err) => {
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

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/filial/${this.$route.params.id}/`, this.branchesModel)
				.then((res) => {
					this.$toast.success(this.$t("Dashboard.n"));

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionBranchesList" });
					}, 1500);
				})
				.catch(() => this.$toast.error(this.$t("Dashboard.e")));
		},
		/*
		 *
		 * */
		getOne() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/filial/${this.$route.params.id}/`).then(({ data }) => {
				this.branchesModel = data;
			});
		},

		/**
		 *
		 *
		 */
		getDistrictList() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/district/`, {
				params: {
					page_size: 14
				}
			})
				.then(({ data }) => {
					this.districtList = data.results;
				});

		}
	}
};
</script>
