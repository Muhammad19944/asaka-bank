<template>
	<div class="form-wrap-body">
		<v-row>
			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						{{ $t("Dashboard.transfers.name") }} <span class="font-700 text-small">(UZ)</span>
					</h5>

					<v-text-field
						v-model="$v.transferOptionalModel.title_uz.$model"
						:error="$v.transferOptionalModel.title_uz.$error"
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
						{{ $t("Dashboard.transfers.name") }} <span class="font-700 text-small">(RU)</span>
					</h5>

					<v-text-field
						v-model="$v.transferOptionalModel.title_ru.$model"
						:error="$v.transferOptionalModel.title_ru.$error"
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
						{{ $t("Dashboard.transfers.name") }} <span class="font-700 text-small">(EN)</span>
					</h5>

					<v-text-field
						v-model="$v.transferOptionalModel.title_en.$model"
						:error="$v.transferOptionalModel.title_en.$error"
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
								{{ $t("Dashboard.transfers.description") }} <span
								class="font-700 text-small">(UZ)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t("Dashboard.transfers.description") }} <span
								class="font-700 text-small">(RU)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t("Dashboard.transfers.description") }} <span
								class="font-700 text-small">(EN)</span>
							</h5>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab1">
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="transferOptionalModel.description_uz"
									:disabled="TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>

						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="transferOptionalModel.description_ru"
									:disabled="TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="transferOptionalModel.description_en"
									:disabled="TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>
					</v-tabs-items>
				</div>
			</v-col>

			<v-col md="12">
				<div class="admin-tabs">
					<v-tabs height="56" v-model="tab2" hide-slider class="mb-0 mb-5">
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								O'tkazma tariflari <span
								class="font-700 text-small">(UZ)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								O'tkazma tariflari <span
								class="font-700 text-small">(RU)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								O'tkazma tariflari <span
								class="font-700 text-small">(EN)</span>
							</h5>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab2">
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="transferOptionalModel.transfer_tariff_uz"
									:disabled="TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>

						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="transferOptionalModel.transfer_tariff_ru"
									:disabled="TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="transferOptionalModel.transfer_tariff_en"
									:disabled="TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>
					</v-tabs-items>
				</div>
			</v-col>

			<v-col md="4">
				<app-tree-select v-model="treeID" :disabled="TYPE === 'Read'" />
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.transfers.commission") }} <span
						class="red--text">({{ $t("Dashboard.min") }})</span></h5>

					<v-text-field
						v-model="transferOptionalModel.commission_fee_min"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>
			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.transfers.commission") }} <span
						class="red--text">({{ $t("Dashboard.max") }})</span></h5>

					<v-text-field
						v-model="transferOptionalModel.commission_fee_max"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<file-upload
					ref="transferFile"
					@emit:up="upload"
					:value="transferFile"
					:disabled="TYPE === 'Read'"
					:label="$t('Dashboard.upload_file')"
				/>
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

			<template v-if="!isTransferCreated">
				<send-button @emit:up="send" :text="$t('Dashboard.create')" />
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
	name: "TransferOptional",
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
			tab2: null,
			treeID: null,
			transferFile: null,
			transferOptionalModel: {
				title_uz: "",
				title_ru: "",
				title_en: "",
				image: null,
				description_uz: "",
				description_ru: "",
				description_en: "",
				transfer_tariff_uz: "",
				transfer_tariff_ru: "",
				transfer_tariff_en: "",
				commission_fee_min: "",
				commission_fee_max: "",
				category: null
			},
			isTransferCreated: false
		};
	},
	validations: {
		transferOptionalModel: {
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

			this.transferOptionalModel.image = this.transferFile.id;
			this.transferOptionalModel.category = this.treeID;

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/transfer/`, this.transferOptionalModel)
				.then(({ data }) => {
					this.$toast.success(`Transfer yaratildi`);

					this.$store.state.CREATED_TRANSFER_ID = data.id;

					this.isTransferCreated = true
				})
				.catch(() => {
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

			this.transferOptionalModel.category = this.treeID;
			this.transferOptionalModel.image = this.transferFile.id;

			if(this.$route.params.id) {
				this.$store.state.CREATED_TRANSFER_ID = this.$route.params.id
			}

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/transfer/${this.$store.state.CREATED_TRANSFER_ID}/`, this.transferOptionalModel)
				.then(() => {
					this.$toast.success(`Transfer yangilandi`);
				})
				.catch(() => {
					this.$toast.error(`Yangilashda xatolik`);
				});
		},

		/*
		 *
		 * */
		upload(file) {
			this.transferFile = file;
		},

		/*
		 *
		 * */
		getOne() {
			this.$store.state.CREATED_TRANSFER_ID = this.$route.params.id

			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/transfer/${this.$store.state.CREATED_TRANSFER_ID}/`).then(({ data }) => {
				this.transferOptionalModel = data;

				this.treeID = data.category.id;
				this.transferFile = data.image;
			});
		}
	}
};
</script>

<style></style>
