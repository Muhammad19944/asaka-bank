<template>
	<div class="form-wrap-body">
		<v-row>
			<template v-if="$store.state.CREATED_TRANSFER_ID === null">
				<v-col md="12">
					<v-alert type="error">{{ $t('Dashboard.transfers.transfer_error_alert') }}</v-alert>
				</v-col>
			</template>

			<v-col md="12">
				<div class="admin-tabs">
					<v-tabs height="56" v-model="tab1" hide-slider class="mb-0 mb-5">
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t('Dashboard.transfers.description') }} <span class="font-700 text-small">(UZ)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t('Dashboard.transfers.description') }} <span class="font-700 text-small">(RU)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t('Dashboard.transfers.description') }} <span class="font-700 text-small">(EN)</span>
							</h5>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab1">
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="transferPropModel.property_uz"
									:disabled="$store.state.CREATED_TRANSFER_ID === null || TYPE === 'Read'"
									class="edit-height-100"
								>
								</quill-editor>
							</div>
						</v-tab-item>

						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="transferPropModel.property_ru"
									:disabled="$store.state.CREATED_TRANSFER_ID === null || TYPE === 'Read'"
									class="edit-height-100"
								>
								</quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="transferPropModel.property_en"
									:disabled="$store.state.CREATED_TRANSFER_ID === null || TYPE === 'Read'"
									class="edit-height-100"
								>
								</quill-editor>
							</div>
						</v-tab-item>
					</v-tabs-items>
				</div>
			</v-col>

			<v-col md="4">
				<file-upload
					ref="transferFile"
					@emit:up="upload"
					:value="transferFile"
					:disabled="$store.state.CREATED_TRANSFER_ID === null || TYPE === 'Read'"
					:label="$t('Dashboard.upload_file')"
				/>
			</v-col>

			<template v-if="TYPE !== 'Create' && TYPE !== 'Read'">
				<v-col md="4">
					<div class="app-form-group app-form-group__small no-shadow mb-2">
						<h5 class="font-600 dark-text mb-1" style="opacity: 0">Hidden text</h5>

						<send-button @emit:up="send" :text="$t('Dashboard.add_new')">
							<plus-circle-icon size="1.3x" class="text-white"></plus-circle-icon>
						</send-button>
					</div>
				</v-col>
			</template>
		</v-row>

		<template v-if="TYPE !== 'Create'">
			<v-row>
				<v-col v-for="(item, index) in transferPropList" :key="index" md="4">
					<div class="credit-widget pa-5 rounded-lg d-flex align-center overflow-hidden p-relative">
						<v-avatar size="56" class="mr-5">
							<img
								:src="item.icon && $http.defaults.baseURL + item.icon.url"
								alt="Card image"
								class="d-block"
							/>
						</v-avatar>

						<h3 class="dark-text font-600 mb-0" v-html="item.property_uz"></h3>

						<div
							class="
                                app-slide-overlay
                                p-absolute
                                w-100
                                h-100
                                d-flex
                                align-center
                                justify-center
                                text-white
                                transition-ease-in-out
                            "
						>
							<v-tooltip top color="primary">
								<template v-slot:activator="{ on, attrs }">
									<v-btn
										@click="propUpdate(item)"
										:disabled="$store.state.CREATED_TRANSFER_ID === null || TYPE === 'Read'"
										color="primary"
										large
										dark
										v-bind="attrs"
										v-on="on"
										icon
										depressed
										class="
                                            border-all
                                            pa-1
                                            rounded-circle
                                            d-flex
                                            align-center
                                            justify-center
                                            outline-transparent
                                            mr-4
                                            transition-fast-out-slow-in
                                        "
									>
										<edit2-icon size="1.2x" class="text-white d-block"></edit2-icon>
									</v-btn>
								</template>

								<span>{{ $t('Dashboard.update') }}</span>
							</v-tooltip>

							<v-tooltip top color="danger">
								<template v-slot:activator="{ on, attrs }">
									<v-btn
										@click="deleteProp(item.id)"
										:disabled="$store.state.CREATED_TRANSFER_ID === null || TYPE === 'Read'"
										color="primary"
										large
										dark
										v-bind="attrs"
										v-on="on"
										icon
										depressed
										class="
                                            border-all
                                            pa-1
                                            rounded-circle
                                            d-flex
                                            align-center
                                            justify-center
                                            outline-transparent
                                            mr-4
                                            transition-fast-out-slow-in
                                        "
									>
										<trash2-icon size="1.3x" class="text-white d-block"></trash2-icon>
									</v-btn>
								</template>

								<span>{{ $t('Dashboard.delete') }}</span>
							</v-tooltip>
						</div>
					</div>
				</v-col>
			</v-row>
		</template>

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

			<template v-if="!isPropCreated">
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
import FileUpload from "../../../../BaseComponents/FileUpload";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import { Edit2Icon, Trash2Icon, PlusCircleIcon } from "vue-feather-icons";

