<template>
	<div class="form-wrap-body">
		<v-row>
			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit.name") }} <span
						class="font-700 text-small">(UZ)</span></h5>

					<v-text-field
						v-model="$v.depositOptionModel.title_uz.$model"
						:error="$v.depositOptionModel.title_uz.$error"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit.name") }} <span
						class="font-700 text-small">(RU)</span></h5>

					<v-text-field
						v-model="$v.depositOptionModel.title_ru.$model"
						:error="$v.depositOptionModel.title_ru.$error"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit.name") }} <span
						class="font-700 text-small">(EN)</span></h5>

					<v-text-field
						v-model="$v.depositOptionModel.title_en.$model"
						:error="$v.depositOptionModel.title_en.$error"
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
								{{ $t("Dashboard.deposit.description") }} <span class="font-700 text-small">(UZ)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t("Dashboard.deposit.description") }} <span class="font-700 text-small">(RU)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t("Dashboard.deposit.description") }} <span class="font-700 text-small">(EN)</span>
							</h5>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab1">
						<v-tab-item>
							<div class="app-editor">
								<quill-editor v-model="depositOptionModel.description_uz" :disabled="TYPE === 'Read'">
								</quill-editor>
							</div>
						</v-tab-item>

						<v-tab-item>
							<div class="app-editor">
								<quill-editor v-model="depositOptionModel.description_ru" :disabled="TYPE === 'Read'">
								</quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor v-model="depositOptionModel.description_en" :disabled="TYPE === 'Read'">
								</quill-editor>
							</div>
						</v-tab-item>
					</v-tabs-items>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						{{ $t("Dashboard.deposit.save_period") }} <span class="font-700 text-small red--text">(minimum oy)</span>
					</h5>

					<v-text-field
						v-model="depositOptionModel.min_save_period"
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
						{{ $t("Dashboard.deposit.save_period") }} <span class="font-700 text-small red--text">(maksimum oy)</span>
					</h5>

					<v-text-field
						v-model="depositOptionModel.max_save_period"
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
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit.deposit_type") }}</h5>

					<template v-if="$i18n.locale === 'uz'">
						<v-select
							v-model="depositOptionModel.type"
							:items="$store.state.DEPOSIT_TYPE"
							:readonly="TYPE === 'Read'"
							item-text="title_uz"
							item-value="value"
							outlined
							hide-details
						>
							<template v-slot:append>
								<chevron-down-icon size="1.3x"></chevron-down-icon>
							</template>
						</v-select>
					</template>

					<template v-if="$i18n.locale === 'ru'">
						<v-select
							v-model="depositOptionModel.type"
							:items="$store.state.DEPOSIT_TYPE"
							:readonly="TYPE === 'Read'"
							item-text="title_ru"
							item-value="value"
							outlined
							hide-details
						>
							<template v-slot:append>
								<chevron-down-icon size="1.3x"></chevron-down-icon>
							</template>
						</v-select>
					</template>

					<template v-if="$i18n.locale === 'en'">
						<v-select
							v-model="depositOptionModel.type"
							:items="$store.state.DEPOSIT_TYPE"
							:readonly="TYPE === 'Read'"
							item-text="title_en"
							item-value="value"
							outlined
							hide-details
						>
							<template v-slot:append>
								<chevron-down-icon size="1.3x"></chevron-down-icon>
							</template>
						</v-select>
					</template>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						{{ $t("Dashboard.deposit.placement_percentage") }} <span class="font-700 text-small red--text">(minimum oy)</span>
					</h5>

					<v-text-field
						v-model="depositOptionModel.yearly_from"
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
						{{ $t("Dashboard.deposit.placement_percentage") }} <span class="font-700 text-small red--text">(maksimum oy)</span>
					</h5>

					<v-text-field
						v-model="depositOptionModel.yearly_to"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<file-upload
					ref="optionalFile"
					@emit:up="upload"
					:value="optionalFile"
					:disabled="TYPE === 'Read'"
					:label="$t('Dashboard.upload_file')"
				/>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit.deposit_is_available") }}</h5>

					<v-switch
						v-model="depositOptionModel.is_available"
						:readonly="TYPE === 'Read'"
						color="rgba(var(--primary), 1)"
						inset
						hide-details
						class="mt-0"
					></v-switch>
				</div>
			</v-col>
		</v-row>

		<template v-if="TYPE !== 'Create'">
			<go-back-button />

			<template v-if="TYPE !== 'Read'">
				<send-button
					@emit:up="update"
					:text="$t('Dashboard.update')"
				/>
			</template>
		</template>

		<template v-else>
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
		</template>
	</div>
</template>

<script>
import AppTreeSelect from "../../../../BaseComponents/AppTreeSelect";
import FileUpload from "../../../../BaseComponents/FileUpload";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import { ChevronDownIcon } from "vue-feather-icons";
import { required } from "vuelidate/lib/validators";

export default {
	name: "DepositOptional",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppTreeSelect,
		FileUpload,
		SendButton,
		GoBackButton,
		ChevronDownIcon
	},
	data() {
		return {
			tab1: null,
			treeID: null,
			depositOptionModel: {
				title_uz: "",
				title_ru: "",
				title_en: "",
				yearly_from: "",
				yearly_to: "",
				min_save_period: "",
				max_save_period: "",
				type: "",
				image: null,
				is_available: true,
				description_uz: "",
				description_ru: "",
				description_en: "",
				category: null
			},
			optionalFile: null,
			isCreated: false
		};
	},
	validations: {
		depositOptionModel: {
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

			this.depositOptionModel.category = this.treeID;
			this.depositOptionModel.image = this.optionalFile.id;

			this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/deposit/`, this.depositOptionModel).then(({ data }) => {
				this.$toast.success(`Omonat yaratildi`);

				this.$store.state.CREATED_DEPOSIT_ID = data.id;

				this.isCreated = true
			});
		},

		/*
		 *
		 * */
		getOne() {
			this.$store.state.CREATED_DEPOSIT_ID = this.$route.params.id

			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/deposit/${this.$store.state.CREATED_DEPOSIT_ID}/`).then(({ data }) => {
				this.depositOptionModel = data;
				this.optionalFile = data.image;
				this.treeID = this.depositOptionModel.category.id;
			});
		},

		/*
		 *
		 * */
		update() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(`Field to'ldirilishi kerak`);

				return;
			}

			this.depositOptionModel.category = this.treeID;
			this.depositOptionModel.image = this.optionalFile.id;

			if(this.$route.params.id) {
				this.$store.state.CREATED_DEPOSIT_ID = this.$route.params.id
			}

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/deposit/${this.$store.state.CREATED_DEPOSIT_ID}/`, this.depositOptionModel)
				.then(({ data }) => {
					this.$toast.success(`Omonat yangilandi`);
				})
				.catch((err) => {
					this.$toast.error(`Yangilashda xatolik`);
				});
		},

		/*
		 *
		 * */
		upload(file) {
			this.optionalFile = file;
		}
	}
};
</script>

<style></style>
