<template>
	<div class="form-wrap-body">
		<v-row>
			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.credits.name') }} <span
						class="font-700 text-small">(UZ)</span></h5>

					<v-text-field
						v-model="$v.creditModel.title_uz.$model"
						:error="$v.creditModel.title_uz.$error"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.credits.name') }} <span
						class="font-700 text-small">(RU)</span></h5>

					<v-text-field
						v-model="$v.creditModel.title_ru.$model"
						:error="$v.creditModel.title_ru.$error"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.credits.name') }} <span
						class="font-700 text-small">(EN)</span></h5>

					<v-text-field
						v-model="$v.creditModel.title_en.$model"
						:error="$v.creditModel.title_en.$error"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="12">
				<div class="admin-tabs mb-1">
					<v-tabs
						height="56"
						v-model="tab1"
						hide-slider
						class="mb-0 mb-5"
					>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">{{
									$t('Dashboard.credits.description')
								}} <span class="font-700 text-small">(UZ)</span></h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">{{
									$t('Dashboard.credits.description')
								}} <span class="font-700 text-small">(RU)</span></h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">{{
									$t('Dashboard.credits.description')
								}} <span class="font-700 text-small">(EN)</span></h5>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab1">
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="creditModel.description_uz"
									:disabled="TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>

						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="creditModel.description_ru"
									:disabled="TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="creditModel.description_en"
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
					<v-tabs
						height="56"
						v-model="tab2"
						hide-slider
						class="mb-0 mb-5"
					>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">{{
									$t('Dashboard.credits.loan_amount')
								}} <span class="font-700 text-small">(UZ)</span></h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">{{
									$t('Dashboard.credits.loan_amount')
								}} <span class="font-700 text-small">(RU)</span></h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">{{
									$t('Dashboard.credits.loan_amount')
								}} <span class="font-700 text-small">(EN)</span></h5>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab2">
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="creditModel.max_amount_uz"
									:disabled="TYPE === 'Read'"
									class="edit-height-100"
								>
								</quill-editor>
							</div>
						</v-tab-item>

						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="creditModel.max_amount_ru"
									:disabled="TYPE === 'Read'"
									class="edit-height-100"
								>
								</quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="creditModel.max_amount_en"
									:disabled="TYPE === 'Read'"
									class="edit-height-100"
								>
								</quill-editor>
							</div>
						</v-tab-item>
					</v-tabs-items>
				</div>
			</v-col>

			<v-col md="12">
				<div class="admin-tabs">
					<v-tabs
						height="56"
						v-model="tab3"
						hide-slider
						class="mb-0 mb-5"
					>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">{{
									$t('Dashboard.credits.period')
								}} <span class="font-700 text-small">(UZ)</span></h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">{{
									$t('Dashboard.credits.period')
								}} <span class="font-700 text-small">(RU)</span></h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">{{
									$t('Dashboard.credits.period')
								}} <span class="font-700 text-small">(EN)</span></h5>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab3">
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="creditModel.credit_period"
									:disabled="TYPE === 'Read'"
									class="edit-height-100"
								>
								</quill-editor>
							</div>
						</v-tab-item>

						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="creditModel.credit_period_ru"
									:disabled="TYPE === 'Read'"
									class="edit-height-100"
								>
								</quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="creditModel.credit_period_en"
									:disabled="TYPE === 'Read'"
									class="edit-height-100"
								>
								</quill-editor>
							</div>
						</v-tab-item>
					</v-tabs-items>
				</div>
			</v-col>

			<v-col md="4">
				<app-tree-select
					v-model="treeID"
					:disabled="TYPE === 'Read'"
				/>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.credits.initial_fee') }}</h5>

					<v-text-field
						v-model="creditModel.credit_initial_fee"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.credits.bhm') }}</h5>

					<v-text-field
						v-model="creditModel.bhm"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<file-upload
					ref="creditFile"
					@emit:up="upload"
					:value="creditFile"
					:disabled="TYPE === 'Read'"
					:label="$t('Dashboard.upload_file')"
				/>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.credits.is_available') }}</h5>

					<v-switch
						v-model="creditModel.is_available"
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
			<go-back-button/>

			<template v-if="TYPE !== 'Read'">
				<send-button
					@emit:up="update"
					:text="$t('Dashboard.update')"
				/>
			</template>
		</template>

		<template v-else>
			<go-back-button/>

			<template v-if="!isCreated">
				<send-button @emit:up="send" :text="$t('Dashboard.add_new')"/>
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
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import FileUpload from "../../../../BaseComponents/FileUpload";
import {ChevronDownIcon} from 'vue-feather-icons'
import {required} from "vuelidate/lib/validators";

export default {
	name: "CreditOptional",
	props: {
		TYPE: {
			type: String,
			default: ''
		}
	},
	components: {
		AppTreeSelect,
		SendButton,
		GoBackButton,
		FileUpload,
		ChevronDownIcon
	},
	data() {
		return {
			tab1: null,
			tab2: null,
			tab3: null,
			treeID: null,
			creditModel: {
				title_uz: "",
				title_ru: "",
				title_en: "",
				description_uz: "",
				description_ru: "",
				description_en: "",
				max_amount_uz: "",
				max_amount_ru: "",
				max_amount_en: "",
				image: null,
				is_available: true,
				category: null,
				credit_period: "",
				credit_period_ru: "",
				credit_period_en: "",
				credit_initial_fee: "",
				bhm: ""
			},
			categoryList: [],
			creditFile: null,
			isCreated: false
		}
	},
	validations: {
		creditModel: {
			title_uz: {required},
			title_ru: {required},
			title_en: {required}
		},
	},
	mounted() {
		if (this.$route.params.id) {
			this.getOne()
		}
	},
	methods: {
		/*
		*
		* */
		send() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(`Field to'ldirilishi shart`)

				return;
			}

			this.creditModel.image = this.creditFile.id
			this.creditModel.category = this.treeID

			this.$http.post('/1/credit/', this.creditModel)
				.then(({data}) => {
					this.$toast.success(`Kredit yaratildi`)

					this.$store.state.CREATED_CREDIT_ID = data.id

					this.isCreated = true
				})
		},

		/*
		*
		* */
		getOne() {
			this.$store.state.CREATED_CREDIT_ID = this.$route.params.id

			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/`)
				.then(({data}) => {
					this.creditModel = data
					this.creditFile = data.image
					this.treeID = this.creditModel.category.id
				})
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

			this.creditModel.category = this.treeID
			this.creditModel.image = this.creditFile.id

			if (this.$route.params.id) {
				this.$store.state.CREATED_CREDIT_ID = this.$route.params.id
			}

			this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/`, this.creditModel)
				.then(({data}) => {
					this.$toast.success(`Kredit yangilandi`)
				})
				.catch(err => {
					this.$toast.error(`Yangilashda xatolik`)
				})
		},

		/*
		*
		* */
		upload(file) {
			this.creditFile = file
		}
	}
}
</script>

<style>

</style>