export default {
	name: "TransferProp",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		FileUpload,
		SendButton,
		GoBackButton,
		Edit2Icon,
		Trash2Icon,
		PlusCircleIcon
	},
	data() {
		return {
			tab1: null,
			transferFile: null,
			transferPropModel: {
				property_uz: "",
				property_ru: "",
				property_en: "",
				icon: null
			},
			transferPropList: [],
			isPropCreated: false
		};
	},
	mounted() {
		if (this.$route.params.id) {
			this.getAll();
		}
	},
	methods: {
		/*
		 *
		 * */
		getAll() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/transfer/${this.$route.params.id}/property/`).then(({ data }) => {
				this.transferPropList = data.results;
			});
		},
		/*
		 *
		 * */
		send() {
			if (
				this.transferPropModel.property_uz === "" ||
				this.transferPropModel.property_ru === "" ||
				this.transferPropModel.property_en === "" ||
				this.transferFile === null
			) {
				this.$toast.warning(`Field to'ldirilishi shart`);

				return void 0;
			}

			this.transferPropModel.icon = this.transferFile.id;

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/transfer/${this.$store.state.CREATED_TRANSFER_ID}/property/`, this.transferPropModel)
				.then(({ data }) => {
					this.$toast.success(`Yaratildi`);

					this.transferPropModel = data

					this.isPropCreated = true;
				})
				.catch((err) => {
					this.$toast.error(`Yaratishda xatolik`);
				});
		},

		/*
		 *
		 * */
		update() {
			if (!this.transferPropModel.hasOwnProperty("id")) {
				this.$toast.warning(`Field to'ldirilishi shart`);

				return void 0;
			}

			this.transferPropModel.icon = this.transferFile.id;

			if(this.$route.params.id) {
				this.$store.state.CREATED_TRANSFER_ID = this.$route.params.id
			}

			this.$http
				.put(
					`/${this.$store.state.auth.COMPANY_ID}/transfer/${this.$store.state.CREATED_TRANSFER_ID}/property/${this.transferPropModel.id}/`,
					this.transferPropModel
				)
				.then((res) => {
					this.$toast.success(`Yangilandi`);

				})
				.catch((err) => {
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
		propUpdate(item) {
			this.transferPropModel = { ...item };
			this.transferFile = { ...item.icon };
		},

		/*
		 *
		 * */
		deleteProp(id) {
			if (!confirm(`O'chirishni xoxlaysizmi ?`)) {
				return void 0;
			}

			this.$http
				.delete(`/${this.$store.state.auth.COMPANY_ID}/transfer/${this.$route.params.id}/property/${id}/`)
				.then((res) => {
					this.$toast.success(`O'chirildi`);

					this.getAll();
				})
				.catch((err) => {
					this.$toast.error(`O'chirishda xatolik`);
				});
		},

		resetFields() {
			const { transferFile } = this.$refs;

			this.transferPropModel = {};
			this.transferFile = null;

			transferFile.file = [];
		}
	}
};
</script>

<style></style>
