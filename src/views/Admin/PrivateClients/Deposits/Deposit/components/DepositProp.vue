<template>
	<div class="form-wrap-body">
		<v-row>
			<template v-if="$store.state.CREATED_DEPOSIT_ID === null">
				<v-col md="12">
					<v-alert type="error">{{ $t('Dashboard.deposit.deposit_error_alert') }}</v-alert>
				</v-col>
			</template>

			<v-col md="4">
				{{ this.depositPropModel.id }}
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						{{ $t('Dashboard.deposit.deposit_title') }} <span class="font-700 text-small">(UZ)</span>
					</h5>

					<v-text-field
						v-model="depositPropModel.property_title_uz"
						:readonly="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						{{ $t('Dashboard.deposit.deposit_title') }} <span class="font-700 text-small">(RU)</span>
					</h5>

					<v-text-field
						v-model="depositPropModel.property_title_ru"
						:readonly="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						{{ $t('Dashboard.deposit.deposit_title') }} <span class="font-700 text-small">(EN)</span>
					</h5>

					<v-text-field
						v-model="depositPropModel.property_title_en"
						:readonly="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
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
								{{ $t('Dashboard.deposit.description') }} <span class="font-700 text-small">(UZ)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t('Dashboard.deposit.description') }} <span class="font-700 text-small">(RU)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t('Dashboard.deposit.description') }} <span class="font-700 text-small">(EN)</span>
							</h5>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab1">
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="depositPropModel.description_uz"
									:disabled="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>

						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="depositPropModel.description_ru"
									:disabled="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="depositPropModel.description_en"
									:disabled="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
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
								{{ $t('Dashboard.terms_and_condition') }} <span class="font-700 text-small">(UZ)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t('Dashboard.terms_and_condition') }} <span class="font-700 text-small">(RU)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t('Dashboard.terms_and_condition') }} <span class="font-700 text-small">(EN)</span>
							</h5>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab2">
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="depositPropModel.condition_uz"
									:disabled="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>

						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="depositPropModel.condition_ru"
									:disabled="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="depositPropModel.condition_en"
									:disabled="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>
					</v-tabs-items>
				</div>
			</v-col>

			<v-col md="12">
				<div class="admin-tabs">
					<v-tabs height="56" v-model="tab3" hide-slider class="mb-0 mb-5">
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t('Dashboard.credits.interest_rate') }} <span class="font-700 text-small">(UZ)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t('Dashboard.credits.interest_rate') }} <span class="font-700 text-small">(RU)</span>
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t('Dashboard.credits.interest_rate') }} <span class="font-700 text-small">(EN)</span>
							</h5>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab3">
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="depositPropModel.interest_rates_uz"
									:disabled="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>

						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="depositPropModel.interest_rates_ru"
									:disabled="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="depositPropModel.interest_rates_en"
									:disabled="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>
					</v-tabs-items>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.deposit.deposit_amount') }}</h5>

					<v-text-field
						v-model.number="depositPropModel.amount"
						:readonly="$store.state.CREATED_DEPOSIT_ID === null || TYPE === 'Read'"
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
					:value="depositPropFile"
					:disabled="!$store.state.CREATED_DEPOSIT_ID || TYPE === 'Read'"
					:label="$t('Dashboard.upload_file')"
				/>
			</v-col>
		</v-row>

		<template v-if="TYPE !== 'Create' && TYPE !== 'Update' ">
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
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import FileUpload from "../../../../BaseComponents/FileUpload";
import { PlusCircleIcon, Trash2Icon, Edit2Icon } from "vue-feather-icons";

export default {
	name: "DepositProp",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		SendButton,
		GoBackButton,
		FileUpload,
		PlusCircleIcon,
		Trash2Icon,
		Edit2Icon
	},
	data() {
		return {
			tab1: null,
			tab2: null,
			tab3: null,
			depositPropModel: {
				property_title_uz: "",
				property_title_ru: "",
				property_title_en: "",
				description_uz: "",
				description_ru: "",
				description_en: "",
				property_image: null,
				amount: null,
				condition_uz: "",
				condition_ru: "",
				condition_en: "",
				interest_rates_uz: "",
				interest_rates_ru: "",
				interest_rates_en: ""
			},
			depositPropFile: null,
			isCreated: false
		};
	},
	mounted() {
		if (this.$route.params.id) {
			this.getOneProp();
		}
	},
	methods: {
		/*
		 *
		 * */
		send() {
			this.depositPropModel.property_image = this.depositPropFile.id;


			this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/deposit/${this.$store.state.CREATED_DEPOSIT_ID}/property/`, this.depositPropModel)
				.then(({ data }) => {
					this.$toast.success(`Yaratildi`);

					this.depositPropModel = data

					this.isCreated = true
			})
			.catch((err) => {
				this.$toast.error(`Yaratishda xatolik`);
			});
		},
		/*
		 *
		 * */
		getOneProp() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/deposit/${this.$store.state.CREATED_DEPOSIT_ID}/property/`).then(({ data }) => {
				if (data.results.length > 0){
					this.depositPropModel = data.results[0]
					this.isCreated = true
				}
				else {
					this.depositPropModel = {}
					this.isCreated = false
				}

				this.depositPropFile = this.depositPropModel.property_image;
			});
		},

		/*
		 *
		 * */
		upload(file) {
			this.depositPropFile = file;
		},

		/*
		 *
		 * */
		update() {
			this.depositPropModel.property_image = this.depositPropFile.id;

			if(this.$route.params.id) {
				this.$store.state.CREATED_DEPOSIT_ID = this.$route.params.id
			}

			this.$http
				.put(
					`/${this.$store.state.auth.COMPANY_ID}/deposit/${this.$store.state.CREATED_DEPOSIT_ID}/property/${this.depositPropModel.id}/`,
					this.depositPropModel
				)
				.then((res) => {
					this.$toast.success(`Yangilandi`);

					this.getOneProp();
				})
				.catch((err) => {
					this.$toast.error(`Yaratishda xatolik`);
				});
		}
	}
};
</script>

<style></style>
